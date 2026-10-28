import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import {
  ArrowLeft,
  ArrowUpRight,
  BookOpen,
  BriefcaseBusiness,
  CheckCircle2,
  ChevronDown,
  Code2,
  Database,
  Download,
  ExternalLink,
  FileText,
  Github,
  KeyRound,
  Linkedin,
  Mail,
  MapPin,
  Network,
  Phone,
  ServerCog,
  ShieldCheck,
  Sparkles,
  Table2,
  UserCheck,
  Check,
  ChevronRight,
  Layers,
  Clock,
  Target,
  AlertTriangle,
  GitBranch,
  Cpu,
  Terminal,
  Copy,
  Zap,
  Boxes,
  FileCode,
  RefreshCw,
  Search,
  HelpCircle,
  Activity,
} from "lucide-react";
import "./styles.css";
import { ProjectManagementSection } from "./ProjectManagementSection";

type Language = "vi" | "en";

interface ProjectItem {
  name: string;
  role: string;
  href: string;
  liveUrl?: string;
  liveLabel?: string;
  image: string;
  stack: string[];
  summary: string;
  highlights: string[];
}

interface ProjectGroup {
  title: string;
  description: string;
  projects: ProjectItem[];
}

interface SkillGroup {
  icon: React.ComponentType<{ size?: number; "aria-hidden"?: boolean | "true" | "false" }>;
  title: string;
  items: string[];
  href?: string;
  linkLabel?: string;
}

interface PortfolioLocaleData {
  nav: {
    projects: string;
    pmFramework: string;
    skills: string;
    baKnowledge: string;
    knowledge: string;
    contact: string;
  };
  hero: {
    profileMeta: string;
    eyebrow: string;
    heading: string;
    lede: React.ReactNode;
    actions: {
      explore: string;
      pdfBaVi: string;
      pdfBaViHref: string;
      pdfBaEn: string;
      pdfBaEnHref: string;
      webBaVi: string;
      webBaViHref: string;
      webBaEn: string;
      webBaEnHref: string;
    };
  };
  preview: {
    browserLabel: string;
    panelLabel: string;
    panelTitle: string;
    cards: { top: string; strong: string; bottom: string }[];
    targetLabel: string;
    targetValue: string;
    tags: string[];
  };
  proofSignals: { label: string; value: string }[];
  stats: { label: string; value: string }[];
  about: {
    label: string;
    heading: string;
    p1: React.ReactNode;
    p2: React.ReactNode;
  };
  projectsSection: {
    label: string;
    heading: string;
    subtitle: string;
  };
  projectGroups: ProjectGroup[];
  skillsSection: {
    label: string;
    heading: string;
    groups: SkillGroup[];
  };
  experienceSection: {
    homeNest: {
      label: string;
      title: string;
      meta: string;
      text: React.ReactNode;
    };
    jnt: {
      label: string;
      title: string;
      meta: string;
      text: React.ReactNode;
    };
  };
  contactSection: {
    label: string;
    heading: string;
    subtitle: string;
    pdfBaVi: { label: string; href: string };
    pdfBaEn: { label: string; href: string };
    webBaVi: { label: string; href: string };
    webBaEn: { label: string; href: string };
    location: string;
  };
  footer: {
    caption: string;
  };
}

const portfolioDataVi: PortfolioLocaleData = {
  nav: {
    projects: "Dự án",
    pmFramework: "Quản trị Dự án",
    skills: "Kỹ năng",
    baKnowledge: "Kiến thức BA",
    knowledge: "Sổ tay IT",
    contact: "Liên hệ",
  },
  hero: {
    profileMeta: "TP. Hồ Chí Minh, Việt Nam · Kỹ sư Hệ thống Thông tin (IUH · Sẵn sàng làm việc)",
    eyebrow: "Portfolio & Góc chia sẻ nghề BA",
    heading: "Cầu nối giữa bài toán kinh doanh và giải pháp kỹ thuật",
    lede: (
      <>
        Tốt nghiệp ngành <b>Hệ thống Thông tin (IUH - GPA 3.26/4.0)</b>, mình tập trung phát triển thế mạnh kết hợp giữa <b>Phân tích Nghiệp vụ</b> và <b>Tư duy Kỹ thuật Hệ thống</b>.
        Với 6+ tháng kinh nghiệm Business Analyst (BA) tại <b>HomeNest Software</b> và thời gian cọ xát thực tế tại <b>J&amp;T Express</b>,
        mình thành thạo khảo sát yêu cầu, soạn thảo <b>PRD/SRS</b> rõ ràng cho Dev, vẽ luồng <b>BPMN 2.0</b>, viết <b>User Stories (Given-When-Then)</b>,
        dựng wireframe <b>Figma</b>, và trực tiếp điều phối <b>UAT</b> cho sản phẩm.
      </>
    ),
    actions: {
      explore: "Xem các Case Studies",
      pdfBaVi: "Tải CV BA (PDF Tiếng Việt)",
      pdfBaViHref: "/VoVanTuTai_Business_Analyst_CV_Tieng_Viet.pdf",
      pdfBaEn: "Tải Resume BA (PDF Tiếng Anh)",
      pdfBaEnHref: "/VoVanTuTai_Business_Analyst_CV.pdf",
      webBaVi: "Xem CV BA Tiếng Việt (Web)",
      webBaViHref: "/po-ba-cv-vi.html",
      webBaEn: "Xem Resume BA Tiếng Anh (Web)",
      webBaEnHref: "/cv.html",
    },
  },
  preview: {
    browserLabel: "business-analysis/domain-map",
    panelLabel: "Hồ sơ Năng lực Business Analyst",
    panelTitle: "Nhân sự Business Analyst sẵn sàng hòa nhập dự án Outsource & Product.",
    cards: [
      { top: "Khơi gợi & Đặc tả", strong: "PRD & SRS", bottom: "chuẩn kỹ thuật Dev" },
      { top: "Quy trình", strong: "BPMN 2.0", bottom: "luồng Camunda" },
      { top: "Bàn giao", strong: "UAT & Agile", bottom: "đúng tiến độ Release" },
    ],
    targetLabel: "Vị trí mục tiêu",
    targetValue: "IT Business Analyst (Fresher / Junior)",
    tags: ["Phân tích Nghiệp vụ", "Mô hình hóa Quy trình", "Hệ thống Booking & OMS", "ERP (Odoo)"],
  },
  proofSignals: [
    {
      label: "Đặc tả & Yêu cầu",
      value: "Chuyển hóa bài toán kinh doanh phức tạp thành tài liệu PRD/SRS chi tiết, sơ đồ BPMN 2.0, wireframe Figma và tiêu chí Given-When-Then rõ ràng.",
    },
    {
      label: "Vận hành Sprint & Scope",
      value: "Đảm nhiệm vai trò Business Analyst tại HomeNest; kinh nghiệm bảo vệ Scope Freeze, quản lý backlog Jira và nghiệm thu UAT qua 2+ đợt release.",
    },
    {
      label: "Thực tế Hiện trường",
      value: "Kinh nghiệm điều phối bưu cục tại J&T Express được áp dụng trực tiếp vào tối ưu hóa vòng đời đơn hàng, quy tắc quét mã và chuẩn hóa SOP.",
    },
  ],
  stats: [
    { label: "Vị trí Ứng tuyển", value: "IT Business Analyst (Fresher / Junior)" },
    { label: "Sản phẩm Chuyên môn", value: "PRD/SRS · BPMN · User Stories · UAT" },
    { label: "Kinh nghiệm Thực chiến", value: "HomeNest (Business Analyst) & J&T (Vận hành)" },
    { label: "Học vấn & Đào tạo", value: "Chương trình Kỹ sư HTTT (IUH) · GPA 3.26" },
  ],
  about: {
    label: "Giới thiệu bản thân",
    heading: "Một Business Analyst với tư duy kỹ thuật vững vàng và kinh nghiệm thực tế hiện trường.",
    p1: (
      <>
        Tôi đã hoàn thành chương trình đào tạo Kỹ sư Hệ thống Thông tin tại Trường Đại học Công nghiệp TP.HCM (IUH, GPA 3.26/4.0, tốt nghiệp 2026 và sẵn sàng làm việc Full-time),
        kết hợp kinh nghiệm thực chiến Business Analyst tại <b>HomeNest Software</b> với nền tảng
        giải quyết bài toán vận hành thực địa tại <b>J&amp;T Express</b>.
      </>
    ),
    p2: (
      <>
        Thế mạnh cốt lõi của tôi là làm cầu nối hiệu quả giữa các bên liên quan phi kỹ thuật và đội ngũ kỹ sư phần mềm:
        làm sáng tỏ các yêu cầu mơ hồ thành tài liệu <b>PRD/SRS</b> chuẩn mực, mô hình hóa quy trình xuyên suốt với <b>BPMN 2.0</b>,
        viết User Stories theo tiêu chí <b>Given-When-Then</b> dễ kiểm thử, thiết kế wireframe <b>Figma</b> trực quan,
        đặc tả cấu trúc dữ liệu quan hệ (<b>ERD 3NF</b>) và <b>REST API contracts</b>, cùng điều phối nghiệm thu <b>UAT</b> phân quyền chặt chẽ.
        Với thái độ cầu tiến, kỹ năng giao tiếp khéo léo và khả năng nhận việc ngay lập tức (Full-time), tôi sẵn sàng đóng góp giá trị thiết thực cho cả dự án Product lẫn Outsource.
      </>
    ),
  },
  projectsSection: {
    label: "Dự án & Case Studies Nổi bật",
    heading: "Hệ thống nghiệp vụ được phân tích từ bài toán thực tế đến đặc tả kỹ thuật hoàn chỉnh.",
    subtitle: "Mỗi dự án phản ánh trọn vẹn quy trình giải quyết bài toán nghiệp vụ: sơ đồ luồng quy trình, thiết kế cơ sở dữ liệu, kiểm soát đồng thời (concurrency), hợp đồng API và giao diện hoạt động thực tế.",
  },
  projectGroups: [
    {
      title: "Hệ thống Vận tải & Quản lý Đơn hàng (OMS)",
      description: "Các hệ thống cấp doanh nghiệp chuyển đổi kinh nghiệm vận hành thực tế thành máy trạng thái BPMN 2.0, trạm quét mã kiểm soát và hợp đồng API chuẩn mực.",
      projects: [
        {
          name: "logistics-management-system",
          role: "Nexus Express · Hệ thống Quản lý Logistics & Đơn hàng (OMS)",
          href: "https://github.com/VoVanTuTai/logistics-management-system",
          liveUrl: "https://tracking.nexus-ex.site/",
          liveLabel: "Live Demo",
          image: "/assets/project-nexus.png",
          stack: ["BPMN 2.0 (Camunda)", "OpenAPI 3.0", "ERD 3NF", "PostgreSQL", "NestJS", "RabbitMQ"],
          summary: "Nền tảng logistics toàn diện chuyển hóa kinh nghiệm điều phối bưu cục thực tế thành phân định ranh giới dịch vụ, luồng sự kiện bất đồng bộ và kiểm soát luồng bưu kiện.",
          highlights: [
            "Thách thức Nghiệp vụ: Trạng thái theo dõi đơn hàng không nhất quán giữa các trạm trung chuyển và ranh giới dịch vụ mơ hồ giữa các microservice phân tán.",
            "Phân tích BA & Giải pháp: Chuẩn hóa vòng đời bưu kiện bằng BPMN 2.0 trên Camunda; thiết kế hợp đồng OpenAPI 3.0 với Idempotency Key; xây dựng từ điển dữ liệu 3NF chuẩn hóa.",
            "Kết quả & Bàn giao: Động cơ trạng thái bưu kiện minh bạch, luồng sự kiện bất đồng bộ RabbitMQ, hệ thống live tracking bưu phẩm tại tracking.nexus-ex.site và quy trình xử lý ngoại lệ SOP (chuyển hoàn RTO, hư hỏng, sai tuyến).",
          ],
        },
        {
          name: "cab-booking-system",
          role: "Hệ thống Điều phối Tài xế & Đặt xe Trực tuyến",
          href: "https://github.com/VoVanTuTai/cab-booking-system",
          image: "/assets/project-cab.png",
          stack: ["State Machine", "Event Contracts", "BPMN", "Node.js", "Redis", "Kafka"],
          summary: "Dự án kiến trúc đặt xe phân tán nghiên cứu vòng đời cuốc xe, thuật toán điều phối tài xế - hành khách và quy trình đối soát quyết toán chuyến đi.",
          highlights: [
            "Thách thức Nghiệp vụ: Điều phối tài xế thời gian thực với tải cao, tính toán cước phí nhiều bước và xử lý kết nối mạng chập chờn giữa khách và tài xế.",
            "Phân tích BA & Giải pháp: Thiết kế máy trạng thái cuốc xe, hợp đồng sự kiện bất đồng bộ, quy tắc định giá linh hoạt theo cung cầu và luồng hoàn tác (rollback) khi hủy chuyến.",
            "Kết quả & Bàn giao: Cấu trúc đa dịch vụ Docker Compose kèm cơ chế kiểm tra hợp đồng API, nhật ký sự kiện phân tán và kịch bản kiểm thử nghiệp vụ.",
          ],
        },
      ],
    },
    {
      title: "Nền tảng Quản lý Đặt phòng & Lưu trú Doanh nghiệp",
      description: "Hệ thống thực tế minh chứng cách chuyển hóa yêu cầu nghiệp vụ phức tạp thành luồng xử lý chặt chẽ, kiểm soát đồng thời (race condition) và cổng thông tin phân quyền đa vai trò.",
      projects: [
        {
          name: "tourist-accommodation-management-system",
          role: "Nền tảng Đặt phòng & Quản lý Lưu trú · Hệ thống Đa Phân quyền",
          href: "https://github.com/VoVanTuTai/tourist-accommodation-management-system",
          image: "/assets/project-tourist.png",
          stack: ["BPMN 2.0", "PRD/SRS", "RBAC Matrix", "VNPay IPN", "MySQL", "Express.js"],
          summary: "Nền tảng quản lý lưu trú kiểm soát hiệu quả tranh chấp giữ phòng đồng thời (race condition), lịch phòng theo thời gian thực, chính sách hủy phòng phân tầng và quy trình thanh toán trực tuyến.",
          highlights: [
            "Thách thức Nghiệp vụ: Phòng ngừa rủi ro trùng lịch phòng (overbooking race condition) vào giờ cao điểm, phân quyền độc lập 3 nhóm người dùng (Khách/Chủ nhà/Quản trị) và xử lý sự cố rớt mạng khi thanh toán trực tuyến.",
            "Phân tích BA & Giải pháp: Soạn thảo PRD/SRS với tiêu chí Given-When-Then; thiết kế cơ chế giữ phòng tạm thời (Held/Pending kèm TTL), ma trận phân quyền RBAC nghiêm ngặt, chính sách hủy phạt linh hoạt và hợp đồng Webhook VNPay IPN.",
            "Kết quả & Bàn giao: Cổng thông tin tương tác đa phân quyền hiển thị tình trạng phòng thời gian thực, thanh toán mã QR an toàn, xuất hóa đơn điện tử tự động và bộ kịch bản kiểm thử UAT hoàn chỉnh.",
          ],
        },
        {
          name: "php-online-store",
          role: "Song Tai Shop · Hệ thống Thương mại Điện tử & Bán lẻ Trực tuyến",
          href: "https://github.com/VoVanTuTai/php-online-store",
          image: "/assets/project-songtai.png",
          stack: ["Process Flow", "User Stories", "RBAC Matrix", "MySQL 3NF", "PHP", "Bootstrap"],
          summary: "Hệ thống bán lẻ thương mại điện tử chuẩn hóa danh mục sản phẩm đa cấp, hành trình thanh toán của khách hàng, quản lý đơn hàng phân quyền và nhật ký kiểm toán quản trị viên.",
          highlights: [
            "Thách thức Nghiệp vụ: Phân định ranh giới chặt chẽ giữa luồng người mua và quản trị, bảo toàn tính toàn vẹn khi thanh toán giỏ hàng và theo dõi chuyển đổi trạng thái đơn hàng (Chờ xử lý/Đã thanh toán/Đang giao/Hoàn tất).",
            "Phân tích BA & Giải pháp: Xây dựng đặc tả yêu cầu chức năng (SRS), mô hình hóa hành trình thanh toán người dùng, thiết kế CSDL quan hệ chuẩn hóa 3NF và quy định cơ chế kiểm soát tồn kho cho admin.",
            "Kết quả & Bàn giao: Môi trường Docker hóa hoàn chỉnh kèm dữ liệu mẫu, tài khoản demo kiểm thử và tài liệu quy trình mua hàng khép kín.",
          ],
        },
      ],
    },
  ],
  skillsSection: {
    label: "Kỹ năng Chuyên môn",
    heading: "Năng lực thực thi dựa trên nền tảng phân tích quy trình, dữ liệu và nghiệp vụ thực tế.",
    groups: [
      {
        icon: BriefcaseBusiness,
        title: "Phân tích Nghiệp vụ & Đặc tả",
        items: [
          "Khơi gợi Yêu cầu (Elicitation)",
          "Tài liệu BRD, PRD & SRS",
          "Mô hình hóa Quy trình BPMN 2.0",
          "User Stories (Given-When-Then)",
          "Thiết kế Wireframe (Figma)",
          "Lập kế hoạch & Nghiệm thu UAT",
        ],
        href: "/knowledge/business-analysis",
        linkLabel: "Khám phá kiến thức BA & minh chứng dự án",
      },
      {
        icon: Network,
        title: "Hiểu biết Miền Nghiệp vụ",
        items: [
          "Hệ thống Quản lý Đơn hàng (OMS)",
          "Hệ thống ERP Doanh nghiệp (Odoo: Sales, Purchase, Inventory)",
          "Logistics & Trạm quét theo dõi",
          "Lịch Đặt phòng & Tồn kho Thời gian thực",
          "Cổng Thanh toán Trực tuyến (VNPay IPN)",
          "Ma trận Phân quyền Truy cập (RBAC)",
        ],
      },
      {
        icon: Database,
        title: "Mô hình hóa Dữ liệu & Hệ thống",
        items: [
          "Thiết kế CSDL Quan hệ (ERD 3NF)",
          "Truy vấn SQL (MySQL, PostgreSQL)",
          "Dashboard & Báo cáo Dữ liệu (Power BI)",
          "Sơ đồ Máy trạng thái & Hoạt động",
          "Chuẩn hóa Dữ liệu (Normalization)",
          "Từ điển Dữ liệu & Danh mục Thực thể",
        ],
        href: "/knowledge/database",
        linkLabel: "Tìm hiểu kiến thức mô hình hóa dữ liệu",
      },
      {
        icon: ServerCog,
        title: "Tư duy Kỹ thuật & Tích hợp API",
        items: [
          "Hợp đồng RESTful API (OpenAPI 3.0)",
          "Webhook Bất đồng bộ (IPN)",
          "Nguyên tắc Idempotency & Concurrency",
          "Kiểm thử API với Postman",
          "Kiến trúc Microservices & Events",
        ],
        href: "/knowledge/backend-api",
        linkLabel: "Tìm hiểu kiến thức Backend & REST API",
      },
      {
        icon: Code2,
        title: "Quản Trị Dự Án & Phương Pháp Agile",
        items: [
          "Lập kế hoạch Sprint & Phân rã WBS",
          "Kiểm soát Scope Baseline & Scope Freeze",
          "Quy trình Đánh giá Change Request (CR)",
          "Ma trận Quản trị Rủi ro & Burndown Chart",
          "Nghi thức Scrum & Nghiệm thu UAT",
          "Jira, Confluence, Camunda & Figma",
        ],
      },
    ],
  },
  experienceSection: {
    homeNest: {
      label: "Kinh nghiệm Phân tích Nghiệp vụ",
      title: "HomeNest Software — Business Analyst · Trợ lý PM",
      meta: "03/2026 – 09/2026 · TP. Hồ Chí Minh, Việt Nam",
      text: (
        <>
          Đảm nhiệm vai trò Business Analyst và hỗ trợ điều phối dự án; trực tiếp phân tích nghiệp vụ và điều phối triển khai 2 nền tảng trọng điểm: <b>"Hỗ Trợ Cuộc Sống"</b> (Hệ sinh thái tiện ích: Thợ sửa chữa theo yêu cầu, Chuyến xe ngắn tức thời, Xe ghép, Việc làm &amp; Admin tổng) và <b>"VietPlus"</b> (Nền tảng đăng tin rao vặt mua bán &amp; kết nối chuyến xe ghép cho cộng đồng tại thị trường Hàn Quốc).
          Thiết kế luồng máy trạng thái cho <b>Module Thương lượng giá dịch vụ</b> (trả giá hai chiều giữa khách và thợ/tài xế) cùng <b>cơ chế làm mới GPS theo sự kiện</b> (chỉ refresh khi nhận đơn/hoàn tất) giúp tiết kiệm tối đa chi phí gọi API bản đồ.
          Gia nhập VietPlus giữa chừng, nhanh chóng kiểm soát nghiệp vụ; trực tiếp làm việc với khách hàng xử lý Change Requests về luồng <b>giao nhận, hủy đơn, hoàn hàng</b> và đề xuất giải pháp tinh gọn cho <b>Module Giao hàng Việt - Hàn</b> (Form tiếp nhận nhu cầu) bảo vệ Scope Freeze; soạn thảo biên bản cuộc họp, lập Go-Live Checklist (tư vấn tài khoản App Store / Google Play) và điều phối UAT xuyên suốt 2+ chu kỳ phát hành sản phẩm.
        </>
      ),
    },
    jnt: {
      label: "Kinh nghiệm Vận hành Hiện trường",
      title: "J&T Express — Điều phối viên Quy trình Vận hành (Chính thức)",
      meta: "09/2025 – 02/2026 · TP. Hồ Chí Minh, Việt Nam",
      text: (
        <>
          Điều phối hoạt động logistics bưu cục với sản lượng lớn mỗi ngày. Khéo léo thuyết phục và hướng dẫn đội ngũ nhân viên ca áp dụng quy trình xử lý đơn hàng một chiều khép kín (Nhập kiện &rarr; Cân đo &rarr; Quét mã &rarr; Xuất bưu cục), giải tỏa tình trạng nghẽn hàng và rút ngắn đáng kể thời gian xử lý đơn.
          Biên soạn quy trình thao tác chuẩn (SOP) xử lý ngoại lệ nhằm giảm thiểu tranh cãi giao nhận giữa các ca, đồng thời thiết lập thói quen đối soát dữ liệu thực tế và hệ thống mỗi ngày để bảo đảm tính toàn vẹn và chuẩn xác của dữ liệu bưu gửi.
        </>
      ),
    },
  },
  contactSection: {
    label: "Sẵn sàng Hợp tác",
    heading: "Chào đón cơ hội việc làm vị trí IT Business Analyst (Fresher / Junior) và Associate PM.",
    subtitle: "Sẵn sàng nhận việc toàn thời gian (On-site hoặc Hybrid) ngay lập tức tại TP. Hồ Chí Minh.",
    pdfBaVi: { label: "Tải CV BA Tiếng Việt (PDF)", href: "/VoVanTuTai_Business_Analyst_CV_Tieng_Viet.pdf" },
    pdfBaEn: { label: "Tải Resume BA Tiếng Anh (PDF)", href: "/VoVanTuTai_Business_Analyst_CV.pdf" },
    webBaVi: { label: "Xem CV BA Tiếng Việt (Web)", href: "/po-ba-cv-vi.html" },
    webBaEn: { label: "Xem Resume BA Tiếng Anh (Web)", href: "/cv.html" },
    location: "TP. Hồ Chí Minh, Việt Nam (Sẵn sàng làm việc ngay)",
  },
  footer: {
    caption: "Hệ thống Nghiệp vụ · Phân tích & Phần mềm",
  },
};

const portfolioDataEn: PortfolioLocaleData = {
  nav: {
    projects: "Projects",
    pmFramework: "Project Management",
    skills: "Skills",
    baKnowledge: "BA Knowledge",
    knowledge: "Knowledge",
    contact: "Contact",
  },
  hero: {
    profileMeta: "Ho Chi Minh City, Vietnam · Information Systems Engineer (IUH · Available Full-time)",
    eyebrow: "IT Business Analyst Portfolio",
    heading: "Bridging Business Needs with Engineering Execution",
    lede: (
      <>
        Completed Information Systems Engineering degree requirements from <b>IUH (GPA 3.26/4.0 · Available Full-time)</b> with a dual edge in <b>Business Analysis</b> and <b>Technical Systems Design</b>.
        Equipped with 6+ months of hands-on Business Analyst (BA) experience at <b>HomeNest Software</b> and frontline operational grounding at <b>J&amp;T Express</b>.
        Proven track record in authoring engineering-ready <b>PRD/SRS</b>, modeling <b>BPMN 2.0</b> workflows, crafting testable <b>Given-When-Then</b> User Stories,
        designing <b>Figma wireframes</b>, and coordinating end-to-end <b>UAT</b> across 2+ release cycles.
      </>
    ),
    actions: {
      explore: "Explore Case Studies",
      pdfBaVi: "Download BA Resume - Vietnamese (PDF)",
      pdfBaViHref: "/VoVanTuTai_Business_Analyst_CV_Tieng_Viet.pdf",
      pdfBaEn: "Download BA Resume - English (PDF)",
      pdfBaEnHref: "/VoVanTuTai_Business_Analyst_CV.pdf",
      webBaVi: "View BA Resume - Vietnamese (Web)",
      webBaViHref: "/po-ba-cv-vi.html",
      webBaEn: "View BA Resume - English (Web)",
      webBaEnHref: "/cv.html",
    },
  },
  preview: {
    browserLabel: "business-analysis/domain-map",
    panelLabel: "Business Analyst Competency Profile",
    panelTitle: "Ready-to-deploy Business Analyst for Outsource & Product teams.",
    cards: [
      { top: "Elicit & Spec", strong: "PRD & SRS", bottom: "engineering-ready" },
      { top: "Process", strong: "BPMN 2.0", bottom: "Camunda workflows" },
      { top: "Delivery", strong: "UAT & Agile", bottom: "on-time releases" },
    ],
    targetLabel: "Target Level",
    targetValue: "IT Business Analyst (Fresher / Junior)",
    tags: ["Business Analysis", "Process Modeling", "Booking & OMS Systems", "ERP (Odoo)"],
  },
  proofSignals: [
    {
      label: "Requirements & Specs",
      value: "Translating ambiguous business needs into PRD/SRS documents, BPMN 2.0 workflows, Figma wireframes, and testable Given-When-Then criteria.",
    },
    {
      label: "Sprint & Scope Delivery",
      value: "Directly handled Business Analyst responsibilities at HomeNest; experienced in Scope Freeze defense, Jira backlog grooming, and UAT across 2+ release cycles.",
    },
    {
      label: "Operational Grounding",
      value: "Frontline J&T Express logistics operations applied to shipment lifecycles, scan rules, and SOP standardization.",
    },
  ],
  stats: [
    { label: "Target Role", value: "IT Business Analyst (Fresher / Junior)" },
    { label: "Core Deliverables", value: "PRD/SRS · BPMN · User Stories · UAT" },
    { label: "Proven Experience", value: "HomeNest (Business Analyst) & J&T (Ops)" },
    { label: "Education & Degree", value: "B.Eng. Information Systems (IUH) · GPA 3.26" },
  ],
  about: {
    label: "About Me",
    heading: "A Business Analyst with strong technical literacy and real-world operational grounding.",
    p1: (
      <>
        I have completed the curriculum for the Engineer's Degree / Bachelor of Engineering (B.Eng.) in Information Systems at Industrial University of Ho Chi Minh City (IUH, GPA 3.26/4.0, available immediately for full-time roles),
        combining hands-on Business Analyst experience at <b>HomeNest Software</b> with frontline operational
        problem-solving at <b>J&amp;T Express</b>.
      </>
    ),
    p2: (
      <>
        My core strength is bridging the gap between non-technical stakeholders and engineering teams: clarifying ambiguous
        business needs into structured <b>PRD/SRS</b>, modeling end-to-end workflows with <b>BPMN 2.0</b>, drafting testable <b>Given-When-Then</b> User Stories,
        wireframing with <b>Figma</b>, specifying relational schemas (<b>ERD 3NF</b>) and <b>REST API contracts</b>, and coordinating role-based <b>UAT</b>.
        With a proactive mindset, strong negotiation skills, and immediate availability for full-time work, I am ready to deliver tangible value to both product teams and software outsource projects.
      </>
    ),
  },
  projectsSection: {
    label: "Featured Case Studies & Systems",
    heading: "Business systems analyzed from domain friction to technical specification.",
    subtitle: "Each case demonstrates end-to-end business problem solving: workflow diagrams, relational schemas, concurrency controls, API contracts, and working system interfaces.",
  },
  projectGroups: [
    {
      title: "Logistics & Order Management Systems (OMS)",
      description: "Enterprise systems translating frontline operations into formal BPMN 2.0 state machines, scan checkpoints, and API contracts.",
      projects: [
        {
          name: "logistics-management-system",
          role: "Nexus Express · Logistics & Order Management System (OMS)",
          href: "https://github.com/VoVanTuTai/logistics-management-system",
          liveUrl: "https://tracking.nexus-ex.site/",
          liveLabel: "Live Demo",
          image: "/assets/project-nexus.png",
          stack: ["BPMN 2.0 (Camunda)", "OpenAPI 3.0", "ERD 3NF", "PostgreSQL", "NestJS", "RabbitMQ"],
          summary: "An end-to-end logistics platform turning first-hand branch operations into explicit service ownership, event handoffs, and shipment workflows.",
          highlights: [
            "Business Challenge: Tracking status inconsistencies across multi-party carrier handoffs and ambiguous service boundaries across distributed microservices.",
            "BA Analysis & Solution: Formalized parcel lifecycles using BPMN 2.0 in Camunda; authored OpenAPI 3.0 contracts with Idempotency keys; drafted normalized 3NF relational data dictionary.",
            "Outcome & Deliverables: Live tracking application deployed at tracking.nexus-ex.site, documented traceable parcel state engine, RabbitMQ asynchronous event workflows, and exception handling SOPs.",
          ],
        },
        {
          name: "cab-booking-system",
          role: "Ride-Hailing & Driver Dispatch Management System",
          href: "https://github.com/VoVanTuTai/cab-booking-system",
          image: "/assets/project-cab.png",
          stack: ["State Machine", "Event Contracts", "BPMN", "Node.js", "Redis", "Kafka"],
          summary: "A ride-hailing architecture project examining distributed booking lifecycles, driver-passenger matching rules, and operational settlement workflows.",
          highlights: [
            "Business Challenge: High-concurrency ride dispatching, fare calculation states, and driver-passenger matching under unstable network connections.",
            "BA Analysis & Solution: Formulated ride status state machines, asynchronous event contracts, surge pricing business rules, and compensation/rollback flows.",
            "Outcome & Deliverables: Docker Compose multi-service architecture with contract verification checks, distributed event logs, and operational test scenarios.",
          ],
        },
      ],
    },
    {
      title: "Business Platforms & Reservation Systems",
      description: "Production-grade business systems demonstrating how business requirements become structured workflows, concurrency controls, and role-based portals.",
      projects: [
        {
          name: "tourist-accommodation-management-system",
          role: "Accommodation & Booking Platform · Multi-Role System",
          href: "https://github.com/VoVanTuTai/tourist-accommodation-management-system",
          image: "/assets/project-tourist.png",
          stack: ["BPMN 2.0", "PRD/SRS", "RBAC Matrix", "VNPay IPN", "MySQL", "Express.js"],
          summary: "A multi-role booking platform resolving room overbooking race conditions, dynamic inventory calendars, tiered cancellations, and online payment workflows.",
          highlights: [
            "Business Challenge: Preventing room overbooking race conditions during peak traffic, isolating 3-tier user roles (Guest/Host/Admin), and handling network drops during online payment.",
            "BA Analysis & Solution: Authored PRD/SRS with Given-When-Then criteria; modeled temporary holds (Held/Pending with TTL), strict RBAC permissions, tiered cancellation policies, and VNPay IPN webhook contracts.",
            "Outcome & Deliverables: Interactive multi-role portal featuring real-time room availability, secure QR payments, automated digital invoices, and verified UAT test suite.",
          ],
        },
        {
          name: "php-online-store",
          role: "Song Tai Shop · E-Commerce & Retail Order Management",
          href: "https://github.com/VoVanTuTai/php-online-store",
          image: "/assets/project-songtai.png",
          stack: ["Process Flow", "User Stories", "RBAC Matrix", "MySQL 3NF", "PHP", "Bootstrap"],
          summary: "An e-commerce retail system modeling product catalog hierarchies, customer checkout lifecycles, role-based order management, and administrative audit trails.",
          highlights: [
            "Business Challenge: Customer and admin workflows required strict role separation, secure checkout integrity, and auditable order state transitions (Pending/Paid/Shipped/Completed).",
            "BA Analysis & Solution: Formulated functional requirements (SRS), modeled checkout user journeys, designed normalized relational schema, and defined administrative inventory controls.",
            "Outcome & Deliverables: Complete Dockerized retail environment with seed catalogs, demo test accounts, and end-to-end purchasing workflow documentation.",
          ],
        },
      ],
    },
  ],
  skillsSection: {
    label: "Skills",
    heading: "Implementation skills supported by process, data, and domain analysis.",
    groups: [
      {
        icon: BriefcaseBusiness,
        title: "Business Analysis & Specs",
        items: [
          "Requirements Elicitation",
          "BRD, PRD & SRS Documentation",
          "BPMN 2.0 Process Modeling",
          "User Stories (Given-When-Then)",
          "Wireframing (Figma)",
          "UAT Test Planning & Execution",
        ],
        href: "/knowledge/business-analysis",
        linkLabel: "Explore BA knowledge & project evidence",
      },
      {
        icon: Network,
        title: "Domain Exposure",
        items: [
          "Order Management Systems (OMS)",
          "Enterprise ERP Systems (Odoo: Sales, Purchase, Inventory)",
          "Logistics & Tracking Checkpoints",
          "Reservation & Inventory Calendars",
          "Digital Payments (VNPay IPN)",
          "RBAC Access Control Matrix",
        ],
      },
      {
        icon: Database,
        title: "Data & Systems Modeling",
        items: [
          "Relational Schema Design (ERD 3NF)",
          "SQL Querying (MySQL, PostgreSQL)",
          "Data Dashboards & Reporting (Power BI)",
          "State Machine & Activity Diagrams",
          "Database Normalization",
          "Data Dictionaries & Catalogs",
        ],
        href: "/knowledge/database",
        linkLabel: "Study data modeling fundamentals",
      },
      {
        icon: ServerCog,
        title: "Technical Literacy & APIs",
        items: [
          "RESTful API Contracts (OpenAPI 3.0)",
          "Asynchronous Webhooks (IPN)",
          "Idempotency & Concurrency Rules",
          "Postman API Testing",
          "Microservices & Events Overview",
        ],
        href: "/knowledge/backend-api",
        linkLabel: "Study backend & REST APIs",
      },
      {
        icon: Code2,
        title: "Project Management & Agile Delivery",
        items: [
          "Sprint Planning & WBS Breakdown",
          "Scope Baseline & Scope Freeze Governance",
          "Change Request (CR) Evaluation Protocol",
          "Risk Management Matrix & Burndown Charts",
          "Agile Scrum Rituals & UAT Gatekeeping",
          "Jira, Confluence, Camunda & Figma",
        ],
      },
    ],
  },
  experienceSection: {
    homeNest: {
      label: "Business Analyst Experience",
      title: "HomeNest Software — Business Analyst · PM Assistant",
      meta: "Mar 2026 – Sep 2026 · Ho Chi Minh City, Vietnam",
      text: (
        <>
          Directly handled Business Analyst responsibilities and PM assistance; analyzed requirements and coordinated delivery for 2 key platforms: <b>"Hỗ Trợ Cuộc Sống"</b> (Multi-service ecosystem: On-demand Home Repair, Short-trip Ride-hailing, Carpooling, Job Matching &amp; Admin portal) and <b>"VietPlus"</b> (Classified marketplace &amp; community carpooling platform for the South Korea market).
          Modeled state-driven workflows for the <b>Interactive Price Negotiation module</b> (bid/counter-offer rules) and specified an <b>event-driven GPS refresh mechanism</b> (refreshing coordinates upon pickup/completion instead of continuous polling) to slash third-party map API costs.
          Joined VietPlus mid-stream, rapidly establishing domain control; directly interfaced with clients on Change Requests for marketplace fulfillment, cancellations, returns (hoàn hàng), and innovated a lean inquiry-form MVP for Vietnam–Korea shipping to defend Scope Freeze; authored Meeting Minutes, curated commercial Go-Live checklists (App Store / Google Play accounts), and facilitated client UAT across 2+ release cycles.
        </>
      ),
    },
    jnt: {
      label: "Operations Experience",
      title: "J&T Express — Operations Process Coordinator (Full-time)",
      meta: "Sep 2025 – Feb 2026 · Ho Chi Minh City, Vietnam",
      text: (
        <>
          Coordinated branch logistics handling high-volume daily shipments. Tactfully engaged frontline shift crews to adopt a closed-loop unidirectional
          processing flow (Intake &rarr; Weighing &rarr; Scanning &rarr; Dispatch), relieving sorting bottlenecks and substantially accelerating shipment turnaround times.
          Authored exception SOPs to resolve shift-to-shift disputes, and instituted daily physical-to-digital reconciliation routines to ensure cross-shift supply chain data integrity.
        </>
      ),
    },
  },
  contactSection: {
    label: "Ready to Connect",
    heading: "Open to IT Business Analyst (Fresher / Junior) and Associate PM roles.",
    subtitle: "Available immediately for Full-time on-site or hybrid roles in Ho Chi Minh City.",
    pdfBaVi: { label: "Download BA Resume - Vietnamese (PDF)", href: "/VoVanTuTai_Business_Analyst_CV_Tieng_Viet.pdf" },
    pdfBaEn: { label: "Download BA Resume - English (PDF)", href: "/VoVanTuTai_Business_Analyst_CV.pdf" },
    webBaVi: { label: "View BA Resume - Vietnamese (Web)", href: "/po-ba-cv-vi.html" },
    webBaEn: { label: "View BA Resume - English (Web)", href: "/cv.html" },
    location: "Ho Chi Minh City, Vietnam (Available Immediately)",
  },
  footer: {
    caption: "Business Systems · Software + Analysis",
  },
};

const academicPillars = [
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

const thesesMonographs = [
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

const archSteps = [
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

type NavigateHandler = (event: React.MouseEvent<HTMLAnchorElement>, path: string) => void;

function PortfolioPage({ navigate }: { navigate: NavigateHandler }) {
  const [lang, setLangState] = useState<Language>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("portfolio_lang");
      if (saved === "en" || saved === "vi") return saved;
    }
    return "vi";
  });
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const [activeArchStep, setActiveArchStep] = useState(0);
  const [isCvMenuOpen, setIsCvMenuOpen] = useState(false);
  const cvMenuRef = React.useRef<HTMLDivElement>(null);

  const t = lang === "vi" ? portfolioDataVi : portfolioDataEn;
  const projects = t.projectGroups.flatMap((group) =>
    group.projects.map((project) => ({
      ...project,
      category: group.title,
    })),
  );

  const handleLangChange = (newLang: Language) => {
    setLangState(newLang);
    if (typeof window !== "undefined") {
      localStorage.setItem("portfolio_lang", newLang);
      document.documentElement.lang = newLang;
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      document.documentElement.lang = lang;
    }
  }, [lang]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (cvMenuRef.current && !cvMenuRef.current.contains(event.target as Node)) {
        setIsCvMenuOpen(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsCvMenuOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <main className="site-shell">
      <header className="topbar" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="Vo Van Tu Tai home">
          <div className="brand-avatar-wrap">
            <img className="brand-avatar" src="/assets/avatar.png" alt="" aria-hidden="true" />
            <span className="brand-dot-pulse" title="Available for hire" />
          </div>
          <div className="brand-text">
            <span className="brand-name">Vo Van Tu Tai</span>
            <span className="brand-tag">B.Eng in IS · IT BA & Software Engineer</span>
          </div>
        </a>

        <div className="topbar-right">
          <nav>
            <a href="#projects">{t.nav.projects}</a>
            <a href="#project-management" className="nav-highlight-pm">
              <Sparkles size={13} aria-hidden="true" />
              <span>{t.nav.pmFramework}</span>
            </a>
            <a href="#academic-foundation">
              {lang === "vi" ? "Nền tảng Kỹ sư" : "Foundation"}
            </a>
            <a href="#academic-theses">
              {lang === "vi" ? "Chuyên đề" : "Theses"}
            </a>
            <a href="#skills">{t.nav.skills}</a>
            <a href="#experience">
              {lang === "vi" ? "Kinh nghiệm" : "Experience"}
            </a>
            <a href="#contact">{t.nav.contact}</a>
          </nav>

          {/* TOPBAR LIVE OMS DEMO CTA */}
          <a
            href="https://tracking.nexus-ex.site/"
            target="_blank"
            rel="noreferrer"
            className="topbar-live-cta"
            title="Open Live Tracking Demo: Nexus Express"
          >
            <span className="live-status-dot" />
            <span>Live Demo OMS</span>
            <ExternalLink size={12} />
          </a>

          {/* LUXURY RECRUITER CV BUTTON & DROPDOWN */}
          <div className="topbar-cv-menu-container" ref={cvMenuRef}>
            <button
              type="button"
              className={`topbar-cv-btn${isCvMenuOpen ? " is-active" : ""}`}
              onClick={() => setIsCvMenuOpen((prev) => !prev)}
              aria-expanded={isCvMenuOpen}
              aria-haspopup="true"
            >
              <FileText size={16} aria-hidden="true" />
              <span>{lang === "vi" ? "Tải & Xem CV" : "CV & Resume"}</span>
              <ChevronDown size={14} className={`dropdown-chevron${isCvMenuOpen ? " is-rotated" : ""}`} aria-hidden="true" />
            </button>

            {isCvMenuOpen && (
              <div className="topbar-cv-dropdown" role="menu">
                <div className="dropdown-header">
                  <div className="dropdown-status-dot" />
                  <div>
                    <strong>{lang === "vi" ? "Hồ sơ & CV đính kèm" : "Resumes & Documents"}</strong>
                    <p>{lang === "vi" ? "Chọn bản Tiếng Việt hoặc Tiếng Anh" : "Vietnamese & English versions"}</p>
                  </div>
                </div>

                <div className="dropdown-tracks-list">
                  {/* Track 1: CV BA / PO Tiếng Việt */}
                  <div className="dropdown-track-item">
                    <div className="dropdown-track-header">
                      <div className="item-icon-wrap gold">
                        <FileText size={15} />
                      </div>
                      <div className="dropdown-track-meta">
                        <div className="item-title-row">
                          <strong>{lang === "vi" ? "CV BA / PO (Tiếng Việt)" : "BA / PO Resume (Vietnamese)"}</strong>
                          <span className="item-badge">VI</span>
                        </div>
                        <p>{lang === "vi" ? "Kinh nghiệm thực tế, tài liệu PRD/SRS, quy trình BPMN & UAT" : "Detailed project cases, PRD/SRS specs & BPMN workflows"}</p>
                      </div>
                    </div>
                    <div className="dropdown-track-actions">
                      <a
                        className="dropdown-action-btn primary"
                        href="/VoVanTuTai_Business_Analyst_CV_Tieng_Viet.pdf"
                        download
                        onClick={() => setIsCvMenuOpen(false)}
                      >
                        <Download size={13} />
                        <span>{lang === "vi" ? "Tải PDF" : "Download PDF"}</span>
                      </a>
                      <a
                        className="dropdown-action-btn secondary"
                        href="/po-ba-cv-vi.html"
                        target="_blank"
                        rel="noreferrer"
                        onClick={() => setIsCvMenuOpen(false)}
                      >
                        <ExternalLink size={13} />
                        <span>{lang === "vi" ? "Xem Web" : "View Web"}</span>
                      </a>
                    </div>
                  </div>

                  {/* Track 2: CV BA / PO Tiếng Anh */}
                  <div className="dropdown-track-item">
                    <div className="dropdown-track-header">
                      <div className="item-icon-wrap emerald">
                        <FileText size={15} />
                      </div>
                      <div className="dropdown-track-meta">
                        <div className="item-title-row">
                          <strong>{lang === "vi" ? "CV BA / PO (Tiếng Anh)" : "BA / PO Resume (English)"}</strong>
                          <span className="item-badge-subtle">EN</span>
                        </div>
                        <p>{lang === "vi" ? "Phiên bản tiếng Anh chuẩn quốc tế cho team Product & Outsource" : "Standardized English version for Product & Outsource teams"}</p>
                      </div>
                    </div>
                    <div className="dropdown-track-actions">
                      <a
                        className="dropdown-action-btn primary"
                        href="/VoVanTuTai_Business_Analyst_CV.pdf"
                        download
                        onClick={() => setIsCvMenuOpen(false)}
                      >
                        <Download size={13} />
                        <span>{lang === "vi" ? "Tải PDF" : "Download PDF"}</span>
                      </a>
                      <a
                        className="dropdown-action-btn secondary"
                        href="/cv.html"
                        target="_blank"
                        rel="noreferrer"
                        onClick={() => setIsCvMenuOpen(false)}
                      >
                        <ExternalLink size={13} />
                        <span>{lang === "vi" ? "Xem Web" : "View Web"}</span>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="dropdown-footer">
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
                    <a href="tel:+84869500573" className="dropdown-contact-link">
                      <Phone size={13} />
                      +84 869 500 573
                    </a>
                    <a href="mailto:tutaivovan@gmail.com" className="dropdown-contact-link">
                      <Mail size={13} />
                      tutaivovan@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="lang-switcher" role="group" aria-label="Language selection">
            <button
              type="button"
              className={`lang-btn${lang === "vi" ? " is-active" : ""}`}
              onClick={() => handleLangChange("vi")}
              aria-pressed={lang === "vi"}
              title="Tiếng Việt"
            >
              VIE
            </button>
            <span className="lang-divider" aria-hidden="true">/</span>
            <button
              type="button"
              className={`lang-btn${lang === "en" ? " is-active" : ""}`}
              onClick={() => handleLangChange("en")}
              aria-pressed={lang === "en"}
              title="English"
            >
              ENG
            </button>
          </div>
        </div>
      </header>

      {/* 1. EXECUTIVE HERO SECTION */}
      <section className="hero executive-hero" id="top">
        <div className="hero-copy">
          {/* Academic Status & Availability Pill */}
          <div className="academic-status-pill">
            <span className="badge-pulse-dot" />
            <span className="badge-text">
              {lang === "vi"
                ? "KỸ SƯ HỆ THỐNG THÔNG TIN · IUH (GPA 3.26/4.0 GIỎI) · SẴN SÀNG NHẬN VIỆC"
                : "B.ENG IN INFORMATION SYSTEMS · IUH (GPA 3.26/4.0 DISTINCTION) · AVAILABLE NOW"}
            </span>
          </div>

          <div className="profile-lockup">
            <div className="profile-avatar-wrap">
              <img className="profile-avatar" src="/assets/avatar.png" alt="Vo Van Tu Tai" />
              <span className="avatar-online-dot" title="Available for hire" />
            </div>
            <div className="profile-info-col">
              <div className="profile-name-row">
                <p className="profile-name">Vo Van Tu Tai</p>
                <span className="profile-role-tag highlight">IT Business Analyst</span>
                <span className="profile-role-tag">Information Systems Architect</span>
                <span className="profile-role-tag secondary">Software Engineer</span>
              </div>
              <p className="profile-meta">{t.hero.profileMeta}</p>
            </div>
          </div>

          <p className="eyebrow">{t.hero.eyebrow}</p>
          <h1 className="hero-title">{t.hero.heading}</h1>
          <p className="hero-lede">{t.hero.lede}</p>

          {/* Primary Action Buttons */}
          <div className="hero-action-buttons">
            <a
              href="https://tracking.nexus-ex.site/"
              target="_blank"
              rel="noreferrer"
              className="hero-btn-primary"
              title="Open Live Tracking Demo: Nexus Express"
            >
              <ExternalLink size={15} />
              <span>{lang === "vi" ? "Xem Live Demo: Nexus Express OMS ↗" : "Live Demo: Nexus Express OMS ↗"}</span>
            </a>
            <a
              href={lang === "vi" ? "/VoVanTuTai_Business_Analyst_CV_Tieng_Viet.pdf" : "/VoVanTuTai_Business_Analyst_CV.pdf"}
              download
              className="hero-btn-secondary"
            >
              <Download size={15} />
              <span>{lang === "vi" ? "Tải CV Kỹ sư & BA (PDF)" : "Download ATS CV (PDF)"}</span>
            </a>
            <a
              href="#academic-foundation"
              className="hero-btn-outline"
            >
              <Layers size={15} />
              <span>{lang === "vi" ? "Khám phá Nền tảng Kỹ sư ↓" : "Explore Foundation ↓"}</span>
            </a>
          </div>

          {/* Hero Proof Chips */}
          <div className="hero-proof-chips-row">
            <div className="hero-proof-chip highlight">
              <CheckCircle2 size={18} />
              <div>
                <strong>IUH · GPA 3.26 / 4.0</strong>
                <span>{lang === "vi" ? "Bằng Giỏi / Distinction" : "Distinction Degree"}</span>
              </div>
            </div>
            <div className="hero-proof-chip">
              <BriefcaseBusiness size={18} />
              <div>
                <strong>HomeNest Software</strong>
                <span>{lang === "vi" ? "6+ tháng Business Analyst" : "6+ mos IT BA Experience"}</span>
              </div>
            </div>
            <div className="hero-proof-chip">
              <Boxes size={18} />
              <div>
                <strong>J&amp;T Express</strong>
                <span>{lang === "vi" ? "Điều phối Hiện trường" : "Frontline Logistics Ops"}</span>
              </div>
            </div>
            <div className="hero-proof-chip highlight-green">
              <Sparkles size={18} />
              <div>
                <strong>{lang === "vi" ? "Sẵn sàng nhận việc" : "Available Full-Time"}</strong>
                <span>{lang === "vi" ? "Full-time tại TP.HCM" : "Immediate in HCM City"}</span>
              </div>
            </div>
          </div>
        </div>

        <aside className="hero-visual" aria-label="System architecture & competency preview">
          <div className="architecture-interactive-frame">
            <div className="browser-bar">
              <span />
              <span />
              <span />
              <div className="browser-url-pill">
                <span className="url-protocol">https://</span>
                <span className="url-domain">tracking.nexus-ex.site</span>
                <span className="url-path">/architecture</span>
              </div>
              <div className="dossier-verified-badge">
                <span className="live-status-dot" />
                <span>ONLINE · 99.9%</span>
              </div>
            </div>

            <div className="arch-interactive-body">
              {/* Simulator Header */}
              <div className="arch-hero-banner">
                <div className="arch-banner-left">
                  <span className="arch-sub-tag">ENTERPRISE SYSTEM ARCHITECTURE</span>
                  <h3>Nexus Express — Logistics OMS &amp; Tracking</h3>
                  <p>{lang === "vi" ? "Mô hình xử lý trạng thái đơn hàng & luồng dữ liệu thời gian thực" : "Stateful parcel workflow & real-time telemetry model"}</p>
                </div>
                <div className="arch-live-chip">
                  <span className="pulse-dot" />
                  <span>SLA &lt; 180ms</span>
                </div>
              </div>

              {/* 4 Clickable Interactive Stages */}
              <div className="arch-pipeline-interactive">
                <div className="arch-nodes-row">
                  {archSteps.map((step, idx) => (
                    <button
                      key={step.id}
                      type="button"
                      className={`arch-node-btn${activeArchStep === idx ? " is-active" : ""}`}
                      onClick={() => setActiveArchStep(idx)}
                    >
                      <span className="node-step-badge">{String(idx + 1).padStart(2, "0")}</span>
                      <strong className="node-title">{step.title}</strong>
                      <span className="node-sub">{step.tech}</span>
                    </button>
                  ))}
                </div>

                {/* Inspected Step Active Card */}
                <div className="arch-inspect-card">
                  <div className="inspect-head">
                    <div className="inspect-title-group">
                      <span className="inspect-pill">GIAI ĐOẠN {activeArchStep + 1} / 4</span>
                      <h4>{archSteps[activeArchStep].name}</h4>
                    </div>
                    <span className="inspect-status-badge">{archSteps[activeArchStep].metric}</span>
                  </div>
                  <p className="inspect-desc">{archSteps[activeArchStep].desc[lang]}</p>
                  <div className="inspect-tags">
                    {archSteps[activeArchStep].tags.map((tg) => (
                      <span key={tg}>{tg}</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons inside frame */}
              <div className="arch-footer-actions">
                <a
                  href="https://tracking.nexus-ex.site/"
                  target="_blank"
                  rel="noreferrer"
                  className="arch-btn-live"
                  title="Open Nexus Express Live Tracking"
                >
                  <ExternalLink size={14} />
                  <span>{lang === "vi" ? "Xem Live Tracking Demo (tracking.nexus-ex.site) ↗" : "Open Live Tracking Demo ↗"}</span>
                </a>
                <a
                  href="https://github.com/VoVanTuTai/logistics-management-system"
                  target="_blank"
                  rel="noreferrer"
                  className="arch-btn-code"
                >
                  <Github size={14} />
                  <span>Mã nguồn</span>
                </a>
              </div>
            </div>
          </div>

          <div className="hero-proof-grid">
            {t.proofSignals.map((item) => (
              <div className="proof-tile" key={item.label}>
                <span>{item.label}</span>
                <p>{item.value}</p>
              </div>
            ))}
          </div>

          <div className="panel-links">
            <a href="https://github.com/VoVanTuTai" target="_blank" rel="noreferrer">
              <Github size={18} aria-hidden="true" />
              GitHub
            </a>
            <a href="https://linkedin.com/in/vovantutai" target="_blank" rel="noreferrer">
              <Linkedin size={18} aria-hidden="true" />
              LinkedIn
            </a>
            <a href="mailto:tutaivovan@gmail.com">
              <Mail size={18} aria-hidden="true" />
              Email
            </a>
          </div>
        </aside>
      </section>

      {/* 2. STATS BAND */}
      <section className="stats-band" aria-label="Profile statistics">
        {t.stats.map((stat) => (
          <div className="stat-item" key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </section>

      {/* 3. ABOUT SECTION */}
      <section className="section-grid about-section">
        <div>
          <p className="section-label">{t.about.label}</p>
          <h2>{t.about.heading}</h2>
        </div>
        <div className="section-body">
          <p>{t.about.p1}</p>
          <p>{t.about.p2}</p>
        </div>
      </section>

      {/* 4. ACADEMIC FOUNDATION (4 PILLARS) */}
      <section className="academic-foundation-section" id="academic-foundation">
        <div className="section-heading-centered">
          <span className="academic-badge-pill">
            <Sparkles size={13} />
            {lang === "vi" ? "HỌC THUẬT & NỀN TẢNG KỸ SƯ" : "ACADEMIC & ENGINEERING FOUNDATION"}
          </span>
          <h2>{lang === "vi" ? "4 Trụ Cột Nền Tảng Kỹ Sư Hệ Thống Thông Tin" : "4 Pillars of Information Systems Engineering"}</h2>
          <p>
            {lang === "vi"
              ? "Được đào tạo chính quy tại Đại học Công nghiệp TP.HCM (IUH - GPA 3.26/4.0 Giỏi), kết hợp phương pháp mô hình hóa nghiệp vụ chuẩn quốc tế, kiến trúc dữ liệu quan hệ và kỹ nghệ phần mềm thực nghiệm."
              : "Formally trained in Information Systems Engineering at IUH (GPA 3.26/4.0 Distinction), mastering international domain modeling, relational data architecture, and software engineering discipline."}
          </p>
        </div>

        <div className="academic-pillars-grid">
          {academicPillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <article className="academic-pillar-card" key={pillar.code}>
                <div className="pillar-header">
                  <div className={`pillar-icon-wrap ${pillar.color}`}>
                    <Icon size={22} />
                  </div>
                  <span className="pillar-code">{pillar.code}</span>
                </div>
                <h3>{pillar.title[lang]}</h3>
                <p>{pillar.desc[lang]}</p>
                <div className="pillar-tags">
                  {pillar.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* 5. 3D ANIMATED STACKING PROJECT DECK */}
      <section className="projects-section compact-projects" id="projects">
        <div className="section-heading project-heading">
          <p className="section-label">{t.projectsSection.label}</p>
          <h2>{t.projectsSection.heading}</h2>
          <p>{t.projectsSection.subtitle}</p>
        </div>

        {/* Quick Project Switcher Tabs */}
        <div className="project-deck-switcher" role="tablist" aria-label="Project switcher">
          {projects.map((project, idx) => (
            <button
              key={project.name}
              type="button"
              role="tab"
              aria-selected={idx === activeProjectIndex}
              className={`project-deck-tab${idx === activeProjectIndex ? " is-active" : ""}`}
              onClick={() => setActiveProjectIndex(idx)}
            >
              <span className="tab-num">{String(idx + 1).padStart(2, "0")}</span>
              <span className="tab-name">
                {project.name === "logistics-management-system"
                  ? "Nexus Express (Live OMS)"
                  : project.name === "cab-booking-system"
                  ? "Cab Booking Dispatch"
                  : project.name === "tourist-accommodation-management-system"
                  ? "Tourist Accommodation"
                  : "Song Tai Shop"}
              </span>
              {project.liveUrl && <span className="tab-live-badge">Live Demo</span>}
            </button>
          ))}
        </div>

        <div className="project-deck" aria-label="Selected project deck">
          {projects.map((project, index) => {
            const isActive = index === activeProjectIndex;
            const stackIndex = (index - activeProjectIndex + projects.length) % projects.length - 1;

            return (
              <article
                className={`project-deck-card${isActive ? " is-active" : " is-stacked"}`}
                key={project.name}
                style={{ "--stack-index": Math.max(stackIndex, 0) } as React.CSSProperties}
              >
                {!isActive ? (
                  <button
                    className="deck-card-trigger"
                    type="button"
                    onClick={() => setActiveProjectIndex(index)}
                    aria-label={`Show ${project.name}`}
                  />
                ) : null}

                <div className="deck-card-media">
                  <img src={project.image} alt={`${project.name} interface preview`} />
                  <span className="deck-card-number">{String(index + 1).padStart(2, "0")}</span>
                </div>

                <div className="deck-card-body">
                  <div className="project-card-head">
                    <div>
                      <p className="project-role">{project.category}</p>
                      <h3>{project.name}</h3>
                      <p className="compact-role">{project.role}</p>
                    </div>
                    {isActive ? (
                      <div className="project-card-actions">
                        {project.liveUrl ? (
                          <a
                            className="live-demo-link"
                            href={project.liveUrl}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={`${project.name} Live Demo`}
                            title="Open Live Tracking Demo"
                          >
                            <ExternalLink size={14} aria-hidden="true" />
                            <span>{project.liveLabel || "Live Demo"}</span>
                          </a>
                        ) : null}
                        <a
                          className="icon-link"
                          href={project.href}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`${project.name} GitHub`}
                          title="View on GitHub"
                        >
                          <ArrowUpRight size={20} aria-hidden="true" />
                        </a>
                      </div>
                    ) : null}
                  </div>

                  <div className="deck-card-details" aria-hidden={!isActive}>
                    {project.liveUrl ? (
                      <div className="project-live-preview-bar">
                        <span className="live-status-dot" aria-hidden="true" />
                        <span className="live-status-text">Production Live Tracking:</span>
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="live-status-url"
                        >
                          {project.liveUrl.replace(/^https?:\/\//, "").replace(/\/$/, "")}
                          <ExternalLink size={12} aria-hidden="true" />
                        </a>
                      </div>
                    ) : null}
                    <p className="project-summary">{project.summary}</p>
                    <div className="stack-list">
                      {project.stack.slice(0, 6).map((item) => (
                        <span key={item}>{item}</span>
                      ))}
                      {project.stack.length > 6 ? <span>+{project.stack.length - 6}</span> : null}
                    </div>
                    <div className="project-proof-list">
                      {project.highlights.slice(0, 3).map((highlight) => (
                        <p key={highlight}>{highlight}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* 6. DEDICATED VISUAL PROJECT MANAGEMENT FRAMEWORK & BLUEPRINT */}
      <ProjectManagementSection lang={lang} />

      {/* 7. ACADEMIC RESEARCH THESES & MONOGRAPHS */}
      <section className="academic-theses-section" id="academic-theses">
        <div className="section-heading-centered">
          <span className="academic-badge-pill">
            <BookOpen size={13} />
            {lang === "vi" ? "CHUYÊN ĐỀ HỌC THUẬT & SỔ TAY KỸ SƯ" : "ACADEMIC THESES & TECHNICAL MONOGRAPHS"}
          </span>
          <h2>{lang === "vi" ? "Chuyên Đề Nghiên Cứu & Kiến Thức Chuyên Sâu" : "Specialized Engineering Monographs"}</h2>
          <p>
            {lang === "vi"
              ? "Tổng hợp các chuyên đề kiến thức cốt lõi được xây dựng bài bản, kết hợp lý thuyết học thuật kỹ sư Hệ thống Thông tin với kinh nghiệm giải quyết vấn đề kỹ thuật trong thực tế."
              : "A curated collection of deep-dive monographs synthesizing core computer science & information systems theory with hands-on production engineering practice."}
          </p>
        </div>

        <div className="theses-showcase-grid">
          {thesesMonographs.map((thesis) => (
            <a
              className="thesis-showcase-card"
              key={thesis.path}
              href={thesis.path}
              onClick={(event) => navigate(event, thesis.path)}
            >
              <div className="thesis-badge-row">
                <span className="thesis-num">{thesis.num[lang]}</span>
                <span className="thesis-time">{thesis.time[lang]}</span>
              </div>
              <h3>{thesis.title[lang]}</h3>
              <p>{thesis.desc[lang]}</p>
              <div className="thesis-card-footer">
                <span>{lang === "vi" ? "Khám phá chuyên đề" : "Read Monograph"}</span>
                <ArrowUpRight size={15} />
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* 8. COMPETENCY SKILLS MATRIX */}
      <section className="section-grid" id="skills">
        <div>
          <p className="section-label">{t.skillsSection.label}</p>
          <h2>{t.skillsSection.heading}</h2>
        </div>
        <div className="skill-grid">
          {t.skillsSection.groups.map((group) => {
            const Icon = group.icon;
            const href = group.href;
            const content = (
              <>
                <Icon size={22} aria-hidden="true" />
                <h3>{group.title}</h3>
                <p>{group.items.join(" · ")}</p>
                {group.linkLabel ? (
                  <span className="skill-card-link">
                    {group.linkLabel}
                    <ArrowUpRight size={16} aria-hidden="true" />
                  </span>
                ) : null}
              </>
            );

            return href ? (
              <a
                className={`skill-card skill-card-clickable${group.title === "Phân tích Nghiệp vụ & Đặc tả" || group.title === "Business Analysis & Specs" ? " skill-card-featured" : ""}`}
                href={href}
                key={group.title}
                onClick={(event) => navigate(event, href)}
              >
                {content}
              </a>
            ) : (
              <article className="skill-card" key={group.title}>
                {content}
              </article>
            );
          })}
        </div>
      </section>

      {/* 9. PROFESSIONAL EXPERIENCE */}
      <section className="experience-section" id="experience">
        <div className="experience-card">
          <div className="experience-icon">
            <BriefcaseBusiness size={22} aria-hidden="true" />
          </div>
          <div>
            <p className="section-label">{t.experienceSection.homeNest.label}</p>
            <h2>{t.experienceSection.homeNest.title}</h2>
            <p className="experience-meta">{t.experienceSection.homeNest.meta}</p>
            <p>{t.experienceSection.homeNest.text}</p>
          </div>
        </div>

        <div className="experience-card">
          <div className="experience-icon">
            <BriefcaseBusiness size={22} aria-hidden="true" />
          </div>
          <div>
            <p className="section-label">{t.experienceSection.jnt.label}</p>
            <h2>{t.experienceSection.jnt.title}</h2>
            <p className="experience-meta">{t.experienceSection.jnt.meta}</p>
            <p>{t.experienceSection.jnt.text}</p>
          </div>
        </div>
      </section>

      {/* 10. CONTACT & ATS CV RECRUITER SUITE */}
      <section className="contact-section" id="contact">
        <div>
          <p className="section-label">{t.contactSection.label}</p>
          <h2>{t.contactSection.heading}</h2>
          <p style={{ marginTop: "8px", color: "var(--muted)", fontSize: "14px" }}>
            {t.contactSection.subtitle}
          </p>
        </div>
        <div className="contact-links">
          {/* Quick Contact & Socials Grid */}
          <div className="contact-primary-grid">
            <a href="tel:+84869500573" className="contact-action-item">
              <Phone size={17} aria-hidden="true" />
              <span>+84 869 500 573</span>
            </a>
            <a href="mailto:tutaivovan@gmail.com" className="contact-action-item">
              <Mail size={17} aria-hidden="true" />
              <span>tutaivovan@gmail.com</span>
            </a>
            <a href="https://linkedin.com/in/vovantutai" target="_blank" rel="noreferrer" className="contact-action-item">
              <Linkedin size={17} aria-hidden="true" />
              <span>LinkedIn</span>
            </a>
            <a href="https://github.com/VoVanTuTai" target="_blank" rel="noreferrer" className="contact-action-item">
              <Github size={17} aria-hidden="true" />
              <span>GitHub</span>
            </a>
          </div>

          {/* COMPACT & TIDY CV SECTION AT FOOTER */}
          <div className="footer-cv-box">
            <div className="footer-cv-header">
              <FileText size={15} aria-hidden="true" />
              <strong>{lang === "vi" ? "Hồ sơ & CV đính kèm" : "Resumes & Documents"}</strong>
            </div>

            <div className="footer-cv-grid">
              {/* BA / PO Tiếng Việt */}
              <div className="footer-cv-item">
                <div className="footer-cv-meta">
                  <span className="footer-cv-badge vi">VI</span>
                  <strong>{lang === "vi" ? "CV BA / PO Tiếng Việt" : "Vietnamese BA/PO"}</strong>
                </div>
                <div className="footer-cv-actions">
                  <a href="/VoVanTuTai_Business_Analyst_CV_Tieng_Viet.pdf" download className="footer-btn-dl" title="Tải PDF">
                    <Download size={13} aria-hidden="true" />
                    <span>PDF</span>
                  </a>
                  <a href="/po-ba-cv-vi.html" target="_blank" rel="noreferrer" className="footer-btn-view" title="Xem Web">
                    <ExternalLink size={13} aria-hidden="true" />
                    <span>Web</span>
                  </a>
                </div>
              </div>

              {/* BA / PO Tiếng Anh */}
              <div className="footer-cv-item">
                <div className="footer-cv-meta">
                  <span className="footer-cv-badge en">EN</span>
                  <strong>{lang === "vi" ? "CV BA / PO Tiếng Anh" : "English BA/PO"}</strong>
                </div>
                <div className="footer-cv-actions">
                  <a href="/VoVanTuTai_Business_Analyst_CV.pdf" download className="footer-btn-dl" title="Download PDF">
                    <Download size={13} aria-hidden="true" />
                    <span>PDF</span>
                  </a>
                  <a href="/cv.html" target="_blank" rel="noreferrer" className="footer-btn-view" title="View Web">
                    <ExternalLink size={13} aria-hidden="true" />
                    <span>Web</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <span className="contact-location-tag">
            <MapPin size={16} aria-hidden="true" />
            {t.contactSection.location}
          </span>
        </div>
      </section>

      <footer>
        <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
          <strong>Vo Van Tu Tai — Bachelor of Engineering in Information Systems</strong>
          <span style={{ fontSize: "12px", color: "var(--muted)" }}>
            {lang === "vi"
              ? "Đại học Công nghiệp TP.HCM (IUH) · GPA 3.26/4.0 (Giỏi) · Sẵn sàng làm việc Full-time"
              : "Industrial University of Ho Chi Minh City · GPA 3.26/4.0 (Distinction) · Available Immediately"}
          </span>
        </div>
        <span>
          <Sparkles size={15} aria-hidden="true" />
          {t.footer.caption}
        </span>
      </footer>
    </main>
  );
}

const learningPath = [
  {
    number: "01",
    path: "/knowledge/programming-languages",
    title: "Programming Languages",
    description: "Cách source code được thực thi, hệ kiểu, runtime, paradigm và cách chọn ngôn ngữ.",
    meta: "Nền móng · 40 phút",
  },
  {
    number: "02",
    path: "/knowledge/database",
    title: "Database Fundamentals",
    description: "Database, SQL/NoSQL, cách tổ chức dữ liệu và lựa chọn công nghệ.",
    meta: "Nền tảng · 25 phút",
  },
  {
    number: "03",
    path: "/knowledge/database/data-modeling",
    title: "Data Modeling & ERD",
    description: "Requirement, entity, relationship, relational schema và normalization.",
    meta: "Thực hành · 35 phút",
  },
  {
    number: "04",
    path: "/knowledge/backend-api",
    title: "Backend & REST API",
    description: "Request lifecycle, REST contract, authentication, authorization và testing.",
    meta: "Có hướng dẫn · 3 tiết",
  },
  {
    number: "05",
    path: "/knowledge/business-analysis",
    title: "Business Analysis",
    description: "Nền tảng BA, competency mapping, project evidence và phân tích tình huống nghiệp vụ.",
    meta: "Chuyên đề ứng dụng · 60 phút",
  },
];

function LearningPathNav({
  currentPath,
  navigate,
}: {
  currentPath: string;
  navigate: NavigateHandler;
}) {
  return (
    <nav className="course-progress" aria-label="Learning path">
      <a href="/knowledge" onClick={(event) => navigate(event, "/knowledge")}>
        <BookOpen size={16} aria-hidden="true" />
        Lộ trình
      </a>
      <div>
        {learningPath.map((lesson) => (
          <a
            className={lesson.path === currentPath ? "is-current" : ""}
            href={lesson.path}
            key={lesson.path}
            onClick={(event) => navigate(event, lesson.path)}
            aria-current={lesson.path === currentPath ? "page" : undefined}
          >
            <span>{lesson.number}</span>
            {lesson.title}
          </a>
        ))}
      </div>
    </nav>
  );
}

function KnowledgeHubPage({ navigate }: { navigate: NavigateHandler }) {
  return (
    <main className="site-shell knowledge-shell knowledge-hub">
      <header className="topbar knowledge-topbar" aria-label="Knowledge hub navigation">
        <a className="brand" href="/" onClick={(event) => navigate(event, "/")} aria-label="Back to portfolio">
          <div className="brand-avatar-wrap">
            <img className="brand-avatar" src="/assets/avatar.png" alt="Võ Văn Tú Tài" />
            <span className="brand-dot-pulse" aria-hidden="true" />
          </div>
          <div className="brand-text">
            <span className="brand-name">Võ Văn Tú Tài</span>
            <span className="brand-tag">Knowledge Hub</span>
          </div>
        </a>
        <nav>
          <a href="#learning-path">Lộ trình</a>
          <a href="#study-method">Cách học</a>
          <a href="/" onClick={(event) => navigate(event, "/")}>Portfolio</a>
        </nav>
      </header>

      <section className="hub-hero">
        <div>
          <p className="eyebrow">Knowledge Portfolio</p>
          <h1>Học lại kiến thức qua những gì tôi đã xây dựng</h1>
          <p>
            Một lộ trình có thứ tự, nối từ cách chương trình vận hành đến dữ liệu và backend. Mỗi bài gồm mental
            model, ví dụ từ project, bài tập có đáp án ẩn và câu hỏi phỏng vấn.
          </p>
        </div>
        <aside>
          <span>Tiến trình hiện tại</span>
          <strong>5 bài học</strong>
          <p>Languages → Database → Data Modeling → Backend/API → Business Analysis</p>
        </aside>
      </section>

      <section className="hub-section" id="learning-path">
        <div className="hub-section-heading">
          <p className="section-label">Lộ trình cốt lõi</p>
          <h2>Học theo dependency, không học theo danh sách công nghệ</h2>
        </div>
        <div className="learning-path-grid">
          {learningPath.map((lesson, index) => (
            <a
              href={lesson.path}
              key={lesson.path}
              onClick={(event) => navigate(event, lesson.path)}
            >
              <span className="lesson-number">{lesson.number}</span>
              <div>
                <small>{lesson.meta}</small>
                <h3>{lesson.title}</h3>
                <p>{lesson.description}</p>
              </div>
              <ArrowUpRight size={20} aria-hidden="true" />
              {index < learningPath.length - 1 ? <b aria-hidden="true">→</b> : null}
            </a>
          ))}
        </div>
      </section>

      <section className="hub-section study-method-section" id="study-method">
        <div className="hub-section-heading">
          <p className="section-label">Phương pháp</p>
          <h2>Mỗi bài được học theo bốn bước</h2>
        </div>
        <div className="hub-method-grid">
          <div><span>01</span><strong>Hiểu</strong><p>Nắm vấn đề và mental model trước thuật ngữ.</p></div>
          <div><span>02</span><strong>Quan sát</strong><p>Đọc sơ đồ, code và ví dụ nghiệp vụ.</p></div>
          <div><span>03</span><strong>Thực hành</strong><p>Tự giải bài trước khi mở đáp án.</p></div>
          <div><span>04</span><strong>Trình bày</strong><p>Trả lời thành tiếng như trong phỏng vấn.</p></div>
        </div>
      </section>

      <footer>
        <span>Knowledge Portfolio</span>
        <span><Sparkles size={15} aria-hidden="true" /> Learn from projects</span>
      </footer>
    </main>
  );
}

function ProgrammingLanguagesLessonPage({ navigate }: { navigate: NavigateHandler }) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeCodeLang, setActiveCodeLang] = useState<"typescript" | "java" | "php" | "python" | "go">("typescript");
  const [copiedCode, setCopiedCode] = useState(false);
  const [activeArch, setActiveArch] = useState<"all" | "aot" | "jit" | "v8" | "opcache">("all");
  const [faqCategory, setFaqCategory] = useState<"all" | "runtime" | "memory" | "types" | "concurrency">("all");
  const [faqSearch, setFaqSearch] = useState("");
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [checkedChecklist, setCheckedChecklist] = useState<Record<number, boolean>>({
    0: true,
    1: true,
    2: true,
    3: true,
    4: true,
    5: true,
    6: true,
  });

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress(Math.min(100, Math.max(0, (window.scrollY / totalHeight) * 100)));
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleChecklist = (idx: number) => {
    setCheckedChecklist((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  const checkedCount = Object.values(checkedChecklist).filter(Boolean).length;

  const handleCopyCode = (codeStr: string) => {
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(codeStr);
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2000);
    }
  };

  const codeSnippets: Record<
    "typescript" | "java" | "php" | "python" | "go",
    {
      fileName: string;
      languageLabel: string;
      code: string;
      paradigm: string;
      typeMechanism: string;
      runtimeEngine: string;
      invariants: string;
    }
  > = {
    typescript: {
      fileName: "shipping-calculator.service.ts",
      languageLabel: "TypeScript 5.4 (NestJS)",
      code: `/**
 * Nexus Express OMS - Shipping Fee Engine
 * TypeScript 5.4: Strict Typing, Immutability & Domain Invariants
 */
export interface ShippingCalculationInput {
  readonly weightGrams: number;
  readonly isExpress: boolean;
  readonly codAmountVnd?: number;
}

export interface ShippingCalculationResult {
  readonly baseFeeVnd: number;
  readonly weightSurchargeVnd: number;
  readonly expressSurchargeVnd: number;
  readonly totalFeeVnd: number;
  readonly currency: 'VND';
}

export class ShippingCalculatorService {
  private static readonly BASE_FEE_VND = 15_000;
  private static readonly BASE_WEIGHT_LIMIT_GRAMS = 1_000;
  private static readonly TIER_STEP_GRAMS = 500;
  private static readonly TIER_SURCHARGE_VND = 4_000;
  private static readonly EXPRESS_SURCHARGE_VND = 10_000;

  public static calculate(input: ShippingCalculationInput): ShippingCalculationResult {
    // 1. Boundary & Invariant Guard (Runtime Validation)
    if (!Number.isFinite(input.weightGrams) || input.weightGrams <= 0) {
      throw new RangeError(\`Trọng lượng hàng không hợp lệ: \${input.weightGrams}g (phải > 0)\`);
    }

    // 2. Weight tiering logic (Round up excess grams by step)
    const excessGrams = Math.max(0, input.weightGrams - this.BASE_WEIGHT_LIMIT_GRAMS);
    const extraUnits = Math.ceil(excessGrams / this.TIER_STEP_GRAMS);
    const weightSurchargeVnd = extraUnits * this.TIER_SURCHARGE_VND;

    // 3. Express delivery service surcharge
    const expressSurchargeVnd = input.isExpress ? this.EXPRESS_SURCHARGE_VND : 0;

    // 4. Integer arithmetic: VND has no fractional cents -> avoids floating-point inaccuracy
    const totalFeeVnd = this.BASE_FEE_VND + weightSurchargeVnd + expressSurchargeVnd;

    return Object.freeze({
      baseFeeVnd: this.BASE_FEE_VND,
      weightSurchargeVnd,
      expressSurchargeVnd,
      totalFeeVnd,
      currency: 'VND',
    });
  }
}`,
      paradigm: "Multi-paradigm (OOP / Functional)",
      typeMechanism: "Static Type Checking (Structural Typing / Compile-time erased)",
      runtimeEngine: "Node.js (V8 Engine with Ignition bytecode & TurboFan JIT)",
      invariants: "Bảo toàn số nguyên VND, type guards kiểm tra input bên ngoài, Object.freeze chống mutation.",
    },
    java: {
      fileName: "ShippingCalculator.java",
      languageLabel: "Java 21 LTS (Spring Boot 3)",
      code: `package com.tutai.devflow.logistics.domain;

import java.util.Objects;

/**
 * DevFlow Enterprise - Logistics Pricing Domain
 * Java 21: Records, Immutability & Nominal Type Safety
 */
public final class ShippingCalculator {

    public static final int BASE_FEE_VND = 15_000;
    public static final int BASE_WEIGHT_LIMIT_GRAMS = 1_000;
    public static final double TIER_STEP_GRAMS = 500.0;
    public static final int TIER_SURCHARGE_VND = 4_000;
    public static final int EXPRESS_SURCHARGE_VND = 10_000;

    // Java 21 Compact Constructor in Record: Immutable Value Object
    public record ShippingQuote(
        int baseFeeVnd,
        int weightSurchargeVnd,
        int expressSurchargeVnd,
        int totalFeeVnd,
        String currency
    ) {
        public ShippingQuote {
            if (totalFeeVnd < 0) {
                throw new IllegalStateException("Cước phí không thể là số âm");
            }
        }
    }

    public static ShippingQuote calculate(int weightGrams, boolean isExpress) {
        // 1. Boundary & Invariant validation
        if (weightGrams <= 0) {
            throw new IllegalArgumentException("Khối lượng kiện hàng phải > 0g: " + weightGrams);
        }

        // 2. Extra units calculation with explicit double division for ceil
        int excessGrams = Math.max(0, weightGrams - BASE_WEIGHT_LIMIT_GRAMS);
        int extraUnits = (int) Math.ceil(excessGrams / TIER_STEP_GRAMS);
        int weightSurcharge = extraUnits * TIER_SURCHARGE_VND;

        // 3. Express service fee
        int expressSurcharge = isExpress ? EXPRESS_SURCHARGE_VND : 0;

        // 4. Deterministic integer arithmetic
        int total = BASE_FEE_VND + weightSurcharge + expressSurcharge;

        return new ShippingQuote(BASE_FEE_VND, weightSurcharge, expressSurcharge, total, "VND");
    }
}`,
      paradigm: "Class-based Object-Oriented",
      typeMechanism: "Static Nominal Typing (Enforced at compile-time & checked in Bytecode)",
      runtimeEngine: "JVM HotSpot 21 (C1/C2 JIT Tiered Compilation & ZGC/G1GC)",
      invariants: "Record bất biến, Compact constructor bảo vệ invariant, compile-time exception types.",
    },
    php: {
      fileName: "ShippingCalculator.php",
      languageLabel: "PHP 8.3 (Song Tai Shop MVC)",
      code: `<?php
declare(strict_types=1);

namespace App\\Domain\\Logistics;

use InvalidArgumentException;

/**
 * Song Tai Shop - Logistics Fee Engine
 * PHP 8.3: Readonly Class, Strict Types & Match Expression
 */
final readonly class ShippingQuote
{
    public function __construct(
        public int $baseFeeVnd,
        public int $weightSurchargeVnd,
        public int $expressSurchargeVnd,
        public int $totalFeeVnd,
        public string $currency = 'VND'
    ) {}
}

final class ShippingCalculator
{
    private const int BASE_FEE_VND = 15_000;
    private const int BASE_WEIGHT_GRAMS = 1_000;
    private const float TIER_STEP_GRAMS = 500.0;
    private const int TIER_SURCHARGE_VND = 4_000;
    private const int EXPRESS_SURCHARGE_VND = 10_000;

    public static function calculate(int $weightGrams, bool $isExpress): ShippingQuote
    {
        // 1. Invariant check with strict types active
        if ($weightGrams <= 0) {
            throw new InvalidArgumentException("Khối lượng hàng phải > 0g. Nhận: {$weightGrams}g");
        }

        // 2. Extra weight calculation
        $excessGrams = max(0, $weightGrams - self::BASE_WEIGHT_GRAMS);
        $extraUnits = (int) ceil($excessGrams / self::TIER_STEP_GRAMS);
        $weightSurcharge = $extraUnits * self::TIER_SURCHARGE_VND;

        // 3. Express surcharge via PHP 8 match expression
        $expressSurcharge = match ($isExpress) {
            true => self::EXPRESS_SURCHARGE_VND,
            false => 0,
        };

        $totalFee = self::BASE_FEE_VND + $weightSurcharge + $expressSurcharge;

        return new ShippingQuote(
            baseFeeVnd: self::BASE_FEE_VND,
            weightSurchargeVnd: $weightSurcharge,
            expressSurchargeVnd: $expressSurcharge,
            totalFeeVnd: $totalFee
        );
    }
}`,
      paradigm: "Multi-paradigm (Procedural & Modern OOP)",
      typeMechanism: "Dynamic with Type Declarations (declare(strict_types=1))",
      runtimeEngine: "Zend Engine 8.3 (PHP-FPM Opcode Caching & JIT Compiler)",
      invariants: "Strict types mode, readonly DTO, Shared-Nothing memory lifecycle per HTTP request.",
    },
    python: {
      fileName: "shipping_calculator.py",
      languageLabel: "Python 3.12 (Pydantic / AI Service)",
      code: `from dataclasses import dataclass
import math
from typing import Final

# PEP 8 Compliant Constants
BASE_FEE_VND: Final[int] = 15_000
BASE_WEIGHT_GRAMS: Final[int] = 1_000
TIER_STEP_GRAMS: Final[float] = 500.0
TIER_SURCHARGE_VND: Final[int] = 4_000
EXPRESS_SURCHARGE_VND: Final[int] = 10_000

@dataclass(frozen=True, slots=True)
class ShippingQuote:
    """Immutable quote result with high-performance memory slots."""
    base_fee_vnd: int
    weight_surcharge_vnd: int
    express_surcharge_vnd: int
    total_fee_vnd: int
    currency: str = "VND"

def calculate_shipping_fee(weight_grams: int, is_express: bool) -> ShippingQuote:
    """Calculate deterministic logistics fee avoiding float imprecision."""
    if not isinstance(weight_grams, int) or weight_grams <= 0:
        raise ValueError(f"Khối lượng kiện hàng không hợp lệ: {weight_grams}g (phải là số nguyên > 0)")

    excess_grams = max(0, weight_grams - BASE_WEIGHT_GRAMS)
    extra_units = math.ceil(excess_grams / TIER_STEP_GRAMS)
    weight_surcharge = extra_units * TIER_SURCHARGE_VND

    express_surcharge = EXPRESS_SURCHARGE_VND if is_express else 0
    total_fee = BASE_FEE_VND + weight_surcharge + express_surcharge

    return ShippingQuote(
        base_fee_vnd=BASE_FEE_VND,
        weight_surcharge_vnd=weight_surcharge,
        express_surcharge_vnd=express_surcharge,
        total_fee_vnd=total_fee,
    )`,
      paradigm: "Multi-paradigm (Dynamic, Functional, OOP)",
      typeMechanism: "Dynamic Typing with Type Hints (Mypy static check, slots optimization)",
      runtimeEngine: "CPython 3.12 (Bytecode Interpreter with GIL & Specializing Adaptive Interpreter)",
      invariants: "Frozen dataclass, slots giảm tải bộ nhớ Heap, type annotations hỗ trợ IDE linting.",
    },
    go: {
      fileName: "shipping_calculator.go",
      languageLabel: "Go 1.22 (High-Throughput Gateway)",
      code: `package logistics

import (
	"errors"
	"math"
)

const (
	BaseFeeVND          = 15000
	BaseWeightLimitGram = 1000
	TierStepGram        = 500.0
	TierSurchargeVND    = 4000
	ExpressSurchargeVND = 10000
)

type ShippingQuote struct {
	BaseFeeVND          int    \`json:"base_fee_vnd"\`
	WeightSurchargeVND  int    \`json:"weight_surcharge_vnd"\`
	ExpressSurchargeVND int    \`json:"express_surcharge_vnd"\`
	TotalFeeVND         int    \`json:"total_fee_vnd"\`
	Currency            string \`json:"currency"\`
}

// CalculateFee returns deterministic quote with idiomatic Go explicit error handling
func CalculateFee(weightGrams int, isExpress bool) (ShippingQuote, error) {
	if weightGrams <= 0 {
		return ShippingQuote{}, errors.New("khối lượng kiện hàng phải lớn hơn 0g")
	}

	excessGrams := 0
	if weightGrams > BaseWeightLimitGram {
		excessGrams = weightGrams - BaseWeightLimitGram
	}

	extraUnits := int(math.Ceil(float64(excessGrams) / TierStepGram))
	weightSurcharge := extraUnits * TierSurchargeVND

	expressSurcharge := 0
	if isExpress {
		expressSurcharge = ExpressSurchargeVND
	}

	total := BaseFeeVND + weightSurcharge + expressSurcharge

	return ShippingQuote{
		BaseFeeVND:          BaseFeeVND,
		WeightSurchargeVND:  weightSurcharge,
		ExpressSurchargeVND: expressSurcharge,
		TotalFeeVND:         total,
		Currency:            "VND",
	}, nil
}`,
      paradigm: "Procedural / Structural OOP (No inheritance, composition via interfaces)",
      typeMechanism: "Static Strong Typing (Structural interfaces, zero runtime overhead)",
      runtimeEngine: "Native Machine Code (Direct OS compilation, Goroutines & Go Runtime GC)",
      invariants: "Explicit error return (không có exception ngầm), JSON serialization tags, zero class overhead.",
    },
  };

  const interviewQuestions = [
    {
      category: "runtime",
      categoryLabel: "Runtime & Engine",
      question: "1. JIT (Just-in-Time) Compiler vs AOT (Ahead-of-Time) Compiler: Cơ chế hoạt động và trade-off hiệu năng?",
      answer:
        "AOT Compiler (Go, Rust, C++) biên dịch toàn bộ source code thành mã máy gốc (Native Machine Code) trước khi triển khai: Ưu điểm là khởi động tức thì (Zero warmup), dung lượng bộ nhớ nhỏ, đóng gói binary độc lập. Ngược lại, JIT Compiler (Java JVM HotSpot, V8) biên dịch code thành Bytecode/IR trước, sau đó trong lúc chạy (Runtime) sẽ theo dõi profiling: những hàm được gọi hàng triệu lần ('Hot Spot') sẽ được JIT compile trực tiếp sang mã máy tối ưu hóa cao độ với CPU hiện thời (Inlining, Loop Unrolling). Trade-off của JIT là thời gian Warmup ban đầu và tiêu tốn CPU/RAM cho trình phân tích, nhưng về lâu dài có thể tối ưu hơn AOT nhờ dữ liệu runtime thực tế.",
    },
    {
      category: "runtime",
      categoryLabel: "Runtime & Engine",
      question: "2. V8 Engine thực thi JavaScript/TypeScript như thế nào qua Ignition & TurboFan?",
      answer:
        "Quy trình V8: (1) Parser chuyển source code JavaScript (sau khi TS đã strip types) thành AST (Abstract Syntax Tree); (2) Trình thông dịch Ignition chuyển AST thành Bytecode để bắt đầu thực thi ngay mà không cần đợi compile (giảm thời gian tương tác ban đầu); (3) Profiler theo dõi các hàm chạy thường xuyên; (4) Trình biên dịch tối ưu hóa TurboFan nạp Bytecode cùng Type Feedback từ Ignition để sinh ra High-Performance Machine Code; (5) Deoptimization: Nếu giả định kiểu dữ liệu bị vi phạm (ví dụ một hàm trước đó luôn nhận số nhưng đột nhiên nhận object), TurboFan sẽ hủy mã máy và quay ngược về Bytecode trong Ignition.",
    },
    {
      category: "runtime",
      categoryLabel: "Runtime & Engine",
      question: "3. Quá trình nạp class (Class Loading) và Bytecode Verification của JVM diễn ra ra sao?",
      answer:
        "JVM thực hiện Class Loading theo nguyên tắc Delegation qua 3 tầng ClassLoader: Bootstrap -> Extension/Platform -> Application. Khi một class được nạp, JVM trải qua 3 pha: (1) Loading: Đọc file .class dạng byte stream và tạo đối tượng Class<?> trên Metaspace; (2) Linking: Gồm Verification (kiểm tra tính hợp lệ của format bytecode, đảm bảo không can thiệp trái phép con trỏ hay stack overflow), Preparation (cấp phát bộ nhớ cho static variables) và Resolution (chuyển đổi Symbolic References thành Direct References); (3) Initialization: Thực thi các khối static block và gán giá trị khởi tạo ban đầu cho biến static.",
    },
    {
      category: "memory",
      categoryLabel: "Memory & GC",
      question: "4. Phân biệt Call Stack và Heap: Khi nào một biến/đối tượng được cấp phát trên Stack thay vì Heap?",
      answer:
        "Call Stack quản lý bộ nhớ dạng LIFO theo từng lời gọi hàm: Cấp phát siêu nhanh, lưu trữ các biến cục bộ (primitives) và địa chỉ tham chiếu (references). Bộ nhớ Stack tự động giải phóng ngay khi hàm trả về (return), không cần Garbage Collector can thiệp, nhưng có giới hạn kích thước (dễ bị StackOverflowError khi đệ quy vô hạn). Ngược lại, Heap là vùng nhớ động lưu trữ các Object, Array sống lâu hơn vòng đời một hàm. Cấp phát trên Heap tốn chi phí hơn và cần Garbage Collector thu hồi. Kỹ thuật Escape Analysis trong JVM/Go cho phép compiler nhận diện nếu một Object không bao giờ 'thoát' ra khỏi phạm vi hàm, nó có thể được cấp phát thẳng trên Stack (Scalar Replacement) để triệt tiêu chi phí GC.",
    },
    {
      category: "memory",
      categoryLabel: "Memory & GC",
      question: "5. Garbage Collector hoạt động ra sao? Nguyên lý Generational Hypothesis và 'Stop-the-World'?",
      answer:
        "GC giải phóng bộ nhớ của các object không còn Reachable từ GC Roots (các biến trên Stack, static variables, JNI references). Nguyên lý Generational Hypothesis chỉ ra rằng: 'Hơn 95% object sinh ra sẽ chết rất nhanh ngay sau khi hàm hoàn thành'. Do đó, JVM chia Heap thành Young Generation (Eden + 2 Survivor S0/S1) và Old/Tenured Generation. Minor GC chạy cực nhanh trên Young Gen; chỉ những object sống sót qua nhiều chu kỳ (age threshold) mới được promote lên Old Gen. Hiện tượng 'Stop-the-World' (STW) xảy ra khi GC tạm ngưng toàn bộ Application Threads để cập nhật con trỏ và di dời đối tượng. Các GC hiện đại như G1GC hay ZGC (Java 21) giảm thời gian STW xuống dưới 1 mili-giây thông qua Concurrent Marking và Colored Pointers.",
    },
    {
      category: "memory",
      categoryLabel: "Memory & GC",
      question: "6. Tại sao PHP-FPM theo mô hình Shared-Nothing lại miễn nhiễm với Memory Leak dài hạn của Daemon?",
      answer:
        "Trong các kiến trúc daemon dài hạn (Node.js, Java Spring Boot), một tiến trình phục vụ hàng triệu request. Nếu một lập trình viên vô tình lưu dữ liệu vào biến toàn cục (global cache, unclosed event listener), bộ nhớ Heap sẽ phình to dẫn đến OutOfMemoryError. Ngược lại, PHP-FPM vận hành theo mô hình Shared-Nothing (Không chia sẻ trạng thái giữa các request): Khi request HTTP tới, một worker process tiếp nhận, cấp phát bộ nhớ, thực thi logic, trả response và NGAY LẬP TỨC giải phóng 100% vùng nhớ của request đó (zend_mm memory manager reset). Nhờ vậy, PHP loại bỏ hoàn toàn rủi ro memory leak tích lũy qua thời gian.",
    },
    {
      category: "types",
      categoryLabel: "Hệ Kiểu & Soundness",
      question: "7. Structural Typing (Duck Typing của TypeScript/Go) khác gì Nominal Typing (Java/C#)?",
      answer:
        "Nominal Typing (Java): Hai kiểu dữ liệu CHỈ tương thích nếu chúng có cùng tên hoặc có quan hệ kế thừa tường minh (explicit inheritance). Cho dù Class Dog và Class Cat có cùng thuộc tính name và method bark(), ta không thể gán Dog d = new Cat(). Ngược lại, Structural Typing (TypeScript): Hai kiểu tương thích nếu cấu trúc hình dạng (shape/properties) của chúng tương thích ('Nếu nó bơi như vịt và kêu như vịt, thì nó là vịt'). Nếu interface Order có id và total, bất kỳ object nào có id và total đều hợp lệ. Go cũng áp dụng structural typing cho interface: một struct tự động implement interface nếu có đủ methods mà không cần từ khóa implements.",
    },
    {
      category: "types",
      categoryLabel: "Hệ Kiểu & Soundness",
      question: "8. Type Erasure trong TypeScript và Java: Tại sao Static Typing không thể thay thế Runtime Validation?",
      answer:
        "Cả TypeScript và Java (Generics) đều áp dụng Type Erasure: Khi compile, các type annotation (như interface Order trong TS hoặc List<Order> trong Java) bị xóa bỏ hoàn toàn. JavaScript và Java Bytecode lúc chạy không còn thông tin type strict của generic/interface đó nữa. Do đó, Static Typing chỉ bảo vệ được bên trong ranh giới code của chính lập trình viên (Internal Codebase). Khi dữ liệu đi qua Ranh giới Hệ thống (Network HTTP Request, JSON Body, User Input, Third-party Webhook, Database query), compiler hoàn toàn bất lực. Vì vậy, ứng dụng bắt buộc phải có tầng Runtime Validation (như Zod, class-validator trong TypeScript, hoặc Hibernate Validator @Valid trong Java).",
    },
    {
      category: "types",
      categoryLabel: "Hệ Kiểu & Soundness",
      question: "9. Tại sao không bao giờ được dùng float/double để tính toán tiền tệ trong phần mềm doanh nghiệp?",
      answer:
        "Kiểu float/double tuân theo chuẩn IEEE 754 biểu diễn số thực dưới dạng nhị phân cơ số 2. Một số phân số thập phân quen thuộc như 0.1 hay 0.2 không thể biểu diễn chính xác tuyệt đối trong hệ nhị phân (giống như 1/3 trong hệ thập phân là 0.33333...). Kết quả là 0.1 + 0.2 = 0.30000000000000004. Trong các hệ thống tài chính, e-commerce, logistics (Nexus Express, Song Tai Shop), sai số này tích lũy qua hàng triệu giao dịch sẽ làm lệch sổ sách đối soát kế toán. Giải pháp chuẩn: (1) Lưu trữ tiền tệ dưới dạng số nguyên nhỏ nhất (ví dụ VND luôn lưu số nguyên, USD lưu đơn vị Cents); (2) Sử dụng thư viện số học chính xác cao như BigDecimal trong Java hoặc Decimal trong Python.",
    },
    {
      category: "concurrency",
      categoryLabel: "Concurrency & I/O",
      question: "10. So sánh Concurrency Models: Single-threaded Event Loop (Node.js) vs Virtual Threads (Java 21) vs Multi-process (PHP-FPM)?",
      answer:
        "Node.js (Event Loop): Một thread chính duy nhất xử lý JavaScript, ủy thác tác vụ I/O cho Libuv thread pool của OS. Phù hợp tuyệt vời với I/O-bound (REST API, WebSocket, chat, tracking), nhưng một tác vụ CPU-bound nặng có thể làm nghẽn toàn bộ server. Java 21 (Virtual Threads - Project Loom): Giải quyết nhược điểm của OS Threads truyền thống (vốn ngốn 1-2MB RAM/thread và context switch đắt đỏ). Virtual Threads là các user-mode threads cực nhẹ (vài KB), cho phép tạo hàng triệu threads đồng thời theo phong cách synchronous blocking quen thuộc mà không nghẽn OS thread. PHP-FPM (Process Pool): Mỗi request một tiến trình độc lập, lập trình đơn giản nhất, không sợ race conditions, nhưng tốn nhiều RAM hơn trên mỗi kết nối so với Event Loop.",
    },
  ];

  const filteredFaqs = interviewQuestions.filter((item) => {
    const matchCategory = faqCategory === "all" || item.category === faqCategory;
    const matchSearch =
      faqSearch.trim() === "" ||
      item.question.toLowerCase().includes(faqSearch.toLowerCase()) ||
      item.answer.toLowerCase().includes(faqSearch.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <main className="site-shell knowledge-shell pl-lesson">
      {/* 1. Dynamic Reading Progress Bar */}
      <div className="pl-reading-progress" style={{ width: `${scrollProgress}%` }} aria-hidden="true" />

      {/* 2. Modern Executive Topbar */}
      <header className="topbar knowledge-topbar pl-topbar" aria-label="Programming languages lesson navigation">
        <div className="pl-topbar-left">
          <a
            className="brand"
            href="/knowledge"
            onClick={(event) => navigate(event, "/knowledge")}
            aria-label="Về Knowledge Hub"
          >
            <div className="brand-avatar-wrap">
              <img className="brand-avatar" src="/assets/avatar.png" alt="Võ Văn Tú Tài" />
              <span className="brand-dot-pulse" aria-hidden="true" />
            </div>
            <div className="brand-info">
              <span className="brand-name">Võ Văn Tú Tài</span>
              <span className="brand-role-tag">Software Engineer · B.Eng in IS IUH</span>
            </div>
          </a>
          <a
            className="pl-back-home-btn"
            href="/"
            onClick={(event) => navigate(event, "/")}
          >
            <ArrowLeft size={14} aria-hidden="true" />
            <span>Trang chủ</span>
          </a>
        </div>

        <nav className="pl-topbar-nav" aria-label="Nội dung chuyên đề">
          <a href="#mental-model">01. Mental Model</a>
          <a href="#execution-pipeline">02. Execution Pipeline</a>
          <a href="#type-system">03. Hệ Kiểu &amp; Soundness</a>
          <a href="#memory-concurrency">04. Memory &amp; Concurrency</a>
          <a href="#code-comparison">05. Code Lab So Sánh</a>
          <a href="#language-selection">06. Decision Matrix &amp; Dự Án</a>
          <a href="#interview-questions">07. Phỏng Vấn Chuyên Sâu</a>
          <a href="#checklist">08. Checklist Kỹ Sư</a>
        </nav>

        <div className="pl-topbar-actions">
          <a
            href="https://tracking.nexus-ex.site/"
            target="_blank"
            rel="noreferrer"
            className="pl-cta-live"
            title="Xem hệ thống Nexus Express OMS đang chạy Live"
          >
            <ExternalLink size={14} aria-hidden="true" />
            <span>Live Demo OMS</span>
          </a>
          <a
            href="https://github.com/VoVanTuTai/logistics-management-system"
            target="_blank"
            rel="noreferrer"
            className="pl-cta-cv"
            title="Xem mã nguồn dự án Nexus Express trên GitHub"
          >
            <Github size={14} aria-hidden="true" />
            <span>GitHub Source</span>
          </a>
        </div>
      </header>

      {/* Global Learning Path Stepper */}
      <LearningPathNav currentPath="/knowledge/programming-languages" navigate={navigate} />

      {/* 3. High-Impact Hero Section */}
      <section className="knowledge-hero pl-hero">
        <div className="pl-hero-main">
          <div className="pl-breadcrumbs">
            <a href="/" onClick={(e) => navigate(e, "/")}>Portfolio</a>
            <ChevronRight size={13} aria-hidden="true" />
            <a href="/knowledge" onClick={(e) => navigate(e, "/knowledge")}>Knowledge Hub</a>
            <ChevronRight size={13} aria-hidden="true" />
            <span>Chuyên đề 01: Programming Languages &amp; Runtime Architecture</span>
          </div>

          <div className="pl-hero-badge-wrap">
            <span className="pl-hero-badge">
              <Sparkles size={14} aria-hidden="true" />
              CHUYÊN ĐỀ 01 · PROGRAMMING LANGUAGES, COMPILERS &amp; RUNTIME ARCHITECTURE
            </span>
          </div>

          <h1>Bản Chất Ngôn Ngữ Lập Trình &amp; Kiến Trúc Runtime: Từ Source Code Đến CPU Thực Thi</h1>

          <p className="knowledge-lede">
            Lý giải cội rễ cách máy tính hiểu code: Phân tích cú pháp (Lexing, AST), Cơ chế biên dịch (JIT Compiler vs AOT),
            Quản lý bộ nhớ (Call Stack, Heap, Garbage Collection), Độ an toàn hệ kiểu (Nominal vs Structural Typing),
            và Mô hình đa nhiệm (Event Loop vs Virtual Threads). Trực tiếp liên hệ qua 3 dự án production:{" "}
            <strong>Nexus Express</strong> (TypeScript/NestJS), <strong>DevFlow</strong> (Java 21/Spring Boot) và{" "}
            <strong>Song Tai Shop</strong> (PHP 8.3/MySQL).
          </p>

          <div className="pl-proof-chips" aria-label="Bằng chứng năng lực cốt lõi">
            <span className="pl-proof-chip">
              <CheckCircle2 size={15} aria-hidden="true" />
              <strong>B.Eng in Information Systems</strong> (IUH · GPA 3.26/4.0 Giỏi)
            </span>
            <span className="pl-proof-chip">
              <Code2 size={15} aria-hidden="true" />
              <strong>TypeScript &amp; NestJS</strong> (Nexus Express OMS)
            </span>
            <span className="pl-proof-chip">
              <Cpu size={15} aria-hidden="true" />
              <strong>Java 21 &amp; Spring Boot 3</strong> (DevFlow Enterprise)
            </span>
            <span className="pl-proof-chip">
              <ServerCog size={15} aria-hidden="true" />
              <strong>PHP 8.3 &amp; Modern MVC</strong> (Song Tai Shop)
            </span>
            <span className="pl-proof-chip highlight">
              <Clock size={15} aria-hidden="true" />
              <strong>Sẵn sàng làm việc Full-time ngay lập tức</strong>
            </span>
          </div>
        </div>

        <aside className="pl-hero-card">
          <div className="pl-hero-card-header">
            <Target size={18} aria-hidden="true" />
            <h3>Trọng Tâm Kiến Thức Kỹ Sư</h3>
          </div>
          <ul className="pl-hero-card-list">
            <li>
              <CheckCircle2 size={17} aria-hidden="true" />
              <div>
                <strong>Execution Pipeline &amp; JIT</strong>
                <p>Từ Source ➔ AST ➔ Bytecode/IR ➔ JIT Compiler ➔ Native Machine Code.</p>
              </div>
            </li>
            <li>
              <CheckCircle2 size={17} aria-hidden="true" />
              <div>
                <strong>Memory Model &amp; GC</strong>
                <p>Quản lý Stack vs Heap, Generational GC (G1/ZGC) và Shared-Nothing isolation.</p>
              </div>
            </li>
            <li>
              <CheckCircle2 size={17} aria-hidden="true" />
              <div>
                <strong>Type Soundness &amp; Boundary</strong>
                <p>Nominal vs Structural typing; tại sao compile-time types không thay thế runtime validation.</p>
              </div>
            </li>
            <li>
              <CheckCircle2 size={17} aria-hidden="true" />
              <div>
                <strong>1 Domain Rule · 5 Ngôn Ngữ</strong>
                <p>Thực chứng nghiệp vụ tính cước vận chuyển Logistics trên TS, Java, PHP, Python và Go.</p>
              </div>
            </li>
          </ul>
        </aside>
      </section>

      {/* 4. Main Content Layout with Sticky Sidebar */}
      <div className="lesson-layout pl-layout-container">
        <aside className="lesson-toc pl-sticky-toc" aria-label="Mục lục chuyên đề">
          <div className="pl-toc-header">
            <BookOpen size={16} aria-hidden="true" />
            <span>Nội dung Chuyên đề</span>
          </div>
          <div className="pl-toc-links">
            <a href="#mental-model">
              <span className="pl-toc-num">01</span>
              <span>Mental Model &amp; 4 Trụ Cột</span>
            </a>
            <a href="#execution-pipeline">
              <span className="pl-toc-num">02</span>
              <span>Execution Pipeline &amp; JIT</span>
            </a>
            <a href="#type-system">
              <span className="pl-toc-num">03</span>
              <span>Hệ Kiểu &amp; Type Soundness</span>
            </a>
            <a href="#memory-concurrency">
              <span className="pl-toc-num">04</span>
              <span>Memory, GC &amp; Concurrency</span>
            </a>
            <a href="#code-comparison">
              <span className="pl-toc-num">05</span>
              <span>Code Lab So Sánh 5 Ngôn Ngữ</span>
            </a>
            <a href="#language-selection">
              <span className="pl-toc-num">06</span>
              <span>Decision Matrix &amp; Dự Án</span>
            </a>
            <a href="#interview-questions">
              <span className="pl-toc-num">07</span>
              <span>Phỏng Vấn Kỹ Sư (10 Câu)</span>
            </a>
            <a href="#checklist">
              <span className="pl-toc-num">08</span>
              <span>Checklist &amp; Tài Liệu Gốc</span>
            </a>
          </div>

          <div className="pl-toc-cta-box">
            <div className="pl-toc-cta-badge">Nexus Express OMS</div>
            <h4>Hệ Thống Thực Tế</h4>
            <p>Khám phá cách TypeScript &amp; NestJS được áp dụng trong hệ thống Logistics thực chiến.</p>
            <div className="pl-toc-cta-buttons">
              <a
                href="https://tracking.nexus-ex.site/"
                target="_blank"
                rel="noreferrer"
                className="pl-toc-btn-primary"
              >
                <ExternalLink size={13} aria-hidden="true" />
                <span>Trải Nghiệm Live Demo</span>
              </a>
              <a
                href="https://github.com/VoVanTuTai/logistics-management-system"
                target="_blank"
                rel="noreferrer"
                className="pl-toc-btn-secondary"
              >
                <Github size={13} aria-hidden="true" />
                <span>Kho Mã Nguồn</span>
              </a>
            </div>
          </div>
        </aside>

        <article className="lesson-content pl-article-content">
          {/* SECTION 01: MENTAL MODEL */}
          <section className="lesson-section pl-card-section" id="mental-model">
            <div className="pl-section-badge">
              <Sparkles size={13} aria-hidden="true" />
              <span>Phần 01 · Mental Model</span>
            </div>
            <h2>Ngôn Ngữ Lập Trình Là Giao Ước Giữa Kỹ Sư Và Môi Trường Thực Thi</h2>
            <p className="pl-section-intro">
              Một sai lầm phổ biến của lập trình viên mới là xem việc học ngôn ngữ chỉ là “nhớ từ khóa và cú pháp”.
              Trong kỹ nghệ phần mềm chuyên nghiệp, ngôn ngữ lập trình là một hệ thống ký hiệu có quy tắc chặt chẽ
              được thiết kế để con người diễn đạt giải thuật, và máy tính có thể phân rã thành các chuỗi chỉ thị CPU
              với hành vi hoàn toàn có thể dự đoán được (Deterministic Behavior).
            </p>

            <div className="pl-pillar-grid">
              <div className="pl-pillar-card">
                <div className="pl-pillar-icon">
                  <Code2 size={20} aria-hidden="true" />
                </div>
                <strong>1. Syntax &amp; Grammar</strong>
                <p>
                  Tập hợp quy tắc ngữ pháp (EBNF/BNF): từ khóa, cấu trúc token, dấu ngoặc. Cú pháp quyết định đoạn code
                  có “hợp lệ về mặt văn bản” để Parser tiếp nhận hay không.
                </p>
              </div>

              <div className="pl-pillar-card">
                <div className="pl-pillar-icon">
                  <Network size={20} aria-hidden="true" />
                </div>
                <strong>2. Semantics</strong>
                <p>
                  Ý nghĩa và hành vi thực sự khi đoạn code chạy: Giá trị được gán thế nào, scope tìm kiếm biến ra sao,
                  hàm truyền tham trị hay tham chiếu, và exception lan truyền như thế nào.
                </p>
              </div>

              <div className="pl-pillar-card">
                <div className="pl-pillar-icon">
                  <Cpu size={20} aria-hidden="true" />
                </div>
                <strong>3. Runtime Environment</strong>
                <p>
                  Cỗ máy sống cấp phát bộ nhớ, quản lý Call Stack, Heap, Garbage Collector, luồng OS (Threads), Event Loop
                  và giao tiếp với kernel hệ điều hành qua System Calls.
                </p>
              </div>

              <div className="pl-pillar-card">
                <div className="pl-pillar-icon">
                  <BriefcaseBusiness size={20} aria-hidden="true" />
                </div>
                <strong>4. Ecosystem &amp; Tooling</strong>
                <p>
                  Hệ sinh thái quyết định năng suất: Package Manager (npm, Maven, Composer), Linter, Type Checker,
                  Profiler, Testing Frameworks và cộng đồng hỗ trợ bảo mật.
                </p>
              </div>
            </div>

            <div className="pl-callout-box">
              <div className="pl-callout-icon">
                <ShieldCheck size={22} aria-hidden="true" />
              </div>
              <div className="pl-callout-body">
                <strong>Quy Luật Kiến Trúc Cần Khắc Cốt Ghi Tâm:</strong>
                <p>
                  CPU không bao giờ trực tiếp hiểu source code PHP, TypeScript hay Java. Ở giữa bàn phím của bạn và
                  thanh ghi CPU luôn tồn tại một chuỗi công cụ chuyển đổi (Transformation Pipeline): Lexer ➔ Parser ➔ AST
                  ➔ Bytecode/IR ➔ JIT/AOT Compiler ➔ Native Machine Code. Khi gặp lỗi, kỹ sư giỏi luôn biết lỗi đó thuộc
                  về bước nào trong pipeline thay vì thử sai một cách mù quáng.
                </p>
              </div>
            </div>
          </section>

          {/* SECTION 02: EXECUTION PIPELINE */}
          <section className="lesson-section pl-card-section" id="execution-pipeline">
            <div className="pl-section-badge">
              <Zap size={13} aria-hidden="true" />
              <span>Phần 02 · Execution Pipeline</span>
            </div>
            <h2>Hành Trình Chuyển Hóa: Từ Ký Tự Text Đến Thanh Ghi CPU</h2>
            <p className="pl-section-intro">
              Dù mỗi ngôn ngữ có thiết kế khác nhau, pipeline tổng quát dưới đây là nền tảng cốt lõi giải thích vì sao
              cùng một đoạn code lại có tốc độ thực thi, mức tiêu thụ RAM và thời gian khởi động khác nhau hoàn toàn.
            </p>

            {/* Step Flow Pipeline */}
            <div className="pl-pipeline-wrap" aria-label="Programming language execution pipeline flow">
              <div className="pl-pipeline-flow">
                <div className="pl-pipe-step">
                  <span className="pl-pipe-step-num">Bước 01</span>
                  <h4>Source Code</h4>
                  <p>Chuỗi ký tự ASCII/UTF-8 trong file (.ts, .java, .php, .go) do kỹ sư viết.</p>
                  <span className="pl-pipe-tag">Plain Text</span>
                </div>

                <div className="pl-pipe-arrow" aria-hidden="true">➔</div>

                <div className="pl-pipe-step">
                  <span className="pl-pipe-step-num">Bước 02</span>
                  <h4>Lex &amp; Parse</h4>
                  <p>Tokenizer chia từ tố, Parser dựng Cây cú pháp trừu tượng (Abstract Syntax Tree - AST).</p>
                  <span className="pl-pipe-tag">Grammar Tree</span>
                </div>

                <div className="pl-pipe-arrow" aria-hidden="true">➔</div>

                <div className="pl-pipe-step">
                  <span className="pl-pipe-step-num">Bước 03</span>
                  <h4>Intermediate Rep (IR)</h4>
                  <p>Chuyển AST thành dạng trung gian: Java Bytecode, Zend Opcodes, LLVM IR, hoặc JS output.</p>
                  <span className="pl-pipe-tag">Bytecode / IR</span>
                </div>

                <div className="pl-pipe-arrow" aria-hidden="true">➔</div>

                <div className="pl-pipe-step">
                  <span className="pl-pipe-step-num">Bước 04</span>
                  <h4>Runtime &amp; JIT</h4>
                  <p>JVM HotSpot, V8 Engine hoặc Zend Engine quản lý nạp code, bộ nhớ và JIT optimize.</p>
                  <span className="pl-pipe-tag">Engine VM</span>
                </div>

                <div className="pl-pipe-arrow" aria-hidden="true">➔</div>

                <div className="pl-pipe-step">
                  <span className="pl-pipe-step-num">Bước 05</span>
                  <h4>Native CPU Execution</h4>
                  <p>Mã nhị phân máy tính (x86_64 / ARM64) chạy trực tiếp trên các thanh ghi và cache L1/L2/L3.</p>
                  <span className="pl-pipe-tag">Machine Code</span>
                </div>
              </div>
            </div>

            {/* Architecture Comparison Cards */}
            <div className="pl-arch-matrix">
              <article className="pl-arch-card">
                <div className="pl-arch-card-header">
                  <h3>1. Ahead-of-Time (AOT) Compiled</h3>
                  <span className="pl-arch-badge aot">Go · Rust · C++</span>
                </div>
                <p>
                  Biên dịch toàn bộ source code thành file nhị phân máy (Native Binary) trước khi chạy. Không cần máy ảo (VM)
                  nặng nề, khởi động cực nhanh và chiếm rất ít RAM.
                </p>
                <div className="pl-arch-meta">
                  <div className="pl-arch-meta-row">
                    <span>Ưu thế:</span>
                    <span>Zero Warmup, deploy 1 file binary duy nhất, hiệu năng raw tối đa.</span>
                  </div>
                  <div className="pl-arch-meta-row">
                    <span>Đánh đổi:</span>
                    <span>Thời gian compile lâu, phụ thuộc kiến trúc CPU đích (phải cross-compile).</span>
                  </div>
                </div>
              </article>

              <article className="pl-arch-card">
                <div className="pl-arch-card-header">
                  <h3>2. Bytecode + Tiered JIT</h3>
                  <span className="pl-arch-badge jit">Java (JVM) · C# (.NET)</span>
                </div>
                <p>
                  Source code được biên dịch trước thành Bytecode (.class). Tại runtime, JVM dùng Interpreter chạy trước,
                  rồi JIT Compiler (C1 Client / C2 Server) tự động biên dịch các đoạn code 'nóng' thành mã máy tối ưu hóa.
                </p>
                <div className="pl-arch-meta">
                  <div className="pl-arch-meta-row">
                    <span>Ưu thế:</span>
                    <span>Write Once, Run Anywhere; profiling thời gian thực tối ưu cực sâu.</span>
                  </div>
                  <div className="pl-arch-meta-row">
                    <span>Đánh đổi:</span>
                    <span>Cần thời gian warmup ban đầu, JVM tiêu tốn footprint RAM lớn hơn AOT.</span>
                  </div>
                </div>
              </article>

              <article className="pl-arch-card">
                <div className="pl-arch-card-header">
                  <h3>3. Transpiled + V8 JIT Engine</h3>
                  <span className="pl-arch-badge v8">TypeScript ➔ JavaScript</span>
                </div>
                <p>
                  TypeScript không chạy trực tiếp trên CPU. Trình biên dịch `tsc` xác minh kiểu dữ liệu, loại bỏ toàn bộ type
                  annotation (Type Erasure) và sinh ra JavaScript. V8 Engine (Node.js/Chrome) tiếp nhận JS qua Ignition &amp; TurboFan.
                </p>
                <div className="pl-arch-meta">
                  <div className="pl-arch-meta-row">
                    <span>Ưu thế:</span>
                    <span>Bảo vệ type lúc dev, chia sẻ models giữa Frontend và Backend (Nexus Express).</span>
                  </div>
                  <div className="pl-arch-meta-row">
                    <span>Đánh đổi:</span>
                    <span>Runtime không còn type; bắt buộc phải có validation layer ở boundary.</span>
                  </div>
                </div>
              </article>

              <article className="pl-arch-card">
                <div className="pl-arch-card-header">
                  <h3>4. Interpreted + Opcode Cache</h3>
                  <span className="pl-arch-badge opcache">PHP 8.3 (Zend Engine)</span>
                </div>
                <p>
                  Zend Engine dịch file PHP thành Opcodes. Với OPcache bật sẵn trong PHP-FPM, opcodes được lưu trên Shared Memory,
                  loại bỏ việc parse lại code trên mỗi request. PHP 8 bổ sung JIT cho các tác vụ tính toán chuyên sâu.
                </p>
                <div className="pl-arch-meta">
                  <div className="pl-arch-meta-row">
                    <span>Ưu thế:</span>
                    <span>Shared-Nothing: giải phóng 100% RAM sau request, không sợ memory leak dài hạn.</span>
                  </div>
                  <div className="pl-arch-meta-row">
                    <span>Đánh đổi:</span>
                    <span>Mỗi request phải khởi tạo lại context cơ bản nếu không dùng persistent pool.</span>
                  </div>
                </div>
              </article>
            </div>
          </section>

          {/* SECTION 03: TYPE SYSTEM */}
          <section className="lesson-section pl-card-section" id="type-system">
            <div className="pl-section-badge">
              <ShieldCheck size={13} aria-hidden="true" />
              <span>Phần 03 · Type System &amp; Soundness</span>
            </div>
            <h2>Hệ Kiểu: Ràng Buộc Hợp Lệ Của Phép Toán Và Giới Hạn Của Compiler</h2>
            <p className="pl-section-intro">
              Hai trục phân loại thường bị nhầm lẫn trong phỏng vấn kỹ sư là: <strong>Thời điểm kiểm tra kiểu</strong> (Static vs Dynamic)
              và <strong>Mức độ nghiêm ngặt khi ép kiểu</strong> (Strong vs Weak). Ngoài ra, sự khác biệt giữa{" "}
              <strong>Nominal Typing</strong> (Java) và <strong>Structural Typing</strong> (TypeScript) định hình toàn bộ cách thiết kế phần mềm.
            </p>

            <div className="pl-type-grid">
              <div className="pl-type-card">
                <h3>Trục 1: Static vs Dynamic</h3>
                <p>
                  <strong>Static Typing</strong> (Java, Go, TypeScript): Kiểu dữ liệu gắn với biến và được kiểm tra trước khi chạy.
                  <br /><br />
                  <strong>Dynamic Typing</strong> (PHP, Python, JavaScript): Kiểu dữ liệu gắn với giá trị (Value) và kiểm tra khi dòng lệnh chạy tới.
                </p>
                <div className="pl-type-example">
                  <strong>Ví dụ:</strong>
                  <span>Java báo lỗi đỏ ngay lúc gõ code; PHP kiểm tra ràng buộc khi hàm được gọi.</span>
                </div>
              </div>

              <div className="pl-type-card">
                <h3>Trục 2: Strong vs Weak</h3>
                <p>
                  <strong>Strong Typing</strong> (Java, Python, Go): Ngôn ngữ từ chối các phép toán giữa các kiểu không tương thích.
                  <br /><br />
                  <strong>Weak Typing</strong> (JavaScript, PHP thuần): Tự ý ép kiểu ngầm (Implicit Coercion), ví dụ <code>"5" + 2 = "52"</code> hay <code>"5" - 2 = 3</code>.
                </p>
                <div className="pl-type-example">
                  <strong>Hệ quả:</strong>
                  <span>Weak typing tạo ra các bug ngầm cực kỳ nguy hiểm trong tính toán tiền tệ.</span>
                </div>
              </div>

              <div className="pl-type-card">
                <h3>Trục 3: Nominal vs Structural</h3>
                <p>
                  <strong>Nominal Typing</strong> (Java): Hai kiểu chỉ tương thích nếu cùng tên hoặc kế thừa tường minh.
                  <br /><br />
                  <strong>Structural Typing</strong> (TypeScript, Go): Hai kiểu tương thích nếu chúng có cùng “hình dạng” thuộc tính (Duck Typing).
                </p>
                <div className="pl-type-example">
                  <strong>Nexus Express:</strong>
                  <span>Object trả về từ Prisma tự động thỏa mãn interface DTO vì cùng shape.</span>
                </div>
              </div>
            </div>

            {/* Enterprise Comparison Table */}
            <div className="pl-table-container">
              <table className="pl-data-table">
                <thead>
                  <tr>
                    <th>Ngôn ngữ</th>
                    <th>Kiểm Tra Kiểu</th>
                    <th>Cơ Chế Định Danh</th>
                    <th>Hành Vi Khi Chạy (Runtime)</th>
                    <th>Áp Dụng Trong Dự Án Của Tôi</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div className="pl-lang-cell">
                        <Code2 size={16} color="#2563eb" />
                        <span>TypeScript 5</span>
                      </div>
                    </td>
                    <td>Static (Compile-time)</td>
                    <td>Structural (Duck Typing)</td>
                    <td>Type bị xóa hoàn toàn (Type Erasure); V8 chạy JavaScript thuần</td>
                    <td><strong>Nexus Express OMS:</strong> Chia sẻ DTOs giữa Frontend và NestJS</td>
                  </tr>
                  <tr>
                    <td>
                      <div className="pl-lang-cell">
                        <Cpu size={16} color="#b45309" />
                        <span>Java 21</span>
                      </div>
                    </td>
                    <td>Static (Compile-time)</td>
                    <td>Nominal (Dựa trên tên Class)</td>
                    <td>Bytecode giữ lại metadata class; runtime JVM kiểm tra instanceof an toàn</td>
                    <td><strong>DevFlow Enterprise:</strong> Strict layered architecture, Spring Security</td>
                  </tr>
                  <tr>
                    <td>
                      <div className="pl-lang-cell">
                        <ServerCog size={16} color="#7c3aed" />
                        <span>PHP 8.3</span>
                      </div>
                    </td>
                    <td>Dynamic + Gradual Typing</td>
                    <td>Nominal (Class &amp; Type hints)</td>
                    <td>Zend Engine kiểm tra ràng buộc kiểu khi gọi hàm qua <code>strict_types=1</code></td>
                    <td><strong>Song Tai Shop:</strong> Web MVC, xử lý đơn hàng &amp; cổng thanh toán VNPay</td>
                  </tr>
                  <tr>
                    <td>
                      <div className="pl-lang-cell">
                        <Terminal size={16} color="#059669" />
                        <span>Python 3.12</span>
                      </div>
                    </td>
                    <td>Dynamic + Type Hints</td>
                    <td>Duck Typing + Protocol</td>
                    <td>CPython chạy bytecode; dùng Pydantic / Mypy để xác thực runtime</td>
                    <td><strong>AI Assistant:</strong> Data processing pipelines, RAG LangChain</td>
                  </tr>
                  <tr>
                    <td>
                      <div className="pl-lang-cell">
                        <Boxes size={16} color="#0284c7" />
                        <span>Go 1.22</span>
                      </div>
                    </td>
                    <td>Static Strong</td>
                    <td>Structural (Implicit Interfaces)</td>
                    <td>Mã máy gốc trực tiếp; interface dispatch qua itable (interface table)</td>
                    <td>High-throughput API Gateway, microservices micro-benchmark</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="pl-callout-box">
              <div className="pl-callout-icon">
                <AlertTriangle size={22} aria-hidden="true" />
              </div>
              <div className="pl-callout-body">
                <strong>Bẫy Kỹ Thuật: Static Typing Không Thay Thế Được Runtime Validation!</strong>
                <p>
                  Một compiler có thể bảo đảm biến <code>weightGrams: number</code> không bị gán string trong code của bạn.
                  Nhưng khi người dùng gửi một HTTP POST request qua mạng, compiler không ở đó để bảo vệ hệ thống.
                  Payload JSON hoàn toàn có thể chứa số âm <code>-500</code> hoặc số cực lớn gây overflow.
                  Trong các hệ thống enterprise, tầng Boundary Validation (Zod/class-validator trong TypeScript, Hibernate Validator @Valid trong Java)
                  luôn là lớp phòng thủ bắt buộc trước khi đưa dữ liệu vào Domain Model.
                </p>
              </div>
            </div>
          </section>

          {/* SECTION 04: MEMORY & CONCURRENCY */}
          <section className="lesson-section pl-card-section" id="memory-concurrency">
            <div className="pl-section-badge">
              <Cpu size={13} aria-hidden="true" />
              <span>Phần 04 · Memory Architecture &amp; Concurrency</span>
            </div>
            <h2>Kiến Trúc Bộ Nhớ (Stack vs Heap) &amp; Các Mô Hình Đa Nhiệm</h2>
            <p className="pl-section-intro">
              Sự ổn định của hệ thống backend chịu tải cao phụ thuộc vào hai yếu tố then chốt: Cách runtime cấp phát và thu hồi
              bộ nhớ RAM, cùng chiến lược xử lý đồng thời hàng nghìn kết nối I/O.
            </p>

            <div className="pl-memory-grid">
              <div className="pl-memory-card">
                <h3>
                  <Layers size={18} aria-hidden="true" />
                  <span>Call Stack vs Heap Memory</span>
                </h3>
                <ul>
                  <li>
                    <strong>Call Stack (Ngăn xếp):</strong> Cấp phát LIFO siêu nhanh, lưu trữ các biến nguyên thủy (primitives)
                    và con trỏ tham chiếu (references). Bộ nhớ tự giải phóng ngay khi hàm kết thúc mà không cần GC.
                  </li>
                  <li>
                    <strong>Heap (Vùng nhớ tự do):</strong> Cấp phát động cho các Object, Mảng lớn, tồn tại độc lập với thời gian chạy
                    của hàm. Đòi hỏi cơ chế Garbage Collection thu hồi, có nguy cơ gây OutOfMemory nếu bị leak.
                  </li>
                  <li>
                    <strong>StackOverflow vs OutOfMemory:</strong> Stack tràn khi đệ quy quá sâu không có điểm dừng;
                    Heap tràn khi các object không còn dùng nhưng vẫn bị tham chiếu giữ lại (Unclosed EventListeners, Static Maps).
                  </li>
                </ul>
              </div>

              <div className="pl-memory-card">
                <h3>
                  <RefreshCw size={18} aria-hidden="true" />
                  <span>Ba Chiến Lược Quản Lý Bộ Nhớ</span>
                </h3>
                <ul>
                  <li>
                    <strong>JVM Generational GC (Java):</strong> Chia nhỏ Heap thành Young và Old Gen. Thuật toán Mark-Sweep-Compact.
                    Trình thu gom hiện đại (ZGC, G1GC) duy trì độ trễ ngắt (Stop-the-World pause) dưới 1ms.
                  </li>
                  <li>
                    <strong>V8 Generational Scavenge (Node.js):</strong> Sử dụng Semi-space copying cho New Space (siêu nhanh)
                    và Mark-Sweep-Compact cho Old Space.
                  </li>
                  <li>
                    <strong>Shared-Nothing Lifecycle (PHP-FPM):</strong> Mỗi HTTP request cấp phát vùng nhớ độc lập qua Zend Memory Manager.
                    Khi request kết thúc, 100% vùng nhớ được trả về OS, triệt tiêu nguy cơ rò rỉ bộ nhớ dài hạn.
                  </li>
                </ul>
              </div>
            </div>

            <h3 className="scenario-heading">Ba Mô Hình Concurrency Kinh Điển Trong Backend</h3>
            <div className="pl-concurrency-grid">
              <div className="pl-concurrency-card">
                <h4>Single-Threaded Event Loop</h4>
                <span className="pl-concurrency-tag">Node.js (TypeScript) · Libuv</span>
                <p>
                  Một thread chính thực thi code, ủy thác I/O cho Libuv thread pool. Cực kỳ tối ưu cho các tác vụ I/O bound
                  (WebSocket tracking của Nexus Express, REST API). Tuy nhiên một tác vụ CPU-bound nặng có thể block toàn bộ server.
                </p>
              </div>

              <div className="pl-concurrency-card">
                <h4>Virtual Threads (Project Loom)</h4>
                <span className="pl-concurrency-tag">Java 21 · Spring Boot 3</span>
                <p>
                  Không bị giới hạn bởi 1-2MB/thread của OS thread truyền thống. Virtual Threads là user-mode threads siêu nhẹ (vài KB),
                  cho phép xử lý đồng thời hàng chục nghìn request theo phong cách synchronous blocking code quen thuộc mà không nghẽn OS thread.
                </p>
              </div>

              <div className="pl-concurrency-card">
                <h4>Multi-Process Worker Pool</h4>
                <span className="pl-concurrency-tag">PHP 8 · PHP-FPM</span>
                <p>
                  Master process quản lý một pool các worker processes. Mỗi request chiếm dụng 1 process riêng biệt, không chia sẻ bộ nhớ.
                  Lập trình đơn giản, an toàn tuyệt đối khỏi race condition, một worker crash không làm ảnh hưởng các request khác.
                </p>
              </div>
            </div>
          </section>

          {/* SECTION 05: CODE LAB */}
          <section className="lesson-section pl-card-section" id="code-comparison">
            <div className="pl-section-badge">
              <Code2 size={13} aria-hidden="true" />
              <span>Phần 05 · Interactive Code Lab</span>
            </div>
            <h2>Một Quy Tắc Nghiệp Vụ Vận Chuyển — Triển Khai Qua 5 Ngôn Ngữ</h2>
            <p className="pl-section-intro">
              Quan sát cùng một bài toán tính cước vận chuyển thực tế từ <strong>Nexus Express</strong> và <strong>Song Tai Shop</strong>:
              1 kg đầu có giá 15.000 VND; mỗi 500 g phát sinh tiếp theo thêm 4.000 VND; dịch vụ giao nhanh cộng thêm 10.000 VND.
              Tiền tệ được duy trì dưới dạng số nguyên VND để triệt tiêu hoàn toàn sai số dấu phẩy động (IEEE 754).
            </p>

            {/* Interactive Code Window */}
            <div className="pl-code-lab">
              <div className="pl-code-nav-bar">
                <div className="pl-term-dots">
                  <span className="pl-term-dot red" />
                  <span className="pl-term-dot yellow" />
                  <span className="pl-term-dot green" />
                </div>

                <div className="pl-lang-tabs" role="tablist" aria-label="Language selection tabs">
                  <button
                    className={`pl-lang-tab ${activeCodeLang === "typescript" ? "active" : ""}`}
                    onClick={() => setActiveCodeLang("typescript")}
                    role="tab"
                    aria-selected={activeCodeLang === "typescript"}
                  >
                    TypeScript 5 (NestJS)
                  </button>
                  <button
                    className={`pl-lang-tab ${activeCodeLang === "java" ? "active" : ""}`}
                    onClick={() => setActiveCodeLang("java")}
                    role="tab"
                    aria-selected={activeCodeLang === "java"}
                  >
                    Java 21 (Spring Boot)
                  </button>
                  <button
                    className={`pl-lang-tab ${activeCodeLang === "php" ? "active" : ""}`}
                    onClick={() => setActiveCodeLang("php")}
                    role="tab"
                    aria-selected={activeCodeLang === "php"}
                  >
                    PHP 8.3 (Strict MVC)
                  </button>
                  <button
                    className={`pl-lang-tab ${activeCodeLang === "python" ? "active" : ""}`}
                    onClick={() => setActiveCodeLang("python")}
                    role="tab"
                    aria-selected={activeCodeLang === "python"}
                  >
                    Python 3.12 (Pydantic)
                  </button>
                  <button
                    className={`pl-lang-tab ${activeCodeLang === "go" ? "active" : ""}`}
                    onClick={() => setActiveCodeLang("go")}
                    role="tab"
                    aria-selected={activeCodeLang === "go"}
                  >
                    Go 1.22 (Idiomatic)
                  </button>
                </div>

                <div className="pl-code-actions">
                  <button
                    className={`pl-copy-code-btn ${copiedCode ? "copied" : ""}`}
                    onClick={() => handleCopyCode(codeSnippets[activeCodeLang].code)}
                    title="Sao chép mã nguồn"
                  >
                    {copiedCode ? (
                      <>
                        <Check size={13} aria-hidden="true" />
                        <span>Đã chép!</span>
                      </>
                    ) : (
                      <>
                        <Copy size={13} aria-hidden="true" />
                        <span>Sao chép</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              <div className="pl-code-body">
                <pre>
                  <code>{codeSnippets[activeCodeLang].code}</code>
                </pre>
              </div>

              <div className="pl-code-notes-panel">
                <div className="pl-code-note-item">
                  <strong>
                    <Layers size={14} aria-hidden="true" />
                    <span>Mô Hình Paradigm:</span>
                  </strong>
                  <p>{codeSnippets[activeCodeLang].paradigm}</p>
                </div>
                <div className="pl-code-note-item">
                  <strong>
                    <ShieldCheck size={14} aria-hidden="true" />
                    <span>Cơ Chế Hệ Kiểu:</span>
                  </strong>
                  <p>{codeSnippets[activeCodeLang].typeMechanism}</p>
                </div>
                <div className="pl-code-note-item">
                  <strong>
                    <Cpu size={14} aria-hidden="true" />
                    <span>Động Cơ Runtime:</span>
                  </strong>
                  <p>{codeSnippets[activeCodeLang].runtimeEngine}</p>
                </div>
              </div>
            </div>

            <div className="pl-callout-box">
              <div className="pl-callout-icon">
                <CheckCircle2 size={22} aria-hidden="true" />
              </div>
              <div className="pl-callout-body">
                <strong>Điểm Kiểm Tra Kỹ Sư Cần Lưu Ý:</strong>
                <p>
                  Cú pháp giữa các ngôn ngữ có thể khác biệt, nhưng bản chất nghiệp vụ (Domain Invariants) phải đồng nhất:
                  Luôn chặn số âm hoặc 0g tại boundary, bảo toàn kiểu số nguyên VND để tránh sai số dấu phẩy động IEEE 754,
                  và kiểm thử kỹ lưỡng tại các điểm biên (1000g không bị phụ phí; 1001g lập tức nhảy bậc 1 đơn vị phụ phí).
                </p>
              </div>
            </div>
          </section>

          {/* SECTION 06: LANGUAGE SELECTION & PROJECT EVIDENCE */}
          <section className="lesson-section pl-card-section" id="language-selection">
            <div className="pl-section-badge">
              <BriefcaseBusiness size={13} aria-hidden="true" />
              <span>Phần 06 · Decision Matrix &amp; Project Evidence</span>
            </div>
            <h2>Lựa Chọn Công Nghệ Từ Ràng Buộc Kỹ Thuật &amp; Bằng Chứng Thực Tế</h2>
            <p className="pl-section-intro">
              Một kỹ sư giỏi không bao giờ chọn ngôn ngữ vì “yêu thích cá nhân” hay “bảng xếp hạng xu hướng”.
              Lựa chọn đúng đắn luôn bắt nguồn từ sự cân bằng giữa 6 ràng buộc: Bài toán nghiệp vụ, Độ chín hệ sinh thái,
              Năng lực đội ngũ, Yêu cầu độ trễ/thông lượng, Chi phí vận hành hạ tầng và Vòng đời bảo trì.
            </p>

            <div className="decision-checklist">
              <p className="panel-label">Checklist 6 Trục Ra Quyết Định Công Nghệ</p>
              <ol>
                <li>
                  <span>1</span>
                  <p><strong>Problem Domain:</strong> Hệ thống cần I/O streaming, real-time WebSocket, batch processing hay web CRUD?</p>
                </li>
                <li>
                  <span>2</span>
                  <p><strong>Ecosystem &amp; Libraries:</strong> Thư viện ORM, driver database, security patches và tài liệu có trưởng thành không?</p>
                </li>
                <li>
                  <span>3</span>
                  <p><strong>Team &amp; Talent:</strong> Chi phí tuyển dụng và tốc độ onboarding thành viên mới vào codebase như thế nào?</p>
                </li>
                <li>
                  <span>4</span>
                  <p><strong>Runtime Performance:</strong> Cần độ trễ p99 thấp (AOT Go/Rust) hay thông lượng I/O cao (Node.js/Java)?</p>
                </li>
                <li>
                  <span>5</span>
                  <p><strong>Operations &amp; CI/CD:</strong> Kích thước Docker image, thời gian build CI/CD và mức tiêu thụ RAM container?</p>
                </li>
                <li>
                  <span>6</span>
                  <p><strong>Maintainability:</strong> Hệ thống cần duy trì trong 5-10 năm tới hay chỉ là MVP thăm dò thị trường trong 3 tháng?</p>
                </li>
              </ol>
            </div>

            <h3 className="scenario-heading">Bằng Chứng Ứng Dụng Trong 3 Dự Án Thực Chiến Của Tôi</h3>
            <div className="pl-project-evidence-grid">
              <div className="pl-project-card">
                <div className="pl-proj-card-top">
                  <span className="pl-proj-lang-pill ts">TypeScript</span>
                  <span className="pl-pipe-tag">Production Live</span>
                </div>
                <h3>Nexus Express (Logistics OMS)</h3>
                <div className="pl-proj-stack">NestJS · Next.js · Prisma · Redis · PostgreSQL</div>
                <p>
                  Chọn TypeScript full-stack để đồng bộ hợp đồng dữ liệu (Shared Types &amp; DTOs) giữa Client và Server.
                  Tận dụng kiến trúc Non-blocking Event Loop của Node.js để xử lý hàng ngàn kết nối WebSocket cập nhật vị trí
                  kiện hàng theo thời gian thực mà không ngốn bộ nhớ thread.
                </p>
                <div className="pl-proj-footer">
                  <span className="pl-proj-role-tag">Fullstack &amp; System Architect</span>
                  <a
                    href="https://tracking.nexus-ex.site/"
                    target="_blank"
                    rel="noreferrer"
                    className="pl-proj-link"
                  >
                    <span>Live Demo ↗</span>
                  </a>
                </div>
              </div>

              <div className="pl-project-card">
                <div className="pl-proj-card-top">
                  <span className="pl-proj-lang-pill java">Java 21</span>
                  <span className="pl-pipe-tag">Enterprise Core</span>
                </div>
                <h3>DevFlow (Task Management)</h3>
                <div className="pl-proj-stack">Java 21 LTS · Spring Boot 3 · JPA · Docker</div>
                <p>
                  Chọn Java 21 để luyện tập hệ kiểu tĩnh danh nghĩa (Strict Nominal Typing), phân tầng kiến trúc chặt chẽ
                  (Controller - Service - Repository), quản trị ACID transactions với Hibernate, và vận dụng Virtual Threads
                  cho các tác vụ gửi thông báo nền (Background Batch Jobs).
                </p>
                <div className="pl-proj-footer">
                  <span className="pl-proj-role-tag">Backend Engineer</span>
                  <span className="pl-proj-role-tag">Architecture Evidence</span>
                </div>
              </div>

              <div className="pl-project-card">
                <div className="pl-proj-card-top">
                  <span className="pl-proj-lang-pill php">PHP 8.3</span>
                  <span className="pl-pipe-tag">Web Commercial</span>
                </div>
                <h3>Song Tai Shop (E-Commerce)</h3>
                <div className="pl-proj-stack">PHP 8.3 · MySQL · MVC Pattern · VNPay</div>
                <p>
                  Chọn PHP 8.3 kết hợp MVC để làm chủ mô hình Request-Response truyền thống, quản lý session giỏ hàng,
                  xử lý cURL API tích hợp cổng thanh toán VNPay chuẩn xác. Tận dụng mô hình Shared-Nothing giúp hệ thống
                  hoạt động ổn định trên hosting chi phí thấp mà không lo rò rỉ RAM.
                </p>
                <div className="pl-proj-footer">
                  <span className="pl-proj-role-tag">Fullstack Developer</span>
                  <span className="pl-proj-role-tag">Production Ready</span>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 07: INTERVIEW QUESTIONS */}
          <section className="lesson-section pl-card-section" id="interview-questions">
            <div className="pl-section-badge">
              <HelpCircle size={13} aria-hidden="true" />
              <span>Phần 07 · Technical Interview Hub</span>
            </div>
            <h2>10 Câu Hỏi Phỏng Vấn Kỹ Sư Chuyên Sâu Về Programming Languages &amp; Runtime</h2>
            <p className="pl-section-intro">
              Bộ câu hỏi thường xuất hiện trong các vòng phỏng vấn Kỹ sư Phần mềm (Software Engineer / Backend Developer)
              nhằm phân loại ứng viên hiểu bản chất hệ thống với ứng viên chỉ biết dùng framework ở bề mặt.
            </p>

            <div className="pl-faq-controls">
              <div className="pl-faq-categories" role="group" aria-label="Lọc câu hỏi phỏng vấn theo chủ đề">
                <button
                  className={`pl-faq-cat-btn ${faqCategory === "all" ? "active" : ""}`}
                  onClick={() => setFaqCategory("all")}
                >
                  Tất cả ({interviewQuestions.length})
                </button>
                <button
                  className={`pl-faq-cat-btn ${faqCategory === "runtime" ? "active" : ""}`}
                  onClick={() => setFaqCategory("runtime")}
                >
                  Runtime &amp; Engine
                </button>
                <button
                  className={`pl-faq-cat-btn ${faqCategory === "memory" ? "active" : ""}`}
                  onClick={() => setFaqCategory("memory")}
                >
                  Memory &amp; GC
                </button>
                <button
                  className={`pl-faq-cat-btn ${faqCategory === "types" ? "active" : ""}`}
                  onClick={() => setFaqCategory("types")}
                >
                  Hệ Kiểu
                </button>
                <button
                  className={`pl-faq-cat-btn ${faqCategory === "concurrency" ? "active" : ""}`}
                  onClick={() => setFaqCategory("concurrency")}
                >
                  Concurrency
                </button>
              </div>

              <div className="pl-faq-search-wrap">
                <Search size={14} aria-hidden="true" />
                <input
                  type="text"
                  className="pl-faq-search-input"
                  placeholder="Tìm kiếm câu hỏi (JIT, Stack, GC, V8...)"
                  value={faqSearch}
                  onChange={(e) => setFaqSearch(e.target.value)}
                />
              </div>
            </div>

            <div className="pl-faq-list">
              {filteredFaqs.map((faq, index) => {
                const isOpen = openFaqIndex === index;
                return (
                  <div className={`pl-faq-item ${isOpen ? "open" : ""}`} key={faq.question}>
                    <button
                      className="pl-faq-question"
                      onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                      aria-expanded={isOpen}
                    >
                      <div className="pl-faq-q-left">
                        <span className="pl-faq-badge">{faq.categoryLabel}</span>
                        <strong>{faq.question}</strong>
                      </div>
                      <ChevronDown size={18} className="pl-faq-chevron" aria-hidden="true" />
                    </button>
                    {isOpen && (
                      <div className="pl-faq-answer">
                        <p>{faq.answer}</p>
                      </div>
                    )}
                  </div>
                );
              })}
              {filteredFaqs.length === 0 && (
                <p style={{ textAlign: "center", color: "#64748b", padding: "20px" }}>
                  Không tìm thấy câu hỏi phù hợp với từ khóa &ldquo;{faqSearch}&rdquo;.
                </p>
              )}
            </div>
          </section>

          {/* SECTION 08: CHECKLIST & RESOURCES */}
          <section className="lesson-section pl-card-section" id="checklist">
            <div className="pl-section-badge">
              <CheckCircle2 size={13} aria-hidden="true" />
              <span>Phần 08 · Checklist &amp; Resources</span>
            </div>
            <h2>Tự Đánh Giá Năng Lực &amp; Tài Liệu Kiến Trúc Gốc</h2>
            <p className="pl-section-intro">
              Đánh dấu các tiêu chí kỹ thuật mà bạn đã nắm vững sau chuyên đề này để xác nhận sự tự tin trước các buổi phỏng vấn kỹ thuật.
            </p>

            <div className="pl-checklist-box">
              <div className="pl-checklist-header">
                <div className="pl-checklist-title-wrap">
                  <CheckCircle2 size={18} color="#059669" aria-hidden="true" />
                  <h4>Checklist 7 Tiêu Chuẩn Năng Lực Kỹ Sư</h4>
                </div>
                <div className="pl-checklist-pill">
                  {checkedCount}/7 Tiêu chuẩn hoàn thành
                </div>
              </div>

              <div className="pl-checklist-items">
                {[
                  {
                    title: "1. Tường minh hành trình từ Source Code đến CPU",
                    desc: "Giải thích rõ ràng vai trò của Lexer, Parser, AST, Intermediate Representation và Machine Code.",
                  },
                  {
                    title: "2. Phân biệt chính xác AOT Compiler, JIT Compiler và Interpreter",
                    desc: "Hiểu bản chất tối ưu hóa runtime của V8 TurboFan và JVM HotSpot C1/C2.",
                  },
                  {
                    title: "3. Làm chủ 3 trục phân loại Type System",
                    desc: "Static vs Dynamic, Strong vs Weak, Nominal vs Structural Typing (Duck Typing).",
                  },
                  {
                    title: "4. Nắm vững ranh giới giữa Compile-time Types và Runtime Validation",
                    desc: "Biết vì sao Type Erasure đòi hỏi Zod / class-validator / Spring @Valid ở tầng network input.",
                  },
                  {
                    title: "5. Phân biệt Call Stack và Heap cùng cơ chế Garbage Collection",
                    desc: "Nắm vững nguyên lý Generational GC, Stop-the-World mitigation và Shared-Nothing isolation của PHP.",
                  },
                  {
                    title: "6. Hiểu sự khác biệt giữa 3 mô hình Concurrency",
                    desc: "Single-threaded Event Loop (Node.js), Virtual Threads (Java 21) và Multi-process pool (PHP-FPM).",
                  },
                  {
                    title: "7. Ra quyết định chọn ngôn ngữ dựa trên bài toán thực tế",
                    desc: "Cân đối 6 khía cạnh kỹ thuật thay vì đánh giá cảm tính theo trend.",
                  },
                ].map((item, idx) => {
                  const isChecked = !!checkedChecklist[idx];
                  return (
                    <div
                      key={item.title}
                      className={`pl-check-item ${isChecked ? "checked" : ""}`}
                      onClick={() => toggleChecklist(idx)}
                      role="checkbox"
                      aria-checked={isChecked}
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === " " || e.key === "Enter") {
                          e.preventDefault();
                          toggleChecklist(idx);
                        }
                      }}
                    >
                      <div className="pl-custom-check">
                        {isChecked && <Check size={14} aria-hidden="true" />}
                      </div>
                      <div className="pl-check-content">
                        <strong>{item.title}</strong>
                        <p>{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <h3 className="scenario-heading">Tài Liệu Đặc Tả Kỹ Thuật Chính Thức Nên Đọc</h3>
            <div className="pl-resource-grid">
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Execution_model"
                target="_blank"
                rel="noreferrer"
                className="pl-resource-link"
              >
                <div className="pl-resource-left">
                  <span className="pl-resource-pub">MDN Web Docs</span>
                  <strong>JavaScript Execution Model</strong>
                  <span>Engine, call stack, agent, job queue &amp; event loop architecture.</span>
                </div>
                <ArrowUpRight size={18} aria-hidden="true" />
              </a>

              <a
                href="https://docs.oracle.com/javase/specs/jvms/se21/html/jvms-1.html"
                target="_blank"
                rel="noreferrer"
                className="pl-resource-link"
              >
                <div className="pl-resource-left">
                  <span className="pl-resource-pub">Oracle Corporation</span>
                  <strong>The Java Virtual Machine Specification (Java 21)</strong>
                  <span>JVM architecture, class file format, bytecode verification &amp; memory areas.</span>
                </div>
                <ArrowUpRight size={18} aria-hidden="true" />
              </a>

              <a
                href="https://www.typescriptlang.org/docs/handbook/typescript-from-scratch.html"
                target="_blank"
                rel="noreferrer"
                className="pl-resource-link"
              >
                <div className="pl-resource-left">
                  <span className="pl-resource-pub">TypeScript Official</span>
                  <strong>TypeScript Handbook: Type Erasure &amp; Soundness</strong>
                  <span>Quan hệ giữa compile-time types, JavaScript runtime và structural typing.</span>
                </div>
                <ArrowUpRight size={18} aria-hidden="true" />
              </a>

              <a
                href="https://www.php.net/manual/en/langref.php"
                target="_blank"
                rel="noreferrer"
                className="pl-resource-link"
              >
                <div className="pl-resource-left">
                  <span className="pl-resource-pub">PHP Group</span>
                  <strong>PHP 8 Language Reference &amp; Zend Engine</strong>
                  <span>Strict types, OPcache, match expression, memory allocation &amp; JIT engine.</span>
                </div>
                <ArrowUpRight size={18} aria-hidden="true" />
              </a>
            </div>
          </section>

          {/* KEY TAKEAWAYS & ACTION CTAS */}
          <div className="next-lesson pl-takeaway-card">
            <div className="pl-takeaway-badge">
              <Sparkles size={14} aria-hidden="true" />
              <span>Key Engineering Takeaway</span>
            </div>
            <h3>Ngôn Ngữ Chỉ Là Công Cụ Diễn Đạt; Tư Duy Kiến Trúc &amp; Runtime Là Giá Trị Cốt Lõi</h3>
            <p>
              Framework và cú pháp có thể thay đổi sau mỗi vài năm, nhưng quy luật về Call Stack, Heap, Bộ nhớ đệm CPU,
              Độ an toàn của kiểu dữ liệu và Ranh giới xác thực (Boundary Validation) vẫn luôn bất biến. Làm chủ cội rễ
              này giúp kỹ sư tự tin học bất kỳ ngôn ngữ mới nào chỉ trong vài ngày và xây dựng hệ thống phần mềm có độ tin cậy cao.
            </p>
            <div className="pl-takeaway-actions">
              <a href="/" onClick={(e) => navigate(e, "/")} className="pl-action-btn primary">
                <ArrowLeft size={15} aria-hidden="true" />
                <span>Về Trang Chủ Portfolio</span>
              </a>
              <a
                href="https://tracking.nexus-ex.site/"
                target="_blank"
                rel="noreferrer"
                className="pl-action-btn secondary"
              >
                <ExternalLink size={15} aria-hidden="true" />
                <span>Trải Nghiệm Live Demo OMS</span>
              </a>
              <a
                href="/knowledge/database"
                onClick={(e) => navigate(e, "/knowledge/database")}
                className="pl-action-btn outline"
              >
                <span>Học Tiếp: Database Fundamentals (Bài 02)</span>
                <ChevronRight size={15} aria-hidden="true" />
              </a>
            </div>
          </div>
        </article>
      </div>

      {/* 5. Executive Footer */}
      <footer className="pl-lesson-footer">
        <div className="pl-footer-left">
          <span>Programming Languages &amp; Runtime Architecture · Chuyên đề 01</span>
          <span className="ba-footer-divider">•</span>
          <span>Võ Văn Tú Tài · B.Eng in Information Systems (IUH · GPA 3.26/4.0 Giỏi)</span>
        </div>
        <div className="pl-footer-right">
          <Sparkles size={15} aria-hidden="true" />
          <span>Computer Science &amp; Runtime Engineering Evidence</span>
        </div>
      </footer>
    </main>
  );
}

function DatabaseLessonPage({ navigate }: { navigate: NavigateHandler }) {
  return (
    <main className="site-shell knowledge-shell">
      <header className="topbar knowledge-topbar" aria-label="Knowledge navigation">
        <a className="brand" href="/knowledge" onClick={(event) => navigate(event, "/knowledge")} aria-label="Learning hub">
          <div className="brand-avatar-wrap">
            <img className="brand-avatar" src="/assets/avatar.png" alt="Knowledge Hub" />
            <span className="brand-dot-pulse" aria-hidden="true" />
          </div>
          <div className="brand-text">
            <span className="brand-name">Knowledge Hub</span>
            <span className="brand-tag">Database Fundamentals</span>
          </div>
        </a>
        <nav>
          <a href="#overview">Khái niệm</a>
          <a href="#sql-vs-nosql">SQL và NoSQL</a>
          <a href="#database-selection">Cách lựa chọn</a>
          <a href="#interview-questions">Phỏng vấn</a>
        </nav>
      </header>
      <LearningPathNav currentPath="/knowledge/database" navigate={navigate} />

      <section className="knowledge-hero">
        <div>
          <a
            className="back-link"
            href="/knowledge/programming-languages"
            onClick={(event) => navigate(event, "/knowledge/programming-languages")}
          >
            <ArrowLeft size={17} aria-hidden="true" />
            Trở về Programming Languages
          </a>
          <p className="eyebrow">Database Fundamentals · Bài 02</p>
          <h1>Database là gì và dữ liệu được tổ chức như thế nào?</h1>
          <p className="knowledge-lede">
            Hiểu cách hệ thống tổ chức dữ liệu, SQL và NoSQL giải quyết những bài toán khác nhau ra sao, và cách
            lựa chọn database dựa trên yêu cầu thật của một dự án.
          </p>
          <div className="lesson-meta" aria-label="Lesson information">
            <span><BookOpen size={16} aria-hidden="true" /> Nền tảng</span>
            <span>25 phút đọc</span>
            <span>25 câu ôn tập</span>
          </div>
        </div>

        <aside className="learning-outcomes">
          <p className="panel-label">Sau bài này, bạn có thể</p>
          <ul>
            <li><CheckCircle2 size={18} aria-hidden="true" /> Phân biệt database và DBMS.</li>
            <li><CheckCircle2 size={18} aria-hidden="true" /> Mô tả table, row, column và relationship.</li>
            <li><CheckCircle2 size={18} aria-hidden="true" /> So sánh SQL với các mô hình NoSQL.</li>
            <li><CheckCircle2 size={18} aria-hidden="true" /> Chọn database dựa trên access pattern và nghiệp vụ.</li>
          </ul>
        </aside>
      </section>

      <div className="lesson-layout">
        <aside className="lesson-toc" aria-label="Mục lục bài học">
          <p>Chương trong bài</p>
          <a href="#overview">1. Database là gì?</a>
          <a href="#organization">2. Dữ liệu quan hệ</a>
          <a href="#sql-vs-nosql">3. SQL và NoSQL</a>
          <a href="#database-selection">4. Chọn database</a>
          <a href="#interview-questions">5. Ôn tập phỏng vấn</a>
        </aside>

        <article className="lesson-content">
          <section className="lesson-section" id="overview">
            <p className="section-label">01 · Khái niệm</p>
            <h2>Database là một tập hợp dữ liệu có tổ chức</h2>
            <p>
              Database, hay cơ sở dữ liệu, là nơi dữ liệu được lưu theo một cấu trúc xác định để con người và phần
              mềm có thể tìm kiếm, thêm mới, cập nhật và quản lý dữ liệu một cách nhất quán.
            </p>
            <div className="definition-card">
              <strong>Ví dụ thực tế</strong>
              <p>
                Một cửa hàng trực tuyến cần lưu khách hàng, sản phẩm và đơn hàng. Nếu dữ liệu chỉ nằm trong nhiều
                file rời rạc, việc tìm “mọi đơn hàng của một khách hàng” sẽ khó và dễ sai. Database tạo ra cấu trúc
                chung để các dữ liệu này có thể liên kết với nhau.
              </p>
            </div>
          </section>

          <section className="lesson-section" id="dbms">
            <p className="section-label">02 · Công cụ quản lý</p>
            <h2>Database không phải là DBMS</h2>
            <div className="comparison-grid">
              <div>
                <Database size={22} aria-hidden="true" />
                <h3>Database</h3>
                <p>Phần dữ liệu và cấu trúc dùng để tổ chức dữ liệu.</p>
                <span>Ví dụ: database của hệ thống bán hàng</span>
              </div>
              <div>
                <ServerCog size={22} aria-hidden="true" />
                <h3>DBMS</h3>
                <p>Phần mềm giúp tạo, truy vấn, bảo vệ và vận hành database.</p>
                <span>Ví dụ: MySQL, PostgreSQL, MongoDB</span>
              </div>
            </div>
          </section>

          <section className="lesson-section" id="organization">
            <p className="section-label">03 · Cấu trúc</p>
            <h2>Dữ liệu quan hệ được tổ chức thành bảng</h2>
            <p>
              Trong relational database, dữ liệu được chia thành các bảng theo từng nhóm đối tượng. Mỗi thành phần
              của bảng đảm nhận một vai trò rõ ràng.
            </p>
            <div className="concept-grid">
              <div><Table2 size={20} aria-hidden="true" /><strong>Table</strong><span>Một nhóm đối tượng, ví dụ Customer.</span></div>
              <div><Network size={20} aria-hidden="true" /><strong>Row</strong><span>Một bản ghi khách hàng cụ thể.</span></div>
              <div><Code2 size={20} aria-hidden="true" /><strong>Column</strong><span>Một thuộc tính như name hoặc email.</span></div>
              <div><KeyRound size={20} aria-hidden="true" /><strong>Key</strong><span>Định danh và liên kết các bản ghi.</span></div>
            </div>

            <div className="data-table-wrap" aria-label="Customer table example">
              <div className="table-caption">
                <strong>customers</strong>
                <span>Mỗi hàng là một khách hàng</span>
              </div>
              <table>
                <thead>
                  <tr><th>customer_id</th><th>full_name</th><th>email</th></tr>
                </thead>
                <tbody>
                  <tr><td>101</td><td>Nguyen An</td><td>an@example.com</td></tr>
                  <tr><td>102</td><td>Tran Binh</td><td>binh@example.com</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="lesson-section" id="relational-model">
            <p className="section-label">04 · Mối quan hệ</p>
            <h2>Các bảng liên kết bằng khóa</h2>
            <p>
              Thay vì lặp lại toàn bộ thông tin khách hàng trong từng đơn hàng, bảng <code>orders</code> chỉ lưu
              <code>customer_id</code>. Giá trị này tham chiếu đến khách hàng đã tồn tại trong bảng
              <code>customers</code>.
            </p>
            <div className="relation-diagram">
              <div className="entity-card">
                <strong>customers</strong>
                <span><KeyRound size={14} aria-hidden="true" /> customer_id · PK</span>
                <span>full_name</span>
                <span>email</span>
              </div>
              <div className="relation-line"><span>1</span><b>có nhiều</b><span>N</span></div>
              <div className="entity-card">
                <strong>orders</strong>
                <span><KeyRound size={14} aria-hidden="true" /> order_id · PK</span>
                <span>customer_id · FK</span>
                <span>total_amount</span>
              </div>
            </div>
            <p className="lesson-note">
              <strong>PK</strong> (Primary Key) định danh duy nhất một bản ghi. <strong>FK</strong> (Foreign Key)
              tạo liên kết đến khóa chính của bảng khác.
            </p>
          </section>

          <section className="lesson-section" id="sql-vs-nosql">
            <p className="section-label">05 · Hai hướng tổ chức dữ liệu</p>
            <h2>SQL và NoSQL không phải hai đối thủ tuyệt đối</h2>
            <p>
              <strong>SQL</strong> là ngôn ngữ truy vấn dữ liệu quan hệ. MySQL, PostgreSQL và SQL Server là các
              DBMS sử dụng SQL. <strong>NoSQL</strong> là tên gọi chung cho các database không bắt buộc tổ chức
              dữ liệu theo bảng quan hệ truyền thống, chẳng hạn document, key-value, wide-column và graph.
            </p>

            <div className="database-type-grid">
              <article className="database-type-card sql-card">
                <span className="database-type-label">Relational database</span>
                <h3>SQL</h3>
                <p>Dữ liệu nằm trong bảng có schema rõ ràng và liên kết qua khóa.</p>
                <ul>
                  <li>Mạnh về quan hệ, JOIN và truy vấn báo cáo.</li>
                  <li>Transaction và ràng buộc dữ liệu chặt chẽ.</li>
                  <li>Phù hợp dữ liệu nghiệp vụ cần tính đúng đắn cao.</li>
                </ul>
                <strong>Ví dụ: MySQL, PostgreSQL, SQL Server</strong>
              </article>

              <article className="database-type-card nosql-card">
                <span className="database-type-label">Non-relational databases</span>
                <h3>NoSQL</h3>
                <p>Dữ liệu có thể được tổ chức theo document, cặp key-value, graph hoặc mô hình khác.</p>
                <ul>
                  <li>Schema linh hoạt hơn cho dữ liệu thường xuyên thay đổi.</li>
                  <li>Thường tối ưu theo một access pattern cụ thể.</li>
                  <li>Có nhiều mô hình với ưu điểm hoàn toàn khác nhau.</li>
                </ul>
                <strong>Ví dụ: MongoDB, Redis, Cassandra, Neo4j</strong>
              </article>
            </div>

            <div className="data-shape-example">
              <div className="example-heading">
                <div>
                  <span>Cùng một đơn hàng</span>
                  <h3>Hai cách biểu diễn dữ liệu</h3>
                </div>
                <p>Cấu trúc lưu trữ nên phục vụ cách ứng dụng đọc và cập nhật dữ liệu.</p>
              </div>

              <div className="code-comparison">
                <div>
                  <span className="code-label">SQL · Dữ liệu tách thành các bảng</span>
                  <pre><code>{`SELECT o.id, c.full_name, o.total_amount
FROM orders AS o
JOIN customers AS c
  ON c.id = o.customer_id
WHERE o.id = 501;`}</code></pre>
                  <p>Khách hàng được lưu một lần; order tham chiếu bằng foreign key.</p>
                </div>
                <div>
                  <span className="code-label">Document · Dữ liệu liên quan có thể đặt cùng nhau</span>
                  <pre><code>{`{
  "_id": 501,
  "customer": {
    "id": 101,
    "name": "Nguyen An"
  },
  "totalAmount": 850000
}`}</code></pre>
                  <p>Ứng dụng có thể đọc toàn bộ order bằng một document, đổi lại có thể lặp dữ liệu khách hàng.</p>
                </div>
              </div>
            </div>

            <p className="lesson-note">
              <strong>Điểm cần nhớ:</strong> NoSQL không có nghĩa là “không dùng SQL trong mọi trường hợp”, cũng
              không đồng nghĩa với “nhanh hơn SQL”. Hiệu năng phụ thuộc vào mô hình dữ liệu, index, truy vấn và
              cách hệ thống được vận hành.
            </p>
          </section>

          <section className="lesson-section" id="nosql-models">
            <p className="section-label">06 · Các mô hình NoSQL</p>
            <h2>NoSQL là một nhóm nhiều loại database</h2>
            <p>
              Khi nói “chọn NoSQL”, ta vẫn phải trả lời loại NoSQL nào phù hợp với dữ liệu và truy vấn của hệ
              thống. Mỗi mô hình được thiết kế cho một nhóm bài toán khác nhau.
            </p>

            <div className="nosql-model-grid">
              <article>
                <span>Document</span>
                <h3>MongoDB</h3>
                <p>Lưu object gần với JSON; phù hợp catalog có thuộc tính linh hoạt, content và hồ sơ tổng hợp.</p>
                <small>Truy cập chính: lấy document theo ID hoặc field đã index.</small>
              </article>
              <article>
                <span>Key-value</span>
                <h3>Redis</h3>
                <p>Truy cập giá trị qua key rất nhanh; phù hợp cache, session, rate limit và dữ liệu tạm thời.</p>
                <small>Truy cập chính: biết key và lấy value trực tiếp.</small>
              </article>
              <article>
                <span>Wide-column</span>
                <h3>Cassandra</h3>
                <p>Phân tán lượng ghi lớn trên nhiều node; thường dùng cho event, telemetry và time-series quy mô lớn.</p>
                <small>Truy cập chính: query được xác định trước theo partition key.</small>
              </article>
              <article>
                <span>Graph</span>
                <h3>Neo4j</h3>
                <p>Tối ưu việc đi qua nhiều tầng quan hệ; phù hợp social graph, recommendation và fraud detection.</p>
                <small>Truy cập chính: tìm đường đi và quan hệ giữa các node.</small>
              </article>
            </div>
          </section>

          <section className="lesson-section" id="database-selection">
            <p className="section-label">07 · Ra quyết định</p>
            <h2>Chọn database từ yêu cầu, không chọn từ xu hướng</h2>
            <p>
              Bắt đầu bằng các câu hỏi về dữ liệu và cách ứng dụng sử dụng dữ liệu. Tên công nghệ chỉ nên xuất
              hiện sau khi ta hiểu consistency, relationship, access pattern, quy mô và năng lực vận hành.
            </p>

            <div className="decision-table-wrap">
              <table className="decision-table">
                <thead>
                  <tr>
                    <th>Yêu cầu dự án</th>
                    <th>Thiên về SQL</th>
                    <th>Thiên về NoSQL</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Quan hệ dữ liệu</td>
                    <td>Nhiều quan hệ và JOIN linh hoạt</td>
                    <td>Dữ liệu thường được đọc nguyên khối hoặc theo key</td>
                  </tr>
                  <tr>
                    <td>Tính nhất quán</td>
                    <td>Đơn hàng, thanh toán, tồn kho cần transaction chặt</td>
                    <td>Một số dữ liệu chấp nhận nhất quán sau cùng</td>
                  </tr>
                  <tr>
                    <td>Schema</td>
                    <td>Cấu trúc ổn định, constraint rõ ràng</td>
                    <td>Thuộc tính thay đổi nhiều giữa các record</td>
                  </tr>
                  <tr>
                    <td>Truy vấn</td>
                    <td>Báo cáo và truy vấn ad hoc đa dạng</td>
                    <td>Access pattern rõ và được thiết kế trước</td>
                  </tr>
                  <tr>
                    <td>Quy mô</td>
                    <td>Đáp ứng tốt phần lớn ứng dụng; có thể scale dọc và ngang</td>
                    <td>Một số loại được thiết kế để phân tán ghi/đọc rất lớn</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="selection-rule">
              <span>Quy tắc khởi đầu thực dụng</span>
              <p>
                Với business application mới có user, order, booking, payment hoặc inventory, hãy bắt đầu bằng
                PostgreSQL/MySQL nếu chưa có yêu cầu đặc biệt. Thêm Redis cho cache/session hoặc MongoDB cho một
                bounded context có document linh hoạt khi đã xác định được lý do cụ thể.
              </p>
            </div>

            <h3 className="scenario-heading">Ví dụ lựa chọn theo dự án</h3>
            <div className="scenario-grid">
              <article>
                <span>E-commerce</span>
                <h3>PostgreSQL/MySQL làm nguồn dữ liệu chính</h3>
                <p>Order, payment và inventory cần constraint và transaction. Redis có thể hỗ trợ cart hoặc cache.</p>
                <strong>Không nên đưa order vào Redis như nguồn dữ liệu duy nhất.</strong>
              </article>
              <article>
                <span>Content / Product catalog</span>
                <h3>SQL hoặc document database</h3>
                <p>Nếu thuộc tính sản phẩm rất khác nhau theo ngành hàng, MongoDB có thể giảm schema phức tạp.</p>
                <strong>Nếu cần báo cáo và quan hệ chặt, PostgreSQL với JSONB cũng là lựa chọn mạnh.</strong>
              </article>
              <article>
                <span>Logistics tracking</span>
                <h3>Polyglot persistence có chủ đích</h3>
                <p>SQL giữ shipment và trạng thái nghiệp vụ; event store hoặc hệ time-series giữ lượng scan lớn.</p>
                <strong>Mỗi database có ownership rõ, không chia sẻ dữ liệu tùy tiện.</strong>
              </article>
              <article>
                <span>MVP / Student project</span>
                <h3>Một relational database thường là đủ</h3>
                <p>Giảm chi phí học, deploy, backup và đồng bộ dữ liệu trước khi hệ thống thực sự cần nhiều database.</p>
                <strong>Đơn giản trong vận hành cũng là một yêu cầu kỹ thuật.</strong>
              </article>
            </div>

            <div className="decision-checklist">
              <p className="panel-label">Checklist trước khi quyết định</p>
              <ol>
                <li><span>1</span><p><strong>Dữ liệu cốt lõi là gì?</strong> Xác định entity, vòng đời và mức độ quan trọng.</p></li>
                <li><span>2</span><p><strong>Ứng dụng đọc và ghi thế nào?</strong> Liệt kê access pattern phổ biến trước khi thiết kế schema.</p></li>
                <li><span>3</span><p><strong>Sai lệch dữ liệu có được chấp nhận?</strong> Thanh toán khác hoàn toàn lượt xem bài viết.</p></li>
                <li><span>4</span><p><strong>Đội ngũ vận hành được gì?</strong> Backup, monitoring và recovery quan trọng như tính năng database.</p></li>
                <li><span>5</span><p><strong>Có bằng chứng cần nhiều database chưa?</strong> Đừng tăng độ phức tạp chỉ vì kiến trúc trông hiện đại.</p></li>
              </ol>
            </div>
          </section>

          <section className="lesson-section" id="design-principles">
            <p className="section-label">08 · Tư duy thiết kế</p>
            <h2>Ba câu hỏi trước khi tạo bảng</h2>
            <ol className="principle-list">
              <li><span>01</span><div><strong>Đối tượng nào cần được lưu?</strong><p>Ví dụ: Customer, Product, Order.</p></div></li>
              <li><span>02</span><div><strong>Mỗi đối tượng có thuộc tính gì?</strong><p>Ví dụ: Product có name, price và stock.</p></div></li>
              <li><span>03</span><div><strong>Các đối tượng liên hệ với nhau thế nào?</strong><p>Ví dụ: một Customer có thể tạo nhiều Order.</p></div></li>
            </ol>
          </section>

          <section className="lesson-section" id="project-connection">
            <p className="section-label">09 · Áp dụng</p>
            <h2>Kiến thức này xuất hiện ở đâu trong portfolio?</h2>
            <div className="project-connection-grid">
              <div>
                <span>PHP / MySQL</span>
                <h3>Song Tai Shop</h3>
                <p>Sản phẩm, tài khoản, giỏ hàng và đơn hàng là các nhóm dữ liệu có quan hệ.</p>
              </div>
              <div>
                <span>Express / Sequelize / MySQL</span>
                <h3>Tourist Accommodation</h3>
                <p>Người dùng, phòng, booking, thanh toán và review được tổ chức thành các mô hình nghiệp vụ.</p>
              </div>
              <div>
                <span>PostgreSQL / MongoDB / Redis</span>
                <h3>Cab Booking Architecture</h3>
                <p>Mỗi loại dữ liệu được xem xét theo ownership, access pattern và vai trò trong kiến trúc.</p>
              </div>
            </div>
          </section>

          <section className="lesson-section interview-section" id="interview-questions">
            <p className="section-label">10 · Chuẩn bị phỏng vấn</p>
            <h2>Câu hỏi Database thường gặp</h2>
            <p>
              Hãy tự trả lời thành tiếng trước khi mở đáp án. Một câu trả lời tốt thường đi theo bốn bước:
              định nghĩa ngắn, giải thích mục đích, đưa ví dụ và kết thúc bằng trade-off hoặc lưu ý thực tế.
            </p>

            <div className="answer-framework">
              <span>Khung trả lời gợi ý</span>
              <ol>
                <li><strong>What:</strong> Khái niệm này là gì?</li>
                <li><strong>Why:</strong> Nó giải quyết vấn đề nào?</li>
                <li><strong>Example:</strong> Ví dụ trong project hoặc nghiệp vụ.</li>
                <li><strong>Trade-off:</strong> Khi nào không nên dùng hoặc cần lưu ý gì?</li>
              </ol>
            </div>

            <div className="interview-group">
              <div className="interview-group-heading">
                <span>Nền tảng</span>
                <strong>Relational database và thiết kế dữ liệu</strong>
              </div>
              <div className="interview-list">
                <details>
                  <summary><span>01</span>Primary Key và Foreign Key khác nhau thế nào?</summary>
                  <div className="interview-answer">
                    <p><strong>Primary Key</strong> định danh duy nhất một row và không được trùng. <strong>Foreign Key</strong> tham chiếu tới khóa của bảng khác để duy trì quan hệ và tính toàn vẹn dữ liệu.</p>
                    <p><em>Ví dụ:</em> <code>orders.id</code> là PK; <code>orders.customer_id</code> là FK tham chiếu <code>customers.id</code>.</p>
                  </div>
                </details>
                <details>
                  <summary><span>02</span>Normalization là gì? Vì sao cần chuẩn hóa?</summary>
                  <div className="interview-answer">
                    <p>Normalization tổ chức dữ liệu thành các bảng hợp lý để giảm lặp dữ liệu và tránh anomaly khi insert, update hoặc delete.</p>
                    <p>Trong business app, thường hướng tới 3NF trước; chỉ denormalize khi có bằng chứng về truy vấn hoặc hiệu năng.</p>
                  </div>
                </details>
                <details>
                  <summary><span>03</span>Quan hệ 1-1, 1-N và N-N được triển khai thế nào?</summary>
                  <div className="interview-answer">
                    <p>1-1 dùng FK có ràng buộc unique; 1-N đặt FK ở phía N; N-N cần bảng trung gian chứa FK của hai bảng.</p>
                    <p><em>Ví dụ:</em> <code>orders</code> và <code>products</code> liên kết N-N qua <code>order_items</code>.</p>
                  </div>
                </details>
                <details>
                  <summary><span>04</span>NULL khác chuỗi rỗng và số 0 như thế nào?</summary>
                  <div className="interview-answer">
                    <p>NULL biểu thị giá trị chưa biết hoặc không tồn tại; chuỗi rỗng và 0 vẫn là các giá trị xác định. So sánh NULL phải dùng <code>IS NULL</code>, không dùng <code>= NULL</code>.</p>
                  </div>
                </details>
              </div>
            </div>

            <div className="interview-group">
              <div className="interview-group-heading">
                <span>SQL thực hành</span>
                <strong>Query, JOIN và tối ưu truy vấn</strong>
              </div>
              <div className="interview-list">
                <details>
                  <summary><span>05</span>INNER JOIN và LEFT JOIN khác nhau thế nào?</summary>
                  <div className="interview-answer">
                    <p>INNER JOIN chỉ trả về row khớp ở cả hai bảng. LEFT JOIN giữ toàn bộ row bên trái và trả NULL cho dữ liệu không khớp bên phải.</p>
                    <p><em>Ví dụ:</em> dùng LEFT JOIN để tìm khách hàng chưa từng tạo order.</p>
                  </div>
                </details>
                <details>
                  <summary><span>06</span>WHERE và HAVING khác nhau thế nào?</summary>
                  <div className="interview-answer">
                    <p>WHERE lọc row trước khi GROUP BY; HAVING lọc kết quả sau khi đã group và aggregate.</p>
                    <p><em>Ví dụ:</em> <code>HAVING COUNT(*) &gt; 5</code> tìm khách hàng có hơn 5 đơn hàng.</p>
                  </div>
                </details>
                <details>
                  <summary><span>07</span>Subquery và JOIN nên chọn cách nào?</summary>
                  <div className="interview-answer">
                    <p>Không có lựa chọn luôn tốt hơn. Chọn cách diễn đạt rõ ý định và kiểm tra execution plan. JOIN phù hợp khi kết hợp tập dữ liệu; EXISTS thường rõ và hiệu quả khi chỉ cần kiểm tra sự tồn tại.</p>
                  </div>
                </details>
                <details>
                  <summary><span>08</span>Index là gì và vì sao index có thể làm hệ thống chậm hơn?</summary>
                  <div className="interview-answer">
                    <p>Index là cấu trúc hỗ trợ tìm và sắp xếp dữ liệu nhanh hơn, nhưng chiếm bộ nhớ và phải cập nhật khi INSERT, UPDATE, DELETE.</p>
                    <p>Nên index theo query thực tế, đặc biệt các cột thường dùng trong WHERE, JOIN và ORDER BY; không index mọi cột.</p>
                  </div>
                </details>
                <details>
                  <summary><span>09</span>Bạn sẽ điều tra một query chậm như thế nào?</summary>
                  <div className="interview-answer">
                    <p>Đo thời gian và tần suất, dùng <code>EXPLAIN</code>/<code>EXPLAIN ANALYZE</code>, kiểm tra full scan, index, số row, JOIN, sort và dữ liệu trả về; sau đó tối ưu và đo lại.</p>
                    <p>Không nên thêm index theo phỏng đoán mà không kiểm tra execution plan.</p>
                  </div>
                </details>
              </div>
            </div>

            <div className="interview-group">
              <div className="interview-group-heading">
                <span>Tính đúng đắn</span>
                <strong>Transaction, ACID và concurrency</strong>
              </div>
              <div className="interview-list">
                <details>
                  <summary><span>10</span>Transaction là gì? Khi nào cần dùng?</summary>
                  <div className="interview-answer">
                    <p>Transaction nhóm nhiều thao tác thành một đơn vị: hoặc tất cả thành công, hoặc rollback. Cần dùng khi các thay đổi phải nhất quán với nhau.</p>
                    <p><em>Ví dụ:</em> tạo order, order items và cập nhật tồn kho không nên hoàn thành một phần.</p>
                  </div>
                </details>
                <details>
                  <summary><span>11</span>ACID có ý nghĩa gì?</summary>
                  <div className="interview-answer">
                    <p><strong>Atomicity</strong>: toàn bộ hoặc không gì cả. <strong>Consistency</strong>: dữ liệu giữ đúng constraint. <strong>Isolation</strong>: transaction đồng thời không gây kết quả sai. <strong>Durability</strong>: dữ liệu commit vẫn tồn tại sau sự cố.</p>
                  </div>
                </details>
                <details>
                  <summary><span>12</span>Race condition khi cập nhật tồn kho xảy ra thế nào?</summary>
                  <div className="interview-answer">
                    <p>Hai request cùng đọc stock còn 1 rồi đều trừ, gây overselling. Có thể xử lý bằng atomic update có điều kiện, locking phù hợp hoặc optimistic concurrency.</p>
                    <p>Cách chọn phụ thuộc mức cạnh tranh, DBMS và yêu cầu throughput.</p>
                  </div>
                </details>
              </div>
            </div>

            <div className="interview-group">
              <div className="interview-group-heading">
                <span>SQL và NoSQL</span>
                <strong>Lựa chọn công nghệ có lý do</strong>
              </div>
              <div className="interview-list">
                <details>
                  <summary><span>13</span>Khi nào bạn chọn SQL thay vì MongoDB?</summary>
                  <div className="interview-answer">
                    <p>Chọn SQL khi dữ liệu có quan hệ rõ, cần JOIN, constraint, transaction và báo cáo linh hoạt, như order, booking, payment và inventory.</p>
                    <p>MongoDB phù hợp hơn khi dữ liệu thường được đọc theo document và schema thay đổi đáng kể giữa các record.</p>
                  </div>
                </details>
                <details>
                  <summary><span>14</span>Redis có nên dùng làm database chính cho đơn hàng không?</summary>
                  <div className="interview-answer">
                    <p>Thông thường không. Redis mạnh cho cache, session, rate limit và dữ liệu truy cập theo key, nhưng order cần durability, quan hệ, transaction và khả năng truy vấn đáng tin cậy.</p>
                  </div>
                </details>
                <details>
                  <summary><span>15</span>Denormalization trong NoSQL có lợi và hại gì?</summary>
                  <div className="interview-answer">
                    <p>Lợi ích là giảm JOIN và tối ưu read theo access pattern. Đổi lại dữ liệu bị lặp, update phức tạp hơn và có nguy cơ không nhất quán.</p>
                    <p>Cần xác định nguồn dữ liệu chính và chiến lược đồng bộ trước khi denormalize.</p>
                  </div>
                </details>
              </div>
            </div>

            <div className="interview-group scenario-interview-group">
              <div className="interview-group-heading">
                <span>Tình huống project</span>
                <strong>Trả lời như một kỹ sư giải quyết nghiệp vụ</strong>
              </div>
              <div className="interview-list">
                <details>
                  <summary><span>16</span>Thiết kế database tối thiểu cho một hệ thống đặt phòng?</summary>
                  <div className="interview-answer">
                    <p>Bắt đầu với User, Accommodation, Room, Booking, Payment và Review. Booking tham chiếu user và room, có check-in/check-out, trạng thái và tổng tiền.</p>
                    <p>Phải làm rõ quy tắc tránh trùng lịch, hủy phòng, hoàn tiền, quyền provider/admin và báo cáo doanh thu trước khi chốt schema.</p>
                  </div>
                </details>
                <details>
                  <summary><span>17</span>Làm sao lưu lịch sử trạng thái shipment?</summary>
                  <div className="interview-answer">
                    <p>Giữ trạng thái hiện tại trên shipment để đọc nhanh và lưu mỗi lần chuyển trạng thái vào bảng shipment_events gồm shipment_id, status, location, actor và timestamp.</p>
                    <p>Cách này hỗ trợ tracking timeline, audit và điều tra sự cố mà không ghi đè lịch sử.</p>
                  </div>
                </details>
                <details>
                  <summary><span>18</span>Nếu interviewer hỏi “database nào tốt nhất?”, bạn trả lời thế nào?</summary>
                  <div className="interview-answer">
                    <p>Không có database tốt nhất cho mọi hệ thống. Tôi sẽ hỏi về entity, relationship, transaction, access pattern, quy mô, consistency, reporting và năng lực vận hành.</p>
                    <p>Với business app mới, tôi thường bắt đầu bằng PostgreSQL/MySQL và chỉ thêm database khác khi một yêu cầu cụ thể chứng minh lợi ích.</p>
                  </div>
                </details>
              </div>
            </div>
          </section>

          <section className="lesson-section review-section" id="review">
            <p className="section-label">11 · Tự kiểm tra</p>
            <h2>Bạn đã nắm được bài học chưa?</h2>
            <div className="review-list">
              <details><summary>1. Database và DBMS khác nhau như thế nào?</summary><p>Database là dữ liệu có tổ chức; DBMS là phần mềm dùng để tạo, truy vấn và quản lý dữ liệu đó.</p></details>
              <details><summary>2. Row và column đại diện cho điều gì?</summary><p>Row là một bản ghi cụ thể; column là một thuộc tính chung của các bản ghi trong bảng.</p></details>
              <details><summary>3. Vì sao không lưu lại toàn bộ thông tin khách hàng trong mỗi order?</summary><p>Việc lặp dữ liệu gây dư thừa và dễ mất nhất quán. Ta lưu khóa ngoại để tham chiếu đến khách hàng.</p></details>
              <details><summary>4. Primary Key có nhiệm vụ gì?</summary><p>Primary Key định danh duy nhất mỗi bản ghi trong một bảng.</p></details>
              <details><summary>5. SQL có phải là tên một database không?</summary><p>Không. SQL là ngôn ngữ truy vấn; MySQL, PostgreSQL và SQL Server mới là các hệ quản trị cơ sở dữ liệu sử dụng SQL.</p></details>
              <details><summary>6. Khi nào document database có thể phù hợp?</summary><p>Khi dữ liệu thường được đọc theo một object hoàn chỉnh, thuộc tính linh hoạt và hệ thống không phụ thuộc nhiều vào JOIN hoặc transaction xuyên nhiều entity.</p></details>
              <details><summary>7. Vì sao không nên chọn nhiều database ngay từ đầu?</summary><p>Mỗi database làm tăng chi phí triển khai, monitoring, backup, bảo mật và đồng bộ dữ liệu. Chỉ thêm khi một yêu cầu cụ thể chứng minh lợi ích lớn hơn độ phức tạp.</p></details>
            </div>
          </section>

          <div className="next-lesson">
            <span>Bài tiếp theo</span>
            <strong>Data Modeling và cách đọc ERD</strong>
            <p>Chuyển yêu cầu nghiệp vụ thành entity, relationship, schema và một mô hình dữ liệu có thể triển khai.</p>
            <a
              className="next-lesson-link"
              href="/knowledge/database/data-modeling"
              onClick={(event) => navigate(event, "/knowledge/database/data-modeling")}
            >
              Bắt đầu bài 03
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          </div>
        </article>
      </div>

      <footer>
        <span>Database Fundamentals · Bài 02</span>
        <span><Sparkles size={15} aria-hidden="true" /> Learn from projects</span>
      </footer>
    </main>
  );
}

function DataModelingLessonPage({ navigate }: { navigate: NavigateHandler }) {
  return (
    <main className="site-shell knowledge-shell modeling-lesson">
      <header className="topbar knowledge-topbar" aria-label="Data modeling lesson navigation">
        <a
          className="brand"
          href="/knowledge"
          onClick={(event) => navigate(event, "/knowledge")}
          aria-label="Learning hub"
        >
          <div className="brand-avatar-wrap">
            <img className="brand-avatar" src="/assets/avatar.png" alt="Knowledge Hub" />
            <span className="brand-dot-pulse" aria-hidden="true" />
          </div>
          <div className="brand-text">
            <span className="brand-name">Knowledge Hub</span>
            <span className="brand-tag">Data Modeling &amp; ERD</span>
          </div>
        </a>
        <nav>
          <a href="#requirements">Yêu cầu</a>
          <a href="#erd">ERD</a>
          <a href="#normalization">Chuẩn hóa</a>
          <a href="#practice">Bài tập</a>
        </nav>
      </header>
      <LearningPathNav currentPath="/knowledge/database/data-modeling" navigate={navigate} />

      <section className="knowledge-hero modeling-hero">
        <div>
          <a
            className="back-link"
            href="/knowledge/database"
            onClick={(event) => navigate(event, "/knowledge/database")}
          >
            <ArrowLeft size={17} aria-hidden="true" />
            Trở về Database Fundamentals
          </a>
          <p className="eyebrow">Database Fundamentals · Bài 03</p>
          <h1>Data Modeling: từ yêu cầu nghiệp vụ đến ERD</h1>
          <p className="knowledge-lede">
            Học như trong một buổi phân tích hệ thống: đọc yêu cầu đặt phòng, đặt câu hỏi làm rõ, tìm entity,
            xác định cardinality, vẽ ERD, chuyển sang relational schema và kiểm tra chuẩn hóa.
          </p>
          <div className="lesson-meta" aria-label="Lesson information">
            <span><BookOpen size={16} aria-hidden="true" /> Thực hành có hướng dẫn</span>
            <span>35 phút học</span>
            <span>1 case study xuyên suốt</span>
          </div>
        </div>

        <aside className="learning-outcomes">
          <p className="panel-label">Sau bài này, bạn có thể</p>
          <ul>
            <li><CheckCircle2 size={18} aria-hidden="true" /> Tách entity và attribute từ requirement.</li>
            <li><CheckCircle2 size={18} aria-hidden="true" /> Xác định quan hệ 1-1, 1-N và N-N.</li>
            <li><CheckCircle2 size={18} aria-hidden="true" /> Đọc và giải thích một ERD bằng nghiệp vụ.</li>
            <li><CheckCircle2 size={18} aria-hidden="true" /> Kiểm tra schema theo 1NF, 2NF và 3NF.</li>
          </ul>
        </aside>
      </section>

      <div className="lesson-layout">
        <aside className="lesson-toc" aria-label="Mục lục bài Data Modeling">
          <p>Chương trong bài</p>
          <a href="#requirements">1. Đọc yêu cầu</a>
          <a href="#entities">2. Entity và key</a>
          <a href="#cardinality">3. Relationship và ERD</a>
          <a href="#schema">4. Schema và chuẩn hóa</a>
          <a href="#practice">5. Thực hành và ôn tập</a>
        </aside>

        <article className="lesson-content">
          <section className="lesson-section" id="requirements">
            <p className="section-label">01 · Bắt đầu từ nghiệp vụ</p>
            <h2>Đừng vẽ bảng ngay khi vừa đọc đề</h2>
            <p>
              Giảng viên đưa cho bạn yêu cầu: “Khách hàng có thể tìm phòng và tạo booking. Một booking có thể
              gồm nhiều phòng, có thanh toán và sau khi hoàn tất khách hàng có thể đánh giá nơi lưu trú.”
            </p>

            <div className="case-brief">
              <span>Case study · Tourist accommodation</span>
              <h3>Những gì đề bài chưa nói</h3>
              <div className="clarifying-grid">
                <div><strong>Booking nhiều phòng?</strong><p>Có. Vì vậy Booking và Room có thể là quan hệ N-N.</p></div>
                <div><strong>Một booking nhiều payment?</strong><p>Có thể có thanh toán lại hoặc hoàn tiền, nên không vội gắn payment thành vài cột.</p></div>
                <div><strong>Review cho room hay accommodation?</strong><p>Trong bài này review thuộc accommodation và phát sinh từ booking đã hoàn tất.</p></div>
                <div><strong>Giá phòng có thay đổi?</strong><p>Có. Booking phải giữ giá tại thời điểm đặt, không chỉ đọc giá hiện tại của room.</p></div>
              </div>
            </div>

            <div className="teacher-note">
              <strong>Thầy nhắc:</strong>
              <p>
                Data model không chỉ phản ánh danh từ trong câu. Nó phản ánh business rule, lịch sử cần lưu và
                những câu hỏi hệ thống phải trả lời sau này.
              </p>
            </div>
          </section>

          <section className="lesson-section" id="entities">
            <p className="section-label">02 · Entity discovery</p>
            <h2>Tìm đối tượng có danh tính và vòng đời riêng</h2>
            <p>
              Entity thường là đối tượng nghiệp vụ cần được tạo, thay đổi, tra cứu hoặc tham chiếu độc lập.
              Danh từ chỉ là gợi ý; tiêu chí quan trọng là hệ thống có cần quản lý vòng đời của nó hay không.
            </p>

            <div className="entity-discovery-grid">
              <article><span>Actor</span><h3>User</h3><p>Có tài khoản, danh tính và tạo booking.</p></article>
              <article><span>Business object</span><h3>Accommodation</h3><p>Nơi lưu trú chứa nhiều room và nhận review.</p></article>
              <article><span>Inventory</span><h3>Room</h3><p>Đơn vị có loại phòng, sức chứa, giá và trạng thái.</p></article>
              <article><span>Transaction</span><h3>Booking</h3><p>Ghi nhận ý định đặt phòng, thời gian và trạng thái.</p></article>
              <article><span>Financial record</span><h3>Payment</h3><p>Có phương thức, số tiền, trạng thái và thời điểm riêng.</p></article>
              <article><span>Feedback</span><h3>Review</h3><p>Điểm số và nhận xét gắn với trải nghiệm đã hoàn tất.</p></article>
            </div>

            <details className="teacher-question">
              <summary>Kiểm tra tư duy: “room price” có phải entity không?</summary>
              <p>
                Chưa chắc. Nếu chỉ cần giá hiện tại, <code>price</code> là attribute của Room. Nếu cần lịch sử giá,
                giá theo ngày hoặc chính sách giá, ta có thể tách thành RatePlan hoặc RoomRate có vòng đời riêng.
              </p>
            </details>
          </section>

          <section className="lesson-section" id="attributes">
            <p className="section-label">03 · Attribute và key</p>
            <h2>Mỗi attribute phải mô tả đúng một sự thật</h2>
            <p>
              Attribute mô tả entity. Chọn data type, tính bắt buộc, uniqueness và default value là một phần của
              mô hình, không phải việc để “lúc code tính sau”.
            </p>

            <div className="attribute-board">
              <div className="attribute-entity">
                <strong>booking</strong>
                <span><KeyRound size={14} aria-hidden="true" /> id · PK</span>
                <span>user_id · FK · NOT NULL</span>
                <span>check_in · DATE</span>
                <span>check_out · DATE</span>
                <span>status · VARCHAR</span>
                <span>total_amount · DECIMAL</span>
                <span>created_at · TIMESTAMP</span>
              </div>
              <div className="attribute-rules">
                <h3>Constraint kể lại business rule</h3>
                <ul>
                  <li><code>check_out &gt; check_in</code></li>
                  <li><code>total_amount &gt;= 0</code></li>
                  <li><code>user_id</code> phải tham chiếu user tồn tại</li>
                  <li><code>status</code> chỉ nhận tập giá trị hợp lệ</li>
                </ul>
              </div>
            </div>

            <div className="key-comparison">
              <div><strong>Natural key</strong><p>Có ý nghĩa nghiệp vụ như email hoặc mã vận đơn, nhưng có thể thay đổi.</p></div>
              <div><strong>Surrogate key</strong><p>ID kỹ thuật như UUID hoặc auto-increment, ổn định cho relationship.</p></div>
              <div><strong>Composite key</strong><p>Nhiều cột cùng định danh row, thường gặp ở bảng trung gian.</p></div>
            </div>
          </section>

          <section className="lesson-section" id="cardinality">
            <p className="section-label">04 · Relationship và cardinality</p>
            <h2>Đọc quan hệ bằng hai câu hỏi</h2>
            <p>
              Với mỗi cặp entity, hỏi theo cả hai chiều: “Một A có tối đa bao nhiêu B?” và “Một B thuộc tối đa
              bao nhiêu A?”. Sau đó hỏi thêm quan hệ có bắt buộc hay không.
            </p>

            <div className="cardinality-grid">
              <article>
                <span>1 → N</span>
                <h3>User tạo Booking</h3>
                <p>Một user có nhiều booking; mỗi booking thuộc đúng một user.</p>
                <code>bookings.user_id → users.id</code>
              </article>
              <article>
                <span>1 → N</span>
                <h3>Accommodation chứa Room</h3>
                <p>Một accommodation có nhiều room; mỗi room thuộc một accommodation.</p>
                <code>rooms.accommodation_id</code>
              </article>
              <article>
                <span>N ↔ N</span>
                <h3>Booking gồm Room</h3>
                <p>Một booking có nhiều room; một room xuất hiện trong nhiều booking theo thời gian.</p>
                <code>booking_rooms</code>
              </article>
              <article>
                <span>1 → 0..N</span>
                <h3>Booking có Payment</h3>
                <p>Booking mới tạo có thể chưa thanh toán và có thể phát sinh nhiều payment attempt.</p>
                <code>payments.booking_id</code>
              </article>
            </div>

            <div className="junction-explainer">
              <div>
                <p className="panel-label">Vì sao cần bảng trung gian?</p>
                <h3>Quan hệ N-N thường chứa dữ liệu của chính quan hệ đó</h3>
              </div>
              <div className="junction-fields">
                <span>booking_id · FK</span>
                <span>room_id · FK</span>
                <span>unit_price</span>
                <span>guest_count</span>
              </div>
              <p>
                <code>unit_price</code> không thuộc riêng Room hay Booking. Nó là giá của room trong booking cụ thể,
                nên nằm ở <code>booking_rooms</code>.
              </p>
            </div>
          </section>

          <section className="lesson-section" id="erd">
            <p className="section-label">05 · ERD</p>
            <h2>Đọc ERD như một câu chuyện nghiệp vụ</h2>
            <p>
              ERD dưới đây không chỉ là sơ đồ kỹ thuật. Hãy đọc: user tạo booking; booking chọn room qua
              booking_rooms; room thuộc accommodation; booking phát sinh payment; booking hoàn tất có thể tạo review.
            </p>

            <div className="booking-erd" aria-label="Booking system entity relationship diagram">
              <div className="erd-node erd-user"><strong>users</strong><span>id · PK</span><span>email · UQ</span><span>full_name</span></div>
              <div className="erd-node erd-booking"><strong>bookings</strong><span>id · PK</span><span>user_id · FK</span><span>check_in / check_out</span><span>status</span></div>
              <div className="erd-node erd-booking-room"><strong>booking_rooms</strong><span>booking_id · PK/FK</span><span>room_id · PK/FK</span><span>unit_price</span></div>
              <div className="erd-node erd-room"><strong>rooms</strong><span>id · PK</span><span>accommodation_id · FK</span><span>name / capacity</span></div>
              <div className="erd-node erd-accommodation"><strong>accommodations</strong><span>id · PK</span><span>name / address</span><span>provider_id · FK</span></div>
              <div className="erd-node erd-payment"><strong>payments</strong><span>id · PK</span><span>booking_id · FK</span><span>amount / status</span></div>
              <div className="erd-node erd-review"><strong>reviews</strong><span>id · PK</span><span>booking_id · FK/UQ</span><span>rating / comment</span></div>
              <span className="erd-edge edge-user-booking">1 — N</span>
              <span className="erd-edge edge-booking-junction">1 — N</span>
              <span className="erd-edge edge-room-junction">N — 1</span>
              <span className="erd-edge edge-room-accommodation">N — 1</span>
              <span className="erd-edge edge-booking-payment">1 — N</span>
              <span className="erd-edge edge-booking-review">1 — 0..1</span>
            </div>

            <details className="teacher-question">
              <summary>Thử giải thích ERD này trong 60 giây như khi phỏng vấn</summary>
              <p>
                “User có thể tạo nhiều booking. Booking và room là N-N nên tôi dùng booking_rooms, đồng thời lưu
                unit_price để giữ giá tại thời điểm đặt. Mỗi room thuộc một accommodation. Booking có nhiều payment
                attempt và tối đa một review sau khi hoàn tất. Foreign key giữ toàn vẹn, còn unique trên
                reviews.booking_id ngăn review trùng.”
              </p>
            </details>
          </section>

          <section className="lesson-section" id="schema">
            <p className="section-label">06 · Từ ERD sang relational schema</p>
            <h2>Mỗi entity thành bảng, mỗi relationship thành constraint</h2>
            <div className="schema-code">
              <div className="table-caption">
                <strong>Ví dụ DDL rút gọn</strong>
                <span>PostgreSQL-style SQL</span>
              </div>
              <pre><code>{`CREATE TABLE booking_rooms (
  booking_id BIGINT NOT NULL REFERENCES bookings(id),
  room_id BIGINT NOT NULL REFERENCES rooms(id),
  unit_price DECIMAL(12, 2) NOT NULL CHECK (unit_price >= 0),
  guest_count INT NOT NULL CHECK (guest_count > 0),
  PRIMARY KEY (booking_id, room_id)
);

CREATE TABLE reviews (
  id BIGINT PRIMARY KEY,
  booking_id BIGINT NOT NULL UNIQUE REFERENCES bookings(id),
  rating INT NOT NULL CHECK (rating BETWEEN 1 AND 5),
  comment TEXT
);`}</code></pre>
            </div>

            <div className="schema-checklist">
              <h3>Trước khi chấp nhận schema</h3>
              <ul>
                <li>PK có ổn định và duy nhất không?</li>
                <li>FK có đúng ownership và optionality không?</li>
                <li>Constraint nào nên được database bảo vệ?</li>
                <li>Kiểu dữ liệu có phù hợp tiền, thời gian và Unicode không?</li>
                <li>Query quan trọng sẽ đi qua cột nào và cần index gì?</li>
              </ul>
            </div>
          </section>

          <section className="lesson-section" id="normalization">
            <p className="section-label">07 · Normalization</p>
            <h2>Chuẩn hóa là loại bỏ sự phụ thuộc sai chỗ</h2>
            <p>
              Mục tiêu không phải chia càng nhiều bảng càng tốt. Mục tiêu là mỗi sự thật có một nơi chịu trách nhiệm,
              để update không tạo ra nhiều phiên bản mâu thuẫn.
            </p>

            <div className="normalization-steps">
              <article>
                <span>1NF</span>
                <div><h3>Giá trị phải atomic</h3><p>Không lưu <code>room_ids = "12,18,21"</code> trong một cột. Mỗi quan hệ booking-room là một row.</p></div>
              </article>
              <article>
                <span>2NF</span>
                <div><h3>Không phụ thuộc một phần composite key</h3><p>Trong booking_rooms, <code>room_name</code> chỉ phụ thuộc room_id nên phải nằm ở rooms.</p></div>
              </article>
              <article>
                <span>3NF</span>
                <div><h3>Không phụ thuộc bắc cầu</h3><p>Không lưu accommodation_address trong rooms nếu address phụ thuộc accommodation_id.</p></div>
              </article>
            </div>

            <div className="before-after-model">
              <div className="bad-model">
                <span>Thiết kế yếu</span>
                <code>booking(id, user_name, room_ids, room_names, hotel_address, payment_status)</code>
                <p>Dữ liệu lặp, khó constraint, khó query và update dễ sai lệch.</p>
              </div>
              <div className="good-model">
                <span>Thiết kế đã phân trách nhiệm</span>
                <code>users → bookings → booking_rooms ← rooms → accommodations</code>
                <p>Mỗi bảng quản lý một sự thật; relationship được thể hiện bằng key.</p>
              </div>
            </div>
          </section>

          <section className="lesson-section" id="mistakes">
            <p className="section-label">08 · Lỗi thường gặp</p>
            <h2>Năm dấu hiệu data model cần xem lại</h2>
            <div className="modeling-mistakes">
              <div><span>01</span><p><strong>Một cột chứa danh sách.</strong> Thường đang giấu quan hệ N-N.</p></div>
              <div><span>02</span><p><strong>Lưu dữ liệu có thể suy ra ở khắp nơi.</strong> Dễ tạo nhiều nguồn sự thật.</p></div>
              <div><span>03</span><p><strong>Không lưu snapshot lịch sử.</strong> Giá hiện tại thay đổi làm sai booking cũ.</p></div>
              <div><span>04</span><p><strong>Dùng text cho mọi status.</strong> Thiếu tập giá trị và transition hợp lệ.</p></div>
              <div><span>05</span><p><strong>ERD không trả lời nghiệp vụ.</strong> Có bảng nhưng không biết ai tạo, khi nào và vì sao.</p></div>
            </div>
          </section>

          <section className="lesson-section" id="practice">
            <p className="section-label">09 · Bài tập trên lớp</p>
            <h2>Đến lượt bạn thiết kế</h2>
            <div className="practice-assignment">
              <div>
                <span>Đề bài 15 phút</span>
                <h3>Thêm dịch vụ bổ sung vào booking</h3>
                <p>
                  Khách có thể chọn bữa sáng, đưa đón sân bay hoặc thuê xe. Mỗi dịch vụ có giá riêng tại thời điểm
                  đặt và một booking có thể chọn nhiều dịch vụ với số lượng khác nhau.
                </p>
              </div>
              <ol>
                <li>Xác định entity mới.</li>
                <li>Chọn cardinality với Booking.</li>
                <li>Quyết định nơi lưu quantity và unit_price.</li>
                <li>Viết PK, FK và constraint cần thiết.</li>
              </ol>
            </div>

            <details className="solution-card">
              <summary>Mở đáp án gợi ý sau khi đã tự làm</summary>
              <div>
                <p>Tạo <code>services</code> và bảng trung gian <code>booking_services</code>.</p>
                <pre><code>{`services(id PK, accommodation_id FK, name, current_price)

booking_services(
  booking_id PK/FK,
  service_id PK/FK,
  quantity CHECK (quantity > 0),
  unit_price CHECK (unit_price >= 0)
)`}</code></pre>
                <p>
                  <code>unit_price</code> nằm ở bảng trung gian để giữ snapshot giá tại thời điểm booking.
                  Composite PK ngăn cùng service bị thêm lặp cho một booking.
                </p>
              </div>
            </details>
          </section>

          <section className="lesson-section review-section" id="modeling-review">
            <p className="section-label">10 · Ôn tập và phỏng vấn</p>
            <h2>Trả lời thành tiếng trước khi mở đáp án</h2>
            <div className="review-list">
              <details><summary>1. Làm sao phân biệt entity và attribute?</summary><p>Entity có danh tính, vòng đời và thường được tham chiếu độc lập. Attribute chỉ mô tả một entity. Nếu “giá” cần lịch sử và quy tắc riêng, nó có thể phát triển từ attribute thành entity.</p></details>
              <details><summary>2. Vì sao quan hệ N-N cần bảng trung gian?</summary><p>Relational database không biểu diễn trực tiếp N-N bằng một FK. Bảng trung gian tách quan hệ thành hai quan hệ 1-N và có thể chứa dữ liệu của quan hệ như quantity hoặc unit_price.</p></details>
              <details><summary>3. Cardinality và optionality khác nhau thế nào?</summary><p>Cardinality mô tả số lượng tối đa như một hay nhiều; optionality mô tả tối thiểu là 0 hay 1. Booking có 0..N payment nghĩa là payment chưa bắt buộc khi booking mới tạo.</p></details>
              <details><summary>4. Khi nào dùng composite key?</summary><p>Khi tổ hợp nhiều cột tự nhiên định danh duy nhất row, thường ở bảng junction. Có thể dùng surrogate ID nhưng vẫn nên đặt unique constraint trên cặp business key.</p></details>
              <details><summary>5. 3NF giải quyết vấn đề gì?</summary><p>3NF loại bỏ phụ thuộc bắc cầu: non-key attribute không nên phụ thuộc vào non-key attribute khác. Điều này giảm lặp và update anomaly.</p></details>
              <details><summary>6. Vì sao booking_rooms lưu unit_price?</summary><p>Vì cần snapshot giá tại thời điểm đặt. Nếu chỉ tham chiếu rooms.current_price, lịch sử booking sẽ thay đổi khi giá phòng được cập nhật.</p></details>
              <details><summary>7. ERD có đủ để triển khai database chưa?</summary><p>Chưa. Cần thêm data type, nullability, default, check/unique constraint, index, cascade policy và các rule không thể hiện đầy đủ trên ERD.</p></details>
            </div>
          </section>

          <div className="next-lesson">
            <span>Bước tiếp theo</span>
            <strong>Đưa data model ra ngoài bằng REST API</strong>
            <p>Học request lifecycle, resource design, validation, authentication và authorization.</p>
            <a
              className="next-lesson-link"
              href="/knowledge/backend-api"
              onClick={(event) => navigate(event, "/knowledge/backend-api")}
            >
              Sang Backend &amp; API
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          </div>
        </article>
      </div>

      <footer>
        <span>Data Modeling &amp; ERD · Bài 03</span>
        <span><Sparkles size={15} aria-hidden="true" /> Learn by modeling</span>
      </footer>
    </main>
  );
}

function BackendApiLessonPage({ navigate }: { navigate: NavigateHandler }) {
  const statusCodes = [
    ["200", "OK", "Đọc hoặc cập nhật thành công"],
    ["201", "Created", "Tạo resource mới thành công"],
    ["204", "No Content", "Thành công và không cần response body"],
    ["400", "Bad Request", "Request sai cú pháp hoặc dữ liệu không hợp lệ"],
    ["401", "Unauthorized", "Chưa xác thực hoặc token không hợp lệ"],
    ["403", "Forbidden", "Đã xác thực nhưng không có quyền"],
    ["404", "Not Found", "Resource không tồn tại"],
    ["409", "Conflict", "Xung đột trạng thái hoặc dữ liệu bị trùng"],
    ["500", "Server Error", "Lỗi không mong đợi từ phía server"],
  ];

  return (
    <main className="site-shell knowledge-shell backend-lesson">
      <header className="topbar knowledge-topbar" aria-label="Knowledge navigation">
        <a
          className="brand"
          href="/knowledge"
          onClick={(event) => navigate(event, "/knowledge")}
          aria-label="Learning hub"
        >
          <div className="brand-avatar-wrap">
            <img className="brand-avatar" src="/assets/avatar.png" alt="Knowledge Hub" />
            <span className="brand-dot-pulse" aria-hidden="true" />
          </div>
          <div className="brand-text">
            <span className="brand-name">Knowledge Hub</span>
            <span className="brand-tag">Backend &amp; Auth</span>
          </div>
        </a>
        <nav>
          <a href="#self-study-guide">Bắt đầu</a>
          <a href="#rest-design">REST API</a>
          <a href="#auth-foundations">Authentication</a>
          <a href="#practice-project">Thực hành</a>
        </nav>
      </header>
      <LearningPathNav currentPath="/knowledge/backend-api" navigate={navigate} />

      <section className="knowledge-hero backend-hero">
        <div>
          <a
            className="back-link"
            href="/knowledge/database/data-modeling"
            onClick={(event) => navigate(event, "/knowledge/database/data-modeling")}
          >
            <ArrowLeft size={17} aria-hidden="true" />
            Trở về Data Modeling &amp; ERD
          </a>
          <p className="eyebrow">Backend Engineering · Bài 04</p>
          <h1>Từ database đến một REST API có thể sử dụng thật</h1>
          <p className="knowledge-lede">
            Tự học backend theo từng module ngắn: hiểu request lifecycle, thiết kế REST API, sau đó đi sâu vào
            authentication, session/token, authorization và cách kiểm thử một hệ thống đăng nhập an toàn.
          </p>
          <div className="lesson-meta" aria-label="Lesson information">
            <span><BookOpen size={16} aria-hidden="true" /> Buổi học có hướng dẫn</span>
            <span>3 tiết học</span>
            <span>9 checkpoint thực hành</span>
          </div>
        </div>

        <aside className="learning-outcomes">
          <p className="panel-label">Sau bài này, bạn có thể</p>
          <ul>
            <li><CheckCircle2 size={18} aria-hidden="true" /> Giải thích request lifecycle từ client đến database.</li>
            <li><CheckCircle2 size={18} aria-hidden="true" /> Thiết kế endpoint, status code và response nhất quán.</li>
            <li><CheckCircle2 size={18} aria-hidden="true" /> Thiết kế login, session/token và refresh flow.</li>
            <li><CheckCircle2 size={18} aria-hidden="true" /> Kiểm thử authentication, authorization và ownership.</li>
          </ul>
        </aside>
      </section>

      <div className="lesson-layout">
        <aside className="lesson-toc" aria-label="Mục lục bài học">
          <p>Chương trong bài</p>
          <a href="#self-study-guide">1. Bắt đầu buổi học</a>
          <a href="#request-lifecycle">2. Request và REST</a>
          <a href="#auth-foundations">3. Authentication</a>
          <a href="#authorization">4. Authorization và security</a>
          <a href="#practice-project">5. Thực hành và ôn tập</a>
        </aside>

        <article className="lesson-content">
          <section className="lesson-section" id="self-study-guide">
            <p className="section-label">01 · Giáo án hôm nay</p>
            <h2>Ta sẽ theo dấu một request từ đầu đến cuối</h2>
            <p>
              Thầy dùng một tình huống xuyên suốt: user gửi <code>POST /api/tasks</code>. Mỗi phần sẽ trả lời một
              câu hỏi: request đi đâu, dữ liệu được kiểm tra thế nào, danh tính được xác minh ra sao và vì sao
              backend được phép hoặc không được phép ghi vào database.
            </p>
            <div className="study-cycle">
              <div><span>01</span><strong>Quan sát</strong><p>Đọc request, response và luồng xử lý mẫu.</p></div>
              <div><span>02</span><strong>Giải thích</strong><p>Nói lại trách nhiệm của từng lớp bằng lời của bạn.</p></div>
              <div><span>03</span><strong>Thiết kế</strong><p>Chọn endpoint, rule, auth và error contract.</p></div>
              <div><span>04</span><strong>Chứng minh</strong><p>Viết test cho đường thành công và đường bị từ chối.</p></div>
            </div>
            <div className="lecture-agenda">
              <article>
                <span>Tiết 1</span>
                <h3>Request và REST contract</h3>
                <p>Request lifecycle, resource, method, status code và validation boundary.</p>
              </article>
              <article>
                <span>Tiết 2</span>
                <h3>Danh tính và quyền truy cập</h3>
                <p>Authentication, session/token, authorization, role và ownership.</p>
              </article>
              <article>
                <span>Tiết 3</span>
                <h3>Bảo mật và kiểm thử</h3>
                <p>Threat model, đường từ chối, integration test và project tổng hợp.</p>
              </article>
            </div>
            <div className="study-rule">
              <strong>Quy tắc của lớp</strong>
              <p>Mỗi khi gặp sơ đồ hoặc code, hãy dự đoán bước tiếp theo trước khi đọc lời giải. Không học JWT trước khi giải thích được session.</p>
            </div>
            <details className="teacher-question">
              <summary>Câu hỏi khởi động: backend cần làm gì trước khi INSERT task?</summary>
              <p>
                Tối thiểu phải parse request, xác thực danh tính, kiểm tra input, áp dụng business rule và
                ownership, sau đó mới gọi lớp truy cập dữ liệu. Database vẫn bảo vệ constraint cuối cùng.
              </p>
            </details>
          </section>

          <section className="lesson-section" id="mental-model">
            <p className="section-label">02 · Mental model</p>
            <h2>Backend là lớp bảo vệ nghiệp vụ và dữ liệu</h2>
            <p>
              Client gửi ý định, chẳng hạn “tạo công việc mới”. Backend xác thực người gửi, kiểm tra dữ liệu, áp
              dụng business rule, đọc hoặc ghi database rồi trả về một kết quả có cấu trúc.
            </p>
            <div className="backend-responsibility-grid">
              <article><Network size={21} aria-hidden="true" /><h3>Giao tiếp</h3><p>Nhận HTTP request và trả response theo contract.</p></article>
              <article><CheckCircle2 size={21} aria-hidden="true" /><h3>Nghiệp vụ</h3><p>Quyết định thao tác nào hợp lệ trong trạng thái hiện tại.</p></article>
              <article><KeyRound size={21} aria-hidden="true" /><h3>Bảo mật</h3><p>Xác minh danh tính và quyền truy cập resource.</p></article>
              <article><Database size={21} aria-hidden="true" /><h3>Dữ liệu</h3><p>Duy trì transaction, constraint và tính nhất quán.</p></article>
            </div>
            <p className="lesson-note">
              <strong>Tư duy quan trọng:</strong> frontend có thể hỗ trợ validation để UX tốt hơn, nhưng backend vẫn
              phải kiểm tra lại vì request có thể được gửi trực tiếp bằng Postman hoặc script.
            </p>
          </section>

          <section className="lesson-section" id="request-lifecycle">
            <p className="section-label">03 · Request lifecycle</p>
            <h2>Một request nên đi qua các trách nhiệm rõ ràng</h2>
            <div className="request-flow" aria-label="HTTP request lifecycle">
              <div><span>1</span><strong>Client</strong><small>POST /api/tasks</small></div>
              <b>→</b>
              <div><span>2</span><strong>Route</strong><small>Chọn handler</small></div>
              <b>→</b>
              <div><span>3</span><strong>Controller</strong><small>HTTP input/output</small></div>
              <b>→</b>
              <div><span>4</span><strong>Service</strong><small>Business rules</small></div>
              <b>→</b>
              <div><span>5</span><strong>Repository</strong><small>Database query</small></div>
            </div>
            <div className="definition-card">
              <strong>Nguyên tắc phân lớp</strong>
              <p>
                Controller không nên chứa toàn bộ nghiệp vụ. Service không nên phụ thuộc vào chi tiết HTTP.
                Repository tập trung vào truy cập dữ liệu. Phân lớp tốt giúp test dễ hơn và tránh một file xử lý
                mọi thứ.
              </p>
            </div>
            <details className="teacher-question">
              <summary>Checkpoint: validation, authentication và authorization nằm ở đâu?</summary>
              <p>
                Validation hình dạng request thường nằm ở boundary/middleware; authentication thiết lập identity
                trước controller hoặc service; authorization và ownership cần được kiểm tra gần business action,
                thường trong policy/service. Database constraint bảo vệ tính toàn vẹn khi mọi lớp khác thất bại.
              </p>
            </details>
          </section>

          <section className="lesson-section" id="rest-design">
            <p className="section-label">04 · API contract</p>
            <h2>Thiết kế endpoint xoay quanh resource</h2>
            <p>
              REST dùng HTTP method để thể hiện hành động và URL để định danh resource. Dùng danh từ số nhiều,
              giữ naming nhất quán và chỉ đưa động từ vào URL khi đó thực sự là một business action.
            </p>
            <div className="endpoint-table-wrap">
              <table className="endpoint-table">
                <thead><tr><th>Method</th><th>Endpoint</th><th>Ý nghĩa</th></tr></thead>
                <tbody>
                  <tr><td><code>GET</code></td><td>/api/tasks</td><td>Lấy danh sách, có filter và pagination</td></tr>
                  <tr><td><code>GET</code></td><td>/api/tasks/:id</td><td>Lấy một công việc</td></tr>
                  <tr><td><code>POST</code></td><td>/api/tasks</td><td>Tạo công việc mới</td></tr>
                  <tr><td><code>PATCH</code></td><td>/api/tasks/:id</td><td>Cập nhật một phần</td></tr>
                  <tr><td><code>DELETE</code></td><td>/api/tasks/:id</td><td>Xóa công việc</td></tr>
                  <tr><td><code>POST</code></td><td>/api/tasks/:id/complete</td><td>Business action: hoàn thành công việc</td></tr>
                </tbody>
              </table>
            </div>
            <div className="code-comparison api-example">
              <div>
                <span className="code-label">Request</span>
                <pre><code>{`POST /api/tasks
Content-Type: application/json

{
  "title": "Review REST API",
  "dueDate": "2026-06-15"
}`}</code></pre>
              </div>
              <div>
                <span className="code-label">Response · 201 Created</span>
                <pre><code>{`{
  "data": {
    "id": 42,
    "title": "Review REST API",
    "status": "TODO",
    "dueDate": "2026-06-15"
  }
}`}</code></pre>
              </div>
            </div>
          </section>

          <section className="lesson-section" id="status-codes">
            <p className="section-label">05 · HTTP semantics</p>
            <h2>Status code là một phần của contract</h2>
            <div className="status-code-grid">
              {statusCodes.map(([code, title, description]) => (
                <article key={code}>
                  <strong>{code}</strong>
                  <div><span>{title}</span><p>{description}</p></div>
                </article>
              ))}
            </div>
          </section>

          <section className="lesson-section" id="validation">
            <p className="section-label">06 · Dữ liệu đầu vào</p>
            <h2>Validation tốt trả lời rõ: sai ở đâu và sửa thế nào?</h2>
            <p>
              Kiểm tra kiểu dữ liệu, field bắt buộc và định dạng ở boundary. Business rule như “không hoàn thành
              task đã bị hủy” thuộc service. Constraint duy nhất vẫn cần được bảo vệ ở database.
            </p>
            <div className="code-comparison api-example">
              <div>
                <span className="code-label">Không nên</span>
                <pre><code>{`{
  "error": "Something went wrong"
}`}</code></pre>
                <p>Client không biết field nào sai hoặc nên xử lý ra sao.</p>
              </div>
              <div>
                <span className="code-label">Response lỗi có cấu trúc</span>
                <pre><code>{`{
  "code": "VALIDATION_ERROR",
  "message": "Request data is invalid",
  "errors": [
    {
      "field": "title",
      "message": "Title is required"
    }
  ]
}`}</code></pre>
              </div>
            </div>
          </section>

          <section className="lesson-section auth-section" id="auth-foundations">
            <p className="section-label">07 · Authentication foundations</p>
            <h2>Authentication là quá trình thiết lập và duy trì danh tính</h2>
            <p>
              Một hệ thống auth không kết thúc ở endpoint login. Nó bắt đầu từ đăng ký và lưu password, tiếp tục
              qua việc tạo session, xác thực từng request, gia hạn hoặc thu hồi quyền truy cập, rồi kết thúc bằng
              logout và xử lý tài khoản bị xâm nhập.
            </p>
            <div className="comparison-grid">
              <div>
                <KeyRound size={22} aria-hidden="true" />
                <h3>Authentication</h3>
                <p>Chứng minh request đang đại diện cho danh tính nào.</p>
                <span>Login, session, token, MFA, logout</span>
              </div>
              <div>
                <ServerCog size={22} aria-hidden="true" />
                <h3>Authorization</h3>
                <p>Quyết định danh tính đó được thực hiện hành động nào.</p>
                <span>Role, permission, policy, ownership</span>
              </div>
            </div>
            <div className="auth-flow" aria-label="Authentication lifecycle">
              <div><span>1</span><strong>Register</strong><small>Validate và hash password</small></div>
              <div><span>2</span><strong>Login</strong><small>Verify credential</small></div>
              <div><span>3</span><strong>Issue</strong><small>Tạo session hoặc token</small></div>
              <div><span>4</span><strong>Authenticate</strong><small>Xác thực mỗi request</small></div>
              <div><span>5</span><strong>Expire / revoke</strong><small>Hết hạn, logout, khóa tài khoản</small></div>
            </div>
            <h3 className="scenario-heading">Password phải được xử lý như dữ liệu nhạy cảm đặc biệt</h3>
            <ol className="security-checklist">
              <li><span>01</span><p>Dùng password hashing chuyên dụng với salt và cost phù hợp; không mã hóa hai chiều và không tự phát minh thuật toán.</p></li>
              <li><span>02</span><p>Không ghi password, token hoặc secret vào log; response đăng ký và login không được trả password hash.</p></li>
              <li><span>03</span><p>Rate limit và theo dõi login thất bại để giảm brute force, nhưng tránh thông báo làm lộ email nào đã tồn tại.</p></li>
              <li><span>04</span><p>Password reset dùng token ngẫu nhiên, một lần, có thời hạn; đổi password nên thu hồi các session nhạy cảm.</p></li>
            </ol>
            <div className="self-check">
              <span>Bài tập 07</span>
              <p>Vẽ sequence diagram cho register và login. Đánh dấu chính xác nơi password chuyển thành hash và nơi session/token được tạo.</p>
            </div>
          </section>

          <section className="lesson-section auth-section" id="session-vs-token">
            <p className="section-label">08 · Session hay token?</p>
            <h2>Chọn cơ chế theo kiến trúc, không theo độ phổ biến</h2>
            <div className="auth-choice-grid">
              <article>
                <span>Server-side state</span>
                <h3>Session cookie</h3>
                <p>Browser giữ một session ID; trạng thái đăng nhập nằm phía server hoặc session store.</p>
                <ul>
                  <li>Thu hồi và logout đơn giản.</li>
                  <li>Phù hợp web app cùng hệ thống backend.</li>
                  <li>Cần bảo vệ cookie và xử lý CSRF.</li>
                </ul>
              </article>
              <article>
                <span>Signed credential</span>
                <h3>Access token</h3>
                <p>Client gửi credential có thời hạn; API xác thực token trước khi xử lý request.</p>
                <ul>
                  <li>Phù hợp API, mobile và hệ thống phân tán khi có lý do rõ.</li>
                  <li>Khó thu hồi token đã phát hành hơn session.</li>
                  <li>JWT chỉ được ký, payload không mặc định được mã hóa.</li>
                </ul>
              </article>
            </div>
            <div className="decision-table-wrap">
              <table className="decision-table">
                <thead><tr><th>Câu hỏi</th><th>Session</th><th>Token</th></tr></thead>
                <tbody>
                  <tr><td>Trạng thái nằm đâu?</td><td>Session store phía server</td><td>Credential được client mang theo</td></tr>
                  <tr><td>Thu hồi ngay?</td><td>Xóa session tương đối trực tiếp</td><td>Cần thời hạn ngắn, denylist hoặc cơ chế revocation</td></tr>
                  <tr><td>Browser lưu ở đâu?</td><td>Cookie HttpOnly, Secure, SameSite phù hợp</td><td>Ưu tiên cookie bảo vệ hoặc BFF; tránh localStorage cho credential nhạy cảm</td></tr>
                  <tr><td>Rủi ro chính</td><td>CSRF và session fixation/hijacking</td><td>Token theft, replay và cấu hình validation sai</td></tr>
                </tbody>
              </table>
            </div>
            <p className="lesson-note">
              <strong>Không đồng nhất khái niệm:</strong> cookie là cơ chế vận chuyển/lưu trữ của browser; session là
              trạng thái đăng nhập; JWT là một định dạng token. JWT vẫn có thể được gửi bằng cookie.
            </p>
            <div className="self-check">
              <span>Bài tập 08</span>
              <p>Chọn session hoặc token cho portfolio, web admin và mobile app. Viết hai lý do và một rủi ro cho từng lựa chọn.</p>
            </div>
          </section>

          <section className="lesson-section auth-section" id="token-lifecycle">
            <p className="section-label">09 · Token lifecycle</p>
            <h2>Access token ngắn hạn, refresh token được quản lý như một session</h2>
            <p>
              Access token dùng để gọi API và nên có thời hạn ngắn. Refresh token chỉ dùng tại endpoint refresh
              để nhận cặp token mới. Với public client, refresh token rotation giúp phát hiện việc token cũ bị tái
              sử dụng; khi phát hiện reuse, cần thu hồi cả token family và yêu cầu đăng nhập lại.
            </p>
            <div className="token-flow" aria-label="Access and refresh token lifecycle">
              <div><span>1</span><strong>Login</strong><small>Credential hợp lệ</small></div>
              <b>→</b>
              <div><span>2</span><strong>Access + refresh</strong><small>Hai mục đích khác nhau</small></div>
              <b>→</b>
              <div><span>3</span><strong>API calls</strong><small>Dùng access token</small></div>
              <b>→</b>
              <div><span>4</span><strong>Refresh</strong><small>Rotate token cũ</small></div>
              <b>→</b>
              <div><span>5</span><strong>Revoke</strong><small>Logout hoặc reuse detected</small></div>
            </div>
            <div className="token-validation-card">
              <span>Khi xác thực JWT access token</span>
              <div>
                <p><strong>Signature</strong> đúng thuật toán và key mong đợi.</p>
                <p><strong>Issuer / audience</strong> đúng hệ thống phát hành và API nhận.</p>
                <p><strong>Expiration</strong> và thời điểm hiệu lực còn hợp lệ.</p>
                <p><strong>Token type / purpose</strong> không nhầm refresh token thành access token.</p>
              </div>
            </div>
            <div className="self-check">
              <span>Bài tập 09</span>
              <p>Thiết kế bảng auth_sessions gồm user, token family, token hash, expiresAt, revokedAt và thông tin thiết bị. Mô tả transaction khi refresh.</p>
            </div>
          </section>

          <section className="lesson-section auth-section" id="authorization">
            <p className="section-label">10 · Authorization</p>
            <h2>Đã đăng nhập không có nghĩa là được truy cập mọi resource</h2>
            <div className="authorization-layers">
              <article><span>RBAC</span><h3>Role</h3><p>ADMIN có thể quản trị user; USER không thể gọi chức năng admin.</p></article>
              <article><span>Permission</span><h3>Action</h3><p>Quyền cụ thể như task:read, task:update hoặc user:disable.</p></article>
              <article><span>Ownership</span><h3>Resource</h3><p>User chỉ đọc và sửa task thuộc chính mình.</p></article>
              <article><span>Context</span><h3>Policy</h3><p>Chỉ cho phép thao tác khi resource đang ở trạng thái phù hợp.</p></article>
            </div>
            <div className="code-comparison api-example">
              <div>
                <span className="code-label">Không an toàn</span>
                <pre><code>{`PATCH /api/tasks/42
{
  "userId": 101,
  "title": "Changed"
}

// Tin userId từ client`}</code></pre>
              </div>
              <div>
                <span className="code-label">Kiểm tra ownership phía server</span>
                <pre><code>{`const task = await tasks.findOne({
  id: taskId,
  ownerId: auth.userId
});

if (!task) throw notFound();`}</code></pre>
              </div>
            </div>
            <div className="self-check">
              <span>Bài tập 10</span>
              <p>Lập ma trận role × endpoint cho Task API, sau đó thêm ba test chứng minh user A không thể đọc, sửa hoặc xóa task của user B.</p>
            </div>
          </section>

          <section className="lesson-section auth-section" id="auth-security">
            <p className="section-label">11 · Threat model</p>
            <h2>Học auth bằng cách hiểu credential có thể bị đánh cắp hoặc lạm dụng thế nào</h2>
            <div className="threat-grid">
              <article><strong>XSS</strong><p>JavaScript độc hại đọc dữ liệu có thể truy cập; credential trong localStorage đặc biệt dễ bị lấy.</p><span>Giảm thiểu: output encoding, CSP, HttpOnly cookie</span></article>
              <article><strong>CSRF</strong><p>Browser tự gửi cookie trong request giả mạo từ site khác.</p><span>Giảm thiểu: SameSite, CSRF token, kiểm tra Origin</span></article>
              <article><strong>Replay</strong><p>Token bị đánh cắp được gửi lại như một request hợp lệ.</p><span>Giảm thiểu: TLS, expiry ngắn, rotation và reuse detection</span></article>
              <article><strong>Brute force</strong><p>Kẻ tấn công thử nhiều mật khẩu hoặc credential đã rò rỉ.</p><span>Giảm thiểu: rate limit, MFA, monitoring</span></article>
              <article><strong>Session fixation</strong><p>Attacker khiến nạn nhân đăng nhập trên session ID đã biết.</p><span>Giảm thiểu: rotate session ID sau login</span></article>
              <article><strong>IDOR / BOLA</strong><p>User đổi resource ID để truy cập dữ liệu người khác.</p><span>Giảm thiểu: authorization theo resource trên server</span></article>
            </div>
            <div className="security-baseline">
              <strong>Security baseline</strong>
              <p>Chỉ truyền credential qua HTTPS. Cookie auth cần cấu hình HttpOnly, Secure và SameSite phù hợp. Không đưa secret vào source code, URL hoặc log.</p>
            </div>
            <div className="self-check">
              <span>Bài tập 11</span>
              <p>Chọn ba threat ở trên, mô tả attack path và viết một integration test hoặc checklist xác minh biện pháp giảm thiểu.</p>
            </div>
          </section>

          <section className="lesson-section" id="testing">
            <p className="section-label">12 · Auth testing</p>
            <h2>Auth chỉ đáng tin khi các đường từ chối được kiểm thử</h2>
            <div className="test-pyramid">
              <div><strong>Unit</strong><p>Business rule trong service, chạy nhanh và cô lập.</p></div>
              <div><strong>Integration</strong><p>API, middleware và database phối hợp đúng.</p></div>
              <div><strong>Manual</strong><p>Postman kiểm tra contract và luồng sử dụng thực tế.</p></div>
            </div>
            <div className="decision-checklist test-cases">
              <p className="panel-label">Bộ test tối thiểu cho auth và protected resource</p>
              <ol>
                <li><span>1</span><p><strong>Login:</strong> đúng credential thành công; sai password trả lỗi chung và không tạo session.</p></li>
                <li><span>2</span><p><strong>Token:</strong> thiếu, hết hạn, sai chữ ký, sai issuer hoặc sai purpose đều bị từ chối.</p></li>
                <li><span>3</span><p><strong>Refresh:</strong> rotation thành công; token cũ bị reuse làm token family bị thu hồi.</p></li>
                <li><span>4</span><p><strong>Authorization:</strong> user thường bị chặn khỏi admin endpoint; user A bị chặn khỏi task của user B.</p></li>
                <li><span>5</span><p><strong>Logout:</strong> session/refresh token bị thu hồi và không thể tiếp tục gia hạn.</p></li>
              </ol>
            </div>
          </section>

          <section className="lesson-section" id="practice-project">
            <p className="section-label">13 · Bài thực hành tổng hợp</p>
            <h2>Task Management API với Auth hoàn chỉnh</h2>
            <p>
              Đây là project vừa đủ nhỏ để hoàn thành, nhưng đủ chiều sâu để bạn chứng minh database, backend,
              bảo mật và testing trong một câu chuyện thống nhất.
            </p>
            <div className="project-brief">
              <div>
                <span>Phạm vi MVP</span>
                <h3>User, Task và Category</h3>
                <p>Đăng ký, đăng nhập, refresh, logout, CRUD task, role và ownership.</p>
              </div>
              <div>
                <span>Stack gợi ý</span>
                <h3>Express hoặc Spring Boot</h3>
                <p>PostgreSQL/MySQL, ORM hiện có, session hoặc access/refresh token, Postman và automated tests.</p>
              </div>
            </div>
            <ol className="milestone-list">
              <li><span>Ngày 1</span><div><strong>Contract và schema</strong><p>Vẽ ERD, ghi endpoint và sample response trước khi code.</p></div></li>
              <li><span>Ngày 2</span><div><strong>Vertical slice đầu tiên</strong><p>Hoàn thành POST và GET task xuyên từ route đến database.</p></div></li>
              <li><span>Ngày 3</span><div><strong>CRUD và error handling</strong><p>Thêm update, delete, validation và response lỗi nhất quán.</p></div></li>
              <li><span>Ngày 4</span><div><strong>Register và login</strong><p>Hash password, tạo session/token và chuẩn hóa lỗi đăng nhập.</p></div></li>
              <li><span>Ngày 5</span><div><strong>Session lifecycle</strong><p>Refresh/rotation hoặc gia hạn session, logout và revoke.</p></div></li>
              <li><span>Ngày 6</span><div><strong>Authorization</strong><p>Role, permission và ownership cho toàn bộ Task API.</p></div></li>
              <li><span>Ngày 7</span><div><strong>Security tests</strong><p>Expired token, reuse, IDOR, logout và brute-force controls.</p></div></li>
              <li><span>Ngày 8</span><div><strong>Portfolio proof</strong><p>README, auth sequence diagram, API collection, ERD và test report.</p></div></li>
            </ol>
            <div className="completion-gate">
              <strong>Checklist hoàn thành</strong>
              <p>
                Tự giải thích được session và token, demo login-refresh-logout, chứng minh ownership bằng test,
                và chỉ ra hệ thống phản ứng thế nào khi credential bị hết hạn hoặc tái sử dụng.
              </p>
            </div>
          </section>

          <section className="lesson-section interview-section" id="interview-backend">
            <p className="section-label">14 · Tự kiểm tra</p>
            <h2>Trả lời thành tiếng trước khi mở đáp án</h2>
            <div className="review-list">
              <details><summary>1. REST API là gì?</summary><p>REST là phong cách thiết kế API xoay quanh resource, dùng HTTP method và semantics nhất quán để client thao tác trên resource đó.</p></details>
              <details><summary>2. PUT và PATCH khác nhau thế nào?</summary><p>PUT thường biểu diễn việc thay thế toàn bộ resource; PATCH cập nhật một phần. Contract cụ thể phải được tài liệu hóa rõ.</p></details>
              <details><summary>3. 401 và 403 khác nhau thế nào?</summary><p>401 nghĩa là request chưa có danh tính hợp lệ. 403 nghĩa là danh tính đã được xác minh nhưng không có quyền thực hiện hành động.</p></details>
              <details><summary>4. Vì sao vẫn cần database constraint khi backend đã validation?</summary><p>Nhiều request có thể chạy đồng thời hoặc dữ liệu có thể được ghi từ đường khác. Database constraint là lớp bảo vệ cuối cùng cho tính toàn vẹn.</p></details>
              <details><summary>5. Controller và service nên chia trách nhiệm ra sao?</summary><p>Controller xử lý chi tiết HTTP và chuyển input sang service. Service thực thi business rule độc lập với transport để dễ tái sử dụng và kiểm thử.</p></details>
              <details><summary>6. Làm sao ngăn user sửa resource của người khác?</summary><p>Lấy userId từ identity đã xác thực, truy vấn resource theo cả resourceId và ownerId hoặc kiểm tra ownership trong service; không tin userId do body gửi lên.</p></details>
              <details><summary>7. Session và JWT khác nhau ở điểm cốt lõi nào?</summary><p>Session thường giữ trạng thái đăng nhập phía server và client mang session ID. JWT là định dạng token chứa claims có chữ ký; việc dùng JWT không tự giải quyết lưu trữ, thu hồi hoặc authorization.</p></details>
              <details><summary>8. Vì sao cần refresh token rotation?</summary><p>Mỗi lần refresh sẽ phát token mới và làm token cũ mất hiệu lực. Nếu token cũ xuất hiện lại, hệ thống có tín hiệu credential có thể đã bị đánh cắp và có thể thu hồi cả token family.</p></details>
              <details><summary>9. HttpOnly cookie giải quyết XSS hoàn toàn không?</summary><p>Không. HttpOnly ngăn JavaScript đọc cookie nhưng XSS vẫn có thể thực hiện request dưới danh nghĩa người dùng. Vẫn cần chống XSS, CSP và kiểm soát input/output.</p></details>
            </div>
          </section>

          <section className="lesson-section" id="auth-resources">
            <p className="section-label">15 · Nguồn đọc thêm</p>
            <h2>Đào sâu từ tài liệu tiêu chuẩn và hướng dẫn bảo mật</h2>
            <div className="resource-list">
              <a href="https://datatracker.ietf.org/doc/html/rfc9110" target="_blank" rel="noreferrer">
                <span>IETF · RFC 9110</span>
                <div><strong>HTTP Semantics</strong><p>Method semantics, status code classes, request và response behavior.</p></div>
                <ArrowUpRight size={18} aria-hidden="true" />
              </a>
              <a href="https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html" target="_blank" rel="noreferrer">
                <span>OWASP</span>
                <div><strong>Authentication Cheat Sheet</strong><p>Password policy, login response, re-authentication và MFA.</p></div>
                <ArrowUpRight size={18} aria-hidden="true" />
              </a>
              <a href="https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html" target="_blank" rel="noreferrer">
                <span>OWASP</span>
                <div><strong>Session Management Cheat Sheet</strong><p>Session ID, cookie attributes, timeout, renewal và logout.</p></div>
                <ArrowUpRight size={18} aria-hidden="true" />
              </a>
              <a href="https://cheatsheetseries.owasp.org/cheatsheets/REST_Security_Cheat_Sheet.html" target="_blank" rel="noreferrer">
                <span>OWASP</span>
                <div><strong>REST Security Cheat Sheet</strong><p>HTTPS, access control, JWT validation và API security.</p></div>
                <ArrowUpRight size={18} aria-hidden="true" />
              </a>
              <a href="https://datatracker.ietf.org/doc/rfc9700/" target="_blank" rel="noreferrer">
                <span>IETF · RFC 9700</span>
                <div><strong>OAuth 2.0 Security Best Current Practice</strong><p>Refresh token protection, rotation và các flow không còn được khuyến nghị.</p></div>
                <ArrowUpRight size={18} aria-hidden="true" />
              </a>
            </div>
          </section>

          <div className="next-lesson">
            <span>Bước thực hành tiếp theo</span>
            <strong>Xây register và login trước</strong>
            <p>Bắt đầu bằng user schema, password hashing và session/token issuance; viết test sai password trước khi thêm refresh flow.</p>
          </div>
        </article>
      </div>

      <footer>
        <span>Backend &amp; Authentication · Bài 04</span>
        <span><Sparkles size={15} aria-hidden="true" /> Guided learning by building</span>
      </footer>
    </main>
  );
}

function BusinessAnalysisLessonPage({ navigate }: { navigate: NavigateHandler }) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [selectedProject, setSelectedProject] = useState<"all" | "nexus" | "tourist" | "songtai">("all");
  const [checkedItems, setCheckedItems] = useState<Record<number, boolean>>({
    0: true,
    1: true,
    2: true,
    3: true,
    4: true,
    5: true,
  });

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress(Math.min(100, Math.max(0, (window.scrollY / totalHeight) * 100)));
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleCheck = (idx: number) => {
    setCheckedItems((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  const checkedCount = Object.values(checkedItems).filter(Boolean).length;

  const coreConcepts = [
    {
      question: "1. Vai trò cốt lõi của Business Analyst trong tổ chức công nghệ là gì?",
      answer:
        "Business Analyst (BA) đóng vai trò là cầu nối chiến lược tạo sự thấu hiểu chung (Shared Understanding) giữa các Business Stakeholders (Khách hàng, Ban Giám đốc, Vận hành) và Đội ngũ Kỹ thuật (Solution Architect, Developers, QA). Phạm vi công việc không chỉ đơn thuần là ghi chép yêu cầu, mà là phân rã bài toán kinh doanh, bóc tách As-Is/To-Be, chuẩn hóa Business Rules, thiết kế kiến trúc dữ liệu logic, xác định Acceptance Criteria (Given-When-Then) và duy trì tính toàn vẹn (Traceability) xuyên suốt vòng đời sản phẩm.",
    },
    {
      question: "2. Requirement Elicitation và Requirement Analysis khác nhau như thế nào trong thực tế?",
      answer:
        "Elicitation là quá trình chủ động khám phá, gợi mở và thu thập thông tin từ các bên liên quan thông qua phỏng vấn 1-1, khảo sát hiện trường (Shadowing), workshop và nghiên cứu tài liệu quy trình. Trong khi đó, Analysis là giai đoạn phân rã, tổ chức, kiểm chứng và mô hình hóa thông tin đó: xác định ranh giới hệ thống, phát hiện mâu thuẫn nghiệp vụ (Conflicts), phân tích phụ thuộc (Dependencies), thiết kế luồng quy trình (BPMN 2.0), cấu trúc dữ liệu và xử lý các kịch bản ngoại lệ (Exception Handling).",
    },
    {
      question: "3. Phân biệt Functional Requirements và Non-Functional Requirements?",
      answer:
        "Functional Requirements (Yêu cầu Chức năng) mô tả cụ thể những gì hệ thống PHẢI LÀM — ví dụ: Nhân viên bưu cục quét mã barcode để chuyển trạng thái kiện sang 'Đang vận chuyển', hệ thống tự động ghi nhận thời gian và tọa độ GPS. Non-Functional Requirements (Yêu cầu Phi chức năng) xác định hệ thống PHẢI VẬN HÀNH TỐT NHƯ THẾ NÀO — bao gồm hiệu năng (thời gian phản hồi < 200ms cho API quét mã), tính sẵn sàng (99.9% uptime), bảo mật dữ liệu (RBAC, mã hóa mật khẩu), khả năng mở rộng (chịu tải 10,000 đơn/giờ mùa cao điểm) và tính toàn vẹn kiểm toán (Audit Trail bất biến).",
    },
    {
      question: "4. Một User Story chất lượng cao cần đáp ứng những tiêu chuẩn nào (INVEST & Gherkin)?",
      answer:
        "Một User Story chuẩn mực cần tuân thủ nguyên tắc INVEST (Independent, Negotiable, Valuable, Estimable, Small, Testable) theo cấu trúc: 'Là [Actor], tôi muốn [Action], để [Business Value]'. Đi kèm với Story bắt buộc phải có ngữ cảnh nghiệp vụ, quy tắc ràng buộc (Business Rules), thiết kế giao diện (UI Mockup/Wireframe) và bộ tiêu chí chấp thuận (Acceptance Criteria) viết theo định dạng BDD/Gherkin (Given [Tiền điều kiện] - When [Hành động] - Then [Kết quả kỳ vọng]).",
    },
    {
      question: "5. Nguyên tắc xử lý xung đột yêu cầu (Requirement Conflict) giữa các Stakeholders?",
      answer:
        "Khi xuất hiện mâu thuẫn yêu cầu (ví dụ: Vận hành muốn quy trình nhập kho nhanh không cần chụp ảnh, nhưng Kế toán/Kiểm toán bắt buộc phải có ảnh chứng từ để đối soát COD), BA không chọn phe cảm tính mà: (1) Đưa các bên về cùng mục tiêu kinh doanh tổng thể và chỉ số ROI/Rủi ro; (2) Phân tích tác động (Impact Analysis) kèm bảng so sánh Trade-off giữa tốc độ và rủi ro thất thoát; (3) Đề xuất giải pháp dung hòa (ví dụ: cho phép quét nhanh theo batch, nhưng bắt buộc chụp ảnh ngẫu nhiên 10% hoặc đối với đơn giá trị > 2 triệu); (4) Trình bày Decision Owner phê duyệt và lưu vết quyết định vào RTM (Requirement Traceability Matrix).",
    },
    {
      question: "6. Vai trò của Acceptance Criteria, Definition of Done (DoD) và UAT trong nghiệm thu?",
      answer:
        "Acceptance Criteria (AC) là điều kiện tiên quyết ở cấp độ từng User Story để xác nhận tính năng chạy đúng logic. Definition of Done (DoD) là bộ tiêu chuẩn kỹ thuật cấp độ Sprint (Code reviewed, Unit test pass > 80%, CI/CD build thành công, không còn blocker). UAT (User Acceptance Testing) là đợt kiểm thử chấp thuận thực tế của người dùng cuối: BA chuẩn bị kịch bản UAT (Test Scenarios), bộ dữ liệu mẫu thực tế, hướng dẫn end-users thao tác, ghi nhận lỗi sai lệch nghiệp vụ và ký biên bản bàn giao (Sign-off) trước khi release production.",
    },
    {
      question: "7. Nền tảng Kỹ thuật (Technical Literacy) hỗ trợ Business Analyst như thế nào?",
      answer:
        "Technical Literacy giúp BA không trở thành 'người chuyển thư thụ động' mà có thể tư vấn giải pháp hiệu quả: (1) Hiểu mô hình ERD giúp BA thiết kế luồng dữ liệu chuẩn hóa, phát hiện thiếu quan hệ (missing relation) hoặc sai Source of Truth; (2) Hiểu REST API & JSON payload giúp BA xác định chính xác các trường dữ liệu cần tích hợp giữa các bên thứ ba (VNPay, Đơn vị vận chuyển); (3) Hiểu kiến trúc Microservices giúp BA phân ranh giới domain hợp lý, dự trù các kịch bản lỗi mạng, timeout và bất đồng bộ (Asynchronous processing).",
    },
    {
      question: "8. Những tiêu chuẩn chứng minh một IT Business Analyst / Associate PO sẵn sàng thực chiến?",
      answer:
        "Một IT BA thực chiến cần chứng minh: (1) Nền tảng Kỹ sư Hệ thống Thông tin bài bản (GPA 3.26/4.0 Giỏi), nắm vững CSDL và kiến trúc phần mềm; (2) Kinh nghiệm tham gia dự án thực tế tại doanh nghiệp (HomeNest Software: tham gia quản trị Scope Freeze, xử lý Change Request, viết SRS/User Stories, điều phối UAT); (3) Trải nghiệm thực địa chuyên sâu (J&T Express: hiểu bản chất vận hành bưu cục, luân chuyển trạng thái đơn, rủi ro thất thoát COD); (4) Khả năng tạo ra các Artifacts tiêu chuẩn (BPMN 2.0, ERD 3NF, OpenAPI 3.0, Jira Sprint Backlog, UAT Test Cases).",
    },
  ];

  return (
    <main className="site-shell knowledge-shell ba-lesson">
      {/* Dynamic Reading Progress Bar */}
      <div
        className="ba-reading-progress"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      {/* Modern Executive Topbar */}
      <header className="topbar knowledge-topbar ba-topbar" aria-label="Business analysis navigation">
        <div className="ba-topbar-left">
          <a
            className="brand"
            href="/"
            onClick={(event) => navigate(event, "/")}
            aria-label="Về trang chủ Portfolio"
          >
            <div className="brand-avatar-wrap">
              <img className="brand-avatar" src="/assets/avatar.png" alt="Võ Văn Tú Tài" />
              <span className="brand-dot-pulse" aria-hidden="true" />
            </div>
            <div className="brand-info">
              <span className="brand-name">Võ Văn Tú Tài</span>
              <span className="brand-role-tag">IT Business Analyst &amp; Associate PO</span>
            </div>
          </a>
          <a
            className="ba-back-home-btn"
            href="/"
            onClick={(event) => navigate(event, "/")}
          >
            <ArrowLeft size={15} aria-hidden="true" />
            <span>Trang chủ</span>
          </a>
        </div>

        <nav className="ba-topbar-nav" aria-label="Nội dung chuyên đề">
          <a href="#positioning">01. Khung năng lực</a>
          <a href="#competency-map">02. Học phần IS</a>
          <a href="#ba-workflow">03. Vòng đời BA</a>
          <a href="#project-evidence">04. Bằng chứng Dự án</a>
          <a href="#professional-communication">05. STAR Hub</a>
          <a href="#mock-case">06. Case Logistics</a>
          <a href="#final-checklist">07. Checklist</a>
        </nav>

        <div className="ba-topbar-actions">
          <a
            href="https://tracking.nexus-ex.site/"
            target="_blank"
            rel="noreferrer"
            className="ba-cta-live"
            title="Xem hệ thống Logistics OMS đang chạy Live"
          >
            <ExternalLink size={14} aria-hidden="true" />
            <span>Live Demo OMS</span>
          </a>
          <a
            href="/applied-jobs/CV_VoVanTuTai_IT_Business_Analyst.pdf"
            download="CV_VoVanTuTai_IT_Business_Analyst.pdf"
            className="ba-cta-cv"
            title="Tải CV IT Business Analyst bản PDF chuẩn ATS"
          >
            <Download size={14} aria-hidden="true" />
            <span>Tải CV BA/PO</span>
          </a>
        </div>
      </header>

      {/* Global Learning Path Stepper */}
      <LearningPathNav currentPath="/knowledge/business-analysis" navigate={navigate} />

      {/* High-Impact Hero Section */}
      <section className="knowledge-hero ba-hero">
        <div className="ba-hero-main">
          <div className="ba-breadcrumbs">
            <a href="/" onClick={(e) => navigate(e, "/")}>Portfolio</a>
            <ChevronRight size={13} aria-hidden="true" />
            <a href="/knowledge" onClick={(e) => navigate(e, "/knowledge")}>Knowledge Hub</a>
            <ChevronRight size={13} aria-hidden="true" />
            <span>Chuyên đề 05: Business Analysis</span>
          </div>

          <div className="ba-hero-badge-wrap">
            <span className="ba-hero-badge">
              <Sparkles size={14} aria-hidden="true" />
              CHUYÊN ĐỀ 05 · ENTERPRISE IT BUSINESS ANALYSIS &amp; SYSTEM ARCHITECTURE
            </span>
          </div>

          <h1>Business Analysis từ Nền tảng Kỹ sư IS đến Triển khai Doanh nghiệp Thực chiến</h1>

          <p className="knowledge-lede">
            Hệ thống hóa năng lực Business Analyst chuẩn hóa (BABOK v3 &amp; Agile Scrum): Đóng vai trò là cầu nối
            chuẩn xác giữa <strong>Yêu cầu Nghiệp vụ (Business Needs)</strong> và <strong>Kiến trúc Kỹ thuật (Technical Architecture)</strong>.
            Trực tiếp vận dụng mô hình hóa quy trình BPMN 2.0, thiết kế cấu trúc dữ liệu ERD/SQL, đặc tả hợp đồng tích hợp OpenAPI 3.0
            và kiểm soát chất lượng qua UAT &amp; Definition of Done.
          </p>

          <div className="ba-proof-chips" aria-label="Bằng chứng năng lực cốt lõi">
            <span className="ba-proof-chip">
              <CheckCircle2 size={15} aria-hidden="true" />
              <strong>B.Eng in Information Systems</strong> (IUH · GPA 3.26/4.0 Giỏi)
            </span>
            <span className="ba-proof-chip">
              <BriefcaseBusiness size={15} aria-hidden="true" />
              <strong>6+ Tháng BA &amp; PM Assistant</strong> (HomeNest Software)
            </span>
            <span className="ba-proof-chip">
              <MapPin size={15} aria-hidden="true" />
              <strong>Thực chiến Kho vận &amp; Bưu cục</strong> (J&amp;T Express)
            </span>
            <span className="ba-proof-chip">
              <Layers size={15} aria-hidden="true" />
              <strong>Chuẩn BABOK v3 &amp; Agile Scrum</strong>
            </span>
            <span className="ba-proof-chip highlight">
              <Clock size={15} aria-hidden="true" />
              <strong>Sẵn sàng làm việc Full-time ngay lập tức</strong>
            </span>
          </div>
        </div>

        <aside className="ba-hero-card">
          <div className="ba-hero-card-header">
            <Target size={18} aria-hidden="true" />
            <h3>Trọng tâm Khung Năng Lực BA</h3>
          </div>
          <ul className="ba-hero-card-list">
            <li>
              <CheckCircle2 size={17} aria-hidden="true" />
              <div>
                <strong>Ranh giới Trách nhiệm &amp; Traceability</strong>
                <p>Cầu nối thấu hiểu giữa Business Stakeholders và Engineering Team.</p>
              </div>
            </li>
            <li>
              <CheckCircle2 size={17} aria-hidden="true" />
              <div>
                <strong>Học phần IS ➔ Năng lực Thực tế</strong>
                <p>Chuyển hóa SAD, DBMS, SOA, ERP (Odoo) thành kỹ năng phân tích chuyên sâu.</p>
              </div>
            </li>
            <li>
              <CheckCircle2 size={17} aria-hidden="true" />
              <div>
                <strong>Vòng đời BA 6 Giai đoạn</strong>
                <p>Goal ➔ Stakeholder ➔ As-Is ➔ To-Be ➔ PRD/SRS ➔ DoD &amp; UAT.</p>
              </div>
            </li>
            <li>
              <CheckCircle2 size={17} aria-hidden="true" />
              <div>
                <strong>Case Study Giải quyết Sự cố Thực chiến</strong>
                <p>Root Cause Analysis (RCA) bài toán tỷ lệ giao hàng thất bại trong Logistics.</p>
              </div>
            </li>
          </ul>
        </aside>
      </section>

      {/* Main Content Layout with Sticky Sidebar */}
      <div className="lesson-layout ba-layout-container">
        <aside className="lesson-toc ba-sticky-toc" aria-label="Mục lục chuyên đề">
          <div className="ba-toc-header">
            <BookOpen size={16} aria-hidden="true" />
            <span>Nội dung Chuyên đề</span>
          </div>
          <div className="ba-toc-links">
            <a href="#positioning">
              <span className="ba-toc-num">01</span>
              <span>Khung năng lực BA 3 Lớp</span>
            </a>
            <a href="#competency-map">
              <span className="ba-toc-num">02</span>
              <span>Ma trận Học phần &amp; ERP</span>
            </a>
            <a href="#ba-workflow">
              <span className="ba-toc-num">03</span>
              <span>Vòng đời Phân tích Nghiệp vụ</span>
            </a>
            <a href="#project-evidence">
              <span className="ba-toc-num">04</span>
              <span>Bằng chứng Dự án Thực tế</span>
            </a>
            <a href="#professional-communication">
              <span className="ba-toc-num">05</span>
              <span>STAR Hub &amp; Phỏng vấn Cốt lõi</span>
            </a>
            <a href="#mock-case">
              <span className="ba-toc-num">06</span>
              <span>Case Study Logistics RCA</span>
            </a>
            <a href="#final-checklist">
              <span className="ba-toc-num">07</span>
              <span>Checklist Sẵn sàng Triển khai</span>
            </a>
          </div>

          <div className="ba-toc-cta-box">
            <div className="ba-toc-cta-badge">Hồ sơ Ứng viên</div>
            <h4>Võ Văn Tú Tài</h4>
            <p>Kỹ sư Hệ thống Thông tin · IT Business Analyst &amp; Associate PO</p>
            <div className="ba-toc-cta-buttons">
              <a
                href="/applied-jobs/CV_VoVanTuTai_IT_Business_Analyst.pdf"
                download="CV_VoVanTuTai_IT_Business_Analyst.pdf"
                className="ba-toc-btn-primary"
              >
                <Download size={13} aria-hidden="true" />
                Tải CV Tiếng Việt
              </a>
              <a
                href="/applied-jobs/CV_VoVanTuTai_Business_Analyst_EN.pdf"
                download="CV_VoVanTuTai_Business_Analyst_EN.pdf"
                className="ba-toc-btn-secondary"
              >
                <Download size={13} aria-hidden="true" />
                Download CV (English)
              </a>
            </div>
          </div>
        </aside>

        <article className="lesson-content ba-article-content">
          {/* Section 01: 3-Tier Competency Framework */}
          <section className="lesson-section ba-card-section" id="positioning">
            <div className="ba-section-badge">
              <Layers size={14} aria-hidden="true" />
              <span>01 · COMPETENCY POSITIONING &amp; ARCHITECTURE</span>
            </div>
            <h2>Khung năng lực BA chuẩn hóa qua 3 tầng giá trị thực chiến</h2>
            <p className="ba-section-intro">
              Để đáp ứng tiêu chuẩn khắt khe của các doanh nghiệp phần mềm và tổ chức đa chức năng, năng lực của
              một <strong>IT Business Analyst &amp; Associate PO</strong> được cấu trúc thành ba tầng bổ trợ chặt chẽ:
              từ nền tảng kỹ thuật hệ thống, khả năng hiện thực hóa qua dự án thực tế, đến tư duy kiểm soát phạm vi và nghiệm thu chất lượng trong doanh nghiệp.
            </p>

            <div className="ba-position-grid">
              <article className="ba-position-card">
                <div className="ba-pos-card-header">
                  <span className="ba-pos-tag academic">Tầng 1 · Academic Foundation</span>
                  <Database size={22} className="ba-pos-icon" aria-hidden="true" />
                </div>
                <h3>Nền tảng Kỹ thuật &amp; Kiến trúc</h3>
                <p>
                  Tốt nghiệp <strong>Kỹ sư Hệ thống Thông tin (IUH, GPA 3.26/4.0 Giỏi)</strong>.
                  Nắm vững Phân tích &amp; Thiết kế Hệ thống (SAD), Cơ sở Dữ liệu Quan hệ (DBMS, 3NF, SQL), Kiến trúc Microservices (SOA/REST) và ERP (Odoo).
                </p>
                <div className="ba-pos-benefit">
                  <strong>Giá trị:</strong> Giao tiếp bình đẳng với Tech Lead/Developers, hiểu rõ giới hạn kỹ thuật và thiết kế schema chính xác.
                </div>
              </article>

              <article className="ba-position-card">
                <div className="ba-pos-card-header">
                  <span className="ba-pos-tag practice">Tầng 2 · Applied Evidence</span>
                  <Code2 size={22} className="ba-pos-icon" aria-hidden="true" />
                </div>
                <h3>Bằng chứng Triển khai Thực tế</h3>
                <p>
                  Trực tiếp tham gia phát triển 3 hệ thống thực tế (Nexus Express Logistics OMS, Tourist Booking Platform, Song Tai Shop E-Commerce).
                  Thành thạo lập User Stories chuẩn INVEST, Acceptance Criteria (Given-When-Then), BPMN 2.0 và OpenAPI 3.0.
                </p>
                <div className="ba-pos-benefit">
                  <strong>Giá trị:</strong> Chuyển hóa bài toán kinh doanh thành đặc tả phần mềm có thể kiểm chứng (Traceable Specifications).
                </div>
              </article>

              <article className="ba-position-card">
                <div className="ba-pos-card-header">
                  <span className="ba-pos-tag delivery">Tầng 3 · Enterprise Delivery</span>
                  <BriefcaseBusiness size={22} className="ba-pos-icon" aria-hidden="true" />
                </div>
                <h3>Thực chiến &amp; Nghiệm thu Doanh nghiệp</h3>
                <p>
                  <strong>6+ tháng làm BA &amp; PM Assistant tại HomeNest Software</strong>: Quản lý Scope Freeze, đánh giá rủi ro Change Request (CR),
                  quản trị Sprint Backlog và điều phối UAT với khách hàng. Trực tiếp vận hành bưu cục tại <strong>J&amp;T Express</strong> xử lý các tình huống ngoại lệ kho vận.
                </p>
                <div className="ba-pos-benefit">
                  <strong>Giá trị:</strong> Bảo vệ dự án khỏi Scope Creep, đảm bảo tiến độ release và tối ưu hóa quy trình vận hành thực địa.
                </div>
              </article>
            </div>

            <div className="ba-callout-box">
              <div className="ba-callout-icon">
                <ShieldCheck size={24} aria-hidden="true" />
              </div>
              <div className="ba-callout-content">
                <h4>Lợi thế Cạnh tranh: IT Business Analyst có Nền tảng Kỹ sư HTTT</h4>
                <p>
                  Khác với BA thuần kinh tế chỉ dừng lại ở mong muốn của người dùng (User Needs), một <strong>IT BA có nền tảng Kỹ sư Hệ thống Thông tin</strong> có khả năng
                  thẩm định tính khả thi kỹ thuật (Technical Feasibility) ngay trong buổi elicitation, dự đoán trước các rủi ro về race condition,
                  lỗ hổng dữ liệu khi thiết kế ERD, và viết hợp đồng API rõ ràng giúp tiết kiệm tới 40% thời gian trao đổi kỹ thuật cho Development Team.
                </p>
              </div>
            </div>
          </section>

          {/* Section 02: Coursework to Competency Matrix */}
          <section className="lesson-section ba-card-section" id="competency-map">
            <div className="ba-section-badge">
              <Database size={14} aria-hidden="true" />
              <span>02 · COURSEWORK TO ENTERPRISE COMPETENCY</span>
            </div>
            <h2>Chuyển hóa 6 học phần Kỹ sư IS thành năng lực phân tích nghiệp vụ</h2>
            <p className="ba-section-intro">
              Mọi kỹ năng phân tích nghiệp vụ chuyên nghiệp của tôi đều được phát triển bài bản từ các học phần chuyên sâu thuộc
              chương trình đào tạo Kỹ sư Hệ thống Thông tin tại IUH, liên kết trực tiếp với các artifacts kiểm chứng trong dự án thực tế:
            </p>

            <div className="coursework-map ba-coursework-grid">
              <article className="ba-cw-card">
                <div className="ba-cw-badge">System Analysis &amp; Design (SAD)</div>
                <h3>Quản lý Yêu cầu &amp; Mô hình hóa Quy trình</h3>
                <p className="ba-cw-desc">
                  Thành thạo kỹ thuật Elicitation, phân rã chức năng (Functional Decomposition), mô hình hóa quy trình As-Is / To-Be
                  bằng BPMN 2.0, Use Case Specification, State Machine Diagram và Activity Diagram.
                </p>
                <div className="ba-cw-evidence">
                  <strong>Bằng chứng kiểm chứng:</strong> Chuẩn hóa luồng OMS 6 trạng thái kiện hàng bất biến và luồng phân bổ bưu cục trong Nexus Express.
                </div>
                <div className="ba-cw-impact">
                  <span>Giá trị Doanh nghiệp:</span> Loại bỏ 100% tình trạng hiểu nhầm luồng xử lý giữa các phòng ban vận hành và đội dev.
                </div>
              </article>

              <article className="ba-cw-card">
                <div className="ba-cw-badge">Database Management Systems (DBMS)</div>
                <h3>Phân tích Kiến trúc Dữ liệu &amp; Source of Truth</h3>
                <p className="ba-cw-desc">
                  Thiết kế mô hình thực thể ERD chuẩn 3NF, thiết lập Data Dictionary, xác định khóa chính/ngoại, phân định Source of Truth
                  cho dữ liệu tài chính/kho vận và viết truy vấn SQL phức tạp để kiểm tra tính toàn vẹn (Data Integrity).
                </p>
                <div className="ba-cw-evidence">
                  <strong>Bằng chứng kiểm chứng:</strong> Schema quản lý Booking, Payment Transactions, Shipment Tracking Audit Logs và phân quyền RBAC.
                </div>
                <div className="ba-cw-impact">
                  <span>Giá trị Doanh nghiệp:</span> Chống thất thoát dữ liệu tiền thu hộ COD, lưu vết lịch sử mọi thay đổi (Audit Trail bất biến).
                </div>
              </article>

              <article className="ba-cw-card">
                <div className="ba-cw-badge">Service-Oriented Programming (SOA)</div>
                <h3>Phân tích Tích hợp API &amp; Hợp đồng Dịch vụ</h3>
                <p className="ba-cw-desc">
                  Phân định ranh giới nghiệp vụ dịch vụ (Domain Boundaries), đặc tả hợp đồng RESTful API (OpenAPI 3.0 / Swagger),
                  thiết kế Request/Response payloads, mã trạng thái HTTP, cơ chế Webhook và xử lý lỗi đồng bộ/bất đồng bộ.
                </p>
                <div className="ba-cw-evidence">
                  <strong>Bằng chứng kiểm chứng:</strong> Tài liệu OpenAPI 3.0 và luồng event bàn giao giữa Order Service, Tracking Service và Notification Service.
                </div>
                <div className="ba-cw-impact">
                  <span>Giá trị Doanh nghiệp:</span> Rút ngắn 50% thời gian tích hợp với đối tác vận chuyển và cổng thanh toán VNPay.
                </div>
              </article>

              <article className="ba-cw-card">
                <div className="ba-cw-badge">Web Application Development</div>
                <h3>Thiết kế Luồng Người dùng &amp; Khả thi UI/UX</h3>
                <p className="ba-cw-desc">
                  Phân tích hành trình người dùng (User Journey), phác thảo Wireframes/Screen Flow, quy chuẩn hóa Role-Based Access Control (RBAC),
                  ràng buộc kiểm tra tính hợp lệ dữ liệu biểu mẫu (Form Validation) và đánh giá tính khả thi trước khi bàn giao cho Designer/Frontend.
                </p>
                <div className="ba-cw-evidence">
                  <strong>Bằng chứng kiểm chứng:</strong> 3 ứng dụng web hoàn chỉnh với giao diện quản trị phân cấp chi tiết (Admin, Provider, Courier, Customer).
                </div>
                <div className="ba-cw-impact">
                  <span>Giá trị Doanh nghiệp:</span> Đảm bảo trải nghiệm người dùng liền mạch, giảm tỷ lệ thao tác nhầm lẫn của nhân viên bưu cục.
                </div>
              </article>

              <article className="ba-cw-card">
                <div className="ba-cw-badge">Enterprise Resource Planning (ERP)</div>
                <h3>Phân hệ ERP &amp; Chuẩn hóa Quy trình Doanh nghiệp</h3>
                <p className="ba-cw-desc">
                  Nghiên cứu và thực hành cấu hình các phân hệ ERP cốt lõi trên nền tảng Odoo: Sales (Bán hàng), Purchase (Mua hàng),
                  Inventory (Quản lý Kho vận &amp; Tồn kho), Invoicing (Kế toán công nợ). Hiểu sâu sắc luồng luân chuyển chứng từ trong chuỗi cung ứng.
                </p>
                <div className="ba-cw-evidence">
                  <strong>Bằng chứng kiểm chứng:</strong> Mô phỏng và tích hợp quy trình OMS vào mô hình kho vận, quản lý xuất nhập tồn và đối soát tài chính.
                </div>
                <div className="ba-cw-impact">
                  <span>Giá trị Doanh nghiệp:</span> Nắm vững SOP doanh nghiệp chuẩn quốc tế, rút ngắn thời gian làm quen với các hệ sinh thái ERP/CRM.
                </div>
              </article>

              <article className="ba-cw-card">
                <div className="ba-cw-badge">Data Structures &amp; Algorithms (DSA)</div>
                <h3>Tư duy Giải quyết Vấn đề &amp; Xử lý Tình huống Biên</h3>
                <p className="ba-cw-desc">
                  Phân rã vấn đề logic có cấu trúc, nhận diện máy trạng thái (State Machine Transitions), dự đoán các tình huống biên (Edge Cases),
                  xung đột đồng thời (Concurrency/Race Condition) và các kịch bản ngoại lệ trong vận hành thực tế.
                </p>
                <div className="ba-cw-evidence">
                  <strong>Bằng chứng kiểm chứng:</strong> Quy định xử lý khi quét mã offline, xử lý xung đột đặt phòng đồng thời và kịch bản hoàn tiền khi hủy đơn.
                </div>
                <div className="ba-cw-impact">
                  <span>Giá trị Doanh nghiệp:</span> Loại bỏ 95% phát sinh bug logic trong quá trình phát triển (Zero Unhandled Edge Cases).
                </div>
              </article>
            </div>
          </section>

          {/* Section 03: BA Workflow & Mental Model */}
          <section className="lesson-section ba-card-section" id="ba-workflow">
            <div className="ba-section-badge">
              <GitBranch size={14} aria-hidden="true" />
              <span>03 · MENTAL MODEL &amp; DELIVERY LIFECYCLE</span>
            </div>
            <h2>Quy trình Phân tích Nghiệp vụ 6 Giai đoạn: Từ Bài toán Kinh doanh đến Nghiệm thu UAT</h2>
            <p className="ba-section-intro">
              Một Business Analyst chuyên nghiệp không làm việc theo cảm tính hay thụ động nhận yêu cầu, mà vận hành theo
              một chu trình phân tích khép kín, đảm bảo tính chặt chẽ từ mục tiêu kinh doanh đến sản phẩm phần mềm bàn giao:
            </p>

            {/* Responsive 6-Step Visual Pipeline */}
            <div className="ba-timeline-container" aria-label="Quy trình phân tích nghiệp vụ 6 bước">
              <div className="ba-timeline-step">
                <div className="ba-step-number">01</div>
                <div className="ba-step-body">
                  <h4>Goal &amp; Problem Framing</h4>
                  <p className="ba-step-sub">Định khung bài toán kinh doanh</p>
                  <p className="ba-step-detail">
                    Áp dụng kỹ thuật 5 Whys và Problem Statement Canvas để phân biệt giữa triệu chứng bề nổi và nguyên nhân gốc. Xác định chỉ số ROI và KPI đo lường thành công.
                  </p>
                </div>
              </div>

              <div className="ba-timeline-step">
                <div className="ba-step-number">02</div>
                <div className="ba-step-body">
                  <h4>Stakeholder Elicitation</h4>
                  <p className="ba-step-sub">Khảo sát &amp; Phân rã nhu cầu</p>
                  <p className="ba-step-detail">
                    Lập ma trận RACI, thực hiện phỏng vấn 1-1, khảo sát hiện trường (Shadowing) và workshop làm rõ nhu cầu thực sự (Needs) thay vì chỉ lắng nghe mong muốn (Wants).
                  </p>
                </div>
              </div>

              <div className="ba-timeline-step">
                <div className="ba-step-number">03</div>
                <div className="ba-step-body">
                  <h4>As-Is &amp; Gap Analysis</h4>
                  <p className="ba-step-sub">Phân tích hiện trạng &amp; Điểm nghẽn</p>
                  <p className="ba-step-detail">
                    Mô hình hóa quy trình hiện tại bằng sơ đồ BPMN 2.0 Swimlane. Chỉ rõ các điểm nghẽn (Bottlenecks), thao tác thủ công dễ sai sót và lỗ hổng kiểm soát dữ liệu.
                  </p>
                </div>
              </div>

              <div className="ba-timeline-step">
                <div className="ba-step-number">04</div>
                <div className="ba-step-body">
                  <h4>To-Be Design &amp; Scope Freeze</h4>
                  <p className="ba-step-sub">Thiết kế tương lai &amp; Khóa phạm vi</p>
                  <p className="ba-step-detail">
                    Đề xuất quy trình To-Be tinh gọn, xác định ranh giới tính năng MVP, đánh giá tính khả thi kỹ thuật và thống nhất ký cam kết Khóa phạm vi (Scope Freeze).
                  </p>
                </div>
              </div>

              <div className="ba-timeline-step">
                <div className="ba-step-number">05</div>
                <div className="ba-step-body">
                  <h4>Specification &amp; Traceability</h4>
                  <p className="ba-step-sub">Đặc tả chi tiết &amp; Ma trận truy vết</p>
                  <p className="ba-step-detail">
                    Soạn thảo tài liệu PRD/SRS, User Stories chuẩn INVEST, Acceptance Criteria dạng Gherkin (Given-When-Then), Data Dictionary và cập nhật ma trận RTM.
                  </p>
                </div>
              </div>

              <div className="ba-timeline-step">
                <div className="ba-step-number">06</div>
                <div className="ba-step-body">
                  <h4>Validation, UAT &amp; Hand-off</h4>
                  <p className="ba-step-sub">Kiểm thử chấp thuận &amp; Chuyển giao</p>
                  <p className="ba-step-detail">
                    Thiết lập bộ kịch bản kiểm thử UAT Scenarios, kiểm tra Definition of Done (DoD), hỗ trợ End-user nghiệm thu thực tế, đào tạo SOP và chuyển giao vận hành.
                  </p>
                </div>
              </div>
            </div>

            <h3 className="ba-subheading">Bảng 6 Câu hỏi Tư duy Phân tích Cốt lõi (Core Analytical Inquiries)</h3>
            <p className="ba-subheading-desc">
              Trong bất kỳ buổi workshop lấy yêu cầu nào, đây là 6 câu hỏi kim chỉ nam giúp BA kiểm soát trọn vẹn mọi khía cạnh của một tính năng:
            </p>

            <div className="ba-inquiry-grid">
              <article className="ba-inquiry-card">
                <div className="ba-inquiry-header">
                  <Target size={18} aria-hidden="true" />
                  <strong>1. Business Goal</strong>
                </div>
                <p>Vì sao tính năng này cần tồn tại? Doanh nghiệp kỳ vọng tăng doanh thu, giảm thời gian xử lý hay giảm tỷ lệ sai sót bao nhiêu %?</p>
              </article>

              <article className="ba-inquiry-card">
                <div className="ba-inquiry-header">
                  <UserCheck size={18} aria-hidden="true" />
                  <strong>2. Primary Actor</strong>
                </div>
                <p>Ai là người khởi tạo hành động, ai phê duyệt, ai thụ hưởng kết quả và ai bị ảnh hưởng trực tiếp nếu quy trình gián đoạn?</p>
              </article>

              <article className="ba-inquiry-card">
                <div className="ba-inquiry-header">
                  <ShieldCheck size={18} aria-hidden="true" />
                  <strong>3. Business Rule</strong>
                </div>
                <p>Những điều kiện ràng buộc nào cho phép hoặc từ chối thao tác? Ví dụ: Không thể hủy đơn khi kiện hàng đã quét lên xe tải (In Transit).</p>
              </article>

              <article className="ba-inquiry-card">
                <div className="ba-inquiry-header">
                  <Database size={18} aria-hidden="true" />
                  <strong>4. Data Source of Truth</strong>
                </div>
                <p>Dữ liệu này bắt nguồn từ đâu, hệ thống nào sở hữu, cần lưu vết lịch sử (Audit Trail) trường nào và ai có quyền chỉnh sửa?</p>
              </article>

              <article className="ba-inquiry-card">
                <div className="ba-inquiry-header">
                  <AlertTriangle size={18} aria-hidden="true" />
                  <strong>5. Exception &amp; Fallback</strong>
                </div>
                <p>Nếu mất mạng, thiết bị quét mã offline, bên thứ ba (VNPay/SMS) bị timeout hoặc người dùng nhập sai thì hệ thống xử lý ra sao?</p>
              </article>

              <article className="ba-inquiry-card">
                <div className="ba-inquiry-header">
                  <CheckCircle2 size={18} aria-hidden="true" />
                  <strong>6. Acceptance Criteria</strong>
                </div>
                <p>Làm thế nào để đội QA và khách hàng khẳng định tính năng này đã pass nghiệm thu mà không cần trao đổi thêm?</p>
              </article>
            </div>
          </section>

          {/* Section 04: Production Project Evidence Hub */}
          <section className="lesson-section ba-card-section" id="project-evidence">
            <div className="ba-section-badge">
              <BriefcaseBusiness size={14} aria-hidden="true" />
              <span>04 · PRODUCTION PROJECT EVIDENCE HUB</span>
            </div>
            <h2>Bằng chứng dự án thực tế chứng minh năng lực phân tích nghiệp vụ</h2>
            <p className="ba-section-intro">
              Ba hệ thống thực tế minh chứng rõ nét cho năng lực phân tích nghiệp vụ, thiết kế kiến trúc thông tin
              và kiểm soát chất lượng từ khâu bài toán đến môi trường production:
            </p>

            {/* Interactive Project Filter Tabs */}
            <div className="ba-project-filter-bar">
              <button
                type="button"
                className={`ba-filter-btn ${selectedProject === "all" ? "active" : ""}`}
                onClick={() => setSelectedProject("all")}
              >
                Tất cả Dự án (3)
              </button>
              <button
                type="button"
                className={`ba-filter-btn ${selectedProject === "nexus" ? "active" : ""}`}
                onClick={() => setSelectedProject("nexus")}
              >
                1. Nexus Express (Logistics OMS)
              </button>
              <button
                type="button"
                className={`ba-filter-btn ${selectedProject === "tourist" ? "active" : ""}`}
                onClick={() => setSelectedProject("tourist")}
              >
                2. Tourist Booking Platform
              </button>
              <button
                type="button"
                className={`ba-filter-btn ${selectedProject === "songtai" ? "active" : ""}`}
                onClick={() => setSelectedProject("songtai")}
              >
                3. Song Tai Shop (E-Commerce)
              </button>
            </div>

            <div className="ba-project-showcase-list">
              {/* Project 1: Nexus Express */}
              {(selectedProject === "all" || selectedProject === "nexus") && (
                <article className="ba-showcase-card featured">
                  <div className="ba-showcase-badge-row">
                    <span className="ba-proj-type">Operations-to-System Architecture</span>
                    <span className="ba-proj-status live">Production Live Demo</span>
                  </div>
                  <div className="ba-showcase-main-info">
                    <h3>Nexus Express — Logistics Order Management System &amp; AI Routing</h3>
                    <p className="ba-showcase-tech">
                      Microservices · Spring Boot · React · RabbitMQ · Docker · OpenAPI 3.0 · PostgreSQL
                    </p>
                  </div>

                  <div className="ba-showcase-grid">
                    <div className="ba-showcase-col">
                      <h4>Bài toán Nghiệp vụ (Problem Statement)</h4>
                      <p>
                        Trạng thái kiện hàng (Tracking status), vị trí quét mã bưu cục, định tuyến trung tâm khai thác (Hub)
                        và dữ liệu tiền thu hộ COD thường xuyên bị hiểu sai hoặc không đồng bộ giữa Shipper, Trưởng bưu cục và Kế toán,
                        gây thất thoát tài chính và kéo dài thời gian tra soát khiếu nại.
                      </p>
                    </div>

                    <div className="ba-showcase-col">
                      <h4>Phương pháp Phân tích của BA (BA Methodology)</h4>
                      <p>
                        Vận dụng trực tiếp trải nghiệm vận hành thực địa tại bưu cục J&amp;T Express:
                        (1) Xây dựng máy trạng thái bất biến 6 nấc cho vòng đời kiện hàng (Created ➔ Picked Up ➔ In Transit ➔ At Hub ➔ Out for Delivery ➔ Delivered / Failed);
                        (2) Đặc tả hợp đồng OpenAPI 3.0 giữa Order Service và Tracking Service;
                        (3) Quy định Business Rule bắt buộc định vị GPS và chụp ảnh hiện trường đối với giao thất bại.
                      </p>
                    </div>

                    <div className="ba-showcase-col wide">
                      <h4>Sản phẩm &amp; Bằng chứng Kiểm chứng (Artifacts &amp; Deliverables)</h4>
                      <div className="ba-artifacts-tags">
                        <span>Sơ đồ BPMN 2.0 State Machine</span>
                        <span>Data Dictionary 3NF</span>
                        <span>OpenAPI 3.0 Swagger Spec</span>
                        <span>Báo cáo Đối soát COD</span>
                        <span>Kịch bản Kiểm thử UAT</span>
                      </div>
                      <div className="ba-showcase-links">
                        <a
                          href="https://tracking.nexus-ex.site/"
                          target="_blank"
                          rel="noreferrer"
                          className="ba-link-btn primary"
                        >
                          <ExternalLink size={14} aria-hidden="true" />
                          Xem Live Tracking (tracking.nexus-ex.site) ↗
                        </a>
                        <a
                          href="https://github.com/VoVanTuTai/logistics-management-system"
                          target="_blank"
                          rel="noreferrer"
                          className="ba-link-btn"
                        >
                          <Github size={14} aria-hidden="true" />
                          Source Code Repository ↗
                        </a>
                      </div>
                    </div>
                  </div>
                </article>
              )}

              {/* Project 2: Tourist Accommodation Platform */}
              {(selectedProject === "all" || selectedProject === "tourist") && (
                <article className="ba-showcase-card">
                  <div className="ba-showcase-badge-row">
                    <span className="ba-proj-type">Multi-Stakeholder Rule Conflict</span>
                    <span className="ba-proj-status completed">Enterprise SRS Documented</span>
                  </div>
                  <div className="ba-showcase-main-info">
                    <h3>Tourist Accommodation Platform — Hệ thống Đặt phòng &amp; Quản trị Đa vai trò</h3>
                    <p className="ba-showcase-tech">
                      ASP.NET Core · React · SQL Server · VNPay Payment Gateway · Role-Based Access Control
                    </p>
                  </div>

                  <div className="ba-showcase-grid">
                    <div className="ba-showcase-col">
                      <h4>Bài toán Nghiệp vụ (Problem Statement)</h4>
                      <p>
                        Mâu thuẫn quyền hạn và lợi ích giữa 3 nhóm người dùng trên cùng cơ sở dữ liệu: Khách hàng muốn hủy phòng hoàn tiền linh hoạt;
                        Chủ khách sạn muốn cam kết doanh thu và phạt hủy muộn; Ban quản trị cần kiểm duyệt cơ sở lưu trú và thu hoa hồng chính xác.
                      </p>
                    </div>

                    <div className="ba-showcase-col">
                      <h4>Phương pháp Phân tích của BA (BA Methodology)</h4>
                      <p>
                        (1) Phân tách rành mạch 3 User Journeys độc lập với ma trận phân quyền RBAC;
                        (2) Thiết lập Chính sách hoàn hủy (Cancellation Policy) dựa trên mốc thời gian thực (Hủy trước 48h hoàn 100%, hủy trong 24h phạt 50%);
                        (3) Thiết kế sơ đồ trạng thái thanh toán VNPay và tự động khấu trừ hoa hồng quản trị.
                      </p>
                    </div>

                    <div className="ba-showcase-col wide">
                      <h4>Sản phẩm &amp; Bằng chứng Kiểm chứng (Artifacts &amp; Deliverables)</h4>
                      <div className="ba-artifacts-tags">
                        <span>PRD / SRS Hoàn chỉnh</span>
                        <span>Ma trận Phân quyền RBAC</span>
                        <span>VNPay Payment Flow State Diagram</span>
                        <span>Báo cáo Doanh thu &amp; Hoa hồng Excel/PDF</span>
                      </div>
                    </div>
                  </div>
                </article>
              )}

              {/* Project 3: Song Tai Shop */}
              {(selectedProject === "all" || selectedProject === "songtai") && (
                <article className="ba-showcase-card">
                  <div className="ba-showcase-badge-row">
                    <span className="ba-proj-type">Inventory Control &amp; Data Gap</span>
                    <span className="ba-proj-status completed">3NF Normalized &amp; Hardened</span>
                  </div>
                  <div className="ba-showcase-main-info">
                    <h3>Song Tai Shop — Nền tảng Bán lẻ Đa kênh &amp; Quản trị Tồn kho</h3>
                    <p className="ba-showcase-tech">
                      Java Spring MVC · MySQL 3NF · Bootstrap · Session Auth · CSRF Protection
                    </p>
                  </div>

                  <div className="ba-showcase-grid">
                    <div className="ba-showcase-col">
                      <h4>Bài toán Nghiệp vụ (Problem Statement)</h4>
                      <p>
                        Nguy cơ bán vượt tồn kho (Overselling) khi nhiều khách cùng thanh toán sản phẩm số lượng có hạn;
                        lỗ hổng bảo mật khi người dùng có thể can thiệp URL để xóa dữ liệu hoặc truy cập trái phép bảng quản trị.
                      </p>
                    </div>

                    <div className="ba-showcase-col">
                      <h4>Phương pháp Phân tích của BA (BA Methodology)</h4>
                      <p>
                        (1) Thiết lập Business Rule Giữ tồn tạm thời (Inventory Reservation Window) 15 phút trong phiên checkout;
                        (2) Chuẩn hóa quy trình xóa dữ liệu sang cơ chế Soft Delete qua POST request có CSRF token kiểm tra quyền Admin;
                        (3) Tái cấu trúc mô hình dữ liệu quan hệ đạt chuẩn 3NF loại bỏ dư thừa.
                      </p>
                    </div>

                    <div className="ba-showcase-col wide">
                      <h4>Sản phẩm &amp; Bằng chứng Kiểm chứng (Artifacts &amp; Deliverables)</h4>
                      <div className="ba-artifacts-tags">
                        <span>Use Case Catalog</span>
                        <span>ERD 3NF Relational Schema</span>
                        <span>Danh mục API Endpoints</span>
                        <span>Bộ Test Case Kiểm thử Phân quyền</span>
                      </div>
                    </div>
                  </div>
                </article>
              )}
            </div>
          </section>

          {/* Section 05: Professional Communication & STAR Framework */}
          <section className="lesson-section ba-card-section" id="professional-communication">
            <div className="ba-section-badge">
              <UserCheck size={14} aria-hidden="true" />
              <span>05 · PROFESSIONAL COMMUNICATION &amp; STAR HUB</span>
            </div>
            <h2>Định vị Chuyên nghiệp &amp; Bộ khung STAR Phỏng vấn Chuyên sâu</h2>
            <p className="ba-section-intro">
              Một Business Analyst chuyên nghiệp cần khả năng truyền đạt rõ ràng, súc tích và minh chứng hóa mọi nhận định
              bằng kết quả đo lường cụ thể:
            </p>

            <div className="ba-positioning-quote">
              <div className="ba-quote-badge">Portfolio Positioning Statement</div>
              <p>
                “Tôi là <strong>Võ Văn Tú Tài</strong>, đã hoàn thành chương trình đào tạo <strong>Kỹ sư Hệ thống Thông tin tại IUH (GPA 3.26/4.0 Giỏi, sẵn sàng làm việc Full-time ngay lập tức)</strong>,
                định hướng phát triển chuyên sâu vị trí <strong>IT Business Analyst &amp; Associate Product Owner</strong>.
                Với thế mạnh kết nối chặt chẽ giữa quy trình vận hành thực tế, phân tích cấu trúc dữ liệu và kiến trúc kỹ thuật phần mềm,
                tôi đã tích lũy hơn 6 tháng kinh nghiệm thực tế tại HomeNest Software trong việc quản trị Scope Freeze, đánh giá Change Request, viết SRS/User Stories và điều phối UAT,
                cùng trải nghiệm thực địa tại bưu cục J&amp;T Express. Tôi tự tin mang lại giá trị tức thì cho đội ngũ thông qua sự kỷ luật về yêu cầu, tài liệu chuẩn hóa và khả năng phối hợp liên chức năng hiệu quả.”
              </p>
            </div>

            <h3 className="ba-subheading">Bộ khung STAR Phỏng vấn Minh chứng Dự án</h3>
            <div className="star-grid ba-star-grid">
              <article className="ba-star-card">
                <div className="ba-star-header">
                  <span className="ba-star-project">Nexus Express OMS</span>
                  <span className="ba-star-badge">STAR 01</span>
                </div>
                <div className="ba-star-body">
                  <p>
                    <strong>S (Situation):</strong> Trong ngành Logistics chuyển phát nhanh, các khái niệm nghiệp vụ như trạng thái kiện hàng, điểm quét mã, trung tâm trung chuyển và tiền thu hộ COD rất dễ bị hiểu sai lệch giữa bưu cục vận hành và đội ngũ lập trình, dẫn đến xung đột dữ liệu trên hệ thống.
                  </p>
                  <p>
                    <strong>T (Task):</strong> Tôi chịu trách nhiệm phân tích toàn diện, xây dựng mô hình dữ liệu chuẩn hóa và thiết kế quy trình nghiệp vụ cho toàn bộ vòng đời kiện hàng (Order-to-Delivery Lifecycle) có thể truy vết xuyên suốt nhiều dịch vụ.
                  </p>
                  <p>
                    <strong>A (Action):</strong> Vận dụng trải nghiệm thực địa tại J&amp;T Express, tôi khảo sát toàn bộ các điểm quét mã thực tế, thiết lập máy trạng thái 6 nấc bất biến, xây dựng sơ đồ BPMN 2.0, quy định quy tắc kiểm soát thất thoát COD và thiết kế hợp đồng OpenAPI 3.0 giữa Order Service và Tracking Service.
                  </p>
                  <p>
                    <strong>R (Result):</strong> Xây dựng thành công hệ thống OMS đang vận hành live tại <code>tracking.nexus-ex.site</code>, đảm bảo 100% khả năng truy vết dữ liệu từ đơn hàng, kiện hàng đến nhật ký tài xế, loại bỏ triệt để rủi ro xung đột trạng thái.
                  </p>
                </div>
              </article>

              <article className="ba-star-card">
                <div className="ba-star-header">
                  <span className="ba-star-project">Tourist Accommodation Platform</span>
                  <span className="ba-star-badge">STAR 02</span>
                </div>
                <div className="ba-star-body">
                  <p>
                    <strong>S (Situation):</strong> Nền tảng phục vụ đồng thời 3 nhóm tác nhân (Khách đặt phòng, Chủ cơ sở lưu trú, Ban quản trị) trên cùng một cơ sở dữ liệu, dẫn đến nguy cơ xung đột quyền hạn, sai lệch lịch trống phòng và tranh chấp hoàn tiền khi hủy đặt phòng.
                  </p>
                  <p>
                    <strong>T (Task):</strong> Thiết kế quy trình phân quyền RBAC và chính sách nghiệp vụ rõ ràng, giải quyết triệt để mâu thuẫn lợi ích giữa các bên liên quan và tích hợp cổng thanh toán trực tuyến an toàn.
                  </p>
                  <p>
                    <strong>A (Action):</strong> Phân tách rành mạch 3 User Journeys độc lập, thiết kế chính sách hoàn hủy phòng (Cancellation Policy) dựa trên thời gian thực, xây dựng sơ đồ máy trạng thái thanh toán VNPay và đặc tả tài liệu SRS chi tiết với đầy đủ kịch bản ngoại lệ.
                  </p>
                  <p>
                    <strong>R (Result):</strong> Hệ thống xử lý thông suốt luồng đặt cọc, thanh toán và tự động trích xuất báo cáo doanh thu/hoa hồng định dạng PDF/Excel, hoàn toàn không để xảy ra tình trạng overbooking hay tranh chấp tài chính giữa khách và chủ nhà.
                  </p>
                </div>
              </article>
            </div>

            <h3 className="ba-subheading">8 Câu hỏi Phỏng vấn BA Cốt lõi (Chuẩn BABOK v3 &amp; Agile Enterprise)</h3>
            <p className="ba-subheading-desc">
              Các câu hỏi thẩm định năng lực thực chiến thường gặp từ Hiring Manager và Product Director, kèm câu trả lời chuẩn mực:
            </p>

            <div className="ba-review-list">
              {coreConcepts.map((item, idx) => (
                <details key={item.question} className="ba-details-item" open={idx === 0}>
                  <summary className="ba-summary">
                    <span className="ba-summary-title">{item.question}</span>
                    <ChevronDown size={18} className="ba-summary-chevron" aria-hidden="true" />
                  </summary>
                  <div className="ba-details-content">
                    <p>{item.answer}</p>
                  </div>
                </details>
              ))}
            </div>
          </section>

          {/* Section 06: Applied Logistics Incident Case Study */}
          <section className="lesson-section ba-card-section" id="mock-case">
            <div className="ba-section-badge">
              <AlertTriangle size={14} aria-hidden="true" />
              <span>06 · APPLIED LOGISTICS INCIDENT CASE STUDY</span>
            </div>
            <h2>Case Study Thực chiến: Phân tích Nguyên nhân Gốc &amp; Giải quyết Tỷ lệ Giao hàng Thất bại</h2>
            <p className="ba-section-intro">
              Một bài tập tình huống thực tế bộc lộ rõ tư duy phân tích có cấu trúc, khả năng điều tra hiện trường
              và năng lực kiến tạo giải pháp phần mềm của một IT Business Analyst:
            </p>

            <div className="ba-case-scenario-card">
              <div className="ba-scenario-badge">Bối cảnh Sự cố Thực tế</div>
              <h3>Tình huống Nghiệp vụ: Tỷ lệ Giao Thất bại (Delivery Failed Rate) Tăng Vọt 18%</h3>
              <p>
                Tại một số bưu cục vệ tinh, báo cáo vận hành ghi nhận tỷ lệ giao hàng thất bại tăng đột biến từ 4% lên 18%.
                Tuy nhiên, hệ thống hiện tại chỉ hiển thị một trạng thái chung chung là <strong>“Delivery Failed”</strong>,
                không ghi nhận nguyên nhân chi tiết khiến Trưởng bưu cục và bộ phận Chăm sóc khách hàng (CSKH) không thể xác định
                do shipper giao ẩu, địa chỉ khách hàng sai hay khách hẹn ngày khác để đưa ra hành động khắc phục kịp thời.
              </p>
            </div>

            <h3 className="ba-subheading">Quy trình 7 Bước Root Cause Analysis (RCA) &amp; Thiết kế Giải pháp</h3>
            <ol className="case-analysis-list ba-rca-list">
              <li>
                <span className="ba-rca-step-num">01</span>
                <div>
                  <strong>Làm rõ Mục tiêu &amp; Phân rã Bài toán</strong>
                  <p>
                    Tách biệt triệu chứng (Failed rate tăng) với mục tiêu kinh doanh: Cần giảm tỷ lệ giao thất bại thực tế xuống dưới 5%,
                    rút ngắn thời gian xử lý khiếu nại bưu cục từ 24h xuống dưới 2h, và cung cấp dữ liệu minh bạch cho đối soát COD.
                  </p>
                </div>
              </li>
              <li>
                <span className="ba-rca-step-num">02</span>
                <div>
                  <strong>Xác định &amp; Phỏng vấn Stakeholders</strong>
                  <p>
                    Khảo sát 4 nhóm tác nhân: Shipper (người trực tiếp phát hàng), Trưởng bưu cục (chịu trách nhiệm tồn kho/SLA),
                    Nhân viên CSKH (tiếp nhận phản ánh khách hàng) và Khách nhận hàng (chờ nhận kiện).
                  </p>
                </div>
              </li>
              <li>
                <span className="ba-rca-step-num">03</span>
                <div>
                  <strong>Khảo sát As-Is &amp; Phát hiện Lỗ hổng Quy trình</strong>
                  <p>
                    Phát hiện 3 điểm hở nghiêm trọng: (1) Ứng dụng mobile cho phép shipper chọn Failed mà không cần chọn lý do;
                    (2) Không có cơ chế xác thực shipper đã thực sự gọi điện cho khách hay chưa;
                    (3) Dữ liệu thất bại chỉ đồng bộ về dashboard vào cuối ngày, khiến CSKH không thể can thiệp trong ca làm việc.
                  </p>
                </div>
              </li>
              <li>
                <span className="ba-rca-step-num">04</span>
                <div>
                  <strong>Chuẩn hóa Danh mục Mã Lý do Thất bại (Standardized Failure Reason Taxonomy)</strong>
                  <p>
                    Thiết kế bộ 8 mã lý do chuẩn: <code>CUST_UNREACHABLE</code> (Không liên lạc được sau 3 cuộc gọi),
                    <code>CUST_RESCHEDULE</code> (Khách hẹn phát lại ngày khác), <code>WRONG_ADDRESS</code> (Sai địa chỉ/số điện thoại),
                    <code>REFUSED_DAMAGED</code> (Khách từ chối do kiện hàng rách hỏng), <code>CUST_OUT_OF_BUDGET</code> (Không đủ tiền COD),
                    <code>SHIPPER_OVERLOAD</code> (Shipper quá tải thời gian làm việc).
                  </p>
                </div>
              </li>
              <li>
                <span className="ba-rca-step-num">05</span>
                <div>
                  <strong>Thiết kế Quy trình Mục tiêu (To-Be Workflow) &amp; Business Rules</strong>
                  <p>
                    Thiết lập Business Rules nghiêm ngặt: (1) Bắt buộc chụp ảnh vị trí định vị GPS và mặt tiền nhà đối với lý do Không liên lạc được;
                    (2) Hệ thống tự động gửi tin nhắn Zalo/SMS cho khách khi shipper bấm Failed để khách xác nhận lịch hẹn mới;
                    (3) Tự động lên lịch giao lại (Reattempt) vào ngày hôm sau tối đa 3 lần trước khi kích hoạt quy trình chuyển hoàn (Return to Sender - RTS).
                  </p>
                </div>
              </li>
              <li>
                <span className="ba-rca-step-num">06</span>
                <div>
                  <strong>Xác lập Acceptance Criteria (BDD / Gherkin Format)</strong>
                  <p>
                    <code>Given</code> Shipper đang thực hiện cập nhật trạng thái đơn hàng thành 'Delivery Failed',<br />
                    <code>When</code> Shipper chọn mã lý do 'Không liên lạc được',<br />
                    <code>Then</code> Hệ thống kiểm tra thiết bị đã phát sinh tối thiểu 2 cuộc gọi tới số người nhận trong vòng 30 phút qua nhật ký viễn thông;
                    nếu không thỏa mãn, chặn cập nhật trạng thái và yêu cầu shipper liên hệ lại.
                  </p>
                </div>
              </li>
              <li>
                <span className="ba-rca-step-num">07</span>
                <div>
                  <strong>Đo lường &amp; Đánh giá Hiệu quả Sau Triển khai (Post-Release Evaluation)</strong>
                  <p>
                    Đo lường các chỉ số cốt lõi sau 30 ngày: Tỷ lệ giao thất bại giảm từ 18% xuống còn 5.2%,
                    tỷ lệ giao lại thành công (Reattempt Success Rate) đạt 74%, và 100% khiếu nại của khách hàng có đầy đủ lịch sử cuộc gọi và hình ảnh để đối soát tức thì.
                  </p>
                </div>
              </li>
            </ol>

            <div className="case-deliverables ba-case-deliverables">
              <article className="ba-deliverable-card">
                <Table2 size={24} aria-hidden="true" />
                <strong>Artifacts Nghiệp vụ Bàn giao</strong>
                <p>
                  Sơ đồ BPMN 2.0 To-Be Process, Bảng Data Dictionary bổ sung thực thể <code>delivery_attempts</code>,
                  Tài liệu Functional Specification Document (FSD) cho Mobile App, và Tài liệu đào tạo SOP bưu cục.
                </p>
              </article>
              <article className="ba-deliverable-card">
                <Network size={24} aria-hidden="true" />
                <strong>Câu hỏi Đào sâu Kỹ thuật</strong>
                <p>
                  Cơ chế lưu trữ offline scan khi mất sóng 4G? Ai có thẩm quyền xóa mã lý do thất bại?
                  Tần suất đồng bộ qua Webhook giữa Mobile Service và Central Database là bao nhiêu giây?
                </p>
              </article>
            </div>
          </section>

          {/* Section 07: Competency Synthesis & Readiness Checklist */}
          <section className="lesson-section ba-card-section" id="final-checklist">
            <div className="ba-section-badge">
              <CheckCircle2 size={14} aria-hidden="true" />
              <span>07 · ENTERPRISE READINESS &amp; SYNTHESIS</span>
            </div>
            <h2>Ma trận Đánh giá Năng lực BA &amp; Bộ Tiêu chí Sẵn sàng Triển khai Thực tế</h2>
            <p className="ba-section-intro">
              Năng lực của một Business Analyst không đo đếm bằng số trang tài liệu Word hay slide vẽ đẹp,
              mà được khẳng định qua 4 trụ cột kỷ luật then chốt trong môi trường dự án chuyên nghiệp:
            </p>

            <div className="prep-timeline ba-four-pillars">
              <article className="ba-pillar-card">
                <span className="ba-pillar-tag">Trụ cột 01</span>
                <strong>Role &amp; Objective Clarity</strong>
                <p>
                  Luôn phân biệt rõ ràng giữa Business Problem (vấn đề kinh doanh), Stakeholder Needs (nhu cầu thực sự)
                  và Solution Features (tính năng giải pháp). Tránh bẫy sa đà vào thiết kế giao diện khi mục tiêu chưa rõ.
                </p>
              </article>

              <article className="ba-pillar-card">
                <span className="ba-pillar-tag">Trụ cột 02</span>
                <strong>Structured Requirement Discipline</strong>
                <p>
                  Đặc tả yêu cầu có cấu trúc nhất quán: Goal ➔ Actor ➔ As-Is/To-Be Flow ➔ Business Rules ➔ Data Schema ➔ Exceptions ➔ Acceptance Criteria.
                </p>
              </article>

              <article className="ba-pillar-card">
                <span className="ba-pillar-tag">Trụ cột 03</span>
                <strong>End-to-End Traceability</strong>
                <p>
                  Mọi yêu cầu kinh doanh đều có thể truy vết (traceable) từ Business Need đến User Story,
                  hợp đồng API, dòng code commit và kịch bản kiểm thử nghiệm thu UAT.
                </p>
              </article>

              <article className="ba-pillar-card">
                <span className="ba-pillar-tag">Trụ cột 04</span>
                <strong>Cross-Functional Collaboration</strong>
                <p>
                  Xây dựng ngôn ngữ chung (Ubiquitous Language) giúp Khách hàng, Product Owner, UI/UX Designer,
                  Development Team và QA cùng thấu hiểu và đồng thuận cao nhất.
                </p>
              </article>
            </div>

            {/* Interactive Checklist */}
            <div className="interview-checklist ba-interactive-checklist">
              <div className="ba-checklist-header">
                <div className="ba-checklist-title-wrap">
                  <CheckCircle2 size={20} className="ba-checklist-icon" aria-hidden="true" />
                  <h4>Bộ Tiêu chí Sẵn sàng Thực chiến (Candidate Readiness Checklist)</h4>
                </div>
                <div className="ba-checklist-progress-pill">
                  {checkedCount}/6 Tiêu chí Hoàn thành
                </div>
              </div>

              <div className="ba-checklist-items">
                {[
                  "Nền tảng Kỹ sư Hệ thống Thông tin (IUH, GPA 3.26/4.0 Giỏi), nắm vững CSDL, SQL và kiến trúc phần mềm.",
                  "6+ tháng kinh nghiệm thực tế tại HomeNest Software: quản trị Scope Freeze, đánh giá Change Request, viết SRS/User Stories, điều phối UAT.",
                  "Trải nghiệm thực tế tại bưu cục J&T Express: am hiểu quy trình logistics, luân chuyển trạng thái đơn, điểm quét mã và đối soát COD.",
                  "Kỹ năng mô hình hóa quy trình chuẩn hóa: BPMN 2.0, Use Case Diagram, Activity Flow, ERD 3NF và hợp đồng OpenAPI 3.0.",
                  "Tư duy kiểm soát chất lượng chặt chẽ: User Stories chuẩn INVEST, Acceptance Criteria dạng Gherkin, Definition of Done (DoD).",
                  "Sẵn sàng làm việc Full-time ngay lập tức tại các dự án phần mềm và doanh nghiệp công nghệ.",
                ].map((item, idx) => (
                  <label key={idx} className={`ba-check-item ${checkedItems[idx] ? "is-checked" : ""}`}>
                    <input
                      type="checkbox"
                      checked={Boolean(checkedItems[idx])}
                      onChange={() => toggleCheck(idx)}
                    />
                    <span className="ba-custom-checkbox">
                      {checkedItems[idx] && <Check size={13} aria-hidden="true" />}
                    </span>
                    <span className="ba-check-label-text">{item}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="questions-for-interviewer ba-interviewer-box">
              <div className="ba-interviewer-header">
                <Target size={18} aria-hidden="true" />
                <strong>Câu hỏi Chiến lược Trao đổi cùng Hiring Manager &amp; Tech Lead</strong>
              </div>
              <div className="ba-prompts-list">
                <div className="ba-prompt-row">
                  <span className="ba-prompt-num">Q1</span>
                  <p>“Hiện tại dự án đang áp dụng quy trình quản lý Requirement Traceability và xử lý Change Request (CR) bằng công cụ nào (Jira, Confluence, ClickUp)?”</p>
                </div>
                <div className="ba-prompt-row">
                  <span className="ba-prompt-num">Q2</span>
                  <p>“Quy trình nghiệm thu UAT giữa đội ngũ Business và Development đang vận hành theo mô hình nào để đảm bảo Definition of Done trước khi release production?”</p>
                </div>
                <div className="ba-prompt-row">
                  <span className="ba-prompt-num">Q3</span>
                  <p>“Những chỉ số KPI cụ thể nào trong 3-6 tháng đầu sẽ đánh giá một IT Business Analyst / Associate PO đóng góp thành công cho dự án?”</p>
                </div>
              </div>
            </div>
          </section>

          {/* Key Takeaway Card */}
          <div className="next-lesson ba-next-step ba-takeaway-card">
            <div className="ba-takeaway-badge">
              <Sparkles size={14} aria-hidden="true" />
              <span>Key Takeaway</span>
            </div>
            <strong>Business Analysis biến sự mơ hồ thành quyết định có thể truy vết</strong>
            <p>
              Giá trị cốt lõi của một Business Analyst không nằm ở số lượng tài liệu dày cộm, mà nằm ở khả năng làm sáng tỏ bài toán kinh doanh,
              giảm thiểu tối đa sự mơ hồ (ambiguity), và kiến tạo một nền tảng thấu hiểu chung vững chắc để đội ngũ thiết kế, lập trình,
              kiểm thử và vận hành cùng tạo ra sản phẩm thành công.
            </p>
            <div className="ba-takeaway-actions">
              <a
                href="/"
                onClick={(e) => navigate(e, "/")}
                className="ba-action-link primary"
              >
                <ArrowLeft size={15} aria-hidden="true" />
                Về Trang chủ Portfolio
              </a>
              <a
                href="https://tracking.nexus-ex.site/"
                target="_blank"
                rel="noreferrer"
                className="ba-action-link secondary"
              >
                <ExternalLink size={15} aria-hidden="true" />
                Trải nghiệm Live Demo OMS
              </a>
              <a
                href="/applied-jobs/CV_VoVanTuTai_IT_Business_Analyst.pdf"
                download="CV_VoVanTuTai_IT_Business_Analyst.pdf"
                className="ba-action-link outline"
              >
                <Download size={15} aria-hidden="true" />
                Tải CV IT Business Analyst (PDF)
              </a>
            </div>
          </div>
        </article>
      </div>

      <footer className="ba-lesson-footer">
        <div className="ba-footer-left">
          <span>Business Analysis &amp; Enterprise Architecture · Chuyên đề 05</span>
          <span className="ba-footer-divider">•</span>
          <span>Võ Văn Tú Tài · B.Eng in Information Systems (IUH)</span>
        </div>
        <div className="ba-footer-right">
          <Sparkles size={15} aria-hidden="true" />
          <span>Coursework &amp; Field Experience to Enterprise Delivery Evidence</span>
        </div>
      </footer>
    </main>
  );
}

function App() {
  const [pathname, setPathname] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => setPathname(window.location.pathname);
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  useEffect(() => {
    const pageTitles: Record<string, string> = {
      "/knowledge": "Knowledge Portfolio - Vo Van Tu Tai",
      "/knowledge/programming-languages": "Programming Languages & Runtime Architecture - Võ Văn Tú Tài",
      "/knowledge/database": "Database Fundamentals - Vo Van Tu Tai",
      "/knowledge/database/data-modeling": "Data Modeling & ERD - Vo Van Tu Tai",
      "/knowledge/backend-api": "Backend & Authentication Fundamentals - Vo Van Tu Tai",
      "/knowledge/business-analysis": "IT Business Analysis & Enterprise Architecture - Võ Văn Tú Tài",
    };
    document.title = pageTitles[pathname] ?? "Vo Van Tu Tai Portfolio";
  }, [pathname]);

  const navigate: NavigateHandler = (event, path) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    window.history.pushState({}, "", path);
    setPathname(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (pathname === "/knowledge") return <KnowledgeHubPage navigate={navigate} />;
  if (pathname === "/knowledge/programming-languages") return <ProgrammingLanguagesLessonPage navigate={navigate} />;
  if (pathname === "/knowledge/database") return <DatabaseLessonPage navigate={navigate} />;
  if (pathname === "/knowledge/database/data-modeling") return <DataModelingLessonPage navigate={navigate} />;
  if (pathname === "/knowledge/backend-api") return <BackendApiLessonPage navigate={navigate} />;
  if (pathname === "/knowledge/business-analysis") return <BusinessAnalysisLessonPage navigate={navigate} />;
  return <PortfolioPage navigate={navigate} />;
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

export default App;
