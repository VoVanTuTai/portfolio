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
} from "lucide-react";
import type { StudioLesson } from "./studio.types";
import styles from "./StudioSimulationCanvas.module.css";

interface StudioSimulationCanvasProps {
  lesson?: StudioLesson;
  stepIndex: number; // 0 to 5+
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

const DEFAULT_NODE_DETAILS: Record<string, NodeDetail> = {
  // Module 01: Foundations
  client: {
    id: "client",
    name: "Web Browser & Mobile Client",
    category: "CLIENT / EDGE",
    description: "Trình duyệt của người dùng gửi yêu cầu HTTP/3 qua giao thức QUIC và kiểm tra bộ nhớ đệm trình duyệt cục bộ.",
    techSpec: "HTTP/3 · TLS 1.3 · TCP Fast Open · Service Worker",
    slaMetric: "Độ trễ người dùng cảm nhận (FCP) < 800ms",
  },
  dns: {
    id: "dns",
    name: "DNS Resolver & CDN Edge",
    category: "ROUTING / RESOLUTION",
    description: "Phân giải tên miền thành địa chỉ IP máy chủ biên gần nhất theo chuẩn Anycast DNS Geo-routing.",
    techSpec: "Anycast BGP · DNS over HTTPS (DoH) · Cloudflare Edge",
    slaMetric: "Thời gian phân giải DNS < 15ms",
  },
  gateway: {
    id: "gateway",
    name: "Ingestion API Gateway (NestJS & Fastify)",
    category: "GATEWAY / ROUTING",
    description: "Cổng kiểm soát đầu vào: kiểm tra tính hợp lệ, xác thực chữ ký số, Rate Limiting chống DDoS.",
    techSpec: "Fastify Engine · Cluster Mode · OpenAPI 3.0 Contract",
    slaMetric: "P99 Gateway Overhead < 6ms",
  },
  workers: {
    id: "workers",
    name: "Application Worker Pods (Go & Node.js)",
    category: "COMPUTE / BUSINESS LOGIC",
    description: "Thực thi tính toán logic nghiệp vụ, xử lý luồng giao dịch và điều phối dữ liệu không trạng thái (Stateless).",
    techSpec: "Go 1.22 Goroutines · Kubernetes HPA · gRPC Internal",
    slaMetric: "Xử lý 3.500 đơn/giây",
  },
  postgres: {
    id: "postgres",
    name: "PostgreSQL Master Cluster (3NF Schema)",
    category: "PERSISTENCE / ACID",
    description: "Kho lưu trữ sự thật tối thượng (Single Source of Truth), quản lý trạng thái dữ liệu và toàn vẹn ACID.",
    techSpec: "PostgreSQL 16 · Chuẩn hóa 3NF · Row-level Lock Bi quan",
    slaMetric: "Toàn vẹn ACID 100% · B-Tree Scan < 1.5ms",
  },

  // Module 02: Scaling
  loadBalancer: {
    id: "loadBalancer",
    name: "Layer 7 Load Balancer (Envoy Proxy)",
    category: "TRAFFIC MANAGEMENT",
    description: "Điều phối cân bằng tải theo thuật toán Round Robin và Weighted Least Connections, tự động ngắt máy chủ lỗi.",
    techSpec: "Envoy Proxy · HTTP/2 Multiplexing · Zero-downtime Reload",
    slaMetric: "Độ trễ trung chuyển < 1.0ms · Tải 25.000 RPS",
  },
  redisCache: {
    id: "redisCache",
    name: "Distributed Redis Cluster (In-Memory Cache)",
    category: "CACHE LAYER",
    description: "Lưu trữ cache đọc thường xuyên trong RAM, ngăn chặn 85% truy vấn đập trực tiếp vào cơ sở dữ liệu quan hệ.",
    techSpec: "Redis 7.2 Cluster · Cache-Aside Pattern · TTL 15m",
    slaMetric: "Thời gian phản hồi RAM < 0.8ms",
  },

  // Module 03: Data & Storage
  masterDb: {
    id: "masterDb",
    name: "PostgreSQL Master (Ghi Dữ Liệu)",
    category: "RELATIONAL PRIMARY",
    description: "Tiếp nhận 100% giao dịch ghi (INSERT, UPDATE, DELETE), ghi Write-Ahead Log (WAL) và phát tán Binlog sang Replica.",
    techSpec: "PostgreSQL 16 Primary · WAL Streaming · Synchronous Commit",
    slaMetric: "P99 Write Latency < 8ms",
  },
  replicaDb: {
    id: "replicaDb",
    name: "Read Replicas (Cụm Đọc Phân Tán)",
    category: "READ REPLICAS",
    description: "Cụm máy chủ chỉ đọc chia sẻ tải truy vấn báo cáo và tìm kiếm của người dùng, tự động đồng bộ theo thời gian thực.",
    techSpec: "2x Read Replicas · Asynchronous WAL Streaming · Read-only User",
    slaMetric: "Replication Lag < 25ms",
  },
  shardRing: {
    id: "shardRing",
    name: "Consistent Hashing Shard Ring",
    category: "DATABASE SHARDING",
    description: "Vòng băm 360 độ phân bổ dữ liệu khách hàng theo User ID Hash sang các phân mảnh Shard 1, Shard 2, Shard 3.",
    techSpec: "Murmur3 Hash · Virtual Nodes (vnodes) · Zero Data Migration",
    slaMetric: "Phân bổ đều 99.8% qua các Shards",
  },

  // Module 04: Communication
  rabbitmq: {
    id: "rabbitmq",
    name: "RabbitMQ Message Broker Cluster",
    category: "MESSAGE BROKER",
    description: "Hấp thụ đỉnh tải bưu cục giờ cao điểm, chuyển tiếp xử lý bất đồng bộ với cơ chế Dead Letter Queue.",
    techSpec: "Quorum Queues · Erlang OTP · Dead Letter Exchange (DLX)",
    slaMetric: "Zero Message Loss (Độ tin cậy 100%)",
  },
  websocketHub: {
    id: "websocketHub",
    name: "WebSocket Real-time Broadcast Hub",
    category: "STREAMING / REALTIME",
    description: "Duy trì hàng ngàn kết nối song công liên tục, đẩy thông báo trạng thái đơn hàng và vị trí GPS tới thiết bị.",
    techSpec: "NodeJS uWebSockets.js · Redis Adapter · Heartbeat Ping 30s",
    slaMetric: "Broadcast Fan-out < 12ms",
  },

  // Module 05: Reliability
  rateLimiter: {
    id: "rateLimiter",
    name: "Token Bucket Rate Limiter",
    category: "PROTECTION / TRAFFIC",
    description: "Chặn đứng các đợt bùng nổ lưu lượng hoặc hành vi quét cào dữ liệu trái phép theo địa chỉ IP và API Key.",
    techSpec: "Redis Token Bucket · 429 Too Many Requests · Lua Script",
    slaMetric: "Phản hồi chặn < 1.2ms",
  },
  circuitBreaker: {
    id: "circuitBreaker",
    name: "Resilience4j Circuit Breaker",
    category: "FAULT TOLERANCE",
    description: "Tự động ngắt mạch (Open) khi tỷ lệ lỗi vượt quá 50% trong 10 giây, chuyển hướng sang dữ liệu dự phòng.",
    techSpec: "State Machine (Closed -> Open -> Half-Open) · Sliding Window",
    slaMetric: "Ngắt mạch tức thì trong 2ms",
  },

  // Module 06: Architecture
  sagaOrchestrator: {
    id: "sagaOrchestrator",
    name: "Camunda Zeebe Saga Orchestrator",
    category: "DISTRIBUTED TRANSACTIONS",
    description: "Điều phối chuỗi giao dịch liên dịch vụ (Đặt hàng -> Trừ kho -> Thanh toán), tự động kích hoạt bù trừ khi lỗi.",
    techSpec: "Camunda 8 Zeebe · Event-Driven Architecture · BPMN 2.0 Engine",
    slaMetric: "Thời gian bù trừ SLA < 500ms",
  },
  serviceMesh: {
    id: "serviceMesh",
    name: "Istio Service Mesh Data Plane",
    category: "SERVICE DISCOVERY",
    description: "Sidecar Proxy tự động mã hóa mTLS giữa các vi dịch vụ và định tuyến thông minh theo phiên bản Canary.",
    techSpec: "Envoy Sidecar · Mutual TLS (mTLS) · K8s CoreDNS",
    slaMetric: "Sidecar Overhead < 1.5ms",
  },

  // Module 07: Security
  keycloakIdp: {
    id: "keycloakIdp",
    name: "Keycloak Identity Provider (OAuth2 / OIDC)",
    category: "IDENTITY & ACCESS",
    description: "Cổng đăng nhập tập trung hỗ trợ SSO, phát hành Token JWT mã hóa bằng khóa bí mật RSA-256.",
    techSpec: "OpenID Connect 1.0 · OAuth 2.0 PKCE · RS256 Private Key",
    slaMetric: "Thời gian xác thực < 45ms",
  },
  rbacEngine: {
    id: "rbacEngine",
    name: "RBAC & ABAC Policy Enforcement Point",
    category: "AUTHORIZATION",
    description: "Kiểm tra quyền truy cập theo ma trận vai trò (Admin, Dispatcher, Driver) trên từng Endpoint tài nguyên.",
    techSpec: "Open Policy Agent (OPA) · Rego Policy Language · In-memory Cache",
    slaMetric: "Quyết định phân quyền < 0.6ms",
  },

  // Module 08: Shipping
  ciRunner: {
    id: "ciRunner",
    name: "GitHub Actions CI Runner",
    category: "CI/CD AUTOMATION",
    description: "Chạy tự động kiểm tra tĩnh (ESLint, TypeScript), thực thi 450+ Unit Tests và xây dựng Docker Container Image.",
    techSpec: "Linux x86-64 Runner · Docker Multi-stage Build · Vitest",
    slaMetric: "Thời gian kiểm thử & Build < 3.5 phút",
  },
  canaryDeploy: {
    id: "canaryDeploy",
    name: "ArgoCD Canary Deployment Gate",
    category: "PROGRESSIVE DELIVERY",
    description: "Triển khai dần phiên bản mới: 10% lưu lượng thử nghiệm trước, tự động Rollback nếu tỷ lệ HTTP 5xx tăng vọt.",
    techSpec: "Argo Rollouts · Prometheus Metric Analysis · Zero Downtime",
    slaMetric: "Tỷ lệ rủi ro phát hành 0%",
  },

  // Module 09: Whole Systems
  globalCdn: {
    id: "globalCdn",
    name: "Global Anycast Edge Network",
    category: "WHOLE SYSTEMS INGRESS",
    description: "Điểm tiếp nhận đầu tiên trên toàn thế giới với 280+ PoP, thực hiện nén dữ liệu Brotli và bảo vệ DDoS L3/L4.",
    techSpec: "Anycast Network · Cloudflare Enterprise · WAF Rules",
    slaMetric: "P99 Edge Latency < 18ms",
  },
};

export function StudioSimulationCanvas({
  lesson,
  stepIndex,
  isPlaying,
  onTogglePlay,
  onReset,
}: StudioSimulationCanvasProps) {
  // Determine active module code: "01" through "09"
  const rawCode = lesson?.moduleCode || "01";
  const moduleCode = rawCode.replace(/^mod-/, "").padStart(2, "0");

  // Reactive interactive parameters
  const [rps, setRps] = useState(350);
  const [workerCount, setWorkerCount] = useState(2);
  const [isChaosActive, setIsChaosActive] = useState(false);
  const [selectedNodeId, setSelectedNodeId] = useState<string | null>(null);

  // Sync initial parameters with step narrative
  useEffect(() => {
    if (stepIndex === 0) {
      setRps(350);
      setWorkerCount(2);
      setIsChaosActive(false);
    } else if (stepIndex === 1) {
      setRps(1200);
      setWorkerCount(2);
      setIsChaosActive(false);
    } else if (stepIndex === 2) {
      setRps(2800);
      setWorkerCount(2);
      setIsChaosActive(false);
    } else if (stepIndex === 3) {
      setRps(1600);
      setWorkerCount(3);
      setIsChaosActive(false);
    } else {
      setRps(3200);
      setWorkerCount(3);
      setIsChaosActive(false);
    }
  }, [stepIndex]);

  // Derived metrics
  const isCongested = (rps > 2400 && workerCount < 3) || isChaosActive;
  const currentP50 = isChaosActive ? 210 : isCongested ? 95 : 18;
  const currentP99 = isChaosActive ? 920 : isCongested ? 420 : 42;
  const currentCpu = isChaosActive ? 94 : isCongested ? 85 : Math.min(80, Math.round(18 + (rps / 3500) * 35));

  const selectedNode = selectedNodeId ? DEFAULT_NODE_DETAILS[selectedNodeId] : null;

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
            <Activity size={12} /> Lưu Lượng:
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
              title="Kéo thanh trượt để thay đổi lưu lượng mô phỏng"
            />
            <span className={styles.trafficValueBadge}>{rps.toLocaleString()} req/s</span>
          </div>

          <div className={styles.presetButtons}>
            <button
              type="button"
              className={`${styles.presetBtn} ${rps === 350 ? styles.isActive : ""}`}
              onClick={() => setRps(350)}
            >
              350
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

        {/* Worker Scale Controls */}
        <div className={styles.controlGroup}>
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
          title="Bật/tắt giả lập ngoại lệ hệ thống (Chaos Engineering)"
        >
          <AlertTriangle size={12} />
          <span>{isChaosActive ? "Đang có sự cố" : "Giả lập lỗi"}</span>
        </button>
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
              ? "CẢNH BÁO: Phát Hiện Xung Đột Tài Nguyên & Kích Hoạt Dự Phòng (Failover)"
              : isCongested
                ? "CẢNH BÁO: Lưu Lượng Tăng Cao, Đang Kích Hoạt Auto-scaling Pods"
                : moduleCode === "01"
                  ? "MODULE 01: Hành Trình Gói Tin Mạng & Phân Giải DNS Edge"
                  : moduleCode === "02"
                    ? "MODULE 02: Cân Bằng Tải L7 & Bộ Nhớ Đệm Phân Tán Redis"
                    : moduleCode === "03"
                      ? "MODULE 03: Sao Chép Binlog & Phân Mảnh Dữ Liệu Sharding Ring"
                      : moduleCode === "04"
                        ? "MODULE 04: Hàng Đợi RabbitMQ Hấp Thụ Đỉnh Tải & WebSocket Hub"
                        : moduleCode === "05"
                          ? "MODULE 05: Bộ Ngắt Mạch Circuit Breaker & Giám Sát Prometheus"
                          : moduleCode === "06"
                            ? "MODULE 06: Lưới Dịch Vụ Microservices & Điều Phối Sagas Camunda"
                            : moduleCode === "07"
                              ? "MODULE 07: Xác Thực Token JWT RS256 & Cổng Phân Quyền RBAC"
                              : moduleCode === "08"
                                ? "MODULE 08: Đường Ống CI/CD Kiểm Thử Tự Động & Phát Hành Canary"
                                : "MODULE 09: Toàn Cảnh Kiến Trúc Hệ Thống Sản Xuất Phân Tán"}
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
            <linearGradient id="isoFloorGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#e0f2fe" stopOpacity="0.45" />
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

            <filter id="isoDropShadow" x="-20%" y="-20%" width="150%" height="150%">
              <feDropShadow dx="2" dy="3.5" stdDeviation="0" floodColor="#0f172a" floodOpacity="0.85" />
            </filter>
          </defs>

          {/* SÀN LƯỚI TỌA ĐỘ ISOMETRIC CHUNG */}
          <g stroke="rgba(2, 132, 199, 0.16)" strokeWidth="1" fill="none">
            <path d="M 340,30 L 640,180 L 340,330 L 40,180 Z" fill="url(#isoFloorGrad)" />
            <path d="M 340,70 L 580,180 L 340,290 L 100,180 Z" />
            <path d="M 340,110 L 520,180 L 340,250 L 160,180 Z" />
            <line x1="40" y1="180" x2="640" y2="180" strokeDasharray="4 4" />
            <line x1="340" y1="30" x2="340" y2="330" strokeDasharray="4 4" />
          </g>

          {/* ================================================================
              BRANCH 01: FOUNDATIONS (REQUEST LIFECYCLE & LATENCY)
              ================================================================ */}
          {moduleCode === "01" && (
            <g>
              {/* Client Edge */}
              <g
                className={styles.interactiveNode}
                transform="translate(110, 175)"
                onClick={() => setSelectedNodeId("client")}
              >
                <polygon points="0,-22 42,0 0,22 -42,0" fill="#ffffff" stroke="#0284c7" strokeWidth="2" filter="url(#isoDropShadow)" />
                <polygon points="-42,0 0,22 0,38 -42,16" fill="url(#prismSideLeft)" stroke="#0284c7" strokeWidth="1.5" />
                <polygon points="0,22 42,0 42,16 0,38" fill="url(#prismSideRight)" stroke="#0284c7" strokeWidth="1.5" />
                <text x="0" y="3" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="10" fontWeight="850" fill="#0f172a">
                  User Client
                </text>
                <text x="0" y="52" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="9" fontWeight="800" fill="#0284c7">
                  {rps.toLocaleString()} req/s
                </text>
              </g>

              {/* DNS Resolver PoP */}
              <g
                className={styles.interactiveNode}
                transform="translate(250, 110)"
                onClick={() => setSelectedNodeId("dns")}
              >
                <polygon points="0,-20 38,0 0,20 -38,0" fill="#ffffff" stroke="#7c3aed" strokeWidth="2" filter="url(#isoDropShadow)" />
                <polygon points="-38,0 0,20 0,34 -38,14" fill="#ede9fe" stroke="#7c3aed" strokeWidth="1.5" />
                <polygon points="0,20 38,0 38,14 0,34" fill="#ddd6fe" stroke="#7c3aed" strokeWidth="1.5" />
                <text x="0" y="3" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="9.5" fontWeight="850" fill="#4c1d95">
                  DNS / CDN Edge
                </text>
                <text x="0" y="-28" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="8.5" fontWeight="800" fill="#7c3aed">
                  Anycast IP
                </text>
              </g>

              {/* API Gateway */}
              <g
                className={styles.interactiveNode}
                transform="translate(380, 85)"
                onClick={() => setSelectedNodeId("gateway")}
              >
                <polygon points="0,-24 48,0 0,24 -48,0" fill="url(#prismTopGrad)" stroke="#2563eb" strokeWidth="2" filter="url(#isoDropShadow)" />
                <polygon points="-48,0 0,24 0,44 -48,20" fill="url(#prismSideLeft)" stroke="#2563eb" strokeWidth="1.5" />
                <polygon points="0,24 48,0 48,20 0,44" fill="url(#prismSideRight)" stroke="#2563eb" strokeWidth="1.5" />
                <text x="0" y="3" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="10.5" fontWeight="850" fill="#0f172a">
                  API Gateway
                </text>
                <text x="0" y="-30" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="8.5" fontWeight="800" fill="#2563eb">
                  TLS Terminate
                </text>
              </g>

              {/* Worker Cluster */}
              <g
                className={styles.interactiveNode}
                transform="translate(520, 120)"
                onClick={() => setSelectedNodeId("workers")}
              >
                {Array.from({ length: workerCount }).map((_, i) => (
                  <g key={i} transform={`translate(${(i - 1) * 20}, ${i * -8})`}>
                    <polygon points="0,-18 34,0 0,18 -34,0" fill="#ffffff" stroke="#059669" strokeWidth="1.6" filter="url(#isoDropShadow)" />
                    <polygon points="-34,0 0,18 0,30 -34,12" fill="#d1fae5" stroke="#059669" strokeWidth="1.2" />
                    <polygon points="0,18 34,0 34,12 0,30" fill="#a7f3d0" stroke="#059669" strokeWidth="1.2" />
                  </g>
                ))}
                <text x="0" y="3" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="10" fontWeight="850" fill="#065f46">
                  Workers ({workerCount})
                </text>
                <text x="0" y="44" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="8.5" fontWeight="800" fill="#059669">
                  Go HTTP Handlers
                </text>
              </g>

              {/* Master Database */}
              <g
                className={styles.interactiveNode}
                transform="translate(380, 240)"
                onClick={() => setSelectedNodeId("postgres")}
              >
                <polygon points="0,-22 46,0 0,22 -46,0" fill="#ffffff" stroke="#1d4ed8" strokeWidth="2" filter="url(#isoDropShadow)" />
                <polygon points="-46,0 0,22 0,42 -46,20" fill="#dbeafe" stroke="#1d4ed8" strokeWidth="1.5" />
                <polygon points="0,22 46,0 46,20 0,42" fill="#bfdbfe" stroke="#1d4ed8" strokeWidth="1.5" />
                <text x="0" y="3" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="10" fontWeight="850" fill="#1e3a8a">
                  PostgreSQL
                </text>
                <text x="0" y="54" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="8.5" fontWeight="800" fill="#1d4ed8">
                  3NF Storage · ACID
                </text>
              </g>

              {/* Data paths */}
              <path d="M 152,175 Q 195,140 220,115" stroke="#7c3aed" strokeWidth="2" fill="none" strokeDasharray="4 4" />
              <path d="M 288,110 L 332,95" stroke="#2563eb" strokeWidth="2" fill="none" />
              <path d="M 428,85 Q 470,95 490,115" stroke="#059669" strokeWidth="2" fill="none" />
              <path d="M 520,150 Q 460,200 426,240" stroke="#1d4ed8" strokeWidth="2" fill="none" strokeDasharray="4 4" />

              {/* Packet Animations */}
              {isPlaying && (
                <>
                  <circle r="4.5" fill="#7c3aed" stroke="#ffffff" strokeWidth="1.5">
                    <animateMotion path="M 152,175 Q 195,140 220,115" dur="0.8s" repeatCount="indefinite" />
                  </circle>
                  <circle r="4.5" fill="#2563eb" stroke="#ffffff" strokeWidth="1.5">
                    <animateMotion path="M 288,110 L 332,95" dur="0.6s" repeatCount="indefinite" />
                  </circle>
                  <circle r="4.5" fill="#059669" stroke="#ffffff" strokeWidth="1.5">
                    <animateMotion path="M 428,85 Q 470,95 490,115" dur="0.9s" repeatCount="indefinite" />
                  </circle>
                  <circle r="4.5" fill="#1d4ed8" stroke="#ffffff" strokeWidth="1.5">
                    <animateMotion path="M 520,150 Q 460,200 426,240" dur="1.1s" repeatCount="indefinite" />
                  </circle>
                </>
              )}
            </g>
          )}

          {/* ================================================================
              BRANCH 02: SCALING & LOAD BALANCING (ROUND-ROBIN & REDIS CACHE)
              ================================================================ */}
          {moduleCode === "02" && (
            <g>
              {/* Traffic Ingress */}
              <g
                className={styles.interactiveNode}
                transform="translate(110, 175)"
                onClick={() => setSelectedNodeId("client")}
              >
                <polygon points="0,-22 42,0 0,22 -42,0" fill="#ffffff" stroke="#0284c7" strokeWidth="2" filter="url(#isoDropShadow)" />
                <polygon points="-42,0 0,22 0,38 -42,16" fill="url(#prismSideLeft)" stroke="#0284c7" strokeWidth="1.5" />
                <polygon points="0,22 42,0 42,16 0,38" fill="url(#prismSideRight)" stroke="#0284c7" strokeWidth="1.5" />
                <text x="0" y="3" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="10" fontWeight="850" fill="#0f172a">
                  Client Traffic
                </text>
                <text x="0" y="52" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="9" fontWeight="800" fill="#0284c7">
                  {rps.toLocaleString()} req/s
                </text>
              </g>

              {/* L7 Load Balancer */}
              <g
                className={styles.interactiveNode}
                transform="translate(280, 130)"
                onClick={() => setSelectedNodeId("loadBalancer")}
              >
                <polygon points="0,-26 50,0 0,26 -50,0" fill="url(#prismTopGrad)" stroke="#2563eb" strokeWidth="2.5" filter="url(#isoDropShadow)" />
                <polygon points="-50,0 0,26 0,48 -50,22" fill="url(#prismSideLeft)" stroke="#2563eb" strokeWidth="1.5" />
                <polygon points="0,26 50,0 50,22 0,48" fill="url(#prismSideRight)" stroke="#2563eb" strokeWidth="1.5" />
                <text x="0" y="3" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="10.5" fontWeight="850" fill="#0f172a">
                  Load Balancer
                </text>
                <text x="0" y="-32" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="8.5" fontWeight="800" fill="#2563eb">
                  Round Robin L7
                </text>
              </g>

              {/* Redis Cache Layer */}
              <g
                className={styles.interactiveNode}
                transform="translate(280, 245)"
                onClick={() => setSelectedNodeId("redisCache")}
              >
                <polygon points="0,-20 40,0 0,20 -40,0" fill="#ffffff" stroke="#e11d48" strokeWidth="2" filter="url(#isoDropShadow)" />
                <polygon points="-40,0 0,20 0,36 -40,16" fill="#ffe4e6" stroke="#e11d48" strokeWidth="1.5" />
                <polygon points="0,20 40,0 40,16 0,36" fill="#fecdd3" stroke="#e11d48" strokeWidth="1.5" />
                <text x="0" y="3" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="10" fontWeight="850" fill="#9f1239">
                  Redis Cache
                </text>
                <text x="0" y="48" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="8.5" fontWeight="800" fill="#e11d48">
                  RAM Hit 88%
                </text>
              </g>

              {/* Scaled Worker Nodes */}
              <g
                className={styles.interactiveNode}
                transform="translate(480, 90)"
                onClick={() => setSelectedNodeId("workers")}
              >
                {Array.from({ length: workerCount }).map((_, i) => (
                  <g key={i} transform={`translate(${(i - 1) * 36}, ${i * 24})`}>
                    <polygon points="0,-18 36,0 0,18 -36,0" fill="#ffffff" stroke="#0284c7" strokeWidth="1.8" filter="url(#isoDropShadow)" />
                    <polygon points="-36,0 0,18 0,30 -36,12" fill="#e0f2fe" stroke="#0284c7" strokeWidth="1.2" />
                    <polygon points="0,18 36,0 36,12 0,30" fill="#bae6fd" stroke="#0284c7" strokeWidth="1.2" />
                    <text x="0" y="3" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="9" fontWeight="800" fill="#0369a1">
                      Pod {i + 1}
                    </text>
                  </g>
                ))}
                <text x="0" y="-28" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="9.5" fontWeight="850" fill="#0284c7">
                  [{workerCount} Pods Auto-scale]
                </text>
              </g>

              {/* Origin PostgreSQL Database */}
              <g
                className={styles.interactiveNode}
                transform="translate(540, 230)"
                onClick={() => setSelectedNodeId("postgres")}
              >
                <polygon points="0,-22 46,0 0,22 -46,0" fill="#ffffff" stroke="#1d4ed8" strokeWidth="2" filter="url(#isoDropShadow)" />
                <polygon points="-46,0 0,22 0,42 -46,20" fill="#dbeafe" stroke="#1d4ed8" strokeWidth="1.5" />
                <polygon points="0,22 46,0 46,20 0,42" fill="#bfdbfe" stroke="#1d4ed8" strokeWidth="1.5" />
                <text x="0" y="3" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="10" fontWeight="850" fill="#1e3a8a">
                  Master DB
                </text>
                <text x="0" y="54" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="8.5" fontWeight="800" fill="#1d4ed8">
                  3NF Persistent
                </text>
              </g>

              {/* Connectors */}
              <path d="M 152,175 L 230,130" stroke="#0284c7" strokeWidth="2.5" fill="none" />
              <path d="M 280,178 L 280,225" stroke="#e11d48" strokeWidth="2" fill="none" strokeDasharray="3 3" />
              <path d="M 330,130 Q 390,80 440,90" stroke="#0284c7" strokeWidth="2" fill="none" />
              <path d="M 480,140 Q 520,180 540,208" stroke="#1d4ed8" strokeWidth="2" fill="none" strokeDasharray="4 4" />

              {/* Flow Packets */}
              {isPlaying && (
                <>
                  <circle r="4.5" fill="#0284c7" stroke="#ffffff" strokeWidth="1.5">
                    <animateMotion path="M 152,175 L 230,130" dur={rps > 2000 ? "0.6s" : "1.1s"} repeatCount="indefinite" />
                  </circle>
                  <circle r="4.5" fill="#0284c7" stroke="#ffffff" strokeWidth="1.5">
                    <animateMotion path="M 330,130 Q 390,80 440,90" dur={workerCount > 1 ? "0.7s" : "1.3s"} repeatCount="indefinite" />
                  </circle>
                  <circle r="4" fill="#e11d48" stroke="#ffffff" strokeWidth="1.5">
                    <animateMotion path="M 280,178 L 280,225" dur="0.9s" repeatCount="indefinite" />
                  </circle>
                </>
              )}
            </g>
          )}

          {/* ================================================================
              BRANCH 03: DATA & STORAGE (REPLICATION & SHARDING RING)
              ================================================================ */}
          {moduleCode === "03" && (
            <g>
              {/* Primary Master Node */}
              <g
                className={styles.interactiveNode}
                transform="translate(200, 110)"
                onClick={() => setSelectedNodeId("masterDb")}
              >
                <polygon points="0,-24 48,0 0,24 -48,0" fill="#ffffff" stroke="#2563eb" strokeWidth="2.5" filter="url(#isoDropShadow)" />
                <polygon points="-48,0 0,24 0,46 -48,22" fill="#dbeafe" stroke="#2563eb" strokeWidth="1.5" />
                <polygon points="0,24 48,0 48,22 0,46" fill="#bfdbfe" stroke="#2563eb" strokeWidth="1.5" />
                <text x="0" y="3" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="10.5" fontWeight="850" fill="#1e3a8a">
                  Master DB (Write)
                </text>
                <text x="0" y="-30" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="8.5" fontWeight="800" fill="#2563eb">
                  WAL / Binlog
                </text>
              </g>

              {/* Read Replica 1 */}
              <g
                className={styles.interactiveNode}
                transform="translate(130, 230)"
                onClick={() => setSelectedNodeId("replicaDb")}
              >
                <polygon points="0,-20 40,0 0,20 -40,0" fill="#ffffff" stroke="#059669" strokeWidth="2" filter="url(#isoDropShadow)" />
                <polygon points="-40,0 0,20 0,36 -40,16" fill="#d1fae5" stroke="#059669" strokeWidth="1.5" />
                <polygon points="0,20 40,0 40,16 0,36" fill="#a7f3d0" stroke="#059669" strokeWidth="1.5" />
                <text x="0" y="3" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="9.5" fontWeight="850" fill="#065f46">
                  Read Replica 1
                </text>
                <text x="0" y="48" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="8" fontWeight="800" fill="#059669">
                  Async Stream
                </text>
              </g>

              {/* Read Replica 2 */}
              <g
                className={styles.interactiveNode}
                transform="translate(290, 230)"
                onClick={() => setSelectedNodeId("replicaDb")}
              >
                <polygon points="0,-20 40,0 0,20 -40,0" fill="#ffffff" stroke="#059669" strokeWidth="2" filter="url(#isoDropShadow)" />
                <polygon points="-40,0 0,20 0,36 -40,16" fill="#d1fae5" stroke="#059669" strokeWidth="1.5" />
                <polygon points="0,20 40,0 40,16 0,36" fill="#a7f3d0" stroke="#059669" strokeWidth="1.5" />
                <text x="0" y="3" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="9.5" fontWeight="850" fill="#065f46">
                  Read Replica 2
                </text>
                <text x="0" y="48" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="8" fontWeight="800" fill="#059669">
                  Lag &lt; 20ms
                </text>
              </g>

              {/* Shard Ring Circle */}
              <g
                className={styles.interactiveNode}
                transform="translate(500, 160)"
                onClick={() => setSelectedNodeId("shardRing")}
              >
                <ellipse cx="0" cy="0" rx="80" ry="40" fill="none" stroke="#7c3aed" strokeWidth="2" strokeDasharray="5 5" />
                <text x="0" y="-50" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="10" fontWeight="850" fill="#7c3aed">
                  Consistent Hash Ring
                </text>

                {/* Shard 1 */}
                <g transform="translate(-60, -10)">
                  <circle r="14" fill="#ffffff" stroke="#7c3aed" strokeWidth="2" filter="url(#isoDropShadow)" />
                  <text x="0" y="3" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="8.5" fontWeight="800" fill="#5b21b6">
                    S1
                  </text>
                </g>

                {/* Shard 2 */}
                <g transform="translate(60, -10)">
                  <circle r="14" fill="#ffffff" stroke="#7c3aed" strokeWidth="2" filter="url(#isoDropShadow)" />
                  <text x="0" y="3" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="8.5" fontWeight="800" fill="#5b21b6">
                    S2
                  </text>
                </g>

                {/* Shard 3 */}
                <g transform="translate(0, 32)">
                  <circle r="14" fill="#ffffff" stroke="#7c3aed" strokeWidth="2" filter="url(#isoDropShadow)" />
                  <text x="0" y="3" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="8.5" fontWeight="800" fill="#5b21b6">
                    S3
                  </text>
                </g>
              </g>

              {/* Replication Paths */}
              <path d="M 180,134 L 140,210" stroke="#059669" strokeWidth="2" strokeDasharray="4 4" fill="none" />
              <path d="M 220,134 L 280,210" stroke="#059669" strokeWidth="2" strokeDasharray="4 4" fill="none" />
              <path d="M 248,110 Q 340,90 420,140" stroke="#7c3aed" strokeWidth="2" strokeDasharray="4 4" fill="none" />

              {isPlaying && (
                <>
                  <circle r="4" fill="#059669" stroke="#ffffff" strokeWidth="1.5">
                    <animateMotion path="M 180,134 L 140,210" dur="1s" repeatCount="indefinite" />
                  </circle>
                  <circle r="4" fill="#059669" stroke="#ffffff" strokeWidth="1.5">
                    <animateMotion path="M 220,134 L 280,210" dur="1.2s" repeatCount="indefinite" />
                  </circle>
                  <circle r="4" fill="#7c3aed" stroke="#ffffff" strokeWidth="1.5">
                    <animateMotion path="M 248,110 Q 340,90 420,140" dur="1.4s" repeatCount="indefinite" />
                  </circle>
                </>
              )}
            </g>
          )}

          {/* ================================================================
              BRANCH 04: COMMUNICATION (QUEUES, PUBSUB & REALTIME WEBSOCKETS)
              ================================================================ */}
          {moduleCode === "04" && (
            <g>
              {/* Event Producer */}
              <g
                className={styles.interactiveNode}
                transform="translate(110, 175)"
                onClick={() => setSelectedNodeId("client")}
              >
                <polygon points="0,-22 42,0 0,22 -42,0" fill="#ffffff" stroke="#0284c7" strokeWidth="2" filter="url(#isoDropShadow)" />
                <polygon points="-42,0 0,22 0,38 -42,16" fill="url(#prismSideLeft)" stroke="#0284c7" strokeWidth="1.5" />
                <polygon points="0,22 42,0 42,16 0,38" fill="url(#prismSideRight)" stroke="#0284c7" strokeWidth="1.5" />
                <text x="0" y="3" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="10" fontWeight="850" fill="#0f172a">
                  Producer App
                </text>
                <text x="0" y="52" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="9" fontWeight="800" fill="#0284c7">
                  Publish Order
                </text>
              </g>

              {/* Message Broker (RabbitMQ) */}
              <g
                className={styles.interactiveNode}
                transform="translate(300, 120)"
                onClick={() => setSelectedNodeId("rabbitmq")}
              >
                <polygon points="0,-26 52,0 0,26 -52,0" fill="url(#prismTopGrad)" stroke="#ea580c" strokeWidth="2.5" filter="url(#isoDropShadow)" />
                <polygon points="-52,0 0,26 0,48 -52,22" fill="#ffedd5" stroke="#ea580c" strokeWidth="1.5" />
                <polygon points="0,26 52,0 52,22 0,48" fill="#fed7aa" stroke="#ea580c" strokeWidth="1.5" />
                <text x="0" y="3" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="10.5" fontWeight="850" fill="#9a3412">
                  RabbitMQ Queue
                </text>
                <text x="0" y="-32" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="8.5" fontWeight="800" fill="#ea580c">
                  [Buffer: {Math.round(rps * 0.12)} msgs]
                </text>
              </g>

              {/* WebSocket Push Hub */}
              <g
                className={styles.interactiveNode}
                transform="translate(300, 240)"
                onClick={() => setSelectedNodeId("websocketHub")}
              >
                <polygon points="0,-20 42,0 0,20 -42,0" fill="#ffffff" stroke="#7c3aed" strokeWidth="2" filter="url(#isoDropShadow)" />
                <polygon points="-42,0 0,20 0,36 -42,16" fill="#ede9fe" stroke="#7c3aed" strokeWidth="1.5" />
                <polygon points="0,20 42,0 42,16 0,36" fill="#ddd6fe" stroke="#7c3aed" strokeWidth="1.5" />
                <text x="0" y="3" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="9.5" fontWeight="850" fill="#5b21b6">
                  WebSocket Hub
                </text>
                <text x="0" y="50" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="8" fontWeight="800" fill="#7c3aed">
                  Push Live GPS
                </text>
              </g>

              {/* Consumer Workers */}
              <g
                className={styles.interactiveNode}
                transform="translate(510, 140)"
                onClick={() => setSelectedNodeId("workers")}
              >
                {Array.from({ length: workerCount }).map((_, i) => (
                  <g key={i} transform={`translate(${(i - 1) * 26}, ${i * -12})`}>
                    <polygon points="0,-18 36,0 0,18 -36,0" fill="#ffffff" stroke="#059669" strokeWidth="1.8" filter="url(#isoDropShadow)" />
                    <polygon points="-36,0 0,18 0,30 -36,12" fill="#d1fae5" stroke="#059669" strokeWidth="1.2" />
                    <polygon points="0,18 36,0 36,12 0,30" fill="#a7f3d0" stroke="#059669" strokeWidth="1.2" />
                  </g>
                ))}
                <text x="0" y="3" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="10" fontWeight="850" fill="#065f46">
                  Consumer Pool
                </text>
                <text x="0" y="-30" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="8.5" fontWeight="800" fill="#059669">
                  Parallel Drain
                </text>
              </g>

              {/* Data Lines */}
              <path d="M 152,175 Q 210,140 248,120" stroke="#ea580c" strokeWidth="2.5" fill="none" />
              <path d="M 352,120 Q 420,110 474,140" stroke="#059669" strokeWidth="2.5" fill="none" />
              <path d="M 300,168 L 300,220" stroke="#7c3aed" strokeWidth="2" strokeDasharray="4 4" fill="none" />

              {isPlaying && (
                <>
                  <circle r="4.5" fill="#ea580c" stroke="#ffffff" strokeWidth="1.5">
                    <animateMotion path="M 152,175 Q 210,140 248,120" dur="0.8s" repeatCount="indefinite" />
                  </circle>
                  <circle r="4.5" fill="#059669" stroke="#ffffff" strokeWidth="1.5">
                    <animateMotion path="M 352,120 Q 420,110 474,140" dur="0.9s" repeatCount="indefinite" />
                  </circle>
                  <circle r="4" fill="#7c3aed" stroke="#ffffff" strokeWidth="1.5">
                    <animateMotion path="M 300,168 L 300,220" dur="1.2s" repeatCount="indefinite" />
                  </circle>
                </>
              )}
            </g>
          )}

          {/* ================================================================
              BRANCH 05: RELIABILITY (RATE LIMITER, CIRCUIT BREAKER, CHAOS)
              ================================================================ */}
          {moduleCode === "05" && (
            <g>
              {/* Ingress Gateway */}
              <g
                className={styles.interactiveNode}
                transform="translate(110, 175)"
                onClick={() => setSelectedNodeId("client")}
              >
                <polygon points="0,-22 42,0 0,22 -42,0" fill="#ffffff" stroke="#0284c7" strokeWidth="2" filter="url(#isoDropShadow)" />
                <polygon points="-42,0 0,22 0,38 -42,16" fill="url(#prismSideLeft)" stroke="#0284c7" strokeWidth="1.5" />
                <polygon points="0,22 42,0 42,16 0,38" fill="url(#prismSideRight)" stroke="#0284c7" strokeWidth="1.5" />
                <text x="0" y="3" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="10" fontWeight="850" fill="#0f172a">
                  Traffic Ingress
                </text>
                <text x="0" y="52" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="9" fontWeight="800" fill="#0284c7">
                  {rps.toLocaleString()} req/s
                </text>
              </g>

              {/* Rate Limiter */}
              <g
                className={styles.interactiveNode}
                transform="translate(260, 110)"
                onClick={() => setSelectedNodeId("rateLimiter")}
              >
                <polygon points="0,-22 44,0 0,22 -44,0" fill="#ffffff" stroke="#0284c7" strokeWidth="2" filter="url(#isoDropShadow)" />
                <polygon points="-44,0 0,22 0,40 -44,18" fill="#e0f2fe" stroke="#0284c7" strokeWidth="1.5" />
                <polygon points="0,22 44,0 44,18 0,40" fill="#bae6fd" stroke="#0284c7" strokeWidth="1.5" />
                <text x="0" y="3" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="9.5" fontWeight="850" fill="#0369a1">
                  Rate Limiter
                </text>
                <text x="0" y="-30" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="8.5" fontWeight="800" fill="#0284c7">
                  Token Bucket
                </text>
              </g>

              {/* Circuit Breaker Node */}
              <g
                className={styles.interactiveNode}
                transform="translate(410, 95)"
                onClick={() => setSelectedNodeId("circuitBreaker")}
              >
                <polygon
                  points="0,-24 48,0 0,24 -48,0"
                  fill={isChaosActive ? "#fee2e2" : "#ffffff"}
                  stroke={isChaosActive ? "#ef4444" : "#10b981"}
                  strokeWidth="2.5"
                  filter="url(#isoDropShadow)"
                />
                <polygon
                  points="-48,0 0,24 0,44 -48,20"
                  fill={isChaosActive ? "#fca5a5" : "#d1fae5"}
                  stroke={isChaosActive ? "#ef4444" : "#10b981"}
                  strokeWidth="1.5"
                />
                <polygon
                  points="0,24 48,0 48,20 0,44"
                  fill={isChaosActive ? "#f87171" : "#a7f3d0"}
                  stroke={isChaosActive ? "#ef4444" : "#10b981"}
                  strokeWidth="1.5"
                />
                <text x="0" y="3" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="10" fontWeight="850" fill={isChaosActive ? "#991b1b" : "#065f46"}>
                  Circuit Breaker
                </text>
                <text x="0" y="-32" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="8.5" fontWeight="800" fill={isChaosActive ? "#ef4444" : "#10b981"}>
                  [{isChaosActive ? "STATE: OPEN (TRIPPED)" : "STATE: CLOSED (HEALTHY)"}]
                </text>
              </g>

              {/* Fallback Graceful Service */}
              <g
                className={styles.interactiveNode}
                transform="translate(410, 235)"
                onClick={() => setSelectedNodeId("circuitBreaker")}
              >
                <polygon points="0,-20 40,0 0,20 -40,0" fill="#ffffff" stroke="#d97706" strokeWidth="2" filter="url(#isoDropShadow)" />
                <polygon points="-40,0 0,20 0,36 -40,16" fill="#fef3c7" stroke="#d97706" strokeWidth="1.5" />
                <polygon points="0,20 40,0 40,16 0,36" fill="#fde68a" stroke="#d97706" strokeWidth="1.5" />
                <text x="0" y="3" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="9.5" fontWeight="850" fill="#92400e">
                  Fallback Cache
                </text>
                <text x="0" y="50" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="8" fontWeight="800" fill="#d97706">
                  {isChaosActive ? "ACTIVE RESPONSE" : "Standby"}
                </text>
              </g>

              {/* Primary Microservice */}
              <g
                className={styles.interactiveNode}
                transform="translate(550, 160)"
                onClick={() => setSelectedNodeId("workers")}
              >
                <polygon
                  points="0,-22 44,0 0,22 -44,0"
                  fill={isChaosActive ? "#fff1f2" : "#ffffff"}
                  stroke={isChaosActive ? "#f43f5e" : "#2563eb"}
                  strokeWidth="2"
                  filter="url(#isoDropShadow)"
                />
                <polygon
                  points="-44,0 0,22 0,40 -44,18"
                  fill={isChaosActive ? "#fecdd3" : "#dbeafe"}
                  stroke={isChaosActive ? "#f43f5e" : "#2563eb"}
                  strokeWidth="1.5"
                />
                <polygon
                  points="0,22 44,0 44,18 0,40"
                  fill={isChaosActive ? "#fda4af" : "#bfdbfe"}
                  stroke={isChaosActive ? "#f43f5e" : "#2563eb"}
                  strokeWidth="1.5"
                />
                <text x="0" y="3" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="9.5" fontWeight="850" fill="#1e3a8a">
                  Primary Service
                </text>
                <text x="0" y="52" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="8" fontWeight="800" fill={isChaosActive ? "#e11d48" : "#2563eb"}>
                  {isChaosActive ? "503 UNAVAILABLE" : "200 OK"}
                </text>
              </g>

              {/* Connectors */}
              <path d="M 152,175 L 216,110" stroke="#0284c7" strokeWidth="2" fill="none" />
              <path d="M 304,110 L 362,95" stroke="#10b981" strokeWidth="2" fill="none" />
              <path d="M 410,140 L 410,215" stroke="#d97706" strokeWidth={isChaosActive ? "2.5" : "1.5"} strokeDasharray="4 4" fill="none" />
              <path d="M 458,95 Q 510,120 550,138" stroke={isChaosActive ? "#f43f5e" : "#2563eb"} strokeWidth="2" fill="none" />

              {isPlaying && (
                <>
                  <circle r="4.5" fill="#0284c7" stroke="#ffffff" strokeWidth="1.5">
                    <animateMotion path="M 152,175 L 216,110" dur="0.7s" repeatCount="indefinite" />
                  </circle>
                  {!isChaosActive ? (
                    <circle r="4.5" fill="#10b981" stroke="#ffffff" strokeWidth="1.5">
                      <animateMotion path="M 458,95 Q 510,120 550,138" dur="0.9s" repeatCount="indefinite" />
                    </circle>
                  ) : (
                    <circle r="4.5" fill="#d97706" stroke="#ffffff" strokeWidth="1.5">
                      <animateMotion path="M 410,140 L 410,215" dur="0.8s" repeatCount="indefinite" />
                    </circle>
                  )}
                </>
              )}
            </g>
          )}

          {/* ================================================================
              BRANCH 06: ARCHITECTURE & SAGAS (MICROSERVICES ORCHESTRATION)
              ================================================================ */}
          {moduleCode === "06" && (
            <g>
              {/* Saga Orchestrator */}
              <g
                className={styles.interactiveNode}
                transform="translate(340, 90)"
                onClick={() => setSelectedNodeId("sagaOrchestrator")}
              >
                <polygon points="0,-26 54,0 0,26 -54,0" fill="url(#prismTopGrad)" stroke="#7c3aed" strokeWidth="2.5" filter="url(#isoDropShadow)" />
                <polygon points="-54,0 0,26 0,48 -54,22" fill="#ede9fe" stroke="#7c3aed" strokeWidth="1.5" />
                <polygon points="0,26 54,0 54,22 0,48" fill="#ddd6fe" stroke="#7c3aed" strokeWidth="1.5" />
                <text x="0" y="3" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="10.5" fontWeight="850" fill="#5b21b6">
                  Camunda Zeebe
                </text>
                <text x="0" y="-32" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="8.5" fontWeight="800" fill="#7c3aed">
                  Saga Orchestrator
                </text>
              </g>

              {/* Service 1: Order */}
              <g
                className={styles.interactiveNode}
                transform="translate(160, 200)"
                onClick={() => setSelectedNodeId("workers")}
              >
                <polygon points="0,-20 40,0 0,20 -40,0" fill="#ffffff" stroke="#2563eb" strokeWidth="2" filter="url(#isoDropShadow)" />
                <polygon points="-40,0 0,20 0,36 -40,16" fill="#dbeafe" stroke="#2563eb" strokeWidth="1.5" />
                <polygon points="0,20 40,0 40,16 0,36" fill="#bfdbfe" stroke="#2563eb" strokeWidth="1.5" />
                <text x="0" y="3" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="9.5" fontWeight="850" fill="#1e3a8a">
                  Order Service
                </text>
                <text x="0" y="48" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="8" fontWeight="800" fill="#2563eb">
                  Create Pending
                </text>
              </g>

              {/* Service 2: Payment */}
              <g
                className={styles.interactiveNode}
                transform="translate(340, 240)"
                onClick={() => setSelectedNodeId("workers")}
              >
                <polygon points="0,-20 40,0 0,20 -40,0" fill="#ffffff" stroke="#059669" strokeWidth="2" filter="url(#isoDropShadow)" />
                <polygon points="-40,0 0,20 0,36 -40,16" fill="#d1fae5" stroke="#059669" strokeWidth="1.5" />
                <polygon points="0,20 40,0 40,16 0,36" fill="#a7f3d0" stroke="#059669" strokeWidth="1.5" />
                <text x="0" y="3" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="9.5" fontWeight="850" fill="#065f46">
                  Payment Service
                </text>
                <text x="0" y="48" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="8" fontWeight="800" fill="#059669">
                  Deduct Balance
                </text>
              </g>

              {/* Service 3: Logistics Delivery */}
              <g
                className={styles.interactiveNode}
                transform="translate(520, 200)"
                onClick={() => setSelectedNodeId("workers")}
              >
                <polygon points="0,-20 40,0 0,20 -40,0" fill="#ffffff" stroke="#0284c7" strokeWidth="2" filter="url(#isoDropShadow)" />
                <polygon points="-40,0 0,20 0,36 -40,16" fill="#e0f2fe" stroke="#0284c7" strokeWidth="1.5" />
                <polygon points="0,20 40,0 40,16 0,36" fill="#bae6fd" stroke="#0284c7" strokeWidth="1.5" />
                <text x="0" y="3" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="9.5" fontWeight="850" fill="#0369a1">
                  Delivery Service
                </text>
                <text x="0" y="48" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="8" fontWeight="800" fill="#0284c7">
                  Dispatch Driver
                </text>
              </g>

              {/* Orchestrator Command Links */}
              <path d="M 286,90 Q 200,120 160,180" stroke="#7c3aed" strokeWidth="2" strokeDasharray="4 4" fill="none" />
              <path d="M 340,138 L 340,220" stroke="#7c3aed" strokeWidth="2" strokeDasharray="4 4" fill="none" />
              <path d="M 394,90 Q 480,120 520,180" stroke="#7c3aed" strokeWidth="2" strokeDasharray="4 4" fill="none" />

              {isPlaying && (
                <>
                  <circle r="4" fill="#2563eb" stroke="#ffffff" strokeWidth="1.5">
                    <animateMotion path="M 286,90 Q 200,120 160,180" dur="1.1s" repeatCount="indefinite" />
                  </circle>
                  <circle r="4" fill="#059669" stroke="#ffffff" strokeWidth="1.5">
                    <animateMotion path="M 340,138 L 340,220" dur="0.9s" repeatCount="indefinite" />
                  </circle>
                  <circle r="4" fill="#0284c7" stroke="#ffffff" strokeWidth="1.5">
                    <animateMotion path="M 394,90 Q 480,120 520,180" dur="1.3s" repeatCount="indefinite" />
                  </circle>
                </>
              )}
            </g>
          )}

          {/* ================================================================
              BRANCH 07: SECURITY (JWT AUTHENTICATION & RBAC MATRIX)
              ================================================================ */}
          {moduleCode === "07" && (
            <g>
              {/* Keycloak IdP */}
              <g
                className={styles.interactiveNode}
                transform="translate(160, 110)"
                onClick={() => setSelectedNodeId("keycloakIdp")}
              >
                <polygon points="0,-22 44,0 0,22 -44,0" fill="#ffffff" stroke="#e11d48" strokeWidth="2" filter="url(#isoDropShadow)" />
                <polygon points="-44,0 0,22 0,40 -44,18" fill="#ffe4e6" stroke="#e11d48" strokeWidth="1.5" />
                <polygon points="0,22 44,0 44,18 0,40" fill="#fecdd3" stroke="#e11d48" strokeWidth="1.5" />
                <text x="0" y="3" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="10" fontWeight="850" fill="#9f1239">
                  Keycloak IdP
                </text>
                <text x="0" y="-30" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="8.5" fontWeight="800" fill="#e11d48">
                  OAuth2 / OIDC
                </text>
              </g>

              {/* JWT RS256 Guard */}
              <g
                className={styles.interactiveNode}
                transform="translate(340, 120)"
                onClick={() => setSelectedNodeId("gateway")}
              >
                <polygon points="0,-26 50,0 0,26 -50,0" fill="url(#prismTopGrad)" stroke="#2563eb" strokeWidth="2.5" filter="url(#isoDropShadow)" />
                <polygon points="-50,0 0,26 0,48 -50,22" fill="url(#prismSideLeft)" stroke="#2563eb" strokeWidth="1.5" />
                <polygon points="0,26 50,0 50,22 0,48" fill="url(#prismSideRight)" stroke="#2563eb" strokeWidth="1.5" />
                <text x="0" y="3" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="10" fontWeight="850" fill="#1e3a8a">
                  JWT Gatekeeper
                </text>
                <text x="0" y="-32" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="8.5" fontWeight="800" fill="#2563eb">
                  Verify Signature
                </text>
              </g>

              {/* RBAC Policy Engine */}
              <g
                className={styles.interactiveNode}
                transform="translate(520, 120)"
                onClick={() => setSelectedNodeId("rbacEngine")}
              >
                <polygon points="0,-22 44,0 0,22 -44,0" fill="#ffffff" stroke="#059669" strokeWidth="2" filter="url(#isoDropShadow)" />
                <polygon points="-44,0 0,22 0,40 -44,18" fill="#d1fae5" stroke="#059669" strokeWidth="1.5" />
                <polygon points="0,22 44,0 44,18 0,40" fill="#a7f3d0" stroke="#059669" strokeWidth="1.5" />
                <text x="0" y="3" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="10" fontWeight="850" fill="#065f46">
                  RBAC Enforcer
                </text>
                <text x="0" y="52" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="8.5" fontWeight="800" fill="#059669">
                  Claims: scope:admin
                </text>
              </g>

              {/* Encrypted Vault */}
              <g
                className={styles.interactiveNode}
                transform="translate(340, 240)"
                onClick={() => setSelectedNodeId("postgres")}
              >
                <polygon points="0,-20 40,0 0,20 -40,0" fill="#ffffff" stroke="#4f46e5" strokeWidth="2" filter="url(#isoDropShadow)" />
                <polygon points="-40,0 0,20 0,36 -40,16" fill="#e0e7ff" stroke="#4f46e5" strokeWidth="1.5" />
                <polygon points="0,20 40,0 40,16 0,36" fill="#c7d2fe" stroke="#4f46e5" strokeWidth="1.5" />
                <text x="0" y="3" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="9.5" fontWeight="850" fill="#312e81">
                  AES-256 Storage
                </text>
                <text x="0" y="48" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="8" fontWeight="800" fill="#4f46e5">
                  KMS Hardware Key
                </text>
              </g>

              {/* Paths */}
              <path d="M 204,110 L 290,120" stroke="#e11d48" strokeWidth="2" fill="none" />
              <path d="M 390,120 L 476,120" stroke="#059669" strokeWidth="2" fill="none" />
              <path d="M 340,168 L 340,220" stroke="#4f46e5" strokeWidth="2" strokeDasharray="4 4" fill="none" />

              {isPlaying && (
                <>
                  <circle r="4.5" fill="#e11d48" stroke="#ffffff" strokeWidth="1.5">
                    <animateMotion path="M 204,110 L 290,120" dur="0.8s" repeatCount="indefinite" />
                  </circle>
                  <circle r="4.5" fill="#059669" stroke="#ffffff" strokeWidth="1.5">
                    <animateMotion path="M 390,120 L 476,120" dur="0.9s" repeatCount="indefinite" />
                  </circle>
                  <circle r="4" fill="#4f46e5" stroke="#ffffff" strokeWidth="1.5">
                    <animateMotion path="M 340,168 L 340,220" dur="1.1s" repeatCount="indefinite" />
                  </circle>
                </>
              )}
            </g>
          )}

          {/* ================================================================
              BRANCH 08: SHIPPING (TESTING PYRAMID & CANARY CI/CD PIPELINE)
              ================================================================ */}
          {moduleCode === "08" && (
            <g>
              {/* Git Commit */}
              <g
                className={styles.interactiveNode}
                transform="translate(100, 160)"
                onClick={() => setSelectedNodeId("ciRunner")}
              >
                <polygon points="0,-20 38,0 0,20 -38,0" fill="#ffffff" stroke="#0f172a" strokeWidth="2" filter="url(#isoDropShadow)" />
                <polygon points="-38,0 0,20 0,36 -38,16" fill="#f1f5f9" stroke="#0f172a" strokeWidth="1.5" />
                <polygon points="0,20 38,0 38,16 0,36" fill="#e2e8f0" stroke="#0f172a" strokeWidth="1.5" />
                <text x="0" y="3" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="9.5" fontWeight="850" fill="#0f172a">
                  git push
                </text>
                <text x="0" y="48" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="8.5" fontWeight="800" fill="#475569">
                  Commit SHA
                </text>
              </g>

              {/* CI Test Runner */}
              <g
                className={styles.interactiveNode}
                transform="translate(260, 110)"
                onClick={() => setSelectedNodeId("ciRunner")}
              >
                <polygon points="0,-22 44,0 0,22 -44,0" fill="#ffffff" stroke="#2563eb" strokeWidth="2" filter="url(#isoDropShadow)" />
                <polygon points="-44,0 0,22 0,40 -44,18" fill="#dbeafe" stroke="#2563eb" strokeWidth="1.5" />
                <polygon points="0,22 44,0 44,18 0,40" fill="#bfdbfe" stroke="#2563eb" strokeWidth="1.5" />
                <text x="0" y="3" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="10" fontWeight="850" fill="#1e3a8a">
                  Vitest Runner
                </text>
                <text x="0" y="-30" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="8.5" fontWeight="800" fill="#2563eb">
                  12/12 Tests Pass
                </text>
              </g>

              {/* Docker Build */}
              <g
                className={styles.interactiveNode}
                transform="translate(420, 110)"
                onClick={() => setSelectedNodeId("ciRunner")}
              >
                <polygon points="0,-22 44,0 0,22 -44,0" fill="#ffffff" stroke="#0284c7" strokeWidth="2" filter="url(#isoDropShadow)" />
                <polygon points="-44,0 0,22 0,40 -44,18" fill="#e0f2fe" stroke="#0284c7" strokeWidth="1.5" />
                <polygon points="0,22 44,0 44,18 0,40" fill="#bae6fd" stroke="#0284c7" strokeWidth="1.5" />
                <text x="0" y="3" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="10" fontWeight="850" fill="#0369a1">
                  Docker Build
                </text>
                <text x="0" y="-30" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="8.5" fontWeight="800" fill="#0284c7">
                  Image: v2.4.0
                </text>
              </g>

              {/* Canary Deployment Cluster */}
              <g
                className={styles.interactiveNode}
                transform="translate(560, 180)"
                onClick={() => setSelectedNodeId("canaryDeploy")}
              >
                <polygon points="0,-24 48,0 0,24 -48,0" fill="#ffffff" stroke="#059669" strokeWidth="2.5" filter="url(#isoDropShadow)" />
                <polygon points="-48,0 0,24 0,44 -48,20" fill="#d1fae5" stroke="#059669" strokeWidth="1.5" />
                <polygon points="0,24 48,0 48,20 0,44" fill="#a7f3d0" stroke="#059669" strokeWidth="1.5" />
                <text x="0" y="3" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="10" fontWeight="850" fill="#065f46">
                  Argo Rollouts
                </text>
                <text x="0" y="52" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="8.5" fontWeight="800" fill="#059669">
                  Canary 10% Live
                </text>
              </g>

              {/* Pipeline Connectors */}
              <path d="M 138,160 L 216,110" stroke="#2563eb" strokeWidth="2" fill="none" />
              <path d="M 304,110 L 376,110" stroke="#0284c7" strokeWidth="2" fill="none" />
              <path d="M 464,110 Q 510,140 550,160" stroke="#059669" strokeWidth="2.5" fill="none" />

              {isPlaying && (
                <>
                  <circle r="4.5" fill="#2563eb" stroke="#ffffff" strokeWidth="1.5">
                    <animateMotion path="M 138,160 L 216,110" dur="0.9s" repeatCount="indefinite" />
                  </circle>
                  <circle r="4.5" fill="#0284c7" stroke="#ffffff" strokeWidth="1.5">
                    <animateMotion path="M 304,110 L 376,110" dur="0.7s" repeatCount="indefinite" />
                  </circle>
                  <circle r="4.5" fill="#059669" stroke="#ffffff" strokeWidth="1.5">
                    <animateMotion path="M 464,110 Q 510,140 550,160" dur="1s" repeatCount="indefinite" />
                  </circle>
                </>
              )}
            </g>
          )}

          {/* ================================================================
              BRANCH 09: WHOLE SYSTEMS (END-TO-END LARGE-SCALE ARCHITECTURE)
              ================================================================ */}
          {moduleCode === "09" && (
            <g>
              {/* Global Anycast CDN */}
              <g
                className={styles.interactiveNode}
                transform="translate(90, 160)"
                onClick={() => setSelectedNodeId("globalCdn")}
              >
                <polygon points="0,-22 42,0 0,22 -42,0" fill="#ffffff" stroke="#7c3aed" strokeWidth="2" filter="url(#isoDropShadow)" />
                <polygon points="-42,0 0,22 0,38 -42,16" fill="#ede9fe" stroke="#7c3aed" strokeWidth="1.5" />
                <polygon points="0,22 42,0 42,16 0,38" fill="#ddd6fe" stroke="#7c3aed" strokeWidth="1.5" />
                <text x="0" y="3" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="9.5" fontWeight="850" fill="#4c1d95">
                  Global CDN
                </text>
                <text x="0" y="52" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="8.5" fontWeight="800" fill="#7c3aed">
                  Anycast Edge
                </text>
              </g>

              {/* API Gateway Cluster */}
              <g
                className={styles.interactiveNode}
                transform="translate(230, 95)"
                onClick={() => setSelectedNodeId("gateway")}
              >
                <polygon points="0,-24 48,0 0,24 -48,0" fill="url(#prismTopGrad)" stroke="#2563eb" strokeWidth="2.5" filter="url(#isoDropShadow)" />
                <polygon points="-48,0 0,24 0,44 -48,20" fill="url(#prismSideLeft)" stroke="#2563eb" strokeWidth="1.5" />
                <polygon points="0,24 48,0 48,20 0,44" fill="url(#prismSideRight)" stroke="#2563eb" strokeWidth="1.5" />
                <text x="0" y="3" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="10" fontWeight="850" fill="#1e3a8a">
                  Ingress Gateway
                </text>
                <text x="0" y="-32" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="8.5" fontWeight="800" fill="#2563eb">
                  Rate Limit · Auth
                </text>
              </g>

              {/* In-Memory Redis Cache */}
              <g
                className={styles.interactiveNode}
                transform="translate(230, 230)"
                onClick={() => setSelectedNodeId("redisCache")}
              >
                <polygon points="0,-18 36,0 0,18 -36,0" fill="#ffffff" stroke="#e11d48" strokeWidth="2" filter="url(#isoDropShadow)" />
                <polygon points="-36,0 0,18 0,32 -36,14" fill="#ffe4e6" stroke="#e11d48" strokeWidth="1.5" />
                <polygon points="0,18 36,0 36,14 0,32" fill="#fecdd3" stroke="#e11d48" strokeWidth="1.5" />
                <text x="0" y="3" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="9" fontWeight="850" fill="#9f1239">
                  Redis KV
                </text>
                <text x="0" y="46" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="8" fontWeight="800" fill="#e11d48">
                  Sub-ms Cache
                </text>
              </g>

              {/* Microservices Pods */}
              <g
                className={styles.interactiveNode}
                transform="translate(420, 100)"
                onClick={() => setSelectedNodeId("workers")}
              >
                <polygon points="0,-24 48,0 0,24 -48,0" fill="#ffffff" stroke="#0284c7" strokeWidth="2" filter="url(#isoDropShadow)" />
                <polygon points="-48,0 0,24 0,44 -48,20" fill="#e0f2fe" stroke="#0284c7" strokeWidth="1.5" />
                <polygon points="0,24 48,0 48,20 0,44" fill="#bae6fd" stroke="#0284c7" strokeWidth="1.5" />
                <text x="0" y="3" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="10" fontWeight="850" fill="#0369a1">
                  Microservices
                </text>
                <text x="0" y="-30" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="8.5" fontWeight="800" fill="#0284c7">
                  Stateless HPA
                </text>
              </g>

              {/* Sharded DB + Blob Storage */}
              <g
                className={styles.interactiveNode}
                transform="translate(560, 200)"
                onClick={() => setSelectedNodeId("postgres")}
              >
                <polygon points="0,-24 48,0 0,24 -48,0" fill="#ffffff" stroke="#059669" strokeWidth="2.5" filter="url(#isoDropShadow)" />
                <polygon points="-48,0 0,24 0,44 -48,20" fill="#d1fae5" stroke="#059669" strokeWidth="1.5" />
                <polygon points="0,24 48,0 48,20 0,44" fill="#a7f3d0" stroke="#059669" strokeWidth="1.5" />
                <text x="0" y="3" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="10" fontWeight="850" fill="#065f46">
                  Sharded Storage
                </text>
                <text x="0" y="52" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="8.5" fontWeight="800" fill="#059669">
                  PostgreSQL + S3
                </text>
              </g>

              {/* Data Connections */}
              <path d="M 132,160 L 182,95" stroke="#7c3aed" strokeWidth="2" fill="none" />
              <path d="M 230,140 L 230,210" stroke="#e11d48" strokeWidth="2" strokeDasharray="3 3" fill="none" />
              <path d="M 278,95 L 372,100" stroke="#2563eb" strokeWidth="2" fill="none" />
              <path d="M 468,100 Q 520,130 540,175" stroke="#059669" strokeWidth="2.5" fill="none" />

              {isPlaying && (
                <>
                  <circle r="4.5" fill="#7c3aed" stroke="#ffffff" strokeWidth="1.5">
                    <animateMotion path="M 132,160 L 182,95" dur="0.8s" repeatCount="indefinite" />
                  </circle>
                  <circle r="4.5" fill="#2563eb" stroke="#ffffff" strokeWidth="1.5">
                    <animateMotion path="M 278,95 L 372,100" dur="0.7s" repeatCount="indefinite" />
                  </circle>
                  <circle r="4" fill="#059669" stroke="#ffffff" strokeWidth="1.5">
                    <animateMotion path="M 468,100 Q 520,130 540,175" dur="1s" repeatCount="indefinite" />
                  </circle>
                </>
              )}
            </g>
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
