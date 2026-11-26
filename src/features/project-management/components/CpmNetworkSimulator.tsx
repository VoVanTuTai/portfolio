import { useState, useMemo } from "react";
import {
  Activity,
  AlertCircle,
  Calculator,
  CheckCircle2,
  Flame,
  Sparkles,
} from "lucide-react";
import type { Language } from "@/types";

interface CpmNetworkSimulatorProps {
  lang: Language;
}

interface NetworkNodeData {
  id: string;
  wbs: string;
  code: string;
  nameVi: string;
  nameEn: string;
  normalDuration: number; // in weeks
  crashedDuration: number;
  crashCost: number; // in USD
  es: number;
  ef: number;
  ls: number;
  lf: number;
  slack: number;
  isCritical: boolean;
  x: number;
  y: number;
  predecessors: string[];
  owner: string;
  raci: { r: string; a: string; c: string; i: string };
  deliverable: string;
  dod: string;
  pmNote: string;
}

// 8 Representative Enterprise Nodes on the AOA/AON Network
const INITIAL_NETWORK_NODES: NetworkNodeData[] = [
  {
    id: "node-1",
    wbs: "1.1",
    code: "A",
    nameVi: "Kick-off & Phê Duyệt Charter",
    nameEn: "Kick-off & Charter Approval",
    normalDuration: 1.0,
    crashedDuration: 1.0,
    crashCost: 0,
    es: 0,
    ef: 1.0,
    ls: 0,
    lf: 1.0,
    slack: 0,
    isCritical: true,
    x: 90,
    y: 190,
    predecessors: [],
    owner: "Senior PM",
    raci: { r: "Senior PM", a: "Sponsor / Ban Giám Đốc", c: "Tech Lead", i: "Client Core Team" },
    deliverable: "Project Charter, Ma trận RACI, Stakeholder Register",
    dod: "Charter được ký duyệt, thống nhất ràng buộc Tam giác Ngân sách - Thời gian - Phạm vi.",
    pmNote: "Khóa ranh giới dự án ngay ngày đầu giúp loại trừ 80% xung đột nghiệm thu về sau.",
  },
  {
    id: "node-2",
    wbs: "1.2",
    code: "B",
    nameVi: "Đặc Tả PRD & Quy Trình BPMN 2.0",
    nameEn: "PRD Specs & BPMN 2.0 Workflows",
    normalDuration: 1.5,
    crashedDuration: 1.0, // Can crash by 0.5w
    crashCost: 2500,
    es: 1.0,
    ef: 2.5,
    ls: 1.0,
    lf: 2.5,
    slack: 0,
    isCritical: true,
    x: 270,
    y: 190,
    predecessors: ["A"],
    owner: "Lead BA / PM",
    raci: { r: "Lead BA", a: "Senior PM", c: "UI/UX, Tech Lead", i: "Client Product Team" },
    deliverable: "PRD/SRS v1.0, 12 Sơ đồ BPMN 2.0 Camunda, User Stories Given-When-Then",
    dod: "100% User Stories liên kết wireframe và có tiêu chí nghiệm thu Acceptance Criteria rõ ràng.",
    pmNote: "Mô hình hóa chi tiết các nhánh ngoại lệ (hủy đơn, rớt mạng, hoàn tiền) ngay trên BPMN.",
  },
  {
    id: "node-3",
    wbs: "1.3",
    code: "C",
    nameVi: "Thiết Kế CSDL 3NF & OpenAPI 3.0",
    nameEn: "Database 3NF & OpenAPI 3.0",
    normalDuration: 1.5,
    crashedDuration: 1.5,
    crashCost: 0,
    es: 2.5,
    ef: 4.0,
    ls: 2.5,
    lf: 4.0,
    slack: 0,
    isCritical: true,
    x: 460,
    y: 110,
    predecessors: ["B"],
    owner: "Tech Lead",
    raci: { r: "Tech Lead", a: "Senior PM", c: "Senior Backend", i: "BA Team, QA" },
    deliverable: "ERD 3NF Data Dictionary, Swagger Spec, Postman Mock Server",
    dod: "Swagger Spec approved; Mock server dựng sẵn để Frontend & QA code song song độc lập.",
    pmNote: "Quy chuẩn Idempotency Key cho API thanh toán để phòng tránh trừ tiền trùng lặp.",
  },
  {
    id: "node-4",
    wbs: "2.1",
    code: "D",
    nameVi: "Thiết Kế UI/UX Design System",
    nameEn: "UI/UX Design System & Prototyping",
    normalDuration: 1.5,
    crashedDuration: 1.5,
    crashCost: 0,
    es: 2.5,
    ef: 4.0,
    ls: 3.0,
    lf: 4.5,
    slack: 0.5, // POSITIVE SLACK (NON-CRITICAL)
    isCritical: false,
    x: 460,
    y: 280,
    predecessors: ["B"],
    owner: "Lead UI/UX",
    raci: { r: "UI/UX Designer", a: "Product Lead", c: "BA", i: "Frontend Team" },
    deliverable: "Figma Design System, 45 Screens Hi-Fi, Clickable Prototype",
    dod: "Prototype được Client kiểm duyệt UX usability test và ký biên bản phê duyệt giao diện.",
    pmNote: "Đường nhánh này có Total Float = 0.5 tuần, có thể linh hoạt điều phối nhân sự mà không trễ hạn.",
  },
  {
    id: "node-5",
    wbs: "M1",
    code: "E",
    nameVi: "Mốc 1: Khóa Phạm Vi (Scope Freeze)",
    nameEn: "Milestone 1: Formal Scope Freeze Gate",
    normalDuration: 0.5,
    crashedDuration: 0.5,
    crashCost: 0,
    es: 4.0,
    ef: 4.5,
    ls: 4.0,
    lf: 4.5,
    slack: 0,
    isCritical: true,
    x: 640,
    y: 190,
    predecessors: ["C", "D"],
    owner: "Steering Committee",
    raci: { r: "Senior PM", a: "Ban Chỉ Đạo Dự Án", c: "Tech Lead", i: "Toàn bộ Project Team" },
    deliverable: "Biên bản Khóa Scope Freeze, Baseline WBS v1.0, Sprint Backlog Ready",
    dod: "Ký kết biên bản Scope Freeze. Mọi yêu cầu phát sinh sau mốc này bắt buộc chuyển sang Change Request.",
    pmNote: "Điểm chốt chặn sinh tử chống Scope Creep. Tuyệt đối không code ngoài baseline nếu chưa qua CCB.",
  },
  {
    id: "node-6",
    wbs: "2.3",
    code: "F",
    nameVi: "Sprint 2: Động Cơ Trạng Thái Camunda",
    nameEn: "Sprint 2: Camunda State Machine",
    normalDuration: 2.0,
    crashedDuration: 2.0,
    crashCost: 0,
    es: 4.5,
    ef: 6.5,
    ls: 4.5,
    lf: 6.5,
    slack: 0,
    isCritical: true,
    x: 810,
    y: 190,
    predecessors: ["E"],
    owner: "Backend Lead",
    raci: { r: "Backend Dev", a: "Senior PM", c: "Camunda Specialist", i: "QA Lead" },
    deliverable: "Zeebe Workflow Engine, Microservice Order Management, Unit Tests > 85%",
    dod: "Vượt qua kiểm thử tải 1.200 TPS không tắc nghẽn hàng đợi (Zero Message Loss).",
    pmNote: "Áp dụng thuật toán hàng đợi RabbitMQ Dead Letter Exchange hấp thụ sốc tải giờ cao điểm.",
  },
  {
    id: "node-7",
    wbs: "4.1",
    code: "G",
    nameVi: "Kiểm Thử Tích Hợp & Regression QA",
    nameEn: "Integration Testing & QA Gate",
    normalDuration: 2.5,
    crashedDuration: 2.5,
    crashCost: 0,
    es: 6.5,
    ef: 9.0,
    ls: 6.5,
    lf: 9.0,
    slack: 0,
    isCritical: true,
    x: 990,
    y: 190,
    predecessors: ["F"],
    owner: "QA Lead",
    raci: { r: "QA Team", a: "Senior PM", c: "Security Auditor", i: "Dev Leads" },
    deliverable: "Test Report 180 Test Cases, Báo cáo Quét Lỗ Hổng OWASP Top 10, Zero Blocker",
    dod: "Tất cả Bug độ nghiêm trọng Critical/High được fix 100%, tỷ lệ Automation Test đạt 75%.",
    pmNote: "Kiểm thử hồi quy tự động hóa qua GitHub Actions CI/CD ngăn ngừa lỗi ngầm khi merge code.",
  },
  {
    id: "node-8",
    wbs: "M3",
    code: "H",
    nameVi: "Mốc 3: Nghiệm Thu UAT & Bàn Giao",
    nameEn: "Milestone 3: Final UAT Sign-off & Production",
    normalDuration: 3.0,
    crashedDuration: 3.0,
    crashCost: 0,
    es: 9.0,
    ef: 12.0,
    ls: 9.0,
    lf: 12.0,
    slack: 0,
    isCritical: true,
    x: 1180,
    y: 190,
    predecessors: ["G"],
    owner: "Client Sponsor & PM",
    raci: { r: "Senior PM & Lead BA", a: "Chủ Đầu Tư / Sponsor", c: "Tech Lead", i: "Vận Hành Bưu Cục" },
    deliverable: "Biên Bản Nghiệm Thu UAT Ký Tươi, Sổ Tay Bàn Giao Hệ Thống, SLA 99.9%",
    dod: "Hệ thống vận hành trơn tru 14 ngày không phát sinh lỗi Severity 1, thanh quyết toán dự án.",
    pmNote: "Bàn giao chìa khóa trao tay: Chuyển giao tri thức cho đội ngũ vận hành nội bộ của khách hàng.",
  },
];

export function CpmNetworkSimulator({ lang }: CpmNetworkSimulatorProps) {
  const [isCrashingActive, setIsCrashingActive] = useState<boolean>(false);
  const [selectedNodeId, setSelectedNodeId] = useState<string>("node-2");
  const [showMathDetail, setShowMathDetail] = useState<boolean>(false);

  // Compute live node parameters based on crashing state
  const nodes = useMemo(() => {
    return INITIAL_NETWORK_NODES.map((node) => {
      if (node.id === "node-2" && isCrashingActive) {
        // Node B duration crashes from 1.5w to 1.0w
        return {
          ...node,
          ef: 2.0,
          lf: 2.0,
          normalDuration: 1.0,
        };
      }
      if (isCrashingActive && node.id !== "node-1" && node.id !== "node-2") {
        // Subsequent critical path shifts 0.5w earlier!
        return {
          ...node,
          es: Number((node.es - 0.5).toFixed(1)),
          ef: Number((node.ef - 0.5).toFixed(1)),
          ls: Number((node.ls - 0.5).toFixed(1)),
          lf: Number((node.lf - 0.5).toFixed(1)),
        };
      }
      return node;
    });
  }, [isCrashingActive]);

  const selectedNode = nodes.find((n) => n.id === selectedNodeId) || nodes[1];

  const totalProjectWeeks = isCrashingActive ? 11.5 : 12.0;
  const crashCostTotal = isCrashingActive ? 2500 : 0;

  return (
    <div className="pm-cpm-simulator-wrapper">
      {/* 1. Academic Theory & Theorem Formula Card */}
      <div className="pm-academic-formula-card">
        <div className="formula-card-head">
          <div className="formula-card-tag">
            <Calculator size={13} />
            <span>{lang === "vi" ? "LÝ THUYẾT ĐỒ THỊ DAG & THUẬT TOÁN CPM" : "GRAPH THEORY DAG & CPM THEOREMS"}</span>
          </div>
          <span className="formula-standard-badge">PMBOK 7th · ISO/IEC/IEEE 12207</span>
        </div>

        <h3 className="formula-card-title">
          {lang === "vi"
            ? "Mô Hình Mạng Công Việc AOA / AON & Thuật Toán Xác Định Đường Găng"
            : "Deterministic AOA / AON Network Scheduling & Critical Path Theorems"}
        </h3>

        <p className="formula-card-desc">
          {lang === "vi"
            ? "Trong quản trị dự án phần mềm chuyên nghiệp, thời gian bàn giao không phải là ước tính cảm tính mà được xác định chính xác bằng giải thuật duyệt đồ thị hai chiều (Forward Pass & Backward Pass). Bất kỳ công việc nào có Độ Dự Trữ Bằng Không (Total Float = 0) đều nằm trên Đường Găng — chỉ cần trễ 1 ngày sẽ kéo lùi toàn bộ thời điểm Golive của dự án."
            : "In enterprise software engineering, delivery milestones are deterministically computed via two-pass DAG network analysis. Activities possessing Total Float = 0 form the immutable Critical Path; any slippage directly delays customer production handover."}
        </p>

        <div className="formula-equations-grid">
          <div className="equation-item">
            <div className="equation-label">1. Duyệt Thuận (Forward Pass — Early Times)</div>
            <div className="equation-math">
              <code>ES_j = max(EF_i) | i ∈ Pred(j)</code>
              <code>EF_j = ES_j + Duration_j</code>
            </div>
            <span className="equation-note">
              {lang === "vi" ? "Thời điểm bắt đầu sớm nhất bị ràng buộc bởi công việc tiền nhiệm kết thúc muộn nhất." : "Earliest task start is bound by the latest finish of immediate predecessors."}
            </span>
          </div>

          <div className="equation-item">
            <div className="equation-label">2. Duyệt Nghịch (Backward Pass — Late Times)</div>
            <div className="equation-math">
              <code>LF_i = min(LS_j) | j ∈ Succ(i)</code>
              <code>LS_i = LF_i - Duration_i</code>
            </div>
            <span className="equation-note">
              {lang === "vi" ? "Thời điểm kết thúc trễ nhất bị chặn bởi công việc kế nhiệm bắt đầu sớm nhất." : "Latest task finish is bounded by the earliest start of successor activities."}
            </span>
          </div>

          <div className="equation-item accent">
            <div className="equation-label">3. Độ Dự Trữ Toàn Phần (Total Float / Slack)</div>
            <div className="equation-math">
              <code>Total Float = LS - ES = LF - EF</code>
              <code className="code-critical">Critical Path ⟺ Total Float == 0</code>
            </div>
            <span className="equation-note">
              {lang === "vi" ? "Công việc có Float = 0 không được phép trễ. Công việc Float > 0 cho phép linh hoạt nguồn lực." : "Tasks with Float = 0 permit zero schedule buffer. Float > 0 allows staffing buffer."}
            </span>
          </div>
        </div>
      </div>

      {/* 2. Interactive Simulation Controller Toolbar */}
      <div className="pm-cpm-controls-bar">
        <div className="cpm-controls-left">
          <div className="cpm-stat-badge">
            <span className="stat-label">{lang === "vi" ? "TỔNG THỜI GIAN DỰ ÁN" : "TOTAL PROJECT DURATION"}</span>
            <strong className="stat-value">{totalProjectWeeks} {lang === "vi" ? "Tuần" : "Weeks"}</strong>
          </div>
          <div className="cpm-stat-badge critical">
            <span className="stat-label">{lang === "vi" ? "ĐƯỜNG GĂNG (CRITICAL PATH)" : "CRITICAL PATH CHAIN"}</span>
            <strong className="stat-value">A → B → C → E → F → G → H</strong>
          </div>
          <div className="cpm-stat-badge">
            <span className="stat-label">{lang === "vi" ? "CHI PHÍ NÉN (CRASH COST)" : "CRASH INVESTMENT"}</span>
            <strong className="stat-value">${crashCostTotal.toLocaleString()}</strong>
          </div>
        </div>

        <div className="cpm-controls-right">
          {/* Crashing Toggle */}
          <button
            type="button"
            className={`cpm-action-toggle${isCrashingActive ? " is-crashing" : ""}`}
            onClick={() => setIsCrashingActive((prev) => !prev)}
            title={lang === "vi" ? "Mô phỏng bổ sung nguồn lực rút ngắn tiến độ" : "Simulate project crashing via resource injection"}
          >
            <Flame size={15} />
            <span>
              {isCrashingActive
                ? (lang === "vi" ? "Đang Nén: Rút 0.5 Tuần (-$2,500)" : "Crashing Active: -0.5w (-$2,500)")
                : (lang === "vi" ? "Mô Phỏng Nén Tiến Độ (Crashing)" : "Simulate Schedule Crashing")}
            </span>
          </button>

          {/* Math Detail Toggle */}
          <button
            type="button"
            className={`cpm-action-btn${showMathDetail ? " is-active" : ""}`}
            onClick={() => setShowMathDetail((prev) => !prev)}
          >
            <Activity size={14} />
            <span>{lang === "vi" ? "Giải Thích Toán Học" : "Show Mathematical Logic"}</span>
          </button>
        </div>
      </div>

      {/* 3. Mathematical Step-by-Step Educational Callout (Toggled) */}
      {showMathDetail && (
        <div className="pm-math-explanation-box">
          <div className="math-box-header">
            <Sparkles size={15} color="#7c3aed" />
            <strong>{lang === "vi" ? "Bảng Kiểm Chứng Giải Thuật Tính Toán Lưới Mạng (Forward & Backward Pass Verification)" : "Algorithmic Verification Table of Network Scheduling"}</strong>
          </div>
          <div className="math-table-scroll">
            <table className="cpm-verification-table">
              <thead>
                <tr>
                  <th>Mã</th>
                  <th>Công Việc (WBS)</th>
                  <th>Thời gian (w)</th>
                  <th>Tiền nhiệm</th>
                  <th>ES (Sớm nhất)</th>
                  <th>EF (Kết thúc sớm)</th>
                  <th>LS (Bắt đầu trễ)</th>
                  <th>LF (Trễ nhất)</th>
                  <th>Float (Dự trữ)</th>
                  <th>Trạng thái</th>
                </tr>
              </thead>
              <tbody>
                {nodes.map((node) => (
                  <tr key={node.id} className={node.isCritical ? "is-critical-row" : ""}>
                    <td><strong>{node.code}</strong></td>
                    <td>{node.wbs} - {node.nameVi}</td>
                    <td>{node.normalDuration}</td>
                    <td>{node.predecessors.join(", ") || "START"}</td>
                    <td>{node.es}</td>
                    <td>{node.ef}</td>
                    <td>{node.ls}</td>
                    <td>{node.lf}</td>
                    <td>
                      <span className={`slack-pill${node.slack === 0 ? " zero" : ""}`}>
                        {node.slack}w {node.slack === 0 ? "(Găng)" : "(Dự trữ)"}
                      </span>
                    </td>
                    <td>
                      {node.isCritical ? (
                        <span className="critical-tag">CRITICAL PATH</span>
                      ) : (
                        <span className="buffer-tag">BUFFERED</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* 4. Interactive Vector SVG CPM Simulation Canvas (Like Module 05) */}
      <div className="pm-cpm-canvas-container" role="region" aria-label="Sơ đồ mạng AOA / AON tương tác">
        <div className="canvas-watermark">AOA / AON NETWORK DAG · CPM SIMULATION ENGINE</div>

        <svg
          viewBox="0 0 1300 370"
          className="pm-network-svg"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            {/* Linear Gradients */}
            <linearGradient id="cpmCriticalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#7c3aed" />
              <stop offset="100%" stopColor="#4f46e5" />
            </linearGradient>
            <linearGradient id="cpmBufferGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="#f8fafc" />
            </linearGradient>

            {/* Glowing Arrow Markers */}
            <marker
              id="cpmArrowCritical"
              viewBox="0 0 10 10"
              refX="8"
              refY="5"
              markerWidth="6"
              markerHeight="6"
              orient="auto-start-reverse"
            >
              <path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#8b5cf6" />
            </marker>
            <marker
              id="cpmArrowBuffer"
              viewBox="0 0 10 10"
              refX="8"
              refY="5"
              markerWidth="6"
              markerHeight="6"
              orient="auto-start-reverse"
            >
              <path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#94a3b8" />
            </marker>

            {/* Neon Glow Filter */}
            <filter id="cpmGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3.5" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* BACKGROUND GRID MATRIX */}
          <pattern id="cpmGrid" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="20" cy="20" r="1" fill="#cbd5e1" opacity="0.5" />
          </pattern>
          <rect width="1300" height="370" fill="url(#cpmGrid)" />

          {/* CONNECTING DEPENDENCY ARROWS */}
          {/* A -> B */}
          <path
            d="M 175 190 L 255 190"
            stroke="#8b5cf6"
            strokeWidth="3.5"
            markerEnd="url(#cpmArrowCritical)"
            filter="url(#cpmGlow)"
          />

          {/* B -> C (Critical Branch Up) */}
          <path
            d="M 355 175 Q 390 110 445 110"
            stroke="#8b5cf6"
            strokeWidth="3.5"
            fill="none"
            markerEnd="url(#cpmArrowCritical)"
            filter="url(#cpmGlow)"
          />

          {/* B -> D (Buffered Branch Down) */}
          <path
            d="M 355 205 Q 390 280 445 280"
            stroke="#94a3b8"
            strokeWidth="2"
            strokeDasharray="4 4"
            fill="none"
            markerEnd="url(#cpmArrowBuffer)"
          />

          {/* C -> E (Milestone 1 Convergence) */}
          <path
            d="M 545 110 Q 590 110 625 175"
            stroke="#8b5cf6"
            strokeWidth="3.5"
            fill="none"
            markerEnd="url(#cpmArrowCritical)"
            filter="url(#cpmGlow)"
          />

          {/* D -> E (Milestone 1 Convergence) */}
          <path
            d="M 545 280 Q 590 280 625 205"
            stroke="#94a3b8"
            strokeWidth="2"
            strokeDasharray="4 4"
            fill="none"
            markerEnd="url(#cpmArrowBuffer)"
          />

          {/* E -> F */}
          <path
            d="M 725 190 L 795 190"
            stroke="#8b5cf6"
            strokeWidth="3.5"
            markerEnd="url(#cpmArrowCritical)"
            filter="url(#cpmGlow)"
          />

          {/* F -> G */}
          <path
            d="M 895 190 L 975 190"
            stroke="#8b5cf6"
            strokeWidth="3.5"
            markerEnd="url(#cpmArrowCritical)"
            filter="url(#cpmGlow)"
          />

          {/* G -> H */}
          <path
            d="M 1075 190 L 1165 190"
            stroke="#8b5cf6"
            strokeWidth="3.5"
            markerEnd="url(#cpmArrowCritical)"
            filter="url(#cpmGlow)"
          />

          {/* PULSING FLOW PARTICLES ON CRITICAL PATH */}
          <circle r="4" fill="#a855f7">
            <animateMotion path="M 175 190 L 255 190" dur="1.2s" repeatCount="indefinite" />
          </circle>
          <circle r="4" fill="#a855f7">
            <animateMotion path="M 355 175 Q 390 110 445 110" dur="1.4s" repeatCount="indefinite" />
          </circle>
          <circle r="4" fill="#a855f7">
            <animateMotion path="M 545 110 Q 590 110 625 175" dur="1.4s" repeatCount="indefinite" />
          </circle>
          <circle r="4" fill="#a855f7">
            <animateMotion path="M 725 190 L 795 190" dur="1.2s" repeatCount="indefinite" />
          </circle>
          <circle r="4" fill="#a855f7">
            <animateMotion path="M 895 190 L 975 190" dur="1.3s" repeatCount="indefinite" />
          </circle>
          <circle r="4" fill="#a855f7">
            <animateMotion path="M 1075 190 L 1165 190" dur="1.5s" repeatCount="indefinite" />
          </circle>

          {/* RENDER NETWORK NODES (ENGINEERING BOX STANDARD) */}
          {nodes.map((node) => {
            const isSelected = node.id === selectedNodeId;
            return (
              <g
                key={node.id}
                transform={`translate(${node.x}, ${node.y})`}
                onClick={() => setSelectedNodeId(node.id)}
                style={{ cursor: "pointer" }}
                className="cpm-interactive-node"
              >
                {/* Selection Highlight Glow Ring */}
                {isSelected && (
                  <rect
                    x="-48"
                    y="-48"
                    width="96"
                    height="96"
                    rx="14"
                    fill="none"
                    stroke="#2563eb"
                    strokeWidth="3"
                    strokeDasharray="6 4"
                    opacity="0.8"
                  />
                )}

                {/* Node Box Outer Container */}
                <rect
                  x="-42"
                  y="-42"
                  width="84"
                  height="84"
                  rx="10"
                  fill={node.isCritical ? "#ffffff" : "#f8fafc"}
                  stroke={node.isCritical ? (isSelected ? "#2563eb" : "#7c3aed") : "#cbd5e1"}
                  strokeWidth={node.isCritical ? "2.5" : "1.5"}
                  filter={node.isCritical ? "drop-shadow(0 4px 10px rgba(124, 58, 237, 0.18))" : "drop-shadow(0 2px 4px rgba(15, 23, 42, 0.05))"}
                />

                {/* Header Row: ES (Left) and EF (Right) */}
                <rect x="-42" y="-42" width="84" height="20" rx="9" fill={node.isCritical ? "#f5f3ff" : "#f1f5f9"} />
                <line x1="0" y1="-42" x2="0" y2="-22" stroke={node.isCritical ? "#ddd6fe" : "#e2e8f0"} strokeWidth="1" />
                <line x1="-42" y1="-22" x2="42" y2="-22" stroke={node.isCritical ? "#ddd6fe" : "#e2e8f0"} strokeWidth="1" />

                <text x="-21" y="-28" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="9.5" fontWeight="800" fill={node.isCritical ? "#6d28d9" : "#475569"}>
                  {node.es}w
                </text>
                <text x="21" y="-28" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="9.5" fontWeight="800" fill={node.isCritical ? "#6d28d9" : "#475569"}>
                  {node.ef}w
                </text>

                {/* Center Core: Activity Code & WBS */}
                <text x="0" y="-3" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="13" fontWeight="900" fill={node.isCritical ? "#0f172a" : "#334155"}>
                  {node.code}
                </text>
                <text x="0" y="11" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="9" fontWeight="800" fill="#64748b">
                  WBS {node.wbs}
                </text>

                {/* Duration & Float Sub-bar */}
                <rect x="-42" y="22" width="84" height="20" rx="9" fill={node.isCritical ? "#f5f3ff" : "#f1f5f9"} />
                <line x1="-42" y1="22" x2="42" y2="22" stroke={node.isCritical ? "#ddd6fe" : "#e2e8f0"} strokeWidth="1" />
                <line x1="0" y1="22" x2="0" y2="42" stroke={node.isCritical ? "#ddd6fe" : "#e2e8f0"} strokeWidth="1" />

                {/* Bottom Row: LS (Left) and LF (Right) */}
                <text x="-21" y="36" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="9.5" fontWeight="800" fill={node.isCritical ? "#6d28d9" : "#475569"}>
                  {node.ls}w
                </text>
                <text x="21" y="36" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="9.5" fontWeight="800" fill={node.isCritical ? "#6d28d9" : "#475569"}>
                  {node.lf}w
                </text>

                {/* Critical Status Top Pill */}
                {node.isCritical ? (
                  <g transform="translate(0, -50)">
                    <rect x="-26" y="-8" width="52" height="15" rx="4" fill="#7c3aed" />
                    <text x="0" y="3" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="7.5" fontWeight="900" fill="#ffffff">
                      TF = 0
                    </text>
                  </g>
                ) : (
                  <g transform="translate(0, -50)">
                    <rect x="-30" y="-8" width="60" height="15" rx="4" fill="#0284c7" />
                    <text x="0" y="3" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="7.5" fontWeight="900" fill="#ffffff">
                      TF = +{node.slack}w
                    </text>
                  </g>
                )}

                {/* Bottom Title Label */}
                <text
                  x="0"
                  y="58"
                  textAnchor="middle"
                  fontFamily="var(--studio-font-sans)"
                  fontSize="9.5"
                  fontWeight="750"
                  fill="#1e293b"
                  width="110"
                >
                  {node.code}. {node.nameVi.length > 18 ? node.nameVi.substring(0, 18) + "..." : node.nameVi}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      {/* 5. Clickable Node Technical Inspector Card (Same design paradigm as Module 05) */}
      <div className="pm-node-technical-inspector">
        <div className="inspector-head">
          <div className="inspector-title-row">
            <span className={`inspector-code-badge${selectedNode.isCritical ? " critical" : ""}`}>
              {selectedNode.code} · WBS {selectedNode.wbs}
            </span>
            <h4 className="inspector-title">
              {lang === "vi" ? selectedNode.nameVi : selectedNode.nameEn}
            </h4>
            {selectedNode.isCritical ? (
              <span className="critical-status-badge">
                <AlertCircle size={12} />
                <span>ĐƯỜNG GĂNG (TOTAL FLOAT = 0)</span>
              </span>
            ) : (
              <span className="buffer-status-badge">
                <CheckCircle2 size={12} />
                <span>CÓ DỰ TRỮ (TOTAL FLOAT = +{selectedNode.slack} TUẦN)</span>
              </span>
            )}
          </div>
        </div>

        <div className="inspector-metrics-grid">
          <div className="metric-box">
            <span className="metric-lbl">THỜI GIAN THỰC HIỆN</span>
            <strong className="metric-val">{selectedNode.normalDuration} {lang === "vi" ? "Tuần" : "Weeks"}</strong>
          </div>
          <div className="metric-box">
            <span className="metric-lbl">SỚM NHẤT [ES - EF]</span>
            <strong className="metric-val">Tuần {selectedNode.es} → {selectedNode.ef}</strong>
          </div>
          <div className="metric-box">
            <span className="metric-lbl">TRỄ NHẤT [LS - LF]</span>
            <strong className="metric-val">Tuần {selectedNode.ls} → {selectedNode.lf}</strong>
          </div>
          <div className="metric-box">
            <span className="metric-lbl">TIỀN NHIỆM TRỰC TIẾP</span>
            <strong className="metric-val">{selectedNode.predecessors.join(", ") || "START (Khởi đầu)"}</strong>
          </div>
        </div>

        <div className="inspector-details-stack">
          {/* RACI Matrix */}
          <div className="raci-card">
            <span className="raci-card-label">MA TRẬN TRÁCH NHIỆM RACI:</span>
            <div className="raci-pills-row">
              <span className="raci-pill r"><strong>R (Thực hiện):</strong> {selectedNode.raci.r}</span>
              <span className="raci-pill a"><strong>A (Chịu trách nhiệm):</strong> {selectedNode.raci.a}</span>
              <span className="raci-pill c"><strong>C (Tham vấn):</strong> {selectedNode.raci.c}</span>
              <span className="raci-pill i"><strong>I (Thông báo):</strong> {selectedNode.raci.i}</span>
            </div>
          </div>

          {/* Deliverables & Definition of Done */}
          <div className="deliverable-dod-grid">
            <div className="dod-box">
              <span className="dod-lbl">SẢN PHẨM BÀN GIAO (DELIVERABLE):</span>
              <p>{selectedNode.deliverable}</p>
            </div>
            <div className="dod-box">
              <span className="dod-lbl">TIÊU CHÍ HOÀN THÀNH (DEFINITION OF DONE):</span>
              <p>{selectedNode.dod}</p>
            </div>
          </div>

          {/* PM Practical Strategy Note */}
          <div className="pm-advice-box">
            <span className="pm-advice-badge">
              <Sparkles size={13} />
              {lang === "vi" ? "CHIẾN LƯỢC QUẢN TRỊ CỦA SENIOR PM:" : "SENIOR PM GOVERNANCE INSIGHT:"}
            </span>
            <p>{selectedNode.pmNote}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
