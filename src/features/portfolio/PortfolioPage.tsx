import { useEffect, useState } from "react";
import type { Language, NavigateHandler } from "@/types";
import { portfolioDataVi } from "@/data/i18n/vi";
import { portfolioDataEn } from "@/data/i18n/en";
import { ProjectManagementSection } from "@/features/project-management/ProjectManagementSection";
import "@/styles/features/portfolio-page.css";
import { PortfolioTopbar } from "./components/PortfolioTopbar";
import { HeroSection } from "./components/HeroSection";
import { AcademicFoundationSection } from "./components/AcademicFoundationSection";
import { ProjectDeck } from "./components/ProjectDeck";
import { MonographsSection } from "./components/MonographsSection";
import { SkillsSection } from "./components/SkillsSection";
import { ExperienceSection } from "./components/ExperienceSection";
import { ContactSection } from "./components/ContactSection";

interface PortfolioPageProps {
  navigate: NavigateHandler;
}

export function PortfolioPage({ navigate }: PortfolioPageProps) {
  const [lang, setLangState] = useState<Language>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("portfolio_lang");
      if (saved === "en" || saved === "vi") return saved;
    }
    return "vi";
  });

  const t = lang === "vi" ? portfolioDataVi : portfolioDataEn;

  const handleLangChange = (newLang: Language) => {
    setLangState(newLang);
    if (typeof window !== "undefined") {
      localStorage.setItem("portfolio_lang", newLang);
      document.documentElement.lang = newLang;
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      document.documentElement.lang = lang;
    }
  }, [lang]);

  return (
    <main className="site-shell">
      <PortfolioTopbar lang={lang} t={t} onLangChange={handleLangChange} />

      <HeroSection lang={lang} t={t} />

      <section className="stats-band" aria-label="Profile statistics">
        {t.stats.map((stat) => (
          <div className="stat-item" key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </section>

      <section className="section-grid about-section">
        <div>
          <p className="section-label">{t.about.label}</p>
          <h2>{t.about.heading}</h2>
        </div>
        <div className="section-body">
          <p>{t.about.p1}</p>
          <p>{t.about.p2}</p>
        </div>
      </section>

      <AcademicFoundationSection lang={lang} />

      <ProjectDeck t={t} />

      <ProjectManagementSection lang={lang} />

      <MonographsSection lang={lang} navigate={navigate} />

      <SkillsSection t={t} navigate={navigate} />

      <ExperienceSection t={t} />

      <ContactSection lang={lang} t={t} />
    </main>
  );
}

export default PortfolioPage;
