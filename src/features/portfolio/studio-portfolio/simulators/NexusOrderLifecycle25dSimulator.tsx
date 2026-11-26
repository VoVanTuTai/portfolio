import { useState } from "react";
import { CheckCircle2, Pause, Play, RotateCcw } from "lucide-react";
import type { Language } from "@/types";

interface NexusOrderLifecycle25dSimulatorProps {
  lang: Language;
}

interface StepDetail {
  code: string;
  name: string;
  nameEn: string;
  actor: string;
  camundaEvent: string;
  sqlMutation: string;
  slaLimit: string;
  descriptionVi: string;
  descriptionEn: string;
  color: string;
  x: number;
  y: number;
}

const LIFECYCLE_STEPS: StepDetail[] = [
  {
    code: "ORDER_CREATED",
    name: "01. Khởi Tạo Vận Đơn",
    nameEn: "01. Order Created",
    actor: "Merchant / Open API Ingress",
    camundaEvent: "MessageEvent: order_placed",
    sqlMutation: "INSERT INTO parcels (tracking_code, status, cod_amount) VALUES (...) RETURNING id;",
    slaLimit: "< 150ms",
    descriptionVi: "Chủ shop tạo đơn trên Web/App hoặc qua Open API (Shopee, TikTok Shop, Haravan). Hệ thống sinh mã vận đơn định dạng 'NX-XXXXXX', mã QR và tính toán cước tạm tính.",
    descriptionEn: "Merchant submits order via Web/App or Open API. System generates tracking code 'NX-XXXXXX', creates QR barcode, and calculates provisional freight fees.",
    color: "#38bdf8",
    x: 70,
    y: 190,
  },
  {
    code: "PICKED_UP",
    name: "02. Lấy Hàng First-Mile",
    nameEn: "02. First-Mile Pickup",
    actor: "Shipper Thu Gom (Pickup Courier)",
    camundaEvent: "TaskComplete: shipper_picked_goods",
    sqlMutation: "UPDATE parcels SET status = 'PICKED_UP', picked_at = NOW(), courier_id = $1 WHERE id = $2;",
    slaLimit: "< 2 giờ từ khi Shop báo sẵn sàng",
    descriptionVi: "Thuật toán gom đơn phân tài xế gần kho nhất tới lấy kiện. Bưu tá dùng app quét mã barcode gói hàng, in biên nhận và ký xác nhận chuyển giao tài sản.",
    descriptionEn: "Dispatch algorithm routes nearest courier to pickup goods. Courier scans barcode, prints physical receipt, and acknowledges custody transfer.",
    color: "#60a5fa",
    x: 180,
    y: 130,
  },
  {
    code: "HUB_INBOUND",
    name: "03. Nhập Kho Nguồn & Cân Đo",
    nameEn: "03. Origin Hub Inbound",
    actor: "Kỹ Thuật Viên Hub (Warehouse Operator)",
    camundaEvent: "SignalEvent: parcel_inbound_scanned",
    sqlMutation: "INSERT INTO parcel_events (parcel_id, event_type, hub_id, weight_gram) VALUES (...);",
    slaLimit: "< 45 phút từ khi xe tải về bến",
    descriptionVi: "Bưu kiện được đổ lên băng chuyền tự động, camera DIMS quét 6 mặt xác định trọng lượng thực và kích thước thể tích, phát hiện lệch cước và đóng bao (túi bao) liên tỉnh.",
    descriptionEn: "Parcels placed onto automatic conveyor. DIMS scanner measures 3D volume & scale weight to catch dimensional weight discrepancies before bagging.",
    color: "#34d399",
    x: 300,
    y: 190,
  },
  {
    code: "LINEHAUL_TRANSIT",
    name: "04. Vận Chuyển Trục (Linehaul)",
    nameEn: "04. Linehaul Trunk Transit",
    actor: "Xe Tải Thùng Kín (Linehaul 15T - 30T)",
    camundaEvent: "IntermediateCatchEvent: linehaul_dispatched",
    sqlMutation: "UPDATE linehaul_trips SET status = 'IN_TRANSIT', departure_time = NOW() WHERE trip_id = $1;",
    slaLimit: "Hà Nội ➔ TP.HCM: 36h - 48h đường bộ",
    descriptionVi: "Xe tải thùng kín 15 - 30 tấn vận chuyển các bao tải bưu kiện đã kẹp chì niêm phong (seal) chạy đêm trên trục QL1A và cao tốc Bắc - Nam, kết nối 3 Hub Tổng với định vị GPS liên tục.",
    descriptionEn: "15-30 ton closed-box Linehaul trucks transporting tamper-sealed parcel bags along primary highway corridors with GPS tracking.",
    color: "#a78bfa",
    x: 420,
    y: 130,
  },
  {
    code: "HUB_OUTBOUND",
    name: "05. Nhập Kho Đích & Phân Tuyến",
    nameEn: "05. Destination Hub Outbound",
    actor: "Băng Chuyền Chia Chọn (Cross-Belt)",
    camundaEvent: "TaskComplete: sort_to_route",
    sqlMutation: "UPDATE parcels SET hub_id = $dest_hub, route_code = $assigned_route WHERE id = $1;",
    slaLimit: "< 30 phút chia chọn theo Phường/Xã",
    descriptionVi: "Bưu kiện đến Hub đích được cắt chì seal, băng chuyền Cross-belt quét mã và gạt tự động xuống máng hàng của từng bưu cục cấp phát theo mã bưu chính Zipcode.",
    descriptionEn: "At destination hub, seal is verified and cross-belt sorter automatically chutes parcel to exact local delivery station based on delivery zipcode.",
    color: "#f59e0b",
    x: 540,
    y: 190,
  },
  {
    code: "OUT_FOR_DELIVERY",
    name: "06. Phát Hàng Last-Mile",
    nameEn: "06. Out For Delivery",
    actor: "Shipper Giao Hàng (Last-mile Courier)",
    camundaEvent: "UserTask: deliver_to_recipient",
    sqlMutation: "UPDATE parcels SET status = 'OUT_FOR_DELIVERY', delivery_attempts = 1 WHERE id = $1;",
    slaLimit: "Giao trong ngày (< 4h từ lúc xuất kho)",
    descriptionVi: "Bưu tá nhận hàng lên xe, app tự động tối ưu lộ trình di chuyển (Route Optimization). Khách nhận được thông báo Zalo ZNS kèm số điện thoại tài xế và mã OTP giao hàng.",
    descriptionEn: "Courier loads packages, mobile app optimizes street-by-street routing. Recipient receives Zalo notification with courier contact and delivery OTP.",
    color: "#f97316",
    x: 650,
    y: 130,
  },
  {
    code: "DELIVERED_COD",
    name: "07. Ký Nhận & Quyết Toán COD",
    nameEn: "07. Delivered & COD Settled",
    actor: "Khách Nhận & Kế Toán Đối Soát",
    camundaEvent: "EndEvent: order_completed",
    sqlMutation: "INSERT INTO cod_ledger (parcel_id, collected_amount, reconciled_status) VALUES (...);",
    slaLimit: "Tức thì (Instant Realtime Reconciliation)",
    descriptionVi: "Khách ký nhận chữ ký điện tử (e-POD) trên màn hình hoặc đọc mã OTP, shipper thu tiền COD. Ngay lập tức cổng đối soát ghi nhận vào ví Shop, triệt tiêu 100% thất thoát tiền mặt.",
    descriptionEn: "Customer signs electronic proof of delivery (e-POD) or provides OTP, courier collects COD. Instant double-entry ledger credit to merchant balance.",
    color: "#10b981",
    x: 760,
    y: 190,
  },
];

export function NexusOrderLifecycle25dSimulator({ lang }: NexusOrderLifecycle25dSimulatorProps) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeStepIndex, setActiveStepIndex] = useState<number>(3); // Default at linehaul

  const currentStep = LIFECYCLE_STEPS[activeStepIndex];

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
              color: "#38bdf8",
              letterSpacing: "0.05em",
              textTransform: "uppercase",
            }}
          >
            END-TO-END FSM STATE MACHINE · DETERMINISTIC ORDER PIPELINE
          </span>
          <h3 style={{ margin: "4px 0 0 0", fontSize: "16px", color: "#ffffff", fontWeight: 750 }}>
            {lang === "vi"
              ? "Quy Trình 7 Bước Luân Chuyển Bưu Kiện Từ Lúc Tạo Đơn Đến Quyết Toán COD"
              : "7-Stage Parcel Lifecycle: From Order Ingress to Instant COD Settlement"}
          </h3>
        </div>

        {/* Step Progression Buttons */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
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
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            {isPlaying ? <Pause size={12} /> : <Play size={12} />}
            <span>{isPlaying ? (lang === "vi" ? "Tự động" : "Auto-advance") : (lang === "vi" ? "Thủ công" : "Manual")}</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveStepIndex(0)}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "4px",
              background: "rgba(148, 163, 184, 0.1)",
              color: "#cbd5e1",
              border: "1px solid #334155",
              padding: "6px 10px",
              borderRadius: "6px",
              fontSize: "11px",
              fontWeight: 700,
              cursor: "pointer",
            }}
            title="Reset to Step 1"
          >
            <RotateCcw size={12} />
          </button>
        </div>
      </div>

      {/* 2. Main 2.5D Assembly Pipeline SVG */}
      <div
        style={{
          width: "100%",
          position: "relative",
          background: "#080d1a",
          borderRadius: "8px",
          overflow: "hidden",
          border: "1px solid rgba(56, 189, 248, 0.15)",
        }}
      >
        <svg
          viewBox="0 0 830 320"
          style={{ width: "100%", height: "auto", display: "block" }}
        >
          <defs>
            <linearGradient id="trackGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0284c7" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#a855f7" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#10b981" stopOpacity="0.4" />
            </linearGradient>

            <filter id="nodeGlowFsm" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Floor Isometric Grid Lines */}
          <g stroke="rgba(51, 65, 85, 0.2)" strokeWidth="0.8">
            {Array.from({ length: 15 }).map((_, i) => (
              <line key={`fsm-x-${i}`} x1={i * 60} y1="0" x2={i * 60 + 50} y2="320" />
            ))}
            {Array.from({ length: 6 }).map((_, i) => (
              <line key={`fsm-y-${i}`} x1="0" y1={i * 55 + 20} x2="830" y2={i * 55 + 20} />
            ))}
          </g>

          {/* Assembly Conveyor Pipeline Track */}
          <path
            id="fsmAssemblyTrack"
            d="M 70 190 L 180 130 L 300 190 L 420 130 L 540 190 L 650 130 L 760 190"
            fill="none"
            stroke="url(#trackGrad)"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray="6 4"
          />

          {/* Animated Traveling Parcel Token */}
          {isPlaying && (
            <g>
              <circle r="7" fill="#38bdf8" filter="url(#nodeGlowFsm)">
                <animateMotion
                  path="M 70 190 L 180 130 L 300 190 L 420 130 L 540 190 L 650 130 L 760 190"
                  dur="6s"
                  repeatCount="indefinite"
                />
              </circle>
              <circle r="3" fill="#ffffff">
                <animateMotion
                  path="M 70 190 L 180 130 L 300 190 L 420 130 L 540 190 L 650 130 L 760 190"
                  dur="6s"
                  repeatCount="indefinite"
                />
              </circle>
            </g>
          )}

          {/* 7 Isometric Station Pillars */}
          {LIFECYCLE_STEPS.map((step, idx) => {
            const isSelected = idx === activeStepIndex;
            const w = 34;
            const h = 26;
            const d = 16;

            return (
              <g
                key={step.code}
                transform={`translate(${step.x}, ${step.y})`}
                onClick={() => setActiveStepIndex(idx)}
                style={{ cursor: "pointer" }}
              >
                {/* Selection Halo */}
                {isSelected && (
                  <ellipse
                    cx="0"
                    cy="6"
                    rx={w * 1.3}
                    ry={w * 0.7}
                    fill="none"
                    stroke={step.color}
                    strokeWidth="2"
                    strokeDasharray="4 3"
                    className="pulse-dot"
                  />
                )}

                {/* Base Shadow */}
                <ellipse cx="0" cy="8" rx={w * 0.9} ry={w * 0.45} fill="rgba(0, 0, 0, 0.6)" />

                {/* Left Prism Face */}
                <polygon
                  points={`0,0 -${w * 0.5},-${h * 0.5} -${w * 0.5},-${h * 0.5 + d} 0,-${d}`}
                  fill={step.color}
                  filter="brightness(0.65)"
                  stroke={isSelected ? "#ffffff" : "rgba(148, 163, 184, 0.4)"}
                  strokeWidth="0.8"
                />

                {/* Right Prism Face */}
                <polygon
                  points={`0,0 ${w * 0.5},-${h * 0.5} ${w * 0.5},-${h * 0.5 + d} 0,-${d}`}
                  fill={step.color}
                  filter="brightness(0.45)"
                  stroke={isSelected ? "#ffffff" : "rgba(148, 163, 184, 0.4)"}
                  strokeWidth="0.8"
                />

                {/* Top Face */}
                <polygon
                  points={`0,-${d * 2} ${w * 0.5},-${h * 0.5 + d} 0,-${d} -${w * 0.5},-${h * 0.5 + d}`}
                  fill={step.color}
                  filter={isSelected ? "url(#nodeGlowFsm) brightness(1.2)" : "brightness(0.95)"}
                  stroke={isSelected ? "#ffffff" : "rgba(255, 255, 255, 0.6)"}
                  strokeWidth={isSelected ? "1.8" : "1"}
                />

                {/* Station Step Number Tag */}
                <text
                  x="0"
                  y={-(h * 0.5 + d * 0.3)}
                  textAnchor="middle"
                  fontFamily="var(--studio-font-mono)"
                  fontSize="11"
                  fontWeight="900"
                  fill="#ffffff"
                >
                  {idx + 1}
                </text>

                {/* Step Name Label Below */}
                <text
                  x="0"
                  y={idx % 2 === 0 ? 32 : -42}
                  textAnchor="middle"
                  fontFamily="var(--studio-font-mono)"
                  fontSize="9.5"
                  fontWeight={isSelected ? "850" : "700"}
                  fill={isSelected ? "#ffffff" : step.color}
                >
                  {step.code}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      {/* 3. Deep Step Inspector Card */}
      <div
        style={{
          padding: "16px 18px",
          borderRadius: "8px",
          background: "rgba(15, 23, 42, 0.9)",
          border: `1.5px solid ${currentStep.color}`,
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
                color: currentStep.color,
                background: `${currentStep.color}25`,
                padding: "3px 8px",
                borderRadius: "5px",
                border: `1px solid ${currentStep.color}`,
              }}
            >
              FSM STATE: {currentStep.code}
            </span>
            <strong style={{ fontSize: "14px", color: "#ffffff" }}>
              {lang === "vi" ? currentStep.name : currentStep.nameEn}
            </strong>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <span style={{ fontSize: "11px", fontFamily: "var(--studio-font-mono)", color: "#94a3b8" }}>
              Chủ thể vận hành: <strong style={{ color: "#f8fafc" }}>{currentStep.actor}</strong>
            </span>
          </div>
        </div>

        {/* Technical Data Pipeline Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "8px" }}>
          <div style={{ background: "rgba(30, 41, 59, 0.6)", padding: "10px 12px", borderRadius: "6px", border: "1px solid #334155" }}>
            <span style={{ fontSize: "10px", color: "#94a3b8", display: "block", marginBottom: "4px" }}>CAMUNDA BPMN 2.0 EVENT</span>
            <code style={{ fontSize: "11px", color: "#38bdf8", fontFamily: "var(--studio-font-mono)" }}>{currentStep.camundaEvent}</code>
          </div>
          <div style={{ background: "rgba(30, 41, 59, 0.6)", padding: "10px 12px", borderRadius: "6px", border: "1px solid #334155" }}>
            <span style={{ fontSize: "10px", color: "#94a3b8", display: "block", marginBottom: "4px" }}>POSTGRESQL 3NF TRANSACTION MUTATION</span>
            <code style={{ fontSize: "10.5px", color: "#4ade80", fontFamily: "var(--studio-font-mono)", wordBreak: "break-all" }}>{currentStep.sqlMutation}</code>
          </div>
          <div style={{ background: "rgba(30, 41, 59, 0.6)", padding: "10px 12px", borderRadius: "6px", border: "1px solid #334155" }}>
            <span style={{ fontSize: "10px", color: "#94a3b8", display: "block", marginBottom: "4px" }}>TIÊU CHUẨN THỜI GIAN SLA</span>
            <strong style={{ fontSize: "12px", color: "#facc15", fontFamily: "var(--studio-font-mono)" }}>{currentStep.slaLimit}</strong>
          </div>
        </div>

        <p style={{ margin: 0, fontSize: "12.5px", color: "#cbd5e1", lineHeight: 1.55 }}>
          {lang === "vi" ? currentStep.descriptionVi : currentStep.descriptionEn}
        </p>
      </div>

      {/* 4. Bottom Stepper Navigation Pills */}
      <div style={{ display: "flex", gap: "6px", overflowX: "auto", paddingBottom: "4px" }}>
        {LIFECYCLE_STEPS.map((st, i) => (
          <button
            key={st.code}
            type="button"
            onClick={() => setActiveStepIndex(i)}
            style={{
              flex: 1,
              minWidth: "100px",
              padding: "7px 10px",
              borderRadius: "6px",
              border: i === activeStepIndex ? `1.5px solid ${st.color}` : "1px solid #334155",
              background: i === activeStepIndex ? `${st.color}20` : "rgba(15, 23, 42, 0.5)",
              color: i === activeStepIndex ? "#ffffff" : "#94a3b8",
              fontSize: "11px",
              fontWeight: 750,
              cursor: "pointer",
              textAlign: "left",
              whiteSpace: "nowrap",
              display: "flex",
              alignItems: "center",
              gap: "6px",
            }}
          >
            <CheckCircle2 size={12} color={st.color} />
            <span>BƯỚC {i + 1}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
