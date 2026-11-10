import type { IconComponent, Language, LocalizedList, LocalizedText } from "./common.types";

export interface ProjectManagementSectionProps {
  lang: Language;
}

export type PmTabId = "lifecycle" | "gantt" | "cr-flow" | "risk-matrix";
export type GanttFilter = "all" | "critical" | "sprint" | "milestone";

export interface GanttTask {
  id: string;
  wbs: string;
  stream: string;
  streamEn: string;
  streamColor: string;
  title: string;
  titleEn: string;
  startWeek: number; // 1 to 12
  durationWeeks: number;
  progress: number;
  isCritical: boolean;
  isMilestone: boolean;
  isSprint: boolean;
  sprintLabel?: string;
  storyPoints?: number;
  owner: string;
  raci: {
    r: string;
    a: string;
    c: string;
    i: string;
  };
  predecessor?: string;
  deliverable: string;
  deliverableEn: string;
  dod: string;
  dodEn: string;
  pmNote: string;
  pmNoteEn: string;
}

export interface PmLifecycleStage {
  id: string;
  num: string;
  title: LocalizedText;
  shortTitle: LocalizedText;
  badge: LocalizedText;
  icon: IconComponent;
  color: string;
  objective: LocalizedText;
  actions: LocalizedList;
  deliverables: LocalizedList;
  tools: string[];
}

export interface PmGovernancePillar {
  badge: string;
  badgeClass: "cpm" | "wbs" | "vel";
  title: LocalizedText;
  description: LocalizedText;
}

export interface PmChangeRequestStep {
  step: number;
  tagClass: "req" | "impact" | "decision" | "exec";
  tag: LocalizedText;
  title: LocalizedText;
  description: LocalizedText;
}

export interface PmRiskItem {
  scenario: LocalizedText;
  category: LocalizedText;
  severity: LocalizedText;
  severityClass: "high" | "medium";
  impact: LocalizedText;
  mitigationLead: LocalizedText;
  mitigationDetail: LocalizedText;
}
