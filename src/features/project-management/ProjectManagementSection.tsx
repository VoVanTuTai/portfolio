import { Fragment, useState, type CSSProperties } from "react";
import {
  AlertTriangle,
  ArrowRight,
  BriefcaseBusiness,
  Calendar,
  CheckCircle2,
  ChevronRight,
  Clock,
  Download,
  ExternalLink,
  FileCheck2,
  FileText,
  Filter,
  RefreshCw,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  Users2,
  Workflow,
  Zap,
} from "lucide-react";
import type { GanttFilter, PmTabId, ProjectManagementSectionProps } from "@/types";
import {
  ganttTasks,
  pmChangeRequestSteps,
  pmGovernancePillars,
  pmLifecycleStages,
  pmRiskMatrix,
} from "@/data/pm.data";

export function ProjectManagementSection({ lang }: ProjectManagementSectionProps) {
  const [activeStage, setActiveStage] = useState<number>(0);
  const [activeTab, setActiveTab] = useState<PmTabId>("lifecycle");
  const [ganttFilter, setGanttFilter] = useState<GanttFilter>("all");
  const [selectedTaskId, setSelectedTaskId] = useState<string>("wbs-2.3");

  const filteredTasks = ganttTasks.filter((task) => {
    if (ganttFilter === "critical") return task.isCritical;
    if (ganttFilter === "sprint") return task.isSprint;
    if (ganttFilter === "milestone") return task.isMilestone;
    return true;
  });

  const selectedTask = ganttTasks.find((t) => t.id === selectedTaskId) || ganttTasks[6];
  const currentStage = pmLifecycleStages[activeStage];
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
            {pmLifecycleStages.map((stage, idx) => {
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
                    <strong className="pm-step-title">{stage.shortTitle[lang]}</strong>
                    <span className="pm-step-badge-tag">{stage.badge[lang]}</span>
                  </div>
                  {idx < pmLifecycleStages.length - 1 && (
                    <div className="pm-pipeline-connector" aria-hidden="true">
                      <ChevronRight size={16} />
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Active Stage Detail Card */}
          <div className="pm-stage-detail-card" style={{ "--stage-accent": currentStage.color } as CSSProperties}>
            <div className="pm-detail-head">
              <div className="pm-detail-title-group">
                <div className="pm-stage-icon-large" style={{ backgroundColor: `${currentStage.color}15`, color: currentStage.color }}>
                  <CurrentIcon size={26} aria-hidden="true" />
                </div>
                <div>
                  <div className="pm-stage-meta-row">
                    <span className="pm-stage-index-badge">{lang === "vi" ? `Giai đoạn ${currentStage.num}` : `Phase ${currentStage.num}`}</span>
                    <span className="pm-stage-timeline-badge">{currentStage.badge[lang]}</span>
                  </div>
                  <h3 className="pm-stage-full-title">{currentStage.title[lang]}</h3>
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
              <p>{currentStage.objective[lang]}</p>
            </div>

            <div className="pm-detail-grid">
              {/* Column 1: PM Actions */}
              <div className="pm-detail-col">
                <div className="pm-col-header">
                  <BriefcaseBusiness size={16} aria-hidden="true" />
                  <h4>{lang === "vi" ? "Trách nhiệm & Hành động của PM" : "Key PM Responsibilities & Actions"}</h4>
                </div>
                <ul className="pm-action-list">
                  {currentStage.actions[lang].map((act, i) => (
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
                  {currentStage.deliverables[lang].map((del, i) => (
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
                {pmGovernancePillars.map((pillar) => (
                  <div className="pm-gov-card" key={pillar.badge}>
                    <div className={`pm-gov-badge ${pillar.badgeClass}`}>{pillar.badge}</div>
                    <h5>{pillar.title[lang]}</h5>
                    <p>{pillar.description[lang]}</p>
                  </div>
                ))}
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
              {pmChangeRequestSteps.map((crStep, idx) => (
                <Fragment key={crStep.step}>
                  <div className="pm-cr-step">
                    <div className="pm-cr-step-num">{crStep.step}</div>
                    <div className="pm-cr-step-body">
                      <span className={`pm-cr-tag ${crStep.tagClass}`}>{crStep.tag[lang]}</span>
                      <h4>{crStep.title[lang]}</h4>
                      <p>{crStep.description[lang]}</p>
                    </div>
                  </div>
                  {idx < pmChangeRequestSteps.length - 1 && (
                    <div className="pm-cr-arrow" aria-hidden="true">
                      <ArrowRight size={20} />
                    </div>
                  )}
                </Fragment>
              ))}
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
                  {pmRiskMatrix.map((risk) => (
                    <tr key={risk.scenario.en}>
                      <td>
                        <strong>{risk.scenario[lang]}</strong>
                        <span className="pm-risk-category">{risk.category[lang]}</span>
                      </td>
                      <td>
                        <span className={`pm-severity-badge ${risk.severityClass}`}>{risk.severity[lang]}</span>
                      </td>
                      <td>{risk.impact[lang]}</td>
                      <td>
                        <strong>{risk.mitigationLead[lang]}</strong> {risk.mitigationDetail[lang]}
                      </td>
                    </tr>
                  ))}
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

export default ProjectManagementSection;
