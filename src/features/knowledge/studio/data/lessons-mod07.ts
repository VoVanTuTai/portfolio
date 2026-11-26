import type { StudioLesson } from "../studio.types";

export const mod07Lessons: StudioLesson[] = [
  {
    "id": "authentication",
    "slug": "authentication",
    "title": "Authentication",
    "subtitle": "Authentication · 13 phút thực chiến",
    "moduleCode": "07",
    "moduleTitle": "Bảo Mật & Xác Thực Phân Quyền (Security)",
    "durationMinutes": 13,
    "difficulty": "Trung cấp",
    "steps": [
      {
        "id": "authentication-step-1",
        "number": 1,
        "title": "Plain text",
        "category": "BỐI CẢNH",
        "categoryColor": "rose",
        "headline": "Một bảng đầy mật khẩu",
        "bodyHtml": "<p>Alice đăng ký và dịch vụ đăng nhập lưu mật khẩu của cô đúng y như cô đã gõ. Đăng nhập chỉ là một phép so sánh đơn giản.</p>\n<p>Rồi một bản sao lưu cơ sở dữ liệu bị lộ: một bucket cấu hình sai, một chiếc laptop bị đánh cắp. Mọi mật khẩu đều đọc được ngay lập tức, và vì người ta dùng lại mật khẩu, kẻ tấn công giờ có thể thử chúng trên email, ngân hàng và mọi thứ khác.</p>\n<div class=\"callout callout--warn\"><strong>Lưu ý Kỹ sư:</strong> Hãy giả định một ngày nào đó cơ sở dữ liệu của bạn sẽ bị lộ. Câu hỏi là kẻ tấn công có thể làm gì với nó.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Plain text)",
          "body": "Nắm vững nguyên lý Một bảng đầy mật khẩu để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-0-1",
            "label": "LEAK",
            "value": "all passwords",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-0-2",
            "label": "MFA",
            "value": "no",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-0-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Một bảng đầy mật khẩu"
          },
          {
            "id": "chk-0-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "authentication-step-2",
        "number": 2,
        "title": "Hashing",
        "category": "THỰC THI",
        "categoryColor": "blue",
        "headline": "Lưu một hash chậm, có salt",
        "bodyHtml": "<p>Never store the password itself. Store a <span class=\"term\">hash</span>: a one-way fingerprint. At login, hash what Alice typed and compare fingerprints.</p>\n<p>Dùng hàm hash dành cho mật khẩu, như <b>argon2id</b>, <b>bcrypt</b> hoặc <b>scrypt</b>: một <b>salt</b> ngẫu nhiên cho mỗi người dùng khiến các mật khẩu giống nhau trông khác nhau, và sự chậm có chủ đích (~100 ms) biến hàng tỷ lần đoán thành nhiều năm.</p>\n<div class=\"callout callout--warn\"><strong>Lưu ý Kỹ sư:</strong> Hash nhanh như MD5 hay SHA-256 là công cụ sai: một card đồ họa thử hàng tỷ lần mỗi giây.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Hashing)",
          "body": "Nắm vững nguyên lý Lưu một hash chậm, có salt để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-1-1",
            "label": "LEAK",
            "value": "hashes only",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-1-2",
            "label": "MFA",
            "value": "no",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-1-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Lưu một hash chậm, có salt"
          },
          {
            "id": "chk-1-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "authentication-step-3",
        "number": 3,
        "title": "Session",
        "category": "LÝ THUYẾT",
        "categoryColor": "emerald",
        "headline": "Sau khi đăng nhập: một phiên",
        "bodyHtml": "<p>Không ai muốn gõ mật khẩu ở mỗi cú nhấp. Sau khi đăng nhập thành công, dịch vụ tạo một <b>phiên</b> và đưa cho trình duyệt một id phiên ngẫu nhiên trong cookie; các yêu cầu sau xuất trình cookie đó.</p>\n<p>Đánh dấu nó <code>HttpOnly</code> (script không đọc được), <code>Secure</code> (chỉ HTTPS) và <code>SameSite</code> (không gửi từ trang khác). Hoặc cấp một token có chữ ký, sống ngắn: xem bài Dịch vụ phi trạng thái.</p>\n<div class=\"callout callout--tip\"><strong>Lưu ý Kỹ sư:</strong> Hãy đối xử với id phiên như mật khẩu: dài, ngẫu nhiên, không bao giờ nằm trong URL hay log, và bị vô hiệu khi đăng xuất.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Session)",
          "body": "Nắm vững nguyên lý Sau khi đăng nhập: một phiên để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-2-1",
            "label": "LEAK",
            "value": "hashes only",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-2-2",
            "label": "MFA",
            "value": "no",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-2-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Sau khi đăng nhập: một phiên"
          },
          {
            "id": "chk-2-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "authentication-step-4",
        "number": 4,
        "title": "Reset",
        "category": "LÝ THUYẾT",
        "categoryColor": "emerald",
        "headline": "Tình huống: luồng quên mật khẩu",
        "bodyHtml": "<p>Đặt lại mật khẩu là cửa thứ hai vào mọi tài khoản, và thường là cửa yếu nhất. Lỗi điển hình: token đặt lại đoán được hoặc không bao giờ hết hạn, và một biểu mẫu báo “không có tài khoản nào với email đó”, cho kẻ tấn công biết chính xác email nào đã đăng ký.</p>\n<p>Một luồng an toàn: token ngẫu nhiên dài, dùng một lần, hiệu lực 15 phút; cùng một câu trả lời dù tài khoản có tồn tại hay không; và mọi phiên hiện có bị đăng xuất sau khi đổi.</p>\n<div class=\"callout callout--warn\"><strong>Lưu ý Kỹ sư:</strong> Mọi thứ có thể đổi mật khẩu (đặt lại, đổi email, công cụ hỗ trợ) đều cần sự cẩn trọng như chính việc đăng nhập.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Reset)",
          "body": "Nắm vững nguyên lý Tình huống: luồng quên mật khẩu để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-3-1",
            "label": "LEAK",
            "value": "hashes only",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-3-2",
            "label": "MFA",
            "value": "no",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-3-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Tình huống: luồng quên mật khẩu"
          },
          {
            "id": "chk-3-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "authentication-step-5",
        "number": 5,
        "title": "Stuffing",
        "category": "BỐI CẢNH",
        "categoryColor": "rose",
        "headline": "Credential stuffing",
        "bodyHtml": "<p>Một con bot có danh sách một tỷ cặp email + mật khẩu bị lộ từ các trang <em>khác</em>. Nó thử tất cả trên biểu mẫu đăng nhập của bạn, hàng nghìn lần mỗi giây.</p>\n<p>Hàm hash của bạn hoàn hảo, vậy mà vẫn khoảng 0,5% lần thử thành công, vì những người đó dùng lại mật khẩu. Đó là hàng nghìn tài khoản bị chiếm.</p>\n<div class=\"callout callout--warn\"><strong>Lưu ý Kỹ sư:</strong> Credential stuffing là kiểu tấn công chiếm tài khoản phổ biến nhất. Nó hoàn toàn không cần lỗ hổng nào trong mã của bạn.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Stuffing)",
          "body": "Nắm vững nguyên lý Credential stuffing để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-4-1",
            "label": "LEAK",
            "value": "hashes only",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-4-2",
            "label": "STUFFING",
            "value": ".5",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-4-3",
            "label": "MFA",
            "value": "no",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-4-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Credential stuffing"
          },
          {
            "id": "chk-4-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "authentication-step-6",
        "number": 6,
        "title": "Slow down",
        "category": "THỰC THI",
        "categoryColor": "blue",
        "headline": "Khiến việc đoán trở nên tốn kém",
        "bodyHtml": "<p>Bảo vệ chính biểu mẫu: <b>giới hạn tốc độ</b> số lần thử theo tài khoản và theo địa chỉ IP, thêm thử thách khi lưu lượng trông như tự động, và từ chối khi đăng ký những mật khẩu có trong danh sách rò rỉ đã biết.</p>\n<p>Gắn cờ những lần đăng nhập rủi ro (thiết bị mới, quốc gia mới) và yêu cầu thêm bằng chứng.</p>\n<div class=\"callout callout--tip\"><strong>Lưu ý Kỹ sư:</strong> Các dịch vụ như Have I Been Pwned cho phép kiểm tra mật khẩu với các vụ rò rỉ mà không cần gửi mật khẩu đi.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Slow down)",
          "body": "Nắm vững nguyên lý Khiến việc đoán trở nên tốn kém để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-5-1",
            "label": "LEAK",
            "value": "hashes only",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-5-2",
            "label": "STUFFING",
            "value": ".05",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-5-3",
            "label": "MFA",
            "value": "no",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-5-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Khiến việc đoán trở nên tốn kém"
          },
          {
            "id": "chk-5-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "authentication-step-7",
        "number": 7,
        "title": "2nd factor",
        "category": "THỰC THI",
        "categoryColor": "blue",
        "headline": "Một yếu tố thứ hai",
        "bodyHtml": "<p><span class=\"term\">Multi-factor authentication</span> asks for something you <em>have</em> as well as something you know: a code from an authenticator app, a push approval on your phone, or a hardware key.</p>\n<p>Chỉ một mật khẩu bị đánh cắp không còn mở được tài khoản. <b>Passkey</b> còn đi xa hơn: một cặp khóa lưu trên thiết bị, không có gì dùng lại được để đánh cắp hay lừa lấy.</p>\n<div class=\"callout callout--tip\"><strong>Lưu ý Kỹ sư:</strong> Mã SMS còn hơn không, nhưng có thể bị chặn (chiếm SIM). Hãy ưu tiên mã ứng dụng, push hoặc passkey.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (2nd factor)",
          "body": "Nắm vững nguyên lý Một yếu tố thứ hai để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-6-1",
            "label": "LEAK",
            "value": "hashes only",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-6-2",
            "label": "STUFFING",
            "value": "0",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-6-3",
            "label": "MFA",
            "value": "yes",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-6-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Một yếu tố thứ hai"
          },
          {
            "id": "chk-6-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "authentication-step-8",
        "number": 8,
        "title": "Phishing",
        "category": "BỐI CẢNH",
        "categoryColor": "rose",
        "headline": "Tình huống: một trang đăng nhập giả hoàn hảo",
        "bodyHtml": "<p>Một email cảnh báo về “lần đăng nhập bất thường” và dẫn tới <code>shop-example.co</code>, một bản sao giống hệt trang đăng nhập của bạn. Alice gõ mật khẩu <em>và</em> mã dùng một lần từ ứng dụng.</p>\n<p>Trang giả chuyển cả hai tới trang thật trong vài giây và cuỗm luôn phiên của cô. Mã và phê duyệt push chặn được mật khẩu bị đánh cắp, nhưng không chặn được trang phishing chuyển tiếp chúng theo thời gian thực.</p>\n<div class=\"callout callout--warn\"><strong>Lưu ý Kỹ sư:</strong> Bất cứ thứ gì con người đọc và gõ được, một trang giả đều có thể hỏi rồi chuyển đi. Đào tạo có ích; riêng nó thì không đủ.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Phishing)",
          "body": "Nắm vững nguyên lý Tình huống: một trang đăng nhập giả hoàn hảo để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-7-1",
            "label": "LEAK",
            "value": "hashes only",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-7-2",
            "label": "STUFFING",
            "value": "0",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-7-3",
            "label": "MFA",
            "value": "phishable",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-7-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Tình huống: một trang đăng nhập giả hoàn hảo"
          },
          {
            "id": "chk-7-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "authentication-step-9",
        "number": 9,
        "title": "Passkeys",
        "category": "THỰC THI",
        "categoryColor": "blue",
        "headline": "Passkey: không có gì để gõ, không có gì để đánh cắp",
        "bodyHtml": "<p>A <span class=\"term\">passkey</span> (WebAuthn) replaces the password with a key pair kept on Alice’s phone or laptop. To sign in, the device signs a challenge from the site — and the signature is tied to the real domain, <code>shop.example</code>.</p>\n<p>Trên trang giả, thiết bị của cô đơn giản là không có passkey nào để đưa ra. Không có gì để gõ, không có gì để chuyển tiếp, và máy chủ chỉ lưu khóa công khai, vô dụng với kẻ trộm.</p>\n<div class=\"callout callout--tip\"><strong>Lưu ý Kỹ sư:</strong> Passkey đồng bộ giữa các thiết bị của một người (Apple, Google, trình quản lý mật khẩu), nên mất điện thoại không khiến họ bị khóa ngoài.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Passkeys)",
          "body": "Nắm vững nguyên lý Passkey: không có gì để gõ, không có gì để đánh cắp để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-8-1",
            "label": "LEAK",
            "value": "nothing usable",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-8-2",
            "label": "STUFFING",
            "value": "0",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-8-3",
            "label": "MFA",
            "value": "passkey",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-8-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Passkey: không có gì để gõ, không có gì để đánh cắp"
          },
          {
            "id": "chk-8-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "authentication-step-10",
        "number": 10,
        "title": "Use a provider",
        "category": "LÝ THUYẾT",
        "categoryColor": "emerald",
        "headline": "Hoặc để nhà cung cấp danh tính lo",
        "bodyHtml": "<p>“Sign in with Google” uses <span class=\"term\">OpenID Connect</span> (built on OAuth 2.0). Your app sends Alice to the <b>identity provider</b>; she proves who she is there, and the provider sends back a signed <b>ID token</b> saying “this is Alice”.</p>\n<p>Dịch vụ của bạn kiểm tra chữ ký và không bao giờ thấy, lưu hay làm lộ mật khẩu nào. Các công ty dùng cùng ý tưởng cho đăng nhập một lần (Okta, Entra ID).</p>\n<div class=\"callout callout--insight\"><strong>Lưu ý Kỹ sư:</strong> Xác thực rất khó làm đúng. Giao nó cho một chuyên gia thường là lựa chọn an toàn nhất.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Use a provider)",
          "body": "Nắm vững nguyên lý Hoặc để nhà cung cấp danh tính lo để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-9-1",
            "label": "LEAK",
            "value": "nothing usable",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-9-2",
            "label": "STUFFING",
            "value": "0",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-9-3",
            "label": "MFA",
            "value": "yes",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-9-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Hoặc để nhà cung cấp danh tính lo"
          },
          {
            "id": "chk-9-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "authentication-step-11",
        "number": 11,
        "title": "Tokens",
        "category": "BỐI CẢNH",
        "categoryColor": "rose",
        "headline": "Tình huống: một token bị đánh cắp",
        "bodyHtml": "<p>Một lỗi ghi header của yêu cầu vào log, và kẻ tấn công tìm thấy token của Alice trong log. Một token có giá trị như mật khẩu khi còn hiệu lực: nếu nó không bao giờ hết hạn, kẻ tấn công là Alice mãi mãi.</p>\n<p>Vì vậy hãy dùng <b>access token</b> sống ngắn (vài phút) cùng một <b>refresh token</b> được lưu cẩn thận và có thể <b>thu hồi</b>. Đăng xuất, hoặc “đăng xuất khỏi mọi nơi”, sẽ thu hồi nó.</p>\n<div class=\"callout callout--tip\"><strong>Lưu ý Kỹ sư:</strong> Thời hạn ngắn giới hạn thiệt hại của mọi vụ lộ. Thu hồi cho phép bạn chấm dứt nó ngay lập tức.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Tokens)",
          "body": "Nắm vững nguyên lý Tình huống: một token bị đánh cắp để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-10-1",
            "label": "LEAK",
            "value": "nothing usable",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-10-2",
            "label": "STUFFING",
            "value": "0",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-10-3",
            "label": "MFA",
            "value": "yes",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-10-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Tình huống: một token bị đánh cắp"
          },
          {
            "id": "chk-10-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "authentication-step-12",
        "number": 12,
        "title": "Recap",
        "category": "TỐI ƯU",
        "categoryColor": "emerald",
        "headline": "Recap",
        "bodyHtml": "<div class=\"callout callout--next\"><strong>Lưu ý Kỹ sư:</strong> Tiếp theo: <b>Phân quyền</b>: biết một người là ai không cho bạn biết họ được làm gì.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Recap)",
          "body": "Nắm vững nguyên lý Recap để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-11-1",
            "label": "LEAK",
            "value": "nothing usable",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-11-2",
            "label": "STUFFING",
            "value": "0",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-11-3",
            "label": "MFA",
            "value": "yes",
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
    "id": "authorization",
    "slug": "authorization",
    "title": "Authorization",
    "subtitle": "Authorization · 13 phút thực chiến",
    "moduleCode": "07",
    "moduleTitle": "Bảo Mật & Xác Thực Phân Quyền (Security)",
    "durationMinutes": 13,
    "difficulty": "Trung cấp",
    "steps": [
      {
        "id": "authorization-step-1",
        "number": 1,
        "title": "Change the URL",
        "category": "BỐI CẢNH",
        "categoryColor": "rose",
        "headline": "Đã đăng nhập không có nghĩa là được phép",
        "bodyHtml": "<p>Eve, ở một công ty khác, là người dùng hợp lệ. Cô mở hóa đơn của mình tại <code>/invoices/1042</code>, đổi số thành <code>1043</code> và thấy một hóa đơn của Acme.</p>\n<p>API kiểm tra rằng cô đã <em>đăng nhập</em>, nhưng chưa bao giờ kiểm tra hóa đơn này là <em>của cô</em>. Đây là phân quyền cấp đối tượng bị hỏng, lỗ hổng bảo mật API phổ biến nhất.</p>\n<div class=\"callout callout--warn\"><strong>Lưu ý Kỹ sư:</strong> Giấu một nút trong giao diện không phải là phân quyền. Kẻ tấn công gọi thẳng API của bạn, với bất kỳ id nào họ muốn.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Change the URL)",
          "body": "Nắm vững nguyên lý Đã đăng nhập không có nghĩa là được phép để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-0-1",
            "label": "EXPOSED",
            "value": "yes",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-0-2",
            "label": "CHECKS",
            "value": "login only",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-0-3",
            "label": "PRIVILEGE",
            "value": "everything",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-0-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Đã đăng nhập không có nghĩa là được phép"
          },
          {
            "id": "chk-0-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "authorization-step-2",
        "number": 2,
        "title": "Ownership",
        "category": "THỰC THI",
        "categoryColor": "blue",
        "headline": "Kiểm tra quyền sở hữu ở mọi yêu cầu",
        "bodyHtml": "<p>Mọi truy vấn phải giới hạn theo người đang hỏi: lấy hóa đơn 1043 <em>chỉ khi</em> nó thuộc tổ chức của người gọi. Với Eve, truy vấn không tìm thấy gì, và cô nhận <code>404 Not Found</code>.</p>\n<p>Mặc định từ chối: bất kỳ endpoint nào quên kiểm tra đều phải thất bại ở trạng thái đóng, không phải mở.</p>\n<div class=\"callout callout--tip\"><strong>Lưu ý Kỹ sư:</strong> Trả về 404, không phải 403, cho đối tượng của người khác: đừng xác nhận rằng chúng tồn tại. Id ngẫu nhiên (UUID) có ích, nhưng không thay được việc kiểm tra.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Ownership)",
          "body": "Nắm vững nguyên lý Kiểm tra quyền sở hữu ở mọi yêu cầu để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-1-1",
            "label": "EXPOSED",
            "value": "no",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-1-2",
            "label": "CHECKS",
            "value": "every request",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-1-3",
            "label": "PRIVILEGE",
            "value": "everything",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-1-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Kiểm tra quyền sở hữu ở mọi yêu cầu"
          },
          {
            "id": "chk-1-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "authorization-step-3",
        "number": 3,
        "title": "Mass assign",
        "category": "BỐI CẢNH",
        "categoryColor": "rose",
        "headline": "Tình huống: “role”: “admin”",
        "bodyHtml": "<p>Eve edits her own profile — that’s allowed. But the API takes the JSON body and saves every field in it. So she adds <code>\"role\": \"admin\"</code> to the request and promotes herself.</p>\n<p>This is <span class=\"term\">mass assignment</span>. Fix: each endpoint has an allow-list of fields it may change, and roles change only through a separate admin-only endpoint.</p>\n<div class=\"callout callout--warn\"><strong>Lưu ý Kỹ sư:</strong> Framework gắn thẳng thân yêu cầu vào model cơ sở dữ liệu khiến lỗi này rất dễ mắc. Hãy khai báo rõ các trường được ghi.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Mass assign)",
          "body": "Nắm vững nguyên lý Tình huống: “role”: “admin” để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-2-1",
            "label": "EXPOSED",
            "value": "yes",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-2-2",
            "label": "CHECKS",
            "value": "every request",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-2-3",
            "label": "PRIVILEGE",
            "value": "everything",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-2-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Tình huống: “role”: “admin”"
          },
          {
            "id": "chk-2-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "authorization-step-4",
        "number": 4,
        "title": "Row-level",
        "category": "LÝ THUYẾT",
        "categoryColor": "emerald",
        "headline": "Để cơ sở dữ liệu cùng tách khách hàng",
        "bodyHtml": "<p>Ownership checks live in application code, so one query that forgets <code>AND org_id = …</code> brings the leak right back. Add a second layer: <span class=\"term\">row-level security</span> in the database.</p>\n<p>Ứng dụng cho mỗi kết nối biết nó đang phục vụ tổ chức nào; cơ sở dữ liệu sau đó lọc mọi truy vấn theo tổ chức đó. Ngay cả <code>SELECT * FROM invoices</code> cũng chỉ trả về các dòng của người gọi.</p>\n<div class=\"callout callout--insight\"><strong>Lưu ý Kỹ sư:</strong> Phòng thủ nhiều lớp: hãy giả định mọi kiểm tra đơn lẻ rồi sẽ có lúc bị quên, và đảm bảo luôn có kiểm tra thứ hai.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Row-level)",
          "body": "Nắm vững nguyên lý Để cơ sở dữ liệu cùng tách khách hàng để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-3-1",
            "label": "EXPOSED",
            "value": "no",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-3-2",
            "label": "CHECKS",
            "value": "app + database",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-3-3",
            "label": "PRIVILEGE",
            "value": "everything",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-3-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Để cơ sở dữ liệu cùng tách khách hàng"
          },
          {
            "id": "chk-3-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "authorization-step-5",
        "number": 5,
        "title": "Roles",
        "category": "LÝ THUYẾT",
        "categoryColor": "emerald",
        "headline": "Vai trò: mỗi loại người dùng được làm gì",
        "bodyHtml": "<p>Inside Acme, people need different powers: some only view invoices, some edit them, a few approve large ones. Rather than list permissions per person, group them into <span class=\"term\">roles</span> and give each person a role — role-based access control (RBAC).</p>\n<p>Alice là kế toán: cô có thể sửa hóa đơn nhưng không duyệt được.</p>\n<div class=\"callout callout--tip\"><strong>Lưu ý Kỹ sư:</strong> Giữ ít vai trò và có ý nghĩa. Hàng trăm vai trò cho các trường hợp đặc biệt sẽ không thể suy xét nổi.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Roles)",
          "body": "Nắm vững nguyên lý Vai trò: mỗi loại người dùng được làm gì để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-4-1",
            "label": "EXPOSED",
            "value": "no",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-4-2",
            "label": "CHECKS",
            "value": "every request",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-4-3",
            "label": "PRIVILEGE",
            "value": "everything",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-4-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Vai trò: mỗi loại người dùng được làm gì"
          },
          {
            "id": "chk-4-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "authorization-step-6",
        "number": 6,
        "title": "Sharing",
        "category": "LÝ THUYẾT",
        "categoryColor": "emerald",
        "headline": "Quan hệ: chia sẻ và nhóm",
        "bodyHtml": "<p>Vai trò gặp khó với chia sẻ: “Alice xem được thư mục này vì nó được chia sẻ với nhóm của cô”. Truy cập <b>dựa trên quan hệ</b> (ReBAC) lưu các dữ kiện như “hóa đơn 1042 nằm trong thư mục Q3”, “Q3 được chia sẻ với nhóm Tài chính”, “Alice thuộc Tài chính”, rồi lần theo chuỗi.</p>\n<p>Đó là cách chia sẻ kiểu Google Docs hoạt động ở quy mô lớn.</p>\n<div class=\"callout callout--insight\"><strong>Lưu ý Kỹ sư:</strong> Bài báo Zanzibar của Google phổ biến mô hình này; SpiceDB và OpenFGA là các phiên bản mã nguồn mở.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Sharing)",
          "body": "Nắm vững nguyên lý Quan hệ: chia sẻ và nhóm để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-5-1",
            "label": "EXPOSED",
            "value": "no",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-5-2",
            "label": "CHECKS",
            "value": "every request",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-5-3",
            "label": "PRIVILEGE",
            "value": "everything",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-5-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Quan hệ: chia sẻ và nhóm"
          },
          {
            "id": "chk-5-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "authorization-step-7",
        "number": 7,
        "title": "Policy",
        "category": "LÝ THUYẾT",
        "categoryColor": "emerald",
        "headline": "Quyết định ở một nơi",
        "bodyHtml": "<p>Permission checks scattered as if-statements across twenty services drift apart, and nobody can answer “who can approve invoices?”. Instead, each service asks a <span class=\"term\">policy service</span>: “may Alice edit invoice 1042?”, and enforces the yes or no.</p>\n<p>Quy tắc nằm ở một chỗ, được kiểm thử như mã, và mọi quyết định đều có thể ghi log.</p>\n<div class=\"callout callout--tip\"><strong>Lưu ý Kỹ sư:</strong> Công cụ: Open Policy Agent (Rego), AWS Cedar, hoặc một dịch vụ quyền như SpiceDB. Cache quyết định trong thời gian ngắn để giữ lời gọi nhanh.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Policy)",
          "body": "Nắm vững nguyên lý Quyết định ở một nơi để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-6-1",
            "label": "EXPOSED",
            "value": "no",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-6-2",
            "label": "CHECKS",
            "value": "central policy",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-6-3",
            "label": "PRIVILEGE",
            "value": "everything",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-6-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Quyết định ở một nơi"
          },
          {
            "id": "chk-6-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "authorization-step-8",
        "number": 8,
        "title": "Master key",
        "category": "BỐI CẢNH",
        "categoryColor": "rose",
        "headline": "Tình huống: một dịch vụ giữ chìa khóa của mọi thứ",
        "bodyHtml": "<p>Dịch vụ báo cáo kết nối cơ sở dữ liệu bằng tài khoản admin, vì đó là cách cài đặt nhanh nhất. Một ngày, người ta phát hiện lỗi SQL injection trong một bộ lọc báo cáo.</p>\n<p>Vì dịch vụ đọc được <em>mọi</em> bảng, kẻ tấn công lấy luôn cả người dùng, hash mật khẩu và thông tin thanh toán, không chỉ hóa đơn.</p>\n<div class=\"callout callout--warn\"><strong>Lưu ý Kỹ sư:</strong> Quyền của một thành phần quyết định bán kính thiệt hại của các lỗi trong nó.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Master key)",
          "body": "Nắm vững nguyên lý Tình huống: một dịch vụ giữ chìa khóa của mọi thứ để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-7-1",
            "label": "EXPOSED",
            "value": "yes",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-7-2",
            "label": "CHECKS",
            "value": "central policy",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-7-3",
            "label": "PRIVILEGE",
            "value": "everything",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-7-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Tình huống: một dịch vụ giữ chìa khóa của mọi thứ"
          },
          {
            "id": "chk-7-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "authorization-step-9",
        "number": 9,
        "title": "Least privilege",
        "category": "THỰC THI",
        "categoryColor": "blue",
        "headline": "Đặc quyền tối thiểu",
        "bodyHtml": "<p>Hãy cho mỗi dịch vụ, và mỗi người, chỉ quyền truy cập mà công việc cần. Dịch vụ báo cáo nhận một tài khoản <b>chỉ đọc</b> thấy được view hóa đơn và không gì khác; mỗi dịch vụ có thông tin đăng nhập và danh tính riêng.</p>\n<p>Cùng lỗi injection đó giờ tệ nhất chỉ làm lộ những hóa đơn mà dịch vụ vốn đã đọc được, và báo động vang lên khi nó thử làm gì khác.</p>\n<div class=\"callout callout--tip\"><strong>Lưu ý Kỹ sư:</strong> Áp dụng ở mọi nơi: quyền trong cơ sở dữ liệu, vai trò IAM trên cloud, scope của API và quyền truy cập của nhân viên (có thời hạn, được duyệt, có ghi log).</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Least privilege)",
          "body": "Nắm vững nguyên lý Đặc quyền tối thiểu để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-8-1",
            "label": "EXPOSED",
            "value": "no",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-8-2",
            "label": "CHECKS",
            "value": "central policy",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-8-3",
            "label": "PRIVILEGE",
            "value": "least privilege",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-8-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Đặc quyền tối thiểu"
          },
          {
            "id": "chk-8-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "authorization-step-10",
        "number": 10,
        "title": "Deputy",
        "category": "BỐI CẢNH",
        "categoryColor": "rose",
        "headline": "Tình huống: confused deputy",
        "bodyHtml": "<p>Alice yêu cầu báo cáo các hóa đơn trên 10.000 $. API giao việc cho dịch vụ báo cáo, vốn truy vấn bằng danh tính <em>của chính nó</em>, và danh tính đó đọc được hóa đơn của mọi khách hàng. Báo cáo của Alice có cả hóa đơn của Globex.</p>\n<p>The reports service was tricked into using its authority on someone else’s behalf: a <span class=\"term\">confused deputy</span>.</p>\n<div class=\"callout callout--warn\"><strong>Lưu ý Kỹ sư:</strong> Mỗi khi một dịch vụ hành động thay người dùng, hãy hỏi: quyền của ai được áp dụng ở đây, của dịch vụ hay của người dùng?</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Deputy)",
          "body": "Nắm vững nguyên lý Tình huống: confused deputy để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-9-1",
            "label": "EXPOSED",
            "value": "yes",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-9-2",
            "label": "CHECKS",
            "value": "central policy",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-9-3",
            "label": "PRIVILEGE",
            "value": "least privilege",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-9-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Tình huống: confused deputy"
          },
          {
            "id": "chk-9-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "authorization-step-11",
        "number": 11,
        "title": "On behalf",
        "category": "THỰC THI",
        "categoryColor": "blue",
        "headline": "Hành động như người dùng, không như chính mình",
        "bodyHtml": "<p>Truyền tiếp danh tính người dùng: API chuyển token của Alice (hoặc đổi lấy một token hẹp hơn), và dịch vụ báo cáo chạy truy vấn <em>như Alice</em>, với tổ chức và quyền của cô.</p>\n<p>Thông tin đăng nhập mạnh của chính dịch vụ chỉ dùng cho những việc không người dùng nào yêu cầu, như bảo trì ban đêm.</p>\n<div class=\"callout callout--tip\"><strong>Lưu ý Kỹ sư:</strong> OAuth token exchange và service mesh có thể tự động mang danh tính người dùng cuối qua mọi chặng.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (On behalf)",
          "body": "Nắm vững nguyên lý Hành động như người dùng, không như chính mình để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-10-1",
            "label": "EXPOSED",
            "value": "no",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-10-2",
            "label": "CHECKS",
            "value": "central policy",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-10-3",
            "label": "PRIVILEGE",
            "value": "least privilege",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-10-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Hành động như người dùng, không như chính mình"
          },
          {
            "id": "chk-10-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "authorization-step-12",
        "number": 12,
        "title": "Audit",
        "category": "LÝ THUYẾT",
        "categoryColor": "emerald",
        "headline": "Nhật ký kiểm toán: ai đã xem gì",
        "bodyHtml": "<p>Finally, record every access to sensitive data — who, what, when, from where — in an append-only <span class=\"term\">audit log</span> that the people being audited can’t edit.</p>\n<p>Nó trả lời câu hỏi “ai đã xem hóa đơn của khách hàng này?” sau một sự cố, và kích hoạt cảnh báo: một nhân viên hỗ trợ mở 5.000 hóa đơn trong mười phút là đáng để báo động.</p>\n<div class=\"callout callout--insight\"><strong>Lưu ý Kỹ sư:</strong> Hầu hết các tiêu chuẩn tuân thủ (SOC 2, HIPAA, yêu cầu theo GDPR) cũng bắt buộc có nhật ký kiểm toán.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Audit)",
          "body": "Nắm vững nguyên lý Nhật ký kiểm toán: ai đã xem gì để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-11-1",
            "label": "EXPOSED",
            "value": "no",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-11-2",
            "label": "CHECKS",
            "value": "central policy",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-11-3",
            "label": "PRIVILEGE",
            "value": "least privilege",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-11-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Nhật ký kiểm toán: ai đã xem gì"
          },
          {
            "id": "chk-11-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "authorization-step-13",
        "number": 13,
        "title": "Recap",
        "category": "TỐI ƯU",
        "categoryColor": "emerald",
        "headline": "Recap",
        "bodyHtml": "<div class=\"callout callout--next\"><strong>Lưu ý Kỹ sư:</strong> Tiếp theo: <b>Mã hóa & bí mật</b>: bảo vệ dữ liệu trên đường truyền, trên đĩa, và chính các khóa.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Recap)",
          "body": "Nắm vững nguyên lý Recap để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-12-1",
            "label": "EXPOSED",
            "value": "no",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-12-2",
            "label": "CHECKS",
            "value": "central policy",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-12-3",
            "label": "PRIVILEGE",
            "value": "least privilege",
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
    "id": "encryption",
    "slug": "encryption",
    "title": "Mã hóa & bí mật",
    "subtitle": "Encryption & Secrets · 13 phút thực chiến",
    "moduleCode": "07",
    "moduleTitle": "Bảo Mật & Xác Thực Phân Quyền (Security)",
    "durationMinutes": 13,
    "difficulty": "Trung cấp",
    "steps": [
      {
        "id": "encryption-step-1",
        "number": 1,
        "title": "Café Wi-Fi",
        "category": "BỐI CẢNH",
        "categoryColor": "rose",
        "headline": "HTTP trần trên Wi-Fi quán cà phê",
        "bodyHtml": "<p>Alice đăng nhập từ một quán cà phê. Trang web dùng <code>http://</code> trần, nên mật khẩu và cookie phiên của cô đi dưới dạng văn bản đọc được qua router Wi-Fi và hàng chục mạng phía sau.</p>\n<p>Mallory, trên cùng Wi-Fi, ghi lại lưu lượng và đọc tất cả — thậm chí có thể sửa trang trên đường trả về.</p>\n<div class=\"callout callout--warn\"><strong>Lưu ý Kỹ sư:</strong> Bất kỳ ai trên đường đi — Wi-Fi, nhà mạng, một router bị chiếm — đều có thể đọc và sửa lưu lượng không mã hóa.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Café Wi-Fi)",
          "body": "Nắm vững nguyên lý HTTP trần trên Wi-Fi quán cà phê để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-0-1",
            "label": "INTRANSIT",
            "value": "no",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-0-2",
            "label": "ATREST",
            "value": "no",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-0-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: HTTP trần trên Wi-Fi quán cà phê"
          },
          {
            "id": "chk-0-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "encryption-step-2",
        "number": 2,
        "title": "TLS",
        "category": "THỰC THI",
        "categoryColor": "blue",
        "headline": "TLS: mã hóa đường truyền",
        "bodyHtml": "<p>With HTTPS, <span class=\"term\">TLS</span> encrypts everything between Alice’s browser and the site. During the handshake the server presents a <b>certificate</b>, signed by a certificate authority the browser trusts, proving it really is <code>shop.example</code>.</p>\n<p>Mallory vẫn sao chép từng gói tin — nhưng chỉ thấy các byte trông như ngẫu nhiên, và không thể sửa chúng mà không bị phát hiện.</p>\n<div class=\"callout callout--tip\"><strong>Lưu ý Kỹ sư:</strong> Chứng chỉ miễn phí và tự động với Let’s Encrypt. Thêm HSTS để trình duyệt không bao giờ quay về http://.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (TLS)",
          "body": "Nắm vững nguyên lý TLS: mã hóa đường truyền để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-1-1",
            "label": "INTRANSIT",
            "value": "outside only",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-1-2",
            "label": "ATREST",
            "value": "no",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-1-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: TLS: mã hóa đường truyền"
          },
          {
            "id": "chk-1-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "encryption-step-3",
        "number": 3,
        "title": "Expired",
        "category": "BỐI CẢNH",
        "categoryColor": "rose",
        "headline": "Tình huống: chứng chỉ hết hạn lúc 3 giờ sáng",
        "bodyHtml": "<p>Chứng chỉ có ngày hết hạn. Cái này được gia hạn thủ công mỗi năm một lần — bởi một người đã nghỉ việc. Lúc 03:00 nó hết hạn, mọi trình duyệt hiện cảnh báo bảo mật toàn trang, và phần lớn người dùng bỏ đi.</p>\n<p>Một sự cố do một ngày tháng. Cách sửa: tự động gia hạn bằng ACME (Let’s Encrypt, hoặc trình quản lý chứng chỉ của đám mây) và một cảnh báo 30 ngày trước khi bất kỳ chứng chỉ nào hết hạn.</p>\n<div class=\"callout callout--tip\"><strong>Lưu ý Kỹ sư:</strong> Chứng chỉ ngắn hạn (90 ngày hoặc ít hơn) buộc phải tự động hóa — và hạn chế thiệt hại nếu khóa riêng bị lộ.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Expired)",
          "body": "Nắm vững nguyên lý Tình huống: chứng chỉ hết hạn lúc 3 giờ sáng để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-2-1",
            "label": "INTRANSIT",
            "value": "outside only",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-2-2",
            "label": "ATREST",
            "value": "no",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-2-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Tình huống: chứng chỉ hết hạn lúc 3 giờ sáng"
          },
          {
            "id": "chk-2-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "encryption-step-4",
        "number": 4,
        "title": "Inside too",
        "category": "LÝ THUYẾT",
        "categoryColor": "emerald",
        "headline": "Mã hóa cả bên trong trung tâm dữ liệu",
        "bodyHtml": "<p>Bộ cân bằng tải <b>kết thúc</b> TLS — và theo truyền thống chuyển tiếp lưu lượng dạng rõ, vì tin mạng nội bộ. Nhưng khi đó một máy bị chiếm bên trong có thể đọc mọi thứ.</p>\n<p>Modern systems assume no network is trusted (<b>zero trust</b>): services talk over <span class=\"term\">mutual TLS</span>, where both sides present certificates, so every hop is encrypted and every caller is identified.</p>\n<div class=\"callout callout--tip\"><strong>Lưu ý Kỹ sư:</strong> Service mesh có thể tự động thêm mTLS giữa mọi dịch vụ, với chứng chỉ ngắn hạn mà nó xoay vòng giúp bạn.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Inside too)",
          "body": "Nắm vững nguyên lý Mã hóa cả bên trong trung tâm dữ liệu để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-3-1",
            "label": "INTRANSIT",
            "value": "yes",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-3-2",
            "label": "ATREST",
            "value": "no",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-3-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Mã hóa cả bên trong trung tâm dữ liệu"
          },
          {
            "id": "chk-3-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "encryption-step-5",
        "number": 5,
        "title": "Stolen backup",
        "category": "BỐI CẢNH",
        "categoryColor": "rose",
        "headline": "Bản sao lưu bị đánh cắp",
        "bodyHtml": "<p>Giờ mọi byte trên đường truyền đều an toàn. Rồi một bản sao lưu cơ sở dữ liệu bị bỏ trong một bucket lưu trữ vô tình để công khai, và có người sao chép nó.</p>\n<p>Mã hóa khi truyền chẳng giúp gì ở đây: dữ liệu trên đĩa — tên, địa chỉ và lịch sử đơn hàng của mọi khách hàng — đều đọc được.</p>\n<div class=\"callout callout--warn\"><strong>Lưu ý Kỹ sư:</strong> Đĩa bị mất, snapshot bị chia sẻ, bucket bị cấu hình sai. Dữ liệu khi lưu trữ cần cách bảo vệ riêng.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Stolen backup)",
          "body": "Nắm vững nguyên lý Bản sao lưu bị đánh cắp để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-4-1",
            "label": "INTRANSIT",
            "value": "yes",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-4-2",
            "label": "ATREST",
            "value": "no",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-4-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Bản sao lưu bị đánh cắp"
          },
          {
            "id": "chk-4-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "encryption-step-6",
        "number": 6,
        "title": "At rest",
        "category": "THỰC THI",
        "categoryColor": "blue",
        "headline": "Mã hóa khi lưu trữ, giữ khóa ở nơi khác",
        "bodyHtml": "<p>Encrypt disks, database files and backups. The trick is the key: if it sits next to the data, a thief takes both. So keys live in a separate <span class=\"term\">key management service</span> (KMS), which never hands out its master key.</p>\n<p>Với <b>mã hóa phong bì</b>, dữ liệu được mã hóa bằng một khóa dữ liệu, và chính khóa dữ liệu được KMS mã hóa. Mọi lần dùng khóa đều được ghi lại, và quyền truy cập có thể thu hồi.</p>\n<div class=\"callout callout--tip\"><strong>Lưu ý Kỹ sư:</strong> Cơ sở dữ liệu và lưu trữ trên đám mây mã hóa khi lưu trữ chỉ bằng một ô đánh dấu. Với các trường rất nhạy cảm, hãy mã hóa thêm trong ứng dụng.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (At rest)",
          "body": "Nắm vững nguyên lý Mã hóa khi lưu trữ, giữ khóa ở nơi khác để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-5-1",
            "label": "INTRANSIT",
            "value": "yes",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-5-2",
            "label": "ATREST",
            "value": "yes",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-5-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Mã hóa khi lưu trữ, giữ khóa ở nơi khác"
          },
          {
            "id": "chk-5-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "encryption-step-7",
        "number": 7,
        "title": "Rotation",
        "category": "LÝ THUYẾT",
        "categoryColor": "emerald",
        "headline": "Xoay vòng khóa mà không mã hóa lại mọi thứ",
        "bodyHtml": "<p>Khóa nên được thay định kỳ — và ngay lập tức nếu có khóa nào có thể đã lộ. Mã hóa lại hàng terabyte dữ liệu sẽ mất nhiều ngày.</p>\n<p>Mã hóa phong bì khiến việc này rẻ: tạo một khóa chủ mới trong KMS và <b>bọc lại</b> từng khóa dữ liệu nhỏ bằng nó. Bản thân dữ liệu không bao giờ bị động đến, và các lần ghi mới đơn giản nhận khóa dữ liệu mới.</p>\n<div class=\"callout callout--tip\"><strong>Lưu ý Kỹ sư:</strong> Đa số KMS tự động xoay vòng khóa chủ mỗi năm và giữ các phiên bản cũ để mở các khóa dữ liệu cũ hơn.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Rotation)",
          "body": "Nắm vững nguyên lý Xoay vòng khóa mà không mã hóa lại mọi thứ để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-6-1",
            "label": "INTRANSIT",
            "value": "yes",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-6-2",
            "label": "ATREST",
            "value": "yes",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-6-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Xoay vòng khóa mà không mã hóa lại mọi thứ"
          },
          {
            "id": "chk-6-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "encryption-step-8",
        "number": 8,
        "title": "Leaked key",
        "category": "BỐI CẢNH",
        "categoryColor": "rose",
        "headline": "Tình huống: bí mật trong mã nguồn",
        "bodyHtml": "<p>Một lập trình viên viết cứng khóa API của nhà cung cấp thanh toán vào mã nguồn để thử một thứ, và kho mã là công khai. Bot quét các kho công khai liên tục: khóa bị tìm thấy và sử dụng trong vài phút.</p>\n<p>Xóa dòng đó chẳng ích gì — nó nằm mãi trong lịch sử git. Cách sửa duy nhất là <b>thu hồi</b> khóa và cấp khóa mới.</p>\n<div class=\"callout callout--warn\"><strong>Lưu ý Kỹ sư:</strong> Bí mật trong mã sẽ lọt vào kho mã, bản build, log và máy tính xách tay. Hãy coi mọi bí mật đã chạm vào git là đã bị lộ.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Leaked key)",
          "body": "Nắm vững nguyên lý Tình huống: bí mật trong mã nguồn để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-7-1",
            "label": "INTRANSIT",
            "value": "yes",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-7-2",
            "label": "ATREST",
            "value": "yes",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-7-3",
            "label": "SECRETS",
            "value": "source code",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-7-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Tình huống: bí mật trong mã nguồn"
          },
          {
            "id": "chk-7-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "encryption-step-9",
        "number": 9,
        "title": "Vault",
        "category": "THỰC THI",
        "categoryColor": "blue",
        "headline": "Trình quản lý bí mật",
        "bodyHtml": "<p>Keep secrets out of code entirely. The app fetches them at startup from a <span class=\"term\">secrets manager</span> (HashiCorp Vault, AWS Secrets Manager), proving its own identity to get only the secrets it needs.</p>\n<p>Bí mật được xoay vòng định kỳ — hoặc cấp ngắn hạn theo yêu cầu — và trình quét trong CI chặn mọi commit trông giống một khóa.</p>\n<div class=\"callout callout--tip\"><strong>Lưu ý Kỹ sư:</strong> Đừng bao giờ ghi bí mật vào log, và giữ chúng khỏi thông báo lỗi và bản dump môi trường.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Vault)",
          "body": "Nắm vững nguyên lý Trình quản lý bí mật để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-8-1",
            "label": "INTRANSIT",
            "value": "yes",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-8-2",
            "label": "ATREST",
            "value": "yes",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-8-3",
            "label": "SECRETS",
            "value": "secrets manager",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-8-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Trình quản lý bí mật"
          },
          {
            "id": "chk-8-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "encryption-step-10",
        "number": 10,
        "title": "Tokenize",
        "category": "LÝ THUYẾT",
        "categoryColor": "emerald",
        "headline": "Tình huống: số thẻ — hãy token hóa",
        "bodyHtml": "<p>Số thẻ là dữ liệu quý giá nhất bạn có thể giữ, và mọi hệ thống lưu hay thậm chí chỉ nhìn thấy chúng đều phải tuân thủ quy định nghiêm ngặt (PCI DSS). Mã hóa chúng thì bạn vẫn đang giữ chúng.</p>\n<p>Better: don’t hold them. The checkout sends the card to a payment provider, which stores it and returns a <span class=\"term\">token</span> like <code>tok_4f2c</code>. Your database, logs and analytics only ever see tokens — worthless to a thief.</p>\n<div class=\"callout callout--insight\"><strong>Lưu ý Kỹ sư:</strong> Dữ liệu nhạy cảm an toàn nhất là dữ liệu bạn không bao giờ lưu. Hãy hỏi liệu bạn có thật sự cần nó trước khi quyết định cách bảo vệ.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Tokenize)",
          "body": "Nắm vững nguyên lý Tình huống: số thẻ — hãy token hóa để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-9-1",
            "label": "INTRANSIT",
            "value": "yes",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-9-2",
            "label": "ATREST",
            "value": "yes",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-9-3",
            "label": "SECRETS",
            "value": "secrets manager",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-9-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Tình huống: số thẻ — hãy token hóa"
          },
          {
            "id": "chk-9-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "encryption-step-11",
        "number": 11,
        "title": "End-to-end",
        "category": "LÝ THUYẾT",
        "categoryColor": "emerald",
        "headline": "Đầu cuối: ngay cả máy chủ cũng không đọc được",
        "bodyHtml": "<p>For private messages you can go further. With <span class=\"term\">end-to-end encryption</span>, Alice’s phone encrypts each message with Bob’s public key; only Bob’s phone holds the private key to decrypt it.</p>\n<p>Máy chủ chat lưu và chuyển tiếp bản mã. Máy chủ bị xâm nhập — hay một yêu cầu giao nộp tin nhắn — cũng không để lộ gì đọc được.</p>\n<p><small>Đó là ý tưởng trong một dòng. Các giao thức thực tế dùng cặp khóa để thống nhất một khóa bí mật mới cho mỗi tin nhắn, nên một khóa bị đánh cắp về sau không mở được các cuộc trò chuyện cũ (<b>bảo mật chuyển tiếp</b>).</small></p>\n<div class=\"callout callout--insight\"><strong>Lưu ý Kỹ sư:</strong> Cái giá: máy chủ không thể tìm kiếm, lọc hay sao lưu tin nhắn đọc được, và mất thiết bị có thể đồng nghĩa với mất lịch sử. Signal và WhatsApp dùng giao thức Signal.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (End-to-end)",
          "body": "Nắm vững nguyên lý Đầu cuối: ngay cả máy chủ cũng không đọc được để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-10-1",
            "label": "INTRANSIT",
            "value": "end-to-end",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-10-2",
            "label": "ATREST",
            "value": "yes",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-10-3",
            "label": "SECRETS",
            "value": "secrets manager",
            "level": "good",
            "iconName": "cpu"
          }
        ],
        "checklistItems": [
          {
            "id": "chk-10-1",
            "text": "Đã kiểm tra tiêu chí kỹ thuật: Đầu cuối: ngay cả máy chủ cũng không đọc được"
          },
          {
            "id": "chk-10-2",
            "text": "Đã đối chiếu SLA hệ thống và ràng buộc nghiệp vụ"
          }
        ],
        "nextButtonLabel": "Bước Kế Tiếp"
      },
      {
        "id": "encryption-step-12",
        "number": 12,
        "title": "Recap",
        "category": "TỐI ƯU",
        "categoryColor": "emerald",
        "headline": "Recap",
        "bodyHtml": "<div class=\"callout callout--next\"><strong>Lưu ý Kỹ sư:</strong> Đến đây là hết phần Bảo mật. Mô-đun tiếp theo: <b>Phát hành</b> — kiểm thử thay đổi và đưa chúng lên production an toàn.</div>",
        "keyTakeaway": {
          "title": "Góc Nhìn Senior Systems Architect & IT BA (Recap)",
          "body": "Nắm vững nguyên lý Recap để đưa ra quyết định kiến trúc chính xác: cân bằng giữa chi phí hạ tầng, độ trễ SLA và khả năng mở rộng không gián đoạn."
        },
        "telemetry": [
          {
            "id": "tel-11-1",
            "label": "INTRANSIT",
            "value": "yes",
            "level": "blue",
            "iconName": "cpu"
          },
          {
            "id": "tel-11-2",
            "label": "ATREST",
            "value": "yes",
            "level": "good",
            "iconName": "cpu"
          },
          {
            "id": "tel-11-3",
            "label": "SECRETS",
            "value": "secrets manager",
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
  }
];
