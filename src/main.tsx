import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import {
  ArrowLeft,
  ArrowUpRight,
  BookOpen,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  Database,
  Download,
  Github,
  KeyRound,
  Linkedin,
  Mail,
  MapPin,
  Network,
  Phone,
  ServerCog,
  Sparkles,
  Table2,
} from "lucide-react";
import "./styles.css";

type Language = "vi" | "en";

interface ProjectItem {
  name: string;
  role: string;
  href: string;
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
      webGeneralCv: string;
      webGeneralCvHref: string;
      webBaCv: string;
      webBaCvHref: string;
      pdfGeneralCv: string;
      pdfGeneralCvHref: string;
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
    pdfGeneral: { label: string; href: string };
    pdfBa: { label: string; href: string };
    webGeneral: { label: string; href: string };
    webBa: { label: string; href: string };
    location: string;
  };
  footer: {
    caption: string;
  };
}

const portfolioDataVi: PortfolioLocaleData = {
  nav: {
    projects: "Dự án",
    skills: "Kỹ năng",
    baKnowledge: "Kiến thức BA",
    knowledge: "Sổ tay IT",
    contact: "Liên hệ",
  },
  hero: {
    profileMeta: "TP. Hồ Chí Minh, Việt Nam · Kỹ sư Hệ thống Thông tin (IUH · Sẵn sàng làm Full-time)",
    eyebrow: "Hồ sơ Năng lực IT Business Analyst",
    heading: "Cầu Nối Vững Chắc Giữa Bài Toán Kinh Doanh và Giải Pháp Kỹ Thuật",
    lede: (
      <>
        Đã hoàn thành 100% chương trình đào tạo Kỹ sư <b>Hệ thống Thông tin (IUH - GPA 3.26/4.0 · Sẵn sàng làm việc Full-time)</b>, sở hữu thế mạnh kép về <b>Phân tích Nghiệp vụ</b> và <b>Tư duy Kỹ thuật Hệ thống</b>.
        Tích lũy 6+ tháng kinh nghiệm Associate BA tại <b>HomeNest Software</b> (được cất nhắc từ Thực tập sinh) cùng nền tảng vận hành hiện trường tại <b>J&amp;T Express</b>.
        Thành thạo xây dựng tài liệu <b>PRD/SRS</b> chuẩn kỹ thuật cho Dev, mô hình hóa quy trình <b>BPMN 2.0</b>, viết <b>User Stories (Given-When-Then)</b>,
        thiết kế wireframe <b>Figma</b>, và điều phối <b>UAT</b> xuyên suốt 2+ chu kỳ phát hành sản phẩm.
      </>
    ),
    actions: {
      explore: "Khám phá Case Studies",
      webGeneralCv: "Xem CV Tổng Quát (Web)",
      webGeneralCvHref: "/cv-general.html",
      webBaCv: "Xem CV Chuyên Sâu BA (Web)",
      webBaCvHref: "/po-ba-cv-vi.html",
      pdfGeneralCv: "Tải CV (PDF Tiếng Việt)",
      pdfGeneralCvHref: "/VoVanTuTai_IT_Business_Analyst_CV_Tong_Quat.pdf",
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
    targetValue: "IT Business Analyst (Fresher / Junior) · Associate BA",
    tags: ["Phân tích Nghiệp vụ", "Mô hình hóa Quy trình", "Hệ thống Booking & OMS"],
  },
  proofSignals: [
    {
      label: "Đặc tả & Yêu cầu",
      value: "Chuyển hóa bài toán kinh doanh phức tạp thành tài liệu PRD/SRS chi tiết, sơ đồ BPMN 2.0, wireframe Figma và tiêu chí Given-When-Then rõ ràng.",
    },
    {
      label: "Vận hành Sprint & Scope",
      value: "Được cất nhắc từ Intern lên Associate BA tại HomeNest; kinh nghiệm bảo vệ Scope Freeze, quản lý backlog Jira và nghiệm thu UAT qua 2+ đợt release.",
    },
    {
      label: "Thực tế Hiện trường",
      value: "Kinh nghiệm điều phối bưu cục tại J&T Express được áp dụng trực tiếp vào tối ưu hóa vòng đời đơn hàng, quy tắc quét mã và chuẩn hóa SOP.",
    },
  ],
  stats: [
    { label: "Vị trí Ứng tuyển", value: "IT Business Analyst (Fresher / Junior)" },
    { label: "Sản phẩm Chuyên môn", value: "PRD/SRS · BPMN · User Stories · UAT" },
    { label: "Kinh nghiệm Thực chiến", value: "HomeNest (Associate BA) & J&T (Vận hành)" },
    { label: "Học vấn & Đào tạo", value: "Chương trình Kỹ sư HTTT (IUH) · GPA 3.26" },
  ],
  about: {
    label: "Giới thiệu bản thân",
    heading: "Một Business Analyst với tư duy kỹ thuật vững vàng và kinh nghiệm thực tế hiện trường.",
    p1: (
      <>
        Tôi đã hoàn thành 100% chương trình đào tạo Kỹ sư Hệ thống Thông tin tại Trường Đại học Công nghiệp TP.HCM (IUH, GPA 3.26/4.0, tốt nghiệp 2026 và sẵn sàng nhận việc Full-time ngay lập tức),
        kết hợp kinh nghiệm thực chiến Associate Business Analyst tại <b>HomeNest Software</b> với nền tảng
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
      title: "Nền tảng Quản lý Đặt phòng & Lưu trú Doanh nghiệp",
      description: "Hệ thống thực tế minh chứng cách chuyển hóa yêu cầu nghiệp vụ phức tạp thành luồng xử lý chặt chẽ, kiểm soát đồng thời (race condition) và cổng thông tin phân quyền đa vai trò.",
      projects: [
        {
          name: "tourist-accommodation-management-system",
          role: "Nền tảng Đặt phòng & Quản lý Lưu trú · Hệ thống Đa Phân quyền",
          href: "https://github.com/VoVanTuTai/tourist-accommodation-management-system",
          image: "/assets/project-tourist.png",
          stack: ["BPMN 2.0", "PRD/SRS", "RBAC Matrix", "VNPay IPN", "MySQL", "Express.js"],
          summary: "Nền tảng quản lý lưu trú giải quyết triệt để tranh chấp giữ phòng đồng thời (race condition), lịch phòng theo thời gian thực, chính sách hủy phòng phân tầng và quy trình thanh toán trực tuyến.",
          highlights: [
            "Thách thức Nghiệp vụ: Triệt tiêu rủi ro trùng lịch phòng (overbooking race condition) vào giờ cao điểm, phân quyền độc lập 3 nhóm người dùng (Khách/Chủ nhà/Quản trị) và xử lý sự cố rớt mạng khi thanh toán trực tuyến.",
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
    {
      title: "Hệ thống Vận tải & Quản lý Đơn hàng (OMS)",
      description: "Các hệ thống cấp doanh nghiệp chuyển đổi kinh nghiệm vận hành thực tế thành máy trạng thái BPMN 2.0, trạm quét mã kiểm soát và hợp đồng API chuẩn mực.",
      projects: [
        {
          name: "logistics-management-system",
          role: "Nexus Express · Hệ thống Quản lý Logistics & Đơn hàng (OMS)",
          href: "https://github.com/VoVanTuTai/logistics-management-system",
          image: "/assets/project-nexus.png",
          stack: ["BPMN 2.0 (Camunda)", "OpenAPI 3.0", "ERD 3NF", "PostgreSQL", "NestJS", "RabbitMQ"],
          summary: "Nền tảng logistics toàn diện chuyển hóa kinh nghiệm điều phối bưu cục thực tế thành phân định ranh giới dịch vụ, luồng sự kiện bất đồng bộ và kiểm soát luồng bưu kiện.",
          highlights: [
            "Thách thức Nghiệp vụ: Trạng thái theo dõi đơn hàng không nhất quán giữa các trạm trung chuyển và ranh giới dịch vụ mơ hồ giữa các microservice phân tán.",
            "Phân tích BA & Giải pháp: Chuẩn hóa vòng đời bưu kiện bằng BPMN 2.0 trên Camunda; thiết kế hợp đồng OpenAPI 3.0 với Idempotency Key; xây dựng từ điển dữ liệu 3NF chuẩn hóa.",
            "Kết quả & Bàn giao: Động cơ trạng thái bưu kiện minh bạch, luồng sự kiện bất đồng bộ RabbitMQ và quy trình xử lý ngoại lệ SOP (chuyển hoàn RTO, hư hỏng, sai tuyến).",
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
        title: "Công cụ & Phương pháp Agile",
        items: [
          "Jira & Confluence",
          "Figma (Wireframing)",
          "Camunda Modeler & Draw.io",
          "Lập kế hoạch Sprint & Phân rã WBS",
          "Bảo vệ Baseline & Scope Freeze",
          "Các nghi thức Agile / Scrum",
        ],
      },
    ],
  },
  experienceSection: {
    homeNest: {
      label: "Kinh nghiệm Phân tích Nghiệp vụ",
      title: "HomeNest Software — Associate Business Analyst (Cất nhắc từ Thực tập sinh) · Trợ lý PM",
      meta: "03/2026 – Hiện tại · TP. Hồ Chí Minh, Việt Nam",
      text: (
        <>
          Được cất nhắc từ Thực tập sinh lên Associate BA chính thức sau những đóng góp rõ nét vào tốc độ triển khai sprint và sự đồng thuận giữa các bên liên quan.
          Đóng vai trò cầu nối khéo léo trong giai đoạn khơi gợi yêu cầu, chủ động thương lượng các phương án kỹ thuật thay thế để bảo vệ mốc Scope Freeze của sprint mà vẫn duy trì sự tin cậy từ khách hàng.
          Chuẩn hóa hệ thống User Stories kèm tiêu chí nghiệm thu <b>Given-When-Then</b> và từ điển dữ liệu rõ ràng, giúp xóa bỏ hiểu nhầm về edge-case giữa đội Dev và QA.
          Đồng hành cùng PM trong các buổi Backlog Grooming trên Jira và trực tiếp điều phối kiểm thử UAT phân quyền xuyên suốt 2+ chu kỳ phát hành sản phẩm.
        </>
      ),
    },
    jnt: {
      label: "Kinh nghiệm Vận hành Hiện trường",
      title: "J&T Express — Điều phối viên Quy trình Vận hành (Chính thức)",
      meta: "09/2025 – 02/2026 · TP. Hồ Chí Minh, Việt Nam",
      text: (
        <>
          Điều phối hoạt động logistics bưu cục với sản lượng &gt;300 đơn hàng/ngày. Khéo léo thuyết phục và hướng dẫn đội ngũ nhân viên ca áp dụng quy trình xử lý đơn hàng một chiều khép kín (Nhập kiện &rarr; Cân đo &rarr; Quét mã &rarr; Xuất bưu cục), giải tỏa dứt điểm tình trạng nghẽn hàng và rút ngắn 25% thời gian xử lý.
          Biên soạn quy trình thao tác chuẩn (SOP) xử lý ngoại lệ nhằm triệt tiêu tranh cãi giao nhận giữa các ca, đồng thời thiết lập thói quen đối soát dữ liệu thực tế và hệ thống mỗi ngày để đảm bảo tính toàn vẹn 100% của chuỗi dữ liệu bưu gửi.
        </>
      ),
    },
  },
  contactSection: {
    label: "Sẵn sàng Hợp tác",
    heading: "Chào đón cơ hội việc làm vị trí IT Business Analyst (Fresher / Junior) và Associate PM.",
    subtitle: "Sẵn sàng nhận việc toàn thời gian (On-site hoặc Hybrid) ngay lập tức tại TP. Hồ Chí Minh.",
    pdfGeneral: { label: "CV Tổng Quát (PDF Tiếng Việt)", href: "/VoVanTuTai_IT_Business_Analyst_CV_Tong_Quat.pdf" },
    pdfBa: { label: "CV Chuyên Sâu BA (PDF Tiếng Việt)", href: "/VoVanTuTai_Business_Analyst_CV_Tieng_Viet.pdf" },
    webGeneral: { label: "Xem CV Tổng Quát (Bản Web)", href: "/cv-general.html" },
    webBa: { label: "Xem CV Chuyên Sâu BA (Web)", href: "/po-ba-cv-vi.html" },
    location: "TP. Hồ Chí Minh, Việt Nam (Sẵn sàng làm việc ngay)",
  },
  footer: {
    caption: "Hệ thống Nghiệp vụ · Phân tích & Phần mềm",
  },
};

const portfolioDataEn: PortfolioLocaleData = {
  nav: {
    projects: "Projects",
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
        Completed 100% of the Information Systems Engineering degree requirements from <b>IUH (GPA 3.26/4.0 · Available Full-time)</b> with a dual edge in <b>Business Analysis</b> and <b>Technical Systems Design</b>.
        Equipped with 6+ months of hands-on Associate BA experience at <b>HomeNest Software</b> (promoted from Intern) and frontline operational grounding at <b>J&amp;T Express</b>.
        Proven track record in authoring engineering-ready <b>PRD/SRS</b>, modeling <b>BPMN 2.0</b> workflows, crafting testable <b>Given-When-Then</b> User Stories,
        designing <b>Figma wireframes</b>, and coordinating end-to-end <b>UAT</b> across 2+ release cycles.
      </>
    ),
    actions: {
      explore: "Explore Case Studies",
      webGeneralCv: "View General Resume (Web)",
      webGeneralCvHref: "/cv-general-en.html",
      webBaCv: "View Deep BA Resume (Web)",
      webBaCvHref: "/cv.html",
      pdfGeneralCv: "Download Resume (English PDF)",
      pdfGeneralCvHref: "/VoVanTuTai_IT_Business_Analyst_Resume_General.pdf",
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
    targetValue: "IT Business Analyst (Fresher / Junior) · Associate BA",
    tags: ["Business Analysis", "Process Modeling", "Booking & OMS Systems"],
  },
  proofSignals: [
    {
      label: "Requirements & Specs",
      value: "Translating ambiguous business needs into PRD/SRS documents, BPMN 2.0 workflows, Figma wireframes, and testable Given-When-Then criteria.",
    },
    {
      label: "Sprint & Scope Delivery",
      value: "Promoted from Intern to Associate BA at HomeNest; experienced in Scope Freeze defense, Jira backlog grooming, and UAT across 2+ release cycles.",
    },
    {
      label: "Operational Grounding",
      value: "Frontline J&T Express logistics operations applied to shipment lifecycles, scan rules, and SOP standardization.",
    },
  ],
  stats: [
    { label: "Target Role", value: "IT Business Analyst (Fresher / Junior)" },
    { label: "Core Deliverables", value: "PRD/SRS · BPMN · User Stories · UAT" },
    { label: "Proven Experience", value: "HomeNest (Associate BA) & J&T (Ops)" },
    { label: "Education & Degree", value: "B.Eng. Information Systems (IUH) · GPA 3.26" },
  ],
  about: {
    label: "About Me",
    heading: "A Business Analyst with strong technical literacy and real-world operational grounding.",
    p1: (
      <>
        I have completed 100% of the curriculum for the Engineer's Degree / Bachelor of Engineering (B.Eng.) in Information Systems at Industrial University of Ho Chi Minh City (IUH, GPA 3.26/4.0, available immediately for full-time roles),
        combining hands-on Associate Business Analyst experience at <b>HomeNest Software</b> with frontline operational
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
            "Business Challenge: Eliminating room overbooking race conditions during peak traffic, isolating 3-tier user roles (Guest/Host/Admin), and handling network drops during online payment.",
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
    {
      title: "Logistics & Order Management Systems (OMS)",
      description: "Enterprise systems translating frontline operations into formal BPMN 2.0 state machines, scan checkpoints, and API contracts.",
      projects: [
        {
          name: "logistics-management-system",
          role: "Nexus Express · Logistics & Order Management System (OMS)",
          href: "https://github.com/VoVanTuTai/logistics-management-system",
          image: "/assets/project-nexus.png",
          stack: ["BPMN 2.0 (Camunda)", "OpenAPI 3.0", "ERD 3NF", "PostgreSQL", "NestJS", "RabbitMQ"],
          summary: "An end-to-end logistics platform turning first-hand branch operations into explicit service ownership, event handoffs, and shipment workflows.",
          highlights: [
            "Business Challenge: Tracking status inconsistencies across multi-party carrier handoffs and ambiguous service boundaries across distributed microservices.",
            "BA Analysis & Solution: Formalized parcel lifecycles using BPMN 2.0 in Camunda; authored OpenAPI 3.0 contracts with Idempotency keys; drafted normalized 3NF relational data dictionary.",
            "Outcome & Deliverables: Documented traceable parcel state engine, RabbitMQ asynchronous event workflows, and exception handling SOPs (RTO, damaged parcels, routing errors).",
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
        title: "Agile Tools & Methodologies",
        items: [
          "Jira & Confluence",
          "Figma (Wireframing)",
          "Camunda Modeler & Draw.io",
          "Sprint Planning & WBS Breakdown",
          "Scope Baseline & Scope Freeze",
          "Agile / Scrum Rituals",
        ],
      },
    ],
  },
  experienceSection: {
    homeNest: {
      label: "Business Analyst Experience",
      title: "HomeNest Software — Associate Business Analyst (Promoted from Intern) · PM Assistant",
      meta: "Mar 2026 – Present · Ho Chi Minh City, Vietnam",
      text: (
        <>
          Promoted from Intern to official Associate BA following impactful contributions to sprint velocity and stakeholder alignment.
          Acted as a diplomatic bridge during requirements discovery, tactfully negotiating technical workarounds to defend Scope Freeze baselines
          while sustaining client trust. Standardized engineering-ready User Stories with <b>Given-When-Then</b> acceptance criteria and data dictionaries
          to eliminate edge-case friction between Dev and QA. Partnered with the PM in Jira backlog grooming, and facilitated role-based UAT verification across 2+ release cycles.
        </>
      ),
    },
    jnt: {
      label: "Operations Experience",
      title: "J&T Express — Operations Process Coordinator (Full-time)",
      meta: "Sep 2025 – Feb 2026 · Ho Chi Minh City, Vietnam",
      text: (
        <>
          Coordinated branch logistics handling &gt;300 shipments/day. Tactfully engaged frontline shift crews to adopt a closed-loop unidirectional
          processing flow (Intake &rarr; Weighing &rarr; Scanning &rarr; Dispatch), relieving sorting bottlenecks and cutting turnaround time by 25%.
          Authored exception SOPs to eliminate shift-to-shift disputes, and instituted daily physical-to-digital reconciliation routines to ensure 100% supply chain data integrity.
        </>
      ),
    },
  },
  contactSection: {
    label: "Ready to Connect",
    heading: "Open to IT Business Analyst (Fresher / Junior) and Associate PM roles.",
    subtitle: "Available immediately for Full-time on-site or hybrid roles in Ho Chi Minh City.",
    pdfGeneral: { label: "General Resume (English PDF)", href: "/VoVanTuTai_IT_Business_Analyst_Resume_General.pdf" },
    pdfBa: { label: "Deep BA Resume (English PDF)", href: "/VoVanTuTai_Business_Analyst_CV.pdf" },
    webGeneral: { label: "View General Resume (Web)", href: "/cv-general-en.html" },
    webBa: { label: "View Deep BA Resume (Web)", href: "/cv.html" },
    location: "Ho Chi Minh City, Vietnam (Available Immediately)",
  },
  footer: {
    caption: "Business Systems · Software + Analysis",
  },
};

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

  return (
    <main className="site-shell">
      <header className="topbar" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="Vo Van Tu Tai home">
          <img className="brand-avatar" src="/assets/avatar.png" alt="" aria-hidden="true" />
          <span>Vo Van Tu Tai</span>
        </a>

        <div className="topbar-right">
          <nav>
            <a href="#projects">{t.nav.projects}</a>
            <a href="#skills">{t.nav.skills}</a>
            <a href="/knowledge/business-analysis" onClick={(event) => navigate(event, "/knowledge/business-analysis")}>
              {t.nav.baKnowledge}
            </a>
            <a href="/knowledge" onClick={(event) => navigate(event, "/knowledge")}>
              {t.nav.knowledge}
            </a>
            <a href="#contact">{t.nav.contact}</a>
          </nav>

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

      <section className="hero" id="top">
        <div className="hero-copy">
          <div className="profile-lockup">
            <img className="profile-avatar" src="/assets/avatar.png" alt="Vo Van Tu Tai" />
            <div>
              <p className="profile-name">Vo Van Tu Tai</p>
              <p className="profile-meta">{t.hero.profileMeta}</p>
            </div>
          </div>
          <p className="eyebrow">{t.hero.eyebrow}</p>
          <h1>{t.hero.heading}</h1>
          <p className="hero-lede">{t.hero.lede}</p>
          <div className="hero-actions">
            <a className="primary-action" href="#projects">
              <ArrowUpRight size={18} aria-hidden="true" />
              {t.hero.actions.explore}
            </a>
            <a className="secondary-action" href={t.hero.actions.webGeneralCvHref} target="_blank" rel="noreferrer">
              <ArrowUpRight size={18} aria-hidden="true" />
              {t.hero.actions.webGeneralCv}
            </a>
            <a className="secondary-action" href={t.hero.actions.webBaCvHref} target="_blank" rel="noreferrer">
              <ArrowUpRight size={18} aria-hidden="true" />
              {t.hero.actions.webBaCv}
            </a>
            <a className="secondary-action" href={t.hero.actions.pdfGeneralCvHref} download>
              <Download size={18} aria-hidden="true" />
              {t.hero.actions.pdfGeneralCv}
            </a>
          </div>
        </div>

        <aside className="hero-visual" aria-label="Portfolio proof points">
          <div className="visual-frame">
            <div className="browser-bar" aria-hidden="true">
              <span />
              <span />
              <span />
              <strong>{t.preview.browserLabel}</strong>
            </div>
            <div className="web-preview" aria-label="Business Analyst portfolio focus preview">
              <div className="web-preview-main">
                <p className="panel-label">{t.preview.panelLabel}</p>
                <h2>{t.preview.panelTitle}</h2>
                <div className="preview-card-grid">
                  {t.preview.cards.map((c) => (
                    <div className="preview-card" key={c.top}>
                      <span>{c.top}</span>
                      <strong>{c.strong}</strong>
                      <p>{c.bottom}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="web-preview-side">
                <span>{t.preview.targetLabel}</span>
                <p>{t.preview.targetValue}</p>
              </div>
            </div>
            <div className="visual-footer">
              {t.preview.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
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
          </div>
        </aside>
      </section>

      <section className="stats-band" aria-label="Profile statistics">
        {t.stats.map((stat) => (
          <div className="stat-item" key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </section>

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

      <section className="projects-section compact-projects" id="projects">
        <div className="section-heading project-heading">
          <p className="section-label">{t.projectsSection.label}</p>
          <h2>{t.projectsSection.heading}</h2>
          <p>{t.projectsSection.subtitle}</p>
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
                      <a
                        className="icon-link"
                        href={project.href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${project.name} GitHub`}
                      >
                        <ArrowUpRight size={20} aria-hidden="true" />
                      </a>
                    ) : null}
                  </div>

                  <div className="deck-card-details" aria-hidden={!isActive}>
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

      <section className="experience-section">
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

      <section className="contact-section" id="contact">
        <div>
          <p className="section-label">{t.contactSection.label}</p>
          <h2>{t.contactSection.heading}</h2>
          <p style={{ marginTop: "8px", color: "var(--muted)", fontSize: "14px" }}>
            {t.contactSection.subtitle}
          </p>
        </div>
        <div className="contact-links">
          <a href="tel:+84869500573">
            <Phone size={18} aria-hidden="true" />
            +84 869 500 573
          </a>
          <a href="mailto:tutaivovan@gmail.com">
            <Mail size={18} aria-hidden="true" />
            tutaivovan@gmail.com
          </a>
          <a href={t.contactSection.pdfGeneral.href} download>
            <Download size={18} aria-hidden="true" />
            {t.contactSection.pdfGeneral.label}
          </a>
          <a href={t.contactSection.pdfBa.href} download>
            <Download size={18} aria-hidden="true" />
            {t.contactSection.pdfBa.label}
          </a>
          <a href={t.contactSection.webGeneral.href} target="_blank" rel="noreferrer">
            <ArrowUpRight size={18} aria-hidden="true" />
            {t.contactSection.webGeneral.label}
          </a>
          <a href={t.contactSection.webBa.href} target="_blank" rel="noreferrer">
            <ArrowUpRight size={18} aria-hidden="true" />
            {t.contactSection.webBa.label}
          </a>
          <a href="https://github.com/VoVanTuTai" target="_blank" rel="noreferrer">
            <Github size={18} aria-hidden="true" />
            github.com/VoVanTuTai
          </a>
          <a href="https://linkedin.com/in/vovantutai" target="_blank" rel="noreferrer">
            <Linkedin size={18} aria-hidden="true" />
            linkedin.com/in/vovantutai
          </a>
          <span>
            <MapPin size={18} aria-hidden="true" />
            {t.contactSection.location}
          </span>
        </div>
      </section>

      <footer>
        <span>Vo Van Tu Tai</span>
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
          <img className="brand-avatar" src="/assets/avatar.png" alt="" aria-hidden="true" />
          <span>Vo Van Tu Tai</span>
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
  return (
    <main className="site-shell knowledge-shell language-lesson">
      <header className="topbar knowledge-topbar" aria-label="Programming languages lesson navigation">
        <a
          className="brand"
          href="/knowledge"
          onClick={(event) => navigate(event, "/knowledge")}
          aria-label="Learning hub"
        >
          <img className="brand-avatar" src="/assets/avatar.png" alt="" aria-hidden="true" />
          <span>Knowledge Hub</span>
        </a>
        <nav>
          <a href="#mental-model">Mental model</a>
          <a href="#execution-pipeline">Thực thi</a>
          <a href="#type-system">Hệ kiểu</a>
          <a href="#language-comparison">So sánh code</a>
          <a href="#practice-review">Thực hành</a>
        </nav>
      </header>
      <LearningPathNav currentPath="/knowledge/programming-languages" navigate={navigate} />

      <section className="knowledge-hero language-hero">
        <div>
          <a className="back-link" href="/knowledge" onClick={(event) => navigate(event, "/knowledge")}>
            <ArrowLeft size={17} aria-hidden="true" />
            Trở về Learning Hub
          </a>
          <p className="eyebrow">Programming Languages Fundamentals · Bài 01</p>
          <h1>Hiểu ngôn ngữ lập trình trước khi học thêm framework</h1>
          <p className="knowledge-lede">
            Đi từ source code đến chương trình đang chạy, phân biệt compiler, interpreter và runtime, hiểu hệ kiểu,
            scope, paradigm, rồi dùng cùng một bài toán để quan sát PHP, TypeScript và Java.
          </p>
          <div className="lesson-meta" aria-label="Lesson information">
            <span><BookOpen size={16} aria-hidden="true" /> Tự học có hướng dẫn</span>
            <span>40 phút học</span>
            <span>6 checkpoint thực hành</span>
          </div>
        </div>

        <aside className="learning-outcomes">
          <p className="panel-label">Sau bài này, bạn có thể</p>
          <ul>
            <li><CheckCircle2 size={18} aria-hidden="true" /> Mô tả hành trình từ source code đến lúc chương trình chạy.</li>
            <li><CheckCircle2 size={18} aria-hidden="true" /> Phân biệt hệ kiểu tĩnh, động và vai trò của runtime.</li>
            <li><CheckCircle2 size={18} aria-hidden="true" /> Nhận ra cùng một nghiệp vụ qua PHP, TypeScript và Java.</li>
            <li><CheckCircle2 size={18} aria-hidden="true" /> Chọn ngôn ngữ dựa trên bối cảnh thay vì bảng xếp hạng.</li>
          </ul>
        </aside>
      </section>

      <div className="lesson-layout">
        <aside className="lesson-toc" aria-label="Mục lục bài Programming Languages">
          <p>Chương trong bài</p>
          <a href="#mental-model">1. Ngôn ngữ là gì?</a>
          <a href="#execution-pipeline">2. Source code được chạy ra sao?</a>
          <a href="#type-system">3. Hệ kiểu</a>
          <a href="#program-building-blocks">4. Thành phần cốt lõi</a>
          <a href="#paradigms">5. Paradigm</a>
          <a href="#language-comparison">6. So sánh ba ngôn ngữ</a>
          <a href="#language-selection">7. Cách lựa chọn</a>
          <a href="#practice-review">8. Thực hành và ôn tập</a>
        </aside>

        <article className="lesson-content">
          <section className="lesson-section" id="mental-model">
            <p className="section-label">01 · Mental model</p>
            <h2>Ngôn ngữ lập trình là cách diễn đạt chỉ dẫn một cách có quy tắc</h2>
            <p>
              Con người viết source code theo cú pháp và ý nghĩa mà ngôn ngữ quy định. Một implementation như
              compiler, interpreter hoặc runtime tiếp nhận code đó và làm cho hành vi được thực hiện trên máy tính.
              Vì vậy, học ngôn ngữ không chỉ là nhớ từ khóa.
            </p>
            <div className="concept-grid">
              <div><Code2 size={20} aria-hidden="true" /><strong>Syntax</strong><span>Cách viết hợp lệ: từ khóa, dấu ngoặc và cấu trúc câu lệnh.</span></div>
              <div><Network size={20} aria-hidden="true" /><strong>Semantics</strong><span>Đoạn code có ý nghĩa và tạo ra hành vi gì.</span></div>
              <div><ServerCog size={20} aria-hidden="true" /><strong>Runtime</strong><span>Môi trường quản lý việc thực thi, bộ nhớ và lỗi khi chạy.</span></div>
              <div><BriefcaseBusiness size={20} aria-hidden="true" /><strong>Ecosystem</strong><span>Thư viện, framework, tooling và cộng đồng quanh ngôn ngữ.</span></div>
            </div>
            <div className="definition-card">
              <strong>Mental model cần giữ</strong>
              <p>
                Source code là mô tả. CPU không trực tiếp hiểu PHP, TypeScript hay Java source. Giữa source code và
                phần cứng luôn có một chuỗi công cụ chuyển đổi, kiểm tra và thực thi.
              </p>
            </div>
          </section>

          <section className="lesson-section" id="execution-pipeline">
            <p className="section-label">02 · Execution pipeline</p>
            <h2>Từ file code đến hành vi đang chạy</h2>
            <p>
              Chi tiết khác nhau giữa từng implementation, nhưng pipeline khái quát dưới đây giúp ta đọc lỗi đúng
              tầng và hiểu vì sao code hợp lệ về cú pháp vẫn có thể sai khi chạy.
            </p>
            <div className="language-pipeline" aria-label="Programming language execution pipeline">
              <div><span>01</span><strong>Source</strong><small>Code do developer viết</small></div>
              <b aria-hidden="true">→</b>
              <div><span>02</span><strong>Parse</strong><small>Token và cấu trúc cú pháp</small></div>
              <b aria-hidden="true">→</b>
              <div><span>03</span><strong>Transform</strong><small>AST, bytecode hoặc code đích</small></div>
              <b aria-hidden="true">→</b>
              <div><span>04</span><strong>Runtime</strong><small>Nạp code, quản lý và thực thi</small></div>
              <b aria-hidden="true">→</b>
              <div><span>05</span><strong>Effect</strong><small>Kết quả, I/O hoặc thay đổi trạng thái</small></div>
            </div>

            <div className="language-axis-grid">
              <article>
                <span>Compiler</span>
                <h3>Chuyển đổi trước hoặc trong lúc chạy</h3>
                <p>
                  Compiler phân tích source và tạo representation khác. Java thường được biên dịch thành bytecode;
                  JVM sau đó có thể diễn giải hoặc biên dịch tiếp thành mã máy.
                </p>
              </article>
              <article>
                <span>Interpreter</span>
                <h3>Thực thi thông qua một chương trình khác</h3>
                <p>
                  Interpreter đọc representation của chương trình và thực hiện hành vi. Một runtime hiện đại có thể
                  kết hợp interpreter với JIT compiler để tối ưu code chạy nhiều lần.
                </p>
              </article>
              <article>
                <span>Transpiler</span>
                <h3>Chuyển từ ngôn ngữ cấp cao này sang ngôn ngữ khác</h3>
                <p>
                  TypeScript được kiểm tra kiểu rồi phát sinh JavaScript. Browser hoặc Node.js chạy JavaScript đầu ra,
                  không chạy type annotation của TypeScript.
                </p>
              </article>
              <article>
                <span>Runtime</span>
                <h3>Cung cấp môi trường để chương trình sống</h3>
                <p>
                  Runtime xử lý call stack, cấp phát bộ nhớ, exception, garbage collection và giao tiếp với hệ điều
                  hành tùy theo implementation.
                </p>
              </article>
            </div>

            <div className="self-check">
              <span>Tự kiểm tra</span>
              <p>
                “Java là compiled còn JavaScript là interpreted” là cách nói quá đơn giản. Hãy giải thích lại dựa
                trên pipeline và implementation cụ thể thay vì gắn một nhãn cố định cho cả ngôn ngữ.
              </p>
            </div>
          </section>

          <section className="lesson-section" id="type-system">
            <p className="section-label">03 · Type system</p>
            <h2>Kiểu dữ liệu đặt ra những phép toán nào được xem là hợp lệ</h2>
            <p>
              Type system giúp mô tả và kiểm tra cách value được sử dụng. Hai trục thường bị trộn lẫn là thời điểm
              kiểm tra kiểu và mức độ chuyển đổi ngầm. “Static/dynamic” không đồng nghĩa với “strong/weak”.
            </p>
            <div className="comparison-grid">
              <div>
                <CheckCircle2 size={22} aria-hidden="true" />
                <h3>Static typing</h3>
                <p>Nhiều lỗi kiểu được phát hiện trước khi chương trình chạy.</p>
                <span>Ví dụ trong bài: Java, TypeScript ở bước type-check</span>
              </div>
              <div>
                <Sparkles size={22} aria-hidden="true" />
                <h3>Dynamic typing</h3>
                <p>Kiểu gắn với value và được kiểm tra chủ yếu trong quá trình chạy.</p>
                <span>Ví dụ trong bài: PHP, JavaScript</span>
              </div>
            </div>

            <div className="language-type-table">
              <div className="table-caption">
                <strong>Ba ngôn ngữ trong portfolio</strong>
                <span>Quan sát khác biệt, không xếp hạng hơn kém</span>
              </div>
              <div className="language-type-row language-type-heading">
                <strong>Ngôn ngữ</strong><strong>Kiểm tra kiểu</strong><strong>Khi chạy</strong>
              </div>
              <div className="language-type-row">
                <strong>PHP</strong><span>Dynamic, có thể thêm type declaration</span><span>PHP runtime thực thi và kiểm tra các ràng buộc liên quan</span>
              </div>
              <div className="language-type-row">
                <strong>TypeScript</strong><span>Static checker trên JavaScript</span><span>Type bị xóa; JavaScript đầu ra mới được thực thi</span>
              </div>
              <div className="language-type-row">
                <strong>Java</strong><span>Static typing khi compile</span><span>Bytecode chạy trên JVM với các kiểm tra runtime cần thiết</span>
              </div>
            </div>

            <div className="selection-rule">
              <span>Type safety không tự động tạo ra business correctness</span>
              <p>
                Compiler có thể xác nhận <code>weightGrams</code> là số, nhưng không biết cân nặng âm có hợp lệ hay
                chính sách giá có đúng không. Validation và test nghiệp vụ vẫn là trách nhiệm của ứng dụng.
              </p>
            </div>
          </section>

          <section className="lesson-section" id="program-building-blocks">
            <p className="section-label">04 · Building blocks</p>
            <h2>Mọi chương trình đều xoay quanh value, state và control flow</h2>
            <div className="principle-list">
              <li><span>01</span><div><strong>Value và variable</strong><p>Value là dữ liệu; variable là tên dùng để tham chiếu value. Cần phân biệt gán lại biến với thay đổi object.</p></div></li>
              <li><span>02</span><div><strong>Scope và lifetime</strong><p>Scope quyết định nơi một tên có thể được truy cập; lifetime mô tả dữ liệu tồn tại trong bao lâu.</p></div></li>
              <li><span>03</span><div><strong>Control flow</strong><p>Điều kiện, vòng lặp, function call, return và exception quyết định thứ tự hành vi.</p></div></li>
              <li><span>04</span><div><strong>Function và boundary</strong><p>Function nhận input, thực hiện logic và trả output; boundary rõ giúp code dễ test và tái sử dụng.</p></div></li>
              <li><span>05</span><div><strong>Error handling</strong><p>Lỗi dự kiến nên trở thành kết quả hoặc exception có chủ đích; lỗi không nên bị nuốt im lặng.</p></div></li>
            </div>
            <div className="definition-card">
              <strong>Stack và heap là mô hình hữu ích nhưng không phải luật cú pháp</strong>
              <p>
                Ta thường dùng call stack để hình dung function call và heap để hình dung object sống lâu hơn một
                frame. Tuy nhiên vị trí lưu thực tế là quyết định tối ưu của compiler/runtime, không nên suy ra chỉ từ
                việc value là primitive hay object.
              </p>
            </div>
          </section>

          <section className="lesson-section" id="paradigms">
            <p className="section-label">05 · Programming paradigms</p>
            <h2>Paradigm là cách tổ chức suy nghĩ, không phải chiếc hộp khóa ngôn ngữ</h2>
            <p>
              Phần lớn ngôn ngữ hiện đại là multi-paradigm. Ta chọn cách biểu diễn phù hợp với vấn đề và quy ước của
              codebase, thay vì cố ép toàn bộ chương trình vào một phong cách.
            </p>
            <div className="scenario-grid language-paradigm-grid">
              <article><span>Procedural</span><h3>Một chuỗi bước và function</h3><p>Phù hợp với flow rõ ràng, script và logic xử lý tuần tự.</p><strong>Hỏi: dữ liệu đi qua các bước nào?</strong></article>
              <article><span>Object-oriented</span><h3>Object giữ state và behavior</h3><p>Hữu ích khi mô hình có identity, lifecycle và invariants cần bảo vệ.</p><strong>Hỏi: trách nhiệm thuộc về object nào?</strong></article>
              <article><span>Functional</span><h3>Biến đổi dữ liệu bằng function</h3><p>Ưu tiên pure function và hạn chế mutation để logic dễ dự đoán.</p><strong>Hỏi: input được biến đổi thành output ra sao?</strong></article>
              <article><span>Event-driven</span><h3>Phản ứng với sự kiện</h3><p>Phù hợp UI, message broker và workflow bất đồng bộ giữa các thành phần.</p><strong>Hỏi: ai phát sự kiện và ai phản ứng?</strong></article>
            </div>
          </section>

          <section className="lesson-section" id="language-comparison">
            <p className="section-label">06 · One rule, three languages</p>
            <h2>Cùng một quy tắc tính phí qua PHP, TypeScript và Java</h2>
            <p>
              Quy tắc: 1 kg đầu giá 15.000 VND; mỗi 500 g vượt mức thêm 4.000 VND; giao nhanh thêm 10.000 VND.
              Tiền được giữ dưới dạng số nguyên VND để tránh sai số số thực trong ví dụ.
            </p>
            <div className="language-code-grid">
              <article>
                <span>PHP</span>
                <pre><code>{`function shippingFee(
  int $weightGrams,
  bool $express
): int {
  $extraUnits = max(
    0,
    (int) ceil(
      ($weightGrams - 1000) / 500
    )
  );

  return 15000
    + ($extraUnits * 4000)
    + ($express ? 10000 : 0);
}`}</code></pre>
                <p>Dynamic language với type declaration tại function boundary.</p>
              </article>
              <article>
                <span>TypeScript</span>
                <pre><code>{`function shippingFee(
  weightGrams: number,
  express: boolean
): number {
  const extraUnits = Math.max(
    0,
    Math.ceil(
      (weightGrams - 1000) / 500
    )
  );

  return 15000
    + extraUnits * 4000
    + (express ? 10000 : 0);
}`}</code></pre>
                <p>Type checker xác minh shape trước khi phát sinh JavaScript.</p>
              </article>
              <article>
                <span>Java</span>
                <pre><code>{`static int shippingFee(
  int weightGrams,
  boolean express
) {
  int extraUnits = Math.max(
    0,
    (int) Math.ceil(
      (weightGrams - 1000) / 500.0
    )
  );

  return 15000
    + extraUnits * 4000
    + (express ? 10000 : 0);
}`}</code></pre>
                <p>Static typing và method nằm trong một class khi triển khai đầy đủ.</p>
              </article>
            </div>
            <div className="self-check">
              <span>Điểm quan trọng</span>
              <p>
                Cú pháp khác nhau nhưng domain rule giống nhau. Trước khi tranh luận ngôn ngữ nào “tốt hơn”, hãy kiểm
                tra input âm, overflow, cách biểu diễn tiền, rounding rule và test tại các boundary 1000 g, 1001 g.
              </p>
            </div>
          </section>

          <section className="lesson-section" id="language-selection">
            <p className="section-label">07 · Language selection</p>
            <h2>Chọn ngôn ngữ từ constraint của hệ thống</h2>
            <p>
              Benchmark chỉ có ý nghĩa khi phản ánh workload thật. Trong đa số dự án business, tốc độ delivery, độ
              trưởng thành của thư viện, khả năng vận hành và năng lực đội ngũ ảnh hưởng nhiều hơn một con số đơn lẻ.
            </p>
            <div className="decision-checklist">
              <p className="panel-label">Checklist trước khi lựa chọn</p>
              <ol>
                <li><span>1</span><p><strong>Problem domain:</strong> web app, mobile, data processing, embedded hay hệ thống phân tán?</p></li>
                <li><span>2</span><p><strong>Ecosystem:</strong> framework, driver, security update và thư viện nghiệp vụ có trưởng thành không?</p></li>
                <li><span>3</span><p><strong>Team:</strong> đội ngũ có thể phát triển, review, debug và tuyển thêm người không?</p></li>
                <li><span>4</span><p><strong>Runtime:</strong> latency, throughput, memory, concurrency và startup time yêu cầu mức nào?</p></li>
                <li><span>5</span><p><strong>Operations:</strong> build, deploy, monitoring, dependency management và hosting có phù hợp không?</p></li>
                <li><span>6</span><p><strong>Lifecycle:</strong> hệ thống cần duy trì bao lâu và mức tương thích ngược cần thiết là gì?</p></li>
              </ol>
            </div>

            <h3 className="scenario-heading">Liên hệ với project của tôi</h3>
            <div className="project-connection-grid">
              <div><h3>PHP</h3><p>Song Tai Shop dùng PHP/MySQL để học request-response, session, form processing và cải thiện một codebase web truyền thống.</p><span>Ưu tiên: delivery trực tiếp và hosting đơn giản</span></div>
              <div><h3>TypeScript</h3><p>Nexus Express dùng TypeScript với NestJS/React để chia sẻ tooling, mô hình type và contract trong hệ thống nhiều service.</p><span>Ưu tiên: maintainability và ecosystem web</span></div>
              <div><h3>Java</h3><p>DevFlow dùng Java 21/Spring Boot để luyện static typing, layered backend, persistence và nền tảng ứng dụng doanh nghiệp.</p><span>Ưu tiên: explicit contract và ecosystem backend</span></div>
            </div>
          </section>

          <section className="lesson-section" id="practice-review">
            <p className="section-label">08 · Practice and review</p>
            <h2>Biến khái niệm thành khả năng giải thích và viết code</h2>
            <div className="practice-assignment language-practice">
              <div>
                <span>Bài tập 30 phút</span>
                <h3>Viết lại một business rule bằng hai ngôn ngữ</h3>
                <p>
                  Chọn rule giảm giá, tính phí hoặc chuyển trạng thái từ project của bạn. Mục tiêu là giữ nguyên
                  semantics trong khi quan sát khác biệt về type, function, error handling và test.
                </p>
              </div>
              <ol>
                <li>Viết input, output và các invariant trước khi code.</li>
                <li>Liệt kê ít nhất ba boundary case.</li>
                <li>Cài đặt bằng hai ngôn ngữ.</li>
                <li>Viết test cho cùng một bộ dữ liệu.</li>
                <li>Giải thích runtime nào thực thi mỗi phiên bản.</li>
                <li>Ghi lại khác biệt có ảnh hưởng đến maintainability.</li>
              </ol>
            </div>

            <div className="answer-framework">
              <span>Khung trả lời phỏng vấn</span>
              <ol>
                <li><strong>Định nghĩa:</strong> nói ngắn gọn khái niệm.</li>
                <li><strong>Cơ chế:</strong> mô tả nó hoạt động khi nào.</li>
                <li><strong>Trade-off:</strong> nêu lợi ích và giới hạn.</li>
                <li><strong>Ví dụ:</strong> liên hệ project đã làm.</li>
              </ol>
            </div>

            <div className="review-list">
              <details><summary>1. Compiler và interpreter khác nhau thế nào?</summary><p>Compiler chuyển chương trình sang representation khác; interpreter thực thi chương trình thông qua một implementation. Một runtime có thể kết hợp cả hai, nên không nên gắn nhãn cứng cho cả ngôn ngữ.</p></details>
              <details><summary>2. TypeScript có chạy trực tiếp trên browser không?</summary><p>Không theo workflow thông thường. TypeScript kiểm tra kiểu và phát sinh JavaScript; browser chạy JavaScript đầu ra. Type annotation không tồn tại trong runtime đó.</p></details>
              <details><summary>3. Static typing có thay thế validation không?</summary><p>Không. Type checker xác minh các ràng buộc biểu diễn được bằng type, nhưng input bên ngoài và business rule vẫn cần runtime validation cùng test.</p></details>
              <details><summary>4. Scope và lifetime khác nhau thế nào?</summary><p>Scope nói nơi một tên được nhìn thấy; lifetime nói value hoặc object tồn tại trong bao lâu. Hai khái niệm liên quan nhưng không đồng nhất.</p></details>
              <details><summary>5. OOP có nghĩa là mọi thứ phải là class không?</summary><p>Không. OOP là một cách tổ chức state và behavior quanh object. Ngôn ngữ multi-paradigm cho phép kết hợp class, function thuần và event tùy bài toán.</p></details>
              <details><summary>6. Bạn chọn Java, TypeScript hay PHP cho dự án mới bằng cách nào?</summary><p>Tôi bắt đầu từ domain, ecosystem, kinh nghiệm đội ngũ, runtime constraint, cách deploy và vòng đời hệ thống. Sau đó mới làm prototype hoặc benchmark phần có rủi ro thật.</p></details>
            </div>

            <h3 className="scenario-heading">Tài liệu chính thức để học sâu hơn</h3>
            <div className="resource-list">
              <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Execution_model" target="_blank" rel="noreferrer">
                <span>MDN Web Docs</span>
                <div><strong>JavaScript execution model</strong><p>Engine, execution context, agent, job queue và event loop.</p></div>
                <ArrowUpRight size={18} aria-hidden="true" />
              </a>
              <a href="https://www.typescriptlang.org/docs/handbook/typescript-from-scratch.html" target="_blank" rel="noreferrer">
                <span>TypeScript</span>
                <div><strong>TypeScript for the New Programmer</strong><p>Quan hệ giữa JavaScript, static type checking và TypeScript output.</p></div>
                <ArrowUpRight size={18} aria-hidden="true" />
              </a>
              <a href="https://docs.oracle.com/javase/specs/jvms/se21/html/jvms-1.html" target="_blank" rel="noreferrer">
                <span>Oracle · JVM SE 21</span>
                <div><strong>The Java Virtual Machine</strong><p>Kiến trúc JVM, class file format và cách Java source đi vào runtime.</p></div>
                <ArrowUpRight size={18} aria-hidden="true" />
              </a>
              <a href="https://www.php.net/manual/en/langref.php" target="_blank" rel="noreferrer">
                <span>PHP Manual</span>
                <div><strong>PHP Language Reference</strong><p>Types, variables, expressions, control structures, functions và classes.</p></div>
                <ArrowUpRight size={18} aria-hidden="true" />
              </a>
            </div>
          </section>

          <div className="next-lesson">
            <span>Bài tiếp theo</span>
            <strong>Database Fundamentals</strong>
            <p>Tiếp tục từ value trong chương trình đến cách hệ thống lưu trữ, liên kết và truy vấn dữ liệu lâu dài.</p>
            <a
              className="next-lesson-link"
              href="/knowledge/database"
              onClick={(event) => navigate(event, "/knowledge/database")}
            >
              Bắt đầu bài 02
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          </div>
        </article>
      </div>

      <footer>
        <span>Programming Languages Fundamentals · Bài 01</span>
        <span><Sparkles size={15} aria-hidden="true" /> Learn the model behind the syntax</span>
      </footer>
    </main>
  );
}

function DatabaseLessonPage({ navigate }: { navigate: NavigateHandler }) {
  return (
    <main className="site-shell knowledge-shell">
      <header className="topbar knowledge-topbar" aria-label="Knowledge navigation">
        <a className="brand" href="/knowledge" onClick={(event) => navigate(event, "/knowledge")} aria-label="Learning hub">
          <img className="brand-avatar" src="/assets/avatar.png" alt="" aria-hidden="true" />
          <span>Knowledge Hub</span>
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
          <img className="brand-avatar" src="/assets/avatar.png" alt="" aria-hidden="true" />
          <span>Knowledge Hub</span>
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
          <img className="brand-avatar" src="/assets/avatar.png" alt="" aria-hidden="true" />
          <span>Knowledge Hub</span>
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
  const coreConcepts = [
    {
      question: "1. Vai trò cốt lõi của Business Analyst là gì?",
      answer:
        "Business Analyst tạo sự hiểu chung giữa business stakeholders và delivery team. Phạm vi thường bao gồm làm rõ mục tiêu, stakeholder, quy trình hiện tại, business rule, dữ liệu, yêu cầu, acceptance criteria và duy trì tính nhất quán của yêu cầu trong suốt vòng đời giải pháp.",
    },
    {
      question: "2. Requirement elicitation và requirement analysis khác nhau thế nào?",
      answer:
        "Elicitation tập trung khám phá thông tin qua phỏng vấn, quan sát, workshop, khảo sát hoặc phân tích tài liệu. Analysis tổ chức và kiểm tra thông tin đó để xác định phạm vi, rule, dependency, dữ liệu, conflict, exception và mô hình yêu cầu phù hợp.",
    },
    {
      question: "3. Functional và non-functional requirement khác nhau thế nào?",
      answer:
        "Functional requirement mô tả hệ thống phải làm gì, ví dụ nhân viên được quét mã để cập nhật trạng thái kiện hàng. Non-functional requirement mô tả hệ thống phải vận hành tốt đến mức nào, ví dụ thời gian phản hồi, bảo mật, khả năng chịu tải, audit log và tính sẵn sàng.",
    },
    {
      question: "4. Một user story có chất lượng cần những thành phần nào?",
      answer:
        "User story cần thể hiện actor, nhu cầu và giá trị theo cấu trúc As a, I want, so that. Story cần được bổ sung context, business rule, dependency, mockup hoặc process flow và acceptance criteria có thể kiểm thử.",
    },
    {
      question: "5. Requirement conflict nên được xử lý theo nguyên tắc nào?",
      answer:
        "Mâu thuẫn cần được đặt trong cùng business goal, workflow, dữ liệu và constraint để so sánh. BA làm rõ tác động, trình bày phương án cùng trade-off, xác định decision owner và ghi nhận quyết định để duy trì traceability.",
    },
    {
      question: "6. Acceptance criteria và UAT có vai trò gì?",
      answer:
        "Acceptance criteria biến yêu cầu thành điều kiện pass/fail rõ cho từng story. UAT xác nhận giải pháp đáp ứng nhu cầu nghiệp vụ trong các scenario thực tế. BA hỗ trợ chuẩn bị scenario, dữ liệu test, expected result, theo dõi issue và xác nhận lại sau khi sửa.",
    },
    {
      question: "7. Technical literacy hỗ trợ Business Analysis như thế nào?",
      answer:
        "Technical literacy giúp BA đặt câu hỏi chính xác về dữ liệu, integration và edge case mà không thay thế vai trò developer. ERD hỗ trợ kiểm tra entity, relationship và source of truth; kiến thức API hỗ trợ phân tích request, response, validation, error và dependency giữa các hệ thống.",
    },
    {
      question: "8. Những bằng chứng nào phù hợp với năng lực BA ở cấp độ Intern?",
      answer:
        "Bằng chứng phù hợp gồm nền tảng Information Systems, khả năng mô hình hóa workflow và dữ liệu, project có role và business rule rõ, tài liệu có traceability, cùng trải nghiệm domain cho thấy khả năng quan sát quy trình, trạng thái và exception.",
    },
  ];

  return (
    <main className="site-shell knowledge-shell ba-lesson">
      <header className="topbar knowledge-topbar" aria-label="Business analysis lesson navigation">
        <a
          className="brand"
          href="/knowledge"
          onClick={(event) => navigate(event, "/knowledge")}
          aria-label="Learning hub"
        >
          <img className="brand-avatar" src="/assets/avatar.png" alt="" aria-hidden="true" />
          <span>Knowledge Hub</span>
        </a>
        <nav>
          <a href="#competency-map">Năng lực</a>
          <a href="#project-evidence">Dự án</a>
          <a href="#professional-communication">Ứng dụng</a>
          <a href="#mock-case">Case study</a>
        </nav>
      </header>
      <LearningPathNav currentPath="/knowledge/business-analysis" navigate={navigate} />

      <section className="knowledge-hero ba-hero">
        <div>
          <a
            className="back-link"
            href="/knowledge/backend-api"
            onClick={(event) => navigate(event, "/knowledge/backend-api")}
          >
            <ArrowLeft size={17} aria-hidden="true" />
            Trở về Backend &amp; REST API
          </a>
          <p className="eyebrow">Business Analysis · Chuyên đề 05</p>
          <h1>Business Analysis từ nền tảng học thuật đến bằng chứng dự án</h1>
          <p className="knowledge-lede">
            Chuyên đề hệ thống hóa vai trò, competency framework và analysis lifecycle của Business Analyst,
            đồng thời liên hệ các khái niệm với học phần Information Systems, project evidence và một tình huống
            logistics ứng dụng.
          </p>
          <div className="lesson-meta" aria-label="Lesson information">
            <span><BookOpen size={16} aria-hidden="true" /> Academic knowledge note</span>
            <span>5 competency areas</span>
            <span>1 applied logistics case</span>
          </div>
        </div>

        <aside className="learning-outcomes">
          <p className="panel-label">Phạm vi chuyên đề</p>
          <ul>
            <li><CheckCircle2 size={18} aria-hidden="true" /> Vai trò và ranh giới trách nhiệm của Business Analyst.</li>
            <li><CheckCircle2 size={18} aria-hidden="true" /> Liên hệ giữa học phần, competency và project evidence.</li>
            <li><CheckCircle2 size={18} aria-hidden="true" /> Requirement, process, data, acceptance và UAT.</li>
            <li><CheckCircle2 size={18} aria-hidden="true" /> Phân tích tình huống qua goal, actor, flow, rule và exception.</li>
          </ul>
        </aside>
      </section>

      <div className="lesson-layout">
        <aside className="lesson-toc" aria-label="Mục lục bài Business Analysis">
          <p>Nội dung chuyên đề</p>
          <a href="#positioning">1. Khung năng lực</a>
          <a href="#competency-map">2. Liên hệ học phần</a>
          <a href="#ba-workflow">3. Analysis lifecycle</a>
          <a href="#project-evidence">4. Project evidence</a>
          <a href="#professional-communication">5. Professional communication</a>
          <a href="#mock-case">6. Logistics case</a>
          <a href="#final-checklist">7. Tổng hợp</a>
        </aside>

        <article className="lesson-content">
          <section className="lesson-section" id="positioning">
            <p className="section-label">01 · Competency positioning</p>
            <h2>Năng lực BA được hình thành qua kiến thức, thực hành và bối cảnh chuyên môn</h2>
            <p>
              Ở cấp độ Intern, năng lực BA có thể được đánh giá qua ba lớp:
              <strong> nền tảng học thuật, khả năng áp dụng trong project và mức độ sẵn sàng phát triển trong môi
              trường chuyên nghiệp</strong>. Cách phân lớp này giúp phân biệt kiến thức khái niệm với bằng chứng
              thực hành và kinh nghiệm doanh nghiệp.
            </p>
            <div className="ba-position-grid">
              <article>
                <span>Academic foundation</span>
                <h3>Knowledge</h3>
                <p>System Analysis &amp; Design, DBMS, web application, service-oriented programming.</p>
              </article>
              <article>
                <span>Applied evidence</span>
                <h3>Practice</h3>
                <p>Actor, workflow, business rule, ERD, role, API contract, report và exception path.</p>
              </article>
              <article>
                <span>Professional development</span>
                <h3>Growth</h3>
                <p>Elicitation thực tế, stakeholder facilitation, formal BPMN, backlog và UAT ở môi trường doanh nghiệp.</p>
              </article>
            </div>
            <p className="lesson-note">
              <strong>Nguyên tắc mô tả năng lực:</strong> mức độ proficiency nên đi kèm phạm vi và bằng chứng cụ
              thể, chẳng hạn academic foundation, project-level application hoặc professional experience.
            </p>
          </section>

          <section className="lesson-section" id="competency-map">
            <p className="section-label">02 · Competency map</p>
            <h2>Các học phần Information Systems tạo nên những nhóm năng lực BA bổ trợ</h2>
            <div className="coursework-map">
              <article>
                <span>System Analysis &amp; Design</span>
                <h3>Requirement &amp; Process</h3>
                <p>Stakeholder, actor, use case, as-is/to-be, business rule, system boundary và UML/BPMN familiarity.</p>
                <strong>Bằng chứng: flow và state transition trong Nexus Express.</strong>
              </article>
              <article>
                <span>Database Management Systems</span>
                <h3>Data Analysis</h3>
                <p>Entity, attribute, relationship, cardinality, normalization, SQL và source-of-truth thinking.</p>
                <strong>Bằng chứng: booking, shipment, payment và role data models.</strong>
              </article>
              <article>
                <span>Service-Oriented Programming</span>
                <h3>Integration Analysis</h3>
                <p>Service responsibility, REST contract, request/response, event handoff, dependency và error scenario.</p>
                <strong>Bằng chứng: OpenAPI và event flows trong architecture projects.</strong>
              </article>
              <article>
                <span>Web Application Development</span>
                <h3>User Flow &amp; Feasibility</h3>
                <p>Screen flow, form validation, role-based action, session, report và cách requirement đi vào implementation.</p>
                <strong>Bằng chứng: ba web application có working screens.</strong>
              </article>
              <article>
                <span>Data Structures &amp; Algorithms</span>
                <h3>Structured Problem Solving</h3>
                <p>Chia nhỏ vấn đề, nhận diện state, condition, dependency và phân tích trade-off có thứ tự.</p>
                <strong>Bằng chứng: xử lý rule và edge case thay vì chỉ mô tả happy path.</strong>
              </article>
            </div>
            <div className="self-check">
              <span>Portfolio linkage</span>
              <p>Một competency statement có giá trị khi liên kết được khái niệm học thuật, bối cảnh áp dụng, artifact tạo ra và giới hạn của bằng chứng hiện có.</p>
            </div>
          </section>

          <section className="lesson-section" id="ba-workflow">
            <p className="section-label">03 · Mental model</p>
            <h2>Business Analysis chuyển thông tin phân tán thành sự hiểu chung có thể kiểm chứng</h2>
            <div className="ba-workflow" aria-label="Business analysis workflow">
              <div><span>1</span><strong>Goal</strong><small>Vấn đề và kết quả kinh doanh</small></div>
              <b>→</b>
              <div><span>2</span><strong>Stakeholder</strong><small>Ai dùng, ai quyết định, ai bị ảnh hưởng</small></div>
              <b>→</b>
              <div><span>3</span><strong>As-is</strong><small>Quy trình hiện tại và pain point</small></div>
              <b>→</b>
              <div><span>4</span><strong>To-be</strong><small>Luồng đề xuất và phạm vi</small></div>
              <b>→</b>
              <div><span>5</span><strong>Specification</strong><small>Rule, data, story, acceptance criteria</small></div>
              <b>→</b>
              <div><span>6</span><strong>Validation</strong><small>Review, prototype, test và UAT</small></div>
            </div>
            <div className="ba-question-grid">
              <article><strong>Goal</strong><p>Vì sao cần thay đổi? Chỉ số nào cho thấy thành công?</p></article>
              <article><strong>Actor</strong><p>Ai khởi tạo, ai phê duyệt, ai nhận kết quả?</p></article>
              <article><strong>Rule</strong><p>Điều kiện nào cho phép hoặc từ chối thao tác?</p></article>
              <article><strong>Data</strong><p>Dữ liệu đến từ đâu, ai sở hữu và cần lưu lịch sử gì?</p></article>
              <article><strong>Exception</strong><p>Nếu thiếu dữ liệu, trùng thao tác hoặc hệ thống khác lỗi thì sao?</p></article>
              <article><strong>Acceptance</strong><p>Làm sao chứng minh requirement đã được đáp ứng?</p></article>
            </div>
          </section>

          <section className="lesson-section" id="project-evidence">
            <p className="section-label">04 · Project evidence</p>
            <h2>Ba dự án minh họa ba dạng vấn đề phân tích nghiệp vụ</h2>
            <div className="ba-project-list">
              <article>
                <div>
                  <span>Operations-to-system</span>
                  <h3>Nexus Express</h3>
                </div>
                <p><strong>Problem:</strong> status, scan location, tracking, reporting và COD có thể bị hiểu khác nhau giữa các bên.</p>
                <p><strong>Analysis:</strong> dùng trải nghiệm J&amp;T để xác định actor, as-is flow, trạng thái, exception, source of truth và service handoff.</p>
                <p><strong>Evidence:</strong> workflow xuyên nhiều client/service, OpenAPI, data ownership, event và tài liệu hệ thống.</p>
              </article>
              <article>
                <div>
                  <span>Rule-conflict</span>
                  <h3>Tourist Accommodation Platform</h3>
                </div>
                <p><strong>Problem:</strong> customer, provider và admin cùng dùng booking data nhưng có quyền và mục tiêu khác nhau.</p>
                <p><strong>Analysis:</strong> tách use case theo role; làm rõ availability, booking, payment, cancellation, review, moderation và commission.</p>
                <p><strong>Evidence:</strong> working screens, dashboards, VNPay/QR flow và PDF/Excel reports.</p>
              </article>
              <article>
                <div>
                  <span>Control-gap</span>
                  <h3>Song Tai Shop</h3>
                </div>
                <p><strong>Problem:</strong> customer/admin flow cần authorization rõ hơn và thao tác xóa an toàn hơn.</p>
                <p><strong>Analysis:</strong> review actor, permission, checkout/order state và admin action; chuyển gap thành rule cụ thể.</p>
                <p><strong>Evidence:</strong> role checks, password hashing, POST-based deletion, seed data và reproducible setup.</p>
              </article>
            </div>
            <div className="self-check">
              <span>Evidence structure</span>
              <p>Project evidence có thể được trình bày theo chuỗi Problem → Analysis → Decision → Evidence → Lesson learned để duy trì tính traceable và tránh mô tả chung chung.</p>
            </div>
          </section>

          <section className="lesson-section" id="professional-communication">
            <p className="section-label">05 · Professional communication</p>
            <h2>Professional profile cần kết nối định hướng với bằng chứng có thể kiểm tra</h2>
            <div className="intro-script">
              <span>Portfolio positioning statement</span>
              <p>
                “Tôi là Võ Văn Tú Tài, đã hoàn thành 100% chương trình đào tạo Kỹ sư Hệ thống Thông tin tại IUH (sẵn sàng làm việc Full-time), định hướng Business Analysis
                với thế mạnh kết nối quy trình, business rule và dữ liệu với giải pháp kỹ thuật. Nền tảng System
                Analysis &amp; Design, Database và Web Application đã được áp dụng qua use case, ERD, workflow và
                các hệ thống đa vai trò. Trong Nexus Express, trải nghiệm vận hành tại J&amp;T được sử dụng để phân
                tích actor, trạng thái kiện hàng, exception và luồng bàn giao giữa các thành phần. Mục tiêu phát
                triển tiếp theo là mở rộng kinh nghiệm elicitation, documentation và UAT trong môi trường dự án
                chuyên nghiệp.”
              </p>
            </div>

            <h3 className="ba-subheading">STAR framework cho project evidence</h3>
            <div className="star-grid">
              <article>
                <span>Nexus Express</span>
                <p><strong>S:</strong> Nhiều khái niệm logistics dễ mơ hồ khi chuyển thành phần mềm.</p>
                <p><strong>T:</strong> Tạo mô hình nhất quán cho shipment workflow.</p>
                <p><strong>A:</strong> Dùng trải nghiệm vận hành để map actor, scan point, status, exception và ownership.</p>
                <p><strong>R:</strong> Tạo tài liệu và contract có thể trace xuyên client, service và dữ liệu.</p>
              </article>
              <article>
                <span>Tourist Platform</span>
                <p><strong>S:</strong> Ba role dùng chung booking nhưng cần hành động khác nhau.</p>
                <p><strong>T:</strong> Tránh rule chồng chéo và sai quyền.</p>
                <p><strong>A:</strong> Tách journey/use case, xác định rule availability, cancellation, payment và moderation.</p>
                <p><strong>R:</strong> Chuyển thành working flow, dashboard và report cho từng role.</p>
              </article>
            </div>

            <h3 className="ba-subheading">Các khái niệm BA cốt lõi</h3>
            <div className="review-list ba-review-list">
              {coreConcepts.map((item) => (
                <details key={item.question}>
                  <summary>{item.question}</summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </section>

          <section className="lesson-section" id="mock-case">
            <p className="section-label">06 · Applied logistics case</p>
            <h2>Phân tích tình huống tỷ lệ giao thất bại gia tăng</h2>
            <div className="case-brief">
              <strong>Tình huống</strong>
              <p>
                Một bưu cục phản ánh tỷ lệ giao thất bại tăng nhưng dashboard chỉ hiển thị trạng thái
                “Delivery Failed”, chưa cho biết nguyên nhân đủ rõ để quản lý hành động.
              </p>
            </div>
            <ol className="case-analysis-list">
              <li><span>01</span><div><strong>Làm rõ mục tiêu</strong><p>Giảm failed-delivery rate, rút ngắn thời gian xử lý lại hay cải thiện độ chính xác báo cáo?</p></div></li>
              <li><span>02</span><div><strong>Xác định stakeholder</strong><p>Courier, branch operator, hub manager, customer service, reporting và người nhận hàng.</p></div></li>
              <li><span>03</span><div><strong>Khảo sát as-is</strong><p>Courier chọn reason lúc nào? Có bắt buộc bằng chứng? Có thể sửa reason? Dữ liệu đi qua app/service nào?</p></div></li>
              <li><span>04</span><div><strong>Phân loại dữ liệu</strong><p>Reason code, note, timestamp, location, attempt number, evidence, next action và người cập nhật.</p></div></li>
              <li><span>05</span><div><strong>Đề xuất to-be</strong><p>Reason chuẩn hóa, rule bắt buộc theo loại lỗi, luồng reattempt/return và dashboard drill-down.</p></div></li>
              <li><span>06</span><div><strong>Đặt acceptance criteria</strong><p>Không hoàn tất failed scan nếu thiếu reason; report lọc theo hub/courier/reason/date; mọi thay đổi có audit trail.</p></div></li>
              <li><span>07</span><div><strong>Đo kết quả</strong><p>Độ đầy đủ reason, tỷ lệ reattempt thành công, thời gian xử lý exception và failed rate theo nguyên nhân.</p></div></li>
            </ol>
            <div className="case-deliverables">
              <article><Table2 size={21} aria-hidden="true" /><strong>Artifacts</strong><p>As-is/to-be flow, data dictionary, user stories, acceptance criteria và report mockup.</p></article>
              <article><Network size={21} aria-hidden="true" /><strong>Questions</strong><p>Source of truth ở đâu? Offline scan xử lý sao? Ai được sửa reason? Có integration dependency nào?</p></article>
            </div>
            <div className="self-check">
              <span>Analysis sequence</span>
              <p>Trình tự phân tích ưu tiên problem framing và clarifying questions trước solution design, qua đó hạn chế việc chọn màn hình hoặc công nghệ khi business need chưa rõ.</p>
            </div>
          </section>

          <section className="lesson-section" id="final-checklist">
            <p className="section-label">07 · Competency synthesis</p>
            <h2>Năng lực BA được củng cố bằng sự rõ ràng, traceability và bằng chứng</h2>
            <div className="prep-timeline">
              <article><span>Role clarity</span><strong>Business objective</strong><p>Phân biệt business problem, stakeholder need và feature request.</p></article>
              <article><span>Requirement discipline</span><strong>Structured analysis</strong><p>Goal, actor, process, rule, data, exception và acceptance được mô tả nhất quán.</p></article>
              <article><span>Traceability</span><strong>Project evidence</strong><p>Requirement được liên kết với decision, artifact, implementation hoặc validation result.</p></article>
              <article><span>Collaboration</span><strong>Shared understanding</strong><p>Ngôn ngữ và mô hình đủ rõ để business, design, development và QA cùng review.</p></article>
            </div>
            <div className="interview-checklist">
              <p className="panel-label">Competency evidence checklist</p>
              <label><input type="checkbox" /> Vai trò BA được mô tả qua business outcome và shared understanding.</label>
              <label><input type="checkbox" /> Project evidence thể hiện problem, analysis, decision và result.</label>
              <label><input type="checkbox" /> User story, use case và acceptance criteria được phân biệt rõ.</label>
              <label><input type="checkbox" /> As-is/to-be, functional/non-functional requirement và UAT có ví dụ cụ thể.</label>
              <label><input type="checkbox" /> Process, business rule, ERD, API và exception được liên kết trong cùng context.</label>
              <label><input type="checkbox" /> Giới hạn giữa academic foundation, project practice và professional experience được thể hiện minh bạch.</label>
            </div>
            <div className="questions-for-interviewer">
              <strong>Professional discussion prompts</strong>
              <p>“BA Intern sẽ tham gia những giai đoạn nào của dự án?”</p>
              <p>“Team đang quản lý requirement, change và UAT bằng quy trình hoặc công cụ nào?”</p>
              <p>“Trong ba tháng đầu, kết quả nào cho thấy một BA Intern đang tiến bộ tốt?”</p>
            </div>
          </section>

          <div className="next-lesson ba-next-step">
            <span>Key takeaway</span>
            <strong>Business Analysis biến sự mơ hồ thành quyết định có thể truy vết</strong>
            <p>Giá trị của artifact không nằm ở số lượng tài liệu, mà ở khả năng làm rõ business need, giảm ambiguity và tạo cơ sở chung cho thiết kế, phát triển, kiểm thử và nghiệm thu.</p>
          </div>
        </article>
      </div>

      <footer>
        <span>Business Analysis · Knowledge Note 05</span>
        <span><Sparkles size={15} aria-hidden="true" /> Coursework to project evidence</span>
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
      "/knowledge/programming-languages": "Programming Languages Fundamentals - Vo Van Tu Tai",
      "/knowledge/database": "Database Fundamentals - Vo Van Tu Tai",
      "/knowledge/database/data-modeling": "Data Modeling & ERD - Vo Van Tu Tai",
      "/knowledge/backend-api": "Backend & Authentication Fundamentals - Vo Van Tu Tai",
      "/knowledge/business-analysis": "Business Analysis Knowledge - Vo Van Tu Tai",
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
