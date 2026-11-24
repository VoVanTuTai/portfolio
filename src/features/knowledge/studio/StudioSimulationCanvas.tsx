import { useState, useEffect } from "react";
import {
  Activity,
  AlertTriangle,
  Minus,
  Pause,
  Play,
  Plus,
  RotateCcw,
  Server,
  Zap,
} from "lucide-react";
import styles from "./StudioSimulationCanvas.module.css";

interface StudioSimulationCanvasProps {
  stepIndex: number; // 0 to 5
  isPlaying: boolean;
  onTogglePlay?: () => void;
  onReset?: () => void;
}

interface NodeDetail {
  id: string;
  name: string;
  category: string;
  description: string;
  techSpec: string;
  slaMetric: string;
}

const NODE_DETAILS: Record<string, NodeDetail> = {
  shipper: {
    id: "shipper",
    name: "Shipper Mobile Courier (React Native)",
    category: "CLIENT / EDGE",
    description: "Thiết bị cầm tay của hơn 1.200 tài xế quét mã vạch và QR bưu kiện trên toàn quốc.",
    techSpec: "Offline Queue · SQLite Local Cache · JWT Refresh Token",
    slaMetric: "Độ trễ phản hồi UI < 100ms",
  },
  gateway: {
    id: "gateway",
    name: "Ingestion API Gateway (NestJS)",
    category: "GATEWAY / ROUTING",
    description: "Cổng kiểm soát đầu vào: kiểm tra tính hợp lệ, xác thực chữ ký số, Rate Limiting chống DDoS.",
    techSpec: "Fastify Engine · Cluster Mode · OpenAPI 3.0 Contract",
    slaMetric: "P99 Gateway Overhead < 8ms",
  },
  redis: {
    id: "redis",
    name: "Redis Idempotency Guard & Distributed Lock",
    category: "CACHE / LOCK",
    description: "Bảo vệ giao dịch kép: ngăn chặn shipper bấm nút quét 2 lần liên tiếp gây trùng lặp đơn hàng.",
    techSpec: "Redis Cluster 7.2 · Redlock Algorithm · 60s Key TTL",
    slaMetric: "Thời gian kiểm tra khóa < 1.2ms",
  },
  rabbitmq: {
    id: "rabbitmq",
    name: "RabbitMQ Message Broker Cluster",
    category: "MESSAGE BROKER",
    description: "Hấp thụ đỉnh tải bưu cục giờ cao điểm (17h - 19h), chuyển tiếp xử lý bất đồng bộ.",
    techSpec: "Quorum Queues · Erlang OTP · Dead Letter Exchange (DLX)",
    slaMetric: "Zero Message Loss (Độ tin cậy 100%)",
  },
  workers: {
    id: "workers",
    name: "Logistics Consumer Workers (Go & Camunda)",
    category: "BUSINESS LOGIC",
    description: "Thực thi tính toán ma trận cước vận chuyển, cập nhật máy trạng thái 7 bước Camunda BPMN 2.0.",
    techSpec: "Go 1.22 Goroutines · Horizontal Pod Autoscaler (HPA)",
    slaMetric: "Xử lý 3.500 đơn/giây",
  },
  postgres: {
    id: "postgres",
    name: "PostgreSQL Master Cluster (3NF Schema)",
    category: "PERSISTENCE / ACID",
    description: "Kho lưu trữ sự thật tối thượng (Single Source of Truth), quản lý trạng thái đơn hàng và sổ cái COD.",
    techSpec: "PostgreSQL 16 · Chuẩn hóa 3NF · Row-level Lock Bi quan",
    slaMetric: "Toàn vẹn ACID 100%",
  },
};

export function StudioSimulationCanvas({
  stepIndex,
  isPlaying,
  onTogglePlay,
  onReset,
}: StudioSimulationCanvasProps) {
  // 1. Reactive interactive parameters
  const [rps, setRps] = useState(250);
  const [workerCount, setWorkerCount] = useState(1);
  const [isChaosActive, setIsChaosActive] = useState(false);
  const [selectedNodeId, setSelectedNodeId] = useState<string | null>(null);
  const [duplicateScanKey, setDuplicateScanKey] = useState(0);

  // Sync initial RPS and parameters with step narrative
  useEffect(() => {
    if (stepIndex === 0) {
      setRps(250);
      setWorkerCount(1);
      setIsChaosActive(false);
    } else if (stepIndex === 1) {
      setRps(1200);
      setWorkerCount(1);
      setIsChaosActive(false);
    } else if (stepIndex === 2) {
      setRps(2800);
      setWorkerCount(1);
      setIsChaosActive(false);
    } else if (stepIndex === 3) {
      setRps(1500);
      setWorkerCount(2);
      setIsChaosActive(false);
    } else if (stepIndex === 4) {
      setRps(2500);
      setWorkerCount(3);
      setIsChaosActive(false);
    } else if (stepIndex === 5) {
      setRps(3200);
      setWorkerCount(3);
      setIsChaosActive(false);
    }
  }, [stepIndex]);

  // Derived simulation metrics
  const isCongested = stepIndex === 1 || (rps > 2000 && workerCount < 2) || isChaosActive;
  const isQueueActive = stepIndex >= 2;
  const isIdempotencyStep = stepIndex === 3;
  const isScalingStep = stepIndex === 4;

  const currentP50 = isChaosActive
    ? 240
    : isCongested
      ? 110
      : isQueueActive
        ? 18
        : 45;

  const currentP99 = isChaosActive
    ? 980
    : isCongested
      ? 480
      : isQueueActive
        ? 38
        : 85;

  const currentCpu = isChaosActive
    ? 96
    : isCongested
      ? 88
      : Math.min(85, Math.round(15 + (rps / 3500) * 35));

  const selectedNode = selectedNodeId ? NODE_DETAILS[selectedNodeId] : null;

  return (
    <div className={styles.simulationContainer}>
      {/* 1. Playground Interactive Controls Header */}
      <div className={styles.playgroundControlsBar} aria-label="Bộ điều khiển tương tác mô phỏng">
        {/* Playback Controls */}
        <div className={styles.controlGroup}>
          <button
            type="button"
            className="studio-pop-btn"
            style={{ padding: "5px 10px", fontSize: 11 }}
            onClick={onReset}
            title="Phát lại từ đầu bước này (Phím: R)"
          >
            <RotateCcw size={11} />
            <span>Phát lại</span>
          </button>
          <button
            type="button"
            className="studio-pop-btn studio-pop-btn--primary"
            style={{ padding: "5px 12px", fontSize: 11 }}
            onClick={onTogglePlay}
            title={isPlaying ? "Tạm dừng luồng (Phím: Space)" : "Tiếp tục chạy (Phím: Space)"}
          >
            {isPlaying ? <Pause size={11} /> : <Play size={11} />}
            <span>{isPlaying ? "Tạm dừng" : "Tiếp tục"}</span>
          </button>
        </div>

        {/* RPS Traffic Slider */}
        <div className={styles.controlGroup}>
          <span className={styles.controlLabel}>
            <Activity size={12} /> Tải:
          </span>
          <div className={styles.sliderWrapper}>
            <input
              type="range"
              min="100"
              max="4000"
              step="50"
              value={rps}
              onChange={(e) => setRps(Number(e.target.value))}
              className={styles.trafficSlider}
              title="Kéo thanh trượt để thay đổi lưu lượng quét mã bưu cục"
            />
            <span className={styles.trafficValueBadge}>{rps.toLocaleString()} req/s</span>
          </div>

          <div className={styles.presetButtons}>
            <button
              type="button"
              className={`${styles.presetBtn} ${rps === 250 ? styles.isActive : ""}`}
              onClick={() => setRps(250)}
            >
              250
            </button>
            <button
              type="button"
              className={`${styles.presetBtn} ${rps === 1200 ? styles.isActive : ""}`}
              onClick={() => setRps(1200)}
            >
              1.2K
            </button>
            <button
              type="button"
              className={`${styles.presetBtn} ${rps === 3500 ? styles.isActive : ""}`}
              onClick={() => setRps(3500)}
            >
              3.5K
            </button>
          </div>
        </div>

        {/* Worker Scale Controls (Especially for Step 5) */}
        <div className={styles.controlGroup} title={isScalingStep ? "Bước 5: Thử nghiệm mở rộng ngang Worker Pods" : undefined}>
          <span className={styles.controlLabel}>
            <Server size={12} /> Pods:
          </span>
          <div className={styles.workerScaleGroup}>
            <button
              type="button"
              className={styles.workerScaleBtn}
              onClick={() => setWorkerCount((prev) => Math.max(1, prev - 1))}
              disabled={workerCount <= 1}
              title="Giảm 1 Worker Pod"
            >
              <Minus size={11} />
            </button>
            <span className={styles.workerCountBadge}>{workerCount}</span>
            <button
              type="button"
              className={styles.workerScaleBtn}
              onClick={() => setWorkerCount((prev) => Math.min(3, prev + 1))}
              disabled={workerCount >= 3}
              title="Nhân bản thêm 1 Worker Pod (Horizontal Scaling)"
            >
              <Plus size={11} />
            </button>
          </div>
        </div>

        {/* Chaos Injection Toggle */}
        <button
          type="button"
          className={`${styles.chaosToggleBtn} ${isChaosActive ? styles.isChaosActive : ""}`}
          onClick={() => setIsChaosActive((prev) => !prev)}
          title="Bật/tắt giả lập nghẽn Database (Pessimistic Lock Contention)"
        >
          <AlertTriangle size={12} />
          <span>{isChaosActive ? "Đang nghẽn DB" : "Giả lập nghẽn"}</span>
        </button>

        {/* Duplicate Scan Trigger for Step 4 */}
        {isIdempotencyStep && (
          <button
            type="button"
            className="studio-pop-btn"
            style={{ padding: "4px 10px", fontSize: 11 }}
            onClick={() => setDuplicateScanKey((k) => k + 1)}
            title="Mô phỏng shipper bấm quét mã 2 lần liên tiếp"
          >
            <Zap size={11} /> Quét Trùng Mã
          </button>
        )}
      </div>

      {/* 2. Real-time Status Banner */}
      <div className={styles.canvasStatusStrip} aria-live="polite">
        <div className={styles.statusLeftSection}>
          <span
            className={`${styles.statusIndicatorDot} ${
              isChaosActive ? styles.isCrit : isCongested ? styles.isWarn : ""
            }`}
          />
          <span>
            {isChaosActive
              ? "CẢNH BÁO: Nghẽn Khóa Bi Quan DB (Row Lock Contention)"
              : isCongested
                ? "CẢNH BÁO: Hàng Đợi Quá Tải Giờ Cao Điểm"
                : isQueueActive
                  ? "BẢO VỆ: Van Xả Áp Lực RabbitMQ Hoạt Động Tốt"
                  : "TRẠNG THÁI: Lưu Lượng Bưu Cục Bình Thường"}
          </span>
        </div>

        <div className={styles.statusRightMetrics}>
          <span>P50: <strong className={styles.metricBadge}>{currentP50}ms</strong></span>
          <span>P99: <strong className={styles.metricBadge} data-level={currentP99 > 300 ? "crit" : "good"}>{currentP99}ms</strong></span>
          <span>CPU: <strong className={styles.metricBadge} data-level={currentCpu > 80 ? "warn" : "good"}>{currentCpu}%</strong></span>
        </div>
      </div>

      {/* 3. 2.5D Isometric SVG Simulation Engine */}
      <div className={styles.svgStageWrapper}>
        <svg
          viewBox="0 0 680 340"
          className={styles.svgRoot}
          aria-label="Sơ đồ kiến trúc phân tán 2.5D Isometric"
        >
          <defs>
            {/* Gradients for Nodes */}
            <linearGradient id="isoFloorGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#e0f2fe" stopOpacity="0.4" />
            </linearGradient>

            <linearGradient id="prismTopGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="#f0f9ff" />
            </linearGradient>

            <linearGradient id="prismSideLeft" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#e0f2fe" />
              <stop offset="100%" stopColor="#bae6fd" />
            </linearGradient>

            <linearGradient id="prismSideRight" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#bae6fd" />
              <stop offset="100%" stopColor="#7dd3fc" />
            </linearGradient>

            <linearGradient id="amberPrismSide" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#fef3c7" />
              <stop offset="100%" stopColor="#fde68a" />
            </linearGradient>

            {/* Filter for isometric pop shadow */}
            <filter id="isoDropShadow" x="-20%" y="-20%" width="150%" height="150%">
              <feDropShadow dx="2" dy="3.5" stdDeviation="0" floodColor="#0f172a" floodOpacity="0.85" />
            </filter>

            <filter id="isoGlowBlue" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* 1. Technical Isometric Grid Floor */}
          <g stroke="rgba(2, 132, 199, 0.16)" strokeWidth="1" fill="none">
            <path d="M 340,30 L 640,180 L 340,330 L 40,180 Z" fill="url(#isoFloorGrad)" />
            <path d="M 340,70 L 580,180 L 340,290 L 100,180 Z" />
            <path d="M 340,110 L 520,180 L 340,250 L 160,180 Z" />
            <line x1="40" y1="180" x2="640" y2="180" strokeDasharray="4 4" />
            <line x1="340" y1="30" x2="340" y2="330" strokeDasharray="4 4" />
          </g>

          {/* 2. Isometric Connecting Data Bus Paths */}
          {/* Path 1: Shipper -> API Gateway */}
          <path
            id="pathShipperToGateway"
            d="M 152,175 Q 195,115 250,85"
            stroke={isCongested ? "#f59e0b" : "#0284c7"}
            strokeWidth="2.5"
            fill="none"
            className={isPlaying ? styles.animatedBusLine : ""}
          />

          {/* Path 2: API Gateway -> Redis Idempotency Guard */}
          <path
            id="pathGatewayToRedis"
            d="M 300,111 L 300,152"
            stroke={isIdempotencyStep ? "#8b5cf6" : "#93c5fd"}
            strokeWidth="2"
            fill="none"
            strokeDasharray="4 3"
          />

          {/* Path 3: API Gateway -> RabbitMQ Buffer Queue */}
          <path
            id="pathGatewayToQueue"
            d="M 280,108 Q 250,175 270,235"
            stroke={isQueueActive ? "#06b6d4" : "rgba(148, 163, 184, 0.4)"}
            strokeWidth={isQueueActive ? "2.5" : "1.5"}
            fill="none"
            strokeDasharray={isQueueActive ? "5 4" : "2 2"}
            className={isPlaying && isQueueActive ? styles.animatedBusLine : ""}
          />

          {/* Path 4: Gateway -> Response Return to Shipper */}
          <path
            id="pathGatewayReturnShipper"
            d="M 250,95 Q 195,130 145,175"
            stroke="#10b981"
            strokeWidth="2"
            strokeDasharray="5 5"
            fill="none"
            className={isPlaying ? styles.animatedBusLineSlow : ""}
          />

          {/* Path 5: Gateway / Queue -> Workers */}
          <path
            id="pathQueueToWorkers"
            d="M 345,255 Q 420,190 475,95"
            stroke={isQueueActive ? "#0284c7" : "#cbd5e1"}
            strokeWidth="2"
            fill="none"
            strokeDasharray="5 5"
            className={isPlaying && isQueueActive ? styles.animatedBusLine : ""}
          />

          {/* Direct Path without Queue (Step 1 & 2): Gateway -> Workers */}
          {!isQueueActive && (
            <path
              id="pathDirectGatewayToWorkers"
              d="M 350,85 L 474,95"
              stroke={isCongested ? "#f43f5e" : "#0284c7"}
              strokeWidth="2.5"
              fill="none"
              className={isPlaying ? styles.animatedBusLine : ""}
            />
          )}

          {/* Path 6: Workers -> PostgreSQL Database */}
          <path
            id="pathWorkersToDb"
            d="M 510,125 L 510,218"
            stroke={isChaosActive ? "#f43f5e" : "#2563eb"}
            strokeWidth="2.5"
            fill="none"
            strokeDasharray="4 4"
            className={isPlaying ? styles.animatedBusLine : ""}
          />

          {/* 3. SIX ISOMETRIC ARCHITECTURE NODES */}

          {/* NODE 1: Shipper Mobile Couriers (Left) */}
          <g
            className={`${styles.interactiveNode} ${selectedNodeId === "shipper" ? styles.isSelected : ""}`}
            transform="translate(110, 175)"
            onClick={() => setSelectedNodeId("shipper")}
          >
            {/* Isometric Diamond Base */}
            <polygon
              points="0,-22 42,0 0,22 -42,0"
              fill="#ffffff"
              stroke="#0284c7"
              strokeWidth="2"
              filter="url(#isoDropShadow)"
            />
            {/* 3D Sides */}
            <polygon points="-42,0 0,22 0,38 -42,16" fill="url(#prismSideLeft)" stroke="#0284c7" strokeWidth="1.5" />
            <polygon points="0,22 42,0 42,16 0,38" fill="url(#prismSideRight)" stroke="#0284c7" strokeWidth="1.5" />

            {/* Icon / Content */}
            <text x="0" y="3" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="10.5" fontWeight="850" fill="#0f172a">
              Shipper App
            </text>
            <text x="0" y="52" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="9.5" fontWeight="800" fill="#0284c7">
              {rps.toLocaleString()} req/s
            </text>
            <circle cx="0" cy="-12" r="4" fill="#0284c7" className={isPlaying ? styles.pulseRing : ""} />
          </g>

          {/* NODE 2: API Gateway (NestJS & Rate Limiter) */}
          <g
            className={`${styles.interactiveNode} ${selectedNodeId === "gateway" ? styles.isSelected : ""}`}
            transform="translate(300, 85)"
            onClick={() => setSelectedNodeId("gateway")}
          >
            {/* Isometric Cube Top */}
            <polygon
              points="0,-26 50,0 0,26 -50,0"
              fill="url(#prismTopGrad)"
              stroke={isCongested ? "#f59e0b" : "#2563eb"}
              strokeWidth="2.5"
              filter="url(#isoDropShadow)"
            />
            {/* 3D Sides */}
            <polygon
              points="-50,0 0,26 0,48 -50,22"
              fill={isCongested ? "url(#amberPrismSide)" : "url(#prismSideLeft)"}
              stroke={isCongested ? "#f59e0b" : "#2563eb"}
              strokeWidth="1.5"
            />
            <polygon
              points="0,26 50,0 50,22 0,48"
              fill={isCongested ? "#fed7aa" : "url(#prismSideRight)"}
              stroke={isCongested ? "#f59e0b" : "#2563eb"}
              strokeWidth="1.5"
            />

            <text x="0" y="4" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="11" fontWeight="850" fill="#0f172a">
              API Gateway
            </text>
            <text x="0" y="-34" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="9" fontWeight="800" fill="#2563eb">
              [NestJS · Fastify]
            </text>

            {/* Congestion Alert badge */}
            {isCongested && (
              <g transform="translate(0, 64)">
                <rect x="-48" y="-10" width="96" height="18" rx="4" fill="#fef2f2" stroke="#f43f5e" strokeWidth="1.5" />
                <text x="0" y="3" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="9" fontWeight="850" fill="#e11d48">
                  QUEUE: CPU 88%
                </text>
              </g>
            )}
          </g>

          {/* NODE 3: Redis Idempotency Guard (Center) */}
          <g
            className={`${styles.interactiveNode} ${selectedNodeId === "redis" ? styles.isSelected : ""}`}
            transform="translate(300, 170)"
            onClick={() => setSelectedNodeId("redis")}
          >
            <polygon
              points="0,-18 34,0 0,18 -34,0"
              fill="#ffffff"
              stroke="#8b5cf6"
              strokeWidth="2"
              filter="url(#isoDropShadow)"
            />
            <polygon points="-34,0 0,18 0,30 -34,12" fill="#ede9fe" stroke="#8b5cf6" strokeWidth="1.5" />
            <polygon points="0,18 34,0 34,12 0,30" fill="#ddd6fe" stroke="#8b5cf6" strokeWidth="1.5" />

            <text x="0" y="3" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="9.5" fontWeight="800" fill="#6d28d9">
              Redis Lock
            </text>
            <text x="0" y="42" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="8.5" fontWeight="750" fill="#7c3aed">
              Idempotency-Key
            </text>
          </g>

          {/* NODE 4: RabbitMQ Buffer Queue (Center Bottom) */}
          <g
            className={`${styles.interactiveNode} ${selectedNodeId === "rabbitmq" ? styles.isSelected : ""}`}
            transform="translate(300, 255)"
            onClick={() => setSelectedNodeId("rabbitmq")}
            opacity={isQueueActive ? 1 : 0.55}
          >
            {/* Cylinder / 2.5D Stack */}
            <polygon
              points="0,-24 48,0 0,24 -48,0"
              fill="#ffffff"
              stroke="#0284c7"
              strokeWidth="2"
              filter="url(#isoDropShadow)"
            />
            <polygon points="-48,0 0,24 0,42 -48,18" fill="#e0f2fe" stroke="#0284c7" strokeWidth="1.5" />
            <polygon points="0,24 48,0 48,18 0,42" fill="#bae6fd" stroke="#0284c7" strokeWidth="1.5" />

            <text x="0" y="3" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="10.5" fontWeight="850" fill="#0369a1">
              RabbitMQ
            </text>
            <text x="0" y="55" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="9" fontWeight="800" fill="#0284c7">
              {isQueueActive ? "Queue: 142 đơn" : "[Chưa kích hoạt]"}
            </text>
          </g>

          {/* NODE 5: Worker Pool (Go & Camunda BPMN) */}
          <g
            className={`${styles.interactiveNode} ${selectedNodeId === "workers" ? styles.isSelected : ""}`}
            transform="translate(510, 95)"
            onClick={() => setSelectedNodeId("workers")}
          >
            {/* Render 1, 2, or 3 Pods based on workerCount */}
            {Array.from({ length: workerCount }).map((_, i) => {
              const offsetX = (i - (workerCount - 1) / 2) * 22;
              const offsetY = i * -10;

              return (
                <g key={i} transform={`translate(${offsetX}, ${offsetY})`}>
                  <polygon
                    points="0,-20 36,0 0,20 -36,0"
                    fill="#ffffff"
                    stroke="#2563eb"
                    strokeWidth="1.8"
                    filter="url(#isoDropShadow)"
                  />
                  <polygon points="-36,0 0,20 0,32 -36,12" fill="#dbeafe" stroke="#2563eb" strokeWidth="1.2" />
                  <polygon points="0,20 36,0 36,12 0,32" fill="#bfdbfe" stroke="#2563eb" strokeWidth="1.2" />
                </g>
              );
            })}

            <text x="0" y="4" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="10" fontWeight="850" fill="#1e3a8a">
              Worker Pool
            </text>
            <text x="0" y="-28" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="9" fontWeight="800" fill="#2563eb">
              [{workerCount} Pods · Go 1.22]
            </text>
            <text x="0" y="48" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="8.5" fontWeight="750" fill="#475569">
              Camunda BPMN
            </text>
          </g>

          {/* NODE 6: PostgreSQL Database (3NF Schema) */}
          <g
            className={`${styles.interactiveNode} ${selectedNodeId === "postgres" ? styles.isSelected : ""}`}
            transform="translate(510, 240)"
            onClick={() => setSelectedNodeId("postgres")}
          >
            {/* Database Stack Cylinder */}
            <polygon
              points="0,-22 46,0 0,22 -46,0"
              fill={isChaosActive ? "#fff1f2" : "#ffffff"}
              stroke={isChaosActive ? "#f43f5e" : "#1d4ed8"}
              strokeWidth="2"
              filter="url(#isoDropShadow)"
            />
            <polygon
              points="-46,0 0,22 0,44 -46,22"
              fill={isChaosActive ? "#fecdd3" : "#dbeafe"}
              stroke={isChaosActive ? "#f43f5e" : "#1d4ed8"}
              strokeWidth="1.5"
            />
            <polygon
              points="0,22 46,0 46,22 0,44"
              fill={isChaosActive ? "#fda4af" : "#bfdbfe"}
              stroke={isChaosActive ? "#f43f5e" : "#1d4ed8"}
              strokeWidth="1.5"
            />

            <text x="0" y="4" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="10" fontWeight="850" fill="#0f172a">
              PostgreSQL
            </text>
            <text x="0" y="56" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="8.5" fontWeight="800" fill={isChaosActive ? "#e11d48" : "#1e40af"}>
              {isChaosActive ? "ROW LOCK BLOCKED" : "3NF · ACID Lock"}
            </text>
          </g>

          {/* 4. DYNAMIC ANIMATED PACKETS */}
          {isPlaying && (
            <>
              {/* Normal Request Packet (Cyan): Shipper -> Gateway */}
              <circle r="4.5" fill="#06b6d4" stroke="#ffffff" strokeWidth="1.5">
                <animateMotion
                  path="M 152,175 Q 195,115 250,85"
                  dur={rps > 2000 ? "0.6s" : "1.2s"}
                  repeatCount="indefinite"
                />
              </circle>

              {/* Response Packet (Emerald): Gateway -> Shipper */}
              <circle r="4" fill="#10b981" stroke="#ffffff" strokeWidth="1.5">
                <animateMotion
                  path="M 250,95 Q 195,130 145,175"
                  dur={isQueueActive ? "0.8s" : "1.6s"}
                  repeatCount="indefinite"
                />
              </circle>

              {/* Queue Absorption Packets (Cyan): Gateway -> RabbitMQ */}
              {isQueueActive && (
                <circle r="4" fill="#0ea5e9" stroke="#ffffff" strokeWidth="1.5">
                  <animateMotion
                    path="M 280,108 Q 250,175 270,235"
                    dur="0.9s"
                    repeatCount="indefinite"
                  />
                </circle>
              )}

              {/* Workers consuming packets from Queue */}
              {isQueueActive && (
                <circle r="4" fill="#3b82f6" stroke="#ffffff" strokeWidth="1.5">
                  <animateMotion
                    path="M 345,255 Q 420,190 475,95"
                    dur={workerCount > 1 ? "0.7s" : "1.4s"}
                    repeatCount="indefinite"
                  />
                </circle>
              )}

              {/* Direct processing packet (Step 1 & 2) */}
              {!isQueueActive && (
                <circle r="4" fill={isCongested ? "#f59e0b" : "#2563eb"} stroke="#ffffff" strokeWidth="1.5">
                  <animateMotion
                    path="M 350,85 L 474,95"
                    dur={isCongested ? "1.8s" : "0.9s"}
                    repeatCount="indefinite"
                  />
                </circle>
              )}

              {/* Worker -> Database Commit */}
              <circle r="4" fill="#1d4ed8" stroke="#ffffff" strokeWidth="1.5">
                <animateMotion
                  path="M 510,125 L 510,218"
                  dur={isChaosActive ? "2.5s" : "1s"}
                  repeatCount="indefinite"
                />
              </circle>

              {/* DUPLICATE SCAN TEST (Step 4 Idempotency demonstration) */}
              {isIdempotencyStep && (
                <g key={duplicateScanKey}>
                  {/* Packet 1 (Legitimate): Travels to DB */}
                  <circle r="5" fill="#10b981" stroke="#ffffff" strokeWidth="1.5">
                    <animateMotion
                      path="M 152,175 Q 195,115 250,85"
                      dur="0.9s"
                      fill="freeze"
                    />
                  </circle>

                  {/* Packet 2 (Duplicate): Intercepted and blocked at Redis Lock! */}
                  <circle r="5" fill="#f43f5e" stroke="#ffffff" strokeWidth="1.5">
                    <animateMotion
                      path="M 152,175 Q 210,155 266,170"
                      dur="0.8s"
                      fill="freeze"
                    />
                  </circle>

                  {/* Red Blocked Shield popup at Redis */}
                  <g transform="translate(300, 138)">
                    <rect x="-42" y="-12" width="84" height="20" rx="4" fill="#fef2f2" stroke="#f43f5e" strokeWidth="1.5" />
                    <text x="0" y="2" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="9" fontWeight="850" fill="#e11d48">
                      409 BLOCKED
                    </text>
                  </g>
                </g>
              )}
            </>
          )}
        </svg>
      </div>

      {/* 4. Floating Node Technical Inspector Card */}
      {selectedNode && (
        <div className={styles.nodeInspectorCard} role="dialog" aria-label="Chi tiết kỹ thuật thành phần">
          <div className={styles.inspectorHeader}>
            <div className={styles.inspectorTitleRow}>
              <span className={styles.inspectorTag}>{selectedNode.category}</span>
              <span className={styles.inspectorName}>{selectedNode.name}</span>
            </div>
            <button
              type="button"
              className={styles.inspectorCloseBtn}
              onClick={() => setSelectedNodeId(null)}
              aria-label="Đóng chi tiết"
            >
              ×
            </button>
          </div>
          <p className={styles.inspectorDesc}>{selectedNode.description}</p>
          <div className={styles.inspectorMetricsGrid}>
            <div className={styles.inspectorMetric}>
              <span className={styles.inspectorMetricLabel}>Kiến trúc Kỹ thuật</span>
              <span className={styles.inspectorMetricValue}>{selectedNode.techSpec}</span>
            </div>
            <div className={styles.inspectorMetric}>
              <span className={styles.inspectorMetricLabel}>Cam kết SLA</span>
              <span className={styles.inspectorMetricValue}>{selectedNode.slaMetric}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
