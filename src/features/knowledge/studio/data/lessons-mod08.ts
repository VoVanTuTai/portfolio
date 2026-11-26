import type { StudioLesson } from "../studio.types";

export const mod08Lessons: StudioLesson[] = [
  {
    "id": "testing",
    "slug": "testing",
    "title": "Testing",
    "subtitle": "Testing · 12 phút thực chiến",
    "moduleCode": "08",
    "moduleTitle": "Vận Hành & Tự Động Hóa CI/CD (Shipping)",
    "durationMinutes": 12,
    "difficulty": "Cơ bản",
    "steps": [
      {
        "id": "testing-step-1",
        "number": 1,
        "title": "Is it safe?",
        "category": "BỐI CẢNH",
        "categoryColor": "blue",
        "headline": "Thay đổi này có an toàn không?",
        "bodyHtml": "<p>Dịch vụ thanh toán áp dụng mã giảm giá. Nó đọc và ghi cơ sở dữ liệu đơn hàng, trừ tiền thẻ qua một nhà cung cấp thanh toán bên ngoài, và hỏi dịch vụ của nhóm Kho xem hàng còn không.</p>\n<p>Một lập trình viên vừa đổi cách làm tròn giảm giá. Trước khi phát hành, nhóm kiểm tra bằng tay: bấm qua vài lượt mua trên máy chủ thử nghiệm, mọi thứ đều có vẻ ổn.</p>\n<div class=\"callout callout--insight\"><strong>Lưu ý Kỹ sư:</strong> Mỗi thay đổi đều kéo theo một câu hỏi: nó còn làm hỏng gì nữa? Test là cách trả lời nhanh, mỗi lần, mà không phải trông vào việc ai đó nhớ cần kiểm tra gì.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Is it safe?)",
          "body": "Nắm vững nguyên lý Thay đổi này có an toàn không? để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-0-1",
            "label": "FEEDBACK",
            "value": "1 day",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-0-2",
            "label": "COVERS",
            "value": "what someone clicks",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-0-3",
            "label": "ESCAPED",
            "value": "often",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-0-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Thay đổi này có an toàn không?"
          },
          {
            "id": "chk-0-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "testing-step-2",
        "number": 2,
        "title": "By hand",
        "category": "BỐI CẢNH",
        "categoryColor": "rose",
        "headline": "Bấm thử lung tung sẽ bỏ sót",
        "bodyHtml": "<p>Không ai thử một giỏ ba món giá 9,99 € với mã giảm 10%. Cách làm tròn mới tính 26,98 € thay vì 26,97 €: thừa một xu trên hàng nghìn đơn trước khi bộ phận hỗ trợ nhận ra.</p>\n<p>Kiểm tra thủ công thì chậm, nên ít khi làm, và chỉ bao phủ những gì ai đó nghĩ ra để thử. Lỗi do người dùng phát hiện.</p>\n<div class=\"callout callout--warn\"><strong>Lưu ý Kỹ sư:</strong> Lỗi được phát hiện càng muộn càng tốn kém: vài giây trong test, vài giờ khi review, vài ngày trên production, cộng thêm hoàn tiền và niềm tin.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (By hand)",
          "body": "Nắm vững nguyên lý Bấm thử lung tung sẽ bỏ sót để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-1-1",
            "label": "FEEDBACK",
            "value": "1 day",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-1-2",
            "label": "COVERS",
            "value": "what someone clicks",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-1-3",
            "label": "ESCAPED",
            "value": "often",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-1-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Bấm thử lung tung sẽ bỏ sót"
          },
          {
            "id": "chk-1-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "testing-step-3",
        "number": 3,
        "title": "Unit tests",
        "category": "THỰC THI",
        "categoryColor": "blue",
        "headline": "Unit test: một phần, tách riêng",
        "bodyHtml": "<p>A <span class=\"term\">unit test</span> calls one function with known inputs and checks the output — here, the total for a given basket and code. It runs in milliseconds, with no database and no network.</p>\n<p>Vì quá rẻ, bạn viết hàng nghìn cái, và chúng chạy ở mọi thay đổi. Trường hợp làm tròn trở thành một dòng sẽ thất bại ngay khi ai đó làm hỏng nó lần nữa.</p>\n<div class=\"callout callout--tip\"><strong>Lưu ý Kỹ sư:</strong> Viết test cho một lỗi trước khi sửa: xem nó thất bại, sửa code, xem nó qua. Lỗi đó sẽ không bao giờ lặng lẽ quay lại.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Unit tests)",
          "body": "Nắm vững nguyên lý Unit test: một phần, tách riêng để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-2-1",
            "label": "FEEDBACK",
            "value": "30 s",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-2-2",
            "label": "COVERS",
            "value": "logic only",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-2-3",
            "label": "ESCAPED",
            "value": "fewer",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-2-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Unit test: một phần, tách riêng"
          },
          {
            "id": "chk-2-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "testing-step-4",
        "number": 4,
        "title": "Test doubles",
        "category": "LÝ THUYẾT",
        "categoryColor": "emerald",
        "headline": "Test double thay cho phần còn lại",
        "bodyHtml": "<p>Checkout can’t run without its dependencies, so tests swap them for <span class=\"term\">test doubles</span>: a <b>fake</b> database that lives in memory, a <b>stub</b> provider that always answers “approved”, a <b>mock</b> that records whether a card was charged exactly once.</p>\n<p>Vấn đề: double chỉ biết những gì bạn bảo nó. Nếu nhà cung cấp thật đổi tên một trường, mọi unit test vẫn qua.</p>\n<div class=\"callout callout--warn\"><strong>Lưu ý Kỹ sư:</strong> Double làm test nhanh và lặp lại được, nhưng có thể âm thầm lệch khỏi thực tế. Phải có thứ gì đó kiểm thử với hệ thống thật nữa.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Test doubles)",
          "body": "Nắm vững nguyên lý Test double thay cho phần còn lại để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-3-1",
            "label": "FEEDBACK",
            "value": "30 s",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-3-2",
            "label": "COVERS",
            "value": "logic only",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-3-3",
            "label": "ESCAPED",
            "value": "fewer",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-3-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Test double thay cho phần còn lại"
          },
          {
            "id": "chk-3-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "testing-step-5",
        "number": 5,
        "title": "Integration",
        "category": "THỰC THI",
        "categoryColor": "blue",
        "headline": "Test tích hợp: những hàng xóm thật",
        "bodyHtml": "<p>An <span class=\"term\">integration test</span> runs Checkout against a real database — started fresh in a container for the test run — and checks what actually lands in the tables. SQL typos, broken migrations and mismatched types show up here, not in production.</p>\n<p>Nhà cung cấp thanh toán vẫn là stub (không thể trừ tiền thẻ thật), nhưng bạn có thể gọi sandbox của họ trong một bộ test riêng, nhỏ hơn.</p>\n<div class=\"callout callout--tip\"><strong>Lưu ý Kỹ sư:</strong> Container khiến việc này rẻ: một PostgreSQL hay Kafka dùng xong bỏ khởi động trong vài giây, nên test tích hợp cũng có thể chạy ở mọi thay đổi.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Integration)",
          "body": "Nắm vững nguyên lý Test tích hợp: những hàng xóm thật để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-4-1",
            "label": "FEEDBACK",
            "value": "4 min",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-4-2",
            "label": "COVERS",
            "value": "+ database queries",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-4-3",
            "label": "ESCAPED",
            "value": "fewer",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-4-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Test tích hợp: những hàng xóm thật"
          },
          {
            "id": "chk-4-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "testing-step-6",
        "number": 6,
        "title": "Contracts",
        "category": "LÝ THUYẾT",
        "categoryColor": "emerald",
        "headline": "Test hợp đồng: giữa các nhóm",
        "bodyHtml": "<p>Checkout phụ thuộc vào Kho, thuộc một nhóm khác và được triển khai theo lịch riêng của họ. Nếu họ đổi tên <code>in_stock</code> thành <code>available</code>, stub của Checkout sẽ không bao giờ biết.</p>\n<p>A <span class=\"term\">contract test</span> writes down what Checkout expects — this request, a response with these fields — and Inventory’s own pipeline checks every change against it. A breaking change fails in <em>their</em> build, before it ships.</p>\n<div class=\"callout callout--tip\"><strong>Lưu ý Kỹ sư:</strong> Các công cụ như Pact ghi lại những kỳ vọng này của bên tiêu dùng. Hợp đồng thay thế phần lớn các test đầu cuối chậm mà nếu không sẽ cần giữa các dịch vụ.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Contracts)",
          "body": "Nắm vững nguyên lý Test hợp đồng: giữa các nhóm để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-5-1",
            "label": "FEEDBACK",
            "value": "4 min",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-5-2",
            "label": "COVERS",
            "value": "+ API contracts",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-5-3",
            "label": "ESCAPED",
            "value": "rare",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-5-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Test hợp đồng: giữa các nhóm"
          },
          {
            "id": "chk-5-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "testing-step-7",
        "number": 7,
        "title": "End-to-end",
        "category": "THỰC THI",
        "categoryColor": "blue",
        "headline": "Test đầu cuối: cả hành trình",
        "bodyHtml": "<p>An <span class=\"term\">end-to-end test</span> drives the real system the way a user would: open the shop in a browser, add three items, enter a code, pay with a sandbox card, see the confirmation.</p>\n<p>Đây là test duy nhất chứng minh mọi thứ chạy cùng nhau, và cũng chậm nhất, dễ vỡ nhất. Chừng một tá cho các hành trình mang lại doanh thu là đủ.</p>\n<div class=\"callout callout--warn\"><strong>Lưu ý Kỹ sư:</strong> Test đầu cuối cho bạn biết có gì đó hỏng, chứ không biết cái gì. Khi một test như vậy thất bại, các test rẻ hơn bên dưới phải chỉ ra nguyên nhân.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (End-to-end)",
          "body": "Nắm vững nguyên lý Test đầu cuối: cả hành trình để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-6-1",
            "label": "FEEDBACK",
            "value": "15 min",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-6-2",
            "label": "COVERS",
            "value": "whole system",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-6-3",
            "label": "ESCAPED",
            "value": "rare",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-6-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Test đầu cuối: cả hành trình"
          },
          {
            "id": "chk-6-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "testing-step-8",
        "number": 8,
        "title": "Pyramid",
        "category": "LÝ THUYẾT",
        "categoryColor": "violet",
        "headline": "Kim tự tháp kiểm thử",
        "bodyHtml": "<p>Put together, the suites form a <span class=\"term\">test pyramid</span>: thousands of unit tests at the bottom, hundreds of integration and contract tests in the middle, a handful of end-to-end tests on top.</p>\n<p>Tầng dưới nhanh, chính xác và rẻ để chạy ở mọi thay đổi; tầng trên chậm nhưng gần với những gì người dùng làm hơn. Hãy đẩy mỗi phép kiểm tra xuống thấp nhất có thể.</p>\n<div class=\"callout callout--insight\"><strong>Lưu ý Kỹ sư:</strong> Một kim tự tháp lộn ngược, chủ yếu là test đầu cuối, là cái bẫy phổ biến: một giờ mỗi lần chạy, thường xuyên thất bại ngẫu nhiên, và một nhóm không còn tin vào build đỏ.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Pyramid)",
          "body": "Nắm vững nguyên lý Kim tự tháp kiểm thử để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-7-1",
            "label": "FEEDBACK",
            "value": "30 s → 15 min",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-7-2",
            "label": "COVERS",
            "value": "whole system",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-7-3",
            "label": "ESCAPED",
            "value": "rare",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-7-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Kim tự tháp kiểm thử"
          },
          {
            "id": "chk-7-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "testing-step-9",
        "number": 9,
        "title": "Flaky",
        "category": "BỐI CẢNH",
        "categoryColor": "rose",
        "headline": "Tình huống: test chập chờn",
        "bodyHtml": "<p>Một test đầu cuối thất bại khoảng một lần trong hai mươi lần chạy. Nó chờ cố định hai giây cho email xác nhận, và đôi khi email mất ba giây. Mọi người quen bấm “chạy lại”, và khi một lỗi thật làm test đó đỏ, họ cũng chạy lại luôn.</p>\n<p>A <span class=\"term\">flaky test</span> is worse than no test: it trains the team to ignore failures.</p>\n<div class=\"callout callout--tip\"><strong>Lưu ý Kỹ sư:</strong> Hãy sửa nguyên nhân: chờ một điều kiện thay vì thời gian cố định, kiểm soát đồng hồ, cho mỗi test dữ liệu riêng, không bao giờ phụ thuộc vào thứ tự test. Theo dõi test chập chờn rồi sửa hoặc xóa; đừng giấu chúng sau cơ chế chạy lại tự động.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Flaky)",
          "body": "Nắm vững nguyên lý Tình huống: test chập chờn để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-8-1",
            "label": "FEEDBACK",
            "value": "15 min",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-8-2",
            "label": "COVERS",
            "value": "whole system",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-8-3",
            "label": "ESCAPED",
            "value": "often",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-8-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Tình huống: test chập chờn"
          },
          {
            "id": "chk-8-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "testing-step-10",
        "number": 10,
        "title": "Load & failure",
        "category": "LÝ THUYẾT",
        "categoryColor": "emerald",
        "headline": "Kiểm thử tải và sự cố",
        "bodyHtml": "<p>Đúng thôi chưa đủ. Một <b>test tải</b> gửi lưu lượng giống production tới một bản sao của hệ thống và tìm ra điểm độ trễ bắt đầu tăng vọt (xem <em>Độ trễ & thông lượng</em>) trước khi người dùng gặp phải.</p>\n<p><b>Test sự cố</b> cố ý làm hỏng mọi thứ (dừng một bản sao cơ sở dữ liệu, làm chậm nhà cung cấp thanh toán) và kiểm tra xem timeout, thử lại và failover có hoạt động như thiết kế không (xem <em>Timeout & thử lại</em>).</p>\n<div class=\"callout callout--tip\"><strong>Lưu ý Kỹ sư:</strong> Tầng cuối chạy ngay trên production: phát hành cho vài người dùng trước và theo dõi các con số. Đó là canary ở bài sau.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Load & failure)",
          "body": "Nắm vững nguyên lý Kiểm thử tải và sự cố để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-9-1",
            "label": "FEEDBACK",
            "value": "hours · nightly",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-9-2",
            "label": "COVERS",
            "value": "+ load and failure",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-9-3",
            "label": "ESCAPED",
            "value": "rare",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-9-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Kiểm thử tải và sự cố"
          },
          {
            "id": "chk-9-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "testing-step-11",
        "number": 11,
        "title": "Recap",
        "category": "TỐI ƯU",
        "categoryColor": "emerald",
        "headline": "Recap",
        "bodyHtml": "<div class=\"callout callout--next\"><strong>Lưu ý Kỹ sư:</strong> Tiếp theo: <b>CI/CD & triển khai</b>: chạy tất cả những điều này ở mọi thay đổi, và đưa lên production an toàn.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Recap)",
          "body": "Nắm vững nguyên lý Recap để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-10-1",
            "label": "FEEDBACK",
            "value": "30 s → 15 min",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-10-2",
            "label": "COVERS",
            "value": "whole system",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-10-3",
            "label": "ESCAPED",
            "value": "rare",
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
    "id": "cicd",
    "slug": "cicd",
    "title": "CI/CD & triển khai",
    "subtitle": "CI/CD & Deployments · 13 phút thực chiến",
    "moduleCode": "08",
    "moduleTitle": "Vận Hành & Tự Động Hóa CI/CD (Shipping)",
    "durationMinutes": 13,
    "difficulty": "Trung cấp",
    "steps": [
      {
        "id": "cicd-step-1",
        "number": 1,
        "title": "By hand",
        "category": "BỐI CẢNH",
        "categoryColor": "blue",
        "headline": "Phát hành bằng tay",
        "bodyHtml": "<p>Mỗi tuần một lần, vào tối thứ Sáu, một lập trình viên build ứng dụng trên laptop, chép lên máy chủ production qua SSH rồi khởi động lại. Ai cũng ở lại muộn phòng khi có gì hỏng.</p>\n<p>Thay đổi của cả tuần, của mọi người, ra cùng một lúc, nên khi có gì hỏng, không ai chắc thay đổi nào gây ra.</p>\n<div class=\"callout callout--insight\"><strong>Lưu ý Kỹ sư:</strong> Phát hành lớn và thưa trông có vẻ an toàn hơn nhưng thực ra ngược lại: càng nhiều thứ thay đổi cùng lúc, càng khó kiểm thử, khó tìm nguyên nhân và khó hoàn tác.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (By hand)",
          "body": "Nắm vững nguyên lý Phát hành bằng tay để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-0-1",
            "label": "TIẾN ĐỘ",
            "value": "Bước 1/11",
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
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Phát hành bằng tay"
          },
          {
            "id": "chk-0-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "cicd-step-2",
        "number": 2,
        "title": "Friday",
        "category": "BỐI CẢNH",
        "categoryColor": "rose",
        "headline": "“Máy tôi chạy được mà”",
        "bodyHtml": "<p>Thứ Sáu này laptop có một thư viện mới hơn máy chủ, và ứng dụng không khởi động được. Trong lúc lập trình viên tìm xem nên hoàn tác thay đổi nào trong ba mươi cái, trang web sập.</p>\n<p>Không có ghi chép chính xác cái gì đã chạy trước đó, nên ngay cả quay lại cũng là đoán mò. Bốn giờ sau, trang mới hoạt động lại.</p>\n<div class=\"callout callout--warn\"><strong>Lưu ý Kỹ sư:</strong> Build phụ thuộc vào máy của ai đó, và lần triển khai mà không ai lặp lại được chính xác, biến mỗi lần phát hành thành một cuộc thử nghiệm.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Friday)",
          "body": "Nắm vững nguyên lý “Máy tôi chạy được mà” để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-1-1",
            "label": "FAILRATE",
            "value": "30%",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-1-2",
            "label": "RESTORE",
            "value": "4 h",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-1-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: “Máy tôi chạy được mà”"
          },
          {
            "id": "chk-1-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "cicd-step-3",
        "number": 3,
        "title": "CI",
        "category": "THỰC THI",
        "categoryColor": "blue",
        "headline": "Tích hợp liên tục",
        "bodyHtml": "<p>Now every push to the shared repository starts a <span class=\"term\">pipeline</span> on a clean machine: build the code, run the tests (see <em>Testing</em>). Nothing depends on anyone’s laptop.</p>\n<p>The team merges small changes into <code>main</code> several times a day. A red pipeline means “stop and fix this first”, so <code>main</code> always builds and passes. That habit is <span class=\"term\">continuous integration</span>.</p>\n<div class=\"callout callout--tip\"><strong>Lưu ý Kỹ sư:</strong> Giữ pipeline nhanh: mười phút, không phải một giờ. Pipeline chậm khiến mọi người lại dồn thay đổi thành từng mẻ.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (CI)",
          "body": "Nắm vững nguyên lý Tích hợp liên tục để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-2-1",
            "label": "DEPLOYS",
            "value": "1 / week",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-2-2",
            "label": "LEADTIME",
            "value": "1 week",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-2-3",
            "label": "FAILRATE",
            "value": "15%",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-2-4",
            "label": "RESTORE",
            "value": "4 h",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-2-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Tích hợp liên tục"
          },
          {
            "id": "chk-2-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "cicd-step-4",
        "number": 4,
        "title": "One artifact",
        "category": "LÝ THUYẾT",
        "categoryColor": "emerald",
        "headline": "Build một lần, nâng cấp cùng một artifact",
        "bodyHtml": "<p>Giai đoạn cuối đóng gói kết quả thành một <b>artifact bất biến</b>, thường là một container image, gắn tag theo commit sinh ra nó, <code>checkout:3f9c2a1</code>, rồi lưu vào registry.</p>\n<p>Chính image đó được kiểm thử, triển khai lên staging rồi lên production. Chỉ cấu hình (địa chỉ, bí mật) là khác nhau giữa các môi trường. Thứ bạn đã kiểm thử là thứ bạn phát hành.</p>\n<div class=\"callout callout--tip\"><strong>Lưu ý Kỹ sư:</strong> Đừng bao giờ build lại cho production: build lại có thể kéo về phụ thuộc khác và tạo ra một chương trình khác với cái bạn đã kiểm thử.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (One artifact)",
          "body": "Nắm vững nguyên lý Build một lần, nâng cấp cùng một artifact để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-3-1",
            "label": "DEPLOYS",
            "value": "1 / week",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-3-2",
            "label": "LEADTIME",
            "value": "1 week",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-3-3",
            "label": "FAILRATE",
            "value": "10%",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-3-4",
            "label": "RESTORE",
            "value": "1 h",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-3-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Build một lần, nâng cấp cùng một artifact"
          },
          {
            "id": "chk-3-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "cicd-step-5",
        "number": 5,
        "title": "CD",
        "category": "THỰC THI",
        "categoryColor": "blue",
        "headline": "Phân phối liên tục",
        "bodyHtml": "<p>Mỗi image vượt qua đều được tự động triển khai lên <b>staging</b>, một bản sao nhỏ của production, nơi smoke test kiểm tra các hành trình chính. Từ đó nó có thể lên production bất cứ lúc nào.</p>\n<p>With <span class=\"term\">continuous delivery</span>, production is one button press away. With continuous <em>deployment</em>, there is no button: every green change goes out by itself.</p>\n<div class=\"callout callout--insight\"><strong>Lưu ý Kỹ sư:</strong> Triển khai hằng ngày khiến mỗi lần triển khai đều nhỏ: vài thay đổi, dễ review, dễ tìm thủ phạm, dễ hoàn tác.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (CD)",
          "body": "Nắm vững nguyên lý Phân phối liên tục để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-4-1",
            "label": "DEPLOYS",
            "value": "5 / day",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-4-2",
            "label": "LEADTIME",
            "value": "1 day",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-4-3",
            "label": "FAILRATE",
            "value": "8%",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-4-4",
            "label": "RESTORE",
            "value": "30 min",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-4-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Phân phối liên tục"
          },
          {
            "id": "chk-4-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "cicd-step-6",
        "number": 6,
        "title": "Blue-green",
        "category": "LÝ THUYẾT",
        "categoryColor": "emerald",
        "headline": "Blue-green: chuyển, đừng thay",
        "bodyHtml": "<p>How does a new version reach users without downtime? With <span class=\"term\">blue-green</span> deployment there are two identical production groups. Blue serves everyone on v41 while v42 starts on green and warms up.</p>\n<p>Rồi bộ cân bằng tải chuyển toàn bộ lưu lượng sang green cùng lúc. Nếu có gì không ổn, quay về blue chỉ mất vài giây: nó vẫn đang chạy, nguyên vẹn.</p>\n<div class=\"callout callout--tip\"><strong>Lưu ý Kỹ sư:</strong> Cái giá là gấp đôi năng lực trong lúc phát hành. Triển khai cuốn chiếu (xem <em>Cân bằng tải</em>) rẻ hơn nhưng hoàn tác chậm hơn.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Blue-green)",
          "body": "Nắm vững nguyên lý Blue-green: chuyển, đừng thay để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-5-1",
            "label": "DEPLOYS",
            "value": "5 / day",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-5-2",
            "label": "LEADTIME",
            "value": "1 day",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-5-3",
            "label": "FAILRATE",
            "value": "8%",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-5-4",
            "label": "RESTORE",
            "value": "1 min",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-5-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Blue-green: chuyển, đừng thay"
          },
          {
            "id": "chk-5-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "cicd-step-7",
        "number": 7,
        "title": "Canary",
        "category": "LÝ THUYẾT",
        "categoryColor": "emerald",
        "headline": "Canary: thử trước với vài người dùng",
        "bodyHtml": "<p>A <span class=\"term\">canary</span> release sends a small slice of real traffic — here 5% — to the new version, and compares its error rate and latency with the old version’s (see <em>Observability</em>).</p>\n<p>Nếu v42 tệ hơn, pipeline tự động rút nó lại và chỉ vài người dùng từng thấy nó. Nếu nó trụ vững, phần đó tăng dần: 25%, 50%, tất cả.</p>\n<div class=\"callout callout--insight\"><strong>Lưu ý Kỹ sư:</strong> Canary là kiểm thử trên production: môi trường duy nhất có người dùng thật, dữ liệu thật và các kiểu lưu lượng thật.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Canary)",
          "body": "Nắm vững nguyên lý Canary: thử trước với vài người dùng để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-6-1",
            "label": "DEPLOYS",
            "value": "5 / day",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-6-2",
            "label": "LEADTIME",
            "value": "1 day",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-6-3",
            "label": "FAILRATE",
            "value": "4%",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-6-4",
            "label": "RESTORE",
            "value": "1 min",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-6-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Canary: thử trước với vài người dùng"
          },
          {
            "id": "chk-6-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "cicd-step-8",
        "number": 8,
        "title": "Migrations",
        "category": "BỐI CẢNH",
        "categoryColor": "rose",
        "headline": "Tình huống: migration làm hỏng phiên bản cũ",
        "bodyHtml": "<p>v42 đổi tên một cột: <code>name</code> thành <code>full_name</code>. Migration chạy và v42 vui vẻ, nhưng trong lúc rollout phần lớn máy chủ vẫn ở v41, vốn hỏi <code>name</code> và nhận về lỗi.</p>\n<p>Fix it with <span class=\"term\">expand and contract</span>: add <code>full_name</code> and write both; backfill old rows; switch reads to <code>full_name</code>; only when no running version uses <code>name</code>, drop it. Every step works with both versions.</p>\n<div class=\"callout callout--warn\"><strong>Lưu ý Kỹ sư:</strong> Trong bất kỳ lần triển khai nào, code cũ và mới chạy song song trên cùng một cơ sở dữ liệu. Mọi thay đổi schema đều phải chạy được với cả hai.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Migrations)",
          "body": "Nắm vững nguyên lý Tình huống: migration làm hỏng phiên bản cũ để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-7-1",
            "label": "DEPLOYS",
            "value": "5 / day",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-7-2",
            "label": "LEADTIME",
            "value": "1 day",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-7-3",
            "label": "FAILRATE",
            "value": "4%",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-7-4",
            "label": "RESTORE",
            "value": "1 min",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-7-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Tình huống: migration làm hỏng phiên bản cũ"
          },
          {
            "id": "chk-7-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "cicd-step-9",
        "number": 9,
        "title": "Flags",
        "category": "LÝ THUYẾT",
        "categoryColor": "emerald",
        "headline": "Feature flag: triển khai không phải là phát hành",
        "bodyHtml": "<p>The new checkout page is merged and deployed weeks before launch — switched off. A <span class=\"term\">feature flag</span> decides, per request, who sees it: first the team, then 1% of users, then everyone.</p>\n<p>Tắt nó chỉ là một thiết lập, không phải một lần triển khai, nên sự cố được xử lý trong vài giây. Triển khai (đưa code lên máy chủ) và phát hành (cho người dùng thấy) trở thành hai quyết định tách biệt.</p>\n<div class=\"callout callout--tip\"><strong>Lưu ý Kỹ sư:</strong> Flag cũng là nợ: gỡ từng cái ngay khi tính năng đã ra mắt hoàn toàn, nếu không code sẽ đầy những nhánh mà không ai dám xóa.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Flags)",
          "body": "Nắm vững nguyên lý Feature flag: triển khai không phải là phát hành để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-8-1",
            "label": "DEPLOYS",
            "value": "20 / day",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-8-2",
            "label": "LEADTIME",
            "value": "2 h",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-8-3",
            "label": "FAILRATE",
            "value": "3%",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-8-4",
            "label": "RESTORE",
            "value": "1 min",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-8-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Feature flag: triển khai không phải là phát hành"
          },
          {
            "id": "chk-8-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "cicd-step-10",
        "number": 10,
        "title": "Measure",
        "category": "LÝ THUYẾT",
        "categoryColor": "violet",
        "headline": "Đo lường chính việc phát hành",
        "bodyHtml": "<p>Four numbers, known as the <span class=\"term\">DORA metrics</span>, describe how well a team ships: how often it deploys, how long a change takes from commit to production, how many deploys cause a problem, and how quickly service is restored when one does.</p>\n<p>Nghiên cứu trên hàng nghìn nhóm đã thấy đúng điều bài học này cho thấy: những nhóm phát hành thường xuyên nhất cũng là những nhóm ít làm hỏng production nhất, vì mỗi thay đổi đều nhỏ và mỗi lần hoàn tác đều nhanh.</p>\n<div class=\"callout callout--insight\"><strong>Lưu ý Kỹ sư:</strong> Tốc độ và an toàn ở đây không phải là đánh đổi. Những thay đổi nhỏ, thường xuyên, hoàn tác được cải thiện cả hai.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Measure)",
          "body": "Nắm vững nguyên lý Đo lường chính việc phát hành để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-9-1",
            "label": "DEPLOYS",
            "value": "20 / day",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-9-2",
            "label": "LEADTIME",
            "value": "2 h",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-9-3",
            "label": "FAILRATE",
            "value": "3%",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-9-4",
            "label": "RESTORE",
            "value": "1 min",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-9-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Đo lường chính việc phát hành"
          },
          {
            "id": "chk-9-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "cicd-step-11",
        "number": 11,
        "title": "Recap",
        "category": "TỐI ƯU",
        "categoryColor": "emerald",
        "headline": "Recap",
        "bodyHtml": "<div class=\"callout callout--next\"><strong>Lưu ý Kỹ sư:</strong> Đến đây là hết phần Phát hành. Mô-đun tiếp theo: <b>Hệ thống hoàn chỉnh</b>, bắt đầu với cách thiết kế cấp cao và cấp thấp ăn khớp với nhau.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Recap)",
          "body": "Nắm vững nguyên lý Recap để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-10-1",
            "label": "DEPLOYS",
            "value": "20 / day",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-10-2",
            "label": "LEADTIME",
            "value": "2 h",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-10-3",
            "label": "FAILRATE",
            "value": "3%",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-10-4",
            "label": "RESTORE",
            "value": "1 min",
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
  }
];
