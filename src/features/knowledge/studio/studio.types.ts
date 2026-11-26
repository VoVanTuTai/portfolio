export interface TelemetryChip {
  id: string;
  label: string;
  value: string;
  level?: "good" | "warn" | "crit" | "blue" | "default";
  iconName?: "clock" | "activity" | "cpu" | "database" | "server" | "layers" | "shield" | "check" | "zap";
}

export interface StudioStep {
  id: string;
  number: number;
  title: string;
  category: "BỐI CẢNH" | "LÝ THUYẾT" | "THỰC THI" | "NGHIỆP VỤ BA" | "TỐI ƯU";
  categoryColor?: "blue" | "emerald" | "amber" | "violet" | "rose";
  headline: string;
  bodyHtml: string;
  keyTakeaway: {
    title: string;
    body: string;
  };
  telemetry: TelemetryChip[];
  checklistItems: Array<{ id: string; text: string }>;
  nextButtonLabel: string;
}

export interface StudioLesson {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  moduleCode: string;
  moduleTitle: string;
  durationMinutes: number;
  difficulty: "Cơ bản" | "Trung cấp" | "Nâng cao";
  steps: StudioStep[];
}

export interface StudioModule {
  id: string;
  code: string;
  title: string;
  color: string;
  lessons: Array<{
    id: string;
    slug: string;
    title: string;
    durationMinutes: number;
    completed?: boolean;
    isActive?: boolean;
  }>;
}

export interface StudioConcept {
  id: string;
  term: string;
  category: string;
  definition: string;
  lessonSlug: string;
  stepIndex: number;
}
