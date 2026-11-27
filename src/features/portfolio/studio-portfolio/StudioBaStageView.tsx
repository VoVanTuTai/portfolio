import { useState, useEffect } from "react";
import {
  CheckCircle2,
  Database,
  FileText,
  Layers,
  Network,
  Sparkles,
  Users2,
  Workflow,
} from "lucide-react";
import type { Language } from "@/types";
import type { PortfolioItem } from "@/data/portfolio-tree.data";
import { BaLifecycle25dSimulator } from "@/features/portfolio/studio-portfolio/simulators/BaLifecycle25dSimulator";
import { BaActivity25dSimulator } from "@/features/portfolio/studio-portfolio/simulators/BaActivity25dSimulator";
import { BaDdd25dSimulator } from "@/features/portfolio/studio-portfolio/simulators/BaDdd25dSimulator";
import { BaErd25dSimulator } from "@/features/portfolio/studio-portfolio/simulators/BaErd25dSimulator";

interface StudioBaStageViewProps {
  item: PortfolioItem;
  lang: Language;
  onSelectItem?: (slug: string) => void;
}

type BaSubTab = "lifecycle" | "elicitation" | "backlog" | "diagrams";
type DiagramType = "activity" | "usecase-diagram" | "usecase-spec" | "sequence" | "domain-ddd" | "erd-3nf";

export function StudioBaStageView({
  item,
  lang,
}: StudioBaStageViewProps) {
  const getActiveTab = (): BaSubTab => {
    if (item.slug === "ba-elicitation") return "elicitation";
    if (item.slug === "ba-backlog") return "backlog";
    if (item.slug.startsWith("ba-diagrams")) return "diagrams";
    return "lifecycle";
  };

  const getActiveDiagram = (): DiagramType => {
    if (item.slug === "ba-diagrams-activity") return "activity";
    if (item.slug === "ba-diagrams-sequence") return "sequence";
    if (item.slug === "ba-diagrams-ddd") return "domain-ddd";
    if (item.slug === "ba-diagrams-erd") return "erd-3nf";
    return "usecase-spec";
  };

  const activeTab = getActiveTab();
  const [activeDiagram, setActiveDiagram] = useState<DiagramType>(getActiveDiagram);
  const [activeUsecaseFlow, setActiveUsecaseFlow] = useState<"main" | "alt" | "exception">("main");

  useEffect(() => {
    setActiveDiagram(getActiveDiagram());
  }, [item.slug]);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>

      {/* 2. Top Banner Philosophy */}
      <div
        style={{
          padding: "16px 20px",
          borderRadius: "10px",
          background: "linear-gradient(135deg, #eff6ff 0%, #f8fbff 100%)",
          border: "1.5px solid #bfdbfe",
          display: "flex",
          flexDirection: "column",
          gap: "6px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <Sparkles size={16} color="#2563eb" />
          <strong
            style={{
              fontSize: "13px",
              color: "#1e40af",
              textTransform: "uppercase",
              letterSpacing: "0.04em",
              fontFamily: "var(--studio-font-sans)",
            }}
          >
            {lang === "vi"
              ? "Năng Lực IT Business Analyst Thực Chiến — Cầu Nối Giữa Nghiệp Vụ & Lập Trình"
              : "Senior IT Business Analyst Toolkit — Bridging Business & Engineering"}
          </strong>
        </div>
        <p
          style={{
            margin: 0,
            fontSize: "13px",
            color: "#1e3a8a",
            lineHeight: 1.6,
            fontWeight: 600,
            fontFamily: "var(--studio-font-sans)",
          }}
        >
          {lang === "vi"
            ? "Một Senior IT BA không chỉ ghi chép lời người dùng, mà phải đào sâu bản chất vấn đề (Root Cause), chuẩn hóa thành tài liệu đặc tả chặt chẽ không kẽ hở, mô hình hóa luồng dữ liệu 3NF và cùng PM kiểm soát phạm vi bàn giao."
            : "A senior IT BA uncovers root problems, translates business needs into airtight specifications, models 3NF data flows, and collaborates with PM to prevent scope creep."}
        </p>
      </div>

      {/* ====================================================================
          TAB 1: END-TO-END BA LIFECYCLE (5 BƯỚC THỰC CHIẾN)
          ==================================================================== */}
      {activeTab === "lifecycle" && (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <BaLifecycle25dSimulator lang={lang} />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "14px",
            }}
          >
            {[
              {
                step: "01",
                titleVi: "Khảo Sát & Khám Phá (Elicitation)",
                descVi: "Phỏng vấn 1-on-1 với lãnh đạo, Workshop JAD với các phòng ban, thu thập tài liệu biểu mẫu hiện tại và phân tích As-Is.",
                deliverable: "Stakeholder Matrix · As-Is Map · Problem Statement",
                color: "#2563eb",
              },
              {
                step: "02",
                titleVi: "Phân Tích & Mô Hình Hóa (Analysis & Modeling)",
                descVi: "Bóc tách quy trình To-Be, vẽ Activity Swimlanes, phân rã Use Case và dựng kiến trúc thực thể quan hệ dữ liệu 3NF.",
                deliverable: "BPMN 2.0 · Activity · Sequence · ERD 3NF",
                color: "#0284c7",
              },
              {
                step: "03",
                titleVi: "Soạn Thảo Đặc Tả (Specification)",
                descVi: "Viết tài liệu PRD, Functional Specs chi tiết cho Dev và QA, quy định mã lỗi HTTP, Idempotency và Acceptance Criteria.",
                deliverable: "PRD / SRS Specs · Gherkin AC · API Contracts",
                color: "#059669",
              },
              {
                step: "04",
                titleVi: "Thẩm Định & Nghiệm Thu UAT (Validation & UAT)",
                descVi: "Cùng QA đối soát Test Cases, làm trọng tài giải thích nghiệp vụ cho Dev và làm việc với khách hàng trong đợt thử nghiệm UAT.",
                deliverable: "Traceability Matrix · UAT Sign-off Report",
                color: "#7c3aed",
              },
              {
                step: "05",
                titleVi: "Đóng Băng Phạm Vi & Bàn Giao (Scope Control)",
                descVi: "Thiết lập mốc Scope Freeze Gate, thẩm định chi phí và tiến độ mọi Change Request (CR) trước khi phê duyệt.",
                deliverable: "CR Assessment Form · Training User Manual",
                color: "#ea580c",
              },
            ].map((st) => (
              <div
                key={st.step}
                style={{
                  padding: "16px 18px",
                  borderRadius: "10px",
                  background: "#ffffff",
                  border: "1.5px solid #d8e6f5",
                  boxShadow: "0 2px 5px rgba(15, 23, 42, 0.03)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <span
                    style={{
                      fontFamily: "var(--font-mono, monospace)",
                      fontSize: "12px",
                      fontWeight: 850,
                      color: st.color,
                      background: "#f0f7ff",
                      padding: "3px 8px",
                      borderRadius: "5px",
                      border: `1px solid ${st.color}40`,
                    }}
                  >
                    BƯỚC {st.step}
                  </span>
                  <CheckCircle2 size={16} color={st.color} />
                </div>
                <strong style={{ fontSize: "14px", color: "#0f172a" }}>{st.titleVi}</strong>
                <p style={{ margin: 0, fontSize: "12.5px", color: "#475569", lineHeight: 1.55 }}>
                  {st.descVi}
                </p>
                <div
                  style={{
                    marginTop: "auto",
                    paddingTop: "8px",
                    borderTop: "1px dashed #e2e8f0",
                    fontSize: "11px",
                    fontFamily: "var(--font-mono, monospace)",
                    color: "#0369a1",
                    fontWeight: 700,
                  }}
                >
                  Kết quả bàn giao: {st.deliverable}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ====================================================================
          TAB 2: REQUIREMENTS ELICITATION & RACI
          ==================================================================== */}
      {activeTab === "elicitation" && (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div
            style={{
              padding: "18px 20px",
              borderRadius: "10px",
              background: "#ffffff",
              border: "1.5px solid #d8e6f5",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
              <Users2 size={18} color="#2563eb" />
              <h3 style={{ margin: 0, fontSize: "15px", color: "#0f172a" }}>
                Ma Trận Phân Quyền Trách Nhiệm (RACI Matrix) Trong Dự Án Phần Mềm
              </h3>
            </div>
            <p style={{ margin: "0 0 14px 0", fontSize: "13px", color: "#475569", lineHeight: 1.6 }}>
              Quy định rõ ai là người Thực hiện (Responsible), Chịu trách nhiệm tối hậu (Accountable), Cần tham vấn (Consulted), và Được thông báo (Informed) để loại bỏ hoàn toàn đùn đẩy trách nhiệm.
            </p>

            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "12px" }}>
                <thead>
                  <tr style={{ background: "#f8fafc", borderBottom: "2px solid #cbd5e1" }}>
                    <th style={{ padding: "10px 12px", textAlign: "left", color: "#0f172a" }}>Công việc / Cột mốc</th>
                    <th style={{ padding: "10px 8px", textAlign: "center", color: "#2563eb" }}>Senior IT BA</th>
                    <th style={{ padding: "10px 8px", textAlign: "center", color: "#0284c7" }}>Project Manager</th>
                    <th style={{ padding: "10px 8px", textAlign: "center", color: "#059669" }}>Tech Lead / Dev</th>
                    <th style={{ padding: "10px 8px", textAlign: "center", color: "#d97706" }}>QA / Tester</th>
                    <th style={{ padding: "10px 8px", textAlign: "center", color: "#7c3aed" }}>Khách Hàng (Client)</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { task: "Khảo sát phỏng vấn Stakeholder & Lập Problem Space", r: "R", pm: "A", d: "I", q: "I", c: "C" },
                    { task: "Soạn thảo PRD & Functional Specifications", r: "R / A", pm: "C", d: "C", q: "C", c: "I" },
                    { task: "Mô hình hóa Luồng Nghiệp Vụ & Sơ đồ API Sequence", r: "R", pm: "I", d: "C", q: "C", c: "I" },
                    { task: "Đóng băng phạm vi (Scope Freeze Gate)", r: "C", pm: "R / A", d: "C", q: "I", c: "A" },
                    { task: "Tổ chức kiểm thử chấp nhận người dùng (UAT Sign-off)", r: "R", pm: "A", d: "C", q: "R", c: "A" },
                  ].map((row, idx) => (
                    <tr key={idx} style={{ borderBottom: "1px solid #e2e8f0" }}>
                      <td style={{ padding: "10px 12px", fontWeight: 700, color: "#1e293b" }}>{row.task}</td>
                      <td style={{ padding: "10px 8px", textAlign: "center", fontWeight: 850, color: "#2563eb" }}>{row.r}</td>
                      <td style={{ padding: "10px 8px", textAlign: "center", fontWeight: 850, color: "#0284c7" }}>{row.pm}</td>
                      <td style={{ padding: "10px 8px", textAlign: "center", fontWeight: 850, color: "#059669" }}>{row.d}</td>
                      <td style={{ padding: "10px 8px", textAlign: "center", fontWeight: 850, color: "#d97706" }}>{row.q}</td>
                      <td style={{ padding: "10px 8px", textAlign: "center", fontWeight: 850, color: "#7c3aed" }}>{row.c}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div style={{ display: "flex", gap: "16px", marginTop: "12px", fontSize: "11px", color: "#64748b" }}>
              <span><strong>R</strong> = Responsible (Thực hiện)</span>
              <span><strong>A</strong> = Accountable (Chịu trách nhiệm tối hậu)</span>
              <span><strong>C</strong> = Consulted (Tham vấn 2 chiều)</span>
              <span><strong>I</strong> = Informed (Được thông báo 1 chiều)</span>
            </div>
          </div>
        </div>
      )}

      {/* ====================================================================
          TAB 3: FEATURE BACKLOG, INVEST & GHERKIN
          ==================================================================== */}
      {activeTab === "backlog" && (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {/* Backlog Item Card Example */}
          <div
            style={{
              padding: "18px 20px",
              borderRadius: "10px",
              background: "#ffffff",
              border: "1.5px solid #d8e6f5",
              display: "flex",
              flexDirection: "column",
              gap: "14px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "8px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <span
                  style={{
                    fontFamily: "var(--font-mono, monospace)",
                    fontSize: "11px",
                    fontWeight: 850,
                    padding: "3px 8px",
                    borderRadius: "5px",
                    background: "#eff6ff",
                    color: "#2563eb",
                    border: "1px solid #bfdbfe",
                  }}
                >
                  STORY-LOG-042
                </span>
                <strong style={{ fontSize: "14.5px", color: "#0f172a" }}>
                  Shipper quét mã QR bưu kiện nhập kho trạm trung chuyển
                </strong>
              </div>
              <div style={{ display: "flex", gap: "6px" }}>
                <span style={{ fontSize: "10.5px", fontWeight: 800, padding: "2px 8px", borderRadius: "4px", background: "#fef2f2", color: "#dc2626", border: "1px solid #fecaca" }}>
                  MoSCoW: MUST-HAVE
                </span>
                <span style={{ fontSize: "10.5px", fontWeight: 800, padding: "2px 8px", borderRadius: "4px", background: "#f0fdf4", color: "#16a34a", border: "1px solid #bbf7d0" }}>
                  STORY POINTS: 5
                </span>
              </div>
            </div>

            {/* User Story Formula */}
            <div
              style={{
                padding: "12px 14px",
                borderRadius: "8px",
                background: "#f8fafc",
                border: "1px solid #e2e8f0",
                fontSize: "13px",
                color: "#1e293b",
                lineHeight: 1.6,
              }}
            >
              <strong>Là một:</strong> Tài xế giao nhận (Shipper Courier)<br />
              <strong>Tôi muốn:</strong> Quét nhanh mã QR trên bưu kiện bằng camera điện thoại ngay cả khi mất sóng 4G<br />
              <strong>Để mà:</strong> Bưu kiện được ghi nhận nhập kho trạm trung chuyển, tính cước giao vận chính xác và không bao giờ bị ghi đè trùng lặp dữ liệu.
            </div>

            {/* Gherkin AC Specification */}
            <div>
              <strong style={{ fontSize: "13px", color: "#0f172a", display: "block", marginBottom: "8px" }}>
                Tiêu Chí Nghiệm Thu Chuẩn Gherkin (Acceptance Criteria):
              </strong>
              <div
                style={{
                  fontFamily: "var(--font-mono, monospace)",
                  fontSize: "11.5px",
                  lineHeight: 1.65,
                  padding: "12px 14px",
                  borderRadius: "8px",
                  background: "#0f172a",
                  color: "#e2e8f0",
                }}
              >
                <span style={{ color: "#38bdf8" }}>Scenario 1: Quét mã hợp lệ trong điều kiện mạng ổn định</span><br />
                <span style={{ color: "#94a3b8" }}>Given</span> Shipper đã đăng nhập thành công vào ứng dụng Courier App<br />
                <span style={{ color: "#94a3b8" }}>And</span> Bưu kiện mã "NX-88992" đang ở trạng thái "IN_TRANSIT"<br />
                <span style={{ color: "#94a3b8" }}>When</span> Shipper quét camera vào mã QR bưu kiện<br />
                <span style={{ color: "#94a3b8" }}>Then</span> Hệ thống chuyển trạng thái sang "HUB_ARRIVED" trong vòng dưới 200ms<br />
                <span style={{ color: "#94a3b8" }}>And</span> Thiết bị phát âm thanh "Bíp" xác nhận và rung nhẹ phản hồi.<br /><br />
                <span style={{ color: "#f87171" }}>Scenario 2: Chống bấm đúp quét trùng 2 lần liên tiếp (Idempotency Protection)</span><br />
                <span style={{ color: "#94a3b8" }}>Given</span> Request quét đơn hàng kèm header `Idempotency-Key: scan-uuid-001` đã được gửi<br />
                <span style={{ color: "#94a3b8" }}>When</span> Shipper bấm nút quét lần 2 trong vòng 60 giây tiếp theo<br />
                <span style={{ color: "#94a3b8" }}>Then</span> API Gateway trả về mã HTTP 200 kèm kết quả từ Redis Lock Cache<br />
                <span style={{ color: "#94a3b8" }}>And</span> Cơ sở dữ liệu PostgreSQL không sinh thêm bất kỳ dòng dữ liệu trùng lặp nào.
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ====================================================================
          TAB 4: SENIOR DIAGRAMS STUDIO (6 SƠ ĐỒ CHUẨN MỰC)
          ==================================================================== */}
      {activeTab === "diagrams" && (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {/* Diagram Selector Pills */}
          <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
            {[
              { id: "usecase-spec", labelVi: "1. Đặc Tả Use Case Chi Tiết (Fully Dressed)", icon: FileText },
              { id: "sequence", labelVi: "2. Sequence Diagram Chuẩn API", icon: Network },
              { id: "activity", labelVi: "3. Activity Diagram (Swimlanes)", icon: Workflow },
              { id: "usecase-diagram", labelVi: "4. Use Case Diagram Tổng Quát", icon: Users2 },
              { id: "domain-ddd", labelVi: "5. Domain-Driven Design (DDD)", icon: Layers },
              { id: "erd-3nf", labelVi: "6. Thiết Kế CSDL Quan Hệ (ERD 3NF)", icon: Database },
            ].map((d) => {
              const Icon = d.icon;
              const isActive = activeDiagram === d.id;
              return (
                <button
                  key={d.id}
                  type="button"
                  onClick={() => setActiveDiagram(d.id as DiagramType)}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    padding: "7px 12px",
                    borderRadius: "6px",
                    border: isActive ? "1px solid #1d4ed8" : "1px solid #cbd5e1",
                    background: isActive ? "#2563eb" : "#ffffff",
                    color: isActive ? "#ffffff" : "#334155",
                    fontSize: "11.5px",
                    fontWeight: 750,
                    cursor: "pointer",
                    boxShadow: isActive ? "0 1px 3px rgba(37, 99, 235, 0.3)" : "none",
                  }}
                >
                  <Icon size={13} color={isActive ? "#ffffff" : "#64748b"} />
                  <span>{d.labelVi}</span>
                </button>
              );
            })}
          </div>

          {/* DIAGRAM 1: FULLY DRESSED USE CASE SPECIFICATION */}
          {activeDiagram === "usecase-spec" && (
            <div
              style={{
                padding: "20px",
                borderRadius: "10px",
                background: "#ffffff",
                border: "1.5px solid #d8e6f5",
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #e2e8f0", paddingBottom: "12px" }}>
                <div>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "#2563eb", fontWeight: 800 }}>
                    USE CASE SPECIFICATION ID: UC-LOG-01
                  </span>
                  <h3 style={{ margin: "4px 0 0 0", fontSize: "16px", color: "#0f172a" }}>
                    Quét Mã Vạch Bưu Kiện & Nhập Kho Trạm Trung Chuyển (Hub Ingestion)
                  </h3>
                </div>
                <span style={{ fontSize: "11px", fontWeight: 800, padding: "3px 10px", borderRadius: "5px", background: "#f0fdf4", color: "#166534", border: "1px solid #bbf7d0" }}>
                  STATUS: APPROVED FOR DEV
                </span>
              </div>

              {/* Metadata Grid */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                  gap: "10px",
                  fontSize: "12px",
                  background: "#f8fafc",
                  padding: "12px",
                  borderRadius: "8px",
                  border: "1px solid #e2e8f0",
                }}
              >
                <div><strong>Actor Chính (Primary Actor):</strong> Tài Xế Giao Nhận (Shipper Courier)</div>
                <div><strong>Actor Phụ (Secondary):</strong> Nhân Viên Điều Phối, Hệ Thống ERP Kế Toán</div>
                <div><strong>Tiền điều kiện (Pre-conditions):</strong> Tài xế đã đăng nhập bằng JWT hợp lệ; đơn hàng ở trạng thái `IN_TRANSIT`.</div>
                <div><strong>Hậu điều kiện (Post-conditions):</strong> Đơn hàng chuyển sang `HUB_ARRIVED`, ghi sổ cái Audit Trail bất biến.</div>
              </div>

              {/* Flow Selector */}
              <div style={{ display: "flex", gap: "6px" }}>
                <button
                  type="button"
                  onClick={() => setActiveUsecaseFlow("main")}
                  style={{
                    padding: "6px 12px",
                    borderRadius: "5px",
                    border: "none",
                    background: activeUsecaseFlow === "main" ? "#2563eb" : "#f1f5f9",
                    color: activeUsecaseFlow === "main" ? "#ffffff" : "#475569",
                    fontSize: "11.5px",
                    fontWeight: 750,
                    cursor: "pointer",
                  }}
                >
                  Luồng Chính (Main Flow 1.0 - 6.0)
                </button>
                <button
                  type="button"
                  onClick={() => setActiveUsecaseFlow("alt")}
                  style={{
                    padding: "6px 12px",
                    borderRadius: "5px",
                    border: "none",
                    background: activeUsecaseFlow === "alt" ? "#0284c7" : "#f1f5f9",
                    color: activeUsecaseFlow === "alt" ? "#ffffff" : "#475569",
                    fontSize: "11.5px",
                    fontWeight: 750,
                    cursor: "pointer",
                  }}
                >
                  Luồng Rẽ Nhánh (Alternative Flows 3a, 4a)
                </button>
                <button
                  type="button"
                  onClick={() => setActiveUsecaseFlow("exception")}
                  style={{
                    padding: "6px 12px",
                    borderRadius: "5px",
                    border: "none",
                    background: activeUsecaseFlow === "exception" ? "#dc2626" : "#f1f5f9",
                    color: activeUsecaseFlow === "exception" ? "#ffffff" : "#475569",
                    fontSize: "11.5px",
                    fontWeight: 750,
                    cursor: "pointer",
                  }}
                >
                  Luồng Ngoại Lệ (Exception Flows 4b: Quét trùng / Mất mạng)
                </button>
              </div>

              {/* Flow Steps Detail */}
              {activeUsecaseFlow === "main" && (
                <div style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "12.5px" }}>
                  {[
                    { step: "1.0", actor: "Tài xế", action: "Mở màn hình quét mã trên ứng dụng Courier App và hướng camera vào mã QR bưu kiện." },
                    { step: "2.0", actor: "Thiết bị", action: "Giải mã chuỗi ký tự QR thành mã bưu kiện `NX-88992`, đính kèm tọa độ GPS và Timestamp hiện tại." },
                    { step: "3.0", actor: "Ứng dụng", action: "Tạo mã `Idempotency-Key` duy nhất và gửi request `POST /api/v1/parcels/scan` đến API Gateway." },
                    { step: "4.0", actor: "API Gateway", action: "Kiểm tra chữ ký JWT, kiểm tra khóa phân tán Redis Lock xem đơn hàng có đang bị khóa bởi tiến trình khác không." },
                    { step: "5.0", actor: "Core Service", action: "Cập nhật trạng thái `HUB_ARRIVED`, kích hoạt máy trạng thái Camunda BPMN và ghi log Audit Trail." },
                    { step: "6.0", actor: "Hệ thống", action: "Phản hồi HTTP 200 OK; ứng dụng Courier App phát tiếng bíp báo hiệu thành công và cập nhật danh sách." },
                  ].map((s) => (
                    <div key={s.step} style={{ display: "flex", gap: "10px", padding: "8px 12px", background: "#f8fafc", borderRadius: "6px" }}>
                      <span style={{ fontFamily: "var(--font-mono)", fontWeight: 800, color: "#2563eb", minWidth: "32px" }}>{s.step}</span>
                      <span style={{ fontWeight: 700, color: "#0f172a", minWidth: "100px" }}>[{s.actor}]:</span>
                      <span style={{ color: "#334155" }}>{s.action}</span>
                    </div>
                  ))}
                </div>
              )}

              {activeUsecaseFlow === "alt" && (
                <div style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "12.5px" }}>
                  <div style={{ padding: "10px 14px", background: "#f0f9ff", borderRadius: "6px", borderLeft: "4px solid #0284c7" }}>
                    <strong>3a. Mã QR bị mờ hoặc rách không quét được:</strong><br />
                    Tài xế chuyển sang chế độ nhập tay số vận đơn `NX-88992` -&gt; Hệ thống yêu cầu chụp ảnh xác thực tình trạng bưu kiện rách bao bì trước khi cho phép nhập kho.
                  </div>
                  <div style={{ padding: "10px 14px", background: "#f0f9ff", borderRadius: "6px", borderLeft: "4px solid #0284c7" }}>
                    <strong>4a. Bưu kiện được giao sang nhầm trạm trung chuyển (Wrong Hub):</strong><br />
                    Hệ thống kiểm tra tọa độ trạm -&gt; Phát hiện sai tuyến -&gt; Bật cảnh báo màu cam và tự động đề xuất luồng điều hướng chuyển tiếp (Re-route Transfer).
                  </div>
                </div>
              )}

              {activeUsecaseFlow === "exception" && (
                <div style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "12.5px" }}>
                  <div style={{ padding: "10px 14px", background: "#fef2f2", borderRadius: "6px", borderLeft: "4px solid #dc2626" }}>
                    <strong>4b. Quét trùng mã bưu kiện 2 lần liên tiếp (Duplicate Scan Request):</strong><br />
                    Redis Lock phát hiện `Idempotency-Key` trùng trong 60 giây -&gt; API Gateway ngắt xử lý, không ghi thêm dòng mới vào DB -&gt; Trả về mã lỗi 409 Conflict hoặc kết quả đã lưu trữ từ cache kèm thông báo "Đơn hàng này vừa được quét thành công cách đây 2 giây".
                  </div>
                  <div style={{ padding: "10px 14px", background: "#fef2f2", borderRadius: "6px", borderLeft: "4px solid #dc2626" }}>
                    <strong>5b. Mất kết nối mạng 4G khi đang ở kho tầng hầm (Offline Mode):</strong><br />
                    Ứng dụng lưu tạm sự kiện quét vào SQLite Offline Queue nội bộ thiết bị -&gt; Khi có mạng Internet trở lại, Service Worker tự động đồng bộ tuần tự lên máy chủ.
                  </div>
                </div>
              )}
            </div>
          )}

          {/* DIAGRAM 2: SEQUENCE DIAGRAM CHUẨN RESTFUL API */}
          {activeDiagram === "sequence" && (
            <div
              style={{
                padding: "20px",
                borderRadius: "10px",
                background: "#ffffff",
                border: "1.5px solid #d8e6f5",
              }}
            >
              <div style={{ marginBottom: "14px" }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "#2563eb", fontWeight: 800 }}>
                  RESTFUL API SEQUENCE BLUEPRINT
                </span>
                <h3 style={{ margin: "2px 0 0 0", fontSize: "15px", color: "#0f172a" }}>
                  Luồng Gọi API: POST /api/v1/parcels/scan (Kèm Idempotency & Redis Distributed Lock)
                </h3>
              </div>

              {/* Sequence SVG Blueprint */}
              <div style={{ width: "100%", overflowX: "auto", background: "#f8fafc", padding: "16px", borderRadius: "8px", border: "1px solid #e2e8f0" }}>
                <svg viewBox="0 0 760 380" style={{ width: "100%", minWidth: "680px", height: "auto", display: "block" }}>
                  {/* Lifeline Headers */}
                  <g fontFamily="var(--studio-font-mono)" fontSize="11" fontWeight="800" textAnchor="middle">
                    {/* Actor 1: Shipper Courier App */}
                    <rect x="20" y="10" width="120" height="32" rx="6" fill="#eff6ff" stroke="#2563eb" strokeWidth="1.5" />
                    <text x="80" y="30" fill="#1e40af">Courier App</text>
                    <line x1="80" y1="42" x2="80" y2="360" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="4 4" />

                    {/* Actor 2: Ingestion API Gateway */}
                    <rect x="180" y="10" width="130" height="32" rx="6" fill="#f0fdf4" stroke="#16a34a" strokeWidth="1.5" />
                    <text x="245" y="30" fill="#166534">API Gateway</text>
                    <line x1="245" y1="42" x2="245" y2="360" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="4 4" />

                    {/* Actor 3: Redis Distributed Lock */}
                    <rect x="350" y="10" width="130" height="32" rx="6" fill="#fdf4ff" stroke="#a855f7" strokeWidth="1.5" />
                    <text x="415" y="30" fill="#7e22ce">Redis Cluster</text>
                    <line x1="415" y1="42" x2="415" y2="360" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="4 4" />

                    {/* Actor 4: Logistics Core Worker */}
                    <rect x="520" y="10" width="120" height="32" rx="6" fill="#fff7ed" stroke="#ea580c" strokeWidth="1.5" />
                    <text x="580" y="30" fill="#9a3412">Core Worker</text>
                    <line x1="580" y1="42" x2="580" y2="360" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="4 4" />

                    {/* Actor 5: PostgreSQL Database */}
                    <rect x="670" y="10" width="80" height="32" rx="6" fill="#f1f5f9" stroke="#475569" strokeWidth="1.5" />
                    <text x="710" y="30" fill="#0f172a">Postgres</text>
                    <line x1="710" y1="42" x2="710" y2="360" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="4 4" />
                  </g>

                  {/* Call 1: Courier -> Gateway */}
                  <line x1="80" y1="75" x2="245" y2="75" stroke="#2563eb" strokeWidth="2" markerEnd="url(#arrowBlue)" />
                  <text x="162" y="70" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="9.5" fontWeight="750" fill="#1e40af">
                    1: POST /api/v1/parcels/scan (Idempotency-Key)
                  </text>

                  {/* Call 2: Gateway -> Redis Lock */}
                  <line x1="245" y1="110" x2="415" y2="110" stroke="#a855f7" strokeWidth="2" />
                  <text x="330" y="105" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="9.5" fontWeight="750" fill="#7e22ce">
                    2: SETNX lock:scan:{'{'}id{'}'} EX 60
                  </text>

                  {/* Call 3: Redis -> Gateway OK */}
                  <line x1="415" y1="140" x2="245" y2="140" stroke="#a855f7" strokeWidth="1.5" strokeDasharray="4 3" />
                  <text x="330" y="135" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="9" fontWeight="700" fill="#7e22ce">
                    3: Lock Acquired (1 OK)
                  </text>

                  {/* Call 4: Gateway -> Core Worker */}
                  <line x1="245" y1="180" x2="580" y2="180" stroke="#16a34a" strokeWidth="2" />
                  <text x="412" y="175" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="9.5" fontWeight="750" fill="#166534">
                    4: Execute State Transition (Camunda BPMN)
                  </text>

                  {/* Call 5: Core Worker -> Postgres */}
                  <line x1="580" y1="220" x2="710" y2="220" stroke="#475569" strokeWidth="2" />
                  <text x="645" y="215" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="9" fontWeight="750" fill="#0f172a">
                    5: UPDATE parcels & INSERT audit_log
                  </text>

                  {/* Call 6: Postgres -> Worker OK */}
                  <line x1="710" y1="255" x2="580" y2="255" stroke="#475569" strokeWidth="1.5" strokeDasharray="4 3" />
                  <text x="645" y="250" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="9" fontWeight="700" fill="#0f172a">
                    6: Commit OK (1 row updated)
                  </text>

                  {/* Call 7: Worker -> Gateway OK */}
                  <line x1="580" y1="290" x2="245" y2="290" stroke="#16a34a" strokeWidth="1.5" strokeDasharray="4 3" />
                  <text x="412" y="285" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="9" fontWeight="700" fill="#166534">
                    7: Transition Success Payload
                  </text>

                  {/* Call 8: Gateway -> Courier App 200 OK */}
                  <line x1="245" y1="330" x2="80" y2="330" stroke="#2563eb" strokeWidth="2" strokeDasharray="4 3" />
                  <text x="162" y="325" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="10" fontWeight="850" fill="#1e40af">
                    8: 200 OK {'{'}status: "HUB_ARRIVED", rtt: "42ms"{'}'}
                  </text>
                </svg>
              </div>
            </div>
          )}

          {/* DIAGRAM 3: ACTIVITY SWIMLANES 2.5D */}
          {activeDiagram === "activity" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <BaActivity25dSimulator lang={lang} />
            </div>
          )}

          {/* DIAGRAM 4: USE CASE DIAGRAM TỔNG QUÁT */}
          {activeDiagram === "usecase-diagram" && (
            <div
              style={{
                padding: "20px",
                borderRadius: "10px",
                background: "#ffffff",
                border: "1.5px solid #d8e6f5",
              }}
            >
              <div style={{ marginBottom: "14px" }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "#2563eb", fontWeight: 800 }}>
                  SYSTEM BOUNDARY & ACTORS MODEL
                </span>
                <h3 style={{ margin: "2px 0 0 0", fontSize: "15px", color: "#0f172a" }}>
                  Sơ Đồ Use Case Tổng Quát Hệ Thống Quản Trị Logistics Nexus Express
                </h3>
              </div>

              <div style={{ width: "100%", overflowX: "auto", background: "#f8fafc", padding: "16px", borderRadius: "8px", border: "1px solid #e2e8f0" }}>
                <svg viewBox="0 0 760 360" style={{ width: "100%", minWidth: "680px", height: "auto", display: "block" }}>
                  {/* Boundary Box */}
                  <rect x="180" y="20" width="400" height="320" rx="10" fill="#ffffff" stroke="#0284c7" strokeWidth="2" strokeDasharray="6 4" />
                  <text x="200" y="44" fontFamily="var(--studio-font-mono)" fontSize="11" fontWeight="850" fill="#0284c7">
                    System Boundary: Nexus Logistics OMS
                  </text>

                  {/* Actor 1: Shipper (Left) */}
                  <g transform="translate(70, 100)">
                    <circle cx="20" cy="15" r="12" fill="#eff6ff" stroke="#2563eb" strokeWidth="1.8" />
                    <line x1="20" y1="27" x2="20" y2="60" stroke="#2563eb" strokeWidth="2" />
                    <line x1="0" y1="40" x2="40" y2="40" stroke="#2563eb" strokeWidth="2" />
                    <line x1="20" y1="60" x2="5" y2="90" stroke="#2563eb" strokeWidth="2" />
                    <line x1="20" y1="60" x2="35" y2="90" stroke="#2563eb" strokeWidth="2" />
                    <text x="20" y="110" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="10.5" fontWeight="800" fill="#1e40af">
                      Tài Xế (Shipper)
                    </text>
                  </g>

                  {/* Actor 2: Kế Toán (Right) */}
                  <g transform="translate(650, 100)">
                    <circle cx="20" cy="15" r="12" fill="#f0fdf4" stroke="#059669" strokeWidth="1.8" />
                    <line x1="20" y1="27" x2="20" y2="60" stroke="#059669" strokeWidth="2" />
                    <line x1="0" y1="40" x2="40" y2="40" stroke="#059669" strokeWidth="2" />
                    <line x1="20" y1="60" x2="5" y2="90" stroke="#059669" strokeWidth="2" />
                    <line x1="20" y1="60" x2="35" y2="90" stroke="#059669" strokeWidth="2" />
                    <text x="20" y="110" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="10.5" fontWeight="800" fill="#065f46">
                      Kế Toán COD
                    </text>
                  </g>

                  {/* Use Cases inside system */}
                  {/* UC 1 */}
                  <ellipse cx="380" cy="80" rx="90" ry="24" fill="#eff6ff" stroke="#2563eb" strokeWidth="1.5" />
                  <text x="380" y="84" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="10" fontWeight="750" fill="#1e40af">
                    UC-01: Quét Mã QR Nhập Kho
                  </text>
                  <line x1="110" y1="120" x2="290" y2="80" stroke="#94a3b8" strokeWidth="1.5" />

                  {/* UC 2 */}
                  <ellipse cx="380" cy="150" rx="90" ry="24" fill="#eff6ff" stroke="#2563eb" strokeWidth="1.5" />
                  <text x="380" y="154" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="10" fontWeight="750" fill="#1e40af">
                    UC-02: Cập Nhật Vị Trí GPS
                  </text>
                  <line x1="110" y1="140" x2="290" y2="150" stroke="#94a3b8" strokeWidth="1.5" />

                  {/* UC 3 */}
                  <ellipse cx="380" cy="220" rx="90" ry="24" fill="#f0fdf4" stroke="#059669" strokeWidth="1.5" />
                  <text x="380" y="224" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="10" fontWeight="750" fill="#065f46">
                    UC-03: Đối Soát Sổ Cái COD
                  </text>
                  <line x1="650" y1="140" x2="470" y2="220" stroke="#94a3b8" strokeWidth="1.5" />

                  {/* UC 4 */}
                  <ellipse cx="380" cy="290" rx="90" ry="24" fill="#fef2f2" stroke="#dc2626" strokeWidth="1.5" />
                  <text x="380" y="294" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="10" fontWeight="750" fill="#991b1b">
                    UC-04: Xử Lý Khiếu Nại Mất Hàng
                  </text>
                  <line x1="650" y1="160" x2="470" y2="290" stroke="#94a3b8" strokeWidth="1.5" />
                </svg>
              </div>
            </div>
          )}

          {/* DIAGRAM 5: DOMAIN-DRIVEN DESIGN (DDD) MODEL 2.5D */}
          {activeDiagram === "domain-ddd" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <BaDdd25dSimulator lang={lang} />
            </div>
          )}

          {/* DIAGRAM 6: ERD & DATA DICTIONARY 3NF 2.5D */}
          {activeDiagram === "erd-3nf" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <BaErd25dSimulator lang={lang} />
            </div>
          )}
        </div>
      )}
    </div>
  );
}
