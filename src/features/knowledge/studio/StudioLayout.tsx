import { useEffect, useState } from "react";
import type { NavigateHandler } from "@/types";
import type { StudioConcept, StudioLesson, StudioModule } from "./studio.types";
import { StudioTopbar } from "./StudioTopbar";
import { StudioSidebar } from "./StudioSidebar";
import { StudioStage } from "./StudioStage";
import { StudioRail } from "./StudioRail";
import { StudioSearchModal } from "./StudioSearchModal";
import { StudioSimulationCanvas } from "./StudioSimulationCanvas";
import styles from "./StudioLayout.module.css";

interface StudioLayoutProps {
  navigate: NavigateHandler;
  modules: StudioModule[];
  lesson: StudioLesson;
  concepts: StudioConcept[];
  onSelectLesson?: (slug: string) => void;
  activeNavTab?: "studio" | "projects" | "pm" | "cv";
}

export function StudioLayout({
  navigate,
  modules,
  lesson,
  concepts,
  onSelectLesson = () => {},
  activeNavTab = "studio",
}: StudioLayoutProps) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const totalSteps = lesson.steps.length;
  const currentStep = lesson.steps[currentStepIndex] || lesson.steps[0];
  const hasPrev = currentStepIndex > 0;
  const hasNext = currentStepIndex < totalSteps - 1;

  const totalLessons = modules.reduce((sum, m) => sum + m.lessons.length, 0);
  const completedLessons = modules.reduce(
    (sum, m) => sum + m.lessons.filter((l) => l.completed).length,
    0,
  );

  // Reset step index when active lesson changes
  useEffect(() => {
    setCurrentStepIndex(0);
  }, [lesson.slug]);

  // Global Keyboard Shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore if user is typing in an input
      if (
        document.activeElement?.tagName === "INPUT" ||
        document.activeElement?.tagName === "TEXTAREA"
      ) {
        return;
      }

      if (e.key === "ArrowRight" && hasNext) {
        e.preventDefault();
        setCurrentStepIndex((prev) => Math.min(totalSteps - 1, prev + 1));
      } else if (e.key === "ArrowLeft" && hasPrev) {
        e.preventDefault();
        setCurrentStepIndex((prev) => Math.max(0, prev - 1));
      } else if (e.code === "Space") {
        e.preventDefault();
        setIsPlaying((prev) => !prev);
      } else if (e.key.toLowerCase() === "r") {
        e.preventDefault();
        setIsPlaying(true);
      } else if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [hasNext, hasPrev, totalSteps]);

  const handleNextStep = () => {
    if (hasNext) {
      setCurrentStepIndex((prev) => prev + 1);
    } else {
      // Completed lesson, loop or stay
      setCurrentStepIndex(0);
    }
  };

  const handlePrevStep = () => {
    if (hasPrev) {
      setCurrentStepIndex((prev) => prev - 1);
    }
  };

  const handleSelectConcept = (concept: StudioConcept) => {
    if (concept.lessonSlug === lesson.slug) {
      setCurrentStepIndex(Math.min(totalSteps - 1, concept.stepIndex));
    } else {
      onSelectLesson(concept.lessonSlug);
    }
  };

  return (
    <div className={styles.studioShell}>
      {/* 1. Studio Topbar */}
      <StudioTopbar
        navigate={navigate}
        activeTab={activeNavTab}
        onOpenSearch={() => setIsSearchOpen(true)}
        isDrawerOpen={isDrawerOpen}
        onToggleDrawer={() => setIsDrawerOpen((prev) => !prev)}
      />

      {/* 2. Studio Workspace Grid (Sidebar + Stage + Guide Rail) */}
      <div className={styles.studioWorkspace}>
        {/* Left Sidebar */}
        <StudioSidebar
          modules={modules}
          currentLessonSlug={lesson.slug}
          onSelectLesson={(slug) => {
            onSelectLesson(slug);
            setIsDrawerOpen(false);
          }}
          isDrawerOpen={isDrawerOpen}
          totalLessonsCount={totalLessons}
          completedLessonsCount={completedLessons}
        />

        {/* Center Stage */}
        <StudioStage
          lesson={lesson}
          currentStepIndex={currentStepIndex}
          onStepChange={(idx) => setCurrentStepIndex(idx)}
          canvasSlot={
            <StudioSimulationCanvas
              lesson={lesson}
              stepIndex={currentStepIndex}
              isPlaying={isPlaying}
              onTogglePlay={() => setIsPlaying((prev) => !prev)}
              onReset={() => setIsPlaying(true)}
            />
          }
        />

        {/* Right Rail */}
        <StudioRail
          currentStep={currentStep}
          currentStepIndex={currentStepIndex}
          totalStepsCount={totalSteps}
          onPrevStep={handlePrevStep}
          onNextStep={handleNextStep}
          hasPrev={hasPrev}
          hasNext={hasNext}
        />
      </div>

      {/* Mobile Drawer Backdrop */}
      {isDrawerOpen && (
        <div
          className={styles.drawerBackdrop}
          onClick={() => setIsDrawerOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Concept Search Modal (⌘K) */}
      <StudioSearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        concepts={concepts}
        onSelectConcept={handleSelectConcept}
      />
    </div>
  );
}
