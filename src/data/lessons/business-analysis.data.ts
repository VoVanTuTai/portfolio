import type { BaConceptItem } from "@/types";

export const baCoreConcepts: BaConceptItem[] = [
  {
    question: "1. Vai trò cốt lõi của Business Analyst trong tổ chức công nghệ là gì?",
    answer:
      "Business Analyst (BA) đóng vai trò là cầu nối chiến lược tạo sự thấu hiểu chung (Shared Understanding) giữa các Business Stakeholders (Khách hàng, Ban Giám đốc, Vận hành) và Đội ngũ Kỹ thuật (Solution Architect, Developers, QA). Phạm vi công việc không chỉ đơn thuần là ghi chép yêu cầu, mà là phân rã bài toán kinh doanh, bóc tách As-Is/To-Be, chuẩn hóa Business Rules, thiết kế kiến trúc dữ liệu logic, xác định Acceptance Criteria (Given-When-Then) và duy trì tính toàn vẹn (Traceability) xuyên suốt vòng đời sản phẩm.",
  },
  {
    question: "2. Requirement Elicitation và Requirement Analysis khác nhau như thế nào trong thực tế?",
    answer:
      "Elicitation là quá trình chủ động khám phá, gợi mở và thu thập thông tin từ các bên liên quan thông qua phỏng vấn 1-1, khảo sát hiện trường (Shadowing), workshop và nghiên cứu tài liệu quy trình. Trong khi đó, Analysis là giai đoạn phân rã, tổ chức, kiểm chứng và mô hình hóa thông tin đó: xác định ranh giới hệ thống, phát hiện mâu thuẫn nghiệp vụ (Conflicts), phân tích phụ thuộc (Dependencies), thiết kế luồng quy trình (BPMN 2.0), cấu trúc dữ liệu và xử lý các kịch bản ngoại lệ (Exception Handling).",
  },
  {
    question: "3. Phân biệt Functional Requirements và Non-Functional Requirements?",
    answer:
      "Functional Requirements (Yêu cầu Chức năng) mô tả cụ thể những gì hệ thống PHẢI LÀM — ví dụ: Nhân viên bưu cục quét mã barcode để chuyển trạng thái kiện sang 'Đang vận chuyển', hệ thống tự động ghi nhận thời gian và tọa độ GPS. Non-Functional Requirements (Yêu cầu Phi chức năng) xác định hệ thống PHẢI VẬN HÀNH TỐT NHƯ THẾ NÀO — bao gồm hiệu năng (thời gian phản hồi < 200ms cho API quét mã), tính sẵn sàng (99.9% uptime), bảo mật dữ liệu (RBAC, mã hóa mật khẩu), khả năng mở rộng (chịu tải 10,000 đơn/giờ mùa cao điểm) và tính toàn vẹn kiểm toán (Audit Trail bất biến).",
  },
  {
    question: "4. Một User Story chất lượng cao cần đáp ứng những tiêu chuẩn nào (INVEST & Gherkin)?",
    answer:
      "Một User Story chuẩn mực cần tuân thủ nguyên tắc INVEST (Independent, Negotiable, Valuable, Estimable, Small, Testable) theo cấu trúc: 'Là [Actor], tôi muốn [Action], để [Business Value]'. Đi kèm với Story bắt buộc phải có ngữ cảnh nghiệp vụ, quy tắc ràng buộc (Business Rules), thiết kế giao diện (UI Mockup/Wireframe) và bộ tiêu chí chấp thuận (Acceptance Criteria) viết theo định dạng BDD/Gherkin (Given [Tiền điều kiện] - When [Hành động] - Then [Kết quả kỳ vọng]).",
  },
  {
    question: "5. Nguyên tắc xử lý xung đột yêu cầu (Requirement Conflict) giữa các Stakeholders?",
    answer:
      "Khi xuất hiện mâu thuẫn yêu cầu (ví dụ: Vận hành muốn quy trình nhập kho nhanh không cần chụp ảnh, nhưng Kế toán/Kiểm toán bắt buộc phải có ảnh chứng từ để đối soát COD), BA không chọn phe cảm tính mà: (1) Đưa các bên về cùng mục tiêu kinh doanh tổng thể và chỉ số ROI/Rủi ro; (2) Phân tích tác động (Impact Analysis) kèm bảng so sánh Trade-off giữa tốc độ và rủi ro thất thoát; (3) Đề xuất giải pháp dung hòa (ví dụ: cho phép quét nhanh theo batch, nhưng bắt buộc chụp ảnh ngẫu nhiên 10% hoặc đối với đơn giá trị > 2 triệu); (4) Trình bày Decision Owner phê duyệt và lưu vết quyết định vào RTM (Requirement Traceability Matrix).",
  },
  {
    question: "6. Vai trò của Acceptance Criteria, Definition of Done (DoD) và UAT trong nghiệm thu?",
    answer:
      "Acceptance Criteria (AC) là điều kiện tiên quyết ở cấp độ từng User Story để xác nhận tính năng chạy đúng logic. Definition of Done (DoD) là bộ tiêu chuẩn kỹ thuật cấp độ Sprint (Code reviewed, Unit test pass > 80%, CI/CD build thành công, không còn blocker). UAT (User Acceptance Testing) là đợt kiểm thử chấp thuận thực tế của người dùng cuối: BA chuẩn bị kịch bản UAT (Test Scenarios), bộ dữ liệu mẫu thực tế, hướng dẫn end-users thao tác, ghi nhận lỗi sai lệch nghiệp vụ và ký biên bản bàn giao (Sign-off) trước khi release production.",
  },
  {
    question: "7. Nền tảng Kỹ thuật (Technical Literacy) hỗ trợ Business Analyst như thế nào?",
    answer:
      "Technical Literacy giúp BA không trở thành 'người chuyển thư thụ động' mà có thể tư vấn giải pháp hiệu quả: (1) Hiểu mô hình ERD giúp BA thiết kế luồng dữ liệu chuẩn hóa, phát hiện thiếu quan hệ (missing relation) hoặc sai Source of Truth; (2) Hiểu REST API & JSON payload giúp BA xác định chính xác các trường dữ liệu cần tích hợp giữa các bên thứ ba (VNPay, Đơn vị vận chuyển); (3) Hiểu kiến trúc Microservices giúp BA phân ranh giới domain hợp lý, dự trù các kịch bản lỗi mạng, timeout và bất đồng bộ (Asynchronous processing).",
  },
  {
    question: "8. Những tiêu chuẩn chứng minh một IT Business Analyst / Associate PO sẵn sàng thực chiến?",
    answer:
      "Một IT BA thực chiến cần chứng minh: (1) Nền tảng Kỹ sư Hệ thống Thông tin bài bản (GPA 3.26/4.0 Giỏi), nắm vững CSDL và kiến trúc phần mềm; (2) Kinh nghiệm tham gia dự án thực tế tại doanh nghiệp (HomeNest Software: tham gia quản trị Scope Freeze, xử lý Change Request, viết SRS/User Stories, điều phối UAT); (3) Trải nghiệm thực địa chuyên sâu (J&T Express: hiểu bản chất vận hành bưu cục, luân chuyển trạng thái đơn, rủi ro thất thoát COD); (4) Khả năng tạo ra các Artifacts tiêu chuẩn (BPMN 2.0, ERD 3NF, OpenAPI 3.0, Jira Sprint Backlog, UAT Test Cases).",
  },
];

export const baReadinessChecklist: string[] = [
  "Nền tảng Kỹ sư Hệ thống Thông tin (IUH, GPA 3.26/4.0 Giỏi), nắm vững CSDL, SQL và kiến trúc phần mềm.",
  "6+ tháng kinh nghiệm thực tế tại HomeNest Software: quản trị Scope Freeze, đánh giá Change Request, viết SRS/User Stories, điều phối UAT.",
  "Trải nghiệm thực tế tại bưu cục J&T Express: am hiểu quy trình logistics, luân chuyển trạng thái đơn, điểm quét mã và đối soát COD.",
  "Kỹ năng mô hình hóa quy trình chuẩn hóa: BPMN 2.0, Use Case Diagram, Activity Flow, ERD 3NF và hợp đồng OpenAPI 3.0.",
  "Tư duy kiểm soát chất lượng chặt chẽ: User Stories chuẩn INVEST, Acceptance Criteria dạng Gherkin, Definition of Done (DoD).",
  "Sẵn sàng làm việc Full-time ngay lập tức tại các dự án phần mềm và doanh nghiệp công nghệ.",
];
