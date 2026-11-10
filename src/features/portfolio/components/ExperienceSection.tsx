import { BriefcaseBusiness } from "lucide-react";
import type { PortfolioLocaleData } from "@/types";
import styles from "./Cards.module.css";

interface ExperienceSectionProps {
  t: PortfolioLocaleData;
}

export function ExperienceSection({ t }: ExperienceSectionProps) {
  return (
    <section className={styles.experienceSection} id="experience">
      <div className={styles.experienceCard}>
        <div className={styles.experienceIcon}>
          <BriefcaseBusiness size={22} aria-hidden="true" />
        </div>
        <div>
          <p className="section-label">{t.experienceSection.homeNest.label}</p>
          <h2>{t.experienceSection.homeNest.title}</h2>
          <p className={styles.experienceMeta}>{t.experienceSection.homeNest.meta}</p>
          <p>{t.experienceSection.homeNest.text}</p>
        </div>
      </div>

      <div className={styles.experienceCard}>
        <div className={styles.experienceIcon}>
          <BriefcaseBusiness size={22} aria-hidden="true" />
        </div>
        <div>
          <p className="section-label">{t.experienceSection.jnt.label}</p>
          <h2>{t.experienceSection.jnt.title}</h2>
          <p className={styles.experienceMeta}>{t.experienceSection.jnt.meta}</p>
          <p>{t.experienceSection.jnt.text}</p>
        </div>
      </div>
    </section>
  );
}
