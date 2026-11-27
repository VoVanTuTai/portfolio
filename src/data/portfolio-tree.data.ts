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

// 2. Project Explorer Modules (01. Projects, 02. PM & Agile, 03. Skills, 04. Simulations)
export const portfolioTreeFolders: PortfolioFolder[] = [
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
            steps: [],
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
            steps: [],
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
            steps: [],
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
            steps: [],
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
            steps: [],
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
            steps: [],
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
            steps: [],
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
            steps: [],
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
            steps: [],
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
            steps: [],
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
            steps: [],
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
            steps: [],
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
            steps: [],
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
            steps: [],
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
            steps: [],
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
            steps: [],
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
            steps: [],
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
            steps: [],
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
            steps: [],
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
            steps: [],
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
            steps: [],
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
            steps: [],
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

export const allPortfolioItems: PortfolioItem[] = [
  ...portfolioTreeFolders.flatMap((folder) => flattenPortfolioItems(folder.items)),
  ...profileFolderItems,
];
