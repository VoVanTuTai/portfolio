import { useEffect, useState } from "react";
import type { NavigateHandler } from "@/types";
import type { StudioConcept, StudioLesson, StudioModule } from "./studio.types";
import { StudioTopbar } from "./StudioTopbar";
import { StudioSidebar } from "./StudioSidebar";
import { StudioStage } from "./StudioStage";
import { StudioRail } from "./StudioRail";
import { StudioSearchModal } from "./StudioSearchModal";
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
          isPlaying={isPlaying}
          onTogglePlay={() => setIsPlaying((prev) => !prev)}
          onReset={() => {
            setIsPlaying(true);
          }}
          canvasSlot={
            <div style={{ width: "100%", maxWidth: 620, padding: "20px 0" }}>
              {/* Dynamic Isometric Simulation Stage */}
              <svg
                viewBox="0 0 600 280"
                style={{ width: "100%", height: "auto", display: "block" }}
              >
                {/* Isometric Grid Floor */}
                <g stroke="rgba(14, 165, 233, 0.18)" strokeWidth="1" fill="none">
                  <path d="M 300,40 L 540,160 L 300,280 L 60,160 Z" />
                  <path d="M 300,80 L 480,170 L 300,260 L 120,170 Z" />
                  <path d="M 300,120 L 420,180 L 300,240 L 180,180 Z" />
                  <line x1="60" y1="160" x2="540" y2="160" />
                  <line x1="300" y1="40" x2="300" y2="280" />
                </g>

                {/* Left Node: Client / Shipper Device */}
                <g transform="translate(140, 160)">
                  <polygon
                    points="0,-18 36,0 0,18 -36,0"
                    fill="#ffffff"
                    stroke="#0284c7"
                    strokeWidth="2"
                    style={{ filter: "drop-shadow(1.5px 2.5px 0 #0f172a)" }}
                  />
                  <text
                    x="0"
                    y="4"
                    textAnchor="middle"
                    fontFamily="var(--studio-font-mono)"
                    fontSize="10"
                    fontWeight="800"
                    fill="#0f172a"
                  >
                    Shipper App
                  </text>
                  <text
                    x="0"
                    y="32"
                    textAnchor="middle"
                    fontFamily="var(--studio-font-mono)"
                    fontSize="9.5"
                    fill="#0284c7"
                    fontWeight="700"
                  >
                    1.200 yêu cầu/s
                  </text>
                </g>

                {/* Animated Packet Flow Line */}
                <path
                  d="M 176,160 Q 300,120 380,100"
                  stroke="#0284c7"
                  strokeWidth="2.5"
                  strokeDasharray="6 6"
                  fill="none"
                >
                  {isPlaying && (
                    <animate
                      attributeName="stroke-dashoffset"
                      values="24;0"
                      dur="1s"
                      repeatCount="indefinite"
                    />
                  )}
                </path>

                {/* Right Top Node: Ingestion API Gateway */}
                <g transform="translate(420, 100)">
                  <polygon
                    points="0,-24 48,0 0,24 -48,0"
                    fill="#ffffff"
                    stroke="#2563eb"
                    strokeWidth="2.5"
                    style={{ filter: "drop-shadow(1.5px 2.5px 0 #0f172a)" }}
                  />
                  <polygon
                    points="-48,0 0,24 0,48 -48,24"
                    fill="#eff6ff"
                    stroke="#2563eb"
                    strokeWidth="1.5"
                  />
                  <polygon
                    points="0,24 48,0 48,24 0,48"
                    fill="#dbeafe"
                    stroke="#2563eb"
                    strokeWidth="1.5"
                  />
                  <text
                    x="0"
                    y="3"
                    textAnchor="middle"
                    fontFamily="var(--studio-font-mono)"
                    fontSize="10.5"
                    fontWeight="850"
                    fill="#0f172a"
                  >
                    API Gateway
                  </text>
                  <text
                    x="0"
                    y="-32"
                    textAnchor="middle"
                    fontFamily="var(--studio-font-mono)"
                    fontSize="9"
                    fontWeight="800"
                    fill="#2563eb"
                  >
                    [NestJS · Idempotent]
                  </text>
                </g>

                {/* Bottom Node: RabbitMQ Message Queue Buffer */}
                <g transform="translate(360, 210)">
                  <polygon
                    points="0,-20 40,0 0,20 -40,0"
                    fill="#ffffff"
                    stroke="#6366f1"
                    strokeWidth="2"
                    style={{ filter: "drop-shadow(1.5px 2.5px 0 #0f172a)" }}
                  />
                  <text
                    x="0"
                    y="4"
                    textAnchor="middle"
                    fontFamily="var(--studio-font-mono)"
                    fontSize="10"
                    fontWeight="800"
                    fill="#4338ca"
                  >
                    RabbitMQ
                  </text>
                  <text
                    x="0"
                    y="32"
                    textAnchor="middle"
                    fontFamily="var(--studio-font-mono)"
                    fontSize="9"
                    fontWeight="750"
                    fill="#6366f1"
                  >
                    Queue: 142 đơn
                  </text>
                </g>

                {/* Packet Animated Dot */}
                {isPlaying && (
                  <circle r="5" fill="#06b6d4" stroke="#ffffff" strokeWidth="1.5">
                    <animateMotion
                      path="M 176,160 Q 300,120 380,100"
                      dur="1.2s"
                      repeatCount="indefinite"
                    />
                  </circle>
                )}
              </svg>
            </div>
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
