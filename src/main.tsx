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
    description: "A practical business app showing CRUD workflows, roles, authentication, payment, reports, and database-backed screens.",
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
    title: "Architecture Practice Projects",
    description: "Larger project-based practice with Node.js, React/Vite, NestJS, Docker, messaging, and service-boundary concepts.",
    projects: [
      {
        name: "Nexus Express",
        role: "Logistics Management System",
        href: "https://github.com/VoVanTuTai/logistics-management-system",
        image: "/assets/project-nexus.png",
        stack: ["TypeScript", "NestJS", "React/Vite", "PostgreSQL", "Prisma", "RabbitMQ", "Docker"],
        summary:
          "A logistics practice project for shipment creation, pickup, hub operations, courier delivery, tracking, COD, and reporting.",
        highlights: [
          "Practiced service-boundary design across Gateway/BFF, domain events, and database ownership ideas.",
          "Built dispatch, scan, tracking, OpenAPI contract, Prisma model, RabbitMQ exposure, and Docker Compose flows.",
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
          "A ride-hailing practice system exploring customer, driver, and admin workflows across independent services.",
        highlights: [
          "Explored booking, ride lifecycle, pricing, payment, notification, review, and admin workflows.",
          "Practiced REST/OpenAPI contracts, Kafka exposure, Redis coordination ideas, and database-per-service ownership.",
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
          "Created Auth, Product, and Order practice services with MongoDB and JWT authentication.",
          "Added RabbitMQ pub/sub exposure, Docker Compose, health checks, API Gateway routing, and Mocha tests.",
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
    items: ["PHP", "JavaScript", "Java", "basic TypeScript"],
  },
  {
    icon: ServerCog,
    title: "Web Development",
    items: ["HTML/CSS", "Bootstrap", "PHP web basics", "EJS", "basic React/Vite"],
  },
  {
    icon: Database,
    title: "Data",
    items: ["MySQL", "SQL basics", "Database Design", "ERD", "PostgreSQL basics", "MongoDB basics"],
  },
  {
    icon: Network,
    title: "Project Exposure",
    items: ["Node.js basics", "Express.js", "REST APIs", "Docker Compose basics", "RabbitMQ/Kafka exposure"],
  },
];

const stats = [
  { label: "Core web focus", value: "PHP" },
  { label: "Public projects", value: "4" },
  { label: "Database focus", value: "SQL" },
  { label: "Expected graduation", value: "2026" },
];

const proofSignals = [
  {
    label: "Core skills",
    value: "PHP, HTML/CSS, Bootstrap, JavaScript, MySQL, Git, and Postman.",
  },
  {
    label: "Business app",
    value: "CRUD workflows, role-based screens, auth, booking, payment, and reports.",
  },
  {
    label: "Project exposure",
    value: "Node.js, Express.js, React/Vite, Docker Compose, RabbitMQ/Kafka concepts.",
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
              <p className="profile-name">Web Developer Intern</p>
              <p className="profile-meta">Ho Chi Minh City · Information Systems student</p>
            </div>
          </div>
          <p className="eyebrow">Portfolio</p>
          <h1>Vo Van Tu Tai</h1>
          <p className="hero-lede">
            Information Systems student focused on practical web development with PHP, HTML/CSS, Bootstrap,
            JavaScript, and SQL fundamentals, with project-based exposure to Node.js, React/Vite, Docker, and
            backend architecture concepts.
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
                <p className="panel-label">Web Developer Portfolio</p>
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
                <span>Project exposure</span>
                <p>Node.js · React/Vite · Docker · Messaging concepts</p>
              </div>
            </div>
            <div className="visual-footer">
              <span>PHP / MySQL</span>
              <span>HTML / Bootstrap</span>
              <span>Node exposure</span>
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
          <h2>Web developer intern focused on practical business workflows.</h2>
        </div>
        <div className="section-body">
          <p>
            I study Information Systems at Industrial University of Ho Chi Minh City and focus on building practical
            web interfaces, CRUD workflows, relational database models, and maintainable business application flows.
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
            The portfolio leads with one complete business web app, then keeps the larger Node.js and microservice-style
            practice projects compact and easy to compare.
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
          <h2>Core web skills, plus project-based backend exposure.</h2>
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
              full-time. That hands-on context shaped the shipment workflows, requirements, and operational scenarios
              in Nexus Express.
            </p>
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div>
          <p className="section-label">Contact</p>
          <h2>Open to web developer and full-stack intern roles.</h2>
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
