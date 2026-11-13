import { BriefcaseBusiness, Code2, Database, Network, ServerCog } from "lucide-react";
import type { PortfolioLocaleData } from "@/types";

export const portfolioDataVi: PortfolioLocaleData = {
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
