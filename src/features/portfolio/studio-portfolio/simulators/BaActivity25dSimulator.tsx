import { useState } from "react";
import { GitBranch, Pause, Play, RotateCcw } from "lucide-react";
import type { Language } from "@/types";

interface BaActivity25dSimulatorProps {
  lang: Language;
}

export function BaActivity25dSimulator({ lang }: BaActivity25dSimulatorProps) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isDuplicate, setIsDuplicate] = useState(false);

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
            onClick={() => setIsDuplicate(false)}
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

        {/* Branch Toggle */}
        <button
          type="button"
          onClick={() => setIsDuplicate((d) => !d)}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "5px",
            padding: "6px 12px",
            borderRadius: "7px",
            background: isDuplicate ? "#fee2e2" : "#f0fdf4",
            color: isDuplicate ? "#dc2626" : "#16a34a",
            fontSize: "11.5px",
            fontWeight: 800,
            border: isDuplicate ? "1.5px solid #fca5a5" : "1.5px solid #86efac",
            cursor: "pointer",
          }}
        >
          <GitBranch size={13} color={isDuplicate ? "#dc2626" : "#16a34a"} />
          <span>{isDuplicate ? (lang === "vi" ? "Kịch Bản: Quét Trùng Đơn (409 Conflict)" : "Exception: Duplicate Scan (409)") : (lang === "vi" ? "Kịch Bản: Quét Thành Công (200 OK)" : "Main Flow: Success (200 OK)")}</span>
        </button>
      </div>

      {/* 2. Status Strip */}
      <div
        style={{
          padding: "8px 18px",
          background: isDuplicate ? "#fff1f2" : "#f8fafc",
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
              background: isDuplicate ? "#dc2626" : "#16a34a",
              display: "inline-block",
            }}
          />
          <strong style={{ color: "#0f172a" }}>
            {isDuplicate
              ? "NGOẠI LỆ 4B: Redis phát hiện Idempotency-Key trùng ➔ Chặn đứng ghi đè, trả về 409 Conflict"
              : "LUỒNG CHÍNH 1.0: Quét mã QR ➔ Khóa Redis OK ➔ Máy trạng thái Camunda cập nhật ➔ Ghi nhận DB"}
          </strong>
        </div>

        <div style={{ display: "flex", gap: "14px" }}>
          <span>SWIMLANES: <strong style={{ color: "#2563eb" }}>4 Làn Trách Nhiệm</strong></span>
          <span>BẢO ĐẢM: <strong style={{ color: "#16a34a" }}>Idempotency 100%</strong></span>
        </div>
      </div>

      {/* 3. 2.5D Isometric Swimlanes SVG Engine */}
      <div
        style={{
          padding: "16px 10px",
          background: "linear-gradient(135deg, #f8fbff 0%, #ffffff 50%, #eff6ff 100%)",
          overflowX: "auto",
        }}
      >
        <svg
          viewBox="0 0 760 360"
          style={{ width: "100%", minWidth: "680px", height: "auto", display: "block" }}
          aria-label="Sơ đồ 2.5D Activity Swimlane"
        >
          <defs>
            <filter id="actShadow" x="-20%" y="-20%" width="150%" height="150%">
              <feDropShadow dx="2" dy="3.5" stdDeviation="0" floodColor="#0f172a" floodOpacity="0.8" />
            </filter>
          </defs>

          {/* 4 ISOMETRIC SWIMLANES FLOORS */}
          {/* Lane 1: Shipper / Courier */}
          <polygon points="60,60 220,20 220,300 60,340" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1.2" />
          <text x="140" y="45" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="10" fontWeight="850" fill="#475569">
            LÀN 1: TÀI XẾ (SHIPPER)
          </text>

          {/* Lane 2: Mobile Courier App */}
          <polygon points="220,20 380,-20 380,260 220,300" fill="#eff6ff" stroke="#bfdbfe" strokeWidth="1.2" />
          <text x="300" y="5" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="10" fontWeight="850" fill="#1d4ed8">
            LÀN 2: COURIER APP
          </text>

          {/* Lane 3: Gateway & Redis */}
          <polygon points="380,-20 540,-60 540,220 380,260" fill="#faf5ff" stroke="#ddd6fe" strokeWidth="1.2" />
          <text x="460" y="-35" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="10" fontWeight="850" fill="#7c3aed">
            LÀN 3: GATEWAY & REDIS
          </text>

          {/* Lane 4: Camunda & PostgreSQL */}
          <polygon points="540,-60 700,-100 700,180 540,220" fill="#f0fdf4" stroke="#bbf7d0" strokeWidth="1.2" />
          <text x="620" y="-75" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="10" fontWeight="850" fill="#15803d">
            LÀN 4: CAMUNDA & DB
          </text>

          {/* STEPS AS 2.5D ELEVATED NODES */}
          {/* Step 1: Quét mã QR (Lane 1) */}
          <g transform="translate(140, 110)">
            <rect x="-55" y="-18" width="110" height="36" rx="6" fill="#ffffff" stroke="#475569" strokeWidth="1.6" filter="url(#actShadow)" />
            <text x="0" y="4" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="9" fontWeight="850" fill="#0f172a">
              Quét Mã QR Vận Đơn
            </text>
          </g>

          {/* Step 2: Sinh Idempotency Key (Lane 2) */}
          <g transform="translate(300, 140)">
            <rect x="-65" y="-18" width="130" height="36" rx="6" fill="#ffffff" stroke="#2563eb" strokeWidth="1.6" filter="url(#actShadow)" />
            <text x="0" y="-1" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="8.5" fontWeight="850" fill="#1e40af">
              Sinh Idempotency-Key
            </text>
            <text x="0" y="11" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="7.5" fontWeight="750" fill="#2563eb">
              UUIDv4 + GPS Tọa Độ
            </text>
          </g>

          {/* Step 3: Kiểm tra Redis Lock (Lane 3 - Decision Diamond) */}
          <g transform="translate(460, 160)">
            <polygon points="0,-22 36,0 0,22 -36,0" fill={isDuplicate ? "#fee2e2" : "#fef3c7"} stroke={isDuplicate ? "#dc2626" : "#d97706"} strokeWidth="2" filter="url(#actShadow)" />
            <text x="0" y="3" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="8" fontWeight="850" fill="#78350f">
              Khóa Trùng?
            </text>
          </g>

          {/* Path Branch Success vs Error */}
          {isDuplicate ? (
            /* Error branch: Return 409 Conflict */
            <g transform="translate(460, 240)">
              <rect x="-60" y="-18" width="120" height="36" rx="6" fill="#fef2f2" stroke="#dc2626" strokeWidth="1.6" filter="url(#actShadow)" />
              <text x="0" y="4" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="8.5" fontWeight="850" fill="#991b1b">
                409 Trùng Đơn (Cache)
              </text>
            </g>
          ) : (
            /* Success branch: Camunda BPMN (Lane 4) */
            <g transform="translate(620, 170)">
              <rect x="-65" y="-18" width="130" height="36" rx="6" fill="#f0fdf4" stroke="#16a34a" strokeWidth="1.6" filter="url(#actShadow)" />
              <text x="0" y="-1" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="8.5" fontWeight="850" fill="#14532d">
                Camunda ➔ HUB_ARRIVED
              </text>
              <text x="0" y="11" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="7.5" fontWeight="750" fill="#15803d">
                Ghi Log & Update 3NF
              </text>
            </g>
          )}

          {/* Animated Connecting Paths */}
          <path d="M 140,130 L 235,140" fill="none" stroke="#2563eb" strokeWidth="2" markerEnd="url(#actArrow)" />
          <path d="M 365,140 L 424,160" fill="none" stroke="#7c3aed" strokeWidth="2" />
          {isDuplicate ? (
            <path d="M 460,182 L 460,222" fill="none" stroke="#dc2626" strokeWidth="2" strokeDasharray="3 3" />
          ) : (
            <path d="M 496,160 L 555,170" fill="none" stroke="#16a34a" strokeWidth="2" />
          )}

          {/* ANIMATED TOKEN */}
          {isPlaying && (
            <circle r="5" fill={isDuplicate ? "#dc2626" : "#2563eb"} stroke="#ffffff" strokeWidth="1.8">
              <animateMotion
                path={
                  isDuplicate
                    ? "M 140,110 L 300,140 L 460,160 L 460,240"
                    : "M 140,110 L 300,140 L 460,160 L 620,170"
                }
                dur="2.4s"
                repeatCount="indefinite"
              />
            </circle>
          )}
        </svg>
      </div>

      {/* 4. Specification Footer */}
      <div style={{ padding: "16px 20px", background: "#ffffff", borderTop: "1.5px solid #d8e6f5" }}>
        <strong style={{ fontSize: "13px", color: "#0f172a", display: "block", marginBottom: "4px" }}>
          Phân Tích Nghiệp Vụ Của Senior IT BA:
        </strong>
        <p style={{ margin: 0, fontSize: "12.5px", color: "#475569", lineHeight: 1.6 }}>
          Sơ đồ Activity Swimlanes phân định rạch ròi ranh giới giữa tầng Client, tầng Gateway, tầng Quản lý đồng thời và tầng Cơ sở dữ liệu. Bằng cách chặn đứng các yêu cầu quét trùng lặp ngay tại Làn 3 (Redis), hệ thống bảo vệ Làn 4 (PostgreSQL) khỏi tải đột biến và loại bỏ 100% rủi ro tạo 2 hóa đơn thu hộ COD trùng nhau.
        </p>
      </div>
    </div>
  );
}

export default BaActivity25dSimulator;
