import { useState, type CSSProperties } from "react";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import type { PortfolioLocaleData } from "@/types";

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
    <section className="projects-section compact-projects" id="projects">
      <div className="section-heading project-heading">
        <p className="section-label">{t.projectsSection.label}</p>
        <h2>{t.projectsSection.heading}</h2>
        <p>{t.projectsSection.subtitle}</p>
      </div>

      {/* Quick Project Switcher Tabs */}
      <div className="project-deck-switcher" role="tablist" aria-label="Project switcher">
        {projects.map((project, idx) => (
          <button
            key={project.name}
            type="button"
            role="tab"
            aria-selected={idx === activeProjectIndex}
            className={`project-deck-tab${idx === activeProjectIndex ? " is-active" : ""}`}
            onClick={() => setActiveProjectIndex(idx)}
          >
            <span className="tab-num">{String(idx + 1).padStart(2, "0")}</span>
            <span className="tab-name">
              {project.name === "logistics-management-system"
                ? "Nexus Express (Live OMS)"
                : project.name === "cab-booking-system"
                  ? "Cab Booking Dispatch"
                  : project.name === "tourist-accommodation-management-system"
                    ? "Tourist Accommodation"
                    : "Song Tai Shop"}
            </span>
            {project.liveUrl && <span className="tab-live-badge">Live Demo</span>}
          </button>
        ))}
      </div>

      <div className="project-deck" aria-label="Selected project deck">
        {projects.map((project, index) => {
          const isActive = index === activeProjectIndex;
          const stackIndex = ((index - activeProjectIndex + projects.length) % projects.length) - 1;

          return (
            <article
              className={`project-deck-card${isActive ? " is-active" : " is-stacked"}`}
              key={project.name}
              style={{ "--stack-index": Math.max(stackIndex, 0) } as CSSProperties}
            >
              {!isActive ? (
                <button
                  className="deck-card-trigger"
                  type="button"
                  onClick={() => setActiveProjectIndex(index)}
                  aria-label={`Show ${project.name}`}
                />
              ) : null}

              <div className="deck-card-media">
                <img src={project.image} alt={`${project.name} interface preview`} />
                <span className="deck-card-number">{String(index + 1).padStart(2, "0")}</span>
              </div>

              <div className="deck-card-body">
                <div className="project-card-head">
                  <div>
                    <p className="project-role">{project.category}</p>
                    <h3>{project.name}</h3>
                    <p className="compact-role">{project.role}</p>
                  </div>
                  {isActive ? (
                    <div className="project-card-actions">
                      {project.liveUrl ? (
                        <a
                          className="live-demo-link"
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
                        className="icon-link"
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

                <div className="deck-card-details" aria-hidden={!isActive}>
                  {project.liveUrl ? (
                    <div className="project-live-preview-bar">
                      <span className="live-status-dot" aria-hidden="true" />
                      <span className="live-status-text">Production Live Tracking:</span>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="live-status-url"
                      >
                        {project.liveUrl.replace(/^https?:\/\//, "").replace(/\/$/, "")}
                        <ExternalLink size={12} aria-hidden="true" />
                      </a>
                    </div>
                  ) : null}
                  <p className="project-summary">{project.summary}</p>
                  <div className="stack-list">
                    {project.stack.slice(0, 6).map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                    {project.stack.length > 6 ? <span>+{project.stack.length - 6}</span> : null}
                  </div>
                  <div className="project-proof-list">
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
