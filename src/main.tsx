import React from "react";
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
    title: "Business Web Application",
    description: "A monolithic full-stack app that proves CRUD, auth, role flows, payment, reporting, and maintainable MVC structure.",
    projects: [
      {
        name: "Tourist Accommodation Management System",
        role: "Monolithic Express/EJS/MySQL Booking Platform",
        href: "https://github.com/VoVanTuTai/tourist-accommodation-management-system",
        image: "/assets/project-tourist.png",
        stack: ["Express.js", "EJS", "MySQL", "Sequelize", "Sessions", "VNPay", "PDF/Excel"],
        summary:
          "A server-rendered booking platform for customers, providers, and admins with payment and commission reporting workflows.",
        highlights: [
          "Built customer registration/login, room search, booking, payment, booking history, cancellation, profile, and review flows.",
          "Implemented provider room CRUD, booking management, dashboard statistics, admin moderation, and role-based route guards.",
          "Integrated VNPay/QR payment pages, email notification support, PDF commission reports, and Excel dashboard exports.",
        ],
      },
    ],
  },
  {
    title: "Microservices & Distributed Systems",
    description: "Architecture-heavy projects showing service boundaries, API contracts, messaging, and Docker-based local infrastructure.",
    projects: [
      {
        name: "Nexus Express",
        role: "Logistics Management System",
        href: "https://github.com/VoVanTuTai/logistics-management-system",
        image: "/assets/project-nexus.png",
        stack: ["TypeScript", "NestJS", "React/Vite", "PostgreSQL", "Prisma", "RabbitMQ", "Docker"],
        summary:
          "A logistics platform for shipment creation, pickup, hub operations, courier delivery, tracking, COD, and reporting.",
        highlights: [
          "Designed 14 services and 5 apps around Gateway/BFF, domain events, and database-per-service boundaries.",
          "Implemented dispatch, scan, tracking, outbox/idempotency flows, OpenAPI contracts, and RabbitMQ event payloads.",
          "Translated hands-on J&T Express operations into realistic shipment, scan, and branch workflow requirements.",
        ],
      },
      {
        name: "Cab Booking System",
        role: "Microservices Ride-Hailing Platform",
        href: "https://github.com/VoVanTuTai/cab-booking-system",
        image: "/assets/project-cab.png",
        stack: ["Node.js", "Express.js", "Kafka", "Redis", "PostgreSQL", "MongoDB", "Docker"],
        summary:
          "A ride-hailing system with customer, driver, and admin apps backed by independent domain services.",
        highlights: [
          "Built 14 services and 3 apps for booking, ride lifecycle, pricing, payment, notification, review, and admin workflows.",
          "Designed REST/OpenAPI contracts, Kafka event flow, Redis-backed coordination, and database-per-service ownership.",
          "Prepared Docker Compose infrastructure for local development across services, apps, databases, and messaging.",
        ],
      },
      {
        name: "E-commerce Microservices",
        role: "Auth, Product, and Order Services",
        href: "https://github.com/VoVanTuTai/ecommerce-microservices-system",
        image: "/assets/project-ecommerce.png",
        stack: ["Node.js", "Express.js", "MongoDB", "RabbitMQ", "JWT", "Mocha", "Docker"],
        summary:
          "A compact microservices e-commerce system with service isolation, API Gateway routing, and message-based integration.",
        highlights: [
          "Created Auth, Product, and Order services with independent MongoDB databases and JWT authentication.",
          "Added RabbitMQ pub/sub, Docker Compose, health checks, API Gateway routing, and Mocha tests.",
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

const featuredProject = projects[0];
const supportingProjects = projects.slice(1);

const skillGroups = [
  {
    icon: Code2,
    title: "Languages",
    items: ["TypeScript", "JavaScript", "Java", "PHP"],
  },
  {
    icon: ServerCog,
    title: "Backend",
    items: ["Node.js", "NestJS", "Express.js", "REST APIs", "API Gateway", "Microservices"],
  },
  {
    icon: Database,
    title: "Data",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Prisma", "Sequelize", "Redis"],
  },
  {
    icon: Network,
    title: "Architecture",
    items: ["RabbitMQ", "Kafka", "OpenAPI", "BPMN", "ERD", "Database Design"],
  },
];

const stats = [
  { label: "Business monolith", value: "1" },
  { label: "Microservice systems", value: "3" },
  { label: "Nexus Express services", value: "14" },
  { label: "Expected graduation", value: "2026" },
];

const proofSignals = [
  {
    label: "Business app",
    value: "Express/EJS/MySQL booking system with roles, auth, payment, and reports.",
  },
  {
    label: "Backend",
    value: "TypeScript, NestJS, PostgreSQL/Prisma, RabbitMQ/Kafka, Docker.",
  },
  {
    label: "Workflow",
    value: "Logistics experience translated into shipment, scan, dispatch, and tracking.",
  },
];

function App() {
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
              <p className="profile-name">Backend Engineer Intern</p>
              <p className="profile-meta">Ho Chi Minh City · Information Systems student</p>
            </div>
          </div>
          <p className="eyebrow">Portfolio</p>
          <h1>Vo Van Tu Tai</h1>
          <p className="hero-lede">
            Information Systems student building practical business web applications and backend systems, from
            monolithic Express/MySQL booking workflows to TypeScript microservices, API gateways, and event-driven
            logistics platforms.
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
              <strong>backend-portfolio/system-map</strong>
            </div>
            <img src="/assets/system-visual.png" alt="Backend portfolio system architecture preview" />
            <div className="visual-footer">
              <span>Express / MySQL</span>
              <span>NestJS / RabbitMQ</span>
              <span>Docker</span>
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
            <a href="https://www.linkedin.com/in/t%C3%BA-t%C3%A0i-v%C3%B5-v%C4%83n-2b27403b2/" target="_blank" rel="noreferrer">
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
          <h2>Backend-minded developer with product workflow sense.</h2>
        </div>
        <div className="section-body">
          <p>
            I study Information Systems at Industrial University of Ho Chi Minh City and focus on backend engineering,
            full-stack business workflows, service boundaries, database ownership, API contracts, and event-driven
            architecture.
          </p>
          <p>
            My strongest projects connect business workflows to working systems: shipment operations, ride lifecycle,
            payment flow, booking management, reporting, and public tracking.
          </p>
        </div>
      </section>

      <section className="projects-section compact-projects" id="projects">
        <div className="section-heading project-heading">
          <p className="section-label">Selected Projects</p>
          <h2>Four projects, scanned fast.</h2>
          <p>
            The portfolio leads with one complete business app, then keeps the distributed systems work compact and
            easy to compare.
          </p>
        </div>

        <div className="project-showcase">
          <article className="project-card featured-project">
            <img className="project-image" src={featuredProject.image} alt={`${featuredProject.name} preview`} />
            <div className="featured-project-copy">
              <p className="project-role">{featuredProject.category}</p>
              <div className="project-card-head">
                <div>
                  <h3>{featuredProject.name}</h3>
                  <p className="compact-role">{featuredProject.role}</p>
                </div>
                <a
                  className="icon-link"
                  href={featuredProject.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${featuredProject.name} GitHub`}
                >
                  <ArrowUpRight size={20} aria-hidden="true" />
                </a>
              </div>
              <p className="project-summary">{featuredProject.summary}</p>
              <div className="stack-list">
                {featuredProject.stack.slice(0, 6).map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
              <div className="project-proof-list">
                {featuredProject.highlights.slice(0, 2).map((highlight) => (
                  <p key={highlight}>{highlight}</p>
                ))}
              </div>
            </div>
          </article>

          <div className="compact-project-list" aria-label="Supporting projects">
            {supportingProjects.map((project) => (
              <article className="compact-project-card" key={project.name}>
                <img className="project-thumb" src={project.image} alt={`${project.name} preview`} />
                <div className="compact-project-copy">
                  <div className="project-card-head">
                    <div>
                      <p className="project-role">{project.category}</p>
                      <h3>{project.name}</h3>
                      <p className="compact-role">{project.role}</p>
                    </div>
                    <a
                      className="icon-link"
                      href={project.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${project.name} GitHub`}
                    >
                      <ArrowUpRight size={18} aria-hidden="true" />
                    </a>
                  </div>
                  <p className="project-summary">{project.summary}</p>
                  <div className="stack-list compact-stack">
                    {project.stack.slice(0, 4).map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                    {project.stack.length > 4 ? <span>+{project.stack.length - 4}</span> : null}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-grid" id="skills">
        <div>
          <p className="section-label">Skills</p>
          <h2>Tools I use to move from workflow to working software.</h2>
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
            <h2>J&amp;T Express - Post Office Operations Specialist</h2>
            <p>
              Handled branch logistics, shipment processing, inventory control, and daily operations for 3 months
              full-time. That hands-on context shaped the operational scenarios, requirements, and service boundaries
              in Nexus Express.
            </p>
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div>
          <p className="section-label">Contact</p>
          <h2>Open to backend and full-stack intern roles.</h2>
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
          <a href="https://www.linkedin.com/in/t%C3%BA-t%C3%A0i-v%C3%B5-v%C4%83n-2b27403b2/" target="_blank" rel="noreferrer">
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
          Business Apps · Backend Systems
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
