import { useEffect, useState } from "react";
import type { Language, NavigateHandler } from "@/types";
import {
  allPortfolioItems,
  portfolioTreeFolders,
  type PortfolioItem,
} from "@/data/portfolio-tree.data";
import type { TheoryConcept } from "@/data/theory-concepts.data";
import { sampleConceptsData } from "@/features/knowledge/studio/studio-sample-data";
import { StudioSearchModal } from "@/features/knowledge/studio/StudioSearchModal";
import { Portfolio3ColumnTopbar } from "./Portfolio3ColumnTopbar";
import { Portfolio3ColumnSidebar } from "./Portfolio3ColumnSidebar";
import { Portfolio3ColumnStage } from "./Portfolio3ColumnStage";
import { Portfolio3ColumnRail } from "./Portfolio3ColumnRail";
import { PortfolioStudioFooter } from "./PortfolioStudioFooter";
import { StudioToast } from "./StudioToast";
import { StudioTechBackground } from "./StudioTechBackground";
import styles from "@/features/knowledge/studio/StudioLayout.module.css";

interface Portfolio3ColumnPageProps {
  navigate?: NavigateHandler;
}

export function Portfolio3ColumnPage({ navigate: _navigate }: Portfolio3ColumnPageProps) {
  // 1. Language State
  const [lang, setLang] = useState<Language>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("portfolio_lang");
      if (saved === "vi" || saved === "en") return saved;
    }
    return "vi";
  });

  const handleLangChange = (newLang: Language) => {
    setLang(newLang);
    if (typeof window !== "undefined") {
      localStorage.setItem("portfolio_lang", newLang);
      document.documentElement.lang = newLang;
    }
  };

  // 2. Active Item State via Hash or Query Routing (default to nexus-overview)
  const [activeItemSlug, setActiveItemSlug] = useState<string>(() => {
    if (typeof window !== "undefined") {
      const searchParams = new URLSearchParams(window.location.search);
      const queryItem = searchParams.get("item");
      if (queryItem) {
        const found = allPortfolioItems.find((i) => i.slug === queryItem);
        if (found) return found.slug;
      }
      const hash = window.location.hash.replace("#", "").trim();
      if (hash) {
        const found = allPortfolioItems.find((i) => i.slug === hash);
        if (found) return found.slug;
      }
    }
    return "nexus-overview";
  });

  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [selectedConcept, setSelectedConcept] = useState<TheoryConcept | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [toastMessage, setToastMessage] = useState<{ title: string; content: string } | null>(null);

  const showToast = (title: string, content: string) => {
    setToastMessage({ title, content });
  };

  // Sync hash changes from browser back/forward buttons
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "").trim();
      if (hash) {
        const found = allPortfolioItems.find((i) => i.slug === hash);
        if (found) {
          setActiveItemSlug(found.slug);
        }
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  // Update hash when item changes
  const handleSelectItem = (slug: string) => {
    setActiveItemSlug(slug);
    setCurrentStepIndex(0);
    setSelectedConcept(null);
    if (typeof window !== "undefined") {
      window.location.hash = slug;
    }
  };

  const activeItem: PortfolioItem =
    allPortfolioItems.find((i) => i.slug === activeItemSlug) || allPortfolioItems[0];

  // Dynamic document title
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.title = `${activeItem.title[lang]} — Võ Văn Tú Tài`;
    }
  }, [activeItem, lang]);

  const totalSteps = activeItem.steps.length;
  const hasPrev = currentStepIndex > 0;
  const hasNext = currentStepIndex < totalSteps - 1;

  // Toggle sidebar function
  const handleToggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
    setIsDrawerOpen((prev) => !prev);
  };

  // Global Keyboard Navigation (Arrows for steps, ⌘K for search, ⌘B for sidebar toggle)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
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
      } else if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsSearchOpen(true);
      } else if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "b") {
        e.preventDefault();
        setIsSidebarOpen((prev) => !prev);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [hasNext, hasPrev, totalSteps]);

  const handleNextStep = () => {
    if (hasNext) {
      setCurrentStepIndex((prev) => prev + 1);
    } else {
      setCurrentStepIndex(0);
    }
  };

  const handlePrevStep = () => {
    if (hasPrev) {
      setCurrentStepIndex((prev) => prev - 1);
    }
  };

  return (
    <div className={styles.studioShell}>
      {/* Dynamic Animated Tech Matrix Background */}
      <StudioTechBackground />

      {/* 1. Global Studio Topbar */}
      <Portfolio3ColumnTopbar
        lang={lang}
        onLangChange={handleLangChange}
        activeItem={activeItem}
        onOpenSearch={() => setIsSearchOpen(true)}
        onToggleSidebar={handleToggleSidebar}
        isSidebarOpen={isSidebarOpen}
        onSelectCv={() => {
          if (typeof window !== "undefined") {
            const url =
              lang === "vi"
                ? "/VoVanTuTai_Business_Analyst_CV_Tieng_Viet.pdf"
                : "/VoVanTuTai_Business_Analyst_CV.pdf";
            window.open(url, "_blank");
          }
        }}
        onSelectProfile={() => handleSelectItem("nexus-overview")}
      />

      {/* 2. Workspace 3-Column Grid */}
      <div
        className={styles.studioWorkspace}
        style={{
          gridTemplateColumns: isSidebarOpen
            ? "300px minmax(0, 1fr) 350px"
            : "minmax(0, 1fr) 350px",
          transition: "all 180ms ease",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Left Column: Explorer Tree (Toggled via Hamburger or ⌘B) */}
        {isSidebarOpen && (
          <Portfolio3ColumnSidebar
            folders={portfolioTreeFolders}
            activeItemSlug={activeItem.slug}
            onSelectItem={handleSelectItem}
            lang={lang}
            isDrawerOpen={isDrawerOpen}
            onCloseDrawer={() => {
              setIsDrawerOpen(false);
            }}
          />
        )}

        {/* Center Column: Interactive Main Stage Viewport */}
        <Portfolio3ColumnStage
          item={activeItem}
          lang={lang}
          currentStepIndex={currentStepIndex}
          onStepChange={setCurrentStepIndex}
          onSelectItem={handleSelectItem}
          onShowToast={showToast}
          onSelectConcept={setSelectedConcept}
        />

        {/* Right Column: Step Inspector & Guide Rail */}
        <Portfolio3ColumnRail
          item={activeItem}
          lang={lang}
          currentStepIndex={currentStepIndex}
          onNextStep={handleNextStep}
          onPrevStep={handlePrevStep}
          selectedConcept={selectedConcept}
          onClearConcept={() => setSelectedConcept(null)}
          onSelectConcept={setSelectedConcept}
        />
      </div>

      {/* 3. macOS Floating Dock Toolbar Footer */}
      <PortfolioStudioFooter
        lang={lang}
        onShowToast={showToast}
        onOpenSearch={() => setIsSearchOpen(true)}
        onSelectProfile={() => handleSelectItem("nexus-overview")}
      />

      {/* 4. Floating System Toast Notification */}
      <StudioToast
        toast={toastMessage}
        onClose={() => setToastMessage(null)}
      />

      {/* Quick Search Modal (⌘K) */}
      <StudioSearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        concepts={sampleConceptsData}
        onSelectConcept={(concept) => {
          setIsSearchOpen(false);
          const matchedItem = allPortfolioItems.find(
            (item) => item.slug === concept.lessonSlug || item.id === concept.id
          );
          if (matchedItem) {
            handleSelectItem(matchedItem.slug);
          }
        }}
      />
    </div>
  );
}
