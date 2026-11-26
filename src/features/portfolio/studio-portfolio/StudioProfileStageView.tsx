import { useState } from "react";
import {
  Boxes,
  BriefcaseBusiness,
  CheckCircle2,
  Download,
  FileCheck,
  FileDown,
  FileText,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  Phone,
  Sparkles,
  Zap,
} from "lucide-react";
import type { Language } from "@/types";
import type { PortfolioItem } from "@/data/portfolio-tree.data";
import { academicPillars } from "@/data/academic";

interface StudioProfileStageViewProps {
  item: PortfolioItem;
  lang: Language;
  onSelectItem?: (slug: string) => void;
}

type ProfileTab = "overview" | "academic" | "experience" | "cv";

export function StudioProfileStageView({
  item,
  lang,
  onSelectItem,
}: StudioProfileStageViewProps) {
  const [activeTab, setActiveTab] = useState<ProfileTab>(() => {
    return item.slug === "tai-cv-pdf" ? "cv" : "overview";
  });

  const currentTab = item.slug === "tai-cv-pdf" ? "cv" : activeTab;

  const handleTabChange = (tab: ProfileTab) => {
    setActiveTab(tab);
    if (tab === "cv") {
      onSelectItem?.("tai-cv-pdf");
    } else if (item.slug === "tai-cv-pdf") {
      onSelectItem?.("ho-so-nang-luc");
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      {/* 1. In-Page Sub-Navigation Tabs */}
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
          onClick={() => handleTabChange("overview")}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            padding: "8px 16px",
            borderRadius: "8px",
            border: "none",
            background: currentTab === "overview" ? "#ffffff" : "transparent",
            color: currentTab === "overview" ? "#2563eb" : "#475569",
            fontWeight: currentTab === "overview" ? 850 : 650,
            fontSize: "12.5px",
            fontFamily: "var(--studio-font-sans)",
            cursor: "pointer",
            boxShadow: currentTab === "overview" ? "0 1px 3px rgba(15, 23, 42, 0.08)" : "none",
            transition: "all 140ms ease",
          }}
        >
          <Sparkles size={14} />
          <span>{lang === "vi" ? "1. Tổng Quan & Định Vị" : "1. Executive Positioning"}</span>
        </button>

        <button
          type="button"
          onClick={() => handleTabChange("academic")}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            padding: "8px 16px",
            borderRadius: "8px",
            border: "none",
            background: currentTab === "academic" ? "#ffffff" : "transparent",
            color: currentTab === "academic" ? "#2563eb" : "#475569",
            fontWeight: currentTab === "academic" ? 850 : 650,
            fontSize: "12.5px",
            fontFamily: "var(--studio-font-sans)",
            cursor: "pointer",
            boxShadow: currentTab === "academic" ? "0 1px 3px rgba(15, 23, 42, 0.08)" : "none",
            transition: "all 140ms ease",
          }}
        >
          <GraduationCap size={14} />
          <span>{lang === "vi" ? "2. Nền Tảng Học Thuật IUH" : "2. Academic Foundations"}</span>
        </button>

        <button
          type="button"
          onClick={() => handleTabChange("experience")}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            padding: "8px 16px",
            borderRadius: "8px",
            border: "none",
            background: currentTab === "experience" ? "#ffffff" : "transparent",
            color: currentTab === "experience" ? "#2563eb" : "#475569",
            fontWeight: currentTab === "experience" ? 850 : 650,
            fontSize: "12.5px",
            fontFamily: "var(--studio-font-sans)",
            cursor: "pointer",
            boxShadow: currentTab === "experience" ? "0 1px 3px rgba(15, 23, 42, 0.08)" : "none",
            transition: "all 140ms ease",
          }}
        >
          <BriefcaseBusiness size={14} />
          <span>{lang === "vi" ? "3. Kinh Nghiệm Thực Chiến" : "3. Industry Track Record"}</span>
        </button>

        <button
          type="button"
          onClick={() => handleTabChange("cv")}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            padding: "8px 16px",
            borderRadius: "8px",
            border: "none",
            background: currentTab === "cv" ? "#ffffff" : "transparent",
            color: currentTab === "cv" ? "#2563eb" : "#475569",
            fontWeight: currentTab === "cv" ? 850 : 650,
            fontSize: "12.5px",
            fontFamily: "var(--studio-font-sans)",
            cursor: "pointer",
            boxShadow: currentTab === "cv" ? "0 1px 3px rgba(15, 23, 42, 0.08)" : "none",
            transition: "all 140ms ease",
          }}
        >
          <FileDown size={14} />
          <span>{lang === "vi" ? "4. Tải Bản CV Chuẩn ATS (PDF)" : "4. ATS Resume PDF"}</span>
        </button>
      </div>

      {/* TAB 1: OVERVIEW & POSITIONING */}
      {currentTab === "overview" && (
        <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          {/* Engineering Philosophy Banner */}
          <div
            style={{
              padding: "18px 22px",
              borderRadius: "12px",
              background: "linear-gradient(135deg, #eff6ff 0%, #f8fbff 100%)",
              border: "1.5px solid #bfdbfe",
              display: "flex",
              flexDirection: "column",
              gap: "8px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <Sparkles size={16} color="#2563eb" />
              <strong
                style={{
                  fontSize: "12px",
                  color: "#1e40af",
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  fontFamily: "var(--font-mono, monospace)",
                }}
              >
                {lang === "vi" ? "TRIẾT LÝ NGHỀ NGHIỆP CỦA KỸ SƯ HỆ THỐNG" : "CORE ENGINEERING & BA PHILOSOPHY"}
              </strong>
            </div>
            <p
              style={{
                margin: 0,
                fontSize: "13.5px",
                color: "#1e3a8a",
                lineHeight: 1.65,
                fontWeight: 650,
                fontFamily: "var(--studio-font-sans)",
              }}
            >
              {lang === "vi"
                ? "“Không bao giờ để Dev phải đoán nghiệp vụ. Mọi trạng thái hệ thống, quan hệ thực thể dữ liệu và luồng ngoại lệ phải được mô hình hóa toán học xác định trước khi viết dòng code đầu tiên.”"
                : "“Never let engineers guess business requirements. Every system state, relational entity schema, and exception path must be mathematically modeled and verified before the first line of code.”"}
            </p>
          </div>

          {/* 4 Pillars of Proof Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "14px",
            }}
          >
            {/* Proof 1: IUH Degree */}
            <div
              style={{
                padding: "18px",
                borderRadius: "12px",
                background: "#ffffff",
                border: "1.5px solid #d8e6f5",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                boxShadow: "0 2px 6px rgba(15, 23, 42, 0.03)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span
                    style={{
                      width: "32px",
                      height: "32px",
                      borderRadius: "8px",
                      background: "#eff6ff",
                      border: "1px solid #bfdbfe",
                      display: "grid",
                      placeItems: "center",
                    }}
                  >
                    <GraduationCap size={16} color="#2563eb" />
                  </span>
                  <strong
                    style={{
                      fontSize: "13.5px",
                      color: "#0f172a",
                      fontFamily: "var(--studio-font-sans)",
                    }}
                  >
                    {lang === "vi" ? "Học Vấn IUH (Bằng Giỏi)" : "IUH Degree (Distinction)"}
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
                  GPA 3.26 / 4.0
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
                  ? "Đại học Công nghiệp TP.HCM (IUH) — Cử nhân Kỹ thuật Hệ thống Thông tin. Nền tảng chuyên sâu về Phân tích Thiết kế Hệ thống, CSDL Quan hệ & Chuẩn hóa 3NF."
                  : "Industrial University of HCMC (IUH) — B.Eng in Information Systems. Deep foundation in Systems Analysis & Design, Relational DBs & 3NF Normalization."}
              </p>
            </div>

            {/* Proof 2: Current PM at Digityze Asia */}
            <div
              style={{
                padding: "18px",
                borderRadius: "12px",
                background: "#ffffff",
                border: "1.5px solid #d8e6f5",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                boxShadow: "0 2px 6px rgba(15, 23, 42, 0.03)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span
                    style={{
                      width: "32px",
                      height: "32px",
                      borderRadius: "8px",
                      background: "#f0fdf4",
                      border: "1px solid #bbf7d0",
                      display: "grid",
                      placeItems: "center",
                    }}
                  >
                    <CheckCircle2 size={16} color="#16a34a" />
                  </span>
                  <strong
                    style={{
                      fontSize: "13.5px",
                      color: "#0f172a",
                      fontFamily: "var(--studio-font-sans)",
                    }}
                  >
                    {lang === "vi" ? "Project Manager @ Digityze Asia" : "Project Manager @ Digityze Asia"}
                  </strong>
                </div>
                <span
                  style={{
                    fontFamily: "var(--font-mono, monospace)",
                    fontSize: "10px",
                    fontWeight: 800,
                    padding: "3px 8px",
                    borderRadius: "5px",
                    background: "#f0fdf4",
                    color: "#15803d",
                    border: "1px solid #bbf7d0",
                  }}
                >
                  {lang === "vi" ? "Hiện tại" : "Current"}
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
                  ? "Điều phối tiến độ bàn giao dự án phần mềm, lập tài liệu báo giá CNTT (IT Quotation SOP), phân rã công việc WBS, áp dụng phương pháp đường găng CPM và kiểm soát chi phí EVM."
                  : "Managing software project deliveries, IT Quotation SOP authoring, WBS task decomposition, CPM critical path scheduling, and EVM cost control."}
              </p>
            </div>

            {/* Proof 3: IT BA at HomeNest */}
            <div
              style={{
                padding: "18px",
                borderRadius: "12px",
                background: "#ffffff",
                border: "1.5px solid #d8e6f5",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                boxShadow: "0 2px 6px rgba(15, 23, 42, 0.03)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span
                    style={{
                      width: "32px",
                      height: "32px",
                      borderRadius: "8px",
                      background: "#faf5ff",
                      border: "1px solid #e9d5ff",
                      display: "grid",
                      placeItems: "center",
                    }}
                  >
                    <FileCheck size={16} color="#9333ea" />
                  </span>
                  <strong
                    style={{
                      fontSize: "13.5px",
                      color: "#0f172a",
                      fontFamily: "var(--studio-font-sans)",
                    }}
                  >
                    {lang === "vi" ? "IT BA @ HomeNest Software" : "IT BA @ HomeNest Software"}
                  </strong>
                </div>
                <span
                  style={{
                    fontFamily: "var(--font-mono, monospace)",
                    fontSize: "10px",
                    fontWeight: 800,
                    padding: "3px 8px",
                    borderRadius: "5px",
                    background: "#faf5ff",
                    color: "#7e22ce",
                    border: "1px solid #e9d5ff",
                  }}
                >
                  6+ Tháng
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
                  ? "Soạn thảo PRD/SRS chi tiết, mô hình hóa luồng nghiệp vụ BPMN 2.0 (Camunda), quản lý backlog Jira và nghiệm thu bàn giao UAT 12+ Sprints."
                  : "Authored comprehensive PRD/SRS specs, modeled BPMN 2.0 workflows in Camunda, managed Jira product backlogs, and coordinated UAT 12+ Sprints."}
              </p>
            </div>

            {/* Proof 4: Nexus Express Architect */}
            <div
              style={{
                padding: "18px",
                borderRadius: "12px",
                background: "#ffffff",
                border: "1.5px solid #d8e6f5",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                boxShadow: "0 2px 6px rgba(15, 23, 42, 0.03)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span
                    style={{
                      width: "32px",
                      height: "32px",
                      borderRadius: "8px",
                      background: "#f0f9ff",
                      border: "1px solid #bae6fd",
                      display: "grid",
                      placeItems: "center",
                    }}
                  >
                    <Zap size={16} color="#0284c7" />
                  </span>
                  <strong
                    style={{
                      fontSize: "13.5px",
                      color: "#0f172a",
                      fontFamily: "var(--studio-font-sans)",
                    }}
                  >
                    {lang === "vi" ? "Kiến Trúc Sư Nexus Express" : "Nexus Express Architect"}
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
                  Live Demo
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
                  ? "Tác giả chính hệ thống OMS & Tracking chạy thực tế tại tracking.nexus-ex.site với cơ chế Idempotency Key 24h và Redis Distributed Lock."
                  : "Lead architect of live OMS running at tracking.nexus-ex.site featuring Idempotency Keys (24h TTL) and Redis distributed locks."}
              </p>
            </div>
          </div>

          {/* Direct Verified Contact Channels */}
          <div
            style={{
              padding: "16px 20px",
              borderRadius: "12px",
              background: "#ffffff",
              border: "1.5px solid #d8e6f5",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "12px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ fontSize: "12px", fontWeight: 750, color: "#475569", fontFamily: "var(--font-mono, monospace)" }}>
                {lang === "vi" ? "LIÊN HỆ TRỰC TIẾP:" : "VERIFIED CHANNELS:"}
              </span>
            </div>
            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", fontSize: "12.5px" }}>
              <a
                href="mailto:tutaivovan@gmail.com"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  color: "#0f172a",
                  fontWeight: 750,
                  textDecoration: "none",
                }}
              >
                <Mail size={14} color="#2563eb" />
                <span>tutaivovan@gmail.com</span>
              </a>
              <a
                href="tel:0869500573"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  color: "#0f172a",
                  fontWeight: 750,
                  textDecoration: "none",
                }}
              >
                <Phone size={14} color="#059669" />
                <span>(+84) 869 500 573</span>
              </a>
              <a
                href="https://linkedin.com/in/vovantutai"
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  color: "#0f172a",
                  fontWeight: 750,
                  textDecoration: "none",
                }}
              >
                <Linkedin size={14} color="#0284c7" />
                <span>linkedin.com/in/vovantutai</span>
              </a>
              <a
                href="https://github.com/VoVanTuTai"
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  color: "#0f172a",
                  fontWeight: 750,
                  textDecoration: "none",
                }}
              >
                <Github size={14} color="#0f172a" />
                <span>github.com/VoVanTuTai</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: ACADEMIC FOUNDATIONS (4 PILLARS) */}
      {currentTab === "academic" && (
        <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          {/* Header Context Banner */}
          <div
            style={{
              padding: "16px 20px",
              borderRadius: "12px",
              background: "linear-gradient(135deg, #eff6ff 0%, #f8fbff 100%)",
              border: "1.5px solid #bfdbfe",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "10px",
            }}
          >
            <div>
              <strong style={{ fontSize: "14px", color: "#1e40af", display: "block" }}>
                {lang === "vi"
                  ? "Đào Tạo Kỹ Sư Hệ Thống Chính Quy — ĐH Công Nghiệp TP.HCM (IUH)"
                  : "Formal Information Systems Engineering — Industrial University of HCMC (IUH)"}
              </strong>
              <p style={{ margin: "2px 0 0", fontSize: "12.5px", color: "#1e3a8a", lineHeight: 1.5 }}>
                {lang === "vi"
                  ? "Tốt nghiệp loại Giỏi (GPA 3.26 / 4.0), làm chủ 4 trụ cột kiến trúc nền tảng chuẩn hóa quốc tế."
                  : "Graduated with Distinction (GPA 3.26 / 4.0), mastering 4 core international engineering foundation pillars."}
              </p>
            </div>
            <span
              style={{
                fontFamily: "var(--font-mono, monospace)",
                fontSize: "11px",
                fontWeight: 800,
                padding: "4px 10px",
                borderRadius: "6px",
                background: "#2563eb",
                color: "#ffffff",
              }}
            >
              IUH B.Eng · GPA 3.26 / 4.0
            </span>
          </div>

          {/* 4 Pillars Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "16px",
            }}
          >
            {academicPillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.code}
                  style={{
                    padding: "20px",
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
                          color: "#2563eb",
                        }}
                      >
                        <Icon size={18} />
                      </span>
                      <strong
                        style={{
                          fontSize: "14px",
                          color: "#0f172a",
                          fontFamily: "var(--studio-font-sans)",
                        }}
                      >
                        {pillar.title[lang]}
                      </strong>
                    </div>
                    <span
                      style={{
                        fontFamily: "var(--font-mono, monospace)",
                        fontSize: "10.5px",
                        fontWeight: 800,
                        padding: "3px 8px",
                        borderRadius: "5px",
                        background: "#f1f5f9",
                        color: "#475569",
                        border: "1px solid #e2e8f0",
                      }}
                    >
                      {pillar.code}
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
                    {pillar.desc[lang]}
                  </p>

                  <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", marginTop: "auto", paddingTop: "8px" }}>
                    {pillar.tags.map((tag) => (
                      <span
                        key={tag}
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
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* TAB 3: INDUSTRY TRACK RECORD (EXPERIENCE) */}
      {currentTab === "experience" && (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {/* Milestone 1: Project Manager @ Digityze Asia */}
          <div
            style={{
              padding: "20px 22px",
              borderRadius: "12px",
              background: "#ffffff",
              border: "1.5px solid #d8e6f5",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              boxShadow: "0 2px 6px rgba(15, 23, 42, 0.03)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "8px" }}>
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
                    color: "#2563eb",
                  }}
                >
                  <BriefcaseBusiness size={18} />
                </span>
                <div>
                  <strong style={{ fontSize: "15px", color: "#0f172a", fontFamily: "var(--studio-font-sans)" }}>
                    {lang === "vi" ? "Project Manager — Digityze Asia" : "Project Manager — Digityze Asia"}
                  </strong>
                  <div style={{ fontSize: "12px", color: "#64748b", marginTop: "2px" }}>
                    {lang === "vi" ? "TP.HCM · 2024 - Hiện tại" : "Ho Chi Minh City · 2024 - Present"}
                  </div>
                </div>
              </div>
              <span
                style={{
                  fontFamily: "var(--font-mono, monospace)",
                  fontSize: "10.5px",
                  fontWeight: 800,
                  padding: "4px 10px",
                  borderRadius: "6px",
                  background: "#f0fdf4",
                  color: "#16a34a",
                  border: "1px solid #bbf7d0",
                }}
              >
                {lang === "vi" ? "VAI TRÒ HIỆN TẠI" : "CURRENT ROLE"}
              </span>
            </div>

            <p style={{ margin: 0, fontSize: "13px", color: "#334155", lineHeight: 1.65, fontFamily: "var(--studio-font-sans)" }}>
              {lang === "vi"
                ? "Chịu trách nhiệm quản lý và điều phối các dự án phần mềm doanh nghiệp: Lập tài liệu báo giá CNTT (IT Quotation SOP), phân rã công việc WBS, áp dụng phương pháp đường găng CPM và kiểm soát tiến độ, chi phí thực hiện theo EVM (CPI/SPI)."
                : "Managing enterprise software project deliveries: Authoring IT Quotation SOP workbooks, WBS task decomposition, CPM critical path scheduling, and EVM project performance governance (CPI/SPI)."}
            </p>

            <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
              {[
                "Báo Giá CNTT SOP",
                "Phân Rã WBS",
                "CPM Đường Găng",
                "EVM (CPI / SPI)",
                "Sprint Backlog Refinement",
                "Quản Trị Stakeholders",
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

            <div style={{ paddingTop: "8px", borderTop: "1px solid #f1f5f9", fontSize: "11.5px", color: "#64748b" }}>
              <strong style={{ color: "#0f172a", fontFamily: "var(--font-mono, monospace)" }}>TOOLS:</strong> Jira Software · Confluence · Excel Quotation SOP · ClickUp
            </div>
          </div>

          {/* Milestone 2: IT Business Analyst @ HomeNest */}
          <div
            style={{
              padding: "20px 22px",
              borderRadius: "12px",
              background: "#ffffff",
              border: "1.5px solid #d8e6f5",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              boxShadow: "0 2px 6px rgba(15, 23, 42, 0.03)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "8px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <span
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "8px",
                    background: "#faf5ff",
                    border: "1px solid #e9d5ff",
                    display: "grid",
                    placeItems: "center",
                    color: "#9333ea",
                  }}
                >
                  <FileCheck size={18} />
                </span>
                <div>
                  <strong style={{ fontSize: "15px", color: "#0f172a", fontFamily: "var(--studio-font-sans)" }}>
                    {lang === "vi" ? "IT Business Analyst — HomeNest Software" : "IT Business Analyst — HomeNest Software"}
                  </strong>
                  <div style={{ fontSize: "12px", color: "#64748b", marginTop: "2px" }}>
                    {lang === "vi" ? "TP.HCM · 6+ Tháng Kinh Nghiệm" : "Ho Chi Minh City · 6+ Months Track Record"}
                  </div>
                </div>
              </div>
              <span
                style={{
                  fontFamily: "var(--font-mono, monospace)",
                  fontSize: "10.5px",
                  fontWeight: 800,
                  padding: "4px 10px",
                  borderRadius: "6px",
                  background: "#faf5ff",
                  color: "#7e22ce",
                  border: "1px solid #e9d5ff",
                }}
              >
                IT BA PROVEN
              </span>
            </div>

            <p style={{ margin: 0, fontSize: "13px", color: "#334155", lineHeight: 1.65, fontFamily: "var(--studio-font-sans)" }}>
              {lang === "vi"
                ? "Khảo sát và chuyển hóa yêu cầu nghiệp vụ phức tạp của khách hàng thành đặc tả PRD/SRS chi tiết, thiết kế quy trình nghiệp vụ chuẩn BPMN 2.0 (Camunda), viết User Stories Given-When-Then và trực tiếp nghiệm thu UAT 12+ Sprints."
                : "Elicited business requirements into formal PRD/SRS specifications, modeled standard BPMN 2.0 workflows in Camunda, authored Given-When-Then User Stories, and coordinated UAT sign-offs across 12+ Sprints."}
            </p>

            <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
              {[
                "PRD / SRS Specs",
                "BPMN 2.0 Camunda",
                "Given-When-Then Stories",
                "Scope Freeze Governance",
                "UAT Test Suites",
                "12+ Sprints Delivered",
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

            <div style={{ paddingTop: "8px", borderTop: "1px solid #f1f5f9", fontSize: "11.5px", color: "#64748b" }}>
              <strong style={{ color: "#0f172a", fontFamily: "var(--font-mono, monospace)" }}>TOOLS:</strong> Jira · Confluence · Figma Wireframing · Camunda Modeler · Postman
            </div>
          </div>

          {/* Milestone 3: Logistics Hub Operations @ J&T Express */}
          <div
            style={{
              padding: "20px 22px",
              borderRadius: "12px",
              background: "#ffffff",
              border: "1.5px solid #d8e6f5",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              boxShadow: "0 2px 6px rgba(15, 23, 42, 0.03)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "8px" }}>
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
                    color: "#d97706",
                  }}
                >
                  <Boxes size={18} />
                </span>
                <div>
                  <strong style={{ fontSize: "15px", color: "#0f172a", fontFamily: "var(--studio-font-sans)" }}>
                    {lang === "vi" ? "Điều Phối Bưu Cục & Vận Hành Thực Tế — J&T Express" : "Logistics Hub Operations & Dispatch — J&T Express"}
                  </strong>
                  <div style={{ fontSize: "12px", color: "#64748b", marginTop: "2px" }}>
                    {lang === "vi" ? "Vận Hành Bưu Cục Thực Chiến" : "Field Operations & Hub Dispatch"}
                  </div>
                </div>
              </div>
              <span
                style={{
                  fontFamily: "var(--font-mono, monospace)",
                  fontSize: "10.5px",
                  fontWeight: 800,
                  padding: "4px 10px",
                  borderRadius: "6px",
                  background: "#fffbeb",
                  color: "#b45309",
                  border: "1px solid #fde68a",
                }}
              >
                LOGISTICS GROUND
              </span>
            </div>

            <p style={{ margin: 0, fontSize: "13px", color: "#334155", lineHeight: 1.65, fontFamily: "var(--studio-font-sans)" }}>
              {lang === "vi"
                ? "Trực tiếp vận hành tại bưu cục, điều phối tài xế giao nhận, kiểm soát luân chuyển bưu kiện và đối soát dòng tiền thu hộ COD. Trải nghiệm thực tế tại bưu cục giúp nhận diện điểm nghẽn shipper quét trùng mã khi mạng 4G chập chờn — tiền đề trực tiếp để thiết kế kiến trúc chống trùng lặp Idempotency Key cho Nexus Express."
                : "Directly operated hub logistics: Parcel barcode scanning, driver dispatching, and cash-on-delivery (COD) financial reconciliation. Field insights revealed erratic 4G duplicate scans, inspiring the Idempotency Key & Redis Lock architecture for Nexus Express."}
            </p>

            <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
              {[
                "Vận Hành Bưu Cục",
                "Quét Mã Barcode",
                "Đối Soát Tiền Thu Hộ COD",
                "Xử Lý Rớt Mạng 4G",
                "Cảm Hứng Thiết Kế Nexus OMS",
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

            <div style={{ paddingTop: "8px", borderTop: "1px solid #f1f5f9", fontSize: "11.5px", color: "#64748b" }}>
              <strong style={{ color: "#0f172a", fontFamily: "var(--font-mono, monospace)" }}>KEY INSIGHT:</strong> Thấu hiểu sâu sắc bài toán vận hành logistics thực tế từ điểm chạm người dùng cuối.
            </div>
          </div>
        </div>
      )}

      {/* TAB 4: OFFICIAL ATS CV DOSSIER & DOWNLOADS */}
      {currentTab === "cv" && (
        <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          {/* Header Context */}
          <div
            style={{
              padding: "16px 20px",
              borderRadius: "12px",
              background: "linear-gradient(135deg, #eff6ff 0%, #f8fbff 100%)",
              border: "1.5px solid #bfdbfe",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "10px",
            }}
          >
            <div>
              <strong style={{ fontSize: "14px", color: "#1e40af", display: "block" }}>
                {lang === "vi"
                  ? "Hồ Sơ CV Tuyển Dụng Chuẩn Quốc Tế ATS (Đúng 2 Trang A4)"
                  : "Official ATS Candidate Resumes (Strict 2-Page A4)"}
              </strong>
              <p style={{ margin: "2px 0 0", fontSize: "12.5px", color: "#1e3a8a", lineHeight: 1.5 }}>
                {lang === "vi"
                  ? "Định dạng tối ưu cho hệ thống lọc tự động ATS, đảm bảo font chữ không phân rã trên Chrome headless và tích hợp liên hệ xác minh."
                  : "ATS-optimized typography, strict 2-page A4 dimensions (210mm x 297mm), zero font corruption across Chrome headless, and verified contact channels."}
              </p>
            </div>
            <span
              style={{
                fontFamily: "var(--font-mono, monospace)",
                fontSize: "11px",
                fontWeight: 800,
                padding: "4px 10px",
                borderRadius: "6px",
                background: "#059669",
                color: "#ffffff",
              }}
            >
              ATS Score: 98 / 100
            </span>
          </div>

          {/* 2 Download Options Cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "16px",
            }}
          >
            {/* Vietnamese Version */}
            <div
              style={{
                padding: "20px",
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
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <FileText size={18} color="#2563eb" />
                  <strong style={{ fontSize: "14px", color: "#0f172a", fontFamily: "var(--studio-font-sans)" }}>
                    Bản CV Tiếng Việt (PDF)
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
                  2 Trang A4
                </span>
              </div>
              <p style={{ margin: 0, fontSize: "12.5px", color: "#475569", lineHeight: 1.6 }}>
                Định dạng chuẩn vị trí IT Business Analyst &amp; Kỹ sư Hệ thống; làm nổi bật bằng Giỏi IUH, kinh nghiệm thực tế và dự án sản xuất.
              </p>
              <a
                href="/VoVanTuTai_Business_Analyst_CV_Tieng_Viet.pdf"
                download
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  padding: "10px 18px",
                  borderRadius: "8px",
                  background: "#2563eb",
                  color: "#ffffff",
                  fontSize: "13px",
                  fontWeight: 800,
                  textDecoration: "none",
                  boxShadow: "1.5px 2px 0 #0f172a",
                  marginTop: "auto",
                }}
              >
                <Download size={15} />
                <span>Tải CV Tiếng Việt (PDF)</span>
              </a>
            </div>

            {/* English Version */}
            <div
              style={{
                padding: "20px",
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
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <FileText size={18} color="#0284c7" />
                  <strong style={{ fontSize: "14px", color: "#0f172a", fontFamily: "var(--studio-font-sans)" }}>
                    English Resume (PDF)
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
                  2-Page A4
                </span>
              </div>
              <p style={{ margin: 0, fontSize: "12.5px", color: "#475569", lineHeight: 1.6 }}>
                Optimized for international teams, foreign recruiters, and IT Business Analyst / Systems roles across modern technology stacks.
              </p>
              <a
                href="/VoVanTuTai_Business_Analyst_CV.pdf"
                download
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  padding: "10px 18px",
                  borderRadius: "8px",
                  background: "#0284c7",
                  color: "#ffffff",
                  fontSize: "13px",
                  fontWeight: 800,
                  textDecoration: "none",
                  boxShadow: "1.5px 2px 0 #0f172a",
                  marginTop: "auto",
                }}
              >
                <Download size={15} />
                <span>Download English Resume (PDF)</span>
              </a>
            </div>
          </div>

          {/* Recruiter Verification Contacts Footer */}
          <div
            style={{
              padding: "18px 22px",
              borderRadius: "12px",
              background: "#ffffff",
              border: "1.5px solid #d8e6f5",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "12px",
            }}
          >
            <div>
              <strong style={{ fontSize: "13px", color: "#0f172a" }}>
                {lang === "vi" ? "Kênh Liên Hệ & Xác Minh Nhanh" : "Fast Recruiter Verification Channels"}
              </strong>
              <div style={{ fontSize: "12px", color: "#64748b", marginTop: "2px" }}>
                {lang === "vi"
                  ? "Sẵn sàng trao đổi chi tiết về yêu cầu công việc hoặc bài toán kỹ thuật."
                  : "Open to technical interviews and direct role inquiries."}
              </div>
            </div>
            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", fontSize: "12.5px" }}>
              <a
                href="mailto:tutaivovan@gmail.com"
                style={{ display: "inline-flex", alignItems: "center", gap: "6px", color: "#0f172a", fontWeight: 750, textDecoration: "none" }}
              >
                <Mail size={14} color="#2563eb" />
                <span>tutaivovan@gmail.com</span>
              </a>
              <a
                href="tel:0869500573"
                style={{ display: "inline-flex", alignItems: "center", gap: "6px", color: "#0f172a", fontWeight: 750, textDecoration: "none" }}
              >
                <Phone size={14} color="#059669" />
                <span>(+84) 869 500 573</span>
              </a>
              <a
                href="https://linkedin.com/in/vovantutai"
                target="_blank"
                rel="noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: "6px", color: "#0f172a", fontWeight: 750, textDecoration: "none" }}
              >
                <Linkedin size={14} color="#0284c7" />
                <span>linkedin.com/in/vovantutai</span>
              </a>
              <a
                href="https://github.com/VoVanTuTai"
                target="_blank"
                rel="noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: "6px", color: "#0f172a", fontWeight: 750, textDecoration: "none" }}
              >
                <Github size={14} color="#0f172a" />
                <span>github.com/VoVanTuTai</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
