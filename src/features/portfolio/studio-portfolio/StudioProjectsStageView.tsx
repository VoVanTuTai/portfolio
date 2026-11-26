import { ExternalLink, Github, Radio } from "lucide-react";
import type { Language } from "@/types";
import type { PortfolioItem } from "@/data/portfolio-tree.data";
import { Nexus25dSimulator } from "@/features/portfolio/studio-portfolio/simulators/Nexus25dSimulator";
import { Cab25dSimulator } from "@/features/portfolio/studio-portfolio/simulators/Cab25dSimulator";
import { Tourist25dSimulator } from "@/features/portfolio/studio-portfolio/simulators/Tourist25dSimulator";

interface StudioProjectsStageViewProps {
  item: PortfolioItem;
  lang: Language;
  onSelectItem?: (slug: string) => void;
}

type ProjectSubSection = "overview" | "modeling" | "results";

export function StudioProjectsStageView({
  item,
  lang,
}: StudioProjectsStageViewProps) {
  const isNexus = item.slug.startsWith("nexus") || item.id.includes("nexus");
  const isCab = item.slug.startsWith("cab") || item.id.includes("cab");
  const isTourist = item.slug.startsWith("tourist") || item.id.includes("tourist");

  const getSubSection = (): ProjectSubSection => {
    if (item.slug.includes("architecture") || item.slug.includes("mo-hinh")) return "modeling";
    if (item.slug.includes("results") || item.slug.includes("ket-qua")) return "results";
    return "overview";
  };

  const subSection = getSubSection();

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>

      {/* ====================================================================
          PROJECT 1: NEXUS EXPRESS (LOGISTICS OMS & REALTIME TRACKING)
          ==================================================================== */}
      {isNexus && (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {/* Header Live Banner */}
          <div
            style={{
              padding: "16px 20px",
              borderRadius: "12px",
              background: "linear-gradient(135deg, #eff6ff 0%, #f8fbff 100%)",
              border: "1.5px solid #bfdbfe",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "12px",
            }}
          >
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "4px",
                    padding: "3px 8px",
                    borderRadius: "5px",
                    background: "#dcfce7",
                    color: "#15803d",
                    fontSize: "10.5px",
                    fontWeight: 800,
                    fontFamily: "var(--font-mono, monospace)",
                    border: "1px solid #86efac",
                  }}
                >
                  <Radio size={11} className="pulse-dot" /> PRODUCTION LIVE
                </span>
                <span style={{ fontFamily: "var(--font-mono, monospace)", fontSize: "10.5px", fontWeight: 750, color: "#1e40af" }}>
                  tracking.nexus-ex.site
                </span>
              </div>
              <strong style={{ fontSize: "15px", color: "#0f172a" }}>
                Nexus Express — Hệ Thống Quản Lý Vận Đơn & Tra Cứu Bưu Kiện Phân Tán
              </strong>
            </div>

            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
              <a
                href="https://tracking.nexus-ex.site/"
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  padding: "8px 16px",
                  borderRadius: "8px",
                  background: "linear-gradient(135deg, #0284c7, #2563eb)",
                  color: "#ffffff",
                  fontSize: "12px",
                  fontWeight: 800,
                  textDecoration: "none",
                  boxShadow: "1.5px 2px 0 #0f172a",
                }}
              >
                <ExternalLink size={13} />
                <span>Live Demo ↗</span>
              </a>
              <a
                href="https://github.com/VoVanTuTai/logistics-management-system"
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  padding: "8px 16px",
                  borderRadius: "8px",
                  background: "#ffffff",
                  border: "1.5px solid #cbd5e1",
                  color: "#0f172a",
                  fontSize: "12px",
                  fontWeight: 800,
                  textDecoration: "none",
                }}
              >
                <Github size={13} />
                <span>GitHub Repo</span>
              </a>
            </div>
          </div>

          {/* SUB-SECTION 1.1: TỔNG QUAN & BỐI CẢNH */}
          {subSection === "overview" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <div style={{ padding: "18px 20px", borderRadius: "10px", background: "#ffffff", border: "1.5px solid #d8e6f5" }}>
                <h4 style={{ margin: "0 0 10px 0", fontSize: "14px", color: "#0f172a" }}>
                  1.1.1 Bối Cảnh Thực Tế & Nỗi Đau Vận Hành (Problem Statement)
                </h4>
                <p style={{ fontSize: "13px", color: "#475569", lineHeight: 1.6, margin: 0 }}>
                  Tại các bưu cục giờ cao điểm (17h - 19h), hơn 1.200 tài xế giao nhận (shipper) quét mã vạch bưu kiện liên tục trong điều kiện mạng 4G chập chờn. Khi mạng lag, shipper có thói quen bấm nút quét 2-3 lần liên tiếp (duplicate clicks). Ở hệ thống cũ, điều này gây ra lỗi xung đột Race Condition: một bưu kiện bị tạo 2 hóa đơn thu hộ COD trùng nhau, sai lệch tiền hàng và làm tê liệt hệ thống kế toán cuối ngày.
                </p>
              </div>

              {/* As-Is vs To-Be Comparison */}
              <div style={{ padding: "18px 20px", borderRadius: "10px", background: "#ffffff", border: "1.5px solid #d8e6f5" }}>
                <h4 style={{ margin: "0 0 10px 0", fontSize: "14px", color: "#0f172a" }}>
                  1.1.2 Bảng So Sánh Trước & Sau Khi Triển Khai (As-Is vs To-Be)
                </h4>
                <div style={{ overflowX: "auto" }}>
                  <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "12px" }}>
                    <thead>
                      <tr style={{ background: "#f8fafc", borderBottom: "2px solid #cbd5e1" }}>
                        <th style={{ padding: "8px 12px", textAlign: "left" }}>Tiêu Chí Đánh Giá</th>
                        <th style={{ padding: "8px 12px", textAlign: "left", color: "#dc2626" }}>Hệ Thống Cũ (As-Is)</th>
                        <th style={{ padding: "8px 12px", textAlign: "left", color: "#16a34a" }}>Nexus Express (To-Be)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ borderBottom: "1px solid #e2e8f0" }}>
                        <td style={{ padding: "8px 12px", fontWeight: 700 }}>Xử lý quét trùng lặp</td>
                        <td style={{ padding: "8px 12px", color: "#dc2626" }}>Lỗi ghi đè, trùng đơn 3.2%</td>
                        <td style={{ padding: "8px 12px", color: "#16a34a", fontWeight: 700 }}>Khóa Idempotency Redis ➔ Trùng 0.00%</td>
                      </tr>
                      <tr style={{ borderBottom: "1px solid #e2e8f0" }}>
                        <td style={{ padding: "8px 12px", fontWeight: 700 }}>Độ trễ phản hồi UI</td>
                        <td style={{ padding: "8px 12px", color: "#dc2626" }}>1,200ms - 2,500ms khi nghẽn</td>
                        <td style={{ padding: "8px 12px", color: "#16a34a", fontWeight: 700 }}>P99 &lt; 180ms (NestJS Fastify Engine)</td>
                      </tr>
                      <tr style={{ borderBottom: "1px solid #e2e8f0" }}>
                        <td style={{ padding: "8px 12px", fontWeight: 700 }}>Đối soát tiền mặt COD</td>
                        <td style={{ padding: "8px 12px", color: "#dc2626" }}>Đối soát thủ công Excel mất 4 tiếng</td>
                        <td style={{ padding: "8px 12px", color: "#16a34a", fontWeight: 700 }}>Tự động đối soát 100% khớp tức thì</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Scope Matrix */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "12px" }}>
                <div style={{ padding: "14px", borderRadius: "8px", background: "#f0fdf4", border: "1px solid #bbf7d0" }}>
                  <strong style={{ color: "#166534", fontSize: "13px" }}>✓ Phạm Vi Đã Triển Khai (In-Scope)</strong>
                  <ul style={{ margin: "6px 0 0 0", paddingLeft: "18px", fontSize: "12px", color: "#1e3a8a", lineHeight: 1.6 }}>
                    <li>API Gateway có Idempotency Key 24h</li>
                    <li>Máy trạng thái Camunda BPMN 2.0 (7 bước)</li>
                    <li>Sơ đồ bản đồ Leaflet hiển thị trạm trung chuyển</li>
                    <li>PostgreSQL 3NF triệt tiêu dị thường sửa đổi</li>
                  </ul>
                </div>
                <div style={{ padding: "14px", borderRadius: "8px", background: "#fff7ed", border: "1px solid #fed7aa" }}>
                  <strong style={{ color: "#9a3412", fontSize: "13px" }}>➔ Phân Kỳ Tiếp Theo (Out-of-Scope)</strong>
                  <ul style={{ margin: "6px 0 0 0", paddingLeft: "18px", fontSize: "12px", color: "#7c2d12", lineHeight: 1.6 }}>
                    <li>Tích hợp thiết bị bay không người lái (Drone delivery)</li>
                    <li>Thanh toán tiền điện tử Cryptocurrency</li>
                    <li>Mạng lưới vận chuyển đa quốc gia xuyên biên giới</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* SUB-SECTION 1.2: MÔ HÌNH HÓA HIỆN THỰC & 2.5D */}
          {subSection === "modeling" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <Nexus25dSimulator lang={lang} />
            </div>
          )}

          {/* SUB-SECTION 1.3: KẾT QUẢ ĐẠT ĐƯỢC & ĐO LƯỜNG */}
          {subSection === "results" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "10px" }}>
                {[
                  { label: "TỶ LỆ TRÙNG ĐƠN", value: "0.00%", sub: "Giảm từ 3.2% xuống 0%" },
                  { label: "SLA PHẢN HỒI", value: "< 180ms", sub: "P99 Gateway Overhead < 8ms" },
                  { label: "THÔNG LƯỢNG ĐỈNH", value: "1,200 req/s", sub: "Cluster Mode Fastify" },
                  { label: "ĐỐI SOÁT COD", value: "100% Khớp", sub: "Sai lệch 0đ cuối ngày" },
                ].map((m, i) => (
                  <div key={i} style={{ padding: "14px", borderRadius: "8px", background: "#ffffff", border: "1.5px solid #d8e6f5", textAlign: "center" }}>
                    <span style={{ fontSize: "10.5px", fontFamily: "var(--font-mono)", color: "#64748b", fontWeight: 750, display: "block" }}>{m.label}</span>
                    <strong style={{ fontSize: "20px", color: "#2563eb", fontFamily: "var(--font-mono)", display: "block", margin: "4px 0" }}>{m.value}</strong>
                    <span style={{ fontSize: "11px", color: "#059669", fontWeight: 700 }}>{m.sub}</span>
                  </div>
                ))}
              </div>

              <div style={{ padding: "16px", borderRadius: "8px", background: "#f8fafc", border: "1px solid #e2e8f0" }}>
                <strong style={{ fontSize: "13px", color: "#0f172a", display: "block", marginBottom: "6px" }}>
                  Bằng Chứng Kiểm Toán & Triển Khai Thực Tế:
                </strong>
                <p style={{ margin: "0 0 10px 0", fontSize: "12.5px", color: "#475569", lineHeight: 1.55 }}>
                  Hệ thống đang chạy trực tiếp trên môi trường Production tại tên miền <strong>https://tracking.nexus-ex.site</strong>. Toàn bộ mã nguồn backend, frontend và tài liệu đặc tả Postman đều được quản lý công khai trên GitHub của tác giả.
                </p>
                <div style={{ display: "flex", gap: "8px" }}>
                  <a href="https://tracking.nexus-ex.site/" target="_blank" rel="noreferrer" style={{ fontSize: "12px", color: "#2563eb", fontWeight: 750, textDecoration: "none" }}>
                    👉 Mở Demo Trực Tiếp: tracking.nexus-ex.site ↗
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ====================================================================
          PROJECT 2: CAB BOOKING DISPATCH
          ==================================================================== */}
      {isCab && (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {/* Header Banner */}
          <div style={{ padding: "16px 20px", borderRadius: "12px", background: "linear-gradient(135deg, #f0f9ff 0%, #ffffff 100%)", border: "1.5px solid #bae6fd" }}>
            <span style={{ fontSize: "10.5px", fontFamily: "var(--font-mono)", fontWeight: 800, padding: "2px 8px", borderRadius: "4px", background: "#e0f2fe", color: "#0284c7" }}>
              HIGH-CONCURRENCY DISPATCH
            </span>
            <h3 style={{ margin: "6px 0 0 0", fontSize: "16px", color: "#0f172a" }}>
              Cab Booking Dispatch — Điều Vận Cuốc Xe & Tính Cước Động Thông Minh
            </h3>
          </div>

          {subSection === "overview" && (
            <div style={{ padding: "18px 20px", borderRadius: "10px", background: "#ffffff", border: "1.5px solid #d8e6f5" }}>
              <h4 style={{ margin: "0 0 10px 0", fontSize: "14px", color: "#0f172a" }}>1.2.1 Bối Cảnh Nghiệp Vụ & Bài Toán Tranh Chấp Cuốc Xe</h4>
              <p style={{ fontSize: "13px", color: "#475569", lineHeight: 1.6, margin: 0 }}>
                Trong ứng dụng gọi xe, khi một khách hàng đặt cuốc tại khu vực đông tài xế, thông báo được đẩy đồng loạt tới 5-10 tài xế gần nhất. Nếu 2 tài xế cùng bấm nút "Nhận cuốc" trong cùng một mili-giây, nếu không có cơ chế khóa phân tán, cả 2 tài xế đều nhận được thông báo thành công và cùng lái xe tới một điểm đón, gây xung đột nghiêm trọng và phá hủy trải nghiệm khách hàng.
              </p>
            </div>
          )}

          {subSection === "modeling" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <Cab25dSimulator lang={lang} />
            </div>
          )}

          {subSection === "results" && (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "10px" }}>
              {[
                { label: "BÁN KÍNH QUÉT", value: "3.5 km", sub: "Tối ưu phân bổ tài xế" },
                { label: "THỜI GIAN GHÉP CUỐC", value: "< 2.5s", sub: "Thời gian thực Socket.io" },
                { label: "XUNG ĐỘT CUỐC XE", value: "0 Cuộc", sub: "Redis Distributed Lock" },
                { label: "TỶ LỆ HOÀN THÀNH", value: "98.5%", sub: "Đánh giá 4.9/5 sao" },
              ].map((m, i) => (
                <div key={i} style={{ padding: "14px", borderRadius: "8px", background: "#ffffff", border: "1.5px solid #d8e6f5", textAlign: "center" }}>
                  <span style={{ fontSize: "10.5px", fontFamily: "var(--font-mono)", color: "#64748b", fontWeight: 750, display: "block" }}>{m.label}</span>
                  <strong style={{ fontSize: "20px", color: "#0284c7", fontFamily: "var(--font-mono)", display: "block", margin: "4px 0" }}>{m.value}</strong>
                  <span style={{ fontSize: "11px", color: "#059669", fontWeight: 700 }}>{m.sub}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* ====================================================================
          PROJECT 3: TOURIST ACCOMMODATION PLATFORM
          ==================================================================== */}
      {isTourist && (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {/* Header Banner */}
          <div style={{ padding: "16px 20px", borderRadius: "12px", background: "linear-gradient(135deg, #f0fdf4 0%, #ffffff 100%)", border: "1.5px solid #bbf7d0" }}>
            <span style={{ fontSize: "10.5px", fontFamily: "var(--font-mono)", fontWeight: 800, padding: "2px 8px", borderRadius: "4px", background: "#dcfce7", color: "#15803d" }}>
              HOSPITALITY ERP & RESERVATION
            </span>
            <h3 style={{ margin: "6px 0 0 0", fontSize: "16px", color: "#0f172a" }}>
              Tourist Accommodation ERP — Quản Lý Chuỗi Khách Sạn, Homestay & Chống Overbooking
            </h3>
          </div>

          {subSection === "overview" && (
            <div style={{ padding: "18px 20px", borderRadius: "10px", background: "#ffffff", border: "1.5px solid #d8e6f5" }}>
              <h4 style={{ margin: "0 0 10px 0", fontSize: "14px", color: "#0f172a" }}>1.3.1 Bối Cảnh Nghiệp Vụ Chuỗi Khách Sạn & Vấn Nạn Overbooking</h4>
              <p style={{ fontSize: "13px", color: "#475569", lineHeight: 1.6, margin: 0 }}>
                Chuỗi cơ sở lưu trú quản lý hơn 500 phòng trải dài trên nhiều chi nhánh và đồng bộ phòng qua các kênh OTA (Booking, Agoda, Traveloka). Thách thức lớn nhất là vào dịp lễ Tết, hai khách hàng cùng ấn đặt một phòng suite duy nhất qua hai kênh khác nhau tại cùng một thời điểm, dẫn đến bán vượt số phòng thực tế (Overbooking), gây đền bù thiệt hại và giảm uy tín thương hiệu.
              </p>
            </div>
          )}

          {subSection === "modeling" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <Tourist25dSimulator lang={lang} />
            </div>
          )}

          {subSection === "results" && (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "10px" }}>
              {[
                { label: "QUY MÔ QUẢN LÝ", value: "500+ Keys", sub: "Chuỗi đa chi nhánh" },
                { label: "TỶ LỆ OVERBOOKING", value: "0.00%", sub: "Khóa tạm 15m PostgreSQL" },
                { label: "ĐỐI SOÁT HÓA ĐƠN VAT", value: "100% Khớp", sub: "Tự động hóa sổ sách" },
                { label: "TỶ LỆ LẤP ĐẦY PHÒNG", value: "87.4%", sub: "Tối ưu hóa doanh thu" },
              ].map((m, i) => (
                <div key={i} style={{ padding: "14px", borderRadius: "8px", background: "#ffffff", border: "1.5px solid #d8e6f5", textAlign: "center" }}>
                  <span style={{ fontSize: "10.5px", fontFamily: "var(--font-mono)", color: "#64748b", fontWeight: 750, display: "block" }}>{m.label}</span>
                  <strong style={{ fontSize: "20px", color: "#059669", fontFamily: "var(--font-mono)", display: "block", margin: "4px 0" }}>{m.value}</strong>
                  <span style={{ fontSize: "11px", color: "#059669", fontWeight: 700 }}>{m.sub}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
