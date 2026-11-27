import { useState, useEffect } from "react";
import { AlertTriangle, Clock, Pause, Play, RotateCcw } from "lucide-react";
import type { Language } from "@/types";
import {
  ACADEMIC_THEORY_CONCEPTS,
  type TheoryConcept,
} from "@/data/theory-concepts.data";

interface Tourist25dSimulatorProps {
  lang: Language;
  onSelectConcept?: (concept: TheoryConcept) => void;
}

interface NodeDetail {
  id: string;
  name: string;
  role: string;
  spec: string;
  metric: string;
  descVi: string;
  descEn: string;
}

const TOURIST_NODES: Record<string, NodeDetail> = {
  otaIngress: {
    id: "otaIngress",
    name: "Multi-Channel OTA Ingress",
    role: "EXTERNAL CHANNELS",
    spec: "Webhook Ingestion / XML / JSON",
    metric: "Đồng bộ 4 kênh OTA < 800ms",
    descVi: "Tiếp nhận lưu lượng đặt phòng đồng thời từ Booking.com, Agoda, Traveloka và cổng đặt phòng trực tiếp của khách sạn. Chuẩn hóa payload đặt phòng về định dạng thống nhất.",
    descEn: "Ingests concurrent reservation webhooks across Booking.com, Agoda, Traveloka, and hotel direct website into normalized data structures.",
  },
  rowLock: {
    id: "rowLock",
    name: "PostgreSQL Row-level Lock",
    role: "PESSIMISTIC CONCURRENCY",
    spec: "SELECT * FROM rooms WHERE id = 101 FOR UPDATE",
    metric: "Triệt tiêu Overbooking 100% · Khóa < 2ms",
    descVi: "Cơ chế khóa dòng bi quan của PostgreSQL: Khi một kênh bắt đầu thủ tục giữ phòng, dòng dữ liệu phòng đó bị khóa độc quyền ngay lập tức. Kênh thứ hai cố gắng đặt cùng phòng sẽ bị tạm giữ hoặc báo hết phòng.",
    descEn: "PostgreSQL pessimistic row locking: Exclusively locks room record during booking flow, instantly preventing concurrent reservations across channels.",
  },
  holdTimer: {
    id: "holdTimer",
    name: "15-Minute TTL Hold Cache",
    role: "TEMPORARY INVENTORY RESERVATION",
    spec: "Redis Keyspace Notification · TTL 900s",
    metric: "Tự động nhả phòng 100% khi hết hạn",
    descVi: "Khoang giữ chỗ tạm thời 15 phút cho khách hàng nhập thông tin thẻ và thanh toán. Nếu sau 15 phút khách không thanh toán thành công, Redis bắn sự kiện hết hạn để nhả phòng lại kho trống.",
    descEn: "15-minute temporary hold buffer. If payment is not completed within 900 seconds, Redis keyspace expiration automatically releases the room back to available inventory.",
  },
  paymentWebhook: {
    id: "paymentWebhook",
    name: "VNPay / Stripe Webhook Gateway",
    role: "FINANCIAL SETTLEMENT",
    spec: "HMAC-SHA512 Signature · Webhook L7",
    metric: "Xác thực đối soát tức thì 100% khớp",
    descVi: "Tiếp nhận thông báo thanh toán thành công từ cổng thanh toán. Kiểm tra chữ ký mật mã HMAC-SHA512 để chống giả mạo giao dịch trước khi chuyển trạng thái phòng thành ĐÃ XÁC NHẬN.",
    descEn: "Validates incoming payment webhooks via HMAC-SHA512 signatures to guarantee financial integrity before transitioning reservation to CONFIRMED.",
  },
  calendarSync: {
    id: "calendarSync",
    name: "Calendar Matrix Master Sync",
    role: "REAL-TIME AVAILABILITY DISPATCH",
    spec: "PostgreSQL 16 · WebSocket Push · 500+ Keys",
    metric: "Cập nhật lưới phòng cho lễ tân < 300ms",
    descVi: "Bảng điều khiển Calendar Matrix cập nhật trạng thái phòng tức thì cho lễ tân tại 12+ cơ sở lưu trú. Tự động phát tín hiệu đóng phòng (Close Room) sang toàn bộ các kênh OTA còn lại.",
    descEn: "Instantly synchronizes front-desk Calendar Matrix grid across 12+ hotel branches, emitting close-room broadcast to all other OTA channels.",
  },
};

export function Tourist25dSimulator({ lang, onSelectConcept }: Tourist25dSimulatorProps) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [selectedNodeId, setSelectedNodeId] = useState<string>("rowLock");
  const [holdCountdown, setHoldCountdown] = useState<number>(892);
  const [isSimulateConcurrent, setIsSimulateConcurrent] = useState<boolean>(true);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setHoldCountdown((prev) => (prev > 0 ? prev - 1 : 900));
    }, 1000);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const selectedNode = TOURIST_NODES[selectedNodeId] || TOURIST_NODES.rowLock;
  const minutes = Math.floor(holdCountdown / 60);
  const seconds = holdCountdown % 60;

  return (
    <div
      style={{
        borderRadius: "14px",
        border: "1.5px solid #bbf7d0",
        background: "#ffffff",
        overflow: "hidden",
        boxShadow: "0 4px 16px rgba(15, 23, 42, 0.05)",
      }}
    >
      {/* 1. Control Header */}
      <div
        style={{
          padding: "12px 18px",
          background: "linear-gradient(180deg, #f0fdf4 0%, #dcfce7 100%)",
          borderBottom: "1.5px solid #bbf7d0",
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
              background: isPlaying ? "#16a34a" : "#0284c7",
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
            onClick={() => {
              setHoldCountdown(900);
              setIsSimulateConcurrent(true);
            }}
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

        {/* Hold Timer Widget */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <span style={{ fontSize: "12px", fontWeight: 750, color: "#166534", display: "inline-flex", alignItems: "center", gap: "4px" }}>
            <Clock size={13} color="#16a34a" /> {lang === "vi" ? "Khóa giữ phòng 15m:" : "15m Hold Timer:"}
          </span>
          <span
            style={{
              fontFamily: "var(--font-mono, monospace)",
              fontSize: "12px",
              fontWeight: 900,
              padding: "3px 10px",
              borderRadius: "6px",
              background: "#dcfce7",
              color: "#15803d",
              border: "1px solid #86efac",
            }}
          >
            {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
          </span>
        </div>

        {/* Concurrent Booking Contention Toggle */}
        <button
          type="button"
          onClick={() => setIsSimulateConcurrent((c) => !c)}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "5px",
            padding: "6px 12px",
            borderRadius: "7px",
            background: isSimulateConcurrent ? "#fee2e2" : "#ffffff",
            color: isSimulateConcurrent ? "#dc2626" : "#475569",
            fontSize: "11.5px",
            fontWeight: 800,
            border: isSimulateConcurrent ? "1.5px solid #fca5a5" : "1px solid #cbd5e1",
            cursor: "pointer",
          }}
        >
          <AlertTriangle size={13} color={isSimulateConcurrent ? "#dc2626" : "#f59e0b"} />
          <span>{isSimulateConcurrent ? (lang === "vi" ? "Thử Nghiệm: 2 Kênh Đặt Cùng Lúc" : "Overbooking Attempt Active") : (lang === "vi" ? "1 Kênh Đơn Lẻ" : "Single Booking")}</span>
        </button>
      </div>

      {/* 2. Status Strip */}
      <div
        style={{
          padding: "8px 18px",
          background: isSimulateConcurrent ? "#fef2f2" : "#f8fafc",
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
              background: isSimulateConcurrent ? "#dc2626" : "#16a34a",
              display: "inline-block",
            }}
          />
          <strong style={{ color: "#0f172a" }}>
            {isSimulateConcurrent
              ? "CHỐNG OVERBOOKING: Booking.com giữ phòng 101 (Khóa Row Lock) -> Yêu cầu từ Agoda bị từ chối an toàn"
              : "ĐỒNG BỘ BÌNH THƯỜNG: Đã chốt phòng và đồng bộ Calendar Matrix sang toàn bộ 4 kênh OTA"}
          </strong>
        </div>

        <div style={{ display: "flex", gap: "16px" }}>
          <span>QUY MÔ: <strong style={{ color: "#16a34a" }}>500+ Keys</strong></span>
          <span>TỶ LỆ OVERBOOKING: <strong style={{ color: "#16a34a" }}>0.00%</strong></span>
          <span>LẤP ĐẦY PHÒNG: <strong style={{ color: "#0284c7" }}>87.4%</strong></span>
        </div>
      </div>

      {/* 3. 2.5D Isometric SVG Engine */}
      <div
        style={{
          padding: "16px 10px",
          background: "linear-gradient(135deg, #f0fdf4 0%, #ffffff 50%, #f0fdf4 100%)",
          overflowX: "auto",
        }}
      >
        <svg
          viewBox="0 0 760 360"
          style={{ width: "100%", minWidth: "680px", height: "auto", display: "block" }}
          aria-label="Sơ đồ 2.5D Chống Overbooking Khách Sạn Tourist ERP"
        >
          <defs>
            <linearGradient id="tourFloorGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#dcfce7" stopOpacity="0.45" />
            </linearGradient>

            <linearGradient id="tourSideLeft" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#dcfce7" />
              <stop offset="100%" stopColor="#bbf7d0" />
            </linearGradient>

            <linearGradient id="tourSideRight" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#bbf7d0" />
              <stop offset="100%" stopColor="#86efac" />
            </linearGradient>

            <filter id="tourShadow" x="-20%" y="-20%" width="150%" height="150%">
              <feDropShadow dx="2" dy="4" stdDeviation="0" floodColor="#0f172a" floodOpacity="0.8" />
            </filter>
          </defs>

          {/* SÀN LƯỚI TỌA ĐỘ ISOMETRIC 2.5D */}
          <g stroke="rgba(22, 163, 74, 0.14)" strokeWidth="1" fill="none">
            <path d="M 380,25 L 720,180 L 380,335 L 40,180 Z" fill="url(#tourFloorGrad)" />
            <path d="M 380,65 L 650,180 L 380,295 L 110,180 Z" />
            <path d="M 380,105 L 580,180 L 380,255 L 180,180 Z" />
            <line x1="40" y1="180" x2="720" y2="180" strokeDasharray="4 4" />
            <line x1="380" y1="25" x2="380" y2="335" strokeDasharray="4 4" />
          </g>

          {/* CÁC ĐƯỜNG DẪN DỮ LIỆU ĐỘNG */}
          <g fill="none" strokeWidth="2.5">
            {/* OTA Channel 1 (Booking.com) -> Row Lock */}
            <path d="M 140,165 Q 220,110 320,95" stroke="#16a34a" strokeDasharray="5 4" />
            {/* OTA Channel 2 (Agoda) -> Blocked */}
            {isSimulateConcurrent && (
              <path d="M 140,195 Q 220,150 320,105" stroke="#dc2626" strokeDasharray="3 3" />
            )}
            {/* Row Lock -> 15m Hold Timer */}
            <path d="M 360,95 Q 460,70 560,95" stroke="#0284c7" />
            {/* Hold Timer -> Payment Gateway */}
            <path d="M 590,120 Q 610,190 550,240" stroke="#7c3aed" />
            {/* Payment OK -> Calendar Matrix Sync */}
            <path d="M 510,240 Q 420,260 360,260" stroke="#16a34a" />
            {/* Calendar Matrix Sync -> OTA Close Signals */}
            <path d="M 320,260 Q 240,280 180,270" stroke="#ea580c" />
          </g>

          {/* GÓI TIN ĐỘNG ANIMATED PACKETS */}
          {isPlaying && (
            <>
              {/* Booking Request 1 (Success) */}
              <circle r="5" fill="#16a34a" stroke="#ffffff" strokeWidth="1.8">
                <animateMotion path="M 140,165 Q 220,110 320,95" dur="0.9s" repeatCount="indefinite" />
              </circle>
              {/* Booking Request 2 (Rejected Overbooking) */}
              {isSimulateConcurrent && (
                <circle r="4.5" fill="#dc2626" stroke="#ffffff" strokeWidth="1.5">
                  <animateMotion path="M 140,195 Q 220,150 320,105" dur="1.1s" repeatCount="indefinite" />
                </circle>
              )}
              {/* Row Lock -> Hold */}
              <circle r="5" fill="#0284c7" stroke="#ffffff" strokeWidth="1.8">
                <animateMotion path="M 360,95 Q 460,70 560,95" dur="0.8s" repeatCount="indefinite" />
              </circle>
              {/* Payment Webhook */}
              <circle r="5" fill="#7c3aed" stroke="#ffffff" strokeWidth="1.8">
                <animateMotion path="M 590,120 Q 610,190 550,240" dur="1.0s" repeatCount="indefinite" />
              </circle>
              {/* Close Signal Broadcast */}
              <circle r="5" fill="#ea580c" stroke="#ffffff" strokeWidth="1.8">
                <animateMotion path="M 320,260 Q 240,280 180,270" dur="0.9s" repeatCount="indefinite" />
              </circle>
            </>
          )}

          {/* NODE 1: OTA INGRESS CHANNELS */}
          <g
            transform="translate(100, 180)"
            onClick={() => {
              setSelectedNodeId("otaIngress");
              onSelectConcept?.(ACADEMIC_THEORY_CONCEPTS["concept-idempotency-key"]);
            }}
            style={{ cursor: "pointer" }}
          >
            <polygon points="0,-22 42,0 0,22 -42,0" fill={selectedNodeId === "otaIngress" ? "#f0fdf4" : "#ffffff"} stroke="#16a34a" strokeWidth="2" filter="url(#tourShadow)" />
            <polygon points="-42,0 0,22 0,38 -42,16" fill="url(#tourSideLeft)" stroke="#16a34a" strokeWidth="1.5" />
            <polygon points="0,22 42,0 42,16 0,38" fill="url(#tourSideRight)" stroke="#16a34a" strokeWidth="1.5" />
            <text x="0" y="3" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="9.5" fontWeight="850" fill="#0f172a">OTA Ingress</text>
            <text x="0" y="52" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="8.5" fontWeight="800" fill="#16a34a">Booking / Agoda</text>
          </g>

          {/* NODE 2: POSTGRESQL ROW LOCK */}
          <g
            transform="translate(340, 95)"
            onClick={() => {
              setSelectedNodeId("rowLock");
              onSelectConcept?.({
                id: "concept-row-level-lock",
                badge: { vi: "KHÓA HÀNG CƠ SỞ DỮ LIỆU", en: "DATABASE ROW LOCK" },
                category: { vi: "ACID Concurrency Control", en: "ACID Concurrency Control" },
                academicStandard: "Gray & Reuter (1993) Transaction Processing · ISO/IEC 9075 SQL Serializable",
                title: {
                  vi: "Khóa Hàng Độc Quyền SELECT FOR UPDATE & Chống Overbooking",
                  en: "SELECT FOR UPDATE NOWAIT & Overbooking Elimination",
                },
                lead: {
                  vi: "Ngăn chặn hiện tượng hai giao dịch cùng đọc và sửa đổi trạng thái một phòng khách sạn tại cùng một thời điểm.",
                  en: "Preventing concurrent transactions from mutating the same hotel room inventory simultaneously.",
                },
                body: {
                  vi: "Trong các chuỗi khách sạn đa chi nhánh, bài toán Overbooking nảy sinh khi khách A và khách B cùng xem phòng Suite duy nhất. Khi khách A tiến hành bước thanh toán, câu lệnh `SELECT * FROM room_calendar WHERE room_id = $1 AND date = $2 FOR UPDATE NOWAIT` được kích hoạt. \n\nCơ sở dữ liệu PostgreSQL cấp phát khóa ghi độc quyền (Exclusive Write Lock) trên đúng dòng dữ liệu của phòng đó. Nếu khách B ấn đặt cùng lúc, câu lệnh của khách B gặp `NOWAIT` lập tức nhận phản hồi 409 Conflict mà không phải chờ treo kết nối. Phòng được bảo lưu trong 15 phút, giải phóng tự động nếu khách không nạp tiền.",
                  en: "In multi-branch hotel platforms, overbooking occurs when multiple guests attempt checkout for a singular room. Initiating checkout executes `SELECT * FROM room_calendar WHERE room_id = $1 AND date = $2 FOR UPDATE NOWAIT`. \n\nPostgreSQL locks the exact row record exclusively. Rival checkout requests fail fast with 409 Conflict instead of holding hanging thread pools. Inventory is held for a 15-minute lease, auto-expiring cleanly.",
                },
                formulaOrCode: `// Lệnh khóa phòng độc quyền trong Transaction:
BEGIN TRANSACTION ISOLATION LEVEL REPEATABLE READ;
SELECT room_id, status FROM room_inventory 
WHERE room_id = :roomId AND date = :targetDate 
FOR UPDATE NOWAIT;

UPDATE room_inventory SET status = 'HELD', hold_expires_at = NOW() + INTERVAL '15 MIN'
WHERE room_id = :roomId AND date = :targetDate;
COMMIT;`,
                keyTakeaways: {
                  vi: [
                    "Loại bỏ 100% tình trạng bán trùng phòng (Zero Overbooking) vào dịp lễ Tết cao điểm.",
                    "NOWAIT giúp từ chối tức thì (< 5ms) không làm nghẽn hàng đợi kết nối của database.",
                    "Thời gian giữ phòng 15 phút đủ để người dùng nhập mã thẻ/OTP mà không sợ mất phòng.",
                  ],
                  en: [
                    "100% elimination of double-booked rooms during high-occupancy holiday peaks.",
                    "NOWAIT short-circuits in < 5ms, preserving pool capacity against connection starvation.",
                    "15-minute lease grants guests ample checkout time without hoarding inventory indefinitely.",
                  ],
                },
              });
            }}
            style={{ cursor: "pointer" }}
          >
            <polygon points="0,-24 48,0 0,24 -48,0" fill={selectedNodeId === "rowLock" ? "#f0fdf4" : "#ffffff"} stroke="#15803d" strokeWidth="2" filter="url(#tourShadow)" />
            <polygon points="-48,0 0,24 0,42 -48,18" fill="#dcfce7" stroke="#15803d" strokeWidth="1.5" />
            <polygon points="0,24 48,0 48,18 0,42" fill="#bbf7d0" stroke="#15803d" strokeWidth="1.5" />
            <text x="0" y="3" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="9.5" fontWeight="850" fill="#14532d">Postgres RowLock</text>
            <text x="0" y="56" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="8.5" fontWeight="800" fill="#15803d">SELECT FOR UPDATE</text>
          </g>

          {/* NODE 3: 15-MINUTE HOLD CACHE */}
          <g
            transform="translate(580, 100)"
            onClick={() => {
              setSelectedNodeId("holdTimer");
              onSelectConcept?.(ACADEMIC_THEORY_CONCEPTS["concept-idempotency-key"]);
            }}
            style={{ cursor: "pointer" }}
          >
            <polygon points="0,-24 46,0 0,24 -46,0" fill={selectedNodeId === "holdTimer" ? "#eff6ff" : "#ffffff"} stroke="#0284c7" strokeWidth="2" filter="url(#tourShadow)" />
            <polygon points="-46,0 0,24 0,42 -46,18" fill="#e0f2fe" stroke="#0284c7" strokeWidth="1.5" />
            <polygon points="0,24 46,0 46,18 0,42" fill="#bae6fd" stroke="#0284c7" strokeWidth="1.5" />
            <text x="0" y="3" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="9.5" fontWeight="850" fill="#0369a1">15m Hold Timer</text>
            <text x="0" y="56" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="8.5" fontWeight="800" fill="#0284c7">TTL 900s Buffer</text>
          </g>

          {/* NODE 4: PAYMENT WEBHOOK GATEWAY */}
          <g
            transform="translate(520, 240)"
            onClick={() => {
              setSelectedNodeId("paymentWebhook");
              onSelectConcept?.(ACADEMIC_THEORY_CONCEPTS["concept-idempotency-key"]);
            }}
            style={{ cursor: "pointer" }}
          >
            <polygon points="0,-22 44,0 0,22 -44,0" fill={selectedNodeId === "paymentWebhook" ? "#faf5ff" : "#ffffff"} stroke="#7c3aed" strokeWidth="2" filter="url(#tourShadow)" />
            <polygon points="-44,0 0,22 0,38 -44,16" fill="#ede9fe" stroke="#7c3aed" strokeWidth="1.5" />
            <polygon points="0,22 44,0 44,16 0,38" fill="#ddd6fe" stroke="#7c3aed" strokeWidth="1.5" />
            <text x="0" y="3" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="9.5" fontWeight="850" fill="#5b21b6">VNPay Webhook</text>
            <text x="0" y="52" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="8.5" fontWeight="800" fill="#7c3aed">HMAC-SHA512 OK</text>
          </g>

          {/* NODE 5: CALENDAR MATRIX SYNC */}
          <g
            transform="translate(340, 260)"
            onClick={() => {
              setSelectedNodeId("calendarSync");
              onSelectConcept?.(ACADEMIC_THEORY_CONCEPTS["concept-3nf-normalization"]);
            }}
            style={{ cursor: "pointer" }}
          >
            <polygon points="0,-24 46,0 0,24 -46,0" fill={selectedNodeId === "calendarSync" ? "#f0fdf4" : "#ffffff"} stroke="#16a34a" strokeWidth="2" filter="url(#tourShadow)" />
            <polygon points="-46,0 0,24 0,42 -46,18" fill="#dcfce7" stroke="#16a34a" strokeWidth="1.5" />
            <polygon points="0,24 46,0 46,18 0,42" fill="#bbf7d0" stroke="#16a34a" strokeWidth="1.5" />
            <text x="0" y="3" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="9.5" fontWeight="850" fill="#14532d">Calendar Matrix</text>
            <text x="0" y="56" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="8.5" fontWeight="800" fill="#16a34a">Close-Room Sync</text>
          </g>
        </svg>
      </div>

      {/* 4. Technical Spec Footer */}
      <div style={{ padding: "16px 20px", background: "#ffffff", borderTop: "1.5px solid #d8e6f5" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "8px", flexWrap: "wrap", gap: "8px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "10.5px", fontWeight: 800, padding: "2px 8px", borderRadius: "4px", background: "#dcfce7", color: "#15803d", border: "1px solid #86efac" }}>
              {selectedNode.role}
            </span>
            <strong style={{ fontSize: "14px", color: "#0f172a" }}>{selectedNode.name}</strong>
          </div>
          <div style={{ display: "flex", gap: "8px", fontSize: "11px", fontFamily: "var(--font-mono)" }}>
            <span style={{ color: "#64748b" }}>Cơ chế: <strong style={{ color: "#0f172a" }}>{selectedNode.spec}</strong></span>
            <span style={{ color: "#64748b" }}>SLA: <strong style={{ color: "#16a34a" }}>{selectedNode.metric}</strong></span>
          </div>
        </div>
        <p style={{ margin: 0, fontSize: "12.5px", color: "#475569", lineHeight: 1.6 }}>
          {lang === "vi" ? selectedNode.descVi : selectedNode.descEn}
        </p>
      </div>
    </div>
  );
}

export default Tourist25dSimulator;
