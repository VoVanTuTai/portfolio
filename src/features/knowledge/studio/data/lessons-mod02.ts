import type { StudioLesson } from "../studio.types";

export const mod02Lessons: StudioLesson[] = [
  {
    "id": "vertical-horizontal",
    "slug": "vertical-horizontal",
    "title": "Mở rộng theo chiều dọc hay chiều ngang",
    "subtitle": "Vertical vs Horizontal Scaling · 11 phút thực chiến",
    "moduleCode": "02",
    "moduleTitle": "Mở Rộng Quy Mô & Cân Bằng Tải (Scaling)",
    "durationMinutes": 11,
    "difficulty": "Cơ bản",
    "steps": [
      {
        "id": "vertical-horizontal-step-1",
        "number": 1,
        "title": "One server",
        "category": "BỐI CẢNH",
        "categoryColor": "blue",
        "headline": "Mọi thứ bắt đầu với một server",
        "bodyHtml": "<p>Ứng dụng của bạn chạy trên một máy duy nhất. Mỗi yêu cầu (mở một trang, đăng một bức ảnh) đi từ thiết bị của người dùng tới server đó rồi quay về.</p>\n<p>Với một trăm người dùng nó gần như không nhận ra: CPU nhàn rỗi quanh <b>1%</b>.</p>\n<div class=\"callout callout--insight\"><strong>Lưu ý Kỹ sư:</strong> Một server có ngân sách cố định về CPU, bộ nhớ, ổ đĩa và mạng. <b>Năng lực</b> của nó là số yêu cầu mỗi giây nó phục vụ được trước khi một trong số đó cạn.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (One server)",
          "body": "Nắm vững nguyên lý Mọi thứ bắt đầu với một server để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-0-1",
            "label": "USERS",
            "value": "100",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-0-2",
            "label": "RPS",
            "value": "4",
            "level": "good",
            "iconName": "activity"
          },
          {
            "id": "tel-0-3",
            "label": "P95",
            "value": "80",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-0-4",
            "label": "ERRORS",
            "value": "0",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-0-5",
            "label": "COST",
            "value": "150",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-0-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Mọi thứ bắt đầu với một server"
          },
          {
            "id": "chk-0-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "vertical-horizontal-step-2",
        "number": 2,
        "title": "Viral spike",
        "category": "BỐI CẢNH",
        "categoryColor": "rose",
        "headline": "Rồi bạn lên viral",
        "bodyHtml": "<p>Một bài đăng bùng nổ và lưu lượng tăng vọt <b>120×</b>. Máy này phục vụ được khoảng 400 yêu cầu mỗi giây, mà có tới 480 đang đến. CPU kẹt ở 100%, các yêu cầu xếp hàng chờ lượt, độ trễ phình to và một số bỏ cuộc vì hết thời gian chờ.</p>\n<p>Bạn cần thêm năng lực. Có hai cách khác nhau về bản chất để có được nó.</p>\n<div class=\"callout callout--warn\"><strong>Lưu ý Kỹ sư:</strong> Quá tải trông như sau: CPU gần 100%, hàng đợi yêu cầu dài ra, độ trễ tăng, rồi timeout.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Viral spike)",
          "body": "Nắm vững nguyên lý Rồi bạn lên viral để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-1-1",
            "label": "USERS",
            "value": "12e3",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-1-2",
            "label": "RPS",
            "value": "480",
            "level": "good",
            "iconName": "activity"
          },
          {
            "id": "tel-1-3",
            "label": "P95",
            "value": "2400",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-1-4",
            "label": "ERRORS",
            "value": "17",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-1-5",
            "label": "COST",
            "value": "150",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-1-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Rồi bạn lên viral"
          },
          {
            "id": "chk-1-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "vertical-horizontal-step-3",
        "number": 3,
        "title": "Scale up",
        "category": "THỰC THI",
        "categoryColor": "blue",
        "headline": "Cách 1: mở rộng theo chiều dọc",
        "bodyHtml": "<p>Cách sửa đơn giản nhất: chuyển sang máy lớn hơn. Nhiều lõi hơn, nhiều bộ nhớ hơn, ổ đĩa nhanh hơn.</p>\n<p>Nothing about your design changes — the code doesn’t even know. This is <span class=\"term\">vertical scaling</span>, or <em>scaling up</em>.</p>\n<div class=\"callout callout--tip\"><strong>Lưu ý Kỹ sư:</strong> Mở rộng dọc là bước đầu tiên tuyệt vời: không sửa mã và không có gì mới phải vận hành. Máy gấp bốn, giá cũng khoảng gấp bốn.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Scale up)",
          "body": "Nắm vững nguyên lý Cách 1: mở rộng theo chiều dọc để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-2-1",
            "label": "USERS",
            "value": "12e3",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-2-2",
            "label": "RPS",
            "value": "480",
            "level": "good",
            "iconName": "activity"
          },
          {
            "id": "tel-2-3",
            "label": "P95",
            "value": "110",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-2-4",
            "label": "ERRORS",
            "value": "0",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-2-5",
            "label": "COST",
            "value": "600",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-2-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Cách 1: mở rộng theo chiều dọc"
          },
          {
            "id": "chk-2-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "vertical-horizontal-step-4",
        "number": 4,
        "title": "The ceiling",
        "category": "NGHIỆP VỤ BA",
        "categoryColor": "amber",
        "headline": "…cho tới khi bạn chạm trần",
        "bodyHtml": "<p>Tăng trưởng tiếp tục và bạn nâng cấp hết lần này tới lần khác, nhưng máy chỉ to được tới một mức. Ngay cả server đa dụng lớn nhất cũng không theo kịp, và phần mềm hiếm khi dùng 192 lõi tốt như khi dùng 16: khóa, bộ nhớ và một ổ đĩa dùng chung cản đường.</p>\n<p>Mỗi lần nâng cấp cũng là một lần di chuyển: khởi động lại, và ngừng dịch vụ trong lúc chuyển.</p>\n<div class=\"callout callout--warn\"><strong>Lưu ý Kỹ sư:</strong> Mở rộng dọc có một trần cứng. Trên đám mây, giá tăng gần như theo kích thước, cho tới đỉnh của dải sản phẩm, nơi những cỗ máy đặc biệt có giá cao hơn và gấp đôi số lõi không còn nghĩa là gấp đôi thông lượng.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (The ceiling)",
          "body": "Nắm vững nguyên lý …cho tới khi bạn chạm trần để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-3-1",
            "label": "USERS",
            "value": "5e5",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-3-2",
            "label": "RPS",
            "value": "2e4",
            "level": "good",
            "iconName": "activity"
          },
          {
            "id": "tel-3-3",
            "label": "P95",
            "value": "3100",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-3-4",
            "label": "ERRORS",
            "value": "12",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-3-5",
            "label": "COST",
            "value": "7200",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-3-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: …cho tới khi bạn chạm trần"
          },
          {
            "id": "chk-3-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "vertical-horizontal-step-5",
        "number": 5,
        "title": "One failure",
        "category": "BỐI CẢNH",
        "categoryColor": "rose",
        "headline": "…và nó là điểm lỗi duy nhất",
        "bodyHtml": "<p>Tệ hơn, mọi thứ phụ thuộc vào một máy. Một lần triển khai lỗi, một ổ đĩa đầy hay một bộ nguồn hỏng, và toàn bộ sản phẩm ngừng hoạt động.</p>\n<p>A component whose failure takes the entire system down is a <span class=\"term\">single point of failure</span> (SPOF).</p>\n<div class=\"callout callout--warn\"><strong>Lưu ý Kỹ sư:</strong> Dù to đến đâu, một máy luôn chỉ cách sự cố sập toàn bộ đúng một lần hỏng.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (One failure)",
          "body": "Nắm vững nguyên lý …và nó là điểm lỗi duy nhất để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-4-1",
            "label": "USERS",
            "value": "5e5",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-4-2",
            "label": "RPS",
            "value": "2e4",
            "level": "good",
            "iconName": "activity"
          },
          {
            "id": "tel-4-3",
            "label": "ERRORS",
            "value": "100",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-4-4",
            "label": "COST",
            "value": "7200",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-4-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: …và nó là điểm lỗi duy nhất"
          },
          {
            "id": "chk-4-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "vertical-horizontal-step-6",
        "number": 6,
        "title": "Scale out",
        "category": "THỰC THI",
        "categoryColor": "blue",
        "headline": "Cách 2: mở rộng theo chiều ngang",
        "bodyHtml": "<p>Thay vì một máy khổng lồ, chạy vài máy cỡ vừa cạnh nhau (ở đây là bốn máy, mỗi máy 96 vCPU), tất cả chạy cùng một mã.</p>\n<p>Need more capacity? Add another server. Mid-size machines are the best value, there’s no hard ceiling, and each one is a small slice of the whole. This is <span class=\"term\">horizontal scaling</span>, or <em>scaling out</em> — how virtually every large system grows.</p>\n<div class=\"callout callout--tip\"><strong>Lưu ý Kỹ sư:</strong> Bốn server 96 vCPU có năng lực gấp đôi máy đơn lớn nhất, và bất kỳ máy nào cũng có thể hỏng trong khi ba máy còn lại gánh tải.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Scale out)",
          "body": "Nắm vững nguyên lý Cách 2: mở rộng theo chiều ngang để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-5-1",
            "label": "USERS",
            "value": "5e5",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-5-2",
            "label": "RPS",
            "value": "2e4",
            "level": "good",
            "iconName": "activity"
          },
          {
            "id": "tel-5-3",
            "label": "P95",
            "value": "95",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-5-4",
            "label": "ERRORS",
            "value": "0",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-5-5",
            "label": "COST",
            "value": "14400",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-5-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Cách 2: mở rộng theo chiều ngang"
          },
          {
            "id": "chk-5-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "vertical-horizontal-step-7",
        "number": 7,
        "title": "Night time",
        "category": "BỐI CẢNH",
        "categoryColor": "rose",
        "headline": "Năng lực đỉnh, nhàn rỗi cả đêm",
        "bodyHtml": "<p>Lưu lượng đi theo đồng hồ. Lúc 8 giờ tối bạn cần cả bốn server; lúc 4 giờ sáng lưu lượng chỉ bằng một phần mười, và chúng ngồi ở 5% CPU.</p>\n<p>Bạn trả tiền cho năng lực đỉnh 24 giờ mỗi ngày. Phần lớn thời gian, phần lớn số đó không làm gì cả.</p>\n<div class=\"callout callout--insight\"><strong>Lưu ý Kỹ sư:</strong> Ứng dụng tiêu dùng thường dao động 3–10× giữa đỉnh và đáy trong ngày.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Night time)",
          "body": "Nắm vững nguyên lý Năng lực đỉnh, nhàn rỗi cả đêm để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-6-1",
            "label": "USERS",
            "value": "5e4",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-6-2",
            "label": "RPS",
            "value": "2e3",
            "level": "good",
            "iconName": "activity"
          },
          {
            "id": "tel-6-3",
            "label": "P95",
            "value": "90",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-6-4",
            "label": "ERRORS",
            "value": "0",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-6-5",
            "label": "COST",
            "value": "14400",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-6-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Năng lực đỉnh, nhàn rỗi cả đêm"
          },
          {
            "id": "chk-6-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "vertical-horizontal-step-8",
        "number": 8,
        "title": "Autoscale",
        "category": "THỰC THI",
        "categoryColor": "blue",
        "headline": "Tự động co giãn: theo sát nhu cầu",
        "bodyHtml": "<p>Because the servers are interchangeable, an <span class=\"term\">autoscaler</span> can add and remove them automatically — for example, keep average CPU near 50%.</p>\n<p>Ban đêm nó thu nhỏ (<b>scale in</b>) còn hai server (không bao giờ ít hơn, để một máy vẫn có thể hỏng) và buổi tối nó lại mở rộng (<b>scale out</b>). Bạn trả gần đúng theo mức dùng.</p>\n<div class=\"callout callout--tip\"><strong>Lưu ý Kỹ sư:</strong> Tự động co giãn chỉ hoạt động khi server là phi trạng thái và đứng sau bộ cân bằng tải: hai bài học tiếp theo.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Autoscale)",
          "body": "Nắm vững nguyên lý Tự động co giãn: theo sát nhu cầu để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-7-1",
            "label": "USERS",
            "value": "5e4",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-7-2",
            "label": "RPS",
            "value": "2e3",
            "level": "good",
            "iconName": "activity"
          },
          {
            "id": "tel-7-3",
            "label": "P95",
            "value": "90",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-7-4",
            "label": "ERRORS",
            "value": "0",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-7-5",
            "label": "COST",
            "value": "10800",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-7-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Tự động co giãn: theo sát nhu cầu"
          },
          {
            "id": "chk-7-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "vertical-horizontal-step-9",
        "number": 9,
        "title": "Flash sale",
        "category": "BỐI CẢNH",
        "categoryColor": "rose",
        "headline": "Tình huống: flash sale",
        "bodyHtml": "<p>Buổi trưa, hai server thoải mái phục vụ 150.000 người dùng. Rồi một đợt flash sale bắt đầu và lưu lượng tăng vọt <b>5×</b> trong hai phút. Autoscaler phản ứng, nhưng một server mới mất khoảng ba phút để khởi động và làm nóng.</p>\n<p>Trong những phút đó, hai server đang chạy chỉ phục vụ được khoảng hai phần ba lưu lượng. Cách khắc phục là mở rộng <b>trước</b> đợt tăng vọt: mở rộng theo lịch cho sự kiện đã biết, và dư địa cho những sự kiện chưa biết.</p>\n<div class=\"callout callout--warn\"><strong>Lưu ý Kỹ sư:</strong> Tự động co giãn chỉ phản ứng; nó không dự đoán được. Hãy làm nóng trước cho các đợt ra mắt, khuyến mãi và phát sóng lớn.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Flash sale)",
          "body": "Nắm vững nguyên lý Tình huống: flash sale để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-8-1",
            "label": "USERS",
            "value": "75e4",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-8-2",
            "label": "RPS",
            "value": "3e4",
            "level": "good",
            "iconName": "activity"
          },
          {
            "id": "tel-8-3",
            "label": "P95",
            "value": "2800",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-8-4",
            "label": "ERRORS",
            "value": "36",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-8-5",
            "label": "COST",
            "value": "21600",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-8-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Tình huống: flash sale"
          },
          {
            "id": "chk-8-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "vertical-horizontal-step-10",
        "number": 10,
        "title": "Who routes?",
        "category": "BỐI CẢNH",
        "categoryColor": "rose",
        "headline": "Nhưng ai gửi người dùng đi đâu?",
        "bodyHtml": "<p>Hiện mỗi nhóm người dùng bị gắn cứng vào địa chỉ của một server. Khi Server B chết, một phần tư người dùng của bạn gặp lỗi, dù ba server khỏe mạnh ở ngay đó.</p>\n<p>Client không biết server nào còn sống hay đang bận. Phải có thứ gì đó đứng phía trước và điều hướng mỗi yêu cầu tới một server khỏe mạnh.</p>\n<div class=\"callout callout--insight\"><strong>Lưu ý Kỹ sư:</strong> Thứ đó là <b>bộ cân bằng tải</b>, chủ đề của bài học tiếp theo.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Who routes?)",
          "body": "Nắm vững nguyên lý Nhưng ai gửi người dùng đi đâu? để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-9-1",
            "label": "USERS",
            "value": "5e5",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-9-2",
            "label": "RPS",
            "value": "2e4",
            "level": "good",
            "iconName": "activity"
          },
          {
            "id": "tel-9-3",
            "label": "P95",
            "value": "95",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-9-4",
            "label": "ERRORS",
            "value": "25",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-9-5",
            "label": "COST",
            "value": "14400",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-9-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Nhưng ai gửi người dùng đi đâu?"
          },
          {
            "id": "chk-9-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "vertical-horizontal-step-11",
        "number": 11,
        "title": "Recap",
        "category": "TỐI ƯU",
        "categoryColor": "emerald",
        "headline": "Tổng kết: dọc hay ngang",
        "bodyHtml": "<div class=\"callout callout--tip\"><strong>Lưu ý Kỹ sư:</strong> Quy tắc kinh nghiệm: mở rộng dọc khi còn rẻ và đơn giản, sau đó mở rộng ngang.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Recap)",
          "body": "Nắm vững nguyên lý Tổng kết: dọc hay ngang để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-10-1",
            "label": "USERS",
            "value": "5e5",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-10-2",
            "label": "RPS",
            "value": "2e4",
            "level": "good",
            "iconName": "activity"
          },
          {
            "id": "tel-10-3",
            "label": "P95",
            "value": "95",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-10-4",
            "label": "ERRORS",
            "value": "0",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-10-5",
            "label": "COST",
            "value": "14400",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-10-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Tổng kết: dọc hay ngang"
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
    "id": "load-balancing",
    "slug": "load-balancing",
    "title": "Cân bằng tải",
    "subtitle": "Load Balancing · 12 phút thực chiến",
    "moduleCode": "02",
    "moduleTitle": "Mở Rộng Quy Mô & Cân Bằng Tải (Scaling)",
    "durationMinutes": 12,
    "difficulty": "Cơ bản",
    "steps": [
      {
        "id": "load-balancing-step-1",
        "number": 1,
        "title": "Hot spot",
        "category": "BỐI CẢNH",
        "categoryColor": "rose",
        "headline": "Ba server, một địa chỉ",
        "bodyHtml": "<p>Ta đã mở rộng lên ba server, nhưng người dùng chỉ biết một địa chỉ, cái nằm trong DNS. Mọi yêu cầu đều rơi vào Server B trong khi A và C ngồi không.</p>\n<p>Phần cứng thêm vào chẳng giúp gì. Ta cần một cửa trước duy nhất để rải yêu cầu ra tất cả các server.</p>\n<div class=\"callout callout--warn\"><strong>Lưu ý Kỹ sư:</strong> Thêm server chỉ có ích nếu lưu lượng thực sự tới được chúng.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Hot spot)",
          "body": "Nắm vững nguyên lý Ba server, một địa chỉ để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-0-1",
            "label": "USERS",
            "value": "2e5",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-0-2",
            "label": "RPS",
            "value": "6e3",
            "level": "good",
            "iconName": "activity"
          },
          {
            "id": "tel-0-3",
            "label": "P95",
            "value": "1800",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-0-4",
            "label": "ERRORS",
            "value": "12",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-0-5",
            "label": "HEALTHY",
            "value": "3 / 3",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-0-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Ba server, một địa chỉ"
          },
          {
            "id": "chk-0-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "load-balancing-step-2",
        "number": 2,
        "title": "Add an LB",
        "category": "THỰC THI",
        "categoryColor": "blue",
        "headline": "Đặt một bộ cân bằng tải phía trước",
        "bodyHtml": "<p>A <span class=\"term\">load balancer</span> (LB) becomes the one public address of the service. Clients connect to it; it forwards each request to one of the servers behind it and relays the answer back.</p>\n<p>Giờ server có thể thêm bớt mà client không bao giờ biết.</p>\n<div class=\"callout callout--insight\"><strong>Lưu ý Kỹ sư:</strong> Các server phía sau một bộ cân bằng tải được gọi là <b>pool</b> của nó (hay target group).</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Add an LB)",
          "body": "Nắm vững nguyên lý Đặt một bộ cân bằng tải phía trước để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-1-1",
            "label": "USERS",
            "value": "2e5",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-1-2",
            "label": "RPS",
            "value": "6e3",
            "level": "good",
            "iconName": "activity"
          },
          {
            "id": "tel-1-3",
            "label": "P95",
            "value": "90",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-1-4",
            "label": "ERRORS",
            "value": "0",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-1-5",
            "label": "HEALTHY",
            "value": "3 / 3",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-1-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Đặt một bộ cân bằng tải phía trước"
          },
          {
            "id": "chk-1-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "load-balancing-step-3",
        "number": 3,
        "title": "Round robin",
        "category": "LÝ THUYẾT",
        "categoryColor": "emerald",
        "headline": "Round robin: lần lượt",
        "bodyHtml": "<p>How does the LB choose? The simplest rule is <span class=\"term\">round robin</span>: A, then B, then C, then A again. Watch the requests go out in turn.</p>\n<p>Nó rẻ và công bằng, miễn là các server mạnh như nhau và mỗi yêu cầu tốn công gần như nhau.</p>\n<div class=\"callout callout--tip\"><strong>Lưu ý Kỹ sư:</strong> Round robin <b>có trọng số</b> chia phần lớn hơn cho server lớn hơn, ví dụ A : B : C = 2 : 1 : 1.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Round robin)",
          "body": "Nắm vững nguyên lý Round robin: lần lượt để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-2-1",
            "label": "USERS",
            "value": "2e5",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-2-2",
            "label": "RPS",
            "value": "6e3",
            "level": "good",
            "iconName": "activity"
          },
          {
            "id": "tel-2-3",
            "label": "P95",
            "value": "90",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-2-4",
            "label": "ERRORS",
            "value": "0",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-2-5",
            "label": "HEALTHY",
            "value": "3 / 3",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-2-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Round robin: lần lượt"
          },
          {
            "id": "chk-2-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "load-balancing-step-4",
        "number": 4,
        "title": "Heavy work",
        "category": "BỐI CẢNH",
        "categoryColor": "rose",
        "headline": "Khi các yêu cầu không ngang nhau",
        "bodyHtml": "<p>Lưu lượng thật lổn nhổn. Tải một trang mất 5 ms; xuất báo cáo cả năm mất 5 giây. Round robin đếm <em>yêu cầu</em>, không đếm <em>khối lượng việc</em>.</p>\n<p>Ở đây cứ yêu cầu thứ ba là nặng (các ô vuông lớn), và do may rủi của vòng quay, tất cả rơi vào Server B. Nó ngộp thở trong khi A và C nhàn nhã.</p>\n<div class=\"callout callout--warn\"><strong>Lưu ý Kỹ sư:</strong> Round robin không biết một server thực sự bận đến mức nào.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Heavy work)",
          "body": "Nắm vững nguyên lý Khi các yêu cầu không ngang nhau để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-3-1",
            "label": "USERS",
            "value": "2e5",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-3-2",
            "label": "RPS",
            "value": "6e3",
            "level": "good",
            "iconName": "activity"
          },
          {
            "id": "tel-3-3",
            "label": "P95",
            "value": "1200",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-3-4",
            "label": "ERRORS",
            "value": "3",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-3-5",
            "label": "HEALTHY",
            "value": "3 / 3",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-3-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Khi các yêu cầu không ngang nhau"
          },
          {
            "id": "chk-3-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "load-balancing-step-5",
        "number": 5,
        "title": "Least conns",
        "category": "LÝ THUYẾT",
        "categoryColor": "emerald",
        "headline": "Ít kết nối nhất",
        "bodyHtml": "<p>With <span class=\"term\">least connections</span>, the LB tracks how many requests each server is busy with and sends the next one to the least busy.</p>\n<p>Server bị kẹt với việc chậm giữ nhiều kết nối mở hơn, nên tự động nhận ít việc mới hơn. Tải được san đều.</p>\n<div class=\"callout callout--tip\"><strong>Lưu ý Kỹ sư:</strong> Các chiến lược khác: <b>thời gian phản hồi ngắn nhất</b>, <b>IP hash</b> (cùng client → cùng server) và <b>power of two choices</b> (chọn ngẫu nhiên hai, dùng cái ít bận hơn).</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Least conns)",
          "body": "Nắm vững nguyên lý Ít kết nối nhất để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-4-1",
            "label": "USERS",
            "value": "2e5",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-4-2",
            "label": "RPS",
            "value": "6e3",
            "level": "good",
            "iconName": "activity"
          },
          {
            "id": "tel-4-3",
            "label": "P95",
            "value": "140",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-4-4",
            "label": "ERRORS",
            "value": "0",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-4-5",
            "label": "HEALTHY",
            "value": "3 / 3",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-4-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Ít kết nối nhất"
          },
          {
            "id": "chk-4-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "load-balancing-step-6",
        "number": 6,
        "title": "Health checks",
        "category": "LÝ THUYẾT",
        "categoryColor": "emerald",
        "headline": "Health check định tuyến tránh sự cố",
        "bodyHtml": "<p>Cứ vài giây LB lại thăm dò từng server, chẳng hạn bằng <code>GET /health</code>. Server nào trượt vài lần kiểm tra liên tiếp sẽ bị đưa ra khỏi pool; khi hồi phục, nó được đưa trở lại.</p>\n<p>Server C vừa sập, và người dùng không nhận ra gì cả. Ở bài trước, một server chết nghĩa là lỗi cho một phần tư người dùng.</p>\n<div class=\"callout callout--insight\"><strong>Lưu ý Kỹ sư:</strong> Health check cộng với server dự phòng nghĩa là không còn server nào là điểm lỗi duy nhất nữa.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Health checks)",
          "body": "Nắm vững nguyên lý Health check định tuyến tránh sự cố để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-5-1",
            "label": "USERS",
            "value": "2e5",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-5-2",
            "label": "RPS",
            "value": "6e3",
            "level": "good",
            "iconName": "activity"
          },
          {
            "id": "tel-5-3",
            "label": "P95",
            "value": "150",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-5-4",
            "label": "ERRORS",
            "value": "0",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-5-5",
            "label": "HEALTHY",
            "value": "2 / 3",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-5-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Health check định tuyến tránh sự cố"
          },
          {
            "id": "chk-5-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "load-balancing-step-7",
        "number": 7,
        "title": "LB fails",
        "category": "BỐI CẢNH",
        "categoryColor": "rose",
        "headline": "Ai cân bằng cho bộ cân bằng?",
        "bodyHtml": "<p>Ta đã loại một điểm lỗi duy nhất và tạo ra một cái khác. Giờ mọi yêu cầu đi qua một bộ cân bằng tải; khi nó chết, mọi thứ phía sau cũng chết theo.</p>\n<p>Các server hoàn toàn khỏe mạnh. Không ai tới được chúng.</p>\n<div class=\"callout callout--warn\"><strong>Lưu ý Kỹ sư:</strong> Bất cứ thứ gì mà mọi yêu cầu đều phụ thuộc vào thì bản thân nó cũng phải có dự phòng.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (LB fails)",
          "body": "Nắm vững nguyên lý Ai cân bằng cho bộ cân bằng? để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-6-1",
            "label": "USERS",
            "value": "2e5",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-6-2",
            "label": "RPS",
            "value": "6e3",
            "level": "good",
            "iconName": "activity"
          },
          {
            "id": "tel-6-3",
            "label": "ERRORS",
            "value": "100",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-6-4",
            "label": "HEALTHY",
            "value": "3 / 3",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-6-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Ai cân bằng cho bộ cân bằng?"
          },
          {
            "id": "chk-6-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "load-balancing-step-8",
        "number": 8,
        "title": "Standby",
        "category": "THỰC THI",
        "categoryColor": "blue",
        "headline": "Thêm một máy dự phòng",
        "bodyHtml": "<p>Run two load balancers: an <b>active</b> one serving traffic and a <b>passive</b> standby. They share a <span class=\"term\">virtual IP</span> (VIP) — the address clients actually use — and exchange heartbeats every second.</p>\n<div class=\"callout callout--tip\"><strong>Lưu ý Kỹ sư:</strong> Bộ cân bằng tải trên đám mây (AWS ELB, Google Cloud LB…) làm việc này giúp bạn: chúng chạy dự phòng trên nhiều máy và nhiều vùng.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Standby)",
          "body": "Nắm vững nguyên lý Thêm một máy dự phòng để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-7-1",
            "label": "USERS",
            "value": "2e5",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-7-2",
            "label": "RPS",
            "value": "6e3",
            "level": "good",
            "iconName": "activity"
          },
          {
            "id": "tel-7-3",
            "label": "P95",
            "value": "90",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-7-4",
            "label": "ERRORS",
            "value": "0",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-7-5",
            "label": "HEALTHY",
            "value": "3 / 3",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-7-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Thêm một máy dự phòng"
          },
          {
            "id": "chk-7-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "load-balancing-step-9",
        "number": 9,
        "title": "Failover",
        "category": "THỰC THI",
        "categoryColor": "blue",
        "headline": "Chuyển đổi dự phòng trong vài giây",
        "bodyHtml": "<p>LB chủ động chết. Máy dự phòng nhận ra heartbeat bị mất, giành lấy IP ảo và bắt đầu chuyển tiếp lưu lượng.</p>\n<p>Client vẫn dùng cùng địa chỉ. Tệ nhất, vài yêu cầu đang dở được thử lại.</p>\n<div class=\"callout callout--insight\"><strong>Lưu ý Kỹ sư:</strong> Mẫu này, <b>chuyển đổi dự phòng chủ động–thụ động</b>, cũng bảo vệ cơ sở dữ liệu, cache và hàng đợi.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Failover)",
          "body": "Nắm vững nguyên lý Chuyển đổi dự phòng trong vài giây để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-8-1",
            "label": "USERS",
            "value": "2e5",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-8-2",
            "label": "RPS",
            "value": "6e3",
            "level": "good",
            "iconName": "activity"
          },
          {
            "id": "tel-8-3",
            "label": "P95",
            "value": "95",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-8-4",
            "label": "ERRORS",
            "value": "0",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-8-5",
            "label": "HEALTHY",
            "value": "3 / 3",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-8-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Chuyển đổi dự phòng trong vài giây"
          },
          {
            "id": "chk-8-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "load-balancing-step-10",
        "number": 10,
        "title": "By path",
        "category": "LÝ THUYẾT",
        "categoryColor": "emerald",
        "headline": "Định tuyến theo nội dung yêu cầu",
        "bodyHtml": "<p>Bộ cân bằng tải có hai loại. Loại <b>tầng 4</b> chỉ thấy địa chỉ IP và cổng, và chuyển tiếp nguyên cả kết nối. Loại <b>tầng 7</b> đọc chính yêu cầu HTTP.</p>\n<p>Nhờ vậy nó định tuyến được theo đường dẫn: <code>/api/*</code> tới các server API, <code>/images/*</code> tới một dịch vụ ảnh riêng, mỗi pool được mở rộng và triển khai độc lập.</p>\n<div class=\"callout callout--tip\"><strong>Lưu ý Kỹ sư:</strong> Bộ cân bằng L7 còn định tuyến được theo tên host, header hay cookie, kết thúc TLS, và thêm cache hoặc nén.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (By path)",
          "body": "Nắm vững nguyên lý Định tuyến theo nội dung yêu cầu để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-9-1",
            "label": "USERS",
            "value": "2e5",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-9-2",
            "label": "RPS",
            "value": "6e3",
            "level": "good",
            "iconName": "activity"
          },
          {
            "id": "tel-9-3",
            "label": "P95",
            "value": "85",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-9-4",
            "label": "ERRORS",
            "value": "0",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-9-5",
            "label": "HEALTHY",
            "value": "3 / 3",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-9-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Định tuyến theo nội dung yêu cầu"
          },
          {
            "id": "chk-9-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "load-balancing-step-11",
        "number": 11,
        "title": "Deploy",
        "category": "LÝ THUYẾT",
        "categoryColor": "emerald",
        "headline": "Tình huống: triển khai không ngừng dịch vụ",
        "bodyHtml": "<p>Time to ship version 2. A <span class=\"term\">rolling deploy</span> updates one server at a time: the load balancer first <b>drains</b> it — no new requests, but in-flight ones finish — then it’s updated, passes its health check and rejoins.</p>\n<p>Ở đây C đã lên v2, B đang được rút cạn, và A chờ tới lượt. Người dùng không bao giờ thấy lỗi.</p>\n<div class=\"callout callout--tip\"><strong>Lưu ý Kỹ sư:</strong> Triển khai blue-green còn đi xa hơn: dựng một pool v2 đầy đủ, rồi chuyển bộ cân bằng tải sang một lần, và chuyển về nếu có gì không ổn.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Deploy)",
          "body": "Nắm vững nguyên lý Tình huống: triển khai không ngừng dịch vụ để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-10-1",
            "label": "USERS",
            "value": "2e5",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-10-2",
            "label": "RPS",
            "value": "6e3",
            "level": "good",
            "iconName": "activity"
          },
          {
            "id": "tel-10-3",
            "label": "P95",
            "value": "95",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-10-4",
            "label": "ERRORS",
            "value": "0",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-10-5",
            "label": "HEALTHY",
            "value": "2 / 3",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-10-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Tình huống: triển khai không ngừng dịch vụ"
          },
          {
            "id": "chk-10-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "load-balancing-step-12",
        "number": 12,
        "title": "Recap",
        "category": "TỐI ƯU",
        "categoryColor": "emerald",
        "headline": "Recap",
        "bodyHtml": "<div class=\"callout callout--next\"><strong>Lưu ý Kỹ sư:</strong> Tiếp theo: <b>Dịch vụ phi trạng thái</b>: điều gì hỏng khi yêu cầu tiếp theo của người dùng rơi vào một server khác.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Recap)",
          "body": "Nắm vững nguyên lý Recap để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-11-1",
            "label": "USERS",
            "value": "2e5",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-11-2",
            "label": "RPS",
            "value": "6e3",
            "level": "good",
            "iconName": "activity"
          },
          {
            "id": "tel-11-3",
            "label": "P95",
            "value": "90",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-11-4",
            "label": "ERRORS",
            "value": "0",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-11-5",
            "label": "HEALTHY",
            "value": "3 / 3",
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
    "id": "stateless",
    "slug": "stateless",
    "title": "Dịch vụ phi trạng thái",
    "subtitle": "Stateless Services · 10 phút thực chiến",
    "moduleCode": "02",
    "moduleTitle": "Mở Rộng Quy Mô & Cân Bằng Tải (Scaling)",
    "durationMinutes": 10,
    "difficulty": "Cơ bản",
    "steps": [
      {
        "id": "stateless-step-1",
        "number": 1,
        "title": "Logged in",
        "category": "BỐI CẢNH",
        "categoryColor": "blue",
        "headline": "Alice đăng nhập",
        "bodyHtml": "<p>Alice signs in and adds two things to her cart. Her request happened to land on Server A, which keeps a <span class=\"term\">session</span> in its memory: who she is and what’s in her cart.</p>\n<p>Trình duyệt của cô giữ một cookie chứa id phiên, để các yêu cầu sau tìm lại được phiên đó.</p>\n<div class=\"callout callout--insight\"><strong>Lưu ý Kỹ sư:</strong> <b>Trạng thái</b> là bất cứ thứ gì server ghi nhớ giữa các yêu cầu: đăng nhập, giỏ hàng, tệp tải lên dở dang.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Logged in)",
          "body": "Nắm vững nguyên lý Alice đăng nhập để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-0-1",
            "label": "OK",
            "value": "1 / 1",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-0-2",
            "label": "EXTRA",
            "value": "+0 ms",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-0-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Alice đăng nhập"
          },
          {
            "id": "chk-0-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "stateless-step-2",
        "number": 2,
        "title": "Logged out",
        "category": "BỐI CẢNH",
        "categoryColor": "rose",
        "headline": "Yêu cầu tiếp theo rơi vào chỗ khác",
        "bodyHtml": "<p>Bộ cân bằng tải đang làm đúng việc: round robin gửi các yêu cầu tiếp theo của Alice tới B rồi tới C. Cả hai chưa từng nghe về cô.</p>\n<p>Với Alice, ứng dụng bị hỏng: trang này hiện giỏ hàng, trang sau lại bắt cô đăng nhập lại.</p>\n<div class=\"callout callout--warn\"><strong>Lưu ý Kỹ sư:</strong> Nếu một server giữ trạng thái trong bộ nhớ, mọi server khác đều vô dụng với người dùng đó.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Logged out)",
          "body": "Nắm vững nguyên lý Yêu cầu tiếp theo rơi vào chỗ khác để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-1-1",
            "label": "OK",
            "value": "1 / 3",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-1-2",
            "label": "SURVIVE",
            "value": "no",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-1-3",
            "label": "SCALE",
            "value": "no",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-1-4",
            "label": "EXTRA",
            "value": "+0 ms",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-1-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Yêu cầu tiếp theo rơi vào chỗ khác"
          },
          {
            "id": "chk-1-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "stateless-step-3",
        "number": 3,
        "title": "Sticky",
        "category": "THỰC THI",
        "categoryColor": "blue",
        "headline": "Cách 1: sticky session",
        "bodyHtml": "<p>Bảo bộ cân bằng tải nhớ mỗi người dùng bắt đầu ở đâu (thường bằng cookie) và cứ gửi họ về đó. Alice luôn tới A, nên cô vẫn đăng nhập.</p>\n<p>Bật nhanh, không cần sửa mã.</p>\n<div class=\"callout callout--warn\"><strong>Lưu ý Kỹ sư:</strong> Người dùng bị dính không thể di chuyển. Nếu nhiều người dồn vào một server, nó vẫn quá tải trong khi các server khác ngồi không.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Sticky)",
          "body": "Nắm vững nguyên lý Cách 1: sticky session để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-2-1",
            "label": "OK",
            "value": "3 / 3",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-2-2",
            "label": "SURVIVE",
            "value": "no",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-2-3",
            "label": "SCALE",
            "value": "limited",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-2-4",
            "label": "EXTRA",
            "value": "+0 ms",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-2-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Cách 1: sticky session"
          },
          {
            "id": "chk-2-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "stateless-step-4",
        "number": 4,
        "title": "A dies",
        "category": "BỐI CẢNH",
        "categoryColor": "rose",
        "headline": "…cho tới khi Server A chết",
        "bodyHtml": "<p>Server A sập. Bộ cân bằng tải làm đúng và chuyển Alice sang B, nhưng phiên của cô đã chết theo bộ nhớ của A.</p>\n<p>Cô bị đăng xuất và giỏ hàng trống trơn. Mọi người dùng gắn với A vừa trải qua điều tương tự.</p>\n<div class=\"callout callout--warn\"><strong>Lưu ý Kỹ sư:</strong> Sticky session biến mỗi server thành một điểm lỗi duy nhất nho nhỏ đối với người dùng của nó.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (A dies)",
          "body": "Nắm vững nguyên lý …cho tới khi Server A chết để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-3-1",
            "label": "OK",
            "value": "0 / 3",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-3-2",
            "label": "SURVIVE",
            "value": "no",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-3-3",
            "label": "SCALE",
            "value": "limited",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-3-4",
            "label": "EXTRA",
            "value": "+0 ms",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-3-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: …cho tới khi Server A chết"
          },
          {
            "id": "chk-3-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "stateless-step-5",
        "number": 5,
        "title": "Shared store",
        "category": "THỰC THI",
        "categoryColor": "blue",
        "headline": "Cách 2: đưa trạng thái ra ngoài",
        "bodyHtml": "<p>Keep sessions in a shared, fast <span class=\"term\">session store</span> (often Redis). Every server reads Alice’s session from it, so any server can handle any request.</p>\n<p>The servers are now <span class=\"term\">stateless</span>: they remember nothing between requests. Round robin is back, and she stays signed in.</p>\n<div class=\"callout callout--tip\"><strong>Lưu ý Kỹ sư:</strong> Cái giá: thêm một bước nhảy khoảng một mili giây mỗi yêu cầu. Rẻ, để đổi lấy những server có thể thêm, bớt hay mất tùy ý.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Shared store)",
          "body": "Nắm vững nguyên lý Cách 2: đưa trạng thái ra ngoài để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-4-1",
            "label": "OK",
            "value": "3 / 3",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-4-2",
            "label": "SURVIVE",
            "value": "yes",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-4-3",
            "label": "SCALE",
            "value": "yes",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-4-4",
            "label": "EXTRA",
            "value": "+1 ms",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-4-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Cách 2: đưa trạng thái ra ngoài"
          },
          {
            "id": "chk-4-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "stateless-step-6",
        "number": 6,
        "title": "Lose one",
        "category": "LÝ THUYẾT",
        "categoryColor": "violet",
        "headline": "Giờ mất một server chẳng còn là chuyện gì",
        "bodyHtml": "<p>Server A lại chết. Bộ cân bằng tải định tuyến vòng qua nó, B và C đọc cùng một phiên từ kho, và Alice không nhận ra gì.</p>\n<p>Đây là điều làm tự động co giãn trở nên khả thi: server có thể được tạo và hủy bất cứ lúc nào.</p>\n<div class=\"callout callout--insight\"><strong>Lưu ý Kỹ sư:</strong> Server phi trạng thái là gia súc, không phải thú cưng: máy nào cũng thay được mà không ai nhận ra.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Lose one)",
          "body": "Nắm vững nguyên lý Giờ mất một server chẳng còn là chuyện gì để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-5-1",
            "label": "OK",
            "value": "3 / 3",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-5-2",
            "label": "SURVIVE",
            "value": "yes",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-5-3",
            "label": "SCALE",
            "value": "yes",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-5-4",
            "label": "EXTRA",
            "value": "+1 ms",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-5-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Giờ mất một server chẳng còn là chuyện gì"
          },
          {
            "id": "chk-5-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "stateless-step-7",
        "number": 7,
        "title": "Tokens",
        "category": "LÝ THUYẾT",
        "categoryColor": "emerald",
        "headline": "Hoặc: để yêu cầu mang theo nó",
        "bodyHtml": "<p>Another option is to put the state in the request itself: a signed <span class=\"term\">token</span> (such as a JWT) that says “this is Alice”. Any server can verify the signature without looking anything up.</p>\n<p>Không cần kho và không có bước nhảy thêm, nhưng token khó hủy trước khi hết hạn, và nó đi kèm mọi yêu cầu, nên hãy giữ nó nhỏ.</p>\n<div class=\"callout callout--tip\"><strong>Lưu ý Kỹ sư:</strong> Cách chia phổ biến: token cho danh tính, kho dùng chung cho mọi thứ lớn hoặc phải đổi tức thì (giỏ hàng, đăng nhập bị thu hồi).</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Tokens)",
          "body": "Nắm vững nguyên lý Hoặc: để yêu cầu mang theo nó để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-6-1",
            "label": "OK",
            "value": "3 / 3",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-6-2",
            "label": "SURVIVE",
            "value": "yes",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-6-3",
            "label": "SCALE",
            "value": "yes",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-6-4",
            "label": "EXTRA",
            "value": "+0 ms",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-6-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Hoặc: để yêu cầu mang theo nó"
          },
          {
            "id": "chk-6-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "stateless-step-8",
        "number": 8,
        "title": "Uploads",
        "category": "BỐI CẢNH",
        "categoryColor": "rose",
        "headline": "Tình huống: tệp trên ổ đĩa cục bộ",
        "bodyHtml": "<p>Alice tải lên ảnh đại diện mới. Server A lưu <code>avatar.png</code> vào ổ đĩa của chính nó và hiển thị: hoàn hảo.</p>\n<p>Trang tiếp theo của cô được tải từ Server B, nơi không có tệp đó: ảnh hỏng. Tệp cũng là trạng thái.</p>\n<div class=\"callout callout--warn\"><strong>Lưu ý Kỹ sư:</strong> Mọi thứ ghi vào ổ đĩa cục bộ của một server (tệp tải lên, PDF được tạo, tệp tạm) đều biến mất với mọi server khác, và mất vĩnh viễn khi server bị thay.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Uploads)",
          "body": "Nắm vững nguyên lý Tình huống: tệp trên ổ đĩa cục bộ để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-7-1",
            "label": "OK",
            "value": "1 / 3",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-7-2",
            "label": "SURVIVE",
            "value": "no",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-7-3",
            "label": "SCALE",
            "value": "no",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-7-4",
            "label": "EXTRA",
            "value": "+0 ms",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-7-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Tình huống: tệp trên ổ đĩa cục bộ"
          },
          {
            "id": "chk-7-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "stateless-step-9",
        "number": 9,
        "title": "Object store",
        "category": "THỰC THI",
        "categoryColor": "blue",
        "headline": "Đặt tệp vào kho lưu trữ đối tượng",
        "bodyHtml": "<p>Store files in shared <span class=\"term\">object storage</span> (Amazon S3, Google Cloud Storage, Azure Blob): effectively unlimited, durable, and reachable from every server.</p>\n<p>Server A ghi ảnh đại diện vào đó (ô vuông tối); B và C đọc cùng một tệp. Tốt hơn nữa, trình duyệt lấy ảnh thẳng từ kho qua CDN.</p>\n<div class=\"callout callout--tip\"><strong>Lưu ý Kỹ sư:</strong> Quy tắc kinh nghiệm: server không giữ gì cần tồn tại lâu hơn yêu cầu. Phiên → kho hoặc token; tệp → kho đối tượng; dữ liệu → cơ sở dữ liệu.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Object store)",
          "body": "Nắm vững nguyên lý Đặt tệp vào kho lưu trữ đối tượng để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-8-1",
            "label": "OK",
            "value": "3 / 3",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-8-2",
            "label": "SURVIVE",
            "value": "yes",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-8-3",
            "label": "SCALE",
            "value": "yes",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-8-4",
            "label": "EXTRA",
            "value": "+0 ms",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-8-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Đặt tệp vào kho lưu trữ đối tượng"
          },
          {
            "id": "chk-8-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "stateless-step-10",
        "number": 10,
        "title": "Recap",
        "category": "TỐI ƯU",
        "categoryColor": "emerald",
        "headline": "Recap",
        "bodyHtml": "<div class=\"callout callout--next\"><strong>Lưu ý Kỹ sư:</strong> Tiếp theo: <b>Bộ nhớ đệm</b>: cơ sở dữ liệu phía sau tất cả các server phi trạng thái này sắp trở thành nút thắt cổ chai.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Recap)",
          "body": "Nắm vững nguyên lý Recap để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-9-1",
            "label": "OK",
            "value": "3 / 3",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-9-2",
            "label": "SURVIVE",
            "value": "yes",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-9-3",
            "label": "SCALE",
            "value": "yes",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-9-4",
            "label": "EXTRA",
            "value": "+1 ms",
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
    "id": "caching",
    "slug": "caching",
    "title": "Caching",
    "subtitle": "Caching · 14 phút thực chiến",
    "moduleCode": "02",
    "moduleTitle": "Mở Rộng Quy Mô & Cân Bằng Tải (Scaling)",
    "durationMinutes": 14,
    "difficulty": "Cơ bản",
    "steps": [
      {
        "id": "caching-step-1",
        "number": 1,
        "title": "DB melts",
        "category": "BỐI CẢNH",
        "categoryColor": "rose",
        "headline": "Mọi trang đều đánh vào cơ sở dữ liệu",
        "bodyHtml": "<p>Cửa hàng của bạn đắt khách. Mỗi trang sản phẩm hỏi cơ sở dữ liệu cùng một kiểu thông tin (tên, giá, ảnh) và giờ nó đã bận 92%.</p>\n<p>Các lượt đọc xếp hàng và trang chậm tới gần nửa giây ở p95.</p>\n<div class=\"callout callout--warn\"><strong>Lưu ý Kỹ sư:</strong> Cơ sở dữ liệu thường là phần khó mở rộng nhất, vì nó giữ dữ liệu. Hãy bảo vệ nó khỏi những việc không cần thiết.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (DB melts)",
          "body": "Nắm vững nguyên lý Mọi trang đều đánh vào cơ sở dữ liệu để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-0-1",
            "label": "P95",
            "value": "450",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-0-2",
            "label": "HITRATE",
            "value": "0",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-0-3",
            "label": "DBLOAD",
            "value": "92",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-0-4",
            "label": "FRESH",
            "value": "fresh",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-0-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Mọi trang đều đánh vào cơ sở dữ liệu"
          },
          {
            "id": "chk-0-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "caching-step-2",
        "number": 2,
        "title": "Same reads",
        "category": "LÝ THUYẾT",
        "categoryColor": "violet",
        "headline": "Vẫn mấy thứ đó, lặp đi lặp lại",
        "bodyHtml": "<p>Hãy xem cái gì thực sự được đọc: một nhóm nhỏ sản phẩm phổ biến chiếm phần lớn lưu lượng. Cơ sở dữ liệu tính lại cùng những câu trả lời hàng nghìn lần mỗi phút.</p>\n<p>Những câu trả lời được đọc thường xuyên và hiếm khi đổi là hoàn hảo để giữ ở nơi gần hơn, nhanh hơn.</p>\n<div class=\"callout callout--insight\"><strong>Lưu ý Kỹ sư:</strong> Hầu hết khối lượng công việc thực tế đều lệch như vậy: vài mục nóng và một đuôi dài những mục hiếm khi được đọc.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Same reads)",
          "body": "Nắm vững nguyên lý Vẫn mấy thứ đó, lặp đi lặp lại để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-1-1",
            "label": "P95",
            "value": "450",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-1-2",
            "label": "HITRATE",
            "value": "0",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-1-3",
            "label": "DBLOAD",
            "value": "92",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-1-4",
            "label": "FRESH",
            "value": "fresh",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-1-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Vẫn mấy thứ đó, lặp đi lặp lại"
          },
          {
            "id": "chk-1-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "caching-step-3",
        "number": 3,
        "title": "Add cache",
        "category": "THỰC THI",
        "categoryColor": "blue",
        "headline": "Đặt một cache phía trước",
        "bodyHtml": "<p>Add an in-memory <span class=\"term\">cache</span> (such as Redis or Memcached). The server checks it first: a <b>hit</b> returns in about a millisecond.</p>\n<p>On a <b>miss</b> (amber) the server reads the database, then saves a copy in the cache for next time. This is the <span class=\"term\">cache-aside</span> pattern.</p>\n<div class=\"callout callout--tip\"><strong>Lưu ý Kỹ sư:</strong> Tra cache là lấy một khóa từ bộ nhớ: không lập kế hoạch truy vấn, không join, không đĩa. Nó thường trả lời nhanh hơn 10–100× so với truy vấn mà nó thay thế.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Add cache)",
          "body": "Nắm vững nguyên lý Đặt một cache phía trước để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-2-1",
            "label": "P95",
            "value": "40",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-2-2",
            "label": "HITRATE",
            "value": "80",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-2-3",
            "label": "DBLOAD",
            "value": "25",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-2-4",
            "label": "FRESH",
            "value": "fresh",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-2-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Đặt một cache phía trước"
          },
          {
            "id": "chk-2-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "caching-step-4",
        "number": 4,
        "title": "Hit rate",
        "category": "LÝ THUYẾT",
        "categoryColor": "emerald",
        "headline": "Tỉ lệ trúng là tất cả",
        "bodyHtml": "<p>The share of reads answered by the cache is the <span class=\"term\">hit rate</span>. Because misses are so much slower, small changes in hit rate matter a lot.</p>\n<p>Đi từ 80% lên 95% trúng giảm thời gian đọc trung bình hơn một nửa và cắt ba phần tư tải của cơ sở dữ liệu.</p>\n<div class=\"callout callout--tip\"><strong>Lưu ý Kỹ sư:</strong> Nâng tỉ lệ trúng bằng cách cache đúng thứ, cho cache đủ bộ nhớ và giữ các mục đủ lâu để được dùng lại.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Hit rate)",
          "body": "Nắm vững nguyên lý Tỉ lệ trúng là tất cả để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-3-1",
            "label": "P95",
            "value": "25",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-3-2",
            "label": "HITRATE",
            "value": "95",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-3-3",
            "label": "DBLOAD",
            "value": "8",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-3-4",
            "label": "FRESH",
            "value": "fresh",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-3-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Tỉ lệ trúng là tất cả"
          },
          {
            "id": "chk-3-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "caching-step-5",
        "number": 5,
        "title": "Stale",
        "category": "BỐI CẢNH",
        "categoryColor": "rose",
        "headline": "Giá đã đổi. Cache thì không.",
        "bodyHtml": "<p>Một quản trị viên đổi giá từ $20 lên $25. Cơ sở dữ liệu có giá mới, nhưng cache vẫn giữ bản cũ, và đó là thứ người dùng thấy.</p>\n<p>Cache là bản sao thứ hai của sự thật. Giữ các bản sao đồng bộ là phần khó của caching.</p>\n<div class=\"callout callout--warn\"><strong>Lưu ý Kỹ sư:</strong> “Trong khoa học máy tính chỉ có hai việc khó: vô hiệu hóa cache và đặt tên.” — Phil Karlton</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Stale)",
          "body": "Nắm vững nguyên lý Giá đã đổi. Cache thì không. để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-4-1",
            "label": "P95",
            "value": "25",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-4-2",
            "label": "HITRATE",
            "value": "95",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-4-3",
            "label": "DBLOAD",
            "value": "8",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-4-4",
            "label": "FRESH",
            "value": "stale",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-4-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Giá đã đổi. Cache thì không."
          },
          {
            "id": "chk-4-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "caching-step-6",
        "number": 6,
        "title": "Invalidate",
        "category": "THỰC THI",
        "categoryColor": "blue",
        "headline": "Vô hiệu hóa khi ghi, hết hạn bằng TTL",
        "bodyHtml": "<p>Khi dữ liệu đổi, server ghi vào cơ sở dữ liệu <em>và</em> xóa bản sao trong cache (vòng đỏ). Lượt đọc tiếp theo trượt và lấy giá trị mới.</p>\n<p>As a safety net, every entry also gets a <span class=\"term\">TTL</span> (time to live): even if an invalidation is missed, stale data disappears within a minute.</p>\n<p>Vì sao xóa thay vì ghi đè bản sao trong cache? Hai lần ghi chạy đua có thể để lại giá trị <em>cũ hơn</em> trong cache. Xóa luôn an toàn: lượt đọc sau sẽ nạp lại sự thật.</p>\n<div class=\"callout callout--tip\"><strong>Lưu ý Kỹ sư:</strong> Chọn TTL bằng câu hỏi: cũ đến mức nào thì chấp nhận được? Vài giây cho giá và tồn kho, vài giờ cho mô tả sản phẩm.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Invalidate)",
          "body": "Nắm vững nguyên lý Vô hiệu hóa khi ghi, hết hạn bằng TTL để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-5-1",
            "label": "P95",
            "value": "26",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-5-2",
            "label": "HITRATE",
            "value": "94",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-5-3",
            "label": "DBLOAD",
            "value": "9",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-5-4",
            "label": "FRESH",
            "value": "fresh",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-5-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Vô hiệu hóa khi ghi, hết hạn bằng TTL"
          },
          {
            "id": "chk-5-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "caching-step-7",
        "number": 7,
        "title": "Eviction",
        "category": "NGHIỆP VỤ BA",
        "categoryColor": "amber",
        "headline": "Hết bộ nhớ",
        "bodyHtml": "<p>Cache không thể chứa mọi thứ: bộ nhớ đắt. Khi đầy, phải có thứ gì đó ra đi để nhường chỗ.</p>\n<p>The usual rule is <span class=\"term\">LRU</span>: evict the entry that was <em>least recently used</em>. Hot items stay; the long tail cycles through.</p>\n<p>The main alternative, <span class=\"term\">LFU</span>, evicts the least <em>frequently</em> used entry instead — better when a burst of one-off reads would otherwise push out the real favourites.</p>\n<div class=\"callout callout--insight\"><strong>Lưu ý Kỹ sư:</strong> Cache chỉ cần chứa tập nóng. 10% dữ liệu có thể dễ dàng phục vụ 90% lượt đọc.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Eviction)",
          "body": "Nắm vững nguyên lý Hết bộ nhớ để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-6-1",
            "label": "P95",
            "value": "30",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-6-2",
            "label": "HITRATE",
            "value": "92",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-6-3",
            "label": "DBLOAD",
            "value": "12",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-6-4",
            "label": "FRESH",
            "value": "fresh",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-6-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Hết bộ nhớ"
          },
          {
            "id": "chk-6-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "caching-step-8",
        "number": 8,
        "title": "Stampede",
        "category": "BỐI CẢNH",
        "categoryColor": "rose",
        "headline": "Tình huống: cache stampede",
        "bodyHtml": "<p>Trang chủ là khóa nóng nhất trong cache: 2.000 lượt đọc mỗi giây. TTL của nó hết hạn. Ngay khoảnh khắc sau, mọi yêu cầu đó đều trượt và đi tới cơ sở dữ liệu để lấy cùng một câu trả lời.</p>\n<p>The database, used to 8% load, gets hit by a wall of identical queries and stalls. This is a <span class=\"term\">cache stampede</span> (or thundering herd).</p>\n<div class=\"callout callout--warn\"><strong>Lưu ý Kỹ sư:</strong> Khóa càng phổ biến, việc nó hết hạn càng nguy hiểm.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Stampede)",
          "body": "Nắm vững nguyên lý Tình huống: cache stampede để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-7-1",
            "label": "P95",
            "value": "1400",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-7-2",
            "label": "HITRATE",
            "value": "40",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-7-3",
            "label": "DBLOAD",
            "value": "100",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-7-4",
            "label": "FRESH",
            "value": "fresh",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-7-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Tình huống: cache stampede"
          },
          {
            "id": "chk-7-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "caching-step-9",
        "number": 9,
        "title": "One fetch",
        "category": "THỰC THI",
        "categoryColor": "blue",
        "headline": "Để một yêu cầu nạp lại",
        "bodyHtml": "<p>Fix it with <span class=\"term\">request coalescing</span>: the first miss takes a short lock and fetches from the database; everyone else waits a few milliseconds for that one result.</p>\n<p>Thêm hai thói quen: làm mới khóa nóng sớm một chút <em>trước</em> khi hết hạn, và thêm độ lệch ngẫu nhiên (jitter) vào TTL để nhiều khóa không hết hạn cùng lúc.</p>\n<div class=\"callout callout--tip\"><strong>Lưu ý Kỹ sư:</strong> Các thư viện gọi đây là “single-flight”. CDN cũng làm vậy ở biên (“request collapsing”).</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (One fetch)",
          "body": "Nắm vững nguyên lý Để một yêu cầu nạp lại để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-8-1",
            "label": "P95",
            "value": "30",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-8-2",
            "label": "HITRATE",
            "value": "97",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-8-3",
            "label": "DBLOAD",
            "value": "9",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-8-4",
            "label": "FRESH",
            "value": "fresh",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-8-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Để một yêu cầu nạp lại"
          },
          {
            "id": "chk-8-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "caching-step-10",
        "number": 10,
        "title": "Missing keys",
        "category": "BỐI CẢNH",
        "categoryColor": "rose",
        "headline": "Tình huống: hỏi thứ không có",
        "bodyHtml": "<p>Một crawler (hoặc kẻ tấn công) yêu cầu ID sản phẩm không tồn tại: <code>/product/99900017</code>, <code>…18</code>, <code>…19</code>. Mỗi cái trượt cache, đi tới cơ sở dữ liệu, không tìm thấy gì, và vì thế <b>chẳng để lại gì để cache</b>.</p>\n<p>Every such request is a guaranteed miss, however often it repeats. The cache gives no protection at all, and the database is busy searching for rows that were never there. This is <span class=\"term\">cache penetration</span>.</p>\n<div class=\"callout callout--warn\"><strong>Lưu ý Kỹ sư:</strong> Cache-aside chỉ nhớ câu trả lời. “Không có dòng đó” cũng là một câu trả lời: nếu quên lưu nó, bạn trả giá mỗi lần.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Missing keys)",
          "body": "Nắm vững nguyên lý Tình huống: hỏi thứ không có để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-9-1",
            "label": "P95",
            "value": "520",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-9-2",
            "label": "HITRATE",
            "value": "50",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-9-3",
            "label": "DBLOAD",
            "value": "85",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-9-4",
            "label": "FRESH",
            "value": "fresh",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-9-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Tình huống: hỏi thứ không có"
          },
          {
            "id": "chk-9-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "caching-step-11",
        "number": 11,
        "title": "Bloom filter",
        "category": "THỰC THI",
        "categoryColor": "blue",
        "headline": "Nhớ cả câu “không”",
        "bodyHtml": "<p>First fix: <span class=\"term\">negative caching</span>. Store “not found” in the cache too, with a short TTL, so a repeated request for the same missing ID stops at the cache.</p>\n<p>But a crawler never repeats itself. For that, keep a <span class=\"term\">Bloom filter</span> of every real ID in the server’s memory: a compact bit set that answers “definitely not here” or “probably here” in microseconds. Impossible IDs get a 404 without touching the cache or the database.</p>\n<div class=\"callout callout--tip\"><strong>Lưu ý Kỹ sư:</strong> Bloom filter không bao giờ nói “không” với khóa có tồn tại; thỉnh thoảng nó nói “có thể” với khóa không tồn tại. Tỉ lệ dương tính giả 1% chỉ tốn khoảng 10 bit mỗi khóa.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Bloom filter)",
          "body": "Nắm vững nguyên lý Nhớ cả câu “không” để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-10-1",
            "label": "P95",
            "value": "28",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-10-2",
            "label": "HITRATE",
            "value": "95",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-10-3",
            "label": "DBLOAD",
            "value": "9",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-10-4",
            "label": "FRESH",
            "value": "fresh",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-10-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Nhớ cả câu “không”"
          },
          {
            "id": "chk-10-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "caching-step-12",
        "number": 12,
        "title": "Layers",
        "category": "LÝ THUYẾT",
        "categoryColor": "violet",
        "headline": "Cache ở khắp nơi",
        "bodyHtml": "<p>Cache ta vừa dựng chỉ là một trong nhiều tầng. Một yêu cầu có thể được trả lời bởi cache của <b>trình duyệt</b>, <b>CDN</b>, cache <b>trong tiến trình</b> trên server, cache dùng chung như Redis, hoặc bộ nhớ riêng của cơ sở dữ liệu.</p>\n<p>Càng gần người dùng, lần trúng càng nhanh và rẻ, và càng khó vô hiệu hóa.</p>\n<div class=\"callout callout--insight\"><strong>Lưu ý Kỹ sư:</strong> Phần lớn việc “làm cho nhanh” là quyết định cái gì được cache, ở đâu và trong bao lâu.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Layers)",
          "body": "Nắm vững nguyên lý Cache ở khắp nơi để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-11-1",
            "label": "P95",
            "value": "25",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-11-2",
            "label": "HITRATE",
            "value": "95",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-11-3",
            "label": "DBLOAD",
            "value": "8",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-11-4",
            "label": "FRESH",
            "value": "fresh",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-11-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Cache ở khắp nơi"
          },
          {
            "id": "chk-11-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "caching-step-13",
        "number": 13,
        "title": "Recap",
        "category": "TỐI ƯU",
        "categoryColor": "emerald",
        "headline": "Recap",
        "bodyHtml": "<div class=\"callout callout--next\"><strong>Lưu ý Kỹ sư:</strong> Tiếp theo: <b>Phân phối nội dung</b>: cache tệp trên các server rải khắp thế giới, gần người dùng của bạn.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Recap)",
          "body": "Nắm vững nguyên lý Recap để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-12-1",
            "label": "P95",
            "value": "25",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-12-2",
            "label": "HITRATE",
            "value": "95",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-12-3",
            "label": "DBLOAD",
            "value": "8",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-12-4",
            "label": "FRESH",
            "value": "fresh",
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
    "id": "cdn",
    "slug": "cdn",
    "title": "Phân phối nội dung",
    "subtitle": "Content Delivery · 10 phút thực chiến",
    "moduleCode": "02",
    "moduleTitle": "Mở Rộng Quy Mô & Cân Bằng Tải (Scaling)",
    "durationMinutes": 10,
    "difficulty": "Cơ bản",
    "steps": [
      {
        "id": "cdn-step-1",
        "number": 1,
        "title": "Far away",
        "category": "BỐI CẢNH",
        "categoryColor": "rose",
        "headline": "Người dùng của bạn ở xa",
        "bodyHtml": "<p>Server của bạn ở Virginia. Người dùng ở London chờ khoảng 75 ms mỗi lượt khứ hồi; ở Sydney khoảng 200 ms. Một trang cần nhiều lượt khứ hồi, nên Sydney chờ hơn một giây khá nhiều.</p>\n<p>Trong khi đó, mọi bức ảnh cho mọi người dùng trên thế giới đều do một origin đó phục vụ.</p>\n<div class=\"callout callout--warn\"><strong>Lưu ý Kỹ sư:</strong> Bạn không thể tăng tốc ánh sáng. Cách duy nhất để cắt độ trễ do khoảng cách là phục vụ người dùng từ nơi gần hơn.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Far away)",
          "body": "Nắm vững nguyên lý Người dùng của bạn ở xa để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-0-1",
            "label": "LON",
            "value": "80",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-0-2",
            "label": "SYD",
            "value": "210",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-0-3",
            "label": "ORIGIN",
            "value": "9e3",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-0-4",
            "label": "HITRATE",
            "value": "0",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-0-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Người dùng của bạn ở xa"
          },
          {
            "id": "chk-0-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "cdn-step-2",
        "number": 2,
        "title": "Same bytes",
        "category": "LÝ THUYẾT",
        "categoryColor": "violet",
        "headline": "Phần lớn byte giống nhau với mọi người",
        "bodyHtml": "<p>Nhìn vào bên trong một lần tải trang. HTML là riêng từng người, nhưng ảnh, script, stylesheet và video thì <b>giống hệt</b> nhau với mọi người dùng.</p>\n<p>Những tệp giống hệt và ít thay đổi là hoàn hảo để cache, ở bất cứ đâu, kể cả xa origin.</p>\n<div class=\"callout callout--insight\"><strong>Lưu ý Kỹ sư:</strong> Tài nguyên tĩnh thường chiếm hơn 90% số byte của một trang.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Same bytes)",
          "body": "Nắm vững nguyên lý Phần lớn byte giống nhau với mọi người để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-1-1",
            "label": "LON",
            "value": "80",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-1-2",
            "label": "SYD",
            "value": "210",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-1-3",
            "label": "ORIGIN",
            "value": "9e3",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-1-4",
            "label": "HITRATE",
            "value": "0",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-1-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Phần lớn byte giống nhau với mọi người"
          },
          {
            "id": "chk-1-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "cdn-step-3",
        "number": 3,
        "title": "Edges",
        "category": "THỰC THI",
        "categoryColor": "blue",
        "headline": "Đặt bản sao ở biên",
        "bodyHtml": "<p>A <span class=\"term\">CDN</span> (content delivery network) runs <span class=\"term\">edge servers</span> in hundreds of cities. Point your static files at it, and each user is served by the edge nearest them.</p>\n<p>Giờ London nhận ảnh trong ~10 ms. Chỉ các lần trượt (hổ phách) mới phải đi tới tận Virginia.</p>\n<div class=\"callout callout--tip\"><strong>Lưu ý Kỹ sư:</strong> Các CDN phổ biến: Cloudflare, Fastly, Akamai, Amazon CloudFront. Bạn thuê biên của họ; bạn không vận hành chúng.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Edges)",
          "body": "Nắm vững nguyên lý Đặt bản sao ở biên để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-2-1",
            "label": "LON",
            "value": "12",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-2-2",
            "label": "SYD",
            "value": "15",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-2-3",
            "label": "ORIGIN",
            "value": "900",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-2-4",
            "label": "HITRATE",
            "value": "90",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-2-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Đặt bản sao ở biên"
          },
          {
            "id": "chk-2-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "cdn-step-4",
        "number": 4,
        "title": "Cold edge",
        "category": "LÝ THUYẾT",
        "categoryColor": "emerald",
        "headline": "Những yêu cầu đầu tiên đều trượt",
        "bodyHtml": "<p>Edges are <span class=\"term\">pull-through</span> caches: they start empty. The first request for a file misses, the edge fetches it from the origin, keeps a copy, and serves everyone after that.</p>\n<p>Biên London đã nóng; biên Sydney vừa khởi động và vẫn đang nạp, nên người dùng Sydney tạm thời phải trả giá cho quãng đường dài.</p>\n<div class=\"callout callout--insight\"><strong>Lưu ý Kỹ sư:</strong> Đây chính là ý tưởng cache-aside của bài trước, trải rộng khắp hành tinh.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Cold edge)",
          "body": "Nắm vững nguyên lý Những yêu cầu đầu tiên đều trượt để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-3-1",
            "label": "LON",
            "value": "12",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-3-2",
            "label": "SYD",
            "value": "95",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-3-3",
            "label": "ORIGIN",
            "value": "2400",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-3-4",
            "label": "HITRATE",
            "value": "70",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-3-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Những yêu cầu đầu tiên đều trượt"
          },
          {
            "id": "chk-3-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "cdn-step-5",
        "number": 5,
        "title": "Old files",
        "category": "BỐI CẢNH",
        "categoryColor": "rose",
        "headline": "Bạn phát hành logo mới. Chẳng ai thấy.",
        "bodyHtml": "<p>Bạn thay <code>logo.png</code> trên origin. Nhưng các biên đã cache bản cũ với TTL một ngày, nên người dùng vẫn thấy logo cũ, người ở London, người ở Sydney, suốt nhiều giờ.</p>\n<p>Bạn có thể purge các biên (CDN hiện đại làm việc đó trong vài giây), nhưng phải có người nhớ làm, mỗi lần, và không lệnh purge nào chạm tới những bản đã lưu trong trình duyệt của người dùng.</p>\n<div class=\"callout callout--warn\"><strong>Lưu ý Kỹ sư:</strong> TTL dài là thứ làm CDN nhanh, và cũng là thứ khiến bản cập nhật chậm xuất hiện.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Old files)",
          "body": "Nắm vững nguyên lý Bạn phát hành logo mới. Chẳng ai thấy. để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-4-1",
            "label": "LON",
            "value": "12",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-4-2",
            "label": "SYD",
            "value": "15",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-4-3",
            "label": "ORIGIN",
            "value": "900",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-4-4",
            "label": "HITRATE",
            "value": "90",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-4-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Bạn phát hành logo mới. Chẳng ai thấy."
          },
          {
            "id": "chk-4-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "cdn-step-6",
        "number": 6,
        "title": "Versioning",
        "category": "THỰC THI",
        "categoryColor": "blue",
        "headline": "Đặt tên mới cho mỗi phiên bản",
        "bodyHtml": "<p>Đưa dấu vân tay nội dung tệp vào tên: <code>logo.3f9a.png</code>. Logo mới có tên mới, nên không bao giờ bị nhầm với bản cũ.</p>\n<p>Giờ tệp có thể được cache tới <b>một năm</b>. HTML (TTL ngắn, hoặc không cache) chỉ việc trỏ tới tên mới nhất.</p>\n<div class=\"callout callout--tip\"><strong>Lưu ý Kỹ sư:</strong> Công cụ build như Vite và webpack tự thêm các hash nội dung này cho bạn.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Versioning)",
          "body": "Nắm vững nguyên lý Đặt tên mới cho mỗi phiên bản để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-5-1",
            "label": "LON",
            "value": "12",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-5-2",
            "label": "SYD",
            "value": "15",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-5-3",
            "label": "ORIGIN",
            "value": "900",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-5-4",
            "label": "HITRATE",
            "value": "96",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-5-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Đặt tên mới cho mỗi phiên bản"
          },
          {
            "id": "chk-5-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "cdn-step-7",
        "number": 7,
        "title": "Spike",
        "category": "LÝ THUYẾT",
        "categoryColor": "violet",
        "headline": "Đợt tăng vọt dồn vào biên, không phải bạn",
        "bodyHtml": "<p>Một đợt ra mắt lan truyền và lưu lượng tăng vọt 20×. Gần như tất cả được trả lời bởi các biên rải khắp thế giới; origin hầu như không nhận ra.</p>\n<p>Cùng năng lực phân tán đó giúp hấp thụ những cơn lũ lưu lượng độc hại (tấn công DDoS).</p>\n<div class=\"callout callout--insight\"><strong>Lưu ý Kỹ sư:</strong> CDN cùng lúc là cache, mạng toàn cầu và lá chắn cho origin của bạn.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Spike)",
          "body": "Nắm vững nguyên lý Đợt tăng vọt dồn vào biên, không phải bạn để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-6-1",
            "label": "LON",
            "value": "14",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-6-2",
            "label": "SYD",
            "value": "18",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-6-3",
            "label": "ORIGIN",
            "value": "1100",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-6-4",
            "label": "HITRATE",
            "value": "97",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-6-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Đợt tăng vọt dồn vào biên, không phải bạn"
          },
          {
            "id": "chk-6-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "cdn-step-8",
        "number": 8,
        "title": "Private",
        "category": "BỐI CẢNH",
        "categoryColor": "rose",
        "headline": "Tình huống: đừng bao giờ cache giỏ hàng của ai",
        "bodyHtml": "<p>Một thay đổi cấu hình bảo CDN cache <em>mọi</em> trang trong 5 phút. Bob mở giỏ hàng; biên lưu lại. Alice mở giỏ của mình một giây sau, và biên trả cho cô <b>giỏ hàng của Bob</b>.</p>\n<p>Những trang phụ thuộc vào việc ai đang hỏi phải được đánh dấu <code>Cache-Control: private</code> (hoặc <code>no-store</code>) để biên luôn chuyển chúng về origin.</p>\n<div class=\"callout callout--warn\"><strong>Lưu ý Kỹ sư:</strong> Cache dữ liệu cá nhân ở chế độ công khai là một sự cố kinh điển, và rất công khai. Mặc định để riêng tư; chỉ cache nội dung công khai một cách có chủ đích.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Private)",
          "body": "Nắm vững nguyên lý Tình huống: đừng bao giờ cache giỏ hàng của ai để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-7-1",
            "label": "LON",
            "value": "12",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-7-2",
            "label": "SYD",
            "value": "15",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-7-3",
            "label": "ORIGIN",
            "value": "1400",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-7-4",
            "label": "HITRATE",
            "value": "88",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-7-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Tình huống: đừng bao giờ cache giỏ hàng của ai"
          },
          {
            "id": "chk-7-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "cdn-step-9",
        "number": 9,
        "title": "Shield",
        "category": "LÝ THUYẾT",
        "categoryColor": "emerald",
        "headline": "Origin shield: thêm một tầng",
        "bodyHtml": "<p>Một CDN thực có hàng trăm biên. Khi một tệp mới lan truyền, mỗi biên trượt một lần: hàng trăm yêu cầu cho cùng một tệp ập vào origin của bạn cùng lúc.</p>\n<p>An <span class=\"term\">origin shield</span> is a mid-tier cache in front of the origin. Edges miss to the shield; only the shield ever asks the origin, so each file is fetched once.</p>\n<div class=\"callout callout--tip\"><strong>Lưu ý Kỹ sư:</strong> Hầu hết CDN cung cấp shield như một tùy chọn. Chọn vị trí shield gần origin của bạn.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Shield)",
          "body": "Nắm vững nguyên lý Origin shield: thêm một tầng để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-8-1",
            "label": "LON",
            "value": "12",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-8-2",
            "label": "SYD",
            "value": "15",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-8-3",
            "label": "ORIGIN",
            "value": "120",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-8-4",
            "label": "HITRATE",
            "value": "98",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-8-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Origin shield: thêm một tầng"
          },
          {
            "id": "chk-8-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "cdn-step-10",
        "number": 10,
        "title": "Recap",
        "category": "TỐI ƯU",
        "categoryColor": "emerald",
        "headline": "Recap",
        "bodyHtml": "<div class=\"callout callout--next\"><strong>Lưu ý Kỹ sư:</strong> Đến đây là hết phần Mở rộng. Mô-đun tiếp theo: <b>Dữ liệu & lưu trữ</b>, bắt đầu với SQL hay NoSQL.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Recap)",
          "body": "Nắm vững nguyên lý Recap để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-9-1",
            "label": "LON",
            "value": "12",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-9-2",
            "label": "SYD",
            "value": "15",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-9-3",
            "label": "ORIGIN",
            "value": "900",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-9-4",
            "label": "HITRATE",
            "value": "96",
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
