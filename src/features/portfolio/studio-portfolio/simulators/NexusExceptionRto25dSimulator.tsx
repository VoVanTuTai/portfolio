import { useState } from "react";
import { AlertTriangle, Pause, Play, RotateCcw } from "lucide-react";
import type { Language } from "@/types";

interface NexusExceptionRto25dSimulatorProps {
  lang: Language;
}

type ExceptionScenario = "retry" | "rto" | "damage";

interface ScenarioDetail {
  id: ExceptionScenario;
  titleVi: string;
  titleEn: string;
  triggerEvent: string;
  resolutionStrategy: string;
  financialImpact: string;
  auditTrail: string;
  descriptionVi: string;
  descriptionEn: string;
  color: string;
}

const SCENARIOS: Record<ExceptionScenario, ScenarioDetail> = {
  retry: {
    id: "retry",
    titleVi: "Case 1: Giao Hàng Thất Bại Tái Giao (Tối Đa 3 Lần)",
    titleEn: "Case 1: Failed Delivery Retry Loop (Up to 3 Attempts)",
    triggerEvent: "DELIVERY_FAILED (Lý do: Khách không nghe máy / Hẹn giao lại / Sai địa chỉ)",
    resolutionStrategy: "Tự động gửi tin nhắn Zalo ZNS / SMS tương tác 2 chiều để khách chọn lại khung giờ nhận hàng (Sáng / Chiều / Tối). Đơn đưa vào hàng đợi ưu tiên cho ngày hôm sau.",
    financialImpact: "Không phát sinh phụ phí nếu giao thành công trong 3 lượt.",
    auditTrail: "INSERT INTO delivery_attempts (parcel_id, attempt_no, reason_code, caller_record_url, gps_lat, gps_lng) VALUES (...);",
    descriptionVi: "Quy trình kiểm soát bưu tá nghiêm ngặt chống bưu tá 'báo ảo' không giao: Hệ thống đối chiếu tọa độ GPS của bưu tá tại thời điểm bấm thất bại và lịch sử cuộc gọi tổng đài ảo VoIP với khách hàng.",
    descriptionEn: "Anti-fraud validation preventing courier false reporting: Cross-references courier GPS geofence coordinates against virtual PBX VoIP call logs before logging a failed attempt.",
    color: "#f59e0b",
  },
  rto: {
    id: "rto",
    titleVi: "Case 2: Chuyển Hoàn Đơn Hàng Về Shop (Return To Origin - RTO)",
    titleEn: "Case 2: Reverse Logistics & Return To Origin (RTO)",
    triggerEvent: "RTO_INITIATED (Sau 3 lần giao không thành công hoặc khách từ chối nhận)",
    resolutionStrategy: "Bưu kiện được lưu kho bưu cục 48h (Hold buffer) để Shop có thể liên hệ lại khách. Hết 48h, bưu cục lập seal túi chuyển hoàn ngược tuyến Linehaul về lại kho gốc của Shop.",
    financialImpact: "Tự động tính cước hoàn 50% cước chiều đi và khấu trừ vào ví tài khoản của Shop.",
    auditTrail: "UPDATE parcels SET status = 'RETURNED_TO_SENDER', rto_completed_at = NOW(), reverse_fee = $fee WHERE id = $id;",
    descriptionVi: "Đóng gói bưu kiện chuyển hoàn có dán nhãn phản quang màu đỏ đặc thù, theo dõi trạng thái đảo chiều theo thời gian thực để bảo đảm hàng hóa của Shop không bị thất lạc trong kho hoàn.",
    descriptionEn: "Reverse parcels receive distinctive high-visibility red labels and reverse tracking telemetry to ensure merchant inventory is fully accounted for during return transit.",
    color: "#ef4444",
  },
  damage: {
    id: "damage",
    titleVi: "Case 3: Hư Hỏng Bao Bì & Bồi Thường COD (Damage & Claim)",
    titleEn: "Case 3: Damaged Goods & Automated COD Compensation",
    triggerEvent: "INCIDENT_REPORTED (Bưu kiện vỡ, móp méo, rách bao bì hoặc mất cắp)",
    resolutionStrategy: "Bưu tá và khách hàng lập Biên Bản Đồng Kiểm Điện Tử trực tiếp trên App có chụp 4 ảnh hiện trường và quay video mở kiện. Hệ thống kích hoạt gói bảo hiểm hàng hóa tự động.",
    financialImpact: "Bồi hoàn 100% giá trị khai giá đơn hàng COD tối đa 20.000.000 VNĐ trong vòng 24 giờ làm việc.",
    auditTrail: "INSERT INTO parcel_claims (parcel_id, claim_type, compensation_amount, approved_by, status) VALUES (...);",
    descriptionVi: "Hệ thống truy vết lại camera băng chuyền các Hub đã đi qua để xác định trạm xảy ra rơi vỡ. Chi phí bồi thường được hạch toán minh bạch vào chi phí rủi ro vận hành logistics.",
    descriptionEn: "System traces optical conveyor camera footage across intermediate hubs to pinpoint damage origin. Compensation is auto-credited from the operational risk reserve.",
    color: "#8b5cf6",
  },
};

export function NexusExceptionRto25dSimulator({ lang }: NexusExceptionRto25dSimulatorProps) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeScenario, setActiveScenario] = useState<ExceptionScenario>("retry");

  const scenario = SCENARIOS[activeScenario];

  return (
    <div
      style={{
        borderRadius: "12px",
        background: "radial-gradient(ellipse at 50% 15%, #0d1527 0%, #060913 100%)",
        border: "1.5px solid #1e293b",
        color: "#f8fafc",
        padding: "20px",
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.4)",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
      }}
    >
      {/* 1. Header Toolbar */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "12px",
          borderBottom: "1px solid rgba(148, 163, 184, 0.15)",
          paddingBottom: "14px",
        }}
      >
        <div>
          <span
            style={{
              fontFamily: "var(--studio-font-mono)",
              fontSize: "11px",
              fontWeight: 800,
              color: "#f87171",
              letterSpacing: "0.05em",
              textTransform: "uppercase",
            }}
          >
            EXCEPTION HANDLING & REVERSE LOGISTICS · FAULT TOLERANCE
          </span>
          <h3 style={{ margin: "4px 0 0 0", fontSize: "16px", color: "#ffffff", fontWeight: 750 }}>
            {lang === "vi"
              ? "Mô Phỏng 3 Nhánh Xử Lý Rủi Ro: Tái Giao, Chuyển Hoàn RTO & Bồi Thường Hư Hỏng"
              : "3-Branch Risk Mitigation Engine: Delivery Retry, RTO Return & Damage Settlement"}
          </h3>
        </div>

        {/* Action Controls */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          {/* Scenario Tabs */}
          <div style={{ display: "flex", gap: "4px", background: "rgba(15, 23, 42, 0.6)", padding: "3px", borderRadius: "6px", border: "1px solid #334155" }}>
            {[
              { id: "retry", label: "Case 1: Tái Giao (3 Lần)" },
              { id: "rto", label: "Case 2: Chuyển Hoàn RTO" },
              { id: "damage", label: "Case 3: Bồi Thường Hư Hỏng" },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveScenario(tab.id as ExceptionScenario)}
                style={{
                  border: "none",
                  background: activeScenario === tab.id ? scenario.color : "transparent",
                  color: activeScenario === tab.id ? "#ffffff" : "#94a3b8",
                  padding: "4px 10px",
                  borderRadius: "4px",
                  fontSize: "10.5px",
                  fontWeight: 750,
                  cursor: "pointer",
                  transition: "all 0.15s ease",
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setIsPlaying(!isPlaying)}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "5px",
              background: isPlaying ? "rgba(239, 68, 68, 0.15)" : "rgba(34, 197, 94, 0.15)",
              color: isPlaying ? "#f87171" : "#4ade80",
              border: `1px solid ${isPlaying ? "rgba(239, 68, 68, 0.3)" : "rgba(34, 197, 94, 0.3)"}`,
              padding: "6px 12px",
              borderRadius: "6px",
              fontSize: "11px",
              fontWeight: 750,
              cursor: "pointer",
            }}
          >
            {isPlaying ? <Pause size={12} /> : <Play size={12} />}
          </button>

          <button
            type="button"
            onClick={() => setActiveScenario("retry")}
            style={{
              display: "inline-flex",
              alignItems: "center",
              background: "rgba(148, 163, 184, 0.1)",
              color: "#cbd5e1",
              border: "1px solid #334155",
              padding: "6px 10px",
              borderRadius: "6px",
              fontSize: "11px",
              cursor: "pointer",
            }}
            title="Reset"
          >
            <RotateCcw size={12} />
          </button>
        </div>
      </div>

      {/* 2. Main 2.5D Exception Topology SVG */}
      <div
        style={{
          width: "100%",
          position: "relative",
          background: "#080d1a",
          borderRadius: "8px",
          overflow: "hidden",
          border: "1px solid rgba(239, 68, 68, 0.2)",
        }}
      >
        <svg
          viewBox="0 0 830 340"
          style={{ width: "100%", height: "auto", display: "block" }}
        >
          <defs>
            <linearGradient id="normalFlowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="100%" stopColor="#4ade80" />
            </linearGradient>

            <filter id="exGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Grid lines */}
          <g stroke="rgba(51, 65, 85, 0.2)" strokeWidth="0.8">
            {Array.from({ length: 15 }).map((_, i) => (
              <line key={`ex-x-${i}`} x1={i * 60} y1="0" x2={i * 60} y2="340" />
            ))}
            {Array.from({ length: 7 }).map((_, i) => (
              <line key={`ex-y-${i}`} x1="0" y1={i * 50} x2="830" y2={i * 50} />
            ))}
          </g>

          {/* NODE 1: OUT_FOR_DELIVERY (Origin of Decision) */}
          <g transform="translate(140, 170)">
            <ellipse cx="0" cy="8" rx="40" ry="20" fill="rgba(0, 0, 0, 0.5)" />
            <polygon points="0,0 -30,-15 -30,-30 0,-15" fill="#0284c7" stroke="#38bdf8" strokeWidth="1" />
            <polygon points="0,0 30,-15 30,-30 0,-15" fill="#0369a1" stroke="#38bdf8" strokeWidth="1" />
            <polygon points="0,-30 30,-45 0,-60 -30,-45" fill="#38bdf8" stroke="#ffffff" strokeWidth="1.5" />
            <text x="0" y="-35" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="9.5" fontWeight="900" fill="#0f172a">
              DELIVER
            </text>
            <text x="0" y="28" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="10.5" fontWeight="800" fill="#38bdf8">
              Bưu Tá Đi Giao
            </text>
          </g>

          {/* DECISION DIAMOND: Check Customer Delivery Status */}
          <g transform="translate(320, 170)">
            <ellipse cx="0" cy="6" rx="35" ry="18" fill="rgba(0, 0, 0, 0.5)" />
            <polygon points="0,-35 40,0 0,35 -40,0" fill="#1e293b" stroke="#f59e0b" strokeWidth="2" />
            <text x="0" y="-4" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="9" fontWeight="800" fill="#facc15">
              KẾT QUẢ?
            </text>
            <text x="0" y="10" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="8" fontWeight="700" fill="#94a3b8">
              STATUS EVAL
            </text>
          </g>

          {/* Primary Connecting Line from Deliver to Decision */}
          <line x1="170" y1="170" x2="280" y2="170" stroke="#38bdf8" strokeWidth="2.5" markerEnd="url(#arrowBlue)" />

          {/* NORMAL HAPPY PATH: Success to Delivery */}
          <g>
            <line x1="320" y1="135" x2="320" y2="60" stroke="#22c55e" strokeWidth="2" strokeDasharray="4 3" />
            <line x1="320" y1="60" x2="480" y2="60" stroke="#22c55e" strokeWidth="2" />
            <rect x="480" y="40" width="130" height="40" rx="6" fill="rgba(34, 197, 94, 0.2)" stroke="#22c55e" strokeWidth="1.5" />
            <text x="545" y="58" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="10.5" fontWeight="800" fill="#4ade80">
              Giao Thành Công
            </text>
            <text x="545" y="72" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="9" fontWeight="700" fill="#86efac">
              DELIVERED · Thu COD
            </text>
          </g>

          {/* ==============================================================
              CASE 1 BRANCH: RETRY LOOP (UP TO 3 ATTEMPTS)
              ============================================================== */}
          {activeScenario === "retry" && (
            <g>
              <path
                id="retryPath"
                d="M 360 170 Q 480 170 520 130 Q 560 90 480 90 L 360 90"
                fill="none"
                stroke="#f59e0b"
                strokeWidth="2.5"
                strokeDasharray="5 3"
              />
              <g transform="translate(560, 140)">
                <rect x="-60" y="-20" width="120" height="40" rx="6" fill="rgba(245, 158, 11, 0.2)" stroke="#f59e0b" strokeWidth="1.8" />
                <text x="0" y="-3" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="10" fontWeight="850" fill="#facc15">
                  Tái Giao Lần 2 & 3
                </text>
                <text x="0" y="12" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="8.5" fontWeight="700" fill="#fde68a">
                  SMS ZNS Hẹn Giờ
                </text>
              </g>

              {isPlaying && (
                <circle r="5" fill="#facc15" filter="url(#exGlow)">
                  <animateMotion
                    path="M 320 170 Q 480 170 520 130 Q 560 90 480 90 L 320 90 L 280 150"
                    dur="3s"
                    repeatCount="indefinite"
                  />
                </circle>
              )}
            </g>
          )}

          {/* ==============================================================
              CASE 2 BRANCH: RETURN TO ORIGIN (RTO)
              ============================================================== */}
          {activeScenario === "rto" && (
            <g>
              <line x1="360" y1="170" x2="480" y2="170" stroke="#ef4444" strokeWidth="2.5" />
              <line x1="480" y1="170" x2="480" y2="240" stroke="#ef4444" strokeWidth="2" strokeDasharray="4 3" />
              <line x1="480" y1="240" x2="620" y2="240" stroke="#ef4444" strokeWidth="2.5" />

              <g transform="translate(680, 240)">
                <rect x="-65" y="-22" width="130" height="44" rx="6" fill="rgba(239, 68, 68, 0.25)" stroke="#ef4444" strokeWidth="2" />
                <text x="0" y="-4" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="10" fontWeight="850" fill="#f87171">
                  Chuyển Hoàn RTO
                </text>
                <text x="0" y="12" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="8.5" fontWeight="700" fill="#fca5a5">
                  Lưu kho 48h ➔ Về Shop
                </text>
              </g>

              {isPlaying && (
                <circle r="5.5" fill="#ef4444" filter="url(#exGlow)">
                  <animateMotion
                    path="M 320 170 L 480 170 L 480 240 L 680 240"
                    dur="2.5s"
                    repeatCount="indefinite"
                  />
                </circle>
              )}
            </g>
          )}

          {/* ==============================================================
              CASE 3 BRANCH: DAMAGE / DISPUTE COMPENSATION
              ============================================================== */}
          {activeScenario === "damage" && (
            <g>
              <line x1="320" y1="205" x2="320" y2="290" stroke="#8b5cf6" strokeWidth="2.5" strokeDasharray="4 3" />
              <line x1="320" y1="290" x2="480" y2="290" stroke="#8b5cf6" strokeWidth="2.5" />

              <g transform="translate(560, 290)">
                <rect x="-70" y="-22" width="140" height="44" rx="6" fill="rgba(139, 92, 246, 0.25)" stroke="#8b5cf6" strokeWidth="2" />
                <text x="0" y="-4" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="10" fontWeight="850" fill="#c084fc">
                  Đồng Kiểm & Bồi Thường
                </text>
                <text x="0" y="12" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="8.5" fontWeight="700" fill="#e9d5ff">
                  Bồi thường 100% COD (24h)
                </text>
              </g>

              {isPlaying && (
                <circle r="5.5" fill="#a855f7" filter="url(#exGlow)">
                  <animateMotion
                    path="M 320 170 L 320 290 L 560 290"
                    dur="2.2s"
                    repeatCount="indefinite"
                  />
                </circle>
              )}
            </g>
          )}
        </svg>
      </div>

      {/* 3. Deep Scenario Inspector Card */}
      <div
        style={{
          padding: "16px 18px",
          borderRadius: "8px",
          background: "rgba(15, 23, 42, 0.9)",
          border: `1.5px solid ${scenario.color}`,
          display: "flex",
          flexDirection: "column",
          gap: "12px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "8px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span
              style={{
                fontFamily: "var(--studio-font-mono)",
                fontSize: "11px",
                fontWeight: 850,
                color: scenario.color,
                background: `${scenario.color}25`,
                padding: "3px 8px",
                borderRadius: "5px",
                border: `1px solid ${scenario.color}`,
              }}
            >
              RISK PROTOCOL
            </span>
            <strong style={{ fontSize: "14px", color: "#ffffff" }}>
              {lang === "vi" ? scenario.titleVi : scenario.titleEn}
            </strong>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <AlertTriangle size={13} color={scenario.color} />
            <span style={{ fontSize: "11px", fontFamily: "var(--studio-font-mono)", color: scenario.color, fontWeight: 700 }}>
              {scenario.triggerEvent}
            </span>
          </div>
        </div>

        {/* Detailed Spec Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "8px" }}>
          <div style={{ background: "rgba(30, 41, 59, 0.6)", padding: "10px 12px", borderRadius: "6px", border: "1px solid #334155" }}>
            <span style={{ fontSize: "10px", color: "#94a3b8", display: "block", marginBottom: "4px" }}>CHIẾN LƯỢC XỬ LÝ (SOP)</span>
            <p style={{ margin: 0, fontSize: "11.5px", color: "#e2e8f0", lineHeight: 1.5 }}>{scenario.resolutionStrategy}</p>
          </div>
          <div style={{ background: "rgba(30, 41, 59, 0.6)", padding: "10px 12px", borderRadius: "6px", border: "1px solid #334155" }}>
            <span style={{ fontSize: "10px", color: "#94a3b8", display: "block", marginBottom: "4px" }}>TÁC ĐỘNG TÀI CHÍNH & PHÍ COD</span>
            <strong style={{ fontSize: "12px", color: "#4ade80", fontFamily: "var(--studio-font-mono)", display: "block" }}>{scenario.financialImpact}</strong>
          </div>
          <div style={{ background: "rgba(30, 41, 59, 0.6)", padding: "10px 12px", borderRadius: "6px", border: "1px solid #334155" }}>
            <span style={{ fontSize: "10px", color: "#94a3b8", display: "block", marginBottom: "4px" }}>VẾT KIỂM TOÁN (AUDIT TRAIL LOG)</span>
            <code style={{ fontSize: "10px", color: "#38bdf8", fontFamily: "var(--studio-font-mono)", wordBreak: "break-all" }}>{scenario.auditTrail}</code>
          </div>
        </div>

        <p style={{ margin: 0, fontSize: "12.5px", color: "#cbd5e1", lineHeight: 1.55 }}>
          {lang === "vi" ? scenario.descriptionVi : scenario.descriptionEn}
        </p>
      </div>
    </div>
  );
}
