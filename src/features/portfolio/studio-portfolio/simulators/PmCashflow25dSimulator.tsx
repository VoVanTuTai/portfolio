import { useState } from "react";
import { Pause, Play, RotateCcw } from "lucide-react";
import type { Language } from "@/types";

interface PmCashflow25dSimulatorProps {
  lang: Language;
}

interface MilestoneInfo {
  gate: string;
  phase: string;
  phaseEn: string;
  cashUsd: string;
  cashVnd: string;
  percentage: string;
  dod: string;
  dodEn: string;
  pmStrategy: string;
  pmStrategyEn: string;
  barrier: string;
}

const MILESTONES: MilestoneInfo[] = [
  {
    gate: "M1",
    phase: "Khởi Động & Ký Project Charter",
    phaseEn: "Project Initiation & Charter",
    cashUsd: "$6,000",
    cashVnd: "150,000,000 VNĐ",
    percentage: "20%",
    dod: "Project Charter được ký kết; thiết lập Jira Sprint Board, ma trận phân nhiệm RACI và hạ tầng Dev/Staging.",
    dodEn: "Project Charter signed; Jira Sprint Board, RACI matrix, and Dev/Staging infrastructure operational.",
    pmStrategy: "Nguyên tắc: Không bao giờ phân bổ lập trình viên viết code khi chưa thu đủ khoản cọc đầu tiên 20% vào tài khoản công ty.",
    pmStrategyEn: "Rule: Never allocate engineering resources to write code before the first 20% deposit clears the company account.",
    barrier: "Hàng rào kích hoạt phân bổ nhân sự (Resource Gate)",
  },
  {
    gate: "M2",
    phase: "Duyệt SRS/BPMN 2.0 & Scope Freeze",
    phaseEn: "SRS Sign-off & Scope Freeze",
    cashUsd: "$7,500",
    cashVnd: "187,500,000 VNĐ",
    percentage: "25%",
    dod: "Tài liệu SRS, sơ đồ BPMN 2.0, ERD 3NF và Wireframe Figma được khách hàng ký biên bản bàn giao phê duyệt.",
    dodEn: "SRS document, BPMN 2.0, ERD 3NF, and Figma wireframes formally approved and signed off by stakeholders.",
    pmStrategy: "Nguyên tắc: Khóa cứng phạm vi (Scope Freeze Gate). Mọi yêu cầu phát sinh sau mốc này bắt buộc chuyển thành Change Request (CR) có tính phí.",
    pmStrategyEn: "Rule: Hard Scope Freeze. Any feature requested after this gate converts to a paid Change Request (CR).",
    barrier: "HÀNG RÀO ĐÓNG BĂNG PHẠM VI (SCOPE FREEZE GATE)",
  },
  {
    gate: "M3",
    phase: "Nghiệm Thu Bản Core Alpha",
    phaseEn: "Core Engine Alpha Release",
    cashUsd: "$7,500",
    cashVnd: "187,500,000 VNĐ",
    percentage: "25%",
    dod: "Hoàn tất các luồng API cốt lõi, tích hợp thành công Webhook cổng thanh toán/vận chuyển, chạy thông suốt trên Staging.",
    dodEn: "Core APIs operational, Webhooks integrated with payment/logistics partners, live demo verified on Staging.",
    pmStrategy: "Nguyên tắc: Thu ngay 25% khi khách hàng nhìn thấy bản demo chạy thử hoạt động, kiểm soát dòng tiền an toàn trước khi bước vào UAT.",
    pmStrategyEn: "Rule: Collect 25% immediately after working demo verification to safeguard company cashflow before UAT.",
    barrier: "Hàng rào kiểm định tính năng cốt lõi (Alpha Quality Gate)",
  },
  {
    gate: "M4",
    phase: "Nghiệm Thu Người Dùng UAT",
    phaseEn: "User Acceptance Testing (UAT)",
    cashUsd: "$6,000",
    cashVnd: "150,000,000 VNĐ",
    percentage: "20%",
    dod: "100% Test Cases UAT đạt; toàn bộ lỗi mức Blocker/Critical được giải quyết; khách hàng ký Biên bản Nghiệm thu UAT.",
    dodEn: "100% UAT test cases pass; all Blocker/Critical bugs resolved; UAT Acceptance Certificate signed.",
    pmStrategy: "Nguyên tắc: Bám sát danh mục tính năng theo hợp đồng, làm trọng tài phân biệt rạch ròi giữa lỗi kỹ thuật (Bug) và yêu cầu mới (CR).",
    pmStrategyEn: "Rule: Strict adherence to contractual scope, clearly distinguishing technical bugs from scope creep (CR).",
    barrier: "Hàng rào chấp thuận nghiệm thu (UAT Gate)",
  },
  {
    gate: "M5",
    phase: "Bàn Giao Toàn Diện & Go-Live",
    phaseEn: "Production Go-Live & Handover",
    cashUsd: "$3,000",
    cashVnd: "75,000,000 VNĐ",
    percentage: "10%",
    dod: "Triển khai lên Production; bàn giao mã nguồn, tài liệu hướng dẫn vận hành; bắt đầu thời gian bảo hành 6 tháng.",
    dodEn: "Production deployment; source code & operational documentation handover; start 6-month warranty period.",
    pmStrategy: "Nguyên tắc: Thu dứt điểm 10% thanh toán cuối cùng trước khi chuyển giao quyền sở hữu tài khoản máy chủ Production cho khách hàng.",
    pmStrategyEn: "Rule: Collect final 10% balance before transferring full production root access to client.",
    barrier: "Hàng rào chuyển giao tài sản (Final Release Gate)",
  },
];

export function PmCashflow25dSimulator({ lang }: PmCashflow25dSimulatorProps) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeGateIdx, setActiveGateIdx] = useState(1); // Default to M2 (Scope Freeze)

  const activeGate = MILESTONES[activeGateIdx];

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
      {/* 1. Control Header */}
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
            onClick={() => setActiveGateIdx(1)}
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

        {/* Milestone Selector Buttons */}
        <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
          {MILESTONES.map((m, idx) => (
            <button
              key={m.gate}
              type="button"
              onClick={() => setActiveGateIdx(idx)}
              style={{
                padding: "4px 10px",
                borderRadius: "6px",
                border: activeGateIdx === idx ? "1.5px solid #2563eb" : "1px solid #cbd5e1",
                background: activeGateIdx === idx ? "#eff6ff" : "#ffffff",
                color: activeGateIdx === idx ? "#1d4ed8" : "#475569",
                fontSize: "11px",
                fontWeight: 800,
                fontFamily: "var(--font-mono, monospace)",
                cursor: "pointer",
              }}
            >
              {m.gate} ({m.cashUsd})
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
              background: "#16a34a",
              display: "inline-block",
            }}
          />
          <strong style={{ color: "#0f172a" }}>
            CHIẾN LƯỢC DÒNG TIỀN SENIOR PM: Cột mốc {activeGate.gate} — {activeGate.percentage} ({activeGate.cashUsd} / {activeGate.cashVnd})
          </strong>
        </div>

        <div style={{ display: "flex", gap: "14px" }}>
          <span>TỔNG DỰ ÁN: <strong style={{ color: "#2563eb" }}>$30,000 / 750M VNĐ</strong></span>
          <span>TIÊU CHUẨN: <strong style={{ color: "#16a34a" }}>DoD & Scope Freeze</strong></span>
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
          aria-label="Sơ đồ 2.5D Quy trình PM 5 Cột Mốc Thu Tiền $30,000"
        >
          <defs>
            <linearGradient id="pmFloorGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#dbeafe" stopOpacity="0.4" />
            </linearGradient>

            <linearGradient id="pmSideLeft" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#dbeafe" />
              <stop offset="100%" stopColor="#bfdbfe" />
            </linearGradient>

            <linearGradient id="pmSideRight" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#bfdbfe" />
              <stop offset="100%" stopColor="#93c5fd" />
            </linearGradient>

            <filter id="pmShadow" x="-20%" y="-20%" width="150%" height="150%">
              <feDropShadow dx="2" dy="4" stdDeviation="0" floodColor="#0f172a" floodOpacity="0.8" />
            </filter>
          </defs>

          {/* SÀN LƯỚI TỌA ĐỘ ISOMETRIC 2.5D */}
          <g stroke="rgba(37, 99, 235, 0.12)" strokeWidth="1" fill="none">
            <path d="M 380,25 L 720,170 L 380,315 L 40,170 Z" fill="url(#pmFloorGrad)" />
            <path d="M 380,65 L 650,170 L 380,275 L 110,170 Z" />
            <path d="M 380,105 L 580,170 L 380,235 L 180,170 Z" />
            <line x1="40" y1="170" x2="720" y2="170" strokeDasharray="4 4" />
          </g>

          {/* PIPELINE DÒNG TIỀN LIÊN TỤC 5 CỘT MỐC */}
          <path
            d="M 90,190 Q 150,140 230,130 T 380,90 T 530,130 T 670,190"
            fill="none"
            stroke="#16a34a"
            strokeWidth="3.5"
            strokeDasharray="6 4"
          />

          {/* GÓI TIỀN/DÒNG TIỀN THANH TOÁN DI CHUYỂN */}
          {isPlaying && (
            <circle r="6" fill="#16a34a" stroke="#ffffff" strokeWidth="2">
              <animateMotion
                path="M 90,190 Q 150,140 230,130 T 380,90 T 530,130 T 670,190"
                dur="3.0s"
                repeatCount="indefinite"
              />
            </circle>
          )}

          {/* GATE 1: M1 $6,000 (20%) */}
          <g transform="translate(90, 190)" onClick={() => setActiveGateIdx(0)} style={{ cursor: "pointer" }}>
            <polygon points="0,-22 38,0 0,22 -38,0" fill={activeGateIdx === 0 ? "#eff6ff" : "#ffffff"} stroke="#2563eb" strokeWidth={activeGateIdx === 0 ? 2.5 : 1.8} filter="url(#pmShadow)" />
            <polygon points="-38,0 0,22 0,38 -38,16" fill="url(#pmSideLeft)" stroke="#2563eb" strokeWidth="1.5" />
            <polygon points="0,22 38,0 38,16 0,38" fill="url(#pmSideRight)" stroke="#2563eb" strokeWidth="1.5" />
            <text x="0" y="3" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="9.5" fontWeight="850" fill="#0f172a">M1: $6,000</text>
            <text x="0" y="52" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="8.5" fontWeight="800" fill="#2563eb">Cọc 20%</text>
          </g>

          {/* GATE 2: M2 $7,500 (25%) - SCOPE FREEZE */}
          <g transform="translate(230, 130)" onClick={() => setActiveGateIdx(1)} style={{ cursor: "pointer" }}>
            <polygon points="0,-24 44,0 0,24 -44,0" fill={activeGateIdx === 1 ? "#eff6ff" : "#ffffff"} stroke="#0284c7" strokeWidth={activeGateIdx === 1 ? 2.5 : 1.8} filter="url(#pmShadow)" />
            <polygon points="-44,0 0,24 0,42 -44,18" fill="#e0f2fe" stroke="#0284c7" strokeWidth="1.5" />
            <polygon points="0,24 44,0 44,18 0,42" fill="#bae6fd" stroke="#0284c7" strokeWidth="1.5" />
            <text x="0" y="3" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="9.5" fontWeight="850" fill="#0369a1">M2: $7,500</text>
            <text x="0" y="56" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="8.5" fontWeight="800" fill="#0284c7">Scope Freeze 25%</text>
          </g>

          {/* GATE 3: M3 $7,500 (25%) - CORE ALPHA */}
          <g transform="translate(380, 90)" onClick={() => setActiveGateIdx(2)} style={{ cursor: "pointer" }}>
            <polygon points="0,-24 46,0 0,24 -46,0" fill={activeGateIdx === 2 ? "#eff6ff" : "#ffffff"} stroke="#059669" strokeWidth={activeGateIdx === 2 ? 2.5 : 1.8} filter="url(#pmShadow)" />
            <polygon points="-46,0 0,24 0,42 -46,18" fill="#d1fae5" stroke="#059669" strokeWidth="1.5" />
            <polygon points="0,24 46,0 46,18 0,42" fill="#a7f3d0" stroke="#059669" strokeWidth="1.5" />
            <text x="0" y="3" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="9.5" fontWeight="850" fill="#065f46">M3: $7,500</text>
            <text x="0" y="56" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="8.5" fontWeight="800" fill="#059669">Alpha Demo 25%</text>
          </g>

          {/* GATE 4: M4 $6,000 (20%) - UAT */}
          <g transform="translate(530, 130)" onClick={() => setActiveGateIdx(3)} style={{ cursor: "pointer" }}>
            <polygon points="0,-24 44,0 0,24 -44,0" fill={activeGateIdx === 3 ? "#faf5ff" : "#ffffff"} stroke="#7c3aed" strokeWidth={activeGateIdx === 3 ? 2.5 : 1.8} filter="url(#pmShadow)" />
            <polygon points="-44,0 0,24 0,42 -44,18" fill="#ede9fe" stroke="#7c3aed" strokeWidth="1.5" />
            <polygon points="0,24 44,0 44,18 0,42" fill="#ddd6fe" stroke="#7c3aed" strokeWidth="1.5" />
            <text x="0" y="3" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="9.5" fontWeight="850" fill="#5b21b6">M4: $6,000</text>
            <text x="0" y="56" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="8.5" fontWeight="800" fill="#7c3aed">UAT Sign 20%</text>
          </g>

          {/* GATE 5: M5 $3,000 (10%) - GO LIVE */}
          <g transform="translate(670, 190)" onClick={() => setActiveGateIdx(4)} style={{ cursor: "pointer" }}>
            <polygon points="0,-22 40,0 0,22 -40,0" fill={activeGateIdx === 4 ? "#fff7ed" : "#ffffff"} stroke="#ea580c" strokeWidth={activeGateIdx === 4 ? 2.5 : 1.8} filter="url(#pmShadow)" />
            <polygon points="-40,0 0,22 0,38 -40,16" fill="#ffedd5" stroke="#ea580c" strokeWidth="1.5" />
            <polygon points="0,22 40,0 40,16 0,38" fill="#fed7aa" stroke="#ea580c" strokeWidth="1.5" />
            <text x="0" y="3" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="9.5" fontWeight="850" fill="#9a3412">M5: $3,000</text>
            <text x="0" y="52" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="8.5" fontWeight="800" fill="#ea580c">Go-Live 10%</text>
          </g>
        </svg>
      </div>

      {/* 4. Senior PM Governance Strategy Card */}
      <div style={{ padding: "18px 20px", background: "#ffffff", borderTop: "1.5px solid #d8e6f5" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "10px", flexWrap: "wrap", gap: "8px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "10.5px", fontWeight: 800, padding: "2px 8px", borderRadius: "4px", background: "#eff6ff", color: "#1d4ed8", border: "1px solid #bfdbfe" }}>
              CỘT MỐC {activeGate.gate} · {activeGate.percentage}
            </span>
            <strong style={{ fontSize: "14px", color: "#0f172a" }}>
              {lang === "vi" ? activeGate.phase : activeGate.phaseEn}
            </strong>
          </div>
          <span style={{ fontSize: "12px", color: "#16a34a", fontWeight: 850, fontFamily: "var(--font-mono)" }}>
            Số tiền thu về: {activeGate.cashUsd} ({activeGate.cashVnd})
          </span>
        </div>

        {/* Definition of Done */}
        <div style={{ padding: "10px 14px", background: "#f8fafc", borderRadius: "8px", border: "1px solid #e2e8f0", marginBottom: "10px" }}>
          <strong style={{ fontSize: "12px", color: "#334155", display: "block", marginBottom: "4px" }}>
            Tiêu Chuẩn Hoàn Thành (Definition of Done - DoD):
          </strong>
          <p style={{ margin: 0, fontSize: "12.5px", color: "#475569", lineHeight: 1.55 }}>
            {lang === "vi" ? activeGate.dod : activeGate.dodEn}
          </p>
        </div>

        {/* PM Strategy */}
        <div style={{ padding: "10px 14px", background: "#f0fdf4", borderRadius: "8px", border: "1px solid #bbf7d0" }}>
          <strong style={{ fontSize: "12px", color: "#166534", display: "block", marginBottom: "4px" }}>
            Chiến Lược Quản Trị Của Senior PM:
          </strong>
          <p style={{ margin: 0, fontSize: "12.5px", color: "#15803d", lineHeight: 1.55, fontWeight: 600 }}>
            {lang === "vi" ? activeGate.pmStrategy : activeGate.pmStrategyEn}
          </p>
        </div>
      </div>
    </div>
  );
}

export default PmCashflow25dSimulator;
