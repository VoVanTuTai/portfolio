import type { StudioLesson } from "../studio.types";

export const mod03Lessons: StudioLesson[] = [
  {
    "id": "sql-nosql",
    "slug": "sql-nosql",
    "title": "SQL hay NoSQL",
    "subtitle": "SQL vs NoSQL · 11 phút thực chiến",
    "moduleCode": "03",
    "moduleTitle": "Dữ Liệu & Lưu Trữ Phân Tán (Data & Storage)",
    "durationMinutes": 11,
    "difficulty": "Cơ bản",
    "steps": [
      {
        "id": "sql-nosql-step-1",
        "number": 1,
        "title": "Tables",
        "category": "BỐI CẢNH",
        "categoryColor": "blue",
        "headline": "Dữ liệu trong bảng",
        "bodyHtml": "<p>Most apps start with a <span class=\"term\">relational</span> (SQL) database such as PostgreSQL or MySQL. Data lives in tables with a fixed set of columns — a <span class=\"term\">schema</span>.</p>\n<p>Các bảng trỏ tới nhau bằng khóa, và <b>join</b> kết hợp chúng trong một truy vấn: “mọi đơn hàng kèm tên khách hàng”.</p>\n<div class=\"callout callout--insight\"><strong>Lưu ý Kỹ sư:</strong> Cơ sở dữ liệu SQL có cả chục năm công cụ phía sau. Khi phân vân, đó là lựa chọn mặc định rất an toàn.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Tables)",
          "body": "Nắm vững nguyên lý Dữ liệu trong bảng để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-0-1",
            "label": "JOINS",
            "value": "yes",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-0-2",
            "label": "TX",
            "value": "yes",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-0-3",
            "label": "SCHEMA",
            "value": "fixed",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-0-4",
            "label": "SCALEOUT",
            "value": "hard",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-0-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Dữ liệu trong bảng"
          },
          {
            "id": "chk-0-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "sql-nosql-step-2",
        "number": 2,
        "title": "Transactions",
        "category": "LÝ THUYẾT",
        "categoryColor": "emerald",
        "headline": "Tất cả hoặc không gì cả: giao dịch",
        "bodyHtml": "<p>Chuyển $50 từ Ana sang Ben là hai lệnh cập nhật. Nếu server sập giữa chừng, tiền biến mất.</p>\n<p>A <span class=\"term\">transaction</span> groups them: both happen, or neither does. Relational databases guarantee this (the <b>ACID</b> properties), which is why they hold payments, orders and inventory.</p>\n<div class=\"callout callout--tip\"><strong>Lưu ý Kỹ sư:</strong> ACID: Atomic (tất cả hoặc không gì), Consistent (luật luôn đúng), Isolated (không thấy trạng thái dở dang), Durable (đã commit là đã lưu).</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Transactions)",
          "body": "Nắm vững nguyên lý Tất cả hoặc không gì cả: giao dịch để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-1-1",
            "label": "JOINS",
            "value": "yes",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-1-2",
            "label": "TX",
            "value": "yes",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-1-3",
            "label": "SCHEMA",
            "value": "fixed",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-1-4",
            "label": "SCALEOUT",
            "value": "hard",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-1-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Tất cả hoặc không gì cả: giao dịch"
          },
          {
            "id": "chk-1-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "sql-nosql-step-3",
        "number": 3,
        "title": "Growing pains",
        "category": "BỐI CẢNH",
        "categoryColor": "rose",
        "headline": "Đau đầu khi lớn",
        "bodyHtml": "<p>Danh mục sản phẩm của bạn cũng vào chung CSDL. Giày có cỡ, laptop có CPU, sách có tác giả, nên bảng sản phẩm mọc ra hàng trăm cột gần như trống, và mỗi loại sản phẩm mới lại là một lần migration trên bảng 400 triệu dòng. Vài lần trong số đó viết lại hoặc khóa cả bảng hàng giờ.</p>\n<p>Trong khi đó mọi lệnh ghi vẫn đi qua một server CSDL duy nhất.</p>\n<div class=\"callout callout--warn\"><strong>Lưu ý Kỹ sư:</strong> Lược đồ cứng nhắc và một server ghi duy nhất là hai điểm đau kinh điển của CSDL quan hệ ở quy mô lớn.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Growing pains)",
          "body": "Nắm vững nguyên lý Đau đầu khi lớn để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-2-1",
            "label": "JOINS",
            "value": "yes",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-2-2",
            "label": "TX",
            "value": "yes",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-2-3",
            "label": "SCHEMA",
            "value": "fixed",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-2-4",
            "label": "SCALEOUT",
            "value": "hard",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-2-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Đau đầu khi lớn"
          },
          {
            "id": "chk-2-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "sql-nosql-step-4",
        "number": 4,
        "title": "Documents",
        "category": "THỰC THI",
        "categoryColor": "blue",
        "headline": "Tài liệu: mỗi bản ghi một hình dạng",
        "bodyHtml": "<p>A <span class=\"term\">document store</span> (such as MongoDB) keeps each record as a self-contained document. A shoe and a laptop can have completely different fields, with no migration to run — though your code must now cope with every shape it has ever written.</p>\n<p>Mọi thứ về một sản phẩm nằm cùng nhau, nên đọc nó chỉ là một lần lấy, và tài liệu tự nhiên trải ra nhiều server.</p>\n<div class=\"callout callout--tip\"><strong>Lưu ý Kỹ sư:</strong> Tài liệu tỏa sáng khi bạn đọc và ghi trọn vẹn đối tượng một lần: danh mục, hồ sơ, nội dung.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Documents)",
          "body": "Nắm vững nguyên lý Tài liệu: mỗi bản ghi một hình dạng để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-3-1",
            "label": "JOINS",
            "value": "limited",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-3-2",
            "label": "TX",
            "value": "per doc",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-3-3",
            "label": "SCHEMA",
            "value": "flexible",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-3-4",
            "label": "SCALEOUT",
            "value": "easy",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-3-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Tài liệu: mỗi bản ghi một hình dạng"
          },
          {
            "id": "chk-3-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "sql-nosql-step-5",
        "number": 5,
        "title": "Key–value",
        "category": "LÝ THUYẾT",
        "categoryColor": "emerald",
        "headline": "Khóa-giá trị: chỉ việc tra",
        "bodyHtml": "<p>The simplest store of all: a <span class=\"term\">key–value</span> store (Redis, DynamoDB) maps a key to a value. No queries, no joins — get and set by key, in about a millisecond.</p>\n<p>Vì mỗi khóa đứng riêng, dữ liệu chia ra nhiều nút gần như miễn phí.</p>\n<div class=\"callout callout--tip\"><strong>Lưu ý Kỹ sư:</strong> Hoàn hảo cho phiên, giỏ hàng, feature flag và bộ đếm: bất cứ thứ gì bạn luôn lấy theo một id.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Key–value)",
          "body": "Nắm vững nguyên lý Khóa-giá trị: chỉ việc tra để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-4-1",
            "label": "JOINS",
            "value": "no",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-4-2",
            "label": "TX",
            "value": "limited",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-4-3",
            "label": "SCHEMA",
            "value": "none",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-4-4",
            "label": "SCALEOUT",
            "value": "easy",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-4-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Khóa-giá trị: chỉ việc tra"
          },
          {
            "id": "chk-4-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "sql-nosql-step-6",
        "number": 6,
        "title": "Trade-offs",
        "category": "NGHIỆP VỤ BA",
        "categoryColor": "amber",
        "headline": "NoSQL đánh đổi những gì",
        "bodyHtml": "<div class=\"callout callout--warn\"><strong>Lưu ý Kỹ sư:</strong> Chọn NoSQL “vì quy mô” mà bạn chưa có thường đồng nghĩa với tự tay dựng lại join và giao dịch.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Trade-offs)",
          "body": "Nắm vững nguyên lý NoSQL đánh đổi những gì để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-5-1",
            "label": "JOINS",
            "value": "limited",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-5-2",
            "label": "TX",
            "value": "limited",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-5-3",
            "label": "SCHEMA",
            "value": "flexible",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-5-4",
            "label": "SCALEOUT",
            "value": "easy",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-5-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: NoSQL đánh đổi những gì"
          },
          {
            "id": "chk-5-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "sql-nosql-step-7",
        "number": 7,
        "title": "Use both",
        "category": "THỰC THI",
        "categoryColor": "blue",
        "headline": "Dùng mỗi thứ đúng chỗ",
        "bodyHtml": "<p>Real systems mix them — <span class=\"term\">polyglot persistence</span>. Money and orders stay relational for transactions; the catalog lives in documents; sessions go to a key–value store.</p>\n<p>Bắt đầu với một CSDL, và chỉ thêm cái khác khi một loại dữ liệu rõ ràng cần nó.</p>\n<div class=\"callout callout--insight\"><strong>Lưu ý Kỹ sư:</strong> Câu hỏi không phải “SQL hay NoSQL?” mà là “dữ liệu này cần gì: quan hệ, sự linh hoạt, hay tốc độ tra cứu thuần túy?”</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Use both)",
          "body": "Nắm vững nguyên lý Dùng mỗi thứ đúng chỗ để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-6-1",
            "label": "JOINS",
            "value": "yes",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-6-2",
            "label": "TX",
            "value": "yes",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-6-3",
            "label": "SCHEMA",
            "value": "flexible",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-6-4",
            "label": "SCALEOUT",
            "value": "easy",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-6-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Dùng mỗi thứ đúng chỗ"
          },
          {
            "id": "chk-6-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "sql-nosql-step-8",
        "number": 8,
        "title": "Search",
        "category": "BỐI CẢNH",
        "categoryColor": "rose",
        "headline": "Tình huống: “giày chạy bộ màu đỏ”",
        "bodyHtml": "<p>Người mua gõ văn bản tự do vào ô tìm kiếm. Trong SQL, việc đó thành <code>WHERE name LIKE '%red%'</code> trên hàng triệu dòng: chậm, không xếp hạng được kết quả, không xử lý lỗi gõ và không khớp “giày” với các biến thể.</p>\n<p>A <span class=\"term\">search engine</span> (Elasticsearch, OpenSearch) builds an inverted index: for every word, the list of documents containing it. It’s fed from the main database by a stream of changes.</p>\n<div class=\"callout callout--tip\"><strong>Lưu ý Kỹ sư:</strong> Chỉ mục tìm kiếm là bản sao, không phải nguồn sự thật: nó luôn có thể được dựng lại từ CSDL chính.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Search)",
          "body": "Nắm vững nguyên lý Tình huống: “giày chạy bộ màu đỏ” để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-7-1",
            "label": "JOINS",
            "value": "yes",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-7-2",
            "label": "TX",
            "value": "yes",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-7-3",
            "label": "SCHEMA",
            "value": "flexible",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-7-4",
            "label": "SCALEOUT",
            "value": "easy",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-7-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Tình huống: “giày chạy bộ màu đỏ”"
          },
          {
            "id": "chk-7-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "sql-nosql-step-9",
        "number": 9,
        "title": "Specialists",
        "category": "LÝ THUYẾT",
        "categoryColor": "violet",
        "headline": "Những kho chuyên biệt hơn",
        "bodyHtml": "<p>Tìm kiếm là một ví dụ về kho được xây cho một kiểu truy cập. Còn những kho khác, mỗi cái giỏi hơn hẳn CSDL đa dụng ở việc của nó, và kém hơn ở mọi thứ khác.</p>\n<p>Hãy dùng chúng khi một khối lượng công việc rõ ràng không hợp, chứ không phải mặc định: mỗi kho thêm vào là thêm thứ phải vận hành, bảo mật, sao lưu và đồng bộ.</p>\n<div class=\"callout callout--insight\"><strong>Lưu ý Kỹ sư:</strong> Hầu hết hệ thống chạy tốt nhiều năm trên một CSDL quan hệ. Hãy thêm từng chuyên gia một, cho một nhu cầu đã đo được.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Specialists)",
          "body": "Nắm vững nguyên lý Những kho chuyên biệt hơn để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-8-1",
            "label": "JOINS",
            "value": "yes",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-8-2",
            "label": "TX",
            "value": "yes",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-8-3",
            "label": "SCHEMA",
            "value": "flexible",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-8-4",
            "label": "SCALEOUT",
            "value": "easy",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-8-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Những kho chuyên biệt hơn"
          },
          {
            "id": "chk-8-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "sql-nosql-step-10",
        "number": 10,
        "title": "Recap",
        "category": "TỐI ƯU",
        "categoryColor": "emerald",
        "headline": "Recap",
        "bodyHtml": "<div class=\"callout callout--next\"><strong>Lưu ý Kỹ sư:</strong> Tiếp theo: <b>Chỉ mục</b>: vì sao cùng một truy vấn có thể mất 2 giây hoặc 2 mili giây.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Recap)",
          "body": "Nắm vững nguyên lý Recap để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-9-1",
            "label": "JOINS",
            "value": "yes",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-9-2",
            "label": "TX",
            "value": "yes",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-9-3",
            "label": "SCHEMA",
            "value": "flexible",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-9-4",
            "label": "SCALEOUT",
            "value": "easy",
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
    "id": "indexes",
    "slug": "indexes",
    "title": "Indexes",
    "subtitle": "Indexes · 12 phút thực chiến",
    "moduleCode": "03",
    "moduleTitle": "Dữ Liệu & Lưu Trữ Phân Tán (Data & Storage)",
    "durationMinutes": 12,
    "difficulty": "Cơ bản",
    "steps": [
      {
        "id": "indexes-step-1",
        "number": 1,
        "title": "Slow query",
        "category": "BỐI CẢNH",
        "categoryColor": "rose",
        "headline": "Tìm một người dùng mất hai giây",
        "bodyHtml": "<p>Đăng nhập tìm người dùng theo email. Với 50 triệu người dùng, việc đó mất hơn hai giây, và mỗi ngày một chậm hơn.</p>\n<p>With nothing to guide it, the database does a <span class=\"term\">full table scan</span>: it reads every page of the table, checking each row. Watch the amber request crawl along.</p>\n<div class=\"callout callout--warn\"><strong>Lưu ý Kỹ sư:</strong> Lần quét lớn dần theo bảng. Ổn ở một nghìn dòng; khổ sở ở năm mươi triệu.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Slow query)",
          "body": "Nắm vững nguyên lý Tìm một người dùng mất hai giây để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-0-1",
            "label": "P95",
            "value": "2300",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-0-2",
            "label": "ROWS",
            "value": "5e7",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-0-3",
            "label": "WRITECOST",
            "value": "1",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-0-4",
            "label": "INDEXES",
            "value": "0",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-0-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Tìm một người dùng mất hai giây"
          },
          {
            "id": "chk-0-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "indexes-step-2",
        "number": 2,
        "title": "Phone book",
        "category": "LÝ THUYẾT",
        "categoryColor": "violet",
        "headline": "Danh bạ điện thoại làm thế nào",
        "bodyHtml": "<p>Không ai đọc danh bạ từng trang một. Vì nó đã được <b>sắp xếp</b>, bạn mở ở giữa, xem tên mình đứng trước hay sau, rồi bỏ đi một nửa cuốn. Lặp lại.</p>\n<p>Chia đôi 50 triệu mục chỉ mất khoảng 26 bước.</p>\n<div class=\"callout callout--insight\"><strong>Lưu ý Kỹ sư:</strong> Chỉ mục là một bản sao đã sắp xếp của một cột, kèm con trỏ trỏ về từng dòng đầy đủ.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Phone book)",
          "body": "Nắm vững nguyên lý Danh bạ điện thoại làm thế nào để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-1-1",
            "label": "P95",
            "value": "2300",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-1-2",
            "label": "ROWS",
            "value": "5e7",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-1-3",
            "label": "WRITECOST",
            "value": "1",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-1-4",
            "label": "INDEXES",
            "value": "0",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-1-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Danh bạ điện thoại làm thế nào"
          },
          {
            "id": "chk-1-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "indexes-step-3",
        "number": 3,
        "title": "Add index",
        "category": "THỰC THI",
        "categoryColor": "blue",
        "headline": "Thêm một chỉ mục",
        "bodyHtml": "<p><code>CREATE INDEX ON users (email)</code> builds a <span class=\"term\">B-tree</span>: a small tree of sorted keys. The root says which branch covers your email, the branch says which page holds the row.</p>\n<p>Ba bước nhảy thay cho năm mươi triệu dòng: giờ việc tra cứu chỉ mất khoảng 2 ms.</p>\n<div class=\"callout callout--tip\"><strong>Lưu ý Kỹ sư:</strong> Khóa chính tự động có chỉ mục. Những cột bạn tìm, join hay sắp xếp theo thường cũng cần một cái.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Add index)",
          "body": "Nắm vững nguyên lý Thêm một chỉ mục để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-2-1",
            "label": "P95",
            "value": "2",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-2-2",
            "label": "ROWS",
            "value": "1",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-2-3",
            "label": "WRITECOST",
            "value": "2",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-2-4",
            "label": "INDEXES",
            "value": "1",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-2-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Thêm một chỉ mục"
          },
          {
            "id": "chk-2-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "indexes-step-4",
        "number": 4,
        "title": "Why shallow",
        "category": "LÝ THUYẾT",
        "categoryColor": "emerald",
        "headline": "Vì sao B-tree luôn nông",
        "bodyHtml": "<p>Mỗi nút của cây là một trang đĩa chứa hàng trăm khóa, nên mỗi tầng nhân tầm với lên hàng trăm lần.</p>\n<p>Ba hoặc bốn tầng đủ phủ hàng tỉ dòng, và các tầng trên được dùng thường xuyên đến mức luôn nằm trong bộ nhớ.</p>\n<div class=\"callout callout--insight\"><strong>Lưu ý Kỹ sư:</strong> Đó là lý do một lần tra cứu có chỉ mục tốn gần như nhau dù bảng có một triệu hay một tỉ dòng.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Why shallow)",
          "body": "Nắm vững nguyên lý Vì sao B-tree luôn nông để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-3-1",
            "label": "P95",
            "value": "2",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-3-2",
            "label": "ROWS",
            "value": "1",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-3-3",
            "label": "WRITECOST",
            "value": "2",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-3-4",
            "label": "INDEXES",
            "value": "1",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-3-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Vì sao B-tree luôn nông"
          },
          {
            "id": "chk-3-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "indexes-step-5",
        "number": 5,
        "title": "Writes pay",
        "category": "NGHIỆP VỤ BA",
        "categoryColor": "amber",
        "headline": "Mỗi chỉ mục làm lệnh ghi chậm hơn",
        "bodyHtml": "<p>Khi một người dùng đăng ký, dòng đó vào bảng <em>và</em> vào mọi chỉ mục trên bảng, giữ từng cái luôn được sắp xếp. Hãy xem các lệnh ghi (ô vuông tối) đáp xuống cả hai nơi.</p>\n<p>Chỉ mục còn tốn đĩa và bộ nhớ. Hãy đánh chỉ mục những gì bạn truy vấn, chứ không phải mọi thứ.</p>\n<div class=\"callout callout--warn\"><strong>Lưu ý Kỹ sư:</strong> Một bảng có 6 chỉ mục thực hiện 7 lần ghi cho mỗi lệnh insert. Chỉ mục không dùng tới là chi phí thuần túy.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Writes pay)",
          "body": "Nắm vững nguyên lý Mỗi chỉ mục làm lệnh ghi chậm hơn để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-4-1",
            "label": "P95",
            "value": "2",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-4-2",
            "label": "ROWS",
            "value": "1",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-4-3",
            "label": "WRITECOST",
            "value": "2",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-4-4",
            "label": "INDEXES",
            "value": "1",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-4-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Mỗi chỉ mục làm lệnh ghi chậm hơn"
          },
          {
            "id": "chk-4-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "indexes-step-6",
        "number": 6,
        "title": "Column order",
        "category": "LÝ THUYẾT",
        "categoryColor": "emerald",
        "headline": "Chỉ mục ghép: thứ tự quan trọng",
        "bodyHtml": "<p>Một chỉ mục có thể phủ nhiều cột, như <code>(country, city)</code>. Nó được sắp theo quốc gia trước, rồi theo thành phố trong mỗi quốc gia, như danh bạ sắp theo họ rồi đến tên.</p>\n<p>Nó tăng tốc các truy vấn trên <code>country</code>, hoặc <code>country</code> + <code>city</code>. Truy vấn chỉ trên <code>city</code> không dùng được nó và quay về quét toàn bảng.</p>\n<div class=\"callout callout--tip\"><strong>Lưu ý Kỹ sư:</strong> Đặt cột bạn luôn lọc theo lên đầu. Chỉ mục giúp từ bên trái.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Column order)",
          "body": "Nắm vững nguyên lý Chỉ mục ghép: thứ tự quan trọng để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-5-1",
            "label": "P95",
            "value": "2",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-5-2",
            "label": "ROWS",
            "value": "1",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-5-3",
            "label": "WRITECOST",
            "value": "2",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-5-4",
            "label": "INDEXES",
            "value": "1",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-5-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Chỉ mục ghép: thứ tự quan trọng"
          },
          {
            "id": "chk-5-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "indexes-step-7",
        "number": 7,
        "title": "Wildcards",
        "category": "BỐI CẢNH",
        "categoryColor": "rose",
        "headline": "Tình huống: truy vấn chỉ mục không giúp được",
        "bodyHtml": "<p>Bộ phận marketing muốn mọi người dùng Gmail: <code>WHERE email LIKE '%@gmail.com'</code>. Chỉ mục được sắp theo <em>phần đầu</em> của mỗi email, còn mẫu này chẳng nói gì về phần đầu, nên lại quét toàn bảng.</p>\n<p>Điều tương tự xảy ra với hàm: <code>WHERE LOWER(email) = …</code> không dùng được chỉ mục thường trên <code>email</code>, vì chỉ mục lưu giá trị gốc.</p>\n<div class=\"callout callout--tip\"><strong>Lưu ý Kỹ sư:</strong> Cách sửa: chỉ mục biểu thức trên LOWER(email), một cột tên miền được lưu sẵn có chỉ mục riêng, hoặc công cụ tìm kiếm cho việc khớp văn bản tự do.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Wildcards)",
          "body": "Nắm vững nguyên lý Tình huống: truy vấn chỉ mục không giúp được để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-6-1",
            "label": "P95",
            "value": "2300",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-6-2",
            "label": "ROWS",
            "value": "5e7",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-6-3",
            "label": "WRITECOST",
            "value": "2",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-6-4",
            "label": "INDEXES",
            "value": "1",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-6-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Tình huống: truy vấn chỉ mục không giúp được"
          },
          {
            "id": "chk-6-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "indexes-step-8",
        "number": 8,
        "title": "Selectivity",
        "category": "BỐI CẢNH",
        "categoryColor": "rose",
        "headline": "Tình huống: chỉ mục không ai dùng",
        "bodyHtml": "<p>Bộ phận hỗ trợ muốn mọi người dùng ở một quốc gia: <code>WHERE country = 'US'</code>. Bạn thêm chỉ mục trên <code>country</code>, và cơ sở dữ liệu phớt lờ nó, vì 40% số dòng khớp.</p>\n<p>Following the index would mean hopping to a different table page for each of 20 million rows — slower than simply reading the table front to back. An index pays off when it is <span class=\"term\">selective</span>: when it narrows the search to a small fraction of the rows.</p>\n<div class=\"callout callout--tip\"><strong>Lưu ý Kỹ sư:</strong> Nếu bạn chỉ luôn truy vấn một lát nhỏ, như <code>WHERE status = 'pending'</code>, hãy dùng <b>chỉ mục một phần</b> chỉ chứa những dòng đó: tí hon, nhanh và rẻ để duy trì.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Selectivity)",
          "body": "Nắm vững nguyên lý Tình huống: chỉ mục không ai dùng để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-7-1",
            "label": "P95",
            "value": "2600",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-7-2",
            "label": "ROWS",
            "value": "5e7",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-7-3",
            "label": "WRITECOST",
            "value": "3",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-7-4",
            "label": "INDEXES",
            "value": "2",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-7-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Tình huống: chỉ mục không ai dùng"
          },
          {
            "id": "chk-7-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "indexes-step-9",
        "number": 9,
        "title": "EXPLAIN",
        "category": "LÝ THUYẾT",
        "categoryColor": "emerald",
        "headline": "Hỏi cơ sở dữ liệu: EXPLAIN",
        "bodyHtml": "<p>Bạn không cần đoán. Thêm <code>EXPLAIN</code> trước một truy vấn và cơ sở dữ liệu cho xem kế hoạch: nó sẽ dùng chỉ mục nào, và dự kiến đọc bao nhiêu dòng.</p>\n<p>“Index Scan” trên vài dòng là tin tốt. “Seq Scan” trên một bảng lớn là cờ đỏ. <code>EXPLAIN ANALYZE</code> chạy truy vấn và báo thời gian thực.</p>\n<div class=\"callout callout--tip\"><strong>Lưu ý Kỹ sư:</strong> Hầu hết cơ sở dữ liệu còn giữ nhật ký truy vấn chậm. Hãy bắt đầu từ đó: nó liệt kê những truy vấn thực sự đang tốn thời gian của bạn.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (EXPLAIN)",
          "body": "Nắm vững nguyên lý Hỏi cơ sở dữ liệu: EXPLAIN để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-8-1",
            "label": "P95",
            "value": "2",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-8-2",
            "label": "ROWS",
            "value": "1",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-8-3",
            "label": "WRITECOST",
            "value": "2",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-8-4",
            "label": "INDEXES",
            "value": "1",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-8-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Hỏi cơ sở dữ liệu: EXPLAIN"
          },
          {
            "id": "chk-8-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "indexes-step-10",
        "number": 10,
        "title": "Covering",
        "category": "LÝ THUYẾT",
        "categoryColor": "emerald",
        "headline": "Chỉ mục bao phủ: bỏ qua bảng",
        "bodyHtml": "<p>Trang đăng nhập chỉ cần tên và id của người dùng. Nếu chỉ mục lưu cả các cột đó, cơ sở dữ liệu có thể trả lời chỉ từ chỉ mục: nó không bao giờ ghé các trang của bảng.</p>\n<p>This is a <span class=\"term\">covering index</span>. Watch lookups stop at the branches instead of reaching the table.</p>\n<div class=\"callout callout--tip\"><strong>Lưu ý Kỹ sư:</strong> Trong PostgreSQL: CREATE INDEX ON users (email) INCLUDE (id, name). Chỉ mục sẽ lớn hơn, nên chỉ bao phủ các truy vấn nóng.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Covering)",
          "body": "Nắm vững nguyên lý Chỉ mục bao phủ: bỏ qua bảng để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-9-1",
            "label": "P95",
            "value": "1",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-9-2",
            "label": "ROWS",
            "value": "1",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-9-3",
            "label": "WRITECOST",
            "value": "2",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-9-4",
            "label": "INDEXES",
            "value": "1",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-9-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Chỉ mục bao phủ: bỏ qua bảng"
          },
          {
            "id": "chk-9-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "indexes-step-11",
        "number": 11,
        "title": "Recap",
        "category": "TỐI ƯU",
        "categoryColor": "emerald",
        "headline": "Recap",
        "bodyHtml": "<div class=\"callout callout--next\"><strong>Lưu ý Kỹ sư:</strong> Tiếp theo: <b>Storage engine</b>: cơ sở dữ liệu thực sự làm gì với một lần ghi, và vì sao có loại được xây cho đọc, có loại cho ghi.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Recap)",
          "body": "Nắm vững nguyên lý Recap để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-10-1",
            "label": "P95",
            "value": "2",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-10-2",
            "label": "ROWS",
            "value": "1",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-10-3",
            "label": "WRITECOST",
            "value": "2",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-10-4",
            "label": "INDEXES",
            "value": "1",
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
    "id": "storage-engines",
    "slug": "storage-engines",
    "title": "Storage engine",
    "subtitle": "Storage Engines · 14 phút thực chiến",
    "moduleCode": "03",
    "moduleTitle": "Dữ Liệu & Lưu Trữ Phân Tán (Data & Storage)",
    "durationMinutes": 14,
    "difficulty": "Trung cấp",
    "steps": [
      {
        "id": "storage-engines-step-1",
        "number": 1,
        "title": "Two places",
        "category": "BỐI CẢNH",
        "categoryColor": "blue",
        "headline": "Bộ nhớ và đĩa",
        "bodyHtml": "<p>Một server CSDL có hai nơi để giữ dữ liệu. <b>Bộ nhớ</b> thì nhanh (một thay đổi chỉ mất vài nano giây), nhưng mọi thứ trong đó biến mất khi tiến trình dừng. <b>Đĩa</b> sống sót qua sự cố hay mất điện, nhưng một lần ghi phải được xác nhận là thật sự nằm trên thiết bị (một <code>fsync</code>) chậm hơn hàng nghìn lần.</p>\n<p>A <span class=\"term\">storage engine</span> is the part of the database that decides what goes where, and when. Every design is a different answer to one question: how do you get the speed of memory and the safety of disk at once?</p>\n<div class=\"callout callout--insight\"><strong>Lưu ý Kỹ sư:</strong> Bảng được lưu thành các <b>trang</b> kích thước cố định, thường là 8 hoặc 16 KB, mỗi trang chứa hàng chục dòng. Engine giữ các trang dùng gần đây trong bộ nhớ và đọc phần còn lại từ đĩa khi cần.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Two places)",
          "body": "Nắm vững nguyên lý Bộ nhớ và đĩa để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-0-1",
            "label": "CRASHSAFE",
            "value": "?",
            "level": "blue",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-0-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Bộ nhớ và đĩa"
          },
          {
            "id": "chk-0-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "storage-engines-step-2",
        "number": 2,
        "title": "Crash",
        "category": "BỐI CẢNH",
        "categoryColor": "rose",
        "headline": "Nhanh mà sai: bộ nhớ trước, đĩa lúc nào cũng được",
        "bodyHtml": "<p>Engine đơn giản nhất: đổi trang trong bộ nhớ, trả lời “đã lưu”, và cứ vài giây lại chép các trang đã đổi xuống đĩa ở chế độ nền. Ghi nhanh như chớp.</p>\n<p>Then the power fails. Everything changed since the last background copy is gone — including orders that customers were told had gone through. Worse, a page that was half-written when the power died is now garbage: a <span class=\"term\">torn page</span>.</p>\n<div class=\"callout callout--warn\"><strong>Lưu ý Kỹ sư:</strong> “Đã lưu” phải có nghĩa là “sống sót qua sự cố”. Đó là chữ D trong ACID: <b>tính bền vững</b>.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Crash)",
          "body": "Nắm vững nguyên lý Nhanh mà sai: bộ nhớ trước, đĩa lúc nào cũng được để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-1-1",
            "label": "CRASHSAFE",
            "value": "no",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-1-2",
            "label": "WPS",
            "value": "5e5",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-1-3",
            "label": "DISKPATTERN",
            "value": "random · whenever",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-1-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Nhanh mà sai: bộ nhớ trước, đĩa lúc nào cũng được"
          },
          {
            "id": "chk-1-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "storage-engines-step-3",
        "number": 3,
        "title": "Log first",
        "category": "THỰC THI",
        "categoryColor": "blue",
        "headline": "Ghi lại trước: write-ahead log",
        "bodyHtml": "<p>Cách sửa hiển nhiên, đẩy mọi trang đã đổi xuống đĩa trước khi trả lời, thì an toàn nhưng chậm đến khổ sở: cả một trang 8 KB bị ghi lại ở vị trí ngẫu nhiên, chỉ để lưu một dòng 100 byte.</p>\n<p>Instead, describe the change in a few bytes and <b>append</b> it to a log file, forcing that to disk before replying. This is the <span class=\"term\">write-ahead log</span> (WAL). Appending to the end of one file is the fastest thing a disk can do. The pages themselves are changed in memory and copied out later, at leisure.</p>\n<p><small>Tốc độ hiển thị là của một SSD thông thường. Của bạn sẽ khác; tỉ lệ giữa các thiết kế thì không.</small></p>\n<div class=\"callout callout--insight\"><strong>Lưu ý Kỹ sư:</strong> Sau sự cố, engine phát lại log và dựng lại đúng trạng thái nó đã hứa, sửa luôn các trang rách trên đường đi. Log là sự thật; các trang chỉ là bản tóm tắt tiện lợi của nó.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Log first)",
          "body": "Nắm vững nguyên lý Ghi lại trước: write-ahead log để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-2-1",
            "label": "CRASHSAFE",
            "value": "yes",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-2-2",
            "label": "WPS",
            "value": "5e3",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-2-3",
            "label": "DISKPATTERN",
            "value": "sequential log",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-2-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Ghi lại trước: write-ahead log"
          },
          {
            "id": "chk-2-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "storage-engines-step-4",
        "number": 4,
        "title": "How sure?",
        "category": "NGHIỆP VỤ BA",
        "categoryColor": "amber",
        "headline": "Tình huống: “đã lưu” chắc chắn đến đâu?",
        "bodyHtml": "<p>Ép log xuống đĩa mất một phần nhỏ của mili giây trên SSD, và mặc định xảy ra một lần mỗi giao dịch. Ở mức hàng nghìn commit mỗi giây, chính bước đó trở thành giới hạn.</p>\n<p><span class=\"term\">Group commit</span> helps for free: transactions that arrive in the same instant share a single fsync. Beyond that there is a dial. Most databases can sync on a timer instead — every 100 ms, or every second — multiplying throughput, and accepting that a crash loses the last moments of “saved” writes.</p>\n<div class=\"callout callout--warn\"><strong>Lưu ý Kỹ sư:</strong> Hãy biết núm của bạn đang ở đâu. Redis ở chế độ append-only mặc định đồng bộ mỗi giây một lần; PostgreSQL với <code>synchronous_commit = off</code> và MySQL với <code>innodb_flush_log_at_trx_commit = 2</code> đều có thể mất những khoảnh khắc cuối trước khi mất điện.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (How sure?)",
          "body": "Nắm vững nguyên lý Tình huống: “đã lưu” chắc chắn đến đâu? để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-3-1",
            "label": "CRASHSAFE",
            "value": "yes",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-3-2",
            "label": "WPS",
            "value": "4e4",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-3-3",
            "label": "DISKPATTERN",
            "value": "sequential log",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-3-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Tình huống: “đã lưu” chắc chắn đến đâu?"
          },
          {
            "id": "chk-3-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "storage-engines-step-5",
        "number": 5,
        "title": "Checkpoint",
        "category": "LÝ THUYẾT",
        "categoryColor": "emerald",
        "headline": "Log không thể lớn mãi",
        "bodyHtml": "<p>Left alone, the log would grow without limit, and recovering from a crash would mean replaying days of it. So every few minutes the engine takes a <span class=\"term\">checkpoint</span>: it copies all changed pages to the data file, notes “everything up to here is safely in the pages”, and throws the older log away.</p>\n<p>Khi đó việc hồi phục chỉ phát lại log được ghi từ checkpoint gần nhất: từ vài giây tới vài phút công việc.</p>\n<div class=\"callout callout--tip\"><strong>Lưu ý Kỹ sư:</strong> Checkpoint là một loạt ghi trang rải rác dồn dập. CSDL trải chúng ra theo thời gian; khi không theo kịp, bạn thấy nó thành những đợt độ trễ tăng vọt định kỳ.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Checkpoint)",
          "body": "Nắm vững nguyên lý Log không thể lớn mãi để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-4-1",
            "label": "CRASHSAFE",
            "value": "yes",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-4-2",
            "label": "WPS",
            "value": "4e4",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-4-3",
            "label": "DISKPATTERN",
            "value": "log + random pages",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-4-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Log không thể lớn mãi"
          },
          {
            "id": "chk-4-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "storage-engines-step-6",
        "number": 6,
        "title": "B-tree",
        "category": "LÝ THUYẾT",
        "categoryColor": "violet",
        "headline": "Engine kinh điển: trang và B-tree, cập nhật tại chỗ",
        "bodyHtml": "<p>Thứ ta vừa dựng chính là thiết kế bên trong PostgreSQL, MySQL (InnoDB), SQL Server và Oracle. Dữ liệu sống trong các trang kích thước cố định, được tìm qua <b>B-tree</b> (xem <em>Chỉ mục</em>); ở vài engine, chính bảng là một B-tree. Để đổi một dòng, engine tìm trang của nó và sửa trang đó <em>tại chỗ</em>, với log để an toàn.</p>\n<p>Nó xuất sắc khi đọc. Dòng nào cũng chỉ cách ba hoặc bốn lần đọc trang, thường lấy thẳng từ bộ nhớ, và các khóa kề nhau nằm trên các trang kề nhau, nên quét theo khoảng rất rẻ.</p>\n<div class=\"callout callout--insight\"><strong>Lưu ý Kỹ sư:</strong> Mỗi dòng một bản sao, ở một địa chỉ đã biết. Đó là điều làm việc đọc dễ đoán, và cũng là lý do mỗi lần ghi phải đi tìm địa chỉ đó.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (B-tree)",
          "body": "Nắm vững nguyên lý Engine kinh điển: trang và B-tree, cập nhật tại chỗ để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-5-1",
            "label": "TIẾN ĐỘ",
            "value": "Bước 6/13",
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
            "value": "Trung cấp",
            "level": "default",
            "iconName": "layers"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-5-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Engine kinh điển: trang và B-tree, cập nhật tại chỗ"
          },
          {
            "id": "chk-5-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "storage-engines-step-7",
        "number": 7,
        "title": "Firehose",
        "category": "BỐI CẢNH",
        "categoryColor": "rose",
        "headline": "Tình huống: vòi rồng lượt ghi",
        "bodyHtml": "<p>Giờ khối lượng công việc đổi khác: số đo cảm biến, tin nhắn chat, sự kiện nhấp chuột, 200.000 lượt ghi nhỏ mỗi giây, mỗi lượt cho một khóa khác. Mỗi lượt rơi vào một trang khác. Bộ nhớ đầy trang đã đổi, và rốt cuộc mỗi trang phải được ghi lại vào đúng chỗ của nó trên đĩa: cả một trang, cho vài byte thay đổi.</p>\n<p>Log theo kịp dễ dàng, vì nó tuần tự. <b>Ghi trang rải rác</b> thì không. Checkpoint tụt lại, và thông lượng ghi bị giới hạn bởi tốc độ ghi ngẫu nhiên của đĩa.</p>\n<div class=\"callout callout--warn\"><strong>Lưu ý Kỹ sư:</strong> Đây là <b>khuếch đại ghi</b> (write amplification): lưu 100 byte tốn một bản ghi log cộng một lần ghi trang 8 KB. Với khối lượng nặng về ghi, đĩa có thể rốt cuộc ghi gấp hàng chục lần số byte bạn thực sự lưu.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Firehose)",
          "body": "Nắm vững nguyên lý Tình huống: vòi rồng lượt ghi để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-6-1",
            "label": "CRASHSAFE",
            "value": "yes",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-6-2",
            "label": "WPS",
            "value": "40,000 of 200,000",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-6-3",
            "label": "DISKPATTERN",
            "value": "log + random pages",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-6-4",
            "label": "LOOKUPCOST",
            "value": "3–4 pages",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-6-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Tình huống: vòi rồng lượt ghi"
          },
          {
            "id": "chk-6-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "storage-engines-step-8",
        "number": 8,
        "title": "LSM-tree",
        "category": "THỰC THI",
        "categoryColor": "blue",
        "headline": "Không bao giờ sửa tại chỗ: LSM-tree",
        "bodyHtml": "<p>A different design drops the idea that each row has one home. A write goes to the log and into a sorted structure in memory, the <span class=\"term\">memtable</span>. That’s all — there is no page to find.</p>\n<p>When the memtable fills up it is written to disk in one go as an immutable, sorted file — an <span class=\"term\">SSTable</span> — and a fresh memtable starts. Every disk write is sequential. This is the <span class=\"term\">log-structured merge tree</span> (LSM): the design behind Cassandra, HBase, ScyllaDB and RocksDB, the engine many other databases embed.</p>\n<div class=\"callout callout--tip\"><strong>Lưu ý Kỹ sư:</strong> Một lần cập nhật chỉ là một mục mới hơn cùng khóa; một lần xóa là một dấu gọi là <b>tombstone</b> (bia mộ). Không gì đã nằm trên đĩa bị sửa đổi.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (LSM-tree)",
          "body": "Nắm vững nguyên lý Không bao giờ sửa tại chỗ: LSM-tree để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-7-1",
            "label": "CRASHSAFE",
            "value": "yes",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-7-2",
            "label": "WPS",
            "value": "2e5",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-7-3",
            "label": "DISKPATTERN",
            "value": "all sequential",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-7-4",
            "label": "LOOKUPCOST",
            "value": "?",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-7-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Không bao giờ sửa tại chỗ: LSM-tree"
          },
          {
            "id": "chk-7-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "storage-engines-step-9",
        "number": 9,
        "title": "Find a key",
        "category": "BỐI CẢNH",
        "categoryColor": "rose",
        "headline": "Tình huống: khóa của tôi ở đâu?",
        "bodyHtml": "<p>Giờ đọc mới là phần khó. Giá trị mới nhất của một khóa có thể ở memtable, hoặc ở bất kỳ SSTable nào. Kiểm tra từ mới đến cũ: một khóa được ghi lần cuối từ lâu, hoặc một khóa không hề tồn tại, sẽ tốn một lần tìm qua mọi tệp.</p>\n<p>Hai mẹo cứu việc đọc. Mỗi SSTable mang một <b>Bloom filter</b> (xem <em>Bộ nhớ đệm</em>) trả lời “chắc chắn không có trong tệp này” mà không chạm tới đĩa, và một chỉ mục nhỏ cho biết mỗi khoảng khóa bắt đầu ở đâu. Một lần tra điển hình khi đó chỉ đọc từ một tệp.</p>\n<div class=\"callout callout--insight\"><strong>Lưu ý Kỹ sư:</strong> B-tree trả giá lúc ghi để việc đọc đơn giản. LSM-tree giữ việc ghi đơn giản và trả giá lúc đọc. Mọi storage engine đều nằm đâu đó trên đường thẳng ấy.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Find a key)",
          "body": "Nắm vững nguyên lý Tình huống: khóa của tôi ở đâu? để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-8-1",
            "label": "TIẾN ĐỘ",
            "value": "Bước 9/13",
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
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Tình huống: khóa của tôi ở đâu?"
          },
          {
            "id": "chk-8-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "storage-engines-step-10",
        "number": 10,
        "title": "Compaction",
        "category": "LÝ THUYẾT",
        "categoryColor": "emerald",
        "headline": "Compaction: dọn dẹp ở chế độ nền",
        "bodyHtml": "<p>Tệp chất đống, và các tệp cũ đầy những giá trị đã bị ghi đè hoặc xóa từ lâu. Vì vậy một tiến trình nền liên tục <b>gộp</b> các SSTable: đọc vài tệp đã sắp xếp, ghi ra một tệp đã sắp xếp mới chỉ giữ giá trị mới nhất của mỗi khóa, rồi xóa các tệp đầu vào.</p>\n<p>This is <span class=\"term\">compaction</span>. It limits how many files a read has to consider, and gives the space back. It is also the price of the design: every byte is rewritten several times over its life, and compaction competes with live traffic for the disk.</p>\n<div class=\"callout callout--warn\"><strong>Lưu ý Kỹ sư:</strong> Nếu lượt ghi vượt mặt compaction, tệp chất đống, đọc chậm đi và đĩa đầy. Theo dõi phần compaction tồn đọng là quy tắc đầu tiên khi vận hành một CSDL LSM.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Compaction)",
          "body": "Nắm vững nguyên lý Compaction: dọn dẹp ở chế độ nền để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-9-1",
            "label": "TIẾN ĐỘ",
            "value": "Bước 10/13",
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
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Compaction: dọn dẹp ở chế độ nền"
          },
          {
            "id": "chk-9-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "storage-engines-step-11",
        "number": 11,
        "title": "Choosing",
        "category": "NGHIỆP VỤ BA",
        "categoryColor": "amber",
        "headline": "B-tree hay LSM?",
        "bodyHtml": "<div class=\"callout callout--insight\"><strong>Lưu ý Kỹ sư:</strong> Bạn hiếm khi chọn storage engine trực tiếp; bạn chọn một CSDL và thừa hưởng engine của nó. Biết engine nào nằm bên dưới giải thích phần lớn cách nó hành xử khi chịu tải.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Choosing)",
          "body": "Nắm vững nguyên lý B-tree hay LSM? để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-10-1",
            "label": "TIẾN ĐỘ",
            "value": "Bước 11/13",
            "level": "blue",
            "iconName": "activity"
          },
          {
            "id": "tel-10-2",
            "label": "TRẠNG THÁI",
            "value": "Sẵn sàng",
            "level": "good",
            "iconName": "check"
          },
          {
            "id": "tel-10-3",
            "label": "ĐỘ PHỨC TẠP",
            "value": "Trung cấp",
            "level": "default",
            "iconName": "layers"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-10-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: B-tree hay LSM?"
          },
          {
            "id": "chk-10-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "storage-engines-step-12",
        "number": 12,
        "title": "Columns",
        "category": "LÝ THUYẾT",
        "categoryColor": "violet",
        "headline": "Tình huống: dòng hay cột?",
        "bodyHtml": "<p>Thêm một trục nữa. Cả hai engine tới giờ đều giữ mỗi <b>dòng</b> cùng nhau, lý tưởng khi bạn lấy hay đổi trọn bản ghi. Nhưng một nhà phân tích hỏi <code>SELECT SUM(price) FROM orders</code> trên hai tỉ dòng, và kho theo dòng phải đọc cả 40 cột của mọi dòng chỉ để cộng một cột.</p>\n<p>A <span class=\"term\">column store</span> keeps each column in its own file. The query reads only <code>price</code> — a fortieth of the data — and because similar values sit side by side, it compresses several times over. That is how warehouses such as BigQuery, Snowflake, Redshift and ClickHouse scan billions of rows in seconds.</p>\n<div class=\"callout callout--tip\"><strong>Lưu ý Kỹ sư:</strong> Kho theo dòng phục vụ ứng dụng: rất nhiều lần đọc và ghi nhỏ. Kho theo cột phục vụ phân tích: vài lần quét khổng lồ. Đó là lý do dữ liệu được chép từ loại này sang loại kia: xem <em>Xử lý theo lô & luồng</em>.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Columns)",
          "body": "Nắm vững nguyên lý Tình huống: dòng hay cột? để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-11-1",
            "label": "CRASHSAFE",
            "value": "yes",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-11-2",
            "label": "LOOKUPCOST",
            "value": "scan: 1 of 40 columns",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-11-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Tình huống: dòng hay cột?"
          },
          {
            "id": "chk-11-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "storage-engines-step-13",
        "number": 13,
        "title": "Recap",
        "category": "TỐI ƯU",
        "categoryColor": "emerald",
        "headline": "Recap",
        "bodyHtml": "<div class=\"callout callout--next\"><strong>Lưu ý Kỹ sư:</strong> Tiếp theo: <b>Sao chép dữ liệu</b>: phải làm gì khi một server CSDL không gánh nổi mọi lần đọc, hoặc có thể chết.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Recap)",
          "body": "Nắm vững nguyên lý Recap để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-12-1",
            "label": "TIẾN ĐỘ",
            "value": "Bước 13/13",
            "level": "blue",
            "iconName": "activity"
          },
          {
            "id": "tel-12-2",
            "label": "TRẠNG THÁI",
            "value": "Sẵn sàng",
            "level": "good",
            "iconName": "check"
          },
          {
            "id": "tel-12-3",
            "label": "ĐỘ PHỨC TẠP",
            "value": "Trung cấp",
            "level": "default",
            "iconName": "layers"
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
    "id": "replication",
    "slug": "replication",
    "title": "Replication",
    "subtitle": "Replication · 12 phút thực chiến",
    "moduleCode": "03",
    "moduleTitle": "Dữ Liệu & Lưu Trữ Phân Tán (Data & Storage)",
    "durationMinutes": 12,
    "difficulty": "Cơ bản",
    "steps": [
      {
        "id": "replication-step-1",
        "number": 1,
        "title": "One DB",
        "category": "BỐI CẢNH",
        "categoryColor": "rose",
        "headline": "Một cơ sở dữ liệu làm mọi việc",
        "bodyHtml": "<p>Mọi lượt đọc và mọi lượt ghi đều đến một máy chủ cơ sở dữ liệu duy nhất. Nó bận 90%, và phần lớn là đọc: trang sản phẩm, hồ sơ, bảng tin.</p>\n<p>Nó cũng là điểm lỗi duy nhất: nó chết thì mọi thứ chết theo.</p>\n<div class=\"callout callout--insight\"><strong>Lưu ý Kỹ sư:</strong> Hầu hết ứng dụng đọc nhiều hơn ghi rất nhiều: thường 10 hoặc 100 lượt đọc cho mỗi lượt ghi.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (One DB)",
          "body": "Nắm vững nguyên lý Một cơ sở dữ liệu làm mọi việc để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-0-1",
            "label": "DBLOAD",
            "value": "90",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-0-2",
            "label": "READS",
            "value": "1×",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-0-3",
            "label": "WRITES",
            "value": "ok",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-0-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Một cơ sở dữ liệu làm mọi việc"
          },
          {
            "id": "chk-0-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "replication-step-2",
        "number": 2,
        "title": "Copies",
        "category": "THỰC THI",
        "categoryColor": "blue",
        "headline": "Giữ bản sao: leader và follower",
        "bodyHtml": "<p>Add two <span class=\"term\">followers</span> (replicas). The <span class=\"term\">leader</span> still takes every write, and streams each change to the followers through a replication log.</p>\n<p>Mỗi follower phát lại các thay đổi và cuối cùng có cùng dữ liệu.</p>\n<div class=\"callout callout--tip\"><strong>Lưu ý Kỹ sư:</strong> Còn gọi là primary/replica hay master/slave. Có sẵn trong PostgreSQL, MySQL, MongoDB và hầu hết các hệ khác.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Copies)",
          "body": "Nắm vững nguyên lý Giữ bản sao: leader và follower để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-1-1",
            "label": "DBLOAD",
            "value": "90",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-1-2",
            "label": "READS",
            "value": "1×",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-1-3",
            "label": "LAG",
            "value": "0 s",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-1-4",
            "label": "WRITES",
            "value": "ok",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-1-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Giữ bản sao: leader và follower"
          },
          {
            "id": "chk-1-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "replication-step-3",
        "number": 3,
        "title": "Read replicas",
        "category": "THỰC THI",
        "categoryColor": "blue",
        "headline": "Gửi lượt đọc tới follower",
        "bodyHtml": "<p>Giờ ứng dụng gửi <b>lượt đọc</b> tới các follower và chỉ gửi <b>lượt ghi</b> tới leader. Năng lực đọc tăng gấp đôi (hai máy giờ chỉ làm việc đọc), và leader hạ nhiệt xuống 30%.</p>\n<p>Cần đọc nhiều hơn? Thêm một follower nữa.</p>\n<div class=\"callout callout--tip\"><strong>Lưu ý Kỹ sư:</strong> Cách này tuyệt vời với ứng dụng đọc nhiều. Nó không giúp ứng dụng ghi nhiều: mọi lượt ghi vẫn đi qua một leader.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Read replicas)",
          "body": "Nắm vững nguyên lý Gửi lượt đọc tới follower để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-2-1",
            "label": "DBLOAD",
            "value": "30",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-2-2",
            "label": "READS",
            "value": "2×",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-2-3",
            "label": "LAG",
            "value": "0 s",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-2-4",
            "label": "WRITES",
            "value": "ok",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-2-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Gửi lượt đọc tới follower"
          },
          {
            "id": "chk-2-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "replication-step-4",
        "number": 4,
        "title": "Lag",
        "category": "BỐI CẢNH",
        "categoryColor": "rose",
        "headline": "Bản sao bị tụt lại",
        "bodyHtml": "<p>Replication is usually <span class=\"term\">asynchronous</span>: the leader confirms a write right away and ships it to followers a moment later.</p>\n<p>Alice đổi tên, rồi tải lại hồ sơ. Lượt đọc rơi vào một follower chưa bắt kịp: cô thấy tên <b>cũ</b> và nghĩ việc lưu đã thất bại.</p>\n<div class=\"callout callout--warn\"><strong>Lưu ý Kỹ sư:</strong> Độ trễ thường chỉ vài mili giây, nhưng khi tải nặng có thể lên tới vài giây hoặc vài phút.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Lag)",
          "body": "Nắm vững nguyên lý Bản sao bị tụt lại để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-3-1",
            "label": "DBLOAD",
            "value": "30",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-3-2",
            "label": "READS",
            "value": "2×",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-3-3",
            "label": "LAG",
            "value": "2 s",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-3-4",
            "label": "WRITES",
            "value": "ok",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-3-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Bản sao bị tụt lại"
          },
          {
            "id": "chk-3-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "replication-step-5",
        "number": 5,
        "title": "Read your writes",
        "category": "LÝ THUYẾT",
        "categoryColor": "emerald",
        "headline": "Đọc được chính thứ mình ghi",
        "bodyHtml": "<p>Một cách sửa phổ biến: trong vài giây sau khi ai đó ghi, gửi lượt đọc <em>của người đó</em> tới leader. Mọi người khác vẫn dùng follower.</p>\n<p>The other option is <span class=\"term\">synchronous</span> replication: the leader waits for a follower to confirm before saying “saved”. No lag — but slower writes, and they stall if that follower is down.</p>\n<div class=\"callout callout--tip\"><strong>Lưu ý Kỹ sư:</strong> Với dữ liệu không thể để mất, cách bố trí phổ biến là một follower đồng bộ (cho an toàn) và phần còn lại bất đồng bộ (cho tốc độ). Nhiều hệ thống vẫn hoàn toàn bất đồng bộ và chấp nhận mất những lượt ghi cuối cùng khi sập.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Read your writes)",
          "body": "Nắm vững nguyên lý Đọc được chính thứ mình ghi để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-4-1",
            "label": "DBLOAD",
            "value": "32",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-4-2",
            "label": "READS",
            "value": "2×",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-4-3",
            "label": "LAG",
            "value": "2 s",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-4-4",
            "label": "WRITES",
            "value": "ok",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-4-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Đọc được chính thứ mình ghi"
          },
          {
            "id": "chk-4-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "replication-step-6",
        "number": 6,
        "title": "Leader dies",
        "category": "BỐI CẢNH",
        "categoryColor": "rose",
        "headline": "Leader chết",
        "bodyHtml": "<p>Leader sập. Lượt đọc vẫn chạy (các follower vẫn có dữ liệu), nhưng giờ mọi lượt ghi đều lỗi. Không ai đăng ký, đăng bài hay thanh toán được.</p>\n<div class=\"callout callout--warn\"><strong>Lưu ý Kỹ sư:</strong> Follower bảo vệ lượt đọc. Lượt ghi cần một leader mới.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Leader dies)",
          "body": "Nắm vững nguyên lý Leader chết để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-5-1",
            "label": "DBLOAD",
            "value": "0",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-5-2",
            "label": "READS",
            "value": "2×",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-5-3",
            "label": "WRITES",
            "value": "failing",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-5-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Leader chết"
          },
          {
            "id": "chk-5-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "replication-step-7",
        "number": 7,
        "title": "Failover",
        "category": "THỰC THI",
        "categoryColor": "blue",
        "headline": "Failover: thăng cấp một follower",
        "bodyHtml": "<p><span class=\"term\">Failover</span>: the most up-to-date follower is promoted to leader, the app points its writes there, and the other follower replicates from it. A fresh follower is added to restore the spare.</p>\n<p>Lượt ghi trở lại sau vài giây đến một phút. Những lượt ghi leader cũ chưa kịp gửi có thể bị mất: thêm một lý do để giữ một follower đồng bộ.</p>\n<p>The hard part is being <em>sure</em> the leader is dead. If it was only slow or cut off, you now have two leaders both accepting writes — <span class=\"term\">split brain</span>. Doing this safely takes a majority vote: see <em>Consensus &amp; Leader Election</em>.</p>\n<div class=\"callout callout--insight\"><strong>Lưu ý Kỹ sư:</strong> Cùng ý tưởng với bộ cân bằng tải dự phòng: một bản thay thế sẵn sàng tiếp quản. Cơ sở dữ liệu được quản lý tự động hóa việc này.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Failover)",
          "body": "Nắm vững nguyên lý Failover: thăng cấp một follower để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-6-1",
            "label": "DBLOAD",
            "value": "30",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-6-2",
            "label": "READS",
            "value": "2×",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-6-3",
            "label": "LAG",
            "value": "0 s",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-6-4",
            "label": "WRITES",
            "value": "ok",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-6-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Failover: thăng cấp một follower"
          },
          {
            "id": "chk-6-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "replication-step-8",
        "number": 8,
        "title": "Reports",
        "category": "BỐI CẢNH",
        "categoryColor": "rose",
        "headline": "Tình huống: báo cáo 20 phút",
        "bodyHtml": "<p>Đội tài chính chạy báo cáo hằng tháng: một truy vấn 20 phút quét đơn hàng của nhiều năm. Họ trỏ nó vào một follower, và follower đó, vốn cũng phục vụ lượt đọc của ứng dụng, gần như đứng hình và tụt lại vài phút.</p>\n<p>Cách sửa: một <b>bản sao phân tích</b> riêng mà ứng dụng không bao giờ đọc. Ở đó truy vấn nặng muốn chậm bao nhiêu cũng được.</p>\n<div class=\"callout callout--tip\"><strong>Lưu ý Kỹ sư:</strong> Ở quy mô lớn hơn, sao chép dữ liệu sang một kho dữ liệu phân tích riêng (BigQuery, Snowflake, Redshift) được xây cho những lần quét khổng lồ.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Reports)",
          "body": "Nắm vững nguyên lý Tình huống: báo cáo 20 phút để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-7-1",
            "label": "DBLOAD",
            "value": "30",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-7-2",
            "label": "READS",
            "value": "2×",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-7-3",
            "label": "LAG",
            "value": "0 s",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-7-4",
            "label": "WRITES",
            "value": "ok",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-7-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Tình huống: báo cáo 20 phút"
          },
          {
            "id": "chk-7-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "replication-step-9",
        "number": 9,
        "title": "Not a backup",
        "category": "BỐI CẢNH",
        "categoryColor": "rose",
        "headline": "Tình huống: migration thiếu WHERE",
        "bodyHtml": "<p>Một lần deploy chạy migration thiếu <code>WHERE</code>: <code>UPDATE users SET email = NULL</code>. Leader làm theo, và việc sao chép trung thành chép lỗi đó sang mọi follower trong một giây.</p>\n<p>Replicas protect you from a <em>machine</em> failing, not from a bad write. For that you need <span class=\"term\">backups</span>: a nightly snapshot plus the archived write log, which together can rebuild the database as it was at any chosen moment — <span class=\"term\">point-in-time recovery</span>.</p>\n<div class=\"callout callout--warn\"><strong>Lưu ý Kỹ sư:</strong> Bản sao lưu chưa từng được khôi phục là một niềm hy vọng, không phải bản sao lưu. Hãy diễn tập khôi phục, và biết một lần mất bao lâu.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Not a backup)",
          "body": "Nắm vững nguyên lý Tình huống: migration thiếu WHERE để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-8-1",
            "label": "DBLOAD",
            "value": "30",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-8-2",
            "label": "READS",
            "value": "2×",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-8-3",
            "label": "LAG",
            "value": "0 s",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-8-4",
            "label": "WRITES",
            "value": "ok",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-8-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Tình huống: migration thiếu WHERE"
          },
          {
            "id": "chk-8-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "replication-step-10",
        "number": 10,
        "title": "Styles",
        "category": "LÝ THUYẾT",
        "categoryColor": "violet",
        "headline": "Ba cách sao chép",
        "bodyHtml": "<p>Mọi thứ đến giờ là <b>một leader</b>: một người ghi, nhiều người đọc. Nó đơn giản, và là cách hầu hết cơ sở dữ liệu SQL làm.</p>\n<p><b>Nhiều leader</b> đặt một leader ở mỗi vùng để lượt ghi diễn ra tại chỗ, với cái giá là xung đột khi hai vùng sửa cùng một dòng. Các hệ <b>không leader</b> (Cassandra, Riak, ScyllaDB, những cơ sở dữ liệu “kiểu Dynamo”) ghi vào nhiều bản sao cùng lúc và đọc từ nhiều bản: chính là quorum trong bài về CAP.</p>\n<div class=\"callout callout--insight\"><strong>Lưu ý Kỹ sư:</strong> Hãy ưu tiên một leader cho tới khi bạn có lý do cụ thể (ghi toàn cầu, độ sẵn sàng cực cao) để gánh việc xử lý xung đột.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Styles)",
          "body": "Nắm vững nguyên lý Ba cách sao chép để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-9-1",
            "label": "DBLOAD",
            "value": "30",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-9-2",
            "label": "READS",
            "value": "2×",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-9-3",
            "label": "LAG",
            "value": "0 s",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-9-4",
            "label": "WRITES",
            "value": "ok",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-9-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Ba cách sao chép"
          },
          {
            "id": "chk-9-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "replication-step-11",
        "number": 11,
        "title": "Recap",
        "category": "TỐI ƯU",
        "categoryColor": "emerald",
        "headline": "Recap",
        "bodyHtml": "<div class=\"callout callout--next\"><strong>Lưu ý Kỹ sư:</strong> Tiếp theo: <b>Sharding</b>, khi ngay cả leader cũng không theo kịp lượt ghi.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Recap)",
          "body": "Nắm vững nguyên lý Recap để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-10-1",
            "label": "DBLOAD",
            "value": "30",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-10-2",
            "label": "READS",
            "value": "2×",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-10-3",
            "label": "LAG",
            "value": "0 s",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-10-4",
            "label": "WRITES",
            "value": "ok",
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
    "id": "sharding",
    "slug": "sharding",
    "title": "Sharding",
    "subtitle": "Sharding · 11 phút thực chiến",
    "moduleCode": "03",
    "moduleTitle": "Dữ Liệu & Lưu Trữ Phân Tán (Data & Storage)",
    "durationMinutes": 11,
    "difficulty": "Trung cấp",
    "steps": [
      {
        "id": "sharding-step-1",
        "number": 1,
        "title": "Too big",
        "category": "BỐI CẢNH",
        "categoryColor": "rose",
        "headline": "Quá lớn cho một máy",
        "bodyHtml": "<p>Cơ sở dữ liệu người dùng đã lên tới 20 TB và nhận 40.000 lượt ghi mỗi giây. Follower sẽ giúp phần đọc, nhưng mọi lượt <b>ghi</b> vẫn phải đi qua một leader, và toàn bộ dữ liệu phải vừa trên ổ đĩa của nó.</p>\n<p>Bạn đã ở trên máy lớn nhất rồi, và mỗi lần sao lưu, khôi phục hay tạo bản sao mới giờ mất gần trọn một ngày để chép.</p>\n<div class=\"callout callout--warn\"><strong>Lưu ý Kỹ sư:</strong> Sao chép dữ liệu chép toàn bộ dữ liệu đi khắp nơi. Muốn mở rộng lượt ghi và dung lượng, chính dữ liệu phải được chia ra.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Too big)",
          "body": "Nắm vững nguyên lý Quá lớn cho một máy để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-0-1",
            "label": "SHARDS",
            "value": "1",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-0-2",
            "label": "PERSHARD",
            "value": "4e4",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-0-3",
            "label": "HOTTEST",
            "value": "100",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-0-4",
            "label": "SIZE",
            "value": "20 TB",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-0-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Quá lớn cho một máy"
          },
          {
            "id": "chk-0-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "sharding-step-2",
        "number": 2,
        "title": "Split by range",
        "category": "THỰC THI",
        "categoryColor": "blue",
        "headline": "Chia dữ liệu: sharding",
        "bodyHtml": "<p><span class=\"term\">Sharding</span> splits one big database into several smaller ones — <b>shards</b> — each holding part of the data and taking part of the writes.</p>\n<p>A <span class=\"term\">shard key</span> decides where each row lives. Here: by user id range. The app (or a router) looks up the range and sends each query to the right shard.</p>\n<div class=\"callout callout--tip\"><strong>Lưu ý Kỹ sư:</strong> Mỗi shard thường cũng được sao chép: shard mở rộng lượt ghi, còn follower trong một shard mở rộng lượt đọc và sống sót qua sự cố.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Split by range)",
          "body": "Nắm vững nguyên lý Chia dữ liệu: sharding để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-1-1",
            "label": "SHARDS",
            "value": "4",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-1-2",
            "label": "PERSHARD",
            "value": "1e4",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-1-3",
            "label": "HOTTEST",
            "value": "25",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-1-4",
            "label": "SIZE",
            "value": "5 TB",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-1-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Chia dữ liệu: sharding"
          },
          {
            "id": "chk-1-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "sharding-step-3",
        "number": 3,
        "title": "Hot spot",
        "category": "BỐI CẢNH",
        "categoryColor": "rose",
        "headline": "Chia theo khoảng tạo ra điểm nóng",
        "bodyHtml": "<p>Id người dùng tăng dần theo thời gian, nên mọi lượt đăng ký mới đều rơi vào khoảng cuối. Người dùng mới cũng là người năng động nhất: shard D gánh phần lớn lượt ghi trong khi A gần như ngồi không.</p>\n<p>Chuyện tương tự xảy ra với ngày tháng hay tên theo thứ tự chữ cái: dữ liệu đến theo thứ tự sẽ dồn vào một shard.</p>\n<p>Các cơ sở dữ liệu phân vùng theo khoảng (Bigtable, HBase, CockroachDB) giảm nhẹ chuyện này bằng cách tự động chẻ đôi một khoảng bận rộn, nhưng những lượt ghi luôn rơi vào “cuối” thì vẫn cứ theo khoảng cuối cùng.</p>\n<div class=\"callout callout--warn\"><strong>Lưu ý Kỹ sư:</strong> Khóa shard phải trải đều cả dữ liệu lẫn lưu lượng.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Hot spot)",
          "body": "Nắm vững nguyên lý Chia theo khoảng tạo ra điểm nóng để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-2-1",
            "label": "SHARDS",
            "value": "4",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-2-2",
            "label": "PERSHARD",
            "value": "uneven",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-2-3",
            "label": "HOTTEST",
            "value": "78",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-2-4",
            "label": "SIZE",
            "value": "5 TB",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-2-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Chia theo khoảng tạo ra điểm nóng"
          },
          {
            "id": "chk-2-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "sharding-step-4",
        "number": 4,
        "title": "Hash it",
        "category": "THỰC THI",
        "categoryColor": "blue",
        "headline": "Băm khóa",
        "bodyHtml": "<p>Thay vì chia khoảng, hãy đưa khóa qua một hàm băm và lấy phần dư: <code>shard = hash(user_id) % 4</code>.</p>\n<p>Các id liên tiếp tản ra các shard không liên quan, nên người dùng mới, cùng lưu lượng của họ, được trải đều.</p>\n<div class=\"callout callout--tip\"><strong>Lưu ý Kỹ sư:</strong> Băm làm mất truy vấn theo khoảng (“mọi người dùng có id 1–1000” giờ chạm vào mọi shard). Thường là một sự đánh đổi đáng giá.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Hash it)",
          "body": "Nắm vững nguyên lý Băm khóa để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-3-1",
            "label": "SHARDS",
            "value": "4",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-3-2",
            "label": "PERSHARD",
            "value": "1e4",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-3-3",
            "label": "HOTTEST",
            "value": "25",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-3-4",
            "label": "SIZE",
            "value": "5 TB",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-3-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Băm khóa"
          },
          {
            "id": "chk-3-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "sharding-step-5",
        "number": 5,
        "title": "Celebrity",
        "category": "BỐI CẢNH",
        "categoryColor": "rose",
        "headline": "Tình huống: người nổi tiếng",
        "bodyHtml": "<p>Băm trải đều các <em>khóa</em>, không phải lưu lượng. Một ngôi sao nhạc pop có 50 triệu người theo dõi cũng nằm trên shard C như bao người khác, và mọi lượt xem hồ sơ, mọi lượt thích bài đăng của ngôi sao ấy đều đổ về đó.</p>\n<p>Shard C is melting while A, B and D are fine. This is a <span class=\"term\">hot key</span>, sometimes called the celebrity problem.</p>\n<div class=\"callout callout--warn\"><strong>Lưu ý Kỹ sư:</strong> Không khóa shard nào giải quyết được một khóa duy nhất phổ biến hơn mức một máy chịu nổi.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Celebrity)",
          "body": "Nắm vững nguyên lý Tình huống: người nổi tiếng để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-4-1",
            "label": "SHARDS",
            "value": "4",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-4-2",
            "label": "PERSHARD",
            "value": "uneven",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-4-3",
            "label": "HOTTEST",
            "value": "70",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-4-4",
            "label": "SIZE",
            "value": "5 TB",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-4-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Tình huống: người nổi tiếng"
          },
          {
            "id": "chk-4-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "sharding-step-6",
        "number": 6,
        "title": "Split key",
        "category": "THỰC THI",
        "categoryColor": "blue",
        "headline": "Đưa vào cache, hoặc chia nhỏ",
        "bodyHtml": "<p>Với khóa nóng khi <b>đọc</b>, đặt nó vào cache (hoặc nhiều bản sao cache) trước shard: hầu hết lượt xem hồ sơ không bao giờ tới được shard.</p>\n<p>Với khóa nóng khi <b>ghi</b>, như bộ đếm lượt thích của ngôi sao, hãy chia nhỏ: ghi ngẫu nhiên vào <code>likes:42#0</code> … <code>likes:42#7</code>, trải ra các shard, rồi cộng lại khi đọc.</p>\n<div class=\"callout callout--tip\"><strong>Lưu ý Kỹ sư:</strong> Các hệ thống đối mặt chuyện này hằng ngày (mạng xã hội, bán vé) xử lý riêng những khóa nóng nhất: phát hiện tự động, xử lý có chủ đích.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Split key)",
          "body": "Nắm vững nguyên lý Đưa vào cache, hoặc chia nhỏ để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-5-1",
            "label": "SHARDS",
            "value": "4",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-5-2",
            "label": "PERSHARD",
            "value": "1e4",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-5-3",
            "label": "HOTTEST",
            "value": "27",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-5-4",
            "label": "SIZE",
            "value": "5 TB",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-5-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Đưa vào cache, hoặc chia nhỏ"
          },
          {
            "id": "chk-5-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "sharding-step-7",
        "number": 7,
        "title": "Cross-shard",
        "category": "NGHIỆP VỤ BA",
        "categoryColor": "amber",
        "headline": "Truy vấn trải qua mọi shard",
        "bodyHtml": "<p>Tra một người dùng thì nhanh: băm id, hỏi một shard. Nhưng “10 người dùng nhiều người theo dõi nhất” không gắn với khóa người dùng: ứng dụng phải hỏi <b>mọi</b> shard rồi gộp các câu trả lời.</p>\n<p>These <span class=\"term\">scatter–gather</span> queries are as slow as the slowest shard, and joins across shards are hard.</p>\n<div class=\"callout callout--warn\"><strong>Lưu ý Kỹ sư:</strong> Hãy chọn khóa shard khớp với các truy vấn quan trọng nhất: lý tưởng là chúng chỉ chạm vào một shard.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Cross-shard)",
          "body": "Nắm vững nguyên lý Truy vấn trải qua mọi shard để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-6-1",
            "label": "SHARDS",
            "value": "4",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-6-2",
            "label": "PERSHARD",
            "value": "1e4",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-6-3",
            "label": "HOTTEST",
            "value": "25",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-6-4",
            "label": "SIZE",
            "value": "5 TB",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-6-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Truy vấn trải qua mọi shard"
          },
          {
            "id": "chk-6-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "sharding-step-8",
        "number": 8,
        "title": "Add a shard",
        "category": "BỐI CẢNH",
        "categoryColor": "rose",
        "headline": "Thêm một shard làm dời gần như mọi thứ",
        "bodyHtml": "<p>Các shard đầy dần, nên bạn thêm cái thứ năm. Nhưng <code>hash % 4</code> thành <code>hash % 5</code>, và với khoảng <b>80%</b> người dùng, phần dư thay đổi.</p>\n<p>Hàng terabyte phải di chuyển giữa các shard trong khi hệ thống vẫn phục vụ lưu lượng.</p>\n<div class=\"callout callout--warn\"><strong>Lưu ý Kỹ sư:</strong> Với hash % N, đổi N là xáo trộn gần như mọi khóa. Bài tiếp theo sửa đúng chuyện này.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Add a shard)",
          "body": "Nắm vững nguyên lý Thêm một shard làm dời gần như mọi thứ để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-7-1",
            "label": "SHARDS",
            "value": "5",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-7-2",
            "label": "PERSHARD",
            "value": "8e3",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-7-3",
            "label": "HOTTEST",
            "value": "20",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-7-4",
            "label": "SIZE",
            "value": "4 TB",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-7-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Thêm một shard làm dời gần như mọi thứ"
          },
          {
            "id": "chk-7-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "sharding-step-9",
        "number": 9,
        "title": "Recap",
        "category": "TỐI ƯU",
        "categoryColor": "emerald",
        "headline": "Recap",
        "bodyHtml": "<div class=\"callout callout--next\"><strong>Lưu ý Kỹ sư:</strong> Tiếp theo: <b>Consistent hashing</b>: thêm hoặc bớt một shard mà chỉ dời một phần nhỏ khóa.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Recap)",
          "body": "Nắm vững nguyên lý Recap để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-8-1",
            "label": "SHARDS",
            "value": "4",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-8-2",
            "label": "PERSHARD",
            "value": "1e4",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-8-3",
            "label": "HOTTEST",
            "value": "25",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-8-4",
            "label": "SIZE",
            "value": "5 TB",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-8-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Recap"
          },
          {
            "id": "chk-8-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Hoàn Tất Bài Học"
      }
    ]
  },
  {
    "id": "consistent-hashing",
    "slug": "consistent-hashing",
    "title": "Consistent hashing",
    "subtitle": "Consistent Hashing · 10 phút thực chiến",
    "moduleCode": "03",
    "moduleTitle": "Dữ Liệu & Lưu Trữ Phân Tán (Data & Storage)",
    "durationMinutes": 10,
    "difficulty": "Trung cấp",
    "steps": [
      {
        "id": "consistent-hashing-step-1",
        "number": 1,
        "title": "The problem",
        "category": "BỐI CẢNH",
        "categoryColor": "rose",
        "headline": "hash % N hỏng khi N thay đổi",
        "bodyHtml": "<p>Bài trước kết thúc không vui: với <code>shard = hash(key) % N</code>, đi từ 4 lên 5 shard làm đổi kết quả cho khoảng 80% số khóa. Gần như mọi dữ liệu phải dời.</p>\n<p>Ta muốn một cách mà khi thêm máy chủ chỉ dời những khóa máy đó cần tiếp nhận: khoảng 1/N trong số đó.</p>\n<div class=\"callout callout--insight\"><strong>Lưu ý Kỹ sư:</strong> Mẹo là thôi hẳn việc buộc vị trí vào N.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (The problem)",
          "body": "Nắm vững nguyên lý hash % N hỏng khi N thay đổi để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-0-1",
            "label": "NODES",
            "value": "4",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-0-2",
            "label": "MOVED",
            "value": "80%",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-0-3",
            "label": "MAXSHARE",
            "value": "25",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-0-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: hash % N hỏng khi N thay đổi"
          },
          {
            "id": "chk-0-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "consistent-hashing-step-2",
        "number": 2,
        "title": "The ring",
        "category": "LÝ THUYẾT",
        "categoryColor": "emerald",
        "headline": "Uốn không gian hash thành một vòng",
        "bodyHtml": "<p>Hash values run from 0 to 2³². Join the ends and you get a <span class=\"term\">ring</span>.</p>\n<p>Giờ băm cả tên của từng <b>máy chủ</b> và đặt nó lên vòng ở điểm đó. Các máy chủ trượt tới bất cứ đâu hash đặt chúng: không cách đều, chỉ là nơi hash rơi vào.</p>\n<div class=\"callout callout--tip\"><strong>Lưu ý Kỹ sư:</strong> Không gì ở đây phụ thuộc vào số máy chủ. Đó chính là cốt lõi.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (The ring)",
          "body": "Nắm vững nguyên lý Uốn không gian hash thành một vòng để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-1-1",
            "label": "NODES",
            "value": "4",
            "level": "blue",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-1-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Uốn không gian hash thành một vòng"
          },
          {
            "id": "chk-1-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "consistent-hashing-step-3",
        "number": 3,
        "title": "Keys",
        "category": "LÝ THUYẾT",
        "categoryColor": "emerald",
        "headline": "Mỗi khóa đi theo chiều kim đồng hồ",
        "bodyHtml": "<p>Băm cả từng <b>khóa</b> lên vòng. Một khóa thuộc về <b>máy chủ đầu tiên theo chiều kim đồng hồ</b> tính từ nó. Các cung màu cho thấy máy chủ nào sở hữu đoạn nào; mỗi chấm là một khóa, tô màu theo chủ của nó.</p>\n<p>Xem một lượt tra cứu đi theo chiều kim đồng hồ từ một khóa tới máy chủ của nó.</p>\n<div class=\"callout callout--insight\"><strong>Lưu ý Kỹ sư:</strong> Để tìm máy chủ của một khóa: băm khóa, đi theo chiều kim đồng hồ, dừng ở máy chủ đầu tiên. Client làm việc này bằng một danh sách đã sắp xếp và tìm kiếm nhị phân.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Keys)",
          "body": "Nắm vững nguyên lý Mỗi khóa đi theo chiều kim đồng hồ để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-2-1",
            "label": "NODES",
            "value": "4",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-2-2",
            "label": "MAXSHARE",
            "value": "Hi",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-2-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Mỗi khóa đi theo chiều kim đồng hồ"
          },
          {
            "id": "chk-2-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "consistent-hashing-step-4",
        "number": 4,
        "title": "Add a server",
        "category": "THỰC THI",
        "categoryColor": "blue",
        "headline": "Thêm một máy chủ chỉ dời một cung",
        "bodyHtml": "<p>Máy chủ E tham gia tại vị trí hash của nó, giữa C và B. Nó chỉ tiếp nhận các khóa trong cung ngay trước nó theo chiều ngược kim đồng hồ: những khóa trước đây đi ngang qua nó để tới C.</p>\n<p>Mọi khóa khác ở yên đúng chỗ cũ. Các khóa đang nhấp nháy là những khóa duy nhất phải dời.</p>\n<div class=\"callout callout--tip\"><strong>Lưu ý Kỹ sư:</strong> Thêm máy chủ thứ 5 dời khoảng 1/5 số khóa: mức tối thiểu có thể.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Add a server)",
          "body": "Nắm vững nguyên lý Thêm một máy chủ chỉ dời một cung để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-3-1",
            "label": "NODES",
            "value": "5",
            "level": "blue",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-3-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Thêm một máy chủ chỉ dời một cung"
          },
          {
            "id": "chk-3-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "consistent-hashing-step-5",
        "number": 5,
        "title": "Remove one",
        "category": "LÝ THUYẾT",
        "categoryColor": "emerald",
        "headline": "Bớt một máy chủ cũng chỉ dời một cung",
        "bodyHtml": "<p>Quay lại bốn máy chủ, và giờ C chết. Các khóa của nó chỉ việc đi tiếp theo chiều kim đồng hồ tới máy chủ kế, D. Không ai khác bị ảnh hưởng.</p>\n<p>So với <code>% N</code>, nơi mất một máy chủ sẽ xáo trộn gần như mọi thứ.</p>\n<div class=\"callout callout--insight\"><strong>Lưu ý Kỹ sư:</strong> Dynamo của Amazon, Cassandra cùng nhiều cache và CDN đặt dữ liệu theo cách này. Những họ hàng gần, rendezvous hashing và jump hashing, đạt cùng kết quả mà không cần vòng.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Remove one)",
          "body": "Nắm vững nguyên lý Bớt một máy chủ cũng chỉ dời một cung để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-4-1",
            "label": "NODES",
            "value": "3",
            "level": "blue",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-4-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Bớt một máy chủ cũng chỉ dời một cung"
          },
          {
            "id": "chk-4-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "consistent-hashing-step-6",
        "number": 6,
        "title": "Uneven",
        "category": "BỐI CẢNH",
        "categoryColor": "rose",
        "headline": "Vị trí ngẫu nhiên, cung không đều",
        "bodyHtml": "<p>Máy chủ rơi vào bất cứ đâu hash đặt chúng, nên các cung không đều. Khi không còn C, D giờ sở hữu một đoạn vòng khổng lồ, và nhận nhiều khóa và lưu lượng hơn hẳn A hay B.</p>\n<p>Với chỉ vài máy chủ, riêng may rủi cũng có thể khiến một máy làm gấp đôi máy khác.</p>\n<div class=\"callout callout--warn\"><strong>Lưu ý Kỹ sư:</strong> Cung không đều nghĩa là tải không đều: đúng cái điểm nóng mà sharding muốn tránh.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Uneven)",
          "body": "Nắm vững nguyên lý Vị trí ngẫu nhiên, cung không đều để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-5-1",
            "label": "NODES",
            "value": "3",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-5-2",
            "label": "MAXSHARE",
            "value": "Hi",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-5-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Vị trí ngẫu nhiên, cung không đều"
          },
          {
            "id": "chk-5-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "consistent-hashing-step-7",
        "number": 7,
        "title": "Virtual nodes",
        "category": "THỰC THI",
        "categoryColor": "blue",
        "headline": "Nút ảo làm đều lại",
        "bodyHtml": "<p>Give each server several positions on the ring — <span class=\"term\">virtual nodes</span> (the diamonds) — by hashing <code>A#1</code>, <code>A#2</code>, … Each server now owns many small arcs instead of one big one.</p>\n<p>Các phần chia đều ra, và khi một máy chủ rời đi, khóa của nó tản ra <em>tất cả</em> các máy còn lại thay vì đổ dồn lên một hàng xóm.</p>\n<div class=\"callout callout--tip\"><strong>Lưu ý Kỹ sư:</strong> Hệ thống thực tế dùng từ 16 đến vài trăm nút ảo cho mỗi máy chủ. Máy chủ mạnh hơn có thể nhận nhiều hơn.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Virtual nodes)",
          "body": "Nắm vững nguyên lý Nút ảo làm đều lại để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-6-1",
            "label": "NODES",
            "value": "3",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-6-2",
            "label": "MAXSHARE",
            "value": "Hi",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-6-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Nút ảo làm đều lại"
          },
          {
            "id": "chk-6-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "consistent-hashing-step-8",
        "number": 8,
        "title": "Replicas",
        "category": "LÝ THUYẾT",
        "categoryColor": "emerald",
        "headline": "Bản sao trên các máy chủ kế tiếp theo chiều kim đồng hồ",
        "bodyHtml": "<p>Một bản cho mỗi khóa là không đủ: máy chủ chết sẽ mất dữ liệu. Vì vậy mỗi khóa được lưu trên <b>ba</b> máy chủ khác nhau đầu tiên theo chiều kim đồng hồ: chủ của nó cộng hai máy kế tiếp.</p>\n<p>Theo dõi khóa ở 160°: bản 1 trên A, bản 2 trên B, bản 3 trên C. Nếu A chết, B và C vẫn còn, và máy chủ kế tiếp tiếp nhận phần của A.</p>\n<div class=\"callout callout--tip\"><strong>Lưu ý Kỹ sư:</strong> Dynamo gọi đây là preference list (danh sách ưu tiên). Với nút ảo, hãy bỏ qua vị trí của máy chủ bạn đã chọn rồi.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Replicas)",
          "body": "Nắm vững nguyên lý Bản sao trên các máy chủ kế tiếp theo chiều kim đồng hồ để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-7-1",
            "label": "NODES",
            "value": "4",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-7-2",
            "label": "MAXSHARE",
            "value": "Hi",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-7-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Bản sao trên các máy chủ kế tiếp theo chiều kim đồng hồ"
          },
          {
            "id": "chk-7-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "consistent-hashing-step-9",
        "number": 9,
        "title": "Cache fleet",
        "category": "LÝ THUYẾT",
        "categoryColor": "violet",
        "headline": "Tình huống: mở rộng một cụm cache",
        "bodyHtml": "<p>Một đội máy chủ Memcached đứng trước cơ sở dữ liệu, và client chọn máy chủ bằng <code>hash(key) % N</code>. Thêm máy chủ thứ năm ánh xạ lại ~80% khóa: tất cả cùng trượt một lúc, và cơ sở dữ liệu bị cơn giẫm đạp đè bẹp.</p>\n<p>Với consistent hashing, thêm máy thứ năm chỉ dời ~20% khóa. Cache phần lớn vẫn ấm và cơ sở dữ liệu gần như không nhận ra.</p>\n<div class=\"callout callout--insight\"><strong>Lưu ý Kỹ sư:</strong> Đây là nơi consistent hashing ra đời: rải cache web lên những máy đến rồi đi.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Cache fleet)",
          "body": "Nắm vững nguyên lý Tình huống: mở rộng một cụm cache để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-8-1",
            "label": "NODES",
            "value": "5",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-8-2",
            "label": "MOVED",
            "value": "20%",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-8-3",
            "label": "MAXSHARE",
            "value": "Hi",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-8-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Tình huống: mở rộng một cụm cache"
          },
          {
            "id": "chk-8-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "consistent-hashing-step-10",
        "number": 10,
        "title": "Recap",
        "category": "TỐI ƯU",
        "categoryColor": "emerald",
        "headline": "Recap",
        "bodyHtml": "<div class=\"callout callout--next\"><strong>Lưu ý Kỹ sư:</strong> Tiếp theo: <b>ID duy nhất ở quy mô lớn</b>: đặt tên cho mọi dòng khi không còn một cơ sở dữ liệu duy nhất đếm hộ bạn.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Recap)",
          "body": "Nắm vững nguyên lý Recap để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-9-1",
            "label": "NODES",
            "value": "3",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-9-2",
            "label": "MAXSHARE",
            "value": "Hi",
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
    "id": "unique-ids",
    "slug": "unique-ids",
    "title": "ID duy nhất ở quy mô lớn",
    "subtitle": "Unique IDs at Scale · 13 phút thực chiến",
    "moduleCode": "03",
    "moduleTitle": "Dữ Liệu & Lưu Trữ Phân Tán (Data & Storage)",
    "durationMinutes": 13,
    "difficulty": "Trung cấp",
    "steps": [
      {
        "id": "unique-ids-step-1",
        "number": 1,
        "title": "One counter",
        "category": "BỐI CẢNH",
        "categoryColor": "blue",
        "headline": "Mỗi dòng cần một cái tên",
        "bodyHtml": "<p>Đơn hàng, người dùng, thanh toán: mỗi dòng cần một định danh <b>duy nhất</b>, mãi mãi. Bảng khác trỏ tới nó, URL chứa nó, nhân viên hỗ trợ đọc nó qua điện thoại.</p>\n<p>Với một cơ sở dữ liệu thì có sẵn miễn phí. Một cột <code>AUTO_INCREMENT</code> (hay <code>SERIAL</code>) phát ra 1001, 1002, 1003… và cơ sở dữ liệu bảo đảm không số nào được dùng hai lần.</p>\n<div class=\"callout callout--insight\"><strong>Lưu ý Kỹ sư:</strong> Bộ đếm cho bạn nhiều hơn tính duy nhất: id nhỏ, và sắp theo id cũng là sắp theo thời gian tạo. Hãy để ý mỗi phương án giữ lại món quà nào.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (One counter)",
          "body": "Nắm vững nguyên lý Mỗi dòng cần một cái tên để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-0-1",
            "label": "COLLIDE",
            "value": "no",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-0-2",
            "label": "IDSIZE",
            "value": "64 bits",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-0-3",
            "label": "SORTABLE",
            "value": "yes",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-0-4",
            "label": "IDDEP",
            "value": "one database",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-0-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Mỗi dòng cần một cái tên"
          },
          {
            "id": "chk-0-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "unique-ids-step-2",
        "number": 2,
        "title": "Shards collide",
        "category": "BỐI CẢNH",
        "categoryColor": "rose",
        "headline": "Hai shard, hai bộ đếm",
        "bodyHtml": "<p>Bảng đơn hàng được chia shard (xem <em>Sharding</em>). Mỗi shard là một cơ sở dữ liệu riêng với bộ đếm riêng, và cả hai vừa phát ra số <b>1004</b>.</p>\n<p>Hai đơn hàng khác nhau giờ dùng chung một id. Một liên kết tới <code>/orders/1004</code>, một mục cache, một khoản hoàn tiền: mỗi thứ đều có thể chỉ đơn này hoặc đơn kia. Và ngày bạn gộp hay chia lại shard, các dòng sẽ đụng nhau.</p>\n<div class=\"callout callout--warn\"><strong>Lưu ý Kỹ sư:</strong> Tính duy nhất phải đúng trên <em>toàn hệ thống</em>, không chỉ bên trong một máy.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Shards collide)",
          "body": "Nắm vững nguyên lý Hai shard, hai bộ đếm để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-1-1",
            "label": "COLLIDE",
            "value": "yes",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-1-2",
            "label": "IDSIZE",
            "value": "64 bits",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-1-3",
            "label": "SORTABLE",
            "value": "yes",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-1-4",
            "label": "IDDEP",
            "value": "each shard",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-1-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Hai shard, hai bộ đếm"
          },
          {
            "id": "chk-1-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "unique-ids-step-3",
        "number": 3,
        "title": "Ticket server",
        "category": "THỰC THI",
        "categoryColor": "blue",
        "headline": "Cách 1: một bộ đếm cho tất cả",
        "bodyHtml": "<p>Move the counter out of the shards into a small service whose only job is to hand out the next number: a <span class=\"term\">ticket server</span>. Before each insert, an app server asks it for an id.</p>\n<p>Tính duy nhất trở lại, và id vẫn xếp theo thời gian. Nhưng giờ mỗi lần chèn tốn thêm một lượt đi về, và nếu máy cấp số sập thì không ai tạo được gì.</p>\n<div class=\"callout callout--tip\"><strong>Lưu ý Kỹ sư:</strong> Flickr đã chạy hai máy cấp số trong nhiều năm, một máy phát số lẻ và máy kia phát số chẵn, để máy nào hỏng cũng không làm sập trang.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Ticket server)",
          "body": "Nắm vững nguyên lý Cách 1: một bộ đếm cho tất cả để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-2-1",
            "label": "COLLIDE",
            "value": "no",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-2-2",
            "label": "IDSIZE",
            "value": "64 bits",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-2-3",
            "label": "SORTABLE",
            "value": "yes",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-2-4",
            "label": "IDDEP",
            "value": "ticket server · every insert",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-2-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Cách 1: một bộ đếm cho tất cả"
          },
          {
            "id": "chk-2-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "unique-ids-step-4",
        "number": 4,
        "title": "Blocks",
        "category": "LÝ THUYẾT",
        "categoryColor": "emerald",
        "headline": "Phát theo khối, không phát lẻ từng số",
        "bodyHtml": "<p>Xin ít lần hơn. Mỗi máy chủ ứng dụng giữ trước cả một <b>khối</b>, chẳng hạn 1.000 id, trong một lần gọi và phát chúng từ bộ nhớ. Vậy là một lượt đi về cho mỗi nghìn lần chèn, và ứng dụng vẫn chạy được một lúc nếu máy cấp số sập.</p>\n<p>Cái giá: id không còn theo thứ tự tạo giữa các máy (số 2001 của Máy 2 có thể cũ hơn số 1500 của Máy 1), và một máy chủ sập sẽ mang theo phần còn lại của khối, để lại khoảng trống.</p>\n<div class=\"callout callout--insight\"><strong>Lưu ý Kỹ sư:</strong> Khoảng trống vô hại. Đừng bao giờ hứa id không có khoảng trống hay xếp thứ tự chặt chẽ: số hóa đơn mà luật bắt phải liền mạch là một bộ đếm riêng, có chủ đích.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Blocks)",
          "body": "Nắm vững nguyên lý Phát theo khối, không phát lẻ từng số để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-3-1",
            "label": "COLLIDE",
            "value": "no",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-3-2",
            "label": "IDSIZE",
            "value": "64 bits",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-3-3",
            "label": "SORTABLE",
            "value": "roughly",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-3-4",
            "label": "IDDEP",
            "value": "ticket server · rarely",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-3-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Phát theo khối, không phát lẻ từng số"
          },
          {
            "id": "chk-3-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "unique-ids-step-5",
        "number": 5,
        "title": "UUIDs",
        "category": "THỰC THI",
        "categoryColor": "blue",
        "headline": "Cách 2: chọn một số không ai khác chọn",
        "bodyHtml": "<p>Or drop the coordination altogether. A <span class=\"term\">UUID</span> (version 4) is 122 random bits. Any server, phone or script can make one, with nobody to ask.</p>\n<p>Hai cái có thể trùng không? Về lý thuyết thì có. Thực tế bạn phải tạo một tỷ cái mỗi giây trong khoảng 86 năm mới đạt 50% khả năng có một lần lặp.</p>\n<div class=\"callout callout--tip\"><strong>Lưu ý Kỹ sư:</strong> Cái giá là kích thước: 128 bit, gấp đôi một id thường, và id đó được chép vào mọi chỉ mục và mọi bảng trỏ tới dòng.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (UUIDs)",
          "body": "Nắm vững nguyên lý Cách 2: chọn một số không ai khác chọn để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-4-1",
            "label": "COLLIDE",
            "value": "no",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-4-2",
            "label": "IDSIZE",
            "value": "128 bits",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-4-3",
            "label": "SORTABLE",
            "value": "no",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-4-4",
            "label": "IDDEP",
            "value": "nothing",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-4-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Cách 2: chọn một số không ai khác chọn"
          },
          {
            "id": "chk-4-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "unique-ids-step-6",
        "number": 6,
        "title": "Random hurts",
        "category": "BỐI CẢNH",
        "categoryColor": "rose",
        "headline": "Tình huống: id ngẫu nhiên và chỉ mục",
        "bodyHtml": "<p>Khóa chính nằm trong một B-tree, sắp theo id (xem <em>Chỉ mục</em>). Id từ bộ đếm luôn rơi vào trang <b>cuối</b>, trang này luôn ở trong bộ nhớ. Id ngẫu nhiên thì lần nào cũng rơi vào một trang <b>bất kỳ</b>.</p>\n<p>Khi chỉ mục lớn hơn bộ nhớ, phần lớn lần chèn phải lấy một trang nguội từ đĩa trước, và các trang bị tách khắp cây. Tốc độ chèn có thể giảm nhiều lần, và chỉ mục phình ra với những trang trống một nửa.</p>\n<div class=\"callout callout--warn\"><strong>Lưu ý Kỹ sư:</strong> Đau nhất ở nơi chính bảng được lưu theo thứ tự khóa chính (InnoDB của MySQL, SQL Server), nhưng B-tree nào cũng chịu ảnh hưởng.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Random hurts)",
          "body": "Nắm vững nguyên lý Tình huống: id ngẫu nhiên và chỉ mục để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-5-1",
            "label": "COLLIDE",
            "value": "no",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-5-2",
            "label": "IDSIZE",
            "value": "128 bits",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-5-3",
            "label": "SORTABLE",
            "value": "no",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-5-4",
            "label": "IDDEP",
            "value": "nothing",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-5-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Tình huống: id ngẫu nhiên và chỉ mục"
          },
          {
            "id": "chk-5-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "unique-ids-step-7",
        "number": 7,
        "title": "Time first",
        "category": "THỰC THI",
        "categoryColor": "blue",
        "headline": "Đặt thời gian lên đầu",
        "bodyHtml": "<p>Keep the randomness, but lead with a timestamp. <span class=\"term\">UUID v7</span> — and its cousin, ULID — starts with 48 bits of milliseconds, followed by random bits.</p>\n<p>Id mới luôn lớn hơn id cũ, nên lượt chèn quay về mép phải của chỉ mục. Vẫn không cần phối hợp, và “sắp theo id” lại có nghĩa là “sắp theo thời gian tạo”.</p>\n<div class=\"callout callout--tip\"><strong>Lưu ý Kỹ sư:</strong> Nếu muốn dùng UUID làm khóa chính, hãy dùng phiên bản 7. Để phiên bản 4 cho những token cần không thể đoán được.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Time first)",
          "body": "Nắm vững nguyên lý Đặt thời gian lên đầu để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-6-1",
            "label": "COLLIDE",
            "value": "no",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-6-2",
            "label": "IDSIZE",
            "value": "128 bits",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-6-3",
            "label": "SORTABLE",
            "value": "yes",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-6-4",
            "label": "IDDEP",
            "value": "a clock",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-6-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Đặt thời gian lên đầu"
          },
          {
            "id": "chk-6-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "unique-ids-step-8",
        "number": 8,
        "title": "Snowflake",
        "category": "THỰC THI",
        "categoryColor": "blue",
        "headline": "Cách 3: id Snowflake",
        "bodyHtml": "<p>Twitter needed ids that fit in 64 bits, sort by time, and could be minted tens of thousands of times a second with no central counter. Its answer, <span class=\"term\">Snowflake</span>, packs three fields into one number.</p>\n<p>Một <b>dấu thời gian</b> tính bằng mili giây, <b>id máy</b> của bộ tạo, và một <b>số thứ tự</b> đếm lên trong mili giây đó. Hai máy không bao giờ trùng vì id máy khác nhau; một máy không bao giờ lặp nhờ số thứ tự.</p>\n<div class=\"callout callout--tip\"><strong>Lưu ý Kỹ sư:</strong> Mỗi máy có thể tạo 4.096 id mỗi mili giây. Discord, Instagram và nhiều nơi khác dùng cùng ý tưởng với cách chia bit hơi khác.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Snowflake)",
          "body": "Nắm vững nguyên lý Cách 3: id Snowflake để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-7-1",
            "label": "COLLIDE",
            "value": "no",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-7-2",
            "label": "IDSIZE",
            "value": "64 bits",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-7-3",
            "label": "SORTABLE",
            "value": "yes",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-7-4",
            "label": "IDDEP",
            "value": "machine id + clock",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-7-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Cách 3: id Snowflake"
          },
          {
            "id": "chk-7-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "unique-ids-step-9",
        "number": 9,
        "title": "Clock",
        "category": "BỐI CẢNH",
        "categoryColor": "rose",
        "headline": "Tình huống: đồng hồ lùi lại",
        "bodyHtml": "<p>Id Snowflake chỉ duy nhất nếu đồng hồ của một máy không bao giờ lặp lại một mili giây. Nhưng đồng hồ có bị chỉnh: dịch vụ đồng bộ giờ phát hiện Máy chủ 1 chạy nhanh hai giây và chỉnh lùi lại. Trong hai giây, nó sẽ đóng dấu id bằng những thời điểm đã dùng: bị trùng.</p>\n<p>Cách phòng rất đơn giản. Nhớ dấu thời gian cuối cùng bạn đã phát; nếu đồng hồ giờ chỉ sớm hơn, hãy <b>chờ</b> (hoặc từ chối phát id) cho tới khi thời gian đuổi kịp.</p>\n<div class=\"callout callout--warn\"><strong>Lưu ý Kỹ sư:</strong> Cách khác làm hỏng nó: hai máy có cùng id máy. Hãy cấp id từ một nơi duy nhất (một dịch vụ cấu hình, hoặc lấy bit từ thứ vốn đã duy nhất), đừng bao giờ gán bằng tay.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Clock)",
          "body": "Nắm vững nguyên lý Tình huống: đồng hồ lùi lại để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-8-1",
            "label": "COLLIDE",
            "value": "no",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-8-2",
            "label": "IDSIZE",
            "value": "64 bits",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-8-3",
            "label": "SORTABLE",
            "value": "yes",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-8-4",
            "label": "IDDEP",
            "value": "machine id + clock",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-8-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Tình huống: đồng hồ lùi lại"
          },
          {
            "id": "chk-8-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "unique-ids-step-10",
        "number": 10,
        "title": "Leaks",
        "category": "NGHIỆP VỤ BA",
        "categoryColor": "amber",
        "headline": "Tình huống: id để lộ những gì",
        "bodyHtml": "<p>Id nằm trong URL, và người ta đọc chúng. Một đối thủ đặt một đơn vào thứ Hai (<b>#1004</b>) và một đơn nữa vào thứ Ba (<b>#1250</b>), và giờ biết bạn nhận khoảng 246 đơn mỗi ngày.</p>\n<p>Id tuần tự cũng dễ dò lần lượt: đổi <code>/invoices/1004</code> thành <code>/invoices/1005</code> và xem trả về gì. Id dựa trên thời gian để lộ chính xác lúc mỗi thứ được tạo.</p>\n<div class=\"callout callout--tip\"><strong>Lưu ý Kỹ sư:</strong> Hai lớp phòng thủ, và lớp thứ hai bạn cần bất kể thế nào: hiển thị một id công khai ngẫu nhiên riêng, và <b>kiểm tra phân quyền ở mọi request</b> (xem <em>Phân quyền</em>). Id không đoán được không phải là kiểm soát truy cập.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Leaks)",
          "body": "Nắm vững nguyên lý Tình huống: id để lộ những gì để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-9-1",
            "label": "COLLIDE",
            "value": "no",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-9-2",
            "label": "IDSIZE",
            "value": "64 bits",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-9-3",
            "label": "SORTABLE",
            "value": "yes",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-9-4",
            "label": "IDDEP",
            "value": "machine id + clock",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-9-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Tình huống: id để lộ những gì"
          },
          {
            "id": "chk-9-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "unique-ids-step-11",
        "number": 11,
        "title": "Choosing",
        "category": "NGHIỆP VỤ BA",
        "categoryColor": "amber",
        "headline": "Id nào cho việc nào",
        "bodyHtml": "<div class=\"callout callout--insight\"><strong>Lưu ý Kỹ sư:</strong> Không có id tốt nhất, chỉ có những tính chất hệ thống của bạn cần: kích thước, thứ tự, tính độc lập và tính bí mật.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Choosing)",
          "body": "Nắm vững nguyên lý Id nào cho việc nào để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-10-1",
            "label": "COLLIDE",
            "value": "no",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-10-2",
            "label": "IDSIZE",
            "value": "64 bits",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-10-3",
            "label": "SORTABLE",
            "value": "yes",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-10-4",
            "label": "IDDEP",
            "value": "machine id + clock",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-10-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Id nào cho việc nào"
          },
          {
            "id": "chk-10-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "unique-ids-step-12",
        "number": 12,
        "title": "Recap",
        "category": "TỐI ƯU",
        "categoryColor": "emerald",
        "headline": "Recap",
        "bodyHtml": "<div class=\"callout callout--next\"><strong>Lưu ý Kỹ sư:</strong> Tiếp theo: <b>CAP & tính nhất quán</b>: các bản sao dữ liệu nên làm gì khi mạng giữa chúng bị đứt.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Recap)",
          "body": "Nắm vững nguyên lý Recap để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-11-1",
            "label": "COLLIDE",
            "value": "no",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-11-2",
            "label": "IDSIZE",
            "value": "64 bits",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-11-3",
            "label": "SORTABLE",
            "value": "yes",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-11-4",
            "label": "IDDEP",
            "value": "machine id + clock",
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
    "id": "cap",
    "slug": "cap",
    "title": "CAP & tính nhất quán",
    "subtitle": "CAP & Consistency · 12 phút thực chiến",
    "moduleCode": "03",
    "moduleTitle": "Dữ Liệu & Lưu Trữ Phân Tán (Data & Storage)",
    "durationMinutes": 12,
    "difficulty": "Trung cấp",
    "steps": [
      {
        "id": "cap-step-1",
        "number": 1,
        "title": "Two regions",
        "category": "BỐI CẢNH",
        "categoryColor": "blue",
        "headline": "Bản sao ở hai vùng",
        "bodyHtml": "<p>Một trang bán vé giữ một bản sao dữ liệu ở châu Âu và một ở Mỹ, để người dùng mỗi vùng được trả lời nhanh. Mỗi lượt ghi được sao chép sang phía bên kia.</p>\n<p>Một buổi hòa nhạc còn <b>1 ghế trống</b>, và cả hai bản sao đều đồng ý.</p>\n<div class=\"callout callout--insight\"><strong>Lưu ý Kỹ sư:</strong> Sao chép qua các vùng mang lại tốc độ và khả năng sống sót, và mở ra câu hỏi mà bài này bàn tới.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Two regions)",
          "body": "Nắm vững nguyên lý Bản sao ở hai vùng để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-0-1",
            "label": "CONSISTENT",
            "value": "yes",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-0-2",
            "label": "AVAILABLE",
            "value": "yes",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-0-3",
            "label": "ERRORS",
            "value": "0",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-0-4",
            "label": "CONFLICTS",
            "value": "0",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-0-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Bản sao ở hai vùng"
          },
          {
            "id": "chk-0-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "cap-step-2",
        "number": 2,
        "title": "Partition",
        "category": "BỐI CẢNH",
        "categoryColor": "rose",
        "headline": "Mạng bị chia cắt",
        "bodyHtml": "<p>An undersea cable is cut. Both regions are healthy and their users can still reach them — but the regions can’t talk to <em>each other</em>. This is a <span class=\"term\">network partition</span>.</p>\n<p>Giờ một người dùng Mỹ muốn mua ghế cuối cùng. Bản sao Mỹ không hỏi được châu Âu. Nó nên làm gì?</p>\n<div class=\"callout callout--warn\"><strong>Lưu ý Kỹ sư:</strong> Phân vùng không hiếm: cáp, router, cấu hình sai và đường truyền quá tải đều gây ra chúng.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Partition)",
          "body": "Nắm vững nguyên lý Mạng bị chia cắt để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-1-1",
            "label": "CONSISTENT",
            "value": "?",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-1-2",
            "label": "AVAILABLE",
            "value": "?",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-1-3",
            "label": "ERRORS",
            "value": "0",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-1-4",
            "label": "CONFLICTS",
            "value": "0",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-1-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Mạng bị chia cắt"
          },
          {
            "id": "chk-1-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "cap-step-3",
        "number": 3,
        "title": "Choose C",
        "category": "LÝ THUYẾT",
        "categoryColor": "emerald",
        "headline": "Lựa chọn 1: giữ nhất quán",
        "bodyHtml": "<p>Từ chối những gì không xác nhận được. Châu Âu giữ bản chính nên vẫn phục vụ; phía Mỹ từ chối lượt ghi, và cả lượt đọc có thể đã cũ, cho tới khi liên kết trở lại.</p>\n<p>Không ai thấy dữ liệu sai. Nhưng người dùng Mỹ nhận lỗi suốt thời gian phân vùng.</p>\n<div class=\"callout callout--tip\"><strong>Lưu ý Kỹ sư:</strong> Chọn nhất quán ở nơi câu trả lời sai tốn tiền: thanh toán, số dư ngân hàng, tồn kho, bán vé.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Choose C)",
          "body": "Nắm vững nguyên lý Lựa chọn 1: giữ nhất quán để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-2-1",
            "label": "CONSISTENT",
            "value": "yes",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-2-2",
            "label": "AVAILABLE",
            "value": "partly",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-2-3",
            "label": "ERRORS",
            "value": "50",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-2-4",
            "label": "CONFLICTS",
            "value": "0",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-2-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Lựa chọn 1: giữ nhất quán"
          },
          {
            "id": "chk-2-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "cap-step-4",
        "number": 4,
        "title": "Choose A",
        "category": "LÝ THUYẾT",
        "categoryColor": "emerald",
        "headline": "Lựa chọn 2: giữ sẵn sàng",
        "bodyHtml": "<p>Trả lời bằng những gì đang có. Cả hai phía tiếp tục nhận lượt ghi. Ana ở Paris mua ghế cuối. Ben ở Boston mua ghế cuối.</p>\n<p>Ai cũng nhận được câu trả lời, và hai bản sao giờ <b>bất đồng</b>. Khi liên kết trở lại, có hai lượt bán cho cùng một ghế.</p>\n<div class=\"callout callout--tip\"><strong>Lưu ý Kỹ sư:</strong> Chọn sẵn sàng ở nơi bất đồng ngắn ngủi không sao: lượt thích, lượt xem, giỏ hàng, bảng tin.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Choose A)",
          "body": "Nắm vững nguyên lý Lựa chọn 2: giữ sẵn sàng để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-3-1",
            "label": "CONSISTENT",
            "value": "no",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-3-2",
            "label": "AVAILABLE",
            "value": "yes",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-3-3",
            "label": "ERRORS",
            "value": "0",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-3-4",
            "label": "CONFLICTS",
            "value": "1",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-3-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Lựa chọn 2: giữ sẵn sàng"
          },
          {
            "id": "chk-3-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "cap-step-5",
        "number": 5,
        "title": "Heal",
        "category": "LÝ THUYẾT",
        "categoryColor": "emerald",
        "headline": "Hàn gắn: nhất quán cuối cùng",
        "bodyHtml": "<p>The cable is repaired and the copies exchange what they missed. Left alone they will converge — <span class=\"term\">eventual consistency</span> — but someone has to decide what to do with the conflict.</p>\n<p>Các lựa chọn: <b>lượt ghi sau cùng thắng</b> (đơn giản, lặng lẽ bỏ một lượt bán), hoặc để ứng dụng gộp lại (giữ cả hai, hoàn tiền một bên, xin lỗi).</p>\n<div class=\"callout callout--warn\"><strong>Lưu ý Kỹ sư:</strong> “Lượt ghi sau cùng thắng” là mặc định trong nhiều cơ sở dữ liệu. Nó âm thầm làm mất dữ liệu: hãy chắc rằng điều đó chấp nhận được.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Heal)",
          "body": "Nắm vững nguyên lý Hàn gắn: nhất quán cuối cùng để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-4-1",
            "label": "CONSISTENT",
            "value": "yes",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-4-2",
            "label": "AVAILABLE",
            "value": "yes",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-4-3",
            "label": "ERRORS",
            "value": "0",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-4-4",
            "label": "CONFLICTS",
            "value": "0",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-4-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Hàn gắn: nhất quán cuối cùng"
          },
          {
            "id": "chk-4-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "cap-step-6",
        "number": 6,
        "title": "Clocks",
        "category": "BỐI CẢNH",
        "categoryColor": "rose",
        "headline": "Tình huống: “sau cùng” theo đồng hồ của ai?",
        "bodyHtml": "<p>Lượt ghi sau cùng thắng cần biết lượt ghi nào <em>thực sự</em> là sau cùng, và mỗi máy chủ đóng dấu lượt ghi bằng đồng hồ của mình. Đồng hồ bị trôi. Ở đây đồng hồ máy chủ Mỹ chạy nhanh 3 giây.</p>\n<p>Một khách hàng lưu địa chỉ giao hàng qua bản sao Mỹ, rồi sửa lại hai giây sau qua bản sao EU. Bản sửa mới hơn, nhưng dấu thời gian của nó lại <b>nhỏ hơn</b>, nên khi đồng bộ, lượt ghi sau cùng thắng giữ địa chỉ cũ và lặng lẽ vứt bản sửa đi.</p>\n<div class=\"callout callout--tip\"><strong>Lưu ý Kỹ sư:</strong> Đừng bao giờ xếp thứ tự sự kiện giữa các máy theo giờ đồng hồ. Dùng số phiên bản hoặc <b>đồng hồ logic</b> (dấu thời gian Lamport, vector phiên bản) đếm sự kiện thay vì đọc giờ, hoặc giữ cả hai phiên bản và để ứng dụng gộp.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Clocks)",
          "body": "Nắm vững nguyên lý Tình huống: “sau cùng” theo đồng hồ của ai? để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-5-1",
            "label": "CONSISTENT",
            "value": "yes",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-5-2",
            "label": "AVAILABLE",
            "value": "yes",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-5-3",
            "label": "ERRORS",
            "value": "0",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-5-4",
            "label": "CONFLICTS",
            "value": "1",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-5-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Tình huống: “sau cùng” theo đồng hồ của ai?"
          },
          {
            "id": "chk-5-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "cap-step-7",
        "number": 7,
        "title": "CAP",
        "category": "LÝ THUYẾT",
        "categoryColor": "violet",
        "headline": "CAP thực sự nói gì",
        "bodyHtml": "<p>The <span class=\"term\">CAP theorem</span>: when a network <b>P</b>artition happens, a replicated system must give up either <b>C</b>onsistency (every read sees the latest write, as if there were only one copy) or <b>A</b>vailability (every request to a working server gets an answer).</p>\n<p>Bạn không “chọn hai trong ba”: phân vùng chắc chắn sẽ xảy ra, nên lựa chọn thật sự là làm gì khi nó xảy ra.</p>\n<p><small>“Nhất quán” trong CAP là thứ dân cơ sở dữ liệu gọi là <b>linearizability</b> (khả tuyến tính). Nó không phải chữ C trong ACID, vốn nói về việc một giao dịch giữ nguyên các quy tắc của dữ liệu.</small></p>\n<div class=\"callout callout--insight\"><strong>Lưu ý Kỹ sư:</strong> PACELC thêm nửa chuyện thường ngày: ngay cả khi không có phân vùng, giữ các bản sao đồng bộ cũng tốn độ trễ. Nhất quán không bao giờ miễn phí.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (CAP)",
          "body": "Nắm vững nguyên lý CAP thực sự nói gì để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-6-1",
            "label": "CONSISTENT",
            "value": "yes",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-6-2",
            "label": "AVAILABLE",
            "value": "yes",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-6-3",
            "label": "ERRORS",
            "value": "0",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-6-4",
            "label": "CONFLICTS",
            "value": "0",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-6-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: CAP thực sự nói gì"
          },
          {
            "id": "chk-6-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "cap-step-8",
        "number": 8,
        "title": "Quorums",
        "category": "LÝ THUYẾT",
        "categoryColor": "emerald",
        "headline": "Quorum: tinh chỉnh sự đánh đổi",
        "bodyHtml": "<p>Nhiều cơ sở dữ liệu cho bạn chọn theo từng yêu cầu. Với <b>N</b> = 3 bản sao, lượt ghi chờ <b>W</b> bản xác nhận và lượt đọc hỏi <b>R</b> bản, dùng câu trả lời mới nhất.</p>\n<p>Nếu <b>W + R > N</b>, mọi lượt đọc đều giao với ít nhất một bản đã thấy lượt ghi mới nhất: ở đây W = 2 và R = 2, nên lượt đọc luôn chạm tới một <code>v2</code> dù một bản đã cũ.</p>\n<div class=\"callout callout--tip\"><strong>Lưu ý Kỹ sư:</strong> W = 1, R = 1: nhanh và sẵn sàng, có thể cũ. W = 3: mọi bản phải trả lời, nhất quán nhưng mong manh. Cassandra, Riak và ScyllaDB cho chỉnh các núm này theo yêu cầu; DynamoDB đưa lựa chọn đơn giản hơn giữa đọc eventual và đọc strongly consistent.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Quorums)",
          "body": "Nắm vững nguyên lý Quorum: tinh chỉnh sự đánh đổi để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-7-1",
            "label": "CONSISTENT",
            "value": "yes",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-7-2",
            "label": "AVAILABLE",
            "value": "yes",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-7-3",
            "label": "ERRORS",
            "value": "0",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-7-4",
            "label": "CONFLICTS",
            "value": "0",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-7-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Quorum: tinh chỉnh sự đánh đổi"
          },
          {
            "id": "chk-7-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "cap-step-9",
        "number": 9,
        "title": "Per operation",
        "category": "LÝ THUYẾT",
        "categoryColor": "emerald",
        "headline": "Tình huống: một thanh toán và một lượt thích",
        "bodyHtml": "<p>Một ứng dụng, hai lượt ghi rất khác nhau. Một <b>lượt thích</b> có thể do một bản xác nhận rồi lan ra sau (W = 1, R = 1): nhanh, luôn sẵn sàng, và chẳng ai bận tâm nếu con số lệch một chút.</p>\n<p>Ghi nhận một <b>thanh toán</b> (hình vuông lớn) dùng đa số cho cả lượt ghi lẫn mọi lượt đọc (W = 2, R = 2): chậm hơn, và thất bại nếu hai bản không liên lạc được, còn hơn để ai đó đọc phải một trạng thái “chưa thanh toán” đã cũ.</p>\n<div class=\"callout callout--tip\"><strong>Lưu ý Kỹ sư:</strong> Bạn không chọn tính nhất quán một lần cho cả hệ thống. Hãy chọn theo từng thao tác, bằng cách hỏi một câu trả lời sai sẽ tốn bao nhiêu.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Per operation)",
          "body": "Nắm vững nguyên lý Tình huống: một thanh toán và một lượt thích để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-8-1",
            "label": "CONSISTENT",
            "value": "per op",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-8-2",
            "label": "AVAILABLE",
            "value": "per op",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-8-3",
            "label": "ERRORS",
            "value": "0",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-8-4",
            "label": "CONFLICTS",
            "value": "0",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-8-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Tình huống: một thanh toán và một lượt thích"
          },
          {
            "id": "chk-8-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "cap-step-10",
        "number": 10,
        "title": "Models",
        "category": "LÝ THUYẾT",
        "categoryColor": "violet",
        "headline": "Nhất quán là một dải phổ",
        "bodyHtml": "<p>“Consistent” isn’t yes or no. Between the strongest (<span class=\"term\">linearizable</span>: everyone sees the latest write) and eventual sit useful promises: <b>read-your-writes</b> (you always see your own changes), <b>monotonic reads</b> (time never goes backwards for you), and <b>causal</b> consistency (replies never appear before the message they answer).</p>\n<p>Lời hứa yếu hơn thì rẻ hơn và sẵn sàng hơn. Chọn cái yếu nhất mà người dùng không nhận ra.</p>\n<div class=\"callout callout--insight\"><strong>Lưu ý Kỹ sư:</strong> Nhiều hệ “eventual” cung cấp read-your-writes theo phiên, đủ cho hầu hết ứng dụng.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Models)",
          "body": "Nắm vững nguyên lý Nhất quán là một dải phổ để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-9-1",
            "label": "CONSISTENT",
            "value": "per op",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-9-2",
            "label": "AVAILABLE",
            "value": "yes",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-9-3",
            "label": "ERRORS",
            "value": "0",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-9-4",
            "label": "CONFLICTS",
            "value": "0",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-9-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Nhất quán là một dải phổ"
          },
          {
            "id": "chk-9-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "cap-step-11",
        "number": 11,
        "title": "Recap",
        "category": "TỐI ƯU",
        "categoryColor": "emerald",
        "headline": "Recap",
        "bodyHtml": "<div class=\"callout callout--next\"><strong>Lưu ý Kỹ sư:</strong> Tiếp theo: <b>Đồng thuận & leader</b>: cách một nhóm máy chủ thống nhất về một sự thật, kể cả khi vài máy không liên lạc được.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Recap)",
          "body": "Nắm vững nguyên lý Recap để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-10-1",
            "label": "CONSISTENT",
            "value": "yes",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-10-2",
            "label": "AVAILABLE",
            "value": "yes",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-10-3",
            "label": "ERRORS",
            "value": "0",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-10-4",
            "label": "CONFLICTS",
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
    "id": "consensus",
    "slug": "consensus",
    "title": "Đồng thuận & bầu leader",
    "subtitle": "Consensus & Leader Election · 14 phút thực chiến",
    "moduleCode": "03",
    "moduleTitle": "Dữ Liệu & Lưu Trữ Phân Tán (Data & Storage)",
    "durationMinutes": 14,
    "difficulty": "Nâng cao",
    "steps": [
      {
        "id": "consensus-step-1",
        "number": 1,
        "title": "One leader",
        "category": "BỐI CẢNH",
        "categoryColor": "blue",
        "headline": "Một leader, hai follower",
        "bodyHtml": "<p>From <em>Replication</em>: one <span class=\"term\">leader</span> takes every write and copies it to its followers. If the leader dies, a follower is promoted and carries on.</p>\n<p>Câu đó giấu một trong những câu hỏi khó nhất của hệ phân tán: <b>ai quyết định</b> leader đã chết, và chuyện gì xảy ra nếu quyết định sai?</p>\n<div class=\"callout callout--insight\"><strong>Lưu ý Kỹ sư:</strong> Nhìn từ ngoài, một máy chủ đã sập, một máy chủ chậm và một máy chủ sau sợi cáp đứt trông y hệt nhau: im lặng.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (One leader)",
          "body": "Nắm vững nguyên lý Một leader, hai follower để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-0-1",
            "label": "LEADERS",
            "value": "1",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-0-2",
            "label": "WRITES",
            "value": "ok",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-0-3",
            "label": "CANLOSE",
            "value": "?",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-0-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Một leader, hai follower"
          },
          {
            "id": "chk-0-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "consensus-step-2",
        "number": 2,
        "title": "Split brain",
        "category": "BỐI CẢNH",
        "categoryColor": "rose",
        "headline": "Hai leader cùng lúc",
        "bodyHtml": "<p>Một sự cố mạng cắt A khỏi B và C. A vẫn sống và vẫn phục vụ Máy chủ ứng dụng 1, nhưng B không nghe thấy gì, cho rằng leader đã chết và tự thăng cấp.</p>\n<p>Now two leaders accept writes. Through A, seat 7 is sold to Ana; through B, the same seat is sold to Ben. Two histories that can never be merged cleanly: <span class=\"term\">split brain</span>.</p>\n<div class=\"callout callout--warn\"><strong>Lưu ý Kỹ sư:</strong> Timeout có thể cho bạn biết một máy chủ không liên lạc được. Nó không bao giờ cho biết máy chủ đã chết.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Split brain)",
          "body": "Nắm vững nguyên lý Hai leader cùng lúc để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-1-1",
            "label": "LEADERS",
            "value": "2",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-1-2",
            "label": "WRITES",
            "value": "diverging",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-1-3",
            "label": "CANLOSE",
            "value": "?",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-1-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Hai leader cùng lúc"
          },
          {
            "id": "chk-1-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "consensus-step-3",
        "number": 3,
        "title": "Majority",
        "category": "THỰC THI",
        "categoryColor": "blue",
        "headline": "Quy tắc: không có đa số thì không gì được tính",
        "bodyHtml": "<p>Cách sửa là một quy tắc duy nhất. Leader chỉ được bầu, và lượt ghi chỉ được xác nhận, khi <b>hơn một nửa</b> số node đồng ý. Với ba node, đó là hai.</p>\n<p>Bị cắt, A chỉ liên lạc được với chính nó: 1 trên 3. Nó không xác nhận được gì, nên lượt ghi của Máy chủ ứng dụng 1 chờ rồi timeout. B và C là 2 trên 3: chúng được bầu leader và tiếp tục. Hai đa số bất kỳ luôn chung ít nhất một node, nên hai leader không bao giờ cùng thắng.</p>\n<div class=\"callout callout--insight\"><strong>Lưu ý Kỹ sư:</strong> Đây là CAP trong thực tế: phía thiểu số từ bỏ tính sẵn sàng để dữ liệu giữ nhất quán.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Majority)",
          "body": "Nắm vững nguyên lý Quy tắc: không có đa số thì không gì được tính để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-2-1",
            "label": "LEADERS",
            "value": "1",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-2-2",
            "label": "TERM",
            "value": "2",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-2-3",
            "label": "WRITES",
            "value": "ok",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-2-4",
            "label": "CANLOSE",
            "value": "1 of 3",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-2-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Quy tắc: không có đa số thì không gì được tính"
          },
          {
            "id": "chk-2-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "consensus-step-4",
        "number": 4,
        "title": "Election",
        "category": "LÝ THUYẾT",
        "categoryColor": "emerald",
        "headline": "Leader được bầu thế nào",
        "bodyHtml": "<p>This is the <span class=\"term\">Raft</span> algorithm. A leader sends regular heartbeats. Every follower runs a timer of <em>random</em> length; if it runs out with no heartbeat, that follower becomes a <b>candidate</b>.</p>\n<p>B’s timer fires first. It starts <span class=\"term\">term</span> 2, votes for itself and asks the others. A node gives one vote per term, and only to a candidate whose log is at least as complete as its own. C says yes — 2 of 3 — so B leads term 2.</p>\n<div class=\"callout callout--tip\"><strong>Lưu ý Kỹ sư:</strong> Bộ hẹn giờ ngẫu nhiên khiến hiếm khi hai node cùng ứng cử. Nếu phiếu bị chia, không ai thắng, bộ hẹn giờ khởi động lại, và nhiệm kỳ sau sẽ phân định, thường trong vòng một giây.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Election)",
          "body": "Nắm vững nguyên lý Leader được bầu thế nào để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-3-1",
            "label": "LEADERS",
            "value": "1",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-3-2",
            "label": "TERM",
            "value": "2",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-3-3",
            "label": "WRITES",
            "value": "ok",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-3-4",
            "label": "CANLOSE",
            "value": "1 of 3",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-3-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Leader được bầu thế nào"
          },
          {
            "id": "chk-3-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "consensus-step-5",
        "number": 5,
        "title": "Commit",
        "category": "LÝ THUYẾT",
        "categoryColor": "emerald",
        "headline": "Lượt ghi được commit bởi đa số",
        "bodyHtml": "<p>Writes follow the same rule. App Server 2 sends <code>seat 7 → Ben</code> to the leader. B appends it to its <span class=\"term\">log</span> and sends it to the followers.</p>\n<p>Ngay khi đa số đã lưu mục đó (B và C), nó được <b>commit</b>. Chỉ khi đó B mới áp dụng nó và trả lời “đã lưu”. Một mục đã commit sống sót qua mọi sự cố mà vẫn còn lại một đa số.</p>\n<div class=\"callout callout--insight\"><strong>Lưu ý Kỹ sư:</strong> Mọi node áp dụng cùng các mục log theo cùng thứ tự, nên mọi node kết thúc ở cùng một trạng thái. Đó là <b>máy trạng thái được sao chép</b> (replicated state machine), ý tưởng nằm dưới tất cả những điều này.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Commit)",
          "body": "Nắm vững nguyên lý Lượt ghi được commit bởi đa số để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-4-1",
            "label": "LEADERS",
            "value": "1",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-4-2",
            "label": "TERM",
            "value": "2",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-4-3",
            "label": "WRITES",
            "value": "ok",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-4-4",
            "label": "CANLOSE",
            "value": "1 of 3",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-4-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Lượt ghi được commit bởi đa số"
          },
          {
            "id": "chk-4-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "consensus-step-6",
        "number": 6,
        "title": "Heal",
        "category": "THỰC THI",
        "categoryColor": "blue",
        "headline": "Leader cũ rút lui",
        "bodyHtml": "<p>Mạng lành lại. A, vẫn tin mình lãnh đạo nhiệm kỳ 1, nhận một heartbeat từ B mang dấu <b>nhiệm kỳ 2</b>. Nhiệm kỳ cao hơn luôn thắng: A lập tức thành follower.</p>\n<p>Log của A có một mục chưa bao giờ đạt đa số: lượt đặt chỗ của Ana, mà Máy chủ ứng dụng 1 chưa bao giờ được báo là thành công. A bỏ nó và chép log của B. Cả ba node lại giống hệt nhau, và không gì đã được xác nhận bị mất.</p>\n<div class=\"callout callout--tip\"><strong>Lưu ý Kỹ sư:</strong> Nhiệm kỳ là một đồng hồ logic. Không ai so giờ đồng hồ, chỉ hỏi “số nhiệm kỳ của ai cao hơn?”</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Heal)",
          "body": "Nắm vững nguyên lý Leader cũ rút lui để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-5-1",
            "label": "LEADERS",
            "value": "1",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-5-2",
            "label": "TERM",
            "value": "2",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-5-3",
            "label": "WRITES",
            "value": "ok",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-5-4",
            "label": "CANLOSE",
            "value": "1 of 3",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-5-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Leader cũ rút lui"
          },
          {
            "id": "chk-5-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "consensus-step-7",
        "number": 7,
        "title": "How many",
        "category": "LÝ THUYẾT",
        "categoryColor": "violet",
        "headline": "Bao nhiêu node?",
        "bodyHtml": "<p>Một cụm <b>N</b> node cần ⌊N/2⌋ + 1 phiếu, nên vẫn chạy khi có ⌊(N − 1)/2⌋ node sập. Ba node chịu được một sự cố; năm node chịu được hai.</p>\n<p>Node thứ tư là một cái bẫy: đa số thành 3, nên bạn vẫn chỉ chịu được một sự cố, lại thêm một máy có thể hỏng. Hãy dùng số lẻ, và đặt mỗi node ở một zone khác nhau để một sự cố không cuốn theo cả đa số.</p>\n<div class=\"callout callout--tip\"><strong>Lưu ý Kỹ sư:</strong> Ba hoặc năm là phổ biến. Cụm càng lớn, mỗi lượt ghi càng phải chờ nhiều xác nhận, nên cụm lớn hơn chậm hơn chứ không an toàn hơn.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (How many)",
          "body": "Nắm vững nguyên lý Bao nhiêu node? để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-6-1",
            "label": "LEADERS",
            "value": "1",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-6-2",
            "label": "TERM",
            "value": "2",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-6-3",
            "label": "WRITES",
            "value": "ok",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-6-4",
            "label": "CANLOSE",
            "value": "1 of 3",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-6-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Bao nhiêu node?"
          },
          {
            "id": "chk-6-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "consensus-step-8",
        "number": 8,
        "title": "Zombie",
        "category": "BỐI CẢNH",
        "categoryColor": "rose",
        "headline": "Tình huống: leader bị tạm dừng",
        "bodyHtml": "<p>Leader B đứng hình hai mươi giây: một lần dọn rác (garbage collection) dài, hoặc máy ảo của nó đang bị di chuyển. A và C không nghe heartbeat, bầu C cho nhiệm kỳ 3 và đi tiếp.</p>\n<p>Rồi B tỉnh dậy. Theo nó biết, chưa có thời gian nào trôi qua và nó vẫn là leader. Trước khi tin nhắn tiếp theo sửa nó, nó làm nốt việc đang dở: ghi một tệp vào kho lưu trữ chung, đè thẳng lên công việc của leader mới.</p>\n<div class=\"callout callout--warn\"><strong>Lưu ý Kỹ sư:</strong> Một node không thể biết mình từng bị tạm dừng. “Tôi vừa kiểm tra mình là leader cách đây một lúc” không bao giờ chứng minh bạn vẫn là leader.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Zombie)",
          "body": "Nắm vững nguyên lý Tình huống: leader bị tạm dừng để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-7-1",
            "label": "LEADERS",
            "value": "1 + a zombie",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-7-2",
            "label": "TERM",
            "value": "3",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-7-3",
            "label": "WRITES",
            "value": "diverging",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-7-4",
            "label": "CANLOSE",
            "value": "1 of 3",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-7-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Tình huống: leader bị tạm dừng"
          },
          {
            "id": "chk-7-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "consensus-step-9",
        "number": 9,
        "title": "Fencing",
        "category": "THỰC THI",
        "categoryColor": "blue",
        "headline": "Fencing token",
        "bodyHtml": "<p>The fix doesn’t depend on B noticing anything. Every request a leader sends carries its <b>term number</b> as a <span class=\"term\">fencing token</span>, and the storage remembers the highest token it has seen.</p>\n<p>C đã ghi với token 3. Khi lượt ghi của B đến với token 2, kho lưu trữ từ chối. Leader cũ bị chính tài nguyên rào lại.</p>\n<div class=\"callout callout--tip\"><strong>Lưu ý Kỹ sư:</strong> Khóa phân tán cũng vậy: dịch vụ khóa phải cấp một số tăng dần với mỗi lần khóa, và tài nguyên được bảo vệ phải kiểm tra số đó. Một khóa chỉ nói “nó là của bạn” thì không an toàn.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Fencing)",
          "body": "Nắm vững nguyên lý Fencing token để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-8-1",
            "label": "LEADERS",
            "value": "1",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-8-2",
            "label": "TERM",
            "value": "3",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-8-3",
            "label": "WRITES",
            "value": "ok",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-8-4",
            "label": "CANLOSE",
            "value": "1 of 3",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-8-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Fencing token"
          },
          {
            "id": "chk-8-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "consensus-step-10",
        "number": 10,
        "title": "The price",
        "category": "NGHIỆP VỤ BA",
        "categoryColor": "amber",
        "headline": "Đồng thuận tốn những gì",
        "bodyHtml": "<p>Mỗi lượt ghi phải chờ một lượt đi về tới đa số. Trong một trung tâm dữ liệu, đó là một hai mili giây; với node ở các vùng khác nhau, đó là 50–150 ms cho <em>mỗi</em> lượt ghi.</p>\n<p>Mọi lượt ghi đi qua một leader, nên thông lượng bị giới hạn bởi một máy. Và khi không liên lạc được đa số, cụm không nhận lượt ghi nào cả, một cách có chủ đích.</p>\n<div class=\"callout callout--warn\"><strong>Lưu ý Kỹ sư:</strong> Đồng thuận mua sự đúng đắn bằng độ trễ và tính sẵn sàng. Hãy dành nó cho những quyết định nhỏ mà quan trọng, không phải cho mỗi lượt thích và lượt xem trang.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (The price)",
          "body": "Nắm vững nguyên lý Đồng thuận tốn những gì để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-9-1",
            "label": "LEADERS",
            "value": "1",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-9-2",
            "label": "TERM",
            "value": "3",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-9-3",
            "label": "WRITES",
            "value": "ok",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-9-4",
            "label": "CANLOSE",
            "value": "1 of 3",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-9-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Đồng thuận tốn những gì"
          },
          {
            "id": "chk-9-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "consensus-step-11",
        "number": 11,
        "title": "In practice",
        "category": "LÝ THUYẾT",
        "categoryColor": "violet",
        "headline": "Bạn dùng nó nhiều hơn rất nhiều so với tự viết",
        "bodyHtml": "<p>Hầu như không ai tự cài đặt Raft hay Paxos. Bạn chạy một cụm đồng thuận nhỏ, <b>etcd</b>, <b>ZooKeeper</b> hoặc <b>Consul</b>, và chỉ giữ ở đó những sự thật quan trọng: ai là leader, cấu hình nói gì, ai giữ khóa nào.</p>\n<p>Mọi thứ khác dựa vào nó. Kubernetes giữ toàn bộ trạng thái cụm trong etcd. Kafka bầu các controller bằng Raft. Các cơ sở dữ liệu như CockroachDB, Spanner và MongoDB chạy đồng thuận trong mỗi shard hoặc replica set để quyết định failover.</p>\n<div class=\"callout callout--insight\"><strong>Lưu ý Kỹ sư:</strong> Khi bài Sao chép dữ liệu nói “thăng cấp follower cập nhật nhất”, đây chính là bộ máy khiến việc đó an toàn.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (In practice)",
          "body": "Nắm vững nguyên lý Bạn dùng nó nhiều hơn rất nhiều so với tự viết để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-10-1",
            "label": "LEADERS",
            "value": "1",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-10-2",
            "label": "TERM",
            "value": "3",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-10-3",
            "label": "WRITES",
            "value": "ok",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-10-4",
            "label": "CANLOSE",
            "value": "1 of 3",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-10-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Bạn dùng nó nhiều hơn rất nhiều so với tự viết"
          },
          {
            "id": "chk-10-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "consensus-step-12",
        "number": 12,
        "title": "Recap",
        "category": "TỐI ƯU",
        "categoryColor": "emerald",
        "headline": "Recap",
        "bodyHtml": "<div class=\"callout callout--next\"><strong>Lưu ý Kỹ sư:</strong> Tiếp theo: <b>Giao dịch & cô lập</b>: giữ một cơ sở dữ liệu đúng đắn khi nhiều yêu cầu cùng thay đổi nó.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Recap)",
          "body": "Nắm vững nguyên lý Recap để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-11-1",
            "label": "LEADERS",
            "value": "1",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-11-2",
            "label": "TERM",
            "value": "3",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-11-3",
            "label": "WRITES",
            "value": "ok",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-11-4",
            "label": "CANLOSE",
            "value": "1 of 3",
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
    "id": "transactions",
    "slug": "transactions",
    "title": "Giao dịch & cô lập",
    "subtitle": "Transactions & Isolation · 14 phút thực chiến",
    "moduleCode": "03",
    "moduleTitle": "Dữ Liệu & Lưu Trữ Phân Tán (Data & Storage)",
    "durationMinutes": 14,
    "difficulty": "Trung cấp",
    "steps": [
      {
        "id": "transactions-step-1",
        "number": 1,
        "title": "Last seat",
        "category": "BỐI CẢNH",
        "categoryColor": "blue",
        "headline": "Còn một ghế",
        "bodyHtml": "<p>Ana và Ben cùng muốn ghế cuối cùng của một buổi hòa nhạc. Yêu cầu của họ rơi vào hai máy chủ ứng dụng khác nhau, dùng chung một cơ sở dữ liệu.</p>\n<p>Mã đặt chỗ trông hợp lý: <b>đọc</b> còn bao nhiêu ghế, và nếu còn một, <b>ghi</b> lượt đặt chỗ.</p>\n<div class=\"callout callout--insight\"><strong>Lưu ý Kỹ sư:</strong> Từng yêu cầu riêng lẻ đều đúng. Rắc rối chỉ xuất hiện khi hai cái chạy cùng lúc.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Last seat)",
          "body": "Nắm vững nguyên lý Còn một ghế để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-0-1",
            "label": "SEATSLEFT",
            "value": "1",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-0-2",
            "label": "SOLD",
            "value": "0",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-0-3",
            "label": "OVERSOLD",
            "value": "no",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-0-4",
            "label": "LOCKWAIT",
            "value": "0",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-0-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Còn một ghế"
          },
          {
            "id": "chk-0-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "transactions-step-2",
        "number": 2,
        "title": "Race",
        "category": "BỐI CẢNH",
        "categoryColor": "rose",
        "headline": "Cả hai đều có",
        "bodyHtml": "<p>Cả hai máy chủ đọc “còn 1 ghế” trước khi bên nào ghi. Cả hai cho rằng ghế còn trống, cả hai ghi, và cả hai gửi xác nhận.</p>\n<p>One seat, two tickets. This is a <span class=\"term\">race condition</span> — here a <b>lost update</b>: Ben’s write silently overwrote Ana’s.</p>\n<div class=\"callout callout--warn\"><strong>Lưu ý Kỹ sư:</strong> Tình trạng đua hiếm khi gặp lúc kiểm thử nhưng phổ biến khi chạy thật, đúng lúc đông nhất, như khoảnh khắc vé bắt đầu mở bán.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Race)",
          "body": "Nắm vững nguyên lý Cả hai đều có để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-1-1",
            "label": "SEATSLEFT",
            "value": "0",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-1-2",
            "label": "SOLD",
            "value": "2 for 1 seat",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-1-3",
            "label": "OVERSOLD",
            "value": "yes",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-1-4",
            "label": "LOCKWAIT",
            "value": "0",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-1-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Cả hai đều có"
          },
          {
            "id": "chk-1-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "transactions-step-3",
        "number": 3,
        "title": "Not enough",
        "category": "LÝ THUYẾT",
        "categoryColor": "violet",
        "headline": "Riêng giao dịch không ngăn được",
        "bodyHtml": "<p>Bọc nó trong <code>BEGIN … COMMIT</code> thì lượt đặt chỗ thành tất-cả-hoặc-không, nhưng vẫn có thể bị bán hai lần. Ở mức cô lập mặc định của hầu hết cơ sở dữ liệu (<b>read committed</b>), mỗi lượt đọc chỉ thấy giá trị đã commit gần nhất: 1.</p>\n<p><span class=\"term\">Isolation</span> is the part of a transaction that says what concurrent transactions can see of each other. The default is deliberately weak, for speed.</p>\n<div class=\"callout callout--tip\"><strong>Lưu ý Kỹ sư:</strong> Chữ “I” trong ACID là một núm vặn, không phải công tắc. Hãy biết cơ sở dữ liệu của bạn dùng mức nào mặc định (PostgreSQL và SQL Server: read committed; MySQL: repeatable read).</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Not enough)",
          "body": "Nắm vững nguyên lý Riêng giao dịch không ngăn được để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-2-1",
            "label": "SEATSLEFT",
            "value": "0",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-2-2",
            "label": "SOLD",
            "value": "2 for 1 seat",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-2-3",
            "label": "OVERSOLD",
            "value": "yes",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-2-4",
            "label": "LOCKWAIT",
            "value": "0",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-2-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Riêng giao dịch không ngăn được"
          },
          {
            "id": "chk-2-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "transactions-step-4",
        "number": 4,
        "title": "Lock",
        "category": "THỰC THI",
        "categoryColor": "blue",
        "headline": "Khóa dòng khi đang quyết định",
        "bodyHtml": "<p>Đọc bằng <code>SELECT … FOR UPDATE</code>. Giao dịch của Ana khóa dòng 7; khi giao dịch của Ben cố đọc nó, cơ sở dữ liệu bắt anh <b>chờ</b> tới khi Ana commit (xem yêu cầu của anh dừng ở cơ sở dữ liệu).</p>\n<p>Rồi Ben đọc giá trị mới, 0, và nhận một câu “hết vé” lịch sự.</p>\n<div class=\"callout callout--tip\"><strong>Lưu ý Kỹ sư:</strong> Khóa được giữ tới COMMIT, nên hãy giữ các giao dịch này ngắn: đừng bao giờ chờ người dùng, API thanh toán hay bất cứ thứ gì chậm khi đang giữ khóa.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Lock)",
          "body": "Nắm vững nguyên lý Khóa dòng khi đang quyết định để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-3-1",
            "label": "SEATSLEFT",
            "value": "0",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-3-2",
            "label": "SOLD",
            "value": "1",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-3-3",
            "label": "OVERSOLD",
            "value": "no",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-3-4",
            "label": "LOCKWAIT",
            "value": "40",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-3-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Khóa dòng khi đang quyết định"
          },
          {
            "id": "chk-3-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "transactions-step-5",
        "number": 5,
        "title": "Atomic",
        "category": "LÝ THUYẾT",
        "categoryColor": "emerald",
        "headline": "Hoặc làm trong một câu lệnh",
        "bodyHtml": "<p>Thường thì bạn chẳng cần đọc trước. Để cơ sở dữ liệu kiểm tra và thay đổi trong một bước nguyên tử:</p>\n<p><code>UPDATE seats SET left = left − 1 WHERE id = 7 AND left > 0</code>, rồi xem có bao nhiêu dòng thay đổi. 1 nghĩa là bạn có ghế; 0 nghĩa là ghế đã hết.</p>\n<div class=\"callout callout--tip\"><strong>Lưu ý Kỹ sư:</strong> Bộ đếm, mức tồn kho và số dư thường an toàn nhất khi là một UPDATE có điều kiện duy nhất. Không có khe hở giữa kiểm tra và thay đổi, không có khóa giữ qua các lượt đi về.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Atomic)",
          "body": "Nắm vững nguyên lý Hoặc làm trong một câu lệnh để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-4-1",
            "label": "SEATSLEFT",
            "value": "0",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-4-2",
            "label": "SOLD",
            "value": "1",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-4-3",
            "label": "OVERSOLD",
            "value": "no",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-4-4",
            "label": "LOCKWAIT",
            "value": "2",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-4-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Hoặc làm trong một câu lệnh"
          },
          {
            "id": "chk-4-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "transactions-step-6",
        "number": 6,
        "title": "Versions",
        "category": "LÝ THUYẾT",
        "categoryColor": "emerald",
        "headline": "Lạc quan: kiểm tra số phiên bản",
        "bodyHtml": "<p>Locks are <em>pessimistic</em>: they assume a conflict and make others wait. <span class=\"term\">Optimistic concurrency</span> assumes conflicts are rare: read the row with its version, then write <code>… WHERE id = 7 AND version = 8</code>, bumping it to 9.</p>\n<p>Nếu ai đó tới trước, phiên bản không còn khớp, lượt ghi đổi 0 dòng, và bạn tải lại rồi thử lại. Không ai phải chờ.</p>\n<div class=\"callout callout--insight\"><strong>Lưu ý Kỹ sư:</strong> Lý tưởng khi người dùng chỉnh sửa thứ gì đó một lúc: tài liệu, hồ sơ, giỏ hàng. Giữ khóa hàng phút sẽ chặn tất cả mọi người.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Versions)",
          "body": "Nắm vững nguyên lý Lạc quan: kiểm tra số phiên bản để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-5-1",
            "label": "SEATSLEFT",
            "value": "0",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-5-2",
            "label": "SOLD",
            "value": "1",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-5-3",
            "label": "OVERSOLD",
            "value": "no",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-5-4",
            "label": "LOCKWAIT",
            "value": "0",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-5-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Lạc quan: kiểm tra số phiên bản"
          },
          {
            "id": "chk-5-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "transactions-step-7",
        "number": 7,
        "title": "Levels",
        "category": "LÝ THUYẾT",
        "categoryColor": "violet",
        "headline": "Các mức cô lập",
        "bodyHtml": "<div class=\"callout callout--tip\"><strong>Lưu ý Kỹ sư:</strong> Với serializable, cơ sở dữ liệu có thể hủy một giao dịch thay vì để xảy ra bất thường. Mã của bạn phải bắt lỗi đó và thử lại.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Levels)",
          "body": "Nắm vững nguyên lý Các mức cô lập để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-6-1",
            "label": "SEATSLEFT",
            "value": "0",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-6-2",
            "label": "SOLD",
            "value": "1",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-6-3",
            "label": "OVERSOLD",
            "value": "no",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-6-4",
            "label": "LOCKWAIT",
            "value": "0",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-6-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Các mức cô lập"
          },
          {
            "id": "chk-6-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "transactions-step-8",
        "number": 8,
        "title": "Phantom",
        "category": "BỐI CẢNH",
        "categoryColor": "rose",
        "headline": "Tình huống: khóa một dòng chưa tồn tại",
        "bodyHtml": "<p>Một luồng đặt chỗ mới bỏ bộ đếm ghế và kiểm tra bảng đặt chỗ: “có lượt đặt nào cho ghế 7 không? Không, vậy chèn một.” Cả hai giao dịch thậm chí còn dùng <code>FOR UPDATE</code>…</p>\n<p>…but there is no row to lock yet. Both see nothing, both insert, and seat 7 is booked twice. A row that appears between your check and your write is a <span class=\"term\">phantom</span>; deciding on what you read and then writing something else is called <span class=\"term\">write skew</span>.</p>\n<div class=\"callout callout--tip\"><strong>Lưu ý Kỹ sư:</strong> Cách sửa: cô lập serializable, khóa một dòng cha đã có (chính chiếc ghế), hoặc ràng buộc duy nhất; xem các bước tiếp theo.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Phantom)",
          "body": "Nắm vững nguyên lý Tình huống: khóa một dòng chưa tồn tại để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-7-1",
            "label": "SOLD",
            "value": "2 for 1 seat",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-7-2",
            "label": "OVERSOLD",
            "value": "yes",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-7-3",
            "label": "LOCKWAIT",
            "value": "0",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-7-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Tình huống: khóa một dòng chưa tồn tại"
          },
          {
            "id": "chk-7-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "transactions-step-9",
        "number": 9,
        "title": "Deadlock",
        "category": "BỐI CẢNH",
        "categoryColor": "rose",
        "headline": "Tình huống: deadlock",
        "bodyHtml": "<p>Khóa có cái bẫy riêng. Ana chuyển tiền từ tài khoản A sang B: khóa A, rồi xin B. Cùng lúc đó Ben chuyển từ B sang A: khóa B, rồi xin A.</p>\n<p>Mỗi bên chờ bên kia, mãi mãi. Cơ sở dữ liệu phát hiện vòng lặp (ngay lập tức ở một số engine, sau khoảng một giây ở engine khác) và hủy một giao dịch (của Ben), giao dịch này phải thử lại.</p>\n<div class=\"callout callout--tip\"><strong>Lưu ý Kỹ sư:</strong> Ngăn chặn bằng cách luôn lấy khóa theo cùng một thứ tự, ví dụ id tài khoản nhỏ nhất trước. Khi đó vòng lặp không thể hình thành.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Deadlock)",
          "body": "Nắm vững nguyên lý Tình huống: deadlock để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-8-1",
            "label": "OVERSOLD",
            "value": "no",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-8-2",
            "label": "LOCKWAIT",
            "value": "1e3",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-8-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Tình huống: deadlock"
          },
          {
            "id": "chk-8-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "transactions-step-10",
        "number": 10,
        "title": "Constraint",
        "category": "THỰC THI",
        "categoryColor": "blue",
        "headline": "Ràng buộc: tuyến phòng thủ cuối cùng",
        "bodyHtml": "<p>Code changes, and someone will eventually write a booking path that forgets the lock. So let the database enforce the rule itself: a <span class=\"term\">unique constraint</span> on <code>(concert, seat)</code> in the bookings table.</p>\n<p>Giờ lượt đặt thứ hai cho ghế 7 bị từ chối với lỗi trùng khóa, bất kể mã ứng dụng làm gì.</p>\n<div class=\"callout callout--insight\"><strong>Lưu ý Kỹ sư:</strong> Mã hóa các bất biến thành ràng buộc: unique, khóa ngoại, check (số dư ≥ 0). Chúng vẫn đứng vững ngay cả khi mã có lỗi.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Constraint)",
          "body": "Nắm vững nguyên lý Ràng buộc: tuyến phòng thủ cuối cùng để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-9-1",
            "label": "SEATSLEFT",
            "value": "0",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-9-2",
            "label": "SOLD",
            "value": "1",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-9-3",
            "label": "OVERSOLD",
            "value": "no",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-9-4",
            "label": "LOCKWAIT",
            "value": "0",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-9-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Ràng buộc: tuyến phòng thủ cuối cùng"
          },
          {
            "id": "chk-9-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "transactions-step-11",
        "number": 11,
        "title": "Slow lock",
        "category": "BỐI CẢNH",
        "categoryColor": "rose",
        "headline": "Tình huống: giữ khóa trong lúc thanh toán",
        "bodyHtml": "<p>Để cho chắc, ai đó chuyển việc thanh toán thẻ vào <em>bên trong</em> giao dịch đặt chỗ: khóa ghế 7, gọi nhà cung cấp thanh toán, rồi commit. Nhà cung cấp mất 3 giây.</p>\n<p>Trong 3 giây đó ghế bị khóa, và mọi người mua khác phải chờ, mỗi người giữ một kết nối cơ sở dữ liệu. Vào ngày mở bán, pool kết nối cạn kiệt và cả trang web đứng hình.</p>\n<div class=\"callout callout--warn\"><strong>Lưu ý Kỹ sư:</strong> Đừng bao giờ chờ thứ gì chậm (người dùng, API thanh toán, email) khi đang giữ khóa cơ sở dữ liệu hoặc một giao dịch đang mở.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Slow lock)",
          "body": "Nắm vững nguyên lý Tình huống: giữ khóa trong lúc thanh toán để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-10-1",
            "label": "SEATSLEFT",
            "value": "1",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-10-2",
            "label": "SOLD",
            "value": "0",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-10-3",
            "label": "OVERSOLD",
            "value": "no",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-10-4",
            "label": "LOCKWAIT",
            "value": "3e3",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-10-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Tình huống: giữ khóa trong lúc thanh toán"
          },
          {
            "id": "chk-10-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "transactions-step-12",
        "number": 12,
        "title": "Hold",
        "category": "THỰC THI",
        "categoryColor": "blue",
        "headline": "Giữ chỗ, thanh toán, rồi xác nhận",
        "bodyHtml": "<p>Chia thành các bước ngắn. Giao dịch 1 đánh dấu ghế 7 là <b>giữ cho Ana tới 12:10</b> và commit ngay. Rồi Ana thanh toán, bên ngoài mọi giao dịch. Giao dịch 2 đánh dấu ghế là <b>đã bán</b>.</p>\n<p>Nếu cô ấy không bao giờ trả tiền, một tác vụ dọn dẹp sẽ giải phóng các chỗ giữ đã hết hạn. Ben được báo ngay là ghế đã có người: không chờ đợi, không khóa giữ hàng giây.</p>\n<div class=\"callout callout--insight\"><strong>Lưu ý Kỹ sư:</strong> Đây chính là đồng hồ “ghế được giữ 10 phút” trên mọi trang bán vé và hãng bay. Một lượt giữ chỗ có hạn thay cho một khóa dài.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Hold)",
          "body": "Nắm vững nguyên lý Giữ chỗ, thanh toán, rồi xác nhận để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-11-1",
            "label": "SEATSLEFT",
            "value": "0",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-11-2",
            "label": "SOLD",
            "value": "1",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-11-3",
            "label": "OVERSOLD",
            "value": "no",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-11-4",
            "label": "LOCKWAIT",
            "value": "2",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-11-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Giữ chỗ, thanh toán, rồi xác nhận"
          },
          {
            "id": "chk-11-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "transactions-step-13",
        "number": 13,
        "title": "Recap",
        "category": "TỐI ƯU",
        "categoryColor": "emerald",
        "headline": "Recap",
        "bodyHtml": "<div class=\"callout callout--next\"><strong>Lưu ý Kỹ sư:</strong> Tiếp theo: <b>Tệp & đa phương tiện</b>: ảnh và video được lưu ở đâu thay vì cơ sở dữ liệu, và chúng đến đó rồi quay về ra sao.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Recap)",
          "body": "Nắm vững nguyên lý Recap để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-12-1",
            "label": "SEATSLEFT",
            "value": "0",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-12-2",
            "label": "SOLD",
            "value": "1",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-12-3",
            "label": "OVERSOLD",
            "value": "no",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-12-4",
            "label": "LOCKWAIT",
            "value": "2",
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
    "id": "files",
    "slug": "files",
    "title": "Tệp & đa phương tiện",
    "subtitle": "Files & Media · 14 phút thực chiến",
    "moduleCode": "03",
    "moduleTitle": "Dữ Liệu & Lưu Trữ Phân Tán (Data & Storage)",
    "durationMinutes": 14,
    "difficulty": "Trung cấp",
    "steps": [
      {
        "id": "files-step-1",
        "number": 1,
        "title": "BLOBs",
        "category": "BỐI CẢNH",
        "categoryColor": "blue",
        "headline": "Ảnh trong cơ sở dữ liệu",
        "bodyHtml": "<p>The PhotoShare app from <em>Napkin Math</em> started simply: an uploaded photo is saved as a <span class=\"term\">BLOB</span> — a binary column — right next to its caption, owner and date. One database, one backup, one place to look.</p>\n<p>Với vài nghìn người dùng đầu tiên, cách này chạy hoàn toàn ổn.</p>\n<div class=\"callout callout--insight\"><strong>Lưu ý Kỹ sư:</strong> Một bức ảnh nặng vài megabyte; các thông tin về nó (chủ sở hữu, kích thước, chú thích, thời điểm) chỉ vài trăm byte. Đây là hai loại dữ liệu rất khác nhau.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (BLOBs)",
          "body": "Nắm vững nguyên lý Ảnh trong cơ sở dữ liệu để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-0-1",
            "label": "DBGROWTH",
            "value": "+2 GB / day",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-0-2",
            "label": "APPTRAFFIC",
            "value": "every photo, both ways",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-0-3",
            "label": "IMGLOAD",
            "value": "180",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-0-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Ảnh trong cơ sở dữ liệu"
          },
          {
            "id": "chk-0-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "files-step-2",
        "number": 2,
        "title": "It chokes",
        "category": "BỐI CẢNH",
        "categoryColor": "rose",
        "headline": "Hai terabyte mỗi ngày",
        "bodyHtml": "<p>Giờ mỗi ngày có một triệu ảnh, mỗi ảnh 2 MB: <b>2 TB mỗi ngày</b>, 730 TB mỗi năm. Cơ sở dữ liệu, các bản sao và các bản sao lưu đều phình ra từng ấy. Một lần khôi phục mất nhiều ngày, và mỗi bản sao mới phải chép lại tất cả.</p>\n<p>Mỗi lượt xem ảnh cũng đi qua máy chủ ứng dụng và cơ sở dữ liệu. Ảnh đẩy các hàng hữu ích ra khỏi bộ nhớ của cơ sở dữ liệu, và các truy vấn chú thích, lượt thích trở nên chậm.</p>\n<div class=\"callout callout--warn\"><strong>Lưu ý Kỹ sư:</strong> Cơ sở dữ liệu được xây để tìm và cập nhật các bản ghi nhỏ. Chuyển hàng megabyte vào ra là việc tốn kém và chỉ gây cản trở.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (It chokes)",
          "body": "Nắm vững nguyên lý Hai terabyte mỗi ngày để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-1-1",
            "label": "DBGROWTH",
            "value": "+2 TB / day",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-1-2",
            "label": "APPTRAFFIC",
            "value": "every photo, both ways",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-1-3",
            "label": "IMGLOAD",
            "value": "450",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-1-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Hai terabyte mỗi ngày"
          },
          {
            "id": "chk-1-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "files-step-3",
        "number": 3,
        "title": "Object storage",
        "category": "THỰC THI",
        "categoryColor": "blue",
        "headline": "Byte trong object storage, thông tin trong cơ sở dữ liệu",
        "bodyHtml": "<p>Move the bytes to <span class=\"term\">object storage</span> — Amazon S3, Google Cloud Storage, Azure Blob Storage. It is a huge key → file store: <code>PUT</code> a file under a key like <code>photos/9f2c.jpg</code>, <code>GET</code> it back. No queries, no joins — and no practical size limit.</p>\n<p>Nó tự sao chép mỗi đối tượng sang nhiều trung tâm dữ liệu cho bạn và rẻ hơn nhiều mỗi terabyte so với ổ đĩa cơ sở dữ liệu. Cơ sở dữ liệu giữ một hàng nhỏ cho mỗi ảnh: khóa, chủ sở hữu, kích thước và loại.</p>\n<div class=\"callout callout--tip\"><strong>Lưu ý Kỹ sư:</strong> Cách tách này (metadata trong cơ sở dữ liệu, byte trong object storage) là cách gần như mọi sản phẩm lưu tệp, từ ảnh đại diện đến video nhiều gigabyte.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Object storage)",
          "body": "Nắm vững nguyên lý Byte trong object storage, thông tin trong cơ sở dữ liệu để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-2-1",
            "label": "DBGROWTH",
            "value": "+1 GB / day",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-2-2",
            "label": "APPTRAFFIC",
            "value": "every photo, both ways",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-2-3",
            "label": "IMGLOAD",
            "value": "260",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-2-4",
            "label": "STORECOST",
            "value": "$16,800",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-2-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Byte trong object storage, thông tin trong cơ sở dữ liệu"
          },
          {
            "id": "chk-2-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "files-step-4",
        "number": 4,
        "title": "Through servers",
        "category": "BỐI CẢNH",
        "categoryColor": "rose",
        "headline": "Tình huống: video 2 GB qua kết nối điện thoại",
        "bodyHtml": "<p>Lượt tải lên vẫn đi <em>qua</em> máy chủ ứng dụng trên đường tới kho lưu trữ. Một video 2 GB từ điện thoại mất nhiều phút, và suốt thời gian đó nó giữ một kết nối và bộ nhớ của máy chủ, chỉ để chuyển byte đi tiếp.</p>\n<p>Máy chủ ứng dụng rốt cuộc được định cỡ theo băng thông thay vì theo logic mà chúng thực sự chạy, và một đợt tải video lên làm chậm việc tải trang của mọi người.</p>\n<div class=\"callout callout--warn\"><strong>Lưu ý Kỹ sư:</strong> Nếu máy chủ của bạn chỉ chuyển tiếp những byte mà chúng không hề nhìn tới, chúng là một kẻ trung gian đắt đỏ.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Through servers)",
          "body": "Nắm vững nguyên lý Tình huống: video 2 GB qua kết nối điện thoại để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-3-1",
            "label": "DBGROWTH",
            "value": "+1 GB / day",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-3-2",
            "label": "APPTRAFFIC",
            "value": "2 TB / day relayed",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-3-3",
            "label": "IMGLOAD",
            "value": "320",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-3-4",
            "label": "STORECOST",
            "value": "$16,800",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-3-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Tình huống: video 2 GB qua kết nối điện thoại"
          },
          {
            "id": "chk-3-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "files-step-5",
        "number": 5,
        "title": "Presigned",
        "category": "THỰC THI",
        "categoryColor": "blue",
        "headline": "Tải thẳng lên kho lưu trữ",
        "bodyHtml": "<p>Instead, the app hands out permission and gets out of the way. The phone asks “may I upload a 2 GB video?”; the app checks the user, writes a <code>pending</code> row, and replies with a <span class=\"term\">presigned URL</span>: a link signed with the app’s key that allows <em>one</em> upload, to <em>one</em> key, for the next 15 minutes.</p>\n<p>Điện thoại gửi byte thẳng tới object storage. Khi tải lên xong, kho lưu trữ gửi một sự kiện và ứng dụng đánh dấu hàng là <code>uploaded</code>.</p>\n<div class=\"callout callout--tip\"><strong>Lưu ý Kỹ sư:</strong> Chữ ký cũng có thể cố định loại nội dung và kích thước tối đa, để URL không thể bị dùng lại nhằm đổ thứ khác vào bucket của bạn.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Presigned)",
          "body": "Nắm vững nguyên lý Tải thẳng lên kho lưu trữ để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-4-1",
            "label": "DBGROWTH",
            "value": "+1 GB / day",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-4-2",
            "label": "APPTRAFFIC",
            "value": "small requests only",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-4-3",
            "label": "IMGLOAD",
            "value": "260",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-4-4",
            "label": "STORECOST",
            "value": "$16,800",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-4-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Tải thẳng lên kho lưu trữ"
          },
          {
            "id": "chk-4-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "files-step-6",
        "number": 6,
        "title": "In parts",
        "category": "LÝ THUYẾT",
        "categoryColor": "emerald",
        "headline": "Tệp lớn: tải lên theo từng phần",
        "bodyHtml": "<p>One 2 GB request over a phone network rarely makes it in one piece. A <span class=\"term\">multipart upload</span> splits the file into parts — say 10 MB each — sent in parallel, each with its own presigned URL.</p>\n<p>Phần nào lỗi thì chỉ cần gửi lại; kết nối bị rớt sẽ tiếp tục từ phần cuối cùng đã tới. Khi mọi phần đã có, một lệnh gọi cuối ghép chúng thành một đối tượng duy nhất.</p>\n<div class=\"callout callout--tip\"><strong>Lưu ý Kỹ sư:</strong> Các phần song song cũng nhanh hơn: nhiều kết nối tận dụng đường truyền tốt hơn một. Hãy tự động xóa các lượt tải bị bỏ dở, nếu không bạn phải trả tiền lưu các phần của chúng.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (In parts)",
          "body": "Nắm vững nguyên lý Tệp lớn: tải lên theo từng phần để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-5-1",
            "label": "DBGROWTH",
            "value": "+1 GB / day",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-5-2",
            "label": "APPTRAFFIC",
            "value": "small requests only",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-5-3",
            "label": "IMGLOAD",
            "value": "260",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-5-4",
            "label": "STORECOST",
            "value": "$16,800",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-5-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Tệp lớn: tải lên theo từng phần"
          },
          {
            "id": "chk-5-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "files-step-7",
        "number": 7,
        "title": "Processing",
        "category": "LÝ THUYẾT",
        "categoryColor": "emerald",
        "headline": "Tạo các phiên bản người dùng thực sự tải về",
        "bodyHtml": "<p>Bản gốc hiếm khi là thứ bạn hiển thị. Mỗi sự kiện “đã tải lên xong” được đưa vào hàng đợi (xem <em>Hàng đợi tin nhắn</em>), và các worker tạo ra những gì ứng dụng cần: ảnh thu nhỏ và hai ba kích thước của mỗi ảnh, quét mã độc, và, trước khi chia sẻ bất cứ thứ gì, xóa vị trí GPS ẩn trong metadata của ảnh.</p>\n<p>Video được chuyển mã sang nhiều độ phân giải. Khi worker xong, nó lưu các tệp mới và đánh dấu hàng là <code>ready</code>; trước đó, ứng dụng hiển thị “đang xử lý…”.</p>\n<div class=\"callout callout--warn\"><strong>Lưu ý Kỹ sư:</strong> Đừng bao giờ tin một tệp tải lên. Hãy kiểm tra loại tệp thật, kích thước và nội dung trong worker, chứ không chỉ những gì client khai báo.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Processing)",
          "body": "Nắm vững nguyên lý Tạo các phiên bản người dùng thực sự tải về để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-6-1",
            "label": "DBGROWTH",
            "value": "+1 GB / day",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-6-2",
            "label": "APPTRAFFIC",
            "value": "small requests only",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-6-3",
            "label": "IMGLOAD",
            "value": "120",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-6-4",
            "label": "STORECOST",
            "value": "$16,800",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-6-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Tạo các phiên bản người dùng thực sự tải về"
          },
          {
            "id": "chk-6-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "files-step-8",
        "number": 8,
        "title": "CDN",
        "category": "THỰC THI",
        "categoryColor": "blue",
        "headline": "Phục vụ từ edge",
        "bodyHtml": "<p>Lượt tải về nhiều hơn hẳn lượt tải lên, nên chúng cũng không được đi qua ứng dụng. Ảnh được phục vụ bởi <b>CDN</b> (xem <em>Phân phối nội dung</em>) với object storage làm origin: người xem đầu tiên ở một thành phố kéo một bản sao về edge gần nhất, mọi người sau đó lấy từ đó.</p>\n<p>Cho mỗi phiên bản một khóa thay đổi khi nội dung thay đổi (<code>photos/9f2c_w640.webp</code>), và nó có thể được cache cả năm mà không bao giờ bị cũ.</p>\n<div class=\"callout callout--tip\"><strong>Lưu ý Kỹ sư:</strong> Với ảnh riêng tư, ứng dụng cấp các URL CDN có chữ ký, sống ngắn: cùng ý tưởng với tải lên presigned, theo chiều ngược lại.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (CDN)",
          "body": "Nắm vững nguyên lý Phục vụ từ edge để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-7-1",
            "label": "TIẾN ĐỘ",
            "value": "Bước 8/13",
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
            "value": "Trung cấp",
            "level": "default",
            "iconName": "layers"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-7-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Phục vụ từ edge"
          },
          {
            "id": "chk-7-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "files-step-9",
        "number": 9,
        "title": "Video",
        "category": "LÝ THUYẾT",
        "categoryColor": "emerald",
        "headline": "Video: để trình phát tự chọn",
        "bodyHtml": "<p>Một tệp video quá lớn để tải hết trước khi phát, và kết nối của người xem thay đổi từng giây. Vì vậy mỗi video được cắt thành các đoạn vài giây, mã hóa ở nhiều chất lượng (từ 240p đến 1080p), kèm một tệp playlist nhỏ liệt kê tất cả.</p>\n<p>The player fetches segment by segment from the CDN and picks the quality for the next one from how fast the last one arrived. A train enters a tunnel: the picture drops to 360p instead of freezing. This is <span class=\"term\">adaptive bitrate streaming</span> (HLS or DASH).</p>\n<div class=\"callout callout--insight\"><strong>Lưu ý Kỹ sư:</strong> Các đoạn nhỏ, cache riêng được cũng là lý do video chạy rất tốt trên CDN: mọi đoạn phổ biến rồi sẽ có mặt ở mọi edge.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Video)",
          "body": "Nắm vững nguyên lý Video: để trình phát tự chọn để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-8-1",
            "label": "TIẾN ĐỘ",
            "value": "Bước 9/13",
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
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Video: để trình phát tự chọn"
          },
          {
            "id": "chk-8-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "files-step-10",
        "number": 10,
        "title": "In step",
        "category": "BỐI CẢNH",
        "categoryColor": "rose",
        "headline": "Tình huống: hàng không có tệp, tệp không có hàng",
        "bodyHtml": "<p>Hai kho có thể lệch nhau. Một điện thoại nhận presigned URL rồi mất sóng: hàng ghi <code>pending</code> mãi mãi. Một người dùng xóa ảnh: hàng biến mất, nhưng tệp vẫn còn, vẫn tốn tiền, và vẫn truy cập được với bất kỳ ai còn giữ đường link.</p>\n<p>Sửa như mọi cập nhật trên hai hệ thống (xem <em>Saga</em>): mỗi hàng có một <b>trạng thái</b>; sự kiện từ kho lưu trữ đẩy nó tiến lên; thao tác xóa gỡ hàng trước rồi đưa việc xóa tệp vào hàng đợi; và một <b>job dọn dẹp</b> hằng đêm xóa các hàng <code>pending</code> cũ hơn một ngày cùng các tệp không có hàng nào trỏ tới.</p>\n<div class=\"callout callout--tip\"><strong>Lưu ý Kỹ sư:</strong> Xóa dữ liệu người dùng là nghĩa vụ pháp lý ở nhiều nơi. Hãy chắc chắn việc xóa đến được mọi bản sao: các kích thước, bản chuyển mã, bản sao lưu và CDN.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (In step)",
          "body": "Nắm vững nguyên lý Tình huống: hàng không có tệp, tệp không có hàng để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-9-1",
            "label": "TIẾN ĐỘ",
            "value": "Bước 10/13",
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
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Tình huống: hàng không có tệp, tệp không có hàng"
          },
          {
            "id": "chk-9-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "files-step-11",
        "number": 11,
        "title": "Lifecycle",
        "category": "NGHIỆP VỤ BA",
        "categoryColor": "amber",
        "headline": "Tệp cũ có thể nằm ở chỗ rẻ hơn",
        "bodyHtml": "<p>Hầu hết ảnh được xem trong vài tuần đầu rồi gần như không bao giờ nữa. Object storage bán các <b>lớp lưu trữ</b>: tiêu chuẩn cho dữ liệu nóng, “truy cập không thường xuyên” cho dữ liệu ít dùng hơn, và các tầng lưu trữ lâu dài chỉ tốn một phần nhỏ, nhưng đọc thì tốn hơn, hoặc mất từ vài phút đến vài giờ.</p>\n<p>A <span class=\"term\">lifecycle rule</span> moves objects automatically: originals older than 90 days go to an archive tier, while the small sizes people still browse stay hot.</p>\n<div class=\"callout callout--warn\"><strong>Lưu ý Kỹ sư:</strong> Lưu trữ rẻ mà đọc đắt là cái bẫy cho dữ liệu bạn vẫn đọc thường xuyên. Hãy kiểm tra tệp của bạn thực sự được truy cập thế nào trước khi lưu trữ lâu dài.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Lifecycle)",
          "body": "Nắm vững nguyên lý Tệp cũ có thể nằm ở chỗ rẻ hơn để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-10-1",
            "label": "STORECOST",
            "value": "≈ $6,300",
            "level": "blue",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-10-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Tệp cũ có thể nằm ở chỗ rẻ hơn"
          },
          {
            "id": "chk-10-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "files-step-12",
        "number": 12,
        "title": "Public bucket",
        "category": "BỐI CẢNH",
        "categoryColor": "rose",
        "headline": "Tình huống: bucket ai cũng liệt kê được",
        "bodyHtml": "<p>Một lập trình viên để bucket công khai “cho ảnh hiện lên”. Nhiều tháng sau, có người phát hiện họ có thể <b>liệt kê</b> nó và tải về mọi ảnh từng được tải lên, kể cả ảnh riêng tư và bản gốc kèm dữ liệu vị trí. Rò rỉ kiểu này nằm trong số các vụ xâm phạm đám mây phổ biến nhất.</p>\n<p>Giữ bucket ở chế độ riêng tư và chặn truy cập công khai ở cấp tài khoản. Phục vụ qua CDN bằng URL có chữ ký, cho mỗi dịch vụ một khóa chỉ chạm được vào đường dẫn của riêng nó, và dùng tên đối tượng khó đoán làm lớp bảo vệ cuối cùng, không phải duy nhất.</p>\n<div class=\"callout callout--warn\"><strong>Lưu ý Kỹ sư:</strong> Một khóa ngẫu nhiên không phải là kiểm soát truy cập. Nếu chỉ cần một URL để đọc tệp riêng tư, URL đó phải hết hạn.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Public bucket)",
          "body": "Nắm vững nguyên lý Tình huống: bucket ai cũng liệt kê được để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-11-1",
            "label": "STORECOST",
            "value": "≈ $6,300",
            "level": "blue",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-11-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Tình huống: bucket ai cũng liệt kê được"
          },
          {
            "id": "chk-11-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "files-step-13",
        "number": 13,
        "title": "Recap",
        "category": "TỐI ƯU",
        "categoryColor": "emerald",
        "headline": "Recap",
        "bodyHtml": "<div class=\"callout callout--next\"><strong>Lưu ý Kỹ sư:</strong> Vậy là xong Dữ liệu & lưu trữ. Module tiếp theo: <b>Giao tiếp</b>: cách các dịch vụ nói chuyện với nhau.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Recap)",
          "body": "Nắm vững nguyên lý Recap để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-12-1",
            "label": "STORECOST",
            "value": "≈ $6,300",
            "level": "blue",
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
  }
];
