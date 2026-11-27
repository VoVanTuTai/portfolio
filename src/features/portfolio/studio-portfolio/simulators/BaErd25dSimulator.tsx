import { useState } from "react";
import { Pause, Play, RotateCcw } from "lucide-react";
import type { Language } from "@/types";
import {
  ACADEMIC_THEORY_CONCEPTS,
  type TheoryConcept,
} from "@/data/theory-concepts.data";

interface BaErd25dSimulatorProps {
  lang: Language;
  onSelectConcept?: (concept: TheoryConcept) => void;
}

interface TableDetail {
  id: string;
  name: string;
  columns: string[];
  pk: string;
  fk: string;
  norm3nf: string;
  descVi: string;
}

const ERD_TABLES: Record<string, TableDetail> = {
  parcels: {
    id: "parcels",
    name: "parcels (Thực Thể Bưu Kiện)",
    columns: ["parcel_id (UUID)", "tracking_code (VARCHAR)", "weight_kg (DECIMAL)", "cod_amount (DECIMAL)", "current_state (ENUM)", "current_hub_id (UUID)"],
    pk: "parcel_id",
    fk: "current_hub_id -> hubs(hub_id)",
    norm3nf: "Chuẩn hóa 3NF: Tách riêng bảng trạng thái và bảng trạm trung chuyển, không lưu tên trạm hay địa chỉ trạm trực tiếp trong bưu kiện để triệt tiêu dị thường cập nhật.",
    descVi: "Bảng cốt lõi quản lý thông tin bưu kiện và giá trị tiền thu hộ COD. Mỗi bưu kiện có một trạng thái xác định duy nhất do máy trạng thái Camunda kiểm soát.",
  },
  hubs: {
    id: "hubs",
    name: "hubs (Mạng Lưới Bưu Cục)",
    columns: ["hub_id (UUID)", "hub_code (VARCHAR)", "hub_name (VARCHAR)", "city (VARCHAR)", "capacity_parcels (INT)"],
    pk: "hub_id",
    fk: "None (Bảng danh mục)",
    norm3nf: "Chuẩn hóa 2NF/3NF: Toàn bộ thông tin địa lý và sức chứa phụ thuộc duy nhất vào khóa chính hub_id.",
    descVi: "Danh mục các trung tâm khai thác (SOC) và bưu cục giao dịch trên toàn quốc, phục vụ việc định tuyến vận chuyển bưu kiện liên tỉnh.",
  },
  scanEvents: {
    id: "scanEvents",
    name: "scan_events (Lịch Sử Quét Bưu Cục)",
    columns: ["event_id (BIGSERIAL)", "parcel_id (UUID)", "idempotency_key (VARCHAR)", "gps_lat (DECIMAL)", "gps_lon (DECIMAL)", "scanned_at (TIMESTAMP)"],
    pk: "event_id",
    fk: "parcel_id -> parcels(parcel_id)",
    norm3nf: "Bảo đảm toàn vẹn tham chiếu (Referential Integrity): Lưu vết chuỗi quét bất biến (Immutable Audit Trail) phục vụ đối soát và tra cứu thời gian thực.",
    descVi: "Bảng nhật ký ghi nhận mọi lần quét mã vạch của tài xế. Cột idempotency_key có chỉ mục UNIQUE bảo đảm không bao giờ có 2 sự kiện quét trùng lặp.",
  },
  codReconcile: {
    id: "codReconcile",
    name: "cod_reconciliations (Đối Soát Tiền Mặt)",
    columns: ["recon_id (UUID)", "parcel_id (UUID)", "driver_id (UUID)", "expected_cod (DECIMAL)", "actual_cash (DECIMAL)", "reconciled_status (ENUM)"],
    pk: "recon_id",
    fk: "parcel_id -> parcels(parcel_id)",
    norm3nf: "Triệt tiêu phụ thuộc bắc cầu: Tách bảng tài chính riêng khỏi bảng bưu kiện, hỗ trợ đối soát kế toán độc lập cuối ngày.",
    descVi: "Bảng quản lý đối soát dòng tiền thu hộ giữa tài xế giao nhận và thủ quỹ bưu cục cuối ngày, bảo đảm số tiền nộp khớp 100% với hệ thống.",
  },
};

export function BaErd25dSimulator({ lang, onSelectConcept }: BaErd25dSimulatorProps) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [selectedTableId, setSelectedTableId] = useState<string>("parcels");

  const selectedTable = ERD_TABLES[selectedTableId] || ERD_TABLES.parcels;

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
            onClick={() => setSelectedTableId("parcels")}
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

        {/* Table Selector Pills */}
        <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
          {Object.values(ERD_TABLES).map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setSelectedTableId(t.id)}
              style={{
                padding: "4px 10px",
                borderRadius: "6px",
                border: selectedTableId === t.id ? "1.5px solid #2563eb" : "1px solid #cbd5e1",
                background: selectedTableId === t.id ? "#eff6ff" : "#ffffff",
                color: selectedTableId === t.id ? "#1d4ed8" : "#475569",
                fontSize: "11px",
                fontWeight: 800,
                cursor: "pointer",
              }}
            >
              {t.name.split(" ")[0]}
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
              background: "#16a34a",
              display: "inline-block",
            }}
          />
          <strong style={{ color: "#0f172a" }}>
            MÔ HÌNH DỮ LIỆU CHUẨN HÓA 3NF: Triệt Tiêu Dị Thường Sửa Đổi & Khóa Ngoại Ràng Buộc Toàn Vẹn
          </strong>
        </div>

        <div style={{ display: "flex", gap: "14px" }}>
          <span>CHỈ MỤC: <strong style={{ color: "#2563eb" }}>B-Tree Index</strong></span>
          <span>TOÀN VẸN: <strong style={{ color: "#16a34a" }}>ACID 100%</strong></span>
        </div>
      </div>

      {/* 3. 2.5D Isometric Database Schema SVG Engine */}
      <div
        style={{
          padding: "16px 10px",
          background: "linear-gradient(135deg, #f0f7ff 0%, #ffffff 50%, #eff6ff 100%)",
          overflowX: "auto",
        }}
      >
        <svg
          viewBox="0 0 760 360"
          style={{ width: "100%", minWidth: "680px", height: "auto", display: "block" }}
          aria-label="Sơ đồ 2.5D ERD 3NF Relational Model"
        >
          <defs>
            <filter id="erdShadow" x="-20%" y="-20%" width="150%" height="150%">
              <feDropShadow dx="2" dy="4" stdDeviation="0" floodColor="#0f172a" floodOpacity="0.8" />
            </filter>
          </defs>

          {/* ISOMETRIC RELATIONSHIP PATHS */}
          <path d="M 190,160 L 320,100" fill="none" stroke="#2563eb" strokeWidth="2" strokeDasharray="4 3" />
          <path d="M 190,190 L 570,160" fill="none" stroke="#059669" strokeWidth="2.5" />
          <path d="M 190,210 L 320,270" fill="none" stroke="#d97706" strokeWidth="2" strokeDasharray="4 3" />

          {/* ANIMATED INTEGRITY CONSTRAINT PACKETS */}
          {isPlaying && (
            <>
              <circle r="4.5" fill="#2563eb" stroke="#ffffff" strokeWidth="1.5">
                <animateMotion path="M 190,160 L 320,100" dur="1.5s" repeatCount="indefinite" />
              </circle>
              <circle r="4.5" fill="#059669" stroke="#ffffff" strokeWidth="1.5">
                <animateMotion path="M 190,190 L 570,160" dur="1.8s" repeatCount="indefinite" />
              </circle>
              <circle r="4.5" fill="#d97706" stroke="#ffffff" strokeWidth="1.5">
                <animateMotion path="M 190,210 L 320,270" dur="1.4s" repeatCount="indefinite" />
              </circle>
            </>
          )}

          {/* TABLE 1: PARCELS (WEST) */}
          <g
            transform="translate(130, 180)"
            onClick={() => {
              setSelectedTableId("parcels");
              onSelectConcept?.(ACADEMIC_THEORY_CONCEPTS["concept-3nf-normalization"]);
            }}
            style={{ cursor: "pointer" }}
          >
            <polygon points="0,-28 60,0 0,28 -60,0" fill={selectedTableId === "parcels" ? "#eff6ff" : "#ffffff"} stroke="#2563eb" strokeWidth={selectedTableId === "parcels" ? 2.5 : 1.8} filter="url(#erdShadow)" />
            <polygon points="-60,0 0,28 0,48 -60,20" fill="#dbeafe" stroke="#2563eb" strokeWidth="1.5" />
            <polygon points="0,28 60,0 60,20 0,48" fill="#bfdbfe" stroke="#2563eb" strokeWidth="1.5" />
            <text x="0" y="3" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="9.5" fontWeight="850" fill="#0f172a">parcels</text>
            <text x="0" y="62" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="8" fontWeight="800" fill="#2563eb">PK: parcel_id</text>
          </g>

          {/* TABLE 2: HUBS (NORTH) */}
          <g
            transform="translate(380, 80)"
            onClick={() => {
              setSelectedTableId("hubs");
              onSelectConcept?.(ACADEMIC_THEORY_CONCEPTS["concept-3nf-normalization"]);
            }}
            style={{ cursor: "pointer" }}
          >
            <polygon points="0,-28 60,0 0,28 -60,0" fill={selectedTableId === "hubs" ? "#eff6ff" : "#ffffff"} stroke="#1d4ed8" strokeWidth={selectedTableId === "hubs" ? 2.5 : 1.8} filter="url(#erdShadow)" />
            <polygon points="-60,0 0,28 0,48 -60,20" fill="#dbeafe" stroke="#1d4ed8" strokeWidth="1.5" />
            <polygon points="0,28 60,0 60,20 0,48" fill="#bfdbfe" stroke="#1d4ed8" strokeWidth="1.5" />
            <text x="0" y="3" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="9.5" fontWeight="850" fill="#0f172a">hubs</text>
            <text x="0" y="62" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="8" fontWeight="800" fill="#1d4ed8">PK: hub_id</text>
          </g>

          {/* TABLE 3: SCAN_EVENTS (EAST) */}
          <g
            transform="translate(630, 160)"
            onClick={() => {
              setSelectedTableId("scanEvents");
              onSelectConcept?.(ACADEMIC_THEORY_CONCEPTS["concept-3nf-normalization"]);
            }}
            style={{ cursor: "pointer" }}
          >
            <polygon points="0,-28 60,0 0,28 -60,0" fill={selectedTableId === "scanEvents" ? "#f0fdf4" : "#ffffff"} stroke="#059669" strokeWidth={selectedTableId === "scanEvents" ? 2.5 : 1.8} filter="url(#erdShadow)" />
            <polygon points="-60,0 0,28 0,48 -60,20" fill="#d1fae5" stroke="#059669" strokeWidth="1.5" />
            <polygon points="0,28 60,0 60,20 0,48" fill="#a7f3d0" stroke="#059669" strokeWidth="1.5" />
            <text x="0" y="3" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="9.5" fontWeight="850" fill="#065f46">scan_events</text>
            <text x="0" y="62" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="8" fontWeight="800" fill="#059669">FK: parcel_id</text>
          </g>

          {/* TABLE 4: COD_RECONCILIATIONS (SOUTH) */}
          <g
            transform="translate(380, 275)"
            onClick={() => {
              setSelectedTableId("codReconcile");
              onSelectConcept?.(ACADEMIC_THEORY_CONCEPTS["concept-3nf-normalization"]);
            }}
            style={{ cursor: "pointer" }}
          >
            <polygon points="0,-28 60,0 0,28 -60,0" fill={selectedTableId === "codReconcile" ? "#fef3c7" : "#ffffff"} stroke="#d97706" strokeWidth={selectedTableId === "codReconcile" ? 2.5 : 1.8} filter="url(#erdShadow)" />
            <polygon points="-60,0 0,28 0,48 -60,20" fill="#fef3c7" stroke="#d97706" strokeWidth="1.5" />
            <polygon points="0,28 60,0 60,20 0,48" fill="#fde68a" stroke="#d97706" strokeWidth="1.5" />
            <text x="0" y="3" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="9.5" fontWeight="850" fill="#92400e">cod_reconcile</text>
            <text x="0" y="62" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="8" fontWeight="800" fill="#d97706">1:1 Financial Ledger</text>
          </g>
        </svg>
      </div>

      {/* 4. Table Detail Footer */}
      <div style={{ padding: "16px 20px", background: "#ffffff", borderTop: "1.5px solid #d8e6f5" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "8px", flexWrap: "wrap", gap: "8px" }}>
          <strong style={{ fontSize: "14px", color: "#0f172a" }}>{selectedTable.name}</strong>
          <div style={{ display: "flex", gap: "12px", fontSize: "11px", fontFamily: "var(--font-mono)" }}>
            <span style={{ color: "#2563eb" }}>PK: <strong>{selectedTable.pk}</strong></span>
            <span style={{ color: "#d97706" }}>FK: <strong>{selectedTable.fk}</strong></span>
          </div>
        </div>

        <p style={{ margin: "0 0 10px 0", fontSize: "12.5px", color: "#475569", lineHeight: 1.6 }}>
          {selectedTable.descVi}
        </p>

        <div style={{ padding: "8px 12px", background: "#eff6ff", borderRadius: "6px", fontSize: "11.5px", color: "#1e40af", border: "1px solid #bfdbfe" }}>
          <strong>Quy chuẩn 3NF:</strong> {selectedTable.norm3nf}
        </div>
      </div>
    </div>
  );
}

export default BaErd25dSimulator;
