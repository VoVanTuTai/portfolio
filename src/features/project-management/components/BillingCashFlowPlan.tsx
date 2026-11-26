import { useState } from "react";
import {
  ChevronRight,
  Clock,
  FileCheck2,
  Milestone,
  ShieldAlert,
  ShieldCheck,
  TrendingUp,
  Workflow,
} from "lucide-react";
import type { Language } from "@/types";

interface BillingCashFlowPlanProps {
  lang: Language;
}

interface PaymentTranche {
  id: string;
  phase: string;
  phaseEn: string;
  percentage: number;
  amountUsd: number;
  amountVndText: string;
  timelineWeek: string;
  status: "collected" | "in_progress" | "pending";
  deliverableInvoiceGate: string;
  deliverableInvoiceGateEn: string;
  pmAction: string;
  pmActionEn: string;
  cashFlowRisk: string;
  cashFlowRiskEn: string;
  isFirstEarnedTranche?: boolean;
}

const PAYMENT_TRANCHES: PaymentTranche[] = [
  {
    id: "tranche-1",
    phase: "Đợt 1: Tạm Ứng Khởi Động Dự Án (Deposit)",
    phaseEn: "Tranche 1: Mobilization Deposit & Charter",
    percentage: 25,
    amountUsd: 30000,
    amountVndText: "750 Triệu VNĐ",
    timelineWeek: "Tuần 1 (Ngay sau ký HĐ)",
    status: "collected",
    deliverableInvoiceGate: "Hợp đồng đã ký + Phê duyệt Project Charter & Ma trận RACI.",
    deliverableInvoiceGateEn: "Signed Master Service Agreement + Approved Project Charter & RACI Matrix.",
    pmAction: "Tổ chức Kick-off Stakeholders trong vòng 48h, thống nhất kênh trao đổi (Slack/Jira) và cam kết giữ lịch Core Team.",
    pmActionEn: "Hold Stakeholder Kick-off within 48h, lock communication channels (Slack/Jira), secure Core Dev commitment.",
    cashFlowRisk: "Nếu chậm kick-off, tiền cọc bị giữ lại làm chậm tiến độ setup hạ tầng cloud và giữ chỗ nhân sự chủ chốt.",
    cashFlowRiskEn: "Delayed kick-off stalls mobilization deposit, delaying cloud staging provisioning and core staffing.",
  },
  {
    id: "tranche-2",
    phase: "Đợt 2: Khóa Phạm Vi (Scope Freeze) & Prototype UI/UX",
    phaseEn: "Tranche 2: Scope Freeze & UI/UX Sign-off",
    percentage: 25,
    amountUsd: 30000,
    amountVndText: "750 Triệu VNĐ",
    timelineWeek: "Tuần 3.5 (Sau 3.5 tuần tập trung)",
    status: "collected",
    isFirstEarnedTranche: true,
    deliverableInvoiceGate: "Biên bản ký kết Khóa Phạm Vi (Scope Freeze Protocol) + PRD/SRS v1.0 + 45 Màn hình Wireframe Figma.",
    deliverableInvoiceGateEn: "Signed Scope Freeze Protocol + Approved PRD v1.0 + 45 Figma Wireframe UI/UX Screens.",
    pmAction: "ĐÂY LÀ KHOẢN THANH TOÁN QUAN TRỌNG NHẤT! PM dồn toàn lực BA & UI/UX chốt sớm trong 3 tuần đầu. Khách ký nghiệm thu vừa mở khóa 750 triệu tiền về tài khoản, vừa đóng chặt cửa phát sinh ngoài phạm vi (Scope Creep).",
    pmActionEn: "THE PIVOTAL FIRST EARNED TRANCHE! PM focuses BA & UX resources to close within 3.5 weeks, securing $30,000 cash collection and locking out scope creep.",
    cashFlowRisk: "Khách hàng thường 'tiện mồm' đòi thêm tính năng. Nếu PM cả nể không khóa Scope Freeze, mốc này sẽ bị cù cưa 2-3 tháng làm doanh nghiệp cạn kiệt dòng tiền nuôi quân!",
    cashFlowRiskEn: "Clients frequently request ad-hoc features. Without a strict Scope Freeze, this gate drags for months, bleeding project cash flow.",
  },
  {
    id: "tranche-3",
    phase: "Đợt 3: Bàn Giao Core Engine & Demo Alpha",
    phaseEn: "Tranche 3: Core Architecture & Alpha Demo",
    percentage: 25,
    amountUsd: 30000,
    amountVndText: "750 Triệu VNĐ",
    timelineWeek: "Tuần 7.0 (Kết thúc Sprint 2)",
    status: "in_progress",
    deliverableInvoiceGate: "Biên bản Demo Alpha + Camunda Zeebe Engine chạy thông suốt + CSDL 3NF + Swagger API.",
    deliverableInvoiceGateEn: "Signed Alpha Demo Sign-off + Working Camunda State Machine + 3NF DB Schema + Swagger API.",
    pmAction: "Tổ chức buổi Demo trực tiếp với Ban Giám đốc khách hàng. Trực quan hóa dữ liệu đơn hàng chạy thực tế để khách yên tâm ký nghiệm thu kỹ thuật đợt 3.",
    pmActionEn: "Conduct live Demo with Client Leadership. Demonstrate live order state transitions to secure technical sign-off.",
    cashFlowRisk: "Nếu không mock dữ liệu và kiểm thử kỹ, demo bị lỗi trước mặt Giám đốc khách hàng sẽ khiến kế toán khách từ chối thanh toán đợt 3.",
    cashFlowRiskEn: "Demo failure in front of executive sponsors halts payment approval for Tranche 3.",
  },
  {
    id: "tranche-4",
    phase: "Đợt 4: Nghiệm Thu UAT & Triển Khai Golive",
    phaseEn: "Tranche 4: Final UAT Acceptance & Golive",
    percentage: 20,
    amountUsd: 24000,
    amountVndText: "600 Triệu VNĐ",
    timelineWeek: "Tuần 11.5 - 12.0",
    status: "pending",
    deliverableInvoiceGate: "Biên Bản Nghiệm Thu UAT 100% Ký Tươi + Zero Blocker Bug + Tài liệu hướng dẫn vận hành.",
    deliverableInvoiceGateEn: "Signed Formal UAT Acceptance Protocol + Zero Critical Bugs + System Handover Manuals.",
    pmAction: "Cùng đội QA của khách chạy 180 kịch bản UAT. Phân loại triệt để: bug thật sửa ngay, tính năng phát sinh chuyển vào Hợp đồng Phase 2.",
    pmActionEn: "Execute 180 UAT test cases with client team. Zero-defect policy on Sev 1/2; move feature enhancements to Phase 2.",
    cashFlowRisk: "Khách hàng vin vào các lỗi nhỏ giao diện để trì hoãn nghiệm thu. PM phải quy định rõ SLA phân loại bug trong hợp đồng để bảo vệ điều kiện xuất hóa đơn.",
    cashFlowRiskEn: "Clients use minor cosmetic bugs to delay sign-off. PM enforces contracted bug severity thresholds to protect invoice gate.",
  },
  {
    id: "tranche-5",
    phase: "Đợt 5: Bảo Hành & Quyết Toán Hợp Đồng",
    phaseEn: "Tranche 5: Hypercare Warranty & Final Settlement",
    percentage: 5,
    amountUsd: 6000,
    amountVndText: "150 Triệu VNĐ",
    timelineWeek: "Sau 30 Ngày Vận Hành (Hypercare)",
    status: "pending",
    deliverableInvoiceGate: "Biên bản thanh lý hợp đồng sau 30 ngày trực chiến SLA 99.9%.",
    deliverableInvoiceGateEn: "Final Contract Liquidation Protocol after 30-day hypercare warranty.",
    pmAction: "Bàn giao mã nguồn sạch và đóng dự án, mở ra cơ hội ký kết Hợp đồng Bảo trì định kỳ (Opex hàng năm).",
    pmActionEn: "Transfer clean codebase and close out project, transitioning client to annual AMC maintenance SLA.",
    cashFlowRisk: "Thủ tục thanh lý giấy tờ chậm trễ nếu thiếu hồ sơ đối soát giữa 2 bên.",
    cashFlowRiskEn: "Liquidation delay if project artifacts and handover protocols are poorly archived.",
  },
];

export function BillingCashFlowPlan({ lang }: BillingCashFlowPlanProps) {
  const [selectedTrancheId, setSelectedTrancheId] = useState<string>("tranche-2");
  const [isFastTrackActive, setIsFastTrackActive] = useState<boolean>(false);

  const selectedTranche =
    PAYMENT_TRANCHES.find((t) => t.id === selectedTrancheId) || PAYMENT_TRANCHES[1];

  const totalCollectedUsd = 60000;
  const totalContractUsd = 120000;
  const percentCollected = 50;

  return (
    <div className="pm-billing-plan-container">
      {/* 1. Header Hero: Cash Flow Philosophy of a Real PM */}
      <div className="billing-philosophy-banner">
        <div className="philosophy-badge-row">
          <span className="philosophy-tag">
            <span>{lang === "vi" ? "CHIẾN LƯỢC DÒNG TIỀN DỰ ÁN (CASH FLOW FIRST)" : "CASH-FLOW-DRIVEN PM STRATEGY"}</span>
          </span>
          <span className="philosophy-rule">
            {lang === "vi" ? "Quy tắc PM: Nhắm mốc thu tiền đợt 1 & chia plan hợp lý để thu" : "Rule: Target First Payment Gate & Plan to Collect"}
          </span>
        </div>

        <h3 className="philosophy-title">
          {lang === "vi"
            ? "Lập Kế Hoạch Bàn Giao Bám Sát Các Cột Mốc Thanh Toán (Milestone-Driven Delivery)"
            : "Deliverables Mapped Directly to Billing & Cash Collection Gates"}
        </h3>

        <p className="philosophy-lead">
          {lang === "vi"
            ? "Trong quản trị dự án phần mềm doanh nghiệp, một PM xuất sắc không đo lường thành công bằng số lượng dòng code, mà bằng KHẢ NĂNG BẢO VỆ DÒNG TIỀN: Phân rã WBS sao cho chạm tới mốc thanh toán đợt 1 nhanh nhất, thu tiền từng đợt sòng phẳng, và khóa cứng Scope Freeze để khách hàng không thể trì hoãn nghiệm thu."
            : "In real-world software project delivery, Senior PMs measure success by cash flow defense: Designing delivery milestones to unlock the first payment tranche swiftly, invoicing on time, and enforcing Scope Freeze so clients cannot delay payments."}
        </p>

        {/* 3 Executive Financial KPIs */}
        <div className="billing-kpi-summary-grid">
          <div className="billing-kpi-card">
            <span className="bkpi-lbl">{lang === "vi" ? "TỔNG GIÁ TRỊ HỢP ĐỒNG" : "TOTAL CONTRACT VALUE"}</span>
            <strong className="bkpi-val">${totalContractUsd.toLocaleString()}</strong>
            <span className="bkpi-sub">~ 2.95 Tỷ VNĐ (Dự án Nexus Express)</span>
          </div>

          <div className="billing-kpi-card success">
            <span className="bkpi-lbl">{lang === "vi" ? "ĐÃ THU VỀ TÀI KHOẢN" : "CASH COLLECTED TO DATE"}</span>
            <strong className="bkpi-val text-green">${totalCollectedUsd.toLocaleString()} ({percentCollected}%)</strong>
            <span className="bkpi-sub text-green">1.5 Tỷ VNĐ thu đúng hạn 100%</span>
          </div>

          <div className="billing-kpi-card highlight">
            <span className="bkpi-lbl">{lang === "vi" ? "MỐC THU TIỀN TIẾP THEO" : "NEXT INVOICING GATE"}</span>
            <strong className="bkpi-val text-blue">Đợt 3: $30,000 (25%)</strong>
            <span className="bkpi-sub">Tuần 7 (Demo Core Camunda Engine)</span>
          </div>
        </div>
      </div>

      {/* 2. Interactive Cash Flow Roadmap (4 Tranches) */}
      <div className="pm-roadmap-section">
        <div className="roadmap-header">
          <div className="roadmap-title-group">
            <Milestone size={18} color="#2563eb" />
            <h4>{lang === "vi" ? "Lộ Trình 5 Đợt Thanh Toán Hợp Đồng & Điều Kiện Nghiệm Thu:" : "5-Tranche Payment Schedule & Acceptance Conditions:"}</h4>
          </div>

          <button
            type="button"
            className={`fast-track-toggle-btn${isFastTrackActive ? " active" : ""}`}
            onClick={() => setIsFastTrackActive((prev) => !prev)}
            title="Mô phỏng chiến lược dồn lực rút ngắn đợt 1 để thu tiền sớm"
          >
            <span>
              {isFastTrackActive
                ? (lang === "vi" ? "Đang Bật: Rút Ngắn 4 Ngày Để Xuất Hóa Đơn Sớm" : "Fast-Track: Invoicing 4 Days Early")
                : (lang === "vi" ? "Mô Phỏng Rút Ngắn Tiến Độ Thu Tiền" : "Simulate Fast-Track Cash Collection")}
            </span>
          </button>
        </div>

        {/* Horizontal Tranches Stepper */}
        <div className="tranches-stepper-track" role="tablist">
          {PAYMENT_TRANCHES.map((tranche, idx) => {
            const isSelected = tranche.id === selectedTrancheId;
            return (
              <button
                key={tranche.id}
                type="button"
                className={`tranche-step-card${isSelected ? " is-selected" : ""}${tranche.status === "collected" ? " is-collected" : tranche.status === "in_progress" ? " is-active" : ""}`}
                onClick={() => setSelectedTrancheId(tranche.id)}
                role="tab"
                aria-selected={isSelected}
              >
                <div className="tranche-top-pill">
                  <span className="step-idx">{idx + 1}</span>
                  <span className={`status-tag ${tranche.status}`}>
                    {tranche.status === "collected" && (lang === "vi" ? "ĐÃ THU ĐỦ" : "COLLECTED")}
                    {tranche.status === "in_progress" && (lang === "vi" ? "ĐANG THỰC HIỆN" : "IN PROGRESS")}
                    {tranche.status === "pending" && (lang === "vi" ? "CHỜ GOLIVE" : "PENDING")}
                  </span>
                </div>

                <div className="tranche-money-box">
                  <strong className="tranche-percent">{tranche.percentage}%</strong>
                  <span className="tranche-amount">${tranche.amountUsd.toLocaleString()}</span>
                  <span className="tranche-vnd">({tranche.amountVndText})</span>
                </div>

                <h5 className="tranche-name">
                  {lang === "vi" ? tranche.phase : tranche.phaseEn}
                </h5>

                <div className="tranche-timing">
                  <Clock size={12} />
                  <span>
                    {isFastTrackActive && tranche.id === "tranche-2"
                      ? (lang === "vi" ? "Tuần 3.0 (Rút sớm 4 ngày!)" : "Week 3.0 (-4 days early!)")
                      : tranche.timelineWeek}
                  </span>
                </div>

                {tranche.isFirstEarnedTranche && (
                  <div className="key-gate-badge">
                    <span>MỐC THU TIỀN THEN CHỐT</span>
                  </div>
                )}
              </button>
            );
          })}
        </div>

        {/* Selected Tranche Detail Inspector */}
        <div className="tranche-detail-card">
          <div className="detail-card-head">
            <div className="detail-title-col">
              <span className="detail-badge">
                {selectedTranche.percentage}% GIÁ TRỊ HỢP ĐỒNG · ${selectedTranche.amountUsd.toLocaleString()} USD ({selectedTranche.amountVndText})
              </span>
              <h4 className="detail-heading">
                {lang === "vi" ? selectedTranche.phase : selectedTranche.phaseEn}
              </h4>
            </div>

            <div className="detail-status-col">
              <span className={`status-pill-large ${selectedTranche.status}`}>
                {selectedTranche.status === "collected" && (lang === "vi" ? "ĐÃ XUẤT HÓA ĐƠN & THU TIỀN HOÀN TẤT" : "INVOICED & SETTLED")}
                {selectedTranche.status === "in_progress" && (lang === "vi" ? "ĐANG TRIỂN KHAI SPRINT & CHUẨN BỊ BÀN GIAO" : "SPRINT IN PROGRESS & DEMO PREP")}
                {selectedTranche.status === "pending" && (lang === "vi" ? "KẾ HOẠCH BÀN GIAO GIAI ĐOẠN CUỐI" : "UPCOMING FINAL GATE")}
              </span>
            </div>
          </div>

          <div className="detail-content-grid">
            {/* Box 1: Điều kiện nghiệm thu để xuất hóa đơn */}
            <div className="detail-box invoice-gate">
              <div className="detail-box-head">
                <FileCheck2 size={16} color="#2563eb" />
                <strong>{lang === "vi" ? "1. ĐIỀU KIỆN ĐỂ KẾ TOÁN XUẤT HÓA ĐƠN THU TIỀN:" : "1. FORMAL INVOICE GATE CONDITION:"}</strong>
              </div>
              <p className="detail-box-desc">
                {lang === "vi" ? selectedTranche.deliverableInvoiceGate : selectedTranche.deliverableInvoiceGateEn}
              </p>
              <span className="detail-box-hint">
                {lang === "vi"
                  ? "Chỉ khi có đủ chữ ký trên biên bản này thì khách hàng mới chuyển khoản đợt tiếp theo."
                  : "Signed protocol unlocks accounting invoice dispatch."}
              </span>
            </div>

            {/* Box 2: Hành động then chốt của PM */}
            <div className="detail-box pm-strategy">
              <div className="detail-box-head">
                <TrendingUp size={16} color="#16a34a" />
                <strong>{lang === "vi" ? "2. CHIẾN LƯỢC ĐIỀU PHỐI CỦA PM ĐỂ KHÁCH KÝ TIỀN NGAY:" : "2. PM DELIVERY & COLLECTION STRATEGY:"}</strong>
              </div>
              <p className="detail-box-desc">
                {lang === "vi" ? selectedTranche.pmAction : selectedTranche.pmActionEn}
              </p>
              <span className="detail-box-hint">
                {lang === "vi"
                  ? "PM chủ động làm việc trước với người có quyền ký duyệt (Sponsor/Giám đốc), không chờ đến hạn mới gửi."
                  : "Proactively align with signing sponsors pre-deadline to avoid invoicing lag."}
              </span>
            </div>

            {/* Box 3: Rủi ro kẹt tiền & Cách xử lý */}
            <div className="detail-box cash-risk">
              <div className="detail-box-head">
                <ShieldAlert size={16} color="#dc2626" />
                <strong>{lang === "vi" ? "3. RỦI RO KẸT TIỀN THỰC TẾ & BẢO VỆ DÒNG TIỀN:" : "3. REAL-WORLD CASH COLLECTION RISK:"}</strong>
              </div>
              <p className="detail-box-desc">
                {lang === "vi" ? selectedTranche.cashFlowRisk : selectedTranche.cashFlowRiskEn}
              </p>
              <span className="detail-box-hint">
                {lang === "vi"
                  ? "Bảo vệ dòng tiền công ty là thước đo số 1 của một Project Manager thực chiến."
                  : "Cash flow governance is the primary benchmark of a battle-tested PM."}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Practical Critical Path To Cash (Sơ đồ đường găng phục vụ dòng tiền) */}
      <div className="pm-cpm-cash-flow-card">
        <div className="cpm-cash-head">
          <div className="cpm-cash-tag">
            <Workflow size={15} />
            <span>{lang === "vi" ? "ĐƯỜNG GĂNG CPM THỰC CHIẾN (CRITICAL PATH TO CASH)" : "CRITICAL PATH TO CASH"}</span>
          </div>
          <span className="cpm-cash-sub">
            {lang === "vi" ? "Chuỗi công việc sinh tử quyết định ngày tiền về tài khoản" : "The deterministic activity chain governing payment dates"}
          </span>
        </div>

        <h4 className="cpm-cash-title">
          {lang === "vi"
            ? "Mọi Task Trên Đường Găng Đều Phải Hướng Tới Mốc Nghiệm Thu Từng Đợt"
            : "Every Critical Path Activity Must Serve a Defensible Billing Gate"}
        </h4>

        {/* Sleek 5-Step Visual Flow */}
        <div className="cpm-linear-flow">
          <div className="cpm-flow-step">
            <div className="cpm-step-circle">1</div>
            <div className="cpm-step-body">
              <strong>Ký Project Charter</strong>
              <span>Tuần 1.0 (Dài 1 tuần)</span>
              <span className="cpm-money-tag collected">Đợt 1: $30,000 (25%)</span>
            </div>
          </div>

          <div className="cpm-flow-arrow" aria-hidden="true">
            <ChevronRight size={14} />
          </div>

          <div className="cpm-flow-step highlight">
            <div className="cpm-step-circle highlight">2</div>
            <div className="cpm-step-body">
              <strong>Chốt PRD & Scope Freeze</strong>
              <span>Tuần 3.5 (Dài 1.5 tuần)</span>
              <span className="cpm-money-tag collected">Đợt 2: $30,000 (25%)</span>
            </div>
          </div>

          <div className="cpm-flow-arrow" aria-hidden="true">
            <ChevronRight size={14} />
          </div>

          <div className="cpm-flow-step">
            <div className="cpm-step-circle">3</div>
            <div className="cpm-step-body">
              <strong>Core Engine Camunda</strong>
              <span>Tuần 7.0 (Dài 2 tuần)</span>
              <span className="cpm-money-tag active">Đợt 3: $30,000 (25%)</span>
            </div>
          </div>

          <div className="cpm-flow-arrow" aria-hidden="true">
            <ChevronRight size={14} />
          </div>

          <div className="cpm-flow-step">
            <div className="cpm-step-circle">4</div>
            <div className="cpm-step-body">
              <strong>QA Test & UAT Golive</strong>
              <span>Tuần 12.0 (Dài 3 tuần)</span>
              <span className="cpm-money-tag">Đợt 4: $24,000 (20%)</span>
            </div>
          </div>
        </div>

        <div className="cpm-rule-callout">
          <ShieldCheck size={16} color="#16a34a" />
          <p>
            {lang === "vi"
              ? "ĐỊNH NGHĨA ĐƯỜNG GĂNG THEO DÒNG TIỀN: Bất kỳ công việc nào trên chuỗi này bị trễ 1 ngày sẽ trực tiếp đẩy lùi ngày xuất hóa đơn đúng 1 ngày. Do đó, PM không phân tán nguồn lực vào các tính năng râu ria, mà tập trung 100% Core Dev để đưa dự án qua từng Cổng nghiệm thu (Billing Gates) đúng hẹn."
              : "CASH-FLOW CRITICAL PATH PRINCIPLE: Any 1-day delay on this deterministic chain directly delays customer invoicing by 1 day. A disciplined PM strictly directs core engineering to clear contracted payment gates."}
          </p>
        </div>
      </div>

      {/* 4. Scope Freeze Defense (Khóa phạm vi để chống giam tiền) */}
      <div className="scope-freeze-defense-grid">
        <div className="defense-card wrong">
          <div className="defense-header">
            <span className="defense-badge risk">{lang === "vi" ? "RỦI RO THỰC TẾ" : "COMMON PITFALL"}</span>
            <h5>{lang === "vi" ? "Mô Hình Quản Trị Lỏng Lẻo (Thiếu Kiểm Soát):" : "Uncontrolled Delivery (Risk of Cash Trap):"}</h5>
          </div>
          <ul className="defense-list">
            <li>Khách hàng đề xuất tính năng mới phát sinh trong lúc dev $\to$ PM nhận lời miệng không qua quy trình.</li>
            <li>Đội ngũ Dev bị phân tán nguồn lực, làm dở dang nhiều hạng mục ngoài hợp đồng.</li>
            <li>Mốc bàn giao Đợt 2 bị trễ tiến độ $\to$ Khách từ chối ký nghiệm thu $\to$ <strong>Dự án bị giam $30,000 (750 triệu VNĐ)</strong>!</li>
          </ul>
        </div>

        <div className="defense-card correct">
          <div className="defense-header">
            <span className="defense-badge standard">{lang === "vi" ? "CHUẨN SENIOR PM" : "BEST PRACTICE"}</span>
            <h5>{lang === "vi" ? "Quy Chuẩn Điều Phối Senior PM (Digityze Asia):" : "Senior PM Protocol (Digityze Asia):"}</h5>
          </div>
          <ul className="defense-list">
            <li>Ký Biên bản <strong>Scope Freeze</strong> ở Tuần 3.5 $\to$ Khách hàng nghiệm thu và <strong>chuyển ngay $30,000 Đợt 2</strong>.</li>
            <li>Yêu cầu tính năng mới: Lắng nghe, ghi nhận vào Backlog Phase 2, tuyệt đối không triển khai tự phát.</li>
            <li>Lập Change Request kèm dự toán phát sinh $\to$ Tối ưu doanh thu mà <strong>tiến độ đợt hiện tại vẫn về đích an toàn</strong>!</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
