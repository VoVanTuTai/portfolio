import { useState } from "react";
import { CheckCircle2, Pause, Play, RotateCcw } from "lucide-react";
import type { Language } from "@/types";

interface BaLifecycle25dSimulatorProps {
  lang: Language;
}

interface StepInfo {
  step: string;
  name: string;
  nameEn: string;
  role: string;
  output: string;
  descVi: string;
  descEn: string;
  checklist: string[];
}

const LIFECYCLE_STEPS: StepInfo[] = [
  {
    step: "01",
    name: "Khảo Sát & Khai Thác (Elicitation)",
    nameEn: "Requirements Elicitation",
    role: "DISCOVERY & AS-IS",
    output: "RACI Matrix · As-Is Map · Stakeholder Catalog",
    descVi: "Phỏng vấn 1-on-1 với lãnh đạo, Workshop JAD với các phòng ban, bóc tách tài liệu vận hành và nhận diện khoảng cách As-Is vs To-Be.",
    descEn: "1-on-1 interviews with leadership, JAD discovery workshops, reviewing operational records, and identifying As-Is vs To-Be gaps.",
    checklist: [
      "Ma trận RACI xác định rõ Người chịu trách nhiệm (A) và Thực hiện (R)",
      "Sơ đồ quy trình hiện tại As-Is chỉ rõ 3 điểm nghẽn nghiêm trọng",
      "Bảng phân tích nỗi đau vận hành (Problem Statement) có đo lường",
    ],
  },
  {
    step: "02",
    name: "Phân Tích & Mô Hình Hóa (Analysis & Modeling)",
    nameEn: "Business Analysis & Modeling",
    role: "TO-BE BLUEPRINT",
    output: "BPMN 2.0 · Activity Swimlanes · ERD 3NF",
    descVi: "Mô hình hóa nghiệp vụ tương lai bằng chuẩn BPMN 2.0, vẽ Activity Swimlanes phân luồng trách nhiệm và thiết kế CSDL 3NF triệt tiêu dị thường.",
    descEn: "Designs future To-Be workflows via BPMN 2.0, draws Activity Swimlanes across roles, and architects 3NF database entities.",
    checklist: [
      "Sơ đồ Activity Swimlanes 4 làn: Tài xế ➔ App ➔ Gateway ➔ DB",
      "Máy trạng thái hữu hạn (FSM) bảo đảm không có trạng thái mồ côi",
      "Thiết kế CSDL quan hệ 3NF triệt tiêu dư thừa dữ liệu",
    ],
  },
  {
    step: "03",
    name: "Soạn Thảo Đặc Tả (Specification)",
    nameEn: "Requirements Specification",
    role: "ENGINEERING CONTRACT",
    output: "PRD / SRS Specs · OpenAPI 3.0 · Gherkin AC",
    descVi: "Soạn thảo Functional Specifications chi tiết cho Dev & QA, quy định mã lỗi HTTP, Idempotency-Key và Acceptance Criteria theo chuẩn Given-When-Then.",
    descEn: "Authors comprehensive functional specs for Dev & QA, defining HTTP status codes, Idempotency rules, and Given-When-Then Acceptance Criteria.",
    checklist: [
      "Hợp đồng API OpenAPI 3.0 với đầy đủ mã lỗi 400, 409, 422, 500",
      "Tiêu chuẩn nghiệm thu Gherkin (Given - When - Then) không kẽ hở",
      "Đặc tả Use Case chi tiết có Main Flow, Alt Flow và Exception Flow",
    ],
  },
  {
    step: "04",
    name: "Thẩm Định & Nghiệm Thu UAT (Validation & UAT)",
    nameEn: "Verification & UAT Delivery",
    role: "QUALITY ARBITRATION",
    output: "RTM Matrix · UAT Sign-off Protocol · Bug Triage",
    descVi: "Cùng QA đối soát ma trận truy xuất nguồn gốc (RTM), tổ chức đợt thử nghiệm UAT với người dùng cuối và làm trọng tài phân xử lỗi hay yêu cầu mới.",
    descEn: "Cross-checks Requirements Traceability Matrix (RTM) with QA, facilitates end-user UAT sessions, and arbitrates bugs vs Change Requests.",
    checklist: [
      "Ma trận RTM bảo đảm 100% User Stories có Test Cases tương ứng",
      "Biên bản nghiệm thu UAT có chữ ký phê duyệt của Product Owner",
      "Báo cáo phân loại lỗi (Bug Severity Triage) dứt điểm trước Release",
    ],
  },
  {
    step: "05",
    name: "Đóng Băng Phạm Vi & Bàn Giao (Scope Control)",
    nameEn: "Scope Freeze & Baseline Governance",
    role: "SCOPE GOVERNANCE",
    output: "Scope Freeze Gate · Change Request (CR) Form",
    descVi: "Thiết lập hàng rào Scope Freeze Gate chống phình to phạm vi (Scope Creep), thẩm định tác động chi phí & tiến độ mọi Change Request trước khi phê duyệt.",
    descEn: "Establishes Scope Freeze Gate barrier against scope creep, calculating cost and timeline impact for every CR before approval.",
    checklist: [
      "Biên bản chốt phạm vi Scope Freeze có chữ ký PM và Khách hàng",
      "Quy trình xử lý Change Request 5 bước minh bạch chi phí",
      "Bộ tài liệu đào tạo người dùng cuối (User Manual) và bàn giao",
    ],
  },
];

export function BaLifecycle25dSimulator({ lang }: BaLifecycle25dSimulatorProps) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeStepIdx, setActiveStepIdx] = useState(1); // Default to Step 2 (Analysis & Modeling)

  const activeStep = LIFECYCLE_STEPS[activeStepIdx];

  return (
    <div
      style={{
        borderRadius: "14px",
        border: "1.5px solid #bfdbfe",
        background: "#ffffff",
        overflow: "hidden",
        boxShadow: "0 4px 16px rgba(15, 23, 42, 0.05)",
      }}
    >
      {/* 1. Header Control Bar */}
      <div
        style={{
          padding: "12px 18px",
          background: "linear-gradient(180deg, #f8fafc 0%, #eff6ff 100%)",
          borderBottom: "1.5px solid #d8e6f5",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "12px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <button
            type="button"
            onClick={() => setIsPlaying((p) => !p)}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "5px",
              padding: "6px 14px",
              borderRadius: "7px",
              background: isPlaying ? "#2563eb" : "#059669",
              color: "#ffffff",
              fontSize: "11.5px",
              fontWeight: 800,
              border: "none",
              cursor: "pointer",
              boxShadow: "1.5px 2px 0 #0f172a",
            }}
          >
            {isPlaying ? <Pause size={12} /> : <Play size={12} />}
            <span>{isPlaying ? (lang === "vi" ? "Tạm Dừng" : "Pause") : (lang === "vi" ? "Tiếp Tục" : "Resume")}</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveStepIdx(1)}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "4px",
              padding: "6px 10px",
              borderRadius: "7px",
              background: "#ffffff",
              color: "#475569",
              fontSize: "11.5px",
              fontWeight: 750,
              border: "1px solid #cbd5e1",
              cursor: "pointer",
            }}
          >
            <RotateCcw size={12} />
            <span>{lang === "vi" ? "Đặt lại" : "Reset"}</span>
          </button>
        </div>

        {/* Step Selector Pills */}
        <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
          {LIFECYCLE_STEPS.map((s, idx) => (
            <button
              key={s.step}
              type="button"
              onClick={() => setActiveStepIdx(idx)}
              style={{
                padding: "4px 10px",
                borderRadius: "6px",
                border: activeStepIdx === idx ? "1.5px solid #2563eb" : "1px solid #cbd5e1",
                background: activeStepIdx === idx ? "#eff6ff" : "#ffffff",
                color: activeStepIdx === idx ? "#1d4ed8" : "#475569",
                fontSize: "11px",
                fontWeight: 800,
                fontFamily: "var(--font-mono, monospace)",
                cursor: "pointer",
              }}
            >
              Bước {s.step}
            </button>
          ))}
        </div>
      </div>

      {/* 2. Status Strip */}
      <div
        style={{
          padding: "8px 18px",
          background: "#f8fafc",
          borderBottom: "1px solid #e2e8f0",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          fontSize: "11.5px",
          fontFamily: "var(--font-mono, monospace)",
          flexWrap: "wrap",
          gap: "8px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <span
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              background: "#2563eb",
              display: "inline-block",
            }}
          />
          <strong style={{ color: "#0f172a" }}>
            VÒNG ĐỜI BA THỰC CHIẾN CHUẨN BABOK: Bước {activeStep.step} — {lang === "vi" ? activeStep.name : activeStep.nameEn}
          </strong>
        </div>

        <div style={{ display: "flex", gap: "14px" }}>
          <span>SẢN PHẨM: <strong style={{ color: "#2563eb" }}>{activeStep.output}</strong></span>
          <span>TIÊU CHUẨN: <strong style={{ color: "#16a34a" }}>Airtight Specs</strong></span>
        </div>
      </div>

      {/* 3. 2.5D Isometric SVG Engine */}
      <div
        style={{
          padding: "16px 10px",
          background: "linear-gradient(135deg, #f8fbff 0%, #ffffff 50%, #eff6ff 100%)",
          overflowX: "auto",
        }}
      >
        <svg
          viewBox="0 0 760 340"
          style={{ width: "100%", minWidth: "680px", height: "auto", display: "block" }}
          aria-label="Sơ đồ 2.5D Quy trình 5 bước BA Lifecycle"
        >
          <defs>
            <linearGradient id="baFloorGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#dbeafe" stopOpacity="0.4" />
            </linearGradient>

            <linearGradient id="baSideLeft" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#dbeafe" />
              <stop offset="100%" stopColor="#bfdbfe" />
            </linearGradient>

            <linearGradient id="baSideRight" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#bfdbfe" />
              <stop offset="100%" stopColor="#93c5fd" />
            </linearGradient>

            <filter id="baShadow" x="-20%" y="-20%" width="150%" height="150%">
              <feDropShadow dx="2" dy="4" stdDeviation="0" floodColor="#0f172a" floodOpacity="0.8" />
            </filter>
          </defs>

          {/* SÀN LƯỚI TỌA ĐỘ ISOMETRIC 2.5D */}
          <g stroke="rgba(37, 99, 235, 0.12)" strokeWidth="1" fill="none">
            <path d="M 380,25 L 720,170 L 380,315 L 40,170 Z" fill="url(#baFloorGrad)" />
            <path d="M 380,65 L 650,170 L 380,275 L 110,170 Z" />
            <path d="M 380,105 L 580,170 L 380,235 L 180,170 Z" />
            <line x1="40" y1="170" x2="720" y2="170" strokeDasharray="4 4" />
          </g>

          {/* CÁC ĐƯỜNG DẪN TIẾN TRÌNH 5 BƯỚC */}
          <path
            d="M 90,190 Q 150,140 220,130 T 380,90 T 540,130 T 670,190"
            fill="none"
            stroke="#2563eb"
            strokeWidth="3"
            strokeDasharray="6 4"
          />

          {/* GÓI DỮ LIỆU/ARTIFACTS DI CHUYỂN */}
          {isPlaying && (
            <circle r="6" fill="#2563eb" stroke="#ffffff" strokeWidth="2">
              <animateMotion
                path="M 90,190 Q 150,140 220,130 T 380,90 T 540,130 T 670,190"
                dur="3.2s"
                repeatCount="indefinite"
              />
            </circle>
          )}

          {/* PILLAR 1: ELICITATION */}
          <g transform="translate(90, 190)" onClick={() => setActiveStepIdx(0)} style={{ cursor: "pointer" }}>
            <polygon points="0,-22 38,0 0,22 -38,0" fill={activeStepIdx === 0 ? "#eff6ff" : "#ffffff"} stroke="#2563eb" strokeWidth={activeStepIdx === 0 ? 2.5 : 1.8} filter="url(#baShadow)" />
            <polygon points="-38,0 0,22 0,38 -38,16" fill="url(#baSideLeft)" stroke="#2563eb" strokeWidth="1.5" />
            <polygon points="0,22 38,0 38,16 0,38" fill="url(#baSideRight)" stroke="#2563eb" strokeWidth="1.5" />
            <text x="0" y="3" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="9.5" fontWeight="850" fill="#0f172a">01. Khảo Sát</text>
            <text x="0" y="52" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="8.5" fontWeight="800" fill="#2563eb">RACI & JAD</text>
          </g>

          {/* PILLAR 2: ANALYSIS & MODELING */}
          <g transform="translate(220, 130)" onClick={() => setActiveStepIdx(1)} style={{ cursor: "pointer" }}>
            <polygon points="0,-24 44,0 0,24 -44,0" fill={activeStepIdx === 1 ? "#eff6ff" : "#ffffff"} stroke="#0284c7" strokeWidth={activeStepIdx === 1 ? 2.5 : 1.8} filter="url(#baShadow)" />
            <polygon points="-44,0 0,24 0,42 -44,18" fill="#e0f2fe" stroke="#0284c7" strokeWidth="1.5" />
            <polygon points="0,24 44,0 44,18 0,42" fill="#bae6fd" stroke="#0284c7" strokeWidth="1.5" />
            <text x="0" y="3" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="9.5" fontWeight="850" fill="#0369a1">02. Mô Hình</text>
            <text x="0" y="56" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="8.5" fontWeight="800" fill="#0284c7">BPMN & ERD 3NF</text>
          </g>

          {/* PILLAR 3: SPECIFICATION */}
          <g transform="translate(380, 90)" onClick={() => setActiveStepIdx(2)} style={{ cursor: "pointer" }}>
            <polygon points="0,-24 46,0 0,24 -46,0" fill={activeStepIdx === 2 ? "#eff6ff" : "#ffffff"} stroke="#059669" strokeWidth={activeStepIdx === 2 ? 2.5 : 1.8} filter="url(#baShadow)" />
            <polygon points="-46,0 0,24 0,42 -46,18" fill="#d1fae5" stroke="#059669" strokeWidth="1.5" />
            <polygon points="0,24 46,0 46,18 0,42" fill="#a7f3d0" stroke="#059669" strokeWidth="1.5" />
            <text x="0" y="3" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="9.5" fontWeight="850" fill="#065f46">03. Đặc Tả</text>
            <text x="0" y="56" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="8.5" fontWeight="800" fill="#059669">PRD & OpenAPI</text>
          </g>

          {/* PILLAR 4: VALIDATION & UAT */}
          <g transform="translate(540, 130)" onClick={() => setActiveStepIdx(3)} style={{ cursor: "pointer" }}>
            <polygon points="0,-24 44,0 0,24 -44,0" fill={activeStepIdx === 3 ? "#faf5ff" : "#ffffff"} stroke="#7c3aed" strokeWidth={activeStepIdx === 3 ? 2.5 : 1.8} filter="url(#baShadow)" />
            <polygon points="-44,0 0,24 0,42 -44,18" fill="#ede9fe" stroke="#7c3aed" strokeWidth="1.5" />
            <polygon points="0,24 44,0 44,18 0,42" fill="#ddd6fe" stroke="#7c3aed" strokeWidth="1.5" />
            <text x="0" y="3" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="9.5" fontWeight="850" fill="#5b21b6">04. Nghiệm Thu</text>
            <text x="0" y="56" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="8.5" fontWeight="800" fill="#7c3aed">UAT Sign-off</text>
          </g>

          {/* PILLAR 5: SCOPE FREEZE GATE */}
          <g transform="translate(670, 190)" onClick={() => setActiveStepIdx(4)} style={{ cursor: "pointer" }}>
            <polygon points="0,-22 40,0 0,22 -40,0" fill={activeStepIdx === 4 ? "#fff7ed" : "#ffffff"} stroke="#ea580c" strokeWidth={activeStepIdx === 4 ? 2.5 : 1.8} filter="url(#baShadow)" />
            <polygon points="-40,0 0,22 0,38 -40,16" fill="#ffedd5" stroke="#ea580c" strokeWidth="1.5" />
            <polygon points="0,22 40,0 40,16 0,38" fill="#fed7aa" stroke="#ea580c" strokeWidth="1.5" />
            <text x="0" y="3" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="9.5" fontWeight="850" fill="#9a3412">05. Scope Gate</text>
            <text x="0" y="52" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="8.5" fontWeight="800" fill="#ea580c">Freeze & CR</text>
          </g>
        </svg>
      </div>

      {/* 4. Senior BA Checklist & Deliverables Inspector */}
      <div style={{ padding: "18px 20px", background: "#ffffff", borderTop: "1.5px solid #d8e6f5" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "10px", flexWrap: "wrap", gap: "8px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "10.5px", fontWeight: 800, padding: "2px 8px", borderRadius: "4px", background: "#eff6ff", color: "#1d4ed8", border: "1px solid #bfdbfe" }}>
              BƯỚC {activeStep.step} · {activeStep.role}
            </span>
            <strong style={{ fontSize: "14px", color: "#0f172a" }}>
              {lang === "vi" ? activeStep.name : activeStep.nameEn}
            </strong>
          </div>
          <span style={{ fontSize: "11px", color: "#64748b", fontFamily: "var(--font-mono)" }}>
            Bàn giao cốt lõi: <strong style={{ color: "#2563eb" }}>{activeStep.output}</strong>
          </span>
        </div>

        <p style={{ margin: "0 0 12px 0", fontSize: "12.5px", color: "#475569", lineHeight: 1.6 }}>
          {lang === "vi" ? activeStep.descVi : activeStep.descEn}
        </p>

        {/* Checklist */}
        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          {activeStep.checklist.map((c, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "12px", color: "#1e3a8a" }}>
              <CheckCircle2 size={13} color="#16a34a" />
              <span>{c}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BaLifecycle25dSimulator;
