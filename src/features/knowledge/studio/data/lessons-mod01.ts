import type { StudioLesson } from "../studio.types";

export const mod01Lessons: StudioLesson[] = [
  {
    "id": "request-lifecycle",
    "slug": "request-lifecycle",
    "title": "Hành trình của một yêu cầu",
    "subtitle": "How a Request Travels · 10 phút thực chiến",
    "moduleCode": "01",
    "moduleTitle": "Nền Tảng Kỹ Sư Hệ Thống (Foundations)",
    "durationMinutes": 10,
    "difficulty": "Cơ bản",
    "steps": [
      {
        "id": "request-lifecycle-step-1",
        "number": 1,
        "title": "Hit Enter",
        "category": "BỐI CẢNH",
        "categoryColor": "rose",
        "headline": "Người dùng than cửa hàng chậm",
        "bodyHtml": "<p>Trước khi làm gì đó nhanh hơn, bạn cần biết thời gian đi đâu. Vậy hãy theo dõi một lần tải trang.</p>\n<p>Bạn gõ <code>shop.example</code> và nhấn Enter. Khoảng một phần sáu giây sau trang hiện ra. Ở giữa có rất nhiều chuyện xảy ra.</p>\n<div class=\"callout callout--insight\"><strong>Lưu ý Kỹ sư:</strong> Mỗi yêu cầu web là một cuộc trò chuyện giữa các máy. Mỗi bước tốn thời gian, và chi phí cộng dồn lại.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Hit Enter)",
          "body": "Nắm vững nguyên lý Người dùng than cửa hàng chậm để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
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
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Người dùng than cửa hàng chậm"
          },
          {
            "id": "chk-0-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "request-lifecycle-step-2",
        "number": 2,
        "title": "Find address",
        "category": "LÝ THUYẾT",
        "categoryColor": "emerald",
        "headline": "Tìm địa chỉ (DNS)",
        "bodyHtml": "<p>Networks route by numeric IP address, not by name. So the browser first asks a <span class=\"term\">DNS</span> resolver: <em>where is shop.example?</em></p>\n<p>Câu trả lời (<code>203.0.113.7</code>) quay về sau khoảng 20 ms.</p>\n<div class=\"callout callout--tip\"><strong>Lưu ý Kỹ sư:</strong> Câu trả lời được cache trong một thời gian sống (TTL). Trong vài phút tiếp theo, các lần ghé lại bỏ qua hẳn bước này.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Find address)",
          "body": "Nắm vững nguyên lý Tìm địa chỉ (DNS) để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-1-1",
            "label": "DNS",
            "value": "20",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-1-2",
            "label": "TOTAL",
            "value": "20",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-1-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Tìm địa chỉ (DNS)"
          },
          {
            "id": "chk-1-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "request-lifecycle-step-3",
        "number": 3,
        "title": "Connect",
        "category": "LÝ THUYẾT",
        "categoryColor": "emerald",
        "headline": "Mở một kết nối",
        "bodyHtml": "<p>Now the browser opens a connection to <code>203.0.113.7</code>. A TCP handshake agrees to talk; a TLS handshake sets up encryption. Each needs a <span class=\"term\">round trip</span> — there and back.</p>\n<p>Ở đây một lượt khứ hồi mất 30 ms, nên kết nối tốn 60 ms trước khi một byte nào của trang được yêu cầu.</p>\n<div class=\"callout callout--insight\"><strong>Lưu ý Kỹ sư:</strong> Thời gian khứ hồi (RTT) do khoảng cách và mạng quyết định, không phải do server của bạn nhanh đến đâu.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Connect)",
          "body": "Nắm vững nguyên lý Mở một kết nối để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-2-1",
            "label": "DNS",
            "value": "20",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-2-2",
            "label": "CONNECT",
            "value": "60",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-2-3",
            "label": "TOTAL",
            "value": "80",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-2-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Mở một kết nối"
          },
          {
            "id": "chk-2-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "request-lifecycle-step-4",
        "number": 4,
        "title": "Request",
        "category": "LÝ THUYẾT",
        "categoryColor": "emerald",
        "headline": "Gửi yêu cầu",
        "bodyHtml": "<p>Qua kết nối đang mở, trình duyệt gửi <code>GET /products</code>. Server phân tích nó, kiểm tra phiên và chạy mã của bạn.</p>\n<p>Việc đó tốn thêm một lượt khứ hồi cộng ~10 ms xử lý ở server.</p>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Request)",
          "body": "Nắm vững nguyên lý Gửi yêu cầu để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-3-1",
            "label": "DNS",
            "value": "20",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-3-2",
            "label": "CONNECT",
            "value": "60",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-3-3",
            "label": "REQUEST",
            "value": "40",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-3-4",
            "label": "TOTAL",
            "value": "120",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-3-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Gửi yêu cầu"
          },
          {
            "id": "chk-3-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "request-lifecycle-step-5",
        "number": 5,
        "title": "Fetch data",
        "category": "LÝ THUYẾT",
        "categoryColor": "emerald",
        "headline": "Server hỏi cơ sở dữ liệu",
        "bodyHtml": "<p>The products don’t live in the web server — they live in a <span class=\"term\">database</span>. The server sends a query and waits for the rows to come back.</p>\n<p>Hãy xem một yêu cầu đi hết đường vào và phản hồi đi hết đường ra.</p>\n<div class=\"callout callout--tip\"><strong>Lưu ý Kỹ sư:</strong> Giữ server phi trạng thái và dữ liệu nằm trong CSDL là điều giúp ta về sau chạy được nhiều server. (Xem Mở rộng.)</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Fetch data)",
          "body": "Nắm vững nguyên lý Server hỏi cơ sở dữ liệu để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-4-1",
            "label": "DNS",
            "value": "20",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-4-2",
            "label": "CONNECT",
            "value": "60",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-4-3",
            "label": "REQUEST",
            "value": "55",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-4-4",
            "label": "TOTAL",
            "value": "135",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-4-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Server hỏi cơ sở dữ liệu"
          },
          {
            "id": "chk-4-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "request-lifecycle-step-6",
        "number": 6,
        "title": "Response",
        "category": "THỰC THI",
        "categoryColor": "blue",
        "headline": "Phản hồi trở về nhà",
        "bodyHtml": "<p>Server biến các dòng thành HTML rồi gửi lại; tải về mất thêm 20 ms. Trình duyệt hiển thị trang sau <b>155 ms</b> kể từ lúc bạn nhấn Enter.</p>\n<p>Rồi nó thấy ảnh và stylesheet trong trang và gửi thêm yêu cầu. Dùng lại kết nối đang mở giúp chúng khỏi phải bắt tay.</p>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Response)",
          "body": "Nắm vững nguyên lý Phản hồi trở về nhà để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-5-1",
            "label": "DNS",
            "value": "20",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-5-2",
            "label": "CONNECT",
            "value": "60",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-5-3",
            "label": "REQUEST",
            "value": "55",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-5-4",
            "label": "DOWNLOAD",
            "value": "20",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-5-5",
            "label": "TOTAL",
            "value": "155",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-5-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Phản hồi trở về nhà"
          },
          {
            "id": "chk-5-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "request-lifecycle-step-7",
        "number": 7,
        "title": "More files",
        "category": "LÝ THUYẾT",
        "categoryColor": "emerald",
        "headline": "Một trang, thêm bốn mươi yêu cầu",
        "bodyHtml": "<p>HTML chỉ là khởi đầu. Nó tham chiếu ảnh, stylesheet, script và font (khoảng <b>40 tệp nữa</b>) và trình duyệt tải hết.</p>\n<p>With old HTTP/1.1 each connection carried one request at a time, so browsers opened ~6 connections and queued the rest. <span class=\"term\">HTTP/2</span> sends them all at once over the single connection we already opened.</p>\n<div class=\"callout callout--tip\"><strong>Lưu ý Kỹ sư:</strong> Ít tệp hơn và nhỏ hơn vẫn có ích: gộp script, nén văn bản (gzip/brotli), dùng định dạng ảnh hiện đại và tải lười phần nằm dưới màn hình đầu.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (More files)",
          "body": "Nắm vững nguyên lý Một trang, thêm bốn mươi yêu cầu để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-6-1",
            "label": "DNS",
            "value": "20",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-6-2",
            "label": "CONNECT",
            "value": "60",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-6-3",
            "label": "REQUEST",
            "value": "55",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-6-4",
            "label": "DOWNLOAD",
            "value": "140",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-6-5",
            "label": "TOTAL",
            "value": "275",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-6-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Một trang, thêm bốn mươi yêu cầu"
          },
          {
            "id": "chk-6-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "request-lifecycle-step-8",
        "number": 8,
        "title": "Slow query",
        "category": "BỐI CẢNH",
        "categoryColor": "rose",
        "headline": "Tình huống: một truy vấn chậm",
        "bodyHtml": "<p>Một ô “gợi ý cho bạn” mới ra mắt. Truy vấn của nó sắp xếp mọi sản phẩm theo điểm ở mỗi lần xem trang, và giờ CSDL mất <b>400 ms</b> để trả lời.</p>\n<p>Cùng mạng, cùng các lần bắt tay, nhưng trang nhảy từ 155 ms lên hơn nửa giây. Hãy xem các yêu cầu chờ ở CSDL.</p>\n<div class=\"callout callout--insight\"><strong>Lưu ý Kỹ sư:</strong> Đo trước khi tối ưu. Ở đây mạng vẫn ổn; cách sửa nằm ở CSDL (xem bài Chỉ mục).</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Slow query)",
          "body": "Nắm vững nguyên lý Tình huống: một truy vấn chậm để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-7-1",
            "label": "DNS",
            "value": "20",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-7-2",
            "label": "CONNECT",
            "value": "60",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-7-3",
            "label": "REQUEST",
            "value": "440",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-7-4",
            "label": "DOWNLOAD",
            "value": "20",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-7-5",
            "label": "TOTAL",
            "value": "540",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-7-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Tình huống: một truy vấn chậm"
          },
          {
            "id": "chk-7-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "request-lifecycle-step-9",
        "number": 9,
        "title": "Far away",
        "category": "BỐI CẢNH",
        "categoryColor": "rose",
        "headline": "Tình huống: người dùng ở Sydney",
        "bodyHtml": "<p>Quay lại truy vấn nhanh. Giờ cùng trang đó được mở ở Sydney, còn server ở Virginia: mỗi lượt khứ hồi mất khoảng <b>200 ms</b> thay vì 30.</p>\n<p>Hai lượt khứ hồi bắt tay cộng lượt khứ hồi của yêu cầu tốn 600 ms trước cả khi trang bắt đầu tải. Cùng server, cùng mã: chậm hơn 4 lần.</p>\n<div class=\"callout callout--tip\"><strong>Lưu ý Kỹ sư:</strong> Cắt bớt lượt khứ hồi (TLS 1.3, HTTP/3, giữ kết nối mở) và đưa nội dung lại gần người dùng (CDN, vùng: Mô-đun 02).</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Far away)",
          "body": "Nắm vững nguyên lý Tình huống: người dùng ở Sydney để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-8-1",
            "label": "DNS",
            "value": "20",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-8-2",
            "label": "CONNECT",
            "value": "400",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-8-3",
            "label": "REQUEST",
            "value": "225",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-8-4",
            "label": "DOWNLOAD",
            "value": "60",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-8-5",
            "label": "TOTAL",
            "value": "705",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-8-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Tình huống: người dùng ở Sydney"
          },
          {
            "id": "chk-8-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "request-lifecycle-step-10",
        "number": 10,
        "title": "Recap",
        "category": "TỐI ƯU",
        "categoryColor": "emerald",
        "headline": "Thời gian đã đi đâu",
        "bodyHtml": "<div class=\"callout callout--next\"><strong>Lưu ý Kỹ sư:</strong> Tiếp theo: <b>Độ trễ & thông lượng</b>: chuyện gì xảy ra với 155 ms đó khi hàng nghìn người dùng đến cùng lúc.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Recap)",
          "body": "Nắm vững nguyên lý Thời gian đã đi đâu để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-9-1",
            "label": "DNS",
            "value": "20",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-9-2",
            "label": "CONNECT",
            "value": "60",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-9-3",
            "label": "REQUEST",
            "value": "55",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-9-4",
            "label": "DOWNLOAD",
            "value": "20",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-9-5",
            "label": "TOTAL",
            "value": "155",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-9-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Thời gian đã đi đâu"
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
    "id": "latency-throughput",
    "slug": "latency-throughput",
    "title": "Độ trễ & thông lượng",
    "subtitle": "Latency & Throughput · 11 phút thực chiến",
    "moduleCode": "01",
    "moduleTitle": "Nền Tảng Kỹ Sư Hệ Thống (Foundations)",
    "durationMinutes": 11,
    "difficulty": "Cơ bản",
    "steps": [
      {
        "id": "latency-throughput-step-1",
        "number": 1,
        "title": "Two numbers",
        "category": "BỐI CẢNH",
        "categoryColor": "blue",
        "headline": "Hai câu hỏi khác nhau",
        "bodyHtml": "<p><span class=\"term\">Latency</span>: how long does <em>one</em> request take, from leaving the user to the answer coming back? Watch one dot go out and return.</p>\n<p><span class=\"term\">Throughput</span>: how many requests does the system finish <em>per second</em>? Count the dots.</p>\n<div class=\"callout callout--insight\"><strong>Lưu ý Kỹ sư:</strong> Hãy nghĩ tới đường cao tốc: độ trễ là chuyến đi của bạn mất bao lâu; thông lượng là bao nhiêu xe qua mỗi giờ. Thêm làn cho nhiều xe qua hơn, nhưng trên đường vắng chúng không giúp bạn tới sớm hơn.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Two numbers)",
          "body": "Nắm vững nguyên lý Hai câu hỏi khác nhau để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-0-1",
            "label": "P50",
            "value": "120",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-0-2",
            "label": "P99",
            "value": "180",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-0-3",
            "label": "THROUGHPUT",
            "value": "50",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-0-4",
            "label": "UTIL",
            "value": "10",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-0-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Hai câu hỏi khác nhau"
          },
          {
            "id": "chk-0-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "latency-throughput-step-2",
        "number": 2,
        "title": "Busier",
        "category": "BỐI CẢNH",
        "categoryColor": "rose",
        "headline": "Nhiều người dùng hơn, cùng server",
        "bodyHtml": "<p>Lưu lượng tăng 7 lần. Thông lượng tăng theo (server vẫn theo kịp) và giờ nó bận 70%: 350 trên khoảng 500 yc/s mà nó xử lý được.</p>\n<p>Nhưng hãy nhìn hàng phía trước nó: thỉnh thoảng các yêu cầu phải <b>chờ đến lượt</b>. Chờ cũng là độ trễ.</p>\n<div class=\"callout callout--tip\"><strong>Lưu ý Kỹ sư:</strong> Mức sử dụng = phần thời gian server bận. Ở 70%, một yêu cầu mới thường gặp nó đang làm việc khác.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Busier)",
          "body": "Nắm vững nguyên lý Nhiều người dùng hơn, cùng server để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-1-1",
            "label": "P50",
            "value": "160",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-1-2",
            "label": "P99",
            "value": "600",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-1-3",
            "label": "THROUGHPUT",
            "value": "350",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-1-4",
            "label": "UTIL",
            "value": "70",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-1-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Nhiều người dùng hơn, cùng server"
          },
          {
            "id": "chk-1-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "latency-throughput-step-3",
        "number": 3,
        "title": "Hockey stick",
        "category": "BỐI CẢNH",
        "categoryColor": "rose",
        "headline": "Cây gậy khúc côn cầu",
        "bodyHtml": "<p>Lưu lượng tăng thêm một phần ba và server lên 96% bận. Thông lượng chỉ tăng tới 480 yc/s, sát trần 500 của nó, nhưng hàng đợi bùng nổ và độ trễ tăng <b>gấp bảy</b>.</p>\n<p>Yêu cầu không đến cách đều nhau. Còn dư 30% thì một đợt dồn được hấp thụ nhanh; còn 4% thì mỗi đợt chồng lên sau những yêu cầu đang chờ, và hàng phải rất lâu mới vơi.</p>\n<div class=\"callout callout--warn\"><strong>Lưu ý Kỹ sư:</strong> Độ trễ tăng chậm, rồi đột ngột. Hãy lên kế hoạch chạy khoảng 60–70% bận lúc cao điểm và giữ phần còn lại làm dư địa.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Hockey stick)",
          "body": "Nắm vững nguyên lý Cây gậy khúc côn cầu để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-2-1",
            "label": "P50",
            "value": "900",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-2-2",
            "label": "P99",
            "value": "4200",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-2-3",
            "label": "THROUGHPUT",
            "value": "480",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-2-4",
            "label": "UTIL",
            "value": "96",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-2-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Cây gậy khúc côn cầu"
          },
          {
            "id": "chk-2-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "latency-throughput-step-4",
        "number": 4,
        "title": "Averages lie",
        "category": "LÝ THUYẾT",
        "categoryColor": "violet",
        "headline": "Trung bình che giấu nỗi đau",
        "bodyHtml": "<p>Quay về 70% bận, phần lớn yêu cầu nhanh, nhưng vài cái bị kẹt sau việc chậm. <em>Trung bình</em> ở đây khoảng 180 ms, trông có vẻ ổn: nó hòa tan vài yêu cầu chậm.</p>\n<p>So we measure <span class=\"term\">percentiles</span>: <b>p50</b> is the time half of requests beat; <b>p99</b> is the time only 1 in 100 exceeds.</p>\n<div class=\"callout callout--warn\"><strong>Lưu ý Kỹ sư:</strong> Một trang gửi 30 yêu cầu sẽ dính p99 khoảng 1 trong 4 lần tải (1 − 0,99³⁰ ≈ 26%). Độ trễ đuôi mới là thứ người dùng thật sự cảm nhận.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Averages lie)",
          "body": "Nắm vững nguyên lý Trung bình che giấu nỗi đau để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-3-1",
            "label": "P50",
            "value": "160",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-3-2",
            "label": "P99",
            "value": "600",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-3-3",
            "label": "THROUGHPUT",
            "value": "350",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-3-4",
            "label": "UTIL",
            "value": "70",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-3-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Trung bình che giấu nỗi đau"
          },
          {
            "id": "chk-3-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "latency-throughput-step-5",
        "number": 5,
        "title": "Add capacity",
        "category": "THỰC THI",
        "categoryColor": "blue",
        "headline": "Thêm năng lực, lấy lại độ trễ",
        "bodyHtml": "<p>Nhân đôi số core của server và cùng 350 yc/s giờ chỉ còn 35% năng lực. Hàng đợi vơi đi, cả p50 lẫn p99 đều giảm.</p>\n<p>Thông lượng không đổi: nhu cầu không đổi. Điều thay đổi là <b>còn bao nhiêu dư địa</b> để hấp thụ các đợt dồn.</p>\n<div class=\"callout callout--tip\"><strong>Lưu ý Kỹ sư:</strong> Muốn giảm độ trễ khi tải cao, hãy giảm mức sử dụng: thêm năng lực, hoặc bớt việc cho mỗi yêu cầu.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Add capacity)",
          "body": "Nắm vững nguyên lý Thêm năng lực, lấy lại độ trễ để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-4-1",
            "label": "P50",
            "value": "120",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-4-2",
            "label": "P99",
            "value": "190",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-4-3",
            "label": "THROUGHPUT",
            "value": "350",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-4-4",
            "label": "UTIL",
            "value": "35",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-4-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Thêm năng lực, lấy lại độ trễ"
          },
          {
            "id": "chk-4-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "latency-throughput-step-6",
        "number": 6,
        "title": "Distance",
        "category": "LÝ THUYẾT",
        "categoryColor": "violet",
        "headline": "Khoảng cách cũng là độ trễ",
        "bodyHtml": "<p>Giờ hãy chuyển server sang bờ bên kia đại dương. Nó không chậm đi chút nào, vậy mà mỗi lượt khứ hồi lâu hơn: hãy xem các chấm di chuyển.</p>\n<p>Ánh sáng trong cáp quang đi khoảng 200 km mỗi mili giây. New York ↔ London ~5.600 km: ít nhất 56 ms mỗi lượt khứ hồi, thực tế gần 75 ms.</p>\n<div class=\"callout callout--insight\"><strong>Lưu ý Kỹ sư:</strong> Không nâng cấp server nào thắng được vật lý. Muốn giảm độ trễ này, hãy đưa dữ liệu lại gần người dùng (cache, CDN, vùng).</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Distance)",
          "body": "Nắm vững nguyên lý Khoảng cách cũng là độ trễ để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-5-1",
            "label": "P50",
            "value": "195",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-5-2",
            "label": "P99",
            "value": "265",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-5-3",
            "label": "THROUGHPUT",
            "value": "350",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-5-4",
            "label": "UTIL",
            "value": "35",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-5-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Khoảng cách cũng là độ trễ"
          },
          {
            "id": "chk-5-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "latency-throughput-step-7",
        "number": 7,
        "title": "In flight",
        "category": "LÝ THUYẾT",
        "categoryColor": "violet",
        "headline": "Định luật Little: bao nhiêu đang xử lý",
        "bodyHtml": "<p>A simple rule ties the numbers together: <span class=\"term\">requests in flight = throughput × latency</span>. At 350 req/s and 0.12 s each, about 42 requests are being worked on at any moment.</p>\n<p>Mỗi yêu cầu đang xử lý giữ một thread, một kết nối hoặc chút bộ nhớ. Nếu độ trễ tăng lên 1 s với cùng thông lượng thì có 350 yêu cầu đang xử lý, và các pool cỡ 50 cạn sạch.</p>\n<div class=\"callout callout--tip\"><strong>Lưu ý Kỹ sư:</strong> Hãy dùng nó để định cỡ thread pool, connection pool và số worker, và để hiểu vì sao các phụ thuộc chậm làm cạn chúng.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (In flight)",
          "body": "Nắm vững nguyên lý Định luật Little: bao nhiêu đang xử lý để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-6-1",
            "label": "P50",
            "value": "120",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-6-2",
            "label": "P99",
            "value": "190",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-6-3",
            "label": "THROUGHPUT",
            "value": "350",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-6-4",
            "label": "UTIL",
            "value": "35",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-6-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Định luật Little: bao nhiêu đang xử lý"
          },
          {
            "id": "chk-6-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "latency-throughput-step-8",
        "number": 8,
        "title": "Fan-out",
        "category": "BỐI CẢNH",
        "categoryColor": "rose",
        "headline": "Một yêu cầu, nhiều server",
        "bodyHtml": "<p>Một trang tìm kiếm hỏi song song <b>100</b> server chỉ mục và phải chờ server chậm nhất. Mỗi server nhanh 99% thời gian, nhưng với 100 server, một trang gần như luôn gặp ít nhất một server chậm.</p>\n<p>1 − 0,99¹⁰⁰ ≈ <b>63%</b> lượt tìm kiếm phải chờ p99 của ai đó. Một cái đuôi hiếm trên một server trở thành chuyện thường cho cả trang.</p>\n<div class=\"callout callout--tip\"><strong>Lưu ý Kỹ sư:</strong> Sửa phần đuôi bằng yêu cầu dự phòng (hedged): nếu một server chưa trả lời tới mốc p95 của nó, gửi cùng yêu cầu tới một bản sao và lấy câu trả lời đến trước.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Fan-out)",
          "body": "Nắm vững nguyên lý Một yêu cầu, nhiều server để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-7-1",
            "label": "P50",
            "value": "380",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-7-2",
            "label": "P99",
            "value": "900",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-7-3",
            "label": "THROUGHPUT",
            "value": "350",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-7-4",
            "label": "UTIL",
            "value": "40",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-7-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Một yêu cầu, nhiều server"
          },
          {
            "id": "chk-7-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "latency-throughput-step-9",
        "number": 9,
        "title": "Batching",
        "category": "NGHIỆP VỤ BA",
        "categoryColor": "amber",
        "headline": "Gom lô: thông lượng cao hơn, độ trễ nhích lên",
        "bodyHtml": "<p>Ghi sự kiện phân tích từng dòng một, CSDL đạt khoảng 2.000 lượt insert mỗi giây: gần như toàn bộ chi phí là phần tốn kém cố định của mỗi câu lệnh.</p>\n<p>Gom chúng lại: thu sự kiện tối đa 50 ms rồi ghi 100 dòng trong một câu lệnh (các ô vuông lớn). Thông lượng nhảy 25 lần, còn mỗi sự kiện chờ lâu hơn tối đa 50 ms.</p>\n<div class=\"callout callout--insight\"><strong>Lưu ý Kỹ sư:</strong> Gom lô đổi độ trễ lấy thông lượng. Tuyệt cho log, phân tích và nhập dữ liệu hàng loạt; sai với người dùng đang chờ sau một cú nhấp.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Batching)",
          "body": "Nắm vững nguyên lý Gom lô: thông lượng cao hơn, độ trễ nhích lên để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-8-1",
            "label": "P50",
            "value": "140",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-8-2",
            "label": "P99",
            "value": "210",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-8-3",
            "label": "THROUGHPUT",
            "value": "5e4",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-8-4",
            "label": "UTIL",
            "value": "35",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-8-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Gom lô: thông lượng cao hơn, độ trễ nhích lên"
          },
          {
            "id": "chk-8-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "latency-throughput-step-10",
        "number": 10,
        "title": "Recap",
        "category": "TỐI ƯU",
        "categoryColor": "emerald",
        "headline": "Recap",
        "bodyHtml": "<div class=\"callout callout--next\"><strong>Lưu ý Kỹ sư:</strong> Tiếp theo: <b>Tính nhẩm nhanh</b>: ước tính bạn cần bao nhiêu năng lực trước khi xây bất cứ thứ gì.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Recap)",
          "body": "Nắm vững nguyên lý Recap để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-9-1",
            "label": "P50",
            "value": "120",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-9-2",
            "label": "P99",
            "value": "190",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-9-3",
            "label": "THROUGHPUT",
            "value": "350",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-9-4",
            "label": "UTIL",
            "value": "35",
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
    "id": "napkin-math",
    "slug": "napkin-math",
    "title": "Tính nhẩm nhanh",
    "subtitle": "Napkin Math · 10 phút thực chiến",
    "moduleCode": "01",
    "moduleTitle": "Nền Tảng Kỹ Sư Hệ Thống (Foundations)",
    "durationMinutes": 10,
    "difficulty": "Cơ bản",
    "steps": [
      {
        "id": "napkin-math-step-1",
        "number": 1,
        "title": "The question",
        "category": "BỐI CẢNH",
        "categoryColor": "rose",
        "headline": "Một server có đủ không?",
        "bodyHtml": "<p>Bạn đang thiết kế PhotoShare. Trước khi chọn bất kỳ công nghệ nào, bạn cần hình dung quy mô: một server, hay một trăm?</p>\n<p>Bạn không cần con số chính xác, chỉ cần đúng <b>bậc độ lớn</b>. Tính nhẩm nhanh đưa bạn tới đó trong vài phút.</p>\n<div class=\"callout callout--insight\"><strong>Lưu ý Kỹ sư:</strong> Người phỏng vấn lẫn kiến trúc sư đều bắt đầu ở đây: con số ước lượng trước, rồi mới thiết kế cho vừa.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (The question)",
          "body": "Nắm vững nguyên lý Một server có đủ không? để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-0-1",
            "label": "DAU",
            "value": "10M",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-0-2",
            "label": "AVG",
            "value": "?",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-0-3",
            "label": "PEAK",
            "value": "?",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-0-4",
            "label": "SERVERS",
            "value": "?",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-0-5",
            "label": "STORAGE",
            "value": "?",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-0-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Một server có đủ không?"
          },
          {
            "id": "chk-0-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "napkin-math-step-2",
        "number": 2,
        "title": "Requests / s",
        "category": "LÝ THUYẾT",
        "categoryColor": "emerald",
        "headline": "Người dùng mỗi ngày → yêu cầu mỗi giây",
        "bodyHtml": "<p>Bắt đầu từ điều bạn biết: người dùng và họ thao tác thường xuyên thế nào. 10M người × 20 yêu cầu = 200M yêu cầu mỗi ngày.</p>\n<p>Một ngày có 86.400 giây. Làm tròn thành <b>100.000</b>: tính nhẩm là để nhanh, không phải để chính xác.</p>\n<div class=\"callout callout--tip\"><strong>Lưu ý Kỹ sư:</strong> Mẹo tiện: 1M yêu cầu mỗi ngày ≈ 12 yêu cầu mỗi giây.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Requests / s)",
          "body": "Nắm vững nguyên lý Người dùng mỗi ngày → yêu cầu mỗi giây để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-1-1",
            "label": "DAU",
            "value": "10M",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-1-2",
            "label": "AVG",
            "value": "2300",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-1-3",
            "label": "PEAK",
            "value": "?",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-1-4",
            "label": "SERVERS",
            "value": "?",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-1-5",
            "label": "STORAGE",
            "value": "?",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-1-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Người dùng mỗi ngày → yêu cầu mỗi giây"
          },
          {
            "id": "chk-1-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "napkin-math-step-3",
        "number": 3,
        "title": "Peak",
        "category": "LÝ THUYẾT",
        "categoryColor": "violet",
        "headline": "Lên kế hoạch cho đỉnh, không cho trung bình",
        "bodyHtml": "<p>Lưu lượng không phẳng: người ta lướt web vào buổi tối và quanh các sự kiện lớn. Đỉnh điển hình bằng 2–3 lần trung bình ngày.</p>\n<p>Định cỡ cho 3 lần và server đơn độc rõ ràng bị quá tải.</p>\n<div class=\"callout callout--warn\"><strong>Lưu ý Kỹ sư:</strong> Một hệ thống định cỡ theo tải trung bình sẽ sập đúng lúc đông người dùng nhất.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Peak)",
          "body": "Nắm vững nguyên lý Lên kế hoạch cho đỉnh, không cho trung bình để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-2-1",
            "label": "DAU",
            "value": "10M",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-2-2",
            "label": "AVG",
            "value": "2300",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-2-3",
            "label": "PEAK",
            "value": "7e3",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-2-4",
            "label": "SERVERS",
            "value": "?",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-2-5",
            "label": "STORAGE",
            "value": "?",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-2-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Lên kế hoạch cho đỉnh, không cho trung bình"
          },
          {
            "id": "chk-2-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "napkin-math-step-4",
        "number": 4,
        "title": "Servers",
        "category": "THỰC THI",
        "categoryColor": "blue",
        "headline": "Bao nhiêu server?",
        "bodyHtml": "<p>Một bài kiểm thử tải cho thấy một server xử lý khoảng <b>1.000 yc/s</b>. Đỉnh là 7.000, nên ta cần 7, cộng dư địa cho đột biến và cho trường hợp một server hỏng.</p>\n<p>Lấy tròn <b>10</b>. Để ý rằng ta dùng một con số đo được, không phải đoán.</p>\n<div class=\"callout callout--tip\"><strong>Lưu ý Kỹ sư:</strong> Chia lưu lượng cho các server này là việc của bộ cân bằng tải: xem Mô-đun 02.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Servers)",
          "body": "Nắm vững nguyên lý Bao nhiêu server? để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-3-1",
            "label": "DAU",
            "value": "10M",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-3-2",
            "label": "AVG",
            "value": "2300",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-3-3",
            "label": "PEAK",
            "value": "7e3",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-3-4",
            "label": "SERVERS",
            "value": "10",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-3-5",
            "label": "STORAGE",
            "value": "?",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-3-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Bao nhiêu server?"
          },
          {
            "id": "chk-3-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "napkin-math-step-5",
        "number": 5,
        "title": "Storage",
        "category": "LÝ THUYẾT",
        "categoryColor": "emerald",
        "headline": "Cần bao nhiêu lưu trữ?",
        "bodyHtml": "<p>Ảnh là phần lớn nhất: 1M lượt tải lên × 2 MB = <b>2 TB mỗi ngày</b>. Trong một năm là ~730 TB.</p>\n<p>Dữ liệu thường được lưu ba bản để một ổ đĩa hỏng không làm mất gì, nên hãy dự trù khoảng <b>2 PB</b> năm đầu. Điều đó loại ngay ý “một server CSDL duy nhất”.</p>\n<div class=\"callout callout--insight\"><strong>Lưu ý Kỹ sư:</strong> Lưu trữ tăng mỗi ngày và không bao giờ về không. Yêu cầu mỗi giây đến rồi đi; byte thì ở lại.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Storage)",
          "body": "Nắm vững nguyên lý Cần bao nhiêu lưu trữ? để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-4-1",
            "label": "DAU",
            "value": "10M",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-4-2",
            "label": "AVG",
            "value": "2300",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-4-3",
            "label": "PEAK",
            "value": "7e3",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-4-4",
            "label": "SERVERS",
            "value": "10",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-4-5",
            "label": "STORAGE",
            "value": "730 TB",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-4-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Cần bao nhiêu lưu trữ?"
          },
          {
            "id": "chk-4-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "napkin-math-step-6",
        "number": 6,
        "title": "Bandwidth",
        "category": "LÝ THUYẾT",
        "categoryColor": "emerald",
        "headline": "Cần bao nhiêu mạng?",
        "bodyHtml": "<p>Tải lên là phần nhỏ: 2 TB mỗi ngày chỉ khoảng 20 MB/s đi vào. Xem ảnh là phần lớn: nếu mỗi người xem 100 ảnh mỗi ngày dạng thumbnail 200 KB, sẽ có <b>200 TB mỗi ngày</b> đi ra.</p>\n<p>200 TB ÷ 100.000 s ≈ 2 GB/s: khoảng 16 Gbit/s trung bình, cao hơn lúc đỉnh. Đó là việc của CDN, không phải của mười web server.</p>\n<div class=\"callout callout--insight\"><strong>Lưu ý Kỹ sư:</strong> Ứng dụng đa phương tiện nặng về đọc thường chạm trần băng thông trước CPU. Hãy ước tính byte đi ra, không chỉ số yêu cầu.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Bandwidth)",
          "body": "Nắm vững nguyên lý Cần bao nhiêu mạng? để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-5-1",
            "label": "DAU",
            "value": "10M",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-5-2",
            "label": "AVG",
            "value": "2300",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-5-3",
            "label": "PEAK",
            "value": "7e3",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-5-4",
            "label": "SERVERS",
            "value": "10",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-5-5",
            "label": "STORAGE",
            "value": "730 TB",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-5-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Cần bao nhiêu mạng?"
          },
          {
            "id": "chk-5-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "napkin-math-step-7",
        "number": 7,
        "title": "Cache size",
        "category": "LÝ THUYẾT",
        "categoryColor": "emerald",
        "headline": "Có vừa bộ nhớ không?",
        "bodyHtml": "<p>Feed liên tục đọc metadata ảnh và hồ sơ người dùng. Một cache có giữ được phần nóng không? Hồ sơ: 10M × 2 KB = 20 GB. Ảnh mới hôm nay: 1M × 1 KB = 1 GB.</p>\n<p>Khoảng 21 GB: vừa trong bộ nhớ của một server cache (thêm một cái thứ hai để dự phòng). Không cần kiến trúc gì cầu kỳ.</p>\n<div class=\"callout callout--tip\"><strong>Lưu ý Kỹ sư:</strong> Tính nhẩm nhanh thường bảo “cái này nhỏ hơn bạn nghĩ”. Điều đó cũng giá trị như tìm ra thứ gì đó lớn.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Cache size)",
          "body": "Nắm vững nguyên lý Có vừa bộ nhớ không? để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-6-1",
            "label": "DAU",
            "value": "10M",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-6-2",
            "label": "AVG",
            "value": "2300",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-6-3",
            "label": "PEAK",
            "value": "7e3",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-6-4",
            "label": "SERVERS",
            "value": "10",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-6-5",
            "label": "STORAGE",
            "value": "730 TB",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-6-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Có vừa bộ nhớ không?"
          },
          {
            "id": "chk-6-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "napkin-math-step-8",
        "number": 8,
        "title": "Numbers",
        "category": "LÝ THUYẾT",
        "categoryColor": "violet",
        "headline": "Những con số đáng thuộc lòng",
        "bodyHtml": "<p>Biến một ý tưởng sản phẩm thành số server và terabyte bằng những phép tính vừa một tờ khăn giấy.</p>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Numbers)",
          "body": "Nắm vững nguyên lý Những con số đáng thuộc lòng để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-7-1",
            "label": "DAU",
            "value": "10M",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-7-2",
            "label": "AVG",
            "value": "2300",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-7-3",
            "label": "PEAK",
            "value": "7e3",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-7-4",
            "label": "SERVERS",
            "value": "10",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-7-5",
            "label": "STORAGE",
            "value": "730 TB",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-7-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Những con số đáng thuộc lòng"
          },
          {
            "id": "chk-7-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "napkin-math-step-9",
        "number": 9,
        "title": "Recap",
        "category": "TỐI ƯU",
        "categoryColor": "emerald",
        "headline": "Recap",
        "bodyHtml": "<div class=\"callout callout--next\"><strong>Lưu ý Kỹ sư:</strong> Vậy là xong phần Nền tảng. Tiếp theo: <b>Dọc hay ngang</b>: phải làm gì khi các con số nói một máy là không đủ.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Recap)",
          "body": "Nắm vững nguyên lý Recap để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-8-1",
            "label": "DAU",
            "value": "10M",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-8-2",
            "label": "AVG",
            "value": "2300",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-8-3",
            "label": "PEAK",
            "value": "7e3",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-8-4",
            "label": "SERVERS",
            "value": "10",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-8-5",
            "label": "STORAGE",
            "value": "730 TB",
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
  }
];
