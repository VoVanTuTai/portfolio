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
            steps: [
              {
                stepTag: { vi: "BƯỚC 1: PHÂN TÍCH KHOẢNG TRỐNG", en: "STEP 1: GAP ANALYSIS" },
                title: { vi: "Phân Tích Hiện Trạng & Thất Thoát Tiền Hàng (BABOK v3 As-Is)", en: "Current State Analysis & Financial Leakage (BABOK v3 As-Is)" },
                lead: { vi: "Đánh giá khoảng trống giữa hệ thống cũ phân tán và yêu cầu đối soát thời gian thực.", en: "Evaluating operational gaps between legacy fragmented systems and real-time reconciliation needs." },
                body: { vi: "Theo phương pháp luận BABOK v3 (Chương 6 - Phân tích Chiến lược), khoảng trống nghiệp vụ lớn nhất của hệ thống bưu chính truyền thống nằm ở việc bưu tá bấm quét mã vạch 2-3 lần liên tiếp khi mạng 4G chập chờn. Không có cơ chế khóa Idempotency, mỗi lần quét sinh ra một hóa đơn COD trùng lặp, gây sai lệch 3.2% tổng tiền thu hộ cuối ngày và làm tê liệt phòng kế toán.", en: "Per BABOK v3 Chapter 6, the critical operational gap stems from couriers double-clicking barcode scans during mobile 4G latency spikes. Lacking idempotency guards, each tap creates duplicate COD invoices, causing 3.2% financial reconciliation variance." },
                calloutTitle: { vi: "TIÊU CHUẨN BABOK V3 §6.2", en: "BABOK V3 §6.2 STANDARD" },
                calloutText: { vi: "Xác định rõ As-Is (Tỷ lệ sai lệch 3.2%, đối soát mất 4 giờ) và To-Be (Sai lệch 0.00%, đối soát tự động < 5 giây).", en: "Defines explicit As-Is (3.2% variance, 4h manual audit) vs To-Be (0.00% variance, < 5s automated audit)." },
              },
              {
                stepTag: { vi: "BƯỚC 2: ĐỐI SOÁT KÉP COD", en: "STEP 2: DOUBLE-ENTRY COD" },
                title: { vi: "Cơ Chế Sổ Cái Kép & Triệt Tiêu Thất Thoát Dòng Tiền", en: "Double-Entry Ledger & Zero-Variance Cashflow Audit" },
                lead: { vi: "Áp dụng nguyên tắc kế toán kép đảm bảo tổng Nợ luôn bằng tổng Có trong mọi giao dịch.", en: "Enforcing double-entry bookkeeping ensuring Debit equals Credit across all parcel transactions." },
                body: { vi: "Mọi thay đổi về tiền mặt thu hộ COD đều được ghi nhận đồng thời vào hai tài khoản đối ứng: Tài khoản Tiền mặt Tài xế (Driver Cash Balance) và Tài khoản Phải trả Người gửi (Merchant Payable). Hệ thống không cho phép sửa đổi số dư bằng lệnh UPDATE mà bắt buộc phải sinh giao dịch bù trừ (Compensating Transaction) nếu có sai sót, đảm bảo tính toàn vẹn kiểm toán bất biến.", en: "Every COD transaction is posted symmetrically across two accounts: Driver Cash Balance and Merchant Payable. Balance mutations via raw UPDATE are prohibited; only immutable compensating transactions are recorded." },
                calloutTitle: { vi: "NGUYÊN TẮC KẾ TOÁN KÉP", en: "DOUBLE-ENTRY STANDARD" },
                calloutText: { vi: "Tổng tiền shipper nộp vào két cuối ngày luôn khớp tuyệt đối với tổng đơn phát thành công trên ứng dụng.", en: "End-of-day driver physical vault deposit matches app delivery confirmations with 0 VND discrepancy." },
              },
              {
                stepTag: { vi: "BƯỚC 3: RANH GIỚI PHẠM VI", en: "STEP 3: SCOPE BASELINE" },
                title: { vi: "Ranh Giới Phạm Vi Triển Khai (ISO/IEC 25010 Baseline)", en: "Scope Baseline & System Boundary (ISO/IEC 25010)" },
                lead: { vi: "Xác định nghiêm ngặt phạm vi trong kỳ (In-Scope) và phân kỳ tiếp theo (Out-of-Scope).", en: "Strictly defining in-scope deliverables and future phase boundaries." },
                body: { vi: "Phạm vi In-Scope bao gồm: API Gateway có Idempotency Key 24h, máy trạng thái Camunda BPMN 2.0 (7 bước), mô hình bản đồ mạng lưới Hub và PostgreSQL 3NF. Các hạng mục Out-of-Scope như thuật toán xếp xe 3D và cân đo thể tích DWS tự động được chuyển sang Phân kỳ 2 nhằm bảo toàn ngân sách và tiến độ bàn giao.", en: "In-scope boundaries encompass API Gateway 24h Idempotency, 7-state Camunda BPMN workflow, hub network map, and 3NF database schema. Complex 3D truck container packing and automated conveyor DWS hardware integration are slated for Phase 2." },
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
                body: { vi: "Trong mạng lưới Point-to-Point, 22 tỉnh thành đòi hỏi 231 tuyến xe tải riêng biệt, dẫn đến chi phí xe chạy rỗng rất cao. Bằng cách thiết lập 3 Hub Tổng tại Hà Nội (Bắc), Đà Nẵng (Trung) và TP.HCM (Nam), toàn bộ hàng hóa từ 19 bưu cục tỉnh chỉ cần đổ về Hub vùng. Xe tải Linehaul hạng nặng chạy trục chính với hệ số lấp đầy thùng xe > 88%.", en: "A point-to-point network for 22 depots requires 231 individual freight lanes, inducing severe empty-haul costs. By centralizing operations into Hanoi, Danang, and HCMC Mega Hubs, provincial spokes feed regional sorting centers, enabling > 88% truckload fill rates." },
                calloutTitle: { vi: "ĐỊNH NGHĨA KHOA HỌC", en: "SCIENTIFIC PRINCIPLE" },
                calloutText: { vi: "Áp dụng định lý luồng cực đại Ford-Fulkerson để tính toán thông lượng tối ưu giữa các trạm trung chuyển.", en: "Leverages Ford-Fulkerson maximum network flow theorem to model bottleneck capacities." },
              },
              {
                stepTag: { vi: "BƯỚC 2: TUYẾN XE TRỤC LINEHAUL", en: "STEP 2: ROAD LINEHAUL TRUNKS" },
                title: { vi: "Tuyến Xe Tải Trục Đường Bộ & Chu Kỳ Giờ Cắt Ca (Cut-Off Time)", en: "Road Linehaul Fleets & Fixed Cut-Off Schedules" },
                lead: { vi: "Vận tải đường bộ bằng xe tải thùng kín 15T - 30T trên trục QL1A và cao tốc Bắc - Nam.", en: "Heavy 15-30 ton closed-box haulage trucks running along Highway 1A and expressway corridors." },
                body: { vi: "Tuyến Linehaul Bắc - Nam vận hành liên tục 36h - 48h với 2 tài xế thay phiên lái. Khung giờ cắt ca (Cut-off Time) cố định lúc 19h00 hàng ngày: bưu kiện gom về Hub trước 19h sẽ được đóng bao kẹp chì niêm phong và xuất bến lúc 20h00. Mọi bưu phẩm đến trễ sau 19h00 được tự động xếp vào ca sáng hôm sau, bảo vệ SLA cam kết của 99% bưu kiện trên chuyến xe.", en: "North-South linehaul trucks run 36h-48h nonstop with dual rotating drivers. A strict 19:00 cut-off applies: parcels arriving before 19:00 are consolidated into sealed master bags for 20:00 departure. Late arrivals automatically roll to the morning cycle." },
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
                body: { vi: "Bưu kiện được mô hình hóa thành tập trạng thái hữu hạn S = {ORDER_CREATED, PICKED_UP, HUB_INBOUND, LINEHAUL_TRANSIT, HUB_OUTBOUND, OUT_FOR_DELIVERY, DELIVERED}. Bất kỳ sự kiện chuyển trạng thái nào đều phải có bằng chứng quét mã vạch và chữ ký số. Nếu shipper bấm báo phát thành công khi bưu kiện chưa từng qua trạng thái OUT_FOR_DELIVERY, hệ thống ném ngoại lệ IllegalTransitionException.", en: "Parcels are governed by a formal DFA state set S. State changes mandate barcode scans and actor signatures. Marking an order delivered without reaching OUT_FOR_DELIVERY triggers an immediate IllegalTransitionException." },
                calloutTitle: { vi: "TOÁN HỌC TRẠNG THÁI", en: "STATE MATHEMATICS" },
                calloutText: { vi: "Đảm bảo tính đóng (Closure Property): bưu kiện không bao giờ rơi vào trạng thái không xác định (Undefined State).", en: "Ensures mathematical closure: a shipment can never enter an undefined dangling state." },
              },
              {
                stepTag: { vi: "BƯỚC 2: CAMUNDA BPMN 2.0", en: "STEP 2: CAMUNDA BPMN 2.0" },
                title: { vi: "Điều Phối Luồng Bằng Camunda BPMN 2.0 & Intermediate Events", en: "Workflow Orchestration via Camunda BPMN 2.0 & Intermediate Events" },
                lead: { vi: "Sử dụng IntermediateCatchEvents để tạm dừng tiến trình khi xe tải Linehaul đang di chuyển.", en: "Deploying IntermediateCatchEvents to pause process instances while linehaul trucks are en route." },
                body: { vi: "Quá trình xe tải di chuyển 36h trên đường quốc lộ không tiêu tốn tài nguyên luồng của máy chủ. Camunda Zeebe lưu token trạng thái xuống đĩa. Khi xe tải đến cổng Hub đích và quét mã vạch Gate-In, sự kiện Webhook SignalEvent được bắn ra để đánh thức token quy trình, chuyển bưu kiện sang công đoạn gạt chia chọn trên băng chuyền tự động.", en: "The 36-hour linehaul trip consumes zero server CPU threads. Camunda Zeebe persists execution tokens to disk. Upon arrival at destination hub, gate-in barcode scanning fires a Webhook SignalEvent to resume workflow execution." },
                calloutTitle: { vi: "TIÊU CHUẨN ISO/IEC 19510", en: "ISO/IEC 19510 STANDARD" },
                calloutText: { vi: "Bản vẽ quy trình BPMN 2.0 có thể thực thi trực tiếp, thu hẹp khoảng cách giữa tài liệu BA và code backend.", en: "BPMN 2.0 XML specifications execute directly, bridging the gap between BA specs and backend code." },
              },
              {
                stepTag: { vi: "BƯỚC 3: NHẬT KÝ KIỂM TOÁN", en: "STEP 3: AUDIT TRAIL" },
                title: { vi: "Nhật Ký Kiểm Toán Bất Biến (Immutable Audit Trail)", en: "Immutable Audit Trail & Regulatory Forensics" }
                ,
                lead: { vi: "Lưu vết toàn bộ tọa độ GPS, mã nhân viên và ảnh chụp ký nhận của từng bước chuyển trạng thái.", en: "Recording GPS telemetry, employee IDs, and digital signatures for every lifecycle event." },
                body: { vi: "Bảng `parcel_events` chỉ hỗ trợ thao tác ghi thêm (Append-Only) và tuyệt đối cấm câu lệnh UPDATE/DELETE. Mỗi bản ghi lưu trữ: trạng thái mới, mã định danh nhân viên thực hiện (Actor UUID), tọa độ GPS, góc chụp camera quét mã và timestamp chính xác đến mili-giây. Đây là cơ sở pháp lý duy nhất để giải quyết tranh chấp khiếu nại giữa shop, người mua và đơn vị vận chuyển.", en: "The `parcel_events` table is append-only with strict UPDATE/DELETE revokes. Every entry logs new status, actor UUID, GPS coordinates, scanner snapshot, and millisecond timestamp, providing definitive legal evidence during disputes." },
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
                body: { vi: "Khi shipper bấm nút 'Khách không nghe máy' hoặc 'Hẹn giao lại', ứng dụng gửi kèm tọa độ định vị vệ tinh GPS (lat1, lon1). Thuật toán Haversine tính toán khoảng cách mặt cầu tới địa chỉ giao hàng (lat2, lon2). Nếu khoảng cách vượt quá bán kính 300 mét, hệ thống lập tức từ chối và cảnh báo vi phạm quy chế giao nhận.", en: "When a courier flags a delivery failure, the mobile app sends GPS telemetry (lat1, lon1). The Haversine formula calculates spherical distance to the recipient geocode (lat2, lon2). Exceeding a 300-meter radius triggers instant rejection and an audit flag." },
                calloutTitle: { vi: "CÔNG THỨC TOÁN HỌC", en: "SPATIAL FORMULA" },
                calloutText: { vi: "a = sin²(Δφ/2) + cos(φ1)cos(φ2)sin²(Δλ/2); d = 2R·atan2(√a, √(1−a)) với bán kính R = 6,371 km.", en: "Calculates true spherical geodesic distance taking into account Earth's mean curvature." },
              },
              {
                stepTag: { vi: "BƯỚC 2: KHO ĐỆM 48H", en: "STEP 2: 48H RETENTION BUFFER" },
                title: { vi: "Bộ Đệm Lưu Kho 48H (RTO Buffer) & Tự Động Bắn Tin Cứu Đơn", en: "48-Hour RTO Buffer & Automated Merchant Rescue Notifications" },
                lead: { vi: "Giữ kiện hàng tại bưu cục phát trong 48 giờ để chủ shop có cơ hội liên hệ hỗ trợ giao lại.", en: "Holding failed parcels at destination stations for 48 hours to enable merchant rescue interventions." },
                body: { vi: "Chuyển hoàn là chi phí lãng phí lớn nhất trong thương mại điện tử. Sau 3 lần giao không thành công, bưu kiện không bị chuyển hoàn ngay mà chuyển vào Kho Đệm 48H tại bưu cục đích. Hệ thống tự động gửi webhook thông báo cho nhà bán hàng để shop gọi điện cho khách đổi địa chỉ hoặc hẹn lại ngày giao, giúp cứu thành công 28% đơn hàng nguy cơ hủy.", en: "Return shipping represents severe logistics deadweight loss. After 3 failed attempts, parcels are impounded in a 48-Hour Buffer instead of immediate return. Automated webhooks notify merchants to verify customer details, rescuing over 28% of at-risk packages." },
                calloutTitle: { vi: "HIỆU QUẢ KINH TẾ", en: "FINANCIAL IMPACT" },
                calloutText: { vi: "Cứu được 28% đơn hàng chuyển hoàn giúp tiết kiệm hàng trăm triệu đồng phí vận tải 2 chiều mỗi tháng.", en: "Rescuing 28% of return candidates saves substantial double-transit freight expenses monthly." },
              },
              {
                stepTag: { vi: "BƯỚC 3: XỬ LÝ HÀNG HỎNG", en: "STEP 3: DAMAGE INDEMNITY" },
                title: { vi: "Quy Trình Xử Lý Bưu Kiện Hỏng & Bồi Thường Tự Động Trong 24H", en: "Damaged Parcel Protocol & Automated 24h Compensation" },
                lead: { vi: "Đồng kiểm khi nhận hàng, lập biên bản điện tử và tự động chi trả bảo hiểm bưu gửi.", en: "Joint inspection protocols, electronic incident reports, and automated insurance settlements." },
                body: { vi: "Trường hợp bưu kiện bị rách bao bì hoặc móp méo khi vận chuyển, shipper và khách hàng lập biên bản đồng kiểm trực tiếp trên ứng dụng, đính kèm 3 góc ảnh chụp hiện trạng. Tiến trình Saga tự động khởi chạy: bưu kiện chuyển sang trạng thái DAMAGED_INDEMNITY, tiền hàng được hoàn trả cho ví điện tử người mua trong 24 giờ và kích hoạt hồ sơ bồi thường với công ty bảo hiểm hàng hóa.", en: "If outer packaging suffers transit damage, courier and recipient complete an in-app joint damage report with 3 photos. A Saga workflow triggers DAMAGED_INDEMNITY status, issuing customer wallet refunds within 24 hours while opening insurer subrogation files." },
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
                body: { vi: "Theo Định lý CAP của Eric Brewer, một hệ thống phân tán không thể đồng thời đạt cả Nhất quán tuyệt đối và Sẵn sàng 100% khi có phân vùng mạng. Nexus Express tách riêng: hệ thống Kế toán & Thu hộ COD là hệ thống CP (tuân thủ ACID, sẵn sàng dừng giao dịch nếu mất đồng bộ để bảo vệ tiền), trong khi cổng Tra cứu Tracking cho người dùng là hệ thống AP (sử dụng Redis Cache và Read Replicas, chấp nhận dữ liệu chậm 1-2s nhưng không bao giờ sập).", en: "Brewer's CAP Theorem proves CP vs AP trade-offs under network partitions. Nexus Express isolates domains: COD Finance operates as a CP system (strict ACID, pausing transactions if sync drops to guard funds), while Public Tracking runs as AP (Redis caching + Read Replicas, accepting 1-2s replication lag for zero downtime)." },
                calloutTitle: { vi: "ĐÁNH ĐỔI KIẾN TRÚC", en: "ARCHITECTURAL TRADE-OFF" },
                calloutText: { vi: "Không ép toàn bộ hệ thống vào một mô hình duy nhất; chọn đúng công cụ cho từng miền giá trị cốt lõi.", en: "Avoids dogmatic architecture; matches database guarantees to specific business domain requirements." },
              },
              {
                stepTag: { vi: "BƯỚC 2: KHÓA PHÂN TÁN", en: "STEP 2: DISTRIBUTED LOCK" },
                title: { vi: "Khóa Phân Tán Redis SETNX & Chuẩn Idempotency-Key RFC 7231", en: "Redis SETNX Distributed Locks & RFC 7231 Idempotency" },
                lead: { vi: "Sử dụng header X-Idempotency-Key và khóa nguyên tử Redis để triệt tiêu race condition.", en: "Deploying X-Idempotency-Key headers and atomic Redis locks to eliminate race conditions." },
                body: { vi: "Khi bưu tá quét mã, ứng dụng mobile đính kèm header `X-Idempotency-Key: UUID`. Tại API Gateway, lệnh Redis `SET key value EX 86400 NX` được thực thi trong < 1ms. Nếu khóa đã tồn tại, gateway biết ngay đây là request gửi lại do chập chờn mạng và trả về kết quả đã cache trước đó, ngăn không cho tạo thêm bản ghi trùng lặp trong cơ sở dữ liệu PostgreSQL.", en: "When couriers scan barcodes, the app injects an `X-Idempotency-Key: UUID` header. The API Gateway executes an atomic Redis `SET key value EX 86400 NX` command in < 1ms. Existing keys immediately return cached responses, preventing duplicate database insertions." },
                calloutTitle: { vi: "CHUẨN RFC INTERNET", en: "IETF RFC STANDARD" },
                calloutText: { vi: "Tuân thủ nghiêm ngặt đặc tả IETF Idempotency-Key HTTP Header Specification.", en: "Strictly conforms to IETF draft specifications for idempotent HTTP mutation requests." },
              },
              {
                stepTag: { vi: "BƯỚC 3: CƠ SỞ DỮ LIỆU 3NF", en: "STEP 3: 3NF DATABASE" },
                title: { vi: "Phân Phối Tải Đọc/Ghi (CQRS) & Chuẩn Hóa CSDL 3NF", en: "Read/Write Replica Splitting (CQRS) & 3NF Normalization" },
                lead: { vi: "Phân tách cổng ghi Master và cổng đọc Read-Replicas kết hợp lược đồ chuẩn 3NF.", en: "Splitting Master write paths from Read-Replicas paired with rigorous 3NF normalization." },
                body: { vi: "Hệ thống sử dụng cụm PostgreSQL với 1 node Primary chuyên xử lý các lệnh INSERT/UPDATE giao dịch và 3 node Read-Replicas phục vụ tra cứu thông tin tracking. Lược đồ cơ sở dữ liệu được chuẩn hóa 3NF nghiêm ngặt, tách biệt bảng bưu kiện, chuyến xe, bảng kê bao tải và lịch sử sự kiện, loại bỏ hoàn toàn các phụ thuộc bắc cầu và dị thường sửa đổi.", en: "PostgreSQL runs with 1 Primary master for transactional INSERT/UPDATE workloads and 3 Read-Replicas dedicated to public tracking queries. Schema design strictly adheres to 3NF, segregating parcels, trips, manifests, and events to eliminate update anomalies." },
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
                body: { vi: "Các mô hình ngôn ngữ lớn thường bị 'ảo giác' (Hallucination) khi được hỏi về vị trí bưu kiện thời gian thực. Semantic Router sử dụng mô hình embedding nhỏ gọn để phân loại ý định người dùng trong 15ms: nếu câu hỏi chứa mã vận đơn hoặc hỏi vị trí kiện hàng, chuyển sang SQL Tool Calling; nếu câu hỏi về bảng giá cước, chính sách bồi thường hay hàng cấm gửi, chuyển sang kho tìm kiếm vector PgVector.", en: "LLMs suffer severe hallucinations when queried on real-time parcel telemetry. A lightweight Semantic Router classifies query intent in 15ms: tracking queries route to structured SQL Tool Calling, while policy and forbidden items inquiries route to PgVector dense search." },
                calloutTitle: { vi: "TRIỆT TIÊU ẢO GIÁC", en: "ZERO HALLUCINATION" },
                calloutText: { vi: "Không bao giờ để LLM tự phán đoán vị trí xe tải hoặc số tiền thu hộ của khách hàng.", en: "Guarantees the LLM never fabricates delivery locations or financial cash balances." },
              },
              {
                stepTag: { vi: "BƯỚC 2: SQL TOOL CALLING", en: "STEP 2: SQL TOOL CALLING" },
                title: { vi: "Truy Vấn CSDL Trực Tiếp Bằng SQL Tool Calling An Toàn", en: "Sandboxed Read-Only SQL Tool Calling" },
                lead: { vi: "LLM sinh câu truy vấn SQL có tham số và thực thi trên môi trường Sandbox Read-Only.", en: "LLM generates parameterized SQL executed inside an isolated Read-Only database sandbox." },
                body: { vi: "Khi người dùng hỏi 'Đơn NX-123456 đến đâu rồi?', LLM trích xuất mã vận đơn và gọi tool `get_parcel_tracking_status(code)`. Tool này sinh câu lệnh SQL parameterized chạy trên node PostgreSQL Read-Replica với quyền truy cập chỉ đọc (SELECT only) và giới hạn thời gian chạy < 100ms. Kết quả trả về trạng thái chính xác 100% để LLM tổng hợp thành câu trả lời tự nhiên cho khách.", en: "When users ask 'Where is order NX-123456?', the LLM extracts the tracking code and invokes `get_parcel_tracking_status(code)`. The tool executes parameterized SQL against read-only replicas with a 100ms timeout, feeding raw factual status back to the LLM." },
                calloutTitle: { vi: "BẢO MẬT TUYỆT ĐỐI", en: "READ-ONLY SANDBOX" },
                calloutText: { vi: "Tài khoản cơ sở dữ liệu của Chatbot bị tước toàn bộ quyền INSERT, UPDATE, DELETE và DROP.", en: "Chatbot DB user is stripped of all INSERT, UPDATE, DELETE, and DDL permissions." },
              },
              {
                stepTag: { vi: "BƯỚC 3: PGVECTOR & HNSW", en: "STEP 3: PGVECTOR & HNSW" },
                title: { vi: "Tìm Kiếm Tri Thức Bằng PgVector & Chỉ Mục HNSW", en: "Policy Knowledge Retrieval via PgVector & HNSW Indexing" },
                lead: { vi: "Sử dụng thuật toán Hierarchical Navigable Small World để tìm kiếm tương đồng vector nhanh chóng.", en: "Deploying Hierarchical Navigable Small World (HNSW) indexing for high-speed vector retrieval." },
                body: { vi: "Toàn bộ tài liệu chính sách vận chuyển, quy cách đóng gói và danh mục hàng hóa nguy hiểm được chia thành các đoạn văn bản (chunks 512 tokens), tạo vector embedding 1536 chiều bằng mô hình text-embedding-3-small và lưu vào PostgreSQL thông qua extension `pgvector`. Chỉ mục HNSW cho phép tìm kiếm 3 đoạn tài liệu phù hợp nhất theo độ đo Cosine Similarity trong < 8ms.", en: "Shipping policies, packaging manuals, and hazardous cargo rules are chunked (512 tokens), embedded into 1536-dimensional vectors, and stored in PostgreSQL using `pgvector`. An HNSW index retrieves top-3 relevant context chunks via cosine similarity in < 8ms." },
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
                body: { vi: "Hệ thống được kiểm thử chịu tải k6 mô phỏng 1.200 bưu tá quét barcode đồng thời trong giờ cao điểm 18h. Kết quả ghi nhận: độ trễ trung vị P50 đạt 22ms, phân vị P95 đạt 38ms và phân vị P99 đạt 176ms. Nhờ kiến trúc NestJS chạy trên engine Fastify kết hợp Redis Cache, gateway overhead chỉ tiêu tốn < 8ms cho mỗi yêu cầu HTTP.", en: "Simulating 1,200 couriers concurrently scanning parcels at 18:00 rush hour using k6. Benchmark results show P50 median latency at 22ms, P95 at 38ms, and P99 at 176ms. NestJS on Fastify plus Redis caching keeps API Gateway overhead below 8ms per HTTP roundtrip." },
                calloutTitle: { vi: "PHÂN VỊ P99 KỸ THUẬT", en: "P99 PERCENTILE" },
                calloutText: { vi: "Đo lường bằng phân vị P95/P99 phản ánh chính xác trải nghiệm thực tế hơn giá trị trung bình trung vị.", en: "Percentiles reveal true worst-case tail latencies obscured by misleading average metrics." },
              },
              {
                stepTag: { vi: "BƯỚC 2: ĐỐI SOÁT COD 0 ĐỒNG", en: "STEP 2: ZERO-VARIANCE COD" },
                title: { vi: "Kiểm Toán Sai Lệch Dòng Tiền COD Đạt 0 Đồng", en: "Zero-Leakage Financial Verification & Daily Reconciliation" },
                lead: { vi: "Loại bỏ hoàn toàn sai lệch tiền mặt thu hộ giữa bưu tá, tài khoản ngân hàng và chủ shop.", en: "Eliminating all cash discrepancies between couriers, bank settlements, and merchant payouts." },
                body: { vi: "Trong 30 ngày chạy thử nghiệm với hơn 45.000 bưu kiện phát sinh COD, hệ thống ghi nhận tỷ lệ trùng đơn là 0.00% (so với 3.2% của hệ thống cũ). Báo cáo kiểm toán cuối ngày được tổng hợp tự động trong 3 giây thay vì mất 4 tiếng đối soát thủ công qua bảng tính Excel, chênh lệch số dư tiền thực tế nộp vào tài khoản ngân hàng đạt mốc 0 đồng.", en: "Over a 30-day trial spanning 45,000+ COD shipments, duplicate orders plummeted from 3.2% to exactly 0.00%. Automated daily financial closing takes 3 seconds instead of 4 manual Excel audit hours, achieving 0 VND variance against bank deposit receipts." },
                calloutTitle: { vi: "HIỆU QUẢ TÀI CHÍNH", en: "FINANCIAL IMPACT" },
                calloutText: { vi: "Bảo toàn 100% dòng tiền lưu động và triệt tiêu nguy cơ thất thoát do gian lận hoặc lỗi hệ thống.", en: "Guarantees 100% working capital integrity, eliminating losses from human fraud or software glitches." },
              },
              {
                stepTag: { vi: "BƯỚC 3: MÔI TRƯỜNG LIVE", en: "STEP 3: LIVE PRODUCTION" },
                title: { vi: "Vận Hành Thực Tế Tại tracking.nexus-ex.site", en: "Live Production Deployment at tracking.nexus-ex.site" },
                lead: { vi: "Triển khai trên hạ tầng Vercel & Cloud VPS với chứng chỉ bảo mật SSL/TLS đầy đủ.", en: "Deployed to production infrastructure with automated CI/CD and enterprise TLS encryption." },
                body: { vi: "Toàn bộ hệ thống hiện đang chạy trực tiếp trên môi trường Production tại tên miền chính thức https://tracking.nexus-ex.site. Nhà tuyển dụng và đối tác có thể truy cập trực tiếp, nhập các mã vận đơn thực tế để kiểm tra tốc độ phản hồi, giao diện trực quan và cơ chế tra cứu phân tầng.", en: "The complete system is deployed live on Production at https://tracking.nexus-ex.site. Evaluators can access the live tracking portal, test real tracking IDs, and inspect responsive performance and layered architecture." },
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
                body: { vi: "Khi khách đặt xe, hệ thống không phát sóng toàn thành phố mà quét theo vòng tròn đồng tâm (Expanding Rings). Bắt đầu từ bán kính r1 = 1km trong 5 giây đầu. Nếu không có tài xế nhận, bán kính tự động mở rộng lên r2 = 2.5km và tối đa r3 = 3.5km. Thuật toán Haversine tính cự lý geodesic đảm bảo thời gian đón khách cam kết < 5 phút.", en: "Upon ride request, concentric spatial rings expand dynamically: r1 = 1km for 5 seconds, widening to 2.5km and 3.5km if unaccepted. Geodesic Haversine math caps estimated pickup arrival under 5 minutes." },
                calloutTitle: { vi: "TỐI ƯU CỰ LÝ ĐÓN XE", en: "PICKUP OPTIMIZATION" },
                calloutText: { vi: "Giới hạn bán kính tối đa 3.5km giúp giảm tỷ lệ tài xế hủy cuốc do điểm đón quá xa.", en: "Capping radius at 3.5km minimizes driver cancellations caused by excessive deadhead distance." },
              },
              {
                stepTag: { vi: "BƯỚC 2: TÍNH CƯỚC ĐỘNG", en: "STEP 2: SURGE PRICING" },
                title: { vi: "Công Thức Cân Bằng Cung Cầu & Tính Cước Động (Surge Pricing)", en: "Dynamic Surge Pricing & Supply-Demand Equilibrium Formula" },
                lead: { vi: "Hệ số cước k_surge tự động điều chỉnh theo mật độ cuốc xe và số xe rỗng trong khu vực.", en: "Dynamic multiplier k_surge equilibrating local ride demand against idle driver supply." },
                body: { vi: "Tại các khu vực có tỷ lệ Cung/Cầu lệch pha (như mưa lớn, giờ tan tầm), hệ thống tính hệ số cước k_surge = 1.0 + α * (Demand - Supply) / Capacity. Giá cước tăng nhẹ khuyến khích các tài xế ở khu vực lân cận di chuyển tới điểm nóng, đồng thời sàng lọc những khách hàng có nhu cầu di chuyển thực sự khẩn cấp.", en: "During localized supply-demand shocks (rain, rush hour), the pricing engine computes k_surge = 1.0 + α * (Demand - Supply) / Capacity, incentivizing nearby drivers to reposition towards high-density clusters." },
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
                body: { vi: "Khi một cuốc xe được đẩy tới 10 tài xế gần nhất, nếu 2 tài xế cùng ấn 'Nhận cuốc', ứng dụng gửi lệnh `SET lock:ride:{id} driver_uuid NX PX 5000` lên Redis. Chỉ có tài xế đầu tiên nhận được giá trị TRUE và được ghi nhận cuốc xe; tài xế thứ hai nhận FALSE và được hiển thị thông báo 'Cuốc xe đã có người nhận' trong < 15ms.", en: "When a ride offer broadcasts to 10 nearby drivers, rapid simultaneous taps trigger atomic Redis `SET lock:ride:{id} driver_uuid NX PX 5000`. Only the winning thread acquires the lock; losing contenders receive friendly instant rejection." },
                calloutTitle: { vi: "NGUYÊN TỬ HÓA THAO TÁC", en: "ATOMIC OPERATIONS" },
                calloutText: { vi: "Thời gian chiếm giữ khóa chỉ 5 giây (TTL 5000ms), tự động giải phóng nếu tài xế mất kết nối mạng đột ngột.", en: "Lock acquisition TTL is bounded at 5,000ms, auto-expiring cleanly if connectivity drops abruptly." },
              },
              {
                stepTag: { vi: "BƯỚC 2: WEBSOCKET REALTIME", en: "STEP 2: WEBSOCKET PIPELINE" },
                title: { vi: "Truyền Tin Tọa Độ Thời Gian Thực Qua Socket.io & Redis Pub/Sub", en: "Real-Time Telemetry Streaming via Socket.io & Redis Pub/Sub" },
                lead: { vi: "Tọa độ GPS của tài xế được truyền tải 2 giây/lần với độ trễ phản hồi < 50ms.", en: "Driver GPS beacons streamed every 2 seconds with sub-50ms roundtrip delivery latency." },
                body: { vi: "Vị trí xe được tài xế phát đi định kỳ 2s/lần qua kênh WebSocket nhị phân. Cụm máy chủ Socket.io kết nối với Redis Pub/Sub để phát tán tọa độ trực tiếp tới màn hình bản đồ của khách hàng đặt xe. Bản đồ hiển thị xe di chuyển mượt mà nhờ thuật toán nội suy góc xoay (Bearing Interpolation).", en: "Mobile driver beacons transmit GPS packets every 2s via binary WebSockets. Socket.io clusters leverage Redis Pub/Sub backplanes to fan out live coordinates to riders, rendered smoothly via bearing angle interpolation." },
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
                body: { vi: "Hệ thống hoàn thành chu trình phân bổ cuốc xe trong thời gian trung bình 2.1 giây từ khi khách bấm xác nhận đặt xe. Tỷ lệ xung đột cuốc xe ghi nhận đạt chính xác 0.00% nhờ cơ chế khóa phân tán Redis, tỷ lệ hoàn thành chuyến đi đạt 98.5% và đánh giá chất lượng dịch vụ từ người dùng đạt 4.9/5 sao.", en: "The matching engine executes end-to-end dispatch within an average 2.1 seconds. Distributed Redis locking kept collision rates at 0.00%, securing a 98.5% trip completion rate and 4.9/5 satisfaction rating." },
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
                body: { vi: "Khi quản lý chuỗi 500+ keys trải rộng trên nhiều chi nhánh, các kênh OTA đồng loạt chào bán phòng trống. Vào mùa cao điểm hoặc sự kiện lớn, hai khách hàng trên hai ứng dụng khác nhau cùng ấn nút thanh toán cho 1 phòng duy nhất tại cùng 1 giây. Nếu không có cơ chế giữ chỗ tập trung, hệ thống bán vượt phòng (Overbooking) gây bồi thường thiệt hại và làm giảm uy tín thương hiệu.", en: "Managing 500+ room keys across multi-property chains linked to OTA channels induces acute overbooking risks during holidays. Two guests on different OTAs can initiate simultaneous checkout for the last room. Lacking centralized inventory locking, overbooking triggers brand degradation and costly penalty accommodations." },
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
                body: { vi: "Khi người dùng ấn 'Chọn phòng này', hệ thống mở một giao dịch cơ sở dữ liệu và thực thi `SELECT * FROM room_calendar WHERE room_id = $1 AND date = $2 FOR UPDATE NOWAIT`. Phòng được chuyển sang trạng thái HELD với thời hạn chính xác 15 phút. Nếu trong 15 phút khách hoàn tất thanh toán VNPay/Momo, phòng chuyển thành BOOKED; nếu quá 15 phút không thanh toán, worker định kỳ giải phóng khóa tự động.", en: "When a customer selects a room, a database transaction fires `SELECT * FROM room_calendar WHERE room_id = $1 AND date = $2 FOR UPDATE NOWAIT`. The inventory enters a HELD state for exactly 15 minutes. Successful payment mutates status to BOOKED; expiration triggers automatic lease release." },
                calloutTitle: { vi: "CÔ LẬP GIAO DỊCH ACID", en: "ACID TRANSACTION" },
                calloutText: { vi: "Cấp độ cô lập Serializable loại bỏ 100% hiện tượng ghi đè bóng ma (Phantom Reads).", en: "Serializable transaction isolation eradicates phantom reads and non-repeatable anomalies." },
              },
              {
                stepTag: { vi: "BƯỚC 2: CHUẨN HÓA 3NF", en: "STEP 2: 3NF RELATIONAL SCHEMA" },
                title: { vi: "Chuẩn Hóa 3NF: Phân Tách Phòng, Hạng Phòng & Chính Sách Giá", en: "3NF Relational Schema: Separating Rooms, Room Types & Price Plans" },
                lead: { vi: "Triệt tiêu phụ thuộc bắc cầu giữa thuộc tính chi nhánh, loại phòng và biểu giá ngày lễ.", en: "Eliminating transitive dependencies across branches, room classes, and seasonal rate plans." },
                body: { vi: "Lược đồ cơ sở dữ liệu tách biệt rõ ràng các thực thể: `properties` (Chi nhánh), `room_types` (Hạng phòng Deluxe/Suite), `rooms` (Mã phòng vật lý cụ thể), và `rate_plans` (Bảng giá theo ngày lễ/cuối tuần). Thiết kế này cho phép khách sạn linh hoạt điều chỉnh giá theo mùa mà không làm thay đổi hay sai lệch dữ liệu lịch sử của các hóa đơn đã xuất.", en: "Database schema isolates entities: `properties` (Branches), `room_types` (Deluxe/Suite), `rooms` (Physical keys), and `rate_plans` (Dynamic weekend/holiday pricing). This decoupling allows updating seasonal prices without distorting legacy booked invoice records." },
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
                body: { vi: "Hệ thống quản lý ổn định hơn 500 phòng nghỉ của chuỗi lưu trú, đạt tỷ lệ lấp đầy phòng trung bình 87.4% trong mùa du lịch. Toàn bộ doanh thu tiền phòng, phụ thu dịch vụ giặt là và ăn uống được đối soát tự động với cổng Hóa Đơn Điện Tử (e-Invoice) của Tổng cục Thuế, loại bỏ sai lệch số liệu kế toán và giảm 90% thời gian xuất hóa đơn cuối ngày.", en: "The platform orchestrates 500+ hospitality room keys, sustaining an 87.4% average high-season occupancy rate. Room charges, minibar, and laundry add-ons are reconciled automatically against National Tax Electronic Invoice APIs, slashing billing overhead by 90%." },
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
                body: { vi: "Theo chuẩn Alistair Cockburn (Writing Effective Use Cases), một Use Case sơ sài chỉ có tên và actor là vô giá trị. Đặc tả chuẩn Fully Dressed bắt buộc phải chứa: Mục tiêu mức ngữ cảnh (Goal in Context), Phạm vi (Scope), Tác nhân chính (Primary Actor), Tiền điều kiện (Preconditions), Hậu điều kiện tối thiểu & thành công (Minimal & Success Guarantees), Kịch bản thành công chính (MSS) và toàn bộ các nhánh rẽ ngoại lệ (Extensions 3a, 4a, 4b).", en: "Per Alistair Cockburn's seminal methodology, a bare diagram lacking narrative detail is inadequate. A Fully Dressed Use Case mandates: Goal in Context, Scope, Primary Actor, Preconditions, Minimal/Success Guarantees, Main Success Scenario, and exhaustive branch Extensions." },
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
                body: { vi: "Biểu đồ hoạt động UML 2.5 phân chia thành 4 làn nghiệp vụ (Swimlanes). Dòng điều khiển (Control Flow) và dòng dữ liệu (Data Flow) di chuyển qua các cổng Fork/Join và Decision Nodes. Bằng cách phân làn rõ ràng, các điểm bàn giao trách nhiệm (Handoff Points) được chỉ định cụ thể, loại bỏ triệt để hiện tượng 'cha chung không ai khóc' khi đơn hàng bị nghẽn giữa bưu tá và bưu cục.", en: "UML 2.5 Activity Diagrams partition workflows into 4 horizontal swimlanes. Control tokens traverse Fork/Join concurrency bars and Decision diamonds. Clear boundary partitioning illuminates critical handoff points, eliminating organizational ambiguities." },
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
                body: { vi: "Biểu đồ Sequence UML 2.5 làm sáng tỏ chu kỳ sống (Lifeline) và kích hoạt thực thi (Execution Activation) của từng thành phần. Request tạo đơn từ Client gửi kèm header `X-Idempotency-Key` được Gateway chặn lại; nếu cache hit, trả về 200 OK ngay lập tức; nếu cache miss, Gateway gửi lệnh nguyên tử ghi nhận giao dịch xuống PostgreSQL trong một Transaction duy nhất.", en: "UML 2.5 Sequence Diagrams articulate lifeline lifespans and execution activations. Requests carrying `X-Idempotency-Key` are intercepted at API Gateway; cache hits return 200 OK synchronously, while cache misses acquire Redis locks before persisting atomic Postgres mutations." },
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
                body: { vi: "Theo phương pháp luận Thiết Kế Hướng Miền (Domain-Driven Design), một 'Bưu Kiện' trong Dispatch Context (nơi quan tâm trọng lượng, kích thước) có ý nghĩa và thuộc tính hoàn toàn khác với 'Bưu Kiện' trong Billing Ledger Context (nơi chỉ quan tâm cước phí, thuế VAT và tiền thu hộ). DDD giúp chia nhỏ hệ thống thành 4 miền độc lập, giao tiếp thông qua Domain Events bất đồng bộ.", en: "Per Eric Evans' Domain-Driven Design, a 'Parcel' in Dispatch Context (focusing on volume and weight) differs radically from a 'Parcel' in Billing Context (focusing on freight tariff, VAT, and COD). DDD decouples monoliths into 4 isolated Bounded Contexts communicating via asynchronous Domain Events." },
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
                body: { vi: "Lược đồ dữ liệu được thiết kế đạt Chuẩn 3NF: bảng `orders` chứa thông tin đơn hàng chung, `order_items` chứa chi tiết từng mặt hàng kèm số lượng và đơn giá, `shipments` chứa hành trình giao nhận, `drivers` chứa thông tin bưu tá và `cod_transactions` theo dõi dòng tiền đối soát kép. Toàn bộ quan hệ được ràng buộc chặt chẽ bằng khóa ngoại FOREIGN KEY.", en: "Engineered to strict 3NF: `orders` holds master invoices, `order_items` stores line-item quantities and tariffs, `shipments` tracks transit manifests, `drivers` models courier identities, and `cod_transactions` audits double-entry cashflow. Referential integrity is locked via foreign keys." },
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
                body: { vi: "Thuật toán so sánh cây DOM tổng quát có độ phức tạp O(N³), không thể dùng cho ứng dụng web tương tác cao. React áp dụng thuật toán tối ưu Heuristic O(N) dựa trên 2 giả định: hai phần tử khác loại (type) sẽ sinh ra hai cây khác nhau, và các phần tử con có thể được định danh ổn định bằng thuộc tính `key`. Bộ hòa giải React Fiber cho phép ngắt quãng (interruptible work) và gán độ ưu tiên (Priority Levels) cho các tác vụ cập nhật giao diện.", en: "Arbitrary tree diffing algorithms run in O(N³) complexity, untenable for interactive applications. React adopts heuristic O(N) assumptions: elements with different types produce different trees, and child stability is preserved via unique `key` props. React Fiber breaks rendering into interruptible units of work with granular scheduling priorities." },
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
                body: { vi: "Trong kiến trúc cũ, JavaScript và Native OS giao tiếp qua một Bridge tuần tự hóa chuỗi JSON bất đồng bộ, gây hiện tượng giật khung hình khi người dùng cuộn danh sách đơn hàng dài. Với New Architecture, JSI cho phép JavaScript giữ tham chiếu trực tiếp đến các đối tượng C++ và gọi phương thức đồng bộ (Synchronous Invocation). Kết hợp thư viện WatermelonDB/SQLite, ứng dụng shipper có thể quét mã vạch và ký nhận ngoại tuyến (Offline) ngay cả khi mất sóng hoàn toàn.", en: "Legacy React Native communicates via an asynchronous, serialized JSON bridge causing stutter during heavy list virtualization. The New Architecture leverages JSI to allow direct synchronous invocations between JavaScript and C++ native memory. Paired with local SQLite engines, driver apps record barcode scans and signatures fully offline." },
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
                body: { vi: "Node.js vận hành dựa trên thư viện Libuv C++ với 6 pha rõ rệt: Timers, Pending Callbacks, Idle/Prepare, Poll (I/O), Check (setImmediate), và Close Callbacks. Khi xử lý tệp đối soát COD ngân hàng dung lượng 2GB với hàng triệu dòng, lập trình viên nghiệp dư dùng `fs.readFile` sẽ làm sập máy chủ do tràn bộ nhớ (Out of Memory). Nexus Express sử dụng `stream.pipeline` kết hợp Transform Streams, xử lý dữ liệu theo từng khối (Chunks 64KB), giữ mức tiêu thụ RAM luôn dưới 50MB.", en: "Node.js runs on C++ Libuv orchestrating 6 cyclic phases: Timers, Pending Callbacks, Idle/Prepare, Poll, Check, and Close. Reading a 2GB multi-million-line bank COD reconciliation file via `fs.readFile` inevitably crashes worker heaps. Nexus Express pipes streaming transforms processing 64KB chunks under a strict 50MB RAM ceiling." },
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
                body: { vi: "NestJS mang lại cấu trúc lập trình chuẩn mực cho hệ thống backend quy mô lớn. Nhờ Dependency Injection Container, các Service, Repository và Third-party Adapters hoàn toàn tách rời nhau (Loose Coupling), cho phép viết Unit Tests với Mocking dễ dàng. Dữ liệu đầu vào từ client được kiểm duyệt tự động qua `ValidationPipe` với `class-validator`, bảo đảm 100% request đều chuẩn kiểu dữ liệu trước khi đi vào tầng logic nghiệp vụ.", en: "NestJS provides enterprise-grade architectural discipline. Its Inversion of Control (IoC) container decouples Controllers, Services, and Database Repositories, empowering painless unit testing via dependency mocks. Client payloads are validated at runtime via global ValidationPipes backed by class-validator DTOs." },
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

export const allPortfolioItems: PortfolioItem[] = [
  ...portfolioTreeFolders.flatMap((folder) => flattenPortfolioItems(folder.items)),
  ...profileFolderItems,
];
