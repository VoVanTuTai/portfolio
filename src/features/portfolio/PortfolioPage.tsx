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
      {/* 1. Official Top Navigation Bar */}
      <PortfolioTopbar lang={lang} t={t} onLangChange={handleLangChange} navigate={navigate} />

      {/* 2. Hero Section: Candidate Identity, Avatar, IUH GPA 3.26, Live OMS Link & Studio CTA */}
      <HeroSection lang={lang} t={t} />

      {/* 3. Executive Statistics Band */}
      <section className="stats-band" aria-label="Profile statistics">
        {t.stats.map((stat) => (
          <div className="stat-item" key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </section>

      {/* 4. Professional About & Philosophy */}
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

      {/* 5. Academic Foundation Pillars (IUH Distinction 3.26/4.0) */}
      <AcademicFoundationSection lang={lang} />

      {/* 6. Featured Production Projects (Nexus Express, Cab Booking, Tourist ERP) */}
      <ProjectDeck t={t} />

      {/* 7. Cash Flow-Driven Project Management (CPM, EVM, Milestone Billing) */}
      <ProjectManagementSection lang={lang} />

      {/* 8. Technical Monographs & Architectural Papers */}
      <MonographsSection lang={lang} navigate={navigate} />

      {/* 9. Core Engineering & BA Skills Matrix */}
      <SkillsSection t={t} navigate={navigate} />

      {/* 10. Industry Work Experience (Digityze Asia, HomeNest, J&T Express) */}
      <ExperienceSection t={t} />

      {/* 11. Direct Channels & Contact Section */}
      <ContactSection lang={lang} t={t} />
    </main>
  );
}

export default PortfolioPage;
