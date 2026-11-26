import type { StudioLesson } from "../studio.types";

export const mod06Lessons: StudioLesson[] = [
  {
    "id": "microservices",
    "slug": "microservices",
    "title": "Monolith hay microservice",
    "subtitle": "Monolith vs Microservices · 14 phút thực chiến",
    "moduleCode": "06",
    "moduleTitle": "Kiến Trúc Microservices Doanh Nghiệp (Architecture)",
    "durationMinutes": 14,
    "difficulty": "Trung cấp",
    "steps": [
      {
        "id": "microservices-step-1",
        "number": 1,
        "title": "Monolith",
        "category": "BỐI CẢNH",
        "categoryColor": "blue",
        "headline": "Một ứng dụng, một lần triển khai",
        "bodyHtml": "<p>Your shop is a <span class=\"term\">monolith</span>: one codebase with every feature — accounts, catalog, orders, payments — deployed as one unit, several copies behind a load balancer, all sharing one database.</p>\n<p>Với một nhóm nhỏ, cách này rất tốt: lời gọi giữa các tính năng chỉ là lời gọi hàm, một lần triển khai đưa mọi thứ lên, và một stack trace cho thấy toàn bộ câu chuyện.</p>\n<div class=\"callout callout--insight\"><strong>Lưu ý Kỹ sư:</strong> Nhiều công ty rất lớn đã chạy trên monolith suốt nhiều năm. Đây là một kiến trúc hoàn toàn tốt, cho đến khi nó không còn tốt nữa.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Monolith)",
          "body": "Nắm vững nguyên lý Một ứng dụng, một lần triển khai để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-0-1",
            "label": "DEPLOYS",
            "value": "1",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-0-2",
            "label": "BLAST",
            "value": "whole site",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-0-3",
            "label": "HOPS",
            "value": "1",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-0-4",
            "label": "OPSCOST",
            "value": "low",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-0-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Một ứng dụng, một lần triển khai"
          },
          {
            "id": "chk-0-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "microservices-step-2",
        "number": 2,
        "title": "Growing pains",
        "category": "BỐI CẢNH",
        "categoryColor": "rose",
        "headline": "Năm mươi kỹ sư, một codebase",
        "bodyHtml": "<p>Đội ngũ tăng lên năm mươi người trong sáu nhóm. Mọi thay đổi đều vào chung một bản phát hành hằng tuần, nên lỗi ở một tính năng làm chậm công việc của tất cả mọi người.</p>\n<p>Một lỗi rò rỉ bộ nhớ trong tính năng báo cáo mới làm sập cả tiến trình, kể cả thanh toán. Và để cho tìm kiếm thêm bộ nhớ, bạn phải mở rộng mọi bản sao của mọi thứ.</p>\n<div class=\"callout callout--warn\"><strong>Lưu ý Kỹ sư:</strong> Vấn đề của monolith chủ yếu là chuyện con người: các nhóm phải chờ nhau, và lỗi của một nhóm trở thành sự cố của tất cả.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Growing pains)",
          "body": "Nắm vững nguyên lý Năm mươi kỹ sư, một codebase để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-1-1",
            "label": "DEPLOYS",
            "value": "1 / week",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-1-2",
            "label": "BLAST",
            "value": "whole site",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-1-3",
            "label": "HOPS",
            "value": "1",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-1-4",
            "label": "OPSCOST",
            "value": "low",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-1-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Năm mươi kỹ sư, một codebase"
          },
          {
            "id": "chk-1-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "microservices-step-3",
        "number": 3,
        "title": "Split",
        "category": "THỰC THI",
        "categoryColor": "blue",
        "headline": "Tách theo năng lực nghiệp vụ",
        "bodyHtml": "<p>Break the app into <span class=\"term\">microservices</span> along business lines: Users, Catalog, Orders, Payments. Each is a separate program, owned by one team, deployed on its own schedule.</p>\n<p>Một <b>API gateway</b> cho client một cửa chính duy nhất và định tuyến mỗi yêu cầu tới đúng dịch vụ.</p>\n<div class=\"callout callout--tip\"><strong>Lưu ý Kỹ sư:</strong> Tách theo năng lực nghiệp vụ, không theo tầng kỹ thuật. Một “dịch vụ cơ sở dữ liệu” hay “dịch vụ UI” chỉ dời sự ràng buộc đi chỗ khác.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Split)",
          "body": "Nắm vững nguyên lý Tách theo năng lực nghiệp vụ để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-2-1",
            "label": "DEPLOYS",
            "value": "40 / day",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-2-2",
            "label": "BLAST",
            "value": "one feature",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-2-3",
            "label": "HOPS",
            "value": "2–4",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-2-4",
            "label": "OPSCOST",
            "value": "high",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-2-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Tách theo năng lực nghiệp vụ"
          },
          {
            "id": "chk-2-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "microservices-step-4",
        "number": 4,
        "title": "Own data",
        "category": "LÝ THUYẾT",
        "categoryColor": "emerald",
        "headline": "Mỗi dịch vụ sở hữu dữ liệu của mình",
        "bodyHtml": "<p>Nếu các dịch vụ vẫn dùng chung một cơ sở dữ liệu, chúng vẫn bị trói vào nhau: một thay đổi schema của một nhóm có thể làm hỏng ba nhóm khác. Vì vậy mỗi dịch vụ có <b>cơ sở dữ liệu riêng</b>, và không ai khác được đụng vào.</p>\n<p>Cần dữ liệu thanh toán trong Đơn hàng? Hãy hỏi Thanh toán qua API của nó, hoặc lắng nghe các sự kiện của nó.</p>\n<div class=\"callout callout--insight\"><strong>Lưu ý Kỹ sư:</strong> Cơ sở dữ liệu riêng cho từng dịch vụ là điều khiến việc triển khai độc lập trở thành thật. Nó cũng có nghĩa là không còn join hay giao dịch xuyên dịch vụ: xem bài Saga.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Own data)",
          "body": "Nắm vững nguyên lý Mỗi dịch vụ sở hữu dữ liệu của mình để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-3-1",
            "label": "DEPLOYS",
            "value": "40 / day",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-3-2",
            "label": "BLAST",
            "value": "one feature",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-3-3",
            "label": "HOPS",
            "value": "2–4",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-3-4",
            "label": "OPSCOST",
            "value": "high",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-3-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Mỗi dịch vụ sở hữu dữ liệu của mình"
          },
          {
            "id": "chk-3-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "microservices-step-5",
        "number": 5,
        "title": "Network",
        "category": "BỐI CẢNH",
        "categoryColor": "rose",
        "headline": "Giờ mạng nằm ở giữa",
        "bodyHtml": "<p>Hiển thị một trang đơn hàng giờ cần nhiều lời gọi: gateway → Đơn hàng → Thanh toán, cộng thêm Tài khoản và Danh mục. Mỗi chặng thêm độ trễ, và mỗi chặng đều có thể tự chậm hoặc tự lỗi: hãy xem một lời gọi bị timeout.</p>\n<p>Gỡ lỗi trải dài trên bốn codebase. Bạn cần timeout, retry, tracing và dashboard tốt (module Độ tin cậy) chỉ để đứng yên ở chỗ monolith đã bắt đầu.</p>\n<div class=\"callout callout--warn\"><strong>Lưu ý Kỹ sư:</strong> Một lời gọi hàm không bao giờ hỏng giữa chừng. Một lời gọi mạng thì có: một phần, chậm chạp, và vào lúc tệ nhất.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Network)",
          "body": "Nắm vững nguyên lý Giờ mạng nằm ở giữa để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-4-1",
            "label": "DEPLOYS",
            "value": "40 / day",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-4-2",
            "label": "BLAST",
            "value": "one feature",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-4-3",
            "label": "HOPS",
            "value": "6",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-4-4",
            "label": "OPSCOST",
            "value": "high",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-4-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Giờ mạng nằm ở giữa"
          },
          {
            "id": "chk-4-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "microservices-step-6",
        "number": 6,
        "title": "Distributed monolith",
        "category": "BỐI CẢNH",
        "categoryColor": "rose",
        "headline": "Tình huống: monolith phân tán",
        "bodyHtml": "<p>Một công ty tách monolith của mình thành mười hai dịch vụ, nhưng chúng vẫn đọc bảng của nhau, và mỗi tính năng đều cần thay đổi ở năm dịch vụ phát hành cùng lúc.</p>\n<p>Họ nhận cả chi phí mạng của microservice <em>lẫn</em> sự ràng buộc của monolith. Phát hành chậm đi chứ không nhanh lên.</p>\n<div class=\"callout callout--warn\"><strong>Lưu ý Kỹ sư:</strong> Nếu các dịch vụ phải triển khai cùng nhau thì chúng là một dịch vụ. Ranh giới đi trước; việc tách đi sau.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Distributed monolith)",
          "body": "Nắm vững nguyên lý Tình huống: monolith phân tán để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-5-1",
            "label": "DEPLOYS",
            "value": "1 / week",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-5-2",
            "label": "BLAST",
            "value": "whole site",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-5-3",
            "label": "HOPS",
            "value": "6",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-5-4",
            "label": "OPSCOST",
            "value": "high",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-5-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Tình huống: monolith phân tán"
          },
          {
            "id": "chk-5-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "microservices-step-7",
        "number": 7,
        "title": "Joins?",
        "category": "BỐI CẢNH",
        "categoryColor": "rose",
        "headline": "Tình huống: trang lịch sử đơn hàng",
        "bodyHtml": "<p>Trang lịch sử đơn hàng hiển thị mỗi đơn kèm tên và ảnh sản phẩm. Trong monolith đó là một phép join SQL. Giờ đơn hàng nằm ở Đơn hàng, sản phẩm nằm ở Danh mục, và không có join xuyên dịch vụ.</p>\n<p>Vì vậy Đơn hàng gọi Danh mục một lần cho mỗi đơn: 20 đơn, 20 lời gọi (vấn đề <b>N+1</b>). Trang chậm, và nếu Danh mục sập, lịch sử đơn hàng cũng sập theo.</p>\n<div class=\"callout callout--warn\"><strong>Lưu ý Kỹ sư:</strong> Những màn hình gộp dữ liệu từ nhiều dịch vụ là nơi microservice gây đau nhất. Hãy tính đến chúng ngay từ đầu.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Joins?)",
          "body": "Nắm vững nguyên lý Tình huống: trang lịch sử đơn hàng để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-6-1",
            "label": "DEPLOYS",
            "value": "40 / day",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-6-2",
            "label": "BLAST",
            "value": "one feature",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-6-3",
            "label": "HOPS",
            "value": "1 + 20",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-6-4",
            "label": "OPSCOST",
            "value": "high",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-6-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Tình huống: trang lịch sử đơn hàng"
          },
          {
            "id": "chk-6-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "microservices-step-8",
        "number": 8,
        "title": "Local copy",
        "category": "THỰC THI",
        "categoryColor": "blue",
        "headline": "Giữ một bản sao đọc cục bộ",
        "bodyHtml": "<p>Đơn hàng giữ bản sao riêng của vài trường danh mục mà nó hiển thị (tên và ảnh), và Danh mục phát sự kiện <code>ProductUpdated</code> mỗi khi chúng thay đổi. Đơn hàng cập nhật bản sao từ các sự kiện đó.</p>\n<p>Lịch sử đơn hàng lại là một truy vấn duy nhất trong cơ sở dữ liệu của chính Đơn hàng, và vẫn chạy khi Danh mục sập. Dù sao giá vẫn giữ như lúc mua: đó là dữ kiện lịch sử, không phải tra cứu trực tiếp.</p>\n<div class=\"callout callout--tip\"><strong>Lưu ý Kỹ sư:</strong> Bản sao nhất quán cuối cùng: sản phẩm được đổi tên sẽ hiện tên mới một lát sau. Với trang lịch sử, như vậy là ổn.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Local copy)",
          "body": "Nắm vững nguyên lý Giữ một bản sao đọc cục bộ để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-7-1",
            "label": "DEPLOYS",
            "value": "40 / day",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-7-2",
            "label": "BLAST",
            "value": "one feature",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-7-3",
            "label": "HOPS",
            "value": "2",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-7-4",
            "label": "OPSCOST",
            "value": "high",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-7-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Giữ một bản sao đọc cục bộ"
          },
          {
            "id": "chk-7-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "microservices-step-9",
        "number": 9,
        "title": "Contracts",
        "category": "LÝ THUYẾT",
        "categoryColor": "emerald",
        "headline": "Tình huống: một thay đổi API làm hỏng hàng xóm",
        "bodyHtml": "<p>Nhóm Thanh toán đổi tên <code>amount</code> thành <code>amount_cents</code>. Kiểm thử của họ vẫn qua, họ triển khai, và mọi lượt thanh toán trong Đơn hàng bắt đầu lỗi. Triển khai độc lập chỉ hiệu quả khi các nhóm không thể vô tình làm hỏng nhau.</p>\n<p>With <span class=\"term\">consumer-driven contract tests</span>, Orders publishes exactly which fields it relies on. Payments’ build runs those contracts before every release, and this change is blocked in CI instead of in production.</p>\n<div class=\"callout callout--tip\"><strong>Lưu ý Kỹ sư:</strong> Kết hợp hợp đồng với quy tắc đánh phiên bản API trong bài REST: thêm trường thoải mái, chỉ xóa khi không còn hợp đồng nào cần đến.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Contracts)",
          "body": "Nắm vững nguyên lý Tình huống: một thay đổi API làm hỏng hàng xóm để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-8-1",
            "label": "DEPLOYS",
            "value": "40 / day",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-8-2",
            "label": "BLAST",
            "value": "one feature",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-8-3",
            "label": "HOPS",
            "value": "2–4",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-8-4",
            "label": "OPSCOST",
            "value": "high",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-8-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Tình huống: một thay đổi API làm hỏng hàng xóm"
          },
          {
            "id": "chk-8-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "microservices-step-10",
        "number": 10,
        "title": "Choosing",
        "category": "LÝ THUYẾT",
        "categoryColor": "violet",
        "headline": "Nên chọn cái nào?",
        "bodyHtml": "<div class=\"callout callout--tip\"><strong>Lưu ý Kỹ sư:</strong> Microservice giải quyết bài toán mở rộng quy mô tổ chức. Nếu bạn chưa gặp bài toán đó, chúng chủ yếu chỉ thêm chi phí.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Choosing)",
          "body": "Nắm vững nguyên lý Nên chọn cái nào? để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-9-1",
            "label": "DEPLOYS",
            "value": "40 / day",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-9-2",
            "label": "BLAST",
            "value": "one feature",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-9-3",
            "label": "HOPS",
            "value": "2–4",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-9-4",
            "label": "OPSCOST",
            "value": "high",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-9-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Nên chọn cái nào?"
          },
          {
            "id": "chk-9-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "microservices-step-11",
        "number": 11,
        "title": "Strangler",
        "category": "LÝ THUYẾT",
        "categoryColor": "emerald",
        "headline": "Di chuyển: strangler fig",
        "bodyHtml": "<p>Đừng viết lại mọi thứ một lần. Đặt gateway trước monolith, xây <b>một</b> dịch vụ mới là Thanh toán, và chỉ định tuyến <code>/payments/*</code> tới nó. Mọi thứ khác vẫn đi tới monolith.</p>\n<p>Chuyển từng năng lực một cho đến khi monolith đủ nhỏ để cho nghỉ hưu. Mỗi bước đều có thể phát hành và đảo ngược.</p>\n<div class=\"callout callout--insight\"><strong>Lưu ý Kỹ sư:</strong> Tên gọi lấy từ cây đa bóp cổ (strangler fig), loài mọc quấn quanh một cây khác cho đến khi tự đứng vững được.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Strangler)",
          "body": "Nắm vững nguyên lý Di chuyển: strangler fig để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-10-1",
            "label": "DEPLOYS",
            "value": "5 / day",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-10-2",
            "label": "BLAST",
            "value": "whole site",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-10-3",
            "label": "HOPS",
            "value": "1–2",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-10-4",
            "label": "OPSCOST",
            "value": "medium",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-10-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Di chuyển: strangler fig"
          },
          {
            "id": "chk-10-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "microservices-step-12",
        "number": 12,
        "title": "Recap",
        "category": "TỐI ƯU",
        "categoryColor": "emerald",
        "headline": "Recap",
        "bodyHtml": "<div class=\"callout callout--next\"><strong>Lưu ý Kỹ sư:</strong> Tiếp theo: <b>Khám phá dịch vụ</b>: cách các dịch vụ tìm thấy nhau khi các instance đến rồi đi.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Recap)",
          "body": "Nắm vững nguyên lý Recap để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-11-1",
            "label": "DEPLOYS",
            "value": "40 / day",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-11-2",
            "label": "BLAST",
            "value": "one feature",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-11-3",
            "label": "HOPS",
            "value": "2–4",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-11-4",
            "label": "OPSCOST",
            "value": "high",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-11-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Recap"
          },
          {
            "id": "chk-11-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Hoàn Tất Bài Học"
      }
    ]
  },
  {
    "id": "service-discovery",
    "slug": "service-discovery",
    "title": "Khám phá dịch vụ & gateway",
    "subtitle": "Service Discovery & Gateways · 13 phút thực chiến",
    "moduleCode": "06",
    "moduleTitle": "Kiến Trúc Microservices Doanh Nghiệp (Architecture)",
    "durationMinutes": 13,
    "difficulty": "Trung cấp",
    "steps": [
      {
        "id": "service-discovery-step-1",
        "number": 1,
        "title": "Config",
        "category": "BỐI CẢNH",
        "categoryColor": "blue",
        "headline": "Đơn hàng gọi Thanh toán",
        "bodyHtml": "<p>Với microservice, Đơn hàng cần gọi Thanh toán. Cách đơn giản nhất: ghi địa chỉ IP của các máy chủ thanh toán vào file cấu hình của Đơn hàng và chia lời gọi cho chúng.</p>\n<p>Cách này chạy được, miễn là hai máy đó không bao giờ thay đổi.</p>\n<div class=\"callout callout--insight\"><strong>Lưu ý Kỹ sư:</strong> Trong monolith câu hỏi này không tồn tại: “gọi thanh toán” là một lời gọi hàm trong cùng tiến trình.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Config)",
          "body": "Nắm vững nguyên lý Đơn hàng gọi Thanh toán để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-0-1",
            "label": "DEADCALLS",
            "value": "0",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-0-2",
            "label": "INSTANCES",
            "value": "2",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-0-3",
            "label": "LOOKUP",
            "value": "hard-coded IPs",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-0-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Đơn hàng gọi Thanh toán"
          },
          {
            "id": "chk-0-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "service-discovery-step-2",
        "number": 2,
        "title": "Churn",
        "category": "BỐI CẢNH",
        "categoryColor": "rose",
        "headline": "Instance đến rồi đi",
        "bodyHtml": "<p>Trên cloud, máy chủ là gia súc: autoscaler thêm và bớt chúng, các lần triển khai thay thế chúng, máy nào sập thì bị đổi. Instance 10.0.3.7 vừa bị thay bằng một instance mới ở 10.0.5.21.</p>\n<p>Đơn hàng vẫn giữ danh sách cũ. Một nửa lời gọi của nó đi tới một địa chỉ không ai trả lời, trong khi instance mới ngồi không.</p>\n<div class=\"callout callout--warn\"><strong>Lưu ý Kỹ sư:</strong> Mọi địa chỉ ghi vào cấu hình đều sẽ lỗi thời. Trong hệ thống tự co giãn, việc này có thể xảy ra nhiều lần mỗi ngày.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Churn)",
          "body": "Nắm vững nguyên lý Instance đến rồi đi để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-1-1",
            "label": "DEADCALLS",
            "value": "50",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-1-2",
            "label": "INSTANCES",
            "value": "2",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-1-3",
            "label": "LOOKUP",
            "value": "hard-coded IPs",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-1-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Instance đến rồi đi"
          },
          {
            "id": "chk-1-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "service-discovery-step-3",
        "number": 3,
        "title": "Registry",
        "category": "THỰC THI",
        "categoryColor": "blue",
        "headline": "Một service registry",
        "bodyHtml": "<p>Every instance <b>registers</b> itself with a <span class=\"term\">service registry</span> when it starts, then keeps sending heartbeats (the green pings). Orders asks the registry “where is payments?” and gets the current list.</p>\n<p>Các registry phổ biến: Consul, etcd, ZooKeeper, Eureka, và Kubernetes, vốn tự làm việc này cho mọi dịch vụ.</p>\n<div class=\"callout callout--tip\"><strong>Lưu ý Kỹ sư:</strong> Đơn hàng cache danh sách vài giây thay vì hỏi mỗi lần gọi: registry không được trở thành nút thắt cổ chai.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Registry)",
          "body": "Nắm vững nguyên lý Một service registry để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-2-1",
            "label": "DEADCALLS",
            "value": "0",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-2-2",
            "label": "INSTANCES",
            "value": "2",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-2-3",
            "label": "LOOKUP",
            "value": "registry",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-2-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Một service registry"
          },
          {
            "id": "chk-2-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "service-discovery-step-4",
        "number": 4,
        "title": "Churn again",
        "category": "LÝ THUYẾT",
        "categoryColor": "violet",
        "headline": "Instance tự vào và tự ra",
        "bodyHtml": "<p>Giờ thay đổi không còn nguy hiểm. Một instance mới (10.0.6.4) khởi động, đăng ký và nhận lưu lượng trong vài giây. Instance 10.0.5.21 bị treo: nó lỡ ba heartbeat, và registry loại nó ra.</p>\n<p>Không ai sửa file cấu hình nào.</p>\n<div class=\"callout callout--insight\"><strong>Lưu ý Kỹ sư:</strong> Heartbeat biến câu hỏi “nó còn sống không?” thành dữ liệu mà registry có thể hành động: cùng ý tưởng với health check của bộ cân bằng tải.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Churn again)",
          "body": "Nắm vững nguyên lý Instance tự vào và tự ra để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-3-1",
            "label": "DEADCALLS",
            "value": "0",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-3-2",
            "label": "INSTANCES",
            "value": "2",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-3-3",
            "label": "LOOKUP",
            "value": "registry",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-3-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Instance tự vào và tự ra"
          },
          {
            "id": "chk-3-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "service-discovery-step-5",
        "number": 5,
        "title": "Who balances",
        "category": "LÝ THUYẾT",
        "categoryColor": "emerald",
        "headline": "Phía client hay phía server?",
        "bodyHtml": "<p><b>Khám phá phía client</b>: Đơn hàng tự lấy danh sách và chọn một instance (round robin, ít tải nhất). Không thêm chặng nào, nhưng client nào cũng cần logic đó.</p>\n<p><b>Khám phá phía server</b>: Đơn hàng gọi một cái tên cố định, và một bộ cân bằng tải nội bộ (hoặc một Kubernetes Service) tra các instance rồi chuyển tiếp lời gọi. Client vẫn đơn giản.</p>\n<div class=\"callout callout--tip\"><strong>Lưu ý Kỹ sư:</strong> Kubernetes cho mỗi dịch vụ một cái tên cố định và một IP ảo; hầu hết các nhóm chẳng bao giờ thấy registry.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Who balances)",
          "body": "Nắm vững nguyên lý Phía client hay phía server? để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-4-1",
            "label": "DEADCALLS",
            "value": "0",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-4-2",
            "label": "INSTANCES",
            "value": "2",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-4-3",
            "label": "LOOKUP",
            "value": "registry",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-4-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Phía client hay phía server?"
          },
          {
            "id": "chk-4-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "service-discovery-step-6",
        "number": 6,
        "title": "DNS",
        "category": "LÝ THUYẾT",
        "categoryColor": "emerald",
        "headline": "Khám phá qua DNS",
        "bodyHtml": "<p>The registry can also answer through plain <span class=\"term\">DNS</span>: looking up <code>payments.internal</code> returns the healthy instances’ IPs. Every language and tool already speaks DNS.</p>\n<p>Vướng mắc là cache: client và thư viện có thể giữ câu trả lời suốt TTL (hoặc lâu hơn), vẫn gọi một instance đã biến mất. Hãy để TTL ngắn và retry khi lỗi kết nối.</p>\n<div class=\"callout callout--warn\"><strong>Lưu ý Kỹ sư:</strong> Một số runtime mặc định cache câu trả lời DNS mãi mãi. Hãy kiểm tra runtime của bạn trước khi dựa vào khám phá qua DNS.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (DNS)",
          "body": "Nắm vững nguyên lý Khám phá qua DNS để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-5-1",
            "label": "DEADCALLS",
            "value": "0",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-5-2",
            "label": "INSTANCES",
            "value": "2",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-5-3",
            "label": "LOOKUP",
            "value": "DNS",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-5-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Khám phá qua DNS"
          },
          {
            "id": "chk-5-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "service-discovery-step-7",
        "number": 7,
        "title": "Too early",
        "category": "BỐI CẢNH",
        "categoryColor": "rose",
        "headline": "Tình huống: lưu lượng tới trước khi sẵn sàng",
        "bodyHtml": "<p>Một instance mới đăng ký ngay khi tiến trình khởi động, trước khi mở kết nối cơ sở dữ liệu hay làm nóng cache. Registry phát địa chỉ của nó ngay lập tức, nó nhận một phần lưu lượng đầy đủ, và trong 30 giây một phần ba số lời gọi thanh toán bị timeout.</p>\n<p><em>Còn sống</em> không giống với <em>sẵn sàng</em>.</p>\n<div class=\"callout callout--warn\"><strong>Lưu ý Kỹ sư:</strong> Khởi động lạnh tệ nhất ngay sau các lần triển khai và autoscaling, đúng lúc lưu lượng vốn đang dịch chuyển.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Too early)",
          "body": "Nắm vững nguyên lý Tình huống: lưu lượng tới trước khi sẵn sàng để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-6-1",
            "label": "DEADCALLS",
            "value": "33",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-6-2",
            "label": "INSTANCES",
            "value": "3",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-6-3",
            "label": "LOOKUP",
            "value": "DNS",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-6-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Tình huống: lưu lượng tới trước khi sẵn sàng"
          },
          {
            "id": "chk-6-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "service-discovery-step-8",
        "number": 8,
        "title": "Ready",
        "category": "THỰC THI",
        "categoryColor": "blue",
        "headline": "Sẵn sàng, slow start và draining",
        "bodyHtml": "<p>Separate two checks: <b>liveness</b> (“the process is running”) and <b>readiness</b> (“it can serve requests now”). An instance is only listed once it passes its readiness check, and balancers ramp its share up gradually — <span class=\"term\">slow start</span>.</p>\n<p>Tắt máy là hình ảnh ngược lại: hủy đăng ký trước, chờ các yêu cầu đang xử lý xong (<b>draining</b>), rồi mới dừng.</p>\n<div class=\"callout callout--tip\"><strong>Lưu ý Kỹ sư:</strong> Kubernetes có sẵn những thứ này: readinessProbe, livenessProbe, và hook preStop cùng thời gian ân hạn cho draining.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Ready)",
          "body": "Nắm vững nguyên lý Sẵn sàng, slow start và draining để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-7-1",
            "label": "DEADCALLS",
            "value": "0",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-7-2",
            "label": "INSTANCES",
            "value": "3",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-7-3",
            "label": "LOOKUP",
            "value": "DNS",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-7-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Sẵn sàng, slow start và draining"
          },
          {
            "id": "chk-7-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "service-discovery-step-9",
        "number": 9,
        "title": "Registry down",
        "category": "LÝ THUYẾT",
        "categoryColor": "violet",
        "headline": "Nếu registry sập thì sao?",
        "bodyHtml": "<p>Giờ mọi thứ phụ thuộc vào registry, nên nó không được là điểm lỗi duy nhất. Hai điều cứu bạn. Bên gọi <b>cache</b> danh sách cuối cùng đã biết, nên lưu lượng vẫn chảy ngay cả khi không liên lạc được registry; chỉ là một lúc sẽ không thấy thay đổi.</p>\n<p>Và registry chạy thành một <b>cụm</b> nhỏ 3 hoặc 5 node thống nhất bằng đa số phiếu (Raft hoặc Paxos). Mất một node, thậm chí hai trên năm, cũng không thay đổi gì.</p>\n<div class=\"callout callout--insight\"><strong>Lưu ý Kỹ sư:</strong> etcd, Consul và ZooKeeper đều là cụm đồng thuận. Kích thước lẻ rất quan trọng: 3 node chịu được 1 lỗi, 5 node chịu được 2.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Registry down)",
          "body": "Nắm vững nguyên lý Nếu registry sập thì sao? để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-8-1",
            "label": "DEADCALLS",
            "value": "0",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-8-2",
            "label": "INSTANCES",
            "value": "2",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-8-3",
            "label": "LOOKUP",
            "value": "registry",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-8-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Nếu registry sập thì sao?"
          },
          {
            "id": "chk-8-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "service-discovery-step-10",
        "number": 10,
        "title": "Plumbing",
        "category": "BỐI CẢNH",
        "categoryColor": "rose",
        "headline": "Nhóm nào cũng tự xây lại cùng một hệ thống ống",
        "bodyHtml": "<p>Khám phá dịch vụ mới chỉ là khởi đầu. Mỗi lời gọi giữa các dịch vụ còn cần timeout, retry, circuit breaker, mã hóa và metric.</p>\n<p>Với các dịch vụ viết bằng Java, Go, Python và Node, mỗi nhóm tự viết phiên bản riêng cho tất cả những thứ đó, với bug riêng và mặc định riêng.</p>\n<div class=\"callout callout--warn\"><strong>Lưu ý Kỹ sư:</strong> Năm cách cài đặt logic retry nghĩa là năm hành vi khác nhau khi có sự cố.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Plumbing)",
          "body": "Nắm vững nguyên lý Nhóm nào cũng tự xây lại cùng một hệ thống ống để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-9-1",
            "label": "DEADCALLS",
            "value": "0",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-9-2",
            "label": "INSTANCES",
            "value": "2",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-9-3",
            "label": "LOOKUP",
            "value": "DNS",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-9-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Nhóm nào cũng tự xây lại cùng một hệ thống ống"
          },
          {
            "id": "chk-9-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "service-discovery-step-11",
        "number": 11,
        "title": "Mesh",
        "category": "THỰC THI",
        "categoryColor": "blue",
        "headline": "Service mesh: sidecar lo việc đó",
        "bodyHtml": "<p>A <span class=\"term\">service mesh</span> (Istio, Linkerd) runs a small proxy — a <b>sidecar</b> — next to every service. Each service just talks to its local sidecar; the sidecars find instances, retry, time out, encrypt (mTLS) and report metrics.</p>\n<p>Một <b>control plane</b> đẩy danh sách instance và chính sách hiện tại tới mọi sidecar. Hệ thống ống chỉ viết một lần, ở một chỗ.</p>\n<div class=\"callout callout--tip\"><strong>Lưu ý Kỹ sư:</strong> Mesh thêm độ trễ (thêm hai chặng cục bộ) và độ phức tạp vận hành thực sự. Đáng giá khi có nhiều dịch vụ; quá mức với vài dịch vụ.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Mesh)",
          "body": "Nắm vững nguyên lý Service mesh: sidecar lo việc đó để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-10-1",
            "label": "DEADCALLS",
            "value": "0",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-10-2",
            "label": "INSTANCES",
            "value": "2",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-10-3",
            "label": "LOOKUP",
            "value": "mesh sidecars",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-10-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Service mesh: sidecar lo việc đó"
          },
          {
            "id": "chk-10-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "service-discovery-step-12",
        "number": 12,
        "title": "Gateway",
        "category": "LÝ THUYẾT",
        "categoryColor": "emerald",
        "headline": "Ở rìa: một API gateway",
        "bodyHtml": "<p>Discovery handles calls <em>between</em> services. For clients outside — apps and browsers — an <span class=\"term\">API gateway</span> is the single front door: it authenticates requests, applies rate limits, terminates TLS and routes each path to the right service.</p>\n<p>Client không bao giờ biết bố cục bên trong của bạn, nên bạn có thể tách, gộp hay di chuyển dịch vụ tùy ý.</p>\n<div class=\"callout callout--tip\"><strong>Lưu ý Kỹ sư:</strong> Các client khác nhau thường có gateway riêng, gọi là backend-for-frontend (BFF), định hình phản hồi cho mobile hoặc web.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Gateway)",
          "body": "Nắm vững nguyên lý Ở rìa: một API gateway để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-11-1",
            "label": "DEADCALLS",
            "value": "0",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-11-2",
            "label": "INSTANCES",
            "value": "2",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-11-3",
            "label": "LOOKUP",
            "value": "mesh sidecars",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-11-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Ở rìa: một API gateway"
          },
          {
            "id": "chk-11-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "service-discovery-step-13",
        "number": 13,
        "title": "Recap",
        "category": "TỐI ƯU",
        "categoryColor": "emerald",
        "headline": "Recap",
        "bodyHtml": "<div class=\"callout callout--next\"><strong>Lưu ý Kỹ sư:</strong> Tiếp theo: <b>Saga</b>: giữ dữ liệu nhất quán khi một hành động trải qua nhiều dịch vụ.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Recap)",
          "body": "Nắm vững nguyên lý Recap để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-12-1",
            "label": "DEADCALLS",
            "value": "0",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-12-2",
            "label": "INSTANCES",
            "value": "2",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-12-3",
            "label": "LOOKUP",
            "value": "mesh sidecars",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-12-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Recap"
          },
          {
            "id": "chk-12-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Hoàn Tất Bài Học"
      }
    ]
  },
  {
    "id": "sagas",
    "slug": "sagas",
    "title": "Saga & giao dịch phân tán",
    "subtitle": "Sagas & Distributed Transactions · 13 phút thực chiến",
    "moduleCode": "06",
    "moduleTitle": "Kiến Trúc Microservices Doanh Nghiệp (Architecture)",
    "durationMinutes": 13,
    "difficulty": "Nâng cao",
    "steps": [
      {
        "id": "sagas-step-1",
        "number": 1,
        "title": "Half a trip",
        "category": "BỐI CẢNH",
        "categoryColor": "rose",
        "headline": "Một chuyến đi, ba cơ sở dữ liệu",
        "bodyHtml": "<p>Một khách du lịch đặt chuyến đi: vé máy bay, khách sạn và xe thuê. Mỗi thứ nằm ở một dịch vụ khác nhau với cơ sở dữ liệu riêng (mỗi dịch vụ một CSDL, từ các bài trước).</p>\n<p>Dịch vụ chuyến đi đặt vé máy bay: xong. Khách sạn: xong. Xe: <b>hết xe</b>. Giờ khách có vé máy bay và khách sạn mà không dùng được, và đã bị trừ tiền cả hai.</p>\n<div class=\"callout callout--warn\"><strong>Lưu ý Kỹ sư:</strong> BEGIN … COMMIT chỉ chạy được bên trong một cơ sở dữ liệu. Giữa các dịch vụ không có sẵn chức năng “hoàn tác tất cả”.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Half a trip)",
          "body": "Nắm vững nguyên lý Một chuyến đi, ba cơ sở dữ liệu để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-0-1",
            "label": "ALLORNOTHING",
            "value": "no",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-0-2",
            "label": "COORD",
            "value": "none",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-0-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Một chuyến đi, ba cơ sở dữ liệu"
          },
          {
            "id": "chk-0-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "sagas-step-2",
        "number": 2,
        "title": "2PC",
        "category": "LÝ THUYẾT",
        "categoryColor": "emerald",
        "headline": "Two-phase commit",
        "bodyHtml": "<p>A classic fix is <span class=\"term\">two-phase commit</span> (2PC). Phase 1: a coordinator asks every participant to <b>prepare</b> — do the work, lock the rows, and promise it can commit (the pings). Phase 2: if all said yes, it tells everyone to <b>commit</b>; if anyone said no, everyone rolls back.</p>\n<p>Dịch vụ thuê xe bỏ phiếu không, nên không có gì được đặt ở đâu cả. Tất cả hoặc không gì cả.</p>\n<div class=\"callout callout--tip\"><strong>Lưu ý Kỹ sư:</strong> 2PC được dùng bên trong một số cơ sở dữ liệu và với giao dịch XA. Nó đòi hỏi mọi bên tham gia đều hỗ trợ, mà phần lớn API web và nhiều kho NoSQL thì không.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (2PC)",
          "body": "Nắm vững nguyên lý Two-phase commit để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-1-1",
            "label": "ALLORNOTHING",
            "value": "yes",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-1-2",
            "label": "BLOCKED",
            "value": "during commit",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-1-3",
            "label": "COORD",
            "value": "2PC",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-1-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Two-phase commit"
          },
          {
            "id": "chk-1-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "sagas-step-3",
        "number": 3,
        "title": "Blocked",
        "category": "BỐI CẢNH",
        "categoryColor": "rose",
        "headline": "Khi bộ điều phối chết",
        "bodyHtml": "<p>Điểm yếu: sau khi chuẩn bị, các bên phải chờ quyết định của bộ điều phối. Nếu nó sập đúng lúc đó, chuyến bay và khách sạn nằm ở trạng thái “đã chuẩn bị”, giữ khóa trên ghế và phòng, không tự commit hay rollback được.</p>\n<p>Những khách khác muốn đặt các ghế và phòng đó cũng phải chờ, cho đến khi bộ điều phối hồi phục. (Bản thân chuyến đi vẫn là tất cả hoặc không gì cả; chỉ là nó không thể hoàn tất.)</p>\n<div class=\"callout callout--warn\"><strong>Lưu ý Kỹ sư:</strong> 2PC là giao thức chặn: một bộ điều phối chậm hoặc chết có thể đóng băng mọi bên tham gia. Giữa các dịch vụ và qua internet, điều đó thường không chấp nhận được.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Blocked)",
          "body": "Nắm vững nguyên lý Khi bộ điều phối chết để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-2-1",
            "label": "ALLORNOTHING",
            "value": "yes",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-2-2",
            "label": "BLOCKED",
            "value": "3 services",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-2-3",
            "label": "COORD",
            "value": "2PC",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-2-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Khi bộ điều phối chết"
          },
          {
            "id": "chk-2-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "sagas-step-4",
        "number": 4,
        "title": "Saga",
        "category": "THỰC THI",
        "categoryColor": "blue",
        "headline": "Saga: commit từng bước, hoàn tác khi lỗi",
        "bodyHtml": "<p>A <span class=\"term\">saga</span> splits the trip into local transactions that each commit immediately: book flight, then book hotel, then rent car. Nothing is held open.</p>\n<p>Mỗi bước có một <b>hành động bù trừ</b> hoàn tác nó về mặt nghiệp vụ. Khi thuê xe thất bại, saga chạy chúng theo thứ tự ngược: hủy khách sạn, rồi hủy vé máy bay (các vòng đỏ).</p>\n<div class=\"callout callout--insight\"><strong>Lưu ý Kỹ sư:</strong> Saga đánh đổi tính cô lập lấy tính sẵn sàng: không có khóa nào được giữ giữa các dịch vụ, nhưng hệ thống có lúc nằm ở trạng thái lưng chừng.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Saga)",
          "body": "Nắm vững nguyên lý Saga: commit từng bước, hoàn tác khi lỗi để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-3-1",
            "label": "ALLORNOTHING",
            "value": "eventually",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-3-2",
            "label": "BLOCKED",
            "value": "none",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-3-3",
            "label": "COORD",
            "value": "saga",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-3-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Saga: commit từng bước, hoàn tác khi lỗi"
          },
          {
            "id": "chk-3-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "sagas-step-5",
        "number": 5,
        "title": "Orchestration",
        "category": "LÝ THUYẾT",
        "categoryColor": "emerald",
        "headline": "Điều phối tập trung: một dịch vụ chạy saga",
        "bodyHtml": "<p>Trong saga <b>điều phối tập trung</b>, một thành phần, gọi là orchestrator, là một máy trạng thái nhỏ: nó bảo mỗi dịch vụ làm gì tiếp theo, chờ câu trả lời, và quyết định tiếp tục hay bù trừ.</p>\n<p>Nó lưu mọi thay đổi trạng thái vào cơ sở dữ liệu riêng, nên nếu sập nó tiếp tục đúng chỗ đã dừng.</p>\n<div class=\"callout callout--tip\"><strong>Lưu ý Kỹ sư:</strong> Các engine workflow như Temporal, AWS Step Functions và Camunda được xây cho việc này: saga bền vững, tiếp tục được và quan sát được.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Orchestration)",
          "body": "Nắm vững nguyên lý Điều phối tập trung: một dịch vụ chạy saga để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-4-1",
            "label": "ALLORNOTHING",
            "value": "eventually",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-4-2",
            "label": "BLOCKED",
            "value": "none",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-4-3",
            "label": "COORD",
            "value": "orchestrator",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-4-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Điều phối tập trung: một dịch vụ chạy saga"
          },
          {
            "id": "chk-4-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "sagas-step-6",
        "number": 6,
        "title": "Choreography",
        "category": "LÝ THUYẾT",
        "categoryColor": "emerald",
        "headline": "Vũ đạo: dịch vụ phản ứng với sự kiện",
        "bodyHtml": "<p>Trong saga kiểu <b>vũ đạo</b> (choreography) không có nhạc trưởng. Chuyến bay phát <code>FlightBooked</code>; Khách sạn lắng nghe, đặt phòng và phát <code>HotelBooked</code>; Thuê xe lắng nghe và thuê xe, hoặc phát <code>CarFailed</code>, mà Khách sạn và Chuyến bay phản ứng bằng cách hủy.</p>\n<p>Không có thành phần trung tâm nào để xây hay vận hành, nhưng luồng xử lý trải khắp mọi dịch vụ, khó theo dõi và khó thay đổi hơn.</p>\n<div class=\"callout callout--insight\"><strong>Lưu ý Kỹ sư:</strong> Vũ đạo hợp với saga ngắn, ít bước. Khi saga lớn dần, một orchestrator thường dễ hiểu hơn.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Choreography)",
          "body": "Nắm vững nguyên lý Vũ đạo: dịch vụ phản ứng với sự kiện để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-5-1",
            "label": "ALLORNOTHING",
            "value": "eventually",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-5-2",
            "label": "BLOCKED",
            "value": "none",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-5-3",
            "label": "COORD",
            "value": "events",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-5-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Vũ đạo: dịch vụ phản ứng với sự kiện"
          },
          {
            "id": "chk-5-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "sagas-step-7",
        "number": 7,
        "title": "In between",
        "category": "NGHIỆP VỤ BA",
        "categoryColor": "amber",
        "headline": "Vướng mắc: không có cô lập",
        "bodyHtml": "<p>Khi saga đang chạy, người khác có thể thấy trạng thái làm dở của nó: ghế đã bị giữ, khách sạn thì chưa đặt. Và có những bước không thật sự hoàn tác được: email “chuyến bay của bạn đã được xác nhận” đã gửi đi rồi.</p>\n<p>Hãy thiết kế cho điều đó: dùng trạng thái <b>tạm giữ</b> (“đã giữ chỗ”, không phải “đã xác nhận”), đặt bước dễ thất bại nhất <b>đầu tiên</b>, và những bước khó hoàn tác nhất, như trừ tiền thẻ và gửi email, <b>sau cùng</b>.</p>\n<div class=\"callout callout--warn\"><strong>Lưu ý Kỹ sư:</strong> Bù trừ là một hành động mới, không phải rollback. Hoàn tiền không giống với việc chưa từng trừ tiền.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (In between)",
          "body": "Nắm vững nguyên lý Vướng mắc: không có cô lập để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-6-1",
            "label": "ALLORNOTHING",
            "value": "eventually",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-6-2",
            "label": "BLOCKED",
            "value": "none",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-6-3",
            "label": "COORD",
            "value": "orchestrator",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-6-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Vướng mắc: không có cô lập"
          },
          {
            "id": "chk-6-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "sagas-step-8",
        "number": 8,
        "title": "Resume",
        "category": "LÝ THUYẾT",
        "categoryColor": "violet",
        "headline": "Tình huống: sập rồi tiếp tục",
        "bodyHtml": "<p>Orchestrator sập ngay sau khi Khách sạn đặt phòng, nhưng trước khi nó kịp lưu lại việc đó. Khi khởi động lại, nó thấy “khách sạn: đang chờ” và gửi lại yêu cầu đặt phòng.</p>\n<p>Nếu Khách sạn đặt thêm phòng thứ hai, khách trả tiền hai lần. Vì vậy mỗi bước mang một <b>khóa idempotency</b> (id saga + bước), và Khách sạn trả về lượt đặt đã có thay vì tạo cái mới.</p>\n<div class=\"callout callout--tip\"><strong>Lưu ý Kỹ sư:</strong> Bản chất saga là ít nhất một lần. Mọi bước và mọi bù trừ phải an toàn khi lặp lại.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Resume)",
          "body": "Nắm vững nguyên lý Tình huống: sập rồi tiếp tục để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-7-1",
            "label": "ALLORNOTHING",
            "value": "eventually",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-7-2",
            "label": "BLOCKED",
            "value": "none",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-7-3",
            "label": "COORD",
            "value": "orchestrator",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-7-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Tình huống: sập rồi tiếp tục"
          },
          {
            "id": "chk-7-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "sagas-step-9",
        "number": 9,
        "title": "Undo fails",
        "category": "BỐI CẢNH",
        "categoryColor": "rose",
        "headline": "Tình huống: chính việc hoàn tác thất bại",
        "bodyHtml": "<p>Không thuê được xe, nên saga hủy khách sạn, nhưng API của khách sạn đang sập. Bỏ cuộc không phải lựa chọn: khách sẽ phải trả tiền cho một phòng không dùng được.</p>\n<p>Vì thế các bù trừ được <b>thử lại</b> với backoff cho đến khi thành công, và phải an toàn khi lặp lại. Một bù trừ vẫn kẹt sau vài giờ sẽ vào hàng đợi để con người xử lý.</p>\n<div class=\"callout callout--warn\"><strong>Lưu ý Kỹ sư:</strong> Một bù trừ phải có khả năng thành công vào lúc nào đó. Đừng bao giờ thiết kế bù trừ có thể thất bại một cách chính đáng, và hãy cảnh báo khi có cái bị kẹt.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Undo fails)",
          "body": "Nắm vững nguyên lý Tình huống: chính việc hoàn tác thất bại để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-8-1",
            "label": "ALLORNOTHING",
            "value": "eventually",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-8-2",
            "label": "BLOCKED",
            "value": "none",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-8-3",
            "label": "COORD",
            "value": "orchestrator",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-8-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Tình huống: chính việc hoàn tác thất bại"
          },
          {
            "id": "chk-8-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "sagas-step-10",
        "number": 10,
        "title": "Unknown",
        "category": "LÝ THUYẾT",
        "categoryColor": "emerald",
        "headline": "Tình huống: timeout nghĩa là “không rõ”",
        "bodyHtml": "<p>Lời gọi thuê xe bị timeout. Dịch vụ thuê xe đã đặt xe trước khi mất kết nối, hay chưa? Timeout không phải thất bại: kết quả là <b>không rõ</b>.</p>\n<p>Bù trừ mù quáng có thể hủy một lượt đặt chưa từng tồn tại, hoặc bỏ sót một lượt đã có. Thay vào đó, hãy hỏi: truy vấn dịch vụ thuê xe về yêu cầu <code>81-car</code>, hoặc đơn giản là thử lại với cùng khóa idempotency để nhận câu trả lời thật.</p>\n<div class=\"callout callout--tip\"><strong>Lưu ý Kỹ sư:</strong> Hãy coi mỗi bước từ xa có ba kết quả: thành công, thất bại, không rõ. Chỉ hai kết quả đầu mới cho saga đi tiếp.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Unknown)",
          "body": "Nắm vững nguyên lý Tình huống: timeout nghĩa là “không rõ” để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-9-1",
            "label": "ALLORNOTHING",
            "value": "eventually",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-9-2",
            "label": "BLOCKED",
            "value": "none",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-9-3",
            "label": "COORD",
            "value": "orchestrator",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-9-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Tình huống: timeout nghĩa là “không rõ”"
          },
          {
            "id": "chk-9-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "sagas-step-11",
        "number": 11,
        "title": "Recap",
        "category": "TỐI ƯU",
        "categoryColor": "emerald",
        "headline": "Recap",
        "bodyHtml": "<div class=\"callout callout--next\"><strong>Lưu ý Kỹ sư:</strong> Tiếp theo: <b>Xử lý theo lô & luồng</b>: xử lý khối lượng sự kiện khổng lồ, qua đêm hoặc ngay khi chúng xảy ra.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Recap)",
          "body": "Nắm vững nguyên lý Recap để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-10-1",
            "label": "ALLORNOTHING",
            "value": "eventually",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-10-2",
            "label": "BLOCKED",
            "value": "none",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-10-3",
            "label": "COORD",
            "value": "orchestrator",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-10-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Recap"
          },
          {
            "id": "chk-10-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Hoàn Tất Bài Học"
      }
    ]
  },
  {
    "id": "batch-stream",
    "slug": "batch-stream",
    "title": "Xử lý theo lô & luồng",
    "subtitle": "Batch & Stream Processing · 15 phút thực chiến",
    "moduleCode": "06",
    "moduleTitle": "Kiến Trúc Microservices Doanh Nghiệp (Architecture)",
    "durationMinutes": 15,
    "difficulty": "Trung cấp",
    "steps": [
      {
        "id": "batch-stream-step-1",
        "number": 1,
        "title": "Live DB",
        "category": "BỐI CẢNH",
        "categoryColor": "rose",
        "headline": "Phân tích ngay trên CSDL production",
        "bodyHtml": "<p>Mỗi lượt xem của mỗi video là một dòng trong cơ sở dữ liệu production, khoảng 2 tỷ mỗi ngày. Một dashboard hiển thị lượt xem theo video, tính lại mỗi phút bằng một câu <code>GROUP BY</code> lớn.</p>\n<p>Mỗi lần chạy quét toàn bộ ngày tính đến lúc đó (hàng trăm triệu dòng vào giữa buổi sáng) và cơ sở dữ liệu phục vụ ứng dụng ì ạch: người xem phải chờ trong lúc nó đếm.</p>\n<div class=\"callout callout--warn\"><strong>Lưu ý Kỹ sư:</strong> Cơ sở dữ liệu production được tinh chỉnh cho nhiều truy vấn nhỏ và nhanh. Những lần quét khổng lồ cướp mất bộ nhớ, CPU và đĩa của nó.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Live DB)",
          "body": "Nắm vững nguyên lý Phân tích ngay trên CSDL production để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-0-1",
            "label": "FRESHNESS",
            "value": "live",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-0-2",
            "label": "PRODLOAD",
            "value": "95",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-0-3",
            "label": "EVENTSDAY",
            "value": "2 billion",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-0-4",
            "label": "EXACT",
            "value": "yes",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-0-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Phân tích ngay trên CSDL production"
          },
          {
            "id": "chk-0-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "batch-stream-step-2",
        "number": 2,
        "title": "Batch",
        "category": "THỰC THI",
        "categoryColor": "blue",
        "headline": "Lô: thu thập bây giờ, tính sau",
        "bodyHtml": "<p>Instead, the app appends every view as an event to cheap <b>object storage</b> — files, not database rows. Once a night a <span class=\"term\">batch job</span> reads the whole day, computes the counts on a cluster of workers, and writes the results to an analytics <b>warehouse</b>.</p>\n<p>Dashboard đọc từ kho dữ liệu. CSDL production lại chỉ phục vụ ứng dụng.</p>\n<div class=\"callout callout--tip\"><strong>Lưu ý Kỹ sư:</strong> Xử lý theo lô đơn giản, rẻ và dễ chạy lại: nếu job có lỗi, sửa rồi chạy lại trên chính các file đó.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Batch)",
          "body": "Nắm vững nguyên lý Lô: thu thập bây giờ, tính sau để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-1-1",
            "label": "FRESHNESS",
            "value": "up to 24 h",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-1-2",
            "label": "PRODLOAD",
            "value": "30",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-1-3",
            "label": "EVENTSDAY",
            "value": "2 billion",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-1-4",
            "label": "EXACT",
            "value": "yes",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-1-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Lô: thu thập bây giờ, tính sau"
          },
          {
            "id": "chk-1-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "batch-stream-step-3",
        "number": 3,
        "title": "Map/reduce",
        "category": "LÝ THUYẾT",
        "categoryColor": "emerald",
        "headline": "Chia việc: map, shuffle, reduce",
        "bodyHtml": "<p>2 tỷ sự kiện không thể đi qua một máy cho nhanh, nên job được chia nhỏ. <b>Map</b>: mỗi worker đọc phần file của mình và đếm lượt xem theo video. <b>Shuffle</b>: số đếm của cùng một video được gửi tới cùng một worker. <b>Reduce</b>: worker đó cộng chúng lại.</p>\n<p>Thêm worker thì job xong nhanh hơn tương ứng.</p>\n<div class=\"callout callout--tip\"><strong>Lưu ý Kỹ sư:</strong> Đây là MapReduce. Ngày nay Spark, BigQuery, Snowflake và những công cụ tương tự làm điều tương tự sau một giao diện SQL.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Map/reduce)",
          "body": "Nắm vững nguyên lý Chia việc: map, shuffle, reduce để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-2-1",
            "label": "FRESHNESS",
            "value": "up to 24 h",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-2-2",
            "label": "PRODLOAD",
            "value": "30",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-2-3",
            "label": "EVENTSDAY",
            "value": "2 billion",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-2-4",
            "label": "EXACT",
            "value": "yes",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-2-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Chia việc: map, shuffle, reduce"
          },
          {
            "id": "chk-2-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "batch-stream-step-4",
        "number": 4,
        "title": "Skew",
        "category": "BỐI CẢNH",
        "categoryColor": "rose",
        "headline": "Tình huống: một video, một reducer kiệt sức",
        "bodyHtml": "<p>Một video viral: 40% tổng lượt xem hôm qua. Trong shuffle, mọi lượt xem của nó đều tới <em>cùng một</em> reducer. Worker đó cày 3 giờ trong khi 99 worker kia xong trong 5 phút, và job phải chờ worker chậm nhất.</p>\n<p>Chia việc theo khóa chỉ cân bằng khi các khóa cân bằng. Dữ liệu thật hiếm khi như vậy.</p>\n<div class=\"callout callout--warn\"><strong>Lưu ý Kỹ sư:</strong> Lệch khóa là lý do phổ biến nhất khiến một batch job lớn chậm một cách khó hiểu. Hãy tìm một task chạy lâu hơn hẳn các task còn lại.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Skew)",
          "body": "Nắm vững nguyên lý Tình huống: một video, một reducer kiệt sức để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-3-1",
            "label": "FRESHNESS",
            "value": "up to 27 h",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-3-2",
            "label": "PRODLOAD",
            "value": "30",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-3-3",
            "label": "EVENTSDAY",
            "value": "2 billion",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-3-4",
            "label": "EXACT",
            "value": "yes",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-3-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Tình huống: một video, một reducer kiệt sức"
          },
          {
            "id": "chk-3-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "batch-stream-step-5",
        "number": 5,
        "title": "Combine",
        "category": "THỰC THI",
        "categoryColor": "blue",
        "headline": "Gộp sớm, tách khóa nóng",
        "bodyHtml": "<p>Two standard fixes. A <span class=\"term\">combiner</span> pre-aggregates on each mapper: instead of shipping 800 million “view of 4f2” rows, every mapper sends one partial count. For keys that are still too hot, <span class=\"term\">salting</span> splits them — <code>4f2#0</code> … <code>4f2#9</code> go to ten reducers, and a final step adds the ten totals.</p>\n<p>Job giảm từ 3 giờ về lại khoảng 20 phút.</p>\n<div class=\"callout callout--tip\"><strong>Lưu ý Kỹ sư:</strong> Spark và hầu hết các engine SQL tự động gộp cho phép tổng và đếm, và có thể phát hiện rồi tách khóa lệch khi join.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Combine)",
          "body": "Nắm vững nguyên lý Gộp sớm, tách khóa nóng để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-4-1",
            "label": "FRESHNESS",
            "value": "up to 24 h",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-4-2",
            "label": "PRODLOAD",
            "value": "30",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-4-3",
            "label": "EVENTSDAY",
            "value": "2 billion",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-4-4",
            "label": "EXACT",
            "value": "yes",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-4-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Gộp sớm, tách khóa nóng"
          },
          {
            "id": "chk-4-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "batch-stream-step-6",
        "number": 6,
        "title": "Too late",
        "category": "BỐI CẢNH",
        "categoryColor": "rose",
        "headline": "Trễ một ngày là quá muộn",
        "bodyHtml": "<p>Có những câu hỏi không thể chờ tới tối nay. Một video đang viral phải hiện trong “Thịnh hành” <em>ngay bây giờ</em>. Một trại bot làm giả hàng triệu lượt xem phải bị bắt trong vài phút, trước khi kiếm được đồng nào.</p>\n<p>Chạy batch job mỗi giờ giúp được chút ít, nhưng mỗi lần chạy vẫn đọc lại một đống dữ liệu khổng lồ.</p>\n<div class=\"callout callout--insight\"><strong>Lưu ý Kỹ sư:</strong> Xử lý theo lô trả lời “điều gì đã xảy ra?”. Có sản phẩm cần “điều gì đang xảy ra?”.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Too late)",
          "body": "Nắm vững nguyên lý Trễ một ngày là quá muộn để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-5-1",
            "label": "FRESHNESS",
            "value": "up to 24 h",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-5-2",
            "label": "PRODLOAD",
            "value": "30",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-5-3",
            "label": "EVENTSDAY",
            "value": "2 billion",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-5-4",
            "label": "EXACT",
            "value": "yes",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-5-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Trễ một ngày là quá muộn"
          },
          {
            "id": "chk-5-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "batch-stream-step-7",
        "number": 7,
        "title": "Stream",
        "category": "THỰC THI",
        "categoryColor": "blue",
        "headline": "Xử lý luồng: tính ngay khi sự kiện tới",
        "bodyHtml": "<p>Now the app publishes each view to an <b>event stream</b> (Kafka). A <span class=\"term\">stream processor</span> (Flink, Kafka Streams, Spark Streaming) reads events as they arrive and keeps running counts, writing results to a fast store.</p>\n<p>Dashboard chỉ chậm hơn thực tế vài giây thay vì một ngày.</p>\n<div class=\"callout callout--tip\"><strong>Lưu ý Kỹ sư:</strong> Bộ xử lý giữ số đếm trong trạng thái cục bộ và tạo checkpoint thường xuyên, nên khi sập nó tiếp tục từ checkpoint gần nhất thay vì làm lại từ đầu.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Stream)",
          "body": "Nắm vững nguyên lý Xử lý luồng: tính ngay khi sự kiện tới để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-6-1",
            "label": "FRESHNESS",
            "value": "5 s",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-6-2",
            "label": "PRODLOAD",
            "value": "30",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-6-3",
            "label": "EVENTSDAY",
            "value": "2 billion",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-6-4",
            "label": "EXACT",
            "value": "yes",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-6-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Xử lý luồng: tính ngay khi sự kiện tới"
          },
          {
            "id": "chk-6-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "batch-stream-step-8",
        "number": 8,
        "title": "Windows",
        "category": "LÝ THUYẾT",
        "categoryColor": "emerald",
        "headline": "Đếm theo cửa sổ",
        "bodyHtml": "<p>A stream never ends, so “count views” needs a time frame: a <span class=\"term\">window</span>. <b>Tumbling</b> windows cut time into fixed slices (views per minute). <b>Sliding</b> windows overlap (views in the last 10 minutes, updated every minute).</p>\n<p>Một cú nhảy đột ngột giữa các cửa sổ chính là dáng vẻ của “thịnh hành”, hoặc gian lận.</p>\n<div class=\"callout callout--tip\"><strong>Lưu ý Kỹ sư:</strong> Cửa sổ phiên nhóm sự kiện theo từng đợt hoạt động: hữu ích cho câu hỏi “mọi người đã xem bao lâu?”.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Windows)",
          "body": "Nắm vững nguyên lý Đếm theo cửa sổ để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-7-1",
            "label": "FRESHNESS",
            "value": "5 s",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-7-2",
            "label": "PRODLOAD",
            "value": "30",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-7-3",
            "label": "EVENTSDAY",
            "value": "2 billion",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-7-4",
            "label": "EXACT",
            "value": "yes",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-7-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Đếm theo cửa sổ"
          },
          {
            "id": "chk-7-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "batch-stream-step-9",
        "number": 9,
        "title": "Late events",
        "category": "BỐI CẢNH",
        "categoryColor": "rose",
        "headline": "Tình huống: sự kiện muộn và trùng lặp",
        "bodyHtml": "<p>Một chiếc điện thoại xem video trên tàu điện ngầm không có sóng và tải lượt xem lên hai giờ sau. Chúng nên được tính cho 12:04, lúc chúng xảy ra, hay cho bây giờ, lúc chúng tới? Và mạng chập chờn khiến vài điện thoại gửi cùng một sự kiện hai lần.</p>\n<p>Stream processors use <b>event time</b> (when it happened), a <span class=\"term\">watermark</span> to decide when a window is complete enough to publish, a policy for stragglers, and an event id to drop duplicates.</p>\n<div class=\"callout callout--warn\"><strong>Lưu ý Kỹ sư:</strong> “Exactly-once” trong xử lý luồng nghĩa là checkpoint cộng với ghi idempotent: cùng bài học như với hàng đợi, ở quy mô hàng tỷ sự kiện mỗi ngày.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Late events)",
          "body": "Nắm vững nguyên lý Tình huống: sự kiện muộn và trùng lặp để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-8-1",
            "label": "FRESHNESS",
            "value": "5 s",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-8-2",
            "label": "PRODLOAD",
            "value": "30",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-8-3",
            "label": "EVENTSDAY",
            "value": "2 billion",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-8-4",
            "label": "EXACT",
            "value": "with care",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-8-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Tình huống: sự kiện muộn và trùng lặp"
          },
          {
            "id": "chk-8-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "batch-stream-step-10",
        "number": 10,
        "title": "Lag",
        "category": "BỐI CẢNH",
        "categoryColor": "rose",
        "headline": "Tình huống: bộ xử lý bị tụt lại",
        "bodyHtml": "<p>A celebrity live stream triples traffic for an hour. The stream processor can’t keep up, and unprocessed events pile up in the stream: <span class=\"term\">consumer lag</span> reaches 4 minutes and 18 million events.</p>\n<p>Không mất gì cả (luồng giữ lại mọi thứ), nhưng dashboard “trực tiếp” giờ đã cũ 4 phút, và kiểm tra gian lận chạy trễ 4 phút.</p>\n<div class=\"callout callout--warn\"><strong>Lưu ý Kỹ sư:</strong> Consumer lag là chỉ số sức khỏe then chốt của mọi hệ thống xử lý luồng. Hãy cảnh báo theo nó, tính bằng giây hoặc số sự kiện.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Lag)",
          "body": "Nắm vững nguyên lý Tình huống: bộ xử lý bị tụt lại để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-9-1",
            "label": "FRESHNESS",
            "value": "4 min",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-9-2",
            "label": "PRODLOAD",
            "value": "30",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-9-3",
            "label": "EVENTSDAY",
            "value": "2 billion",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-9-4",
            "label": "EXACT",
            "value": "with care",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-9-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Tình huống: bộ xử lý bị tụt lại"
          },
          {
            "id": "chk-9-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "batch-stream-step-11",
        "number": 11,
        "title": "Partitions",
        "category": "THỰC THI",
        "categoryColor": "blue",
        "headline": "Mở rộng ngang theo phân vùng",
        "bodyHtml": "<p>Luồng được chia thành các <b>phân vùng</b> (theo id video, để sự kiện của mỗi video giữ đúng thứ tự). Mỗi instance của bộ xử lý sở hữu vài phân vùng, nên thêm instance là thêm thông lượng: hai bộ xử lý, mỗi cái hai phân vùng.</p>\n<p>Phần tồn đọng được xả hết, lag giảm về vài giây, và autoscaler có thể thêm bộ xử lý bất cứ khi nào lag tăng.</p>\n<div class=\"callout callout--tip\"><strong>Lưu ý Kỹ sư:</strong> Số phân vùng giới hạn mức song song. Hãy tạo nhiều phân vùng hơn mức cần hôm nay: thêm vào sau sẽ phải xáo trộn lại các khóa.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Partitions)",
          "body": "Nắm vững nguyên lý Mở rộng ngang theo phân vùng để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-10-1",
            "label": "FRESHNESS",
            "value": "5 s",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-10-2",
            "label": "PRODLOAD",
            "value": "30",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-10-3",
            "label": "EVENTSDAY",
            "value": "2 billion",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-10-4",
            "label": "EXACT",
            "value": "with care",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-10-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Mở rộng ngang theo phân vùng"
          },
          {
            "id": "chk-10-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "batch-stream-step-12",
        "number": 12,
        "title": "Unique",
        "category": "LÝ THUYẾT",
        "categoryColor": "emerald",
        "headline": "Tình huống: đếm người xem duy nhất",
        "bodyHtml": "<p>Lượt xem thì dễ đếm. Người xem <b>duy nhất</b> thì không: để đếm chính xác bạn phải nhớ mọi id người xem đã gặp, 50 triệu id cho một video nổi tiếng, khoảng 800 MB trạng thái, cho mỗi video, mỗi cửa sổ.</p>\n<p>A <span class=\"term\">HyperLogLog</span> sketch estimates the number of distinct ids in 12 KB with about 1% error, and sketches from different machines and windows simply merge.</p>\n<div class=\"callout callout--insight\"><strong>Lưu ý Kỹ sư:</strong> Thuật toán gần đúng (HyperLogLog, count-min sketch, t-digest cho phân vị) đổi một sai số nhỏ xíu lấy khoản tiết kiệm khổng lồ. Dashboard hiếm khi cần tới 1% cuối cùng.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Unique)",
          "body": "Nắm vững nguyên lý Tình huống: đếm người xem duy nhất để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-11-1",
            "label": "FRESHNESS",
            "value": "5 s",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-11-2",
            "label": "PRODLOAD",
            "value": "30",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-11-3",
            "label": "EVENTSDAY",
            "value": "2 billion",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-11-4",
            "label": "EXACT",
            "value": "≈ 1% error",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-11-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Tình huống: đếm người xem duy nhất"
          },
          {
            "id": "chk-11-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "batch-stream-step-13",
        "number": 13,
        "title": "Both",
        "category": "LÝ THUYẾT",
        "categoryColor": "violet",
        "headline": "Lô và luồng, cùng nhau",
        "bodyHtml": "<div class=\"callout callout--tip\"><strong>Lưu ý Kỹ sư:</strong> Hãy bắt đầu với xử lý theo lô, trừ khi bạn rõ ràng cần độ trễ tính bằng giây. Thêm xử lý luồng cho số ít kết quả thật sự cần.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Both)",
          "body": "Nắm vững nguyên lý Lô và luồng, cùng nhau để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-12-1",
            "label": "FRESHNESS",
            "value": "5 s",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-12-2",
            "label": "PRODLOAD",
            "value": "30",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-12-3",
            "label": "EVENTSDAY",
            "value": "2 billion",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-12-4",
            "label": "EXACT",
            "value": "yes",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-12-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Lô và luồng, cùng nhau"
          },
          {
            "id": "chk-12-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "batch-stream-step-14",
        "number": 14,
        "title": "Recap",
        "category": "TỐI ƯU",
        "categoryColor": "emerald",
        "headline": "Recap",
        "bodyHtml": "<div class=\"callout callout--next\"><strong>Lưu ý Kỹ sư:</strong> Vậy là xong Kiến trúc. Module tiếp theo: <b>Bảo mật</b>, bắt đầu với xác thực.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Recap)",
          "body": "Nắm vững nguyên lý Recap để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-13-1",
            "label": "FRESHNESS",
            "value": "5 s",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-13-2",
            "label": "PRODLOAD",
            "value": "30",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-13-3",
            "label": "EVENTSDAY",
            "value": "2 billion",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-13-4",
            "label": "EXACT",
            "value": "yes",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-13-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Recap"
          },
          {
            "id": "chk-13-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Hoàn Tất Bài Học"
      }
    ]
  }
];
