import type { ArchStep } from "@/types";

export const archSteps: ArchStep[] = [
  {
    id: "ingestion",
    title: "01. Ingestion",
    tech: "NestJS · API",
    name: "API Gateway & Ingestion",
    metric: "OpenAPI 3.0 · Idempotency",
    desc: {
      vi: "Tiếp nhận và xác thực mã vận đơn, chống trùng lặp request quét mã đơn hàng bằng Idempotency Key và xác thực JWT RBAC.",
      en: "Ingests and validates shipment scan events, preventing duplicate scan requests with Idempotency Keys and JWT RBAC validation.",
    },
    tags: ["NestJS", "OpenAPI 3.0", "Idempotency Key", "Rate Limiting"],
  },
  {
    id: "workflow",
    title: "02. Workflow",
    tech: "Camunda BPMN",
    name: "BPMN 2.0 State Machine",
    metric: "100% Deterministic",
    desc: {
      vi: "Điều phối vòng đời bưu kiện 8 trạm quét bằng Camunda BPMN 2.0, kiểm soát chặt chẽ chuyển trạng thái đơn hàng và xử lý ngoại lệ SOP.",
      en: "Orchestrates 8-stage parcel lifecycle with Camunda BPMN 2.0, strictly enforcing valid state transitions and SOP exceptions.",
    },
    tags: ["Camunda", "BPMN 2.0", "Event Dispatcher", "RabbitMQ"],
  },
  {
    id: "storage",
    title: "03. Database",
    tech: "PostgreSQL 3NF",
    name: "Relational Storage & ACID",
    metric: "ACID Isolation · 3NF",
    desc: {
      vi: "Lưu trữ thực thể quan hệ chuẩn hóa 3NF, bảo đảm toàn vẹn tham chiếu, tối ưu hóa B-Tree Index và lưu vết kiểm toán audit log mọi lượt quét.",
      en: "Stores normalized 3NF relational data with full referential integrity, B-Tree indexes, and immutable audit logs on every scan.",
    },
    tags: ["PostgreSQL", "ERD 3NF", "B-Tree Index", "Audit Trails"],
  },
  {
    id: "tracking",
    title: "04. Client",
    tech: "Live Leaflet Web",
    name: "Live Tracking & Timeline",
    metric: "tracking.nexus-ex.site",
    desc: {
      vi: "Giao diện tra cứu bưu phẩm thời gian thực đang chạy thực tế tại tracking.nexus-ex.site, hiển thị dòng thời gian bưu kiện và bản đồ trạm trung chuyển.",
      en: "Production shipment tracking client live at tracking.nexus-ex.site with waybill search, real-time parcel timeline, and transit hub map.",
    },
    tags: ["Live Production", "Leaflet Map", "Real-Time Timeline", "Vercel + VPS"],
  },
];
