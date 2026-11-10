export interface LearningPathItem {
  number: string;
  path: string;
  title: string;
  description: string;
  meta: string;
}

export type CodeLanguageId = "typescript" | "java" | "php" | "python" | "go";

export interface CodeSnippetSpec {
  fileName: string;
  languageLabel: string;
  code: string;
  paradigm: string;
  typeMechanism: string;
  runtimeEngine: string;
  invariants: string;
}

export type FaqCategory = "all" | "runtime" | "memory" | "types" | "concurrency";

export interface InterviewFaqItem {
  category: Exclude<FaqCategory, "all">;
  categoryLabel: string;
  question: string;
  answer: string;
}

export interface ChecklistItem {
  title: string;
  desc: string;
}

export type HttpStatusRow = readonly [code: string, title: string, description: string];

export interface BaConceptItem {
  question: string;
  answer: string;
}
