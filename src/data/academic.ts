import { Boxes, Database, Layers, ServerCog } from "lucide-react";
import type { AcademicPillar, ThesisMonograph } from "@/types";

export const academicPillars: AcademicPillar[] = [
  {
    code: "SAD-01",
    icon: Layers,
    color: "blue",
    title: {
      vi: "Phân tích & Thiết kế Hệ thống (SAD)",
      en: "Systems Analysis & Design (SAD)",
    },
    desc: {
      vi: "Mô hình hóa nghiệp vụ chuyên sâu với chuẩn UML 2.5 (Use Case, Sequence, State Machine), BPMN 2.0 và phân rã chức năng WBS đáp ứng tiêu chuẩn phần mềm quốc tế.",
      en: "Rigorous domain modeling using UML 2.5 (Use Case, Sequence, State Machine), BPMN 2.0, and WBS functional decomposition aligned with international standards.",
    },
    tags: ["UML 2.5", "BPMN 2.0", "PRD/SRS", "WBS & Scope", "Given-When-Then"],
  },
  {
    code: "DB-02",
    icon: Database,
    color: "indigo",
    title: {
      vi: "Hệ Quản trị CSDL & Mô hình hóa Quan hệ",
      en: "Database Systems & Relational Modeling",
    },
    desc: {
      vi: "Thiết kế thực thể quan hệ ERD chuẩn hóa 3NF/BCNF, thiết lập toàn vẹn tham chiếu, tối ưu hóa Indexing B-Tree và kiểm soát giao dịch ACID chống race condition.",
      en: "Relational modeling with 3NF/BCNF normalization, referential integrity, B-Tree index optimization, and ACID concurrency transaction isolation.",
    },
    tags: ["ERD 3NF/BCNF", "PostgreSQL", "MySQL", "Indexing & Query", "ACID Transactions"],
  },
  {
    code: "ERP-03",
    icon: Boxes,
    color: "purple",
    title: {
      vi: "Hệ thống ERP Doanh nghiệp & OMS",
      en: "Enterprise ERP & OMS Architectures",
    },
    desc: {
      vi: "Kiến trúc luồng xử lý đơn hàng OMS, luồng nghiệp vụ Odoo ERP (Sales, Purchase, Inventory, Accounting) và tích hợp chuỗi cung ứng SCM nhiều phân hệ.",
      en: "Order Management Systems (OMS), Odoo ERP workflows (Sales, Purchase, Inventory, Accounting), and multi-module SCM supply chain integration.",
    },
    tags: ["Odoo ERP", "OMS Lifecycle", "SCM Workflows", "Inventory Audits", "RBAC Matrix"],
  },
  {
    code: "SE-04",
    icon: ServerCog,
    color: "emerald",
    title: {
      vi: "Kỹ nghệ Phần mềm & Kiểm thử Nghiệm thu",
      en: "Software Engineering & UAT Governance",
    },
    desc: {
      vi: "Chu trình phát triển phần mềm SDLC, phương pháp Agile Scrum, kiến trúc REST API & OpenAPI 3.0, cùng kế hoạch nghiệm thu UAT kiểm soát rủi ro phát hành.",
      en: "End-to-end SDLC governance, Agile Scrum sprints, OpenAPI 3.0 contracts, and structured UAT acceptance test plans minimizing release risks.",
    },
    tags: ["Agile Scrum", "OpenAPI 3.0", "UAT Sign-off", "Postman", "CI/CD & Docker"],
  },
];

export const thesesMonographs: ThesisMonograph[] = [
  {
    num: { vi: "CHUYÊN ĐỀ 01", en: "MONOGRAPH 01" },
    time: { vi: "45 phút · Toàn diện", en: "45 min · Comprehensive" },
    path: "/knowledge/business-analysis",
    title: {
      vi: "Phân tích Nghiệp vụ & Đặc tả Yêu cầu Hệ thống",
      en: "Business Analysis & Systems Requirements Engineering",
    },
    desc: {
      vi: "Khảo sát yêu cầu mơ hồ, lập tài liệu BRD/PRD/SRS, mô hình hóa quy trình chuẩn BPMN 2.0, viết User Stories (Given-When-Then) và kế hoạch kiểm thử UAT.",
      en: "Elicitation techniques, BRD/PRD/SRS authoring, BPMN 2.0 process modeling, Given-When-Then User Stories, and rigorous UAT governance.",
    },
  },
  {
    num: { vi: "CHUYÊN ĐỀ 02", en: "MONOGRAPH 02" },
    time: { vi: "40 phút · Lab tương tác", en: "40 min · Interactive Lab" },
    path: "/knowledge/programming-languages",
    title: {
      vi: "Ngôn ngữ Lập trình & Kiến trúc Runtime Thực thi",
      en: "Programming Languages & Execution Runtime Architectures",
    },
    desc: {
      vi: "Bản chất source code, so sánh Trình biên dịch (AOT) vs Trình thông dịch (JIT), Quản lý bộ nhớ (GC/Borrow Checker), Concurrency Model và Lab phân tích trực quan.",
      en: "Compilation (AOT) vs Interpretation (JIT), Memory Management, Garbage Collection vs Rust Ownership, Concurrency Event Loops, and interactive runtime lab.",
    },
  },
  {
    num: { vi: "CHUYÊN ĐỀ 03", en: "MONOGRAPH 03" },
    time: { vi: "25 phút · Nền tảng", en: "25 min · Fundamentals" },
    path: "/knowledge/database",
    title: {
      vi: "Hệ Quản trị Cơ sở Dữ liệu & Lưu trữ Thực thể",
      en: "Database Fundamentals & Storage Engines",
    },
    desc: {
      vi: "Phân loại RDBMS vs NoSQL, nguyên lý chỉ mục B-Tree / LSM-Tree, cơ chế đảm bảo tính ACID, cô lập giao dịch và lựa chọn công nghệ lưu trữ cho hệ thống lớn.",
      en: "RDBMS vs NoSQL classification, B-Tree and LSM-Tree indexing, ACID transaction isolation levels, and storage engine selection for high-scale systems.",
    },
  },
  {
    num: { vi: "CHUYÊN ĐỀ 04", en: "MONOGRAPH 04" },
    time: { vi: "35 phút · Thực hành", en: "35 min · Practical Modeling" },
    path: "/knowledge/database/data-modeling",
    title: {
      vi: "Mô hình hóa Dữ liệu Quan hệ, ERD & Chuẩn hóa 3NF",
      en: "Relational Data Modeling, ERD & Normalization (3NF)",
    },
    desc: {
      vi: "Quy trình chuyển đổi bài toán nghiệp vụ thành thực thể, xác định khóa ngoại/khóa chính, sơ đồ quan hệ 1-N/N-N và kỹ thuật chuẩn hóa chống dị thường dữ liệu.",
      en: "Translating business domain entities into relational schemas, primary/foreign keys, cardinality mapping (1:N, N:M), and 1NF-3NF anomaly elimination.",
    },
  },
  {
    num: { vi: "CHUYÊN ĐỀ 05", en: "MONOGRAPH 05" },
    time: { vi: "30 phút · Hướng dẫn", en: "30 min · Guide & Lab" },
    path: "/knowledge/backend-api",
    title: {
      vi: "Thiết kế Backend & Hợp đồng RESTful API Chuẩn mực",
      en: "Backend Architecture & RESTful API Contracts",
    },
    desc: {
      vi: "Vòng đời HTTP request-response, thiết kế OpenAPI 3.0, cơ chế Idempotency Key, xác thực phân quyền JWT/OAuth2 và xử lý lỗi chuẩn RFC 7807.",
      en: "HTTP request lifecycle, OpenAPI 3.0 contract design, Idempotency Keys, JWT/OAuth2 RBAC security, and RFC 7807 standardized problem details.",
    },
  },
];
