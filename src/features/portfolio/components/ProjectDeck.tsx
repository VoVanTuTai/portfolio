import { useState, type CSSProperties } from "react";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import type { PortfolioLocaleData } from "@/types";
import styles from "./Cards.module.css";

interface ProjectDeckProps {
  t: PortfolioLocaleData;
}

export function ProjectDeck({ t }: ProjectDeckProps) {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);

  const projects = t.projectGroups.flatMap((group) =>
    group.projects.map((project) => ({
      ...project,
      category: group.title,
    })),
  );

  return (
    <section className={styles.projectsSection} id="projects">
      <div className={`section-heading ${styles.projectHeading}`}>
        <p className="section-label">{t.projectsSection.label}</p>
        <h2>{t.projectsSection.heading}</h2>
        <p>{t.projectsSection.subtitle}</p>
      </div>

      {/* Quick Project Switcher Tabs */}
      <div className={styles.projectDeckSwitcher} role="tablist" aria-label="Project switcher">
        {projects.map((project, idx) => (
          <button
            key={project.name}
            type="button"
            role="tab"
            aria-selected={idx === activeProjectIndex}
            className={`${styles.projectDeckTab}${idx === activeProjectIndex ? ` ${styles.isActive}` : ""}`}
            onClick={() => setActiveProjectIndex(idx)}
          >
            <span className={styles.tabNum}>{String(idx + 1).padStart(2, "0")}</span>
            <span className={styles.tabName}>
              {project.name === "logistics-management-system"
                ? "Nexus Express (Live OMS)"
                : project.name === "cab-booking-system"
                  ? "Cab Booking Dispatch"
                  : project.name === "tourist-accommodation-management-system"
                    ? "Tourist Accommodation"
                    : "Song Tai Shop"}
            </span>
            {project.liveUrl && <span className={styles.tabLiveBadge}>Live Demo</span>}
          </button>
        ))}
      </div>

      <div className={styles.projectDeck} aria-label="Selected project deck">
        {projects.map((project, index) => {
          const isActive = index === activeProjectIndex;
          const stackIndex = ((index - activeProjectIndex + projects.length) % projects.length) - 1;

          return (
            <article
              className={`${styles.projectDeckCard} ${isActive ? styles.isActive : styles.isStacked}`}
              key={project.name}
              style={{ "--stack-index": Math.max(stackIndex, 0) } as CSSProperties}
            >
              {!isActive ? (
                <button
                  className={styles.deckCardTrigger}
                  type="button"
                  onClick={() => setActiveProjectIndex(index)}
                  aria-label={`Show ${project.name}`}
                />
              ) : null}

              <div className={styles.deckCardMedia}>
                <img src={project.image} alt={`${project.name} interface preview`} />
                <span className={styles.deckCardNumber}>{String(index + 1).padStart(2, "0")}</span>
              </div>

              <div className={styles.deckCardBody}>
                <div className={styles.projectCardHead}>
                  <div>
                    <p className={styles.projectRole}>{project.category}</p>
                    <h3>{project.name}</h3>
                    <p className={styles.compactRole}>{project.role}</p>
                  </div>
                  {isActive ? (
                    <div className={styles.projectCardActions}>
                      {project.liveUrl ? (
                        <a
                          className={styles.liveDemoLink}
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`${project.name} Live Demo`}
                          title="Open Live Tracking Demo"
                        >
                          <ExternalLink size={14} aria-hidden="true" />
                          <span>{project.liveLabel || "Live Demo"}</span>
                        </a>
                      ) : null}
                      <a
                        className={styles.iconLink}
                        href={project.href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${project.name} GitHub`}
                        title="View on GitHub"
                      >
                        <ArrowUpRight size={20} aria-hidden="true" />
                      </a>
                    </div>
                  ) : null}
                </div>

                <div className={styles.deckCardDetails} aria-hidden={!isActive}>
                  {project.liveUrl ? (
                    <div className={styles.projectLivePreviewBar}>
                      <span className="live-status-dot" aria-hidden="true" />
                      <span className={styles.liveStatusText}>Production Live Tracking:</span>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className={styles.liveStatusUrl}
                      >
                        {project.liveUrl.replace(/^https?:\/\//, "").replace(/\/$/, "")}
                        <ExternalLink size={12} aria-hidden="true" />
                      </a>
                    </div>
                  ) : null}
                  <p className={styles.projectSummary}>{project.summary}</p>
                  <div className={styles.stackList}>
                    {project.stack.slice(0, 6).map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                    {project.stack.length > 6 ? <span>+{project.stack.length - 6}</span> : null}
                  </div>
                  <div className={styles.projectProofList}>
                    {project.highlights.slice(0, 3).map((highlight) => (
                      <p key={highlight}>{highlight}</p>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
