import { useState } from "react";
import { Pause, Play, RotateCcw } from "lucide-react";
import type { Language } from "@/types";

interface BaDdd25dSimulatorProps {
  lang: Language;
}

interface ContextDetail {
  id: string;
  name: string;
  role: string;
  aggregates: string;
  events: string;
  descVi: string;
  descEn: string;
}

const DDD_CONTEXTS: Record<string, ContextDetail> = {
  parcel: {
    id: "parcel",
    name: "Parcel & Consignment Context",
    role: "CORE DOMAIN",
    aggregates: "ParcelAggregate (Parcel, ConsignmentItem, Barcode)",
    events: "ParcelCreated, ParcelScanned, ParcelStateChanged",
    descVi: "Quản lý vòng đời bưu kiện, thông tin người gửi/người nhận, kích thước cân nặng và các sự kiện quét mã tại bưu cục. Độc lập hoàn toàn với phương thức tính cước hay thông tin tài xế.",
    descEn: "Governs parcel lifecycle, sender/receiver specs, dimensions, and hub scan events. Fully decoupled from financial settlement or fleet dispatch.",
  },
  routing: {
    id: "routing",
    name: "Routing & Hub Transfer Context",
    role: "SUPPORTING DOMAIN",
    aggregates: "RoutePlanAggregate (HubManifest, TransferLeg, Waybill)",
    events: "ManifestSealed, InterHubTransferStarted, HubArrived",
    descVi: "Xếp lịch trình xe tải liên tỉnh, lập bảng kê chuyển tiếp giữa các trung tâm khai thác (SOC) và kho vệ tinh. Tối ưu hóa tải trọng xe và thời gian trung chuyển.",
    descEn: "Schedules line-haul truck routes, creates inter-hub transfer manifests, and optimizes cargo load capacity across sorting hubs.",
  },
  finance: {
    id: "finance",
    name: "COD Financial Settlement Context",
    role: "GENERIC / FINANCIAL DOMAIN",
    aggregates: "CodLedgerAggregate (CodInvoice, ShipperBalance, VatSlip)",
    events: "CodCollected, ShipperRemitted, DailyReconBalanced",
    descVi: "Quản lý dòng tiền thu hộ COD, đối soát tiền mặt cuối ngày giữa tài xế và thủ quỹ bưu cục. Phát hành hóa đơn điện tử VAT và đối soát công nợ khách hàng doanh nghiệp.",
    descEn: "Governs cash-on-delivery collections, end-of-day driver cash reconciliations, VAT e-invoices, and corporate client debt settlement.",
  },
  fleet: {
    id: "fleet",
    name: "Fleet & IoT GPS Tracking Context",
    role: "TELEMETRY / INFRASTRUCTURE",
    aggregates: "VehicleTelemetryAggregate (TruckGps, OdoLog, DriverShift)",
    events: "GpsPingEmitted, RouteDeviated, SpeedLimitExceeded",
    descVi: "Thu thập dữ liệu định vị GPS từ hộp đen xe tải và điện thoại shipper. Phát hiện độ lệch tuyến đường, tính toán vận tốc trung bình và đẩy dữ liệu lên bản đồ Leaflet.",
    descEn: "Ingests real-time GPS telemetry from IoT blackboxes and mobile clients, detecting route deviations and pushing live coordinates to Leaflet.",
  },
};

export function BaDdd25dSimulator({ lang }: BaDdd25dSimulatorProps) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [selectedContextId, setSelectedContextId] = useState<string>("parcel");

  const selectedContext = DDD_CONTEXTS[selectedContextId] || DDD_CONTEXTS.parcel;

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
            onClick={() => setSelectedContextId("parcel")}
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

        {/* Context Selector Pills */}
        <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
          {Object.values(DDD_CONTEXTS).map((ctx) => (
            <button
              key={ctx.id}
              type="button"
              onClick={() => setSelectedContextId(ctx.id)}
              style={{
                padding: "4px 10px",
                borderRadius: "6px",
                border: selectedContextId === ctx.id ? "1.5px solid #2563eb" : "1px solid #cbd5e1",
                background: selectedContextId === ctx.id ? "#eff6ff" : "#ffffff",
                color: selectedContextId === ctx.id ? "#1d4ed8" : "#475569",
                fontSize: "11px",
                fontWeight: 800,
                cursor: "pointer",
              }}
            >
              {ctx.name.split(" ")[0]}
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
              background: "#059669",
              display: "inline-block",
            }}
          />
          <strong style={{ color: "#0f172a" }}>
            KIẾN TRÚC MIỀN NGHIỆP VỤ DDD: Bounded Contexts Độc Lập Giao Tiếp Qua Event Bus (RabbitMQ)
          </strong>
        </div>

        <div style={{ display: "flex", gap: "14px" }}>
          <span>NGÔN NGỮ CHUNG: <strong style={{ color: "#2563eb" }}>Ubiquitous Language</strong></span>
          <span>LIÊN KẾT: <strong style={{ color: "#16a34a" }}>Anti-Corruption Layer</strong></span>
        </div>
      </div>

      {/* 3. 2.5D Isometric Islands SVG Engine */}
      <div
        style={{
          padding: "16px 10px",
          background: "linear-gradient(135deg, #f0fdf4 0%, #ffffff 50%, #f0f7ff 100%)",
          overflowX: "auto",
        }}
      >
        <svg
          viewBox="0 0 760 360"
          style={{ width: "100%", minWidth: "680px", height: "auto", display: "block" }}
          aria-label="Sơ đồ 2.5D Bounded Contexts DDD"
        >
          <defs>
            <filter id="dddShadow" x="-20%" y="-20%" width="150%" height="150%">
              <feDropShadow dx="2" dy="4" stdDeviation="0" floodColor="#0f172a" floodOpacity="0.8" />
            </filter>
          </defs>

          {/* CENTRAL EVENT BUS RING */}
          <ellipse cx="380" cy="180" rx="200" ry="85" fill="none" stroke="#93c5fd" strokeWidth="2" strokeDasharray="5 5" />
          <ellipse cx="380" cy="180" rx="55" ry="25" fill="#f8fafc" stroke="#2563eb" strokeWidth="1.8" filter="url(#dddShadow)" />
          <text x="380" y="184" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="9.5" fontWeight="850" fill="#1e40af">
            EVENT BUS
          </text>

          {/* ANIMATED EVENT PACKETS AROUND BUS */}
          {isPlaying && (
            <>
              <circle r="4.5" fill="#2563eb" stroke="#ffffff" strokeWidth="1.5">
                <animateMotion path="M 180,180 A 200,85 0 1,0 580,180 A 200,85 0 1,0 180,180" dur="4s" repeatCount="indefinite" />
              </circle>
              <circle r="4.5" fill="#16a34a" stroke="#ffffff" strokeWidth="1.5">
                <animateMotion path="M 580,180 A 200,85 0 1,0 180,180 A 200,85 0 1,0 580,180" dur="4s" repeatCount="indefinite" />
              </circle>
            </>
          )}

          {/* ISLAND 1: PARCEL CONTEXT (WEST) */}
          <g transform="translate(130, 180)" onClick={() => setSelectedContextId("parcel")} style={{ cursor: "pointer" }}>
            <polygon points="0,-28 55,0 0,28 -55,0" fill={selectedContextId === "parcel" ? "#eff6ff" : "#ffffff"} stroke="#2563eb" strokeWidth={selectedContextId === "parcel" ? 2.5 : 1.8} filter="url(#dddShadow)" />
            <polygon points="-55,0 0,28 0,46 -55,18" fill="#dbeafe" stroke="#2563eb" strokeWidth="1.5" />
            <polygon points="0,28 55,0 55,18 0,46" fill="#bfdbfe" stroke="#2563eb" strokeWidth="1.5" />
            <text x="0" y="3" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="9.5" fontWeight="850" fill="#0f172a">Parcel Context</text>
            <text x="0" y="60" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="8" fontWeight="800" fill="#2563eb">Core Domain</text>
          </g>

          {/* ISLAND 2: ROUTING CONTEXT (NORTH) */}
          <g transform="translate(380, 80)" onClick={() => setSelectedContextId("routing")} style={{ cursor: "pointer" }}>
            <polygon points="0,-28 55,0 0,28 -55,0" fill={selectedContextId === "routing" ? "#f0fdf4" : "#ffffff"} stroke="#059669" strokeWidth={selectedContextId === "routing" ? 2.5 : 1.8} filter="url(#dddShadow)" />
            <polygon points="-55,0 0,28 0,46 -55,18" fill="#d1fae5" stroke="#059669" strokeWidth="1.5" />
            <polygon points="0,28 55,0 55,18 0,46" fill="#a7f3d0" stroke="#059669" strokeWidth="1.5" />
            <text x="0" y="3" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="9.5" fontWeight="850" fill="#065f46">Routing Context</text>
            <text x="0" y="60" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="8" fontWeight="800" fill="#059669">Supporting Domain</text>
          </g>

          {/* ISLAND 3: COD FINANCE CONTEXT (EAST) */}
          <g transform="translate(630, 180)" onClick={() => setSelectedContextId("finance")} style={{ cursor: "pointer" }}>
            <polygon points="0,-28 55,0 0,28 -55,0" fill={selectedContextId === "finance" ? "#fef3c7" : "#ffffff"} stroke="#d97706" strokeWidth={selectedContextId === "finance" ? 2.5 : 1.8} filter="url(#dddShadow)" />
            <polygon points="-55,0 0,28 0,46 -55,18" fill="#fef3c7" stroke="#d97706" strokeWidth="1.5" />
            <polygon points="0,28 55,0 55,18 0,46" fill="#fde68a" stroke="#d97706" strokeWidth="1.5" />
            <text x="0" y="3" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="9.5" fontWeight="850" fill="#92400e">COD Finance</text>
            <text x="0" y="60" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="8" fontWeight="800" fill="#d97706">Financial Ledger</text>
          </g>

          {/* ISLAND 4: FLEET IOT CONTEXT (SOUTH) */}
          <g transform="translate(380, 275)" onClick={() => setSelectedContextId("fleet")} style={{ cursor: "pointer" }}>
            <polygon points="0,-28 55,0 0,28 -55,0" fill={selectedContextId === "fleet" ? "#faf5ff" : "#ffffff"} stroke="#7c3aed" strokeWidth={selectedContextId === "fleet" ? 2.5 : 1.8} filter="url(#dddShadow)" />
            <polygon points="-55,0 0,28 0,46 -55,18" fill="#ede9fe" stroke="#7c3aed" strokeWidth="1.5" />
            <polygon points="0,28 55,0 55,18 0,46" fill="#ddd6fe" stroke="#7c3aed" strokeWidth="1.5" />
            <text x="0" y="3" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="9.5" fontWeight="850" fill="#5b21b6">Fleet Telemetry</text>
            <text x="0" y="60" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="8" fontWeight="800" fill="#7c3aed">GPS & IoT Sensors</text>
          </g>
        </svg>
      </div>

      {/* 4. Domain Inspector Footer */}
      <div style={{ padding: "16px 20px", background: "#ffffff", borderTop: "1.5px solid #d8e6f5" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "8px", flexWrap: "wrap", gap: "8px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "10.5px", fontWeight: 800, padding: "2px 8px", borderRadius: "4px", background: "#eff6ff", color: "#1d4ed8", border: "1px solid #bfdbfe" }}>
              {selectedContext.role}
            </span>
            <strong style={{ fontSize: "14px", color: "#0f172a" }}>{selectedContext.name}</strong>
          </div>
          <span style={{ fontSize: "11px", color: "#64748b", fontFamily: "var(--font-mono)" }}>
            Aggregates: <strong style={{ color: "#2563eb" }}>{selectedContext.aggregates}</strong>
          </span>
        </div>

        <p style={{ margin: "0 0 10px 0", fontSize: "12.5px", color: "#475569", lineHeight: 1.6 }}>
          {lang === "vi" ? selectedContext.descVi : selectedContext.descEn}
        </p>

        <div style={{ padding: "8px 12px", background: "#f8fafc", borderRadius: "6px", fontSize: "11.5px", fontFamily: "var(--font-mono)", color: "#334155" }}>
          Domain Events: <strong style={{ color: "#16a34a" }}>{selectedContext.events}</strong>
        </div>
      </div>
    </div>
  );
}

export default BaDdd25dSimulator;
