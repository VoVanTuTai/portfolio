import { type ReactNode } from "react";
import {
  Activity,
  Clock,
  Cpu,
  Database,
  Layers,
  Server,
  Shield,
} from "lucide-react";
import type { StudioLesson, StudioStep, TelemetryChip } from "./studio.types";
import styles from "./StudioLayout.module.css";

interface StudioStageProps {
  lesson: StudioLesson;
  currentStepIndex: number;
  onStepChange: (index: number) => void;
  canvasSlot?: ReactNode;
}

function renderTelemetryIcon(iconName?: TelemetryChip["iconName"]) {
  switch (iconName) {
    case "clock":
      return <Clock size={12} />;
    case "activity":
      return <Activity size={12} />;
    case "cpu":
      return <Cpu size={12} />;
    case "database":
      return <Database size={12} />;
    case "server":
      return <Server size={12} />;
    case "layers":
      return <Layers size={12} />;
    case "shield":
      return <Shield size={12} />;
    default:
      return <Activity size={12} />;
  }
}

export function StudioStage({
  lesson,
  currentStepIndex,
  onStepChange,
  canvasSlot,
}: StudioStageProps) {
  const currentStep: StudioStep = lesson.steps[currentStepIndex] || lesson.steps[0];
  const totalSteps = lesson.steps.length;
  const progressPercent = totalSteps > 1
    ? Math.round((currentStepIndex / (totalSteps - 1)) * 100)
    : 100;

  return (
    <main className={styles.studioStage}>
      {/* 1. Lesson Header */}
      <div className={styles.lessonHeaderBlock}>
        <div className={styles.breadcrumbRow}>
          <span>{lesson.moduleCode}. {lesson.moduleTitle}</span>
          <span> / </span>
          <span>Bài {lesson.id}</span>
        </div>

        <h1 className={styles.lessonHeading}>{lesson.title}</h1>
        <p className={styles.lessonSubtitle}>{lesson.subtitle}</p>

        <div className={styles.metaBadgesRow}>
          <span className={styles.metaBadge}>
            <Clock size={11} /> {lesson.durationMinutes} phút
          </span>
          <span className={styles.metaBadge}>
            <Layers size={11} /> {lesson.difficulty}
          </span>
          <span className={styles.metaBadge}>
            <Activity size={11} /> {totalSteps} bước mô phỏng
          </span>
        </div>
      </div>

      {/* 2. Telemetry HUD Bar */}
      <div className={styles.telemetryHudBar} aria-label="Chỉ số Telemetry thời gian thực">
        {currentStep.telemetry.map((chip) => (
          <div
            key={chip.id}
            className="studio-chip"
            data-level={chip.level || "default"}
          >
            <span className="studio-chip__label">
              {renderTelemetryIcon(chip.iconName)}
              {chip.label}
            </span>
            <span className="studio-chip__value">{chip.value}</span>
          </div>
        ))}
      </div>

      {/* 3. Interactive Canvas Frame */}
      <section className={styles.interactiveCanvasCard} aria-label="Khung mô phỏng tương tác 2.5D">
        <div className={styles.canvasInnerStage}>
          {canvasSlot || (
            <div style={{ textAlign: "center", color: "var(--studio-muted)" }}>
              <p style={{ margin: 0, fontFamily: "var(--studio-font-mono)", fontSize: 13 }}>
                [Sơ đồ mô phỏng kiến trúc 2.5D & luồng gói tin chuyển động]
              </p>
            </div>
          )}
        </div>

        <div className={styles.canvasLegendRow}>
          <span>
            <span className={`${styles.legendDot} ${styles.blue}`} /> Yêu cầu (Request)
          </span>
          <span>
            <span className={`${styles.legendDot} ${styles.emerald}`} /> Phản hồi (Response)
          </span>
          <span>
            <span className={`${styles.legendDot} ${styles.amber}`} /> Hàng đợi xử lý (Queue)
          </span>
          <span>
            <span className={`${styles.legendDot} ${styles.rose}`} /> Chặn trùng lặp (Blocked)
          </span>
        </div>
      </section>

      {/* 4. Timeline Scrubber (Trong bài này) */}
      <section className={styles.timelineScrubberCard} aria-label="Thanh điều khiển bước trong bài này">
        <div className={styles.scrubberHeadRow}>
          <span className={styles.scrubberTitle}>TRONG BÀI NÀY</span>
          <span className={styles.scrubberStepCounter}>
            Bước {currentStepIndex + 1} / {totalSteps}
          </span>
        </div>

        <div className={styles.scrubberTrack}>
          <div className={styles.scrubberConnectingLine}>
            <div
              className={styles.scrubberConnectingProgress}
              style={{ width: `${progressPercent}%` }}
            />
          </div>

          {lesson.steps.map((step, idx) => {
            const isActive = idx === currentStepIndex;
            const isDone = idx < currentStepIndex;

            return (
              <button
                key={step.id}
                type="button"
                className={`${styles.scrubberStepNode} ${isActive ? styles.isActive : ""} ${isDone ? styles.isDone : ""}`}
                onClick={() => onStepChange(idx)}
                title={`Chuyển đến: ${step.title}`}
              >
                <div className={styles.scrubberStepCircle}>
                  {idx + 1}
                </div>
                <span className={styles.scrubberStepLabel}>
                  {step.title}
                </span>
              </button>
            );
          })}
        </div>
      </section>
    </main>
  );
}
