import { ArrowLeft, ArrowRight, Lightbulb } from "lucide-react";
import type { Language } from "@/types";
import type { PortfolioItem } from "@/data/portfolio-tree.data";
import styles from "@/features/knowledge/studio/StudioLayout.module.css";

interface Portfolio3ColumnRailProps {
  item: PortfolioItem;
  lang: Language;
  currentStepIndex: number;
  onNextStep: () => void;
  onPrevStep: () => void;
}

export function Portfolio3ColumnRail({
  item,
  lang,
  currentStepIndex,
  onNextStep,
  onPrevStep,
}: Portfolio3ColumnRailProps) {
  const totalSteps = item.steps.length;
  const currentStep = item.steps[currentStepIndex] || item.steps[0];
  const hasPrev = currentStepIndex > 0;
  const hasNext = currentStepIndex < totalSteps - 1;

  if (!currentStep) return null;

  return (
    <aside className={styles.studioRail} aria-label="Portfolio Inspector and Guide Rail">
      <section className={styles.guideCard}>
        {/* Step Indicator Header */}
        <div
          className={styles.guideMetaRow}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "8px",
            marginBottom: "10px",
          }}
        >
          <span
            className={styles.guideStepBadge}
            style={{
              padding: "3px 8px",
              borderRadius: "6px",
              background: "#eff6ff",
              border: "1px solid #bfdbfe",
              color: "#1d4ed8",
              fontSize: "10.5px",
              fontWeight: 800,
              fontFamily: "var(--font-mono, monospace)",
            }}
          >
            {lang === "vi" ? "BƯỚC" : "STEP"} {currentStepIndex + 1} / {totalSteps}
          </span>
          <span
            className={styles.guideCategoryBadge}
            style={{
              padding: "3px 8px",
              borderRadius: "6px",
              background: "#f1f5f9",
              border: "1px solid #cbd5e1",
              color: "#475569",
              fontSize: "10.5px",
              fontWeight: 800,
              fontFamily: "var(--font-mono, monospace)",
            }}
          >
            {currentStep.stepTag[lang]}
          </span>
        </div>

        {/* Step Title & Lead */}
        <h2 className={styles.guideTitle} style={{ fontSize: "16px", lineHeight: 1.35, color: "#0f172a", margin: "0 0 6px" }}>
          {currentStep.title[lang]}
        </h2>
        <p style={{ margin: "0 0 10px", fontSize: "12.5px", fontWeight: 700, color: "#2563eb", lineHeight: 1.5 }}>
          {currentStep.lead[lang]}
        </p>

        {/* Step Body */}
        <div className={styles.guideBody} style={{ fontSize: "12px", lineHeight: 1.6, color: "#475569" }}>
          <p style={{ whiteSpace: "pre-line", margin: 0 }}>{currentStep.body[lang]}</p>
        </div>

        {/* Callout Card */}
        {currentStep.calloutText && (
          <div className="studio-callout" style={{ marginTop: "14px" }}>
            <div className="studio-callout__icon">
              <Lightbulb size={17} />
            </div>
            <div>
              <div className="studio-callout__title">
                {currentStep.calloutTitle ? currentStep.calloutTitle[lang] : "THÔNG TIN"}
              </div>
              <p className="studio-callout__body">{currentStep.calloutText[lang]}</p>
            </div>
          </div>
        )}

        {/* Action / Next Step Button */}
        <div className={styles.guideActionsRow} style={{ marginTop: "16px", display: "flex", gap: "8px" }}>
          {hasPrev && (
            <button
              type="button"
              className={`studio-pop-btn ${styles.guideActionBtnBack}`}
              onClick={onPrevStep}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "5px",
                padding: "9px 12px",
                borderRadius: "8px",
                background: "#ffffff",
                border: "1.5px solid #cbd5e1",
                color: "#334155",
                fontWeight: 750,
                fontSize: "12px",
                cursor: "pointer",
              }}
              aria-label="Previous step"
            >
              <ArrowLeft size={13} />
              <span>{lang === "vi" ? "Lùi" : "Back"}</span>
            </button>
          )}

          <button
            type="button"
            className={`studio-pop-btn studio-pop-btn--primary ${styles.guideActionBtnNext}`}
            onClick={onNextStep}
            style={{
              flex: 1,
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              padding: "10px 16px",
              borderRadius: "8px",
              background: "#2563eb",
              color: "#ffffff",
              fontWeight: 800,
              fontSize: "12.5px",
              border: "1.5px solid #0f172a",
              boxShadow: "2px 2px 0 #0f172a",
              cursor: "pointer",
            }}
          >
            <span>
              {hasNext
                ? `${lang === "vi" ? "Tiếp" : "Next"}: ${item.steps[currentStepIndex + 1].stepTag[lang]}`
                : lang === "vi"
                  ? "Bắt đầu lại bước 1"
                  : "Restart Step 1"}
            </span>
            <ArrowRight size={13} />
          </button>
        </div>

        {/* Keyboard Shortcuts Hint */}
        <div
          className={styles.keyboardShortcutHint}
          style={{
            marginTop: "14px",
            textAlign: "center",
            fontSize: "11px",
            color: "#64748b",
            fontFamily: "var(--font-mono, monospace)",
          }}
        >
          <kbd style={{ padding: "1px 5px", background: "#f1f5f9", border: "1px solid #cbd5e1", borderRadius: "3px" }}>←</kbd>{" "}
          <kbd style={{ padding: "1px 5px", background: "#f1f5f9", border: "1px solid #cbd5e1", borderRadius: "3px" }}>→</kbd>{" "}
          {lang === "vi" ? "chuyển bước" : "navigate"} •{" "}
          <kbd style={{ padding: "1px 5px", background: "#f1f5f9", border: "1px solid #cbd5e1", borderRadius: "3px" }}>Space</kbd>{" "}
          {lang === "vi" ? "dừng / chạy" : "play / pause"}
        </div>
      </section>
    </aside>
  );
}
