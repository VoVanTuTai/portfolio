import { BriefcaseBusiness } from "lucide-react";
import type { PortfolioLocaleData } from "@/types";

interface ExperienceSectionProps {
  t: PortfolioLocaleData;
}

export function ExperienceSection({ t }: ExperienceSectionProps) {
  return (
    <section className="experience-section" id="experience">
      <div className="experience-card">
        <div className="experience-icon">
          <BriefcaseBusiness size={22} aria-hidden="true" />
        </div>
        <div>
          <p className="section-label">{t.experienceSection.homeNest.label}</p>
          <h2>{t.experienceSection.homeNest.title}</h2>
          <p className="experience-meta">{t.experienceSection.homeNest.meta}</p>
          <p>{t.experienceSection.homeNest.text}</p>
        </div>
      </div>

      <div className="experience-card">
        <div className="experience-icon">
          <BriefcaseBusiness size={22} aria-hidden="true" />
        </div>
        <div>
          <p className="section-label">{t.experienceSection.jnt.label}</p>
          <h2>{t.experienceSection.jnt.title}</h2>
          <p className="experience-meta">{t.experienceSection.jnt.meta}</p>
          <p>{t.experienceSection.jnt.text}</p>
        </div>
      </div>
    </section>
  );
}
