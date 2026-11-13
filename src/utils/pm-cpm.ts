import type { GanttFilter, GanttTask } from "@/types";

export interface TaskBarGeometry {
  leftPercent: number;
  widthPercent: number;
  endWeek: number;
}

export interface CpmNodeResult {
  id: string;
  wbs: string;
  durationWeeks: number;
  predecessors: string[];
  earlyStart: number;
  earlyFinish: number;
  lateStart: number;
  lateFinish: number;
  totalSlack: number;
  isZeroSlack: boolean;
}

export interface CpmScheduleResult {
  totalDuration: number;
  nodes: CpmNodeResult[];
  criticalPathWbs: string[];
}

export interface DependencyValidationResult {
  valid: boolean;
  missingRefs: Array<{ taskId: string; missingCode: string }>;
  hasCycle: boolean;
  topologicalOrder: string[];
}

export interface PmScheduleSummary {
  totalTasks: number;
  criticalCount: number;
  sprintCount: number;
  milestoneCount: number;
  totalStoryPoints: number;
  averageSprintVelocity: number;
  meanProgress: number;
  criticalWbs: string[];
}

const TOTAL_TIMELINE_WEEKS = 12;

function roundMetric(value: number): number {
  return Math.round(value * 1000) / 1000;
}

export function filterGanttTasks(
  tasks: readonly GanttTask[],
  filter: GanttFilter,
): GanttTask[] {
  switch (filter) {
    case "critical":
      return tasks.filter((task) => task.isCritical);
    case "sprint":
      return tasks.filter((task) => task.isSprint);
    case "milestone":
      return tasks.filter((task) => task.isMilestone);
    case "all":
      return [...tasks];
  }
}

export function getTaskBarPosition(
  task: Pick<GanttTask, "startWeek" | "durationWeeks">,
  totalWeeks: number = TOTAL_TIMELINE_WEEKS,
): TaskBarGeometry {
  const clampedStart = Math.max(1, Math.min(totalWeeks, task.startWeek));
  const safeDuration = Math.max(0, task.durationWeeks);
  const leftPercent = ((clampedStart - 1) / totalWeeks) * 100;
  const widthPercent = Math.min(100 - leftPercent, (safeDuration / totalWeeks) * 100);

  return {
    leftPercent,
    widthPercent,
    endWeek: roundMetric(task.startWeek + safeDuration),
  };
}

export function parsePredecessorCodes(predecessor?: string): string[] {
  if (!predecessor) return [];
  return predecessor
    .split(",")
    .map((part) => part.trim().replace(/^WBS\s+/i, "").trim())
    .filter(Boolean);
}

export function validateTaskDependencies(
  tasks: readonly GanttTask[],
): DependencyValidationResult {
  const byWbs = new Map<string, GanttTask>();
  for (const task of tasks) {
    byWbs.set(task.wbs, task);
  }

  const missingRefs: Array<{ taskId: string; missingCode: string }> = [];
  const inDegree = new Map<string, number>();
  const adjacency = new Map<string, string[]>();

  for (const task of tasks) {
    inDegree.set(task.wbs, 0);
    adjacency.set(task.wbs, []);
  }

  for (const task of tasks) {
    const preds = parsePredecessorCodes(task.predecessor);
    for (const code of preds) {
      if (!byWbs.has(code)) {
        missingRefs.push({ taskId: task.id, missingCode: code });
        continue;
      }
      adjacency.get(code)!.push(task.wbs);
      inDegree.set(task.wbs, (inDegree.get(task.wbs) ?? 0) + 1);
    }
  }

  const queue: string[] = [];
  for (const [wbs, degree] of inDegree.entries()) {
    if (degree === 0) queue.push(wbs);
  }

  const topologicalOrder: string[] = [];
  while (queue.length > 0) {
    const current = queue.shift()!;
    topologicalOrder.push(current);
    for (const next of adjacency.get(current) ?? []) {
      const nextDegree = (inDegree.get(next) ?? 0) - 1;
      inDegree.set(next, nextDegree);
      if (nextDegree === 0) queue.push(next);
    }
  }

  const hasCycle = topologicalOrder.length !== tasks.length;

  return {
    valid: missingRefs.length === 0 && !hasCycle,
    missingRefs,
    hasCycle,
    topologicalOrder,
  };
}

export function calculateCpmSchedule(
  tasks: readonly GanttTask[],
): CpmScheduleResult {
  const depCheck = validateTaskDependencies(tasks);
  if (!depCheck.valid) {
    throw new Error(
      depCheck.hasCycle
        ? "Cannot compute CPM schedule: cyclic WBS dependency detected."
        : `Cannot compute CPM schedule: missing predecessor WBS (${depCheck.missingRefs
            .map((m) => m.missingCode)
            .join(", ")}).`,
    );
  }

  const byWbs = new Map<string, GanttTask>();
  const successors = new Map<string, string[]>();
  const predsByWbs = new Map<string, string[]>();

  for (const task of tasks) {
    byWbs.set(task.wbs, task);
    successors.set(task.wbs, []);
    predsByWbs.set(task.wbs, parsePredecessorCodes(task.predecessor));
  }

  for (const task of tasks) {
    for (const pred of predsByWbs.get(task.wbs) ?? []) {
      successors.get(pred)!.push(task.wbs);
    }
  }

  const earlyStart = new Map<string, number>();
  const earlyFinish = new Map<string, number>();

  for (const wbs of depCheck.topologicalOrder) {
    const task = byWbs.get(wbs)!;
    const preds = predsByWbs.get(wbs) ?? [];
    const es =
      preds.length === 0
        ? 0
        : Math.max(...preds.map((p) => earlyFinish.get(p) ?? 0));
    const ef = es + Math.max(0, task.durationWeeks);
    earlyStart.set(wbs, roundMetric(es));
    earlyFinish.set(wbs, roundMetric(ef));
  }

  const totalDuration = roundMetric(
    Math.max(0, ...Array.from(earlyFinish.values())),
  );

  const lateStart = new Map<string, number>();
  const lateFinish = new Map<string, number>();

  for (const wbs of [...depCheck.topologicalOrder].reverse()) {
    const task = byWbs.get(wbs)!;
    const succs = successors.get(wbs) ?? [];
    const lf =
      succs.length === 0
        ? totalDuration
        : Math.min(...succs.map((s) => lateStart.get(s) ?? totalDuration));
    const ls = lf - Math.max(0, task.durationWeeks);
    lateFinish.set(wbs, roundMetric(lf));
    lateStart.set(wbs, roundMetric(ls));
  }

  const nodeMap = new Map<string, CpmNodeResult>();
  for (const task of tasks) {
    const es = earlyStart.get(task.wbs) ?? 0;
    const ef = earlyFinish.get(task.wbs) ?? 0;
    const ls = lateStart.get(task.wbs) ?? 0;
    const lf = lateFinish.get(task.wbs) ?? 0;
    const slack = roundMetric(ls - es);
    nodeMap.set(task.wbs, {
      id: task.id,
      wbs: task.wbs,
      durationWeeks: task.durationWeeks,
      predecessors: predsByWbs.get(task.wbs) ?? [],
      earlyStart: es,
      earlyFinish: ef,
      lateStart: ls,
      lateFinish: lf,
      totalSlack: slack,
      isZeroSlack: Math.abs(slack) < 1e-4,
    });
  }

  const nodes = tasks.map((t) => nodeMap.get(t.wbs)!);
  const criticalPathWbs = nodes.filter((n) => n.isZeroSlack).map((n) => n.wbs);

  return {
    totalDuration,
    nodes,
    criticalPathWbs,
  };
}

export function summarizePmSchedule(
  tasks: readonly GanttTask[],
): PmScheduleSummary {
  const criticalTasks = tasks.filter((t) => t.isCritical);
  const sprintTasks = tasks.filter((t) => t.isSprint);
  const milestoneTasks = tasks.filter((t) => t.isMilestone);

  const totalStoryPoints = sprintTasks.reduce(
    (sum, task) => sum + (task.storyPoints ?? 0),
    0,
  );
  const averageSprintVelocity =
    sprintTasks.length > 0 ? Math.round(totalStoryPoints / sprintTasks.length) : 0;

  const meanProgress =
    tasks.length > 0
      ? roundMetric(
          tasks.reduce((sum, task) => sum + task.progress, 0) / tasks.length,
        )
      : 0;

  return {
    totalTasks: tasks.length,
    criticalCount: criticalTasks.length,
    sprintCount: sprintTasks.length,
    milestoneCount: milestoneTasks.length,
    totalStoryPoints,
    averageSprintVelocity,
    meanProgress,
    criticalWbs: criticalTasks.map((t) => t.wbs),
  };
}
