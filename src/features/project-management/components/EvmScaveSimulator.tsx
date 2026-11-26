import { useState, useMemo } from "react";
import {
  BarChart3,
  Sparkles,
} from "lucide-react";
import type { Language } from "@/types";

interface EvmScaveSimulatorProps {
  lang: Language;
}

export function EvmScaveSimulator({ lang }: EvmScaveSimulatorProps) {
  // Preset Controls
  const [bac, setBac] = useState<number>(120000); // Budget At Completion ($120,000)
  const [plannedPercent, setPlannedPercent] = useState<number>(60); // 60% planned at Week 7
  const [actualPercent, setActualPercent] = useState<number>(65); // 65% completed (Ahead!)
  const [actualCost, setActualCost] = useState<number>(72000); // $72,000 spent

  // Core EVM Computations
  const pv = useMemo(() => Math.round((plannedPercent / 100) * bac), [plannedPercent, bac]);
  const ev = useMemo(() => Math.round((actualPercent / 100) * bac), [actualPercent, bac]);
  const ac = actualCost;

  // Variances
  const cv = ev - ac; // Cost Variance
  const sv = ev - pv; // Schedule Variance

  // Indices
  const cpi = ac > 0 ? Number((ev / ac).toFixed(3)) : 1.0;
  const spi = pv > 0 ? Number((ev / pv).toFixed(3)) : 1.0;

  // Forecasts
  const eac = cpi > 0 ? Math.round(bac / cpi) : bac; // Estimate At Completion
  const vac = bac - eac; // Variance At Completion
  const tcpi = bac > ac ? Number(((bac - ev) / (bac - ac)).toFixed(3)) : 1.0; // To-Complete Performance Index

  // Health Status Diagnosis
  const isCostGood = cpi >= 1.0;
  const isScheduleGood = spi >= 1.0;

  // Presets
  const applyPreset = (type: "nexus" | "optimal" | "cost-overrun" | "critical") => {
    if (type === "nexus") {
      setBac(120000);
      setPlannedPercent(60);
      setActualPercent(62.4);
      setActualCost(73400); // CPI = 1.02, SPI = 1.04
    } else if (type === "optimal") {
      setBac(150000);
      setPlannedPercent(50);
      setActualPercent(58);
      setActualCost(78000); // CPI = 1.11, SPI = 1.16
    } else if (type === "cost-overrun") {
      setBac(100000);
      setPlannedPercent(60);
      setActualPercent(65);
      setActualCost(76000); // Ahead of schedule, but over budget (CPI = 0.85)
    } else if (type === "critical") {
      setBac(120000);
      setPlannedPercent(70);
      setActualPercent(50);
      setActualCost(72000); // Behind schedule and over budget
    }
  };

  return (
    <div className="pm-evm-simulator-wrapper">
      {/* 1. Academic Theory & Theorem Card */}
      <div className="pm-academic-formula-card">
        <div className="formula-card-head">
          <div className="formula-card-tag">
            <BarChart3 size={13} />
            <span>{lang === "vi" ? "CHUẨN QUẢN TRỊ TÀI CHÍNH ANSI / EIA 748 EVM" : "FINANCIAL GOVERNANCE ANSI / EIA 748 EVM"}</span>
          </div>
          <span className="formula-standard-badge">PMBOK 7th · Earned Value Management</span>
        </div>

        <h3 className="formula-card-title">
          {lang === "vi"
            ? "Mô Hình Đo Lường Giá Trị Thu Được (EVM) & Dự Báo Điểm Rơi Ngân Sách (EAC)"
            : "Earned Value Management (EVM) & Mathematical Forecast Models"}
        </h3>

        <p className="formula-card-desc">
          {lang === "vi"
            ? "EVM là phương pháp toán học định lượng kết hợp cả 3 yếu tố: Phạm vi (Scope), Thời gian (Schedule) và Chi phí (Cost). Thay vì chỉ nhìn vào số tiền đã tiêu, EVM trả lời câu hỏi cốt tử của Ban Giám Đốc: 'Với số tiền đã chi, chúng ta đã THỰC SỰ SỞ HỮU bao nhiêu phần trăm giá trị phần mềm nghiệm thu?'"
            : "EVM quantitatively synthesizes Scope, Schedule, and Cost. Rather than merely tracking expenditures, it proves deterministic business value: 'For every dollar burned, exactly how much verified software capability has been delivered?'"}
        </p>

        <div className="formula-equations-grid">
          <div className="equation-item">
            <div className="equation-label">1. Chỉ Số Hiệu Năng Chi Phí (Cost Performance Index)</div>
            <div className="equation-math">
              <code>CV = EV - AC (Phương sai)</code>
              <code className={cpi >= 1.0 ? "code-good" : "code-warn"}>CPI = EV / AC {cpi >= 1.0 ? "(>1.0: Tiết kiệm)" : "(<1.0: Đội chi phí)"}</code>
            </div>
            <span className="equation-note">
              {lang === "vi" ? "CPI = 1.08 nghĩa là mỗi $1.00 bỏ ra ta thu về được $1.08 giá trị phần mềm." : "CPI = 1.08 indicates $1.08 worth of deliverable value for every $1.00 spent."}
            </span>
          </div>

          <div className="equation-item">
            <div className="equation-label">2. Chỉ Số Hiệu Năng Tiến Độ (Schedule Performance Index)</div>
            <div className="equation-math">
              <code>SV = EV - PV (Phương sai)</code>
              <code className={spi >= 1.0 ? "code-good" : "code-warn"}>SPI = EV / PV {spi >= 1.0 ? "(>1.0: Vượt tiến độ)" : "(<1.0: Chậm hạn)"}</code>
            </div>
            <span className="equation-note">
              {lang === "vi" ? "SPI = 1.05 nghĩa là dự án đang chạy nhanh hơn kế hoạch 5%." : "SPI = 1.05 indicates the project is progressing 5% faster than baseline."}
            </span>
          </div>

          <div className="equation-item accent">
            <div className="equation-label">3. Dự Báo Tổng Chi Phí Khi Về Đích (Estimate At Completion)</div>
            <div className="equation-math">
              <code>EAC = BAC / CPI</code>
              <code>VAC = BAC - EAC (Thặng dư/Thâm hụt)</code>
            </div>
            <span className="equation-note">
              {lang === "vi" ? "Dự báo toán học giúp PM chủ động cảnh báo vỡ ngân sách trước ít nhất 4 Sprints." : "Empowers proactive financial mitigation 4+ Sprints before final delivery."}
            </span>
          </div>
        </div>
      </div>

      {/* 2. Interactive Simulation Controller & Presets */}
      <div className="pm-evm-controls-card">
        <div className="controls-header-row">
          <div className="controls-title-group">
            <Sparkles size={16} color="#2563eb" />
            <h4>{lang === "vi" ? "Bảng Điều Khiển Tham Số Dự Án Mô Phỏng (Live Parameters):" : "Interactive Parameter Sandbox:"}</h4>
          </div>

          <div className="controls-presets-group">
            <span className="presets-label">{lang === "vi" ? "Kịch bản mẫu:" : "Presets:"}</span>
            <button
              type="button"
              className="preset-btn active"
              onClick={() => applyPreset("nexus")}
            >
              Nexus Express OMS (Thực tế)
            </button>
            <button
              type="button"
              className="preset-btn"
              onClick={() => applyPreset("optimal")}
            >
              Tối Ưu (CPI & SPI &gt; 1.0)
            </button>
            <button
              type="button"
              className="preset-btn warn"
              onClick={() => applyPreset("cost-overrun")}
            >
              Vượt Tiến Độ, Đội Chi Phí
            </button>
            <button
              type="button"
              className="preset-btn danger"
              onClick={() => applyPreset("critical")}
            >
              Nguy Cơ Vỡ Ngân Sách
            </button>
          </div>
        </div>

        {/* Sliders Grid */}
        <div className="evm-sliders-grid">
          {/* Slider 1: BAC */}
          <div className="slider-item">
            <div className="slider-label-row">
              <span className="slider-name">1. Ngân Sách Duyệt (BAC):</span>
              <strong className="slider-val">${bac.toLocaleString()}</strong>
            </div>
            <input
              type="range"
              min="50000"
              max="200000"
              step="5000"
              value={bac}
              onChange={(e) => setBac(Number(e.target.value))}
              className="evm-range-slider"
            />
            <span className="slider-hint">{lang === "vi" ? "Tổng ngân sách hợp đồng được phê duyệt" : "Total approved contract baseline"}</span>
          </div>

          {/* Slider 2: Planned % */}
          <div className="slider-item">
            <div className="slider-label-row">
              <span className="slider-name">2. Kế Hoạch Đến Tuần 7 (% PV):</span>
              <strong className="slider-val">{plannedPercent}% (${pv.toLocaleString()})</strong>
            </div>
            <input
              type="range"
              min="20"
              max="90"
              step="5"
              value={plannedPercent}
              onChange={(e) => setPlannedPercent(Number(e.target.value))}
              className="evm-range-slider"
            />
            <span className="slider-hint">{lang === "vi" ? "Khối lượng công việc dự kiến theo kế hoạch gốc" : "Planned baseline work completion target"}</span>
          </div>

          {/* Slider 3: Actual Completed % */}
          <div className="slider-item">
            <div className="slider-label-row">
              <span className="slider-name">3. Nghiệm Thu Thực Tế (% EV):</span>
              <strong className="slider-val" style={{ color: actualPercent >= plannedPercent ? "#16a34a" : "#dc2626" }}>
                {actualPercent}% (${ev.toLocaleString()})
              </strong>
            </div>
            <input
              type="range"
              min="20"
              max="100"
              step="1"
              value={actualPercent}
              onChange={(e) => setActualPercent(Number(e.target.value))}
              className="evm-range-slider"
            />
            <span className="slider-hint">{lang === "vi" ? "Giá trị công việc thực tế đã nghiệm thu DoD" : "Earned value signed off via Definition of Done"}</span>
          </div>

          {/* Slider 4: Actual Cost Spent */}
          <div className="slider-item">
            <div className="slider-label-row">
              <span className="slider-name">4. Chi Phí Thực Tế Đã Chi (AC):</span>
              <strong className="slider-val" style={{ color: ac <= ev ? "#16a34a" : "#dc2626" }}>
                ${ac.toLocaleString()}
              </strong>
            </div>
            <input
              type="range"
              min="30000"
              max="160000"
              step="2000"
              value={actualCost}
              onChange={(e) => setActualCost(Number(e.target.value))}
              className="evm-range-slider"
            />
            <span className="slider-hint">{lang === "vi" ? "Số tiền thực tế đã thanh toán cho dev & cloud" : "Actual expenditures paid to developers & cloud infra"}</span>
          </div>
        </div>
      </div>

      {/* 3. Live Mathematical Output Telemetry Cards */}
      <div className="pm-evm-telemetry-grid">
        {/* Card 1: CPI */}
        <div className={`evm-stat-card${isCostGood ? " is-good" : " is-bad"}`}>
          <div className="card-top">
            <span className="card-label">CPI (Cost Performance Index)</span>
            <span className={`status-pill${isCostGood ? " good" : " bad"}`}>
              {isCostGood ? "TỐI ƯU CHI PHÍ" : "ĐỘI NGÂN SÁCH"}
            </span>
          </div>
          <strong className="card-value">{cpi.toFixed(2)}</strong>
          <span className="card-formula">
            CV = EV - AC = {cv >= 0 ? `+$${cv.toLocaleString()}` : `-$${Math.abs(cv).toLocaleString()}`}
          </span>
          <p className="card-interpretation">
            {cpi >= 1.0
              ? (lang === "vi" ? `Tiết kiệm ${((cpi - 1) * 100).toFixed(1)}% ngân sách so với kế hoạch.` : `Saving ${((cpi - 1) * 100).toFixed(1)}% budget against plan.`)
              : (lang === "vi" ? `Đội chi phí ${((1 - cpi) * 100).toFixed(1)}%, mỗi $1 thu về chỉ đáng giá $${cpi}.` : `Over budget by ${((1 - cpi) * 100).toFixed(1)}%.`)}
          </p>
        </div>

        {/* Card 2: SPI */}
        <div className={`evm-stat-card${isScheduleGood ? " is-good" : " is-bad"}`}>
          <div className="card-top">
            <span className="card-label">SPI (Schedule Performance Index)</span>
            <span className={`status-pill${isScheduleGood ? " good" : " bad"}`}>
              {isScheduleGood ? "VƯỢT TIẾN ĐỘ" : "CHẬM TIẾN ĐỘ"}
            </span>
          </div>
          <strong className="card-value">{spi.toFixed(2)}</strong>
          <span className="card-formula">
            SV = EV - PV = {sv >= 0 ? `+$${sv.toLocaleString()}` : `-$${Math.abs(sv).toLocaleString()}`}
          </span>
          <p className="card-interpretation">
            {spi >= 1.0
              ? (lang === "vi" ? `Tiến độ chạy nhanh hơn ${((spi - 1) * 100).toFixed(1)}% so với kế hoạch ban đầu.` : `Progressing ${((spi - 1) * 100).toFixed(1)}% faster than schedule.`)
              : (lang === "vi" ? `Chậm tiến độ ${((1 - spi) * 100).toFixed(1)}%, cần can thiệp nguồn lực đường găng.` : `Behind schedule by ${((1 - spi) * 100).toFixed(1)}%.`)}
          </p>
        </div>

        {/* Card 3: EAC Forecast */}
        <div className="evm-stat-card neutral">
          <div className="card-top">
            <span className="card-label">DỰ BÁO VỀ ĐÍCH (EAC)</span>
            <span className="status-pill blue">FORECAST</span>
          </div>
          <strong className="card-value">${eac.toLocaleString()}</strong>
          <span className="card-formula">
            VAC = BAC - EAC = {vac >= 0 ? `+$${vac.toLocaleString()}` : `-$${Math.abs(vac).toLocaleString()}`}
          </span>
          <p className="card-interpretation">
            {vac >= 0
              ? (lang === "vi" ? `Dự báo kết thúc dự án TIẾT KIỆM $${vac.toLocaleString()} cho chủ đầu tư.` : `Projected to finish with $${vac.toLocaleString()} savings.`)
              : (lang === "vi" ? `Cảnh báo: Dự báo thiếu hụt $${Math.abs(vac).toLocaleString()} khi nghiệm thu.` : `Projected cost overrun of $${Math.abs(vac).toLocaleString()}.`)}
          </p>
        </div>

        {/* Card 4: TCPI */}
        <div className="evm-stat-card neutral">
          <div className="card-top">
            <span className="card-label">ÁP LỰC VỀ ĐÍCH (TCPI)</span>
            <span className={`status-pill${tcpi <= 1.0 ? " good" : " bad"}`}>
              {tcpi <= 1.0 ? "KHẢ THI" : "ÁP LỰC CAO"}
            </span>
          </div>
          <strong className="card-value">{tcpi.toFixed(2)}</strong>
          <span className="card-formula">TCPI = (BAC - EV) / (BAC - AC)</span>
          <p className="card-interpretation">
            {tcpi <= 1.0
              ? (lang === "vi" ? "Các Sprints còn lại chỉ cần đạt hiệu năng bình thường là về đích an toàn." : "Remaining sprints require normal velocity to deliver on budget.")
              : (lang === "vi" ? `Đội ngũ phải đạt hiệu năng gấp ${tcpi} lần bình thường mới kịp cứu ngân sách!` : "Team must perform with elevated velocity to salvage budget.")}
          </p>
        </div>
      </div>

      {/* 4. Interactive Vector SVG S-Curve Chart */}
      <div className="pm-scurve-canvas-card">
        <div className="scurve-header-row">
          <div className="scurve-title-group">
            <BarChart3 size={16} color="#2563eb" />
            <h4>{lang === "vi" ? "Biểu Đồ Đường Cong Chữ S Tích Lũy (Cumulative S-Curve Diagram):" : "Cumulative S-Curve Performance Tracking:"}</h4>
          </div>

          <div className="scurve-legend-row">
            <span className="legend-item"><span className="legend-line pv" /> PV (Planned Baseline)</span>
            <span className="legend-item"><span className="legend-line ev" /> EV (Earned Value)</span>
            <span className="legend-item"><span className="legend-line ac" /> AC (Actual Cost)</span>
            <span className="legend-item"><span className="legend-line eac" /> Dự báo EAC Trend</span>
          </div>
        </div>

        <svg viewBox="0 0 960 320" className="pm-scurve-svg" preserveAspectRatio="xMidYMid meet">
          <defs>
            <linearGradient id="scurveEvGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#10b981" stopOpacity="0.0" />
            </linearGradient>
          </defs>

          {/* Grid lines */}
          <line x1="80" y1="40" x2="900" y2="40" stroke="#e2e8f0" strokeDasharray="3 3" />
          <line x1="80" y1="100" x2="900" y2="100" stroke="#e2e8f0" strokeDasharray="3 3" />
          <line x1="80" y1="160" x2="900" y2="160" stroke="#e2e8f0" strokeDasharray="3 3" />
          <line x1="80" y1="220" x2="900" y2="220" stroke="#e2e8f0" strokeDasharray="3 3" />
          <line x1="80" y1="270" x2="900" y2="270" stroke="#cbd5e1" strokeWidth="1.5" />

          {/* Y Axis Labels */}
          <text x="70" y="45" textAnchor="end" fontFamily="var(--studio-font-mono)" fontSize="10" fill="#64748b">$150k</text>
          <text x="70" y="105" textAnchor="end" fontFamily="var(--studio-font-mono)" fontSize="10" fill="#64748b">$100k</text>
          <text x="70" y="165" textAnchor="end" fontFamily="var(--studio-font-mono)" fontSize="10" fill="#64748b">$70k</text>
          <text x="70" y="225" textAnchor="end" fontFamily="var(--studio-font-mono)" fontSize="10" fill="#64748b">$35k</text>
          <text x="70" y="274" textAnchor="end" fontFamily="var(--studio-font-mono)" fontSize="10" fill="#64748b">$0</text>

          {/* X Axis Weeks Labels */}
          <text x="80" y="295" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="10" fill="#64748b">W1</text>
          <text x="216" y="295" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="10" fill="#64748b">W3</text>
          <text x="352" y="295" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="10" fill="#64748b">W5</text>
          <text x="490" y="295" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="10" fontWeight="800" fill="#2563eb">W7 (Hiện tại)</text>
          <text x="626" y="295" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="10" fill="#64748b">W9</text>
          <text x="762" y="295" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="10" fill="#64748b">W11</text>
          <text x="898" y="295" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="10" fill="#64748b">W12 (Golive)</text>

          {/* Data Date Line (Week 7) */}
          <line x1="490" y1="30" x2="490" y2="270" stroke="#2563eb" strokeWidth="2" strokeDasharray="4 3" />
          <rect x="440" y="10" width="100" height="20" rx="4" fill="#eff6ff" stroke="#bfdbfe" />
          <text x="490" y="24" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="9" fontWeight="800" fill="#1d4ed8">
            DATA DATE T_now
          </text>

          {/* PV Baseline S-Curve (Dashed slate line from W1 to W12) */}
          <path
            d="M 80 270 Q 250 250 350 200 T 490 160 T 700 80 T 898 50"
            fill="none"
            stroke="#94a3b8"
            strokeWidth="3"
            strokeDasharray="6 4"
          />

          {/* EV S-Curve (Solid Emerald line up to Week 7) */}
          {/* Dynamic Y mapped: 0% = 270, 100% = 50 */}
          {(() => {
            const evY = 270 - (actualPercent / 100) * 220;
            const acY = 270 - (ac / 150000) * 220;
            const pvY = 270 - (plannedPercent / 100) * 220;
            const eacY = 270 - (eac / 150000) * 220;

            return (
              <>
                {/* EV Line */}
                <path
                  d={`M 80 270 Q 250 250 350 200 T 490 ${evY}`}
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="3.5"
                />
                <circle cx="490" cy={evY} r="6" fill="#10b981" stroke="#ffffff" strokeWidth="2" />
                <text x="505" y={evY + 4} fontFamily="var(--studio-font-mono)" fontSize="10" fontWeight="900" fill="#059669">
                  EV: ${ev.toLocaleString()}
                </text>

                {/* AC Line */}
                <path
                  d={`M 80 270 Q 240 255 340 210 T 490 ${acY}`}
                  fill="none"
                  stroke="#f97316"
                  strokeWidth="3"
                />
                <circle cx="490" cy={acY} r="5" fill="#f97316" stroke="#ffffff" strokeWidth="2" />
                <text x="505" y={acY + 16} fontFamily="var(--studio-font-mono)" fontSize="10" fontWeight="900" fill="#ea580c">
                  AC: ${ac.toLocaleString()}
                </text>

                {/* PV Point */}
                <circle cx="490" cy={pvY} r="4" fill="#64748b" />

                {/* EAC Projection dashed line from W7 to W12 */}
                <path
                  d={`M 490 ${acY} Q 694 ${(acY + eacY) / 2} 898 ${eacY}`}
                  fill="none"
                  stroke={vac >= 0 ? "#10b981" : "#ef4444"}
                  strokeWidth="2.5"
                  strokeDasharray="4 4"
                />
                <circle cx="898" cy={eacY} r="6" fill={vac >= 0 ? "#10b981" : "#ef4444"} stroke="#ffffff" strokeWidth="2" />
                <text x="898" y={eacY - 12} textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="10.5" fontWeight="900" fill={vac >= 0 ? "#059669" : "#dc2626"}>
                  EAC: ${eac.toLocaleString()}
                </text>
              </>
            );
          })()}
        </svg>
      </div>

      {/* 5. Boardroom Executive Diagnosis Card */}
      <div className={`pm-executive-diagnosis-card${isCostGood && isScheduleGood ? " optimal" : isCostGood || isScheduleGood ? " caution" : " danger"}`}>
        <div className="diagnosis-head">
          <div className="diagnosis-badge">
            <Sparkles size={14} />
            <span>{lang === "vi" ? "KẾT LUẬN & KHUYẾN NGHỊ HÀNH ĐỘNG CỦA SENIOR PM" : "BOARDROOM PM GOVERNANCE VERDICT"}</span>
          </div>
          <strong className="diagnosis-status-text">
            {isCostGood && isScheduleGood && (lang === "vi" ? "DỰ ÁN KHỎE MẠNH (HEALTHY / EXCELLENT TRACK)" : "HEALTHY PROJECT TRACK")}
            {!isCostGood && isScheduleGood && (lang === "vi" ? "CẢNH BÁO: VƯỢT TIẾN ĐỘ NHƯNG CẦN PHANH CHI PHÍ (COST AT RISK)" : "SCHEDULE AHEAD, COST AT RISK")}
            {isCostGood && !isScheduleGood && (lang === "vi" ? "CẢNH BÁO: TIẾT KIỆM TIỀN NHƯNG CHẬM TIẾN ĐỘ (SCHEDULE AT RISK)" : "UNDER BUDGET, SCHEDULE AT RISK")}
            {!isCostGood && !isScheduleGood && (lang === "vi" ? "BÁO ĐỘNG ĐỎ: NGUY CƠ VỠ HỢP ĐỒNG (CRITICAL DRIFT)" : "CRITICAL DRIFT / CONTRACT AT RISK")}
          </strong>
        </div>

        <p className="diagnosis-body">
          {isCostGood && isScheduleGood && (
            lang === "vi"
              ? `Dự án đạt trạng thái lý tưởng (CPI = ${cpi} > 1.0 và SPI = ${spi} > 1.0). Khối lượng hoàn thành thực tế đạt $${ev.toLocaleString()} vượt kế hoạch $${sv.toLocaleString()}. Chi phí thực tế thấp hơn giá trị thu được $${cv.toLocaleString()}. Dự báo kết thúc dự án tiết kiệm được $${vac.toLocaleString()} so với ngân sách ký kết ban đầu ($${bac.toLocaleString()}). Khuyến nghị: Giữ vững nhịp độ Sprint velocity hiện tại, tăng cường kiểm thử UAT để chuẩn bị nghiệm thu sớm.`
              : `Project operates in optimal governance territory (CPI = ${cpi} > 1.0, SPI = ${spi} > 1.0). Earned value of $${ev.toLocaleString()} exceeds baseline by $${sv.toLocaleString()}. Net savings of $${cv.toLocaleString()} realized.`
          )}

          {!isCostGood && isScheduleGood && (
            lang === "vi"
              ? `Dự án đang bàn giao khối lượng vượt tiến độ (SPI = ${spi}), tuy nhiên đang bị đội chi phí đáng kể (CPI = ${cpi} < 1.0). Với tốc độ tiêu tiền này, dự toán về đích sẽ tốn $${eac.toLocaleString()} (thâm hụt $${Math.abs(vac).toLocaleString()}). Khuyến nghị: Ngay lập tức rà soát chi phí làm thêm giờ (Overtime), tạm hoãn bổ sung nhân sự ngoài luồng, và kiểm soát chặt hóa đơn dịch vụ Cloud AWS/GCP.`
              : `Team is delivering ahead of schedule (SPI = ${spi}), but cost efficiency has degraded (CPI = ${cpi} < 1.0). Projected budget overrun of $${Math.abs(vac).toLocaleString()}. Action: Restrict overtime and audit cloud infrastructure consumption.`
          )}

          {isCostGood && !isScheduleGood && (
            lang === "vi"
              ? `Dự án đang tiết kiệm ngân sách (CPI = ${cpi} > 1.0) nhưng bị chậm tiến độ bàn giao (SPI = ${spi} < 1.0, thâm hụt $${Math.abs(sv).toLocaleString()} khối lượng công việc). Khuyến nghị: Sử dụng phần ngân sách tiết kiệm ($${cv.toLocaleString()}) để kích hoạt kỹ thuật Nén Tiến Độ (Crashing) — bổ sung Dev Senior vào các task trên đường găng WBS 2.3 & 4.1 để kéo lại tiến độ.`
              : `Project is saving funds (CPI = ${cpi}) but lagging behind schedule (SPI = ${spi} < 1.0). Action: Allocate available budget buffer to crash critical path bottleneck activities.`
          )}

          {!isCostGood && !isScheduleGood && (
            lang === "vi"
              ? `TÌNH TRẠNG NGUY HIỂM: Dự án vừa chậm tiến độ (SPI = ${spi}) vừa vượt chi phí (CPI = ${cpi}). Dự báo về đích sẽ đội thêm $${Math.abs(vac).toLocaleString()}. Khuyến nghị khẩn cấp: Triệu tập cuộc họp Ban chỉ đạo (Steering Committee), kích hoạt quy trình Change Request để đàm phán lại phạm vi (Scope Descoping) hoặc gia hạn mốc nghiệm thu Golive.`
              : `CRITICAL ALERT: Both cost and schedule tolerances breached (CPI = ${cpi}, SPI = ${spi}). Action: Convene Steering Committee immediately to negotiate scope descoping or baseline realignment.`
          )}
        </p>
      </div>
    </div>
  );
}
