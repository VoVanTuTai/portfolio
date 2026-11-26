import { ArrowUpRight, Cpu, Database, Network, Sparkles, Workflow, Zap } from "lucide-react";
import type { NavigateHandler } from "@/types";
import { BrandAvatar } from "@/components/BrandAvatar";
import topbarStyles from "@/components/Topbar.module.css";
import "@/styles/features/knowledge-base.css";

interface ShowcaseModule {
  number: string;
  moduleCode: string;
  title: string;
  desc: string;
  slug: string;
  detailPath: string;
  icon: React.ReactNode;
  tags: string[];
}

const flagshipShowcases: ShowcaseModule[] = [
  {
    number: "01",
    moduleCode: "01. NỀN TẢNG KỸ SƯ IS",
    title: "Độ Trễ & Thông Lượng (Latency vs Throughput OMS)",
    desc: "Mô hình kiến trúc phân tán Logistics OMS, đo lường độ trễ P50/P99, mô phỏng tải RPS cao và cơ chế phục hồi lỗi Chaos Mode.",
    slug: "latency-throughput-oms",
    detailPath: "/knowledge/programming-languages",
    icon: <Zap size={20} color="#2563eb" />,
    tags: ["P50 / P99", "Rate Limiting", "Worker Pod Scaling", "Chaos Mode"],
  },
  {
    number: "02",
    moduleCode: "02. CƠ SỞ DỮ LIỆU & 3NF",
    title: "Mô Hình Hóa Dữ Liệu Quan Hệ & Chuẩn Hóa 3NF",
    desc: "Từ bảng tính Excel phi chuẩn (0NF) đến mô hình quan hệ 3NF tối ưu trong PostgreSQL: loại bỏ 100% dị thường thêm, sửa, xóa.",
    slug: "data-modeling-erd",
    detailPath: "/knowledge/database/data-modeling",
    icon: <Database size={20} color="#0284c7" />,
    tags: ["PostgreSQL", "0NF → 3NF", "Khóa Ngoại FK", "Toàn Vẹn Dữ Liệu"],
  },
  {
    number: "03",
    moduleCode: "03. BACKEND API & MICROSERVICES",
    title: "Thiết Kế Hợp Đồng REST API & Idempotency Key",
    desc: "Quy chuẩn thiết kế OpenAPI 3.0, phân quyền JWT RBAC, chuẩn báo lỗi RFC 7807 và chống trùng lặp quét mã bưu kiện.",
    slug: "rest-api-contracts",
    detailPath: "/knowledge/backend-api",
    icon: <Network size={20} color="#2563eb" />,
    tags: ["OpenAPI 3.0", "JWT RBAC", "Idempotency-Key", "RFC 7807"],
  },
  {
    number: "04",
    moduleCode: "04. BUSINESS ANALYSIS & BPMN",
    title: "Mô Hình Hóa Quy Trình Nghiệp Vụ Camunda BPMN 2.0",
    desc: "Chuyển hóa bài toán kinh doanh logistics thành máy trạng thái chuẩn quốc tế: phân làn bơi (Swimlanes), cổng rẽ nhánh XOR và SLA Timer.",
    slug: "bpmn-process-modeling",
    detailPath: "/knowledge/business-analysis",
    icon: <Workflow size={20} color="#8b5cf6" />,
    tags: ["Camunda 2.0", "Pools & Swimlanes", "XOR Gateway", "BABOK v3"],
  },
  {
    number: "05",
    moduleCode: "05. RUNTIME & COMPILER PIPELINE",
    title: "Từ Mã Nguồn Đến CPU Thực Thi (Compiler & Runtime)",
    desc: "Hành trình vi mô của một dòng code: từ Lexer tách từ vựng, cây cú pháp AST, Bytecode máy ảo đến Stack/Heap và thanh ghi CPU x86-64.",
    slug: "compiler-execution-pipeline",
    detailPath: "/knowledge/programming-languages",
    icon: <Cpu size={20} color="#059669" />,
    tags: ["Lexer & AST", "V8 Bytecode", "Stack vs Heap", "CPU Registers"],
  },
];

export function KnowledgeHubPage({ navigate }: { navigate: NavigateHandler }) {
  return (
    <main className="site-shell knowledge-shell knowledge-hub">
      <header
        className={`${topbarStyles.topbar} ${topbarStyles.knowledgeTopbar}`}
        aria-label="Knowledge hub navigation"
      >
        <a
          className={topbarStyles.brand}
          href="/"
          onClick={(event) => navigate(event, "/")}
          aria-label="Back to portfolio"
        >
          <BrandAvatar alt="Võ Văn Tú Tài" />
          <div className={topbarStyles.brandText}>
            <span className={topbarStyles.brandName}>Võ Văn Tú Tài</span>
            <span className={topbarStyles.brandTag}>Systems Studio Showcase</span>
          </div>
        </a>
        <nav className={topbarStyles.nav}>
          <a
            href="/studio"
            onClick={(event) => navigate(event, "/studio")}
            style={{ fontWeight: 800, color: "#2563eb" }}
          >
            ⚡ Studio 3 Cột
          </a>
          <a
            href="https://tracking.nexus-ex.site/"
            target="_blank"
            rel="noreferrer"
            style={{ color: "#0284c7" }}
          >
            Live Demo OMS ↗
          </a>
          <a href="/" onClick={(event) => navigate(event, "/")}>
            Về Portfolio
          </a>
        </nav>
      </header>

      {/* Hero Header */}
      <section className="hub-hero">
        <div>
          <p className="eyebrow">SYSTEMS ARCHITECTURE SHOWCASE</p>
          <h1>Phòng Thí Nghiệm &amp; Khối Kiến Thức Kỹ Sư</h1>
          <p>
            Tổng hợp các mô hình kiến trúc hệ thống và giải pháp kỹ thuật tiêu biểu được thiết kế
            dưới dạng tương tác trực quan 2.5D Isometric, giúp người xem trải nghiệm trực tiếp luồng
            vận hành thực tế.
          </p>
        </div>
        <aside>
          <span>Khối kiến trúc sẵn sàng</span>
          <strong>5 Mô hình</strong>
          <p>OMS Architecture · 3NF Database · REST API · BPMN 2.0 · Compiler</p>
        </aside>
      </section>

      {/* Interactive Studio Banner */}
      <section
        style={{
          margin: "0 0 32px",
          padding: "16px 20px",
          borderRadius: "var(--studio-radius-lg, 12px)",
          background: "linear-gradient(135deg, #f0f7ff 0%, #e0f2fe 100%)",
          border: "1.5px solid #93c5fd",
          boxShadow: "1.5px 2.5px 0 #0284c7",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "16px",
          flexWrap: "wrap",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div
            style={{
              width: "38px",
              height: "38px",
              borderRadius: "9px",
              background: "#2563eb",
              color: "#ffffff",
              display: "grid",
              placeItems: "center",
              boxShadow: "1.5px 2px 0 #0f172a",
            }}
          >
            <Sparkles size={19} />
          </div>
          <div>
            <h3
              style={{
                margin: "0 0 3px",
                fontFamily: "var(--font-mono, monospace)",
                fontSize: "14px",
                fontWeight: 800,
                color: "#0f172a",
              }}
            >
              Phòng Thí Nghiệm Hệ Thống 3 Cột (Systems Studio)
            </h3>
            <p style={{ margin: 0, fontSize: "12.5px", color: "#475569" }}>
              Mô phỏng tương tác 2.5D Isometric, đo lường Telemetry HUD P50/P99 theo phong cách
              Designed to Scale.
            </p>
          </div>
        </div>
        <a
          href="/studio"
          onClick={(e) => navigate(e, "/studio")}
          className="studio-pop-btn studio-pop-btn--primary"
          style={{ textDecoration: "none" }}
        >
          <span>Mở Studio 3 Cột ↗</span>
        </a>
      </section>

      {/* Flagship Architecture Showcases */}
      <section className="hub-section">
        <div className="hub-section-heading">
          <p className="section-label">MÔ HÌNH HỆ THỐNG TIÊU BIỂU</p>
          <h2>Khối Kiến Thức &amp; Mô Phỏng Trực Quan</h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "20px",
          }}
        >
          {flagshipShowcases.map((item) => (
            <div
              key={item.slug}
              style={{
                background: "#ffffff",
                border: "1.5px solid #d8e6f5",
                borderRadius: "14px",
                padding: "20px",
                display: "flex",
                flexDirection: "column",
                boxShadow: "1.5px 2.5px 0 #d8e6f5",
                transition: "transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "12px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <div
                    style={{
                      width: "34px",
                      height: "34px",
                      borderRadius: "8px",
                      background: "#f0f7ff",
                      border: "1px solid #bfdbfe",
                      display: "grid",
                      placeItems: "center",
                    }}
                  >
                    {item.icon}
                  </div>
                  <span
                    style={{
                      fontFamily: "var(--font-mono, monospace)",
                      fontSize: "11px",
                      fontWeight: 800,
                      color: "#0284c7",
                      letterSpacing: "0.04em",
                    }}
                  >
                    {item.moduleCode}
                  </span>
                </div>
                <span
                  style={{
                    fontFamily: "var(--font-mono, monospace)",
                    fontSize: "10.5px",
                    fontWeight: 800,
                    color: "#64748b",
                    padding: "2px 8px",
                    background: "#f8fafc",
                    borderRadius: "6px",
                    border: "1px solid #e2e8f0",
                  }}
                >
                  #{item.number}
                </span>
              </div>

              <h3
                style={{
                  margin: "0 0 8px",
                  fontSize: "16px",
                  fontWeight: 850,
                  color: "#0f172a",
                  lineHeight: 1.35,
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  margin: "0 0 16px",
                  fontSize: "13px",
                  color: "#475569",
                  lineHeight: 1.6,
                  flex: 1,
                }}
              >
                {item.desc}
              </p>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "6px",
                  marginBottom: "16px",
                }}
              >
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontSize: "10.5px",
                      fontWeight: 700,
                      fontFamily: "var(--font-mono, monospace)",
                      color: "#1e40af",
                      background: "#eff6ff",
                      padding: "2px 7px",
                      borderRadius: "4px",
                      border: "1px solid #dbeafe",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  paddingTop: "12px",
                  borderTop: "1px solid #f1f5f9",
                }}
              >
                <a
                  href={`/studio#${item.slug}`}
                  onClick={(e) => navigate(e, `/studio#${item.slug}`)}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    padding: "7px 12px",
                    borderRadius: "8px",
                    background: "linear-gradient(135deg, #0284c7 0%, #2563eb 100%)",
                    color: "#ffffff",
                    fontSize: "12px",
                    fontWeight: 800,
                    textDecoration: "none",
                    boxShadow: "1.5px 2px 0 #0f172a",
                    flex: 1,
                    justifyContent: "center",
                  }}
                >
                  <span>Xem Mô Phỏng 2.5D ↗</span>
                </a>
                <a
                  href={item.detailPath}
                  onClick={(e) => navigate(e, item.detailPath)}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "4px",
                    padding: "7px 10px",
                    borderRadius: "8px",
                    background: "#f8fafc",
                    border: "1px solid #cbd5e1",
                    color: "#475569",
                    fontSize: "12px",
                    fontWeight: 700,
                    textDecoration: "none",
                  }}
                  title="Đọc chi tiết lý thuyết kỹ thuật"
                >
                  <span>Lý thuyết</span>
                  <ArrowUpRight size={13} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer
        style={{
          marginTop: "48px",
          padding: "24px 0",
          borderTop: "1px solid #e2e8f0",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: "13px",
          color: "#64748b",
        }}
      >
        <span>Võ Văn Tú Tài — Systems Engineering Portfolio</span>
        <span style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
          <Sparkles size={14} color="#2563eb" />
          Interactive 2.5D Architectural Engineering
        </span>
      </footer>
    </main>
  );
}

export default KnowledgeHubPage;
