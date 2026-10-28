import React, { useState } from "react";
import {
  Activity,
  AlertTriangle,
  ArrowRight,
  BriefcaseBusiness,
  Calendar,
  Check,
  CheckCircle2,
  ChevronRight,
  Clock,
  Cpu,
  Download,
  ExternalLink,
  FileCheck2,
  FileText,
  Filter,
  Flame,
  GitBranch,
  Layers,
  Milestone,
  RefreshCw,
  ShieldAlert,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  Target,
  TrendingUp,
  Users2,
  Workflow,
  Zap,
} from "lucide-react";

interface ProjectManagementSectionProps {
  lang: "vi" | "en";
}

interface GanttTask {
  id: string;
  wbs: string;
  stream: string;
  streamEn: string;
  streamColor: string;
  title: string;
  titleEn: string;
  startWeek: number; // 1 to 12
  durationWeeks: number;
  progress: number;
  isCritical: boolean;
  isMilestone: boolean;
  isSprint: boolean;
  sprintLabel?: string;
  storyPoints?: number;
  owner: string;
  raci: {
    r: string;
    a: string;
    c: string;
    i: string;
  };
  predecessor?: string;
  deliverable: string;
  deliverableEn: string;
  dod: string;
  dodEn: string;
  pmNote: string;
  pmNoteEn: string;
}

const ganttTasks: GanttTask[] = [
  {
    id: "wbs-1.1",
    wbs: "1.1",
    stream: "Khởi động & Khảo sát",
    streamEn: "Inception & Discovery",
    streamColor: "#2563eb",
    title: "Kick-off Stakeholders & Phê duyệt Project Charter",
    titleEn: "Stakeholder Kick-off & Project Charter Approval",
    startWeek: 1,
    durationWeeks: 1,
    progress: 100,
    isCritical: true,
    isMilestone: false,
    isSprint: false,
    owner: "Senior PM",
    raci: { r: "Senior PM", a: "Sponsor / Ban Giám Đốc", c: "Tech Lead", i: "Client Core Team" },
    deliverable: "Project Charter, Ma trận RACI, Bảng kỳ vọng Stakeholders",
    deliverableEn: "Project Charter, RACI Matrix, Stakeholder Expectations Register",
    dod: "Project Charter được ký duyệt, thống nhất ràng buộc ngân sách - thời gian - mục tiêu.",
    dodEn: "Charter approved, triple constraints (budget/timeline/goals) formally locked.",
    pmNote: "Thiết lập kỳ vọng ranh giới dự án ngay ngày đầu để loại bỏ 80% xung đột phát sinh.",
    pmNoteEn: "Lock project boundaries on day 1 to preempt 80% of downstream scope disputes.",
  },
  {
    id: "wbs-1.2",
    wbs: "1.2",
    stream: "Khởi động & Khảo sát",
    streamEn: "Inception & Discovery",
    streamColor: "#2563eb",
    title: "Đặc tả PRD / SRS & Chuẩn hóa Quy trình BPMN 2.0",
    titleEn: "PRD / SRS Specification & BPMN 2.0 Process Modeling",
    startWeek: 1.5,
    durationWeeks: 1.5,
    progress: 100,
    isCritical: true,
    isMilestone: false,
    isSprint: false,
    predecessor: "WBS 1.1",
    owner: "Lead BA / PM",
    raci: { r: "Lead BA", a: "Senior PM", c: "UI/UX, Tech Lead", i: "Client Product Team" },
    deliverable: "PRD/SRS v1.0, 12 Sơ đồ BPMN 2.0 (Camunda), Given-When-Then Stories",
    deliverableEn: "PRD/SRS v1.0, 12 BPMN 2.0 Workflows, Given-When-Then Stories",
    dod: "100% User Stories có tiêu chí nghiệm thu rõ ràng và liên kết với Wireframe Figma.",
    dodEn: "100% User Stories mapped with acceptance criteria and Figma wireframes.",
    pmNote: "Mô hình hóa chi tiết các ca ngoại lệ (hủy đơn, rớt mạng, hoàn tiền) ngay trong luồng BPMN.",
    pmNoteEn: "Model all edge exceptions (cancellations, network dropouts) directly in BPMN.",
  },
  {
    id: "wbs-1.3",
    wbs: "1.3",
    stream: "Kiến trúc Kỹ thuật",
    streamEn: "Architecture & Data",
    streamColor: "#0284c7",
    title: "Thiết kế CSDL Chuẩn 3NF & Hợp đồng OpenAPI 3.0",
    titleEn: "Normalized ERD 3NF Schema & OpenAPI 3.0 Contracts",
    startWeek: 2.5,
    durationWeeks: 1.5,
    progress: 100,
    isCritical: true,
    isMilestone: false,
    isSprint: false,
    predecessor: "WBS 1.2",
    owner: "Tech Lead",
    raci: { r: "Tech Lead", a: "Senior PM", c: "Senior Dev", i: "BA Team, QA" },
    deliverable: "ERD 3NF Data Dictionary, Swagger OpenAPI 3.0 Spec, Mock Server Postman",
    deliverableEn: "ERD 3NF Data Dictionary, Swagger OpenAPI 3.0 Spec, Postman Mock Server",
    dod: "Swagger Spec được thông qua; Mock Server dựng sẵn để Frontend & QA code song song.",
    dodEn: "Swagger approved; Postman mock server up for decoupled frontend/QA dev.",
    pmNote: "Quy định nguyên tắc Idempotency Key cho API thanh toán để phòng tránh duplicate charge.",
    pmNoteEn: "Enforce Idempotency Key standard on payment endpoints to prevent duplicate charges.",
  },
  {
    id: "wbs-m1",
    wbs: "M1",
    stream: "Cột mốc Quản trị",
    streamEn: "Milestone Gates",
    streamColor: "#eab308",
    title: "💎 MILESTONE 1: Ký Biên bản Scope Freeze & Khóa Baseline",
    titleEn: "💎 MILESTONE 1: Formal Scope Freeze & Baseline Sign-off",
    startWeek: 3.5,
    durationWeeks: 0.5,
    progress: 100,
    isCritical: true,
    isMilestone: true,
    isSprint: false,
    predecessor: "WBS 1.2, WBS 1.3",
    owner: "Client & PM",
    raci: { r: "Senior PM", a: "Steering Committee", c: "Tech Lead", i: "Toàn bộ Project Team" },
    deliverable: "Biên bản Ký kết Scope Freeze, WBS Baseline v1.0, Sprint Backlog Ready",
    deliverableEn: "Signed Scope Freeze Protocol, WBS Baseline v1.0, Sprint Backlog Ready",
    dod: "Chữ ký xác nhận từ hai bên; mọi yêu cầu phát sinh sau mốc này bắt buộc qua Change Request (CR).",
    dodEn: "Formal dual sign-off; any future requirement additions mandate formal CR submission.",
    pmNote: "Chốt chặn sống còn của Senior PM: Ngăn chặn 80% rủi ro Scope Creep và vượt ngân sách.",
    pmNoteEn: "Senior PM's core defense: Preempts 80% of scope creep and budget blowouts.",
  },
  {
    id: "wbs-2.1",
    wbs: "2.1",
    stream: "Vận hành Sprint Kỹ thuật",
    streamEn: "Sprint Execution",
    streamColor: "#6366f1",
    title: "[Sprint 1] Module Xác thực (Auth), Ma trận RBAC & Quản trị Hệ thống",
    titleEn: "[Sprint 1] Authentication, RBAC Multi-role Matrix & Core Setup",
    startWeek: 4,
    durationWeeks: 2,
    progress: 100,
    isCritical: false,
    isMilestone: false,
    isSprint: true,
    sprintLabel: "Sprint 1",
    storyPoints: 46,
    owner: "Backend Lead",
    raci: { r: "Backend Dev", a: "Tech Lead", c: "Lead BA", i: "Senior PM" },
    predecessor: "WBS M1",
    deliverable: "JWT/Refresh Token Service, RBAC Middleware, User Admin Portal",
    deliverableEn: "JWT/Refresh Token Service, RBAC Middleware, User Admin Portal",
    dod: "Unit Test coverage > 85%, tích hợp CI/CD tự động, Sprint Demo đạt 100% DoR/DoD.",
    dodEn: "Unit test coverage > 85%, CI/CD deployed, Sprint Demo passes 100% DoR/DoD.",
    pmNote: "Theo dõi Burndown Chart hàng ngày trong Daily Standup; giải tỏa block ngay trong 24h.",
    pmNoteEn: "Daily Burndown tracking; convene instant pairing sessions if blockers exceed 24h.",
  },
  {
    id: "wbs-2.2",
    wbs: "2.2",
    stream: "Vận hành Sprint Kỹ thuật",
    streamEn: "Sprint Execution",
    streamColor: "#6366f1",
    title: "[Sprint 2] Động cơ Vận đơn (OMS), Máy Trạng thái BPMN & Quét mã Trạm",
    titleEn: "[Sprint 2] Order Management Engine, State Machine & Checkpoint Scans",
    startWeek: 5.5,
    durationWeeks: 2,
    progress: 100,
    isCritical: false,
    isMilestone: false,
    isSprint: true,
    sprintLabel: "Sprint 2",
    storyPoints: 52,
    owner: "Fullstack Team",
    raci: { r: "Fullstack Dev", a: "Tech Lead", c: "Senior PM", i: "QA Lead" },
    predecessor: "WBS 2.1",
    deliverable: "State Machine Engine, Barcode/QR Scanner API, Event Logger",
    deliverableEn: "State Machine Engine, Barcode/QR Scanner API, Event Logger",
    dod: "Xử lý chuẩn 7 trạng thái vận đơn, kiểm soát chặt chẽ race condition khi quét đồng thời.",
    dodEn: "7 state transitions verified, concurrency lock tested under load.",
    pmNote: "Áp dụng kinh nghiệm bưu cục thực tế từ J&T Express: Quy định luồng quét mã 1 chiều.",
    pmNoteEn: "Grounded in J&T Express operational logic: Strict one-way scan verification.",
  },
  {
    id: "wbs-2.3",
    wbs: "2.3",
    stream: "Tích hợp Hệ thống",
    streamEn: "Integrations & APIs",
    streamColor: "#ec4899",
    title: "[Sprint 3] Cổng Thanh toán VNPay IPN, Webhook & Đối soát COD Tự động",
    titleEn: "[Sprint 3] VNPay Payment Gateway, IPN Webhook & Automated COD Reconciliation",
    startWeek: 7,
    durationWeeks: 2,
    progress: 100,
    isCritical: true,
    isMilestone: false,
    isSprint: true,
    sprintLabel: "Sprint 3",
    storyPoints: 48,
    owner: "Backend Lead",
    raci: { r: "Backend Lead", a: "Senior PM", c: "Payment Provider", i: "Finance Team" },
    predecessor: "WBS 2.2",
    deliverable: "VNPay IPN Webhook, Checksum Validation, Auto COD Balance Engine",
    deliverableEn: "VNPay IPN Webhook, Checksum Validation, Auto COD Balance Engine",
    dod: "Xử lý thành công retry webhook IPN, mã hóa SHA-256 bảo mật, đối soát khớp 100% doanh thu.",
    dodEn: "Webhook retries handled, SHA-256 validated, 100% ledger balance reconciliation.",
    pmNote: "🔴 ĐƯỜNG GĂNG (CRITICAL PATH): Sự cố chậm sandbox VNPay được giải tỏa bằng Mock Server Postman.",
    pmNoteEn: "🔴 CRITICAL PATH: Mitigated 3rd-party sandbox delay using Postman Mock Server contracts.",
  },
  {
    id: "wbs-3.1",
    wbs: "3.1",
    stream: "Quản trị Thay đổi (CR)",
    streamEn: "Change Request Control",
    streamColor: "#f97316",
    title: "[CR Control] Xử lý Change Request CR-01 (Mở rộng báo cáo đối soát đa bưu cục)",
    titleEn: "[CR Control] Change Request CR-01 Evaluation & Scope Trade-off",
    startWeek: 7.5,
    durationWeeks: 1.5,
    progress: 100,
    isCritical: false,
    isMilestone: false,
    isSprint: false,
    predecessor: "WBS M1",
    owner: "Senior PM",
    raci: { r: "Senior PM", a: "Steering Committee", c: "Tech Lead", i: "Client Lead" },
    deliverable: "Phiếu Đánh giá Tác động CR-01 (Impact Assessment Form), Phụ lục Hợp đồng",
    deliverableEn: "CR-01 Impact Assessment Form, Signed Scope Trade-off Addendum",
    dod: "Khách hàng đồng thuận trade-off: Giữ nguyên Deadline, đẩy tính năng xuất PDF thứ yếu sang Phase 2.",
    dodEn: "Client agreed trade-off: Kept hard deadline by deferring minor PDF export to Phase 2.",
    pmNote: "Kỹ năng đàm phán của Senior PM: Không nói 'Không', mà nói 'Có kèm theo chi phí hoặc dời task'.",
    pmNoteEn: "Senior PM diplomacy: Never flatly reject; offer impact analysis with clear trade-offs.",
  },
  {
    id: "wbs-2.4",
    wbs: "2.4",
    stream: "Vận hành Sprint Kỹ thuật",
    streamEn: "Sprint Execution",
    streamColor: "#6366f1",
    title: "[Sprint 4] Cổng Tra cứu Khách hàng Live Tracking & Bảng Điều khiển Quản trị",
    titleEn: "[Sprint 4] Public Live Tracking Portal & Executive Operations Dashboard",
    startWeek: 8,
    durationWeeks: 2,
    progress: 100,
    isCritical: false,
    isMilestone: false,
    isSprint: true,
    sprintLabel: "Sprint 4",
    storyPoints: 44,
    owner: "Frontend Team",
    raci: { r: "Frontend Dev", a: "Lead BA", c: "UI/UX", i: "Senior PM" },
    predecessor: "WBS 2.2",
    deliverable: "tracking.nexus-ex.site Live Portal, Admin Operations Hub",
    deliverableEn: "tracking.nexus-ex.site Live Portal, Admin Operations Hub",
    dod: "Đáp ứng 100% Responsive trên Mobile/Desktop, tốc độ load < 1.2s, tích hợp live tracking.",
    dodEn: "100% Mobile/Desktop responsive, load time < 1.2s, real-time tracking integrated.",
    pmNote: "Sản phẩm live thực tế chứng minh năng lực điều phối giao diện thân thiện cho end-user.",
    pmNoteEn: "Live production asset serving as tangible proof of delivery execution.",
  },
  {
    id: "wbs-4.1",
    wbs: "4.1",
    stream: "Kiểm định & Chất lượng",
    streamEn: "QA & Testing",
    streamColor: "#10b981",
    title: "Kiểm thử Hợp đồng API Postman, E2E Regression & Kiểm toán An ninh",
    titleEn: "API Contract Verification, E2E Regression & Security Audit",
    startWeek: 8.5,
    durationWeeks: 1.5,
    progress: 100,
    isCritical: false,
    isMilestone: false,
    isSprint: false,
    predecessor: "WBS 2.3, WBS 2.4",
    owner: "QA Lead",
    raci: { r: "QA Lead", a: "Tech Lead", c: "Senior Dev", i: "Senior PM" },
    deliverable: "Bộ Test Script Postman tự động, Báo cáo kiểm thử bảo mật OWASP",
    deliverableEn: "Automated Postman Test Suites, OWASP Security Audit Report",
    dod: "0 lỗi P0/P1 (Critical/Blocker), tỷ lệ pass test case đạt 99.4%, kiểm thử tải 500 CCU ổn định.",
    dodEn: "Zero P0/P1 critical bugs, 99.4% test case pass rate, 500 CCU stress load verified.",
    pmNote: "Nguyên tắc Zero Tolerance với bug dữ liệu tiền tệ và bảo mật thông tin khách hàng.",
    pmNoteEn: "Zero tolerance for financial calculation bugs and customer data leakage.",
  },
  {
    id: "wbs-m2",
    wbs: "M2",
    stream: "Cột mốc Quản trị",
    streamEn: "Milestone Gates",
    streamColor: "#eab308",
    title: "💎 MILESTONE 2: Khách Hàng Ký Biên Bản Nghiệm Thu UAT (UAT Gate)",
    titleEn: "💎 MILESTONE 2: Client UAT Sign-off Gate & Production Acceptance",
    startWeek: 10,
    durationWeeks: 0.5,
    progress: 100,
    isCritical: true,
    isMilestone: true,
    isSprint: false,
    predecessor: "WBS 4.1",
    owner: "Client & PM",
    raci: { r: "Senior PM", a: "Client Sponsor", c: "Lead BA, QA", i: "Steering Committee" },
    deliverable: "Biên bản Nghiệm thu UAT Sign-off, Danh mục 45 Kịch bản Test đã nghiệm thu",
    deliverableEn: "Signed UAT Sign-off Protocol, Verified 45 Test Scenarios Log",
    dod: "Khách hàng thực hiện nghiệm thu theo bộ UAT Script soạn trước; 100% acceptance criteria đạt.",
    dodEn: "Client executed pre-built scripts; 100% acceptance criteria verified without blockers.",
    pmNote: "🔴 ĐƯỜNG GĂNG (CRITICAL PATH): Tổ chức phiên test 45 phút hướng dẫn trực tiếp giúp chốt ký đúng ngày.",
    pmNoteEn: "🔴 CRITICAL PATH: Hosted a 45-min guided review session to secure on-time sign-off.",
  },
  {
    id: "wbs-5.1",
    wbs: "5.1",
    stream: "Triển khai & Chuyển giao",
    streamEn: "Cut-over & Go-Live",
    streamColor: "#059669",
    title: "Thực thi Production Cut-over, Di chuyển Dữ liệu & Dry-run Kỹ thuật",
    titleEn: "Production Cut-over Runbook, Data Migration & Final Dry-run",
    startWeek: 10.5,
    durationWeeks: 1,
    progress: 100,
    isCritical: true,
    isMilestone: false,
    isSprint: false,
    predecessor: "WBS M2",
    owner: "DevOps & PM",
    raci: { r: "DevOps Lead", a: "Senior PM", c: "Tech Lead", i: "Stakeholders" },
    deliverable: "Production Runbook (Minute-by-minute), Backup Rollback Plan",
    deliverableEn: "Minute-by-minute Cut-over Runbook, Verified Rollback Plan",
    dod: "Di chuyển dữ liệu không mất mát (Zero data loss), thời gian dừng hệ thống (downtime) < 15 phút.",
    dodEn: "Zero data loss migration verified, cut-over maintenance downtime < 15 minutes.",
    pmNote: "Xây dựng kịch bản Rollback chi tiết từng phút phòng ngừa sự cố mạng viễn thông.",
    pmNoteEn: "Minute-by-minute rollback protocol designed in case of cloud DNS/network failure.",
  },
  {
    id: "wbs-m3",
    wbs: "M3",
    stream: "Cột mốc Quản trị",
    streamEn: "Milestone Gates",
    streamColor: "#eab308",
    title: "💎 MILESTONE 3: Official Go-Live Production (Bàn giao Vận hành Toàn diện)",
    titleEn: "💎 MILESTONE 3: Official Production Go-Live & Operational Handover",
    startWeek: 11.5,
    durationWeeks: 0.5,
    progress: 100,
    isCritical: true,
    isMilestone: true,
    isSprint: false,
    predecessor: "WBS 5.1",
    owner: "Steering Committee",
    raci: { r: "Senior PM", a: "Steering Committee", c: "Tech Lead", i: "All Users" },
    deliverable: "Biên bản Bàn giao Vận hành, Tài liệu Hướng dẫn Vận hành SOP",
    deliverableEn: "Official Handover Protocol, System Operating SOP Documentation",
    dod: "Hệ thống vận hành chính thức trên production, traffic người dùng thực hoạt động thông suốt.",
    dodEn: "System live on production, real end-user transactions executing seamlessly.",
    pmNote: "🔴 ĐƯỜNG GĂNG (CRITICAL PATH): Cột mốc hoàn tất cam kết hợp đồng bàn giao đúng hạn (On-time Delivery).",
    pmNoteEn: "🔴 CRITICAL PATH: Final contractual milestone achieved with zero schedule slippage.",
  },
  {
    id: "wbs-5.2",
    wbs: "5.2",
    stream: "Triển khai & Chuyển giao",
    streamEn: "Cut-over & Go-Live",
    streamColor: "#059669",
    title: "Hỗ trợ Hypercare 14 Ngày, Họp Tổng kết Đánh giá Dự án (Post-Mortem Retro)",
    titleEn: "14-Day Hypercare Support, SLA Monitoring & Project Post-Mortem",
    startWeek: 11.8,
    durationWeeks: 0.8,
    progress: 95,
    isCritical: false,
    isMilestone: false,
    isSprint: false,
    predecessor: "WBS M3",
    owner: "Senior PM",
    raci: { r: "Senior PM", a: "Client Sponsor", c: "Support Team", i: "Company Executive" },
    deliverable: "Báo cáo SLA Hypercare, Tài liệu Bài học Kinh nghiệm (Lessons Learned)",
    deliverableEn: "Hypercare SLA Report, Post-Mortem Lessons Learned Document",
    dod: "SLA phản hồi sự cố < 15 phút, giải quyết 100% thắc mắc người dùng, chuyển giao cho đội BAU.",
    dodEn: "SLA response time < 15 min, 100% queries resolved, transition to BAU support team.",
    pmNote: "Văn hóa cải tiến liên tục: Đúc kết kinh nghiệm điều phối để tái sử dụng cho các dự án sau.",
    pmNoteEn: "Continuous improvement: Institutionalize delivery insights for organizational re-use.",
  },
];

export function ProjectManagementSection({ lang }: ProjectManagementSectionProps) {
  const [activeStage, setActiveStage] = useState<number>(0);
  const [activeTab, setActiveTab] = useState<"lifecycle" | "gantt" | "cr-flow" | "risk-matrix">("lifecycle");
  const [ganttFilter, setGanttFilter] = useState<"all" | "critical" | "sprint" | "milestone">("all");
  const [selectedTaskId, setSelectedTaskId] = useState<string>("wbs-2.3");

  const filteredTasks = ganttTasks.filter((task) => {
    if (ganttFilter === "critical") return task.isCritical;
    if (ganttFilter === "sprint") return task.isSprint;
    if (ganttFilter === "milestone") return task.isMilestone;
    return true;
  });

  const selectedTask = ganttTasks.find((t) => t.id === selectedTaskId) || ganttTasks[6];

  const stages = [
    {
      id: "discovery",
      num: "01",
      title: lang === "vi" ? "Khởi động & Khảo sát" : "Initiation & Discovery",
      shortTitle: lang === "vi" ? "Khởi động" : "Initiation",
      badge: lang === "vi" ? "Tuần 1-2" : "Week 1-2",
      icon: Layers,
      color: "#2563eb",
      objective:
        lang === "vi"
          ? "Làm rõ mục tiêu kinh doanh, xác định các bên liên quan (Stakeholders), đánh giá tính khả thi kỹ thuật và thống nhất ràng buộc ngân sách - thời gian."
          : "Align business objectives with stakeholders, assess technical feasibility, and establish project budget, timeline, and boundary constraints.",
      actions:
        lang === "vi"
          ? [
              "Tổ chức Kick-off meeting với Ban Lãnh đạo, Khách hàng và Trưởng nhóm Kỹ thuật (Tech Lead).",
              "Thiết lập ma trận phân quyền trách nhiệm RACI (Responsible, Accountable, Consulted, Informed).",
              "Phân rã cấu trúc công việc sơ bộ (Work Breakdown Structure - WBS) và xác định các cột mốc Milestone cốt lõi.",
              "Khảo sát hiện trạng hạ tầng và đánh giá các ràng buộc bảo mật / tích hợp hệ thống bên thứ ba.",
            ]
          : [
              "Conduct Kick-off meeting with Executive Sponsors, Clients, and Tech Leads.",
              "Establish RACI Responsibility Assignment Matrix.",
              "Construct preliminary Work Breakdown Structure (WBS) and map milestone baselines.",
              "Survey infrastructure feasibility, security constraints, and third-party integration dependencies.",
            ],
      deliverables:
        lang === "vi"
          ? ["Project Charter (Điều lệ Dự án)", "Ma trận RACI", "WBS Baseline & Lộ trình Milestone sơ bộ"]
          : ["Project Charter", "RACI Matrix", "High-level WBS & Milestone Roadmap"],
      tools: ["Jira / Confluence", "Miro / Figma", "Google Sheets (WBS / Budget)", "Slack / Teams"],
    },
    {
      id: "scope-baseline",
      num: "02",
      title: lang === "vi" ? "Đặc tả & Khóa Phạm vi (Scope Freeze)" : "Scope Baseline & Scope Freeze",
      shortTitle: lang === "vi" ? "Khóa Phạm vi" : "Scope Freeze",
      badge: lang === "vi" ? "Chốt Chặn Cốt Lõi" : "Key Gatekeeper",
      icon: ShieldCheck,
      color: "#0284c7",
      objective:
        lang === "vi"
          ? "Chuyển hóa bài toán nghiệp vụ thành tài liệu đặc tả kỹ thuật chi tiết; thiết lập tiêu chuẩn hoàn thành (DoD/DoR) và kích hoạt chốt chặn Scope Freeze để ngăn ngừa phình to phạm vi (Scope Creep)."
          : "Translate business requirements into rigorous technical specifications; define Definition of Done/Ready and enforce Scope Freeze to prevent scope creep.",
      actions:
        lang === "vi"
          ? [
              "Soạn thảo PRD/SRS với tiêu chuẩn User Story kèm tiêu chí nghiệm thu Given-When-Then.",
              "Mô hình hóa quy trình nghiệp vụ chuẩn BPMN 2.0 (Camunda) để đồng bộ luồng nghiệp vụ giữa Client và Dev.",
              "Xác định rõ ràng Tiêu chí Sẵn sàng (Definition of Ready - DoR) và Tiêu chí Hoàn thành (Definition of Done - DoD).",
              "Ký xác nhận Scope Freeze: Mọi phát sinh mới sau mốc này bắt buộc phải đi qua Quy trình Change Request (CR).",
            ]
          : [
              "Author PRD/SRS with User Stories and Gherkin Given-When-Then acceptance criteria.",
              "Model business workflows using BPMN 2.0 (Camunda) for end-to-end client-engineering consensus.",
              "Formulate strict Definition of Ready (DoR) and Definition of Done (DoD).",
              "Secure formal Scope Freeze sign-off: Any subsequent scope addition must follow the Change Request (CR) protocol.",
            ],
      deliverables:
        lang === "vi"
          ? ["Tài liệu PRD / SRS hoàn chỉnh", "Sơ đồ luồng BPMN 2.0 & Wireframe Figma", "Biên bản ký kết Scope Freeze"]
          : ["Approved PRD / SRS Specification", "BPMN 2.0 Workflows & Figma Wireframes", "Scope Freeze Sign-off Document"],
      tools: ["Camunda BPMN 2.0", "Jira Product Discovery", "Figma", "OpenAPI / Swagger"],
    },
    {
      id: "execution",
      num: "03",
      title: lang === "vi" ? "Thực thi Sprint & Điều phối Kỹ thuật" : "Sprint Execution & Tech Alignment",
      shortTitle: lang === "vi" ? "Thực thi Sprint" : "Sprint Execution",
      badge: lang === "vi" ? "Chu kỳ 2 tuần" : "2-Week Sprints",
      icon: GitBranch,
      color: "#059669",
      objective:
        lang === "vi"
          ? "Vận hành chu kỳ Agile/Scrum kỷ luật, theo dõi tiến độ thực tế so với kế hoạch, gỡ bỏ điểm nghẽn (Blockers) cho kỹ sư và đảm bảo chất lượng kỹ thuật liên tục."
          : "Execute disciplined Agile/Scrum sprints, track velocity vs burn-down charts, eliminate team blockers, and safeguard technical code quality continuously.",
      actions:
        lang === "vi"
          ? [
              "Chủ trì Sprint Planning phân rã Story thành Task cụ thể kèm ước lượng điểm Story Points (Planning Poker).",
              "Điều phối Daily Standup 15 phút tập trung vào 3 câu hỏi: Đã làm gì? Sẽ làm gì? Có khó khăn gì cần PM gỡ?",
              "Tổ chức Backlog Grooming giữa sprint để làm mịn User Story cho các đợt phát triển kế tiếp.",
              "Giám sát bảng Jira Kanban/Scrum, theo dõi Burndown Chart để phát hiện sớm nguy cơ trễ hạn và tái phân bổ lực lượng.",
            ]
          : [
              "Facilitate Sprint Planning with Story Point estimations (Planning Poker) and capacity planning.",
              "Run Daily Standups (15 mins) focused on: Done, Next, and Blockers requiring PM escalation.",
              "Lead mid-sprint Backlog Refinement to prep next sprint stories with clear acceptance criteria.",
              "Monitor Jira Scrum boards, Burndown charts, and WIP limits to proactively rebalance critical paths.",
            ],
      deliverables:
        lang === "vi"
          ? ["Bảng Jira Sprint hoàn chỉnh", "Biểu đồ Burndown & Velocity", "Báo cáo tiến độ Sprint Report cho Stakeholders"]
          : ["Sprint Backlog & Jira Board", "Burndown & Velocity Metrics", "Weekly Stakeholder Progress Report"],
      tools: ["Jira Software", "Trello", "GitHub Projects & CI/CD", "Postman (API Testing)"],
    },
    {
      id: "uat-quality",
      num: "04",
      title: lang === "vi" ? "Kiểm soát Chất lượng & Nghiệm thu UAT" : "Quality Gate & UAT Sign-off",
      shortTitle: lang === "vi" ? "Nghiệm thu UAT" : "UAT Sign-off",
      badge: lang === "vi" ? "Cổng Chất Lượng" : "Quality Gate",
      icon: FileCheck2,
      color: "#d97706",
      objective:
        lang === "vi"
          ? "Tổ chức kịch bản kiểm thử nghiệm thu người dùng (UAT), phân loại và giải quyết lỗi theo ma trận mức độ nghiêm trọng (Severity Matrix), đảm bảo sản phẩm đạt tiêu chuẩn trước khi Go-live."
          : "Orchestrate User Acceptance Testing (UAT), triage bugs via a rigorous Severity Matrix, and validate release criteria before production deployment.",
      actions:
        lang === "vi"
          ? [
              "Xây dựng bộ kịch bản kiểm thử UAT Scenarios bám sát các luồng nghiệp vụ thực tế của người dùng cuối.",
              "Phân loại lỗi theo Bug Severity Matrix (Blocker / Critical / Major / Minor) và chủ trì họp Bug Triage hàng ngày.",
              "Phối hợp với QA Engineer thực hiện kiểm thử hồi quy (Regression Testing) trên môi trường Staging/UAT.",
              "Thu thập chữ ký nghiệm thu UAT Sign-off chính thức từ Product Owner / Khách hàng trước khi kích hoạt quy trình phát hành.",
            ]
          : [
              "Develop comprehensive UAT test scenarios matching real-world end-user workflows.",
              "Triage defects via Severity Matrix (Blocker, Critical, Major, Minor) during daily triage syncs.",
              "Coordinate end-to-end regression testing on Staging environment with QA engineers.",
              "Secure formal UAT Sign-off certification from Product Owner and Client sponsors.",
            ],
      deliverables:
        lang === "vi"
          ? ["Bộ kịch bản kiểm thử UAT Test Scenarios", "Báo cáo Bug Triage & Ma trận khắc phục", "Biên bản nghiệm thu UAT Sign-off"]
          : ["UAT Test Script Suite", "Bug Triage & Defect Log Matrix", "Formal UAT Sign-off Document"],
      tools: ["Google Sheets / TestRail", "Jira Bug Tracking", "Postman", "Sentry / Log Monitoring"],
    },
    {
      id: "release-retro",
      num: "05",
      title: lang === "vi" ? "Triển khai, Hypercare & Cải tiến" : "Deployment, Hypercare & Retro",
      shortTitle: lang === "vi" ? "Go-Live & Retro" : "Release & Retro",
      badge: lang === "vi" ? "Vận Hành Bền Vững" : "Continuous Growth",
      icon: TrendingUp,
      color: "#7c3aed",
      objective:
        lang === "vi"
          ? "Phát hành sản phẩm an toàn với kế hoạch Rollback sẵn sàng, theo dõi vận hành giai đoạn Hypercare và chủ trì buổi Sprint Retrospective để liên tục tối ưu quy trình làm việc của team."
          : "Execute safe production release with rollback readiness, oversee 7-14 days Hypercare stability, and host Sprint Retrospectives to drive continuous process enhancement.",
      actions:
        lang === "vi"
          ? [
              "Rà soát Deployment Checklist & Rollback Plan trước giờ cắt chuyển hệ thống (Cut-over).",
              "Phối hợp với DevOps/Tech Lead kích hoạt phát hành theo chiến lược Blue-Green hoặc Rolling Update.",
              "Duy trì giai đoạn Hypercare (7-14 ngày): Theo dõi chỉ số lỗi hệ thống, hiệu năng API và tiếp nhận phản hồi ban đầu.",
              "Tổ chức buổi Retrospective theo mô hình KPT (Keep - Problem - Try) hoặc Mad-Sad-Glad để đúc kết cải tiến cho dự án tiếp theo.",
            ]
          : [
              "Audit Go-Live Checklist and verify Rollback contingencies prior to cut-over window.",
              "Collaborate with DevOps on zero-downtime deployment (Blue-Green or Rolling update).",
              "Maintain 7-14 day Hypercare: Monitor error rates, system latency, and resolve live operational anomalies.",
              "Conduct Sprint Retrospective (Keep - Problem - Try) to identify actionable team workflow improvements.",
            ],
      deliverables:
        lang === "vi"
          ? ["Go-live & Rollback Checklist", "Release Notes & Hướng dẫn sử dụng", "Biên bản cải tiến Sprint Retrospective"]
          : ["Production Deployment Checklist", "Release Notes & SOP Handover", "Sprint Retrospective Action Matrix"],
      tools: ["GitHub Actions / Docker", "Sentry / Grafana", "Confluence Release Hub", "Slack War-room"],
    },
  ];

  const currentStage = stages[activeStage];
  const CurrentIcon = currentStage.icon;

  return (
    <section className="pm-framework-section" id="project-management">
      <div className="pm-section-head">
        <div className="pm-badge-row">
          <span className="pm-accent-pill">
            <Sparkles size={14} aria-hidden="true" />
            {lang === "vi" ? "Năng lực Quản Trị Dự Án Phần Mềm" : "Software Project Management Competencies"}
          </span>
          <span className="pm-role-pill">Agile / Scrum · SDLC · Scope Freeze · UAT Gatekeeper</span>
        </div>
        <h2 className="pm-main-heading">
          {lang === "vi"
            ? "Quy Trình Quản Trị & Điều Phối Dự Án Phần Mềm Chuyên Nghiệp"
            : "Professional Software Project Delivery & Governance Framework"}
        </h2>
        <p className="pm-main-lede">
          {lang === "vi"
            ? "Mô hình hóa toàn diện quy trình đưa dự án phần mềm từ ý tưởng đến sản phẩm vận hành thực tế: Kiểm soát chặt chẽ phạm vi (Scope Freeze), quản lý thay đổi (Change Request), vận hành Sprint linh hoạt và nghiệm thu UAT chuẩn mực."
            : "A comprehensive operational framework taking software projects from inception to production: Rigorous scope control, Change Request governance, Agile sprint velocity, and disciplined UAT sign-off."}
        </p>

        {/* View Switcher Tabs */}
        <div className="pm-view-tabs" role="tablist">
          <button
            type="button"
            className={`pm-tab-btn${activeTab === "lifecycle" ? " is-active" : ""}`}
            onClick={() => setActiveTab("lifecycle")}
            role="tab"
            aria-selected={activeTab === "lifecycle"}
          >
            <Workflow size={15} aria-hidden="true" />
            <span>{lang === "vi" ? "1. Sơ đồ 5 Giai đoạn SDLC" : "1. 5-Stage SDLC Pipeline"}</span>
          </button>
          <button
            type="button"
            className={`pm-tab-btn${activeTab === "gantt" ? " is-active" : ""}`}
            onClick={() => setActiveTab("gantt")}
            role="tab"
            aria-selected={activeTab === "gantt"}
          >
            <Calendar size={15} aria-hidden="true" />
            <span>{lang === "vi" ? "2. Sơ Đồ Gantt & Phân Rã WBS (CPM)" : "2. Gantt Schedule & WBS (CPM)"}</span>
          </button>
          <button
            type="button"
            className={`pm-tab-btn${activeTab === "cr-flow" ? " is-active" : ""}`}
            onClick={() => setActiveTab("cr-flow")}
            role="tab"
            aria-selected={activeTab === "cr-flow"}
          >
            <RefreshCw size={15} aria-hidden="true" />
            <span>{lang === "vi" ? "3. Kiểm soát Scope & Change Request" : "3. Scope & Change Request Control"}</span>
          </button>
          <button
            type="button"
            className={`pm-tab-btn${activeTab === "risk-matrix" ? " is-active" : ""}`}
            onClick={() => setActiveTab("risk-matrix")}
            role="tab"
            aria-selected={activeTab === "risk-matrix"}
          >
            <ShieldAlert size={15} aria-hidden="true" />
            <span>{lang === "vi" ? "4. Ma trận Quản trị Rủi ro" : "4. Risk Management Matrix"}</span>
          </button>
        </div>
      </div>

      {/* TAB 1: 5-STAGE SDLC PIPELINE */}
      {activeTab === "lifecycle" && (
        <div className="pm-tab-content">
          {/* Interactive Pipeline Track */}
          <div className="pm-pipeline-nav" role="tablist" aria-label="Project Management Stages">
            {stages.map((stage, idx) => {
              const StageIcon = stage.icon;
              const isSelected = idx === activeStage;
              return (
                <button
                  type="button"
                  key={stage.id}
                  className={`pm-step-node${isSelected ? " is-active" : ""}`}
                  onClick={() => setActiveStage(idx)}
                  role="tab"
                  aria-selected={isSelected}
                >
                  <div className="pm-step-num-badge">
                    <span>{stage.num}</span>
                  </div>
                  <div className="pm-step-icon-wrap" style={{ color: stage.color }}>
                    <StageIcon size={18} aria-hidden="true" />
                  </div>
                  <div className="pm-step-label-group">
                    <strong className="pm-step-title">{stage.shortTitle}</strong>
                    <span className="pm-step-badge-tag">{stage.badge}</span>
                  </div>
                  {idx < stages.length - 1 && (
                    <div className="pm-pipeline-connector" aria-hidden="true">
                      <ChevronRight size={16} />
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Active Stage Detail Card */}
          <div className="pm-stage-detail-card" style={{ "--stage-accent": currentStage.color } as React.CSSProperties}>
            <div className="pm-detail-head">
              <div className="pm-detail-title-group">
                <div className="pm-stage-icon-large" style={{ backgroundColor: `${currentStage.color}15`, color: currentStage.color }}>
                  <CurrentIcon size={26} aria-hidden="true" />
                </div>
                <div>
                  <div className="pm-stage-meta-row">
                    <span className="pm-stage-index-badge">{lang === "vi" ? `Giai đoạn ${currentStage.num}` : `Phase ${currentStage.num}`}</span>
                    <span className="pm-stage-timeline-badge">{currentStage.badge}</span>
                  </div>
                  <h3 className="pm-stage-full-title">{currentStage.title}</h3>
                </div>
              </div>

              <div className="pm-detail-stage-tools">
                <span className="pm-tools-title">{lang === "vi" ? "Công cụ sử dụng:" : "Tooling & Tech:"}</span>
                <div className="pm-tools-chips">
                  {currentStage.tools.map((tool) => (
                    <span className="pm-tool-chip" key={tool}>
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pm-detail-objective-box">
              <strong className="pm-objective-label">{lang === "vi" ? "🎯 Mục tiêu trọng tâm của PM:" : "🎯 Core PM Objective:"}</strong>
              <p>{currentStage.objective}</p>
            </div>

            <div className="pm-detail-grid">
              {/* Column 1: PM Actions */}
              <div className="pm-detail-col">
                <div className="pm-col-header">
                  <BriefcaseBusiness size={16} aria-hidden="true" />
                  <h4>{lang === "vi" ? "Trách nhiệm & Hành động của PM" : "Key PM Responsibilities & Actions"}</h4>
                </div>
                <ul className="pm-action-list">
                  {currentStage.actions.map((act, i) => (
                    <li key={i}>
                      <span className="pm-check-bullet">
                        <CheckCircle2 size={15} />
                      </span>
                      <span>{act}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 2: Deliverables */}
              <div className="pm-detail-col deliverables">
                <div className="pm-col-header">
                  <FileText size={16} aria-hidden="true" />
                  <h4>{lang === "vi" ? "Sản phẩm & Tài liệu bàn giao" : "Key Deliverables & Artifacts"}</h4>
                </div>
                <div className="pm-deliverables-stack">
                  {currentStage.deliverables.map((del, i) => (
                    <div className="pm-deliverable-item" key={i}>
                      <div className="pm-del-icon">
                        <FileCheck2 size={16} />
                      </div>
                      <div className="pm-del-text">
                        <strong>{del}</strong>
                        <span>{lang === "vi" ? "Chuẩn mực tài liệu nghiệm thu kỹ thuật" : "Formal project documentation artifact"}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pm-real-evidence-box">
                  <span className="pm-evidence-badge">
                    <Sparkles size={12} />
                    {lang === "vi" ? "Minh chứng thực tế" : "Practical Case Evidence"}
                  </span>
                  <p>
                    {activeStage === 0 && (lang === "vi" ? "Áp dụng tại HomeNest: Khảo sát mô hình kinh doanh phòng trọ & bưu cục J&T Express." : "Applied at HomeNest & J&T Express: Requirements elicitation across real hubs.")}
                    {activeStage === 1 && (lang === "vi" ? "Áp dụng tại Nexus Express: Soạn thảo PRD 60+ trang, vẽ BPMN 2.0 Camunda, chốt Scope Freeze." : "Applied at Nexus Express: 60+ page PRD, Camunda BPMN 2.0 specs, formal Scope Freeze.")}
                    {activeStage === 2 && (lang === "vi" ? "Áp dụng tại HomeNest: Điều phối 8+ Sprints trên Jira, gỡ vướng API Webhook & phân bổ dev." : "Applied at HomeNest: Facilitated 8+ Jira Sprints, cleared API Webhook blockers.")}
                    {activeStage === 3 && (lang === "vi" ? "Áp dụng tại Dự án Đặt phòng: Thiết kế 35 kịch bản UAT chống race-condition & nghiệm thu VNPay." : "Applied at Accommodation Platform: 35 UAT scenarios preventing double-booking.")}
                    {activeStage === 4 && (lang === "vi" ? "Áp dụng tại Nexus Express: Triển khai Docker, giám sát tracking live 99.8% uptime và retro đúc kết." : "Applied at Nexus Express: Docker deployment, live tracking monitoring, KPT retro.")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: GANTT CHART & WBS / CPM SCHEDULE */}
      {activeTab === "gantt" && (
        <div className="pm-tab-content">
          <div className="pm-gantt-card">
            {/* Gantt Header & Live Project Health Metrics */}
            <div className="pm-gantt-head">
              <div className="pm-gantt-title-row">
                <div className="pm-gantt-icon-badge">
                  <Calendar size={22} />
                </div>
                <div>
                  <div className="pm-gantt-pill-row">
                    <span className="pm-status-pill green">
                      <span className="dot-pulse-green" />
                      {lang === "vi" ? "Dự Án Đang Chạy Đúng Tiến Độ" : "Project On Track · Active Baseline"}
                    </span>
                    <span className="pm-status-pill blue">Hybrid Agile (Scrum + Stage-Gate)</span>
                    <span className="pm-status-pill slate">12 Weeks · 6 Sprints · WBS L3</span>
                  </div>
                  <h3>
                    {lang === "vi"
                      ? "Sơ Đồ Gantt & Quản Trị Đường Găng (Critical Path Method - CPM)"
                      : "Master Gantt Schedule & Critical Path Method (CPM)"}
                  </h3>
                  <p>
                    {lang === "vi"
                      ? "Minh chứng năng lực Senior PM qua Dự án Nexus Express (OMS Logistics & TMĐT): Phân rã WBS khoa học, xác định chính xác đường găng (Zero Slack), kiểm soát chỉ số SPI/CPI và chốt chặn nghiệm thu UAT."
                      : "Tangible Senior PM governance demonstrated via Nexus Express OMS: Rigorous WBS decomposition, Zero Slack Critical Path defense, EVM health metrics (SPI/CPI), and UAT sign-off gatekeeping."}
                  </p>
                </div>
              </div>

              {/* 4 Health KPI Cards */}
              <div className="pm-kpi-grid">
                <div className="pm-kpi-item green">
                  <div className="pm-kpi-meta">
                    <span className="pm-kpi-label">SPI (Schedule Index)</span>
                    <span className="pm-kpi-status-tag green">Ahead</span>
                  </div>
                  <strong className="pm-kpi-value">1.04</strong>
                  <span className="pm-kpi-desc">
                    {lang === "vi" ? "+3 ngày trước hạn (Vượt tiến độ)" : "+3 days ahead of baseline"}
                  </span>
                </div>

                <div className="pm-kpi-item green">
                  <div className="pm-kpi-meta">
                    <span className="pm-kpi-label">CPI (Cost Index)</span>
                    <span className="pm-kpi-status-tag green">Under</span>
                  </div>
                  <strong className="pm-kpi-value">1.02</strong>
                  <span className="pm-kpi-desc">
                    {lang === "vi" ? "Tiết kiệm 2.1% chi phí dự trù" : "2.1% cost variance saved"}
                  </span>
                </div>

                <div className="pm-kpi-item blue">
                  <div className="pm-kpi-meta">
                    <span className="pm-kpi-label">Scope Stability</span>
                    <span className="pm-kpi-status-tag blue">Frozen</span>
                  </div>
                  <strong className="pm-kpi-value">96.8%</strong>
                  <span className="pm-kpi-desc">
                    {lang === "vi" ? "Chặn 8 task lệch, 2 CR duyệt" : "8 scope creeps blocked, 2 CRs signed"}
                  </span>
                </div>

                <div className="pm-kpi-item purple">
                  <div className="pm-kpi-meta">
                    <span className="pm-kpi-label">Sprint Velocity</span>
                    <span className="pm-kpi-status-tag purple">Stable</span>
                  </div>
                  <strong className="pm-kpi-value">48 SP</strong>
                  <span className="pm-kpi-desc">
                    {lang === "vi" ? "Độ lệch chuẩn < 5% / Sprint" : "Std dev < 5% across 4 Sprints"}
                  </span>
                </div>
              </div>
            </div>

            {/* Filter Toolbar & Legend */}
            <div className="pm-gantt-toolbar">
              <div className="pm-gantt-filters">
                <span className="pm-filter-title">
                  <Filter size={13} />
                  <span>{lang === "vi" ? "Bộ lọc WBS:" : "WBS Filter:"}</span>
                </span>
                <button
                  type="button"
                  className={`pm-gfilter-btn${ganttFilter === "all" ? " is-active" : ""}`}
                  onClick={() => setGanttFilter("all")}
                >
                  {lang === "vi" ? `Tất cả (${ganttTasks.length})` : `All Tasks (${ganttTasks.length})`}
                </button>
                <button
                  type="button"
                  className={`pm-gfilter-btn critical${ganttFilter === "critical" ? " is-active" : ""}`}
                  onClick={() => setGanttFilter("critical")}
                >
                  <span className="pm-dot-red" />
                  {lang === "vi" ? "Đường găng (Critical Path)" : "Critical Path (CPM)"}
                </button>
                <button
                  type="button"
                  className={`pm-gfilter-btn${ganttFilter === "sprint" ? " is-active" : ""}`}
                  onClick={() => setGanttFilter("sprint")}
                >
                  <Zap size={12} />
                  {lang === "vi" ? "Scrum Sprints (S1-S4)" : "Scrum Sprints (S1-S4)"}
                </button>
                <button
                  type="button"
                  className={`pm-gfilter-btn${ganttFilter === "milestone" ? " is-active" : ""}`}
                  onClick={() => setGanttFilter("milestone")}
                >
                  <span>💎</span>
                  {lang === "vi" ? "Cột mốc (Milestones)" : "Milestone Gates"}
                </button>
              </div>

              <div className="pm-gantt-legend">
                <span className="legend-item"><span className="legend-box critical" /> {lang === "vi" ? "Đường găng (Zero Slack)" : "Critical Path"}</span>
                <span className="legend-item"><span className="legend-box milestone" /> {lang === "vi" ? "Mốc nghiệm thu (Gate)" : "Milestone Gate"}</span>
                <span className="legend-item"><span className="legend-box sprint" /> {lang === "vi" ? "Sprint Kỹ thuật" : "Scrum Sprint"}</span>
              </div>
            </div>

            {/* Gantt Matrix Viewport */}
            <div className="pm-gantt-chart-viewport">
              <div className="pm-gantt-table-container">
                {/* Table Header: Task Meta + 12 Weeks Timeline */}
                <div className="pm-gantt-header-row">
                  <div className="pm-gantt-col-meta">
                    <span className="col-header-wbs">WBS</span>
                    <span className="col-header-name">{lang === "vi" ? "Hạng Mục Công Việc & Gói Thầu" : "Work Package & Deliverable"}</span>
                    <span className="col-header-raci">{lang === "vi" ? "RACI" : "RACI"}</span>
                    <span className="col-header-progress">{lang === "vi" ? "Tiến độ" : "Progress"}</span>
                  </div>

                  <div className="pm-gantt-timeline-header">
                    <div className="pm-timeline-phase-band">
                      <div className="phase-band-item p1" style={{ width: "29.166%" }}>
                        {lang === "vi" ? "GĐ 1: Khảo sát & Khóa Scope Freeze" : "Phase 1: Inception & Scope Freeze"}
                      </div>
                      <div className="phase-band-item p2" style={{ width: "50%" }}>
                        {lang === "vi" ? "GĐ 2: Vận hành Sprint Kỹ thuật & Tích hợp" : "Phase 2: Sprint Delivery & Integrations"}
                      </div>
                      <div className="phase-band-item p3" style={{ width: "20.833%" }}>
                        {lang === "vi" ? "GĐ 3: UAT & Go-Live" : "Phase 3: UAT & Go-Live"}
                      </div>
                    </div>

                    <div className="pm-timeline-weeks-grid">
                      {Array.from({ length: 12 }).map((_, i) => (
                        <div key={i} className={`week-cell${i === 6 ? " is-current-marker" : ""}`}>
                          <span>W{i + 1}</span>
                          {i === 6 && <span className="today-badge">Active</span>}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Task Rows */}
                <div className="pm-gantt-body">
                  {filteredTasks.map((task) => {
                    const isSelected = task.id === selectedTaskId;
                    const leftPercent = ((Math.max(1, Math.min(12, task.startWeek)) - 1) / 12) * 100;
                    const widthPercent = Math.min(100 - leftPercent, (task.durationWeeks / 12) * 100);

                    return (
                      <div
                        key={task.id}
                        className={`pm-gantt-task-row${isSelected ? " is-selected" : ""}${task.isCritical ? " is-critical-row" : ""}${task.isMilestone ? " is-milestone-row" : ""}`}
                        onClick={() => setSelectedTaskId(task.id)}
                        role="button"
                        tabIndex={0}
                        aria-pressed={isSelected}
                      >
                        {/* Left Meta Info */}
                        <div className="pm-gantt-row-meta">
                          <span className={`wbs-badge${task.isMilestone ? " milestone" : task.isCritical ? " critical" : ""}`}>
                            {task.wbs}
                          </span>
                          <div className="task-title-group">
                            <div className="title-text-row">
                              <strong>{lang === "vi" ? task.title : task.titleEn}</strong>
                              {task.isCritical && (
                                <span className="badge-critical" title="Zero Slack Critical Path">CPM</span>
                              )}
                              {task.isSprint && (
                                <span className="badge-sprint">{task.sprintLabel}</span>
                              )}
                            </div>
                            <span className="task-stream-tag" style={{ color: task.streamColor }}>
                              {lang === "vi" ? task.stream : task.streamEn}
                            </span>
                          </div>

                          <div className="task-raci-pill">
                            <span className="raci-r">R: {task.raci.r.split(" ")[0]}</span>
                          </div>

                          <div className="task-progress-stat">
                            <span className="stat-percent">{task.progress}%</span>
                          </div>
                        </div>

                        {/* Right Timeline Track */}
                        <div className="pm-gantt-row-timeline">
                          {/* Background Grid Lines */}
                          <div className="timeline-grid-lines" aria-hidden="true">
                            {Array.from({ length: 12 }).map((_, i) => (
                              <div key={i} className={`grid-line-cell${i === 6 ? " is-current" : ""}`} />
                            ))}
                          </div>

                          {/* Task Bar or Milestone Marker */}
                          {task.isMilestone ? (
                            <div
                              className="gantt-milestone-node"
                              style={{ left: `${leftPercent}%` }}
                              title={`${task.wbs}: ${lang === "vi" ? task.title : task.titleEn}`}
                            >
                              <div className="milestone-diamond">
                                <span>💎</span>
                              </div>
                              <span className="milestone-label">{task.wbs} Gate</span>
                            </div>
                          ) : (
                            <div
                              className={`gantt-bar-item${task.isCritical ? " is-critical" : ""}${task.isSprint ? " is-sprint" : ""}`}
                              style={{
                                left: `${leftPercent}%`,
                                width: `${Math.max(4, widthPercent)}%`,
                                backgroundColor: task.streamColor,
                              }}
                              title={`${task.wbs} (${task.durationWeeks} tuần) - ${task.progress}%`}
                            >
                              <div
                                className="gantt-bar-fill"
                                style={{ width: `${task.progress}%` }}
                              />
                              <span className="gantt-bar-label">
                                {task.isSprint ? `${task.sprintLabel} · ` : ""}{task.durationWeeks}w
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* INTERACTIVE SENIOR PM TASK INSPECTOR */}
            {selectedTask && (
              <div className="pm-task-inspector">
                <div className="inspector-head">
                  <div className="inspector-title-row">
                    <span className={`inspector-wbs-pill${selectedTask.isMilestone ? " milestone" : selectedTask.isCritical ? " critical" : ""}`}>
                      WBS {selectedTask.wbs}
                    </span>
                    <h4>{lang === "vi" ? selectedTask.title : selectedTask.titleEn}</h4>
                    {selectedTask.isCritical && (
                      <span className="inspector-cpm-badge">
                        <AlertTriangle size={13} />
                        {lang === "vi" ? "Đường găng cốt lõi (Zero Slack)" : "Critical Path (Zero Slack)"}
                      </span>
                    )}
                  </div>
                  <span className="inspector-stream-name" style={{ color: selectedTask.streamColor }}>
                    {lang === "vi" ? selectedTask.stream : selectedTask.streamEn} · {selectedTask.durationWeeks} {lang === "vi" ? "Tuần" : "Weeks"} · {lang === "vi" ? "Tiến độ:" : "Progress:"} {selectedTask.progress}%
                  </span>
                </div>

                <div className="inspector-grid">
                  {/* RACI Matrix Block */}
                  <div className="inspector-card-block raci">
                    <div className="block-head">
                      <Users2 size={16} />
                      <strong>{lang === "vi" ? "Ma Trận Phân Nhiệm RACI" : "RACI Responsibility Matrix"}</strong>
                    </div>
                    <div className="raci-details-grid">
                      <div className="raci-cell">
                        <span className="raci-letter r">R</span>
                        <div className="raci-text">
                          <strong>Responsible (Thực hiện):</strong>
                          <span>{selectedTask.raci.r}</span>
                        </div>
                      </div>
                      <div className="raci-cell">
                        <span className="raci-letter a">A</span>
                        <div className="raci-text">
                          <strong>Accountable (Chịu trách nhiệm):</strong>
                          <span>{selectedTask.raci.a}</span>
                        </div>
                      </div>
                      <div className="raci-cell">
                        <span className="raci-letter c">C</span>
                        <div className="raci-text">
                          <strong>Consulted (Tư vấn/Review):</strong>
                          <span>{selectedTask.raci.c}</span>
                        </div>
                      </div>
                      <div className="raci-cell">
                        <span className="raci-letter i">I</span>
                        <div className="raci-text">
                          <strong>Informed (Thông báo):</strong>
                          <span>{selectedTask.raci.i}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Predecessors & Schedule Block */}
                  <div className="inspector-card-block sched">
                    <div className="block-head">
                      <Clock size={16} />
                      <strong>{lang === "vi" ? "Ràng Buộc Tiến Độ & Bàn Giao" : "Schedule Constraints & Deliverables"}</strong>
                    </div>
                    <div className="sched-meta-list">
                      <div className="sched-item">
                        <span>{lang === "vi" ? "Thời gian thực thi:" : "Execution Window:"}</span>
                        <strong>Tuần {selectedTask.startWeek} – Tuần {selectedTask.startWeek + selectedTask.durationWeeks} ({Math.round(selectedTask.durationWeeks * 5)} ngày làm việc)</strong>
                      </div>
                      <div className="sched-item">
                        <span>{lang === "vi" ? "Công việc tiền nhiệm:" : "Predecessor Dependency:"}</span>
                        <strong>{selectedTask.predecessor || (lang === "vi" ? "Mốc Khởi động (Không phụ thuộc)" : "Project Start")}</strong>
                      </div>
                      {selectedTask.storyPoints && (
                        <div className="sched-item">
                          <span>{lang === "vi" ? "Khối lượng Sprint:" : "Sprint Velocity:"}</span>
                          <strong>{selectedTask.storyPoints} Story Points ({selectedTask.sprintLabel})</strong>
                        </div>
                      )}
                      <div className="sched-item">
                        <span>{lang === "vi" ? "Sản phẩm bàn giao:" : "Key Deliverable:"}</span>
                        <strong className="text-blue">{lang === "vi" ? selectedTask.deliverable : selectedTask.deliverableEn}</strong>
                      </div>
                    </div>
                  </div>

                  {/* Definition of Done (DoD) */}
                  <div className="inspector-card-block dod">
                    <div className="block-head">
                      <CheckCircle2 size={16} />
                      <strong>{lang === "vi" ? "Tiêu Chuẩn Hoàn Thành (Definition of Done - DoD)" : "Definition of Done (DoD)"}</strong>
                    </div>
                    <p className="dod-text">{lang === "vi" ? selectedTask.dod : selectedTask.dodEn}</p>
                  </div>

                  {/* Senior PM Risk Strategy */}
                  <div className="inspector-card-block risk">
                    <div className="block-head">
                      <ShieldCheck size={16} />
                      <strong>{lang === "vi" ? "Chiến Lược Quản Trị Của Senior PM" : "Senior PM Risk Mitigation Action"}</strong>
                    </div>
                    <p className="risk-text">{lang === "vi" ? selectedTask.pmNote : selectedTask.pmNoteEn}</p>
                  </div>
                </div>
              </div>
            )}

            {/* SENIOR PM GOVERNANCE METHODOLOGIES TRIAD */}
            <div className="pm-gov-triad-section">
              <div className="pm-gov-triad-head">
                <Sparkles size={16} aria-hidden="true" />
                <h4>{lang === "vi" ? "3 Trụ Cột Quản Trị Cốt Lõi Của Senior Project Manager" : "Senior PM Governance Pillars"}</h4>
              </div>

              <div className="pm-gov-cards-grid">
                <div className="pm-gov-card">
                  <div className="pm-gov-badge cpm">01 · CPM</div>
                  <h5>{lang === "vi" ? "Quản Trị Đường Găng (Critical Path)" : "Critical Path Zero-Slack Governance"}</h5>
                  <p>
                    {lang === "vi"
                      ? "Phân định rạch ròi giữa các task có độ trễ linh hoạt (Float) và các mắt xích sống còn có Zero Slack (như tích hợp VNPay và ký nghiệm thu UAT). Luôn ưu tiên tài nguyên tinh nhuệ nhất để bảo vệ đường găng không bị trượt dù chỉ 1 ngày."
                      : "Strictly distinguish between float tasks and Zero Slack critical path elements (payment gateway & UAT sign-off). Prioritize elite engineering focus to ensure zero schedule slippage on the critical path."}
                  </p>
                </div>

                <div className="pm-gov-card">
                  <div className="pm-gov-badge wbs">02 · WBS 8/80</div>
                  <h5>{lang === "vi" ? "Nguyên Tắc Phân Rã WBS 8/80 & DoD" : "WBS 8/80 Decomposition & Definition of Done"}</h5>
                  <p>
                    {lang === "vi"
                      ? "Không có công việc nào vượt quá 80 giờ làm việc hoặc dưới 8 giờ. Mọi User Story đều gắn liền với tiêu chí Given-When-Then và Definition of Done minh bạch; giúp cuộc họp Daily Standup 15 phút phát hiện và gỡ vướng blocker trong 24 giờ."
                      : "No work package exceeds 80 hours or falls below 8 hours. Every user story is bound to Gherkin criteria and clear DoD; empowering 15-min daily standups to clear blockers within 24 hours."}
                  </p>
                </div>

                <div className="pm-gov-card">
                  <div className="pm-gov-badge vel">03 · Velocity & Buffer</div>
                  <h5>{lang === "vi" ? "Vận Tốc Sprint & Dự Phòng 15% Buffer" : "Velocity Stability & 15% Risk Buffer"}</h5>
                  <p>
                    {lang === "vi"
                      ? "Không bao giờ lập kế hoạch đạt 100% công suất lý thuyết. Luôn cam kết 85% năng lực nhóm cho Sprint Backlog và giữ 15% buffer cho các đợt phát sinh kỹ thuật, refactor hoặc hỗ trợ nóng. Mọi yêu cầu mới đều đi qua phễu Change Request."
                      : "Never commit to 100% theoretical capacity. Cap sprint commitments at 85% velocity and hold a 15% risk buffer for technical spikes and hotfixes. Route all new requirements through formal Change Request governance."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: CHANGE REQUEST GOVERNANCE FLOW */}
      {activeTab === "cr-flow" && (
        <div className="pm-tab-content">
          <div className="pm-cr-governance-card">
            <div className="pm-cr-head">
              <div className="pm-cr-icon-badge">
                <ShieldCheck size={22} />
              </div>
              <div>
                <h3>{lang === "vi" ? "Quy Trình Kiểm Soát Scope & Xử Lý Change Request (CR)" : "Scope Creep Defense & Change Request (CR) Protocol"}</h3>
                <p>
                  {lang === "vi"
                    ? "Cách tôi bảo vệ dự án khỏi tình trạng phình to phạm vi (Scope Creep) làm cháy ngân sách và trễ hạn bàn giao, đồng thời vẫn duy trì sự hài lòng của khách hàng."
                    : "How I safeguard projects against Scope Creep and budget blowouts while maintaining high stakeholder satisfaction through structured governance."}
                </p>
              </div>
            </div>

            {/* Visual Step-by-Step CR Highway */}
            <div className="pm-cr-highway">
              <div className="pm-cr-step">
                <div className="pm-cr-step-num">1</div>
                <div className="pm-cr-step-body">
                  <span className="pm-cr-tag req">{lang === "vi" ? "Đề Xuất Yêu Cầu" : "Request Ingestion"}</span>
                  <h4>{lang === "vi" ? "Tiếp Nhận Đề Xuất (CR Log)" : "Capture Change Request"}</h4>
                  <p>{lang === "vi" ? "Ghi nhận yêu cầu mới vào Change Log. Làm rõ bài toán kinh doanh cần giải quyết thay vì chỉ nhận giải pháp kỹ thuật bề nổi." : "Log requirement in Change Log. Clarify the fundamental business problem rather than jumping directly to technical implementation."}</p>
                </div>
              </div>

              <div className="pm-cr-arrow" aria-hidden="true">
                <ArrowRight size={20} />
              </div>

              <div className="pm-cr-step">
                <div className="pm-cr-step-num">2</div>
                <div className="pm-cr-step-body">
                  <span className="pm-cr-tag impact">{lang === "vi" ? "Phân Tích 3 Trục" : "Triple Constraint"}</span>
                  <h4>{lang === "vi" ? "Đánh Giá Tác Động (Impact Analysis)" : "Impact Assessment"}</h4>
                  <p>{lang === "vi" ? "Phối hợp với Tech Lead phân tích: Thời gian (Time) tăng bao nhiêu? Chi phí (Cost) ra sao? Ảnh hưởng tới kiến trúc và rủi ro trễ hạn Milestone thế nào?" : "Evaluate triple constraint with Tech Lead: Estimated man-days, cost delta, architectural impact, and delivery milestone risks."}</p>
                </div>
              </div>

              <div className="pm-cr-arrow" aria-hidden="true">
                <ArrowRight size={20} />
              </div>

              <div className="pm-cr-step">
                <div className="pm-cr-step-num">3</div>
                <div className="pm-cr-step-body">
                  <span className="pm-cr-tag decision">{lang === "vi" ? "Chốt Quyết Định" : "Decision Gate"}</span>
                  <h4>{lang === "vi" ? "Phê Duyệt & Thương Lượng (Sign-off)" : "Client Alignment & Approval"}</h4>
                  <p>{lang === "vi" ? "Trình bày 2 phương án cho Khách hàng: (A) Tăng ngân sách/dời deadline để làm ngay, hoặc (B) Đưa vào Backlog cho Phase 2 để bảo vệ ngày Go-live Phase 1." : "Offer two transparent options: (A) Approve cost/timeline extension for immediate build, or (B) Defer to Phase 2 Backlog to protect Phase 1 Go-Live."}</p>
                </div>
              </div>

              <div className="pm-cr-arrow" aria-hidden="true">
                <ArrowRight size={20} />
              </div>

              <div className="pm-cr-step">
                <div className="pm-cr-step-num">4</div>
                <div className="pm-cr-step-body">
                  <span className="pm-cr-tag exec">{lang === "vi" ? "Lên Kế Hoạch" : "Backlog Sync"}</span>
                  <h4>{lang === "vi" ? "Cập Nhật Backlog & Sprint" : "Sprint Backlog Execution"}</h4>
                  <p>{lang === "vi" ? "Nếu được duyệt, cập nhật PRD v1.x, tạo Jira Ticket có gắn nhãn [CR-ID] và đưa vào Sprint Planning kế tiếp theo đúng quy trình." : "Upon sign-off, update PRD versioning, spawn Jira tickets tagged with [CR-ID], and schedule into subsequent Sprint Planning."}</p>
                </div>
              </div>
            </div>

            <div className="pm-cr-quote">
              <div className="pm-quote-icon">
                <Sparkles size={16} />
              </div>
              <p>
                <strong>{lang === "vi" ? "Nguyên tắc điều phối của tôi:" : "My PM Governance Motto:"}</strong>{" "}
                {lang === "vi"
                  ? "«Khách hàng luôn có quyền thay đổi yêu cầu, nhưng PM có nghĩa vụ giúp khách hàng nhìn thấy rõ cái giá về thời gian, chi phí và chất lượng trước khi bấm nút thay đổi.»"
                  : "“Stakeholders always have the right to change requirements, but a strong PM has the duty to make the cost, time, and quality trade-offs crystal clear before any button is pressed.”"}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: RISK MANAGEMENT MATRIX */}
      {activeTab === "risk-matrix" && (
        <div className="pm-tab-content">
          <div className="pm-risk-table-card">
            <div className="pm-risk-head">
              <div className="pm-risk-icon-badge">
                <AlertTriangle size={22} />
              </div>
              <div>
                <h3>{lang === "vi" ? "Ma Trận Quản Trị Rủi Ro Kỹ Thuật & Tiến Độ (Risk Matrix)" : "Technical & Schedule Risk Mitigation Matrix"}</h3>
                <p>
                  {lang === "vi"
                    ? "Tư duy quản trị chủ động: Dự đoán trước các điểm nghẽn có thể xảy ra và chuẩn bị sẵn phương án ứng phó (Mitigation Strategy) ngay từ đầu dự án."
                    : "Proactive risk mitigation: Anticipating potential delivery bottlenecks and preparing defensive contingency plans before they escalate."}
                </p>
              </div>
            </div>

            <div className="pm-risk-table-wrapper">
              <table className="pm-risk-table">
                <thead>
                  <tr>
                    <th>{lang === "vi" ? "Kịch bản Rủi ro" : "Risk Scenario"}</th>
                    <th>{lang === "vi" ? "Mức độ / Xác suất" : "Severity / Likelihood"}</th>
                    <th>{lang === "vi" ? "Tác động tiêu cực" : "Potential Impact"}</th>
                    <th>{lang === "vi" ? "Chiến lược Ứng phó của PM (Mitigation Plan)" : "PM Mitigation Strategy"}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <strong>{lang === "vi" ? "Khách hàng đổi ý / Thêm tính năng giữa Sprint" : "Mid-Sprint Scope Creep"}</strong>
                      <span className="pm-risk-category">{lang === "vi" ? "Phạm vi dự án" : "Scope Risk"}</span>
                    </td>
                    <td>
                      <span className="pm-severity-badge high">{lang === "vi" ? "Cao (High)" : "High"}</span>
                    </td>
                    <td>{lang === "vi" ? "Gây nhiễu loạn team Dev, vỡ cam kết Sprint Goal, trễ hạn bàn giao." : "Disrupts developer velocity, fractures sprint goal, delays milestone."}</td>
                    <td>
                      <strong>{lang === "vi" ? "Chặn đứng tại Daily Standup:" : "Strict CR Protocol:"}</strong>{" "}
                      {lang === "vi"
                        ? "Giải thích quy định Scope Freeze. Đưa yêu cầu vào danh sách Change Log và hẹn thảo luận tại buổi Backlog Refinement kế tiếp."
                        : "Enforce Scope Freeze. Move request to Change Log and assess trade-offs at next Backlog Refinement."}
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <strong>{lang === "vi" ? "Dev bị nghẽn kỹ thuật / Trễ hạn Task trọng yếu" : "Technical Blocker on Critical Path"}</strong>
                      <span className="pm-risk-category">{lang === "vi" ? "Tiến độ kỹ thuật" : "Schedule Risk"}</span>
                    </td>
                    <td>
                      <span className="pm-severity-badge medium">{lang === "vi" ? "Trung bình" : "Medium"}</span>
                    </td>
                    <td>{lang === "vi" ? "Tạo nút thắt cổ chai, kéo dài thời gian chờ đợi của QA và các tính năng phụ thuộc." : "Creates bottleneck on dependent modules and QA testing schedule."}</td>
                    <td>
                      <strong>{lang === "vi" ? "Phát hiện sớm qua Burndown:" : "Early Detection:"}</strong>{" "}
                      {lang === "vi"
                        ? "Phát hiện sau 24h qua Daily Standup; triệu tập họp kỹ thuật nhanh 15p với Tech Lead; tái phân bổ dev hoặc phân rã task thành các phần khả thi để unblock."
                        : "Detect within 24h via Standup; convene 15-min tech pairing with Senior Lead; split task to unblock dependent streams."}
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <strong>{lang === "vi" ? "Sự cố API bên thứ 3 (Thanh toán / Logistics)" : "Third-Party API Outage or Delay"}</strong>
                      <span className="pm-risk-category">{lang === "vi" ? "Tích hợp hệ thống" : "Integration Risk"}</span>
                    </td>
                    <td>
                      <span className="pm-severity-badge high">{lang === "vi" ? "Cao (High)" : "High"}</span>
                    </td>
                    <td>{lang === "vi" ? "Không thể test luồng end-to-end, rủi ro lỗi thanh toán hoặc gián đoạn luồng vận đơn." : "Blocks end-to-end testing, risks payment failures or logistics tracking loss."}</td>
                    <td>
                      <strong>{lang === "vi" ? "Hợp đồng OpenAPI & Mock Server:" : "Mock Contracts & Fallbacks:"}</strong>{" "}
                      {lang === "vi"
                        ? "Quy định hợp đồng OpenAPI 3.0 từ Phase 2; dựng Mock Server trên Postman/MSW để Dev/QA tiếp tục làm việc độc lập; thiết kế cơ chế Retry/Queue dự phòng."
                        : "Mandate OpenAPI 3.0 contracts in Phase 2; deploy Postman Mock Server for decoupled dev/QA; design idempotent queues & retries."}
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <strong>{lang === "vi" ? "Khách hàng không bố trí người test UAT đúng hạn" : "Client Delayed UAT Participation"}</strong>
                      <span className="pm-risk-category">{lang === "vi" ? "Giao tiếp & Nghiệm thu" : "Stakeholder Risk"}</span>
                    </td>
                    <td>
                      <span className="pm-severity-badge medium">{lang === "vi" ? "Trung bình" : "Medium"}</span>
                    </td>
                    <td>{lang === "vi" ? "Trì hoãn ngày Go-Live chính thức, ứ đọng chi phí nhân sự duy trì môi trường UAT." : "Pushes back go-live cut-over date, prolongs staging maintenance overhead."}</td>
                    <td>
                      <strong>{lang === "vi" ? "Kịch bản mẫu & Khung giờ cố định:" : "Pre-built Scripts & Calendar Lock:"}</strong>{" "}
                      {lang === "vi"
                        ? "Gửi trước bộ Test Scenarios kèm video demo ngắn; đặt lịch cố định 1 buổi 45 phút test trực tiếp có PM đồng hành hướng dẫn ghi nhận kết quả tại chỗ."
                        : "Deliver pre-built UAT scripts with short loom walk-throughs; schedule dedicated 45-min guided review session with PM."}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* Recruiter Action Bar: Download Official BA / PO CV */}
      <div className="pm-cv-action-card">
        <div className="pm-cv-action-left">
          <div className="pm-cv-icon-wrap">
            <FileText size={22} />
          </div>
          <div>
            <h4>{lang === "vi" ? "Hồ Sơ Năng Lực & CV BA / PO Chính Thức" : "Official Business Analyst & Product Owner Resume"}</h4>
            <p>
              {lang === "vi"
                ? "Tải bản CV chính thức (2 trang A4 chuẩn) thể hiện năng lực Kỹ sư Hệ thống Thông tin (GPA 3.26), kỹ năng phân tích nghiệp vụ, điều phối Sprint tại HomeNest và tối ưu quy trình tại J&T Express."
                : "Download official 2-page A4 resume featuring Information Systems Engineering degree (GPA 3.26), requirements analysis, sprint delivery at HomeNest, and operational optimization at J&T Express."}
            </p>
          </div>
        </div>

        <div className="pm-cv-action-buttons">
          <a
            href={lang === "vi" ? "/VoVanTuTai_Business_Analyst_CV_Tieng_Viet.pdf" : "/VoVanTuTai_Business_Analyst_CV.pdf"}
            download
            className="pm-btn-primary"
          >
            <Download size={15} aria-hidden="true" />
            <span>{lang === "vi" ? "Tải CV BA / PO (PDF)" : "Download BA / PO Resume (PDF)"}</span>
          </a>
          <a
            href={lang === "vi" ? "/po-ba-cv-vi.html" : "/cv.html"}
            target="_blank"
            rel="noreferrer"
            className="pm-btn-secondary"
          >
            <ExternalLink size={15} aria-hidden="true" />
            <span>{lang === "vi" ? "Xem Bản Web Tương Tác" : "View Interactive Web"}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
