import { useEffect, useState } from "react";
import {
  AlertTriangle,
  ArrowLeft,
  BookOpen,
  BriefcaseBusiness,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Clock,
  Code2,
  Database,
  Download,
  ExternalLink,
  GitBranch,
  Github,
  Layers,
  MapPin,
  Network,
  ShieldCheck,
  Sparkles,
  Table2,
  Target,
  UserCheck,
} from "lucide-react";
import type { NavigateHandler } from "@/types";
import { baCoreConcepts, baReadinessChecklist } from "@/data/lessons/business-analysis.data";
import { BrandAvatar } from "@/components/BrandAvatar";
import { LearningPathNav } from "./components/LearningPathNav";

export function BusinessAnalysisPage({ navigate }: { navigate: NavigateHandler }) {
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
            <BrandAvatar alt="Võ Văn Tú Tài" />
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
            href="/VoVanTuTai_Business_Analyst_CV_Tieng_Viet.pdf"
            download="VoVanTuTai_Business_Analyst_CV_Tieng_Viet.pdf"
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
                href="/VoVanTuTai_Business_Analyst_CV_Tieng_Viet.pdf"
                download="VoVanTuTai_Business_Analyst_CV_Tieng_Viet.pdf"
                className="ba-toc-btn-primary"
              >
                <Download size={13} aria-hidden="true" />
                Tải CV Tiếng Việt
              </a>
              <a
                href="/VoVanTuTai_Business_Analyst_CV.pdf"
                download="VoVanTuTai_Business_Analyst_CV.pdf"
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
              {baCoreConcepts.map((item, idx) => (
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
                {baReadinessChecklist.map((item, idx) => (
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
                href="/VoVanTuTai_Business_Analyst_CV_Tieng_Viet.pdf"
                download="VoVanTuTai_Business_Analyst_CV_Tieng_Viet.pdf"
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

export default BusinessAnalysisPage;
