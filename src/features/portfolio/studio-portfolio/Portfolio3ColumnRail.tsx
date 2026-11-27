import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, BookOpen, Check, Code, FileText, Lightbulb, Sparkles } from "lucide-react";
import type { Language } from "@/types";
import type { PortfolioItem } from "@/data/portfolio-tree.data";
import {
  getDefaultConceptForSlug,
  type TheoryConcept,
} from "@/data/theory-concepts.data";
import styles from "@/features/knowledge/studio/StudioLayout.module.css";

interface Portfolio3ColumnRailProps {
  item: PortfolioItem;
  lang: Language;
  currentStepIndex: number;
  onNextStep: () => void;
  onPrevStep: () => void;
  selectedConcept?: TheoryConcept | null;
  onClearConcept?: () => void;
  onSelectConcept?: (concept: TheoryConcept) => void;
}

export function Portfolio3ColumnRail({
  item,
  lang,
  currentStepIndex,
  onNextStep,
  onPrevStep,
  selectedConcept,
  onClearConcept,
}: Portfolio3ColumnRailProps) {
  const [activeTab, setActiveTab] = useState<"curriculum" | "inspector">("curriculum");

  // When user clicks a concept in Column 2, automatically switch to inspector tab
  useEffect(() => {
    if (selectedConcept) {
      setActiveTab("inspector");
    }
  }, [selectedConcept]);

  const totalSteps = item.steps.length;
  const currentStep = item.steps[currentStepIndex] || item.steps[0];
  const hasPrev = currentStepIndex > 0;
  const hasNext = currentStepIndex < totalSteps - 1;

  // Active theory concept to inspect: either explicitly selected or default for the current item
  const conceptToInspect: TheoryConcept =
    selectedConcept || getDefaultConceptForSlug(item.slug);

  return (
    <aside className={styles.studioRail} aria-label="Portfolio Inspector and Guide Rail">
      {/* 1. Header Tab Switcher: Curriculum vs Concept Inspector */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "6px",
          padding: "6px",
          background: "#ffffff",
          borderRadius: "10px",
          border: "1.5px solid #d8e6f5",
          marginBottom: "12px",
          boxShadow: "0 1px 3px rgba(15, 23, 42, 0.04)",
        }}
        role="tablist"
      >
        <button
          type="button"
          role="tab"
          aria-selected={activeTab === "curriculum"}
          onClick={() => setActiveTab("curriculum")}
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "6px",
            padding: "8px 10px",
            borderRadius: "7px",
            border: "none",
            background: activeTab === "curriculum" ? "#2563eb" : "transparent",
            color: activeTab === "curriculum" ? "#ffffff" : "#475569",
            fontWeight: 800,
            fontSize: "11.5px",
            fontFamily: "var(--studio-font-sans)",
            cursor: "pointer",
            transition: "all 0.15s ease",
            boxShadow: activeTab === "curriculum" ? "0 2px 4px rgba(37, 99, 235, 0.25)" : "none",
          }}
        >
          <BookOpen size={13} />
          <span>{lang === "vi" ? "Giáo Trình" : "Curriculum"}</span>
        </button>

        <button
          type="button"
          role="tab"
          aria-selected={activeTab === "inspector"}
          onClick={() => setActiveTab("inspector")}
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "6px",
            padding: "8px 10px",
            borderRadius: "7px",
            border: "none",
            background: activeTab === "inspector" ? "#0284c7" : "transparent",
            color: activeTab === "inspector" ? "#ffffff" : "#475569",
            fontWeight: 800,
            fontSize: "11.5px",
            fontFamily: "var(--studio-font-sans)",
            cursor: "pointer",
            transition: "all 0.15s ease",
            boxShadow: activeTab === "inspector" ? "0 2px 4px rgba(2, 132, 199, 0.25)" : "none",
            position: "relative",
          }}
        >
          <Sparkles size={13} />
          <span>{lang === "vi" ? "Soi Lý Thuyết" : "Theory Inspector"}</span>
          {selectedConcept && (
            <span
              style={{
                width: 7,
                height: 7,
                borderRadius: "50%",
                background: "#22c55e",
                position: "absolute",
                top: 6,
                right: 8,
              }}
              title="Active Concept Selected"
            />
          )}
        </button>
      </div>

      {/* 2. TAB A: CURRICULUM STEPS MODE */}
      {activeTab === "curriculum" && currentStep && (
        <section className={styles.guideCard}>
          {/* Active Concept Quick Banner (if selected from Column 2) */}
          {selectedConcept && (
            <div
              style={{
                padding: "8px 12px",
                borderRadius: "7px",
                background: "#f0f9ff",
                border: "1px solid #bae6fd",
                marginBottom: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "8px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "6px", minWidth: 0 }}>
                <span
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    background: "#0284c7",
                    flexShrink: 0,
                  }}
                />
                <span
                  style={{
                    fontSize: "11px",
                    color: "#0369a1",
                    fontWeight: 750,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  {selectedConcept.title[lang]}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setActiveTab("inspector")}
                style={{
                  border: "none",
                  background: "#0284c7",
                  color: "#ffffff",
                  fontSize: "10px",
                  fontWeight: 800,
                  padding: "3px 8px",
                  borderRadius: "4px",
                  cursor: "pointer",
                  flexShrink: 0,
                }}
              >
                {lang === "vi" ? "Xem lý thuyết →" : "Inspect →"}
              </button>
            </div>
          )}

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
                fontFamily: "var(--studio-font-mono, monospace)",
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
                fontFamily: "var(--studio-font-mono, monospace)",
              }}
            >
              {currentStep.stepTag[lang]}
            </span>
          </div>

          {/* Step Title & Lead */}
          <h2
            className={styles.guideTitle}
            style={{
              fontSize: "15.5px",
              lineHeight: 1.35,
              color: "#0f172a",
              margin: "0 0 6px",
              fontFamily: "var(--studio-font-display)",
            }}
          >
            {currentStep.title[lang]}
          </h2>
          <p
            style={{
              margin: "0 0 10px",
              fontSize: "12.5px",
              fontWeight: 700,
              color: "#2563eb",
              lineHeight: 1.5,
            }}
          >
            {currentStep.lead[lang]}
          </p>

          {/* Step Body */}
          <div
            className={styles.guideBody}
            style={{ fontSize: "12px", lineHeight: 1.6, color: "#475569" }}
          >
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
              fontFamily: "var(--studio-font-mono, monospace)",
            }}
          >
            <kbd style={{ padding: "1px 5px", background: "#f1f5f9", border: "1px solid #cbd5e1", borderRadius: "3px" }}>←</kbd>{" "}
            <kbd style={{ padding: "1px 5px", background: "#f1f5f9", border: "1px solid #cbd5e1", borderRadius: "3px" }}>→</kbd>{" "}
            {lang === "vi" ? "chuyển bước" : "navigate"} •{" "}
            <kbd style={{ padding: "1px 5px", background: "#f1f5f9", border: "1px solid #cbd5e1", borderRadius: "3px" }}>Space</kbd>{" "}
            {lang === "vi" ? "dừng / chạy" : "play / pause"}
          </div>
        </section>
      )}

      {/* 3. TAB B: DYNAMIC THEORY CONCEPT INSPECTOR */}
      {activeTab === "inspector" && conceptToInspect && (
        <section className={styles.guideCard} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {/* Top Metadata Badges */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "8px", flexWrap: "wrap" }}>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "5px",
                padding: "3px 8px",
                borderRadius: "5px",
                background: "#f0f9ff",
                border: "1px solid #bae6fd",
                color: "#0284c7",
                fontSize: "10px",
                fontWeight: 800,
                fontFamily: "var(--studio-font-mono, monospace)",
              }}
            >
              <FileText size={11} />
              {conceptToInspect.badge[lang]}
            </span>

            {selectedConcept && onClearConcept && (
              <button
                type="button"
                onClick={onClearConcept}
                style={{
                  border: "none",
                  background: "#f1f5f9",
                  color: "#64748b",
                  fontSize: "10px",
                  fontWeight: 700,
                  padding: "2px 7px",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                {lang === "vi" ? "Khôi phục mặc định" : "Reset Default"}
              </button>
            )}
          </div>

          {/* Academic Standard Citation */}
          <div
            style={{
              padding: "6px 10px",
              borderRadius: "6px",
              background: "#faf5ff",
              border: "1px solid #e9d5ff",
              color: "#7e22ce",
              fontSize: "10.5px",
              fontWeight: 750,
              fontFamily: "var(--studio-font-mono, monospace)",
              lineHeight: 1.4,
            }}
          >
            <strong>{lang === "vi" ? "CHUẨN HỌC THUẬT: " : "STANDARD: "}</strong>
            {conceptToInspect.academicStandard}
          </div>

          {/* Concept Title & Lead */}
          <div>
            <h3
              style={{
                margin: "0 0 6px 0",
                fontSize: "15px",
                color: "#0f172a",
                lineHeight: 1.35,
                fontFamily: "var(--studio-font-display)",
              }}
            >
              {conceptToInspect.title[lang]}
            </h3>
            <p
              style={{
                margin: 0,
                fontSize: "12.5px",
                fontWeight: 700,
                color: "#0284c7",
                lineHeight: 1.5,
              }}
            >
              {conceptToInspect.lead[lang]}
            </p>
          </div>

          {/* In-depth Academic Body */}
          <div
            style={{
              fontSize: "12px",
              lineHeight: 1.65,
              color: "#334155",
              whiteSpace: "pre-line",
            }}
          >
            {conceptToInspect.body[lang]}
          </div>

          {/* Formula or Code Snippet */}
          {conceptToInspect.formulaOrCode && (
            <div
              style={{
                borderRadius: "8px",
                background: "#0f172a",
                border: "1.5px solid #1e293b",
                overflow: "hidden",
                marginTop: "4px",
              }}
            >
              <div
                style={{
                  padding: "5px 10px",
                  background: "#1e293b",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  color: "#94a3b8",
                  fontSize: "10px",
                  fontFamily: "var(--studio-font-mono, monospace)",
                  fontWeight: 700,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                  <Code size={11} />
                  <span>{lang === "vi" ? "ĐẶC TẢ KỸ THUẬT & TOÁN HỌC" : "TECHNICAL FORMULA & SPEC"}</span>
                </div>
                <span>RFC / ISO / UML</span>
              </div>
              <pre
                style={{
                  margin: 0,
                  padding: "10px 12px",
                  color: "#e2e8f0",
                  fontFamily: "var(--studio-font-mono, monospace)",
                  fontSize: "11px",
                  lineHeight: 1.55,
                  overflowX: "auto",
                  background: "transparent",
                }}
              >
                <code>{conceptToInspect.formulaOrCode}</code>
              </pre>
            </div>
          )}

          {/* Key Engineering Takeaways Checklist */}
          {conceptToInspect.keyTakeaways && conceptToInspect.keyTakeaways[lang]?.length > 0 && (
            <div
              style={{
                padding: "12px",
                borderRadius: "8px",
                background: "#f8fafc",
                border: "1px solid #e2e8f0",
                marginTop: "4px",
              }}
            >
              <strong
                style={{
                  display: "block",
                  fontSize: "11.5px",
                  color: "#0f172a",
                  marginBottom: "8px",
                  fontFamily: "var(--studio-font-display)",
                }}
              >
                {lang === "vi" ? "ĐIỂM THEN CHỐT VẬN HÀNH (KEY TAKEAWAYS):" : "ENGINEERING TAKEAWAYS:"}
              </strong>
              <ul style={{ margin: 0, paddingLeft: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "6px" }}>
                {conceptToInspect.keyTakeaways[lang].map((point, idx) => (
                  <li
                    key={idx}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "6px",
                      fontSize: "11.5px",
                      color: "#334155",
                      lineHeight: 1.5,
                    }}
                  >
                    <span
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: 15,
                        height: 15,
                        borderRadius: "50%",
                        background: "#dcfce7",
                        color: "#16a34a",
                        flexShrink: 0,
                        marginTop: 2,
                      }}
                    >
                      <Check size={10} strokeWidth={3} />
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Switch back button */}
          <button
            type="button"
            onClick={() => setActiveTab("curriculum")}
            style={{
              marginTop: "4px",
              padding: "8px 12px",
              borderRadius: "7px",
              background: "#ffffff",
              border: "1.5px solid #cbd5e1",
              color: "#334155",
              fontSize: "11.5px",
              fontWeight: 750,
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "6px",
            }}
          >
            <BookOpen size={13} />
            <span>{lang === "vi" ? "Xem lại các bước giáo trình" : "Back to Curriculum Steps"}</span>
          </button>
        </section>
      )}
    </aside>
  );
}
