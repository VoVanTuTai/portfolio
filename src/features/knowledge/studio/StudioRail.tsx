import { useState } from "react";
import { ArrowLeft, ArrowRight, CheckCircle2, Lightbulb } from "lucide-react";
import type { StudioStep } from "./studio.types";
import styles from "./StudioLayout.module.css";

interface StudioRailProps {
  currentStep: StudioStep;
  currentStepIndex: number;
  totalStepsCount: number;
  onPrevStep: () => void;
  onNextStep: () => void;
  hasPrev: boolean;
  hasNext: boolean;
}

export function StudioRail({
  currentStep,
  currentStepIndex,
  totalStepsCount,
  onPrevStep,
  onNextStep,
  hasPrev,
  hasNext,
}: StudioRailProps) {
  const [checkedGoals, setCheckedGoals] = useState<Record<string, boolean>>({});

  const toggleGoal = (id: string) => {
    setCheckedGoals((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <aside className={styles.studioRail} aria-label="Hướng dẫn học tập từng bước">
      {/* 1. Guide Step Card */}
      <section className={styles.guideCard}>
        <div className={styles.guideMetaRow}>
          <span className={styles.guideStepBadge}>
            BƯỚC {currentStepIndex + 1} / {totalStepsCount}
          </span>
          <span className={styles.guideCategoryBadge}>
            {currentStep.category}
          </span>
        </div>

        <h2 className={styles.guideTitle}>{currentStep.headline}</h2>

        <div
          className={styles.guideBody}
          dangerouslySetInnerHTML={{ __html: currentStep.bodyHtml }}
        />

        {/* 💡 Ý CHÍNH (Key Takeaway Callout) */}
        <div className="studio-callout">
          <div className="studio-callout__icon">
            <Lightbulb size={18} />
          </div>
          <div>
            <div className="studio-callout__title">
              {currentStep.keyTakeaway.title}
            </div>
            <p className="studio-callout__body">
              {currentStep.keyTakeaway.body}
            </p>
          </div>
        </div>

        {/* Action Buttons: Next / Back */}
        <div className={styles.guideActionsRow}>
          <button
            type="button"
            className={`studio-pop-btn ${styles.guideActionBtnBack}`}
            onClick={onPrevStep}
            disabled={!hasPrev}
            style={{ opacity: hasPrev ? 1 : 0.45, cursor: hasPrev ? "pointer" : "not-allowed" }}
          >
            <ArrowLeft size={13} />
            <span>Quay lại</span>
          </button>

          <button
            type="button"
            className={`studio-pop-btn studio-pop-btn--primary ${styles.guideActionBtnNext}`}
            onClick={onNextStep}
          >
            <span>{hasNext ? `Tiếp: ${currentStep.nextButtonLabel}` : "Hoàn thành bài học"}</span>
            <ArrowRight size={13} />
          </button>
        </div>

        <div className={styles.keyboardShortcutHint}>
          [←] [→] bước • [Space] tạm dừng • [R] phát lại
        </div>
      </section>

      {/* 2. Learning Checklist Card (BẠN SẼ HỌC) */}
      <section className={styles.checklistCard}>
        <div className={styles.checklistHead}>
          <CheckCircle2 size={14} color="#2563eb" />
          <span>BẠN SẼ HỌC</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {currentStep.checklistItems.map((item) => {
            const isChecked = Boolean(checkedGoals[item.id]);
            return (
              <label
                key={item.id}
                className={`${styles.checklistItem} ${isChecked ? styles.isDone : ""}`}
              >
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => toggleGoal(item.id)}
                />
                <span>{item.text}</span>
              </label>
            );
          })}
        </div>
      </section>
    </aside>
  );
}
