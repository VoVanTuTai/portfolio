import { useState } from "react";
import { Compass, Pause, Play, RotateCcw, Users2 } from "lucide-react";
import type { Language } from "@/types";

interface Cab25dSimulatorProps {
  lang: Language;
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

const CAB_NODES: Record<string, NodeDetail> = {
  rider: {
    id: "rider",
    name: "Rider Booking Client",
    role: "PASSENGER INGRESS",
    spec: "React Native / GPS Location Services",
    metric: "Thời gian tạo yêu cầu < 1.2s",
    descVi: "Ứng dụng hành khách gửi yêu cầu đặt xe kèm tọa độ đón (lat, lon) và điểm đến. Tạo mã chuyến đi ride_uuid duy nhất và kết nối luồng WebSocket theo dõi tài xế.",
    descEn: "Passenger mobile app sending pickup/dropoff GPS coordinates, generating ride_uuid, and subscribing to real-time driver telemetry.",
  },
  haversine: {
    id: "haversine",
    name: "Haversine Spatial Engine",
    role: "GEO MATCHING & ROUTING",
    spec: "C++ Addon / Node.js Microservice",
    metric: "Quét 1.000 tài xế < 12ms",
    descVi: "Tính toán khoảng cách cung lớn giữa vị trí khách và các tài xế trực tuyến trong bán kính 3.5km. Sắp xếp thứ tự ưu tiên theo thời gian ước tính (ETA) và điểm đánh giá rating.",
    descEn: "Calculates great-circle distance between rider and active drivers within 3.5km radius. Ranks candidates by ETA and driver ratings.",
  },
  redisLock: {
    id: "redisLock",
    name: "Redis Ride Claim Lock",
    role: "DISTRIBUTED CONCURRENCY",
    spec: "Redis Cluster · Atomic SETNX ride:claim:{id}",
    metric: "Ngăn chặn xung đột 100% · TTL 10s",
    descVi: "Giải quyết bài toán 2 tài xế cùng bấm nhận cuốc xe trong cùng 1 mili-giây: Lệnh SETNX độc quyền gán cuốc cho tài xế gửi trước 5ms. Tài xế thứ hai nhận ngay HTTP 409 Conflict.",
    descEn: "Resolves race conditions where two drivers tap Accept simultaneously: Atomic SETNX grants ride to the first millisecond request while returning HTTP 409 to the second.",
  },
  socketCluster: {
    id: "socketCluster",
    name: "Socket.io Broadcast Fleet",
    role: "REAL-TIME FLEET TELEMETRY",
    spec: "Socket.io Redis Adapter · WebSocket L4",
    metric: "Độ trễ phát sóng < 60ms",
    descVi: "Phát sóng thông báo cuốc xe đồng loạt tới 5-8 tài xế phù hợp gần nhất theo cụm địa lý. Khi có tài xế nhận, lập tức phát lệnh hủy (cancel event) tới các tài xế còn lại.",
    descEn: "Broadcasts ride offers to the top 5-8 nearest drivers. As soon as one driver accepts, emits instant cancel signals to the remaining drivers.",
  },
  rideActive: {
    id: "rideActive",
    name: "Dispatch Master State",
    role: "POSTGRESQL TRANSACTION",
    spec: "PostgreSQL 16 · Row-level Lock · ACID",
    metric: "Khớp lệnh & hoàn tất dispatch < 2.5s",
    descVi: "Ghi nhận trạng thái chính thức: RIDE_ACCEPTED, lập lịch đón, tính cước động theo hệ số giờ cao điểm (Surge Pricing) và kích hoạt theo dõi hành trình xe chạy.",
    descEn: "Commits official transaction state: RIDE_ACCEPTED, schedules ETA, applies dynamic surge pricing multiplier, and starts trip GPS logging.",
  },
};

export function Cab25dSimulator({ lang }: Cab25dSimulatorProps) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [radiusKm, setRadiusKm] = useState(3.5);
  const [isContention, setIsContention] = useState(true);
  const [selectedNodeId, setSelectedNodeId] = useState<string>("redisLock");

  const selectedNode = CAB_NODES[selectedNodeId] || CAB_NODES.redisLock;

  return (
    <div
      style={{
        borderRadius: "14px",
        border: "1.5px solid #bae6fd",
        background: "#ffffff",
        overflow: "hidden",
        boxShadow: "0 4px 16px rgba(15, 23, 42, 0.05)",
      }}
    >
      {/* 1. Control Header */}
      <div
        style={{
          padding: "12px 18px",
          background: "linear-gradient(180deg, #f0f9ff 0%, #e0f2fe 100%)",
          borderBottom: "1.5px solid #bae6fd",
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
              background: isPlaying ? "#0284c7" : "#059669",
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
              setRadiusKm(3.5);
              setIsContention(true);
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

        {/* Radius Slider */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <span style={{ fontSize: "12px", fontWeight: 750, color: "#334155", display: "inline-flex", alignItems: "center", gap: "4px" }}>
            <Compass size={13} color="#0284c7" /> {lang === "vi" ? "Bán kính quét:" : "Search Radius:"}
          </span>
          <input
            type="range"
            min="1.0"
            max="6.0"
            step="0.5"
            value={radiusKm}
            onChange={(e) => setRadiusKm(Number(e.target.value))}
            style={{ width: "100px", cursor: "pointer", accentColor: "#0284c7" }}
          />
          <span
            style={{
              fontFamily: "var(--font-mono, monospace)",
              fontSize: "11.5px",
              fontWeight: 850,
              padding: "2px 8px",
              borderRadius: "5px",
              background: "#e0f2fe",
              color: "#0369a1",
              border: "1px solid #bae6fd",
            }}
          >
            {radiusKm.toFixed(1)} km
          </span>
        </div>

        {/* Contention Toggle */}
        <button
          type="button"
          onClick={() => setIsContention((c) => !c)}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "5px",
            padding: "6px 12px",
            borderRadius: "7px",
            background: isContention ? "#fef3c7" : "#ffffff",
            color: isContention ? "#b45309" : "#475569",
            fontSize: "11.5px",
            fontWeight: 800,
            border: isContention ? "1.5px solid #fde68a" : "1px solid #cbd5e1",
            cursor: "pointer",
          }}
        >
          <Users2 size={13} color={isContention ? "#d97706" : "#64748b"} />
          <span>{isContention ? (lang === "vi" ? "Tranh Chấp: 2 Tài Xế Cùng Bấm" : "Race Condition Active") : (lang === "vi" ? "1 Tài Xế Nhận Đơn" : "Single Driver")}</span>
        </button>
      </div>

      {/* 2. Status Strip */}
      <div
        style={{
          padding: "8px 18px",
          background: isContention ? "#fffbeb" : "#f8fafc",
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
              background: isContention ? "#f59e0b" : "#16a34a",
              display: "inline-block",
            }}
          />
          <strong style={{ color: "#0f172a" }}>
            {isContention
              ? "THỰC NGHIỆM RACE CONDITION: Tài xế A nhận trước 5ms (Khóa OK) ➔ Tài xế B nhận mã HTTP 409 Conflict"
              : "ĐIỀU PHỐI TIÊU CHUẨN: Khớp lệnh Haversine & gán tài xế tối ưu trong 2.1 giây"}
          </strong>
        </div>

        <div style={{ display: "flex", gap: "16px" }}>
          <span>THỜI GIAN KHỚP: <strong style={{ color: "#0284c7" }}>&lt; 2.5s</strong></span>
          <span>XUNG ĐỘT: <strong style={{ color: "#16a34a" }}>0 Cuốc</strong></span>
          <span>ĐÁNH GIÁ: <strong style={{ color: "#16a34a" }}>4.9 / 5.0 ★</strong></span>
        </div>
      </div>

      {/* 3. 2.5D Isometric SVG Engine */}
      <div
        style={{
          padding: "16px 10px",
          background: "linear-gradient(135deg, #f8fafc 0%, #ffffff 50%, #f0f9ff 100%)",
          overflowX: "auto",
        }}
      >
        <svg
          viewBox="0 0 760 360"
          style={{ width: "100%", minWidth: "680px", height: "auto", display: "block" }}
          aria-label="Sơ đồ 2.5D Điều vận gọi xe Cab Booking Dispatch"
        >
          <defs>
            <linearGradient id="cabFloorGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#e0f2fe" stopOpacity="0.45" />
            </linearGradient>

            <linearGradient id="cabSideLeft" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#e0f2fe" />
              <stop offset="100%" stopColor="#bae6fd" />
            </linearGradient>

            <linearGradient id="cabSideRight" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#bae6fd" />
              <stop offset="100%" stopColor="#7dd3fc" />
            </linearGradient>

            <filter id="cabShadow" x="-20%" y="-20%" width="150%" height="150%">
              <feDropShadow dx="2" dy="4" stdDeviation="0" floodColor="#0f172a" floodOpacity="0.8" />
            </filter>
          </defs>

          {/* SÀN LƯỚI TỌA ĐỘ ISOMETRIC 2.5D */}
          <g stroke="rgba(2, 132, 199, 0.14)" strokeWidth="1" fill="none">
            <path d="M 380,25 L 720,180 L 380,335 L 40,180 Z" fill="url(#cabFloorGrad)" />
            <path d="M 380,65 L 650,180 L 380,295 L 110,180 Z" />
            <path d="M 380,105 L 580,180 L 380,255 L 180,180 Z" />
            <line x1="40" y1="180" x2="720" y2="180" strokeDasharray="4 4" />
            <line x1="380" y1="25" x2="380" y2="335" strokeDasharray="4 4" />
          </g>

          {/* CÁC ĐƯỜNG DẪN DỮ LIỆU */}
          <g fill="none" strokeWidth="2.5">
            {/* Rider -> Haversine */}
            <path d="M 140,180 Q 200,120 270,110" stroke="#0284c7" strokeDasharray="5 4" />
            {/* Haversine -> Socket.io Broadcast */}
            <path d="M 310,110 Q 420,90 530,95" stroke="#7c3aed" />
            {/* Socket.io -> Driver A */}
            <path d="M 570,120 Q 610,180 570,240" stroke="#059669" />
            {/* Driver A Claim -> Redis Lock */}
            <path d="M 530,240 Q 450,220 390,260" stroke="#059669" />
            {/* Driver B Claim -> Rejected */}
            {isContention && (
              <path d="M 550,260 Q 470,290 390,270" stroke="#dc2626" strokeDasharray="3 3" />
            )}
            {/* Confirmed -> Trip Active */}
            <path d="M 350,265 Q 280,290 220,280" stroke="#ea580c" />
          </g>

          {/* GÓI TIN ĐỘNG ANIMATED PACKETS */}
          {isPlaying && (
            <>
              {/* Booking Request */}
              <circle r="5" fill="#0284c7" stroke="#ffffff" strokeWidth="1.8">
                <animateMotion path="M 140,180 Q 200,120 270,110" dur="0.9s" repeatCount="indefinite" />
              </circle>
              {/* Geo Search Broadcast */}
              <circle r="5" fill="#7c3aed" stroke="#ffffff" strokeWidth="1.8">
                <animateMotion path="M 310,110 Q 420,90 530,95" dur="0.8s" repeatCount="indefinite" />
              </circle>
              {/* Driver 1 Claim Lock OK */}
              <circle r="5" fill="#059669" stroke="#ffffff" strokeWidth="1.8">
                <animateMotion path="M 530,240 Q 450,220 390,260" dur="1.1s" repeatCount="indefinite" />
              </circle>
              {/* Driver 2 Collision Rejected */}
              {isContention && (
                <circle r="4.5" fill="#dc2626" stroke="#ffffff" strokeWidth="1.5">
                  <animateMotion path="M 550,260 Q 470,290 390,270" dur="1.2s" repeatCount="indefinite" />
                </circle>
              )}
            </>
          )}

          {/* NODE 1: RIDER APP */}
          <g transform="translate(100, 180)" onClick={() => setSelectedNodeId("rider")} style={{ cursor: "pointer" }}>
            <polygon points="0,-22 42,0 0,22 -42,0" fill={selectedNodeId === "rider" ? "#eff6ff" : "#ffffff"} stroke="#0284c7" strokeWidth="2" filter="url(#cabShadow)" />
            <polygon points="-42,0 0,22 0,38 -42,16" fill="url(#cabSideLeft)" stroke="#0284c7" strokeWidth="1.5" />
            <polygon points="0,22 42,0 42,16 0,38" fill="url(#cabSideRight)" stroke="#0284c7" strokeWidth="1.5" />
            <text x="0" y="3" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="9.5" fontWeight="850" fill="#0f172a">Rider Client</text>
            <text x="0" y="52" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="8.5" fontWeight="800" fill="#0284c7">GPS Origin</text>
          </g>

          {/* NODE 2: HAVERSINE ENGINE */}
          <g transform="translate(290, 110)" onClick={() => setSelectedNodeId("haversine")} style={{ cursor: "pointer" }}>
            <polygon points="0,-24 46,0 0,24 -46,0" fill={selectedNodeId === "haversine" ? "#faf5ff" : "#ffffff"} stroke="#7c3aed" strokeWidth="2" filter="url(#cabShadow)" />
            <polygon points="-46,0 0,24 0,42 -46,18" fill="#ede9fe" stroke="#7c3aed" strokeWidth="1.5" />
            <polygon points="0,24 46,0 46,18 0,42" fill="#ddd6fe" stroke="#7c3aed" strokeWidth="1.5" />
            <text x="0" y="3" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="9.5" fontWeight="850" fill="#5b21b6">Haversine Match</text>
            <text x="0" y="56" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="8.5" fontWeight="800" fill="#7c3aed">Radius {radiusKm}km</text>
          </g>

          {/* NODE 3: SOCKET.IO FLEET BROADCAST */}
          <g transform="translate(560, 95)" onClick={() => setSelectedNodeId("socketCluster")} style={{ cursor: "pointer" }}>
            <polygon points="0,-24 48,0 0,24 -48,0" fill={selectedNodeId === "socketCluster" ? "#f0fdf4" : "#ffffff"} stroke="#059669" strokeWidth="2" filter="url(#cabShadow)" />
            <polygon points="-48,0 0,24 0,42 -48,18" fill="#d1fae5" stroke="#059669" strokeWidth="1.5" />
            <polygon points="0,24 48,0 48,18 0,42" fill="#a7f3d0" stroke="#059669" strokeWidth="1.5" />
            <text x="0" y="3" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="9.5" fontWeight="850" fill="#065f46">Socket Fleet</text>
            <text x="0" y="56" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="8.5" fontWeight="800" fill="#059669">Broadcast 8 Pods</text>
          </g>

          {/* NODE 4: REDIS DISTRIBUTED LOCK */}
          <g transform="translate(420, 260)" onClick={() => setSelectedNodeId("redisLock")} style={{ cursor: "pointer" }}>
            <polygon points="0,-24 48,0 0,24 -48,0" fill={selectedNodeId === "redisLock" ? "#fef3c7" : "#ffffff"} stroke="#d97706" strokeWidth="2" filter="url(#cabShadow)" />
            <polygon points="-48,0 0,24 0,42 -48,18" fill="#fef3c7" stroke="#d97706" strokeWidth="1.5" />
            <polygon points="0,24 48,0 48,18 0,42" fill="#fde68a" stroke="#d97706" strokeWidth="1.5" />
            <text x="0" y="3" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="9.5" fontWeight="850" fill="#92400e">Redis SETNX</text>
            <text x="0" y="56" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="8.5" fontWeight="800" fill="#d97706">Claim Lock TTL 10s</text>
          </g>

          {/* NODE 5: TRIP ACTIVE & DISPATCH STATE */}
          <g transform="translate(200, 280)" onClick={() => setSelectedNodeId("rideActive")} style={{ cursor: "pointer" }}>
            <polygon points="0,-22 44,0 0,22 -44,0" fill={selectedNodeId === "rideActive" ? "#fff7ed" : "#ffffff"} stroke="#ea580c" strokeWidth="2" filter="url(#cabShadow)" />
            <polygon points="-44,0 0,22 0,38 -44,16" fill="#ffedd5" stroke="#ea580c" strokeWidth="1.5" />
            <polygon points="0,22 44,0 44,16 0,38" fill="#fed7aa" stroke="#ea580c" strokeWidth="1.5" />
            <text x="0" y="3" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="9.5" fontWeight="850" fill="#9a3412">Trip Active</text>
            <text x="0" y="52" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="8.5" fontWeight="800" fill="#ea580c">Postgres ACID</text>
          </g>
        </svg>
      </div>

      {/* 4. Technical Spec Footer */}
      <div style={{ padding: "16px 20px", background: "#ffffff", borderTop: "1.5px solid #d8e6f5" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "8px", flexWrap: "wrap", gap: "8px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "10.5px", fontWeight: 800, padding: "2px 8px", borderRadius: "4px", background: "#e0f2fe", color: "#0369a1", border: "1px solid #bae6fd" }}>
              {selectedNode.role}
            </span>
            <strong style={{ fontSize: "14px", color: "#0f172a" }}>{selectedNode.name}</strong>
          </div>
          <div style={{ display: "flex", gap: "8px", fontSize: "11px", fontFamily: "var(--font-mono)" }}>
            <span style={{ color: "#64748b" }}>Cấu hình: <strong style={{ color: "#0f172a" }}>{selectedNode.spec}</strong></span>
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

export default Cab25dSimulator;
