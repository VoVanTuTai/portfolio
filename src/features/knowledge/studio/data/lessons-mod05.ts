import type { StudioLesson } from "../studio.types";

export const mod05Lessons: StudioLesson[] = [
  {
    "id": "redundancy",
    "slug": "redundancy",
    "title": "Dự phòng & failover",
    "subtitle": "Redundancy & Failover · 12 phút thực chiến",
    "moduleCode": "05",
    "moduleTitle": "Độ Tin Cậy & Chống Chịu Lỗi (Reliability)",
    "durationMinutes": 12,
    "difficulty": "Trung cấp",
    "steps": [
      {
        "id": "redundancy-step-1",
        "number": 1,
        "title": "Nines",
        "category": "BỐI CẢNH",
        "categoryColor": "blue",
        "headline": "Mỗi thứ một cái thì sẵn sàng đến đâu?",
        "bodyHtml": "<p>Một stack đơn giản: một bộ cân bằng tải, một máy chủ ứng dụng và một cơ sở dữ liệu. Mỗi cái chạy được 99,9% thời gian, nghe rất ổn.</p>\n<p>Nhưng một yêu cầu cần <b>cả ba</b> cùng hoạt động, nên độ sẵn sàng nhân với nhau: 0,999 × 0,999 × 0,999 ≈ <b>99,7%</b>. Tức khoảng 26 giờ ngừng hoạt động mỗi năm.</p>\n<div class=\"callout callout--insight\"><strong>Lưu ý Kỹ sư:</strong> Độ sẵn sàng thường được nói bằng “số chữ 9”. Mỗi chữ 9 thêm vào giảm thời gian ngừng cho phép đi 10 lần.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Nines)",
          "body": "Nắm vững nguyên lý Mỗi thứ một cái thì sẵn sàng đến đâu? để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-0-1",
            "label": "AVAIL",
            "value": "99.7%",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-0-2",
            "label": "DOWNTIME",
            "value": "26 h",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-0-3",
            "label": "SPOFS",
            "value": "3",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-0-4",
            "label": "SURVIVES",
            "value": "nothing",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-0-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Mỗi thứ một cái thì sẵn sàng đến đâu?"
          },
          {
            "id": "chk-0-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "redundancy-step-2",
        "number": 2,
        "title": "SPOFs",
        "category": "BỐI CẢNH",
        "categoryColor": "rose",
        "headline": "Mỗi hộp là một điểm lỗi đơn",
        "bodyHtml": "<p>A <span class=\"term\">single point of failure</span> (SPOF) is anything whose failure alone takes the system down. Here, that’s every component.</p>\n<p>Một ổ đĩa hỏng, một kernel panic, một lần triển khai hỏng: chỉ một trong số đó là một triệu người dùng thấy trang lỗi.</p>\n<div class=\"callout callout--warn\"><strong>Lưu ý Kỹ sư:</strong> Phần cứng hỏng, phần mềm sập và con người mắc lỗi. Hãy giả định mọi thứ đó sẽ xảy ra; câu hỏi là cái gì vỡ khi nó xảy ra.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (SPOFs)",
          "body": "Nắm vững nguyên lý Mỗi hộp là một điểm lỗi đơn để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-1-1",
            "label": "AVAIL",
            "value": "99.7%",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-1-2",
            "label": "DOWNTIME",
            "value": "26 h",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-1-3",
            "label": "SPOFS",
            "value": "3",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-1-4",
            "label": "SURVIVES",
            "value": "nothing",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-1-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Mỗi hộp là một điểm lỗi đơn"
          },
          {
            "id": "chk-1-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "redundancy-step-3",
        "number": 3,
        "title": "Two of each",
        "category": "THỰC THI",
        "categoryColor": "blue",
        "headline": "Dự phòng: mọi thứ đều có hai",
        "bodyHtml": "<p>Thêm một bản dự phòng cho mỗi phần: bộ cân bằng tải chạy thành cặp chủ động–thụ động, hai máy chủ ứng dụng chia lưu lượng, và cơ sở dữ liệu có một follower sẵn sàng tiếp quản.</p>\n<p>Giờ <em>cả hai</em> bản sao phải hỏng cùng lúc mới có sự cố: 0,1% × 0,1% = 0,0001%. Mất một máy bất kỳ chẳng còn là chuyện gì.</p>\n<div class=\"callout callout--tip\"><strong>Lưu ý Kỹ sư:</strong> Trên giấy, các phần song song nhân xác suất hỏng của chúng: hai bản sao 99,9% cho 99,9999%. Cặp thực tế kém hơn (failover tốn thời gian, và hai bản sao vẫn chung một tòa nhà, một mạng và các lần triển khai của bạn), nên ta tính dè dặt 99,95%.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Two of each)",
          "body": "Nắm vững nguyên lý Dự phòng: mọi thứ đều có hai để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-2-1",
            "label": "AVAIL",
            "value": "99.95%",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-2-2",
            "label": "DOWNTIME",
            "value": "4 h",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-2-3",
            "label": "SPOFS",
            "value": "0",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-2-4",
            "label": "SURVIVES",
            "value": "a server",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-2-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Dự phòng: mọi thứ đều có hai"
          },
          {
            "id": "chk-2-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "redundancy-step-4",
        "number": 4,
        "title": "One building",
        "category": "BỐI CẢNH",
        "categoryColor": "rose",
        "headline": "Những bản sao cùng hỏng",
        "bodyHtml": "<p>Tất cả các bản sao đó nằm trong một trung tâm dữ liệu. Rồi một vụ mất điện (hoặc lụt, đứt cáp quang, hỏng hệ thống làm mát) làm sập cả tòa nhà, kéo theo mọi bản sao “dự phòng”.</p>\n<p>Failures that hit many components at once are <span class=\"term\">correlated failures</span>. Redundancy only helps if the copies fail <em>independently</em>.</p>\n<div class=\"callout callout--warn\"><strong>Lưu ý Kỹ sư:</strong> Dùng chung nguồn điện, mạng, rack, phiên bản phần mềm, thậm chí cùng một lần đẩy cấu hình sai, đều có thể đánh sập mọi bản sao cùng lúc.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (One building)",
          "body": "Nắm vững nguyên lý Những bản sao cùng hỏng để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-3-1",
            "label": "AVAIL",
            "value": "99.95%",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-3-2",
            "label": "DOWNTIME",
            "value": "+ 6 h outage",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-3-3",
            "label": "SPOFS",
            "value": "1",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-3-4",
            "label": "SURVIVES",
            "value": "a server",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-3-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Những bản sao cùng hỏng"
          },
          {
            "id": "chk-3-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "redundancy-step-5",
        "number": 5,
        "title": "Zones",
        "category": "THỰC THI",
        "categoryColor": "blue",
        "headline": "Rải qua các availability zone",
        "bodyHtml": "<p>Cloud regions are split into <span class=\"term\">availability zones</span>: separate data centers, kilometres to tens of kilometres apart, with their own power and network, joined by fast links.</p>\n<p>Đặt một máy chủ ứng dụng và một bản sao cơ sở dữ liệu ở mỗi zone. Một thảm họa trên toàn zone giờ chỉ đánh sập một nửa.</p>\n<div class=\"callout callout--tip\"><strong>Lưu ý Kỹ sư:</strong> Cùng ý tưởng ở mọi quy mô: rải qua các rack, các zone và, với hệ thống quan trọng nhất, cả các region.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Zones)",
          "body": "Nắm vững nguyên lý Rải qua các availability zone để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-4-1",
            "label": "AVAIL",
            "value": "99.99%",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-4-2",
            "label": "DOWNTIME",
            "value": "53 min",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-4-3",
            "label": "SPOFS",
            "value": "0",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-4-4",
            "label": "SURVIVES",
            "value": "a zone",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-4-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Rải qua các availability zone"
          },
          {
            "id": "chk-4-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "redundancy-step-6",
        "number": 6,
        "title": "Zone fails",
        "category": "THỰC THI",
        "categoryColor": "blue",
        "headline": "Zone A tắt ngúm: failover",
        "bodyHtml": "<p>Zone A mất điện. Health check thất bại, bộ cân bằng tải ngừng gửi lưu lượng tới đó, và follower ở zone B được thăng cấp thành leader.</p>\n<p>Người dùng đang giữa chừng một yêu cầu có thể thấy lỗi và thử lại; trong vòng một phút mọi thứ chạy từ zone B.</p>\n<div class=\"callout callout--insight\"><strong>Lưu ý Kỹ sư:</strong> Zone B phải có đủ năng lực dư để một mình gánh toàn bộ lưu lượng. Dự phòng mà bạn không đủ sức chạy trên đó thì không phải dự phòng.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Zone fails)",
          "body": "Nắm vững nguyên lý Zone A tắt ngúm: failover để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-5-1",
            "label": "AVAIL",
            "value": "99.99%",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-5-2",
            "label": "DOWNTIME",
            "value": "53 min",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-5-3",
            "label": "SPOFS",
            "value": "0",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-5-4",
            "label": "SURVIVES",
            "value": "a zone",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-5-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Zone A tắt ngúm: failover"
          },
          {
            "id": "chk-5-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "redundancy-step-7",
        "number": 7,
        "title": "RTO & RPO",
        "category": "LÝ THUYẾT",
        "categoryColor": "emerald",
        "headline": "Nhanh đến đâu, và mất bao nhiêu?",
        "bodyHtml": "<p>Two numbers describe a failover. <span class=\"term\">RTO</span> (recovery time objective): how long until service is back. <span class=\"term\">RPO</span> (recovery point objective): how much recent data you can afford to lose.</p>\n<p>Sao chép bất đồng bộ nghĩa là follower có thể chậm vài giây: những lần ghi đó mất. Sao chép đồng bộ đưa RPO về 0, đổi lại ghi chậm hơn.</p>\n<div class=\"callout callout--tip\"><strong>Lưu ý Kỹ sư:</strong> Hãy cùng phía kinh doanh quyết định RTO và RPO trước; chúng quyết định thiết kế (và hóa đơn).</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (RTO & RPO)",
          "body": "Nắm vững nguyên lý Nhanh đến đâu, và mất bao nhiêu? để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-6-1",
            "label": "AVAIL",
            "value": "99.99%",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-6-2",
            "label": "DOWNTIME",
            "value": "53 min",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-6-3",
            "label": "SPOFS",
            "value": "0",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-6-4",
            "label": "SURVIVES",
            "value": "a zone",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-6-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Nhanh đến đâu, và mất bao nhiêu?"
          },
          {
            "id": "chk-6-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "redundancy-step-8",
        "number": 8,
        "title": "Chaos",
        "category": "LÝ THUYẾT",
        "categoryColor": "violet",
        "headline": "Failover chưa kiểm thử thì không chạy",
        "bodyHtml": "<p>Một đường failover không bao giờ chạy sẽ âm thầm mục ruỗng: cấu hình bị lệch, bản dự phòng quá nhỏ, script có lỗi chính tả. Bạn chỉ phát hiện khi sự cố thật xảy ra.</p>\n<p>So teams break things <em>on purpose</em>, in production, during working hours — <span class=\"term\">chaos engineering</span>. Here a test kills an app server and everyone watches the system cope.</p>\n<div class=\"callout callout--tip\"><strong>Lưu ý Kỹ sư:</strong> Chaos Monkey của Netflix giết máy chủ ngẫu nhiên mỗi ngày. Bắt đầu nhỏ hơn: một game day có kế hoạch, mỗi lần một sự cố.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Chaos)",
          "body": "Nắm vững nguyên lý Failover chưa kiểm thử thì không chạy để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-7-1",
            "label": "AVAIL",
            "value": "99.99%",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-7-2",
            "label": "DOWNTIME",
            "value": "53 min",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-7-3",
            "label": "SPOFS",
            "value": "0",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-7-4",
            "label": "SURVIVES",
            "value": "a zone",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-7-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Failover chưa kiểm thử thì không chạy"
          },
          {
            "id": "chk-7-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "redundancy-step-9",
        "number": 9,
        "title": "Bad deploy",
        "category": "BỐI CẢNH",
        "categoryColor": "rose",
        "headline": "Tình huống: bug có mặt khắp nơi cùng lúc",
        "bodyHtml": "<p>Một bản phát hành mới có bug được đẩy tới mọi máy chủ ứng dụng ở cả hai zone cùng một lúc. Mọi bản sao sập trên cùng một yêu cầu: dự phòng vô ích khi mọi bản sao dùng chung một đoạn code hỏng.</p>\n<p>Đây là nguyên nhân phổ biến nhất của các sự cố thực tế: không phải phần cứng, mà là <b>thay đổi</b>, dù là code, cấu hình hay hạ tầng.</p>\n<div class=\"callout callout--warn\"><strong>Lưu ý Kỹ sư:</strong> Bản sao giống hệt nhau hỏng giống hệt nhau. Một thay đổi tồi là sự cố tương quan mà bạn tự gây ra cho mình.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Bad deploy)",
          "body": "Nắm vững nguyên lý Tình huống: bug có mặt khắp nơi cùng lúc để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-8-1",
            "label": "AVAIL",
            "value": "99.99%",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-8-2",
            "label": "DOWNTIME",
            "value": "+ 40 min outage",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-8-3",
            "label": "SPOFS",
            "value": "0",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-8-4",
            "label": "SURVIVES",
            "value": "a zone",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-8-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Tình huống: bug có mặt khắp nơi cùng lúc"
          },
          {
            "id": "chk-8-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "redundancy-step-10",
        "number": 10,
        "title": "Canary",
        "category": "THỰC THI",
        "categoryColor": "blue",
        "headline": "Phát hành canary",
        "bodyHtml": "<p>Roll out in stages instead. First a <span class=\"term\">canary</span>: one server, or 1% of traffic, gets v2.4. Watch its error rate and latency against the others for a while.</p>\n<p>Nếu tệ hơn, rollback: chỉ 1% người dùng bị ảnh hưởng, trong thời gian ngắn. Nếu ổn, tiếp tục lên 10%, 50%, 100%. Nhiều nhóm cũng triển khai lần lượt từng zone.</p>\n<div class=\"callout callout--tip\"><strong>Lưu ý Kỹ sư:</strong> Feature flag bổ sung cho việc này: phát hành code ở trạng thái tắt, rồi bật dần, và tắt ngay lập tức nếu cần.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Canary)",
          "body": "Nắm vững nguyên lý Phát hành canary để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-9-1",
            "label": "AVAIL",
            "value": "99.99%",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-9-2",
            "label": "DOWNTIME",
            "value": "53 min",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-9-3",
            "label": "SPOFS",
            "value": "0",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-9-4",
            "label": "SURVIVES",
            "value": "a zone",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-9-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Phát hành canary"
          },
          {
            "id": "chk-9-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "redundancy-step-11",
        "number": 11,
        "title": "Regions",
        "category": "LÝ THUYẾT",
        "categoryColor": "emerald",
        "headline": "Vượt ra ngoài zone: nhiều region",
        "bodyHtml": "<p>Zone bảo vệ trước sự cố của một tòa nhà. Cả một <b>region</b> vẫn có thể sập (sự cố mạng khu vực hoặc control plane của đám mây), và nó ở xa người dùng trên các châu lục khác.</p>\n<p>Chạy ở hai region với DNS toàn cầu hoặc cổng vào anycast cho phép người dùng đi tới region khỏe mạnh gần nhất. Phần khó là dữ liệu: các bản sao cách nhau một đại dương sao chép với độ trễ ~100 ms.</p>\n<div class=\"callout callout--insight\"><strong>Lưu ý Kỹ sư:</strong> Đa region tốn kém và phức tạp. Hầu hết hệ thống được phục vụ tốt bằng nhiều zone trong một region cộng với sao lưu tốt.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Regions)",
          "body": "Nắm vững nguyên lý Vượt ra ngoài zone: nhiều region để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-10-1",
            "label": "AVAIL",
            "value": "99.995%",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-10-2",
            "label": "DOWNTIME",
            "value": "26 min",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-10-3",
            "label": "SPOFS",
            "value": "0",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-10-4",
            "label": "SURVIVES",
            "value": "a region",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-10-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Vượt ra ngoài zone: nhiều region"
          },
          {
            "id": "chk-10-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "redundancy-step-12",
        "number": 12,
        "title": "Recap",
        "category": "TỐI ƯU",
        "categoryColor": "emerald",
        "headline": "Recap",
        "bodyHtml": "<div class=\"callout callout--next\"><strong>Lưu ý Kỹ sư:</strong> Tiếp theo: <b>Giới hạn tốc độ</b>: bảo vệ hệ thống khỏi quá nhiều lưu lượng sai loại.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Recap)",
          "body": "Nắm vững nguyên lý Recap để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-11-1",
            "label": "AVAIL",
            "value": "99.99%",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-11-2",
            "label": "DOWNTIME",
            "value": "53 min",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-11-3",
            "label": "SPOFS",
            "value": "0",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-11-4",
            "label": "SURVIVES",
            "value": "a zone",
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
    "id": "rate-limiting",
    "slug": "rate-limiting",
    "title": "Giới hạn tốc độ",
    "subtitle": "Rate Limiting · 10 phút thực chiến",
    "moduleCode": "05",
    "moduleTitle": "Độ Tin Cậy & Chống Chịu Lỗi (Reliability)",
    "durationMinutes": 10,
    "difficulty": "Trung cấp",
    "steps": [
      {
        "id": "rate-limiting-step-1",
        "number": 1,
        "title": "Runaway",
        "category": "BỐI CẢNH",
        "categoryColor": "rose",
        "headline": "Một script, mọi người cùng khổ",
        "bodyHtml": "<p>Script của một khách hàng có bug: nó gọi API của bạn trong một vòng lặp chặt, 5.000 yêu cầu mỗi giây. Máy chủ API dành gần hết thời gian cho nó.</p>\n<p>Yêu cầu của người dùng thật phải xếp hàng sau cơn lũ và bị quá thời gian. Không ai tấn công bạn; một client chỉ đơn giản lấy nhiều hơn phần của mình.</p>\n<div class=\"callout callout--warn\"><strong>Lưu ý Kỹ sư:</strong> Năng lực dùng chung cần một quy tắc công bằng. Không có nó, client ồn ào nhất sẽ thắng.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Runaway)",
          "body": "Nắm vững nguyên lý Một script, mọi người cùng khổ để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-0-1",
            "label": "ABUSER",
            "value": "5e3",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-0-2",
            "label": "SERVED",
            "value": "61",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-0-3",
            "label": "APICPU",
            "value": "99",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-0-4",
            "label": "LIMITED",
            "value": "0",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-0-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Một script, mọi người cùng khổ"
          },
          {
            "id": "chk-0-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "rate-limiting-step-2",
        "number": 2,
        "title": "Limit",
        "category": "THỰC THI",
        "categoryColor": "blue",
        "headline": "Bộ giới hạn tốc độ ở cửa trước",
        "bodyHtml": "<p>Put a <span class=\"term\">rate limiter</span> in the gateway in front of the API. Each client — identified by API key, user id or IP address — gets a budget, say 10 requests per second.</p>\n<p>Yêu cầu trong hạn mức được cho qua. Phần còn lại bị từ chối ngay với <code>429 Too Many Requests</code>, trước khi tốn bất cứ gì của API.</p>\n<div class=\"callout callout--tip\"><strong>Lưu ý Kỹ sư:</strong> Từ chối sớm thì rẻ: gateway trả lời trong vài micro giây, và API không bao giờ thấy phần vượt mức.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Limit)",
          "body": "Nắm vững nguyên lý Bộ giới hạn tốc độ ở cửa trước để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-1-1",
            "label": "ABUSER",
            "value": "5e3",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-1-2",
            "label": "SERVED",
            "value": "99",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-1-3",
            "label": "APICPU",
            "value": "45",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-1-4",
            "label": "LIMITED",
            "value": "4990",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-1-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Bộ giới hạn tốc độ ở cửa trước"
          },
          {
            "id": "chk-1-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "rate-limiting-step-3",
        "number": 3,
        "title": "Token bucket",
        "category": "LÝ THUYẾT",
        "categoryColor": "emerald",
        "headline": "Cách nó đếm: token bucket",
        "bodyHtml": "<p>The most common algorithm is the <span class=\"term\">token bucket</span>. Each client has a bucket holding up to 10 tokens, refilled at 10 per second. Every request takes a token; an empty bucket means 429.</p>\n<p>Thùng của người dùng thật hầu như luôn đầy (các chấm xanh). Script làm rỗng thùng của nó ngay lập tức và thùng cứ thế rỗng.</p>\n<div class=\"callout callout--insight\"><strong>Lưu ý Kỹ sư:</strong> Kích thước thùng cho phép các đợt bùng ngắn; tốc độ nạp lại giới hạn mức trung bình dài hạn. Hai con số, dễ giải thích.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Token bucket)",
          "body": "Nắm vững nguyên lý Cách nó đếm: token bucket để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-2-1",
            "label": "ABUSER",
            "value": "5e3",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-2-2",
            "label": "SERVED",
            "value": "99",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-2-3",
            "label": "APICPU",
            "value": "45",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-2-4",
            "label": "LIMITED",
            "value": "4990",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-2-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Cách nó đếm: token bucket"
          },
          {
            "id": "chk-2-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "rate-limiting-step-4",
        "number": 4,
        "title": "Algorithms",
        "category": "LÝ THUYẾT",
        "categoryColor": "emerald",
        "headline": "Cửa sổ hay thùng",
        "bodyHtml": "<p><b>Cửa sổ cố định</b> đơn giản hơn đếm yêu cầu theo từng phút trên đồng hồ và đặt lại vào giây :00. Dễ làm, nhưng một client có thể gửi hạn mức cả phút vào 12:00:59 rồi lại gửi vào 12:01:00: gấp đôi giới hạn trong hai giây.</p>\n<p><b>Cửa sổ trượt</b> làm mượt mép đó; <b>token bucket</b> cho phép các đợt bùng có kiểm soát. Hầu hết API gateway dùng một trong hai cách sau.</p>\n<div class=\"callout callout--tip\"><strong>Lưu ý Kỹ sư:</strong> Cần dòng ra đều đặn (ví dụ tới API mong manh của đối tác)? Leaky bucket xếp hàng yêu cầu và thả chúng ra theo nhịp cố định.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Algorithms)",
          "body": "Nắm vững nguyên lý Cửa sổ hay thùng để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-3-1",
            "label": "ABUSER",
            "value": "5e3",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-3-2",
            "label": "SERVED",
            "value": "99",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-3-3",
            "label": "APICPU",
            "value": "45",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-3-4",
            "label": "LIMITED",
            "value": "4990",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-3-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Cửa sổ hay thùng"
          },
          {
            "id": "chk-3-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "rate-limiting-step-5",
        "number": 5,
        "title": "Many gateways",
        "category": "BỐI CẢNH",
        "categoryColor": "rose",
        "headline": "Nhiều gateway, một hạn mức",
        "bodyHtml": "<p>Một gateway là không đủ, nên bạn chạy nhiều cái sau bộ cân bằng tải. Nếu mỗi cái tự đếm riêng, một client rải trên 10 gateway sẽ được gấp 10 lần giới hạn.</p>\n<p>Vì vậy các gateway giữ bộ đếm trong một kho chung, nhanh (thường là Redis): mỗi yêu cầu tăng nguyên tử bộ đếm và kiểm tra tổng.</p>\n<div class=\"callout callout--tip\"><strong>Lưu ý Kỹ sư:</strong> Kho chung thêm ~1 ms mỗi yêu cầu. Một số hệ thống đánh đổi chút độ chính xác lấy tốc độ bằng cách đồng bộ bộ đếm cục bộ mỗi giây.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Many gateways)",
          "body": "Nắm vững nguyên lý Nhiều gateway, một hạn mức để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-4-1",
            "label": "ABUSER",
            "value": "5e3",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-4-2",
            "label": "SERVED",
            "value": "99",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-4-3",
            "label": "APICPU",
            "value": "45",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-4-4",
            "label": "LIMITED",
            "value": "4990",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-4-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Nhiều gateway, một hạn mức"
          },
          {
            "id": "chk-4-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "rate-limiting-step-6",
        "number": 6,
        "title": "Back off",
        "category": "LÝ THUYẾT",
        "categoryColor": "emerald",
        "headline": "Hướng dẫn client cách cư xử",
        "bodyHtml": "<p>Một phản hồi 429 tốt cho biết khi nào quay lại: header <code>Retry-After: 30</code>, cùng các header cho thấy giới hạn và phần còn lại. Client tử tế sẽ chậm lại và thử lại sau.</p>\n<p>Chủ của script sửa vòng lặp. Giờ nó dùng đúng phần công bằng của mình, không hơn.</p>\n<div class=\"callout callout--tip\"><strong>Lưu ý Kỹ sư:</strong> Công bố giới hạn trong tài liệu API, và cung cấp gói cao hơn cho khách hàng thực sự cần nhiều hơn.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Back off)",
          "body": "Nắm vững nguyên lý Hướng dẫn client cách cư xử để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-5-1",
            "label": "ABUSER",
            "value": "10",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-5-2",
            "label": "SERVED",
            "value": "100",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-5-3",
            "label": "APICPU",
            "value": "38",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-5-4",
            "label": "LIMITED",
            "value": "0",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-5-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Hướng dẫn client cách cư xử"
          },
          {
            "id": "chk-5-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "rate-limiting-step-7",
        "number": 7,
        "title": "Tenants",
        "category": "BỐI CẢNH",
        "categoryColor": "rose",
        "headline": "Tình huống: 10.000 người dùng của một khách hàng",
        "bodyHtml": "<p>Bạn bán API cho các công ty. Một khách hàng chạy việc nhập dữ liệu mỗi đêm với 10.000 người dùng tử tế, ai cũng dưới giới hạn cá nhân, nhưng cộng lại dùng 70% năng lực của bạn. Các khách hàng khác bị chậm mỗi đêm.</p>\n<p>Giới hạn theo người dùng không thấy được điều này. Thêm giới hạn theo <b>tenant</b> (tài khoản khách hàng), tính theo gói của họ, chồng lên giới hạn theo người dùng.</p>\n<div class=\"callout callout--tip\"><strong>Lưu ý Kỹ sư:</strong> Xếp lớp giới hạn: theo người dùng, theo tenant, theo endpoint (endpoint tốn kém có giới hạn thấp hơn), và một trần toàn cục.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Tenants)",
          "body": "Nắm vững nguyên lý Tình huống: 10.000 người dùng của một khách hàng để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-6-1",
            "label": "SERVED",
            "value": "99",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-6-2",
            "label": "APICPU",
            "value": "55",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-6-3",
            "label": "LIMITED",
            "value": "1,200/s",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-6-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Tình huống: 10.000 người dùng của một khách hàng"
          },
          {
            "id": "chk-6-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "rate-limiting-step-8",
        "number": 8,
        "title": "Shedding",
        "category": "LÝ THUYẾT",
        "categoryColor": "emerald",
        "headline": "Khi ai cũng tăng vọt: cắt bớt tải",
        "bodyHtml": "<p>Giới hạn tốc độ ngăn một client độc chiếm năng lực. Nhưng vào ngày ra mắt <em>tất cả</em> cùng đến một lúc, và tổng vẫn vượt quá mức bạn phục vụ được.</p>\n<p>Then <span class=\"term\">load shedding</span> decides what to drop: background work like prefetching, recommendations and analytics (amber) is rejected first, so logins and checkouts keep working.</p>\n<div class=\"callout callout--insight\"><strong>Lưu ý Kỹ sư:</strong> Cố ý làm hỏng một số yêu cầu tốt hơn là vô tình làm hỏng tất cả.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Shedding)",
          "body": "Nắm vững nguyên lý Khi ai cũng tăng vọt: cắt bớt tải để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-7-1",
            "label": "SERVED",
            "value": "100",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-7-2",
            "label": "APICPU",
            "value": "82",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-7-3",
            "label": "LIMITED",
            "value": "2,000 shed/s",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-7-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Khi ai cũng tăng vọt: cắt bớt tải"
          },
          {
            "id": "chk-7-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "rate-limiting-step-9",
        "number": 9,
        "title": "Recap",
        "category": "TỐI ƯU",
        "categoryColor": "emerald",
        "headline": "Recap",
        "bodyHtml": "<div class=\"callout callout--next\"><strong>Lưu ý Kỹ sư:</strong> Tiếp theo: <b>Timeout & thử lại</b>: làm gì khi chính dịch vụ bạn gọi đang gặp sự cố.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Recap)",
          "body": "Nắm vững nguyên lý Recap để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-8-1",
            "label": "ABUSER",
            "value": "10",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-8-2",
            "label": "SERVED",
            "value": "100",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-8-3",
            "label": "APICPU",
            "value": "38",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-8-4",
            "label": "LIMITED",
            "value": "0",
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
    "id": "timeouts-retries",
    "slug": "timeouts-retries",
    "title": "Timeout & thử lại",
    "subtitle": "Timeouts & Retries · 11 phút thực chiến",
    "moduleCode": "05",
    "moduleTitle": "Độ Tin Cậy & Chống Chịu Lỗi (Reliability)",
    "durationMinutes": 11,
    "difficulty": "Trung cấp",
    "steps": [
      {
        "id": "timeouts-retries-step-1",
        "number": 1,
        "title": "Slow call",
        "category": "BỐI CẢNH",
        "categoryColor": "rose",
        "headline": "Một dịch vụ chậm kéo sập dịch vụ khác",
        "bodyHtml": "<p>Dịch vụ thanh toán bắt đầu trả lời sau 30 giây thay vì 50 ms. Dịch vụ đơn hàng gọi nó và cứ thế <b>chờ</b>, không giới hạn.</p>\n<p>Mỗi lệnh gọi đang chờ giữ một thread. Trong vòng một phút, cả 200 đều kẹt, và dịch vụ đơn hàng không phục vụ nổi cả những trang không cần thanh toán. Một phụ thuộc chậm đã thành sự cố toàn phần.</p>\n<div class=\"callout callout--warn\"><strong>Lưu ý Kỹ sư:</strong> Đây là sự cố dây chuyền: rắc rối lan ngược lên qua mọi thứ chờ mà không có giới hạn.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Slow call)",
          "body": "Nắm vững nguyên lý Một dịch vụ chậm kéo sập dịch vụ khác để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-0-1",
            "label": "SUCCESS",
            "value": "40",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-0-2",
            "label": "P99",
            "value": "3e4",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-0-3",
            "label": "PAYLOAD",
            "value": "1×",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-0-4",
            "label": "THREADS",
            "value": "200 / 200 busy",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-0-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Một dịch vụ chậm kéo sập dịch vụ khác"
          },
          {
            "id": "chk-0-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "timeouts-retries-step-2",
        "number": 2,
        "title": "Timeout",
        "category": "THỰC THI",
        "categoryColor": "blue",
        "headline": "Đặt timeout, có phương án dự phòng",
        "bodyHtml": "<p>Give every outgoing call a <span class=\"term\">timeout</span>: if payments hasn’t answered in 800 ms, give up and free the thread.</p>\n<p>Rồi xuống cấp một cách êm ái: nhận đơn ở trạng thái “chờ thanh toán” và trừ tiền ngay sau đó. Dịch vụ đơn hàng vẫn chạy cho mọi việc khác.</p>\n<div class=\"callout callout--tip\"><strong>Lưu ý Kỹ sư:</strong> Đặt timeout theo độ trễ thực tế: cao hơn p99 của phụ thuộc một chút, và luôn ngắn hơn timeout của chính bên gọi bạn.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Timeout)",
          "body": "Nắm vững nguyên lý Đặt timeout, có phương án dự phòng để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-1-1",
            "label": "SUCCESS",
            "value": "72",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-1-2",
            "label": "P99",
            "value": "820",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-1-3",
            "label": "PAYLOAD",
            "value": "1×",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-1-4",
            "label": "THREADS",
            "value": "35 / 200 busy",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-1-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Đặt timeout, có phương án dự phòng"
          },
          {
            "id": "chk-1-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "timeouts-retries-step-3",
        "number": 3,
        "title": "Retry",
        "category": "LÝ THUYẾT",
        "categoryColor": "emerald",
        "headline": "Thử lại những trục trặc thoáng qua",
        "bodyHtml": "<p>Nhiều lỗi chỉ thoáng qua: một gói tin bị rơi, một máy chủ đang khởi động lại, một trục trặc ngắn. Thử lại sau giây lát thường thành công.</p>\n<p>Một lần thử lại (màu hổ phách) biến hầu hết các lỗi đó thành thành công.</p>\n<div class=\"callout callout--tip\"><strong>Lưu ý Kỹ sư:</strong> Chỉ thử lại những lỗi có thể thành công lần sau: timeout, 503. Thử lại một 400 Bad Request thì chỉ thất bại tiếp.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Retry)",
          "body": "Nắm vững nguyên lý Thử lại những trục trặc thoáng qua để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-2-1",
            "label": "SUCCESS",
            "value": "97",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-2-2",
            "label": "P99",
            "value": "950",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-2-3",
            "label": "PAYLOAD",
            "value": "1.1×",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-2-4",
            "label": "THREADS",
            "value": "38 / 200 busy",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-2-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Thử lại những trục trặc thoáng qua"
          },
          {
            "id": "chk-2-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "timeouts-retries-step-4",
        "number": 4,
        "title": "Retry storm",
        "category": "BỐI CẢNH",
        "categoryColor": "rose",
        "headline": "Thử lại biến thành bão",
        "bodyHtml": "<p>Rồi thanh toán thật sự quá tải. Mọi bên gọi đều thử lại, ba lần, ngay lập tức. Mỗi yêu cầu thất bại thành bốn, nên dịch vụ đang khó khăn giờ nhận <b>4×</b> tải bình thường.</p>\n<p>Nó không bao giờ hồi phục được: chính các lần thử lại giữ nó nằm sập. Client của bạn đã biến thành một cuộc tấn công từ chối dịch vụ.</p>\n<div class=\"callout callout--warn\"><strong>Lưu ý Kỹ sư:</strong> Thử lại cũng nhân lên qua các tầng: 3 lần thử lại ở mỗi tầng trong 3 tầng là tới 64 lệnh gọi cho một cú nhấp.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Retry storm)",
          "body": "Nắm vững nguyên lý Thử lại biến thành bão để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-3-1",
            "label": "SUCCESS",
            "value": "18",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-3-2",
            "label": "P99",
            "value": "2400",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-3-3",
            "label": "PAYLOAD",
            "value": "4×",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-3-4",
            "label": "THREADS",
            "value": "200 / 200 busy",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-3-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Thử lại biến thành bão"
          },
          {
            "id": "chk-3-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "timeouts-retries-step-5",
        "number": 5,
        "title": "Backoff",
        "category": "THỰC THI",
        "categoryColor": "blue",
        "headline": "Lùi lại, kèm jitter",
        "bodyHtml": "<p>Wait before retrying, and wait longer each time: 100 ms, then 200, then 400 — <span class=\"term\">exponential backoff</span>. Add randomness (<span class=\"term\">jitter</span>) so thousands of clients don’t retry in the same instant.</p>\n<p>Giới hạn số lần thử, và giới hạn tỷ lệ lưu lượng có thể là thử lại (ngân sách thử lại ~10%). Thanh toán có khoảng trống để hồi phục.</p>\n<div class=\"callout callout--tip\"><strong>Lưu ý Kỹ sư:</strong> Hầu hết SDK đám mây đã làm exponential backoff có jitter: kiểm tra rằng nó đang bật, và các tầng không chồng chất các lần thử lại.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Backoff)",
          "body": "Nắm vững nguyên lý Lùi lại, kèm jitter để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-4-1",
            "label": "SUCCESS",
            "value": "96",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-4-2",
            "label": "P99",
            "value": "1300",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-4-3",
            "label": "PAYLOAD",
            "value": "1.2×",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-4-4",
            "label": "THREADS",
            "value": "45 / 200 busy",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-4-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Lùi lại, kèm jitter"
          },
          {
            "id": "chk-4-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "timeouts-retries-step-6",
        "number": 6,
        "title": "Breaker",
        "category": "LÝ THUYẾT",
        "categoryColor": "emerald",
        "headline": "Circuit breaker: tạm ngừng gọi một lúc",
        "bodyHtml": "<p>Payments goes fully down. Even with timeouts, every call wastes 800 ms finding that out. A <span class=\"term\">circuit breaker</span> watches the failures — past a threshold it <b>opens</b> and fails calls instantly, without trying.</p>\n<p>Cứ 30 giây nó cho một lệnh gọi thử đi qua (<b>nửa mở</b>, tín hiệu xanh). Nếu thành công, nó đóng lại.</p>\n<div class=\"callout callout--insight\"><strong>Lưu ý Kỹ sư:</strong> Giống cầu dao trong nhà bạn: nó nhảy để bảo vệ phần còn lại của hệ thống, và bạn bật lại khi lỗi đã được sửa.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Breaker)",
          "body": "Nắm vững nguyên lý Circuit breaker: tạm ngừng gọi một lúc để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-5-1",
            "label": "SUCCESS",
            "value": "88",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-5-2",
            "label": "P99",
            "value": "25",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-5-3",
            "label": "PAYLOAD",
            "value": "resting",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-5-4",
            "label": "THREADS",
            "value": "6 / 200 busy",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-5-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Circuit breaker: tạm ngừng gọi một lúc"
          },
          {
            "id": "chk-5-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "timeouts-retries-step-7",
        "number": 7,
        "title": "Closed",
        "category": "THỰC THI",
        "categoryColor": "blue",
        "headline": "Nửa mở, rồi đóng",
        "bodyHtml": "<p>Thanh toán hồi phục. Lệnh gọi thử kế tiếp thành công, nên cầu dao đóng và lưu lượng chảy lại, từ từ, để dịch vụ không bị dồn ngập ngay khi vừa trở lại.</p>\n<p>Trong lúc đó, các đơn “chờ thanh toán” được trừ tiền từ một hàng đợi. Không đơn nào bị mất, và phần còn lại của trang chưa từng sập.</p>\n<div class=\"callout callout--tip\"><strong>Lưu ý Kỹ sư:</strong> Các thư viện như resilience4j và Polly, và service mesh như Envoy/Istio, cung cấp sẵn timeout, thử lại và cầu dao.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Closed)",
          "body": "Nắm vững nguyên lý Nửa mở, rồi đóng để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-6-1",
            "label": "SUCCESS",
            "value": "99",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-6-2",
            "label": "P99",
            "value": "180",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-6-3",
            "label": "PAYLOAD",
            "value": "1×",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-6-4",
            "label": "THREADS",
            "value": "30 / 200 busy",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-6-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Nửa mở, rồi đóng"
          },
          {
            "id": "chk-6-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "timeouts-retries-step-8",
        "number": 8,
        "title": "Idempotency",
        "category": "LÝ THUYẾT",
        "categoryColor": "emerald",
        "headline": "Thử lại không được trừ tiền hai lần",
        "bodyHtml": "<p>Một trường hợp hiểm: thanh toán đã trừ tiền thẻ, nhưng phản hồi bị mất trên đường về. Dịch vụ đơn hàng bị timeout và thử lại, và khách hàng bị trừ tiền <b>hai lần</b>.</p>\n<p>Fix: send an <span class=\"term\">idempotency key</span> — a unique id per order — with every attempt. Payments remembers the result for each key and returns it again for duplicates instead of charging again.</p>\n<div class=\"callout callout--insight\"><strong>Lưu ý Kỹ sư:</strong> Mọi thao tác có thể được thử lại đều phải idempotent: làm hai lần có tác dụng như làm một lần.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Idempotency)",
          "body": "Nắm vững nguyên lý Thử lại không được trừ tiền hai lần để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-7-1",
            "label": "SUCCESS",
            "value": "99",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-7-2",
            "label": "P99",
            "value": "180",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-7-3",
            "label": "PAYLOAD",
            "value": "1×",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-7-4",
            "label": "THREADS",
            "value": "30 / 200 busy",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-7-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Thử lại không được trừ tiền hai lần"
          },
          {
            "id": "chk-7-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "timeouts-retries-step-9",
        "number": 9,
        "title": "Deadlines",
        "category": "LÝ THUYẾT",
        "categoryColor": "emerald",
        "headline": "Chuyển tiếp deadline",
        "bodyHtml": "<p>Trình duyệt của người mua bỏ cuộc sau 2 giây. Nhưng nếu dịch vụ đơn hàng đã tiêu 1,8 s, thì thanh toán bắt đầu thêm 800 ms việc mới là vô ích: chẳng ai thấy câu trả lời.</p>\n<p>So each request carries a <span class=\"term\">deadline</span>: “answer by 12:00:02.000”. Every service checks the time left and passes the remaining budget on; with none left, it stops immediately.</p>\n<div class=\"callout callout--tip\"><strong>Lưu ý Kỹ sư:</strong> gRPC tự động truyền deadline. Với HTTP, hãy truyền thời gian còn lại trong một header.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Deadlines)",
          "body": "Nắm vững nguyên lý Chuyển tiếp deadline để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-8-1",
            "label": "SUCCESS",
            "value": "99",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-8-2",
            "label": "P99",
            "value": "180",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-8-3",
            "label": "PAYLOAD",
            "value": "1×",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-8-4",
            "label": "THREADS",
            "value": "28 / 200 busy",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-8-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Chuyển tiếp deadline"
          },
          {
            "id": "chk-8-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "timeouts-retries-step-10",
        "number": 10,
        "title": "Bulkheads",
        "category": "LÝ THUYẾT",
        "categoryColor": "emerald",
        "headline": "Bulkhead: các pool riêng",
        "bodyHtml": "<p>Nhớ bước 1, khi thanh toán chậm ngốn hết 200 thread? Dịch vụ đơn hàng cũng có thể tự bảo vệ bằng cách cho mỗi phụ thuộc một pool riêng: chẳng hạn 40 thread cho thanh toán, 40 cho kho, phần còn lại cho mọi thứ khác.</p>\n<p>Now when payments is slow, only its 40 threads fill up. Browsing, search and the cart keep working. Like the watertight compartments in a ship — the <span class=\"term\">bulkhead</span> pattern.</p>\n<div class=\"callout callout--insight\"><strong>Lưu ý Kỹ sư:</strong> Timeout giới hạn một lệnh gọi có thể làm hại bạn bao lâu; bulkhead giới hạn bao nhiêu lệnh gọi có thể làm vậy.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Bulkheads)",
          "body": "Nắm vững nguyên lý Bulkhead: các pool riêng để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-9-1",
            "label": "SUCCESS",
            "value": "92",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-9-2",
            "label": "P99",
            "value": "820",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-9-3",
            "label": "PAYLOAD",
            "value": "1×",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-9-4",
            "label": "THREADS",
            "value": "40 / 40 payments · rest free",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-9-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Bulkhead: các pool riêng"
          },
          {
            "id": "chk-9-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "timeouts-retries-step-11",
        "number": 11,
        "title": "Recap",
        "category": "TỐI ƯU",
        "categoryColor": "emerald",
        "headline": "Recap",
        "bodyHtml": "<div class=\"callout callout--next\"><strong>Lưu ý Kỹ sư:</strong> Tiếp theo: <b>Khả năng quan sát</b>: ngay từ đầu, làm sao bạn biết được thanh toán đang chậm.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Recap)",
          "body": "Nắm vững nguyên lý Recap để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-10-1",
            "label": "SUCCESS",
            "value": "99",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-10-2",
            "label": "P99",
            "value": "180",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-10-3",
            "label": "PAYLOAD",
            "value": "1×",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-10-4",
            "label": "THREADS",
            "value": "30 / 200 busy",
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
    "id": "observability",
    "slug": "observability",
    "title": "Observability",
    "subtitle": "Observability · 11 phút thực chiến",
    "moduleCode": "05",
    "moduleTitle": "Độ Tin Cậy & Chống Chịu Lỗi (Reliability)",
    "durationMinutes": 11,
    "difficulty": "Trung cấp",
    "steps": [
      {
        "id": "observability-step-1",
        "number": 1,
        "title": "It’s slow",
        "category": "BỐI CẢNH",
        "categoryColor": "rose",
        "headline": "“Thanh toán chậm.” Chậm ở đâu?",
        "bodyHtml": "<p>Ticket hỗ trợ chất đống: thanh toán mất vài giây. Một lần thanh toán đi qua gateway, đơn hàng, kho, thanh toán, một cơ sở dữ liệu và một API chống gian lận của bên thứ ba.</p>\n<p>Bạn thấy một yêu cầu đang chờ ở đâu đó trong sơ đồ này, nhưng nhóm thì không. CPU của mọi máy chủ trông đều ổn, và không ai biết nên bắt đầu từ đâu.</p>\n<div class=\"callout callout--warn\"><strong>Lưu ý Kỹ sư:</strong> Nếu người dùng phát hiện sự cố trước bạn, bạn đang bay mù.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (It’s slow)",
          "body": "Nắm vững nguyên lý “Thanh toán chậm.” Chậm ở đâu? để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-0-1",
            "label": "DETECT",
            "value": "2 h (support tickets)",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-0-2",
            "label": "P99",
            "value": "2400",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-0-3",
            "label": "SIGNALS",
            "value": "none",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-0-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: “Thanh toán chậm.” Chậm ở đâu?"
          },
          {
            "id": "chk-0-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "observability-step-2",
        "number": 2,
        "title": "Metrics",
        "category": "LÝ THUYẾT",
        "categoryColor": "emerald",
        "headline": "Metric: những con số theo thời gian",
        "bodyHtml": "<p>Every service records a few numbers about the requests it handles — the <span class=\"term\">RED</span> method: <b>R</b>ate (requests/s), <b>E</b>rrors (failed share) and <b>D</b>uration (latency percentiles) — and sends them to a time-series store with dashboards.</p>\n<p>Giờ bức tranh đã rõ: kho và cơ sở dữ liệu đều nhanh; sự chậm nằm trên đường thanh toán.</p>\n<div class=\"callout callout--tip\"><strong>Lưu ý Kỹ sư:</strong> Bộ công cụ phổ biến: Prometheus + Grafana, Datadog, CloudWatch. Đo p99, đừng chỉ đo trung bình. RED mô tả yêu cầu; với máy móc, hãy theo dõi <b>USE</b>: mức sử dụng, độ bão hòa, lỗi.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Metrics)",
          "body": "Nắm vững nguyên lý Metric: những con số theo thời gian để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-1-1",
            "label": "DETECT",
            "value": "5 min",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-1-2",
            "label": "LOCATE",
            "value": "payments path",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-1-3",
            "label": "P99",
            "value": "2400",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-1-4",
            "label": "SIGNALS",
            "value": "metrics",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-1-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Metric: những con số theo thời gian"
          },
          {
            "id": "chk-1-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "observability-step-3",
        "number": 3,
        "title": "Alerts",
        "category": "LÝ THUYẾT",
        "categoryColor": "emerald",
        "headline": "Cảnh báo theo những gì người dùng cảm nhận",
        "bodyHtml": "<p>Đừng gọi ai dậy vì “CPU trên 80%”: nó kêu liên tục và thường chẳng có ý nghĩa gì. Hãy cảnh báo theo các <b>triệu chứng</b> mà người dùng cảm nhận.</p>\n<p>Pick an <span class=\"term\">SLI</span> (say, the share of checkouts faster than 1 s), set an <span class=\"term\">SLO</span> target (99.9%), and alert when you’re burning through the remaining <span class=\"term\">error budget</span> too fast.</p>\n<div class=\"callout callout--tip\"><strong>Lưu ý Kỹ sư:</strong> Ngân sách lỗi biến độ tin cậy thành một con số chung: khi còn, hãy ra mắt tính năng; khi hết, hãy sửa độ tin cậy trước.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Alerts)",
          "body": "Nắm vững nguyên lý Cảnh báo theo những gì người dùng cảm nhận để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-2-1",
            "label": "DETECT",
            "value": "2 min",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-2-2",
            "label": "LOCATE",
            "value": "payments path",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-2-3",
            "label": "P99",
            "value": "2400",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-2-4",
            "label": "SIGNALS",
            "value": "metrics + alerts",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-2-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Cảnh báo theo những gì người dùng cảm nhận"
          },
          {
            "id": "chk-2-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "observability-step-4",
        "number": 4,
        "title": "Logs",
        "category": "LÝ THUYẾT",
        "categoryColor": "emerald",
        "headline": "Log: câu chuyện, từng dòng một",
        "bodyHtml": "<p>Metrics say <em>where</em>; <span class=\"term\">logs</span> say <em>what happened</em>. Each service writes timestamped events — but at thousands of requests a second, lines from different requests interleave into noise.</p>\n<p>Mẹo là: gán cho mỗi yêu cầu một id tại gateway, truyền nó đi tiếp và đưa nó vào mọi dòng log. Lọc theo một id, bạn có câu chuyện của một yêu cầu.</p>\n<div class=\"callout callout--tip\"><strong>Lưu ý Kỹ sư:</strong> Hãy ghi log dạng JSON có cấu trúc, không phải văn bản tự do, để bạn có thể lọc theo id yêu cầu, người dùng, dịch vụ hoặc trạng thái.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Logs)",
          "body": "Nắm vững nguyên lý Log: câu chuyện, từng dòng một để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-3-1",
            "label": "DETECT",
            "value": "2 min",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-3-2",
            "label": "LOCATE",
            "value": "payments → fraud API?",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-3-3",
            "label": "P99",
            "value": "2400",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-3-4",
            "label": "SIGNALS",
            "value": "metrics + logs",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-3-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Log: câu chuyện, từng dòng một"
          },
          {
            "id": "chk-3-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "observability-step-5",
        "number": 5,
        "title": "Traces",
        "category": "THỰC THI",
        "categoryColor": "blue",
        "headline": "Trace: theo một yêu cầu đi khắp nơi",
        "bodyHtml": "<p>A <span class=\"term\">distributed trace</span> records every hop of one request as a <b>span</b> with a start time and duration, all joined by the same trace id. Drawn as a waterfall, it shows exactly where the time goes.</p>\n<p>Theo dõi yêu cầu màu tím: 2,1 trong 2,4 giây của nó là để chờ API chống gian lận của bên thứ ba.</p>\n<div class=\"callout callout--insight\"><strong>Lưu ý Kỹ sư:</strong> Công cụ: OpenTelemetry để thu thập; Jaeger, Tempo, Honeycomb hoặc Datadog để khám phá. Gắn đo đạc một lần, dùng ở mọi nơi.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Traces)",
          "body": "Nắm vững nguyên lý Trace: theo một yêu cầu đi khắp nơi để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-4-1",
            "label": "DETECT",
            "value": "2 min",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-4-2",
            "label": "LOCATE",
            "value": "5 min",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-4-3",
            "label": "P99",
            "value": "2400",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-4-4",
            "label": "SIGNALS",
            "value": "metrics + logs + traces",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-4-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Trace: theo một yêu cầu đi khắp nơi"
          },
          {
            "id": "chk-4-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "observability-step-6",
        "number": 6,
        "title": "Fixed",
        "category": "THỰC THI",
        "categoryColor": "blue",
        "headline": "Sửa, rồi chứng minh",
        "bodyHtml": "<p>Khi đã biết nguyên nhân, cách sửa rất nhanh: gọi API chống gian lận với timeout 300 ms, cache các điểm số gần đây, và xem xét lại những trường hợp chậm hiếm hoi sau đó.</p>\n<p>Chính các dashboard ấy chứng minh cách sửa hiệu quả: p99 giảm từ 2,4 s xuống 310 ms, và cảnh báo SLO tắt. Tổng thời gian từ lúc báo động tới lúc tìm ra nguyên nhân: vài phút, không phải vài giờ.</p>\n<div class=\"callout callout--tip\"><strong>Lưu ý Kỹ sư:</strong> Metric cho biết có gì đó sai, trace cho thấy ở đâu, log giải thích vì sao. Bạn cần cả ba.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Fixed)",
          "body": "Nắm vững nguyên lý Sửa, rồi chứng minh để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-5-1",
            "label": "DETECT",
            "value": "2 min",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-5-2",
            "label": "LOCATE",
            "value": "5 min",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-5-3",
            "label": "P99",
            "value": "310",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-5-4",
            "label": "SIGNALS",
            "value": "metrics + logs + traces",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-5-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Sửa, rồi chứng minh"
          },
          {
            "id": "chk-5-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "observability-step-7",
        "number": 7,
        "title": "Incident",
        "category": "BỐI CẢNH",
        "categoryColor": "rose",
        "headline": "Tình huống: 3 giờ sáng, lỗi tăng vọt",
        "bodyHtml": "<p>Máy nhắn tin reo: lỗi thanh toán nhảy từ 0,1% lên 6% lúc 03:12. Trên dashboard, thủ phạm là kho. Nhật ký triển khai cho thấy một thay đổi cấu hình ở kho lúc 03:10.</p>\n<p>Thực hành tốt là <b>giảm thiểu trước</b>: hoàn tác thay đổi và khôi phục dịch vụ, rồi mới điều tra nguyên nhân gốc, chứ không làm ngược lại.</p>\n<div class=\"callout callout--tip\"><strong>Lưu ý Kỹ sư:</strong> Đặt các lần triển khai và thay đổi cấu hình lên dashboard làm điểm đánh dấu. “Cái gì đã thay đổi?” là câu hỏi đầu tiên trong hầu hết mọi sự cố.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Incident)",
          "body": "Nắm vững nguyên lý Tình huống: 3 giờ sáng, lỗi tăng vọt để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-6-1",
            "label": "DETECT",
            "value": "1 min",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-6-2",
            "label": "LOCATE",
            "value": "4 min",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-6-3",
            "label": "P99",
            "value": "900",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-6-4",
            "label": "SIGNALS",
            "value": "metrics + logs + traces",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-6-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Tình huống: 3 giờ sáng, lỗi tăng vọt"
          },
          {
            "id": "chk-6-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "observability-step-8",
        "number": 8,
        "title": "Post-mortem",
        "category": "LÝ THUYẾT",
        "categoryColor": "violet",
        "headline": "Rút kinh nghiệm: post-mortem",
        "bodyHtml": "<p>After the incident, the team writes a <span class=\"term\">post-mortem</span>: a timeline, the impact, the root cause, and the actions that stop it happening again.</p>\n<p>Nó <b>không đổ lỗi</b> (blameless): câu hỏi là hệ thống đã để lọt sai sót như thế nào, chứ không phải ai gây ra. Ở đây: thay đổi cấu hình giờ cũng đi qua cùng quy trình triển khai canary như mã.</p>\n<div class=\"callout callout--insight\"><strong>Lưu ý Kỹ sư:</strong> Mỗi sự cố là dữ liệu huấn luyện đắt giá. Những nhóm viết post-mortem tốt ít lặp lại cùng một sai lầm hơn hẳn.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Post-mortem)",
          "body": "Nắm vững nguyên lý Rút kinh nghiệm: post-mortem để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-7-1",
            "label": "DETECT",
            "value": "1 min",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-7-2",
            "label": "LOCATE",
            "value": "4 min",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-7-3",
            "label": "P99",
            "value": "310",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-7-4",
            "label": "SIGNALS",
            "value": "metrics + logs + traces",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-7-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Rút kinh nghiệm: post-mortem"
          },
          {
            "id": "chk-7-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "observability-step-9",
        "number": 9,
        "title": "Recap",
        "category": "TỐI ƯU",
        "categoryColor": "emerald",
        "headline": "Recap",
        "bodyHtml": "<div class=\"callout callout--next\"><strong>Lưu ý Kỹ sư:</strong> Vậy là xong Độ tin cậy. Module tiếp theo: <b>Kiến trúc</b>, bắt đầu với monolith và microservice.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Recap)",
          "body": "Nắm vững nguyên lý Recap để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-8-1",
            "label": "DETECT",
            "value": "2 min",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-8-2",
            "label": "LOCATE",
            "value": "5 min",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-8-3",
            "label": "P99",
            "value": "310",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-8-4",
            "label": "SIGNALS",
            "value": "metrics + logs + traces",
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
