import type { StudioLesson } from "../studio.types";

export const mod04Lessons: StudioLesson[] = [
  {
    "id": "apis",
    "slug": "apis",
    "title": "REST, RPC & GraphQL",
    "subtitle": "REST, RPC & GraphQL · 11 phút thực chiến",
    "moduleCode": "04",
    "moduleTitle": "Giao Tiếp & Hàng Đợi Bất Đồng Bộ (Communication)",
    "durationMinutes": 11,
    "difficulty": "Cơ bản",
    "steps": [
      {
        "id": "apis-step-1",
        "number": 1,
        "title": "Contract",
        "category": "BỐI CẢNH",
        "categoryColor": "blue",
        "headline": "Chương trình cần một hợp đồng",
        "bodyHtml": "<p>Ứng dụng di động của bạn hiển thị một hồ sơ: tên, ảnh đại diện, ba bài đăng gần nhất và số người theo dõi. Dữ liệu nằm trên máy chủ của bạn, nên ứng dụng phải hỏi để lấy.</p>\n<p>An <span class=\"term\">API</span> is the agreed way to ask: which addresses exist, what to send, and what comes back. Here it’s JSON over HTTPS.</p>\n<div class=\"callout callout--insight\"><strong>Lưu ý Kỹ sư:</strong> API là một lời hứa. Khi các ứng dụng đã phụ thuộc vào nó, thay đổi nó mà không làm hỏng chúng là một bài toán thiết kế thực sự.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Contract)",
          "body": "Nắm vững nguyên lý Chương trình cần một hợp đồng để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-0-1",
            "label": "TIẾN ĐỘ",
            "value": "Bước 1/10",
            "level": "blue",
            "iconName": "activity"
          },
          {
            "id": "tel-0-2",
            "label": "TRẠNG THÁI",
            "value": "Sẵn sàng",
            "level": "good",
            "iconName": "check"
          },
          {
            "id": "tel-0-3",
            "label": "ĐỘ PHỨC TẠP",
            "value": "Cơ bản",
            "level": "default",
            "iconName": "layers"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-0-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Chương trình cần một hợp đồng"
          },
          {
            "id": "chk-0-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "apis-step-2",
        "number": 2,
        "title": "REST",
        "category": "LÝ THUYẾT",
        "categoryColor": "emerald",
        "headline": "REST: tài nguyên và động từ",
        "bodyHtml": "<p><span class=\"term\">REST</span> treats data as <b>resources</b> with addresses — <code>/users/42</code>, <code>/users/42/posts</code> — and uses HTTP verbs on them: <code>GET</code> to read, <code>POST</code> to create, <code>PUT</code>/<code>PATCH</code> to update, <code>DELETE</code> to remove.</p>\n<p>It’s simple, works with every tool, and <code>GET</code> responses can be cached by browsers and CDNs. <code>GET</code>, <code>PUT</code> and <code>DELETE</code> are also <span class=\"term\">idempotent</span> — repeating one changes nothing more — while <code>POST</code> is not, which matters the moment a client retries.</p>\n<div class=\"callout callout--tip\"><strong>Lưu ý Kỹ sư:</strong> Mã trạng thái cũng mang ý nghĩa: 200 OK, 201 Created, 404 Not Found, 429 Too Many Requests, 500 lỗi máy chủ.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (REST)",
          "body": "Nắm vững nguyên lý REST: tài nguyên và động từ để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-1-1",
            "label": "TRIPS",
            "value": "3",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-1-2",
            "label": "PAYLOAD",
            "value": "48 KB",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-1-3",
            "label": "SCREENMS",
            "value": "210",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-1-4",
            "label": "UNUSED",
            "value": "94",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-1-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: REST: tài nguyên và động từ"
          },
          {
            "id": "chk-1-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "apis-step-3",
        "number": 3,
        "title": "On 4G",
        "category": "BỐI CẢNH",
        "categoryColor": "rose",
        "headline": "Lắm lời và cồng kềnh trên điện thoại",
        "bodyHtml": "<p>Trên điện thoại, mỗi lượt khứ hồi tốn khoảng 100 ms. Client gọi ba lần lần lượt (thường là buộc phải vậy, vì một lệnh gọi cần id từ câu trả lời trước), nên màn hình phải chờ cả ba nối tiếp nhau.</p>\n<p>Each endpoint also returns the <em>whole</em> object: 48 KB arrive to show about 3 KB. That’s <span class=\"term\">over-fetching</span>; needing several calls for one screen is <span class=\"term\">under-fetching</span>.</p>\n<div class=\"callout callout--warn\"><strong>Lưu ý Kỹ sư:</strong> Lượt khứ hồi và byte lãng phí gây hại nhất ở nơi mạng chậm nhất: đúng nơi người dùng di động đang ở.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (On 4G)",
          "body": "Nắm vững nguyên lý Lắm lời và cồng kềnh trên điện thoại để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-2-1",
            "label": "TRIPS",
            "value": "3",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-2-2",
            "label": "PAYLOAD",
            "value": "48 KB",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-2-3",
            "label": "SCREENMS",
            "value": "420",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-2-4",
            "label": "UNUSED",
            "value": "94",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-2-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Lắm lời và cồng kềnh trên điện thoại"
          },
          {
            "id": "chk-2-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "apis-step-4",
        "number": 4,
        "title": "GraphQL",
        "category": "THỰC THI",
        "categoryColor": "blue",
        "headline": "GraphQL: hỏi đúng thứ bạn cần",
        "bodyHtml": "<p>With <span class=\"term\">GraphQL</span>, the client sends one query describing the exact shape it wants. The GraphQL server fetches each part from the services behind it and returns just those fields.</p>\n<p>Hãy xem một yêu cầu rời điện thoại, tách ra tới dịch vụ Users và Posts, rồi quay về thành một phản hồi duy nhất.</p>\n<div class=\"callout callout--tip\"><strong>Lưu ý Kỹ sư:</strong> Rất hợp khi nhiều client khác nhau (iOS, Android, web, TV) mỗi bên cần dữ liệu hơi khác nhau từ cùng một backend.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (GraphQL)",
          "body": "Nắm vững nguyên lý GraphQL: hỏi đúng thứ bạn cần để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-3-1",
            "label": "TRIPS",
            "value": "1",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-3-2",
            "label": "PAYLOAD",
            "value": "3 KB",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-3-3",
            "label": "SCREENMS",
            "value": "140",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-3-4",
            "label": "UNUSED",
            "value": "0",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-3-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: GraphQL: hỏi đúng thứ bạn cần"
          },
          {
            "id": "chk-3-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "apis-step-5",
        "number": 5,
        "title": "The catch",
        "category": "NGHIỆP VỤ BA",
        "categoryColor": "amber",
        "headline": "Truy vấn linh hoạt có thể rất tốn kém",
        "bodyHtml": "<p>Client có thể hỏi <em>bất cứ thứ gì</em> schema cho phép, kể cả người theo dõi của người theo dõi của người theo dõi, cùng mọi bài đăng của họ. Một truy vấn trông vô hại (ô vuông lớn) làm dịch vụ Users quá tải.</p>\n<p>Và vì truy vấn thường được gửi dưới dạng <code>POST</code> tới một URL duy nhất, cache HTTP thông thường và CDN không giúp được nếu không làm thêm, chẳng hạn persisted query.</p>\n<div class=\"callout callout--warn\"><strong>Lưu ý Kỹ sư:</strong> GraphQL trên production cần giới hạn độ sâu và chi phí truy vấn, và thường cần một danh sách cho phép các truy vấn đã duyệt (“persisted”).</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (The catch)",
          "body": "Nắm vững nguyên lý Truy vấn linh hoạt có thể rất tốn kém để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-4-1",
            "label": "TRIPS",
            "value": "1",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-4-2",
            "label": "PAYLOAD",
            "value": "2.1 MB",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-4-3",
            "label": "SCREENMS",
            "value": "3800",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-4-4",
            "label": "UNUSED",
            "value": "0",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-4-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Truy vấn linh hoạt có thể rất tốn kém"
          },
          {
            "id": "chk-4-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "apis-step-6",
        "number": 6,
        "title": "RPC",
        "category": "LÝ THUYẾT",
        "categoryColor": "emerald",
        "headline": "Bên trong trung tâm dữ liệu: RPC",
        "bodyHtml": "<p>Behind the API, services call each other constantly. Here the usual choice is <span class=\"term\">RPC</span> (remote procedure call): calling a function on another machine as if it were local — today usually <b>gRPC</b>.</p>\n<p>Hợp đồng là một schema có kiểu (Protocol Buffers); mã cho cả hai phía được sinh ra từ nó, và thông điệp đi dưới dạng nhị phân gọn qua HTTP/2.</p>\n<div class=\"callout callout--tip\"><strong>Lưu ý Kỹ sư:</strong> gRPC nhanh, chặt chẽ về kiểu và hỗ trợ streaming, nhưng trình duyệt không nói được nó một cách tự nhiên (cần proxy gRPC-Web), nên nó chủ yếu ở bên trong mạng của bạn.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (RPC)",
          "body": "Nắm vững nguyên lý Bên trong trung tâm dữ liệu: RPC để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-5-1",
            "label": "TRIPS",
            "value": "1",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-5-2",
            "label": "PAYLOAD",
            "value": "3 KB",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-5-3",
            "label": "SCREENMS",
            "value": "130",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-5-4",
            "label": "UNUSED",
            "value": "0",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-5-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Bên trong trung tâm dữ liệu: RPC"
          },
          {
            "id": "chk-5-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "apis-step-7",
        "number": 7,
        "title": "Pagination",
        "category": "LÝ THUYẾT",
        "categoryColor": "emerald",
        "headline": "Tình huống: danh sách 2 triệu mục",
        "bodyHtml": "<p>Danh sách người theo dõi của một người nổi tiếng có 2 triệu mục. Trả về tất cả trong một phản hồi nghĩa là hàng trăm megabyte và phải chờ rất lâu. API trả danh sách theo từng <b>trang</b>.</p>\n<p><code>?offset=40000&limit=20</code> looks simple, but the database still walks past 40,000 rows. A <span class=\"term\">cursor</span> — “the 20 after id 9f3c” — jumps straight there with an index, and doesn’t skip or repeat items when new ones arrive.</p>\n<div class=\"callout callout--tip\"><strong>Lưu ý Kỹ sư:</strong> Trả về con trỏ của trang kế tiếp trong mỗi phản hồi. Client chỉ cần gửi lại nó.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Pagination)",
          "body": "Nắm vững nguyên lý Tình huống: danh sách 2 triệu mục để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-6-1",
            "label": "TRIPS",
            "value": "1",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-6-2",
            "label": "PAYLOAD",
            "value": "3 KB",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-6-3",
            "label": "SCREENMS",
            "value": "130",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-6-4",
            "label": "UNUSED",
            "value": "0",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-6-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Tình huống: danh sách 2 triệu mục"
          },
          {
            "id": "chk-6-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "apis-step-8",
        "number": 8,
        "title": "Versions",
        "category": "BỐI CẢNH",
        "categoryColor": "rose",
        "headline": "Tình huống: đổi tên một trường làm hỏng ứng dụng cũ",
        "bodyHtml": "<p>Một lần dọn dẹp đổi tên <code>name</code> thành <code>display_name</code>. Ứng dụng mới chạy tốt, nhưng hàng triệu điện thoại vẫn chạy phiên bản năm ngoái, và màn hình hồ sơ của chúng giờ bị crash.</p>\n<p>Không thể ép ứng dụng di động cập nhật. Vì vậy API phát triển theo kiểu <b>bổ sung</b>: thêm trường mới, giữ trường cũ, và chỉ xóa khi gần như không còn ai gọi nó. Với thay đổi thật sự không tương thích, hãy phát hành phiên bản mới (<code>/v2/</code>) và chạy cả hai.</p>\n<div class=\"callout callout--warn\"><strong>Lưu ý Kỹ sư:</strong> Một khi API đã công khai, mọi trường đều là một lời hứa. Hãy đo xem ai đang dùng trước khi làm hỏng nó.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Versions)",
          "body": "Nắm vững nguyên lý Tình huống: đổi tên một trường làm hỏng ứng dụng cũ để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-7-1",
            "label": "TRIPS",
            "value": "1",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-7-2",
            "label": "PAYLOAD",
            "value": "3 KB",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-7-3",
            "label": "SCREENMS",
            "value": "130",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-7-4",
            "label": "UNUSED",
            "value": "0",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-7-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Tình huống: đổi tên một trường làm hỏng ứng dụng cũ"
          },
          {
            "id": "chk-7-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "apis-step-9",
        "number": 9,
        "title": "Choosing",
        "category": "LÝ THUYẾT",
        "categoryColor": "violet",
        "headline": "Dùng cái nào, ở đâu?",
        "bodyHtml": "<div class=\"callout callout--insight\"><strong>Lưu ý Kỹ sư:</strong> Dù chọn kiểu nào, hãy đánh phiên bản API và đừng bao giờ làm hỏng client hiện có: thêm trường, đừng đổi tên hay xóa.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Choosing)",
          "body": "Nắm vững nguyên lý Dùng cái nào, ở đâu? để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-8-1",
            "label": "TRIPS",
            "value": "1",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-8-2",
            "label": "PAYLOAD",
            "value": "3 KB",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-8-3",
            "label": "SCREENMS",
            "value": "130",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-8-4",
            "label": "UNUSED",
            "value": "0",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-8-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Dùng cái nào, ở đâu?"
          },
          {
            "id": "chk-8-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "apis-step-10",
        "number": 10,
        "title": "Recap",
        "category": "TỐI ƯU",
        "categoryColor": "emerald",
        "headline": "Recap",
        "bodyHtml": "<div class=\"callout callout--next\"><strong>Lưu ý Kỹ sư:</strong> Tiếp theo: <b>Hàng đợi tin nhắn</b>: cho những việc không nên bắt ai phải chờ câu trả lời.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Recap)",
          "body": "Nắm vững nguyên lý Recap để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-9-1",
            "label": "TRIPS",
            "value": "1",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-9-2",
            "label": "PAYLOAD",
            "value": "3 KB",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-9-3",
            "label": "SCREENMS",
            "value": "130",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-9-4",
            "label": "UNUSED",
            "value": "0",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-9-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Recap"
          },
          {
            "id": "chk-9-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Hoàn Tất Bài Học"
      }
    ]
  },
  {
    "id": "queues",
    "slug": "queues",
    "title": "Hàng đợi tin nhắn",
    "subtitle": "Message Queues · 12 phút thực chiến",
    "moduleCode": "04",
    "moduleTitle": "Giao Tiếp & Hàng Đợi Bất Đồng Bộ (Communication)",
    "durationMinutes": 12,
    "difficulty": "Cơ bản",
    "steps": [
      {
        "id": "queues-step-1",
        "number": 1,
        "title": "Slow upload",
        "category": "BỐI CẢNH",
        "categoryColor": "rose",
        "headline": "Việc chậm nằm trong yêu cầu",
        "bodyHtml": "<p>Nhà sáng tạo tải video lên, và mỗi video phải được chuyển mã sang nhiều kích thước: khoảng 30 giây việc nặng. Hiện tại máy chủ web làm việc đó <em>bên trong</em> yêu cầu tải lên.</p>\n<p>Vậy là nhà sáng tạo nhìn vòng xoay tải suốt 30 s, nhiều yêu cầu bị quá thời gian, và trong lúc máy chủ nghiền video, mọi trang khác trên trang web cũng chậm theo.</p>\n<div class=\"callout callout--warn\"><strong>Lưu ý Kỹ sư:</strong> Bất cứ thứ gì chậm, nặng hay không đáng tin nằm trong yêu cầu (video, email, báo cáo, lệnh gọi bên thứ ba) đều bắt người dùng phải chờ.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Slow upload)",
          "body": "Nắm vững nguyên lý Việc chậm nằm trong yêu cầu để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-0-1",
            "label": "RESPOND",
            "value": "3e4",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-0-2",
            "label": "WORKERS",
            "value": "0",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-0-3",
            "label": "LOST",
            "value": "25%",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-0-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Việc chậm nằm trong yêu cầu"
          },
          {
            "id": "chk-0-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "queues-step-2",
        "number": 2,
        "title": "Add a queue",
        "category": "THỰC THI",
        "categoryColor": "blue",
        "headline": "Đặt một hàng đợi ở giữa",
        "bodyHtml": "<p>The web server now just stores the upload, puts a small <b>job</b> message on a <span class=\"term\">message queue</span>, and replies at once: “processing — we’ll notify you”.</p>\n<p>Separate <span class=\"term\">worker</span> machines pull jobs off the queue and transcode at their own pace. The web server is the <b>producer</b>; workers are <b>consumers</b>.</p>\n<div class=\"callout callout--tip\"><strong>Lưu ý Kỹ sư:</strong> Các hàng đợi phổ biến: RabbitMQ, Amazon SQS, Google Pub/Sub và Kafka (một log cũng dùng được như hàng đợi).</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Add a queue)",
          "body": "Nắm vững nguyên lý Đặt một hàng đợi ở giữa để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-1-1",
            "label": "RESPOND",
            "value": "80",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-1-2",
            "label": "BACKLOG",
            "value": "2",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-1-3",
            "label": "WORKERS",
            "value": "2",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-1-4",
            "label": "LOST",
            "value": "0",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-1-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Đặt một hàng đợi ở giữa"
          },
          {
            "id": "chk-1-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "queues-step-3",
        "number": 3,
        "title": "Spike",
        "category": "LÝ THUYẾT",
        "categoryColor": "violet",
        "headline": "Đợt tăng đột biến thành việc tồn đọng",
        "bodyHtml": "<p>Một nhà sáng tạo lớn phát trực tiếp và lượt tải lên tăng gấp mười. Không có hàng đợi, đợt tăng đó đã đánh sập máy chủ web.</p>\n<p>Giờ tầng web vẫn nhanh (nó chỉ đưa vào hàng đợi) và job chỉ việc chờ đến lượt. Worker giữ nhịp đều và bắt kịp sau cơn cao điểm.</p>\n<div class=\"callout callout--insight\"><strong>Lưu ý Kỹ sư:</strong> Hàng đợi biến “quá nhiều việc ngay lúc này” thành “chờ lâu hơn một chút về sau”. Đây gọi là cân bằng tải theo thời gian (load levelling).</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Spike)",
          "body": "Nắm vững nguyên lý Đợt tăng đột biến thành việc tồn đọng để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-2-1",
            "label": "RESPOND",
            "value": "85",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-2-2",
            "label": "BACKLOG",
            "value": "1200",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-2-3",
            "label": "WORKERS",
            "value": "2",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-2-4",
            "label": "LOST",
            "value": "0",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-2-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Đợt tăng đột biến thành việc tồn đọng"
          },
          {
            "id": "chk-2-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "queues-step-4",
        "number": 4,
        "title": "More workers",
        "category": "LÝ THUYẾT",
        "categoryColor": "emerald",
        "headline": "Thêm worker để rút cạn",
        "bodyHtml": "<p>Need to catch up faster? Start more workers. They all pull from the same queue, and each job goes to exactly <b>one</b> of them — the <span class=\"term\">competing consumers</span> pattern.</p>\n<p>Worker không giữ trạng thái, nên thêm vào rất dễ, và nhiều nhóm tự động mở rộng chúng theo độ dài hàng đợi.</p>\n<div class=\"callout callout--tip\"><strong>Lưu ý Kỹ sư:</strong> Producer và consumer giờ mở rộng độc lập: thêm máy chủ web cho lưu lượng, thêm worker cho xử lý.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (More workers)",
          "body": "Nắm vững nguyên lý Thêm worker để rút cạn để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-3-1",
            "label": "RESPOND",
            "value": "80",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-3-2",
            "label": "BACKLOG",
            "value": "300",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-3-3",
            "label": "WORKERS",
            "value": "5",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-3-4",
            "label": "LOST",
            "value": "0",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-3-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Thêm worker để rút cạn"
          },
          {
            "id": "chk-3-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "queues-step-5",
        "number": 5,
        "title": "Crash",
        "category": "BỐI CẢNH",
        "categoryColor": "rose",
        "headline": "Một worker chết giữa chừng",
        "bodyHtml": "<p>Một worker sập giữa lúc chuyển mã. Nếu hàng đợi xóa mỗi job ngay khi giao đi, video đó sẽ biến mất luôn, và nhà sáng tạo chờ mãi.</p>\n<p>Máy móc sập, khởi động lại và bị thay thế liên tục. Hàng đợi phải giả định điều đó.</p>\n<div class=\"callout callout--warn\"><strong>Lưu ý Kỹ sư:</strong> Giao một job không giống với hoàn thành nó.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Crash)",
          "body": "Nắm vững nguyên lý Một worker chết giữa chừng để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-4-1",
            "label": "RESPOND",
            "value": "80",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-4-2",
            "label": "BACKLOG",
            "value": "300",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-4-3",
            "label": "WORKERS",
            "value": "4",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-4-4",
            "label": "LOST",
            "value": "12",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-4-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Một worker chết giữa chừng"
          },
          {
            "id": "chk-4-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "queues-step-6",
        "number": 6,
        "title": "Acks",
        "category": "THỰC THI",
        "categoryColor": "blue",
        "headline": "Xác nhận khi xong",
        "bodyHtml": "<p>Fix: a job is only <em>hidden</em> while a worker has it. When the worker finishes, it sends an <span class=\"term\">acknowledgement</span> and the job is deleted. No ack within a timeout? The job reappears and another worker picks it up.</p>\n<p>The catch: a job can now run <b>twice</b> (say, a worker finishes but dies before acking). So jobs must be <span class=\"term\">idempotent</span> — safe to repeat.</p>\n<div class=\"callout callout--tip\"><strong>Lưu ý Kỹ sư:</strong> Đây là giao “ít nhất một lần” (at-least-once), chuẩn chung của hàng đợi. Đúng một lần (exactly-once) rất khó; consumer idempotent cho ra cùng kết quả.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Acks)",
          "body": "Nắm vững nguyên lý Xác nhận khi xong để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-5-1",
            "label": "RESPOND",
            "value": "80",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-5-2",
            "label": "BACKLOG",
            "value": "320",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-5-3",
            "label": "WORKERS",
            "value": "4",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-5-4",
            "label": "LOST",
            "value": "0",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-5-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Xác nhận khi xong"
          },
          {
            "id": "chk-5-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "queues-step-7",
        "number": 7,
        "title": "Poison",
        "category": "LÝ THUYẾT",
        "categoryColor": "emerald",
        "headline": "Thông điệp độc và dead-letter queue",
        "bodyHtml": "<p>Một tệp tải lên bị hỏng. Mọi worker thử nó đều sập hoặc lỗi, job bị giao lại rồi lại lỗi, mãi mãi, lãng phí worker và chặn các job khác.</p>\n<p>So queues count attempts. After, say, 3 failures the message is moved to a <span class=\"term\">dead-letter queue</span> (DLQ) for a human or a script to inspect.</p>\n<div class=\"callout callout--tip\"><strong>Lưu ý Kỹ sư:</strong> Đặt cảnh báo theo kích thước DLQ. Một dead-letter queue đang lớn dần thường là dấu hiệu đầu tiên của bug.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Poison)",
          "body": "Nắm vững nguyên lý Thông điệp độc và dead-letter queue để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-6-1",
            "label": "RESPOND",
            "value": "80",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-6-2",
            "label": "BACKLOG",
            "value": "60",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-6-3",
            "label": "WORKERS",
            "value": "4",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-6-4",
            "label": "LOST",
            "value": "0",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-6-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Thông điệp độc và dead-letter queue"
          },
          {
            "id": "chk-6-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "queues-step-8",
        "number": 8,
        "title": "Order",
        "category": "BỐI CẢNH",
        "categoryColor": "rose",
        "headline": "Tình huống: thông điệp sai thứ tự",
        "bodyHtml": "<p>Một hàng đợi khác mang các sự kiện tài khoản: <code>created</code>, <code>email changed</code>, <code>deleted</code>. Với nhiều worker lấy song song, một worker chậm có thể xong “email changed” <em>sau khi</em> worker khác đã xử lý “deleted”.</p>\n<p>Nhiều hàng đợi không bảo đảm thứ tự gì cả, và ngay cả loại có thứ tự cũng mất nó khi nhiều consumer làm song song.</p>\n<div class=\"callout callout--warn\"><strong>Lưu ý Kỹ sư:</strong> Nếu tính đúng đắn phụ thuộc vào thứ tự, bạn phải thiết kế cho nó một cách rõ ràng.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Order)",
          "body": "Nắm vững nguyên lý Tình huống: thông điệp sai thứ tự để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-7-1",
            "label": "RESPOND",
            "value": "80",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-7-2",
            "label": "BACKLOG",
            "value": "60",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-7-3",
            "label": "WORKERS",
            "value": "4",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-7-4",
            "label": "LOST",
            "value": "0",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-7-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Tình huống: thông điệp sai thứ tự"
          },
          {
            "id": "chk-7-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "queues-step-9",
        "number": 9,
        "title": "Partitions",
        "category": "THỰC THI",
        "categoryColor": "blue",
        "headline": "Thứ tự theo khóa nhờ phân vùng",
        "bodyHtml": "<p>Systems like Kafka split a topic into <span class=\"term\">partitions</span>. Messages with the same key (say, the account id) always go to the same partition, and each partition is read by one worker, in order.</p>\n<p>Nhờ vậy sự kiện của một tài khoản giữ đúng thứ tự, trong khi các tài khoản khác nhau vẫn được xử lý song song trên các phân vùng.</p>\n<div class=\"callout callout--tip\"><strong>Lưu ý Kỹ sư:</strong> Thứ tự được bảo đảm theo khóa, không phải toàn cục. Thứ tự toàn cục nghĩa là một consumer, và không có song song.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Partitions)",
          "body": "Nắm vững nguyên lý Thứ tự theo khóa nhờ phân vùng để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-8-1",
            "label": "RESPOND",
            "value": "80",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-8-2",
            "label": "BACKLOG",
            "value": "60",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-8-3",
            "label": "WORKERS",
            "value": "4",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-8-4",
            "label": "LOST",
            "value": "0",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-8-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Thứ tự theo khóa nhờ phân vùng"
          },
          {
            "id": "chk-8-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "queues-step-10",
        "number": 10,
        "title": "Backpressure",
        "category": "LÝ THUYẾT",
        "categoryColor": "emerald",
        "headline": "Khi tồn đọng không bao giờ cạn",
        "bodyHtml": "<p>Hàng đợi hấp thụ đợt tăng đột biến, nhưng nếu job đến nhanh hơn tốc độ worker xử lý <em>trong nhiều giờ</em>, tồn đọng tăng mãi. Job ngày càng cũ, và rốt cuộc hết chỗ lưu trữ.</p>\n<p>Hãy theo dõi <b>tuổi</b> của hàng đợi, không chỉ độ dài, và đẩy ngược lại: tự động mở rộng worker, giới hạn hàng đợi và bảo producer chậm lại (hoặc từ chối job mới với lời “thử lại sau” rõ ràng).</p>\n<div class=\"callout callout--insight\"><strong>Lưu ý Kỹ sư:</strong> Hàng đợi mua được thời gian, không mua được năng lực. Về lâu dài, thông lượng phải theo kịp tốc độ đến.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Backpressure)",
          "body": "Nắm vững nguyên lý Khi tồn đọng không bao giờ cạn để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-9-1",
            "label": "RESPOND",
            "value": "120",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-9-2",
            "label": "BACKLOG",
            "value": "5e4",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-9-3",
            "label": "WORKERS",
            "value": "4",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-9-4",
            "label": "LOST",
            "value": "0",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-9-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Khi tồn đọng không bao giờ cạn"
          },
          {
            "id": "chk-9-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "queues-step-11",
        "number": 11,
        "title": "Recap",
        "category": "TỐI ƯU",
        "categoryColor": "emerald",
        "headline": "Recap",
        "bodyHtml": "<div class=\"callout callout--next\"><strong>Lưu ý Kỹ sư:</strong> Tiếp theo: <b>Pub/Sub & sự kiện</b>: khi một việc xảy ra cần kích hoạt nhiều việc khác.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Recap)",
          "body": "Nắm vững nguyên lý Recap để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-10-1",
            "label": "RESPOND",
            "value": "80",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-10-2",
            "label": "BACKLOG",
            "value": "60",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-10-3",
            "label": "WORKERS",
            "value": "4",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-10-4",
            "label": "LOST",
            "value": "0",
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
    "id": "pubsub",
    "slug": "pubsub",
    "title": "Pub/Sub & sự kiện",
    "subtitle": "Pub/Sub & Events · 10 phút thực chiến",
    "moduleCode": "04",
    "moduleTitle": "Giao Tiếp & Hàng Đợi Bất Đồng Bộ (Communication)",
    "durationMinutes": 10,
    "difficulty": "Cơ bản",
    "steps": [
      {
        "id": "pubsub-step-1",
        "number": 1,
        "title": "Call everyone",
        "category": "BỐI CẢNH",
        "categoryColor": "rose",
        "headline": "Thanh toán gọi tất cả mọi người",
        "bodyHtml": "<p>Khi có đơn hàng, bốn việc khác phải xảy ra: gửi email xác nhận, giữ hàng trong kho, ghi nhận analytics, cộng điểm thành viên.</p>\n<p>Dịch vụ đơn hàng gọi lần lượt từng dịch vụ và chờ từng câu trả lời, nên người mua phải chờ cả bốn: gần một giây.</p>\n<div class=\"callout callout--warn\"><strong>Lưu ý Kỹ sư:</strong> Mỗi tính năng mới liên quan đến đơn hàng đồng nghĩa với việc sửa, kiểm thử và triển khai lại dịch vụ đơn hàng.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Call everyone)",
          "body": "Nắm vững nguyên lý Thanh toán gọi tất cả mọi người để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-0-1",
            "label": "CHECKOUT",
            "value": "920",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-0-2",
            "label": "KNOWS",
            "value": "4 services",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-0-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Thanh toán gọi tất cả mọi người"
          },
          {
            "id": "chk-0-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "pubsub-step-2",
        "number": 2,
        "title": "Email down",
        "category": "BỐI CẢNH",
        "categoryColor": "rose",
        "headline": "Email sập, nên không ai mua được",
        "bodyHtml": "<p>Nhà cung cấp email gặp sự cố. Lệnh gọi từ dịch vụ đơn hàng tới đó thất bại, và vì thanh toán chờ mọi lệnh gọi, <b>thanh toán thất bại</b>.</p>\n<p>Một email xác nhận, vốn hoàn toàn có thể gửi muộn mười phút, vừa làm dừng toàn bộ việc bán hàng.</p>\n<div class=\"callout callout--warn\"><strong>Lưu ý Kỹ sư:</strong> Với lệnh gọi trực tiếp, độ sẵn sàng nhân lên với nhau: bốn dịch vụ mỗi cái 99,9% khiến thanh toán chỉ còn khoảng 99,6%.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Email down)",
          "body": "Nắm vững nguyên lý Email sập, nên không ai mua được để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-1-1",
            "label": "CHECKOUT",
            "value": "920",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-1-2",
            "label": "KNOWS",
            "value": "4 services",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-1-3",
            "label": "BREAKS",
            "value": "yes",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-1-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Email sập, nên không ai mua được"
          },
          {
            "id": "chk-1-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "pubsub-step-3",
        "number": 3,
        "title": "Publish",
        "category": "THỰC THI",
        "categoryColor": "blue",
        "headline": "Thay vào đó, phát một sự kiện",
        "bodyHtml": "<p>The order service now saves the order and <b>publishes</b> one event — <code>OrderPlaced</code> — to a topic on an <span class=\"term\">event bus</span>, then answers the shopper straight away.</p>\n<p>Email, kho, analytics và thành viên đều <b>đăng ký</b> (subscribe) topic đó, và mỗi bên nhận một bản sao sự kiện của riêng mình.</p>\n<div class=\"callout callout--tip\"><strong>Lưu ý Kỹ sư:</strong> Các broker phổ biến: Kafka, Amazon SNS + SQS, Google Pub/Sub, RabbitMQ (fanout exchange), Redis Streams.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Publish)",
          "body": "Nắm vững nguyên lý Thay vào đó, phát một sự kiện để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-2-1",
            "label": "CHECKOUT",
            "value": "140",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-2-2",
            "label": "KNOWS",
            "value": "1 event bus",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-2-3",
            "label": "BREAKS",
            "value": "no",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-2-4",
            "label": "SUBS",
            "value": "4",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-2-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Thay vào đó, phát một sự kiện"
          },
          {
            "id": "chk-2-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "pubsub-step-4",
        "number": 4,
        "title": "Queue vs topic",
        "category": "LÝ THUYẾT",
        "categoryColor": "violet",
        "headline": "Hàng đợi hay topic?",
        "bodyHtml": "<p>Ở bài trước, mỗi job đến với <b>một</b> worker: hàng đợi chia việc. Topic làm điều ngược lại: mỗi sự kiện đến với <b>mọi</b> subscriber, nó loan tin.</p>\n<p>Hệ thống thực tế kết hợp cả hai: mỗi dịch vụ đăng ký có hàng đợi sự kiện riêng, được dùng chung bởi mọi instance đang chạy của dịch vụ đó.</p>\n<div class=\"callout callout--insight\"><strong>Lưu ý Kỹ sư:</strong> Hàng đợi: “ai đó làm việc này.” Topic: “việc này đã xảy ra.”</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Queue vs topic)",
          "body": "Nắm vững nguyên lý Hàng đợi hay topic? để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-3-1",
            "label": "CHECKOUT",
            "value": "140",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-3-2",
            "label": "KNOWS",
            "value": "1 event bus",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-3-3",
            "label": "BREAKS",
            "value": "no",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-3-4",
            "label": "SUBS",
            "value": "4",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-3-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Hàng đợi hay topic?"
          },
          {
            "id": "chk-3-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "pubsub-step-5",
        "number": 5,
        "title": "New subscriber",
        "category": "THỰC THI",
        "categoryColor": "blue",
        "headline": "Tính năng mới chỉ cần đăng ký",
        "bodyHtml": "<p>Nhóm rủi ro muốn kiểm tra gian lận cho mọi đơn hàng. Họ xây một dịch vụ đăng ký <code>OrderPlaced</code>, vậy là xong.</p>\n<p>The order service didn’t change, wasn’t redeployed, and doesn’t even know fraud checking exists. This is <span class=\"term\">loose coupling</span>.</p>\n<div class=\"callout callout--tip\"><strong>Lưu ý Kỹ sư:</strong> Publisher không biết subscriber của mình. Các nhóm có thể thêm phản ứng với sự kiện mà không cần phối hợp lịch phát hành.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (New subscriber)",
          "body": "Nắm vững nguyên lý Tính năng mới chỉ cần đăng ký để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-4-1",
            "label": "CHECKOUT",
            "value": "140",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-4-2",
            "label": "KNOWS",
            "value": "1 event bus",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-4-3",
            "label": "BREAKS",
            "value": "no",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-4-4",
            "label": "SUBS",
            "value": "5",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-4-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Tính năng mới chỉ cần đăng ký"
          },
          {
            "id": "chk-4-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "pubsub-step-6",
        "number": 6,
        "title": "Catch up",
        "category": "LÝ THUYẾT",
        "categoryColor": "violet",
        "headline": "Một subscriber sập? Nó sẽ bắt kịp",
        "bodyHtml": "<p>Email lại sập. Lần này thanh toán không hề hay biết: event bus giữ các bản sao sự kiện của email trong subscription của nó cho đến khi email quay lại.</p>\n<p>Khi email hồi phục, nó xử lý phần tồn đọng và mọi email xác nhận đều được gửi: hơi muộn, nhưng không mất cái nào.</p>\n<div class=\"callout callout--insight\"><strong>Lưu ý Kỹ sư:</strong> Sự kiện được lưu bền: một subscriber chậm hay hỏng chỉ làm chậm chính nó.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Catch up)",
          "body": "Nắm vững nguyên lý Một subscriber sập? Nó sẽ bắt kịp để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-5-1",
            "label": "CHECKOUT",
            "value": "140",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-5-2",
            "label": "KNOWS",
            "value": "1 event bus",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-5-3",
            "label": "BREAKS",
            "value": "no",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-5-4",
            "label": "SUBS",
            "value": "5",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-5-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Một subscriber sập? Nó sẽ bắt kịp"
          },
          {
            "id": "chk-5-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "pubsub-step-7",
        "number": 7,
        "title": "Trade-offs",
        "category": "NGHIỆP VỤ BA",
        "categoryColor": "amber",
        "headline": "Cái giá của sự kiện",
        "bodyHtml": "<p>Sự kiện tách rời các dịch vụ, nhưng luồng xử lý khó nhìn thấy hơn: “chuyện gì xảy ra khi có đơn hàng?” giờ nằm rải rác trên năm codebase.</p>\n<p>Subscriber hành động muộn hơn một chút (nhất quán cuối cùng), sự kiện có thể đến hai lần hoặc sai thứ tự, và gỡ lỗi cần tracing tốt.</p>\n<div class=\"callout callout--tip\"><strong>Lưu ý Kỹ sư:</strong> Đặt tên sự kiện như sự thật ở thì quá khứ (OrderPlaced, PaymentFailed), và làm mọi subscriber idempotent.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Trade-offs)",
          "body": "Nắm vững nguyên lý Cái giá của sự kiện để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-6-1",
            "label": "CHECKOUT",
            "value": "140",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-6-2",
            "label": "KNOWS",
            "value": "1 event bus",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-6-3",
            "label": "BREAKS",
            "value": "no",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-6-4",
            "label": "SUBS",
            "value": "5",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-6-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Cái giá của sự kiện"
          },
          {
            "id": "chk-6-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "pubsub-step-8",
        "number": 8,
        "title": "Outbox",
        "category": "BỐI CẢNH",
        "categoryColor": "rose",
        "headline": "Tình huống: đã lưu, nhưng không bao giờ thông báo",
        "bodyHtml": "<p>Dịch vụ đơn hàng lưu đơn vào cơ sở dữ liệu, rồi phát <code>OrderPlaced</code>. Một ngày nó sập giữa hai bước đó: đơn hàng tồn tại, nhưng không sự kiện nào được gửi. Không email, không giữ hàng, không điểm thành viên.</p>\n<p>Fix: the <span class=\"term\">transactional outbox</span>. Write the event into an <code>outbox</code> table in the <em>same</em> database transaction as the order; a relay then publishes everything in the outbox to the bus.</p>\n<div class=\"callout callout--tip\"><strong>Lưu ý Kỹ sư:</strong> Hoặc cả đơn hàng lẫn sự kiện của nó đều được lưu, hoặc không cái nào. Relay thử lại cho đến khi bus chấp nhận, nên subscriber phải xử lý được trùng lặp. Nó có thể quét bảng định kỳ, hoặc đọc theo log của chính cơ sở dữ liệu (<b>change data capture</b>, ví dụ Debezium).</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Outbox)",
          "body": "Nắm vững nguyên lý Tình huống: đã lưu, nhưng không bao giờ thông báo để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-7-1",
            "label": "CHECKOUT",
            "value": "145",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-7-2",
            "label": "KNOWS",
            "value": "1 event bus",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-7-3",
            "label": "BREAKS",
            "value": "no",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-7-4",
            "label": "SUBS",
            "value": "5",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-7-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Tình huống: đã lưu, nhưng không bao giờ thông báo"
          },
          {
            "id": "chk-7-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "pubsub-step-9",
        "number": 9,
        "title": "Replay",
        "category": "LÝ THUYẾT",
        "categoryColor": "violet",
        "headline": "Tình huống: phát lại lịch sử",
        "bodyHtml": "<p>Analytics phát hiện một bug đã đếm sai doanh thu 30 ngày qua. Với hàng đợi kiểu cũ, các sự kiện đó đã biến mất khi bị tiêu thụ.</p>\n<p>Một bus dựa trên log như Kafka <b>giữ</b> sự kiện trong nhiều ngày hoặc nhiều tuần. Analytics sửa code, tua vị trí đọc về 30 ngày trước và xử lý lại mọi sự kiện; các subscriber khác không bị ảnh hưởng.</p>\n<div class=\"callout callout--tip\"><strong>Lưu ý Kỹ sư:</strong> Sự kiện được lưu giữ cũng cho phép một subscriber hoàn toàn mới xây dựng dữ liệu từ lịch sử thay vì bắt đầu trống rỗng.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Replay)",
          "body": "Nắm vững nguyên lý Tình huống: phát lại lịch sử để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-8-1",
            "label": "CHECKOUT",
            "value": "140",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-8-2",
            "label": "KNOWS",
            "value": "1 event bus",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-8-3",
            "label": "BREAKS",
            "value": "no",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-8-4",
            "label": "SUBS",
            "value": "5",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-8-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Tình huống: phát lại lịch sử"
          },
          {
            "id": "chk-8-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "pubsub-step-10",
        "number": 10,
        "title": "Recap",
        "category": "TỐI ƯU",
        "categoryColor": "emerald",
        "headline": "Recap",
        "bodyHtml": "<div class=\"callout callout--next\"><strong>Lưu ý Kỹ sư:</strong> Tiếp theo: <b>Cập nhật thời gian thực</b>: đưa sự kiện đến tận màn hình người dùng.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Recap)",
          "body": "Nắm vững nguyên lý Recap để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-9-1",
            "label": "CHECKOUT",
            "value": "140",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-9-2",
            "label": "KNOWS",
            "value": "1 event bus",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-9-3",
            "label": "BREAKS",
            "value": "no",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-9-4",
            "label": "SUBS",
            "value": "5",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-9-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Recap"
          },
          {
            "id": "chk-9-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Hoàn Tất Bài Học"
      }
    ]
  },
  {
    "id": "realtime",
    "slug": "realtime",
    "title": "Cập nhật thời gian thực",
    "subtitle": "Real-time Updates · 11 phút thực chiến",
    "moduleCode": "04",
    "moduleTitle": "Giao Tiếp & Hàng Đợi Bất Đồng Bộ (Communication)",
    "durationMinutes": 11,
    "difficulty": "Cơ bản",
    "steps": [
      {
        "id": "realtime-step-1",
        "number": 1,
        "title": "No way in",
        "category": "BỐI CẢNH",
        "categoryColor": "rose",
        "headline": "Bob đã gửi tin nhắn. Làm sao Alice biết?",
        "bodyHtml": "<p>Tin nhắn của Bob tới máy chủ chat. Điện thoại của Alice nên hiển thị nó ngay lập tức.</p>\n<p>Nhưng HTTP thuần là yêu cầu → phản hồi: chỉ <b>client</b> mới có thể bắt đầu cuộc trò chuyện. Máy chủ không có cách nào gọi tới điện thoại của Alice để nói “bạn có thư”.</p>\n<div class=\"callout callout--insight\"><strong>Lưu ý Kỹ sư:</strong> Điện thoại và trình duyệt nằm sau router gia đình và mạng di động vốn chặn kết nối đến: client phải là bên chủ động kết nối.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (No way in)",
          "body": "Nắm vững nguyên lý Bob đã gửi tin nhắn. Làm sao Alice biết? để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-0-1",
            "label": "DELAY",
            "value": "never",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-0-2",
            "label": "RPM",
            "value": "0",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-0-3",
            "label": "CONNS",
            "value": "0",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-0-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Bob đã gửi tin nhắn. Làm sao Alice biết?"
          },
          {
            "id": "chk-0-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "realtime-step-2",
        "number": 2,
        "title": "Polling",
        "category": "LÝ THUYẾT",
        "categoryColor": "emerald",
        "headline": "Polling: hỏi liên tục",
        "bodyHtml": "<p>Cách sửa đơn giản nhất: ứng dụng của Alice hỏi “có gì mới không?” mỗi 2 giây. Hầu hết câu trả lời đều trống (chấm nhạt); thỉnh thoảng có một cái mang tin nhắn (xanh lá).</p>\n<p>Dễ xây bằng các yêu cầu bình thường, nhưng tin nhắn đến trễ tới 2 giây, và phần lớn yêu cầu bị lãng phí.</p>\n<div class=\"callout callout--tip\"><strong>Lưu ý Kỹ sư:</strong> Polling ổn cho những thứ thay đổi chậm (trạng thái build, trang theo dõi đơn hàng) với khoảng thời gian hợp lý.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Polling)",
          "body": "Nắm vững nguyên lý Polling: hỏi liên tục để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-1-1",
            "label": "DELAY",
            "value": "up to 2 s",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-1-2",
            "label": "RPM",
            "value": "30",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-1-3",
            "label": "WASTED",
            "value": "95",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-1-4",
            "label": "CONNS",
            "value": "0",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-1-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Polling: hỏi liên tục"
          },
          {
            "id": "chk-1-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "realtime-step-3",
        "number": 3,
        "title": "At scale",
        "category": "BỐI CẢNH",
        "categoryColor": "rose",
        "headline": "Polling một triệu điện thoại",
        "bodyHtml": "<p>Giờ hãy nhân lên. Một triệu người dùng, mỗi người hỏi mỗi 2 giây, là nửa triệu yêu cầu mỗi giây, và 95% trong số đó nhận câu trả lời “không có gì mới”.</p>\n<p>Bạn sẽ trả tiền cho cả đội máy chủ mà việc chính là nói không. Polling nhanh hơn để giảm độ trễ chỉ làm tệ hơn.</p>\n<div class=\"callout callout--warn\"><strong>Lưu ý Kỹ sư:</strong> Polling đánh đổi độ mới với tải: giảm một nửa độ trễ thì gấp đôi số yêu cầu.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (At scale)",
          "body": "Nắm vững nguyên lý Polling một triệu điện thoại để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-2-1",
            "label": "DELAY",
            "value": "up to 2 s",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-2-2",
            "label": "RPM",
            "value": "30",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-2-3",
            "label": "WASTED",
            "value": "95",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-2-4",
            "label": "CONNS",
            "value": "0",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-2-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Polling một triệu điện thoại"
          },
          {
            "id": "chk-2-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "realtime-step-4",
        "number": 4,
        "title": "Long polling",
        "category": "THỰC THI",
        "categoryColor": "blue",
        "headline": "Long polling: giữ yêu cầu mở",
        "bodyHtml": "<p>Thay vì trả lời “không có gì” ngay, máy chủ <b>giữ</b> yêu cầu mở (hãy xem yêu cầu chờ ở máy chủ) cho đến khi có tin nhắn đến, hoặc khoảng 30 giây trôi qua. Rồi nó trả lời, và ứng dụng lập tức hỏi lại.</p>\n<p>Giờ tin nhắn đến gần như ngay lập tức, và câu trả lời trống rất hiếm.</p>\n<div class=\"callout callout--tip\"><strong>Lưu ý Kỹ sư:</strong> Long polling chạy ở bất cứ đâu HTTP thuần chạy được, nên nó vẫn được dùng làm phương án dự phòng khi không có gì tốt hơn.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Long polling)",
          "body": "Nắm vững nguyên lý Long polling: giữ yêu cầu mở để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-3-1",
            "label": "DELAY",
            "value": "< 100 ms",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-3-2",
            "label": "RPM",
            "value": "2",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-3-3",
            "label": "WASTED",
            "value": "10",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-3-4",
            "label": "CONNS",
            "value": "1 held / user",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-3-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Long polling: giữ yêu cầu mở"
          },
          {
            "id": "chk-3-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "realtime-step-5",
        "number": 5,
        "title": "SSE",
        "category": "LÝ THUYẾT",
        "categoryColor": "emerald",
        "headline": "Server-Sent Events: một phản hồi không bao giờ kết thúc",
        "bodyHtml": "<p>With <span class=\"term\">Server-Sent Events</span> (SSE), the app makes one request and the server never finishes the response. Instead, it writes each new event down that open stream as it happens.</p>\n<p>Đây là một chiều (máy chủ → client), HTTP thuần, và trình duyệt tự kết nối lại. Alice vẫn gửi tin nhắn của mình bằng các yêu cầu bình thường.</p>\n<div class=\"callout callout--tip\"><strong>Lưu ý Kỹ sư:</strong> Lý tưởng cho feed, thông báo, tỷ số trực tiếp và dashboard, và để stream câu trả lời của AI từng token một.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (SSE)",
          "body": "Nắm vững nguyên lý Server-Sent Events: một phản hồi không bao giờ kết thúc để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-4-1",
            "label": "DELAY",
            "value": "< 50 ms",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-4-2",
            "label": "RPM",
            "value": "0",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-4-3",
            "label": "WASTED",
            "value": "0",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-4-4",
            "label": "CONNS",
            "value": "1 per user",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-4-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Server-Sent Events: một phản hồi không bao giờ kết thúc"
          },
          {
            "id": "chk-4-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "realtime-step-6",
        "number": 6,
        "title": "WebSockets",
        "category": "LÝ THUYẾT",
        "categoryColor": "emerald",
        "headline": "WebSocket: nói chuyện hai chiều",
        "bodyHtml": "<p>A <span class=\"term\">WebSocket</span> starts as an HTTP request, then upgrades into a permanent two-way connection. Either side can send a message at any moment, with tiny overhead per message.</p>\n<p>Bob và Alice mỗi người giữ một socket; tin nhắn đi hai chiều qua máy chủ chỉ trong vài mili giây.</p>\n<div class=\"callout callout--tip\"><strong>Lưu ý Kỹ sư:</strong> Dùng WebSocket khi client thường xuyên phản hồi lại: chat, game nhiều người chơi, chỉnh sửa cộng tác, màn hình giao dịch.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (WebSockets)",
          "body": "Nắm vững nguyên lý WebSocket: nói chuyện hai chiều để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-5-1",
            "label": "DELAY",
            "value": "< 20 ms",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-5-2",
            "label": "RPM",
            "value": "0",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-5-3",
            "label": "WASTED",
            "value": "0",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-5-4",
            "label": "CONNS",
            "value": "1 per user",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-5-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: WebSocket: nói chuyện hai chiều"
          },
          {
            "id": "chk-5-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "realtime-step-7",
        "number": 7,
        "title": "Many servers",
        "category": "LÝ THUYẾT",
        "categoryColor": "violet",
        "headline": "Mở rộng: máy chủ nào đang giữ Alice?",
        "bodyHtml": "<p>Mỗi kết nối mở tốn bộ nhớ, nên một triệu người dùng cần nhiều máy chủ chat. Giờ socket của Bob ở máy chủ 2, nhưng của Alice ở máy chủ 1: máy chủ 2 không thể gửi trực tiếp cho cô.</p>\n<p>So servers relay through <span class=\"term\">pub/sub</span>: server 2 publishes to Alice’s channel, and whichever server holds her socket is subscribed and forwards it. Watch a message take the long way round.</p>\n<div class=\"callout callout--insight\"><strong>Lưu ý Kỹ sư:</strong> Đây lại là bài trước: pub/sub là cách các hệ thống thời gian thực rải tin nhắn ra khắp các máy chủ.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Many servers)",
          "body": "Nắm vững nguyên lý Mở rộng: máy chủ nào đang giữ Alice? để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-6-1",
            "label": "DELAY",
            "value": "< 30 ms",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-6-2",
            "label": "RPM",
            "value": "0",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-6-3",
            "label": "WASTED",
            "value": "0",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-6-4",
            "label": "CONNS",
            "value": "1M on 20 servers",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-6-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Mở rộng: máy chủ nào đang giữ Alice?"
          },
          {
            "id": "chk-6-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "realtime-step-8",
        "number": 8,
        "title": "Offline",
        "category": "BỐI CẢNH",
        "categoryColor": "rose",
        "headline": "Tình huống: điện thoại của Alice ngoại tuyến",
        "bodyHtml": "<p>Alice đi vào tàu điện ngầm. Socket của cô bị rớt, và tin nhắn của Bob không có chỗ nào để đến.</p>\n<p>Vì vậy mỗi tin nhắn trước tiên được <b>lưu</b> vào một kho, rồi mới được đẩy đi nếu người nhận đang kết nối. Khi Alice kết nối lại, ứng dụng của cô nói “tin cuối tôi thấy là 1041” và lấy mọi thứ sau đó. Nếu cô vẫn ngoại tuyến, một <b>thông báo đẩy</b> (APNs, FCM) đánh thức điện thoại của cô.</p>\n<div class=\"callout callout--tip\"><strong>Lưu ý Kỹ sư:</strong> Giao tin thời gian thực chỉ là một tối ưu hóa. Tin nhắn đã lưu, được lấy khi kết nối lại, mới là nguồn sự thật.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Offline)",
          "body": "Nắm vững nguyên lý Tình huống: điện thoại của Alice ngoại tuyến để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-7-1",
            "label": "DELAY",
            "value": "< 30 ms",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-7-2",
            "label": "RPM",
            "value": "0",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-7-3",
            "label": "WASTED",
            "value": "0",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-7-4",
            "label": "CONNS",
            "value": "1M on 20 servers",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-7-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Tình huống: điện thoại của Alice ngoại tuyến"
          },
          {
            "id": "chk-7-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "realtime-step-9",
        "number": 9,
        "title": "Presence",
        "category": "LÝ THUYẾT",
        "categoryColor": "emerald",
        "headline": "Trạng thái trực tuyến: ai đang online",
        "bodyHtml": "<p>The green dot next to a name needs <span class=\"term\">presence</span>: each app sends a small heartbeat every 30 seconds, and the server records “last seen”. No heartbeat for a minute means offline.</p>\n<p>Với một triệu người dùng, đó là ~33.000 heartbeat mỗi giây. Hãy giữ trạng thái trực tuyến trong một kho nhanh với khóa tự hết hạn, và chỉ đẩy thay đổi tới những người thực sự đang xem liên hệ đó.</p>\n<div class=\"callout callout--insight\"><strong>Lưu ý Kỹ sư:</strong> Trạng thái trực tuyến vốn được thiết kế để gần đúng: trễ vài giây không sao, và tiết kiệm được lưu lượng khổng lồ.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Presence)",
          "body": "Nắm vững nguyên lý Trạng thái trực tuyến: ai đang online để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-8-1",
            "label": "DELAY",
            "value": "< 30 ms",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-8-2",
            "label": "RPM",
            "value": "2",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-8-3",
            "label": "WASTED",
            "value": "0",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-8-4",
            "label": "CONNS",
            "value": "1M on 20 servers",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-8-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Trạng thái trực tuyến: ai đang online"
          },
          {
            "id": "chk-8-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "realtime-step-10",
        "number": 10,
        "title": "Recap",
        "category": "TỐI ƯU",
        "categoryColor": "emerald",
        "headline": "Recap",
        "bodyHtml": "<div class=\"callout callout--next\"><strong>Lưu ý Kỹ sư:</strong> Vậy là xong Giao tiếp. Module tiếp theo: <b>Độ tin cậy</b>, bắt đầu với dự phòng và failover.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Recap)",
          "body": "Nắm vững nguyên lý Recap để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-9-1",
            "label": "DELAY",
            "value": "< 30 ms",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-9-2",
            "label": "RPM",
            "value": "0",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-9-3",
            "label": "WASTED",
            "value": "0",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-9-4",
            "label": "CONNS",
            "value": "1M on 20 servers",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-9-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Recap"
          },
          {
            "id": "chk-9-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Hoàn Tất Bài Học"
      }
    ]
  }
];
