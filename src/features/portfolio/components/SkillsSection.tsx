import { ArrowUpRight } from "lucide-react";
import type { NavigateHandler, PortfolioLocaleData } from "@/types";

interface SkillsSectionProps {
  t: PortfolioLocaleData;
  navigate: NavigateHandler;
}

export function SkillsSection({ t, navigate }: SkillsSectionProps) {
  return (
    <section className="section-grid" id="skills">
      <div>
        <p className="section-label">{t.skillsSection.label}</p>
        <h2>{t.skillsSection.heading}</h2>
      </div>
      <div className="skill-grid">
        {t.skillsSection.groups.map((group) => {
          const Icon = group.icon;
          const href = group.href;
          const content = (
            <>
              <Icon size={22} aria-hidden="true" />
              <h3>{group.title}</h3>
              <p>{group.items.join(" · ")}</p>
              {group.linkLabel ? (
                <span className="skill-card-link">
                  {group.linkLabel}
                  <ArrowUpRight size={16} aria-hidden="true" />
                </span>
              ) : null}
            </>
          );

          return href ? (
            <a
              className={`skill-card skill-card-clickable${group.title === "Phân tích Nghiệp vụ & Đặc tả" || group.title === "Business Analysis & Specs" ? " skill-card-featured" : ""}`}
              href={href}
              key={group.title}
              onClick={(event) => navigate(event, href)}
            >
              {content}
            </a>
          ) : (
            <article className="skill-card" key={group.title}>
              {content}
            </article>
          );
        })}
      </div>
    </section>
  );
}
