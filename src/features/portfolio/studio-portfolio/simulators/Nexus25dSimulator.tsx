import { useState } from "react";
import { Activity, AlertTriangle, Pause, Play, RotateCcw } from "lucide-react";
import type { Language } from "@/types";

interface Nexus25dSimulatorProps {
  lang: Language;
}

interface NodeDetail {
  id: string;
  name: string;
  nameEn: string;
  role: string;
  protocol: string;
  sla: string;
  description: string;
  descriptionEn: string;
}

const NEXUS_NODES: Record<string, NodeDetail> = {
  courier: {
    id: "courier",
    name: "Courier App (Shipper)",
    nameEn: "Courier Mobile App",
    role: "CLIENT / EDGE INGRESS",
    protocol: "HTTPS / TLS 1.3 · SQLite Offline Queue",
    sla: "FCP < 800ms · Offline-first sync",
    description: "Ứng dụng di động của 1.200+ tài xế giao nhận. Hỗ trợ quét mã vạch bưu kiện bằng camera, tự động gắn GPS và sinh mã Idempotency-Key UUIDv4 duy nhất cho mỗi lượt quét để phòng ngừa mạng chập chờn.",
    descriptionEn: "Mobile app for 1,200+ field delivery couriers. Scans barcodes, attaches GPS coordinates, and assigns unique Idempotency-Key UUIDv4 to eliminate duplicate submissions under flaky 4G networks.",
  },
  gateway: {
    id: "gateway",
    name: "API Gateway (Fastify Cluster)",
    nameEn: "API Gateway (Fastify Engine)",
    role: "ROUTING & RATE LIMITING",
    protocol: "HTTP/2 Multiplexing · OpenAPI 3.0",
    sla: "P99 Overhead < 6ms · 25,000 RPS",
    description: "Cổng tiếp nhận lưu lượng tập trung xây dựng trên NestJS Fastify Engine. Xác thực JWT chữ ký số, áp dụng Rate Limiting chống spam quét, kiểm tra tính hợp lệ của Idempotency-Key trước khi cho phép dữ liệu đi sâu vào hệ thống.",
    descriptionEn: "High-throughput ingress built on NestJS Fastify. Verifies JWT signatures, enforces rate limiting, and validates Idempotency-Key headers before forwarding to downstream microservices.",
  },
  redis: {
    id: "redis",
    name: "Redis Distributed Lock",
    nameEn: "Redis Distributed Lock Cluster",
    role: "CONCURRENCY CONTROL",
    protocol: "Redis Cluster 7.2 · In-Memory Atomic SETNX",
    sla: "Độ trễ thao tác RAM < 0.8ms",
    description: "Cơ chế khóa phân tán giải quyết triệt để lỗi Race Condition: Khi nhận quét, Redis thực thi lệnh nguyên tử SETNX lock:scan:{id} với TTL 60 giây. Mọi thao tác bấm trùng 2-3 lần đều bị chặn đứng tức thì với phản hồi 409 Conflict.",
    descriptionEn: "Distributed locking preventing race conditions: Executes atomic SETNX lock:scan:{id} with 60s TTL. Duplicate clicks within milliseconds are immediately intercepted and returned 409 Conflict.",
  },
  camunda: {
    id: "camunda",
    name: "Camunda BPMN State Machine",
    nameEn: "Camunda BPMN 2.0 Engine",
    role: "PROCESS ORCHESTRATION",
    protocol: "BPMN 2.0 State Machine · Camunda Zeebe",
    sla: "Chính xác 100% · Không nhảy cóc trạng thái",
    description: "Bộ điều phối quy trình vòng đời bưu kiện 7 bước: ORDER_CREATED ➔ PICKED_UP ➔ HUB_ARRIVED ➔ IN_TRANSIT ➔ OUT_FOR_DELIVERY ➔ DELIVERED ➔ COD_RECONCILED. Bảo đảm luân chuyển trạng thái tuân thủ luật nghiệp vụ logistics.",
    descriptionEn: "Enforces deterministic 7-step parcel state transitions: ORDER_CREATED ➔ PICKED_UP ➔ HUB_ARRIVED ➔ IN_TRANSIT ➔ OUT_FOR_DELIVERY ➔ DELIVERED ➔ COD_RECONCILED without state skips.",
  },
  postgres: {
    id: "postgres",
    name: "PostgreSQL Master (3NF ACID)",
    nameEn: "PostgreSQL Master Cluster (3NF)",
    role: "SINGLE SOURCE OF TRUTH",
    protocol: "PostgreSQL 16 · B-Tree Index · WAL Streaming",
    sla: "Cam kết toàn vẹn ACID 100% · Scan < 1.5ms",
    description: "Cơ sở dữ liệu quan hệ chuẩn hóa 3NF lưu trữ thực thể bưu kiện, sự kiện quét và bảng kê thu hộ COD. Áp dụng cơ chế khóa dòng bi quan (Pessimistic Row Lock) khi cập nhật tài chính, triệt tiêu hoàn toàn sai lệch số dư.",
    descriptionEn: "Relational single source of truth in 3NF schema. Stores parcel records, scan audit trails, and COD collections. Uses pessimistic row-level locking for financial operations.",
  },
  leaflet: {
    id: "leaflet",
    name: "Leaflet GPS Telemetry Map",
    nameEn: "Leaflet Realtime Map Telemetry",
    role: "TELEMETRY & VISUALIZATION",
    protocol: "WebSocket / SSE · GeoJSON Polygon",
    sla: "Cập nhật vị trí < 500ms · 99.9% uptime",
    description: "Bản đồ thời gian thực hiển thị mạng lưới trạm trung chuyển (Hubs) và lộ trình di chuyển của xe tải liên tỉnh. Đang chạy thực tế tại tracking.nexus-ex.site phục vụ khách hàng tra cứu tiến độ bưu kiện.",
    descriptionEn: "Interactive real-time map displaying hub network and inter-provincial truck dispatch telemetry. Live in production at tracking.nexus-ex.site for public shipment tracking.",
  },
};

export function Nexus25dSimulator({ lang }: Nexus25dSimulatorProps) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [rps, setRps] = useState(1200);
  const [isChaosActive, setIsChaosActive] = useState(false);
  const [selectedNodeId, setSelectedNodeId] = useState<string>("redis");

  const selectedNode = NEXUS_NODES[selectedNodeId] || NEXUS_NODES.redis;
  const isCongested = rps > 2500 || isChaosActive;
  const currentP50 = isChaosActive ? 180 : isCongested ? 75 : 18;
  const currentP99 = isChaosActive ? 850 : isCongested ? 240 : 42;
  const currentCpu = isChaosActive ? 92 : Math.min(88, Math.round(20 + (rps / 3500) * 50));

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
        {/* Playback Controls */}
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
            onClick={() => {
              setRps(1200);
              setIsChaosActive(false);
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
            title="Khôi phục trạng thái chuẩn"
          >
            <RotateCcw size={12} />
            <span>{lang === "vi" ? "Đặt lại" : "Reset"}</span>
          </button>
        </div>

        {/* Traffic Speed Slider */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <span style={{ fontSize: "12px", fontWeight: 750, color: "#334155", display: "inline-flex", alignItems: "center", gap: "4px" }}>
            <Activity size={13} color="#2563eb" /> {lang === "vi" ? "Lưu lượng quét:" : "Traffic RPS:"}
          </span>
          <input
            type="range"
            min="200"
            max="3500"
            step="100"
            value={rps}
            onChange={(e) => setRps(Number(e.target.value))}
            style={{ width: "120px", cursor: "pointer", accentColor: "#2563eb" }}
          />
          <span
            style={{
              fontFamily: "var(--font-mono, monospace)",
              fontSize: "11.5px",
              fontWeight: 850,
              padding: "2px 8px",
              borderRadius: "5px",
              background: isCongested ? "#fef3c7" : "#e0f2fe",
              color: isCongested ? "#b45309" : "#0369a1",
              border: `1px solid ${isCongested ? "#fde68a" : "#bae6fd"}`,
            }}
          >
            {rps.toLocaleString()} req/s
          </span>
        </div>

        {/* Chaos Simulation Button */}
        <button
          type="button"
          onClick={() => setIsChaosActive((c) => !c)}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "5px",
            padding: "6px 12px",
            borderRadius: "7px",
            background: isChaosActive ? "#fee2e2" : "#ffffff",
            color: isChaosActive ? "#dc2626" : "#475569",
            fontSize: "11.5px",
            fontWeight: 800,
            border: isChaosActive ? "1.5px solid #fca5a5" : "1px solid #cbd5e1",
            cursor: "pointer",
          }}
        >
          <AlertTriangle size={13} color={isChaosActive ? "#dc2626" : "#f59e0b"} />
          <span>{isChaosActive ? (lang === "vi" ? "Đang Giả Lập Mạng Lag" : "Chaos Injected") : (lang === "vi" ? "Giả Lập Mạng Lag" : "Simulate Flaky 4G")}</span>
        </button>
      </div>

      {/* 2. Real-time Telemetry Strip */}
      <div
        style={{
          padding: "8px 18px",
          background: isChaosActive ? "#fef2f2" : "#f8fafc",
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
              background: isChaosActive ? "#dc2626" : isCongested ? "#f59e0b" : "#16a34a",
              display: "inline-block",
              boxShadow: "0 0 6px rgba(22, 163, 74, 0.4)",
            }}
          />
          <strong style={{ color: "#0f172a" }}>
            {isChaosActive
              ? "CẢNH BÁO: Mạng 4G Chập Chờn — Kích Hoạt SQLite Queue & Redis Lock 60s"
              : isCongested
                ? "LƯU LƯỢNG CAO: Tự Động Kích Hoạt Fastify Cluster Worker Pods"
                : "HỆ THỐNG ỔN ĐỊNH: Camunda BPMN 2.0 & Redis Distributed Lock Hoạt Động"}
          </strong>
        </div>

        <div style={{ display: "flex", gap: "16px" }}>
          <span>P50: <strong style={{ color: "#2563eb" }}>{currentP50}ms</strong></span>
          <span>P99: <strong style={{ color: currentP99 > 200 ? "#dc2626" : "#059669" }}>{currentP99}ms</strong></span>
          <span>CPU: <strong style={{ color: currentCpu > 80 ? "#dc2626" : "#0f172a" }}>{currentCpu}%</strong></span>
          <span>TRÙNG ĐƠN: <strong style={{ color: "#16a34a" }}>0.00%</strong></span>
        </div>
      </div>

      {/* 3. 2.5D Isometric SVG Canvas Engine */}
      <div
        style={{
          padding: "16px 10px",
          background: "linear-gradient(135deg, #f0f7ff 0%, #ffffff 50%, #eff6ff 100%)",
          position: "relative",
          overflowX: "auto",
        }}
      >
        <svg
          viewBox="0 0 760 360"
          style={{ width: "100%", minWidth: "680px", height: "auto", display: "block" }}
          aria-label="Sơ đồ kiến trúc 2.5D Nexus Express"
        >
          <defs>
            <linearGradient id="nexusFloorGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#dbeafe" stopOpacity="0.5" />
            </linearGradient>

            <linearGradient id="nexusSideLeft" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#dbeafe" />
              <stop offset="100%" stopColor="#bfdbfe" />
            </linearGradient>

            <linearGradient id="nexusSideRight" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#bfdbfe" />
              <stop offset="100%" stopColor="#93c5fd" />
            </linearGradient>

            <filter id="nexusShadow" x="-20%" y="-20%" width="150%" height="150%">
              <feDropShadow dx="2" dy="4" stdDeviation="0" floodColor="#0f172a" floodOpacity="0.8" />
            </filter>
          </defs>

          {/* SÀN LƯỚI TỌA ĐỘ ISOMETRIC 2.5D */}
          <g stroke="rgba(37, 99, 235, 0.14)" strokeWidth="1" fill="none">
            <path d="M 380,25 L 720,180 L 380,335 L 40,180 Z" fill="url(#nexusFloorGrad)" />
            <path d="M 380,65 L 650,180 L 380,295 L 110,180 Z" />
            <path d="M 380,105 L 580,180 L 380,255 L 180,180 Z" />
            <line x1="40" y1="180" x2="720" y2="180" strokeDasharray="4 4" />
            <line x1="380" y1="25" x2="380" y2="335" strokeDasharray="4 4" />
          </g>

          {/* CÁC ĐƯỜNG DẪN DỮ LIỆU ĐỘNG */}
          <g fill="none" strokeWidth="2.5">
            {/* Courier -> Gateway */}
            <path d="M 140,180 Q 200,140 250,120" stroke="#2563eb" strokeDasharray="5 4" id="pathCourierGateway" />
            {/* Gateway -> Redis */}
            <path d="M 290,110 Q 350,90 400,85" stroke="#7c3aed" id="pathGatewayRedis" />
            {/* Gateway -> Camunda */}
            <path d="M 290,125 Q 420,150 540,135" stroke="#059669" id="pathGatewayCamunda" />
            {/* Camunda -> Postgres */}
            <path d="M 570,165 Q 520,240 435,260" stroke="#0284c7" strokeDasharray="4 4" id="pathCamundaPostgres" />
            {/* Postgres -> Leaflet */}
            <path d="M 390,265 Q 320,290 260,280" stroke="#ea580c" id="pathPostgresLeaflet" />
          </g>

          {/* GÓI TIN DI CHUYỂN ANIMATED PACKETS */}
          {isPlaying && (
            <>
              {/* Scan Packet: Courier -> Gateway */}
              <circle r="5" fill="#2563eb" stroke="#ffffff" strokeWidth="1.8">
                <animateMotion path="M 140,180 Q 200,140 250,120" dur={isChaosActive ? "1.8s" : "0.9s"} repeatCount="indefinite" />
              </circle>
              {/* Lock Packet: Gateway -> Redis */}
              <circle r="5" fill="#7c3aed" stroke="#ffffff" strokeWidth="1.8">
                <animateMotion path="M 290,110 Q 350,90 400,85" dur={isChaosActive ? "1.4s" : "0.7s"} repeatCount="indefinite" />
              </circle>
              {/* State Transition: Gateway -> Camunda */}
              <circle r="5" fill="#059669" stroke="#ffffff" strokeWidth="1.8">
                <animateMotion path="M 290,125 Q 420,150 540,135" dur="1.1s" repeatCount="indefinite" />
              </circle>
              {/* Persistence Commit: Camunda -> Postgres */}
              <circle r="5" fill="#0284c7" stroke="#ffffff" strokeWidth="1.8">
                <animateMotion path="M 570,165 Q 520,240 435,260" dur="1.3s" repeatCount="indefinite" />
              </circle>
              {/* Telemetry Stream: Postgres -> Leaflet */}
              <circle r="5" fill="#ea580c" stroke="#ffffff" strokeWidth="1.8">
                <animateMotion path="M 390,265 Q 320,290 260,280" dur="1.0s" repeatCount="indefinite" />
              </circle>
            </>
          )}

          {/* ================================================================
              NODE 1: COURIER APP (SHIPPERS)
              ================================================================ */}
          <g
            transform="translate(100, 180)"
            onClick={() => setSelectedNodeId("courier")}
            style={{ cursor: "pointer" }}
          >
            <polygon
              points="0,-22 42,0 0,22 -42,0"
              fill={selectedNodeId === "courier" ? "#eff6ff" : "#ffffff"}
              stroke="#2563eb"
              strokeWidth={selectedNodeId === "courier" ? 2.5 : 1.8}
              filter="url(#nexusShadow)"
            />
            <polygon points="-42,0 0,22 0,38 -42,16" fill="url(#nexusSideLeft)" stroke="#2563eb" strokeWidth="1.5" />
            <polygon points="0,22 42,0 42,16 0,38" fill="url(#nexusSideRight)" stroke="#2563eb" strokeWidth="1.5" />
            <text x="0" y="3" textAnchor="middle" fontFamily="var(--studio-font-mono, monospace)" fontSize="9.5" fontWeight="850" fill="#0f172a">
              Courier App
            </text>
            <text x="0" y="52" textAnchor="middle" fontFamily="var(--studio-font-mono, monospace)" fontSize="8.5" fontWeight="800" fill="#2563eb">
              1.2K Shippers
            </text>
          </g>

          {/* ================================================================
              NODE 2: API GATEWAY (FASTIFY CLUSTER)
              ================================================================ */}
          <g
            transform="translate(270, 115)"
            onClick={() => setSelectedNodeId("gateway")}
            style={{ cursor: "pointer" }}
          >
            <polygon
              points="0,-24 46,0 0,24 -46,0"
              fill={selectedNodeId === "gateway" ? "#eff6ff" : "#ffffff"}
              stroke="#1d4ed8"
              strokeWidth={selectedNodeId === "gateway" ? 2.5 : 1.8}
              filter="url(#nexusShadow)"
            />
            <polygon points="-46,0 0,24 0,42 -46,18" fill="url(#nexusSideLeft)" stroke="#1d4ed8" strokeWidth="1.5" />
            <polygon points="0,24 46,0 46,18 0,42" fill="url(#nexusSideRight)" stroke="#1d4ed8" strokeWidth="1.5" />
            <text x="0" y="3" textAnchor="middle" fontFamily="var(--studio-font-mono, monospace)" fontSize="9.5" fontWeight="850" fill="#0f172a">
              API Gateway
            </text>
            <text x="0" y="56" textAnchor="middle" fontFamily="var(--studio-font-mono, monospace)" fontSize="8.5" fontWeight="800" fill="#1d4ed8">
              Fastify Cluster
            </text>
          </g>

          {/* ================================================================
              NODE 3: REDIS DISTRIBUTED LOCK
              ================================================================ */}
          <g
            transform="translate(430, 80)"
            onClick={() => setSelectedNodeId("redis")}
            style={{ cursor: "pointer" }}
          >
            <polygon
              points="0,-22 44,0 0,22 -44,0"
              fill={selectedNodeId === "redis" ? "#faf5ff" : "#ffffff"}
              stroke="#7c3aed"
              strokeWidth={selectedNodeId === "redis" ? 2.5 : 1.8}
              filter="url(#nexusShadow)"
            />
            <polygon points="-44,0 0,22 0,38 -44,16" fill="#ede9fe" stroke="#7c3aed" strokeWidth="1.5" />
            <polygon points="0,22 44,0 44,16 0,38" fill="#ddd6fe" stroke="#7c3aed" strokeWidth="1.5" />
            <text x="0" y="3" textAnchor="middle" fontFamily="var(--studio-font-mono, monospace)" fontSize="9.5" fontWeight="850" fill="#5b21b6">
              Redis Lock
            </text>
            <text x="0" y="52" textAnchor="middle" fontFamily="var(--studio-font-mono, monospace)" fontSize="8.5" fontWeight="800" fill="#7c3aed">
              SETNX TTL 60s
            </text>
          </g>

          {/* ================================================================
              NODE 4: CAMUNDA BPMN 2.0 STATE MACHINE
              ================================================================ */}
          <g
            transform="translate(580, 130)"
            onClick={() => setSelectedNodeId("camunda")}
            style={{ cursor: "pointer" }}
          >
            <polygon
              points="0,-24 48,0 0,24 -48,0"
              fill={selectedNodeId === "camunda" ? "#f0fdf4" : "#ffffff"}
              stroke="#059669"
              strokeWidth={selectedNodeId === "camunda" ? 2.5 : 1.8}
              filter="url(#nexusShadow)"
            />
            <polygon points="-48,0 0,24 0,42 -48,18" fill="#d1fae5" stroke="#059669" strokeWidth="1.5" />
            <polygon points="0,24 48,0 48,18 0,42" fill="#a7f3d0" stroke="#059669" strokeWidth="1.5" />
            <text x="0" y="3" textAnchor="middle" fontFamily="var(--studio-font-mono, monospace)" fontSize="9.5" fontWeight="850" fill="#065f46">
              Camunda 2.0
            </text>
            <text x="0" y="56" textAnchor="middle" fontFamily="var(--studio-font-mono, monospace)" fontSize="8.5" fontWeight="800" fill="#059669">
              7 Trạng Thái
            </text>
          </g>

          {/* ================================================================
              NODE 5: POSTGRESQL MASTER (3NF ACID)
              ================================================================ */}
          <g
            transform="translate(430, 260)"
            onClick={() => setSelectedNodeId("postgres")}
            style={{ cursor: "pointer" }}
          >
            <polygon
              points="0,-24 46,0 0,24 -46,0"
              fill={selectedNodeId === "postgres" ? "#eff6ff" : "#ffffff"}
              stroke="#0284c7"
              strokeWidth={selectedNodeId === "postgres" ? 2.5 : 1.8}
              filter="url(#nexusShadow)"
            />
            <polygon points="-46,0 0,24 0,42 -46,18" fill="#e0f2fe" stroke="#0284c7" strokeWidth="1.5" />
            <polygon points="0,24 46,0 46,18 0,42" fill="#bae6fd" stroke="#0284c7" strokeWidth="1.5" />
            <text x="0" y="3" textAnchor="middle" fontFamily="var(--studio-font-mono, monospace)" fontSize="9.5" fontWeight="850" fill="#0369a1">
              PostgreSQL
            </text>
            <text x="0" y="56" textAnchor="middle" fontFamily="var(--studio-font-mono, monospace)" fontSize="8.5" fontWeight="800" fill="#0284c7">
              3NF Schema ACID
            </text>
          </g>

          {/* ================================================================
              NODE 6: LEAFLET MAP TELEMETRY
              ================================================================ */}
          <g
            transform="translate(230, 280)"
            onClick={() => setSelectedNodeId("leaflet")}
            style={{ cursor: "pointer" }}
          >
            <polygon
              points="0,-22 44,0 0,22 -44,0"
              fill={selectedNodeId === "leaflet" ? "#fff7ed" : "#ffffff"}
              stroke="#ea580c"
              strokeWidth={selectedNodeId === "leaflet" ? 2.5 : 1.8}
              filter="url(#nexusShadow)"
            />
            <polygon points="-44,0 0,22 0,38 -44,16" fill="#ffedd5" stroke="#ea580c" strokeWidth="1.5" />
            <polygon points="0,22 44,0 44,16 0,38" fill="#fed7aa" stroke="#ea580c" strokeWidth="1.5" />
            <text x="0" y="3" textAnchor="middle" fontFamily="var(--studio-font-mono, monospace)" fontSize="9.5" fontWeight="850" fill="#9a3412">
              Leaflet Live
            </text>
            <text x="0" y="52" textAnchor="middle" fontFamily="var(--studio-font-mono, monospace)" fontSize="8.5" fontWeight="800" fill="#ea580c">
              GPS Hub Route
            </text>
          </g>
        </svg>
      </div>

      {/* 4. Interactive Node Inspector Card */}
      <div
        style={{
          padding: "16px 20px",
          background: "#ffffff",
          borderTop: "1.5px solid #d8e6f5",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "8px", flexWrap: "wrap", gap: "8px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span
              style={{
                fontFamily: "var(--font-mono, monospace)",
                fontSize: "10.5px",
                fontWeight: 800,
                padding: "2px 8px",
                borderRadius: "4px",
                background: "#eff6ff",
                color: "#1d4ed8",
                border: "1px solid #bfdbfe",
              }}
            >
              {selectedNode.role}
            </span>
            <strong style={{ fontSize: "14px", color: "#0f172a" }}>
              {lang === "vi" ? selectedNode.name : selectedNode.nameEn}
            </strong>
          </div>

          <div style={{ display: "flex", gap: "8px", fontSize: "11px", fontFamily: "var(--font-mono, monospace)" }}>
            <span style={{ color: "#64748b" }}>Giao thức: <strong style={{ color: "#0f172a" }}>{selectedNode.protocol}</strong></span>
            <span style={{ color: "#64748b" }}>SLA: <strong style={{ color: "#16a34a" }}>{selectedNode.sla}</strong></span>
          </div>
        </div>

        <p style={{ margin: 0, fontSize: "12.5px", color: "#475569", lineHeight: 1.6 }}>
          {lang === "vi" ? selectedNode.description : selectedNode.descriptionEn}
        </p>
      </div>
    </div>
  );
}

export default Nexus25dSimulator;
