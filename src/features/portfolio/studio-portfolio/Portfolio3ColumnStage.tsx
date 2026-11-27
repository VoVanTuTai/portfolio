import { useState } from "react";
import {
  Clock,
  Layers,
  Zap,
} from "lucide-react";
import type { Language } from "@/types";
import type { PortfolioItem } from "@/data/portfolio-tree.data";
import { StudioProjectsStageView } from "@/features/portfolio/studio-portfolio/StudioProjectsStageView";
import { StudioSkillsStageView } from "@/features/portfolio/studio-portfolio/StudioSkillsStageView";
import { StudioBaStageView } from "@/features/portfolio/studio-portfolio/StudioBaStageView";
import { StudioDevStageView } from "@/features/portfolio/studio-portfolio/StudioDevStageView";
import { StudioProfileStageView } from "@/features/portfolio/studio-portfolio/StudioProfileStageView";
import { ProjectManagementSection } from "@/features/project-management/ProjectManagementSection";
import { StudioSimulationCanvas } from "@/features/knowledge/studio/StudioSimulationCanvas";
import { allStudioLessons } from "@/features/knowledge/studio/studio-sample-data";
import type { TheoryConcept } from "@/data/theory-concepts.data";
import styles from "@/features/knowledge/studio/StudioLayout.module.css";

interface Portfolio3ColumnStageProps {
  item: PortfolioItem;
  lang: Language;
  currentStepIndex?: number;
  onStepChange?: (index: number) => void;
  onSelectItem?: (slug: string) => void;
  onShowToast?: (title: string, content: string) => void;
  onSelectConcept?: (concept: TheoryConcept) => void;
}

export function Portfolio3ColumnStage({
  item,
  lang,
  currentStepIndex = 0,
  onSelectItem,
  onShowToast: _onShowToast,
  onSelectConcept,
}: Portfolio3ColumnStageProps) {
  const [isPlaying, setIsPlaying] = useState(true);

  // Match simulation lesson if item is in Module 05
  const simulationLesson =
    allStudioLessons[item.slug] || allStudioLessons["latency-throughput-oms"];

  return (
    <main className={styles.studioStage} aria-label="Portfolio Main Stage Viewport">
      {/* 1. Header Information & Telemetry */}
      <div className={styles.lessonHeaderBlock}>
        <div className={styles.breadcrumbRow}>
          <span>{item.category[lang]}</span>
          <span> / </span>
          <span style={{ color: "#2563eb", fontWeight: 800 }}>{item.title[lang]}</span>
        </div>

        <h1 className={styles.lessonHeading}>{item.title[lang]}</h1>
        <p className={styles.lessonSubtitle}>{item.subtitle[lang]}</p>

        {/* Metadata Chips */}
        <div className={styles.metaBadgesRow}>
          <span className={styles.metaBadge}>
            <Clock size={11} /> {item.time}
          </span>
          <span className={styles.metaBadge}>
            <Layers size={11} /> {item.level[lang]}
          </span>
          <span className={styles.metaBadge}>
            <Zap size={11} /> {item.steps.length} {lang === "vi" ? "bước chi tiết" : "steps"}
          </span>
        </div>

        {/* Telemetry HUD Bar */}
        <div
          className={styles.telemetryHudBar}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))",
            gap: "10px",
            marginTop: "10px",
          }}
          aria-label="Telemetry HUD"
        >
          {item.telemetry.map((chip, idx) => (
            <div
              key={idx}
              style={{
                padding: "8px 12px",
                borderRadius: "8px",
                background: "#ffffff",
                border: "1.5px solid #d8e6f5",
                display: "flex",
                flexDirection: "column",
                gap: "2px",
                boxShadow: "0 1px 3px rgba(15, 23, 42, 0.02)",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-mono, monospace)",
                  fontSize: "9.5px",
                  fontWeight: 800,
                  color: "#64748b",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}
              >
                {chip.label[lang]}
              </span>
              <strong
                style={{
                  fontFamily: "var(--font-mono, monospace)",
                  fontSize: "13px",
                  fontWeight: 900,
                  color: chip.status === "accent" ? "#0284c7" : "#0f172a",
                }}
              >
                {chip.value}
              </strong>
            </div>
          ))}
        </div>
      </div>

      {/* 2. Interactive Stage Center Viewport */}
      <section className={styles.interactiveCanvasCard} style={{ padding: "20px" }}>
        {/* VIEW 00: Candidate Profile Dossier & Official ATS Resumes */}
        {(item.moduleCode === "profile" || item.slug === "ho-so-nang-luc" || item.slug === "tai-cv-pdf") && (
          <StudioProfileStageView
            item={item}
            lang={lang}
            onSelectItem={onSelectItem}
          />
        )}

        {/* VIEW 01: Featured Projects Studio Showcase (Nexus Express, Cab Dispatch, Tourist Accommodation) */}
        {(item.moduleCode === "01" || item.id.startsWith("item-nexus") || item.id.startsWith("item-cab") || item.id.startsWith("item-tourist")) && item.moduleCode !== "profile" && item.slug !== "ho-so-nang-luc" && item.slug !== "tai-cv-pdf" && (
          <StudioProjectsStageView
            item={item}
            lang={lang}
            onSelectItem={onSelectItem}
            onSelectConcept={onSelectConcept}
          />
        )}

        {/* VIEW D: Project Management & Agile Delivery Blueprint */}
        {(item.moduleCode === "03" || item.id === "item-pm-process" || item.id === "item-cpm" || item.id === "item-gantt" || item.id === "item-evm" || item.slug === "quy-trinh-pm-thu-tien") && (
          <ProjectManagementSection
            lang={lang}
            isStudio={true}
            activeItemSlug={item.slug}
          />
        )}

        {/* VIEW BA: Senior Business Analyst Practical Suite */}
        {(item.moduleCode === "02" || item.slug.startsWith("ba-") || item.slug === "ky-nang-ba" || item.id.startsWith("item-ba-")) && (
          <StudioBaStageView
            item={item}
            lang={lang}
            onSelectItem={onSelectItem}
            onSelectConcept={onSelectConcept}
          />
        )}

        {/* VIEW DEV: Developer Engineering Repository */}
        {(item.moduleCode === "04" || item.slug.startsWith("dev-") || item.id.startsWith("item-dev-") || item.slug === "git-flow-conventional" || item.slug === "web-security-data" || item.slug === "php-mvc-iuh" || item.slug === "modern-frameworks") && (
          <StudioDevStageView
            lang={lang}
            activeItemSlug={item.slug}
          />
        )}

        {/* VIEW F: Modern Skills & Competencies Matrix */}
        {(item.slug === "ky-thuat-he-thong" || item.id === "item-tech-skills") && (
          <StudioSkillsStageView
            item={item}
            lang={lang}
            onSelectItem={onSelectItem}
          />
        )}

        {/* VIEW G: Interactive 2.5D Simulations Playground */}
        {(item.moduleCode === "05" || item.id.startsWith("item-sim-")) && (
          <div>
            <StudioSimulationCanvas
              lesson={simulationLesson}
              stepIndex={currentStepIndex}
              isPlaying={isPlaying}
              onTogglePlay={() => setIsPlaying((p) => !p)}
              onReset={() => setIsPlaying(true)}
            />
          </div>
        )}
      </section>
    </main>
  );
}
