import type { StudioLesson } from "../studio.types";
export { studioModulesData } from "./modules.data";

import { mod01Lessons } from "./lessons-mod01";
import { mod02Lessons } from "./lessons-mod02";
import { mod03Lessons } from "./lessons-mod03";
import { mod04Lessons } from "./lessons-mod04";
import { mod05Lessons } from "./lessons-mod05";
import { mod06Lessons } from "./lessons-mod06";
import { mod07Lessons } from "./lessons-mod07";
import { mod08Lessons } from "./lessons-mod08";
import { mod09Lessons } from "./lessons-mod09";

export const allStudioLessonsList: StudioLesson[] = [
  ...mod01Lessons,
  ...mod02Lessons,
  ...mod03Lessons,
  ...mod04Lessons,
  ...mod05Lessons,
  ...mod06Lessons,
  ...mod07Lessons,
  ...mod08Lessons,
  ...mod09Lessons,
];

export const allStudioLessons: Record<string, StudioLesson> = allStudioLessonsList.reduce(
  (acc, lesson) => {
    acc[lesson.slug] = lesson;
    return acc;
  },
  {} as Record<string, StudioLesson>
);

export const sampleLessonData: StudioLesson = allStudioLessons["latency-throughput"] || allStudioLessonsList[0];
