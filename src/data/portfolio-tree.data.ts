export interface PortfolioStep {
  stepTag: { vi: string; en: string };
  title: { vi: string; en: string };
  lead: { vi: string; en: string };
  body: { vi: string; en: string };
  calloutTitle?: { vi: string; en: string };
  calloutText?: { vi: string; en: string };
}

export interface PortfolioTelemetry {
  label: { vi: string; en: string };
  value: string;
  status?: "good" | "warn" | "accent";
}

export interface PortfolioItem {
  id: string;
  slug: string;
  moduleCode: string;
  category: { vi: string; en: string };
  title: { vi: string; en: string };
  subtitle: { vi: string; en: string };
  time: string;
  level: { vi: string; en: string };
  iconName: string;
  telemetry: PortfolioTelemetry[];
  steps: PortfolioStep[];
  children?: PortfolioItem[];
}

export interface PortfolioFolder {
  id: string;
  code: string;
  title: { vi: string; en: string };
  color: string;
  bgLight: string;
  borderLight: string;
  items: PortfolioItem[];
}

// 1. Profile Items (Integrated at Avatar Hero Card in Sidebar & Topbar)
export const profileFolderItems: PortfolioItem[] = [
  {
    id: "item-profile-dossier",
    slug: "ho-so-nang-luc",
    moduleCode: "profile",
    category: { vi: "Hồ Sơ Kỹ Sư", en: "Engineer Profile" },
    title: {
      vi: "Hồ Sơ",
      en: "Profile",
    },
    subtitle: {
      vi: "Project Manager tại Digityze Asia · Kỹ sư Hệ thống Thông tin (IUH) · IT Business Analyst & Systems Architect.",
      en: "Project Manager at Digityze Asia · Information Systems Engineer (IUH) · IT Business Analyst & Systems Architect.",
    },
    time: "5m",
    level: { vi: "Tổng quan", en: "Executive" },
    iconName: "user-check",
    telemetry: [
      { label: { vi: "VAI TRÒ HIỆN TẠI", en: "CURRENT ROLE" }, value: "PM @ Digityze Asia", status: "accent" },
      { label: { vi: "HỌC VẤN IUH", en: "DEGREE" }, value: "Kỹ sư HTTT", status: "good" },
      { label: { vi: "KINH NGHIỆM", en: "TRACK RECORD" }, value: "PM · BA · Logistics", status: "good" },
      { label: { vi: "TRẠNG THÁI", en: "STATUS" }, value: "Đang công tác", status: "good" },
    ],
    steps: [
      {
        stepTag: { vi: "ĐỊNH VỊ", en: "POSITIONING" },
        title: {
          vi: "Cầu Nối Giữa Bài Toán Kinh Doanh & Kỹ Thuật",
          en: "Bridging Business Domains & Technical Architecture",
        },
        lead: {
          vi: "Tốt nghiệp ngành Hệ thống Thông tin (IUH), kết hợp giữa kinh nghiệm Quản lý Dự án tại Digityze Asia, Phân tích Nghiệp vụ (BA) và Tư duy Kiến trúc Hệ thống.",
          en: "Information Systems graduate from IUH, combining Project Management at Digityze Asia with Business Analysis and Systems Architecture.",
        },
        body: {
          vi: "Kinh nghiệm thực tế gồm: Quản lý dự án tại Digityze Asia, Phân tích nghiệp vụ IT BA tại HomeNest Software (soạn thảo PRD/SRS, vẽ BPMN 2.0, nghiệm thu UAT 12+ Sprints) và vận hành bưu cục tại J&T Express.",
          en: "Practical track record: Project Manager at Digityze Asia, IT BA at HomeNest Software (PRD/SRS authoring, BPMN 2.0 modeling, UAT coordination), and logistics dispatch at J&T Express.",
        },
        calloutTitle: { vi: "TRIẾT LÝ NGHỀ NGHIỆP", en: "CORE PHILOSOPHY" },
        calloutText: {
          vi: "Không bao giờ để Dev phải đoán nghiệp vụ. Mọi trạng thái hệ thống phải được mô hình hóa toán học xác định trước khi viết dòng code đầu tiên.",
          en: "Never let engineers guess business rules. Every state transition must be modeled deterministically before coding begins.",
        },
      },
      {
        stepTag: { vi: "HỌC VẤN", en: "EDUCATION" },
        title: {
          vi: "Bằng Kỹ Sư & 4 Trụ Cột Nền Tảng IUH",
          en: "Engineering Degree & 4 Foundation Pillars",
        },
        lead: {
          vi: "Đào tạo kỹ sư chính quy tại ĐH Công nghiệp TP.HCM (IUH), hoàn thành 100% chương trình với GPA 3.26/4.0 Xếp loại Giỏi.",
          en: "Formally trained in Information Systems Engineering at IUH, graduating with Distinction Honors (GPA 3.26/4.0).",
        },
        body: {
          vi: "Nắm vững 4 trụ cột: Phân tích Thiết kế HTTT (SAD-01), CSDL Quan hệ & Chuẩn hóa 3NF (DB-02), Hoạch định ERP/OMS (ERP-03), và Kỹ nghệ Phần mềm & Kiểm thử UAT (SE-04).",
          en: "Grounded across 4 core pillars: Systems Analysis & Design (SAD-01), Relational 3NF DBs (DB-02), ERP/OMS Architecture (ERP-03), and Software Engineering & UAT QA (SE-04).",
        },
      },
      {
        stepTag: { vi: "THỰC CHIẾN", en: "TRACK RECORD" },
        title: {
          vi: "Kinh Nghiệm Thực Tế Doanh Nghiệp & Sản Phẩm",
          en: "Production Track Record & Engineering Delivery",
        },
        lead: {
          vi: "Quản lý dự án tại Digityze Asia; IT BA tại HomeNest Software; Vận hành bưu cục tại J&T Express; Kiến trúc sư hệ thống Nexus Express OMS.",
          en: "Project Manager at Digityze Asia; IT BA at HomeNest Software; Logistics operations at J&T Express; Architect of Nexus Express OMS.",
        },
        body: {
          vi: "Tập trung điều phối tiến độ, quản lý yêu cầu phần mềm và nghiệm thu chất lượng bàn giao sản phẩm theo đúng cam kết.",
          en: "Focusing on delivery timeline governance, software requirements management, and quality acceptance assurance.",
        },
      },
      {
        stepTag: { vi: "HỒ SƠ CV", en: "ATS CV" },
        title: {
          vi: "Bản CV Chuẩn ATS & Thông Tin Liên Hệ",
          en: "ATS-Compliant CV & Direct Channels",
        },
        lead: {
          vi: "Bản CV đúc kết ngắn gọn trong 2 trang A4, thể hiện rõ quá trình học tập, kinh nghiệm PM, BA và các dự án thực tế.",
          en: "Concise 2-page A4 resume detailing academic foundation, PM/BA experience, and production projects.",
        },
        body: {
          vi: "Hỗ trợ tải trực tiếp bản Tiếng Việt và Tiếng Anh định dạng PDF, cam kết không lỗi font hay tràn trang.",
          en: "Available in both Vietnamese and English PDF formats with zero character corruption or layout overflow.",
        },
      },
    ],
  },
  {
    id: "item-cv-pdf",
    slug: "tai-cv-pdf",
    moduleCode: "profile",
    category: { vi: "Hồ Sơ Kỹ Sư", en: "Engineer Profile" },
    title: {
      vi: "Tải Bản CV Chuẩn ATS (PDF)",
      en: "Download ATS Resumes (PDF)",
    },
    subtitle: {
      vi: "Hồ sơ ứng tuyển chính thức 2 trang A4 chuẩn quốc tế (bản Tiếng Việt & Tiếng Anh).",
      en: "Official 2-page A4 ATS-compliant resumes (Vietnamese & English versions).",
    },
    time: "3m",
    level: { vi: "Tài liệu", en: "Document" },
    iconName: "file-down",
    telemetry: [
      { label: { vi: "ĐỘ DÀI", en: "PAGES" }, value: "Đúng 2 trang A4", status: "good" },
      { label: { vi: "CHUẨN ATS", en: "ATS SCORE" }, value: "98/100", status: "good" },
      { label: { vi: "TIẾNG VIỆT", en: "VIETNAMESE" }, value: "Sẵn sàng PDF", status: "good" },
      { label: { vi: "TIẾNG ANH", en: "ENGLISH" }, value: "Sẵn sàng PDF", status: "good" },
    ],
    steps: [
      {
        stepTag: { vi: "TẢI VỀ", en: "DOWNLOAD" },
        title: {
          vi: "Tải Hồ Sơ Tuyển Dụng Chính Thức",
          en: "Download Candidate Resumes",
        },
        lead: {
          vi: "CV trình bày ngắn gọn trong đúng 2 trang A4, tập trung vào bằng Kỹ sư Giỏi, kinh nghiệm BA và các dự án sản xuất.",
          en: "Concise 2-page A4 resumes highlighting distinction degree, hands-on BA experience, and live production projects.",
        },
        body: {
          vi: "Bản Tiếng Việt tối ưu cho nhà tuyển dụng trong nước; bản Tiếng Anh chuẩn mực cho môi trường đa quốc gia.",
          en: "Vietnamese edition tailored for domestic recruiters; English edition standard for multinational teams.",
        },
      },
    ],
  },
];

export const profileFolder: PortfolioFolder = {
  id: "folder-profile",
  code: "00",
  title: {
    vi: "00. Hồ Sơ Kỹ Sư & CV",
    en: "00. Engineer Profile & CV",
  },
  color: "#2563eb",
  bgLight: "#eff6ff",
  borderLight: "#bfdbfe",
  items: profileFolderItems,
};

// 2. Project Explorer Modules (00. Profile, 01. Projects, 02. BA, 03. PM, 04. Dev, 05. DevOps)
export const portfolioTreeFolders: PortfolioFolder[] = [
  profileFolder,
  // PILLAR 01: DỰ ÁN TIÊU BIỂU
  {
    id: "folder-projects",
    code: "01",
    title: {
      vi: "01. Dự Án Tiêu Biểu",
      en: "01. Featured Projects",
    },
    color: "#0284c7",
    bgLight: "#f0f9ff",
    borderLight: "#bae6fd",
    items: [
{
        id: "item-nexus",
        slug: "nexus-express-oms",
        moduleCode: "01",
        category: { vi: "01. Dự Án Tiêu Biểu", en: "01. Featured Projects" },
        title: {
          vi: "Nexus Express (OMS Live)",
          en: "Nexus Express (OMS Live)",
        },
        subtitle: {
          vi: "Hệ thống Quản lý Vận đơn & Tra cứu Bưu kiện Phân tán (Flagship Live Demo: tracking.nexus-ex.site).",
          en: "Distributed Order Management System & Realtime Tracking (Live: tracking.nexus-ex.site).",
        },
        time: "15m",
        level: { vi: "Production", en: "Production" },
        iconName: "boxes",
        telemetry: [
          { label: { vi: "TRẠNG THÁI", en: "STATUS" }, value: "Online 99.9%", status: "good" },
          { label: { vi: "SLA PHẢN HỒI", en: "SLA TARGET" }, value: "< 180ms", status: "good" },
          { label: { vi: "THÔNG LƯỢNG", en: "THROUGHPUT" }, value: "1,200 req/s", status: "good" },
          { label: { vi: "KIẾN TRÚC DB", en: "DB SCHEMA" }, value: "PostgreSQL 3NF", status: "good" },
        ],
        steps: [
          {
            stepTag: { vi: "BỐI CẢNH", en: "CONTEXT" },
            title: {
              vi: "Bài Toán Vận Hành Logistics & Điểm Nghẽn Quét Mã",
              en: "The Logistics Problem Space & Duplicate Scan Bottlenecks",
            },
            lead: {
              vi: "Shipper quét mã bưu kiện liên tục trong điều kiện mạng 4G chập chờn, dẫn đến gửi trùng request, gây sai lệch trạng thái và tính thừa phí COD.",
              en: "Couriers scanning parcels on erratic 4G networks cause duplicate requests, corrupted parcel states, and erroneous COD accounting.",
            },
            body: {
              vi: "Nexus Express giải quyết triệt để vấn đề này bằng cơ chế Idempotency Key trên tầng API Gateway kết hợp khóa phân tán Redis Lock và máy trạng thái Camunda BPMN 2.0.",
              en: "Nexus Express resolves this using API Gateway Idempotency Keys paired with Redis distributed locks and Camunda BPMN 2.0.",
            },
            calloutTitle: { vi: "DEMO TRỰC TIẾP", en: "LIVE DEMO" },
            calloutText: {
              vi: "Hệ thống đang chạy thực tế tại https://tracking.nexus-ex.site với bản đồ Leaflet hiển thị trạm trung chuyển.",
              en: "Production tracking client live at https://tracking.nexus-ex.site featuring Leaflet interactive hub maps.",
            },
          },
          {
            stepTag: { vi: "KIẾN TRÚC", en: "ARCHITECTURE" },
            title: {
              vi: "Kiến Trúc 4 Tầng Phân Tán Đảm Bảo Tính Xác Định",
              en: "4-Layer Distributed Deterministic Architecture",
            },
            lead: {
              vi: "4 tầng phân tách nghiêm ngặt: Ingestion Gateway, BPMN Workflow Engine, Relational 3NF Store, và Realtime Leaflet Client.",
              en: "Strict 4-layer decoupling: Ingestion Gateway, BPMN Workflow Engine, Relational 3NF Store, and Realtime Leaflet Client.",
            },
            body: {
              vi: "Mọi thay đổi trạng thái đều ghi log kiểm toán bất biến (Audit Trail). Dữ liệu được lưu trữ chuẩn hóa 3NF trong PostgreSQL.",
              en: "All state transitions log immutable audit trails. Data resides in 3NF normalized PostgreSQL tables.",
            },
          },
        ],

        children: [
          {
            id: "item-nexus-overview",
            slug: "nexus-overview",
            moduleCode: "01",
            category: { vi: "01. Dự Án Tiêu Biểu", en: "01. Featured Projects" },
            title: {
              vi: "1.1 Bối Cảnh Nghiệp Vụ & Thất Thoát COD",
              en: "1.1 Business Context & COD Leakage",
            },
            subtitle: {
              vi: "Nguyên nhân trùng đơn khi shipper quét mã trong giờ cao điểm và phạm vi dự án.",
              en: "Root causes of duplicate scans during peak hours and project scope boundaries.",
            },
            time: "5m",
            level: { vi: "Nghiệp vụ", en: "Domain" },
            iconName: "target",
            telemetry: [
              { label: { vi: "THẤT THOÁT COD", en: "COD LEAKAGE" }, value: "Giảm về 0đ", status: "good" },
              { label: { vi: "LỖI TRÙNG ĐƠN", en: "DUP ORDERS" }, value: "0% Trùng", status: "good" },
            ],
            steps: [
              {
                stepTag: { vi: "BƯỚC 1: PHÂN TÍCH KHOẢNG TRỐNG", en: "STEP 1: GAP ANALYSIS" },
                title: { vi: "Phân Tích Hiện Trạng & Thất Thoát Tiền Hàng (BABOK v3 As-Is)", en: "Current State Analysis & Financial Leakage (BABOK v3 As-Is)" },
                lead: { vi: "Đánh giá khoảng trống giữa hệ thống cũ phân tán và yêu cầu đối soát thời gian thực.", en: "Evaluating operational gaps between legacy fragmented systems and real-time reconciliation needs." },
                body: { vi: "• Thực trạng: Bưu tá quét mã 2-3 lần khi 4G yếu gây sinh đơn trùng, lệch 3.2% tiền COD.\n• Khoảng trống: Thiếu khóa Idempotency, phòng kế toán mất 4 giờ đối soát mỗi ngày.\n• Mục tiêu: Tự động đối soát < 5 giây, triệt tiêu hoàn toàn sai lệch (0.00%).", en: "• As-Is: Double barcode scans on erratic 4G cause duplicate COD invoices and 3.2% variance.\n• Gap: Manual reconciliation takes 4 hours daily without idempotency keys.\n• To-Be: Automated < 5s audit bringing financial reconciliation variance down to 0.00%." },
                calloutTitle: { vi: "TIÊU CHUẨN BABOK V3 §6.2", en: "BABOK V3 §6.2 STANDARD" },
                calloutText: { vi: "Xác định rõ As-Is (Tỷ lệ sai lệch 3.2%, đối soát mất 4 giờ) và To-Be (Sai lệch 0.00%, đối soát tự động < 5 giây).", en: "Defines explicit As-Is (3.2% variance, 4h manual audit) vs To-Be (0.00% variance, < 5s automated audit)." },
              },
              {
                stepTag: { vi: "BƯỚC 2: ĐỐI SOÁT KÉP COD", en: "STEP 2: DOUBLE-ENTRY COD" },
                title: { vi: "Cơ Chế Sổ Cái Kép & Triệt Tiêu Thất Thoát Dòng Tiền", en: "Double-Entry Ledger & Zero-Variance Cashflow Audit" },
                lead: { vi: "Áp dụng nguyên tắc kế toán kép đảm bảo tổng Nợ luôn bằng tổng Có trong mọi giao dịch.", en: "Enforcing double-entry bookkeeping ensuring Debit equals Credit across all parcel transactions." },
                body: { vi: "• Nguyên tắc: Ghi nhận đồng thời Nợ (Tài khoản Tài xế) và Có (Phải trả Người gửi).\n• Bất biến: Tuyệt đối cấm UPDATE số dư trực tiếp; mọi điều chỉnh phải qua bút toán bù trừ.\n• Khớp két: Tiền mặt nộp két cuối ngày khớp 100% với dữ liệu phát thành công.", en: "• Principle: Symmetrical posting across Driver Cash Balance and Merchant Payable.\n• Immutability: Direct balance UPDATEs prohibited; mutations require compensating entries.\n• Settlement: End-of-day physical cash deposit matches app confirmations with zero discrepancy." },
                calloutTitle: { vi: "NGUYÊN TẮC KẾ TOÁN KÉP", en: "DOUBLE-ENTRY STANDARD" },
                calloutText: { vi: "Tổng tiền shipper nộp vào két cuối ngày luôn khớp tuyệt đối với tổng đơn phát thành công trên ứng dụng.", en: "End-of-day driver physical vault deposit matches app delivery confirmations with 0 VND discrepancy." },
              },
              {
                stepTag: { vi: "BƯỚC 3: RANH GIỚI PHẠM VI", en: "STEP 3: SCOPE BASELINE" },
                title: { vi: "Ranh Giới Phạm Vi Triển Khai (ISO/IEC 25010 Baseline)", en: "Scope Baseline & System Boundary (ISO/IEC 25010)" },
                lead: { vi: "Xác định nghiêm ngặt phạm vi trong kỳ (In-Scope) và phân kỳ tiếp theo (Out-of-Scope).", en: "Strictly defining in-scope deliverables and future phase boundaries." },
                body: { vi: "• In-Scope: API Gateway Idempotency 24h, Camunda BPMN 7 bước, 22 Hubs và CSDL 3NF.\n• Out-of-Scope: Xếp xe 3D và cân đo thể tích DWS chuyển sang Phân kỳ 2.\n• Kết quả: Chặn đứng nguy cơ phình phạm vi (Scope Creep), bàn giao đúng hạn 6 tháng.", en: "• In-Scope: 24h Gateway Idempotency, 7-step Camunda BPMN, 22-hub map, and 3NF schema.\n• Out-of-Scope: 3D truck packing and automated DWS conveyor hardware deferred to Phase 2.\n• Outcome: Zero scope creep, securing on-time production delivery in 6 months." },
                calloutTitle: { vi: "KIỂM SOÁT PHẠM VI", en: "SCOPE CONTROL" },
                calloutText: { vi: "Tránh nguy cơ phình to phạm vi (Scope Creep) giúp dự án bàn giao đúng hạn trong 6 tháng.", en: "Preventing scope creep secured on-time system launch within 6 months." },
              },
            ],
          },
          {
            id: "item-nexus-map-hubs",
            slug: "nexus-map-hubs",
            moduleCode: "01",
            category: { vi: "01. Dự Án Tiêu Biểu", en: "01. Featured Projects" },
            title: {
              vi: "1.2 Mạng Lưới Hub & Luồng Xe Tải Đường Bộ",
              en: "1.2 Hub Network & Road Freight Routes",
            },
            subtitle: {
              vi: "Sơ đồ 3 Hub tổng, 19 Hub tỉnh và các tuyến xe tải Linehaul, Feeder toàn quốc.",
              en: "3 Mega Hubs, 19 Provincial Hubs, and road Linehaul/Feeder freight routes.",
            },
            time: "7m",
            level: { vi: "Mạng lưới", en: "Network" },
            iconName: "workflow",
            telemetry: [
              { label: { vi: "HUB ĐIỀU HÀNH", en: "HUBS" }, value: "3 Hub Tổng · 19 Tỉnh", status: "good" },
              { label: { vi: "SLA XE TẢI TRỤC", en: "LINEHAUL SLA" }, value: "36h - 48h Bắc-Nam", status: "good" },
            ],
            steps: [
              {
                stepTag: { vi: "BƯỚC 1: MẠNG LƯỚI VẬN TẢI", en: "STEP 1: TRANSPORT NETWORK" },
                title: { vi: "Lý Thuyết Mạng Lưới Hub-and-Spoke & Bài Toán Vận Tải", en: "Hub-and-Spoke Topology & Transportation Network Optimization" },
                lead: { vi: "Giảm độ phức tạp điều vận từ O(N²) xuống O(N) thông qua 3 Hub Tổng tập trung.", en: "Decreasing route complexity from O(N²) to O(N) via 3 central sorting hubs." },
                body: { vi: "• Điểm-nối-điểm: 22 trạm đòi hỏi 231 tuyến xe tải riêng, tỷ lệ thùng rỗng > 65%.\n• Hub-and-Spoke: Gom hàng về 3 Hub Tổng (HN, ĐN, HCM) để phân loại tự động.\n• Tối ưu luồng: Xe tải Linehaul 15T-30T chạy tuyến trục đạt tỷ lệ lấp đầy > 88%.", en: "• Point-to-Point bottleneck: 22 provincial depots require 231 routes; empty truck space > 65%.\n• Hub-and-Spoke: Regional spokes feed 3 Mega Hubs for high-speed automated sorting.\n• Linehaul optimization: Heavy 15-30T closed-box trucks achieve > 88% load factor." },
                calloutTitle: { vi: "ĐỊNH NGHĨA KHOA HỌC", en: "SCIENTIFIC PRINCIPLE" },
                calloutText: { vi: "Áp dụng định lý luồng cực đại Ford-Fulkerson để tính toán thông lượng tối ưu giữa các trạm trung chuyển.", en: "Leverages Ford-Fulkerson maximum network flow theorem to model bottleneck capacities." },
              },
              {
                stepTag: { vi: "BƯỚC 2: TUYẾN XE TRỤC LINEHAUL", en: "STEP 2: ROAD LINEHAUL TRUNKS" },
                title: { vi: "Tuyến Xe Tải Trục Đường Bộ & Chu Kỳ Giờ Cắt Ca (Cut-Off Time)", en: "Road Linehaul Fleets & Fixed Cut-Off Schedules" },
                lead: { vi: "Vận tải đường bộ bằng xe tải thùng kín 15T - 30T trên trục QL1A và cao tốc Bắc - Nam.", en: "Heavy 15-30 ton closed-box haulage trucks running along Highway 1A and expressway corridors." },
                body: { vi: "• Tuyến trục Bắc - Nam: Xe chạy liên tục 36h - 48h trên QL1A với 2 tài xế luân phiên.\n• Giờ chốt ca (Cut-off): Chốt sổ 19h00, đóng bao kẹp chì và xuất bến cố định lúc 20h00.\n• Kỷ luật điều vận: Hàng đến sau 19h00 chuyển ca sau để bảo vệ SLA 99% đơn trên xe.", en: "• North-South linehaul: 36h-48h continuous haulage along Highway 1A with rotating drivers.\n• Cut-off rigor: Manifest closes at 19:00; trucks depart strictly at 20:00 with serialized seals.\n• SLA protection: Late parcels roll to next departure wave to safeguard on-time fleet arrival." },
                calloutTitle: { vi: "KỶ LUẬT ĐIỀU VẬN", en: "DISPATCH DISCIPLINE" },
                calloutText: { vi: "Giờ xe xuất bến là bất biến; không trì hoãn xe tải vì một vài kiện hàng muộn để đảm bảo tính toàn vẹn SLA.", en: "Departure schedules are immutable; trucks never delay for late parcels to protect network SLA." },
              },
              {
                stepTag: { vi: "BƯỚC 3: MẠNG LƯỚI TUYẾN NHÁNH", en: "STEP 3: FEEDER NETWORKS" },
                title: { vi: "Mạng Tuyến Nhánh Vệ Tinh (Feeder) & Cửa Ngõ Cảng Biển", en: "Feeder Regional Spokes & Seaport Portals" },
                lead: { vi: "Kết nối 19 tỉnh thành và các khu công nghiệp trọng điểm về Hub Tổng trong 1.5h - 4h.", en: "Connecting 19 provincial outposts and industrial zones to Mega Hubs within 1.5h - 4h." },
                body: { vi: "Các tuyến nhánh Feeder sử dụng xe tải 2.5 - 5 tấn kết nối linh hoạt. Cụ thể: Hub Bắc Ninh chuyên tiếp nhận linh kiện điện tử từ KCN Yên Phong/Quế Võ; Hub Hải Phòng kết nối cửa khẩu cảng biển quốc tế tiếp nhận hàng thương mại điện tử xuyên biên giới; Hub Cần Thơ điều phối nông sản và bưu kiện Đồng bằng Sông Cửu Long.", en: "Regional feeder routes deploy 2.5-5 ton trucks for agility. Bac Ninh collects high-tech parts from industrial complexes; Hai Phong handles maritime cross-border cargo; Can Tho consolidates Mekong Delta agro-ecommerce." },
                calloutTitle: { vi: "TỐI ƯU CỰ LÝ", en: "DISTANCE EFFICIENCY" },
                calloutText: { vi: "Thời gian xe chạy tuyến nhánh được chuẩn hóa < 4 giờ, đảm bảo bưu kiện tới Hub tổng trước giờ cắt ca tối.", en: "Feeder transits are capped under 4 hours, guaranteeing parcels arrive before evening cut-off." },
              },
            ],
          },
          {
            id: "item-nexus-order-lifecycle",
            slug: "nexus-order-lifecycle",
            moduleCode: "01",
            category: { vi: "01. Dự Án Tiêu Biểu", en: "01. Featured Projects" },
            title: {
              vi: "1.3 Vòng Đời Đơn Hàng Chuẩn FSM",
              en: "1.3 Order Lifecycle FSM",
            },
            subtitle: {
              vi: "Quy chuẩn 7 trạng thái bưu kiện từ tạo đơn, lấy hàng, qua Hub đến giao và thu tiền.",
              en: "7 parcel states: order creation, pickup, hub sortation, delivery, and COD settlement.",
            },
            time: "8m",
            level: { vi: "Quy trình FSM", en: "FSM Pipeline" },
            iconName: "activity",
            telemetry: [
              { label: { vi: "MÁY TRẠNG THÁI", en: "STATE ENGINE" }, value: "7 Bước FSM", status: "good" },
              { label: { vi: "KIỂM TOÁN LỊCH SỬ", en: "AUDIT TRAIL" }, value: "Ghi log từng bước", status: "good" },
            ],
            steps: [
              {
                stepTag: { vi: "BƯỚC 1: MÁY TRẠNG THÁI DFA", en: "STEP 1: DFA AUTOMATA" },
                title: { vi: "Mô Hình Toán Học Máy Trạng Thái Hữu Hạn Tuyệt Đối (DFA)", en: "Deterministic Finite Automata (DFA) Mathematical Model" },
                lead: { vi: "Hàm chuyển dịch δ(S, E) ngăn chặn 100% tình trạng cập nhật sai lệch hoặc nhảy cóc trạng thái.", en: "Transition function δ(S, E) 100% eliminates skipped or invalid status progressions." },
                body: { vi: "• Quy tắc DFA: 7 trạng thái cố định; chỉ chuyển dịch khi có sự kiện (Event) quét mã hợp lệ.\n• Chặn nhảy cóc: Đơn chưa qua OUT_FOR_DELIVERY không thể bấm giao thành công.\n• Kiểm soát lỗi: Ném ngoại lệ IllegalTransitionException và cảnh báo gian lận ngay lập tức.", en: "• DFA Rules: 7 discrete states strictly governed by transition matrix δ.\n• Status validation: Orders cannot be marked delivered without reaching OUT_FOR_DELIVERY.\n• Error handling: Rejects illegal jumps with immediate IllegalTransitionException." },
                calloutTitle: { vi: "TOÁN HỌC TRẠNG THÁI", en: "STATE MATHEMATICS" },
                calloutText: { vi: "Đảm bảo tính đóng (Closure Property): bưu kiện không bao giờ rơi vào trạng thái không xác định (Undefined State).", en: "Ensures mathematical closure: a shipment can never enter an undefined dangling state." },
              },
              {
                stepTag: { vi: "BƯỚC 2: CAMUNDA BPMN 2.0", en: "STEP 2: CAMUNDA BPMN 2.0" },
                title: { vi: "Điều Phối Luồng Bằng Camunda BPMN 2.0 & Intermediate Events", en: "Workflow Orchestration via Camunda BPMN 2.0 & Intermediate Events" },
                lead: { vi: "Sử dụng IntermediateCatchEvents để tạm dừng tiến trình khi xe tải Linehaul đang di chuyển.", en: "Deploying IntermediateCatchEvents to pause process instances while linehaul trucks are en route." },
                body: { vi: "• Tiết kiệm CPU: IntermediateCatchEvents đưa tiến trình vào trạng thái ngủ khi xe đang chạy.\n• Kích hoạt tự động: Quét mã Gate-In tại bến đích gửi Webhook đánh thức tiến trình tức thì.\n• Chuẩn quốc tế: Mô hình hóa quy trình bằng BPMN 2.0 (ISO/IEC 19510), thu hẹp khoảng cách BA và Dev.", en: "• Zero idle threads: IntermediateCatchEvents suspend tokens during 36-hour transit.\n• Webhook awaken: Gate-in barcode scan at destination hub resumes workflow instantly.\n• Standardized: ISO/IEC 19510 BPMN 2.0 executable diagrams bridge BA specs with backend code." },
                calloutTitle: { vi: "TIÊU CHUẨN ISO/IEC 19510", en: "ISO/IEC 19510 STANDARD" },
                calloutText: { vi: "Bản vẽ quy trình BPMN 2.0 có thể thực thi trực tiếp, thu hẹp khoảng cách giữa tài liệu BA và code backend.", en: "BPMN 2.0 XML specifications execute directly, bridging the gap between BA specs and backend code." },
              },
              {
                stepTag: { vi: "BƯỚC 3: NHẬT KÝ KIỂM TOÁN", en: "STEP 3: AUDIT TRAIL" },
                title: { vi: "Nhật Ký Kiểm Toán Bất Biến (Immutable Audit Trail)", en: "Immutable Audit Trail & Regulatory Forensics" }
                ,
                lead: { vi: "Lưu vết toàn bộ tọa độ GPS, mã nhân viên và ảnh chụp ký nhận của từng bước chuyển trạng thái.", en: "Recording GPS telemetry, employee IDs, and digital signatures for every lifecycle event." },
                body: { vi: "• Bất biến (Append-Only): Tuyệt đối cấm UPDATE/DELETE trên bảng lịch sử `parcel_events`.\n• Dữ liệu kiểm toán: Ghi nhận Actor UUID, tọa độ GPS, ảnh chụp và timestamp mili-giây.\n• Pháp lý minh bạch: Cung cấp bằng chứng giải quyết khiếu nại và lưu trữ WORM trong 5 năm.", en: "• Append-Only: Strict revoke of UPDATE/DELETE on `parcel_events` table.\n• Audit telemetry: Captures actor UUID, GPS coordinates, scanner snapshot, and timestamp.\n• Compliance: Tamper-proof legal evidence archived in WORM storage for 5 years." },
                calloutTitle: { vi: "BẰNG CHỨNG PHÁP LÝ", en: "LEGAL INTEGRITY" },
                calloutText: { vi: "Dữ liệu nhật ký được sao lưu sang kho lưu trữ lạnh (Cold Storage) WORM chống sửa đổi trong 5 năm.", en: "Event logs are mirrored into write-once-read-many (WORM) storage for 5-year compliance retention." },
              },
            ],
          },
          {
            id: "item-nexus-exceptions-rto",
            slug: "nexus-exceptions-rto",
            moduleCode: "01",
            category: { vi: "01. Dự Án Tiêu Biểu", en: "01. Featured Projects" },
            title: {
              vi: "1.4 Xử Lý Ngoại Lệ & Hoàn Hàng (RTO)",
              en: "1.4 Exceptions & Returns (RTO)",
            },
            subtitle: {
              vi: "Quy tắc giao lại 3 lần, lưu kho đệm 48h và quy trình xử lý bồi thường khi bưu kiện hỏng.",
              en: "3-attempt delivery retries, 48-hour return buffer, and damaged parcel claims.",
            },
            time: "6m",
            level: { vi: "Ngoại lệ", en: "Exceptions" },
            iconName: "shield-check",
            telemetry: [
              { label: { vi: "SỐ LẦN GIAO LẠI", en: "MAX RETRIES" }, value: "Tối đa 3 lần", status: "good" },
              { label: { vi: "KHO ĐỆM CHỜ HOÀN", en: "RTO BUFFER" }, value: "48 Giờ giữ hàng", status: "good" },
            ],
            steps: [
              {
                stepTag: { vi: "BƯỚC 1: HAVERSINE GEOFENCING", en: "STEP 1: HAVERSINE GEOFENCE" },
                title: { vi: "Thuật Toán Cung Lớn Haversine Xác Thực Vị Trí Giao Thật", en: "Haversine Great-Circle Distance Anti-Fraud Verification" },
                lead: { vi: "Chặn đứng tình trạng bưu tá ngồi quán nước bấm báo phát không thành công để trốn việc.", en: "Preventing couriers from remotely logging fake delivery failures." },
                body: { vi: "• Chặn khai báo ảo: Bưu tá báo phát thất bại phải ở trong bán kính 200m địa chỉ người nhận.\n• Thuật toán Haversine: Tính khoảng cách mặt cầu Trái Đất (R = 6,371 km) trong < 0.1ms.\n• Cảnh báo tự động: Vượt quá bán kính 200m lập tức từ chối và ghi log vi phạm quy chế.", en: "• Anti-fraud: Failsafe delivery attempts verify courier GPS within 200m of recipient address.\n• Haversine formula: Calculates great-circle spherical distance (R = 6,371 km) in < 0.1ms.\n• Policy enforcement: Exceeding 200m radius triggers rejection and an operational audit flag." },
                calloutTitle: { vi: "CÔNG THỨC TOÁN HỌC", en: "SPATIAL FORMULA" },
                calloutText: { vi: "a = sin²(Δφ/2) + cos(φ1)cos(φ2)sin²(Δλ/2); d = 2R·atan2(√a, √(1−a)) với bán kính R = 6,371 km.", en: "Calculates true spherical geodesic distance taking into account Earth's mean curvature." },
              },
              {
                stepTag: { vi: "BƯỚC 2: KHO ĐỆM 48H", en: "STEP 2: 48H RETENTION BUFFER" },
                title: { vi: "Bộ Đệm Lưu Kho 48H (RTO Buffer) & Tự Động Bắn Tin Cứu Đơn", en: "48-Hour RTO Buffer & Automated Merchant Rescue Notifications" },
                lead: { vi: "Giữ kiện hàng tại bưu cục phát trong 48 giờ để chủ shop có cơ hội liên hệ hỗ trợ giao lại.", en: "Holding failed parcels at destination stations for 48 hours to enable merchant rescue interventions." },
                body: { vi: "• Kho đệm 48h: Sau 3 lần giao hỏng, hàng lưu tại bưu cục đích 48 giờ thay vì hoàn ngay.\n• Bắn tin cứu đơn: Webhook tự động báo cho shop để liên hệ khách đổi giờ/địa chỉ giao.\n• Hiệu quả kinh tế: Cứu thành công 28% đơn hàng nguy cơ hủy, tiết kiệm chi phí vận chuyển 2 chiều.", en: "• 48-Hour Buffer: Failed shipments are impounded for 48 hours instead of instant return.\n• Merchant rescue: Webhooks alert sellers to contact customers for re-routing or rescheduled delivery.\n• Financial impact: Rescues 28% of return candidates, saving substantial double-freight expense." },
                calloutTitle: { vi: "HIỆU QUẢ KINH TẾ", en: "FINANCIAL IMPACT" },
                calloutText: { vi: "Cứu được 28% đơn hàng chuyển hoàn giúp tiết kiệm hàng trăm triệu đồng phí vận tải 2 chiều mỗi tháng.", en: "Rescuing 28% of return candidates saves substantial double-transit freight expenses monthly." },
              },
              {
                stepTag: { vi: "BƯỚC 3: XỬ LÝ HÀNG HỎNG", en: "STEP 3: DAMAGE INDEMNITY" },
                title: { vi: "Quy Trình Xử Lý Bưu Kiện Hỏng & Bồi Thường Tự Động Trong 24H", en: "Damaged Parcel Protocol & Automated 24h Compensation" },
                lead: { vi: "Đồng kiểm khi nhận hàng, lập biên bản điện tử và tự động chi trả bảo hiểm bưu gửi.", en: "Joint inspection protocols, electronic incident reports, and automated insurance settlements." },
                body: { vi: "• Biên bản điện tử: Bưu tá và khách chụp 3 góc ảnh bưu kiện hỏng ngay trên ứng dụng.\n• Hoàn tiền Saga: Tự động hoàn tiền ví khách trong 24 giờ mà không cần chờ duyệt thủ công.\n• Bảo hiểm tự động: Kích hoạt hồ sơ bồi thường với công ty bảo hiểm trong vòng 24 giờ.", en: "• Joint e-report: Courier and recipient log damage with 3 in-app photos.\n• Saga refund: Issues automated wallet reimbursement to customer within 24 hours.\n• Claim integration: Initiates automated insurance subrogation files within 24 hours." },
                calloutTitle: { vi: "BẢO VỆ KHÁCH HÀNG", en: "CUSTOMER ASSURANCE" },
                calloutText: { vi: "Giảm thời gian xử lý khiếu nại bồi thường từ 14 ngày theo cách truyền thống xuống còn dưới 24 giờ.", en: "Compresses insurance claim resolution timelines from traditional 14 days down to under 24 hours." },
              },
            ],
          },
          {
            id: "item-nexus-architecture",
            slug: "nexus-architecture",
            moduleCode: "01",
            category: { vi: "01. Dự Án Tiêu Biểu", en: "01. Featured Projects" },
            title: {
              vi: "1.5 Kiến Trúc Hệ Thống Phân Tán",
              en: "1.5 Distributed Architecture",
            },
            subtitle: {
              vi: "Mô hình 4 tầng chịu tải cao, khóa phân tán Redis chống trùng đơn và phân tách CSDL.",
              en: "4-tier architecture, Redis distributed locks for idempotency, and database read/write split.",
            },
            time: "7m",
            level: { vi: "Kiến trúc", en: "Architecture" },
            iconName: "server",
            telemetry: [
              { label: { vi: "CHỐNG TRÙNG ĐƠN", en: "IDEMPOTENCY" }, value: "Redis Lock SETNX", status: "good" },
              { label: { vi: "CƠ SỞ DỮ LIỆU", en: "DATABASE" }, value: "PostgreSQL 3NF", status: "good" },
            ],
            steps: [
              {
                stepTag: { vi: "BƯỚC 1: ĐỊNH LÝ CAP", en: "STEP 1: CAP THEOREM" },
                title: { vi: "Phân Tách Miền Theo Định Lý CAP (CP Ledger vs AP Tracking)", en: "Domain Partitioning via CAP Theorem (CP Ledger vs AP Tracking)" },
                lead: { vi: "Áp dụng nhất quán mạnh (CP) cho dòng tiền COD và sẵn sàng cao (AP) cho tra cứu vận đơn.", en: "Applying Strong Consistency (CP) for COD money and High Availability (AP) for public tracking." },
                body: { vi: "• Định lý CAP: Hệ thống Kế toán COD chọn CP (nhất quán tuyệt đối, tuân thủ ACID).\n• Tra cứu Tracking: Chọn AP (sẵn sàng cao, chấp nhận dữ liệu trễ 1-2s qua Redis Cache).\n• Thực tế: Phân tách kiến trúc theo đúng đặc thù từng miền nghiệp vụ thay vì cào bằng.", en: "• CAP Partition: COD Finance operates as CP (strict consistency, ACID ledger compliance).\n• Public Tracking: Operates as AP (high availability, 1-2s cached eventual consistency).\n• Pragmatic design: Tailors consistency models to business domain requirements." },
                calloutTitle: { vi: "ĐÁNH ĐỔI KIẾN TRÚC", en: "ARCHITECTURAL TRADE-OFF" },
                calloutText: { vi: "Không ép toàn bộ hệ thống vào một mô hình duy nhất; chọn đúng công cụ cho từng miền giá trị cốt lõi.", en: "Avoids dogmatic architecture; matches database guarantees to specific business domain requirements." },
              },
              {
                stepTag: { vi: "BƯỚC 2: KHÓA PHÂN TÁN", en: "STEP 2: DISTRIBUTED LOCK" },
                title: { vi: "Khóa Phân Tán Redis SETNX & Chuẩn Idempotency-Key RFC 7231", en: "Redis SETNX Distributed Locks & RFC 7231 Idempotency" },
                lead: { vi: "Sử dụng header X-Idempotency-Key và khóa nguyên tử Redis để triệt tiêu race condition.", en: "Deploying X-Idempotency-Key headers and atomic Redis locks to eliminate race conditions." },
                body: { vi: "• Chuẩn RFC 7231: Header `X-Idempotency-Key: UUID` đính kèm theo từng lượt quét mã.\n• Khóa Redis: Lệnh `SET key value EX 86400 NX` chiếm khóa trong < 1ms; trả cache nếu gọi lại.\n• Kết quả: Triệt tiêu 100% rủi ro tạo đơn trùng lặp và tính thừa tiền COD cho khách.", en: "• RFC 7231 Header: `X-Idempotency-Key: UUID` attached to all barcode mutation requests.\n• Atomic lock: Redis `SET key value EX 86400 NX` acquires key in < 1ms; returns cached response.\n• Result: 100% elimination of duplicate orders and double COD debits." },
                calloutTitle: { vi: "CHUẨN RFC INTERNET", en: "IETF RFC STANDARD" },
                calloutText: { vi: "Tuân thủ nghiêm ngặt đặc tả IETF Idempotency-Key HTTP Header Specification.", en: "Strictly conforms to IETF draft specifications for idempotent HTTP mutation requests." },
              },
              {
                stepTag: { vi: "BƯỚC 3: CƠ SỞ DỮ LIỆU 3NF", en: "STEP 3: 3NF DATABASE" },
                title: { vi: "Phân Phối Tải Đọc/Ghi (CQRS) & Chuẩn Hóa CSDL 3NF", en: "Read/Write Replica Splitting (CQRS) & 3NF Normalization" },
                lead: { vi: "Phân tách cổng ghi Master và cổng đọc Read-Replicas kết hợp lược đồ chuẩn 3NF.", en: "Splitting Master write paths from Read-Replicas paired with rigorous 3NF normalization." },
                body: { vi: "• Phân tách Đọc/Ghi: 1 node Master xử lý ghi giao dịch, 3 node Read-Replicas phục vụ tra cứu.\n• Chuẩn hóa 3NF: Khử phụ thuộc bắc cầu, tách bảng bưu kiện, chuyến xe, bao tải và sự kiện.\n• Hiệu năng: Tiết kiệm 45% dung lượng đĩa và triệt tiêu hoàn toàn dị thường sửa đổi dữ liệu.", en: "• CQRS Split: 1 Primary master for writes, 3 Read-Replicas dedicated to tracking queries.\n• 3NF Schema: Isolates transitive dependencies across parcels, trips, manifests, and events.\n• Performance: Reduces disk footprint by 45% and eliminates operational data anomalies." },
                calloutTitle: { vi: "CHUẨN HÓA CODD 1970", en: "CODD 3NF FORM" },
                calloutText: { vi: "Mọi thuộc tính không khóa đều phụ thuộc vào khóa chính, toàn bộ khóa chính và không phụ thuộc bắc cầu.", en: "Every non-key attribute depends on the key, the whole key, and nothing but the key." },
              },
            ],
          },
          {
            id: "item-nexus-ai-rag",
            slug: "nexus-ai-rag",
            moduleCode: "01",
            category: { vi: "01. Dự Án Tiêu Biểu", en: "01. Featured Projects" },
            title: {
              vi: "1.6 Chatbot Tra Cứu Vận Đơn & Chính Sách",
              en: "1.6 Tracking & Policy Chatbot",
            },
            subtitle: {
              vi: "Tự động phân loại: truy vấn trực tiếp CSDL theo mã vận đơn hoặc tìm quy định gửi hàng.",
              en: "Intent routing: direct DB query for order status or vector search for shipping rules.",
            },
            time: "6m",
            level: { vi: "Chatbot", en: "Chatbot" },
            iconName: "boxes",
            telemetry: [
              { label: { vi: "PHÂN LOẠI Ý ĐỊNH", en: "ROUTER" }, value: "Semantic Router", status: "good" },
              { label: { vi: "TRUY VẤN DỮ LIỆU", en: "QUERY METHOD" }, value: "SQL Tool + Vector", status: "good" },
            ],
            steps: [
              {
                stepTag: { vi: "BƯỚC 1: SEMANTIC ROUTER", en: "STEP 1: SEMANTIC ROUTER" },
                title: { vi: "Bộ Định Tuyến Ngữ Nghĩa (Semantic Intent Router)", en: "Semantic Intent Router & Architecture Guardrails" },
                lead: { vi: "Phân loại câu hỏi của người dùng thành hai luồng xử lý: Dữ liệu biến động và Quy định tĩnh.", en: "Classifying user queries into two distinct pipelines: Volatile Telemetry vs Static Policy." },
                body: { vi: "• Chặn AI ảo giác: LLM không bao giờ được tự đoán vị trí đơn hàng hay tiền thu hộ.\n• Phân loại 15ms: Câu hỏi tra cứu -> gọi hàm SQL Tool; câu hỏi chính sách -> tìm PgVector.\n• Chính xác tuyệt đối: Đơn hàng được trả lời trực tiếp từ dữ liệu CSDL thời gian thực.", en: "• Anti-hallucination: Prevents LLM from inventing shipment locations or COD balances.\n• 15ms routing: Tracking inquiries dispatch to SQL Tool; policy questions route to PgVector.\n• Factual accuracy: Answers synthesized strictly from real-time database state." },
                calloutTitle: { vi: "TRIỆT TIÊU ẢO GIÁC", en: "ZERO HALLUCINATION" },
                calloutText: { vi: "Không bao giờ để LLM tự phán đoán vị trí xe tải hoặc số tiền thu hộ của khách hàng.", en: "Guarantees the LLM never fabricates delivery locations or financial cash balances." },
              },
              {
                stepTag: { vi: "BƯỚC 2: SQL TOOL CALLING", en: "STEP 2: SQL TOOL CALLING" },
                title: { vi: "Truy Vấn CSDL Trực Tiếp Bằng SQL Tool Calling An Toàn", en: "Sandboxed Read-Only SQL Tool Calling" },
                lead: { vi: "LLM sinh câu truy vấn SQL có tham số và thực thi trên môi trường Sandbox Read-Only.", en: "LLM generates parameterized SQL executed inside an isolated Read-Only database sandbox." },
                body: { vi: "• Quyền chỉ đọc: Chatbot truy vấn CSDL qua user Read-Only trên Read-Replica, timeout < 100ms.\n• Tước quyền can thiệp: Tuyệt đối cấm INSERT, UPDATE, DELETE và DROP để chống Prompt Injection.\n• Phản hồi nhanh: Trích xuất mã vận đơn và trả kết quả chính xác trong < 1.2 giây.", en: "• Sandboxed access: Read-Only user queries replica databases with 100ms timeout.\n• Security: Strips all INSERT, UPDATE, DELETE, and DDL permissions against prompt injection.\n• Fast response: Extracts order ID and generates verified status answer in < 1.2s." },
                calloutTitle: { vi: "BẢO MẬT TUYỆT ĐỐI", en: "READ-ONLY SANDBOX" },
                calloutText: { vi: "Tài khoản cơ sở dữ liệu của Chatbot bị tước toàn bộ quyền INSERT, UPDATE, DELETE và DROP.", en: "Chatbot DB user is stripped of all INSERT, UPDATE, DELETE, and DDL permissions." },
              },
              {
                stepTag: { vi: "BƯỚC 3: PGVECTOR & HNSW", en: "STEP 3: PGVECTOR & HNSW" },
                title: { vi: "Tìm Kiếm Tri Thức Bằng PgVector & Chỉ Mục HNSW", en: "Policy Knowledge Retrieval via PgVector & HNSW Indexing" },
                lead: { vi: "Sử dụng thuật toán Hierarchical Navigable Small World để tìm kiếm tương đồng vector nhanh chóng.", en: "Deploying Hierarchical Navigable Small World (HNSW) indexing for high-speed vector retrieval." },
                body: { vi: "• CSDL Vector: Lưu trữ embedding 1536 chiều tài liệu chính sách ngay trong PostgreSQL.\n• Chỉ mục HNSW: Tìm kiếm vector tương đồng Cosine trong < 8ms với độ chính xác 98.4%.\n• Hạ tầng tinh gọn: Không cần cài thêm server vector rời, tiết kiệm chi phí bảo trì hệ thống.", en: "• Native vectors: Stores 1536-dimensional embeddings directly inside PostgreSQL with pgvector.\n• HNSW graph index: Retrieves top semantic chunks in < 8ms with 98.4% accuracy.\n• Lean infrastructure: Avoids standalone vector databases, saving operational maintenance costs." },
                calloutTitle: { vi: "CHỈ MỤC HNSW", en: "HNSW ALGORITHM" },
                calloutText: { vi: "Thuật toán HNSW cho độ chính xác tìm kiếm ngữ nghĩa đạt 98.4% với độ trễ truy vấn dưới 8ms.", en: "HNSW graph search delivers 98.4% retrieval accuracy with sub-8ms query execution." },
              },
            ],
          },
          {
            id: "item-nexus-results",
            slug: "nexus-results",
            moduleCode: "01",
            category: { vi: "01. Dự Án Tiêu Biểu", en: "01. Featured Projects" },
            title: {
              vi: "1.7 Kết Quả Đo Lường & Demo Thực Tế",
              en: "1.7 Production Metrics & Live Demo",
            },
            subtitle: {
              vi: "Số liệu kiểm thử chịu tải, tỷ lệ khớp đối soát tiền hàng và đường dẫn demo trực tiếp.",
              en: "Load test metrics, COD reconciliation accuracy, and live production link.",
            },
            time: "4m",
            level: { vi: "Thực tế", en: "Production" },
            iconName: "check-circle-2",
            telemetry: [
              { label: { vi: "ĐỘ TRỄ P95", en: "P95 LATENCY" }, value: "38ms", status: "good" },
              { label: { vi: "HỆ THỐNG LIVE", en: "LIVE DEMO" }, value: "tracking.nexus-ex.site", status: "good" },
            ],
            steps: [
              {
                stepTag: { vi: "BƯỚC 1: KIỂM THỬ TẢI SLA", en: "STEP 1: LOAD TESTING SLA" },
                title: { vi: "Đo Lường Độ Trễ Phân Vị P95 / P99 Dưới Tải Đỉnh", en: "Percentile SLA Benchmarking: P95 & P99 Under Heavy Concurrency" },
                lead: { vi: "Đạt mốc 1,200 req/s với độ trễ P99 < 180ms trong các đợt kiểm thử hiệu năng k6.", en: "Sustaining 1,200 req/s with P99 latency < 180ms during rigorous k6 stress benchmarking." },
                body: { vi: "• Độ trễ P50/P95/P99: Đạt 22ms / 38ms / 176ms dưới tải đỉnh 1.200 req/s k6.\n• Tối ưu Gateway: NestJS Fastify + Redis Cache giới hạn overhead gateway < 8ms/req.\n• Tỷ lệ lỗi: 0.00% lỗi 5xx trong suốt 60 phút kiểm thử chịu tải liên tục.", en: "• Percentile Latencies: P50/P95/P99 clocked at 22ms / 38ms / 176ms under 1,200 req/s k6 load.\n• Gateway Tuning: NestJS Fastify + Redis Cache caps gateway overhead < 8ms per roundtrip.\n• Zero Failure: 0.00% 5xx error rate sustained throughout 60-minute stress tests." },
                calloutTitle: { vi: "PHÂN VỊ P99 KỸ THUẬT", en: "P99 PERCENTILE" },
                calloutText: { vi: "Đo lường bằng phân vị P95/P99 phản ánh chính xác trải nghiệm thực tế hơn giá trị trung bình trung vị.", en: "Percentiles reveal true worst-case tail latencies obscured by misleading average metrics." },
              },
              {
                stepTag: { vi: "BƯỚC 2: ĐỐI SOÁT COD 0 ĐỒNG", en: "STEP 2: ZERO-VARIANCE COD" },
                title: { vi: "Kiểm Toán Sai Lệch Dòng Tiền COD Đạt 0 Đồng", en: "Zero-Leakage Financial Verification & Daily Reconciliation" },
                lead: { vi: "Loại bỏ hoàn toàn sai lệch tiền mặt thu hộ giữa bưu tá, tài khoản ngân hàng và chủ shop.", en: "Eliminating all cash discrepancies between couriers, bank settlements, and merchant payouts." },
                body: { vi: "• Khớp dòng tiền 0đ: Đối soát 45.000 bưu kiện COD ghi nhận sai lệch đúng 0 đồng.\n• Tốc độ quyết toán: Rút ngắn thời gian chốt sổ cuối ngày từ 4 giờ xuống còn < 3 giây.\n• Trùng đơn: Giảm từ 3.2% về 0.00% nhờ khóa Idempotency Key 24h.", en: "• Zero Cash Leakage: 45,000 COD parcels audited with exactly 0 VND discrepancy.\n• Closing Velocity: Daily settlement reduced from 4 manual hours down to < 3 seconds.\n• Duplicate Orders: Slashed from 3.2% to 0.00% via 24h Idempotency Keys." },
                calloutTitle: { vi: "HIỆU QUẢ TÀI CHÍNH", en: "FINANCIAL IMPACT" },
                calloutText: { vi: "Bảo toàn 100% dòng tiền lưu động và triệt tiêu nguy cơ thất thoát do gian lận hoặc lỗi hệ thống.", en: "Guarantees 100% working capital integrity, eliminating losses from human fraud or software glitches." },
              },
              {
                stepTag: { vi: "BƯỚC 3: MÔI TRƯỜNG LIVE", en: "STEP 3: LIVE PRODUCTION" },
                title: { vi: "Vận Hành Thực Tế Tại tracking.nexus-ex.site", en: "Live Production Deployment at tracking.nexus-ex.site" },
                lead: { vi: "Triển khai trên hạ tầng Vercel & Cloud VPS với chứng chỉ bảo mật SSL/TLS đầy đủ.", en: "Deployed to production infrastructure with automated CI/CD and enterprise TLS encryption." },
                body: { vi: "• Trải nghiệm thực tế: Đang chạy live tại https://tracking.nexus-ex.site.\n• Tính năng: Tra cứu vận đơn Leaflet map 22 Hubs, FSM telemetry và chatbot.\n• Mã nguồn: Công khai tại repository GitHub logistics-management-system.", en: "• Live Deployment: Operational at https://tracking.nexus-ex.site.\n• Features: 22-hub Leaflet interactive map, FSM status telemetry, and AI chatbot.\n• Source Code: Open repository available at GitHub logistics-management-system." },
                calloutTitle: { vi: "TRUY CẬP TRỰC TIẾP", en: "PRODUCTION LINK" },
                calloutText: { vi: "Khám phá ngay tại tracking.nexus-ex.site kèm tài liệu đặc tả API trên GitHub.", en: "Experience live demo at tracking.nexus-ex.site alongside open GitHub repository documentation." },
              },
            ],
          },
        ],
      },
{
        id: "item-cab",
        slug: "cab-booking-system",
        moduleCode: "01",
        category: { vi: "01. Dự Án Tiêu Biểu", en: "01. Featured Projects" },
        title: {
          vi: "Cab Booking Dispatch",
          en: "Cab Booking Dispatch",
        },
        subtitle: {
          vi: "Hệ thống điều vận cuốc xe, phân tài xế tự động theo bán kính GPS và tính giá động.",
          en: "Automated cab dispatch platform with GPS geofencing and dynamic fare calculation.",
        },
        time: "10m",
        level: { vi: "Hệ thống", en: "Full-Stack" },
        iconName: "car",
        telemetry: [
          { label: { vi: "BÁN KÍNH GPS", en: "GPS RADIUS" }, value: "3.5 km", status: "good" },
          { label: { vi: "THỜI GIAN GHÉP", en: "MATCH TIME" }, value: "< 2.5s", status: "good" },
          { label: { vi: "CÔNG NGHỆ", en: "TECH STACK" }, value: "NodeJS · Redis", status: "good" },
          { label: { vi: "ACID LOCK", en: "LOCK MECHANISM" }, value: "Optimistic", status: "good" },
        ],
        steps: [
          {
            stepTag: { vi: "ĐẶC TẢ BA", en: "BA SPEC" },
            title: {
              vi: "Quy Chuẩn Điều Phối Tài Xế Chống Trùng Cuốc",
              en: "Concurrent Driver Dispatch & Zero-Conflict Matching",
            },
            lead: {
              vi: "Bài toán 2 tài xế cùng bấm nhận 1 cuốc xe cùng lúc được giải quyết triệt để bằng Redis Distributed Lock.",
              en: "Preventing race conditions where multiple drivers claim the same ride concurrently using Redis Distributed Locks.",
            },
            body: {
              vi: "Tài liệu PRD quy định thuật toán ghép tài xế dựa trên khoảng cách Haversine và điểm đánh giá dịch vụ thời gian thực.",
              en: "The PRD specifies matching algorithms utilizing Haversine geo-distance and real-time driver quality ratings.",
            },
          },
        ],

        children: [
          {
            id: "item-cab-overview",
            slug: "cab-overview",
            moduleCode: "01",
            category: { vi: "01. Dự Án Tiêu Biểu", en: "01. Featured Projects" },
            title: {
              vi: "1.1 Bối Cảnh & Điều Phối Cuốc",
              en: "1.1 Dispatch Overview & Specs",
            },
            subtitle: {
              vi: "Khảo sát quy trình phân tài xế, quản lý trạng thái cuốc và bản đồ nhiệt nhu cầu xe.",
              en: "Driver dispatch workflow, ride state transitions, and demand heatmap analysis.",
            },
            time: "4m",
            level: { vi: "Nghiệp vụ", en: "Domain" },
            iconName: "target",
            telemetry: [
              { label: { vi: "BÁN KÍNH GPS", en: "GPS RADIUS" }, value: "3.5 km", status: "good" },
              { label: { vi: "THUẬT TOÁN", en: "MATCH" }, value: "Haversine", status: "good" },
            ],
            steps: [
              {
                stepTag: { vi: "BƯỚC 1: BÁN KÍNH GPS", en: "STEP 1: GPS RADIUS" },
                title: { vi: "Mô Hình Quét Bán Kính Điều Vận (Spatial Dispatch Ring)", en: "Spatial Geofence Dispatch & Dynamic Radius Ring" },
                lead: { vi: "Phân vùng bán kính động 1km - 3.5km để cân bằng giữa thời gian đón và số lượng tài xế.", en: "Dynamic 1km - 3.5km radial ring balancing pickup latency and driver pool size." },
                body: { vi: "• Vòng quét đồng tâm: Bắt đầu từ r1 = 1km (5s), tự động mở rộng ra 2.5km và tối đa 3.5km.\n• Tối ưu thời gian đón: Thuật toán Haversine đảm bảo thời gian tài xế đến đón khách < 5 phút.\n• Tránh hủy cuốc: Giới hạn bán kính 3.5km ngăn ngừa tài xế từ chối cuốc do đón quá xa.", en: "• Concentric Rings: Starts at r1 = 1km (5s), widening dynamically to 2.5km and 3.5km.\n• ETA Optimization: Haversine distance ensures pickup arrival within < 5 minutes.\n• Reduced Cancellation: 3.5km perimeter cap prevents driver cancellations due to excessive distance." },
                calloutTitle: { vi: "TỐI ƯU CỰ LÝ ĐÓN XE", en: "PICKUP OPTIMIZATION" },
                calloutText: { vi: "Giới hạn bán kính tối đa 3.5km giúp giảm tỷ lệ tài xế hủy cuốc do điểm đón quá xa.", en: "Capping radius at 3.5km minimizes driver cancellations caused by excessive deadhead distance." },
              },
              {
                stepTag: { vi: "BƯỚC 2: TÍNH CƯỚC ĐỘNG", en: "STEP 2: SURGE PRICING" },
                title: { vi: "Công Thức Cân Bằng Cung Cầu & Tính Cước Động (Surge Pricing)", en: "Dynamic Surge Pricing & Supply-Demand Equilibrium Formula" },
                lead: { vi: "Hệ số cước k_surge tự động điều chỉnh theo mật độ cuốc xe và số xe rỗng trong khu vực.", en: "Dynamic multiplier k_surge equilibrating local ride demand against idle driver supply." },
                body: { vi: "• Cân bằng cung cầu: Hệ số cước k_surge = 1.0 + α * (Demand - Supply) / Capacity.\n• Điều tiết xe rỗng: Giá tăng khuyến khích tài xế vùng lân cận di chuyển về điểm nóng.\n• Giới hạn bảo vệ: Khóa trần cước k_surge <= 2.2x để bảo vệ quyền lợi người dùng.", en: "• Dynamic Equilibrium: Surge multiplier k_surge = 1.0 + α * (Demand - Supply) / Capacity.\n• Fleet Rebalancing: Incentivizes idle drivers to reposition toward high-demand surge clusters.\n• Consumer Cap: Multiplier strictly capped at 2.2x to maintain fair customer pricing." },
                calloutTitle: { vi: "CÂN BẰNG THỊ TRƯỜNG", en: "MARKET EQUILIBRIUM" },
                calloutText: { vi: "Thuật toán giới hạn trần cước k_surge <= 2.2x nhằm bảo vệ người tiêu dùng và tránh phản ứng tiêu cực.", en: "Multiplier is strictly hard-capped at 2.2x to safeguard consumer sentiment and regulatory compliance." },
              },
            ],
          },
          {
            id: "item-cab-architecture",
            slug: "cab-architecture",
            moduleCode: "01",
            category: { vi: "01. Dự Án Tiêu Biểu", en: "01. Featured Projects" },
            title: {
              vi: "1.2 Thuật Toán Ghép Xe & Khóa Redis",
              en: "1.2 Matching Algorithm & Redis Lock",
            },
            subtitle: {
              vi: "Xử lý concurrency: chống 2 tài xế cùng bấm nhận 1 cuốc bằng Redis Distributed Lock.",
              en: "Concurrency handling: prevent dual driver ride claim using Redis Distributed Lock.",
            },
            time: "5m",
            level: { vi: "Thuật toán", en: "Algorithm" },
            iconName: "git-branch",
            telemetry: [
              { label: { vi: "ACID LOCK", en: "LOCK TYPE" }, value: "Distributed", status: "good" },
              { label: { vi: "THỜI GIAN GHÉP", en: "LATENCY" }, value: "< 2.5s", status: "good" },
            ],
            steps: [
              {
                stepTag: { vi: "BƯỚC 1: REDIS DISTRIBUTED LOCK", en: "STEP 1: REDIS LOCK" },
                title: { vi: "Khóa Phân Tán Redis Redlock & Chống Xung Đột Nhận Cuốc", en: "Redis Redlock Distributed Locking & Concurrency Race Elimination" },
                lead: { vi: "Triệt tiêu hiện tượng 2 tài xế cùng bấm nhận 1 cuốc xe trong cùng 1 mili-giây.", en: "Eliminating dual-driver ride acceptance collisions occurring within the exact millisecond." },
                body: { vi: "• Khóa phân tán: Lệnh Redis `SET lock:ride:{id} uuid NX PX 5000` chỉ cấp quyền cho 1 tài xế.\n• Phản hồi tức thì: Tài xế bấm sau nhận thông báo 'Đã có người nhận' trong < 15ms.\n• Tự giải phóng: TTL 5000ms tự động nhả khóa nếu tài xế gặp sự cố mất mạng đột ngột.", en: "• Distributed Lock: Atomic Redis `SET lock:ride:{id} uuid NX PX 5000` assigns ride to exactly one driver.\n• Fast-fail rejection: Concurrent tapping drivers receive immediate notification in < 15ms.\n• Fail-safe TTL: 5,000ms expiration auto-releases lock if winning driver experiences dropped network." },
                calloutTitle: { vi: "NGUYÊN TỬ HÓA THAO TÁC", en: "ATOMIC OPERATIONS" },
                calloutText: { vi: "Thời gian chiếm giữ khóa chỉ 5 giây (TTL 5000ms), tự động giải phóng nếu tài xế mất kết nối mạng đột ngột.", en: "Lock acquisition TTL is bounded at 5,000ms, auto-expiring cleanly if connectivity drops abruptly." },
              },
              {
                stepTag: { vi: "BƯỚC 2: WEBSOCKET REALTIME", en: "STEP 2: WEBSOCKET PIPELINE" },
                title: { vi: "Truyền Tin Tọa Độ Thời Gian Thực Qua Socket.io & Redis Pub/Sub", en: "Real-Time Telemetry Streaming via Socket.io & Redis Pub/Sub" },
                lead: { vi: "Tọa độ GPS của tài xế được truyền tải 2 giây/lần với độ trễ phản hồi < 50ms.", en: "Driver GPS beacons streamed every 2 seconds with sub-50ms roundtrip delivery latency." },
                body: { vi: "• Truyền tin nhị phân: Tọa độ GPS tài xế phát 2 giây/lần qua WebSocket nhị phân.\n• Redis Pub/Sub: Phân phối tọa độ đồng thời tới khách đặt xe với độ trễ < 50ms.\n• Di chuyển mượt: Nội suy góc xoay (Bearing Interpolation) hiển thị xe lướt êm trên bản đồ.", en: "• Binary Streaming: Driver GPS coordinates transmitted every 2s via lightweight binary WebSockets.\n• Redis Pub/Sub: Real-time broadcast to passenger tracking map with < 50ms roundtrip delay.\n• Smooth Movement: Bearing interpolation ensures smooth vehicle animation along roadways." },
                calloutTitle: { vi: "HIỆU NĂNG TRUYỀN DẪN", en: "STREAMING LATENCY" },
                calloutText: { vi: "Giảm 92% tải băng thông mạng di động so với kỹ thuật Polling HTTP truyền thống.", en: "Reduces mobile network bandwidth consumption by 92% compared to legacy HTTP polling." },
              },
            ],
          },
          {
            id: "item-cab-results",
            slug: "cab-results",
            moduleCode: "01",
            category: { vi: "01. Dự Án Tiêu Biểu", en: "01. Featured Projects" },
            title: {
              vi: "1.3 Kết Quả Khớp Lệnh & Thực Tế",
              en: "1.3 Operational Results & Metrics",
            },
            subtitle: {
              vi: "Thời gian ghép cuốc dưới 2.5s, 0% xung đột tài xế và biểu đồ phân bổ tải.",
              en: "Sub-2.5s ride matching, 0% driver conflicts, and load distribution metrics.",
            },
            time: "4m",
            level: { vi: "Kết quả", en: "Metrics" },
            iconName: "check-circle-2",
            telemetry: [
              { label: { vi: "TỶ LỆ KHỚP", en: "MATCH RATE" }, value: "99.8%", status: "good" },
              { label: { vi: "TRÙNG CUỐC", en: "CONFLICTS" }, value: "0 Cuốc", status: "good" },
            ],
            steps: [
              {
                stepTag: { vi: "BƯỚC 1: HIỆU NĂNG KHỚP LỆNH", en: "STEP 1: MATCHING BENCHMARK" },
                title: { vi: "Thời Gian Ghép Cuốc < 2.5 Giây & Tỷ Lệ Xung Đột 0%", en: "Sub-2.5s Ride Matching & Zero Driver Concurrency Collisions" },
                lead: { vi: "Kiểm nghiệm trên 10,000 cuốc xe mô phỏng: 0 cuộc xung đột trùng xe xảy ra.", en: "Benchmarking 10,000 concurrent simulated bookings: zero dual-driver collision events." },
                body: { vi: "• Thời gian ghép: Hoàn tất phân bổ cuốc xe trung bình 2.1 giây sau khi đặt.\n• Trùng cuốc 0%: Triệt tiêu hoàn toàn xung đột tài xế nhờ khóa phân tán Redis.\n• Chất lượng: Tỷ lệ hoàn thành chuyến đạt 98.5%, đánh giá hài lòng 4.9/5 sao.", en: "• Match Velocity: Average end-to-end booking dispatch completed in 2.1 seconds.\n• Zero Collisions: 0.00% driver booking conflict rate via Redis distributed locking.\n• Satisfaction: 98.5% trip completion rate and 4.9/5 passenger satisfaction score." },
                calloutTitle: { vi: "ĐO LƯỜNG THỰC NGHIỆM", en: "EMPIRICAL BENCHMARK" },
                calloutText: { vi: "Sức chịu tải đạt 2,500 yêu cầu đặt xe đồng thời trên mỗi node máy chủ tiêu chuẩn.", en: "Demonstrates sustained throughput of 2,500 concurrent ride requests per standard node." },
              },
            ],
          },
        ],
      },
{
        id: "item-tourist",
        slug: "tourist-accommodation",
        moduleCode: "01",
        category: { vi: "01. Dự Án Tiêu Biểu", en: "01. Featured Projects" },
        title: {
          vi: "Tourist Accommodation ERP",
          en: "Tourist Accommodation ERP",
        },
        subtitle: {
          vi: "Hệ thống quản lý chuỗi khách sạn, homestay, phân bổ phòng và đối soát hóa đơn VAT.",
          en: "Multi-property hotel & homestay management platform with automated VAT reconciliation.",
        },
        time: "10m",
        level: { vi: "Hệ thống", en: "Full-Stack" },
        iconName: "building-2",
        telemetry: [
          { label: { vi: "PHÒNG QUẢN LÝ", en: "ROOMS MANAGED" }, value: "500+ Keys", status: "good" },
          { label: { vi: "ĐỐI SOÁT VAT", en: "VAT AUDIT" }, value: "100% Khớp", status: "good" },
          { label: { vi: "CƠ SỞ DỮ LIỆU", en: "DATABASE" }, value: "PostgreSQL", status: "good" },
          { label: { vi: "QUY TRÌNH", en: "WORKFLOW" }, value: "Check-in/out", status: "good" },
        ],
        steps: [
          {
            stepTag: { vi: "NGHIỆP VỤ", en: "BUSINESS DOMAIN" },
            title: {
              vi: "Quản Lý Vòng Đời Đặt Phòng & Chống Overbooking",
              en: "Reservation Lifecycle & Overbooking Prevention",
            },
            lead: {
              vi: "Sử dụng kỹ thuật Row-level Lock trong PostgreSQL để khóa phòng trong 15 phút thanh toán tạm.",
              en: "Leverages PostgreSQL row-level locking during the 15-minute checkout window to eliminate overbooking.",
            },
            body: {
              vi: "Tích hợp biểu đồ Calendar Matrix trực quan cho lễ tân theo dõi tỷ lệ lấp đầy phòng theo thời gian thực.",
              en: "Features an intuitive Calendar Matrix dashboard for front desk staff to monitor room occupancy in real time.",
            },
          },
        ],
        children: [
          {
            id: "item-tourist-overview",
            slug: "tourist-overview",
            moduleCode: "01",
            category: { vi: "01. Dự Án Tiêu Biểu", en: "01. Featured Projects" },
            title: {
              vi: "1.1 Nghiệp Vụ Chuỗi Homestay & Phòng",
              en: "1.1 Property & Room Reservation Domain",
            },
            subtitle: {
              vi: "Khảo sát mô hình kinh doanh phòng trọ, homestay, quản lý vòng đời đặt phòng và check-in/out.",
              en: "Hospitality domain elicitation, reservation lifecycle, and check-in/out workflows.",
            },
            time: "4m",
            level: { vi: "Nghiệp vụ", en: "Domain" },
            iconName: "target",
            telemetry: [
              { label: { vi: "PHÒNG QUẢN LÝ", en: "ROOMS" }, value: "500+ Keys", status: "good" },
              { label: { vi: "TỶ LỆ LẤP ĐẦY", en: "OCCUPANCY" }, value: "84%", status: "good" },
            ],
            steps: [
              {
                stepTag: { vi: "BƯỚC 1: BÀI TOÁN OVERBOOKING", en: "STEP 1: OVERBOOKING RISK" },
                title: { vi: "Bối Cảnh Nghiệp Vụ Chuỗi Khách Sạn & Vấn Nạn Bán Phòng Vượt Mức", en: "Hospitality Multi-Property Operations & Overbooking Exposure" },
                lead: { vi: "Đồng bộ đa kênh OTA (Booking, Agoda, Traveloka) đối mặt nguy cơ bán trùng phòng.", en: "Multi-channel OTA synchronization exposed to catastrophic dual-booking anomalies." },
                body: { vi: "• Nguy cơ Overbooking: Agoda, Booking và khách tại quầy cùng chốt 1 phòng trong 1 giây.\n• Hệ quả: Bán vượt phòng dẫn đến bồi thường tiền và tổn hại uy tín thương hiệu.\n• Giải pháp: Khóa giữ chỗ tập trung (Centralized Inventory Lock) làm nguồn sự thật duy nhất.", en: "• Overbooking Risk: Multiple OTA channels checkout the last room in the same second.\n• Consequence: Displaced guests, costly hotel relocation penalties, and brand damage.\n• Solution: Centralized inventory lock acting as a single source of truth across all channels." },
                calloutTitle: { vi: "ĐỒNG BỘ ĐA KÊNH OTA", en: "CHANNEL SYNCHRONIZATION" },
                calloutText: { vi: "Cần cơ chế khóa chỗ tập trung (Centralized Inventory Lock) làm nguồn sự thật duy nhất (Single Source of Truth).", en: "Mandates a centralized inventory lock acting as an unambiguous single source of truth." },
              },
            ],
          },
          {
            id: "item-tourist-architecture",
            slug: "tourist-architecture",
            moduleCode: "01",
            category: { vi: "01. Dự Án Tiêu Biểu", en: "01. Featured Projects" },
            title: {
              vi: "1.2 Thiết Kế CSDL 3NF & Row Lock",
              en: "1.2 3NF Relational DB & Row Locking",
            },
            subtitle: {
              vi: "Ngăn chặn tình trạng Overbooking bằng kỹ thuật Row-level Lock trong 15 phút thanh toán.",
              en: "PostgreSQL row-level locking during 15-min checkout window preventing overbooking.",
            },
            time: "5m",
            level: { vi: "Kiến trúc CSDL", en: "Database" },
            iconName: "database",
            telemetry: [
              { label: { vi: "CƠ SỞ DỮ LIỆU", en: "DATABASE" }, value: "PostgreSQL 3NF", status: "good" },
              { label: { vi: "KHÓA OVERBOOK", en: "LOCK" }, value: "Row Lock (15m)", status: "good" },
            ],
            steps: [
              {
                stepTag: { vi: "BƯỚC 1: POSTGRESQL ROW LOCK", en: "STEP 1: ROW-LEVEL LOCKING" },
                title: { vi: "Cơ Chế Khóa Dòng Row-Level Lock & Khóa Tạm 15 Phút Thanh Toán", en: "PostgreSQL SELECT FOR UPDATE & 15-Minute Provisional Lock Window" },
                lead: { vi: "Sử dụng lệnh SELECT FOR UPDATE NOWAIT kết hợp bảng đệm thời gian giữ phòng.", en: "Executing SELECT FOR UPDATE NOWAIT paired with time-bounded provisional lock tables." },
                body: { vi: "• Khóa tức thì: Thực thi `SELECT ... FOR UPDATE NOWAIT` khóa ngay dòng phòng trong DB.\n• Chặn xếp hàng: Yêu cầu tranh chấp nhận lỗi LockNotAvailable ngay, không gây nghẽn kết nối.\n• Giữ chỗ 15 phút: Cấp trạng thái HELD trong 15 phút; quá hạn tự động nhả phòng cho khách khác.", en: "• Row-Level Lock: Executes `SELECT ... FOR UPDATE NOWAIT` placing an instant exclusive row lock.\n• Fast-Fail: Concurrent booking attempts fail fast with LockNotAvailableException instead of queuing.\n• 15-Minute Hold: Sets HELD status for 15 minutes; worker auto-releases unconfirmed holds." },
                calloutTitle: { vi: "CÔ LẬP GIAO DỊCH ACID", en: "ACID TRANSACTION" },
                calloutText: { vi: "Cấp độ cô lập Serializable loại bỏ 100% hiện tượng ghi đè bóng ma (Phantom Reads).", en: "Serializable transaction isolation eradicates phantom reads and non-repeatable anomalies." },
              },
              {
                stepTag: { vi: "BƯỚC 2: CHUẨN HÓA 3NF", en: "STEP 2: 3NF RELATIONAL SCHEMA" },
                title: { vi: "Chuẩn Hóa 3NF: Phân Tách Phòng, Hạng Phòng & Chính Sách Giá", en: "3NF Relational Schema: Separating Rooms, Room Types & Price Plans" },
                lead: { vi: "Triệt tiêu phụ thuộc bắc cầu giữa thuộc tính chi nhánh, loại phòng và biểu giá ngày lễ.", en: "Eliminating transitive dependencies across branches, room classes, and seasonal rate plans." },
                body: { vi: "• Phân tách thực thể: Tách riêng Chi nhánh, Hạng phòng, Phòng vật lý và Bảng giá theo mùa.\n• Khử phụ thuộc bắc cầu: Tuân thủ chuẩn 3NF, bảo vệ toàn vẹn lịch sử hóa đơn khi đổi giá.\n• Ràng buộc toàn vẹn: Khóa ngoại ON DELETE RESTRICT bảo đảm dữ liệu không bị xóa nhầm.", en: "• Entity Isolation: Segregates Branches, Room Types, Physical Rooms, and Rate Plans.\n• 3NF Normalization: Preserves historical booking ledger records when seasonal rates adjust.\n• Integrity: Strict foreign key constraints with ON DELETE RESTRICT prevent accidental cascades." },
                calloutTitle: { vi: "BẢO TOÀN DỮ LIỆU", en: "SCHEMA INTEGRITY" },
                calloutText: { vi: "Bảo đảm tính toàn vẹn tham chiếu qua các khóa ngoại ON DELETE RESTRICT.", en: "Enforces relational integrity via strict ON DELETE RESTRICT foreign key constraints." }
                ,
              },
            ],
          },
          {
            id: "item-tourist-results",
            slug: "tourist-results",
            moduleCode: "01",
            category: { vi: "01. Dự Án Tiêu Biểu", en: "01. Featured Projects" },
            title: {
              vi: "1.3 Quản Lý 500+ Keys & Hóa Đơn VAT",
              en: "1.3 500+ Keys Scale & VAT Audit",
            },
            subtitle: {
              vi: "Vận hành ổn định chuỗi 500+ phòng nghỉ, 100% khớp hóa đơn VAT và báo cáo doanh thu tức thì.",
              en: "Stable 500+ property operation, 100% VAT audit match, and instant financial reporting.",
            },
            time: "4m",
            level: { vi: "Vận hành", en: "Operations" },
            iconName: "check-circle-2",
            telemetry: [
              { label: { vi: "ĐỐI SOÁT VAT", en: "VAT RECON" }, value: "100% Khớp", status: "good" },
              { label: { vi: "TỶ LỆ LỖI", en: "ERROR RATE" }, value: "0.00%", status: "good" },
            ],
            steps: [
              {
                stepTag: { vi: "BƯỚC 1: ĐỐI SOÁT HÓA ĐƠN", en: "STEP 1: TAX & INVOICE RECON" },
                title: { vi: "Vận Hành 500+ Keys & Tự Động Đối Soát Hóa Đơn Điện Tử VAT", en: "500+ Keys Scale & 100% Automated VAT Electronic Invoice Matching" },
                lead: { vi: "Khớp 100% doanh thu phòng với hệ thống hóa đơn điện tử cơ quan thuế.", en: "100% reconciliation between room revenue and tax authority electronic e-invoices." },
                body: { vi: "• Quy mô chuỗi: Quản lý 500+ phòng nghỉ, tỷ lệ lấp đầy trung bình 87.4% mùa cao điểm.\n• Đối soát tự động: Khớp 100% doanh thu phòng và dịch vụ với cổng e-Invoice Tổng cục Thuế.\n• Tiết kiệm thời gian: Giảm 90% thời gian xuất hóa đơn và chốt sổ kế toán cuối ngày.", en: "• Chain Scale: Manages 500+ rooms across properties, sustaining 87.4% peak occupancy.\n• Automated Tax Reconciliation: 100% match with National Tax e-Invoice APIs for rooms and services.\n• Time Efficiency: Slashes daily financial closing and invoice issuance time by 90%." },
                calloutTitle: { vi: "MINH BẠCH TÀI CHÍNH", en: "FINANCIAL TRANSPARENCY" },
                calloutText: { vi: "Xuất báo cáo tài chính kiểm toán tức thì chỉ với một cú nhấp chuột.", en: "Generates auditable financial revenue statements instantaneously in a single click." },
              },
            ],
          },
        ],
      },
    ],
  },

  // PILLAR 02: CHUYÊN NGÀNH BUSINESS ANALYST
  {
    id: "folder-ba",
    code: "02",
    title: {
      vi: "02. Chuyên Ngành Business Analyst (BA)",
      en: "02. Business Analyst (BA) Suite",
    },
    color: "#2563eb",
    bgLight: "#eff6ff",
    borderLight: "#bfdbfe",
    items: [
{
        id: "item-ba-lifecycle",
        slug: "ba-lifecycle",
        moduleCode: "02",
        category: { vi: "02. Chuyên Ngành Business Analyst", en: "02. Business Analyst Suite" },
        title: {
          vi: "Quy Trình BA 5 Bước (Lifecycle)",
          en: "End-to-End BA Lifecycle",
        },
        subtitle: {
          vi: "Vòng đời 5 bước chuẩn BABOK: Khảo sát -> Phân tích -> Đặc tả -> Nghiệm thu UAT -> Chuyển giao.",
          en: "5-stage BABOK lifecycle: Elicitation -> Analysis -> Specification -> UAT Gate -> Handover.",
        },
        time: "10m",
        level: { vi: "Thực chiến", en: "Hands-on" },
        iconName: "workflow",
        telemetry: [
          { label: { vi: "CHUẨN QUY TRÌNH", en: "STANDARD" }, value: "BABOK v3 / Agile", status: "good" },
          { label: { vi: "CỘT MỐC", en: "GATES" }, value: "5 Cột Mốc", status: "good" },
          { label: { vi: "BÀN GIAO", en: "DELIVERABLE" }, value: "PRD / SRS / UAT", status: "good" },
          { label: { vi: "KIỂM SOÁT", en: "CONTROL" }, value: "Scope Freeze", status: "good" },
        ],
        steps: [
          {
            stepTag: { vi: "VÒNG ĐỜI BA", en: "BA LIFECYCLE" },
            title: {
              vi: "Quy Trình 5 Bước Đưa Dự Án Từ Ý Tưởng Đến Nghiệm Thu",
              en: "5-Stage Framework: Inception to Production UAT Sign-off",
            },
            lead: {
              vi: "Senior IT BA đóng vai trò kiến trúc sư thông tin, cầu nối tin cậy giữa Business và Dev.",
              en: "Senior IT BA bridges business vision and technical execution with zero ambiguity.",
            },
            body: {
              vi: "Mỗi giai đoạn đều có tiêu chí hoàn thành (Definition of Done) rõ ràng để loại bỏ rủi ro hiểu lầm.",
              en: "Each stage enforces crisp Definition of Done gates, mitigating project rework risks.",
            },
          },
        ],
      },
{
        id: "item-ba-elicitation",
        slug: "ba-elicitation",
        moduleCode: "02",
        category: { vi: "02. Chuyên Ngành Business Analyst", en: "02. Business Analyst Suite" },
        title: {
          vi: "Khảo Sát & Khai Thác Yêu Cầu",
          en: "Requirements Elicitation",
        },
        subtitle: {
          vi: "Kỹ năng phỏng vấn Stakeholder, Workshop JAD, As-Is vs To-Be Gap và Ma trận RACI.",
          en: "Stakeholder interviewing, JAD workshops, As-Is vs To-Be gap analysis, and RACI Matrix.",
        },
        time: "8m",
        level: { vi: "Thực chiến", en: "Hands-on" },
        iconName: "users-2",
        telemetry: [
          { label: { vi: "PHƯƠNG PHÁP", en: "METHOD" }, value: "Workshop JAD / 1-on-1", status: "good" },
          { label: { vi: "MA TRẬN TRÁCH NHIỆM", en: "GOVERNANCE" }, value: "RACI Model", status: "good" },
          { label: { vi: "PHÂN TÍCH GAP", en: "ANALYSIS" }, value: "As-Is -> To-Be", status: "good" },
          { label: { vi: "XUNG ĐỘT", en: "CONFLICT" }, value: "Resolved", status: "good" },
        ],
        steps: [
          {
            stepTag: { vi: "KHẢO SÁT", en: "ELICITATION" },
            title: {
              vi: "Khai Thác Yêu Cầu Đa Chiều & Phân Quyền RACI",
              en: "Multi-Stakeholder Elicitation & RACI Governance",
            },
            lead: {
              vi: "Áp dụng kỹ năng lắng nghe chủ động và câu hỏi đào sâu Root Cause để tìm ra vấn đề cốt lõi.",
              en: "Active listening and 5-Whys root-cause questioning uncover true operational pain points.",
            },
            body: {
              vi: "Ma trận RACI giúp xác lập rõ quyền hạn và trách nhiệm của từng bên liên quan.",
              en: "RACI governance matrix defines explicit accountabilities across cross-functional units.",
            },
          },
        ],
      },
{
        id: "item-ba-backlog",
        slug: "ba-backlog",
        moduleCode: "02",
        category: { vi: "02. Chuyên Ngành Business Analyst", en: "02. Business Analyst Suite" },
        title: {
          vi: "Danh Mục Tính Năng & Backlog",
          en: "Feature Backlog & INVEST",
        },
        subtitle: {
          vi: "Phân rã tính năng, viết User Story chuẩn INVEST kèm tiêu chí Gherkin Given-When-Then và MoSCoW.",
          en: "Feature decomposition, INVEST User Stories, Gherkin Acceptance Criteria, and MoSCoW.",
        },
        time: "10m",
        level: { vi: "Thực chiến", en: "Hands-on" },
        iconName: "file-spreadsheet",
        telemetry: [
          { label: { vi: "TIÊU CHUẨN STORY", en: "STORY FORMAT" }, value: "INVEST / Persona", status: "good" },
          { label: { vi: "NGHIỆM THU", en: "ACCEPTANCE" }, value: "Gherkin G-W-T", status: "good" },
          { label: { vi: "ƯU TIÊN", en: "PRIORITY" }, value: "MoSCoW Matrix", status: "good" },
          { label: { vi: "ƯỚC LƯỢNG", en: "ESTIMATION" }, value: "Story Points", status: "good" },
        ],
        steps: [
          {
            stepTag: { vi: "QUẢN TRỊ BACKLOG", en: "BACKLOG MANAGEMENT" },
            title: {
              vi: "Phân Rã Tính Năng & Viết Kịch Bản Nghiệm Thu Gherkin",
              en: "Feature Decomposition & Executable Gherkin Scenarios",
            },
            lead: {
              vi: "Mỗi User Story đều có Acceptance Criteria chi tiết mô tả rõ điều kiện thành công và ngoại lệ.",
              en: "Every story carries airtight Acceptance Criteria detailing happy paths and failure modes.",
            },
            body: {
              vi: "Giúp lập trình viên và kiểm thử viên có cùng một thước đo tiêu chuẩn để nghiệm thu tính năng.",
              en: "Aligns engineers and QA on shared verification standards before writing lines of code.",
            },
          },
        ],
      },
{
        id: "item-ba-diagrams",
        slug: "ba-diagrams-modeling",
        moduleCode: "02",
        category: { vi: "02. Chuyên Ngành Business Analyst", en: "02. Business Analyst Suite" },
        title: {
          vi: "Sơ Đồ Kỹ Thuật Senior (Studio)",
          en: "Senior BA Diagrams Studio",
        },
        subtitle: {
          vi: "Bộ 6 sơ đồ thực chiến: Activity Swimlanes, Use Case Diagram, Đặc tả chi tiết, API Sequence, DDD, ERD 3NF.",
          en: "6 core blueprints: Activity Swimlanes, Use Case Diagram, Fully Dressed Specs, API Sequence, DDD, ERD 3NF.",
        },
        time: "15m",
        level: { vi: "Senior Blueprint", en: "Senior Blueprint" },
        iconName: "sparkles",
        telemetry: [
          { label: { vi: "BỘ SƠ ĐỒ", en: "BLUEPRINTS" }, value: "6 Sơ Đồ Chuẩn", status: "good" },
          { label: { vi: "API SEQUENCE", en: "API FLOW" }, value: "REST / Headers", status: "good" },
          { label: { vi: "CSDL", en: "DATA MODEL" }, value: "Postgres 3NF", status: "good" },
          { label: { vi: "ĐẶC TẢ USE CASE", en: "USE CASE" }, value: "Fully Dressed", status: "good" },
        ],
        steps: [
          {
            stepTag: { vi: "MÔ HÌNH HÓA", en: "MODELING STUDIO" },
            title: {
              vi: "Hiện Thực Hóa Nghiệp Vụ Qua Bản Vẽ Kỹ Thuật Senior",
              en: "Architectural Blueprinting: From Concept to Production",
            },
            lead: {
              vi: "Sử dụng ngôn ngữ hình ảnh chuẩn quốc tế (UML 2.5, BPMN 2.0, DDD) để loại bỏ hoàn toàn mơ hồ.",
              en: "Leveraging international visual standards (UML 2.5, BPMN 2.0, DDD) eliminates all ambiguity.",
            },
            body: {
              vi: "Bao gồm đặc tả Use Case chi tiết, Sequence API có Idempotency Key, và mô hình CSDL 3NF.",
              en: "Features fully dressed use case specs, idempotent API sequence flows, and 3NF relational schemas.",
            },
          },
        ],

        children: [
          {
            id: "item-ba-diag-usecase",
            slug: "ba-diagrams-usecase",
            moduleCode: "02",
            category: { vi: "02. Chuyên Ngành Business Analyst", en: "02. Business Analyst Suite" },
            title: {
              vi: "2.4.1 Use Case Diagram & Đặc Tả",
              en: "2.4.1 Use Case Diagram & Specs",
            },
            subtitle: {
              vi: "Đặc tả Use Case chi tiết: Main Success Scenario, Extension Paths, Pre/Post-conditions và Gherkin.",
              en: "Fully dressed use case specs: Main Success Scenario, Extension Paths, Pre/Post-conditions.",
            },
            time: "5m",
            level: { vi: "Đặc tả chi tiết", en: "Fully Dressed" },
            iconName: "file-text",
            telemetry: [
              { label: { vi: "MẪU ĐẶC TẢ", en: "TEMPLATE" }, value: "Cockburn Fully Dressed", status: "good" },
              { label: { vi: "NGOẠI LỆ", en: "EXTENSIONS" }, value: "Air-tight Paths", status: "good" },
            ],
            steps: [
              {
                stepTag: { vi: "BƯỚC 1: COCKBURN FULLY DRESSED", en: "STEP 1: COCKBURN SPEC" },
                title: { vi: "Phương Pháp Luận Alistair Cockburn (Fully Dressed Use Case)", en: "Alistair Cockburn Methodology: Fully Dressed Specification" },
                lead: { vi: "Đặc tả chi tiết Kịch bản Chính (MSS), Nhánh Ngoại Lệ (Extensions) và Điều kiện Tiên Quyết.", en: "Formalizing Main Success Scenarios (MSS), Extension Branches, and Pre/Post-conditions." },
                body: { vi: "• Tiêu chuẩn Cockburn: Use Case bắt buộc đầy đủ Mục tiêu, Tác nhân, Tiền/Hậu điều kiện.\n• Luồng chính MSS: Đánh số thứ tự 1.0 -> 7.0 chi tiết các tương tác giữa Actor và Hệ thống.\n• Nhánh ngoại lệ (Extensions): Bao quát toàn bộ trường hợp biên (Edge Cases: lỗi mạng, sai OTP).", en: "• Cockburn Standard: Use Case mandates Goal, Scope, Actors, Pre/Post-conditions.\n• Main Success Scenario: Numbered sequence (1.0 -> 7.0) detailing Actor-System interactions.\n• Extensions: Exhaustive edge case handling (3a timeout, 4a invalid OTP, 5a payment decline)." },
                calloutTitle: { vi: "CHUẨN COCKBURN", en: "COCKBURN STANDARD" },
                calloutText: { vi: "Giúp lập trình viên và kiểm thử viên (QA) nhìn thấy toàn bộ trường hợp biên (Edge Cases) ngay từ đầu.", en: "Enables developers and QA engineers to surface all boundary edge cases prior to implementation." },
              },
            ],
          },
          {
            id: "item-ba-diag-activity",
            slug: "ba-diagrams-activity",
            moduleCode: "02",
            category: { vi: "02. Chuyên Ngành Business Analyst", en: "02. Business Analyst Suite" },
            title: {
              vi: "2.4.2 Activity Diagram Swimlanes",
              en: "2.4.2 Activity Diagram Swimlanes",
            },
            subtitle: {
              vi: "Phân làn trách nhiệm (Swimlanes): Khách hàng, Shipper bưu cục, Bưu cục đích và Kế toán COD.",
              en: "Multi-lane swimlanes: Customer, Shipper Hub, Destination Hub, and COD Finance.",
            },
            time: "5m",
            level: { vi: "Quy trình", en: "Swimlanes" },
            iconName: "workflow",
            telemetry: [
              { label: { vi: "CHUẨN", en: "STANDARD" }, value: "UML 2.5 Activity", status: "good" },
              { label: { vi: "SỐ LÀN", en: "SWIMLANES" }, value: "4 Làn nghiệp vụ", status: "good" },
            ],
            steps: [
              {
                stepTag: { vi: "BƯỚC 1: LÀN PHÂN TRÁCH NHIỆM", en: "STEP 1: SWIMLANE PARTITIONS" },
                title: { vi: "Lý Thuyết Phân Làn Trách Nhiệm (Swimlanes) & Token Flow UML 2.5", en: "UML 2.5 Activity Swimlane Partitions & Token Flow Dynamics" },
                lead: { vi: "Phân định ranh giới trách nhiệm giữa 4 tác nhân: Khách Hàng, Shipper, Hub Tổng và Kế Toán COD.", en: "Delineating clear cross-functional ownership across Customer, Courier, Hub, and Finance." },
                body: { vi: "• Phân 4 làn nghiệp vụ: Khách Hàng, Bưu Tá Shipper, Hub Điều Vận và Kế Toán COD.\n• Luồng kiểm soát: Token di chuyển qua cổng rẽ nhánh Decision và đồng bộ Fork/Join.\n• Handoff rõ ràng: Phân định cụ thể trách nhiệm từng phòng ban, loại bỏ đùn đẩy công việc.", en: "• 4 Swimlanes: Customer, Courier, Sortation Hub, and COD Finance departments.\n• Token Control: Flows traverse Decision diamonds and concurrent Fork/Join bars.\n• Clear Handoffs: Unambiguous ownership handoffs eliminate cross-departmental friction." },
                calloutTitle: { vi: "ĐỒNG BỘ CONCURRENCY", en: "FORK / JOIN SYNCHRONIZATION" },
                calloutText: { vi: "Cổng Join Node đảm bảo cả bưu phẩm vật lý và giao dịch tiền mặt đều hoàn tất mới đóng đơn hàng.", en: "Join nodes guarantee physical cargo delivery and COD financial clearing both finish before completion." },
              },
            ],
          },
          {
            id: "item-ba-diag-sequence",
            slug: "ba-diagrams-sequence",
            moduleCode: "02",
            category: { vi: "02. Chuyên Ngành Business Analyst", en: "02. Business Analyst Suite" },
            title: {
              vi: "2.4.3 Sequence Diagram Chuẩn REST",
              en: "2.4.3 Sequence Diagram REST API",
            },
            subtitle: {
              vi: "Trình tự bắt tay kỹ thuật: Client Ingestion -> Gateway (Idempotency) -> Redis Lock -> PostgreSQL 3NF.",
              en: "Technical handshake: Client Ingestion -> Gateway (Idempotency) -> Redis Lock -> PostgreSQL 3NF.",
            },
            time: "6m",
            level: { vi: "Kỹ thuật API", en: "REST Sequence" },
            iconName: "git-pull-request",
            telemetry: [
              { label: { vi: "CHUẨN SEQUENCE", en: "SPEC" }, value: "UML 2.5 / REST", status: "good" },
              { label: { vi: "IDEMPOTENCY", en: "LOCK" }, value: "X-Idempotency-Key", status: "good" },
            ],
            steps: [
              {
                stepTag: { vi: "BƯỚC 1: BẮT TAY KỸ THUẬT", en: "STEP 1: TECHNICAL PROTOCOL" },
                title: { vi: "Trình Tự Bắt Tay Đồng Bộ & Bất Đồng Bộ Chuẩn REST API", en: "Synchronous vs Asynchronous Protocol Handshake & Idempotency Header" },
                lead: { vi: "Mô hình hóa tương tác giữa Client -> Fastify Gateway -> Redis Cache -> PostgreSQL 3NF.", en: "Modeling lifelines across Client, Fastify Gateway, Redis Cache, and PostgreSQL Primary." },
                body: { vi: "• Vòng đời Lifeline: Mô hình hóa tương tác Client -> API Gateway -> Redis -> PostgreSQL.\n• Chặn trùng tại Gateway: Header `X-Idempotency-Key` trả ngay cache nếu trùng request.\n• Khung tương tác UML: Sử dụng `alt` phân nhánh logic và `opt` cho luồng tùy chọn.", en: "• Sequence Lifelines: Visualizes Client -> API Gateway -> Redis Cache -> PostgreSQL Primary.\n• Gateway Interception: `X-Idempotency-Key` returns instant cached response on duplicate calls.\n• UML Frames: Employs standard `alt` fragments for conditional paths and `opt` for optional steps." },
                calloutTitle: { vi: "CHUẨN UML 2.5", en: "UML 2.5 INTERACTION" },
                calloutText: { vi: "Sử dụng các khung tương tác (Interaction Frames): `alt` cho rẽ nhánh và `opt` cho tùy chọn.", en: "Leverages standard interaction fragments: `alt` for branching logic and `opt` for optional flows." },
              },
            ],
          },
          {
            id: "item-ba-diag-ddd",
            slug: "ba-diagrams-ddd",
            moduleCode: "02",
            category: { vi: "02. Chuyên Ngành Business Analyst", en: "02. Business Analyst Suite" },
            title: {
              vi: "2.4.4 Domain-Driven Design (DDD)",
              en: "2.4.4 Domain-Driven Design (DDD)",
            },
            subtitle: {
              vi: "Phân rã 4 Bounded Contexts độc lập: Dispatch Context, Order Lifecycle, Hub Sorting và Billing Ledger.",
              en: "Deconstructing 4 Bounded Contexts: Dispatch, Order Lifecycle, Hub Sorting, and Billing Ledger.",
            },
            time: "6m",
            level: { vi: "Kiến trúc miền", en: "DDD Context" },
            iconName: "layers",
            telemetry: [
              { label: { vi: "BOUNDED CONTEXTS", en: "CONTEXTS" }, value: "4 Miền độc lập", status: "good" },
              { label: { vi: "GIAO TIẾP", en: "MESSAGING" }, value: "Domain Events", status: "good" },
            ],
            steps: [
              {
                stepTag: { vi: "BƯỚC 1: BOUNDED CONTEXTS", en: "STEP 1: BOUNDED CONTEXTS" },
                title: { vi: "Phân Rã 4 Bounded Contexts Độc Lập Theo Eric Evans (DDD)", en: "Deconstructing 4 Isolated Bounded Contexts (Eric Evans DDD)" },
                lead: { vi: "Xác lập Ngôn Ngữ Chung (Ubiquitous Language) và Context Map giữa các miền nghiệp vụ.", en: "Establishing Ubiquitous Language and formal Context Maps across logistics domain models." },
                body: { vi: "• 4 Miền độc lập: Dispatch Context (Điều vận), Order (Đơn hàng), Hub Sorting, Billing (Kế toán).\n• Ngôn ngữ chung: Thực thể Bưu Kiện mang thuộc tính riêng biệt trong từng miền nghiệp vụ.\n• Giao tiếp phi tập trung: Các Bounded Context kết nối qua Domain Events bất đồng bộ.", en: "• 4 Bounded Contexts: Dispatch, Order Lifecycle, Hub Sortation, and Billing Ledger.\n• Ubiquitous Language: Parcel entity maintains distinct attributes per bounded context.\n• Decoupled Events: Contexts communicate asynchronously via decoupled Domain Events." },
                calloutTitle: { vi: "NGÔN NGỮ CHUNG UBIQUITOUS", en: "UBIQUITOUS LANGUAGE" },
                calloutText: { vi: "Tránh nhồi nhét mọi thuộc tính vào một Entity khổng lồ (God Object) gây tắc nghẽn phát triển.", en: "Prevents bloated God Objects by enforcing strict boundary context encapsulations." },
              },
            ],
          },
          {
            id: "item-ba-diag-erd",
            slug: "ba-diagrams-erd",
            moduleCode: "02",
            category: { vi: "02. Chuyên Ngành Business Analyst", en: "02. Business Analyst Suite" },
            title: {
              vi: "2.4.5 Thiết Kế CSDL Quan Hệ 3NF",
              en: "2.4.5 3NF Relational Schema",
            },
            subtitle: {
              vi: "Lược đồ CSDL PostgreSQL chuẩn hóa 3NF: orders, order_items, drivers, shipments, cod_transactions.",
              en: "PostgreSQL 3NF normalized schema: orders, order_items, drivers, shipments, cod_transactions.",
            },
            time: "7m",
            level: { vi: "CSDL 3NF", en: "Relational DB" },
            iconName: "database",
            telemetry: [
              { label: { vi: "CHUẨN HÓA", en: "NORMAL FORM" }, value: "3NF Chuẩn mực", status: "good" },
              { label: { vi: "RÀNG BUỘC", en: "CONSTRAINTS" }, value: "Foreign Keys", status: "good" },
            ],
            steps: [
              {
                stepTag: { vi: "BƯỚC 1: CHUẨN HÓA 3NF CODD", en: "STEP 1: CODD 3NF NORMALIZATION" },
                title: { vi: "Lược Đồ Cơ Sở Dữ Liệu Quan Hệ Chuẩn Hóa Codd 3NF", en: "PostgreSQL 3NF Relational Schema & Referential Constraints" },
                lead: { vi: "Triệt tiêu phụ thuộc bắc cầu, thiết lập khóa ngoại và chỉ mục B-Tree tối ưu truy vấn.", en: "Eliminating transitive dependencies, configuring foreign keys and B-Tree indexes." },
                body: { vi: "• Chuẩn hóa 3NF: Tách bảng orders, order_items, shipments, drivers và cod_transactions.\n• Khử dị thường: Triệt tiêu hoàn toàn lỗi thêm/sửa/xóa và phụ thuộc dữ liệu bắc cầu.\n• Tối ưu chỉ mục: Đánh index B-Tree (status, hub_id) tăng tốc truy vấn bưu cục lên 18 lần.", en: "• 3NF Architecture: Deconstructs orders, order_items, shipments, drivers, and cod_transactions.\n• Anomaly-Free: Eliminates transitive dependencies and insertion/deletion anomalies.\n• B-Tree Indexing: Composite index on (status, hub_id) yields 18x acceleration in depot lookups." },
                calloutTitle: { vi: "HIỆU NĂNG CHỈ MỤC B-TREE", en: "B-TREE INDEXING" },
                calloutText: { vi: "Đánh chỉ mục composite index (status, hub_id) tăng tốc độ truy vấn bưu cục lên gấp 18 lần.", en: "Composite B-tree indexing on (status, hub_id) yields an 18x acceleration in depot dashboard lookups." },
              },
            ],
          },
        ],
      },
{
        id: "item-ba-skills",
        slug: "ky-nang-ba",
        moduleCode: "02",
        category: { vi: "02. Chuyên Ngành Business Analyst", en: "02. Business Analyst Suite" },
        title: {
          vi: "Phân Tích Nghiệp Vụ (Tổng Quan)",
          en: "Business Analysis (Overview)",
        },
        subtitle: {
          vi: "Khảo sát yêu cầu, soạn thảo PRD/SRS, thiết kế luồng BPMN 2.0, bảo vệ Scope Freeze và UAT.",
          en: "Requirements elicitation, PRD/SRS authoring, BPMN 2.0 modeling, Scope Freeze, and UAT sign-off.",
        },
        time: "6m",
        level: { vi: "Chuyên môn", en: "Professional" },
        iconName: "clipboard-check",
        telemetry: [
          { label: { vi: "CHUẨN QUY TRÌNH", en: "STANDARD" }, value: "BPMN 2.0 / UML", status: "good" },
          { label: { vi: "ĐẶC TẢ YÊU CẦU", en: "SPEC FORMAT" }, value: "PRD / SRS / INVEST", status: "good" },
          { label: { vi: "QUẢN TRỊ PHẠM VI", en: "SCOPE CONTROL" }, value: "Scope Freeze", status: "good" },
          { label: { vi: "NGHIỆM THU", en: "ACCEPTANCE" }, value: "UAT Sign-off", status: "good" },
        ],
        steps: [
          {
            stepTag: { vi: "NĂNG LỰC BA", en: "BA SKILLS" },
            title: {
              vi: "Bộ Kỹ Năng Phân Tích Nghiệp Vụ Theo Chuẩn BABOK v3",
              en: "BABOK v3 Business Analysis Competency Framework",
            },
            lead: {
              vi: "Thành thạo chuyển hóa bài toán nghiệp vụ phức tạp của khách hàng thành tài liệu kỹ thuật rõ ràng, không gây hiểu lầm cho lập trình viên.",
              en: "Translates intricate operational business needs into unambiguous, executable technical specifications.",
            },
            body: {
              vi: "Sử dụng Jira, Confluence, Figma wireframing, và Camunda BPMN để đồng bộ thông tin giữa Business, Dev và Tester.",
              en: "Leverages Jira, Confluence, Figma wireframing, and Camunda BPMN to harmonize Business, Dev, and QA.",
            },
          },
        ],
      }
    ],
  },

  // PILLAR 03: QUẢN TRỊ DỰ ÁN & DÒNG TIỀN
  {
    id: "folder-pm",
    code: "03",
    title: {
      vi: "03. Quản Trị Dự Án & Dòng Tiền",
      en: "03. Project Management & Cash Flow",
    },
    color: "#7c3aed",
    bgLight: "#f5f3ff",
    borderLight: "#ddd6fe",
    items: [
      {
        id: "item-pm-process",
        slug: "quy-trinh-pm-thu-tien",
        moduleCode: "03",
        category: { vi: "03. Quản Trị Dự Án & Dòng Tiền", en: "03. Project Management & Cash Flow" },
        title: {
          vi: "Quy Trình PM 5 Cột Mốc Thu Tiền",
          en: "Cash Flow Billing Milestones",
        },
        subtitle: {
          vi: "Mô hình hóa chiến lược nghiệm thu và thu tiền 5 đợt ($30k / 750M VNĐ) gắn chặt với DoD và Scope Freeze.",
          en: "5-stage cash collection strategy ($30k / 750M VND) tightly coupled with Definition of Done & Scope Freeze.",
        },
        time: "10m",
        level: { vi: "Thực chiến PM", en: "Hands-on PM" },
        iconName: "dollar-sign",
        telemetry: [
          { label: { vi: "CỘT MỐC THU TIỀN", en: "BILLING MILESTONES" }, value: "5 Đợt (100%)", status: "good" },
          { label: { vi: "QUY MÔ DỰ ÁN", en: "CONTRACT VALUE" }, value: "$30,000 / 750M", status: "good" },
          { label: { vi: "ĐẶT CỌC KICKOFF", en: "KICKOFF DEPOSIT" }, value: "25% ($7,500)", status: "good" },
          { label: { vi: "SCOPE FREEZE GATE", en: "SCOPE GATE" }, value: "Thu 25% Đợt 2", status: "good" },
        ],
        steps: [
          {
            stepTag: { vi: "THU TIỀN GIAI ĐOẠN", en: "BILLING PHASES" },
            title: {
              vi: "Tối Đa Hóa Tốc Độ Thu Tiền Và Giảm Thiểu Rủi Ro Công Nợ",
              en: "Accelerating Cash Inflow While Eliminating Delivery Liability",
            },
            lead: {
              vi: "Người PM xuất sắc phải nắm rõ điều kiện nghiệm thu của từng đợt để vừa đẩy nhanh tiến độ dev vừa thu tiền đúng cam kết.",
              en: "High-performing PMs align technical Definition of Done with contract billing conditions.",
            },
            body: {
              vi: "Chia nhỏ thành 5 cột mốc: 25% Ký HĐ & Kickoff, 25% Scope Freeze & Wireframe, 25% Alpha/Beta UAT, 20% Go-Live, và 5% Quyết toán bảo hành.",
              en: "Deconstructs delivery into 5 billing gates: 25% Deposit, 25% Scope Freeze, 25% UAT, 20% Go-Live, and 5% Warranty.",
            },
          },
        ],
      },
{
        id: "item-cpm",
        slug: "duong-gang-cpm",
        moduleCode: "03",
        category: { vi: "03. Quản Trị Dự Án & Dòng Tiền", en: "03. Project Management & Cash Flow" },
        title: {
          vi: "Đường Găng CPM & Tiến Độ",
          en: "Critical Path Method (CPM)",
        },
        subtitle: {
          vi: "Thuật toán AOA/CPM tính toán thời điểm bắt đầu sớm (ES), trễ (LS) và dự trữ thời gian (Float).",
          en: "Activity-on-Arrow CPM algorithm computing ES, LS, EF, LF and project float tolerance.",
        },
        time: "12m",
        level: { vi: "Toán học", en: "Mathematical" },
        iconName: "git-fork",
        telemetry: [
          { label: { vi: "TỔNG THỜI GIAN", en: "TOTAL DURATION" }, value: "32 Ngày", status: "good" },
          { label: { vi: "ĐƯỜNG GĂNG", en: "CRITICAL PATH" }, value: "A-C-F-H", status: "accent" },
          { label: { vi: "ĐỘ DỰ TRỮ", en: "TOTAL FLOAT" }, value: "0 Ngày (Găng)", status: "warn" },
          { label: { vi: "GIẢM TIẾN ĐỘ", en: "CRASHING" }, value: "Tối ưu chi phí", status: "good" },
        ],
        steps: [
          {
            stepTag: { vi: "ĐƯỜNG GĂNG", en: "CRITICAL PATH" },
            title: {
              vi: "Xác Định Chuỗi Công Việc Quyết Định Toàn Bộ Tiến Độ",
              en: "Identifying the Deterministic Bottleneck Activity Chain",
            },
            lead: {
              vi: "Bất kỳ công việc nào trên đường găng bị chậm 1 ngày sẽ đẩy lùi ngày bàn giao dự án đúng 1 ngày.",
              en: "Any one-day slippage on the critical path directly pushes back the final client delivery milestone.",
            },
            body: {
              vi: "Mô hình mạng AOA tính toán Forward Pass (ES, EF) và Backward Pass (LS, LF) để tìm ra các công việc có Total Float = 0.",
              en: "AOA network modeling computes Forward and Backward passes to isolate zero-float tasks requiring strict oversight.",
            },
          },
        ],
      },
{
        id: "item-gantt",
        slug: "tien-do-gantt",
        moduleCode: "03",
        category: { vi: "03. Quản Trị Dự Án & Dòng Tiền", en: "03. Project Management & Cash Flow" },
        title: {
          vi: "Tiến Độ Release Gantt",
          en: "Release Gantt Schedule",
        },
        subtitle: {
          vi: "Lộ trình 6 giai đoạn bàn giao phần mềm chuẩn ISO/IEC/IEEE 12207 từ Khảo sát đến UAT.",
          en: "6-phase ISO/IEC/IEEE 12207 software delivery roadmap from Elicitation to Final UAT.",
        },
        time: "8m",
        level: { vi: "Thực hành", en: "Practical" },
        iconName: "calendar-range",
        telemetry: [
          { label: { vi: "GIAI ĐOẠN", en: "PHASES" }, value: "6 Giai đoạn", status: "good" },
          { label: { vi: "DEADLINE UAT", en: "UAT DEADLINE" }, value: "Đúng hạn 100%", status: "good" },
          { label: { vi: "CỘT MỐC", en: "MILESTONES" }, value: "4 Cột mốc", status: "good" },
          { label: { vi: "QUY CHUẨN", en: "STANDARD" }, value: "IEEE 12207", status: "good" },
        ],
        steps: [
          {
            stepTag: { vi: "RELEASE", en: "RELEASE" },
            title: {
              vi: "Quản Trị Tiến Độ & Cột Mốc Bàn Giao Nghiệm Thu",
              en: "Milestone Governance & Acceptance Release Gates",
            },
            lead: {
              vi: "Phân chia công việc theo cấu trúc WBS cấp 3, gán trách nhiệm RACI và theo dõi tiến độ theo ngày.",
              en: "Deconstructs scope into Level-3 WBS work packages with RACI accountability matrices.",
            },
            body: {
              vi: "Biểu đồ Gantt trực quan giúp các bên liên quan (Stakeholders) nắm bắt ngay tình trạng các gói thầu và điểm nghẽn tiềm ẩn.",
              en: "Interactive Gantt charts empower cross-functional stakeholders to spot delivery dependencies instantly.",
            },
          },
        ],
      },
{
        id: "item-evm",
        slug: "chi-so-evm",
        moduleCode: "03",
        category: { vi: "03. Quản Trị Dự Án & Dòng Tiền", en: "03. Project Management & Cash Flow" },
        title: {
          vi: "Kiểm Soát Chi Phí EVM",
          en: "EVM Cost Governance",
        },
        subtitle: {
          vi: "Phương pháp Đo lường Giá trị Thu được (Earned Value Management) đánh giá CPI & SPI.",
          en: "Earned Value Management governance evaluating Cost (CPI) & Schedule (SPI) performance.",
        },
        time: "10m",
        level: { vi: "Tài chính", en: "Financial" },
        iconName: "trending-up",
        telemetry: [
          { label: { vi: "GIÁ TRỊ THU ĐƯỢC", en: "EARNED VALUE" }, value: "EV = $42,500", status: "good" },
          { label: { vi: "CHỈ SỐ CHI PHÍ", en: "COST INDEX" }, value: "CPI = 1.08 (Tốt)", status: "good" },
          { label: { vi: "CHỈ SỐ TIẾN ĐỘ", en: "SCHEDULE INDEX" }, value: "SPI = 1.02 (Vượt)", status: "good" },
          { label: { vi: "DỰ BÁO EAC", en: "ESTIMATE AT COMP" }, value: "Tiết kiệm 7.4%", status: "good" },
        ],
        steps: [
          {
            stepTag: { vi: "CHỈ SỐ EVM", en: "EVM METRICS" },
            title: {
              vi: "Đánh Giá Sức Khỏe Dự Án Bằng Chỉ Số Toán Học",
              en: "Mathematical Project Health Assessment via CPI & SPI",
            },
            lead: {
              vi: "CPI > 1.0 và SPI > 1.0 khẳng định dự án đang hoàn thành nhiều khối lượng công việc hơn kế hoạch với chi phí thấp hơn ngân sách.",
              en: "CPI > 1.0 and SPI > 1.0 verify the initiative is delivering greater value ahead of schedule under budget.",
            },
            body: {
              vi: "Áp dụng công thức dự báo EAC = BAC / CPI giúp Giám đốc dự án chủ động kiểm soát rủi ro tài chính trước khi nghiệm thu.",
              en: "Forecasting final costs via EAC = BAC / CPI equips executives to mitigate financial risks pre-delivery.",
            },
          },
        ],
      }
    ],
  },

  // PILLAR 04: KỸ THUẬT DEV & NỀN TẢNG CODE
  {
    id: "folder-dev",
    code: "04",
    title: {
      vi: "04. Kỹ Thuật Dev & Nền Tảng Code",
      en: "04. Engineering Repository",
    },
    color: "#059669",
    bgLight: "#f0fdf4",
    borderLight: "#bbf7d0",
    items: [
      {
        id: "item-dev-git",
        slug: "git-flow-conventional",
        moduleCode: "04",
        category: { vi: "04. Kỹ Thuật Dev & Nền Tảng Code", en: "04. Engineering Repository" },
        title: {
          vi: "Git Flow & Conventional Commits",
          en: "Git Flow & Conventional Commits",
        },
        subtitle: {
          vi: "Mô hình phân nhánh Enterprise Git-Flow, chuẩn Conventional Commits 1.0 và Checklist Code Review 5 điểm.",
          en: "Enterprise Git-Flow branching, Conventional Commits 1.0 specs, and 5-point Code Review gate.",
        },
        time: "10m",
        level: { vi: "Chuẩn Dev", en: "Dev Standard" },
        iconName: "git-branch",
        telemetry: [
          { label: { vi: "QUY CHUẨN", en: "STANDARD" }, value: "Conventional 1.0", status: "good" },
          { label: { vi: "NHÁNH CHÍNH", en: "MAIN BRANCH" }, value: "Protected / PR", status: "good" },
          { label: { vi: "CODE REVIEW", en: "CODE REVIEW" }, value: "Checklist 5 Điểm", status: "good" },
          { label: { vi: "ROLLBACK", en: "ROLLBACK" }, value: "Dưới 2 Phút", status: "good" },
        ],
        steps: [
          {
            stepTag: { vi: "QUY TRÌNH DEV", en: "GIT FLOW" },
            title: {
              vi: "Chuẩn Hóa Quy Trình Lập Trình Nhóm & Lịch Sử Commit",
              en: "Standardizing Team Git Workflow & Changelog Traceability",
            },
            lead: {
              vi: "Tuyệt đối không commit thẳng lên main. Mọi thay đổi đều thông qua feature branch và Pull Request được kiểm tra kỹ lưỡng.",
              en: "Zero direct commits on main. All features traverse isolated branches and verified Pull Requests.",
            },
            body: {
              vi: "Phân loại rõ ràng feat, fix, refactor, docs, test, perf, chore giúp tự động hóa Semantic Release và tra cứu lỗi tức thì.",
              en: "Structured prefixes (feat, fix, refactor) power automated changelogs and rapid debugging via git bisect.",
            },
          },
        ],
      },
      {
        id: "item-dev-security",
        slug: "web-security-data",
        moduleCode: "04",
        category: { vi: "04. Kỹ Thuật Dev & Nền Tảng Code", en: "04. Engineering Repository" },
        title: {
          vi: "An Toàn & Bảo Mật Web Cơ Bản",
          en: "Web & Data Security Essentials",
        },
        subtitle: {
          vi: "Bảo mật đa lớp: Tên miền Anycast, TLS 1.3, mã hóa Bcrypt salt=12, xác thực JWT HttpOnly và phòng thủ OWASP.",
          en: "Defense-in-depth: Anycast DNS, TLS 1.3, Bcrypt salt=12 hashing, HttpOnly JWT, and OWASP mitigation.",
        },
        time: "12m",
        level: { vi: "An Toàn", en: "Security" },
        iconName: "shield-check",
        telemetry: [
          { label: { vi: "TIÊU CHUẨN", en: "STANDARD" }, value: "OWASP Top 10", status: "good" },
          { label: { vi: "GIAO THỨC", en: "TRANSPORT" }, value: "TLS 1.3 / HSTS", status: "good" },
          { label: { vi: "MÃ HÓA MẬT KHẨU", en: "HASHING" }, value: "Bcrypt (salt=12)", status: "good" },
          { label: { vi: "TOKEN XÁC THỰC", en: "AUTH" }, value: "HttpOnly Cookie", status: "good" },
        ],
        steps: [
          {
            stepTag: { vi: "BẢO MẬT ĐA LỚP", en: "DEFENSE IN DEPTH" },
            title: {
              vi: "Bảo Vệ Hệ Thống Từ Tầng Mạng Đến Cơ Sở Dữ Liệu",
              en: "Securing Software from Edge Network to Persistent Storage",
            },
            lead: {
              vi: "Bảo mật phải được thiết kế ngay từ đầu (Security by Design), không bao giờ lưu trữ mật khẩu thuần hay để lộ secret key.",
              en: "Security by Design ensures zero plaintext passwords and strict environment secret hygiene.",
            },
            body: {
              vi: "Áp dụng PDO Prepared Statements chặn đứng SQL Injection, mã hóa đường truyền HTTPS TLS 1.3 và cấu hình HSTS bảo vệ người dùng.",
              en: "Enforces PDO Prepared Statements against SQLi, TLS 1.3 in-transit encryption, and strict HSTS headers.",
            },
          },
        ],
      },
      {
        id: "item-dev-php",
        slug: "php-mvc-iuh",
        moduleCode: "04",
        category: { vi: "04. Kỹ Thuật Dev & Nền Tảng Code", en: "04. Engineering Repository" },
        title: {
          vi: "Nền Tảng PHP & Đồ Án IUH",
          en: "PHP MVC & IUH Capstone",
        },
        subtitle: {
          vi: "Nền tảng đào tạo Kỹ sư HTTT tại IUH (GPA 3.26): Kiến trúc MVC, ACID Database Transactions và xử lý N+1 Query.",
          en: "Information Systems Engineering foundation at IUH (GPA 3.26): MVC architecture, ACID DB Transactions, N+1 Query fix.",
        },
        time: "10m",
        level: { vi: "Nền tảng ĐH", en: "Academic" },
        iconName: "server",
        telemetry: [
          { label: { vi: "ĐÀO TẠO", en: "CURRICULUM" }, value: "IUH (GPA 3.26)", status: "good" },
          { label: { vi: "KIẾN TRÚC", en: "ARCHITECTURE" }, value: "MVC Laravel", status: "good" },
          { label: { vi: "GIAO DỊCH DB", en: "TRANSACTION" }, value: "ACID Compliant", status: "good" },
          { label: { vi: "EAGER LOADING", en: "ORM EFFICIENCY" }, value: "Fix N+1 Query", status: "good" },
        ],
        steps: [
          {
            stepTag: { vi: "NỀN TẢNG ĐH", en: "ACADEMIC ROOTS" },
            title: {
              vi: "Nền Tảng Đào Tạo Kỹ Sư Hệ Thống Thông Tin Chính Quy",
              en: "Formal Information Systems Engineering Pedagogy",
            },
            lead: {
              vi: "Kỹ năng lập trình PHP & MySQL bài bản giúp tôi hiểu sâu bản chất vận hành của máy chủ web và các tầng ứng dụng.",
              en: "Rigorous PHP & MySQL training grants deep mechanical sympathy for web servers and application layers.",
            },
            body: {
              vi: "Đúc kết kinh nghiệm xử lý giao dịch tiền tệ qua DB::beginTransaction() và tối ưu truy vấn bằng Eloquent Eager Loading.",
              en: "Mastering transactional guarantees via DB::beginTransaction() and eliminating N+1 query overhead.",
            },
          },
        ],
      },
      {
        id: "item-dev-modern",
        slug: "modern-frameworks",
        moduleCode: "04",
        category: { vi: "04. Kỹ Thuật Dev & Nền Tảng Code", en: "04. Engineering Repository" },
        title: {
          vi: "Công Nghệ Hiện Đại 2.5D",
          en: "Modern Stack 2.5D (React / Nest)",
        },
        subtitle: {
          vi: "Mô hình hóa kiến trúc 2.5D của React SPA, React Native JSI, Node.js Event Loop và NestJS Dependency Injection.",
          en: "2.5D architectural modeling: React SPA, React Native JSI, Node.js Event Loop, and NestJS Dependency Injection.",
        },
        time: "15m",
        level: { vi: "Full-Stack", en: "Full-Stack" },
        iconName: "cpu",
        telemetry: [
          { label: { vi: "FRONTEND", en: "FRONTEND" }, value: "React / Vite / Zustand", status: "good" },
          { label: { vi: "MOBILE", en: "MOBILE" }, value: "React Native JSI", status: "good" },
          { label: { vi: "BACKEND", en: "BACKEND" }, value: "NestJS / Node / TS", status: "good" },
          { label: { vi: "DATA STREAM", en: "DATA PIPELINE" }, value: "Node Streams", status: "good" },
        ],
        steps: [
          {
            stepTag: { vi: "CÔNG NGHỆ HIỆN ĐẠI", en: "MODERN STACK" },
            title: {
              vi: "Làm Chủ Hệ Sinh Thái Full-Stack Hiện Đại",
              en: "Mastering Modern Production Full-Stack Ecosystems",
            },
            lead: {
              vi: "Chuyển giao linh hoạt giữa React SPA trên trình duyệt, React Native trên thiết bị di động và NestJS Microservices.",
              en: "Fluently navigating between React browser SPAs, React Native mobile apps, and NestJS microservices.",
            },
            body: {
              vi: "Cấu trúc thư mục Feature-based, quản lý luồng dữ liệu một chiều và áp dụng Dependency Injection chuẩn doanh nghiệp.",
              en: "Enforces Feature-based directory structures, unidirectional data flows, and enterprise Dependency Injection.",
            },
          },
        ],

        children: [
          {
            id: "item-dev-react",
            slug: "modern-react",
            moduleCode: "04",
            category: { vi: "04. Kỹ Thuật Dev & Nền Tảng Code", en: "04. Engineering Repository" },
            title: {
              vi: "4.4.1 React (Virtual DOM & Architecture)",
              en: "4.4.1 React (Virtual DOM & Architecture)",
            },
            subtitle: {
              vi: "Thuật toán Diffing Reconciliation, Hooks tối ưu (useMemo, useCallback) và Feature-based folder structure.",
              en: "Diffing reconciliation, performance hooks (useMemo, useCallback), and feature-based directory structure.",
            },
            time: "6m",
            level: { vi: "Frontend SPA", en: "React SPA" },
            iconName: "code-2",
            telemetry: [
              { label: { vi: "ENGINE", en: "RENDER" }, value: "Virtual DOM / Fiber", status: "good" },
              { label: { vi: "STATE", en: "STORE" }, value: "Zustand / Redux", status: "good" },
            ],
            steps: [
              {
                stepTag: { vi: "BƯỚC 1: FIBER RECONCILIATION", en: "STEP 1: FIBER ENGINE" },
                title: { vi: "Cơ Chế Khớp Nối React Fiber & Thuật Toán Phân Tách Diffing", en: "React Fiber Architecture & Heuristic O(N) Diffing Reconciliation" },
                lead: { vi: "Hiểu sâu về chu kỳ Render / Commit và cây Virtual DOM tối ưu hóa DOM thật.", en: "Mastering Render and Commit phases alongside Virtual DOM reconciliation mechanics." },
                body: { vi: "• Thuật toán Diffing: React áp dụng Heuristic O(N) thay cho so sánh cây DOM O(N³).\n• Virtual DOM & Fiber: Chia nhỏ công việc thành các đơn vị có thể tạm dừng (Interruptible Work).\n• Key ổn định: Giữ định danh phần tử con ổn định, đảm bảo giao diện đạt 60 FPS mượt mà.", en: "• Diffing Heuristics: React leverages O(N) heuristic diffing instead of generic O(N³) algorithms.\n• Fiber Engine: Deconstructs rendering into interruptible, prioritizable units of work.\n• Key Stability: Preserves child element identity, guaranteeing 60 FPS UI responsiveness." },
                calloutTitle: { vi: "KHOA HỌC MÁY TÍNH", en: "COMPUTER SCIENCE COMPLEXITY" },
                calloutText: { vi: "Giảm độ phức tạp từ O(N³) xuống O(N) cho phép cập nhật 60 FPS mượt mà trên trình duyệt.", en: "Compresses complexity from O(N³) down to O(N), guaranteeing 60 FPS UI responsiveness." },
              },
            ],
          },
          {
            id: "item-dev-react-native",
            slug: "modern-react-native",
            moduleCode: "04",
            category: { vi: "04. Kỹ Thuật Dev & Nền Tảng Code", en: "04. Engineering Repository" },
            title: {
              vi: "4.4.2 React Native (JSI & Offline-First)",
              en: "4.4.2 React Native (JSI & Offline-First)",
            },
            subtitle: {
              vi: "New Architecture (JSI / TurboModules), GPS tracking chạy ngầm và SQLite offline-first cho app tài xế.",
              en: "New Architecture (JSI / TurboModules), background GPS tracking, and offline-first SQLite driver app.",
            },
            time: "6m",
            level: { vi: "Mobile App", en: "Cross-Platform" },
            iconName: "smartphone",
            telemetry: [
              { label: { vi: "KIẾN TRÚC", en: "BRIDGE" }, value: "JSI Synchronous", status: "good" },
              { label: { vi: "OFFLINE", en: "OFFLINE" }, value: "SQLite Sync", status: "good" },
            ],
            steps: [
              {
                stepTag: { vi: "BƯỚC 1: JSI ARCHITECTURE", en: "STEP 1: JSI PIPELINE" },
                title: { vi: "Kiến Trúc New Architecture (JSI) & Đồng Bộ Offline-First", en: "React Native New Architecture (JSI) & Offline-First Driver Persistence" },
                lead: { vi: "Thay thế Async Bridge cũ bằng JavaScript Interface (JSI) gọi C++ trực tiếp.", en: "Replacing legacy asynchronous bridges with synchronous C++ JavaScript Interface (JSI)." },
                body: { vi: "• New Architecture (JSI): Gọi trực tiếp phương thức C++ đồng bộ, loại bỏ Bridge tuần tự hóa JSON.\n• Triệt tiêu giật lag: Cuộn danh sách hàng nghìn đơn hàng mượt mà mà không bị nghẽn luồng.\n• Offline-First: Ứng dụng bưu tá lưu trữ vào SQLite cục bộ, đồng bộ tự động khi có mạng 4G.", en: "• JSI Architecture: Direct synchronous C++ calls eliminate legacy asynchronous JSON bridge taxes.\n• Zero Stutter: Seamless 60 FPS scrolling across virtualization lists with thousands of items.\n• Offline-First: Local SQLite caching enables couriers to scan and sign deliveries fully offline." },
                calloutTitle: { vi: "GIAO TIẾP ĐỒNG BỘ", en: "SYNCHRONOUS CALLS" },
                calloutText: { vi: "Loại bỏ hoàn toàn chi phí tuần tự hóa JSON (Serialization Overhead) giữa JS và Native.", en: "Eliminates all JSON serialization and deserialization tax between runtime boundaries." },
              },
            ],
          },
          {
            id: "item-dev-nodejs",
            slug: "modern-nodejs",
            moduleCode: "04",
            category: { vi: "04. Kỹ Thuật Dev & Nền Tảng Code", en: "04. Engineering Repository" },
            title: {
              vi: "4.4.3 Node.js (Event Loop & Streams)",
              en: "4.4.3 Node.js (Event Loop & Streams)",
            },
            subtitle: {
              vi: "6 pha Event Loop Libuv, Single-Thread Non-blocking và xử lý file đối soát COD lớn bằng Node Streams.",
              en: "6-phase Libuv Event Loop, single-thread non-blocking I/O, and streaming large COD reconciliations.",
            },
            time: "6m",
            level: { vi: "Runtime", en: "Node Runtime" },
            iconName: "server",
            telemetry: [
              { label: { vi: "EVENT LOOP", en: "I/O MODEL" }, value: "Libuv Non-blocking", status: "good" },
              { label: { vi: "STREAMING", en: "STREAMS" }, value: "Chunked < 50MB RAM", status: "good" },
            ],
            steps: [
              {
                stepTag: { vi: "BƯỚC 1: LIBUV EVENT LOOP", en: "STEP 1: EVENT LOOP" },
                title: { vi: "6 Pha Của Vòng Lặp Sự Kiện Libuv & Xử Lý Dòng Dữ Liệu Streams", en: "6 Phases of Libuv Event Loop & Memory-Efficient Node Streams" },
                lead: { vi: "Cơ chế Non-blocking I/O và đọc ghi file đối soát COD hàng triệu dòng mà không tràn RAM.", en: "Non-blocking I/O mechanics and processing million-line COD CSVs under strict 50MB RAM limits." },
                body: { vi: "• 6 Pha Libuv Event Loop: Timers, Pending, Idle/Prepare, Poll (I/O), Check và Close Callbacks.\n• Xử lý Stream: Đọc file đối soát 2GB theo từng chunk 64KB, giữ mức tiêu thụ RAM < 50MB.\n• Cơ chế Backpressure: Tự động điều tiết tốc độ đọc dữ liệu khi cổng ghi DB bị chậm.", en: "• 6-Phase Event Loop: Timers, Pending, Idle/Prepare, Poll, Check, and Close callbacks.\n• Node Streams: Pipes 2GB banking COD CSVs in 64KB chunks under a strict 50MB RAM ceiling.\n• Backpressure: Throttles upstream file ingestion automatically when database writes backlog." },
                calloutTitle: { vi: "TỐI ƯU BỘ NHỚ RAM", en: "MEMORY CONCURRENCY" },
                calloutText: { vi: "Áp dụng cơ chế Backpressure để làm chậm luồng đọc khi luồng ghi cơ sở dữ liệu bị nghẽn.", en: "Leverages stream Backpressure to throttle ingestion when downstream database writes lag." },
              },
            ],
          },
          {
            id: "item-dev-nestjs",
            slug: "modern-nestjs",
            moduleCode: "04",
            category: { vi: "04. Kỹ Thuật Dev & Nền Tảng Code", en: "04. Engineering Repository" },
            title: {
              vi: "4.4.4 NestJS (Enterprise Modularity & DI)",
              en: "4.4.4 NestJS (Enterprise Modularity & DI)",
            },
            subtitle: {
              vi: "Kiến trúc doanh nghiệp Modularity, Dependency Injection, Guards (RBAC), Interceptors và Swagger OpenAPI.",
              en: "Enterprise modularity, Dependency Injection, RBAC Guards, Interceptors, and OpenAPI DTO contracts.",
            },
            time: "7m",
            level: { vi: "Backend", en: "Enterprise API" },
            iconName: "layers",
            telemetry: [
              { label: { vi: "KIẾN TRÚC", en: "ARCHITECTURE" }, value: "Dependency Injection", status: "good" },
              { label: { vi: "SECURITY", en: "PIPELINE" }, value: "Guards + Pipes + DTO", status: "good" },
            ],
            steps: [
              {
                stepTag: { vi: "BƯỚC 1: ENTERPRISE DI & PIPELINES", en: "STEP 1: ENTERPRISE ARCHITECTURE" },
                title: { vi: "Kiến Trúc Module Hóa Doanh Nghiệp, Dependency Injection & Pipes", en: "Enterprise Modularity, Dependency Injection & Validation Pipeline" },
                lead: { vi: "Thiết kế hệ thống theo mô hình Inversion of Control (IoC) và bảo vệ dữ liệu bằng DTO.", en: "Architecting decoupled domain modules using Inversion of Control (IoC) and DTO contracts." },
                body: { vi: "• Dependency Injection: Áp dụng IoC Container tách rời Controllers, Services và Repositories.\n• ValidationPipe & DTO: Tự động kiểm duyệt dữ liệu đầu vào bằng class-validator trước khi xử lý.\n• Swagger OpenAPI: Tự động sinh tài liệu API 3.0 trực tiếp từ metadata của mã nguồn TypeScript.", en: "• Dependency Injection: IoC Container decouples Controllers, Services, and Repositories cleanly.\n• ValidationPipe & DTO: Runtime payload verification via class-validator prevents corrupted mutations.\n• Swagger OpenAPI: Automatic generation of OpenAPI 3.0 documentation straight from TypeScript DTOs." },
                calloutTitle: { vi: "CHUẨN HÓA OPENAPI", en: "OPENAPI SPECIFICATION" },
                calloutText: { vi: "Tự động sinh tài liệu Swagger OpenAPI 3.0 trực tiếp từ mã nguồn DTO của TypeScript.", en: "Generates synchronized Swagger OpenAPI 3.0 documentation straight from TypeScript DTO metadata." },
              },
            ],
          },
        ],
      },
{
        id: "item-tech-skills",
        slug: "ky-thuat-he-thong",
        moduleCode: "04",
        category: { vi: "04. Kỹ Thuật Dev & Nền Tảng Code", en: "04. Engineering Repository" },
        title: {
          vi: "Kỹ Thuật Hệ Thống & Dev",
          en: "Systems Tech & Dev",
        },
        subtitle: {
          vi: "Kiến trúc Microservices/Modular Monolith, PostgreSQL 3NF, Redis Lock, Docker & NestJS.",
          en: "Microservices/Modular Monolith architecture, PostgreSQL 3NF, Redis Lock, Docker & NestJS.",
        },
        time: "8m",
        level: { vi: "Kỹ thuật", en: "Technical" },
        iconName: "code-2",
        telemetry: [
          { label: { vi: "BACKEND", en: "BACKEND" }, value: "NestJS / Node / TS", status: "good" },
          { label: { vi: "FRONTEND", en: "FRONTEND" }, value: "React / Vite / Tailwind", status: "good" },
          { label: { vi: "CƠ SỞ DỮ LIỆU", en: "DATABASE" }, value: "Postgres 3NF / Redis", status: "good" },
          { label: { vi: "DEVOPS", en: "DEVOPS" }, value: "Docker / CI/CD", status: "good" },
        ],
        steps: [
          {
            stepTag: { vi: "KỸ NĂNG DEV", en: "DEV STACK" },
            title: {
              vi: "Năng Lực Hiện Thực Hóa Phần Mềm Cấp Sản Xuất",
              en: "Production-Grade Full-Stack Software Engineering",
            },
            lead: {
              vi: "Là một BA có nền tảng kỹ sư, tôi tự tay lập trình được các tính năng cốt lõi và hiểu rõ chi phí kỹ thuật (technical cost) của từng quyết định nghiệp vụ.",
              en: "As an engineer-trained BA, I build core services hands-on and calculate the exact technical cost of business trade-offs.",
            },
            body: {
              vi: "Thành thạo TypeScript, kiến trúc RESTful chuẩn, kiểm thử tự động với Vitest, container hóa Docker và triển khai Vercel/VPS.",
              en: "Proficient in TypeScript, REST contracts, Vitest automation, Docker containerization, and Vercel/VPS deployments.",
            },
          },
        ],
      }
    ],
  },

  // PILLAR 05: DEVOPS & THÍ NGHIỆM 2.5D
  {
    id: "folder-simulations",
    code: "05",
    title: {
      vi: "05. DevOps & Thí Nghiệm 2.5D",
      en: "05. Interactive 2.5D DevOps Studio",
    },
    color: "#ea580c",
    bgLight: "#fffbeb",
    borderLight: "#fed7aa",
    items: [
{
        id: "item-sim-latency",
        slug: "latency-throughput-oms",
        moduleCode: "05",
        category: { vi: "05. Thí Nghiệm Mô Phỏng 2.5D", en: "05. Interactive 2.5D Studio" },
        title: {
          vi: "Latency vs Throughput (OMS)",
          en: "Latency vs Throughput (OMS)",
        },
        subtitle: {
          vi: "Mô phỏng động lực học hàng đợi M/M/1, điểm bão hòa RPS và cơ chế Auto-scaling Pods.",
          en: "M/M/1 queuing dynamics, RPS saturation cliffs, and auto-scaling pod behavior.",
        },
        time: "15m",
        level: { vi: "Mô phỏng 2.5D", en: "2.5D Interactive" },
        iconName: "activity",
        telemetry: [
          { label: { vi: "SLA TRUNG BÌNH", en: "AVG SLA" }, value: "38ms", status: "good" },
          { label: { vi: "THÔNG LƯỢNG", en: "THROUGHPUT" }, value: "1,200 req/s", status: "good" },
          { label: { vi: "SỐ LƯỢNG POD", en: "POD COUNT" }, value: "3 Pods (Auto)", status: "good" },
          { label: { vi: "TỶ LỆ LỖI", en: "ERROR RATE" }, value: "0.00%", status: "good" },
        ],
        steps: [
          {
            stepTag: { vi: "ĐỘ TRỄ & TẢI", en: "LATENCY DYNAMICS" },
            title: {
              vi: "Quan Sát Điểm Bão Hòa Khi Lưu Lượng Tăng Đột Biến",
              en: "Observing Saturation Cliffs Under Traffic Surges",
            },
            lead: {
              vi: "Kéo thanh trượt RPS lên trên 1,000 req/s để quan sát hàng đợi M/M/1 bắt đầu nghẽn và độ trễ tăng vọt.",
              en: "Adjust the RPS slider above 1,000 req/s to witness M/M/1 queue buildup and exponential latency escalation.",
            },
            body: {
              vi: "Hệ thống tự động kích hoạt Pod thứ 2 và thứ 3 để giải phóng áp lực hàng đợi, đưa SLA trở về dưới ngưỡng 180ms.",
              en: "The autoscaler deploys secondary and tertiary pods to drain backpressure, returning SLA below 180ms.",
            },
          },
        ],
      },
{
        id: "item-sim-erd",
        slug: "data-modeling-erd",
        moduleCode: "05",
        category: { vi: "05. Thí Nghiệm Mô Phỏng 2.5D", en: "05. Interactive 2.5D Studio" },
        title: {
          vi: "Thiết Kế CSDL Chuẩn 3NF",
          en: "3NF Relational Modeling",
        },
        subtitle: {
          vi: "Mô phỏng chuẩn hóa cơ sở dữ liệu quan hệ từ bảng phẳng Unnormalized sang 1NF, 2NF và 3NF.",
          en: "Interactive relational database normalization from unnormalized flat files to 1NF, 2NF, and 3NF.",
        },
        time: "12m",
        level: { vi: "Mô phỏng 2.5D", en: "2.5D Interactive" },
        iconName: "database",
        telemetry: [
          { label: { vi: "DẠNG CHUẨN", en: "NORMAL FORM" }, value: "3NF / BCNF", status: "good" },
          { label: { vi: "DƯ THỪA DỮ LIỆU", en: "ANOMALIES" }, value: "0% Dư thừa", status: "good" },
          { label: { vi: "TOÀN VẸN THAM CHIẾU", en: "INTEGRITY" }, value: "Foreign Key ACID", status: "good" },
          { label: { vi: "CHỈ MỤC B-TREE", en: "INDEX" }, value: "Composite B-Tree", status: "good" },
        ],
        steps: [
          {
            stepTag: { vi: "CHUẨN HÓA 3NF", en: "3NF NORMALIZATION" },
            title: {
              vi: "Triệt Tiêu Phụ Thuộc Bắc Cầu & Dư Thừa Dữ Liệu",
              en: "Eliminating Transitive Dependencies & Storage Redundancy",
            },
            lead: {
              vi: "Tách bảng phẳng thành các thực thể độc lập: Customers, Orders, Order_Items, và Tracking_Events.",
              en: "Decompose denormalized flat data into cohesive tables: Customers, Orders, Order_Items, and Tracking_Events.",
            },
            body: {
              vi: "Thiết kế này đảm bảo tuyệt đối không xảy ra Insertion Anomaly, Update Anomaly hay Deletion Anomaly.",
              en: "This architectural schema guarantees zero Insertion, Update, or Deletion anomalies across all transactional paths.",
            },
          },
        ],
      },
{
        id: "item-sim-api",
        slug: "rest-api-contracts",
        moduleCode: "05",
        category: { vi: "05. Thí Nghiệm Mô Phỏng 2.5D", en: "05. Interactive 2.5D Studio" },
        title: {
          vi: "REST API & Idempotency",
          en: "REST API & Idempotency",
        },
        subtitle: {
          vi: "Kiểm thử cơ chế chống gửi lặp request bằng Idempotency-Key và HTTP Status Codes xác định.",
          en: "Testing Idempotency-Key retry safety and deterministic HTTP contract semantics.",
        },
        time: "10m",
        level: { vi: "Mô phỏng 2.5D", en: "2.5D Interactive" },
        iconName: "webhook",
        telemetry: [
          { label: { vi: "GIAO THỨC", en: "PROTOCOL" }, value: "REST / HTTPS", status: "good" },
          { label: { vi: "CƠ CHẾ IDEMPOTENCY", en: "IDEMPOTENCY" }, value: "Redis Key 24h", status: "good" },
          { label: { vi: "STATUS CODE", en: "HTTP CONTRACT" }, value: "201 Created / 409", status: "good" },
          { label: { vi: "TÍNH TOÀN VẸN", en: "CONSISTENCY" }, value: "Strict 1-time", status: "good" },
        ],
        steps: [
          {
            stepTag: { vi: "IDEMPOTENCY", en: "IDEMPOTENCY CONTRACT" },
            title: {
              vi: "Đảm Bảo Shipper Quét Trùng Không Bị Tính Tiền Lặp",
              en: "Ensuring Duplicate Parcel Scans Never Double-Charge",
            },
            lead: {
              vi: "Sử dụng header Idempotency-Key: <UUIDv4> để ghi nhớ kết quả trong Redis với TTL 86,400 giây.",
              en: "Leverages Idempotency-Key headers cached in Redis with a 24-hour TTL window.",
            },
            body: {
              vi: "Request đầu tiên trả về HTTP 201 Created. Mọi request lặp sau đó trả về ngay kết quả cached mà không ghi DB lặp.",
              en: "The initial request yields HTTP 201 Created; subsequent replays return the cached payload without duplicate DB writes.",
            },
          },
        ],
      },
{
        id: "item-sim-bpmn",
        slug: "bpmn-process-modeling",
        moduleCode: "05",
        category: { vi: "05. Thí Nghiệm Mô Phỏng 2.5D", en: "05. Interactive 2.5D Studio" },
        title: {
          vi: "Quy Trình BPMN 2.0",
          en: "BPMN 2.0 Process Flow",
        },
        subtitle: {
          vi: "Mô hình hóa quy trình xử lý đơn hàng: Start Event, User Tasks, Exclusive Gateways và End Event.",
          en: "End-to-end BPMN 2.0 order fulfillment workflow: Start Events, User Tasks, Gateways, and Error End Events.",
        },
        time: "12m",
        level: { vi: "Mô phỏng 2.5D", en: "2.5D Interactive" },
        iconName: "workflow",
        telemetry: [
          { label: { vi: "CHUẨN MÔ HÌNH", en: "STANDARD" }, value: "OMG BPMN 2.0", status: "good" },
          { label: { vi: "CỔNG RẼ NHÁNH", en: "GATEWAYS" }, value: "XOR Exclusive", status: "good" },
          { label: { vi: "XỬ LÝ LỖI", en: "COMPENSATION" }, value: "Boundary Event", status: "good" },
          { label: { vi: "ENGINE", en: "WORKFLOW ENGINE" }, value: "Camunda Zeebe", status: "good" },
        ],
        steps: [
          {
            stepTag: { vi: "LUỒNG BPMN 2.0", en: "BPMN 2.0 ORCHESTRATION" },
            title: {
              vi: "Đặc Tả Quy Trình Nghiệp Vụ Chuẩn Quốc Tế Cho Kỹ Sư",
              en: "International Business Process Orchestration for Engineering Teams",
            },
            lead: {
              vi: "BPMN 2.0 là ngôn ngữ chung giúp Business Analyst, Developer và khách hàng thống nhất 100% cách thức vận hành.",
              en: "BPMN 2.0 acts as the universal visual bridge uniting BAs, engineers, and clients with zero semantic ambiguity.",
            },
            body: {
              vi: "Quy trình bao gồm cổng rẽ nhánh kiểm tra tín dụng, phân bổ kho hàng tự động và xử lý bồi hoàn khi hủy đơn.",
              en: "The workflow features automated credit checks, smart inventory reservation, and boundary compensation handlers.",
            },
          },
        ],
      },
{
        id: "item-sim-compiler",
        slug: "compiler-execution-pipeline",
        moduleCode: "05",
        category: { vi: "05. Thí Nghiệm Mô Phỏng 2.5D", en: "05. Interactive 2.5D Studio" },
        title: {
          vi: "Biên Dịch & Máy Ảo AST",
          en: "Compiler Pipeline & AST",
        },
        subtitle: {
          vi: "Mô phỏng 4 pha xử lý ngôn ngữ: Lexer (Tokens) → Parser (AST) → Bytecode → Virtual Machine Execution.",
          en: "4-stage language execution simulator: Lexer (Tokens) → Parser (AST) → Bytecode → VM Execution.",
        },
        time: "14m",
        level: { vi: "Mô phỏng 2.5D", en: "2.5D Interactive" },
        iconName: "binary",
        telemetry: [
          { label: { vi: "GIAI ĐOẠN 1", en: "STAGE 1" }, value: "Lexical Tokens", status: "good" },
          { label: { vi: "GIAI ĐOẠN 2", en: "STAGE 2" }, value: "AST Tree", status: "good" },
          { label: { vi: "GIAI ĐOẠN 3", en: "STAGE 3" }, value: "Stack Bytecode", status: "good" },
          { label: { vi: "THỰC THI", en: "VM RUNTIME" }, value: "Stack VM Eval", status: "good" },
        ],
        steps: [
          {
            stepTag: { vi: "PIPELINE BIÊN DỊCH", en: "COMPILATION PIPELINE" },
            title: {
              vi: "Từ Chuỗi Ký Tự Đến Cây Cú Pháp Trừu Tượng AST",
              en: "From Source Character Stream to Abstract Syntax Tree (AST)",
            },
            lead: {
              vi: "Trực quan hóa cách trình biên dịch quét mã nguồn, phân tách thành Tokens, dựng cây ngữ pháp và sinh mã máy.",
              en: "Visualize how modern language runtimes tokenize source text, build parse trees, and generate bytecode instructions.",
            },
            body: {
              vi: "Giúp lập trình viên thấu hiểu cơ chế hoạt động tầng sâu của JavaScript V8, JVM và các máy ảo hiện đại.",
              en: "Empowers engineers with deep mental models of JavaScript V8, Java HotSpot, and stack-based virtual machines.",
            },
          },
        ],
      }
    ],
  },
];

const flattenPortfolioItems = (items: PortfolioItem[]): PortfolioItem[] => {
  return items.flatMap((item) => [
    item,
    ...(item.children ? flattenPortfolioItems(item.children) : []),
  ]);
};

export const allPortfolioItems: PortfolioItem[] = portfolioTreeFolders.flatMap((folder) =>
  flattenPortfolioItems(folder.items),
);
