import { useState, useEffect } from "react";
import type { NavigateHandler } from "@/types";
import { StudioLayout } from "./StudioLayout";
import {
  allStudioLessons,
  sampleConceptsData,
  sampleLessonData,
  studioModulesData,
} from "./studio-sample-data";

interface StudioPageProps {
  navigate: NavigateHandler;
}

export function StudioPage({ navigate }: StudioPageProps) {
  const getInitialSlug = () => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash.replace("#", "").trim();
      if (hash && allStudioLessons[hash]) return hash;
      const params = new URLSearchParams(window.location.search);
      const paramSlug = params.get("lesson");
      if (paramSlug && allStudioLessons[paramSlug]) return paramSlug;
    }
    return sampleLessonData.slug;
  };

  const [currentLessonSlug, setCurrentLessonSlug] = useState<string>(getInitialSlug);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "").trim();
      if (hash && allStudioLessons[hash]) {
        setCurrentLessonSlug(hash);
      }
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const handleSelectLesson = (slug: string) => {
    if (allStudioLessons[slug]) {
      setCurrentLessonSlug(slug);
      window.location.hash = slug;
    }
  };

  const currentLesson = allStudioLessons[currentLessonSlug] || sampleLessonData;

  // Mark active state dynamically in modules tree
  const dynamicModules = studioModulesData.map((mod) => ({
    ...mod,
    lessons: mod.lessons.map((l) => ({
      ...l,
      isActive: l.slug === currentLessonSlug,
    })),
  }));

  return (
    <StudioLayout
      navigate={navigate}
      modules={dynamicModules}
      lesson={currentLesson}
      concepts={sampleConceptsData}
      onSelectLesson={handleSelectLesson}
      activeNavTab="studio"
    />
  );
}

export default StudioPage;
