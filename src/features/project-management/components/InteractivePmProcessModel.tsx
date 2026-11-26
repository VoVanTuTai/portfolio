import { useState, useEffect, useRef } from "react";
import {
  Calendar,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Clock,
  DollarSign,
  FileCheck2,
  Layers,
  Pause,
  Play,
  RotateCcw,
  ShieldAlert,
  ShieldCheck,
  TrendingUp,
  Users2,
  Workflow,
} from "lucide-react";
import type { Language } from "@/types";

interface InteractivePmProcessModelProps {
  lang: Language;
}

interface ProcessStage {
  id: string;
  wbs: string;
  num: number;
  title: string;
  titleEn: string;
  timeline: string;
  timelineEn: string;
  status: "collected" | "in_progress" | "pending";
  billingPercent: number;
  billingAmountUsd: number;
  billingAmountVnd: string;
  billingCondition: string;
  billingConditionEn: string;
  pmBillingStrategy: string;
  pmBillingStrategyEn: string;
  deliverables: string[];
  deliverablesEn: string[];
  dod: string;
  dodEn: string;
  raci: {
    r: string;
    a: string;
    c: string;
    i: string;
  };
  keyRisk: string;
  keyRiskEn: string;
  mitigation: string;
  mitigationEn: string;
}

const PROCESS_STAGES: ProcessStage[] = [
  {
    id: "stage-1",
    wbs: "WBS 1.0",
    num: 1,
    title: "Khởi Động & Ký Kết Hợp Đồng",
    titleEn: "Project Initiation & Charter",
    timeline: "Tuần 1.0 (Ngay sau ký HĐ)",
    timelineEn: "Week 1.0 (Contract Signing)",
    status: "collected",
    billingPercent: 25,
    billingAmountUsd: 30000,
    billingAmountVnd: "750 Triệu VNĐ",
    billingCondition: "Ký kết Master Service Agreement (MSA) + Phê duyệt Project Charter & Ma trận RACI.",
    billingConditionEn: "Signed Master Service Agreement + Approved Project Charter & RACI Matrix.",
    pmBillingStrategy: "Tổ chức Kick-off trong 48h, chốt kênh làm việc chính thức và giữ chân Core Dev để giải ngân cọc khởi động.",
    pmBillingStrategyEn: "Execute Kick-off within 48h, lock communication channels, and secure core staffing.",
    deliverables: [
      "Project Charter v1.0 có chữ ký 2 bên",
      "Ma trận phân nhiệm RACI & Kế hoạch truyền thông",
      "Môi trường Cloud Staging & Kho mã nguồn Git",
    ],
    deliverablesEn: [
      "Signed Project Charter v1.0",
      "RACI Responsibility Matrix & Comms Plan",
      "Cloud Staging Environment & Git Repository",
    ],
    dod: "100% Stakeholders tham gia buổi Kick-off và thống nhất nguyên tắc bàn giao dự án.",
    dodEn: "100% Key Stakeholders attended kick-off and approved delivery baseline principles.",
    raci: {
      r: "Senior PM",
      a: "Project Sponsor / Ban Giám Đốc",
      c: "Tech Lead & Lead BA",
      i: "Toàn bộ thành viên Core Team",
    },
    keyRisk: "Chậm trễ ký cọc làm gián đoạn việc setup hạ tầng cloud và giữ chỗ nhân sự chủ chốt.",
    keyRiskEn: "Delayed mobilization deposit stalls cloud provisioning and resource allocation.",
    mitigation: "Soạn sẵn mẫu hợp đồng chuẩn hóa và điều khoản thanh toán Net-7 rõ ràng.",
    mitigationEn: "Pre-aligned MSA contract terms with strict Net-7 payment window.",
  },
  {
    id: "stage-2",
    wbs: "WBS 2.0",
    num: 2,
    title: "Khóa Phạm Vi (Scope Freeze) & UI/UX",
    titleEn: "Scope Freeze & Prototype UX",
    timeline: "Tuần 3.5 (Sau 3.5 tuần tập trung)",
    timelineEn: "Week 3.5 (End of Sprint 0)",
    status: "collected",
    billingPercent: 25,
    billingAmountUsd: 30000,
    billingAmountVnd: "750 Triệu VNĐ",
    billingCondition: "Biên bản nghiệm thu Khóa Phạm Vi (Scope Freeze Protocol) + PRD v1.0 + 45 Màn hình Figma UI/UX.",
    billingConditionEn: "Signed Scope Freeze Protocol + Approved PRD v1.0 + 45 Figma Wireframe Screens.",
    pmBillingStrategy: "MỐC BẢO VỆ DÒNG TIỀN QUAN TRỌNG NHẤT! Dồn toàn lực BA & Designer chốt sớm trong 3 tuần đầu. Khách ký vừa mở khóa 750 triệu, vừa khóa chặt phát sinh ngoài phạm vi (Scope Creep).",
    pmBillingStrategyEn: "THE PIVOTAL CASH PROTECTION GATE! Focus BA & UI resources to sign off early, securing $30,000 cash collection and locking out scope creep.",
    deliverables: [
      "Tài liệu Đặc tả Yêu cầu PRD / SRS v1.0 chi tiết",
      "Bộ UI Design System 45 màn hình Figma tương tác",
      "Biên bản Khóa Baseline Phạm vi có chữ ký Sponsor",
    ],
    deliverablesEn: [
      "Approved PRD / SRS v1.0 Specification",
      "Interactive 45-screen Figma UI Design System",
      "Formal Signed Scope Freeze Protocol",
    ],
    dod: "Khách hàng duyệt 100% kịch bản User Flow và ký cam kết không thay đổi logic nghiệp vụ trong Phase 1.",
    dodEn: "Client approved all user flows and signed commitment preventing ad-hoc scope additions.",
    raci: {
      r: "Lead Business Analyst & UI/UX Designer",
      a: "Senior PM & Client Sponsor",
      c: "Solution Architect",
      i: "Đội ngũ Development & QA",
    },
    keyRisk: "Khách hàng thường 'tiện mồm' đòi thêm tính năng. Nếu PM không khóa Scope, mốc này sẽ bị kéo dài nhiều tháng làm cạn dòng tiền.",
    keyRiskEn: "Clients request ad-hoc features. Without strict Scope Freeze, invoicing stalls for months.",
    mitigation: "Áp dụng quy tắc vàng: Ghi nhận yêu cầu mới vào Backlog Phase 2, phát hành Change Request báo giá riêng.",
    mitigationEn: "Route feature requests to Phase 2 Backlog with formal paid Change Requests.",
  },
  {
    id: "stage-3",
    wbs: "WBS 3.0",
    num: 3,
    title: "Phát Triển Core Engine & Demo Alpha",
    titleEn: "Core Architecture & Alpha Demo",
    timeline: "Tuần 7.0 (Kết thúc Sprint 2)",
    timelineEn: "Week 7.0 (End of Sprint 2)",
    status: "in_progress",
    billingPercent: 25,
    billingAmountUsd: 30000,
    billingAmountVnd: "750 Triệu VNĐ",
    billingCondition: "Biên bản nghiệm thu kỹ thuật Demo Alpha + Camunda Zeebe Engine chạy thực tế + API Swagger.",
    billingConditionEn: "Alpha Demo Acceptance Protocol + Running Camunda Engine + Swagger API Contract.",
    pmBillingStrategy: "CỔNG NGHIỆM THU HIỆN TẠI: Tổ chức buổi Demo trực tiếp với Giám đốc khách hàng, minh họa dòng dữ liệu đơn hàng chạy thực tế để khách ký nghiệm thu kỹ thuật đợt 3 đúng tiến độ.",
    pmBillingStrategyEn: "CURRENT ACTIVE GATE: Conduct live demo with executive sponsors, demonstrating order workflow to secure technical payment approval.",
    deliverables: [
      "Camunda Zeebe Workflow State Machine 7 trạng thái",
      "Cơ sở dữ liệu PostgreSQL chuẩn 3NF và 12 B-Tree Indexes",
      "Tập hợp 28 RESTful APIs trên Swagger Contract",
    ],
    deliverablesEn: [
      "7-State Camunda Zeebe Workflow Engine",
      "Normalized 3NF PostgreSQL Database Schema",
      "Complete 28 RESTful APIs with Swagger Contract",
    ],
    dod: "Đơn hàng mẫu chạy xuyên suốt từ khởi tạo đến điều phối tự động trong < 2.5 giây không lỗi.",
    dodEn: "Sample order executes end-to-end through automated dispatch in < 2.5s with zero errors.",
    raci: {
      r: "Tech Lead & Core Backend Developers",
      a: "Senior PM",
      c: "Database Administrator & DevOps Lead",
      i: "Client Product Team",
    },
    keyRisk: "Tích hợp cổng thanh toán bên thứ ba bị trễ sandbox làm chậm lịch demo.",
    keyRiskEn: "Third-party payment sandbox integration lag risks missing demo milestone.",
    mitigation: "Dựng Postman Mock Server giả lập webhook để team dev không phụ thuộc bên ngoài.",
    mitigationEn: "Deployed Postman Mock Server contracts to bypass third-party sandbox dependencies.",
  },
  {
    id: "stage-4",
    wbs: "WBS 4.0",
    num: 4,
    title: "Nghiệm Thu UAT & Triển Khai Golive",
    titleEn: "UAT Acceptance & Production Golive",
    timeline: "Tuần 12.0 (Kết thúc Sprint 4)",
    timelineEn: "Week 12.0 (End of Sprint 4)",
    status: "pending",
    billingPercent: 20,
    billingAmountUsd: 24000,
    billingAmountVnd: "600 Triệu VNĐ",
    billingCondition: "Biên bản nghiệm thu UAT 100% Ký Tươi + Zero Blocker Bug + Chạy Golive Production.",
    billingConditionEn: "Signed Formal UAT Acceptance Protocol + Zero Blocker Bugs + Live Production Release.",
    pmBillingStrategy: "Tổ chức phiên hướng dẫn trực tiếp cho đội ngũ khách hàng. Phân loại triệt để: bug thật sửa ngay, tính năng phát sinh chuyển Phase 2 để bảo vệ ngày xuất hóa đơn.",
    pmBillingStrategyEn: "Lead guided UAT sessions with client operators. Strict bug triage: fix blockers immediately, move enhancements to Phase 2.",
    deliverables: [
      "Báo cáo kiểm thử 180 kịch bản UAT (100% Pass)",
      "Biên bản Nghiệm thu UAT có chữ ký người đại diện",
      "Hệ thống Production Golive hoàn tất cấu hình CDN & SSL",
    ],
    deliverablesEn: [
      "180 UAT Test Scenarios Verification Report",
      "Formal Signed UAT Acceptance Protocol",
      "Production Environment Live with CDN & SSL",
    ],
    dod: "Toàn bộ giao dịch vận hành thực tế thông suốt trong 72 giờ đầu tiên không phát sinh lỗi nghiêm trọng.",
    dodEn: "Real production transactions running seamlessly for 72 consecutive hours without Sev-1 issues.",
    raci: {
      r: "QA Lead, DevOps Lead & Client Business Team",
      a: "Senior PM & Steering Committee",
      c: "All Developers",
      i: "Toàn bộ người dùng cuối hệ thống",
    },
    keyRisk: "Khách vin vào lỗi nhỏ giao diện để trì hoãn ký biên bản nghiệm thu.",
    keyRiskEn: "Clients cite minor cosmetic issues to delay formal acceptance signature.",
    mitigation: "Quy định rõ trong Hợp đồng: Chỉ lỗi Severity 1 & 2 mới chặn nghiệm thu; lỗi nhỏ xử lý trong bảo hành.",
    mitigationEn: "Enforce contractual SLA: Only Sev 1 & 2 block acceptance; cosmetic items resolved in warranty.",
  },
  {
    id: "stage-5",
    wbs: "WBS 5.0",
    num: 5,
    title: "Bảo Hành SLA & Quyết Toán Hợp Đồng",
    titleEn: "Hypercare Warranty & Settlement",
    timeline: "Tuần 16.0 (Sau 30 ngày Hypercare)",
    timelineEn: "Week 16.0 (After 30-Day Hypercare)",
    status: "pending",
    billingPercent: 5,
    billingAmountUsd: 6000,
    billingAmountVnd: "150 Triệu VNĐ",
    billingCondition: "Biên bản thanh lý hợp đồng sau 30 ngày trực chiến SLA 99.9% + Bàn giao tài liệu SOP.",
    billingConditionEn: "Contract Liquidation Protocol after 30-day Hypercare + System Handover Manuals.",
    pmBillingStrategy: "Bàn giao mã nguồn sạch và tài liệu vận hành, đóng dự án đúng thời hạn để mở ra cơ hội ký hợp đồng bảo trì thường niên (Opex hàng năm).",
    pmBillingStrategyEn: "Hand over clean repository and SOP docs, closing project on time and converting client to annual maintenance contract.",
    deliverables: [
      "Biên bản Thanh lý Hợp đồng Master Service Agreement",
      "Bộ tài liệu Quy trình Vận hành Chuẩn (SOP Handover)",
      "Đề xuất Hợp đồng Hỗ trợ Kỹ thuật & Bảo trì Định kỳ Phase 2",
    ],
    deliverablesEn: [
      "Final Master Contract Liquidation Protocol",
      "Standard Operating Procedures (SOP Handover)",
      "Annual Maintenance SLA & Phase 2 Proposal",
    ],
    dod: "Tất cả hồ sơ chứng từ thanh toán được kế toán 2 bên đối soát khớp 100% không còn công nợ tồn đọng.",
    dodEn: "100% financial records and invoice reconciliations cleared with zero outstanding debt.",
    raci: {
      r: "Senior PM & Account Manager",
      a: "Ban Giám Đốc 2 Bên",
      c: "Finance / Accounting Department",
      i: "Toàn bộ dự án",
    },
    keyRisk: "Thủ tục giấy tờ hành chính thanh lý kéo dài nếu hồ sơ nghiệm thu trước đó bị thất lạc.",
    keyRiskEn: "Administrative delays in final settlement if previous milestone artifacts are mismanaged.",
    mitigation: "Lưu trữ số hóa toàn bộ biên bản có chữ ký trên Google Drive / DMS từ ngày đầu tiên.",
    mitigationEn: "Digitize and archive all signed milestone protocols in central repository from Day 1.",
  },
];

export function InteractivePmProcessModel({ lang }: InteractivePmProcessModelProps) {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(2); // Default to current active gate (Stage 3)
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const playbackSpeed = 3500; // 3.5s per stage
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const activeStage = PROCESS_STAGES[activeStepIndex];

  // Auto-cycle simulation when isPlaying is true
  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setTimeout(() => {
        setActiveStepIndex((prev) => (prev + 1) % PROCESS_STAGES.length);
      }, playbackSpeed);
    }
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [isPlaying, activeStepIndex, playbackSpeed]);

  const handleTogglePlay = () => {
    setIsPlaying((prev) => !prev);
  };

  const handleNext = () => {
    setIsPlaying(false);
    setActiveStepIndex((prev) => (prev + 1) % PROCESS_STAGES.length);
  };

  const handlePrev = () => {
    setIsPlaying(false);
    setActiveStepIndex((prev) => (prev - 1 + PROCESS_STAGES.length) % PROCESS_STAGES.length);
  };

  const handleReset = () => {
    setIsPlaying(false);
    setActiveStepIndex(0);
  };

  // Financial summary metrics
  const totalContract = 120000;
  const collectedAmount = 60000; // Stage 1 (30k) + Stage 2 (30k)
  const collectedPercent = 50;

  return (
    <div className="interactive-pm-model">
      {/* 1. Header Overview & Control Bar */}
      <div className="pm-model-head">
        <div className="pm-model-title-group">
          <div className="pm-model-tag">
            <Workflow size={14} />
            <span>{lang === "vi" ? "MÔ HÌNH ĐỘNG QUY TRÌNH QUẢN TRỊ DỰ ÁN" : "INTERACTIVE DELIVERY PROCESS MODEL"}</span>
          </div>
          <h3 className="pm-model-title">
            {lang === "vi"
              ? "Quy Trình Điều Phối Bàn Giao & Bảo Vệ Dòng Tiền (End-to-End Delivery Simulation)"
              : "End-to-End Delivery Simulation & Cash Flow Governance Model"}
          </h3>
          <p className="pm-model-subtitle">
            {lang === "vi"
              ? "Mô phỏng toàn diện 5 giai đoạn sinh tử của một dự án phần mềm doanh nghiệp: Từ khởi tạo, khóa cứng phạm vi (Scope Freeze), phát triển Sprint, đến nghiệm thu UAT và quyết toán hợp đồng."
              : "Interactive simulation mapping 5 critical delivery stages directly to cash flow collection gates, Scope Freeze protocols, and UAT acceptance criteria."}
          </p>
        </div>

        {/* Playback Controls */}
        <div className="pm-model-controls">
          <button
            type="button"
            className="pm-ctrl-btn"
            onClick={handlePrev}
            title={lang === "vi" ? "Giai đoạn trước" : "Previous Stage"}
          >
            <ChevronLeft size={16} />
          </button>

          <button
            type="button"
            className={`pm-ctrl-btn primary${isPlaying ? " is-playing" : ""}`}
            onClick={handleTogglePlay}
            title={isPlaying ? (lang === "vi" ? "Tạm dừng" : "Pause") : (lang === "vi" ? "Chạy mô phỏng tự động" : "Play Simulation")}
          >
            {isPlaying ? <Pause size={15} /> : <Play size={15} />}
            <span>{isPlaying ? (lang === "vi" ? "Tạm Dừng" : "Pause") : (lang === "vi" ? "Chạy Mô Phỏng" : "Auto Play")}</span>
          </button>

          <button
            type="button"
            className="pm-ctrl-btn"
            onClick={handleNext}
            title={lang === "vi" ? "Giai đoạn tiếp theo" : "Next Stage"}
          >
            <ChevronRight size={16} />
          </button>

          <button
            type="button"
            className="pm-ctrl-btn reset"
            onClick={handleReset}
            title={lang === "vi" ? "Khởi động lại từ Bước 1" : "Reset to Stage 1"}
          >
            <RotateCcw size={14} />
          </button>
        </div>
      </div>

      {/* 2. Executive Financial & Health KPI Strip */}
      <div className="pm-kpi-summary-strip">
        <div className="pm-strip-card">
          <span className="strip-lbl">{lang === "vi" ? "TỔNG GIÁ TRỊ HỢP ĐỒNG" : "TOTAL CONTRACT VALUE"}</span>
          <strong className="strip-val">${totalContract.toLocaleString()} USD</strong>
          <span className="strip-sub">~ 2.95 Tỷ VNĐ (Dự án Nexus OMS)</span>
        </div>

        <div className="pm-strip-card success">
          <span className="strip-lbl">{lang === "vi" ? "TIỀN ĐÃ THU VỀ TÀI KHOẢN" : "CASH COLLECTED"}</span>
          <strong className="strip-val text-green">${collectedAmount.toLocaleString()} USD ({collectedPercent}%)</strong>
          <span className="strip-sub text-green">1.5 Tỷ VNĐ (Đợt 1 & Đợt 2 thu đúng hạn)</span>
        </div>

        <div className="pm-strip-card highlight">
          <span className="strip-lbl">{lang === "vi" ? "CỔNG NGHIỆM THU HIỆN TẠI" : "CURRENT BILLING GATE"}</span>
          <strong className="strip-val text-blue">{lang === "vi" ? "Đợt 3: $30,000 (25%)" : "Gate 3: $30,000 (25%)"}</strong>
          <span className="strip-sub">Tuần 7.0 (Nghiệm thu Alpha Core Engine)</span>
        </div>

        <div className="pm-strip-card">
          <span className="strip-lbl">{lang === "vi" ? "SỨC KHỎE ĐIỀU PHỐI" : "DELIVERY HEALTH"}</span>
          <strong className="strip-val text-indigo">On Schedule (CPI: 1.05)</strong>
          <span className="strip-sub">Đường găng đúng hạn, Zero Scope Creep</span>
        </div>
      </div>

      {/* 3. Interactive Animated Pipeline Track */}
      <div className="pm-interactive-pipeline">
        <div className="pipeline-track-header">
          <span className="pipeline-track-label">
            {lang === "vi" ? "TIẾN TRÌNH ĐIỀU PHỐI 5 GIAI ĐOẠN (BẤM VÀO TỪNG BƯỚC ĐỂ XEM CHI TIẾT):" : "5-STAGE DELIVERY PIPELINE (CLICK ANY STAGE TO INSPECT):"}
          </span>
          <span className="pipeline-active-badge">
            {lang === "vi" ? `Đang chọn: Bước ${activeStage.num} / 5` : `Viewing: Stage ${activeStage.num} / 5`}
          </span>
        </div>

        {/* Visual Nodes Track */}
        <div className="pipeline-nodes-container" role="tablist">
          {PROCESS_STAGES.map((stage, idx) => {
            const isSelected = idx === activeStepIndex;
            return (
              <button
                key={stage.id}
                type="button"
                className={`pipeline-node-card${isSelected ? " is-selected" : ""}${stage.status === "collected" ? " is-collected" : stage.status === "in_progress" ? " is-active-progress" : ""}`}
                onClick={() => {
                  setIsPlaying(false);
                  setActiveStepIndex(idx);
                }}
                role="tab"
                aria-selected={isSelected}
              >
                {/* Node Top Row: Number & Status Badge */}
                <div className="node-top-row">
                  <div className={`node-num-circle${isSelected ? " pulse" : ""}`}>
                    {stage.status === "collected" ? (
                      <CheckCircle2 size={13} />
                    ) : (
                      <span>{stage.num}</span>
                    )}
                  </div>
                  <span className={`node-status-tag ${stage.status}`}>
                    {stage.status === "collected" && (lang === "vi" ? "ĐÃ THU ĐỦ" : "COLLECTED")}
                    {stage.status === "in_progress" && (lang === "vi" ? "ĐANG LÀM" : "IN PROGRESS")}
                    {stage.status === "pending" && (lang === "vi" ? "CHỜ GOLIVE" : "UPCOMING")}
                  </span>
                </div>

                {/* Node Title & WBS */}
                <span className="node-wbs-tag">{stage.wbs}</span>
                <strong className="node-title">
                  {lang === "vi" ? stage.title : stage.titleEn}
                </strong>

                {/* Node Money Gate */}
                <div className="node-cash-gate">
                  <span className="gate-percent">{stage.billingPercent}%</span>
                  <span className="gate-amount">${stage.billingAmountUsd.toLocaleString()}</span>
                </div>

                {/* Node Timeline */}
                <span className="node-timeline-text">
                  <Clock size={11} />
                  <span>{lang === "vi" ? stage.timeline : stage.timelineEn}</span>
                </span>

                {/* Key Gate Tag for Stage 2 (Scope Freeze) */}
                {stage.id === "stage-2" && (
                  <span className="node-freeze-tag">
                    {lang === "vi" ? "MỐC THEN CHỐT" : "KEY GATE"}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Animated Connecting Flow Bar */}
        <div className="pipeline-flow-indicator" aria-hidden="true">
          <div
            className="flow-progress-bar"
            style={{ width: `${((activeStepIndex + 1) / PROCESS_STAGES.length) * 100}%` }}
          />
        </div>
      </div>

      {/* 4. Active Stage Detailed Inspection Dashboard (3 Focused Columns) */}
      <div className="stage-detail-inspector">
        {/* Header of Active Stage */}
        <div className="stage-inspector-head">
          <div className="inspector-title-left">
            <span className="inspector-wbs-badge">{activeStage.wbs} · GIAI ĐOẠN {activeStage.num} / 5</span>
            <h4 className="inspector-stage-title">
              {lang === "vi" ? activeStage.title : activeStage.titleEn}
            </h4>
            <span className="inspector-timeline-label">
              <Calendar size={13} />
              <span>{lang === "vi" ? activeStage.timeline : activeStage.timelineEn}</span>
            </span>
          </div>

          <div className="inspector-money-right">
            <span className="inspector-money-label">{lang === "vi" ? "GIÁ TRỊ XUẤT HÓA ĐƠN ĐỢT NÀY" : "INVOICE TRANCHE VALUE"}</span>
            <strong className="inspector-money-val">
              ${activeStage.billingAmountUsd.toLocaleString()} USD ({activeStage.billingPercent}%)
            </strong>
            <span className="inspector-money-vnd">~ {activeStage.billingAmountVnd}</span>
          </div>
        </div>

        {/* 3 Core Operational Columns */}
        <div className="stage-cards-grid">
          {/* Column 1: Sản phẩm bàn giao & Definition of Done */}
          <div className="inspector-card deliverable-card">
            <div className="card-header">
              <Layers size={16} color="#2563eb" />
              <h5>{lang === "vi" ? "1. Sản Phẩm Bàn Giao Kỹ Thuật" : "1. Technical Deliverables & DoD"}</h5>
            </div>

            <ul className="deliverables-checklist">
              {(lang === "vi" ? activeStage.deliverables : activeStage.deliverablesEn).map((item, i) => (
                <li key={i}>
                  <CheckCircle2 size={13} className="text-blue" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="dod-container">
              <span className="dod-title">{lang === "vi" ? "TIÊU CHÍ HOÀN THÀNH (DEFINITION OF DONE):" : "DEFINITION OF DONE (DoD):"}</span>
              <p className="dod-desc">{lang === "vi" ? activeStage.dod : activeStage.dodEn}</p>
            </div>
          </div>

          {/* Column 2: Cổng Dòng Tiền & Chiến Lược Của PM */}
          <div className="inspector-card billing-card">
            <div className="card-header">
              <DollarSign size={16} color="#15803d" />
              <h5>{lang === "vi" ? "2. Cổng Thanh Toán & Dòng Tiền" : "2. Cash Flow & Invoicing Gate"}</h5>
            </div>

            <div className="billing-condition-box">
              <div className="box-title-row">
                <FileCheck2 size={14} color="#15803d" />
                <span className="box-title">{lang === "vi" ? "ĐIỀU KIỆN ĐỂ KẾ TOÁN XUẤT HÓA ĐƠN:" : "INVOICE GATE PREREQUISITE:"}</span>
              </div>
              <p className="box-desc">{lang === "vi" ? activeStage.billingCondition : activeStage.billingConditionEn}</p>
            </div>

            <div className="pm-action-box">
              <div className="box-title-row">
                <TrendingUp size={14} color="#2563eb" />
                <span className="box-title">{lang === "vi" ? "CHIẾN LƯỢC ĐIỀU PHỐI CỦA SENIOR PM:" : "PM DELIVERY STRATEGY:"}</span>
              </div>
              <p className="box-desc">{lang === "vi" ? activeStage.pmBillingStrategy : activeStage.pmBillingStrategyEn}</p>
            </div>
          </div>

          {/* Column 3: Phân nhiệm RACI & Quản trị Rủi ro */}
          <div className="inspector-card governance-card">
            <div className="card-header">
              <Users2 size={16} color="#7c3aed" />
              <h5>{lang === "vi" ? "3. Ma Trận RACI & Quản Trị Rủi Ro" : "3. RACI & Risk Governance"}</h5>
            </div>

            {/* Compact RACI Grid */}
            <div className="raci-mini-grid">
              <div className="raci-item">
                <span className="raci-letter r">R</span>
                <div>
                  <span className="raci-role-lbl">{lang === "vi" ? "Chịu trách nhiệm (R):" : "Responsible (R):"}</span>
                  <strong className="raci-role-val">{activeStage.raci.r}</strong>
                </div>
              </div>

              <div className="raci-item">
                <span className="raci-letter a">A</span>
                <div>
                  <span className="raci-role-lbl">{lang === "vi" ? "Ký duyệt tối cao (A):" : "Accountable (A):"}</span>
                  <strong className="raci-role-val">{activeStage.raci.a}</strong>
                </div>
              </div>

              <div className="raci-item">
                <span className="raci-letter c">C</span>
                <div>
                  <span className="raci-role-lbl">{lang === "vi" ? "Tham vấn chuyên môn (C):" : "Consulted (C):"}</span>
                  <strong className="raci-role-val">{activeStage.raci.c}</strong>
                </div>
              </div>
            </div>

            {/* Risk Defense Alert */}
            <div className="risk-defense-callout">
              <div className="callout-title">
                <ShieldAlert size={14} color="#dc2626" />
                <span>{lang === "vi" ? "RỦI RO THỰC TẾ & CÁCH PHÒNG THỦ:" : "PRACTICAL RISK & MITIGATION:"}</span>
              </div>
              <p className="callout-risk">{lang === "vi" ? activeStage.keyRisk : activeStage.keyRiskEn}</p>
              <div className="callout-solution">
                <ShieldCheck size={14} color="#15803d" />
                <span>{lang === "vi" ? activeStage.mitigation : activeStage.mitigationEn}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
