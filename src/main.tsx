import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import {
  ArrowLeft,
  ArrowUpRight,
  BookOpen,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  Database,
  Download,
  Github,
  KeyRound,
  Linkedin,
  Mail,
  MapPin,
  Network,
  ServerCog,
  Sparkles,
  Table2,
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

type SkillGroup = {
  icon: React.ComponentType<{ size?: number; "aria-hidden"?: boolean | "true" | "false" }>;
  title: string;
  items: string[];
  href?: string;
  linkLabel?: string;
};

const skillGroups: SkillGroup[] = [
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
    href: "/knowledge/database",
    linkLabel: "Study database fundamentals",
  },
  {
    icon: Network,
    title: "Backend & Tools",
    items: ["Node.js/Express working knowledge", "REST APIs", "Git/Postman", "Docker Compose", "RabbitMQ/Kafka exposure"],
    href: "/knowledge/backend-api",
    linkLabel: "Study backend & REST APIs",
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

type NavigateHandler = (event: React.MouseEvent<HTMLAnchorElement>, path: string) => void;

function PortfolioPage({ navigate }: { navigate: NavigateHandler }) {
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
            <a className="secondary-action" href="/VoVanTuTai_CV.pdf" download>
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
                className="skill-card skill-card-clickable"
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
          <a href="/VoVanTuTai_CV.pdf" download>
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

function DatabaseLessonPage({ navigate }: { navigate: NavigateHandler }) {
  return (
    <main className="site-shell knowledge-shell">
      <header className="topbar knowledge-topbar" aria-label="Knowledge navigation">
        <a className="brand" href="/" onClick={(event) => navigate(event, "/")} aria-label="Back to portfolio">
          <img className="brand-avatar" src="/assets/avatar.png" alt="" aria-hidden="true" />
          <span>Vo Van Tu Tai</span>
        </a>
        <nav>
          <a href="#overview">Khái niệm</a>
          <a href="#sql-vs-nosql">SQL và NoSQL</a>
          <a href="#database-selection">Cách lựa chọn</a>
          <a href="#interview-questions">Phỏng vấn</a>
        </nav>
      </header>

      <section className="knowledge-hero">
        <div>
          <a className="back-link" href="/" onClick={(event) => navigate(event, "/")}>
            <ArrowLeft size={17} aria-hidden="true" />
            Trở về portfolio
          </a>
          <p className="eyebrow">Database Fundamentals · Bài 01</p>
          <h1>Database là gì và dữ liệu được tổ chức như thế nào?</h1>
          <p className="knowledge-lede">
            Hiểu cách hệ thống tổ chức dữ liệu, SQL và NoSQL giải quyết những bài toán khác nhau ra sao, và cách
            lựa chọn database dựa trên yêu cầu thật của một dự án.
          </p>
          <div className="lesson-meta" aria-label="Lesson information">
            <span><BookOpen size={16} aria-hidden="true" /> Nền tảng</span>
            <span>25 phút đọc</span>
            <span>25 câu ôn tập</span>
          </div>
        </div>

        <aside className="learning-outcomes">
          <p className="panel-label">Sau bài này, bạn có thể</p>
          <ul>
            <li><CheckCircle2 size={18} aria-hidden="true" /> Phân biệt database và DBMS.</li>
            <li><CheckCircle2 size={18} aria-hidden="true" /> Mô tả table, row, column và relationship.</li>
            <li><CheckCircle2 size={18} aria-hidden="true" /> So sánh SQL với các mô hình NoSQL.</li>
            <li><CheckCircle2 size={18} aria-hidden="true" /> Chọn database dựa trên access pattern và nghiệp vụ.</li>
          </ul>
        </aside>
      </section>

      <div className="lesson-layout">
        <aside className="lesson-toc" aria-label="Mục lục bài học">
          <p>Mục lục</p>
          <a href="#overview">1. Database là gì?</a>
          <a href="#dbms">2. Database và DBMS</a>
          <a href="#organization">3. Cách tổ chức dữ liệu</a>
          <a href="#relational-model">4. Mô hình quan hệ</a>
          <a href="#sql-vs-nosql">5. SQL và NoSQL</a>
          <a href="#nosql-models">6. Các loại NoSQL</a>
          <a href="#database-selection">7. Cách lựa chọn</a>
          <a href="#design-principles">8. Thiết kế dữ liệu</a>
          <a href="#project-connection">9. Liên hệ project</a>
          <a href="#interview-questions">10. Câu hỏi phỏng vấn</a>
          <a href="#review">11. Tự kiểm tra</a>
        </aside>

        <article className="lesson-content">
          <section className="lesson-section" id="overview">
            <p className="section-label">01 · Khái niệm</p>
            <h2>Database là một tập hợp dữ liệu có tổ chức</h2>
            <p>
              Database, hay cơ sở dữ liệu, là nơi dữ liệu được lưu theo một cấu trúc xác định để con người và phần
              mềm có thể tìm kiếm, thêm mới, cập nhật và quản lý dữ liệu một cách nhất quán.
            </p>
            <div className="definition-card">
              <strong>Ví dụ thực tế</strong>
              <p>
                Một cửa hàng trực tuyến cần lưu khách hàng, sản phẩm và đơn hàng. Nếu dữ liệu chỉ nằm trong nhiều
                file rời rạc, việc tìm “mọi đơn hàng của một khách hàng” sẽ khó và dễ sai. Database tạo ra cấu trúc
                chung để các dữ liệu này có thể liên kết với nhau.
              </p>
            </div>
          </section>

          <section className="lesson-section" id="dbms">
            <p className="section-label">02 · Công cụ quản lý</p>
            <h2>Database không phải là DBMS</h2>
            <div className="comparison-grid">
              <div>
                <Database size={22} aria-hidden="true" />
                <h3>Database</h3>
                <p>Phần dữ liệu và cấu trúc dùng để tổ chức dữ liệu.</p>
                <span>Ví dụ: database của hệ thống bán hàng</span>
              </div>
              <div>
                <ServerCog size={22} aria-hidden="true" />
                <h3>DBMS</h3>
                <p>Phần mềm giúp tạo, truy vấn, bảo vệ và vận hành database.</p>
                <span>Ví dụ: MySQL, PostgreSQL, MongoDB</span>
              </div>
            </div>
          </section>

          <section className="lesson-section" id="organization">
            <p className="section-label">03 · Cấu trúc</p>
            <h2>Dữ liệu quan hệ được tổ chức thành bảng</h2>
            <p>
              Trong relational database, dữ liệu được chia thành các bảng theo từng nhóm đối tượng. Mỗi thành phần
              của bảng đảm nhận một vai trò rõ ràng.
            </p>
            <div className="concept-grid">
              <div><Table2 size={20} aria-hidden="true" /><strong>Table</strong><span>Một nhóm đối tượng, ví dụ Customer.</span></div>
              <div><Network size={20} aria-hidden="true" /><strong>Row</strong><span>Một bản ghi khách hàng cụ thể.</span></div>
              <div><Code2 size={20} aria-hidden="true" /><strong>Column</strong><span>Một thuộc tính như name hoặc email.</span></div>
              <div><KeyRound size={20} aria-hidden="true" /><strong>Key</strong><span>Định danh và liên kết các bản ghi.</span></div>
            </div>

            <div className="data-table-wrap" aria-label="Customer table example">
              <div className="table-caption">
                <strong>customers</strong>
                <span>Mỗi hàng là một khách hàng</span>
              </div>
              <table>
                <thead>
                  <tr><th>customer_id</th><th>full_name</th><th>email</th></tr>
                </thead>
                <tbody>
                  <tr><td>101</td><td>Nguyen An</td><td>an@example.com</td></tr>
                  <tr><td>102</td><td>Tran Binh</td><td>binh@example.com</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="lesson-section" id="relational-model">
            <p className="section-label">04 · Mối quan hệ</p>
            <h2>Các bảng liên kết bằng khóa</h2>
            <p>
              Thay vì lặp lại toàn bộ thông tin khách hàng trong từng đơn hàng, bảng <code>orders</code> chỉ lưu
              <code>customer_id</code>. Giá trị này tham chiếu đến khách hàng đã tồn tại trong bảng
              <code>customers</code>.
            </p>
            <div className="relation-diagram">
              <div className="entity-card">
                <strong>customers</strong>
                <span><KeyRound size={14} aria-hidden="true" /> customer_id · PK</span>
                <span>full_name</span>
                <span>email</span>
              </div>
              <div className="relation-line"><span>1</span><b>có nhiều</b><span>N</span></div>
              <div className="entity-card">
                <strong>orders</strong>
                <span><KeyRound size={14} aria-hidden="true" /> order_id · PK</span>
                <span>customer_id · FK</span>
                <span>total_amount</span>
              </div>
            </div>
            <p className="lesson-note">
              <strong>PK</strong> (Primary Key) định danh duy nhất một bản ghi. <strong>FK</strong> (Foreign Key)
              tạo liên kết đến khóa chính của bảng khác.
            </p>
          </section>

          <section className="lesson-section" id="sql-vs-nosql">
            <p className="section-label">05 · Hai hướng tổ chức dữ liệu</p>
            <h2>SQL và NoSQL không phải hai đối thủ tuyệt đối</h2>
            <p>
              <strong>SQL</strong> là ngôn ngữ truy vấn dữ liệu quan hệ. MySQL, PostgreSQL và SQL Server là các
              DBMS sử dụng SQL. <strong>NoSQL</strong> là tên gọi chung cho các database không bắt buộc tổ chức
              dữ liệu theo bảng quan hệ truyền thống, chẳng hạn document, key-value, wide-column và graph.
            </p>

            <div className="database-type-grid">
              <article className="database-type-card sql-card">
                <span className="database-type-label">Relational database</span>
                <h3>SQL</h3>
                <p>Dữ liệu nằm trong bảng có schema rõ ràng và liên kết qua khóa.</p>
                <ul>
                  <li>Mạnh về quan hệ, JOIN và truy vấn báo cáo.</li>
                  <li>Transaction và ràng buộc dữ liệu chặt chẽ.</li>
                  <li>Phù hợp dữ liệu nghiệp vụ cần tính đúng đắn cao.</li>
                </ul>
                <strong>Ví dụ: MySQL, PostgreSQL, SQL Server</strong>
              </article>

              <article className="database-type-card nosql-card">
                <span className="database-type-label">Non-relational databases</span>
                <h3>NoSQL</h3>
                <p>Dữ liệu có thể được tổ chức theo document, cặp key-value, graph hoặc mô hình khác.</p>
                <ul>
                  <li>Schema linh hoạt hơn cho dữ liệu thường xuyên thay đổi.</li>
                  <li>Thường tối ưu theo một access pattern cụ thể.</li>
                  <li>Có nhiều mô hình với ưu điểm hoàn toàn khác nhau.</li>
                </ul>
                <strong>Ví dụ: MongoDB, Redis, Cassandra, Neo4j</strong>
              </article>
            </div>

            <div className="data-shape-example">
              <div className="example-heading">
                <div>
                  <span>Cùng một đơn hàng</span>
                  <h3>Hai cách biểu diễn dữ liệu</h3>
                </div>
                <p>Cấu trúc lưu trữ nên phục vụ cách ứng dụng đọc và cập nhật dữ liệu.</p>
              </div>

              <div className="code-comparison">
                <div>
                  <span className="code-label">SQL · Dữ liệu tách thành các bảng</span>
                  <pre><code>{`SELECT o.id, c.full_name, o.total_amount
FROM orders AS o
JOIN customers AS c
  ON c.id = o.customer_id
WHERE o.id = 501;`}</code></pre>
                  <p>Khách hàng được lưu một lần; order tham chiếu bằng foreign key.</p>
                </div>
                <div>
                  <span className="code-label">Document · Dữ liệu liên quan có thể đặt cùng nhau</span>
                  <pre><code>{`{
  "_id": 501,
  "customer": {
    "id": 101,
    "name": "Nguyen An"
  },
  "totalAmount": 850000
}`}</code></pre>
                  <p>Ứng dụng có thể đọc toàn bộ order bằng một document, đổi lại có thể lặp dữ liệu khách hàng.</p>
                </div>
              </div>
            </div>

            <p className="lesson-note">
              <strong>Điểm cần nhớ:</strong> NoSQL không có nghĩa là “không dùng SQL trong mọi trường hợp”, cũng
              không đồng nghĩa với “nhanh hơn SQL”. Hiệu năng phụ thuộc vào mô hình dữ liệu, index, truy vấn và
              cách hệ thống được vận hành.
            </p>
          </section>

          <section className="lesson-section" id="nosql-models">
            <p className="section-label">06 · Các mô hình NoSQL</p>
            <h2>NoSQL là một nhóm nhiều loại database</h2>
            <p>
              Khi nói “chọn NoSQL”, ta vẫn phải trả lời loại NoSQL nào phù hợp với dữ liệu và truy vấn của hệ
              thống. Mỗi mô hình được thiết kế cho một nhóm bài toán khác nhau.
            </p>

            <div className="nosql-model-grid">
              <article>
                <span>Document</span>
                <h3>MongoDB</h3>
                <p>Lưu object gần với JSON; phù hợp catalog có thuộc tính linh hoạt, content và hồ sơ tổng hợp.</p>
                <small>Truy cập chính: lấy document theo ID hoặc field đã index.</small>
              </article>
              <article>
                <span>Key-value</span>
                <h3>Redis</h3>
                <p>Truy cập giá trị qua key rất nhanh; phù hợp cache, session, rate limit và dữ liệu tạm thời.</p>
                <small>Truy cập chính: biết key và lấy value trực tiếp.</small>
              </article>
              <article>
                <span>Wide-column</span>
                <h3>Cassandra</h3>
                <p>Phân tán lượng ghi lớn trên nhiều node; thường dùng cho event, telemetry và time-series quy mô lớn.</p>
                <small>Truy cập chính: query được xác định trước theo partition key.</small>
              </article>
              <article>
                <span>Graph</span>
                <h3>Neo4j</h3>
                <p>Tối ưu việc đi qua nhiều tầng quan hệ; phù hợp social graph, recommendation và fraud detection.</p>
                <small>Truy cập chính: tìm đường đi và quan hệ giữa các node.</small>
              </article>
            </div>
          </section>

          <section className="lesson-section" id="database-selection">
            <p className="section-label">07 · Ra quyết định</p>
            <h2>Chọn database từ yêu cầu, không chọn từ xu hướng</h2>
            <p>
              Bắt đầu bằng các câu hỏi về dữ liệu và cách ứng dụng sử dụng dữ liệu. Tên công nghệ chỉ nên xuất
              hiện sau khi ta hiểu consistency, relationship, access pattern, quy mô và năng lực vận hành.
            </p>

            <div className="decision-table-wrap">
              <table className="decision-table">
                <thead>
                  <tr>
                    <th>Yêu cầu dự án</th>
                    <th>Thiên về SQL</th>
                    <th>Thiên về NoSQL</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Quan hệ dữ liệu</td>
                    <td>Nhiều quan hệ và JOIN linh hoạt</td>
                    <td>Dữ liệu thường được đọc nguyên khối hoặc theo key</td>
                  </tr>
                  <tr>
                    <td>Tính nhất quán</td>
                    <td>Đơn hàng, thanh toán, tồn kho cần transaction chặt</td>
                    <td>Một số dữ liệu chấp nhận nhất quán sau cùng</td>
                  </tr>
                  <tr>
                    <td>Schema</td>
                    <td>Cấu trúc ổn định, constraint rõ ràng</td>
                    <td>Thuộc tính thay đổi nhiều giữa các record</td>
                  </tr>
                  <tr>
                    <td>Truy vấn</td>
                    <td>Báo cáo và truy vấn ad hoc đa dạng</td>
                    <td>Access pattern rõ và được thiết kế trước</td>
                  </tr>
                  <tr>
                    <td>Quy mô</td>
                    <td>Đáp ứng tốt phần lớn ứng dụng; có thể scale dọc và ngang</td>
                    <td>Một số loại được thiết kế để phân tán ghi/đọc rất lớn</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="selection-rule">
              <span>Quy tắc khởi đầu thực dụng</span>
              <p>
                Với business application mới có user, order, booking, payment hoặc inventory, hãy bắt đầu bằng
                PostgreSQL/MySQL nếu chưa có yêu cầu đặc biệt. Thêm Redis cho cache/session hoặc MongoDB cho một
                bounded context có document linh hoạt khi đã xác định được lý do cụ thể.
              </p>
            </div>

            <h3 className="scenario-heading">Ví dụ lựa chọn theo dự án</h3>
            <div className="scenario-grid">
              <article>
                <span>E-commerce</span>
                <h3>PostgreSQL/MySQL làm nguồn dữ liệu chính</h3>
                <p>Order, payment và inventory cần constraint và transaction. Redis có thể hỗ trợ cart hoặc cache.</p>
                <strong>Không nên đưa order vào Redis như nguồn dữ liệu duy nhất.</strong>
              </article>
              <article>
                <span>Content / Product catalog</span>
                <h3>SQL hoặc document database</h3>
                <p>Nếu thuộc tính sản phẩm rất khác nhau theo ngành hàng, MongoDB có thể giảm schema phức tạp.</p>
                <strong>Nếu cần báo cáo và quan hệ chặt, PostgreSQL với JSONB cũng là lựa chọn mạnh.</strong>
              </article>
              <article>
                <span>Logistics tracking</span>
                <h3>Polyglot persistence có chủ đích</h3>
                <p>SQL giữ shipment và trạng thái nghiệp vụ; event store hoặc hệ time-series giữ lượng scan lớn.</p>
                <strong>Mỗi database có ownership rõ, không chia sẻ dữ liệu tùy tiện.</strong>
              </article>
              <article>
                <span>MVP / Student project</span>
                <h3>Một relational database thường là đủ</h3>
                <p>Giảm chi phí học, deploy, backup và đồng bộ dữ liệu trước khi hệ thống thực sự cần nhiều database.</p>
                <strong>Đơn giản trong vận hành cũng là một yêu cầu kỹ thuật.</strong>
              </article>
            </div>

            <div className="decision-checklist">
              <p className="panel-label">Checklist trước khi quyết định</p>
              <ol>
                <li><span>1</span><p><strong>Dữ liệu cốt lõi là gì?</strong> Xác định entity, vòng đời và mức độ quan trọng.</p></li>
                <li><span>2</span><p><strong>Ứng dụng đọc và ghi thế nào?</strong> Liệt kê access pattern phổ biến trước khi thiết kế schema.</p></li>
                <li><span>3</span><p><strong>Sai lệch dữ liệu có được chấp nhận?</strong> Thanh toán khác hoàn toàn lượt xem bài viết.</p></li>
                <li><span>4</span><p><strong>Đội ngũ vận hành được gì?</strong> Backup, monitoring và recovery quan trọng như tính năng database.</p></li>
                <li><span>5</span><p><strong>Có bằng chứng cần nhiều database chưa?</strong> Đừng tăng độ phức tạp chỉ vì kiến trúc trông hiện đại.</p></li>
              </ol>
            </div>
          </section>

          <section className="lesson-section" id="design-principles">
            <p className="section-label">08 · Tư duy thiết kế</p>
            <h2>Ba câu hỏi trước khi tạo bảng</h2>
            <ol className="principle-list">
              <li><span>01</span><div><strong>Đối tượng nào cần được lưu?</strong><p>Ví dụ: Customer, Product, Order.</p></div></li>
              <li><span>02</span><div><strong>Mỗi đối tượng có thuộc tính gì?</strong><p>Ví dụ: Product có name, price và stock.</p></div></li>
              <li><span>03</span><div><strong>Các đối tượng liên hệ với nhau thế nào?</strong><p>Ví dụ: một Customer có thể tạo nhiều Order.</p></div></li>
            </ol>
          </section>

          <section className="lesson-section" id="project-connection">
            <p className="section-label">09 · Áp dụng</p>
            <h2>Kiến thức này xuất hiện ở đâu trong portfolio?</h2>
            <div className="project-connection-grid">
              <div>
                <span>PHP / MySQL</span>
                <h3>Song Tai Shop</h3>
                <p>Sản phẩm, tài khoản, giỏ hàng và đơn hàng là các nhóm dữ liệu có quan hệ.</p>
              </div>
              <div>
                <span>Express / Sequelize / MySQL</span>
                <h3>Tourist Accommodation</h3>
                <p>Người dùng, phòng, booking, thanh toán và review được tổ chức thành các mô hình nghiệp vụ.</p>
              </div>
              <div>
                <span>PostgreSQL / MongoDB / Redis</span>
                <h3>Cab Booking Architecture</h3>
                <p>Mỗi loại dữ liệu được xem xét theo ownership, access pattern và vai trò trong kiến trúc.</p>
              </div>
            </div>
          </section>

          <section className="lesson-section interview-section" id="interview-questions">
            <p className="section-label">10 · Chuẩn bị phỏng vấn</p>
            <h2>Câu hỏi Database thường gặp</h2>
            <p>
              Hãy tự trả lời thành tiếng trước khi mở đáp án. Một câu trả lời tốt thường đi theo bốn bước:
              định nghĩa ngắn, giải thích mục đích, đưa ví dụ và kết thúc bằng trade-off hoặc lưu ý thực tế.
            </p>

            <div className="answer-framework">
              <span>Khung trả lời gợi ý</span>
              <ol>
                <li><strong>What:</strong> Khái niệm này là gì?</li>
                <li><strong>Why:</strong> Nó giải quyết vấn đề nào?</li>
                <li><strong>Example:</strong> Ví dụ trong project hoặc nghiệp vụ.</li>
                <li><strong>Trade-off:</strong> Khi nào không nên dùng hoặc cần lưu ý gì?</li>
              </ol>
            </div>

            <div className="interview-group">
              <div className="interview-group-heading">
                <span>Nền tảng</span>
                <strong>Relational database và thiết kế dữ liệu</strong>
              </div>
              <div className="interview-list">
                <details>
                  <summary><span>01</span>Primary Key và Foreign Key khác nhau thế nào?</summary>
                  <div className="interview-answer">
                    <p><strong>Primary Key</strong> định danh duy nhất một row và không được trùng. <strong>Foreign Key</strong> tham chiếu tới khóa của bảng khác để duy trì quan hệ và tính toàn vẹn dữ liệu.</p>
                    <p><em>Ví dụ:</em> <code>orders.id</code> là PK; <code>orders.customer_id</code> là FK tham chiếu <code>customers.id</code>.</p>
                  </div>
                </details>
                <details>
                  <summary><span>02</span>Normalization là gì? Vì sao cần chuẩn hóa?</summary>
                  <div className="interview-answer">
                    <p>Normalization tổ chức dữ liệu thành các bảng hợp lý để giảm lặp dữ liệu và tránh anomaly khi insert, update hoặc delete.</p>
                    <p>Trong business app, thường hướng tới 3NF trước; chỉ denormalize khi có bằng chứng về truy vấn hoặc hiệu năng.</p>
                  </div>
                </details>
                <details>
                  <summary><span>03</span>Quan hệ 1-1, 1-N và N-N được triển khai thế nào?</summary>
                  <div className="interview-answer">
                    <p>1-1 dùng FK có ràng buộc unique; 1-N đặt FK ở phía N; N-N cần bảng trung gian chứa FK của hai bảng.</p>
                    <p><em>Ví dụ:</em> <code>orders</code> và <code>products</code> liên kết N-N qua <code>order_items</code>.</p>
                  </div>
                </details>
                <details>
                  <summary><span>04</span>NULL khác chuỗi rỗng và số 0 như thế nào?</summary>
                  <div className="interview-answer">
                    <p>NULL biểu thị giá trị chưa biết hoặc không tồn tại; chuỗi rỗng và 0 vẫn là các giá trị xác định. So sánh NULL phải dùng <code>IS NULL</code>, không dùng <code>= NULL</code>.</p>
                  </div>
                </details>
              </div>
            </div>

            <div className="interview-group">
              <div className="interview-group-heading">
                <span>SQL thực hành</span>
                <strong>Query, JOIN và tối ưu truy vấn</strong>
              </div>
              <div className="interview-list">
                <details>
                  <summary><span>05</span>INNER JOIN và LEFT JOIN khác nhau thế nào?</summary>
                  <div className="interview-answer">
                    <p>INNER JOIN chỉ trả về row khớp ở cả hai bảng. LEFT JOIN giữ toàn bộ row bên trái và trả NULL cho dữ liệu không khớp bên phải.</p>
                    <p><em>Ví dụ:</em> dùng LEFT JOIN để tìm khách hàng chưa từng tạo order.</p>
                  </div>
                </details>
                <details>
                  <summary><span>06</span>WHERE và HAVING khác nhau thế nào?</summary>
                  <div className="interview-answer">
                    <p>WHERE lọc row trước khi GROUP BY; HAVING lọc kết quả sau khi đã group và aggregate.</p>
                    <p><em>Ví dụ:</em> <code>HAVING COUNT(*) &gt; 5</code> tìm khách hàng có hơn 5 đơn hàng.</p>
                  </div>
                </details>
                <details>
                  <summary><span>07</span>Subquery và JOIN nên chọn cách nào?</summary>
                  <div className="interview-answer">
                    <p>Không có lựa chọn luôn tốt hơn. Chọn cách diễn đạt rõ ý định và kiểm tra execution plan. JOIN phù hợp khi kết hợp tập dữ liệu; EXISTS thường rõ và hiệu quả khi chỉ cần kiểm tra sự tồn tại.</p>
                  </div>
                </details>
                <details>
                  <summary><span>08</span>Index là gì và vì sao index có thể làm hệ thống chậm hơn?</summary>
                  <div className="interview-answer">
                    <p>Index là cấu trúc hỗ trợ tìm và sắp xếp dữ liệu nhanh hơn, nhưng chiếm bộ nhớ và phải cập nhật khi INSERT, UPDATE, DELETE.</p>
                    <p>Nên index theo query thực tế, đặc biệt các cột thường dùng trong WHERE, JOIN và ORDER BY; không index mọi cột.</p>
                  </div>
                </details>
                <details>
                  <summary><span>09</span>Bạn sẽ điều tra một query chậm như thế nào?</summary>
                  <div className="interview-answer">
                    <p>Đo thời gian và tần suất, dùng <code>EXPLAIN</code>/<code>EXPLAIN ANALYZE</code>, kiểm tra full scan, index, số row, JOIN, sort và dữ liệu trả về; sau đó tối ưu và đo lại.</p>
                    <p>Không nên thêm index theo phỏng đoán mà không kiểm tra execution plan.</p>
                  </div>
                </details>
              </div>
            </div>

            <div className="interview-group">
              <div className="interview-group-heading">
                <span>Tính đúng đắn</span>
                <strong>Transaction, ACID và concurrency</strong>
              </div>
              <div className="interview-list">
                <details>
                  <summary><span>10</span>Transaction là gì? Khi nào cần dùng?</summary>
                  <div className="interview-answer">
                    <p>Transaction nhóm nhiều thao tác thành một đơn vị: hoặc tất cả thành công, hoặc rollback. Cần dùng khi các thay đổi phải nhất quán với nhau.</p>
                    <p><em>Ví dụ:</em> tạo order, order items và cập nhật tồn kho không nên hoàn thành một phần.</p>
                  </div>
                </details>
                <details>
                  <summary><span>11</span>ACID có ý nghĩa gì?</summary>
                  <div className="interview-answer">
                    <p><strong>Atomicity</strong>: toàn bộ hoặc không gì cả. <strong>Consistency</strong>: dữ liệu giữ đúng constraint. <strong>Isolation</strong>: transaction đồng thời không gây kết quả sai. <strong>Durability</strong>: dữ liệu commit vẫn tồn tại sau sự cố.</p>
                  </div>
                </details>
                <details>
                  <summary><span>12</span>Race condition khi cập nhật tồn kho xảy ra thế nào?</summary>
                  <div className="interview-answer">
                    <p>Hai request cùng đọc stock còn 1 rồi đều trừ, gây overselling. Có thể xử lý bằng atomic update có điều kiện, locking phù hợp hoặc optimistic concurrency.</p>
                    <p>Cách chọn phụ thuộc mức cạnh tranh, DBMS và yêu cầu throughput.</p>
                  </div>
                </details>
              </div>
            </div>

            <div className="interview-group">
              <div className="interview-group-heading">
                <span>SQL và NoSQL</span>
                <strong>Lựa chọn công nghệ có lý do</strong>
              </div>
              <div className="interview-list">
                <details>
                  <summary><span>13</span>Khi nào bạn chọn SQL thay vì MongoDB?</summary>
                  <div className="interview-answer">
                    <p>Chọn SQL khi dữ liệu có quan hệ rõ, cần JOIN, constraint, transaction và báo cáo linh hoạt, như order, booking, payment và inventory.</p>
                    <p>MongoDB phù hợp hơn khi dữ liệu thường được đọc theo document và schema thay đổi đáng kể giữa các record.</p>
                  </div>
                </details>
                <details>
                  <summary><span>14</span>Redis có nên dùng làm database chính cho đơn hàng không?</summary>
                  <div className="interview-answer">
                    <p>Thông thường không. Redis mạnh cho cache, session, rate limit và dữ liệu truy cập theo key, nhưng order cần durability, quan hệ, transaction và khả năng truy vấn đáng tin cậy.</p>
                  </div>
                </details>
                <details>
                  <summary><span>15</span>Denormalization trong NoSQL có lợi và hại gì?</summary>
                  <div className="interview-answer">
                    <p>Lợi ích là giảm JOIN và tối ưu read theo access pattern. Đổi lại dữ liệu bị lặp, update phức tạp hơn và có nguy cơ không nhất quán.</p>
                    <p>Cần xác định nguồn dữ liệu chính và chiến lược đồng bộ trước khi denormalize.</p>
                  </div>
                </details>
              </div>
            </div>

            <div className="interview-group scenario-interview-group">
              <div className="interview-group-heading">
                <span>Tình huống project</span>
                <strong>Trả lời như một kỹ sư giải quyết nghiệp vụ</strong>
              </div>
              <div className="interview-list">
                <details>
                  <summary><span>16</span>Thiết kế database tối thiểu cho một hệ thống đặt phòng?</summary>
                  <div className="interview-answer">
                    <p>Bắt đầu với User, Accommodation, Room, Booking, Payment và Review. Booking tham chiếu user và room, có check-in/check-out, trạng thái và tổng tiền.</p>
                    <p>Phải làm rõ quy tắc tránh trùng lịch, hủy phòng, hoàn tiền, quyền provider/admin và báo cáo doanh thu trước khi chốt schema.</p>
                  </div>
                </details>
                <details>
                  <summary><span>17</span>Làm sao lưu lịch sử trạng thái shipment?</summary>
                  <div className="interview-answer">
                    <p>Giữ trạng thái hiện tại trên shipment để đọc nhanh và lưu mỗi lần chuyển trạng thái vào bảng shipment_events gồm shipment_id, status, location, actor và timestamp.</p>
                    <p>Cách này hỗ trợ tracking timeline, audit và điều tra sự cố mà không ghi đè lịch sử.</p>
                  </div>
                </details>
                <details>
                  <summary><span>18</span>Nếu interviewer hỏi “database nào tốt nhất?”, bạn trả lời thế nào?</summary>
                  <div className="interview-answer">
                    <p>Không có database tốt nhất cho mọi hệ thống. Tôi sẽ hỏi về entity, relationship, transaction, access pattern, quy mô, consistency, reporting và năng lực vận hành.</p>
                    <p>Với business app mới, tôi thường bắt đầu bằng PostgreSQL/MySQL và chỉ thêm database khác khi một yêu cầu cụ thể chứng minh lợi ích.</p>
                  </div>
                </details>
              </div>
            </div>
          </section>

          <section className="lesson-section review-section" id="review">
            <p className="section-label">11 · Tự kiểm tra</p>
            <h2>Bạn đã nắm được bài học chưa?</h2>
            <div className="review-list">
              <details><summary>1. Database và DBMS khác nhau như thế nào?</summary><p>Database là dữ liệu có tổ chức; DBMS là phần mềm dùng để tạo, truy vấn và quản lý dữ liệu đó.</p></details>
              <details><summary>2. Row và column đại diện cho điều gì?</summary><p>Row là một bản ghi cụ thể; column là một thuộc tính chung của các bản ghi trong bảng.</p></details>
              <details><summary>3. Vì sao không lưu lại toàn bộ thông tin khách hàng trong mỗi order?</summary><p>Việc lặp dữ liệu gây dư thừa và dễ mất nhất quán. Ta lưu khóa ngoại để tham chiếu đến khách hàng.</p></details>
              <details><summary>4. Primary Key có nhiệm vụ gì?</summary><p>Primary Key định danh duy nhất mỗi bản ghi trong một bảng.</p></details>
              <details><summary>5. SQL có phải là tên một database không?</summary><p>Không. SQL là ngôn ngữ truy vấn; MySQL, PostgreSQL và SQL Server mới là các hệ quản trị cơ sở dữ liệu sử dụng SQL.</p></details>
              <details><summary>6. Khi nào document database có thể phù hợp?</summary><p>Khi dữ liệu thường được đọc theo một object hoàn chỉnh, thuộc tính linh hoạt và hệ thống không phụ thuộc nhiều vào JOIN hoặc transaction xuyên nhiều entity.</p></details>
              <details><summary>7. Vì sao không nên chọn nhiều database ngay từ đầu?</summary><p>Mỗi database làm tăng chi phí triển khai, monitoring, backup, bảo mật và đồng bộ dữ liệu. Chỉ thêm khi một yêu cầu cụ thể chứng minh lợi ích lớn hơn độ phức tạp.</p></details>
            </div>
          </section>

          <div className="next-lesson">
            <span>Bài tiếp theo</span>
            <strong>Backend &amp; REST API Fundamentals</strong>
            <p>Đưa dữ liệu từ database ra ngoài thông qua một API có cấu trúc, validation và bảo mật.</p>
            <a
              className="next-lesson-link"
              href="/knowledge/backend-api"
              onClick={(event) => navigate(event, "/knowledge/backend-api")}
            >
              Bắt đầu bài 02
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          </div>
        </article>
      </div>

      <footer>
        <span>Database Fundamentals · Bài 01</span>
        <span><Sparkles size={15} aria-hidden="true" /> Learn from projects</span>
      </footer>
    </main>
  );
}

function BackendApiLessonPage({ navigate }: { navigate: NavigateHandler }) {
  const statusCodes = [
    ["200", "OK", "Đọc hoặc cập nhật thành công"],
    ["201", "Created", "Tạo resource mới thành công"],
    ["204", "No Content", "Thành công và không cần response body"],
    ["400", "Bad Request", "Request sai cú pháp hoặc dữ liệu không hợp lệ"],
    ["401", "Unauthorized", "Chưa xác thực hoặc token không hợp lệ"],
    ["403", "Forbidden", "Đã xác thực nhưng không có quyền"],
    ["404", "Not Found", "Resource không tồn tại"],
    ["409", "Conflict", "Xung đột trạng thái hoặc dữ liệu bị trùng"],
    ["500", "Server Error", "Lỗi không mong đợi từ phía server"],
  ];

  return (
    <main className="site-shell knowledge-shell backend-lesson">
      <header className="topbar knowledge-topbar" aria-label="Knowledge navigation">
        <a className="brand" href="/" onClick={(event) => navigate(event, "/")} aria-label="Back to portfolio">
          <img className="brand-avatar" src="/assets/avatar.png" alt="" aria-hidden="true" />
          <span>Vo Van Tu Tai</span>
        </a>
        <nav>
          <a href="#self-study-guide">Cách học</a>
          <a href="#rest-design">REST API</a>
          <a href="#auth-foundations">Authentication</a>
          <a href="#practice-project">Thực hành</a>
        </nav>
      </header>

      <section className="knowledge-hero backend-hero">
        <div>
          <a className="back-link" href="/" onClick={(event) => navigate(event, "/")}>
            <ArrowLeft size={17} aria-hidden="true" />
            Trở về portfolio
          </a>
          <p className="eyebrow">Backend Engineering · Bài 02</p>
          <h1>Từ database đến một REST API có thể sử dụng thật</h1>
          <p className="knowledge-lede">
            Tự học backend theo từng module ngắn: hiểu request lifecycle, thiết kế REST API, sau đó đi sâu vào
            authentication, session/token, authorization và cách kiểm thử một hệ thống đăng nhập an toàn.
          </p>
          <div className="lesson-meta" aria-label="Lesson information">
            <span><BookOpen size={16} aria-hidden="true" /> Tài liệu tự học</span>
            <span>6 module</span>
            <span>Bài tập sau mỗi phần</span>
          </div>
        </div>

        <aside className="learning-outcomes">
          <p className="panel-label">Sau bài này, bạn có thể</p>
          <ul>
            <li><CheckCircle2 size={18} aria-hidden="true" /> Giải thích request lifecycle từ client đến database.</li>
            <li><CheckCircle2 size={18} aria-hidden="true" /> Thiết kế endpoint, status code và response nhất quán.</li>
            <li><CheckCircle2 size={18} aria-hidden="true" /> Thiết kế login, session/token và refresh flow.</li>
            <li><CheckCircle2 size={18} aria-hidden="true" /> Kiểm thử authentication, authorization và ownership.</li>
          </ul>
        </aside>
      </section>

      <div className="lesson-layout">
        <aside className="lesson-toc" aria-label="Mục lục bài học">
          <p>Mục lục</p>
          <a href="#self-study-guide">1. Cách tự học</a>
          <a href="#mental-model">2. Backend làm gì?</a>
          <a href="#request-lifecycle">3. Request lifecycle</a>
          <a href="#rest-design">4. Thiết kế REST API</a>
          <a href="#status-codes">5. Status code</a>
          <a href="#validation">6. Validation và lỗi</a>
          <a href="#auth-foundations">7. Auth căn bản</a>
          <a href="#session-vs-token">8. Session và token</a>
          <a href="#token-lifecycle">9. Token lifecycle</a>
          <a href="#authorization">10. Phân quyền</a>
          <a href="#auth-security">11. Rủi ro bảo mật</a>
          <a href="#testing">12. Kiểm thử auth</a>
          <a href="#practice-project">13. Bài thực hành</a>
          <a href="#interview-backend">14. Tự kiểm tra</a>
          <a href="#auth-resources">15. Nguồn đọc thêm</a>
        </aside>

        <article className="lesson-content">
          <section className="lesson-section" id="self-study-guide">
            <p className="section-label">01 · Hướng dẫn tự học</p>
            <h2>Mỗi module đều có đầu ra để tự kiểm chứng</h2>
            <p>
              Đọc lần lượt, tự viết lại khái niệm bằng lời của bạn rồi hoàn thành bài tập nhỏ. Chỉ chuyển phần khi
              bạn tạo được đầu ra cụ thể thay vì chỉ cảm thấy mình đã hiểu.
            </p>
            <div className="study-cycle">
              <div><span>01</span><strong>Đọc</strong><p>Nắm câu hỏi mà khái niệm đang giải quyết.</p></div>
              <div><span>02</span><strong>Tóm tắt</strong><p>Viết 3-5 câu bằng ngôn ngữ của chính bạn.</p></div>
              <div><span>03</span><strong>Thực hành</strong><p>Code một flow nhỏ và quan sát request thật.</p></div>
              <div><span>04</span><strong>Tự kiểm tra</strong><p>Test trường hợp đúng, sai và bị từ chối.</p></div>
            </div>
            <div className="study-rule">
              <strong>Quy tắc học</strong>
              <p>Không học JWT trước khi giải thích được session. Không học refresh token trước khi hiểu access token hết hạn để làm gì.</p>
            </div>
          </section>

          <section className="lesson-section" id="mental-model">
            <p className="section-label">02 · Mental model</p>
            <h2>Backend là lớp bảo vệ nghiệp vụ và dữ liệu</h2>
            <p>
              Client gửi ý định, chẳng hạn “tạo công việc mới”. Backend xác thực người gửi, kiểm tra dữ liệu, áp
              dụng business rule, đọc hoặc ghi database rồi trả về một kết quả có cấu trúc.
            </p>
            <div className="backend-responsibility-grid">
              <article><Network size={21} aria-hidden="true" /><h3>Giao tiếp</h3><p>Nhận HTTP request và trả response theo contract.</p></article>
              <article><CheckCircle2 size={21} aria-hidden="true" /><h3>Nghiệp vụ</h3><p>Quyết định thao tác nào hợp lệ trong trạng thái hiện tại.</p></article>
              <article><KeyRound size={21} aria-hidden="true" /><h3>Bảo mật</h3><p>Xác minh danh tính và quyền truy cập resource.</p></article>
              <article><Database size={21} aria-hidden="true" /><h3>Dữ liệu</h3><p>Duy trì transaction, constraint và tính nhất quán.</p></article>
            </div>
            <p className="lesson-note">
              <strong>Tư duy quan trọng:</strong> frontend có thể hỗ trợ validation để UX tốt hơn, nhưng backend vẫn
              phải kiểm tra lại vì request có thể được gửi trực tiếp bằng Postman hoặc script.
            </p>
          </section>

          <section className="lesson-section" id="request-lifecycle">
            <p className="section-label">03 · Request lifecycle</p>
            <h2>Một request nên đi qua các trách nhiệm rõ ràng</h2>
            <div className="request-flow" aria-label="HTTP request lifecycle">
              <div><span>1</span><strong>Client</strong><small>POST /api/tasks</small></div>
              <b>→</b>
              <div><span>2</span><strong>Route</strong><small>Chọn handler</small></div>
              <b>→</b>
              <div><span>3</span><strong>Controller</strong><small>HTTP input/output</small></div>
              <b>→</b>
              <div><span>4</span><strong>Service</strong><small>Business rules</small></div>
              <b>→</b>
              <div><span>5</span><strong>Repository</strong><small>Database query</small></div>
            </div>
            <div className="definition-card">
              <strong>Nguyên tắc phân lớp</strong>
              <p>
                Controller không nên chứa toàn bộ nghiệp vụ. Service không nên phụ thuộc vào chi tiết HTTP.
                Repository tập trung vào truy cập dữ liệu. Phân lớp tốt giúp test dễ hơn và tránh một file xử lý
                mọi thứ.
              </p>
            </div>
          </section>

          <section className="lesson-section" id="rest-design">
            <p className="section-label">04 · API contract</p>
            <h2>Thiết kế endpoint xoay quanh resource</h2>
            <p>
              REST dùng HTTP method để thể hiện hành động và URL để định danh resource. Dùng danh từ số nhiều,
              giữ naming nhất quán và chỉ đưa động từ vào URL khi đó thực sự là một business action.
            </p>
            <div className="endpoint-table-wrap">
              <table className="endpoint-table">
                <thead><tr><th>Method</th><th>Endpoint</th><th>Ý nghĩa</th></tr></thead>
                <tbody>
                  <tr><td><code>GET</code></td><td>/api/tasks</td><td>Lấy danh sách, có filter và pagination</td></tr>
                  <tr><td><code>GET</code></td><td>/api/tasks/:id</td><td>Lấy một công việc</td></tr>
                  <tr><td><code>POST</code></td><td>/api/tasks</td><td>Tạo công việc mới</td></tr>
                  <tr><td><code>PATCH</code></td><td>/api/tasks/:id</td><td>Cập nhật một phần</td></tr>
                  <tr><td><code>DELETE</code></td><td>/api/tasks/:id</td><td>Xóa công việc</td></tr>
                  <tr><td><code>POST</code></td><td>/api/tasks/:id/complete</td><td>Business action: hoàn thành công việc</td></tr>
                </tbody>
              </table>
            </div>
            <div className="code-comparison api-example">
              <div>
                <span className="code-label">Request</span>
                <pre><code>{`POST /api/tasks
Content-Type: application/json

{
  "title": "Review REST API",
  "dueDate": "2026-06-15"
}`}</code></pre>
              </div>
              <div>
                <span className="code-label">Response · 201 Created</span>
                <pre><code>{`{
  "data": {
    "id": 42,
    "title": "Review REST API",
    "status": "TODO",
    "dueDate": "2026-06-15"
  }
}`}</code></pre>
              </div>
            </div>
          </section>

          <section className="lesson-section" id="status-codes">
            <p className="section-label">05 · HTTP semantics</p>
            <h2>Status code là một phần của contract</h2>
            <div className="status-code-grid">
              {statusCodes.map(([code, title, description]) => (
                <article key={code}>
                  <strong>{code}</strong>
                  <div><span>{title}</span><p>{description}</p></div>
                </article>
              ))}
            </div>
          </section>

          <section className="lesson-section" id="validation">
            <p className="section-label">06 · Dữ liệu đầu vào</p>
            <h2>Validation tốt trả lời rõ: sai ở đâu và sửa thế nào?</h2>
            <p>
              Kiểm tra kiểu dữ liệu, field bắt buộc và định dạng ở boundary. Business rule như “không hoàn thành
              task đã bị hủy” thuộc service. Constraint duy nhất vẫn cần được bảo vệ ở database.
            </p>
            <div className="code-comparison api-example">
              <div>
                <span className="code-label">Không nên</span>
                <pre><code>{`{
  "error": "Something went wrong"
}`}</code></pre>
                <p>Client không biết field nào sai hoặc nên xử lý ra sao.</p>
              </div>
              <div>
                <span className="code-label">Response lỗi có cấu trúc</span>
                <pre><code>{`{
  "code": "VALIDATION_ERROR",
  "message": "Request data is invalid",
  "errors": [
    {
      "field": "title",
      "message": "Title is required"
    }
  ]
}`}</code></pre>
              </div>
            </div>
          </section>

          <section className="lesson-section auth-section" id="auth-foundations">
            <p className="section-label">07 · Authentication foundations</p>
            <h2>Authentication là quá trình thiết lập và duy trì danh tính</h2>
            <p>
              Một hệ thống auth không kết thúc ở endpoint login. Nó bắt đầu từ đăng ký và lưu password, tiếp tục
              qua việc tạo session, xác thực từng request, gia hạn hoặc thu hồi quyền truy cập, rồi kết thúc bằng
              logout và xử lý tài khoản bị xâm nhập.
            </p>
            <div className="comparison-grid">
              <div>
                <KeyRound size={22} aria-hidden="true" />
                <h3>Authentication</h3>
                <p>Chứng minh request đang đại diện cho danh tính nào.</p>
                <span>Login, session, token, MFA, logout</span>
              </div>
              <div>
                <ServerCog size={22} aria-hidden="true" />
                <h3>Authorization</h3>
                <p>Quyết định danh tính đó được thực hiện hành động nào.</p>
                <span>Role, permission, policy, ownership</span>
              </div>
            </div>
            <div className="auth-flow" aria-label="Authentication lifecycle">
              <div><span>1</span><strong>Register</strong><small>Validate và hash password</small></div>
              <div><span>2</span><strong>Login</strong><small>Verify credential</small></div>
              <div><span>3</span><strong>Issue</strong><small>Tạo session hoặc token</small></div>
              <div><span>4</span><strong>Authenticate</strong><small>Xác thực mỗi request</small></div>
              <div><span>5</span><strong>Expire / revoke</strong><small>Hết hạn, logout, khóa tài khoản</small></div>
            </div>
            <h3 className="scenario-heading">Password phải được xử lý như dữ liệu nhạy cảm đặc biệt</h3>
            <ol className="security-checklist">
              <li><span>01</span><p>Dùng password hashing chuyên dụng với salt và cost phù hợp; không mã hóa hai chiều và không tự phát minh thuật toán.</p></li>
              <li><span>02</span><p>Không ghi password, token hoặc secret vào log; response đăng ký và login không được trả password hash.</p></li>
              <li><span>03</span><p>Rate limit và theo dõi login thất bại để giảm brute force, nhưng tránh thông báo làm lộ email nào đã tồn tại.</p></li>
              <li><span>04</span><p>Password reset dùng token ngẫu nhiên, một lần, có thời hạn; đổi password nên thu hồi các session nhạy cảm.</p></li>
            </ol>
            <div className="self-check">
              <span>Bài tập 07</span>
              <p>Vẽ sequence diagram cho register và login. Đánh dấu chính xác nơi password chuyển thành hash và nơi session/token được tạo.</p>
            </div>
          </section>

          <section className="lesson-section auth-section" id="session-vs-token">
            <p className="section-label">08 · Session hay token?</p>
            <h2>Chọn cơ chế theo kiến trúc, không theo độ phổ biến</h2>
            <div className="auth-choice-grid">
              <article>
                <span>Server-side state</span>
                <h3>Session cookie</h3>
                <p>Browser giữ một session ID; trạng thái đăng nhập nằm phía server hoặc session store.</p>
                <ul>
                  <li>Thu hồi và logout đơn giản.</li>
                  <li>Phù hợp web app cùng hệ thống backend.</li>
                  <li>Cần bảo vệ cookie và xử lý CSRF.</li>
                </ul>
              </article>
              <article>
                <span>Signed credential</span>
                <h3>Access token</h3>
                <p>Client gửi credential có thời hạn; API xác thực token trước khi xử lý request.</p>
                <ul>
                  <li>Phù hợp API, mobile và hệ thống phân tán khi có lý do rõ.</li>
                  <li>Khó thu hồi token đã phát hành hơn session.</li>
                  <li>JWT chỉ được ký, payload không mặc định được mã hóa.</li>
                </ul>
              </article>
            </div>
            <div className="decision-table-wrap">
              <table className="decision-table">
                <thead><tr><th>Câu hỏi</th><th>Session</th><th>Token</th></tr></thead>
                <tbody>
                  <tr><td>Trạng thái nằm đâu?</td><td>Session store phía server</td><td>Credential được client mang theo</td></tr>
                  <tr><td>Thu hồi ngay?</td><td>Xóa session tương đối trực tiếp</td><td>Cần thời hạn ngắn, denylist hoặc cơ chế revocation</td></tr>
                  <tr><td>Browser lưu ở đâu?</td><td>Cookie HttpOnly, Secure, SameSite phù hợp</td><td>Ưu tiên cookie bảo vệ hoặc BFF; tránh localStorage cho credential nhạy cảm</td></tr>
                  <tr><td>Rủi ro chính</td><td>CSRF và session fixation/hijacking</td><td>Token theft, replay và cấu hình validation sai</td></tr>
                </tbody>
              </table>
            </div>
            <p className="lesson-note">
              <strong>Không đồng nhất khái niệm:</strong> cookie là cơ chế vận chuyển/lưu trữ của browser; session là
              trạng thái đăng nhập; JWT là một định dạng token. JWT vẫn có thể được gửi bằng cookie.
            </p>
            <div className="self-check">
              <span>Bài tập 08</span>
              <p>Chọn session hoặc token cho portfolio, web admin và mobile app. Viết hai lý do và một rủi ro cho từng lựa chọn.</p>
            </div>
          </section>

          <section className="lesson-section auth-section" id="token-lifecycle">
            <p className="section-label">09 · Token lifecycle</p>
            <h2>Access token ngắn hạn, refresh token được quản lý như một session</h2>
            <p>
              Access token dùng để gọi API và nên có thời hạn ngắn. Refresh token chỉ dùng tại endpoint refresh
              để nhận cặp token mới. Với public client, refresh token rotation giúp phát hiện việc token cũ bị tái
              sử dụng; khi phát hiện reuse, cần thu hồi cả token family và yêu cầu đăng nhập lại.
            </p>
            <div className="token-flow" aria-label="Access and refresh token lifecycle">
              <div><span>1</span><strong>Login</strong><small>Credential hợp lệ</small></div>
              <b>→</b>
              <div><span>2</span><strong>Access + refresh</strong><small>Hai mục đích khác nhau</small></div>
              <b>→</b>
              <div><span>3</span><strong>API calls</strong><small>Dùng access token</small></div>
              <b>→</b>
              <div><span>4</span><strong>Refresh</strong><small>Rotate token cũ</small></div>
              <b>→</b>
              <div><span>5</span><strong>Revoke</strong><small>Logout hoặc reuse detected</small></div>
            </div>
            <div className="token-validation-card">
              <span>Khi xác thực JWT access token</span>
              <div>
                <p><strong>Signature</strong> đúng thuật toán và key mong đợi.</p>
                <p><strong>Issuer / audience</strong> đúng hệ thống phát hành và API nhận.</p>
                <p><strong>Expiration</strong> và thời điểm hiệu lực còn hợp lệ.</p>
                <p><strong>Token type / purpose</strong> không nhầm refresh token thành access token.</p>
              </div>
            </div>
            <div className="self-check">
              <span>Bài tập 09</span>
              <p>Thiết kế bảng auth_sessions gồm user, token family, token hash, expiresAt, revokedAt và thông tin thiết bị. Mô tả transaction khi refresh.</p>
            </div>
          </section>

          <section className="lesson-section auth-section" id="authorization">
            <p className="section-label">10 · Authorization</p>
            <h2>Đã đăng nhập không có nghĩa là được truy cập mọi resource</h2>
            <div className="authorization-layers">
              <article><span>RBAC</span><h3>Role</h3><p>ADMIN có thể quản trị user; USER không thể gọi chức năng admin.</p></article>
              <article><span>Permission</span><h3>Action</h3><p>Quyền cụ thể như task:read, task:update hoặc user:disable.</p></article>
              <article><span>Ownership</span><h3>Resource</h3><p>User chỉ đọc và sửa task thuộc chính mình.</p></article>
              <article><span>Context</span><h3>Policy</h3><p>Chỉ cho phép thao tác khi resource đang ở trạng thái phù hợp.</p></article>
            </div>
            <div className="code-comparison api-example">
              <div>
                <span className="code-label">Không an toàn</span>
                <pre><code>{`PATCH /api/tasks/42
{
  "userId": 101,
  "title": "Changed"
}

// Tin userId từ client`}</code></pre>
              </div>
              <div>
                <span className="code-label">Kiểm tra ownership phía server</span>
                <pre><code>{`const task = await tasks.findOne({
  id: taskId,
  ownerId: auth.userId
});

if (!task) throw notFound();`}</code></pre>
              </div>
            </div>
            <div className="self-check">
              <span>Bài tập 10</span>
              <p>Lập ma trận role × endpoint cho Task API, sau đó thêm ba test chứng minh user A không thể đọc, sửa hoặc xóa task của user B.</p>
            </div>
          </section>

          <section className="lesson-section auth-section" id="auth-security">
            <p className="section-label">11 · Threat model</p>
            <h2>Học auth bằng cách hiểu credential có thể bị đánh cắp hoặc lạm dụng thế nào</h2>
            <div className="threat-grid">
              <article><strong>XSS</strong><p>JavaScript độc hại đọc dữ liệu có thể truy cập; credential trong localStorage đặc biệt dễ bị lấy.</p><span>Giảm thiểu: output encoding, CSP, HttpOnly cookie</span></article>
              <article><strong>CSRF</strong><p>Browser tự gửi cookie trong request giả mạo từ site khác.</p><span>Giảm thiểu: SameSite, CSRF token, kiểm tra Origin</span></article>
              <article><strong>Replay</strong><p>Token bị đánh cắp được gửi lại như một request hợp lệ.</p><span>Giảm thiểu: TLS, expiry ngắn, rotation và reuse detection</span></article>
              <article><strong>Brute force</strong><p>Kẻ tấn công thử nhiều mật khẩu hoặc credential đã rò rỉ.</p><span>Giảm thiểu: rate limit, MFA, monitoring</span></article>
              <article><strong>Session fixation</strong><p>Attacker khiến nạn nhân đăng nhập trên session ID đã biết.</p><span>Giảm thiểu: rotate session ID sau login</span></article>
              <article><strong>IDOR / BOLA</strong><p>User đổi resource ID để truy cập dữ liệu người khác.</p><span>Giảm thiểu: authorization theo resource trên server</span></article>
            </div>
            <div className="security-baseline">
              <strong>Security baseline</strong>
              <p>Chỉ truyền credential qua HTTPS. Cookie auth cần cấu hình HttpOnly, Secure và SameSite phù hợp. Không đưa secret vào source code, URL hoặc log.</p>
            </div>
            <div className="self-check">
              <span>Bài tập 11</span>
              <p>Chọn ba threat ở trên, mô tả attack path và viết một integration test hoặc checklist xác minh biện pháp giảm thiểu.</p>
            </div>
          </section>

          <section className="lesson-section" id="testing">
            <p className="section-label">12 · Auth testing</p>
            <h2>Auth chỉ đáng tin khi các đường từ chối được kiểm thử</h2>
            <div className="test-pyramid">
              <div><strong>Unit</strong><p>Business rule trong service, chạy nhanh và cô lập.</p></div>
              <div><strong>Integration</strong><p>API, middleware và database phối hợp đúng.</p></div>
              <div><strong>Manual</strong><p>Postman kiểm tra contract và luồng sử dụng thực tế.</p></div>
            </div>
            <div className="decision-checklist test-cases">
              <p className="panel-label">Bộ test tối thiểu cho auth và protected resource</p>
              <ol>
                <li><span>1</span><p><strong>Login:</strong> đúng credential thành công; sai password trả lỗi chung và không tạo session.</p></li>
                <li><span>2</span><p><strong>Token:</strong> thiếu, hết hạn, sai chữ ký, sai issuer hoặc sai purpose đều bị từ chối.</p></li>
                <li><span>3</span><p><strong>Refresh:</strong> rotation thành công; token cũ bị reuse làm token family bị thu hồi.</p></li>
                <li><span>4</span><p><strong>Authorization:</strong> user thường bị chặn khỏi admin endpoint; user A bị chặn khỏi task của user B.</p></li>
                <li><span>5</span><p><strong>Logout:</strong> session/refresh token bị thu hồi và không thể tiếp tục gia hạn.</p></li>
              </ol>
            </div>
          </section>

          <section className="lesson-section" id="practice-project">
            <p className="section-label">13 · Bài thực hành tổng hợp</p>
            <h2>Task Management API với Auth hoàn chỉnh</h2>
            <p>
              Đây là project vừa đủ nhỏ để hoàn thành, nhưng đủ chiều sâu để bạn chứng minh database, backend,
              bảo mật và testing trong một câu chuyện thống nhất.
            </p>
            <div className="project-brief">
              <div>
                <span>Phạm vi MVP</span>
                <h3>User, Task và Category</h3>
                <p>Đăng ký, đăng nhập, refresh, logout, CRUD task, role và ownership.</p>
              </div>
              <div>
                <span>Stack gợi ý</span>
                <h3>Express hoặc Spring Boot</h3>
                <p>PostgreSQL/MySQL, ORM hiện có, session hoặc access/refresh token, Postman và automated tests.</p>
              </div>
            </div>
            <ol className="milestone-list">
              <li><span>Ngày 1</span><div><strong>Contract và schema</strong><p>Vẽ ERD, ghi endpoint và sample response trước khi code.</p></div></li>
              <li><span>Ngày 2</span><div><strong>Vertical slice đầu tiên</strong><p>Hoàn thành POST và GET task xuyên từ route đến database.</p></div></li>
              <li><span>Ngày 3</span><div><strong>CRUD và error handling</strong><p>Thêm update, delete, validation và response lỗi nhất quán.</p></div></li>
              <li><span>Ngày 4</span><div><strong>Register và login</strong><p>Hash password, tạo session/token và chuẩn hóa lỗi đăng nhập.</p></div></li>
              <li><span>Ngày 5</span><div><strong>Session lifecycle</strong><p>Refresh/rotation hoặc gia hạn session, logout và revoke.</p></div></li>
              <li><span>Ngày 6</span><div><strong>Authorization</strong><p>Role, permission và ownership cho toàn bộ Task API.</p></div></li>
              <li><span>Ngày 7</span><div><strong>Security tests</strong><p>Expired token, reuse, IDOR, logout và brute-force controls.</p></div></li>
              <li><span>Ngày 8</span><div><strong>Portfolio proof</strong><p>README, auth sequence diagram, API collection, ERD và test report.</p></div></li>
            </ol>
            <div className="completion-gate">
              <strong>Checklist hoàn thành</strong>
              <p>
                Tự giải thích được session và token, demo login-refresh-logout, chứng minh ownership bằng test,
                và chỉ ra hệ thống phản ứng thế nào khi credential bị hết hạn hoặc tái sử dụng.
              </p>
            </div>
          </section>

          <section className="lesson-section interview-section" id="interview-backend">
            <p className="section-label">14 · Tự kiểm tra</p>
            <h2>Trả lời thành tiếng trước khi mở đáp án</h2>
            <div className="review-list">
              <details><summary>1. REST API là gì?</summary><p>REST là phong cách thiết kế API xoay quanh resource, dùng HTTP method và semantics nhất quán để client thao tác trên resource đó.</p></details>
              <details><summary>2. PUT và PATCH khác nhau thế nào?</summary><p>PUT thường biểu diễn việc thay thế toàn bộ resource; PATCH cập nhật một phần. Contract cụ thể phải được tài liệu hóa rõ.</p></details>
              <details><summary>3. 401 và 403 khác nhau thế nào?</summary><p>401 nghĩa là request chưa có danh tính hợp lệ. 403 nghĩa là danh tính đã được xác minh nhưng không có quyền thực hiện hành động.</p></details>
              <details><summary>4. Vì sao vẫn cần database constraint khi backend đã validation?</summary><p>Nhiều request có thể chạy đồng thời hoặc dữ liệu có thể được ghi từ đường khác. Database constraint là lớp bảo vệ cuối cùng cho tính toàn vẹn.</p></details>
              <details><summary>5. Controller và service nên chia trách nhiệm ra sao?</summary><p>Controller xử lý chi tiết HTTP và chuyển input sang service. Service thực thi business rule độc lập với transport để dễ tái sử dụng và kiểm thử.</p></details>
              <details><summary>6. Làm sao ngăn user sửa resource của người khác?</summary><p>Lấy userId từ identity đã xác thực, truy vấn resource theo cả resourceId và ownerId hoặc kiểm tra ownership trong service; không tin userId do body gửi lên.</p></details>
              <details><summary>7. Session và JWT khác nhau ở điểm cốt lõi nào?</summary><p>Session thường giữ trạng thái đăng nhập phía server và client mang session ID. JWT là định dạng token chứa claims có chữ ký; việc dùng JWT không tự giải quyết lưu trữ, thu hồi hoặc authorization.</p></details>
              <details><summary>8. Vì sao cần refresh token rotation?</summary><p>Mỗi lần refresh sẽ phát token mới và làm token cũ mất hiệu lực. Nếu token cũ xuất hiện lại, hệ thống có tín hiệu credential có thể đã bị đánh cắp và có thể thu hồi cả token family.</p></details>
              <details><summary>9. HttpOnly cookie giải quyết XSS hoàn toàn không?</summary><p>Không. HttpOnly ngăn JavaScript đọc cookie nhưng XSS vẫn có thể thực hiện request dưới danh nghĩa người dùng. Vẫn cần chống XSS, CSP và kiểm soát input/output.</p></details>
            </div>
          </section>

          <section className="lesson-section" id="auth-resources">
            <p className="section-label">15 · Nguồn đọc thêm</p>
            <h2>Đào sâu từ tài liệu tiêu chuẩn và hướng dẫn bảo mật</h2>
            <div className="resource-list">
              <a href="https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html" target="_blank" rel="noreferrer">
                <span>OWASP</span>
                <div><strong>Authentication Cheat Sheet</strong><p>Password policy, login response, re-authentication và MFA.</p></div>
                <ArrowUpRight size={18} aria-hidden="true" />
              </a>
              <a href="https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html" target="_blank" rel="noreferrer">
                <span>OWASP</span>
                <div><strong>Session Management Cheat Sheet</strong><p>Session ID, cookie attributes, timeout, renewal và logout.</p></div>
                <ArrowUpRight size={18} aria-hidden="true" />
              </a>
              <a href="https://cheatsheetseries.owasp.org/cheatsheets/REST_Security_Cheat_Sheet.html" target="_blank" rel="noreferrer">
                <span>OWASP</span>
                <div><strong>REST Security Cheat Sheet</strong><p>HTTPS, access control, JWT validation và API security.</p></div>
                <ArrowUpRight size={18} aria-hidden="true" />
              </a>
              <a href="https://datatracker.ietf.org/doc/rfc9700/" target="_blank" rel="noreferrer">
                <span>IETF · RFC 9700</span>
                <div><strong>OAuth 2.0 Security Best Current Practice</strong><p>Refresh token protection, rotation và các flow không còn được khuyến nghị.</p></div>
                <ArrowUpRight size={18} aria-hidden="true" />
              </a>
            </div>
          </section>

          <div className="next-lesson">
            <span>Bước thực hành tiếp theo</span>
            <strong>Xây register và login trước</strong>
            <p>Bắt đầu bằng user schema, password hashing và session/token issuance; viết test sai password trước khi thêm refresh flow.</p>
          </div>
        </article>
      </div>

      <footer>
        <span>Backend &amp; Authentication · Bài 02</span>
        <span><Sparkles size={15} aria-hidden="true" /> Self-study by building</span>
      </footer>
    </main>
  );
}

function App() {
  const [pathname, setPathname] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => setPathname(window.location.pathname);
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  useEffect(() => {
    const pageTitles: Record<string, string> = {
      "/knowledge/database": "Database Fundamentals - Vo Van Tu Tai",
      "/knowledge/backend-api": "Backend & Authentication Fundamentals - Vo Van Tu Tai",
    };
    document.title = pageTitles[pathname] ?? "Vo Van Tu Tai Portfolio";
  }, [pathname]);

  const navigate: NavigateHandler = (event, path) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    window.history.pushState({}, "", path);
    setPathname(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (pathname === "/knowledge/database") return <DatabaseLessonPage navigate={navigate} />;
  if (pathname === "/knowledge/backend-api") return <BackendApiLessonPage navigate={navigate} />;
  return <PortfolioPage navigate={navigate} />;
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

export default App;
