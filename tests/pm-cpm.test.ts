import { describe, expect, it } from "vitest";
import type { GanttTask } from "@/types";
import { ganttTasks } from "@/data/pm.data";
import {
  calculateCpmSchedule,
  filterGanttTasks,
  getTaskBarPosition,
  parsePredecessorCodes,
  summarizePmSchedule,
  validateTaskDependencies,
} from "@/utils/pm-cpm";

function makeSyntheticTask(
  overrides: Partial<GanttTask> & Pick<GanttTask, "id" | "wbs" | "startWeek" | "durationWeeks">,
): GanttTask {
  return {
    stream: "Test Stream",
    streamEn: "Test Stream",
    streamColor: "#2563eb",
    title: overrides.wbs,
    titleEn: overrides.wbs,
    progress: 100,
    isCritical: false,
    isMilestone: false,
    isSprint: false,
    owner: "PM",
    raci: { r: "PM", a: "Sponsor", c: "Tech Lead", i: "Team" },
    deliverable: "Artifact",
    deliverableEn: "Artifact",
    dod: "Done",
    dodEn: "Done",
    pmNote: "Note",
    pmNoteEn: "Note",
    ...overrides,
  };
}

describe("PM & CPM Schedule Engine", () => {
  describe("Portfolio WBS dataset integrity", () => {
    it("validates all WBS predecessor links with zero missing references or cycles", () => {
      const validation = validateTaskDependencies(ganttTasks);
      expect(validation.valid).toBe(true);
      expect(validation.missingRefs).toEqual([]);
      expect(validation.hasCycle).toBe(false);
      expect(validation.topologicalOrder).toHaveLength(ganttTasks.length);
    });

    it("summarizes story points, sprint velocity, critical path count, and milestones", () => {
      const summary = summarizePmSchedule(ganttTasks);
      expect(summary.totalTasks).toBe(ganttTasks.length);
      expect(summary.sprintCount).toBe(4);
      expect(summary.totalStoryPoints).toBe(190);
      expect(summary.averageSprintVelocity).toBe(48);
      expect(summary.milestoneCount).toBe(3);
      expect(summary.criticalCount).toBeGreaterThanOrEqual(7);
      expect(summary.criticalWbs).toEqual(
        expect.arrayContaining(["1.1", "1.2", "1.3", "M1", "2.3", "M2", "5.1", "M3"]),
      );
    });

    it("filters tasks cleanly across all four Gantt filter modes", () => {
      expect(filterGanttTasks(ganttTasks, "all")).toHaveLength(ganttTasks.length);

      const critical = filterGanttTasks(ganttTasks, "critical");
      expect(critical.length).toBeGreaterThan(0);
      expect(critical.every((t) => t.isCritical)).toBe(true);

      const sprints = filterGanttTasks(ganttTasks, "sprint");
      expect(sprints).toHaveLength(4);
      expect(sprints.every((t) => t.isSprint)).toBe(true);

      const milestones = filterGanttTasks(ganttTasks, "milestone");
      expect(milestones.map((m) => m.wbs)).toEqual(["M1", "M2", "M3"]);
      expect(milestones.every((m) => m.isCritical)).toBe(true);
    });

    it("calculates clamped Gantt bar geometry within the 12-week timeline", () => {
      const first = getTaskBarPosition(ganttTasks[0]);
      expect(first.leftPercent).toBe(0);
      expect(first.widthPercent).toBeCloseTo((1 / 12) * 100, 3);
      expect(first.endWeek).toBe(2);

      const hypercare = ganttTasks.find((t) => t.id === "wbs-5.2")!;
      const hypercareGeo = getTaskBarPosition(hypercare);
      expect(hypercareGeo.leftPercent).toBeGreaterThan(80);
      expect(hypercareGeo.leftPercent + hypercareGeo.widthPercent).toBeLessThanOrEqual(100.0001);
    });

    it("solves forward/backward CPM pass over the portfolio WBS DAG cleanly", () => {
      const result = calculateCpmSchedule(ganttTasks);
      expect(result.totalDuration).toBeGreaterThan(0);
      expect(result.nodes).toHaveLength(ganttTasks.length);
      expect(result.nodes.every((n) => n.totalSlack >= 0)).toBe(true);
      expect(result.criticalPathWbs.length).toBeGreaterThan(0);
    });
  });

  describe("CPM algorithm & edge cases", () => {
    it("parses single and comma-separated WBS predecessors", () => {
      expect(parsePredecessorCodes(undefined)).toEqual([]);
      expect(parsePredecessorCodes("WBS 1.1")).toEqual(["1.1"]);
      expect(parsePredecessorCodes("WBS 1.2, WBS 1.3")).toEqual(["1.2", "1.3"]);
    });

    it("identifies exact zero-slack critical path and non-zero slack on parallel branch", () => {
      const diamond: GanttTask[] = [
        makeSyntheticTask({ id: "t1", wbs: "A", startWeek: 1, durationWeeks: 2 }),
        makeSyntheticTask({
          id: "t2",
          wbs: "B",
          startWeek: 3,
          durationWeeks: 5,
          predecessor: "WBS A",
        }),
        makeSyntheticTask({
          id: "t3",
          wbs: "C",
          startWeek: 3,
          durationWeeks: 2,
          predecessor: "WBS A",
        }),
        makeSyntheticTask({
          id: "t4",
          wbs: "D",
          startWeek: 8,
          durationWeeks: 3,
          predecessor: "WBS B, WBS C",
        }),
      ];

      const cpm = calculateCpmSchedule(diamond);
      expect(cpm.totalDuration).toBe(10);
      expect(cpm.criticalPathWbs).toEqual(["A", "B", "D"]);

      const branchC = cpm.nodes.find((n) => n.wbs === "C")!;
      expect(branchC.earlyStart).toBe(2);
      expect(branchC.earlyFinish).toBe(4);
      expect(branchC.lateStart).toBe(5);
      expect(branchC.lateFinish).toBe(7);
      expect(branchC.totalSlack).toBe(3);
      expect(branchC.isZeroSlack).toBe(false);
    });

    it("rejects cyclic WBS graphs and missing predecessor references", () => {
      const cyclic: GanttTask[] = [
        makeSyntheticTask({ id: "t1", wbs: "1.1", startWeek: 1, durationWeeks: 1, predecessor: "WBS 1.2" }),
        makeSyntheticTask({ id: "t2", wbs: "1.2", startWeek: 2, durationWeeks: 1, predecessor: "WBS 1.1" }),
      ];
      expect(validateTaskDependencies(cyclic).hasCycle).toBe(true);
      expect(() => calculateCpmSchedule(cyclic)).toThrow(/cyclic/i);

      const missingRef: GanttTask[] = [
        makeSyntheticTask({ id: "t1", wbs: "1.1", startWeek: 1, durationWeeks: 1, predecessor: "WBS 9.9" }),
      ];
      const check = validateTaskDependencies(missingRef);
      expect(check.valid).toBe(false);
      expect(check.missingRefs).toEqual([{ taskId: "t1", missingCode: "9.9" }]);
      expect(() => calculateCpmSchedule(missingRef)).toThrow(/missing predecessor/i);
    });
  });
});

