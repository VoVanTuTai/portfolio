import { useState, useEffect } from "react";
import {
  GitPullRequest,
  ShieldCheck,
  Lock,
  Server,
  Database,
  Code2,
  Terminal,
  Cpu,
  Layers,
  Folder,
  FileText,
  CheckCircle2,
  AlertTriangle,
  Zap,
  BookOpen,
  Sparkles,
} from "lucide-react";
import type { Language } from "@/types";

interface StudioDevStageViewProps {
  lang: Language;
  activeItemSlug?: string;
}

type DevSubTab = "git-workflow" | "web-security" | "php-mvc" | "modern-frameworks";
type FrameworkTab = "react" | "react-native" | "nodejs" | "nestjs";

export function StudioDevStageView({ lang, activeItemSlug }: StudioDevStageViewProps) {
  const getActiveTab = (): DevSubTab => {
    if (activeItemSlug === "web-security-data" || activeItemSlug === "web-security" || activeItemSlug === "bao-mat-web") return "web-security";
    if (activeItemSlug === "php-mvc-iuh" || activeItemSlug === "nen-tang-php") return "php-mvc";
    if (activeItemSlug?.startsWith("modern-") || activeItemSlug === "modern-frameworks" || activeItemSlug === "cong-nghe-hien-dai") return "modern-frameworks";
    return "git-workflow";
  };

  const getActiveFramework = (): FrameworkTab => {
    if (activeItemSlug === "modern-react-native") return "react-native";
    if (activeItemSlug === "modern-nodejs") return "nodejs";
    if (activeItemSlug === "modern-nestjs") return "nestjs";
    return "react";
  };

  const activeTab = getActiveTab();
  const [activeFramework, setActiveFramework] = useState<FrameworkTab>(getActiveFramework);
  const [activeGitCommitType, setActiveGitCommitType] = useState<string>("feat");

  useEffect(() => {
    setActiveFramework(getActiveFramework());
  }, [activeItemSlug]);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px", color: "#0f172a" }}>
      {/* 1. Header & Breadcrumb */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          borderBottom: "1px solid #e2e8f0",
          paddingBottom: "16px",
          flexWrap: "wrap",
          gap: "12px",
        }}
      >
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px" }}>
            <span
              style={{
                fontFamily: "var(--font-mono, monospace)",
                fontSize: "11px",
                fontWeight: 800,
                color: "#2563eb",
                background: "#eff6ff",
                padding: "2px 8px",
                borderRadius: "4px",
                border: "1px solid #bfdbfe",
              }}
            >
              MODULE 04 // ENGINEERING REPO
            </span>
            <span style={{ fontSize: "12px", color: "#64748b" }}>
              {lang === "vi" ? "Kho Kiến Thức Kỹ Thuật Dev & Nền Tảng Lập Trình" : "Engineering Repository & Developer Foundations"}
            </span>
          </div>
          <h2
            style={{
              margin: 0,
              fontSize: "22px",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              color: "#0f172a",
              fontFamily: "var(--studio-font-sans)",
            }}
          >
            {lang === "vi"
              ? "Nền Tảng Lập Trình, Chuẩn Dev & Kiến Trúc Phần Mềm"
              : "Software Development Standards, Security & Modern Architecture"}
          </h2>
          <p style={{ margin: "4px 0 0 0", fontSize: "13px", color: "#64748b", lineHeight: 1.5 }}>
            {lang === "vi"
              ? "Đúc kết kiến thức đào tạo chính quy Kỹ sư HTTT (IUH GPA 3.26) kết hợp kinh nghiệm thực chiến: Git Flow, An toàn bảo mật, PHP MVC và Full-stack hiện đại."
              : "Consolidated from formal Information Systems Engineering (IUH GPA 3.26) and real-world delivery: Git Flow, Security, PHP MVC, and modern full-stack."}
          </p>
        </div>

        {/* Status Pill */}
        <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              padding: "6px 12px",
              borderRadius: "20px",
              background: "#f0fdf4",
              border: "1px solid #bbf7d0",
              color: "#166534",
              fontSize: "11.5px",
              fontWeight: 700,
              fontFamily: "var(--font-mono, monospace)",
            }}
          >
            <CheckCircle2 size={13} />
            CONVENTIONAL 1.0 & OWASP READY
          </span>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* TAB 4.1: GIT WORKFLOW & CONVENTIONAL COMMITS */}
      {/* ========================================================================= */}
      {activeTab === "git-workflow" && (
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {/* Mentorship Concept Callout */}
          <div
            style={{
              padding: "16px 20px",
              background: "#eff6ff",
              border: "1.5px solid #bfdbfe",
              borderRadius: "10px",
              display: "flex",
              alignItems: "flex-start",
              gap: "14px",
            }}
          >
            <div
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "8px",
                background: "#2563eb",
                display: "grid",
                placeItems: "center",
                flexShrink: 0,
                color: "#ffffff",
              }}
            >
              <GitPullRequest size={18} />
            </div>
            <div>
              <h4 style={{ margin: "0 0 4px 0", fontSize: "14px", fontWeight: 800, color: "#1e3a8a", fontFamily: "var(--studio-font-display)" }}>
                {lang === "vi"
                  ? "Triết Lý Git Teamwork: Lý Do Tuân Thủ Quy Trình Chuẩn"
                  : "Engineering Philosophy: Why Strict Git Conventions Matter"}
              </h4>
              <p style={{ margin: 0, fontSize: "13px", color: "#1e40af", lineHeight: 1.6 }}>
                {lang === "vi"
                  ? "Trong môi trường doanh nghiệp, Git không chỉ là công cụ lưu code mà là bản đồ lịch sử sống (Living Changelog). Một commit chuẩn giúp tự động hóa Semantic Release, tra cứu bug qua git bisect trong 2 phút, và đảm bảo mọi Pull Request đều có thể rollback tức thì nếu có sự cố."
                  : "In enterprise delivery, Git is not merely a backup tool but a living architectural changelog. Strict conventions enable automated Semantic Releases, sub-2-minute bug isolation via git bisect, and deterministic rollback guarantees."}
              </p>
            </div>
          </div>

          {/* Interactive 2.5D Git Branching SVG Simulation */}
          <div
            style={{
              background: "#0f172a",
              borderRadius: "12px",
              border: "1px solid #1e293b",
              padding: "20px",
              boxShadow: "0 10px 25px -5px rgba(0,0,0,0.3)",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "14px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#22c55e", display: "inline-block" }} />
                <span style={{ color: "#94a3b8", fontSize: "12px", fontFamily: "var(--font-mono, monospace)" }}>
                  ENTERPRISE GIT-FLOW // BRANCH LIFECYCLE MODEL
                </span>
              </div>
              <span
                style={{
                  color: "#38bdf8",
                  fontSize: "11px",
                  background: "#0369a133",
                  padding: "3px 8px",
                  borderRadius: "4px",
                  border: "1px solid #0284c755",
                  fontFamily: "var(--font-mono, monospace)",
                }}
              >
                Zero-Direct-Commit on Main
              </span>
            </div>

            {/* SVG Diagram */}
            <div style={{ overflowX: "auto", paddingBottom: "10px" }}>
              <svg width="760" height="200" viewBox="0 0 760 200" style={{ display: "block", margin: "0 auto" }}>
                <defs>
                  <linearGradient id="mainGrad" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#2563eb" />
                  </linearGradient>
                  <linearGradient id="devGrad" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#10b981" />
                    <stop offset="100%" stopColor="#059669" />
                  </linearGradient>
                  <linearGradient id="featGrad" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#f59e0b" />
                    <stop offset="100%" stopColor="#d97706" />
                  </linearGradient>
                  <linearGradient id="hotfixGrad" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#ef4444" />
                    <stop offset="100%" stopColor="#dc2626" />
                  </linearGradient>
                </defs>

                {/* Grid guidelines */}
                <line x1="120" y1="40" x2="720" y2="40" stroke="#1e293b" strokeDasharray="4 4" />
                <line x1="120" y1="95" x2="720" y2="95" stroke="#1e293b" strokeDasharray="4 4" />
                <line x1="120" y1="150" x2="720" y2="150" stroke="#1e293b" strokeDasharray="4 4" />

                {/* Branch Labels */}
                <text x="20" y="44" fill="#38bdf8" fontSize="12" fontWeight="700" fontFamily="monospace">main (prod)</text>
                <text x="20" y="99" fill="#34d399" fontSize="12" fontWeight="700" fontFamily="monospace">develop</text>
                <text x="20" y="154" fill="#fbbf24" fontSize="12" fontWeight="700" fontFamily="monospace">feature/*</text>

                {/* Main Branch Line */}
                <line x1="130" y1="40" x2="710" y2="40" stroke="#38bdf8" strokeWidth="3" />
                {/* Develop Branch Line */}
                <line x1="130" y1="95" x2="710" y2="95" stroke="#34d399" strokeWidth="3" />

                {/* Feature branch path: diverges from develop, commits, then PR merges back */}
                <path d="M 180 95 C 210 95, 220 150, 250 150 L 380 150 C 410 150, 420 95, 450 95" fill="none" stroke="#fbbf24" strokeWidth="2.5" strokeDasharray="6 3" />

                {/* Hotfix branch path: branches from main, merges back to main and develop */}
                <path d="M 500 40 C 520 40, 530 15, 550 15 L 610 15 C 630 15, 640 40, 660 40" fill="none" stroke="#f87171" strokeWidth="2" strokeDasharray="4 2" />
                <path d="M 610 15 C 630 15, 640 95, 660 95" fill="none" stroke="#f87171" strokeWidth="1.5" strokeDasharray="4 2" />
                <text x="560" y="10" fill="#f87171" fontSize="10" fontFamily="monospace">hotfix/v1.0.1</text>

                {/* Commits on Main */}
                <circle cx="150" cy="40" r="7" fill="#38bdf8" />
                <text x="142" y="30" fill="#94a3b8" fontSize="10" fontFamily="monospace">v1.0.0</text>
                <circle cx="480" cy="40" r="7" fill="#38bdf8" />
                <text x="470" y="30" fill="#94a3b8" fontSize="10" fontFamily="monospace">v1.1.0</text>
                <circle cx="660" cy="40" r="7" fill="#f87171" />
                <text x="652" y="30" fill="#f87171" fontSize="10" fontFamily="monospace">v1.1.1</text>
                <circle cx="700" cy="40" r="7" fill="#38bdf8" />

                {/* Release merge arrow from dev to main */}
                <path d="M 450 95 C 460 95, 470 40, 480 40" fill="none" stroke="#38bdf8" strokeWidth="2" markerEnd="url(#arrow)" />

                {/* Commits on Develop */}
                <circle cx="180" cy="95" r="6" fill="#34d399" />
                <circle cx="320" cy="95" r="5" fill="#34d399" />
                <circle cx="450" cy="95" r="7" fill="#34d399" />
                <circle cx="660" cy="95" r="6" fill="#34d399" />

                {/* Commits on Feature */}
                <circle cx="260" cy="150" r="6" fill="#fbbf24" />
                <text x="238" y="172" fill="#fbbf24" fontSize="10" fontFamily="monospace">feat(auth)</text>

                <circle cx="320" cy="150" r="6" fill="#fbbf24" />
                <text x="300" y="172" fill="#fbbf24" fontSize="10" fontFamily="monospace">fix(token)</text>

                <circle cx="380" cy="150" r="6" fill="#fbbf24" />
                <text x="360" y="172" fill="#fbbf24" fontSize="10" fontFamily="monospace">test(unit)</text>

                {/* Pull Request Badge */}
                <rect x="405" y="112" width="60" height="18" rx="4" fill="#2563eb" />
                <text x="412" y="125" fill="#ffffff" fontSize="10" fontWeight="700" fontFamily="monospace">PR #42</text>

                {/* Animated Commit Packets */}
                <circle r="4" fill="#fbbf24" stroke="#ffffff" strokeWidth="1.5">
                  <animateMotion path="M 180 95 C 210 95, 220 150, 250 150 L 380 150 C 410 150, 420 95, 450 95" dur="2.5s" repeatCount="indefinite" />
                </circle>
                <circle r="4" fill="#38bdf8" stroke="#ffffff" strokeWidth="1.5">
                  <animateMotion path="M 450 95 C 460 95, 470 40, 480 40" dur="1.8s" repeatCount="indefinite" />
                </circle>
                <circle r="4" fill="#f87171" stroke="#ffffff" strokeWidth="1.5">
                  <animateMotion path="M 500 40 C 520 40, 530 15, 550 15 L 610 15 C 630 15, 640 40, 660 40" dur="2.0s" repeatCount="indefinite" />
                </circle>
              </svg>
            </div>
          </div>

          {/* Conventional Commit Types Selector & Live Syntax Playground */}
          <div
            style={{
              padding: "18px",
              background: "#ffffff",
              borderRadius: "12px",
              border: "1.5px solid #d8e6f5",
              boxShadow: "0 2px 6px rgba(15,23,42,0.03)",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "14px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <Terminal size={16} color="#2563eb" />
                <h4 style={{ margin: 0, fontSize: "14px", fontWeight: 800 }}>
                  {lang === "vi" ? "Bộ Quy Chuẩn Conventional Commits 1.0" : "Conventional Commits 1.0 Specification"}
                </h4>
              </div>
              <span style={{ fontSize: "12px", color: "#64748b" }}>
                {lang === "vi" ? "Click để xem cú pháp & giải thích lý do" : "Click type to inspect syntax & rationale"}
              </span>
            </div>

            {/* Commit Type Badges */}
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "16px" }}>
              {[
                { type: "feat", label: "feat: Tính năng mới", color: "#2563eb" },
                { type: "fix", label: "fix: Sửa lỗi", color: "#dc2626" },
                { type: "refactor", label: "refactor: Tái cấu trúc", color: "#7c3aed" },
                { type: "docs", label: "docs: Tài liệu", color: "#059669" },
                { type: "test", label: "test: Kiểm thử", color: "#d97706" },
                { type: "perf", label: "perf: Tối ưu hiệu năng", color: "#0891b2" },
                { type: "chore", label: "chore: Bảo trì / build", color: "#64748b" },
              ].map((item) => (
                <button
                  key={item.type}
                  type="button"
                  onClick={() => setActiveGitCommitType(item.type)}
                  style={{
                    padding: "6px 12px",
                    borderRadius: "6px",
                    border: `1px solid ${activeGitCommitType === item.type ? item.color : "#e2e8f0"}`,
                    background: activeGitCommitType === item.type ? `${item.color}15` : "#ffffff",
                    color: activeGitCommitType === item.type ? item.color : "#475569",
                    fontWeight: 700,
                    fontSize: "12px",
                    fontFamily: "var(--font-mono, monospace)",
                    cursor: "pointer",
                  }}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Dynamic Syntax & Rationale Box */}
            <div
              style={{
                padding: "14px 16px",
                background: "#f8fafc",
                borderRadius: "8px",
                border: "1px solid #e2e8f0",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              {activeGitCommitType === "feat" && (
                <>
                  <div style={{ fontFamily: "monospace", fontSize: "13px", color: "#1e293b", fontWeight: 700 }}>
                    <span style={{ color: "#2563eb" }}>feat</span>(<span style={{ color: "#059669" }}>tracking</span>): implement real-time webhook listener for hub status updates
                  </div>
                  <p style={{ margin: 0, fontSize: "12.5px", color: "#475569", lineHeight: 1.6 }}>
                    <strong>Ý nghĩa & Lý do:</strong> Dùng khi thêm một tính năng mới ảnh hưởng trực tiếp đến người dùng hoặc luồng nghiệp vụ. Khi tạo release tự động (CI/CD), commit này sẽ tăng minor version (<code style={{ color: "#2563eb" }}>v1.1.0 -&gt; v1.2.0</code>).
                  </p>
                </>
              )}
              {activeGitCommitType === "fix" && (
                <>
                  <div style={{ fontFamily: "monospace", fontSize: "13px", color: "#1e293b", fontWeight: 700 }}>
                    <span style={{ color: "#dc2626" }}>fix</span>(<span style={{ color: "#059669" }}>cod-recon</span>): prevent duplicate ledger credit via distributed lock key
                  </div>
                  <p style={{ margin: 0, fontSize: "12.5px", color: "#475569", lineHeight: 1.6 }}>
                    <strong>Ý nghĩa & Lý do:</strong> Dùng khi vá lỗi nghiệp vụ hoặc kỹ thuật. Commit này giúp tăng patch version (<code style={{ color: "#dc2626" }}>v1.2.0 -&gt; v1.2.1</code>) và tự động gắn link đến Issue Tracker / Jira Ticket.
                  </p>
                </>
              )}
              {activeGitCommitType === "refactor" && (
                <>
                  <div style={{ fontFamily: "monospace", fontSize: "13px", color: "#1e293b", fontWeight: 700 }}>
                    <span style={{ color: "#7c3aed" }}>refactor</span>(<span style={{ color: "#059669" }}>order-service</span>): extract delivery fee computation into Strategy pattern
                  </div>
                  <p style={{ margin: 0, fontSize: "12.5px", color: "#475569", lineHeight: 1.6 }}>
                    <strong>Ý nghĩa & Lý do:</strong> Tái cấu trúc code nhằm tăng tính dễ đọc, khả năng mở rộng (Clean Code, SOLID) mà KHÔNG làm thay đổi hành vi bên ngoài và KHÔNG sửa bug.
                  </p>
                </>
              )}
              {activeGitCommitType === "docs" && (
                <>
                  <div style={{ fontFamily: "monospace", fontSize: "13px", color: "#1e293b", fontWeight: 700 }}>
                    <span style={{ color: "#059669" }}>docs</span>(<span style={{ color: "#059669" }}>api</span>): document OpenAPI 3.0 specs for ride dispatch webhooks
                  </div>
                  <p style={{ margin: 0, fontSize: "12.5px", color: "#475569", lineHeight: 1.6 }}>
                    <strong>Ý nghĩa & Lý do:</strong> Cập nhật tài liệu, README, Swagger hoặc tài liệu hướng dẫn bàn giao kỹ thuật, không thay đổi mã nguồn logic.
                  </p>
                </>
              )}
              {activeGitCommitType === "test" && (
                <>
                  <div style={{ fontFamily: "monospace", fontSize: "13px", color: "#1e293b", fontWeight: 700 }}>
                    <span style={{ color: "#d97706" }}>test</span>(<span style={{ color: "#059669" }}>idempotency</span>): add vitest suite for concurrent payment callback
                  </div>
                  <p style={{ margin: 0, fontSize: "12.5px", color: "#475569", lineHeight: 1.6 }}>
                    <strong>Ý nghĩa & Lý do:</strong> Bổ sung hoặc chỉnh sửa các bộ kiểm thử Unit Test, Integration Test hoặc E2E Test nhằm nâng cao độ tin cậy của mã nguồn.
                  </p>
                </>
              )}
              {activeGitCommitType === "perf" && (
                <>
                  <div style={{ fontFamily: "monospace", fontSize: "13px", color: "#1e293b", fontWeight: 700 }}>
                    <span style={{ color: "#0891b2" }}>perf</span>(<span style={{ color: "#059669" }}>dispatch</span>): add compound index on (status, hub_id, created_at)
                  </div>
                  <p style={{ margin: 0, fontSize: "12.5px", color: "#475569", lineHeight: 1.6 }}>
                    <strong>Ý nghĩa & Lý do:</strong> Tối ưu hiệu năng thực thi (tăng tốc độ truy vấn database, giảm độ trễ API, giảm mức tiêu thụ RAM/CPU).
                  </p>
                </>
              )}
              {activeGitCommitType === "chore" && (
                <>
                  <div style={{ fontFamily: "monospace", fontSize: "13px", color: "#1e293b", fontWeight: 700 }}>
                    <span style={{ color: "#64748b" }}>chore</span>(<span style={{ color: "#059669" }}>deps</span>): bump vitest from 1.2.0 to 1.6.0 in package.json
                  </div>
                  <p style={{ margin: 0, fontSize: "12.5px", color: "#475569", lineHeight: 1.6 }}>
                    <strong>Ý nghĩa & Lý do:</strong> Các công việc hỗ trợ như nâng cấp dependencies, chỉnh sửa cấu hình build, linter, gitignore mà không can thiệp code ứng dụng.
                  </p>
                </>
              )}
            </div>
          </div>

          {/* Pull Request & Code Review 5-Point Checklist */}
          <div
            style={{
              padding: "18px",
              background: "#ffffff",
              borderRadius: "12px",
              border: "1.5px solid #d8e6f5",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
              <GitPullRequest size={16} color="#7c3aed" />
              <h4 style={{ margin: 0, fontSize: "14px", fontWeight: 800 }}>
                {lang === "vi" ? "Tiêu Chuẩn Duyệt Code (PR & Code Review Checklist 5 Điểm)" : "5-Point Production Code Review Gate"}
              </h4>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "12px" }}>
              {[
                {
                  title: "1. Zero Lint & Type Errors",
                  desc: "Chạy pass 100% npm run typecheck & linter trước khi tạo PR. Tuyệt đối không bypass any bừa bãi.",
                },
                {
                  title: "2. Idempotency & Concurrency Check",
                  desc: "Mọi API ghi nhận tiền hoặc trạng thái đơn phải có cơ chế khóa (locking/idempotency key) tránh race condition.",
                },
                {
                  title: "3. No Hardcoded Secrets",
                  desc: "Không lưu API key, database credentials trong code. Bắt buộc đọc từ biến môi trường (.env).",
                },
                {
                  title: "4. Database Indexing & Query Safety",
                  desc: "Mọi truy vấn WHERE/ORDER BY phải được kiểm tra EXPLAIN PLAN, tránh Full Table Scan và N+1 query.",
                },
                {
                  title: "5. Squash & Merge Clean History",
                  desc: "Gộp các commit nháp thành 1 commit duy nhất chuẩn Conventional trước khi merge vào nhánh develop/main.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    padding: "12px",
                    borderRadius: "8px",
                    background: "#f8fafc",
                    border: "1px solid #e2e8f0",
                  }}
                >
                  <strong style={{ fontSize: "12.5px", color: "#0f172a", display: "block", marginBottom: "4px" }}>
                    {item.title}
                  </strong>
                  <p style={{ margin: 0, fontSize: "12px", color: "#64748b", lineHeight: 1.5 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 4.2: WEB & DATA SECURITY ESSENTIALS */}
      {/* ========================================================================= */}
      {activeTab === "web-security" && (
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {/* Security Banner */}
          <div
            style={{
              padding: "16px 20px",
              background: "#f0fdf4",
              border: "1.5px solid #bbf7d0",
              borderRadius: "10px",
              display: "flex",
              alignItems: "flex-start",
              gap: "14px",
            }}
          >
            <div
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "8px",
                background: "#16a34a",
                display: "grid",
                placeItems: "center",
                flexShrink: 0,
                color: "#ffffff",
              }}
            >
              <ShieldCheck size={18} />
            </div>
            <div>
              <h4 style={{ margin: "0 0 4px 0", fontSize: "14px", fontWeight: 800, color: "#166534", fontFamily: "var(--studio-font-display)" }}>
                {lang === "vi"
                  ? "Tư Duy An Toàn & Bảo Mật Web Đa Lớp (Defense in Depth)"
                  : "Defense-in-Depth Security Mindset"}
              </h4>
              <p style={{ margin: 0, fontSize: "13px", color: "#15803d", lineHeight: 1.6 }}>
                {lang === "vi"
                  ? "Bảo mật không phải là một tính năng gắn thêm vào cuối dự án mà phải được tích hợp từ tầng Domain, Transport, Application đến Storage. Dưới đây là các nguyên tắc cốt lõi giúp hệ thống chống chọi với các cuộc tấn công mạng."
                  : "Security is not an afterthought but an architectural foundation spanning Domain, Transport, Application, and Data layers. Below are enterprise mitigation patterns aligned with OWASP Top 10."}
              </p>
            </div>
          </div>

          {/* Interactive Security Architecture Flow Diagram */}
          <div
            style={{
              background: "#0f172a",
              borderRadius: "12px",
              border: "1px solid #1e293b",
              padding: "20px",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "14px" }}>
              <span style={{ color: "#38bdf8", fontSize: "12px", fontFamily: "var(--font-mono, monospace)" }}>
                END-TO-END SECURITY PIPELINE // CLIENT TO DATABASE
              </span>
              <span style={{ color: "#22c55e", fontSize: "11px", fontFamily: "monospace" }}>TLS 1.3 · BCRYPT · JWT</span>
            </div>

            {/* Architecture SVG Pipeline */}
            <div style={{ overflowX: "auto", paddingBottom: "10px" }}>
              <svg width="740" height="130" viewBox="0 0 740 130" style={{ display: "block", margin: "0 auto" }}>
                {/* Node 1: Browser */}
                <rect x="20" y="30" width="100" height="70" rx="8" fill="#1e293b" stroke="#38bdf8" strokeWidth="2" />
                <text x="70" y="60" textAnchor="middle" fill="#f8fafc" fontSize="12" fontWeight="700">Client Web</text>
                <text x="70" y="80" textAnchor="middle" fill="#94a3b8" fontSize="10">Browser / App</text>

                {/* Arrow 1 */}
                <path d="M 120 65 L 170 65" stroke="#38bdf8" strokeWidth="2" strokeDasharray="4 2" />
                <text x="145" y="55" textAnchor="middle" fill="#38bdf8" fontSize="9" fontFamily="monospace">HTTPS</text>

                {/* Node 2: DNS & Cloudflare */}
                <rect x="170" y="30" width="110" height="70" rx="8" fill="#1e293b" stroke="#fbbf24" strokeWidth="2" />
                <text x="225" y="58" textAnchor="middle" fill="#f8fafc" fontSize="11" fontWeight="700">Cloudflare WAF</text>
                <text x="225" y="76" textAnchor="middle" fill="#fbbf24" fontSize="10">DDoS / DNSSEC</text>

                {/* Arrow 2 */}
                <path d="M 280 65 L 330 65" stroke="#fbbf24" strokeWidth="2" />
                <text x="305" y="55" textAnchor="middle" fill="#fbbf24" fontSize="9" fontFamily="monospace">TLS 1.3</text>

                {/* Node 3: NGINX Reverse Proxy */}
                <rect x="330" y="30" width="110" height="70" rx="8" fill="#1e293b" stroke="#34d399" strokeWidth="2" />
                <text x="385" y="58" textAnchor="middle" fill="#f8fafc" fontSize="11" fontWeight="700">Reverse Proxy</text>
                <text x="385" y="76" textAnchor="middle" fill="#34d399" fontSize="10">NGINX / SSL Term</text>

                {/* Arrow 3 */}
                <path d="M 440 65 L 490 65" stroke="#34d399" strokeWidth="2" />
                <text x="465" y="55" textAnchor="middle" fill="#34d399" fontSize="9" fontFamily="monospace">JWT Val</text>

                {/* Node 4: Backend API */}
                <rect x="490" y="30" width="110" height="70" rx="8" fill="#1e293b" stroke="#818cf8" strokeWidth="2" />
                <text x="545" y="58" textAnchor="middle" fill="#f8fafc" fontSize="11" fontWeight="700">App Server</text>
                <text x="545" y="76" textAnchor="middle" fill="#818cf8" fontSize="10">NestJS / PHP API</text>

                {/* Arrow 4 */}
                <path d="M 600 65 L 640 65" stroke="#818cf8" strokeWidth="2" />
                <text x="620" y="55" textAnchor="middle" fill="#818cf8" fontSize="9" fontFamily="monospace">PDO</text>

                {/* Node 5: Database */}
                <rect x="640" y="30" width="80" height="70" rx="8" fill="#1e293b" stroke="#f43f5e" strokeWidth="2" />
                <text x="680" y="58" textAnchor="middle" fill="#f8fafc" fontSize="11" fontWeight="700">Database</text>
                <text x="680" y="76" textAnchor="middle" fill="#f43f5e" fontSize="10">Encrypted 3NF</text>

                {/* Animated Secured Encrypted Token */}
                <circle r="4.5" fill="#22c55e" stroke="#ffffff" strokeWidth="1.5">
                  <animateMotion path="M 120 65 L 280 65 L 440 65 L 600 65 L 640 65" dur="2.2s" repeatCount="indefinite" />
                </circle>
              </svg>
            </div>
          </div>

          {/* 4 Core Security Deep Dives */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "16px" }}>
            {/* Box 1: Domain, DNS & HTTPS */}
            <div
              style={{
                padding: "16px",
                borderRadius: "10px",
                background: "#ffffff",
                border: "1.5px solid #d8e6f5",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                <Lock size={16} color="#2563eb" />
                <strong style={{ fontSize: "13.5px", color: "#0f172a" }}>
                  1. Tên Miền, DNS & Giao Thức HTTPS / TLS 1.3
                </strong>
              </div>
              <ul style={{ margin: 0, paddingLeft: "18px", fontSize: "12.5px", color: "#475569", lineHeight: 1.6 }}>
                <li><strong>DNS Anycast & DNSSEC:</strong> Giảm thời gian phân giải IP xuống dưới 20ms, chống nhiễm độc bộ nhớ đệm (DNS Cache Poisoning).</li>
                <li><strong>TLS 1.3 Handshake:</strong> Rút ngắn quá trình đàm phán bảo mật còn 1 RTT (Round Trip Time), loại bỏ hoàn toàn các mã hóa lỗi thời (RC4, 3DES, CBC).</li>
                <li><strong>HSTS Header:</strong> <code style={{ fontSize: "11px", background: "#f1f5f9", padding: "2px 4px" }}>Strict-Transport-Security: max-age=63072000; includeSubDomains; preload</code> ép trình duyệt chỉ kết nối HTTPS.</li>
              </ul>
            </div>

            {/* Box 2: Password Hashing & Data at Rest */}
            <div
              style={{
                padding: "16px",
                borderRadius: "10px",
                background: "#ffffff",
                border: "1.5px solid #d8e6f5",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                <Database size={16} color="#059669" />
                <strong style={{ fontSize: "13.5px", color: "#0f172a" }}>
                  2. Mã Hóa Mật Khẩu (Bcrypt) & Lưu Trữ Dữ Liệu
                </strong>
              </div>
              <ul style={{ margin: 0, paddingLeft: "18px", fontSize: "12.5px", color: "#475569", lineHeight: 1.6 }}>
                <li><strong>Bcrypt & Salt:</strong> Tuyệt đối không dùng MD5 hay SHA-256 thuần để lưu mật khẩu. Dùng Bcrypt với salt rounds = 12 có cơ chế tự động sinh chuỗi muối chống Rainbow Table.</li>
                <li><strong>Mã hóa đối xứng (AES-256-GCM):</strong> Dùng để mã hóa các thông tin nhạy cảm của khách hàng (Số CCCD, số thẻ ngân hàng, token bên thứ ba) trong database.</li>
                <li><strong>Secrets Management:</strong> Toàn bộ biến môi trường lưu trong file <code style={{ fontSize: "11px", background: "#f1f5f9", padding: "2px 4px" }}>.env</code> được loại khỏi Git qua <code style={{ fontSize: "11px", background: "#f1f5f9", padding: "2px 4px" }}>.gitignore</code>.</li>
              </ul>
            </div>

            {/* Box 3: Authentication: JWT vs Session */}
            <div
              style={{
                padding: "16px",
                borderRadius: "10px",
                background: "#ffffff",
                border: "1.5px solid #d8e6f5",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                <Cpu size={16} color="#7c3aed" />
                <strong style={{ fontSize: "13.5px", color: "#0f172a" }}>
                  3. Xác Thực (Authentication): JWT vs Session
                </strong>
              </div>
              <ul style={{ margin: 0, paddingLeft: "18px", fontSize: "12.5px", color: "#475569", lineHeight: 1.6 }}>
                <li><strong>Stateless JWT:</strong> Gồm Header.Payload.Signature. Phù hợp Microservices vì không cần tra cứu database mỗi request.</li>
                <li><strong>Lưu trữ an toàn:</strong> Không bao giờ lưu JWT nhạy cảm trong <code style={{ fontSize: "11px", background: "#f1f5f9", padding: "2px 4px" }}>localStorage</code> (nguy cơ XSS). Bắt buộc dùng cookie <code style={{ fontSize: "11px", background: "#f1f5f9", padding: "2px 4px" }}>HttpOnly; Secure; SameSite=Strict</code>.</li>
                <li><strong>Refresh Token Rotation:</strong> Access Token sống ngắn (15 phút), Refresh Token thu hồi và cấp mới sau mỗi lần xin phát hành.</li>
              </ul>
            </div>

            {/* Box 4: OWASP Top 10 Mitigation */}
            <div
              style={{
                padding: "16px",
                borderRadius: "10px",
                background: "#ffffff",
                border: "1.5px solid #d8e6f5",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                <AlertTriangle size={16} color="#dc2626" />
                <strong style={{ fontSize: "13.5px", color: "#0f172a" }}>
                  4. Phòng Thủ OWASP Top 10 Thực Chiến
                </strong>
              </div>
              <ul style={{ margin: 0, paddingLeft: "18px", fontSize: "12.5px", color: "#475569", lineHeight: 1.6 }}>
                <li><strong>SQL Injection:</strong> 100% dùng PDO Prepared Statements hoặc ORM Parameterized Queries. Tuyệt đối không ghép chuỗi SQL thô.</li>
                <li><strong>XSS Prevention:</strong> Escape HTML output, dùng Content Security Policy (CSP), và validate dữ liệu đầu vào bằng Zod / class-validator.</li>
                <li><strong>Rate Limiting:</strong> Giới hạn tần suất gọi API (VD: tối đa 60 req/phút trên mỗi IP) chặn Brute-force đăng nhập.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 4.3: PHP MVC & IUH CAPSTONE */}
      {/* ========================================================================= */}
      {activeTab === "php-mvc" && (
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {/* Academic Background Banner */}
          <div
            style={{
              padding: "16px 20px",
              background: "#eff6ff",
              border: "1.5px solid #bfdbfe",
              borderRadius: "10px",
              display: "flex",
              alignItems: "flex-start",
              gap: "14px",
            }}
          >
            <div
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "8px",
                background: "#2563eb",
                display: "grid",
                placeItems: "center",
                flexShrink: 0,
                color: "#ffffff",
              }}
            >
              <BookOpen size={18} />
            </div>
            <div>
              <h4 style={{ margin: "0 0 4px 0", fontSize: "14px", fontWeight: 800, color: "#1e3a8a", fontFamily: "var(--studio-font-display)" }}>
                {lang === "vi"
                  ? "Nền Tảng Đào Tạo Kỹ Sư Hệ Thống Thông Tin — ĐH Công Nghiệp TP.HCM (IUH)"
                  : "Information Systems Engineering Curriculum — IUH Honors"}
              </h4>
              <p style={{ margin: 0, fontSize: "13px", color: "#1e40af", lineHeight: 1.6 }}>
                {lang === "vi"
                  ? "Hoàn thành toàn diện chương trình đào tạo với GPA 3.26/4.0 (Xếp loại Giỏi). Trong đó, PHP & MySQL là ngôn ngữ cốt lõi được rèn luyện sâu qua các đồ án môn học: Lập trình Web nâng cao, Phân tích thiết kế hệ thống thông tin, và Quản trị CSDL lớn."
                  : "Graduated with Distinction (GPA 3.26/4.0). PHP and MySQL served as the foundational engineering pillars applied rigorously across Advanced Web Engineering, Systems Analysis & Design, and Enterprise Database Administration."}
              </p>
            </div>
          </div>

          {/* 2.5D MVC Architecture Diagram & Folder Structure */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "16px",
            }}
          >
            {/* Left: Folder Hierarchy */}
            <div
              style={{
                padding: "16px",
                borderRadius: "10px",
                background: "#0f172a",
                border: "1px solid #1e293b",
                color: "#f8fafc",
                fontFamily: "var(--font-mono, monospace)",
                fontSize: "12px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "#38bdf8", marginBottom: "12px", fontWeight: 700 }}>
                <Folder size={15} />
                <span>LARAVEL / PHP MVC STANDARD DIRECTORY TREE</span>
              </div>
              <div style={{ lineHeight: 1.8, color: "#cbd5e1", fontFamily: "var(--studio-font-mono)" }}>
                <div><span style={{ color: "#38bdf8" }}>app/</span></div>
                <div style={{ paddingLeft: "16px" }}>├── <span style={{ color: "#fbbf24" }}>Http/Controllers/</span> <span style={{ color: "#64748b" }}>// Xử lý request &amp; logic điều phối</span></div>
                <div style={{ paddingLeft: "32px" }}>│   ├── OrderController.php</div>
                <div style={{ paddingLeft: "32px" }}>│   └── AuthController.php</div>
                <div style={{ paddingLeft: "16px" }}>├── <span style={{ color: "#a855f7" }}>Http/Middleware/</span> <span style={{ color: "#64748b" }}>// Check Auth, Roles, CORS</span></div>
                <div style={{ paddingLeft: "16px" }}>└── <span style={{ color: "#34d399" }}>Models/</span> <span style={{ color: "#64748b" }}>// Eloquent ORM &amp; Quan hệ DB</span></div>
                <div style={{ paddingLeft: "32px" }}>    ├── Order.php <span style={{ color: "#64748b" }}>// hasMany(OrderItem)</span></div>
                <div style={{ paddingLeft: "32px" }}>    └── User.php</div>
                <div><span style={{ color: "#f43f5e" }}>database/</span></div>
                <div style={{ paddingLeft: "16px" }}>├── migrations/ <span style={{ color: "#64748b" }}>// Version control cấu trúc bảng</span></div>
                <div style={{ paddingLeft: "16px" }}>└── seeders/ <span style={{ color: "#64748b" }}>// Dữ liệu mẫu kiểm thử</span></div>
                <div><span style={{ color: "#38bdf8" }}>resources/views/</span> <span style={{ color: "#64748b" }}>// Blade Templates giao diện</span></div>
                <div><span style={{ color: "#fbbf24" }}>routes/</span></div>
                <div style={{ paddingLeft: "16px" }}>├── web.php <span style={{ color: "#64748b" }}>// Web sessions</span></div>
                <div style={{ paddingLeft: "16px" }}>└── api.php <span style={{ color: "#64748b" }}>// RESTful stateless routes</span></div>
              </div>
            </div>

            {/* Right: Technical Deep-Dive into DB Transactions */}
            <div
              style={{
                padding: "18px",
                borderRadius: "10px",
                background: "#ffffff",
                border: "1.5px solid #d8e6f5",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <Zap size={16} color="#d97706" />
                <strong style={{ fontSize: "14px", color: "#0f172a" }}>
                  Bài Học Kỹ Thuật Đắt Giá: Database Transactions & N+1 Query
                </strong>
              </div>

              <div style={{ background: "#f8fafc", padding: "12px", borderRadius: "8px", border: "1px solid #e2e8f0" }}>
                <span style={{ fontSize: "11px", fontWeight: 700, color: "#2563eb", fontFamily: "monospace", display: "block", marginBottom: "4px" }}>
                  1. ACID TRANSACTION TRONG GIAO DỊCH TÀI CHÍNH / ĐƠN HÀNG
                </span>
                <p style={{ margin: 0, fontSize: "12px", color: "#475569", lineHeight: 1.5 }}>
                  Trong đồ án Quản lý Đơn hàng, khi khách thanh toán cọc: phải trừ tiền ví, tạo bản ghi Order, và giảm số lượng kho. Nếu server crash ở bước 3, tiền mất mà không có hàng!
                  <br />
                  <strong>Giải pháp:</strong> Bắt buộc bọc trong <code style={{ color: "#2563eb" }}>DB::beginTransaction()</code> và <code style={{ color: "#dc2626" }}>DB::rollBack()</code> trong khối try-catch để bảo toàn 100% tính nguyên tử (Atomicity).
                </p>
              </div>

              <div style={{ background: "#f8fafc", padding: "12px", borderRadius: "8px", border: "1px solid #e2e8f0" }}>
                <span style={{ fontSize: "11px", fontWeight: 700, color: "#059669", fontFamily: "monospace", display: "block", marginBottom: "4px" }}>
                  2. GIẢI QUYẾT BỆNH KINH NIÊN N+1 QUERY (EAGER LOADING)
                </span>
                <p style={{ margin: 0, fontSize: "12px", color: "#475569", lineHeight: 1.5 }}>
                  Khi hiển thị 100 đơn hàng kèm tên tài xế: nếu dùng <code style={{ color: "#dc2626" }}>$order-&gt;driver-&gt;name</code> trong vòng lặp, hệ thống sẽ thực thi 1 + 100 câu query xuống database!
                  <br />
                  <strong>Giải pháp:</strong> Dùng Eager Loading <code style={{ color: "#059669" }}>Order::with(['driver', 'items'])-&gt;get()</code> giúp gom thành đúng 2 query tối ưu với lệnh <code style={{ color: "#059669" }}>WHERE IN (...)</code>.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 4.4: MODERN FRAMEWORKS (REACT / REACT NATIVE / NODE / NESTJS) */}
      {/* ========================================================================= */}
      {activeTab === "modern-frameworks" && (
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {/* Framework Sub-Switcher */}
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
            {[
              { id: "react" as FrameworkTab, name: "React (Web SPA & Ecosystem)", color: "#0284c7" },
              { id: "react-native" as FrameworkTab, name: "React Native (Cross-Platform Mobile)", color: "#4f46e5" },
              { id: "nodejs" as FrameworkTab, name: "Node.js (Event Loop & Asynchronous I/O)", color: "#16a34a" },
              { id: "nestjs" as FrameworkTab, name: "NestJS (Enterprise Modularity & DI)", color: "#e11d48" },
            ].map((fw) => (
              <button
                key={fw.id}
                type="button"
                onClick={() => setActiveFramework(fw.id)}
                style={{
                  padding: "8px 14px",
                  borderRadius: "8px",
                  border: `1.5px solid ${activeFramework === fw.id ? fw.color : "#e2e8f0"}`,
                  background: activeFramework === fw.id ? `${fw.color}15` : "#ffffff",
                  color: activeFramework === fw.id ? fw.color : "#475569",
                  fontWeight: 800,
                  fontSize: "12.5px",
                  cursor: "pointer",
                }}
              >
                {fw.name}
              </button>
            ))}
          </div>

          {/* DYNAMIC FRAMEWORK CONTENT */}
          {activeFramework === "react" && (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "16px" }}>
              <div style={{ padding: "18px", borderRadius: "10px", background: "#ffffff", border: "1.5px solid #d8e6f5" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "10px" }}>
                  <Code2 size={16} color="#0284c7" />
                  <strong style={{ fontSize: "14px", color: "#0f172a" }}>Kiến Trúc React & Virtual DOM</strong>
                </div>
                <p style={{ fontSize: "12.5px", color: "#475569", lineHeight: 1.6 }}>
                  React sử dụng Virtual DOM và thuật toán Reconciliation (Fiber Engine) để so sánh các thay đổi (Diffing Algorithm), chỉ cập nhật các DOM Node thực tế bị thay đổi thay vì render lại toàn bộ trang.
                </p>
                <div style={{ background: "#f8fafc", padding: "10px", borderRadius: "6px", border: "1px solid #e2e8f0", marginTop: "10px", fontSize: "12px", fontFamily: "monospace" }}>
                  <div><strong>Hooks Cốt Lõi:</strong></div>
                  <div>• useState: Quản lý local component state</div>
                  <div>• useEffect: Side-effects, cleanup event listeners</div>
                  <div>• useMemo / useCallback: Tránh tính toán lại và re-render thừa</div>
                </div>
              </div>

              <div style={{ padding: "18px", borderRadius: "10px", background: "#ffffff", border: "1.5px solid #d8e6f5" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "10px" }}>
                  <Folder size={16} color="#0284c7" />
                  <strong style={{ fontSize: "14px", color: "#0f172a" }}>Cấu Trúc Thư Mục Feature-Based (Scalable)</strong>
                </div>
                <div style={{ background: "#0f172a", padding: "12px", borderRadius: "8px", color: "#cbd5e1", fontSize: "11.5px", fontFamily: "var(--studio-font-mono)", lineHeight: 1.7 }}>
                  <div>src/</div>
                  <div style={{ paddingLeft: "14px" }}>├── components/ <span style={{ color: "#64748b" }}>// UI nguyên tử dùng chung (Button, Modal)</span></div>
                  <div style={{ paddingLeft: "14px" }}>├── features/ <span style={{ color: "#38bdf8" }}>// Chia theo từng nghiệp vụ độc lập</span></div>
                  <div style={{ paddingLeft: "28px" }}>│   ├── auth/ (components, hooks, authApi.ts)</div>
                  <div style={{ paddingLeft: "28px" }}>│   └── orders/ (components, OrderCard, useOrders)</div>
                  <div style={{ paddingLeft: "14px" }}>├── services/ <span style={{ color: "#34d399" }}>// Axios instance, token interceptor</span></div>
                  <div style={{ paddingLeft: "14px" }}>└── stores/ <span style={{ color: "#fbbf24" }}>// Zustand / Redux Toolkit global state</span></div>
                </div>
              </div>
            </div>
          )}

          {activeFramework === "react-native" && (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "16px" }}>
              <div style={{ padding: "18px", borderRadius: "10px", background: "#ffffff", border: "1.5px solid #d8e6f5" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "10px" }}>
                  <Cpu size={16} color="#4f46e5" />
                  <strong style={{ fontSize: "14px", color: "#0f172a" }}>Cơ Chế Cầu Nối (Bridge) vs New Architecture (JSI)</strong>
                </div>
                <p style={{ fontSize: "12.5px", color: "#475569", lineHeight: 1.6 }}>
                  Trong React Native cũ, JS Thread và Native Thread (Java/Objective-C) giao tiếp qua JSON Bridge không đồng bộ. New Architecture với <strong>JSI (JavaScript Interface)</strong> cho phép JS gọi trực tiếp các phương thức C++ Native đồng bộ, loại bỏ hoàn toàn hiện tượng nghẽn cổ chai khi scroll nhanh hoặc render animation.
                </p>
              </div>

              <div style={{ padding: "18px", borderRadius: "10px", background: "#ffffff", border: "1.5px solid #d8e6f5" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "10px" }}>
                  <Sparkles size={16} color="#4f46e5" />
                  <strong style={{ fontSize: "14px", color: "#0f172a" }}>Ứng Dụng Thực Tế Trong App Tài Xế / Bưu Cục</strong>
                </div>
                <ul style={{ margin: 0, paddingLeft: "18px", fontSize: "12.5px", color: "#475569", lineHeight: 1.6 }}>
                  <li><strong>Background Geolocation:</strong> Thu thập tọa độ GPS của shipper định kỳ 30s ngay cả khi tắt màn hình.</li>
                  <li><strong>Offline-First Storage:</strong> Dùng WatermelonDB / SQLite lưu trữ đơn hàng cục bộ khi vào khu vực mất sóng.</li>
                  <li><strong>Hardware Access:</strong> Tích hợp Camera quét barcode mã vận đơn với tốc độ phản hồi dưới 100ms.</li>
                </ul>
              </div>
            </div>
          )}

          {activeFramework === "nodejs" && (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "16px" }}>
              <div style={{ padding: "18px", borderRadius: "10px", background: "#ffffff", border: "1.5px solid #d8e6f5" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "10px" }}>
                  <Server size={16} color="#16a34a" />
                  <strong style={{ fontSize: "14px", color: "#0f172a" }}>Event Loop & Non-Blocking I/O</strong>
                </div>
                <p style={{ fontSize: "12.5px", color: "#475569", lineHeight: 1.6 }}>
                  Node.js chạy trên mô hình Single Thread kết hợp với Libuv. Khi có các thao tác I/O nặng (đọc file, query database, gọi webhook bên thứ ba), Node chuyển giao cho Thread Pool của hệ điều hành và tiếp tục phục vụ các request khác mà không bị chặn (Non-blocking).
                </p>
                <div style={{ background: "#f8fafc", padding: "10px", borderRadius: "6px", border: "1px solid #e2e8f0", marginTop: "10px", fontSize: "12px", fontFamily: "monospace" }}>
                  <div><strong>6 Pha Của Event Loop:</strong></div>
                  <div>1. Timers (setTimeout, setInterval)</div>
                  <div>2. Pending Callbacks (I/O callbacks)</div>
                  <div>3. Idle, Prepare (Nội bộ)</div>
                  <div>4. Poll (Lấy các I/O event mới)</div>
                  <div>5. Check (setImmediate)</div>
                  <div>6. Close Callbacks (socket.on('close'))</div>
                </div>
              </div>

              <div style={{ padding: "18px", borderRadius: "10px", background: "#ffffff", border: "1.5px solid #d8e6f5" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "10px" }}>
                  <Zap size={16} color="#16a34a" />
                  <strong style={{ fontSize: "14px", color: "#0f172a" }}>Node Streams & Xử Lý Dữ Liệu Lớn</strong>
                </div>
                <p style={{ fontSize: "12.5px", color: "#475569", lineHeight: 1.6 }}>
                  Thay vì đọc toàn bộ file Excel đối soát COD 500MB vào bộ nhớ RAM (dẫn đến Out-of-Memory crash server), Node Streams cho phép đọc theo từng khối (chunk) bằng <code style={{ color: "#16a34a" }}>pipeline(readStream, transformStream, writeStream)</code> giữ RAM luôn ổn định dưới 50MB.
                </p>
              </div>
            </div>
          )}

          {activeFramework === "nestjs" && (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "16px" }}>
              <div style={{ padding: "18px", borderRadius: "10px", background: "#ffffff", border: "1.5px solid #d8e6f5" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "10px" }}>
                  <Layers size={16} color="#e11d48" />
                  <strong style={{ fontSize: "14px", color: "#0f172a" }}>Kiến Trúc Modularity & Dependency Injection (DI)</strong>
                </div>
                <p style={{ fontSize: "12.5px", color: "#475569", lineHeight: 1.6 }}>
                  NestJS mang mô hình kiến trúc doanh nghiệp chuẩn mực (tương tự Spring Boot / Angular) vào Node.js. Mã nguồn được tổ chức chặt chẽ theo Modules, Controllers (đón nhận HTTP request) và Providers/Services (chứa logic nghiệp vụ được inject qua Constructor).
                </p>
                <div style={{ background: "#f8fafc", padding: "10px", borderRadius: "6px", border: "1px solid #e2e8f0", marginTop: "10px", fontSize: "12px", fontFamily: "monospace" }}>
                  <div><strong>Các Tầng Bảo Vệ Request (Lifecycle):</strong></div>
                  <div>1. Middleware: CORS, Logging, Request ID</div>
                  <div>2. Guards: JwtAuthGuard, RolesGuard (RBAC)</div>
                  <div>3. Interceptors: Biến đổi dữ liệu trả về, đo latency</div>
                  <div>4. Pipes: ValidationPipe (Zod / class-validator)</div>
                  <div>5. Exception Filters: Bắt và định dạng lỗi chuẩn</div>
                </div>
              </div>

              <div style={{ padding: "18px", borderRadius: "10px", background: "#ffffff", border: "1.5px solid #d8e6f5" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "10px" }}>
                  <FileText size={16} color="#e11d48" />
                  <strong style={{ fontSize: "14px", color: "#0f172a" }}>Tích Hợp OpenAPI (Swagger) & DTO Chặt Chẽ</strong>
                </div>
                <p style={{ fontSize: "12.5px", color: "#475569", lineHeight: 1.6 }}>
                  Với TypeScript Decorators (<code style={{ color: "#e11d48" }}>@ApiProperty</code>, <code style={{ color: "#e11d48" }}>@IsNotEmpty</code>, <code style={{ color: "#e11d48" }}>@IsUUID</code>), NestJS tự động sinh tài liệu Swagger UI sống và từ chối ngay lập tức các request có payload sai định dạng trước khi chạm vào Service layer.
                </p>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
