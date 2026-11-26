import {
  ClipboardCheck,
  Code2,
  Database,
  Kanban,
  Layout,
  Server,
  ShieldCheck,
  Sparkles,
  Terminal,
  Workflow,
} from "lucide-react";
import type { Language } from "@/types";
import type { PortfolioItem } from "@/data/portfolio-tree.data";

interface StudioSkillsStageViewProps {
  item: PortfolioItem;
  lang: Language;
  onSelectItem?: (slug: string) => void;
}

export function StudioSkillsStageView({
  item,
  lang,
  onSelectItem,
}: StudioSkillsStageViewProps) {
  const isBaView = item.slug === "ky-nang-ba";

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      {/* 1. In-Page Competency Sub-Navigation Tabs */}
      <div
        style={{
          display: "flex",
          gap: "8px",
          flexWrap: "wrap",
          background: "#f1f5f9",
          padding: "4px",
          borderRadius: "10px",
          border: "1px solid #e2e8f0",
        }}
      >
        <button
          type="button"
          onClick={() => onSelectItem?.("ky-nang-ba")}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            padding: "8px 16px",
            borderRadius: "8px",
            border: "none",
            background: isBaView ? "#ffffff" : "transparent",
            color: isBaView ? "#2563eb" : "#475569",
            fontWeight: isBaView ? 850 : 650,
            fontSize: "12.5px",
            fontFamily: "var(--studio-font-sans)",
            cursor: "pointer",
            boxShadow: isBaView ? "0 1px 3px rgba(15, 23, 42, 0.08)" : "none",
            transition: "all 140ms ease",
          }}
        >
          <ClipboardCheck size={14} color={isBaView ? "#2563eb" : "#64748b"} />
          <span>
            {lang === "vi"
              ? "1. Phân Tích Nghiệp Vụ & PM"
              : "1. Business Analysis & Project Management"}
          </span>
        </button>

        <button
          type="button"
          onClick={() => onSelectItem?.("ky-thuat-he-thong")}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            padding: "8px 16px",
            borderRadius: "8px",
            border: "none",
            background: !isBaView ? "#ffffff" : "transparent",
            color: !isBaView ? "#059669" : "#475569",
            fontWeight: !isBaView ? 850 : 650,
            fontSize: "12.5px",
            fontFamily: "var(--studio-font-sans)",
            cursor: "pointer",
            boxShadow: !isBaView ? "0 1px 3px rgba(15, 23, 42, 0.08)" : "none",
            transition: "all 140ms ease",
          }}
        >
          <Code2 size={14} color={!isBaView ? "#059669" : "#64748b"} />
          <span>
            {lang === "vi"
              ? "2. Kỹ Thuật Hệ Thống & Dev"
              : "2. Systems Engineering & Tech Stack"}
          </span>
        </button>
      </div>

      {/* 2. Philosophy & Delivery Context Callout Banner */}
      <div
        style={{
          padding: "16px 20px",
          borderRadius: "10px",
          background: isBaView
            ? "linear-gradient(135deg, #eff6ff 0%, #f8fbff 100%)"
            : "linear-gradient(135deg, #ecfdf5 0%, #f8fafc 100%)",
          border: isBaView ? "1.5px solid #bfdbfe" : "1.5px solid #a7f3d0",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px" }}>
          <Sparkles size={16} color={isBaView ? "#2563eb" : "#059669"} />
          <strong
            style={{
              fontSize: "13px",
              color: isBaView ? "#1e40af" : "#065f46",
              textTransform: "uppercase",
              letterSpacing: "0.04em",
              fontFamily: "var(--studio-font-sans)",
            }}
          >
            {isBaView
              ? lang === "vi"
                ? "Năng Lực Phân Tích & Điều Phối Thực Tế Doanh Nghiệp"
                : "Real-world Elicitation & Project Management Framework"
              : lang === "vi"
                ? "Nền Tảng Kỹ Sư Hệ Thống Độc Lập Hiện Thực Hóa Sản Phẩm"
                : "Systems Engineering Rigor & Production Full-Stack Delivery"}
          </strong>
        </div>
        <p
          style={{
            margin: 0,
            fontSize: "13px",
            color: isBaView ? "#1e3a8a" : "#064e3b",
            lineHeight: 1.6,
            fontWeight: 600,
            fontFamily: "var(--studio-font-sans)",
          }}
        >
          {isBaView
            ? lang === "vi"
              ? "Bộ kỹ năng phân tích và quản trị dự án được tôi áp dụng trực tiếp trong công việc Project Manager tại Digityze Asia, cựu IT Business Analyst tại HomeNest Software và thực tiễn vận hành Logistics tại J&T Express."
              : "Practical business analysis and project leadership applied directly as Project Manager at Digityze Asia, former IT BA at HomeNest Software, and field logistics ops at J&T Express."
            : lang === "vi"
              ? "Nền tảng kỹ sư hệ thống chính quy từ IUH giúp tôi thấu hiểu sâu sắc chi phí kỹ thuật (technical cost), đánh giá chính xác tính khả thi và nói cùng một ngôn ngữ kiến trúc với đội ngũ lập trình."
              : "Formally trained Information Systems Engineering degree from IUH empowers me to evaluate technical trade-offs, speak native architecture with engineers, and build core services hands-on."}
        </p>
      </div>

      {/* 3. VIEW 1: Business Analysis & Project Management Grid */}
      {isBaView && (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "16px",
          }}
        >
          {/* Card 1: Khảo Sát & Soạn Thảo Đặc Tả */}
          <div
            style={{
              padding: "18px 20px",
              borderRadius: "12px",
              background: "#ffffff",
              border: "1.5px solid #d8e6f5",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              boxShadow: "0 2px 6px rgba(15, 23, 42, 0.03)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <span
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "8px",
                    background: "#eff6ff",
                    border: "1px solid #bfdbfe",
                    display: "grid",
                    placeItems: "center",
                  }}
                >
                  <ClipboardCheck size={18} color="#2563eb" />
                </span>
                <strong
                  style={{
                    fontSize: "14.5px",
                    color: "#0f172a",
                    fontFamily: "var(--studio-font-sans)",
                  }}
                >
                  {lang === "vi" ? "Khảo Sát & Soạn Thảo Đặc Tả" : "Requirements Engineering"}
                </strong>
              </div>
              <span
                style={{
                  fontFamily: "var(--font-mono, monospace)",
                  fontSize: "10px",
                  fontWeight: 800,
                  padding: "3px 8px",
                  borderRadius: "5px",
                  background: "#eff6ff",
                  color: "#1d4ed8",
                  border: "1px solid #bfdbfe",
                }}
              >
                BABOK v3
              </span>
            </div>

            <p
              style={{
                margin: 0,
                fontSize: "12.5px",
                color: "#475569",
                lineHeight: 1.6,
                fontFamily: "var(--studio-font-sans)",
              }}
            >
              {lang === "vi"
                ? "Khảo sát yêu cầu đa chiều từ khách hàng và các bên liên quan; chuyển hóa thành tài liệu PRD, SRS và Functional Specs chi tiết cho Dev."
                : "Eliciting requirements from cross-functional stakeholders; authoring unambiguous PRD, SRS, and Functional Specifications for engineering."}
            </p>

            <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
              {[
                "PRD / SRS Specs",
                "INVEST User Stories",
                "Given-When-Then",
                "Acceptance Criteria (AC)",
                "Scope Freeze Control",
                "Traceability Matrix",
              ].map((badge) => (
                <span
                  key={badge}
                  style={{
                    fontFamily: "var(--font-mono, monospace)",
                    fontSize: "10.5px",
                    fontWeight: 700,
                    padding: "3px 8px",
                    borderRadius: "5px",
                    background: "#f8fafc",
                    color: "#334155",
                    border: "1px solid #e2e8f0",
                  }}
                >
                  {badge}
                </span>
              ))}
            </div>

            <div
              style={{
                marginTop: "auto",
                paddingTop: "10px",
                borderTop: "1px solid #f1f5f9",
                fontSize: "11.5px",
                color: "#64748b",
                fontFamily: "var(--studio-font-sans)",
              }}
            >
              <strong style={{ color: "#0f172a", fontFamily: "var(--font-mono, monospace)", fontSize: "10.5px" }}>
                TOOLS:
              </strong>{" "}
              Jira Software · Confluence · Figma Wireframes · Miro
            </div>
          </div>

          {/* Card 2: Mô Hình Hóa Quy Trình & Kiến Trúc */}
          <div
            style={{
              padding: "18px 20px",
              borderRadius: "12px",
              background: "#ffffff",
              border: "1.5px solid #d8e6f5",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              boxShadow: "0 2px 6px rgba(15, 23, 42, 0.03)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <span
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "8px",
                    background: "#f5f3ff",
                    border: "1px solid #ddd6fe",
                    display: "grid",
                    placeItems: "center",
                  }}
                >
                  <Workflow size={18} color="#7c3aed" />
                </span>
                <strong
                  style={{
                    fontSize: "14.5px",
                    color: "#0f172a",
                    fontFamily: "var(--studio-font-sans)",
                  }}
                >
                  {lang === "vi" ? "Mô Hình Hóa Quy Trình & UML" : "Process & Domain Modeling"}
                </strong>
              </div>
              <span
                style={{
                  fontFamily: "var(--font-mono, monospace)",
                  fontSize: "10px",
                  fontWeight: 800,
                  padding: "3px 8px",
                  borderRadius: "5px",
                  background: "#f5f3ff",
                  color: "#6d28d9",
                  border: "1px solid #ddd6fe",
                }}
              >
                OMG BPMN 2.0
              </span>
            </div>

            <p
              style={{
                margin: 0,
                fontSize: "12.5px",
                color: "#475569",
                lineHeight: 1.6,
                fontFamily: "var(--studio-font-sans)",
              }}
            >
              {lang === "vi"
                ? "Chuẩn hóa quy trình vận hành và xử lý đơn hàng bằng sơ đồ BPMN 2.0; thiết kế Use Case, Sequence Diagram và State Machine loại bỏ rủi ro lệch luồng."
                : "Standardizing workflows via BPMN 2.0 swimlanes; authoring Use Cases, Sequence Diagrams, and State Machines to eliminate ambiguous edge cases."}
            </p>

            <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
              {[
                "BPMN 2.0 Swimlanes",
                "UML 2.5 Sequence",
                "State Machine Diagram",
                "Use Case Modeling",
                "DFD Level 0-2",
                "Error Boundary Events",
              ].map((badge) => (
                <span
                  key={badge}
                  style={{
                    fontFamily: "var(--font-mono, monospace)",
                    fontSize: "10.5px",
                    fontWeight: 700,
                    padding: "3px 8px",
                    borderRadius: "5px",
                    background: "#f8fafc",
                    color: "#334155",
                    border: "1px solid #e2e8f0",
                  }}
                >
                  {badge}
                </span>
              ))}
            </div>

            <div
              style={{
                marginTop: "auto",
                paddingTop: "10px",
                borderTop: "1px solid #f1f5f9",
                fontSize: "11.5px",
                color: "#64748b",
                fontFamily: "var(--studio-font-sans)",
              }}
            >
              <strong style={{ color: "#0f172a", fontFamily: "var(--font-mono, monospace)", fontSize: "10.5px" }}>
                TOOLS:
              </strong>{" "}
              Camunda Modeler · Draw.io · PlantUML · Enterprise Architect
            </div>
          </div>

          {/* Card 3: Quản Trị Dự Án & Agile */}
          <div
            style={{
              padding: "18px 20px",
              borderRadius: "12px",
              background: "#ffffff",
              border: "1.5px solid #d8e6f5",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              boxShadow: "0 2px 6px rgba(15, 23, 42, 0.03)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <span
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "8px",
                    background: "#ecfdf5",
                    border: "1px solid #a7f3d0",
                    display: "grid",
                    placeItems: "center",
                  }}
                >
                  <Kanban size={18} color="#059669" />
                </span>
                <strong
                  style={{
                    fontSize: "14.5px",
                    color: "#0f172a",
                    fontFamily: "var(--studio-font-sans)",
                  }}
                >
                  {lang === "vi" ? "Quản Trị Dự Án & Scrum" : "Project Management & Scrum"}
                </strong>
              </div>
              <span
                style={{
                  fontFamily: "var(--font-mono, monospace)",
                  fontSize: "10px",
                  fontWeight: 800,
                  padding: "3px 8px",
                  borderRadius: "5px",
                  background: "#ecfdf5",
                  color: "#047857",
                  border: "1px solid #a7f3d0",
                }}
              >
                Digityze Asia PM
              </span>
            </div>

            <p
              style={{
                margin: 0,
                fontSize: "12.5px",
                color: "#475569",
                lineHeight: 1.6,
                fontFamily: "var(--studio-font-sans)",
              }}
            >
              {lang === "vi"
                ? "Điều phối tiến độ bàn giao dự án tại Digityze Asia, quản lý Sprint backlog, áp dụng thuật toán đường găng CPM và kiểm soát chi phí thực hiện theo EVM."
                : "Leading project deliveries at Digityze Asia, orchestrating Sprint backlogs, applying CPM critical path scheduling, and governing cost via EVM."}
            </p>

            <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
              {[
                "Sprint Planning",
                "Backlog Refinement",
                "WBS Work Packages",
                "CPM Đường Găng",
                "EVM CPI / SPI",
                "RACI Matrix",
              ].map((badge) => (
                <span
                  key={badge}
                  style={{
                    fontFamily: "var(--font-mono, monospace)",
                    fontSize: "10.5px",
                    fontWeight: 700,
                    padding: "3px 8px",
                    borderRadius: "5px",
                    background: "#f8fafc",
                    color: "#334155",
                    border: "1px solid #e2e8f0",
                  }}
                >
                  {badge}
                </span>
              ))}
            </div>

            <div
              style={{
                marginTop: "auto",
                paddingTop: "10px",
                borderTop: "1px solid #f1f5f9",
                fontSize: "11.5px",
                color: "#64748b",
                fontFamily: "var(--studio-font-sans)",
              }}
            >
              <strong style={{ color: "#0f172a", fontFamily: "var(--font-mono, monospace)", fontSize: "10.5px" }}>
                TOOLS:
              </strong>{" "}
              Jira Agile Boards · Excel Quotation SOP · ClickUp · Slack
            </div>
          </div>

          {/* Card 4: Kiểm Thử Nghiệm Thu & UAT */}
          <div
            style={{
              padding: "18px 20px",
              borderRadius: "12px",
              background: "#ffffff",
              border: "1.5px solid #d8e6f5",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              boxShadow: "0 2px 6px rgba(15, 23, 42, 0.03)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <span
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "8px",
                    background: "#fffbeb",
                    border: "1px solid #fde68a",
                    display: "grid",
                    placeItems: "center",
                  }}
                >
                  <ShieldCheck size={18} color="#d97706" />
                </span>
                <strong
                  style={{
                    fontSize: "14.5px",
                    color: "#0f172a",
                    fontFamily: "var(--studio-font-sans)",
                  }}
                >
                  {lang === "vi" ? "Kiểm Thử Nghiệm Thu & UAT" : "UAT & Quality Governance"}
                </strong>
              </div>
              <span
                style={{
                  fontFamily: "var(--font-mono, monospace)",
                  fontSize: "10px",
                  fontWeight: 800,
                  padding: "3px 8px",
                  borderRadius: "5px",
                  background: "#fffbeb",
                  color: "#b45309",
                  border: "1px solid #fde68a",
                }}
              >
                12+ Sprints UAT
              </span>
            </div>

            <p
              style={{
                margin: 0,
                fontSize: "12.5px",
                color: "#475569",
                lineHeight: 1.6,
                fontFamily: "var(--studio-font-sans)",
              }}
            >
              {lang === "vi"
                ? "Lập kế hoạch UAT, xây dựng kịch bản kiểm thử chức năng, phân loại mức độ lỗi Defect Triage và điều phối nghiệm thu bàn giao 100% đúng hạn."
                : "Formulating UAT plans, crafting functional test cases, managing Defect Triage protocols, and driving 100% on-time client acceptance sign-offs."}
            </p>

            <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
              {[
                "UAT Test Strategy",
                "Functional Test Cases",
                "Defect Triage (P0-P3)",
                "Go-Live Checklist",
                "Sign-off Protocol",
                "SLA Exception Handling",
              ].map((badge) => (
                <span
                  key={badge}
                  style={{
                    fontFamily: "var(--font-mono, monospace)",
                    fontSize: "10.5px",
                    fontWeight: 700,
                    padding: "3px 8px",
                    borderRadius: "5px",
                    background: "#f8fafc",
                    color: "#334155",
                    border: "1px solid #e2e8f0",
                  }}
                >
                  {badge}
                </span>
              ))}
            </div>

            <div
              style={{
                marginTop: "auto",
                paddingTop: "10px",
                borderTop: "1px solid #f1f5f9",
                fontSize: "11.5px",
                color: "#64748b",
                fontFamily: "var(--studio-font-sans)",
              }}
            >
              <strong style={{ color: "#0f172a", fontFamily: "var(--font-mono, monospace)", fontSize: "10.5px" }}>
                TOOLS:
              </strong>{" "}
              Postman · Google Sheets UAT Tracker · Chrome DevTools
            </div>
          </div>
        </div>
      )}

      {/* 4. VIEW 2: Systems Engineering & Tech Stack Grid */}
      {!isBaView && (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "16px",
          }}
        >
          {/* Card 1: Cơ Sở Dữ Liệu & 3NF */}
          <div
            style={{
              padding: "18px 20px",
              borderRadius: "12px",
              background: "#ffffff",
              border: "1.5px solid #d8e6f5",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              boxShadow: "0 2px 6px rgba(15, 23, 42, 0.03)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <span
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "8px",
                    background: "#eff6ff",
                    border: "1px solid #bfdbfe",
                    display: "grid",
                    placeItems: "center",
                  }}
                >
                  <Database size={18} color="#2563eb" />
                </span>
                <strong
                  style={{
                    fontSize: "14.5px",
                    color: "#0f172a",
                    fontFamily: "var(--studio-font-sans)",
                  }}
                >
                  {lang === "vi" ? "Cơ Sở Dữ Liệu & Chuẩn 3NF" : "Relational DB & 3NF Normalization"}
                </strong>
              </div>
              <span
                style={{
                  fontFamily: "var(--font-mono, monospace)",
                  fontSize: "10px",
                  fontWeight: 800,
                  padding: "3px 8px",
                  borderRadius: "5px",
                  background: "#eff6ff",
                  color: "#1d4ed8",
                  border: "1px solid #bfdbfe",
                }}
              >
                PostgreSQL 3NF
              </span>
            </div>

            <p
              style={{
                margin: 0,
                fontSize: "12.5px",
                color: "#475569",
                lineHeight: 1.6,
                fontFamily: "var(--studio-font-sans)",
              }}
            >
              {lang === "vi"
                ? "Thiết kế CSDL quan hệ chuẩn hóa 3NF/BCNF, thiết lập toàn vẹn tham chiếu ACID, tối ưu chỉ mục B-Tree và khóa hàng (Row-level Lock)."
                : "Architecting 3NF/BCNF relational schemas, enforcing ACID integrity, optimizing composite B-Tree indexes, and applying row-level concurrency locks."}
            </p>

            <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
              {[
                "Relational ERD 3NF",
                "ACID Semantics",
                "B-Tree Composite Index",
                "Row-level Lock (FOR UPDATE)",
                "Redis Distributed Lock",
                "Foreign Key Integrity",
              ].map((badge) => (
                <span
                  key={badge}
                  style={{
                    fontFamily: "var(--font-mono, monospace)",
                    fontSize: "10.5px",
                    fontWeight: 700,
                    padding: "3px 8px",
                    borderRadius: "5px",
                    background: "#f8fafc",
                    color: "#334155",
                    border: "1px solid #e2e8f0",
                  }}
                >
                  {badge}
                </span>
              ))}
            </div>

            <div
              style={{
                marginTop: "auto",
                paddingTop: "10px",
                borderTop: "1px solid #f1f5f9",
                fontSize: "11.5px",
                color: "#64748b",
                fontFamily: "var(--studio-font-sans)",
              }}
            >
              <strong style={{ color: "#0f172a", fontFamily: "var(--font-mono, monospace)", fontSize: "10.5px" }}>
                ENGINES:
              </strong>{" "}
              PostgreSQL · MySQL · Redis · DBeaver · Prisma ORM
            </div>
          </div>

          {/* Card 2: Backend Engineering & API */}
          <div
            style={{
              padding: "18px 20px",
              borderRadius: "12px",
              background: "#ffffff",
              border: "1.5px solid #d8e6f5",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              boxShadow: "0 2px 6px rgba(15, 23, 42, 0.03)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <span
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "8px",
                    background: "#f0f9ff",
                    border: "1px solid #bae6fd",
                    display: "grid",
                    placeItems: "center",
                  }}
                >
                  <Server size={18} color="#0284c7" />
                </span>
                <strong
                  style={{
                    fontSize: "14.5px",
                    color: "#0f172a",
                    fontFamily: "var(--studio-font-sans)",
                  }}
                >
                  {lang === "vi" ? "Kiến Trúc Backend & REST API" : "Backend & REST API Contracts"}
                </strong>
              </div>
              <span
                style={{
                  fontFamily: "var(--font-mono, monospace)",
                  fontSize: "10px",
                  fontWeight: 800,
                  padding: "3px 8px",
                  borderRadius: "5px",
                  background: "#f0f9ff",
                  color: "#0369a1",
                  border: "1px solid #bae6fd",
                }}
              >
                NestJS · TypeScript
              </span>
            </div>

            <p
              style={{
                margin: 0,
                fontSize: "12.5px",
                color: "#475569",
                lineHeight: 1.6,
                fontFamily: "var(--studio-font-sans)",
              }}
            >
              {lang === "vi"
                ? "Xây dựng Backend theo kiến trúc Modular Monolith / Microservices, thiết kế hợp đồng RESTful chuẩn hóa và cơ chế chống gửi lặp Idempotency Key."
                : "Building modular NestJS backends, establishing rigorous RESTful API contracts, and implementing Redis-backed Idempotency Key mechanisms."}
            </p>

            <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
              {[
                "NestJS / Node.js",
                "TypeScript Strict",
                "RESTful API Design",
                "Idempotency Key (24h TTL)",
                "JWT & RBAC Middleware",
                "class-validator DTOs",
              ].map((badge) => (
                <span
                  key={badge}
                  style={{
                    fontFamily: "var(--font-mono, monospace)",
                    fontSize: "10.5px",
                    fontWeight: 700,
                    padding: "3px 8px",
                    borderRadius: "5px",
                    background: "#f8fafc",
                    color: "#334155",
                    border: "1px solid #e2e8f0",
                  }}
                >
                  {badge}
                </span>
              ))}
            </div>

            <div
              style={{
                marginTop: "auto",
                paddingTop: "10px",
                borderTop: "1px solid #f1f5f9",
                fontSize: "11.5px",
                color: "#64748b",
                fontFamily: "var(--studio-font-sans)",
              }}
            >
              <strong style={{ color: "#0f172a", fontFamily: "var(--font-mono, monospace)", fontSize: "10.5px" }}>
                STACK:
              </strong>{" "}
              NestJS · Node.js · Express · Postman · Swagger OpenAPI
            </div>
          </div>

          {/* Card 3: Frontend Engineering */}
          <div
            style={{
              padding: "18px 20px",
              borderRadius: "12px",
              background: "#ffffff",
              border: "1.5px solid #d8e6f5",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              boxShadow: "0 2px 6px rgba(15, 23, 42, 0.03)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <span
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "8px",
                    background: "#f5f3ff",
                    border: "1px solid #ddd6fe",
                    display: "grid",
                    placeItems: "center",
                  }}
                >
                  <Layout size={18} color="#7c3aed" />
                </span>
                <strong
                  style={{
                    fontSize: "14.5px",
                    color: "#0f172a",
                    fontFamily: "var(--studio-font-sans)",
                  }}
                >
                  {lang === "vi" ? "Frontend & Hệ Thống UI/UX" : "Frontend & Design Systems"}
                </strong>
              </div>
              <span
                style={{
                  fontFamily: "var(--font-mono, monospace)",
                  fontSize: "10px",
                  fontWeight: 800,
                  padding: "3px 8px",
                  borderRadius: "5px",
                  background: "#f5f3ff",
                  color: "#6d28d9",
                  border: "1px solid #ddd6fe",
                }}
              >
                React 19 · Vite
              </span>
            </div>

            <p
              style={{
                margin: 0,
                fontSize: "12.5px",
                color: "#475569",
                lineHeight: 1.6,
                fontFamily: "var(--studio-font-sans)",
              }}
            >
              {lang === "vi"
                ? "Phát triển giao diện người dùng tương tác cao với React 19, hệ thống Design Tokens nhất quán, bố cục Studio 3 cột và bản đồ số Leaflet."
                : "Crafting highly responsive user interfaces with React 19, modular design systems, 3-column studio grids, and realtime Leaflet geospatial maps."}
            </p>

            <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
              {[
                "React 19 & Vite",
                "TypeScript Component UI",
                "3-Column Studio Grid",
                "Tailwind & CSS Modules",
                "Leaflet GIS Mapping",
                "High-DPI Retina Canvas",
              ].map((badge) => (
                <span
                  key={badge}
                  style={{
                    fontFamily: "var(--font-mono, monospace)",
                    fontSize: "10.5px",
                    fontWeight: 700,
                    padding: "3px 8px",
                    borderRadius: "5px",
                    background: "#f8fafc",
                    color: "#334155",
                    border: "1px solid #e2e8f0",
                  }}
                >
                  {badge}
                </span>
              ))}
            </div>

            <div
              style={{
                marginTop: "auto",
                paddingTop: "10px",
                borderTop: "1px solid #f1f5f9",
                fontSize: "11.5px",
                color: "#64748b",
                fontFamily: "var(--studio-font-sans)",
              }}
            >
              <strong style={{ color: "#0f172a", fontFamily: "var(--font-mono, monospace)", fontSize: "10.5px" }}>
                TOOLS:
              </strong>{" "}
              React · Vite · Tailwind CSS · Leaflet · Lucide Icons
            </div>
          </div>

          {/* Card 4: DevOps & CI/CD */}
          <div
            style={{
              padding: "18px 20px",
              borderRadius: "12px",
              background: "#ffffff",
              border: "1.5px solid #d8e6f5",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              boxShadow: "0 2px 6px rgba(15, 23, 42, 0.03)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <span
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "8px",
                    background: "#fffbeb",
                    border: "1px solid #fde68a",
                    display: "grid",
                    placeItems: "center",
                  }}
                >
                  <Terminal size={18} color="#d97706" />
                </span>
                <strong
                  style={{
                    fontSize: "14.5px",
                    color: "#0f172a",
                    fontFamily: "var(--studio-font-sans)",
                  }}
                >
                  {lang === "vi" ? "DevOps, VPS & Kiểm Thử" : "DevOps, VPS & Automated CI"}
                </strong>
              </div>
              <span
                style={{
                  fontFamily: "var(--font-mono, monospace)",
                  fontSize: "10px",
                  fontWeight: 800,
                  padding: "3px 8px",
                  borderRadius: "5px",
                  background: "#fffbeb",
                  color: "#b45309",
                  border: "1px solid #fde68a",
                }}
              >
                Docker · Linux VPS
              </span>
            </div>

            <p
              style={{
                margin: 0,
                fontSize: "12.5px",
                color: "#475569",
                lineHeight: 1.6,
                fontFamily: "var(--studio-font-sans)",
              }}
            >
              {lang === "vi"
                ? "Container hóa Docker tối ưu nhiều tầng (Multi-stage build), tự động hóa kiểm thử Vitest và triển khai hệ thống an toàn trên Linux VPS / Vercel."
                : "Multi-stage Docker containerization, automated Vitest quality verification, and zero-downtime production deployments on Linux VPS and Vercel."}
            </p>

            <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
              {[
                "Docker & Compose",
                "Linux Ubuntu VPS CLI",
                "Vitest Automation (100%)",
                "Vercel Edge Cloud",
                "Nginx Reverse Proxy",
                "Git Branching & Release",
              ].map((badge) => (
                <span
                  key={badge}
                  style={{
                    fontFamily: "var(--font-mono, monospace)",
                    fontSize: "10.5px",
                    fontWeight: 700,
                    padding: "3px 8px",
                    borderRadius: "5px",
                    background: "#f8fafc",
                    color: "#334155",
                    border: "1px solid #e2e8f0",
                  }}
                >
                  {badge}
                </span>
              ))}
            </div>

            <div
              style={{
                marginTop: "auto",
                paddingTop: "10px",
                borderTop: "1px solid #f1f5f9",
                fontSize: "11.5px",
                color: "#64748b",
                fontFamily: "var(--studio-font-sans)",
              }}
            >
              <strong style={{ color: "#0f172a", fontFamily: "var(--font-mono, monospace)", fontSize: "10.5px" }}>
                PIPELINE:
              </strong>{" "}
              Docker · Ubuntu CLI · Vitest · GitHub Actions · Nginx
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
