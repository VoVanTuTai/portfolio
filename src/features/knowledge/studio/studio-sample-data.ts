import type { StudioConcept, StudioLesson, StudioModule } from "./studio.types";

export const studioModulesData: StudioModule[] = [
  {
    id: "mod-01",
    code: "01",
    title: "Nền Tảng Kỹ Sư IS",
    color: "#2563eb",
    lessons: [
      {
        id: "1.1",
        slug: "request-lifecycle",
        title: "Hành trình của một Yêu cầu",
        durationMinutes: 10,
        completed: true,
      },
      {
        id: "1.2",
        slug: "latency-throughput-oms",
        title: "Độ trễ & Thông lượng (OMS)",
        durationMinutes: 12,
        completed: false,
        isActive: true,
      },
      {
        id: "1.3",
        slug: "tiered-architecture",
        title: "Kiến trúc Phân tầng Doanh nghiệp",
        durationMinutes: 15,
        completed: false,
      },
    ],
  },
  {
    id: "mod-02",
    code: "02",
    title: "Cơ Sở Dữ Liệu & 3NF",
    color: "#0284c7",
    lessons: [
      {
        id: "2.1",
        slug: "database-fundamentals",
        title: "Database là gì & Tổ chức Dữ liệu",
        durationMinutes: 14,
        completed: false,
      },
      {
        id: "2.2",
        slug: "data-modeling-erd",
        title: "Data Modeling & Chuẩn hóa 3NF",
        durationMinutes: 18,
        completed: false,
      },
      {
        id: "2.3",
        slug: "acid-concurrency-lock",
        title: "ACID & Khóa Dữ liệu (Row Lock)",
        durationMinutes: 15,
        completed: false,
      },
    ],
  },
  {
    id: "mod-03",
    code: "03",
    title: "Backend API & Microservices",
    color: "#059669",
    lessons: [
      {
        id: "3.1",
        slug: "rest-api-contracts",
        title: "Hợp đồng OpenAPI 3.0 & Postman",
        durationMinutes: 12,
        completed: false,
      },
      {
        id: "3.2",
        slug: "jwt-rbac-security",
        title: "Xác thực JWT & Ma trận RBAC",
        durationMinutes: 14,
        completed: false,
      },
      {
        id: "3.3",
        slug: "idempotency-gate",
        title: "Nguyên tắc Idempotency Key",
        durationMinutes: 10,
        completed: false,
      },
    ],
  },
  {
    id: "mod-04",
    code: "04",
    title: "Business Analysis & BPMN 2.0",
    color: "#6366f1",
    lessons: [
      {
        id: "4.1",
        slug: "babok-framework",
        title: "Khung Năng Lực BABOK v3",
        durationMinutes: 16,
        completed: false,
      },
      {
        id: "4.2",
        slug: "bpmn-process-modeling",
        title: "Mô hình hóa Quy trình Camunda",
        durationMinutes: 20,
        completed: false,
      },
      {
        id: "4.3",
        slug: "user-stories-acceptance",
        title: "User Stories (Given-When-Then)",
        durationMinutes: 12,
        completed: false,
      },
    ],
  },
  {
    id: "mod-05",
    code: "05",
    title: "Ngôn Ngữ & Kiến Trúc Runtime",
    color: "#d97706",
    lessons: [
      {
        id: "5.1",
        slug: "compiler-execution-pipeline",
        title: "Source Code đến CPU Thực Thi",
        durationMinutes: 18,
        completed: false,
      },
      {
        id: "5.2",
        slug: "memory-management-gc",
        title: "Bộ nhớ Stack, Heap & Garbage Collection",
        durationMinutes: 16,
        completed: false,
      },
      {
        id: "5.3",
        slug: "event-loop-concurrency",
        title: "Event Loop vs Virtual Threads",
        durationMinutes: 15,
        completed: false,
      },
    ],
  },
  {
    id: "mod-06",
    code: "06",
    title: "Logistics OMS Architecture",
    color: "#7c3aed",
    lessons: [
      {
        id: "6.1",
        slug: "nexus-express-architecture",
        title: "Kiến trúc Động cơ Vận đơn Nexus",
        durationMinutes: 22,
        completed: false,
      },
      {
        id: "6.2",
        slug: "rabbitmq-buffer-decoupling",
        title: "Bộ đệm Hàng đợi RabbitMQ",
        durationMinutes: 15,
        completed: false,
      },
      {
        id: "6.3",
        slug: "realtime-leaflet-dispatch",
        title: "Điều phối Trực quan & Websocket",
        durationMinutes: 14,
        completed: false,
      },
    ],
  },
];

export const sampleLessonData: StudioLesson = {
  id: "1.2",
  slug: "latency-throughput-oms",
  title: "Độ trễ & Thông lượng (Latency & Throughput)",
  subtitle: "Hai câu hỏi sống còn về hiệu năng hệ thống: Một đơn hàng mất bao lâu để xử lý, và hệ thống tải được bao nhiêu đơn mỗi giây?",
  moduleCode: "01",
  moduleTitle: "Nền Tảng Kỹ Sư IS",
  durationMinutes: 12,
  difficulty: "Cơ bản",
  steps: [
    {
      id: "step-1",
      number: 1,
      title: "Hai con số khác nhau",
      category: "BỐI CẢNH",
      categoryColor: "blue",
      headline: "Độ trễ vs Thông lượng: Định nghĩa cốt lõi",
      bodyHtml: `
        <p><span class="studio-term">Độ trễ (Latency)</span>: Một yêu cầu quét mã vận đơn mất bao lâu, từ lúc shipper bấm nút gửi đến khi nhận mã phản hồi thành công? Đơn vị đo là mili-giây (ms).</p>
        <p><span class="studio-term">Thông lượng (Throughput)</span>: Hệ thống bưu cục có thể tiếp nhận và hoàn tất bao nhiêu yêu cầu quét mã <em>trong mỗi giây</em>? Đơn vị đo là yêu cầu/giây (req/s hay RPS).</p>
        <p>Một hệ thống có thể có thông lượng rất cao nhưng độ trễ lại kém, hoặc ngược lại. Hiểu rõ sự khác biệt này là bước đầu tiên để thiết kế hệ thống chịu tải cao.</p>
      `,
      keyTakeaway: {
        title: "Ẩn dụ Đường cao tốc",
        body: "Hãy nghĩ tới đường cao tốc: Độ trễ là chuyến xe của bạn chạy từ đầu đến cuối trạm mất bao lâu. Thông lượng là có bao nhiêu chiếc xe chạy qua trạm thu phí mỗi giờ. Mở thêm làn xe giúp tăng thông lượng, nhưng không giúp xe bạn chạy nhanh hơn giới hạn tốc độ.",
      },
      telemetry: [
        { id: "p50", label: "Độ trễ P50", value: "45 ms", level: "good", iconName: "clock" },
        { id: "p99", label: "Độ trễ P99", value: "85 ms", level: "good", iconName: "clock" },
        { id: "tps", label: "Thông lượng", value: "250 req/s", level: "blue", iconName: "activity" },
        { id: "load", label: "Mức sử dụng CPU", value: "15%", level: "good", iconName: "cpu" },
      ],
      checklistItems: [
        { id: "c1", text: "Phân biệt rõ ràng giữa Độ trễ (ms) và Thông lượng (req/s)." },
        { id: "c2", text: "Nhận diện đơn vị đo lường chuẩn trong báo cáo SLA hệ thống." },
        { id: "c3", text: "Hiểu vì sao tăng băng thông không tự động làm giảm độ trễ tối thiểu." },
      ],
      nextButtonLabel: "Tải Cao Điểm",
    },
    {
      id: "step-2",
      number: 2,
      title: "Tải bưu cục tăng cao",
      category: "THỰC THI",
      categoryColor: "amber",
      headline: "Hiệu ứng hàng đợi khi lưu lượng tăng vọt",
      bodyHtml: `
        <p>Khi bưu cục bước vào khung giờ cao điểm (17h - 19h), số lượng shipper đồng loạt quét mã nhập kho tăng từ 250 lên 1.200 req/s.</p>
        <p>Khi máy chủ xử lý hết công suất (CPU > 80%), các yêu cầu mới không được xử lý ngay mà bị dồn vào <span class="studio-term">Hàng đợi HĐH (Socket Backlog)</span>.</p>
        <p>Thời gian chờ trong hàng đợi chính là nguyên nhân khiến <span class="studio-term">Độ trễ P99</span> tăng vọt từ 85ms lên 420ms, dù thời gian CPU xử lý một đơn hàng vẫn không đổi.</p>
      `,
      keyTakeaway: {
        title: "Định luật Hàng đợi (Queueing Delay)",
        body: "Khi mức sử dụng tài nguyên (Utilization) vượt qua 80%, thời gian chờ đợi tăng theo cấp số nhân. Một server bận rộn 90% sẽ có hàng đợi dài gấp 9 lần server bận 50%.",
      },
      telemetry: [
        { id: "p50", label: "Độ trễ P50", value: "110 ms", level: "warn", iconName: "clock" },
        { id: "p99", label: "Độ trễ P99", value: "420 ms", level: "crit", iconName: "clock" },
        { id: "tps", label: "Thông lượng", value: "1.200 req/s", level: "blue", iconName: "activity" },
        { id: "load", label: "Mức sử dụng CPU", value: "88%", level: "warn", iconName: "cpu" },
      ],
      checklistItems: [
        { id: "c4", text: "Nhận biết thời điểm hàng đợi bắt đầu hình thành khi CPU > 80%." },
        { id: "c5", text: "Đọc và so sánh sự chênh lệch giữa P50 (trung bình) và P99 (đuôi chậm)." },
        { id: "c6", text: "Giải thích được vì sao thời gian chờ xếp hàng chiếm 80% tổng độ trễ." },
      ],
      nextButtonLabel: "Đệm Hàng Đợi",
    },
    {
      id: "step-3",
      number: 3,
      title: "Đệm RabbitMQ phân tán",
      category: "THỰC THI",
      categoryColor: "blue",
      headline: "Tách kênh đồng bộ bằng Message Queue",
      bodyHtml: `
        <p>Để giải cứu Ingestion API, kiến trúc sư IS đưa vào một <span class="studio-term">Message Queue (RabbitMQ)</span> đóng vai trò van xả áp lực.</p>
        <p>Thay vì bắt shipper chờ ghi trực tiếp vào CSDL MySQL (mất 200ms), Ingestion Gateway chỉ kiểm tra hợp lệ, đẩy tin nhắn vào hàng đợi và phản hồi <code>202 Accepted</code> ngay trong <strong>15ms</strong>.</p>
        <p>Phần việc nặng (tính toán tuyến đường, trừ kho, đồng bộ kế toán) được chuyển cho đội <span class="studio-term">Background Workers</span> tiêu thụ tuần tự.</p>
      `,
      keyTakeaway: {
        title: "Nguyên lý Hấp thụ Đỉnh tải (Buffer Absorption)",
        body: "Message Queue giúp cắt đứt sự phụ thuộc trực tiếp giữa tốc độ gửi của shipper và tốc độ ghi của CSDL. Hệ thống không bị sập hay trả lỗi 504 Gateway Timeout.",
      },
      telemetry: [
        { id: "p50", label: "Độ trễ P50", value: "18 ms", level: "good", iconName: "clock" },
        { id: "p99", label: "Độ trễ P99", value: "35 ms", level: "good", iconName: "clock" },
        { id: "tps", label: "Thông lượng", value: "2.800 req/s", level: "blue", iconName: "activity" },
        { id: "load", label: "Hàng đợi Chờ", value: "142 đơn", level: "warn", iconName: "layers" },
      ],
      checklistItems: [
        { id: "c7", text: "Nắm vững nguyên tắc phân tách Ingestion nhanh và Processing bất đồng bộ." },
        { id: "c8", text: "Hiểu cơ chế phản hồi HTTP 202 Accepted trong API thiết kế chuẩn." },
        { id: "c9", text: "Kiểm soát độ sâu hàng đợi (Queue Depth) qua giám sát Prometheus/Grafana." },
      ],
      nextButtonLabel: "Khóa Dữ Liệu",
    },
    {
      id: "step-4",
      number: 4,
      title: "Chống trùng lặp & Khóa hàng",
      category: "NGHIỆP VỤ BA",
      categoryColor: "emerald",
      headline: "Idempotency Key & Chuẩn hóa 3NF",
      bodyHtml: `
        <p>Trong Logistics thực tế, shipper thường xuyên gặp mạng chập chờn và bấm quét mã 2-3 lần liên tiếp. Nếu không có cơ chế bảo vệ, hệ thống sẽ trừ tiền hoặc tạo 3 đơn trùng lặp.</p>
        <p>Giải pháp từ Kỹ sư IS: Bắt buộc kèm <span class="studio-term">Idempotency-Key</span> trong Header. Nếu cùng một key được gửi lại trong 60 giây, Gateway trả ngay kết quả cũ mà không xử lý lại.</p>
        <p>Dưới tầng CSDL, schema <span class="studio-term">Chuẩn 3NF</span> kết hợp chỉ mục duy nhất <code>(parcel_id, checkpoint_code)</code> đảm bảo dữ liệu toàn vẹn tuyệt đối.</p>
      `,
      keyTakeaway: {
        title: "Tư duy BA Thực chiến",
        body: "Một Business Analyst giỏi không chỉ mô tả luồng thành công (Happy Path), mà phải đặc tả chi tiết ngoại lệ rớt mạng, quét trùng và cơ chế Idempotent ngay trong tài liệu PRD.",
      },
      telemetry: [
        { id: "p50", label: "Độ trễ P50", value: "22 ms", level: "good", iconName: "clock" },
        { id: "p99", label: "Độ trễ P99", value: "48 ms", level: "good", iconName: "clock" },
        { id: "tps", label: "Trùng lặp Chặn", value: "48 req/s", level: "crit", iconName: "shield" },
        { id: "load", label: "Khóa Row Lock", value: "2.4 ms", level: "good", iconName: "database" },
      ],
      checklistItems: [
        { id: "c10", text: "Thiết kế hợp đồng API với Header Idempotency-Key chuẩn IETF." },
        { id: "c11", text: "Mô hình hóa ràng buộc UNIQUE composite index trong schema CSDL 3NF." },
        { id: "c12", text: "Ngăn chặn 100% khiếu nại sai lệch số dư COD của đối tác giao vận." },
      ],
      nextButtonLabel: "Định Luật Little",
    },
    {
      id: "step-5",
      number: 5,
      title: "Định luật Little & Mở rộng",
      category: "LÝ THUYẾT",
      categoryColor: "violet",
      headline: "Mối liên hệ toán học: L = λ × W",
      bodyHtml: `
        <p>Một trong những định luật nền tảng nhất của Kỹ nghệ Hệ thống là <span class="studio-term">Định luật Little</span>: <code>L = λ × W</code>.</p>
        <p>Trong đó: <code>L</code> là số đơn hàng đang nằm trong hệ thống cùng lúc (Concurrency), <code>λ</code> là Thông lượng (Throughput), và <code>W</code> là Độ trễ trung bình (Average Latency).</p>
        <p>Nếu hệ thống xử lý 2.000 req/s và độ trễ là 0.05 giây (50ms), thì hệ thống luôn có chính xác <code>2.000 × 0.05 = 100 đơn hàng</code> đang được xử lý đồng thời.</p>
      `,
      keyTakeaway: {
        title: "Công thức Tính Dung lượng Pool",
        body: "Dùng Định luật Little để định kích thước Database Connection Pool và số lượng Worker threads chuẩn xác, tránh tình trạng thừa tài nguyên gây lãng phí hoặc thiếu gây nghẽn cổ chai.",
      },
      telemetry: [
        { id: "p50", label: "Độ trễ P50", value: "38 ms", level: "good", iconName: "clock" },
        { id: "p99", label: "Độ trễ P99", value: "62 ms", level: "good", iconName: "clock" },
        { id: "tps", label: "Throughput (λ)", value: "2.500 rps", level: "blue", iconName: "activity" },
        { id: "load", label: "Concurrency (L)", value: "125 đơn", level: "good", iconName: "server" },
      ],
      checklistItems: [
        { id: "c13", text: "Áp dụng định luật Little để tính toán số lượng kết nối Database cần thiết." },
        { id: "c14", text: "Dự báo tải hệ thống khi chuẩn bị cho sự kiện Flash Sale bùng nổ traffic." },
      ],
      nextButtonLabel: "Tổng Kết Thực Tiễn",
    },
    {
      id: "step-6",
      number: 6,
      title: "Tổng kết Kỹ sư & Góc nhìn BA",
      category: "TỐI ƯU",
      categoryColor: "emerald",
      headline: "Bài học rút ra từ Hệ thống Nexus Express",
      bodyHtml: `
        <p>Qua bài học này, bạn đã thấy rõ con đường kết hợp giữa <strong>Phân tích Nghiệp vụ (BA)</strong> và <strong>Kỹ thuật Hệ thống (Tech)</strong>:</p>
        <p>1. <em>Góc nhìn BA:</em> Hiểu rõ ranh giới nghiệp vụ, quy tắc bưu cục một chiều, thiết kế SLA dựa trên P95/P99 chứ không chỉ nhìn điểm trung bình.</p>
        <p>2. <em>Góc nhìn Kỹ sư:</em> Dùng RabbitMQ để làm mịn đỉnh tải, OpenAPI để ký hợp đồng tích hợp chặt chẽ, và CSDL chuẩn 3NF với Idempotency Key để bảo vệ tính toàn vẹn.</p>
      `,
      keyTakeaway: {
        title: "Bộ quy tắc Vàng của Kỹ sư IS",
        body: "Đo lường bằng Percentiles (P50/P99), phòng thủ bằng Hàng đợi, bảo vệ bằng Idempotency, và thiết kế dựa trên số liệu thực tế chứ không phỏng đoán cảm tính.",
      },
      telemetry: [
        { id: "p50", label: "SLA Đạt chuẩn", value: "99.8%", level: "good", iconName: "shield" },
        { id: "p99", label: "Thời gian P99", value: "< 95 ms", level: "good", iconName: "clock" },
        { id: "tps", label: "Throughput Max", value: "3.200 rps", level: "blue", iconName: "activity" },
        { id: "load", label: "Độ tin cậy", value: "100%", level: "good", iconName: "database" },
      ],
      checklistItems: [
        { id: "c15", text: "Hoàn tất bài học Nền tảng về Độ trễ & Thông lượng." },
        { id: "c16", text: "Sẵn sàng áp dụng tư duy hàng đợi vào case study tiếp theo." },
      ],
      nextButtonLabel: "Chuyên Đề Kế Tiếp",
    },
  ],
};

export const sampleConceptsData: StudioConcept[] = [
  {
    id: "con-1",
    term: "Latency (Độ trễ)",
    category: "Hiệu Năng",
    definition: "Khoảng thời gian cần thiết để một gói tin hoặc yêu cầu di chuyển từ điểm phát đến đích và nhận phản hồi.",
    lessonSlug: "latency-throughput-oms",
    stepIndex: 0,
  },
  {
    id: "con-2",
    term: "Throughput (Thông lượng)",
    category: "Hiệu Năng",
    definition: "Số lượng đơn vị công việc hoặc yêu cầu được hệ thống xử lý hoàn tất thành công trong một đơn vị thời gian (thường tính bằng req/s).",
    lessonSlug: "latency-throughput-oms",
    stepIndex: 0,
  },
  {
    id: "con-3",
    term: "Idempotency Key",
    category: "API & Giao Thức",
    definition: "Một định danh duy nhất do client gửi lên giúp server nhận biết và không thực hiện xử lý lặp lại nếu gặp request trùng do mạng chập chờn.",
    lessonSlug: "latency-throughput-oms",
    stepIndex: 3,
  },
  {
    id: "con-4",
    term: "Little's Law (Định luật Little)",
    category: "Kỹ Nghệ Hàng Đợi",
    definition: "Định luật toán học chứng minh số lượng khách hàng trung bình trong hệ thống (L) bằng thông lượng (λ) nhân với thời gian chờ (W).",
    lessonSlug: "latency-throughput-oms",
    stepIndex: 4,
  },
  {
    id: "con-5",
    term: "P99 Latency (Phân vị 99)",
    category: "Giám Sát SLA",
    definition: "Thời gian xử lý mà 99% yêu cầu hoàn thành nhanh hơn mức đó; phản ánh chính xác trải nghiệm của nhóm khách hàng chịu độ trễ tồi tệ nhất.",
    lessonSlug: "latency-throughput-oms",
    stepIndex: 1,
  },
  {
    id: "con-6",
    term: "BPMN 2.0 State Machine",
    category: "Phân Tích Nghiệp Vụ",
    definition: "Ký hiệu chuẩn quốc tế mô hình hóa các trạng thái và luồng chuyển đổi quy trình kinh doanh trong doanh nghiệp.",
    lessonSlug: "bpmn-process-modeling",
    stepIndex: 0,
  },
];
