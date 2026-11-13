import { BriefcaseBusiness, Code2, Database, Network, ServerCog } from "lucide-react";
import type { PortfolioLocaleData } from "@/types";

export const portfolioDataEn: PortfolioLocaleData = {
  nav: {
    projects: "Projects",
    pmFramework: "Project Management",
    skills: "Skills",
    baKnowledge: "BA Knowledge",
    knowledge: "Knowledge",
    contact: "Contact",
  },
  hero: {
    profileMeta: "Ho Chi Minh City, Vietnam · Information Systems Engineer (IUH · Available Full-time)",
    eyebrow: "IT Business Analyst Portfolio",
    heading: "Bridging Business Needs with Engineering Execution",
    lede: (
      <>
        Completed Information Systems Engineering degree requirements from <b>IUH (GPA 3.26/4.0 · Available Full-time)</b> with a dual edge in <b>Business Analysis</b> and <b>Technical Systems Design</b>.
        Equipped with 6+ months of hands-on Business Analyst (BA) experience at <b>HomeNest Software</b> and frontline operational grounding at <b>J&amp;T Express</b>.
        Proven track record in authoring engineering-ready <b>PRD/SRS</b>, modeling <b>BPMN 2.0</b> workflows, crafting testable <b>Given-When-Then</b> User Stories,
        designing <b>Figma wireframes</b>, and coordinating end-to-end <b>UAT</b> across 2+ release cycles.
      </>
    ),
    actions: {
      explore: "Explore Case Studies",
      pdfBaVi: "Download BA Resume - Vietnamese (PDF)",
      pdfBaViHref: "/VoVanTuTai_Business_Analyst_CV_Tieng_Viet.pdf",
      pdfBaEn: "Download BA Resume - English (PDF)",
      pdfBaEnHref: "/VoVanTuTai_Business_Analyst_CV.pdf",
      webBaVi: "View BA Resume - Vietnamese (Web)",
      webBaViHref: "/po-ba-cv-vi.html",
      webBaEn: "View BA Resume - English (Web)",
      webBaEnHref: "/cv.html",
    },
  },
  preview: {
    browserLabel: "business-analysis/domain-map",
    panelLabel: "Business Analyst Competency Profile",
    panelTitle: "Ready-to-deploy Business Analyst for Outsource & Product teams.",
    cards: [
      { top: "Elicit & Spec", strong: "PRD & SRS", bottom: "engineering-ready" },
      { top: "Process", strong: "BPMN 2.0", bottom: "Camunda workflows" },
      { top: "Delivery", strong: "UAT & Agile", bottom: "on-time releases" },
    ],
    targetLabel: "Target Level",
    targetValue: "IT Business Analyst (Fresher / Junior)",
    tags: ["Business Analysis", "Process Modeling", "Booking & OMS Systems", "ERP (Odoo)"],
  },
  proofSignals: [
    {
      label: "Requirements & Specs",
      value: "Translating ambiguous business needs into PRD/SRS documents, BPMN 2.0 workflows, Figma wireframes, and testable Given-When-Then criteria.",
    },
    {
      label: "Sprint & Scope Delivery",
      value: "Directly handled Business Analyst responsibilities at HomeNest; experienced in Scope Freeze defense, Jira backlog grooming, and UAT across 2+ release cycles.",
    },
    {
      label: "Operational Grounding",
      value: "Frontline J&T Express logistics operations applied to shipment lifecycles, scan rules, and SOP standardization.",
    },
  ],
  stats: [
    { label: "Target Role", value: "IT Business Analyst (Fresher / Junior)" },
    { label: "Core Deliverables", value: "PRD/SRS · BPMN · User Stories · UAT" },
    { label: "Proven Experience", value: "HomeNest (Business Analyst) & J&T (Ops)" },
    { label: "Education & Degree", value: "B.Eng. Information Systems (IUH) · GPA 3.26" },
  ],
  about: {
    label: "About Me",
    heading: "A Business Analyst with strong technical literacy and real-world operational grounding.",
    p1: (
      <>
        I have completed the curriculum for the Engineer&apos;s Degree / Bachelor of Engineering (B.Eng.) in Information Systems at Industrial University of Ho Chi Minh City (IUH, GPA 3.26/4.0, available immediately for full-time roles),
        combining hands-on Business Analyst experience at <b>HomeNest Software</b> with frontline operational
        problem-solving at <b>J&amp;T Express</b>.
      </>
    ),
    p2: (
      <>
        My core strength is bridging the gap between non-technical stakeholders and engineering teams: clarifying ambiguous
        business needs into structured <b>PRD/SRS</b>, modeling end-to-end workflows with <b>BPMN 2.0</b>, drafting testable <b>Given-When-Then</b> User Stories,
        wireframing with <b>Figma</b>, specifying relational schemas (<b>ERD 3NF</b>) and <b>REST API contracts</b>, and coordinating role-based <b>UAT</b>.
        With a proactive mindset, strong negotiation skills, and immediate availability for full-time work, I am ready to deliver tangible value to both product teams and software outsource projects.
      </>
    ),
  },
  projectsSection: {
    label: "Featured Case Studies & Systems",
    heading: "Business systems analyzed from domain friction to technical specification.",
    subtitle: "Each case demonstrates end-to-end business problem solving: workflow diagrams, relational schemas, concurrency controls, API contracts, and working system interfaces.",
  },
  projectGroups: [
    {
      title: "Logistics & Order Management Systems (OMS)",
      description: "Enterprise systems translating frontline operations into formal BPMN 2.0 state machines, scan checkpoints, and API contracts.",
      projects: [
        {
          name: "logistics-management-system",
          role: "Nexus Express · Logistics & Order Management System (OMS)",
          href: "https://github.com/VoVanTuTai/logistics-management-system",
          liveUrl: "https://tracking.nexus-ex.site/",
          liveLabel: "Live Demo",
          image: "/assets/project-nexus.png",
          stack: ["BPMN 2.0 (Camunda)", "OpenAPI 3.0", "ERD 3NF", "PostgreSQL", "NestJS", "RabbitMQ"],
          summary: "An end-to-end logistics platform turning first-hand branch operations into explicit service ownership, event handoffs, and shipment workflows.",
          highlights: [
            "Business Challenge: Tracking status inconsistencies across multi-party carrier handoffs and ambiguous service boundaries across distributed microservices.",
            "BA Analysis & Solution: Formalized parcel lifecycles using BPMN 2.0 in Camunda; authored OpenAPI 3.0 contracts with Idempotency keys; drafted normalized 3NF relational data dictionary.",
            "Outcome & Deliverables: Live tracking application deployed at tracking.nexus-ex.site, documented traceable parcel state engine, RabbitMQ asynchronous event workflows, and exception handling SOPs.",
          ],
        },
        {
          name: "cab-booking-system",
          role: "Ride-Hailing & Driver Dispatch Management System",
          href: "https://github.com/VoVanTuTai/cab-booking-system",
          image: "/assets/project-cab.png",
          stack: ["State Machine", "Event Contracts", "BPMN", "Node.js", "Redis", "Kafka"],
          summary: "A ride-hailing architecture project examining distributed booking lifecycles, driver-passenger matching rules, and operational settlement workflows.",
          highlights: [
            "Business Challenge: High-concurrency ride dispatching, fare calculation states, and driver-passenger matching under unstable network connections.",
            "BA Analysis & Solution: Formulated ride status state machines, asynchronous event contracts, surge pricing business rules, and compensation/rollback flows.",
            "Outcome & Deliverables: Docker Compose multi-service architecture with contract verification checks, distributed event logs, and operational test scenarios.",
          ],
        },
      ],
    },
    {
      title: "Business Platforms & Reservation Systems",
      description: "Production-grade business systems demonstrating how business requirements become structured workflows, concurrency controls, and role-based portals.",
      projects: [
        {
          name: "tourist-accommodation-management-system",
          role: "Accommodation & Booking Platform · Multi-Role System",
          href: "https://github.com/VoVanTuTai/tourist-accommodation-management-system",
          image: "/assets/project-tourist.png",
          stack: ["BPMN 2.0", "PRD/SRS", "RBAC Matrix", "VNPay IPN", "MySQL", "Express.js"],
          summary: "A multi-role booking platform resolving room overbooking race conditions, dynamic inventory calendars, tiered cancellations, and online payment workflows.",
          highlights: [
            "Business Challenge: Preventing room overbooking race conditions during peak traffic, isolating 3-tier user roles (Guest/Host/Admin), and handling network drops during online payment.",
            "BA Analysis & Solution: Authored PRD/SRS with Given-When-Then criteria; modeled temporary holds (Held/Pending with TTL), strict RBAC permissions, tiered cancellation policies, and VNPay IPN webhook contracts.",
            "Outcome & Deliverables: Interactive multi-role portal featuring real-time room availability, secure QR payments, automated digital invoices, and verified UAT test suite.",
          ],
        },
        {
          name: "php-online-store",
          role: "Song Tai Shop · E-Commerce & Retail Order Management",
          href: "https://github.com/VoVanTuTai/php-online-store",
          image: "/assets/project-songtai.png",
          stack: ["Process Flow", "User Stories", "RBAC Matrix", "MySQL 3NF", "PHP", "Bootstrap"],
          summary: "An e-commerce retail system modeling product catalog hierarchies, customer checkout lifecycles, role-based order management, and administrative audit trails.",
          highlights: [
            "Business Challenge: Customer and admin workflows required strict role separation, secure checkout integrity, and auditable order state transitions (Pending/Paid/Shipped/Completed).",
            "BA Analysis & Solution: Formulated functional requirements (SRS), modeled checkout user journeys, designed normalized relational schema, and defined administrative inventory controls.",
            "Outcome & Deliverables: Complete Dockerized retail environment with seed catalogs, demo test accounts, and end-to-end purchasing workflow documentation.",
          ],
        },
      ],
    },
  ],
  skillsSection: {
    label: "Skills",
    heading: "Implementation skills supported by process, data, and domain analysis.",
    groups: [
      {
        icon: BriefcaseBusiness,
        title: "Business Analysis & Specs",
        items: [
          "Requirements Elicitation",
          "BRD, PRD & SRS Documentation",
          "BPMN 2.0 Process Modeling",
          "User Stories (Given-When-Then)",
          "Wireframing (Figma)",
          "UAT Test Planning & Execution",
        ],
        href: "/knowledge/business-analysis",
        linkLabel: "Explore BA knowledge & project evidence",
      },
      {
        icon: Network,
        title: "Domain Exposure",
        items: [
          "Order Management Systems (OMS)",
          "Enterprise ERP Systems (Odoo: Sales, Purchase, Inventory)",
          "Logistics & Tracking Checkpoints",
          "Reservation & Inventory Calendars",
          "Digital Payments (VNPay IPN)",
          "RBAC Access Control Matrix",
        ],
      },
      {
        icon: Database,
        title: "Data & Systems Modeling",
        items: [
          "Relational Schema Design (ERD 3NF)",
          "SQL Querying (MySQL, PostgreSQL)",
          "Data Dashboards & Reporting (Power BI)",
          "State Machine & Activity Diagrams",
          "Database Normalization",
          "Data Dictionaries & Catalogs",
        ],
        href: "/knowledge/database",
        linkLabel: "Study data modeling fundamentals",
      },
      {
        icon: ServerCog,
        title: "Technical Literacy & APIs",
        items: [
          "RESTful API Contracts (OpenAPI 3.0)",
          "Asynchronous Webhooks (IPN)",
          "Idempotency & Concurrency Rules",
          "Postman API Testing",
          "Microservices & Events Overview",
        ],
        href: "/knowledge/backend-api",
        linkLabel: "Study backend & REST APIs",
      },
      {
        icon: Code2,
        title: "Project Management & Agile Delivery",
        items: [
          "Sprint Planning & WBS Breakdown",
          "Scope Baseline & Scope Freeze Governance",
          "Change Request (CR) Evaluation Protocol",
          "Risk Management Matrix & Burndown Charts",
          "Agile Scrum Rituals & UAT Gatekeeping",
          "Jira, Confluence, Camunda & Figma",
        ],
      },
    ],
  },
  experienceSection: {
    homeNest: {
      label: "Business Analyst Experience",
      title: "HomeNest Software — Business Analyst · PM Assistant",
      meta: "Mar 2026 – Sep 2026 · Ho Chi Minh City, Vietnam",
      text: (
        <>
          Directly handled Business Analyst responsibilities and PM assistance; analyzed requirements and coordinated delivery for 2 key platforms: <b>&quot;Hỗ Trợ Cuộc Sống&quot;</b> (Multi-service ecosystem: On-demand Home Repair, Short-trip Ride-hailing, Carpooling, Job Matching &amp; Admin portal) and <b>&quot;VietPlus&quot;</b> (Classified marketplace &amp; community carpooling platform for the South Korea market).
          Modeled state-driven workflows for the <b>Interactive Price Negotiation module</b> (bid/counter-offer rules) and specified an <b>event-driven GPS refresh mechanism</b> (refreshing coordinates upon pickup/completion instead of continuous polling) to slash third-party map API costs.
          Joined VietPlus mid-stream, rapidly establishing domain control; directly interfaced with clients on Change Requests for marketplace fulfillment, cancellations, returns (hoàn hàng), and innovated a lean inquiry-form MVP for Vietnam–Korea shipping to defend Scope Freeze; authored Meeting Minutes, curated commercial Go-Live checklists (App Store / Google Play accounts), and facilitated client UAT across 2+ release cycles.
        </>
      ),
    },
    jnt: {
      label: "Operations Experience",
      title: "J&T Express — Operations Process Coordinator (Full-time)",
      meta: "Sep 2025 – Feb 2026 · Ho Chi Minh City, Vietnam",
      text: (
        <>
          Coordinated branch logistics handling high-volume daily shipments. Tactfully engaged frontline shift crews to adopt a closed-loop unidirectional
          processing flow (Intake &rarr; Weighing &rarr; Scanning &rarr; Dispatch), relieving sorting bottlenecks and substantially accelerating shipment turnaround times.
          Authored exception SOPs to resolve shift-to-shift disputes, and instituted daily physical-to-digital reconciliation routines to ensure cross-shift supply chain data integrity.
        </>
      ),
    },
  },
  contactSection: {
    label: "Ready to Connect",
    heading: "Open to IT Business Analyst (Fresher / Junior) and Associate PM roles.",
    subtitle: "Available immediately for Full-time on-site or hybrid roles in Ho Chi Minh City.",
    pdfBaVi: { label: "Download BA Resume - Vietnamese (PDF)", href: "/VoVanTuTai_Business_Analyst_CV_Tieng_Viet.pdf" },
    pdfBaEn: { label: "Download BA Resume - English (PDF)", href: "/VoVanTuTai_Business_Analyst_CV.pdf" },
    webBaVi: { label: "View BA Resume - Vietnamese (Web)", href: "/po-ba-cv-vi.html" },
    webBaEn: { label: "View BA Resume - English (Web)", href: "/cv.html" },
    location: "Ho Chi Minh City, Vietnam (Available Immediately)",
  },
  footer: {
    caption: "Business Systems · Software + Analysis",
  },
};
