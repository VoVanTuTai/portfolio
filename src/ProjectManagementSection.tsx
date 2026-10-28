import React, { useState } from "react";
import {
  AlertTriangle,
  ArrowRight,
  BriefcaseBusiness,
  Calendar,
  CheckCircle2,
  ChevronRight,
  Clock,
  Cpu,
  Download,
  ExternalLink,
  FileCheck2,
  FileText,
  GitBranch,
  Layers,
  Milestone,
  RefreshCw,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Users2,
  Workflow,
} from "lucide-react";

interface ProjectManagementSectionProps {
  lang: "vi" | "en";
}

export function ProjectManagementSection({ lang }: ProjectManagementSectionProps) {
  const [activeStage, setActiveStage] = useState<number>(0);
  const [activeTab, setActiveTab] = useState<"lifecycle" | "cr-flow" | "risk-matrix">("lifecycle");

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
            className={`pm-tab-btn${activeTab === "cr-flow" ? " is-active" : ""}`}
            onClick={() => setActiveTab("cr-flow")}
            role="tab"
            aria-selected={activeTab === "cr-flow"}
          >
            <RefreshCw size={15} aria-hidden="true" />
            <span>{lang === "vi" ? "2. Kiểm soát Scope & Change Request" : "2. Scope & Change Request Control"}</span>
          </button>
          <button
            type="button"
            className={`pm-tab-btn${activeTab === "risk-matrix" ? " is-active" : ""}`}
            onClick={() => setActiveTab("risk-matrix")}
            role="tab"
            aria-selected={activeTab === "risk-matrix"}
          >
            <ShieldAlert size={15} aria-hidden="true" />
            <span>{lang === "vi" ? "3. Ma trận Quản trị Rủi ro" : "3. Risk Management Matrix"}</span>
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

      {/* TAB 2: CHANGE REQUEST GOVERNANCE FLOW */}
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

      {/* Recruiter Action Bar: Download Dedicated PM CV */}
      <div className="pm-cv-action-card">
        <div className="pm-cv-action-left">
          <div className="pm-cv-icon-wrap">
            <FileText size={22} />
          </div>
          <div>
            <h4>{lang === "vi" ? "Hồ Sơ CV Quản Lý Dự Án & Project Coordinator" : "Project Manager & Project Coordinator Resume"}</h4>
            <p>
              {lang === "vi"
                ? "Tải bản CV chuẩn mực (2 trang A4) thể hiện năng lực Kỹ sư Hệ thống Thông tin (GPA 3.26), kinh nghiệm điều phối Sprint tại HomeNest và tối ưu vận hành tại J&T Express."
                : "Download official 2-page A4 resume featuring Information Systems Engineering degree (GPA 3.26), HomeNest sprint coordination, and J&T Express operational analytics."}
            </p>
          </div>
        </div>

        <div className="pm-cv-action-buttons">
          <a
            href={lang === "vi" ? "/VoVanTuTai_IT_Business_Analyst_CV_Tong_Quat.pdf" : "/VoVanTuTai_IT_Business_Analyst_Resume_General.pdf"}
            download
            className="pm-btn-primary"
          >
            <Download size={15} aria-hidden="true" />
            <span>{lang === "vi" ? "Tải CV PM (PDF)" : "Download PM Resume (PDF)"}</span>
          </a>
          <a
            href={lang === "vi" ? "/cv-general.html" : "/cv-general-en.html"}
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
