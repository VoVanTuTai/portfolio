import type { StudioLesson } from "../studio.types";

export const mod09Lessons: StudioLesson[] = [
  {
    "id": "hld-lld",
    "slug": "hld-lld",
    "title": "HLD & LLD",
    "subtitle": "HLD & LLD · 8 phút thực chiến",
    "moduleCode": "09",
    "moduleTitle": "Thiết Kế Hệ Thống Toàn Diện (Whole Systems)",
    "durationMinutes": 8,
    "difficulty": "Cơ bản",
    "steps": [
      {
        "id": "hld-lld-step-1",
        "number": 1,
        "title": "Two levels",
        "category": "BỐI CẢNH",
        "categoryColor": "blue",
        "headline": "Một hệ thống, hai mức phóng to",
        "bodyHtml": "<p>Một ứng dụng giao đồ ăn. Nhìn từ xa, đó là vài dịch vụ (Đơn hàng, Tài xế, Thanh toán), mỗi dịch vụ có dữ liệu riêng, nói chuyện qua một API gateway và một luồng sự kiện.</p>\n<p>Up close, each of those boxes is a program of its own, with classes, tables and rules. System design works at both distances, and they have names: <span class=\"term\">high-level design</span> (HLD) and <span class=\"term\">low-level design</span> (LLD).</p>\n<div class=\"callout callout--insight\"><strong>Lưu ý Kỹ sư:</strong> Không cấp nào “thật hơn”. Chúng trả lời những câu hỏi khác nhau, cho những người đọc khác nhau, và thay đổi với tốc độ khác nhau.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Two levels)",
          "body": "Nắm vững nguyên lý Một hệ thống, hai mức phóng to để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-0-1",
            "label": "TIẾN ĐỘ",
            "value": "Bước 1/8",
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
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Một hệ thống, hai mức phóng to"
          },
          {
            "id": "chk-0-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "hld-lld-step-2",
        "number": 2,
        "title": "The map",
        "category": "LÝ THUYẾT",
        "categoryColor": "emerald",
        "headline": "Thiết kế cấp cao: bản đồ",
        "bodyHtml": "<p>HLD quyết định <b>các phần là gì và chúng nối với nhau thế nào</b>: có những dịch vụ nào và mỗi cái sở hữu gì, chúng nói chuyện ra sao (một lời gọi hay một sự kiện), mỗi loại dữ liệu nằm ở đâu, và điều gì xảy ra khi lưu lượng tăng hay một phần hỏng.</p>\n<p>Đó là cấp độ của mọi bài học từ đầu tới giờ. Kết quả của nó là một sơ đồ như thế này, kèm lập luận viết bên cạnh.</p>\n<div class=\"callout callout--tip\"><strong>Lưu ý Kỹ sư:</strong> Một HLD tốt vừa trong một trang. Nếu một ô cần cả đoạn văn để giải thích, đoạn đó thuộc về LLD của ô ấy.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (The map)",
          "body": "Nắm vững nguyên lý Thiết kế cấp cao: bản đồ để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-1-1",
            "label": "TIẾN ĐỘ",
            "value": "Bước 2/8",
            "level": "blue",
            "iconName": "activity"
          },
          {
            "id": "tel-1-2",
            "label": "TRẠNG THÁI",
            "value": "Sẵn sàng",
            "level": "good",
            "iconName": "check"
          },
          {
            "id": "tel-1-3",
            "label": "ĐỘ PHỨC TẠP",
            "value": "Cơ bản",
            "level": "default",
            "iconName": "layers"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-1-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Thiết kế cấp cao: bản đồ"
          },
          {
            "id": "chk-1-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "hld-lld-step-3",
        "number": 3,
        "title": "Trade-offs",
        "category": "NGHIỆP VỤ BA",
        "categoryColor": "amber",
        "headline": "Quyết định HLD là những đánh đổi",
        "bodyHtml": "<p>Đặt đơn không nên phải chờ tìm được tài xế, nên Đơn hàng <b>phát một sự kiện</b> và Tài xế nhận nó khi có thể (xem <em>Pub/Sub & sự kiện</em>).</p>\n<p>Thanh toán cần giao dịch, nên nó có một cơ sở dữ liệu quan hệ. Tài xế gửi vị trí vài giây một lần (hàng chục nghìn lượt ghi mỗi giây, lượt sau ghi đè lượt trước), nên kho đó là một kho key-value nhanh. Mỗi lựa chọn đến từ các con số và từ những gì dữ liệu cần.</p>\n<div class=\"callout callout--insight\"><strong>Lưu ý Kỹ sư:</strong> Mỗi mũi tên và mỗi kho trên sơ đồ HLD là một quyết định có phương án khác. Hãy sẵn sàng nói bạn đã từ bỏ điều gì.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Trade-offs)",
          "body": "Nắm vững nguyên lý Quyết định HLD là những đánh đổi để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-2-1",
            "label": "TIẾN ĐỘ",
            "value": "Bước 3/8",
            "level": "blue",
            "iconName": "activity"
          },
          {
            "id": "tel-2-2",
            "label": "TRẠNG THÁI",
            "value": "Sẵn sàng",
            "level": "good",
            "iconName": "check"
          },
          {
            "id": "tel-2-3",
            "label": "ĐỘ PHỨC TẠP",
            "value": "Cơ bản",
            "level": "default",
            "iconName": "layers"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-2-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Quyết định HLD là những đánh đổi"
          },
          {
            "id": "chk-2-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "hld-lld-step-4",
        "number": 4,
        "title": "Zoom in",
        "category": "THỰC THI",
        "categoryColor": "blue",
        "headline": "Thiết kế cấp thấp: bên trong một ô",
        "bodyHtml": "<p>Giờ hãy mở ô Đơn hàng. LLD quyết định <b>một thành phần được xây dựng thế nào</b>: các module hay lớp tạo nên nó, giao diện giữa chúng, bảng và chỉ mục, thuật toán và cách xử lý lỗi.</p>\n<p>Ở đây một controller nhận yêu cầu HTTP, một dịch vụ đơn hàng giữ các quy tắc, một repository nói chuyện với cơ sở dữ liệu, và một client bọc các lời gọi tới Thanh toán.</p>\n<div class=\"callout callout--tip\"><strong>Lưu ý Kỹ sư:</strong> Đặt cơ sở dữ liệu và các dịch vụ khác sau những giao diện nhỏ (các phần màu vàng) là điều khiến logic lõi dễ kiểm thử; xem <em>Kiểm thử</em>.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Zoom in)",
          "body": "Nắm vững nguyên lý Thiết kế cấp thấp: bên trong một ô để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-3-1",
            "label": "TIẾN ĐỘ",
            "value": "Bước 4/8",
            "level": "blue",
            "iconName": "activity"
          },
          {
            "id": "tel-3-2",
            "label": "TRẠNG THÁI",
            "value": "Sẵn sàng",
            "level": "good",
            "iconName": "check"
          },
          {
            "id": "tel-3-3",
            "label": "ĐỘ PHỨC TẠP",
            "value": "Cơ bản",
            "level": "default",
            "iconName": "layers"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-3-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Thiết kế cấp thấp: bên trong một ô"
          },
          {
            "id": "chk-3-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "hld-lld-step-5",
        "number": 5,
        "title": "LLD decisions",
        "category": "LÝ THUYẾT",
        "categoryColor": "emerald",
        "headline": "Quyết định LLD: trạng thái, schema, trường hợp biên",
        "bodyHtml": "<p>Một đơn hàng đi qua các trạng thái, và LLD chốt những bước chuyển nào được phép: có thể hủy khi đang <code>placed</code> hoặc <code>paid</code>, nhưng không thể khi bếp đã bắt đầu nấu.</p>\n<p>Nó cũng chốt bảng (cột, kiểu, một chỉ mục trên <code>(user_id, created_at)</code> cho “đơn của tôi”) và các trường hợp khó chịu: nếu lời gọi thanh toán bị timeout, hay cùng một đơn đến hai lần thì sao?</p>\n<div class=\"callout callout--insight\"><strong>Lưu ý Kỹ sư:</strong> Phần lớn lỗi trên production nằm ở cấp này: một thay đổi trạng thái không ai tính tới, một chỉ mục bị thiếu, một lần thử lại trừ tiền hai lần.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (LLD decisions)",
          "body": "Nắm vững nguyên lý Quyết định LLD: trạng thái, schema, trường hợp biên để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-4-1",
            "label": "TIẾN ĐỘ",
            "value": "Bước 5/8",
            "level": "blue",
            "iconName": "activity"
          },
          {
            "id": "tel-4-2",
            "label": "TRẠNG THÁI",
            "value": "Sẵn sàng",
            "level": "good",
            "iconName": "check"
          },
          {
            "id": "tel-4-3",
            "label": "ĐỘ PHỨC TẠP",
            "value": "Cơ bản",
            "level": "default",
            "iconName": "layers"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-4-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Quyết định LLD: trạng thái, schema, trường hợp biên"
          },
          {
            "id": "chk-4-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "hld-lld-step-6",
        "number": 6,
        "title": "Contracts",
        "category": "LÝ THUYẾT",
        "categoryColor": "violet",
        "headline": "Nơi chúng gặp nhau: hợp đồng",
        "bodyHtml": "<p>Hai cấp gặp nhau ở rìa mỗi ô. HLD cố định điều một thành phần <b>hứa</b>: API của nó và các sự kiện nó phát ra. LLD quyết định nó giữ lời hứa đó <b>thế nào</b>.</p>\n<p>Sự phân chia này cho phép các nhóm làm việc độc lập: Đơn hàng có thể viết lại mọi thứ bên trong ô của mình, miễn là <code>POST /orders</code> và <code>OrderPlaced</code> vẫn mang cùng ý nghĩa.</p>\n<div class=\"callout callout--tip\"><strong>Lưu ý Kỹ sư:</strong> Thay đổi hợp đồng là thay đổi HLD: các nhóm khác phải đồng ý, và phiên bản cũ lẫn mới phải chạy song song một thời gian (xem <em>REST, RPC & GraphQL</em> về đánh phiên bản).</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Contracts)",
          "body": "Nắm vững nguyên lý Nơi chúng gặp nhau: hợp đồng để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-5-1",
            "label": "ZOOM",
            "value": "the seams",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-5-2",
            "label": "UNIT",
            "value": "APIs · events",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-5-3",
            "label": "OUTPUT",
            "value": "API contract",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-5-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Nơi chúng gặp nhau: hợp đồng"
          },
          {
            "id": "chk-5-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "hld-lld-step-7",
        "number": 7,
        "title": "Top-down",
        "category": "NGHIỆP VỤ BA",
        "categoryColor": "amber",
        "headline": "Tình huống: thiết kế sai cấp",
        "bodyHtml": "<p>Được yêu cầu thiết kế ứng dụng này trong một buổi phỏng vấn, một ứng viên dành hai mươi phút cho sơ đồ lớp mà không hề nhắc rằng vị trí tài xế đổ về 40.000 lần mỗi giây. Một người khác vẽ các ô hoàn hảo, nhưng không nói được làm sao để một đơn không bị trừ tiền hai lần.</p>\n<p>Hãy làm <b>từ trên xuống</b>: yêu cầu, số liệu ước chừng, HLD; rồi đào sâu vào một hai chỗ có vấn đề khó, và làm <em>những chỗ đó</em> ở cấp LLD.</p>\n<div class=\"callout callout--tip\"><strong>Lưu ý Kỹ sư:</strong> Một buổi thiết kế thường diễn ra: yêu cầu → ước lượng → API → mô hình dữ liệu → HLD → đào sâu → tình huống lỗi. Các bài thiết kế tiếp theo đi đúng thứ tự này.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Top-down)",
          "body": "Nắm vững nguyên lý Tình huống: thiết kế sai cấp để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-6-1",
            "label": "ZOOM",
            "value": "both, top-down",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-6-2",
            "label": "UNIT",
            "value": "the whole, then the risky parts",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-6-3",
            "label": "OUTPUT",
            "value": "design with deep dives",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-6-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Tình huống: thiết kế sai cấp"
          },
          {
            "id": "chk-6-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "hld-lld-step-8",
        "number": 8,
        "title": "Recap",
        "category": "TỐI ƯU",
        "categoryColor": "emerald",
        "headline": "Recap",
        "bodyHtml": "<div class=\"callout callout--next\"><strong>Lưu ý Kỹ sư:</strong> Tiếp theo: <b>Thiết kế dịch vụ rút gọn URL</b>: bài thiết kế đầy đủ đầu tiên, từ một yêu cầu một dòng tới bản thiết kế hoàn chỉnh.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Recap)",
          "body": "Nắm vững nguyên lý Recap để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-7-1",
            "label": "TIẾN ĐỘ",
            "value": "Bước 8/8",
            "level": "blue",
            "iconName": "activity"
          },
          {
            "id": "tel-7-2",
            "label": "TRẠNG THÁI",
            "value": "Sẵn sàng",
            "level": "good",
            "iconName": "check"
          },
          {
            "id": "tel-7-3",
            "label": "ĐỘ PHỨC TẠP",
            "value": "Cơ bản",
            "level": "default",
            "iconName": "layers"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-7-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Recap"
          },
          {
            "id": "chk-7-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Hoàn Tất Bài Học"
      }
    ]
  },
  {
    "id": "design-url-shortener",
    "slug": "design-url-shortener",
    "title": "Thiết kế dịch vụ rút gọn URL",
    "subtitle": "Design a URL Shortener · 14 phút thực chiến",
    "moduleCode": "09",
    "moduleTitle": "Thiết Kế Hệ Thống Toàn Diện (Whole Systems)",
    "durationMinutes": 14,
    "difficulty": "Trung cấp",
    "steps": [
      {
        "id": "design-url-shortener-step-1",
        "number": 1,
        "title": "The brief",
        "category": "BỐI CẢNH",
        "categoryColor": "blue",
        "headline": "Yêu cầu: một dịch vụ rút gọn link",
        "bodyHtml": "<p>Đến lúc dùng mọi thứ cùng lúc, từ trên xuống như trong <em>HLD & LLD</em>. Nhiệm vụ: xây một dịch vụ như bit.ly. Dán một URL dài, nhận lại một URL ngắn, <code>sho.rt/x7Kp2Qa</code>, và ai mở nó sẽ được chuyển tới URL gốc.</p>\n<p>Trước khi vẽ ô, hãy chốt “chạy được” nghĩa là gì. <b>Nó phải</b>: tạo link ngắn, và chuyển hướng. <b>Nó nên</b>: cho link hết hạn và đếm click. Còn các phẩm chất quan trọng: chuyển hướng phải nhanh và gần như không bao giờ lỗi (dịch vụ rút gọn chết là mọi link từng chia sẻ đều hỏng), trong khi tạo link có thể chậm hơn chút.</p>\n<div class=\"callout callout--insight\"><strong>Lưu ý Kỹ sư:</strong> Mọi bản thiết kế đều bắt đầu bằng ba câu hỏi: nó phải làm gì, với khối lượng bao nhiêu, và điều gì quan trọng nhất khi không thể có tất cả?</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (The brief)",
          "body": "Nắm vững nguyên lý Yêu cầu: một dịch vụ rút gọn link để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-0-1",
            "label": "TIẾN ĐỘ",
            "value": "Bước 1/12",
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
            "value": "Trung cấp",
            "level": "default",
            "iconName": "layers"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-0-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Yêu cầu: một dịch vụ rút gọn link"
          },
          {
            "id": "chk-0-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "design-url-shortener-step-2",
        "number": 2,
        "title": "Numbers",
        "category": "BỐI CẢNH",
        "categoryColor": "blue",
        "headline": "Đặt con số vào",
        "bodyHtml": "<p>Tính nhẩm trước (Mô-đun 01). Giả sử <b>100 triệu</b> link mới mỗi tháng: khoảng 40 lượt ghi mỗi giây. Mỗi link được mở chừng 100 lần, nên chuyển hướng trung bình 4.000 lượt mỗi giây, đỉnh gần <b>12.000</b>.</p>\n<p>Giữ trong năm năm là 6 tỷ link. Mỗi link khoảng 500 byte: <b>3 TB</b>. Hai điều nổi bật: hệ thống <b>nặng về đọc</b> (một trăm lượt đọc cho mỗi lượt ghi), và dữ liệu lớn nhưng rất đơn giản.</p>\n<div class=\"callout callout--tip\"><strong>Lưu ý Kỹ sư:</strong> Con số chọn thiết kế. “100 lượt đọc mỗi lượt ghi” nghĩa là cache. “3 TB dòng khóa → giá trị” nghĩa là phải trải ra nhiều máy.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Numbers)",
          "body": "Nắm vững nguyên lý Đặt con số vào để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-1-1",
            "label": "LINKSKEPT",
            "value": "6 billion · 3 TB",
            "level": "blue",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-1-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Đặt con số vào"
          },
          {
            "id": "chk-1-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "design-url-shortener-step-3",
        "number": 3,
        "title": "First draft",
        "category": "THỰC THI",
        "categoryColor": "blue",
        "headline": "Thứ đơn giản nhất chạy được",
        "bodyHtml": "<p>Hai endpoint. <code>POST /links</code> lưu một URL và trả về mã; <code>GET /x7Kp2Qa</code> tra mã và trả lời bằng một chuyển hướng.</p>\n<p>Một bảng là đủ: <code>code</code> (khóa chính), <code>long_url</code>, <code>created_at</code>, <code>expires_at</code>. Các máy chủ API không trạng thái sau một bộ cân bằng tải, cộng một cơ sở dữ liệu, là một phiên bản một hoàn toàn ổn.</p>\n<div class=\"callout callout--insight\"><strong>Lưu ý Kỹ sư:</strong> Bắt đầu từ thiết kế đơn giản nhất đáp ứng yêu cầu, rồi hỏi cái gì hỏng trước. Còn hai câu hỏi mở: mã đến từ đâu, và chuyện gì xảy ra ở 12.000 lượt đọc mỗi giây?</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (First draft)",
          "body": "Nắm vững nguyên lý Thứ đơn giản nhất chạy được để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-2-1",
            "label": "REDIRECTMS",
            "value": "25",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-2-2",
            "label": "DBQPS",
            "value": "4e3",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-2-3",
            "label": "CODEKIND",
            "value": "?",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-2-4",
            "label": "LINKSKEPT",
            "value": "6 billion · 3 TB",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-2-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Thứ đơn giản nhất chạy được"
          },
          {
            "id": "chk-2-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "design-url-shortener-step-4",
        "number": 4,
        "title": "Hash it?",
        "category": "BỐI CẢNH",
        "categoryColor": "rose",
        "headline": "Mã đến từ đâu? Thử hash",
        "bodyHtml": "<p>Ý tưởng đầu tiên: hash URL dài và giữ bảy ký tự đầu. Không cần phối hợp, và cùng một URL luôn cho cùng một mã.</p>\n<p>Nhưng bảy ký tự không chứa nổi cả một hash, nên đôi khi các URL khác nhau sẽ <b>trùng</b>, và với hàng tỷ link thì liên tục. Mỗi lần chèn phải kiểm tra “mã này đã bị URL khác dùng chưa?” rồi thử lại với một chỉnh sửa. Tệ hơn, hai người rút gọn cùng một URL nhận cùng một mã, nên không ai có hạn dùng hay thống kê riêng.</p>\n<div class=\"callout callout--warn\"><strong>Lưu ý Kỹ sư:</strong> Hash bị cắt ngắn trùng sớm hơn nhiều so với trực giác: bài toán ngày sinh. Với 3,5 nghìn tỷ mã khả dĩ, hãy chờ lần trùng đầu tiên chỉ sau khoảng hai triệu link.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Hash it?)",
          "body": "Nắm vững nguyên lý Mã đến từ đâu? Thử hash để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-3-1",
            "label": "REDIRECTMS",
            "value": "25",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-3-2",
            "label": "DBQPS",
            "value": "4e3",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-3-3",
            "label": "CODEKIND",
            "value": "hash · collides",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-3-4",
            "label": "LINKSKEPT",
            "value": "6 billion · 3 TB",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-3-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Mã đến từ đâu? Thử hash"
          },
          {
            "id": "chk-3-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "design-url-shortener-step-5",
        "number": 5,
        "title": "Count it",
        "category": "THỰC THI",
        "categoryColor": "blue",
        "headline": "Đếm rồi mã hóa",
        "bodyHtml": "<p>Better: give every link a unique <b>number</b> and write that number in <span class=\"term\">base 62</span> — digits, lowercase and uppercase letters. A unique number in means a unique code out, with nothing to check.</p>\n<p>Bảy ký tự cơ số 62 bao được 62⁷ ≈ 3,5 nghìn tỷ link, gấp hàng trăm lần nhu cầu. Các số lấy thẳng từ <em>ID duy nhất ở quy mô lớn</em>: mỗi máy chủ API giữ chỗ một khối một triệu id từ một dịch vụ đếm nhỏ, rồi tự đếm dần trong khối đó.</p>\n<div class=\"callout callout--tip\"><strong>Lưu ý Kỹ sư:</strong> Mã hóa là chia liên tiếp: 125 ÷ 62 = 2 dư 1, nên 125 thành “21”. Giải mã làm ngược lại: mã <em>chính là</em> id.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Count it)",
          "body": "Nắm vững nguyên lý Đếm rồi mã hóa để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-4-1",
            "label": "REDIRECTMS",
            "value": "25",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-4-2",
            "label": "DBQPS",
            "value": "4e3",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-4-3",
            "label": "CODEKIND",
            "value": "counter · unique",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-4-4",
            "label": "LINKSKEPT",
            "value": "6 billion · 3 TB",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-4-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Đếm rồi mã hóa"
          },
          {
            "id": "chk-4-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "design-url-shortener-step-6",
        "number": 6,
        "title": "Guessable",
        "category": "BỐI CẢNH",
        "categoryColor": "rose",
        "headline": "Tình huống: mã có thể đếm lần lượt",
        "bodyHtml": "<p>Mã từ bộ đếm ra theo thứ tự: <code>tn1e</code>, <code>tn1f</code>, <code>tn1g</code>. Ai cũng có thể dò hết không gian và gom mọi link từng được tạo, kể cả link tài liệu “riêng tư” và URL đặt lại mật khẩu mà người ta đã rút gọn.</p>\n<p>Cách sửa giữ tính duy nhất và bỏ thứ tự. Hoặc xáo trộn từng id bằng một phép trộn đảo ngược được (hoán vị có khóa) trước khi mã hóa, hoặc chọn bảy ký tự ngẫu nhiên và để khóa duy nhất của bảng từ chối các bản trùng hiếm hoi.</p>\n<div class=\"callout callout--warn\"><strong>Lưu ý Kỹ sư:</strong> Mã khó đoán làm chậm việc cào dữ liệu. Đó không phải bảo mật: thứ gì thực sự riêng tư cần kiểm soát truy cập thật (Mô-đun 07).</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Guessable)",
          "body": "Nắm vững nguyên lý Tình huống: mã có thể đếm lần lượt để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-5-1",
            "label": "REDIRECTMS",
            "value": "25",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-5-2",
            "label": "DBQPS",
            "value": "4e3",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-5-3",
            "label": "CODEKIND",
            "value": "scrambled · unique",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-5-4",
            "label": "LINKSKEPT",
            "value": "6 billion · 3 TB",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-5-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Tình huống: mã có thể đếm lần lượt"
          },
          {
            "id": "chk-5-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "design-url-shortener-step-7",
        "number": 7,
        "title": "Cache",
        "category": "THỰC THI",
        "categoryColor": "blue",
        "headline": "Đọc chiếm ưu thế: hãy cache",
        "bodyHtml": "<p>Giờ tới đường đọc. Một phần nhỏ link nhận phần lớn click (bài viral hôm nay, không phải năm ngoái), và link không bao giờ đổi sau khi tạo. Đó là trường hợp lý tưởng cho cache (xem <em>Bộ nhớ đệm</em>).</p>\n<p>Đặt một cache trong bộ nhớ phía trước, ánh xạ <code>code → long_url</code>. Khoảng 90% lượt chuyển hướng dừng ở đó trong vòng một mili giây; cơ sở dữ liệu chỉ thấy các lượt miss. Vì link bất biến nên gần như không có gì để vô hiệu: một TTL và cơ chế loại LRU là đủ.</p>\n<div class=\"callout callout--tip\"><strong>Lưu ý Kỹ sư:</strong> Đừng quên cache phủ định. Bot gửi mã ngẫu nhiên cả ngày; hãy cache cả kết quả “không có mã này”, nếu không mỗi yêu cầu đó thành một lần truy vấn cơ sở dữ liệu.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Cache)",
          "body": "Nắm vững nguyên lý Đọc chiếm ưu thế: hãy cache để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-6-1",
            "label": "REDIRECTMS",
            "value": "5",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-6-2",
            "label": "DBQPS",
            "value": "400",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-6-3",
            "label": "CODEKIND",
            "value": "scrambled · unique",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-6-4",
            "label": "LINKSKEPT",
            "value": "6 billion · 3 TB",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-6-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Đọc chiếm ưu thế: hãy cache"
          },
          {
            "id": "chk-6-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "design-url-shortener-step-8",
        "number": 8,
        "title": "301 or 302",
        "category": "NGHIỆP VỤ BA",
        "categoryColor": "amber",
        "headline": "Chuyển hướng nào: 301 hay 302?",
        "bodyHtml": "<p><code>301 Moved Permanently</code> cho phép trình duyệt nhớ câu trả lời, nên lượt click sau không bao giờ tới bạn. Đó là yêu cầu rẻ nhất có thể, và nó nghĩa là bạn không còn đếm được click đó, đổi đích đến hay cho link hết hạn với người dùng ấy.</p>\n<p><code>302 Found</code> là tạm thời: mọi click đều quay lại với bạn. Tải nhiều hơn, nhưng bạn giữ quyền kiểm soát và số liệu phân tích. Phần lớn dịch vụ rút gọn chọn 302 và để cache gánh chi phí.</p>\n<div class=\"callout callout--insight\"><strong>Lưu ý Kỹ sư:</strong> Cả một quyết định thiết kế giấu trong một mã trạng thái: ai được cache câu trả lời, và trong bao lâu?</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (301 or 302)",
          "body": "Nắm vững nguyên lý Chuyển hướng nào: 301 hay 302? để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-7-1",
            "label": "REDIRECTMS",
            "value": "5",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-7-2",
            "label": "DBQPS",
            "value": "400",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-7-3",
            "label": "CODEKIND",
            "value": "scrambled · unique",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-7-4",
            "label": "LINKSKEPT",
            "value": "6 billion · 3 TB",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-7-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Chuyển hướng nào: 301 hay 302?"
          },
          {
            "id": "chk-7-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "design-url-shortener-step-9",
        "number": 9,
        "title": "Storage",
        "category": "THỰC THI",
        "categoryColor": "blue",
        "headline": "Ba terabyte khóa: trải chúng ra",
        "bodyHtml": "<p>Sáu tỷ dòng sẽ không thoải mái trên một máy. Nhưng hãy xem dữ liệu được dùng thế nào: mọi truy vấn đều là “lấy mã này”. Không join, không quét theo khoảng, không giao dịch nhiều dòng.</p>\n<p>Đó chính là việc của một <b>kho key-value</b>: DynamoDB, Cassandra (xem <em>SQL hay NoSQL</em>). Phân vùng theo hash của mã để tải trải đều (<em>Sharding</em>, <em>Consistent hashing</em>), và giữ ba bản sao mỗi phân vùng ở các vùng khác nhau (<em>Sao chép dữ liệu</em>).</p>\n<div class=\"callout callout--tip\"><strong>Lưu ý Kỹ sư:</strong> Vì mã trông ngẫu nhiên, hash của chúng cân bằng gần như hoàn hảo: không có phân vùng nóng. Phân vùng theo ngày tạo sẽ dồn gần hết lưu lượng vào “hôm nay”.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Storage)",
          "body": "Nắm vững nguyên lý Ba terabyte khóa: trải chúng ra để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-8-1",
            "label": "REDIRECTMS",
            "value": "5",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-8-2",
            "label": "DBQPS",
            "value": "400",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-8-3",
            "label": "CODEKIND",
            "value": "scrambled · unique",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-8-4",
            "label": "LINKSKEPT",
            "value": "3 TB · partitioned ×3 copies",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-8-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Ba terabyte khóa: trải chúng ra"
          },
          {
            "id": "chk-8-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "design-url-shortener-step-10",
        "number": 10,
        "title": "Clicks",
        "category": "LÝ THUYẾT",
        "categoryColor": "emerald",
        "headline": "Đếm click mà không làm chậm chúng",
        "bodyHtml": "<p>Đội sản phẩm muốn số click theo từng link. Cách ngây thơ, <code>UPDATE links SET clicks = clicks + 1</code> ở mỗi lượt chuyển hướng, biến 4.000 lượt đọc rẻ mỗi giây thành 4.000 lượt ghi, tất cả dồn vào những dòng nóng nhất.</p>\n<p>Thay vào đó, máy chủ API thả một sự kiện <code>click</code> nhỏ xíu vào một luồng và trả lời chuyển hướng ngay. Một consumer cộng dồn sự kiện thành số đếm theo link vài giây một lần (xem <em>Hàng đợi tin nhắn</em> và <em>Xử lý theo lô & luồng</em>).</p>\n<div class=\"callout callout--insight\"><strong>Lưu ý Kỹ sư:</strong> Chuyển hướng là sản phẩm; số đếm là phụ phẩm. Đừng bao giờ đặt phụ phẩm lên đường găng.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Clicks)",
          "body": "Nắm vững nguyên lý Đếm click mà không làm chậm chúng để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-9-1",
            "label": "REDIRECTMS",
            "value": "5",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-9-2",
            "label": "DBQPS",
            "value": "400",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-9-3",
            "label": "CODEKIND",
            "value": "scrambled · unique",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-9-4",
            "label": "LINKSKEPT",
            "value": "3 TB · partitioned ×3 copies",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-9-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Đếm click mà không làm chậm chúng"
          },
          {
            "id": "chk-9-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "design-url-shortener-step-11",
        "number": 11,
        "title": "Abuse",
        "category": "BỐI CẢNH",
        "categoryColor": "rose",
        "headline": "Tình huống: kẻ spam mê dịch vụ rút gọn",
        "bodyHtml": "<p>Link ngắn che giấu nơi nó dẫn tới: lý tưởng cho lừa đảo. Một script bắt đầu tạo 5.000 link mỗi phút trỏ tới các trang ngân hàng giả. Chẳng mấy chốc cả tên miền của bạn vào danh sách chặn, và link của <em>mọi</em> khách hàng ngừng hoạt động.</p>\n<p>Phòng thủ nhiều lớp. <b>Giới hạn tốc độ</b> tạo link theo tài khoản và theo IP (<em>Giới hạn tốc độ</em>). Kiểm tra mọi đích đến với danh sách lừa đảo và mã độc, lúc tạo và kiểm lại sau. Và cho link <b>hết hạn</b>, để những link bị bỏ rơi thôi là mối rủi ro.</p>\n<div class=\"callout callout--warn\"><strong>Lưu ý Kỹ sư:</strong> Vận hành là một phần của thiết kế. Với hầu hết dịch vụ rút gọn link, sự cố nghiêm trọng đầu tiên không phải tải, mà là lạm dụng.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Abuse)",
          "body": "Nắm vững nguyên lý Tình huống: kẻ spam mê dịch vụ rút gọn để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-10-1",
            "label": "REDIRECTMS",
            "value": "5",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-10-2",
            "label": "DBQPS",
            "value": "400",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-10-3",
            "label": "CODEKIND",
            "value": "scrambled · unique",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-10-4",
            "label": "LINKSKEPT",
            "value": "3 TB · partitioned ×3 copies",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-10-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Tình huống: kẻ spam mê dịch vụ rút gọn"
          },
          {
            "id": "chk-10-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "design-url-shortener-step-12",
        "number": 12,
        "title": "Recap",
        "category": "TỐI ƯU",
        "categoryColor": "emerald",
        "headline": "Bản thiết kế hoàn chỉnh",
        "bodyHtml": "<div class=\"callout callout--next\"><strong>Lưu ý Kỹ sư:</strong> Tiếp theo: <b>Thiết kế news feed</b>, nơi phần khó không phải lưu bài viết, mà là quyết định <em>khi nào</em> làm việc.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Recap)",
          "body": "Nắm vững nguyên lý Bản thiết kế hoàn chỉnh để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-11-1",
            "label": "REDIRECTMS",
            "value": "5",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-11-2",
            "label": "DBQPS",
            "value": "400",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-11-3",
            "label": "CODEKIND",
            "value": "scrambled · unique",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-11-4",
            "label": "LINKSKEPT",
            "value": "3 TB · partitioned ×3 copies",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-11-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Bản thiết kế hoàn chỉnh"
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
    "id": "design-news-feed",
    "slug": "design-news-feed",
    "title": "Thiết kế news feed",
    "subtitle": "Design a News Feed · 14 phút thực chiến",
    "moduleCode": "09",
    "moduleTitle": "Thiết Kế Hệ Thống Toàn Diện (Whole Systems)",
    "durationMinutes": 14,
    "difficulty": "Trung cấp",
    "steps": [
      {
        "id": "design-news-feed-step-1",
        "number": 1,
        "title": "The brief",
        "category": "BỐI CẢNH",
        "categoryColor": "blue",
        "headline": "Yêu cầu: một feed trang chủ",
        "bodyHtml": "<p>Thiết kế thứ hai. Một ứng dụng mạng xã hội: mọi người theo dõi nhau, và màn hình chính hiển thị các bài mới của tất cả những người bạn theo dõi, mới nhất trước.</p>\n<p>Điều quan trọng: mở feed phải có cảm giác tức thì, dưới 200 ms. Một bài mới phải tới người theo dõi trong vài giây, nhưng không nhất thiết cùng lúc với mọi người. <b>Nhất quán cuối cùng là đủ</b>: chẳng ai thiệt gì nếu một bài hiện muộn năm giây.</p>\n<div class=\"callout callout--insight\"><strong>Lưu ý Kỹ sư:</strong> Hãy để ý sự tự do trong yêu cầu cuối cùng ấy. Quyết định điều gì <em>không</em> cần tức thì hay chính xác là thứ làm cho các hệ thống lớn khả thi.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (The brief)",
          "body": "Nắm vững nguyên lý Yêu cầu: một feed trang chủ để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-0-1",
            "label": "TIẾN ĐỘ",
            "value": "Bước 1/12",
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
            "value": "Trung cấp",
            "level": "default",
            "iconName": "layers"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-0-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Yêu cầu: một feed trang chủ"
          },
          {
            "id": "chk-0-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "design-news-feed-step-2",
        "number": 2,
        "title": "Numbers",
        "category": "BỐI CẢNH",
        "categoryColor": "blue",
        "headline": "Đặt con số vào",
        "bodyHtml": "<p><b>200 triệu</b> người dùng mỗi ngày và mỗi người mở feed khoảng mười lần: 2 tỷ lượt tải feed mỗi ngày, tức trung bình 23.000 lượt mỗi giây. Họ viết 50 triệu bài mỗi ngày, khoảng 600 bài mỗi giây.</p>\n<p>Vậy feed được đọc nhiều hơn số bài được viết khoảng <b>40 lần</b>. Và một người dùng điển hình theo dõi 200 tài khoản. Hãy nhớ con số đó.</p>\n<div class=\"callout callout--tip\"><strong>Lưu ý Kỹ sư:</strong> Hai con số sẽ chi phối mọi thứ phía sau: đọc nhiều hơn ghi 40 lần, và mỗi feed lấy từ 200 nguồn.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Numbers)",
          "body": "Nắm vững nguyên lý Đặt con số vào để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-1-1",
            "label": "TIẾN ĐỘ",
            "value": "Bước 2/12",
            "level": "blue",
            "iconName": "activity"
          },
          {
            "id": "tel-1-2",
            "label": "TRẠNG THÁI",
            "value": "Sẵn sàng",
            "level": "good",
            "iconName": "check"
          },
          {
            "id": "tel-1-3",
            "label": "ĐỘ PHỨC TẠP",
            "value": "Trung cấp",
            "level": "default",
            "iconName": "layers"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-1-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Đặt con số vào"
          },
          {
            "id": "chk-1-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "design-news-feed-step-3",
        "number": 3,
        "title": "Pull",
        "category": "THỰC THI",
        "categoryColor": "blue",
        "headline": "Bản nháp đầu: dựng feed khi được yêu cầu",
        "bodyHtml": "<p>Lưu bài viết trong một bảng có chỉ mục <code>(author_id, created_at)</code>, shard theo tác giả. Để dựng feed của Alice: tìm 200 tài khoản cô theo dõi, lấy các bài mới nhất của từng người, trộn theo thời gian, trả về 20 bài đầu.</p>\n<p>This is the <span class=\"term\">pull</span> model, or fan-out on read. Posting is as cheap as it gets — one insert — and a new post is visible to everyone at once.</p>\n<div class=\"callout callout--insight\"><strong>Lưu ý Kỹ sư:</strong> Không có gì được tính trước, nên không có gì bị cũ và không có gì cần sửa. Với một ứng dụng nhỏ, đây là thiết kế đúng.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Pull)",
          "body": "Nắm vững nguyên lý Bản nháp đầu: dựng feed khi được yêu cầu để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-2-1",
            "label": "FEEDMS",
            "value": "600",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-2-2",
            "label": "READWORK",
            "value": "200",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-2-3",
            "label": "FANOUT",
            "value": "0",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-2-4",
            "label": "POSTDELAY",
            "value": "instantly",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-2-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Bản nháp đầu: dựng feed khi được yêu cầu"
          },
          {
            "id": "chk-2-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "design-news-feed-step-4",
        "number": 4,
        "title": "Wrong side",
        "category": "BỐI CẢNH",
        "categoryColor": "rose",
        "headline": "Công việc rơi vào sai phía",
        "bodyHtml": "<p>Mỗi lượt tải feed tỏa ra 200 tác giả rải trên nhiều shard, và phải chờ câu trả lời chậm nhất: cái đuôi fan-out trong <em>Độ trễ & thông lượng</em>.</p>\n<p>Tệ hơn là tổng số: 23.000 lượt tải feed mỗi giây × 200 lượt tra = <b>4,6 triệu</b> lượt tra mỗi giây, phần lớn là tính lại một kết quả y hệt cái mà chính người đó đã thấy một phút trước. Phần việc đắt nằm trên đường chạy nhiều hơn 40 lần.</p>\n<div class=\"callout callout--warn\"><strong>Lưu ý Kỹ sư:</strong> Khi đọc nhiều hơn ghi rất nhiều, hãy dời công việc sang lúc ghi.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Wrong side)",
          "body": "Nắm vững nguyên lý Công việc rơi vào sai phía để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-3-1",
            "label": "FEEDMS",
            "value": "1400",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-3-2",
            "label": "READWORK",
            "value": "200",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-3-3",
            "label": "FANOUT",
            "value": "0",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-3-4",
            "label": "POSTDELAY",
            "value": "instantly",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-3-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Công việc rơi vào sai phía"
          },
          {
            "id": "chk-3-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "design-news-feed-step-5",
        "number": 5,
        "title": "Push",
        "category": "THỰC THI",
        "categoryColor": "blue",
        "headline": "Đảo ngược: giao bài khi được viết",
        "bodyHtml": "<p>Give every user a ready-made feed: a list in a cache, newest first. When Ana posts, a <b>fan-out worker</b> looks up her followers and adds the post to each of their lists. This is the <span class=\"term\">push</span> model, or fan-out on write.</p>\n<p>Mở feed giờ chỉ là một lần đọc một danh sách. Fan-out chạy sau một hàng đợi (<em>Hàng đợi tin nhắn</em>), nên bài của Ana trả về ngay và người theo dõi thấy nó sau một hai giây.</p>\n<div class=\"callout callout--tip\"><strong>Lưu ý Kỹ sư:</strong> Phép tính ổn: 600 bài/s × 200 người theo dõi ≈ 120.000 lượt ghi nhỏ vào cache mỗi giây, rẻ hơn nhiều so với 4,6 triệu lượt tra.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Push)",
          "body": "Nắm vững nguyên lý Đảo ngược: giao bài khi được viết để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-4-1",
            "label": "FEEDMS",
            "value": "40",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-4-2",
            "label": "READWORK",
            "value": "1",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-4-3",
            "label": "FANOUT",
            "value": "200 on average",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-4-4",
            "label": "POSTDELAY",
            "value": "≈ 2 s",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-4-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Đảo ngược: giao bài khi được viết"
          },
          {
            "id": "chk-4-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "design-news-feed-step-6",
        "number": 6,
        "title": "Ids only",
        "category": "LÝ THUYẾT",
        "categoryColor": "emerald",
        "headline": "Lưu id, không lưu bài",
        "bodyHtml": "<p>Mỗi danh sách feed chỉ giữ <b>id bài viết</b>, vài byte mỗi cái, và chỉ khoảng 800 cái mới nhất. Khi feed được đọc, API lấy chính các bài viết trong một lô từ kho bài viết (“hydrate”).</p>\n<p>Giữ một bản duy nhất của mỗi bài nghĩa là sửa hay xóa chỉ xảy ra ở một chỗ. Bài đã xóa đơn giản bị bỏ qua khi hydrate; không ai phải lùng nó qua hàng triệu danh sách.</p>\n<div class=\"callout callout--tip\"><strong>Lưu ý Kỹ sư:</strong> 200 triệu danh sách × 800 id × 8 byte ≈ 1,3 TB bộ nhớ: một cụm cache lớn, nhưng bình thường. Lưu nguyên bài viết sẽ tốn gấp trăm lần.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Ids only)",
          "body": "Nắm vững nguyên lý Lưu id, không lưu bài để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-5-1",
            "label": "FEEDMS",
            "value": "40",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-5-2",
            "label": "READWORK",
            "value": "1 list + 1 batch",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-5-3",
            "label": "FANOUT",
            "value": "200 on average",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-5-4",
            "label": "POSTDELAY",
            "value": "≈ 2 s",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-5-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Lưu id, không lưu bài"
          },
          {
            "id": "chk-5-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "design-news-feed-step-7",
        "number": 7,
        "title": "Celebrity",
        "category": "BỐI CẢNH",
        "categoryColor": "rose",
        "headline": "Tình huống: năm mươi triệu người theo dõi",
        "bodyHtml": "<p>Một ngôi sao nhạc pop có <b>50 triệu</b> người theo dõi đăng bài. Một bài đó thành 50 triệu lượt ghi cache. Ngay cả với 100.000 lượt ghi mỗi giây, việc giao mất hơn tám phút, và hàng đợi tắc đến mức bài của mọi người khác phải chờ phía sau.</p>\n<p>Đó là bài toán khóa nóng trong <em>Sharding</em>: một khóa nặng bất thường đè bẹp một thiết kế được chỉnh theo mức trung bình.</p>\n<div class=\"callout callout--warn\"><strong>Lưu ý Kỹ sư:</strong> Số trung bình che giấu điều này. Tài khoản điển hình có 200 người theo dõi; vài nghìn tài khoản có hàng triệu, và họ đăng bài vào những lúc đông nhất.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Celebrity)",
          "body": "Nắm vững nguyên lý Tình huống: năm mươi triệu người theo dõi để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-6-1",
            "label": "FEEDMS",
            "value": "40",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-6-2",
            "label": "READWORK",
            "value": "1 list + 1 batch",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-6-3",
            "label": "FANOUT",
            "value": "50,000,000",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-6-4",
            "label": "POSTDELAY",
            "value": "8+ min",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-6-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Tình huống: năm mươi triệu người theo dõi"
          },
          {
            "id": "chk-6-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "design-news-feed-step-8",
        "number": 8,
        "title": "Hybrid",
        "category": "THỰC THI",
        "categoryColor": "blue",
        "headline": "Lai: push cho số đông, pull cho người nổi tiếng",
        "bodyHtml": "<p>Đối xử khác nhau với hai loại tài khoản. Người dùng thường vẫn dùng fan-out khi ghi. Tài khoản vượt một ngưỡng, chẳng hạn 100.000 người theo dõi, <b>không</b> được fan-out chút nào.</p>\n<p>Khi Alice mở feed, API đọc danh sách dựng sẵn của cô <em>và</em> kéo các bài mới nhất của vài người nổi tiếng cô theo dõi (mỗi người là một dòng thời gian trong cache), rồi trộn hai thứ. Vài lượt tra thêm mỗi lần đọc, thay vì 50 triệu lượt ghi mỗi bài.</p>\n<div class=\"callout callout--insight\"><strong>Lưu ý Kỹ sư:</strong> Không chiến lược thuần nào sống sót trước dữ liệu thật. Các thiết kế lớn thường kết thúc ở dạng lai, chia đúng theo chiều bị lệch.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Hybrid)",
          "body": "Nắm vững nguyên lý Lai: push cho số đông, pull cho người nổi tiếng để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-7-1",
            "label": "FEEDMS",
            "value": "60",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-7-2",
            "label": "READWORK",
            "value": "1 list + a few",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-7-3",
            "label": "FANOUT",
            "value": "200 · celebrities 0",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-7-4",
            "label": "POSTDELAY",
            "value": "≈ 2 s",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-7-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Lai: push cho số đông, pull cho người nổi tiếng"
          },
          {
            "id": "chk-7-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "design-news-feed-step-9",
        "number": 9,
        "title": "Idle users",
        "category": "NGHIỆP VỤ BA",
        "categoryColor": "amber",
        "headline": "Tình huống: feed không ai đọc",
        "bodyHtml": "<p>Trong số những người theo dõi Ana, có lẽ một phần ba mở ứng dụng tháng này. Fan-out cho phần còn lại lấp đầy bộ nhớ bằng những danh sách không ai xem.</p>\n<p>Vậy hãy bỏ qua họ: chỉ fan-out cho người theo dõi hoạt động trong 30 ngày qua, và để danh sách của những người khác hết hạn. Khi một người dùng vắng lâu quay lại, dựng feed của họ một lần bằng mô hình pull, cache nó, rồi tiếp tục push.</p>\n<div class=\"callout callout--tip\"><strong>Lưu ý Kỹ sư:</strong> Đường pull không bao giờ biến mất. Đó là cách feed được tạo, sửa và dựng lại; push là một tối ưu đặt lên trên nó.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Idle users)",
          "body": "Nắm vững nguyên lý Tình huống: feed không ai đọc để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-8-1",
            "label": "TIẾN ĐỘ",
            "value": "Bước 9/12",
            "level": "blue",
            "iconName": "activity"
          },
          {
            "id": "tel-8-2",
            "label": "TRẠNG THÁI",
            "value": "Sẵn sàng",
            "level": "good",
            "iconName": "check"
          },
          {
            "id": "tel-8-3",
            "label": "ĐỘ PHỨC TẠP",
            "value": "Trung cấp",
            "level": "default",
            "iconName": "layers"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-8-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Tình huống: feed không ai đọc"
          },
          {
            "id": "chk-8-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "design-news-feed-step-10",
        "number": 10,
        "title": "Scrolling",
        "category": "LÝ THUYẾT",
        "categoryColor": "emerald",
        "headline": "Cuộn: con trỏ, không phải số trang",
        "bodyHtml": "<p>Alice cuộn xuống để xem thêm. “Trang 2” nghĩa là “bỏ 20, lấy 20”, nhưng từ lúc xem trang 1 đã có ba bài mới ở trên cùng, nên cô sẽ thấy ba bài hai lần.</p>\n<p>Use a <span class=\"term\">cursor</span> instead (see <em>REST, RPC & GraphQL</em>): “give me 20 posts older than post 9017”. The position is tied to a post, not to a count, so new arrivals can’t shift it.</p>\n<div class=\"callout callout--tip\"><strong>Lưu ý Kỹ sư:</strong> Id có thứ tự theo thời gian (<em>ID duy nhất ở quy mô lớn</em>) làm việc này dễ dàng: “cũ hơn” đơn giản là “id nhỏ hơn”.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Scrolling)",
          "body": "Nắm vững nguyên lý Cuộn: con trỏ, không phải số trang để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-9-1",
            "label": "TIẾN ĐỘ",
            "value": "Bước 10/12",
            "level": "blue",
            "iconName": "activity"
          },
          {
            "id": "tel-9-2",
            "label": "TRẠNG THÁI",
            "value": "Sẵn sàng",
            "level": "good",
            "iconName": "check"
          },
          {
            "id": "tel-9-3",
            "label": "ĐỘ PHỨC TẠP",
            "value": "Trung cấp",
            "level": "default",
            "iconName": "layers"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-9-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Cuộn: con trỏ, không phải số trang"
          },
          {
            "id": "chk-9-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "design-news-feed-step-11",
        "number": 11,
        "title": "Cache lost",
        "category": "LÝ THUYẾT",
        "categoryColor": "violet",
        "headline": "Tình huống: cache feed bị xóa sạch",
        "bodyHtml": "<p>Một lần deploy hỏng xóa sạch cache feed. Mọi feed biến mất, và không có gì giá trị bị mất. Bài viết và đồ thị theo dõi là <b>nguồn sự thật</b>; danh sách feed là <b>dữ liệu dẫn xuất</b> có thể dựng lại từ chúng.</p>\n<p>Mối nguy là một cuộc giẫm đạp: hàng triệu người dùng cùng dựng lại bằng pull một lúc. Vậy hãy dựng lại lười, chỉ khi người dùng thực sự mở ứng dụng; giới hạn số lần dựng lại chạy cùng lúc; và phục vụ một feed mỏng hơn cho tới khi cache ấm trở lại.</p>\n<div class=\"callout callout--insight\"><strong>Lưu ý Kỹ sư:</strong> Hãy biết dữ liệu nào là sự thật và dữ liệu nào là sự tiện lợi. Bạn chỉ có thể thoải mái với loại thứ hai vì bạn nghiêm ngặt với loại thứ nhất.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Cache lost)",
          "body": "Nắm vững nguyên lý Tình huống: cache feed bị xóa sạch để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-10-1",
            "label": "FEEDMS",
            "value": "350",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-10-2",
            "label": "READWORK",
            "value": "rebuild: 200",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-10-3",
            "label": "FANOUT",
            "value": "≈ 70 · active only",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-10-4",
            "label": "POSTDELAY",
            "value": "≈ 2 s",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-10-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Tình huống: cache feed bị xóa sạch"
          },
          {
            "id": "chk-10-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "design-news-feed-step-12",
        "number": 12,
        "title": "Recap",
        "category": "TỐI ƯU",
        "categoryColor": "emerald",
        "headline": "Bản thiết kế hoàn chỉnh",
        "bodyHtml": "<div class=\"callout callout--next\"><strong>Lưu ý Kỹ sư:</strong> Tiếp theo: <b>Thiết kế hệ thống chat</b>, nơi mọi tin nhắn đều phải tới, đúng thứ tự, và hiện đúng một lần.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Recap)",
          "body": "Nắm vững nguyên lý Bản thiết kế hoàn chỉnh để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-11-1",
            "label": "TIẾN ĐỘ",
            "value": "Bước 12/12",
            "level": "blue",
            "iconName": "activity"
          },
          {
            "id": "tel-11-2",
            "label": "TRẠNG THÁI",
            "value": "Sẵn sàng",
            "level": "good",
            "iconName": "check"
          },
          {
            "id": "tel-11-3",
            "label": "ĐỘ PHỨC TẠP",
            "value": "Trung cấp",
            "level": "default",
            "iconName": "layers"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-11-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Bản thiết kế hoàn chỉnh"
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
    "id": "design-chat",
    "slug": "design-chat",
    "title": "Thiết kế một hệ thống chat",
    "subtitle": "Design a Chat System · 14 phút thực chiến",
    "moduleCode": "09",
    "moduleTitle": "Thiết Kế Hệ Thống Toàn Diện (Whole Systems)",
    "durationMinutes": 14,
    "difficulty": "Nâng cao",
    "steps": [
      {
        "id": "design-chat-step-1",
        "number": 1,
        "title": "The brief",
        "category": "BỐI CẢNH",
        "categoryColor": "blue",
        "headline": "Yêu cầu: một ứng dụng chat",
        "bodyHtml": "<p>Thiết kế thứ ba: chat một-một và nhóm nhỏ, như WhatsApp hay Messenger. Tin nhắn đến ngay nếu người kia đang online, chờ họ nếu không, và hiện trên mọi thiết bị của họ.</p>\n<p>Điều quan trọng nhất là sự tin cậy: <b>không tin nhắn nào được mất</b>, tin nhắn phải hiện <b>đúng thứ tự</b>, và mỗi tin đúng một lần. Tốc độ cũng quan trọng (dưới 200 ms khi cả hai đều online), nhưng không bao giờ được đánh đổi ba điều trên.</p>\n<div class=\"callout callout--insight\"><strong>Lưu ý Kỹ sư:</strong> So với thiết kế trước. Feed được phép trễ và gần đúng; chat phải đầy đủ và có thứ tự. Cùng những khối xây dựng, ưu tiên ngược nhau.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (The brief)",
          "body": "Nắm vững nguyên lý Yêu cầu: một ứng dụng chat để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-0-1",
            "label": "TIẾN ĐỘ",
            "value": "Bước 1/12",
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
            "value": "Nâng cao",
            "level": "default",
            "iconName": "layers"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-0-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Yêu cầu: một ứng dụng chat"
          },
          {
            "id": "chk-0-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "design-chat-step-2",
        "number": 2,
        "title": "Numbers",
        "category": "BỐI CẢNH",
        "categoryColor": "blue",
        "headline": "Đặt con số vào",
        "bodyHtml": "<p><b>50 triệu</b> người dùng ứng dụng mỗi ngày và mỗi người gửi 40 tin: 2 tỷ tin nhắn mỗi ngày, khoảng 23.000 mỗi giây, lúc cao điểm gấp vài lần. Tin nhắn nhỏ (≈ 200 byte) nhưng vẫn là 400 GB mỗi ngày, khoảng 150 TB mỗi năm.</p>\n<p>Con số khác thường là <b>kết nối</b>. Chat được đẩy chứ không phải poll, nên mỗi người dùng online giữ một kết nối mở. Lúc cao điểm đó là 20 triệu kết nối.</p>\n<div class=\"callout callout--tip\"><strong>Lưu ý Kỹ sư:</strong> Một máy chủ được tinh chỉnh tốt giữ được vài trăm nghìn kết nối, phần lớn đang rảnh. Hai mươi triệu nghĩa là khoảng một trăm máy chủ chẳng làm gì ngoài giữ socket.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Numbers)",
          "body": "Nắm vững nguyên lý Đặt con số vào để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-1-1",
            "label": "CONNS",
            "value": "20 M at peak",
            "level": "blue",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-1-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Đặt con số vào"
          },
          {
            "id": "chk-1-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "design-chat-step-3",
        "number": 3,
        "title": "One server",
        "category": "THỰC THI",
        "categoryColor": "blue",
        "headline": "Bản đầu: một máy chủ, hai socket",
        "bodyHtml": "<p>From <em>Real-time Updates</em>: polling wastes requests and adds delay, so each phone opens a <span class=\"term\">WebSocket</span> — one long-lived connection that the server can push down at any moment.</p>\n<p>Với một máy chủ, phần còn lại thật đơn giản. Alice và Bob cùng kết nối tới nó; khi tin của Alice đến, máy chủ tìm socket của Bob ngay trong bộ nhớ của mình và ghi vào đó.</p>\n<div class=\"callout callout--insight\"><strong>Lưu ý Kỹ sư:</strong> Khác với mọi thứ trong bài <em>Dịch vụ phi trạng thái</em>, máy chủ này <b>có trạng thái</b>: kết nối của Bob sống trên một máy cụ thể. Chính sự thật đó định hình phần còn lại của thiết kế.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (One server)",
          "body": "Nắm vững nguyên lý Bản đầu: một máy chủ, hai socket để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-2-1",
            "label": "DELIVERMS",
            "value": "80",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-2-2",
            "label": "CONNS",
            "value": "2 · one server",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-2-3",
            "label": "CANLOSEMSG",
            "value": "yes",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-2-4",
            "label": "ORDERED",
            "value": "no",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-2-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Bản đầu: một máy chủ, hai socket"
          },
          {
            "id": "chk-2-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "design-chat-step-4",
        "number": 4,
        "title": "Where is Bob?",
        "category": "BỐI CẢNH",
        "categoryColor": "rose",
        "headline": "Một trăm máy chủ: Bob ở đâu?",
        "bodyHtml": "<p>Hai mươi triệu socket cần khoảng một trăm máy chủ. Tách vai trò: các <b>gateway</b> chỉ giữ kết nối, còn một <b>dịch vụ chat</b> phi trạng thái phía sau chứa logic.</p>\n<p>Giờ Alice kết nối tới gateway 1 còn Bob tới gateway 2. Tin của Alice đến dịch vụ chat, nhưng nó không biết gateway nào trong số một trăm cái đang giữ socket của Bob.</p>\n<div class=\"callout callout--tip\"><strong>Lưu ý Kỹ sư:</strong> Giữ gateway thật đơn giản. Logic thay đổi mỗi ngày; nếu nó nằm sau gateway, bạn có thể deploy mà không cắt hai mươi triệu kết nối.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Where is Bob?)",
          "body": "Nắm vững nguyên lý Một trăm máy chủ: Bob ở đâu? để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-3-1",
            "label": "CONNS",
            "value": "20 M · 100 gateways",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-3-2",
            "label": "CANLOSEMSG",
            "value": "yes",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-3-3",
            "label": "ORDERED",
            "value": "no",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-3-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Một trăm máy chủ: Bob ở đâu?"
          },
          {
            "id": "chk-3-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "design-chat-step-5",
        "number": 5,
        "title": "Registry",
        "category": "THỰC THI",
        "categoryColor": "blue",
        "headline": "Sổ ghi ai đang kết nối ở đâu",
        "bodyHtml": "<p>Khi một thiết bị kết nối, gateway của nó ghi một dòng vào kho trong bộ nhớ tốc độ cao: <code>bob → gateway 2</code>, với TTL ngắn được heartbeat làm mới liên tục. Dịch vụ chat tra Bob rồi giao tin cho đúng gateway, gateway ghi nó vào socket của Bob.</p>\n<p>Lại là <em>Khám phá dịch vụ</em>, ở quy mô từng người dùng: một sổ đăng ký được heartbeat giữ cho đúng.</p>\n<div class=\"callout callout--tip\"><strong>Lưu ý Kỹ sư:</strong> Nếu dòng không có hoặc đã cũ, chẳng có gì hỏng: Bob được coi là offline và sẽ nhận tin khi kết nối lại. Nghĩa là tin nhắn phải chờ ở đâu đó…</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Registry)",
          "body": "Nắm vững nguyên lý Sổ ghi ai đang kết nối ở đâu để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-4-1",
            "label": "DELIVERMS",
            "value": "90",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-4-2",
            "label": "CONNS",
            "value": "20 M · 100 gateways",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-4-3",
            "label": "CANLOSEMSG",
            "value": "yes",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-4-4",
            "label": "ORDERED",
            "value": "no",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-4-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Sổ ghi ai đang kết nối ở đâu"
          },
          {
            "id": "chk-4-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "design-chat-step-6",
        "number": 6,
        "title": "Store first",
        "category": "THỰC THI",
        "categoryColor": "blue",
        "headline": "Ghi lại trước khi chuyển tiếp",
        "bodyHtml": "<p>Cho tới giờ, tin nhắn chỉ tồn tại trong bộ nhớ khi đang trên đường. Nếu máy chủ sập giữa lúc giao, tin mất luôn. Quy tắc: <b>lưu trước, giao sau</b>. Dịch vụ chat ghi mọi tin vào kho bền vững, và chỉ sau đó mới báo Alice “đã gửi ✓”.</p>\n<p>Cùng bước đó, nó đóng dấu tin bằng <b>số thứ tự</b> tiếp theo của cuộc trò chuyện. Thứ tự được quyết định một lần, bởi máy chủ, không bao giờ bởi đồng hồ điện thoại, vì chúng lệch nhau (xem <em>CAP & tính nhất quán</em>).</p>\n<div class=\"callout callout--tip\"><strong>Lưu ý Kỹ sư:</strong> Kho này bị ghi nhiều và luôn được đọc theo một cách: “các tin mới nhất của cuộc trò chuyện X”. Phân vùng theo id cuộc trò chuyện, sắp theo số thứ tự: một kho wide-column như Cassandra hay HBase (cả hai đều là engine LSM, xem <em>Storage engine</em>) rất hợp.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Store first)",
          "body": "Nắm vững nguyên lý Ghi lại trước khi chuyển tiếp để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-5-1",
            "label": "TIẾN ĐỘ",
            "value": "Bước 6/12",
            "level": "blue",
            "iconName": "activity"
          },
          {
            "id": "tel-5-2",
            "label": "TRẠNG THÁI",
            "value": "Sẵn sàng",
            "level": "good",
            "iconName": "check"
          },
          {
            "id": "tel-5-3",
            "label": "ĐỘ PHỨC TẠP",
            "value": "Nâng cao",
            "level": "default",
            "iconName": "layers"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-5-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Ghi lại trước khi chuyển tiếp"
          },
          {
            "id": "chk-5-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "design-chat-step-7",
        "number": 7,
        "title": "Offline",
        "category": "BỐI CẢNH",
        "categoryColor": "rose",
        "headline": "Tình huống: Bob trong đường hầm",
        "bodyHtml": "<p>Điện thoại của Bob mất sóng. Dòng của anh trong sổ đăng ký hết hạn, nên dịch vụ chat biết không cần thử. Tin đã an toàn trong kho, và một <b>thông báo đẩy</b> được gửi qua dịch vụ của Apple hoặc Google để đánh thức điện thoại.</p>\n<p>Khi Bob kết nối lại, ứng dụng nói “tôi có cuộc 88 tới #41”, và máy chủ trả về mọi thứ sau đó. <b>Đồng bộ theo con trỏ</b> này là một cơ chế duy nhất cho khoảng hở năm giây, một tuần offline hay một thiết bị mới tinh.</p>\n<div class=\"callout callout--insight\"><strong>Lưu ý Kỹ sư:</strong> Giao trực tiếp là một tối ưu hóa. Giao thức thật là “lưu, rồi đồng bộ”; socket mở chỉ làm việc đồng bộ diễn ra sớm hơn.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Offline)",
          "body": "Nắm vững nguyên lý Tình huống: Bob trong đường hầm để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-6-1",
            "label": "TIẾN ĐỘ",
            "value": "Bước 7/12",
            "level": "blue",
            "iconName": "activity"
          },
          {
            "id": "tel-6-2",
            "label": "TRẠNG THÁI",
            "value": "Sẵn sàng",
            "level": "good",
            "iconName": "check"
          },
          {
            "id": "tel-6-3",
            "label": "ĐỘ PHỨC TẠP",
            "value": "Nâng cao",
            "level": "default",
            "iconName": "layers"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-6-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Tình huống: Bob trong đường hầm"
          },
          {
            "id": "chk-6-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "design-chat-step-8",
        "number": 8,
        "title": "Duplicates",
        "category": "BỐI CẢNH",
        "categoryColor": "rose",
        "headline": "Tình huống: gửi hai lần, hiện một lần",
        "bodyHtml": "<p>Alice bấm gửi trong thang máy. Tin đến máy chủ và được lưu, nhưng phản hồi “đã gửi ✓” bị mất. Ứng dụng không thể biết, nên nó gửi lại, và giờ máy chủ nhận cùng một tin hai lần.</p>\n<p>Sửa như bài <em>Timeout & thử lại</em> đã dạy: ứng dụng gán cho mỗi tin một id duy nhất <em>trước khi</em> gửi và dùng lại nó ở mỗi lần thử lại. Máy chủ nhận ra id nó đã lưu và chỉ xác nhận lại. Ứng dụng nhận cũng bỏ bản trùng theo cách đó.</p>\n<div class=\"callout callout--tip\"><strong>Lưu ý Kỹ sư:</strong> Giao ít nhất một lần cộng với bên nhận idempotent cho ra “đúng một lần” trên màn hình. Dấu tick chỉ là xác nhận bình thường: ✓ máy chủ đã lưu, ✓✓ thiết bị đã nhận.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Duplicates)",
          "body": "Nắm vững nguyên lý Tình huống: gửi hai lần, hiện một lần để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-7-1",
            "label": "TIẾN ĐỘ",
            "value": "Bước 8/12",
            "level": "blue",
            "iconName": "activity"
          },
          {
            "id": "tel-7-2",
            "label": "TRẠNG THÁI",
            "value": "Sẵn sàng",
            "level": "good",
            "iconName": "check"
          },
          {
            "id": "tel-7-3",
            "label": "ĐỘ PHỨC TẠP",
            "value": "Nâng cao",
            "level": "default",
            "iconName": "layers"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-7-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Tình huống: gửi hai lần, hiện một lần"
          },
          {
            "id": "chk-7-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "design-chat-step-9",
        "number": 9,
        "title": "Groups",
        "category": "LÝ THUYẾT",
        "categoryColor": "emerald",
        "headline": "Chat nhóm: lưu một lần, giao cho nhiều người",
        "bodyHtml": "<p>Một tin nhóm được lưu <b>một lần</b>, trong cuộc trò chuyện của nhóm. Rồi dịch vụ chat tra danh sách thành viên, tìm gateway của từng người trong sổ đăng ký và giao một bản tới mỗi thiết bị đang online: fan-out khi ghi, giống news feed.</p>\n<p>Cách này ổn tới vài trăm thành viên. Một kênh 100.000 thành viên lại là bài toán người nổi tiếng; ở đó ứng dụng tự kéo tin mới khi mở kênh.</p>\n<div class=\"callout callout--tip\"><strong>Lưu ý Kỹ sư:</strong> Thành viên offline không tốn thêm gì: mỗi người tự đồng bộ từ con trỏ của mình khi quay lại.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Groups)",
          "body": "Nắm vững nguyên lý Chat nhóm: lưu một lần, giao cho nhiều người để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-8-1",
            "label": "TIẾN ĐỘ",
            "value": "Bước 9/12",
            "level": "blue",
            "iconName": "activity"
          },
          {
            "id": "tel-8-2",
            "label": "TRẠNG THÁI",
            "value": "Sẵn sàng",
            "level": "good",
            "iconName": "check"
          },
          {
            "id": "tel-8-3",
            "label": "ĐỘ PHỨC TẠP",
            "value": "Nâng cao",
            "level": "default",
            "iconName": "layers"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-8-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Chat nhóm: lưu một lần, giao cho nhiều người"
          },
          {
            "id": "chk-8-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "design-chat-step-10",
        "number": 10,
        "title": "Presence",
        "category": "NGHIỆP VỤ BA",
        "categoryColor": "amber",
        "headline": "“Online” và “đang gõ…” theo luật khác",
        "bodyHtml": "<p>Trạng thái online trông đơn giản nhưng đắt bất ngờ: mỗi lần ai đó kết nối hay ngắt kết nối, màn hình của mọi người trong danh bạ của họ có thể cần cập nhật. Với 20 triệu người ra vào, đó là một cơn bão tin nhắn tí hon.</p>\n<p>Vậy hãy coi nó là <b>tạm thời</b>. Suy ra “online” từ heartbeat của sổ đăng ký; chỉ gửi cập nhật cho người đang mở cuộc chat hay danh bạ đó; không bao giờ lưu “đang gõ…”. Nếu một cập nhật bị mất, heartbeat tiếp theo sẽ sửa lại.</p>\n<div class=\"callout callout--insight\"><strong>Lưu ý Kỹ sư:</strong> Một sản phẩm, hai mức nhất quán: tin nhắn bền vững và có thứ tự; trạng thái online là cố gắng hết mức và có thể cũ vài giây. Chọn theo từng tính năng chính là bài học CAP trong thực tế.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Presence)",
          "body": "Nắm vững nguyên lý “Online” và “đang gõ…” theo luật khác để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-9-1",
            "label": "TIẾN ĐỘ",
            "value": "Bước 10/12",
            "level": "blue",
            "iconName": "activity"
          },
          {
            "id": "tel-9-2",
            "label": "TRẠNG THÁI",
            "value": "Sẵn sàng",
            "level": "good",
            "iconName": "check"
          },
          {
            "id": "tel-9-3",
            "label": "ĐỘ PHỨC TẠP",
            "value": "Nâng cao",
            "level": "default",
            "iconName": "layers"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-9-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: “Online” và “đang gõ…” theo luật khác"
          },
          {
            "id": "chk-9-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "design-chat-step-11",
        "number": 11,
        "title": "Gateway dies",
        "category": "BỐI CẢNH",
        "categoryColor": "rose",
        "headline": "Tình huống: một gateway chết",
        "bodyHtml": "<p>Gateway 2 sập và 200.000 socket đứt cùng lúc. Không tin nào mất (mọi thứ đã được lưu trước), nhưng giờ 200.000 ứng dụng cố kết nối lại trong cùng một giây, và chúng có thể quật ngã bất kỳ gateway nào chúng rơi vào.</p>\n<p>Ứng dụng kết nối lại với <b>backoff lũy thừa và jitter</b> (<em>Timeout & thử lại</em>), load balancer rải chúng ra các gateway khỏe, mỗi gateway đăng ký vị trí mới, và mỗi ứng dụng đồng bộ từ con trỏ của mình.</p>\n<div class=\"callout callout--warn\"><strong>Lưu ý Kỹ sư:</strong> Máy chủ có trạng thái sập rất ồn ào. Hãy tính trước cơn bão kết nối lại, và trước khi deploy, rút gateway ra từ từ thay vì cắt mọi người cùng lúc.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Gateway dies)",
          "body": "Nắm vững nguyên lý Tình huống: một gateway chết để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-10-1",
            "label": "DELIVERMS",
            "value": "110",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-10-2",
            "label": "CONNS",
            "value": "20 M · 99 gateways",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-10-3",
            "label": "CANLOSEMSG",
            "value": "no",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-10-4",
            "label": "ORDERED",
            "value": "yes",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-10-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Tình huống: một gateway chết"
          },
          {
            "id": "chk-10-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "design-chat-step-12",
        "number": 12,
        "title": "Recap",
        "category": "TỐI ƯU",
        "categoryColor": "emerald",
        "headline": "Bản thiết kế hoàn chỉnh",
        "bodyHtml": "<div class=\"callout callout--next\"><strong>Lưu ý Kỹ sư:</strong> Khóa học đến đây là hết. Bạn đã có các khối xây dựng và ba thiết kế hoàn chỉnh; giờ hãy chọn một sản phẩm bạn dùng mỗi ngày và phác thảo cách bạn sẽ xây nó.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Recap)",
          "body": "Nắm vững nguyên lý Bản thiết kế hoàn chỉnh để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-11-1",
            "label": "TIẾN ĐỘ",
            "value": "Bước 12/12",
            "level": "blue",
            "iconName": "activity"
          },
          {
            "id": "tel-11-2",
            "label": "TRẠNG THÁI",
            "value": "Sẵn sàng",
            "level": "good",
            "iconName": "check"
          },
          {
            "id": "tel-11-3",
            "label": "ĐỘ PHỨC TẠP",
            "value": "Nâng cao",
            "level": "default",
            "iconName": "layers"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-11-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Bản thiết kế hoàn chỉnh"
          },
          {
            "id": "chk-11-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Hoàn Tất Bài Học"
      }
    ]
  }
];
