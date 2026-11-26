import { useState } from "react";
import { Compass, Pause, Play, RotateCcw, Truck } from "lucide-react";
import type { Language } from "@/types";

interface NexusVietnamMap25dSimulatorProps {
  lang: Language;
}

interface HubInfo {
  id: string;
  name: string;
  nameEn: string;
  type: "mega" | "satellite";
  region: "bac" | "trung" | "nam";
  x: number;
  y: number;
  area: string;
  capacity: string;
  docks: number;
  slaTransit: string;
  descriptionVi: string;
  descriptionEn: string;
}

const VIETNAM_HUBS: HubInfo[] = [
  {
    id: "hub-han",
    name: "Hub Tổng Miền Bắc (Hà Nội - Gia Lâm)",
    nameEn: "Northern Mega Hub (Hanoi)",
    type: "mega",
    region: "bac",
    x: 350,
    y: 110,
    area: "25,000 m²",
    capacity: "65,000 kiện/h",
    docks: 48,
    slaTransit: "Nội thành 4h · Liên tỉnh 24h",
    descriptionVi: "Đầu mối tiếp nhận, phân loại và điều phối toàn bộ bưu kiện khu vực 25 tỉnh thành phía Bắc. Trang bị băng chuyền Cross-belt Sorter 2 tầng tự động nhận diện mã vạch 6 mặt.",
    descriptionEn: "Central sorting node for 25 northern provinces. Features dual-deck Cross-belt Sorters with 6-sided omnidirectional barcode reading.",
  },
  {
    id: "hub-hph",
    name: "Hub Vệ Tinh Hải Phòng",
    nameEn: "Hai Phong Satellite Hub",
    type: "satellite",
    region: "bac",
    x: 430,
    y: 125,
    area: "8,500 m²",
    capacity: "18,000 kiện/h",
    docks: 16,
    slaTransit: "Kết nối Hà Nội 2h",
    descriptionVi: "Cửa ngõ logistics vùng duyên hải Bắc Bộ và cảng biển, chuyên tuyến gom bưu kiện thương mại điện tử nhập khẩu và hàng công nghiệp nhẹ.",
    descriptionEn: "Coastal industrial hub connecting port freight and cross-border ecommerce into the northern regional network.",
  },
  {
    id: "hub-vii",
    name: "Hub Vệ Tinh Vinh (Nghệ An)",
    nameEn: "Vinh Regional Hub",
    type: "satellite",
    region: "bac",
    x: 360,
    y: 180,
    area: "7,000 m²",
    capacity: "15,000 kiện/h",
    docks: 14,
    slaTransit: "Kết nối Hà Nội 6h",
    descriptionVi: "Trạm trung chuyển bản lề khu vực Bắc Trung Bộ (Thanh Hóa - Nghệ An - Hà Tĩnh), giảm tải 30% cho Hub Tổng Hà Nội.",
    descriptionEn: "North-Central transit anchor buffering shipment flows across Thanh Hoa, Nghe An, and Ha Tinh provinces.",
  },
  {
    id: "hub-dad",
    name: "Hub Tổng Miền Trung (Đà Nẵng - Hòa Cầm)",
    nameEn: "Central Mega Hub (Da Nang)",
    type: "mega",
    region: "trung",
    x: 470,
    y: 250,
    area: "16,000 m²",
    capacity: "35,000 kiện/h",
    docks: 32,
    slaTransit: "Kết nối Bắc - Nam 12h",
    descriptionVi: "Đầu mối chia chọn trục chính giữa hai miền Nam - Bắc, đồng thời điều phối luồng hàng đi các tỉnh Duyên hải Nam Trung Bộ và Tây Nguyên.",
    descriptionEn: "Strategic midpoint hub bridging Northern and Southern flows while supplying Central Coast and Highland branches.",
  },
  {
    id: "hub-bmt",
    name: "Hub Vệ Tinh Buôn Ma Thuột",
    nameEn: "Highlands Satellite Hub (BMT)",
    type: "satellite",
    region: "trung",
    x: 490,
    y: 330,
    area: "6,500 m²",
    capacity: "12,000 kiện/h",
    docks: 12,
    slaTransit: "Kết nối TP.HCM 8h",
    descriptionVi: "Trạm gom và phân phối nông sản, cà phê, hồ tiêu và hàng bưu chính cho toàn bộ 5 tỉnh Tây Nguyên.",
    descriptionEn: "Highland agro-logistics and regional parcel terminal supplying 5 Central Highland provinces.",
  },
  {
    id: "hub-nha",
    name: "Hub Vệ Tinh Nha Trang",
    nameEn: "Nha Trang Satellite Hub",
    type: "satellite",
    region: "trung",
    x: 550,
    y: 350,
    area: "7,200 m²",
    capacity: "14,000 kiện/h",
    docks: 14,
    slaTransit: "Kết nối TP.HCM 7h",
    descriptionVi: "Trung tâm tiếp vận khu vực Nam Trung Bộ, hỗ trợ các tuyến vận tải biển và du lịch nghỉ dưỡng.",
    descriptionEn: "South-Central coastal logistics centre supporting tourist corridors and fast road transfers.",
  },
  {
    id: "hub-sgn",
    name: "Hub Tổng Miền Nam (TP.HCM / Sóng Thần)",
    nameEn: "Southern Mega Hub (HCMC)",
    type: "mega",
    region: "nam",
    x: 450,
    y: 420,
    area: "35,000 m²",
    capacity: "95,000 kiện/h",
    docks: 64,
    slaTransit: "Nội thành 3h · Miền Tây 6h",
    descriptionVi: "Tổng kho tự động hóa quy mô lớn nhất hệ thống, kết nối đường bay Tân Sơn Nhất, ga tàu hỏa Sóng Thần và cảng Cát Lái. Xử lý 55% tổng sản lượng bưu kiện toàn quốc.",
    descriptionEn: "Nexus flagship automated fulfillment and sortation center connecting Tan Son Nhat airport, Song Than rail, and Cat Lai port. Handles 55% of national volume.",
  },
  {
    id: "hub-vca",
    name: "Hub Vệ Tinh Cần Thơ (Tây Đô)",
    nameEn: "Can Tho Mekong Hub",
    type: "satellite",
    region: "nam",
    x: 370,
    y: 460,
    area: "10,000 m²",
    capacity: "22,000 kiện/h",
    docks: 20,
    slaTransit: "Kết nối TP.HCM 3.5h",
    descriptionVi: "Đầu mối phân loại trung tâm 13 tỉnh Đồng bằng sông Cửu Long, rút ngắn thời gian giao hàng Miền Tây về dưới 24h.",
    descriptionEn: "Mekong Delta primary sortation terminal connecting 13 southwestern provinces within same-day delivery windows.",
  },
];

export function NexusVietnamMap25dSimulator({ lang }: NexusVietnamMap25dSimulatorProps) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeHubId, setActiveHubId] = useState<string>("hub-sgn");
  const [activeCorridor, setActiveCorridor] = useState<"all" | "air" | "highway" | "mekong">("all");

  const selectedHub = VIETNAM_HUBS.find((h) => h.id === activeHubId) || VIETNAM_HUBS[6];

  return (
    <div
      style={{
        borderRadius: "12px",
        background: "radial-gradient(ellipse at 50% 20%, #0d1527 0%, #060913 100%)",
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
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
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
              2.5D LOGISTICS TOPOLOGY · VIETNAM HUB NETWORK
            </span>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "4px",
                fontSize: "10px",
                fontWeight: 700,
                color: "#4ade80",
                background: "rgba(34, 197, 94, 0.15)",
                border: "1px solid rgba(34, 197, 94, 0.3)",
                padding: "2px 6px",
                borderRadius: "4px",
              }}
            >
              <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#22c55e", display: "inline-block" }} />
              LIVE TELEMETRY
            </span>
          </div>
          <h3 style={{ margin: "4px 0 0 0", fontSize: "16px", color: "#ffffff", fontWeight: 750 }}>
            {lang === "vi"
              ? "Mạng Lưới 3 Hub Tổng & 5 Hub Vệ Tinh Điều Phối Bưu Kiện Toàn Quốc"
              : "National Logistics Grid: 3 Mega Hubs & 5 Satellite Sorting Centers"}
          </h3>
        </div>

        {/* Action Buttons */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          {/* Corridor Filter Pills */}
          <div style={{ display: "flex", gap: "4px", background: "rgba(15, 23, 42, 0.6)", padding: "3px", borderRadius: "6px", border: "1px solid #334155" }}>
            {[
              { id: "all", label: lang === "vi" ? "Tất Cả Tuyến" : "All Routes" },
              { id: "air", label: "Express Hàng Không" },
              { id: "highway", label: "Trục Bộ QL1A" },
              { id: "mekong", label: "Tuyến Miền Tây" },
            ].map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => setActiveCorridor(f.id as typeof activeCorridor)}
                style={{
                  border: "none",
                  background: activeCorridor === f.id ? "#0284c7" : "transparent",
                  color: activeCorridor === f.id ? "#ffffff" : "#94a3b8",
                  padding: "4px 8px",
                  borderRadius: "4px",
                  fontSize: "10.5px",
                  fontWeight: 700,
                  cursor: "pointer",
                  transition: "all 0.15s ease",
                }}
              >
                {f.label}
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
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            {isPlaying ? <Pause size={12} /> : <Play size={12} />}
            <span>{isPlaying ? (lang === "vi" ? "Tạm dừng" : "Pause") : (lang === "vi" ? "Tiếp tục" : "Play")}</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveHubId("hub-sgn")}
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
            title="Reset to HCMC Mega Hub"
          >
            <RotateCcw size={12} />
          </button>
        </div>
      </div>

      {/* 2. Main 2.5D SVG Canvas */}
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
          viewBox="0 0 840 520"
          style={{ width: "100%", height: "auto", display: "block" }}
        >
          <defs>
            {/* Gradients */}
            <linearGradient id="vnMapFloorGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0f172a" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#020617" stopOpacity="0.95" />
            </linearGradient>

            <linearGradient id="megaHubTopGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="100%" stopColor="#0284c7" />
            </linearGradient>
            <linearGradient id="megaHubSideGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0369a1" />
              <stop offset="100%" stopColor="#075985" />
            </linearGradient>

            <linearGradient id="satelliteTopGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#34d399" />
              <stop offset="100%" stopColor="#059669" />
            </linearGradient>
            <linearGradient id="satelliteSideGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#047857" />
              <stop offset="100%" stopColor="#065f46" />
            </linearGradient>

            {/* Glowing Filters */}
            <filter id="hubGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <filter id="packetGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="2.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Background Grid Pattern */}
          <g stroke="rgba(51, 65, 85, 0.25)" strokeWidth="0.8" strokeDasharray="3 3">
            {Array.from({ length: 15 }).map((_, i) => (
              <line key={`gx-${i}`} x1={i * 60} y1="0" x2={i * 60} y2="520" />
            ))}
            {Array.from({ length: 10 }).map((_, i) => (
              <line key={`gy-${i}`} x1="0" y1={i * 55} x2="840" y2={i * 55} />
            ))}
          </g>

          {/* S-shaped Stylized Vietnam Geographic Contour Outline */}
          <path
            d="M 280 40 
               C 340 30, 420 50, 440 90
               C 460 120, 420 150, 390 180
               C 370 200, 420 220, 460 230
               C 510 240, 560 270, 560 320
               C 560 360, 530 380, 490 410
               C 450 440, 380 470, 330 460
               C 300 450, 330 420, 360 400
               C 400 380, 450 350, 450 310
               C 450 270, 390 240, 340 210
               C 300 180, 290 140, 270 100
               Z"
            fill="url(#vnMapFloorGrad)"
            stroke="rgba(56, 189, 248, 0.3)"
            strokeWidth="1.8"
          />

          {/* Sea Label */}
          <text
            x="640"
            y="260"
            fontFamily="var(--studio-font-mono)"
            fontSize="12"
            fontWeight="800"
            fill="rgba(56, 189, 248, 0.2)"
            letterSpacing="0.25em"
          >
            BIỂN ĐÔNG (EAST SEA)
          </text>
          <text
            x="640"
            y="280"
            fontFamily="var(--studio-font-mono)"
            fontSize="10"
            fontWeight="700"
            fill="rgba(56, 189, 248, 0.15)"
          >
            Quần Đảo Hoàng Sa & Trường Sa
          </text>

          {/* CORRIDOR 1: Highway QL1A (Road Corridor) */}
          {(activeCorridor === "all" || activeCorridor === "highway") && (
            <g>
              <path
                id="corridorHighway"
                d="M 350 110 L 430 125 L 360 180 L 470 250 L 550 350 L 450 420 L 370 460"
                fill="none"
                stroke="#0284c7"
                strokeWidth="2.5"
                strokeDasharray="6 3"
                opacity="0.85"
              />
              {isPlaying && (
                <circle r="4.5" fill="#38bdf8" filter="url(#packetGlow)">
                  <animateMotion
                    path="M 350 110 L 430 125 L 360 180 L 470 250 L 550 350 L 450 420 L 370 460"
                    dur="7s"
                    repeatCount="indefinite"
                  />
                </circle>
              )}
            </g>
          )}

          {/* CORRIDOR 2: Express Air Cargo (Hanoi <-> Da Nang <-> HCMC) */}
          {(activeCorridor === "all" || activeCorridor === "air") && (
            <g>
              <path
                id="corridorAir"
                d="M 350 110 Q 520 170 470 250 Q 580 320 450 420"
                fill="none"
                stroke="#ec4899"
                strokeWidth="2.5"
                strokeDasharray="4 4"
                opacity="0.9"
              />
              {isPlaying && (
                <circle r="5" fill="#f472b6" filter="url(#packetGlow)">
                  <animateMotion
                    path="M 350 110 Q 520 170 470 250 Q 580 320 450 420"
                    dur="4s"
                    repeatCount="indefinite"
                  />
                </circle>
              )}
            </g>
          )}

          {/* CORRIDOR 3: Mekong Feeder (HCMC <-> Can Tho) */}
          {(activeCorridor === "all" || activeCorridor === "mekong") && (
            <g>
              <path
                id="corridorMekong"
                d="M 450 420 L 370 460"
                fill="none"
                stroke="#10b981"
                strokeWidth="3"
                strokeDasharray="5 3"
                opacity="0.9"
              />
              {isPlaying && (
                <circle r="4" fill="#34d399" filter="url(#packetGlow)">
                  <animateMotion path="M 450 420 L 370 460" dur="2.5s" repeatCount="indefinite" />
                </circle>
              )}
            </g>
          )}

          {/* 3. Isometric Nodes (Hubs) */}
          {VIETNAM_HUBS.map((hub) => {
            const isSelected = hub.id === activeHubId;
            const isMega = hub.type === "mega";
            const size = isMega ? 22 : 15;
            const height = isMega ? 20 : 12;

            return (
              <g
                key={hub.id}
                transform={`translate(${hub.x}, ${hub.y})`}
                onClick={() => setActiveHubId(hub.id)}
                style={{ cursor: "pointer" }}
              >
                {/* Selection Pulse Ring */}
                {isSelected && (
                  <ellipse
                    cx="0"
                    cy="0"
                    rx={size * 1.8}
                    ry={size * 0.9}
                    fill="none"
                    stroke={isMega ? "#38bdf8" : "#34d399"}
                    strokeWidth="2"
                    strokeDasharray="4 3"
                    className="pulse-dot"
                  />
                )}

                {/* Base Shadow */}
                <ellipse
                  cx="0"
                  cy="4"
                  rx={size * 1.2}
                  ry={size * 0.6}
                  fill="rgba(0, 0, 0, 0.5)"
                />

                {/* Left Prism Face */}
                <polygon
                  points={`0,0 -${size},-${size * 0.5} -${size},-${size * 0.5 + height} 0,-${height}`}
                  fill={isMega ? "url(#megaHubSideGrad)" : "url(#satelliteSideGrad)"}
                  stroke={isSelected ? "#ffffff" : "rgba(148, 163, 184, 0.4)"}
                  strokeWidth="0.8"
                />

                {/* Right Prism Face */}
                <polygon
                  points={`0,0 ${size},-${size * 0.5} ${size},-${size * 0.5 + height} 0,-${height}`}
                  fill={isMega ? "url(#megaHubSideGrad)" : "url(#satelliteSideGrad)"}
                  filter="brightness(0.85)"
                  stroke={isSelected ? "#ffffff" : "rgba(148, 163, 184, 0.4)"}
                  strokeWidth="0.8"
                />

                {/* Top Isometric Diamond */}
                <polygon
                  points={`0,-${height * 2} ${size},-${size * 0.5 + height} 0,-${height} -${size},-${size * 0.5 + height}`}
                  fill={isMega ? "url(#megaHubTopGrad)" : "url(#satelliteTopGrad)"}
                  stroke={isSelected ? "#ffffff" : "rgba(255, 255, 255, 0.7)"}
                  strokeWidth={isSelected ? "1.8" : "1"}
                  filter={isMega ? "url(#hubGlow)" : undefined}
                />

                {/* Center Hub Indicator Icon / Dot */}
                <circle
                  cx="0"
                  cy={-(size * 0.5 + height * 0.5)}
                  r={isMega ? "3.5" : "2.5"}
                  fill="#ffffff"
                />

                {/* Hub Label */}
                <text
                  x={hub.x > 450 ? size + 8 : -size - 8}
                  y={-height}
                  textAnchor={hub.x > 450 ? "start" : "end"}
                  fontFamily="var(--studio-font-mono)"
                  fontSize={isMega ? "11.5" : "10"}
                  fontWeight={isMega ? "850" : "750"}
                  fill={isSelected ? "#ffffff" : isMega ? "#38bdf8" : "#a7f3d0"}
                >
                  {hub.id === "hub-han" ? "HÀ NỘI" : hub.id === "hub-dad" ? "ĐÀ NẴNG" : hub.id === "hub-sgn" ? "TP.HCM" : hub.name.split(" ")[3] || hub.name}
                </text>

                <text
                  x={hub.x > 450 ? size + 8 : -size - 8}
                  y={-height + 12}
                  textAnchor={hub.x > 450 ? "start" : "end"}
                  fontFamily="var(--studio-font-mono)"
                  fontSize="8.5"
                  fontWeight="600"
                  fill="rgba(203, 213, 225, 0.7)"
                >
                  {hub.capacity}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      {/* 3. Selected Hub Deep Inspector Card */}
      <div
        style={{
          padding: "16px 18px",
          borderRadius: "8px",
          background: "rgba(15, 23, 42, 0.85)",
          border: `1.5px solid ${selectedHub.type === "mega" ? "#0284c7" : "#059669"}`,
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "8px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span
              style={{
                fontFamily: "var(--studio-font-mono)",
                fontSize: "11px",
                fontWeight: 850,
                color: selectedHub.type === "mega" ? "#38bdf8" : "#34d399",
                background: selectedHub.type === "mega" ? "rgba(2, 132, 199, 0.2)" : "rgba(5, 150, 105, 0.2)",
                padding: "2px 8px",
                borderRadius: "4px",
                border: `1px solid ${selectedHub.type === "mega" ? "#0284c7" : "#059669"}`,
              }}
            >
              {selectedHub.type === "mega" ? "MEGA SORTATION HUB" : "REGIONAL SATELLITE HUB"}
            </span>
            <strong style={{ fontSize: "14px", color: "#ffffff" }}>
              {lang === "vi" ? selectedHub.name : selectedHub.nameEn}
            </strong>
          </div>

          <div style={{ display: "flex", gap: "6px" }}>
            <span style={{ fontSize: "11px", fontFamily: "var(--studio-font-mono)", color: "#cbd5e1" }}>
              Cửa Dock xuất/nhập: <strong style={{ color: "#38bdf8" }}>{selectedHub.docks} Docks</strong>
            </span>
          </div>
        </div>

        {/* Metric Badges */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(170px, 1fr))", gap: "8px" }}>
          <div style={{ background: "rgba(30, 41, 59, 0.6)", padding: "8px 10px", borderRadius: "6px", border: "1px solid #334155" }}>
            <span style={{ fontSize: "10px", color: "#94a3b8", display: "block" }}>DIỆN TÍCH KHO BÃI</span>
            <strong style={{ fontSize: "13px", color: "#f8fafc", fontFamily: "var(--studio-font-mono)" }}>{selectedHub.area}</strong>
          </div>
          <div style={{ background: "rgba(30, 41, 59, 0.6)", padding: "8px 10px", borderRadius: "6px", border: "1px solid #334155" }}>
            <span style={{ fontSize: "10px", color: "#94a3b8", display: "block" }}>CÔNG SUẤT CHIA CHỌN</span>
            <strong style={{ fontSize: "13px", color: "#38bdf8", fontFamily: "var(--studio-font-mono)" }}>{selectedHub.capacity}</strong>
          </div>
          <div style={{ background: "rgba(30, 41, 59, 0.6)", padding: "8px 10px", borderRadius: "6px", border: "1px solid #334155" }}>
            <span style={{ fontSize: "10px", color: "#94a3b8", display: "block" }}>TIÊU CHUẨN SLA TRANSIT</span>
            <strong style={{ fontSize: "13px", color: "#4ade80", fontFamily: "var(--studio-font-mono)" }}>{selectedHub.slaTransit}</strong>
          </div>
        </div>

        <p style={{ margin: 0, fontSize: "12.5px", color: "#cbd5e1", lineHeight: 1.55 }}>
          {lang === "vi" ? selectedHub.descriptionVi : selectedHub.descriptionEn}
        </p>
      </div>

      {/* 4. Legend & Transit Corridors Note */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "10px",
          fontSize: "11px",
          color: "#94a3b8",
          borderTop: "1px solid rgba(148, 163, 184, 0.15)",
          paddingTop: "10px",
        }}
      >
        <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
          <span style={{ display: "inline-flex", alignItems: "center", gap: "5px" }}>
            <span style={{ width: "10px", height: "10px", background: "#38bdf8", borderRadius: "2px" }} />
            Hub Tổng (Hà Nội, Đà Nẵng, TP.HCM)
          </span>
          <span style={{ display: "inline-flex", alignItems: "center", gap: "5px" }}>
            <span style={{ width: "10px", height: "10px", background: "#34d399", borderRadius: "2px" }} />
            Hub Vệ Tinh (Hải Phòng, Vinh, Nha Trang, BMT, Cần Thơ)
          </span>
          <span style={{ display: "inline-flex", alignItems: "center", gap: "5px" }}>
            <Truck size={12} color="#0284c7" />
            Tuyến Trục Quốc Lộ 1A (Bắc - Nam 48h)
          </span>
          <span style={{ display: "inline-flex", alignItems: "center", gap: "5px" }}>
            <Compass size={12} color="#ec4899" />
            Express Hàng Không SGN-HAN (12h)
          </span>
        </div>

        <span style={{ fontFamily: "var(--studio-font-mono)", color: "#38bdf8", fontWeight: 700 }}>
          SLA VẬN CHUYỂN TOÀN QUỐC &lt; 24H
        </span>
      </div>
    </div>
  );
}
