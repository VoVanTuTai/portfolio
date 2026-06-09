import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Database,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Network,
  ServerCog,
  Sparkles,
} from "lucide-react";
import "./styles.css";

const projectGroups = [
  {
    title: "Monolithic Business Web Applications",
    description: "Two full-stack web applications covering interfaces, CRUD workflows, authentication, roles, reports, databases, and local setup.",
    projects: [
      {
        name: "php-online-store",
        role: "Song Tai Shop · PHP/MySQL Online Store",
        href: "https://github.com/VoVanTuTai/php-online-store",
        image: "/assets/project-songtai.png",
        stack: ["PHP", "MySQL", "Bootstrap", "JavaScript", "jQuery", "Docker", "phpMyAdmin"],
        summary:
          "A PHP/MySQL online store with customer and admin workflows, later improved with Docker, seed data, demo accounts, and clearer documentation.",
        highlights: [
          "Developed product browsing, search, registration/login, cart, checkout, order status, and article pages.",
          "Improved admin product/order screens, statistics, role checks, auth handling, and POST-based delete flow.",
          "Added Docker Compose setup with PHP Apache, MySQL, phpMyAdmin, seed SQL, screenshots, and clearer README notes.",
        ],
      },
      {
        name: "tourist-accommodation-management-system",
        role: "Tourist Accommodation Platform · Express/EJS/MySQL",
        href: "https://github.com/VoVanTuTai/tourist-accommodation-management-system",
        image: "/assets/project-tourist.png",
        stack: ["Express.js", "EJS", "MySQL", "Sequelize", "Sessions", "VNPay", "PDF/Excel"],
        summary:
          "A server-rendered full-stack booking application covering customer, provider, admin, payment, and reporting workflows.",
        highlights: [
          "Developed customer registration/login, room search, booking, payment, booking history, cancellation, profile, and review flows.",
          "Implemented provider room CRUD, booking management, dashboard statistics, admin moderation, and role-based route guards.",
          "Added VNPay/QR payment pages, email notification support, PDF commission reports, and Excel exports.",
        ],
      },
    ],
  },
  {
    title: "Architecture Practice Projects",
    description: "Two architecture-focused repositories exploring Node.js, React/Vite, NestJS, Docker, messaging, and service-boundary concepts.",
    projects: [
      {
        name: "logistics-management-system",
        role: "Nexus Express · Logistics Management System",
        href: "https://github.com/VoVanTuTai/logistics-management-system",
        image: "/assets/project-nexus.png",
        stack: ["TypeScript", "NestJS", "React/Vite", "PostgreSQL", "Prisma", "RabbitMQ", "Docker"],
        summary:
          "A logistics system repository modeling shipment creation, pickup, hub operations, courier delivery, tracking, COD, and reporting workflows.",
        highlights: [
          "Defined service boundaries across Gateway/BFF, domain events, and database ownership concepts.",
          "Modeled dispatch, scan, tracking, OpenAPI contracts, Prisma data models, RabbitMQ events, and Docker Compose flows.",
          "Translated hands-on J&T Express operations into realistic shipment, scan, and branch workflow requirements.",
        ],
      },
      {
        name: "cab-booking-system",
        role: "Ride-Hailing Architecture Practice",
        href: "https://github.com/VoVanTuTai/cab-booking-system",
        image: "/assets/project-cab.png",
        stack: ["Node.js", "Express.js", "Kafka", "Redis", "PostgreSQL", "MongoDB", "Docker"],
        summary:
          "A ride-hailing architecture repository exploring customer, driver, and admin workflows across service-style modules.",
        highlights: [
          "Modeled booking, ride lifecycle, pricing, payment, notification, review, and admin workflows.",
          "Worked with REST/OpenAPI contracts, Kafka messaging, Redis coordination, and database ownership concepts.",
          "Prepared Docker Compose infrastructure for local development across services, apps, databases, and messaging.",
        ],
      },
    ],
  },
];

const projects = projectGroups.flatMap((group) =>
  group.projects.map((project) => ({
    ...project,
    category: group.title,
  })),
);

const skillGroups = [
  {
    icon: Code2,
    title: "Languages",
    items: ["PHP", "JavaScript", "TypeScript familiarity", "Java coursework"],
  },
  {
    icon: ServerCog,
    title: "Web Development",
    items: ["HTML/CSS", "Bootstrap", "EJS", "PHP-rendered pages", "React/Vite project familiarity"],
  },
  {
    icon: Database,
    title: "Data",
    items: ["MySQL", "SQL", "Database Design", "ERD", "PostgreSQL/MongoDB project exposure"],
  },
  {
    icon: Network,
    title: "Backend & Tools",
    items: ["Node.js/Express working knowledge", "REST APIs", "Git/Postman", "Docker Compose", "RabbitMQ/Kafka exposure"],
  },
];

const stats = [
  { label: "Monolith apps", value: "2" },
  { label: "Architecture practice", value: "2" },
  { label: "Core web stack", value: "PHP" },
  { label: "Expected graduation", value: "2026" },
];

const proofSignals = [
  {
    label: "Core stack & tools",
    value: "PHP, HTML/CSS, Bootstrap, JavaScript, MySQL, Git, Postman, and Docker Compose.",
  },
  {
    label: "Business app",
    value: "2 full-stack monolithic apps covering CRUD, auth, roles, booking, checkout, reports, and admin flows.",
  },
  {
    label: "Project exposure",
    value: "2 architecture practice repos with React/Vite, TypeScript, NestJS, Docker, and messaging exposure.",
  },
];

function App() {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);

  return (
    <main className="site-shell">
      <header className="topbar" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="Vo Van Tu Tai home">
          <img className="brand-avatar" src="/assets/avatar.png" alt="" aria-hidden="true" />
          <span>Vo Van Tu Tai</span>
        </a>
        <nav>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <div className="profile-lockup">
            <img className="profile-avatar" src="/assets/avatar.png" alt="Vo Van Tu Tai" />
            <div>
              <p className="profile-name">Full-stack Web Developer Intern</p>
              <p className="profile-meta">Ho Chi Minh City · Information Systems student</p>
            </div>
          </div>
          <p className="eyebrow">Portfolio</p>
          <h1>Vo Van Tu Tai</h1>
          <p className="hero-lede">
            Information Systems student building full-stack web projects with PHP, HTML/CSS, Bootstrap,
            JavaScript, and MySQL, with working knowledge of Node.js/Express and project familiarity with
            React/Vite, Docker, and broader backend architecture concepts.
          </p>
          <div className="hero-actions">
            <a className="primary-action" href="#projects">
              <ArrowUpRight size={18} aria-hidden="true" />
              View projects
            </a>
            <a className="secondary-action" href="/vo-van-tu-tai-cv.pdf" download>
              <Download size={18} aria-hidden="true" />
              Download CV
            </a>
          </div>
        </div>

        <aside className="hero-visual" aria-label="Portfolio proof points">
          <div className="visual-frame">
            <div className="browser-bar" aria-hidden="true">
              <span />
              <span />
              <span />
              <strong>web-portfolio/project-map</strong>
            </div>
            <div className="web-preview" aria-label="Web developer portfolio focus preview">
              <div className="web-preview-main">
                <p className="panel-label">Full-stack Web Portfolio</p>
                <h2>Business web apps, clean UI, and database-backed workflows.</h2>
                <div className="preview-card-grid">
                  <div className="preview-card">
                    <span>Core</span>
                    <strong>PHP</strong>
                    <p>web fundamentals</p>
                  </div>
                  <div className="preview-card">
                    <span>UI</span>
                    <strong>Bootstrap</strong>
                    <p>responsive screens</p>
                  </div>
                  <div className="preview-card">
                    <span>Data</span>
                    <strong>MySQL</strong>
                    <p>CRUD & reports</p>
                  </div>
                </div>
              </div>
              <div className="web-preview-side">
                <span>Broader project experience</span>
                <p>Node.js/Express · React/Vite · Docker · Messaging concepts</p>
              </div>
            </div>
            <div className="visual-footer">
              <span>PHP / MySQL</span>
              <span>HTML / Bootstrap</span>
              <span>Node / Express</span>
            </div>
          </div>
          <div className="hero-proof-grid">
            {proofSignals.map((item) => (
              <div className="proof-tile" key={item.label}>
                <span>{item.label}</span>
                <p>{item.value}</p>
              </div>
            ))}
          </div>
          <div className="panel-links">
            <a href="https://github.com/VoVanTuTai" target="_blank" rel="noreferrer">
              <Github size={18} aria-hidden="true" />
              GitHub
            </a>
            <a href="https://linkedin.com/in/vovantutai" target="_blank" rel="noreferrer">
              <Linkedin size={18} aria-hidden="true" />
              LinkedIn
            </a>
          </div>
        </aside>
      </section>

      <section className="stats-band" aria-label="Profile statistics">
        {stats.map((stat) => (
          <div className="stat-item" key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </section>

      <section className="section-grid about-section">
        <div>
          <p className="section-label">About</p>
          <h2>Full-stack developer focused on practical business workflows.</h2>
        </div>
        <div className="section-body">
          <p>
            I study Information Systems at Industrial University of Ho Chi Minh City and build practical web
            interfaces, backend workflows, relational database models, and maintainable business application flows.
          </p>
          <p>
            My strongest work connects business workflows to usable software: booking management, role-based screens,
            shipment operations, payment flow, reporting, and public tracking.
          </p>
        </div>
      </section>

      <section className="projects-section compact-projects" id="projects">
        <div className="section-heading project-heading">
          <p className="section-label">Selected Projects</p>
          <h2>Practical web projects first, architecture practice second.</h2>
          <p>
            The portfolio balances two functional monolithic business applications with two architecture-focused repos,
            showing practical full-stack delivery alongside broader backend exploration.
          </p>
        </div>

        <div className="project-deck" aria-label="Selected project deck">
          {projects.map((project, index) => {
            const isActive = index === activeProjectIndex;
            const stackIndex = (index - activeProjectIndex + projects.length) % projects.length - 1;

            return (
              <article
                className={`project-deck-card${isActive ? " is-active" : " is-stacked"}`}
                key={project.name}
                style={{ "--stack-index": Math.max(stackIndex, 0) } as React.CSSProperties}
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
                      <a
                        className="icon-link"
                        href={project.href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${project.name} GitHub`}
                      >
                        <ArrowUpRight size={20} aria-hidden="true" />
                      </a>
                    ) : null}
                  </div>

                  <div className="deck-card-details" aria-hidden={!isActive}>
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

      <section className="section-grid" id="skills">
        <div>
          <p className="section-label">Skills</p>
          <h2>Frontend, backend, and database skills built through projects.</h2>
        </div>
        <div className="skill-grid">
          {skillGroups.map((group) => {
            const Icon = group.icon;
            return (
              <article className="skill-card" key={group.title}>
                <Icon size={22} aria-hidden="true" />
                <h3>{group.title}</h3>
                <p>{group.items.join(" · ")}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="experience-section">
        <div className="experience-card">
          <div className="experience-icon">
            <BriefcaseBusiness size={22} aria-hidden="true" />
          </div>
          <div>
            <p className="section-label">Operations Experience</p>
            <h2>J&amp;T Express - Post Office Operations Staff</h2>
            <p>
              Worked full-time from Dec 29, 2025 to Mar 31, 2026, handling branch logistics, shipment processing,
              inventory control, and daily operations. That hands-on context shaped the shipment workflows,
              requirements, and operational scenarios in Nexus Express.
            </p>
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div>
          <p className="section-label">Contact</p>
          <h2>Open to full-stack and web developer intern roles.</h2>
        </div>
        <div className="contact-links">
          <a href="mailto:tutaivovan@gmail.com">
            <Mail size={18} aria-hidden="true" />
            tutaivovan@gmail.com
          </a>
          <a href="/vo-van-tu-tai-cv.pdf" download>
            <Download size={18} aria-hidden="true" />
            Download CV PDF
          </a>
          <a href="https://github.com/VoVanTuTai" target="_blank" rel="noreferrer">
            <Github size={18} aria-hidden="true" />
            github.com/VoVanTuTai
          </a>
          <a href="https://linkedin.com/in/vovantutai" target="_blank" rel="noreferrer">
            <Linkedin size={18} aria-hidden="true" />
            linkedin.com/in/vovantutai
          </a>
          <span>
            <MapPin size={18} aria-hidden="true" />
            Ho Chi Minh City, Vietnam
          </span>
        </div>
      </section>

      <footer>
        <span>Vo Van Tu Tai</span>
        <span>
          <Sparkles size={15} aria-hidden="true" />
          Web Apps · Business Workflows
        </span>
      </footer>
    </main>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

export default App;
