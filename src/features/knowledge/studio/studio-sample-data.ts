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

// ============================================================================
// 1. LESSON 1.2: Latency & Throughput (Flagship)
// ============================================================================
const lessonLatencyThroughput: StudioLesson = {
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

// ============================================================================
// 2. LESSON 2.2: Data Modeling & Chuẩn hóa 3NF
// ============================================================================
const lessonDataModeling3NF: StudioLesson = {
  id: "2.2",
  slug: "data-modeling-erd",
  title: "Data Modeling & Chuẩn Hóa 3NF (PostgreSQL)",
  subtitle: "Từ bảng tính Excel hỗn độn đến mô hình quan hệ chuẩn hóa 3NF: Loại bỏ 100% dị thường thêm, sửa, xóa trong quản lý bưu kiện.",
  moduleCode: "02",
  moduleTitle: "Cơ Sở Dữ Liệu & 3NF",
  durationMinutes: 18,
  difficulty: "Trung cấp",
  steps: [
    {
      id: "step-2-1",
      number: 1,
      title: "Bảng dữ liệu phi chuẩn (0NF)",
      category: "BỐI CẢNH",
      categoryColor: "rose",
      headline: "Thảm họa dữ liệu lặp nhóm và dị thường",
      bodyHtml: `
        <p>Bắt đầu với một bảng Excel duy nhất: <code>DonHang(MaDH, TenKH, SDT, DiaChi, DanhSachSanPham, TongTien)</code>.</p>
        <p>Cột <code>DanhSachSanPham</code> chứa chuỗi phân tách dấu phẩy <code>"Áo thun (x2), Quần jean (x1)"</code>. Đây là dạng phi chuẩn (0NF).</p>
        <p>Hậu quả: Không thể lập chỉ mục (index), không thể tính tổng doanh thu theo từng mặt hàng mà không quét toàn bảng (Full Table Scan).</p>
      `,
      keyTakeaway: {
        title: "Dị thường CSDL (Anomalies)",
        body: "Dữ liệu phi chuẩn gây ra 3 thảm họa: Dị thường Thêm (Insert Anomaly), Dị thường Sửa (Update Anomaly khi đổi giá sản phẩm), và Dị thường Xóa (Delete Anomaly khi xóa đơn làm mất luôn thông tin khách hàng).",
      },
      telemetry: [
        { id: "redun", label: "Dư thừa Dữ liệu", value: "68%", level: "crit", iconName: "database" },
        { id: "scan", label: "Chi phí Truy vấn", value: "O(N) Full", level: "warn", iconName: "cpu" },
        { id: "valid", label: "Ràng buộc Toàn vẹn", value: "0%", level: "crit", iconName: "shield" },
        { id: "storage", label: "Dung lượng Phình", value: "+320%", level: "crit", iconName: "layers" },
      ],
      checklistItems: [
        { id: "c201", text: "Nhận diện dấu hiệu của cấu trúc 0NF (lặp nhóm cột, mảng chuỗi)." },
        { id: "c202", text: "Phân tích 3 loại dị thường dữ liệu gây sai lệch báo cáo tài chính." },
      ],
      nextButtonLabel: "Chuẩn Hóa 1NF",
    },
    {
      id: "step-2-2",
      number: 2,
      title: "Dạng chuẩn 1 (1NF: Nguyên tố)",
      category: "LÝ THUYẾT",
      categoryColor: "blue",
      headline: "Mọi ô dữ liệu phải là giá trị nguyên tố (Atomic)",
      bodyHtml: `
        <p>Để đạt <span class="studio-term">1NF (First Normal Form)</span>, ta tách bảng thành từng dòng đơn lẻ, mỗi ô chỉ chứa một giá trị nguyên tố duy nhất.</p>
        <p>Xác định <span class="studio-term">Khóa chính (Primary Key)</span> kết hợp: <code>(MaDH, MaSP)</code>.</p>
        <p>Mỗi mặt hàng trong đơn hàng bây giờ là một bản ghi độc lập, có thể truy vấn số lượng và đơn giá chính xác.</p>
      `,
      keyTakeaway: {
        title: "Tính Nguyên tố (Atomicity)",
        body: "1NF loại bỏ hoàn toàn các cột đa trị (multi-valued attributes) và danh sách lặp lại. Bảng trở thành ma trận dữ liệu hai chiều chuẩn mực.",
      },
      telemetry: [
        { id: "atomic", label: "Tính Nguyên tố", value: "100%", level: "good", iconName: "check" },
        { id: "pk", label: "Khóa kết hợp PK", value: "(MaDH, MaSP)", level: "blue", iconName: "shield" },
        { id: "redun", label: "Dư thừa", value: "42%", level: "warn", iconName: "database" },
        { id: "status", label: "Chuẩn 1NF", value: "ĐẠT", level: "good", iconName: "layers" },
      ],
      checklistItems: [
        { id: "c203", text: "Tách mảng chuỗi thành các dòng bản ghi riêng biệt." },
        { id: "c204", text: "Định nghĩa khóa chính kết hợp hợp lệ." },
      ],
      nextButtonLabel: "Chuẩn Hóa 2NF",
    },
    {
      id: "step-2-3",
      number: 3,
      title: "Dạng chuẩn 2 (2NF: Toàn phần)",
      category: "THỰC THI",
      categoryColor: "blue",
      headline: "Khử phụ thuộc hàm bộ phận vào khóa chính",
      bodyHtml: `
        <p>Ở 1NF, cột <code>TenSanPham</code> và <code>GiaGoc</code> chỉ phụ thuộc vào <code>MaSP</code> chứ không phụ thuộc vào <code>MaDH</code>. Đây là <span class="studio-term">Phụ thuộc hàm bộ phận (Partial Dependency)</span>.</p>
        <p>Chuẩn hóa 2NF: Tách thành 2 bảng riêng biệt:</p>
        <ul>
          <li><code>DonHangChiTiet(MaDH, MaSP, SoLuong, DonGiaBan)</code></li>
          <li><code>SanPham(MaSP, TenSP, GiaNiemYet, DonViTinh)</code></li>
        </ul>
      `,
      keyTakeaway: {
        title: "Quy tắc 2NF",
        body: "Mọi thuộc tính không khóa phải phụ thuộc ĐẦY ĐỦ vào toàn bộ khóa chính, chứ không được phụ thuộc vào một phần của khóa kết hợp.",
      },
      telemetry: [
        { id: "part", label: "Phụ thuộc Bộ phận", value: "0 (Đã khử)", level: "good", iconName: "shield" },
        { id: "tables", label: "Số bảng phân tách", value: "3 bảng", level: "blue", iconName: "layers" },
        { id: "redun", label: "Dư thừa", value: "18%", level: "good", iconName: "database" },
        { id: "status", label: "Chuẩn 2NF", value: "ĐẠT", level: "good", iconName: "check" },
      ],
      checklistItems: [
        { id: "c205", text: "Phát hiện thuộc tính chỉ phụ thuộc một nửa khóa kết hợp." },
        { id: "c206", text: "Tách bảng danh mục sản phẩm độc lập khỏi bảng chi tiết đơn." },
      ],
      nextButtonLabel: "Chuẩn Hóa 3NF",
    },
    {
      id: "step-2-4",
      number: 4,
      title: "Dạng chuẩn 3 (3NF: Không bắc cầu)",
      category: "THỰC THI",
      categoryColor: "emerald",
      headline: "Khử phụ thuộc bắc cầu (Transitive Dependency)",
      bodyHtml: `
        <p>Trong bảng <code>DonHang(MaDH, NgayTao, MaKH, TenKH, DiaChiKH)</code>:</p>
        <p><code>MaDH ➔ MaKH</code> và <code>MaKH ➔ (TenKH, DiaChiKH)</code>. Thuộc tính khách hàng đang phụ thuộc <strong>bắc cầu</strong> vào <code>MaDH</code> qua trung gian <code>MaKH</code>.</p>
        <p>Giải pháp 3NF: Tách bảng <code>KhachHang(MaKH, TenKH, DiaChi, SoDienThoai)</code> riêng biệt, bảng <code>DonHang</code> chỉ lưu khóa ngoại <code>MaKH</code>.</p>
      `,
      keyTakeaway: {
        title: "Châm ngôn CSDL Bất hủ",
        body: "\"Mọi thuộc tính phải phụ thuộc vào Khóa, toàn bộ Khóa, và không có gì ngoài Khóa (So help me Codd)\". 3NF là tiêu chuẩn vàng cho hệ thống giao dịch OLTP.",
      },
      telemetry: [
        { id: "trans", label: "Phụ thuộc Bắc cầu", value: "0 (Hoàn hảo)", level: "good", iconName: "shield" },
        { id: "integrity", label: "Toàn vẹn Dữ liệu", value: "100%", level: "good", iconName: "database" },
        { id: "storage", label: "Tiết kiệm Dung lượng", value: "54%", level: "good", iconName: "layers" },
        { id: "status", label: "Chuẩn 3NF", value: "CHUẨN VÀNG", level: "good", iconName: "check" },
      ],
      checklistItems: [
        { id: "c207", text: "Nhận biết phụ thuộc hàm bắc cầu A ➔ B ➔ C." },
        { id: "c208", text: "Tách bảng thực thể độc lập với Khóa chính và Khóa ngoại (PK/FK)." },
        { id: "c209", text: "Áp dụng ràng buộc ON DELETE RESTRICT để bảo vệ dữ liệu." },
      ],
      nextButtonLabel: "Khóa Ngoại & Index",
    },
    {
      id: "step-2-5",
      number: 5,
      title: "Toàn vẹn khóa ngoại & BCNF",
      category: "TỐI ƯU",
      categoryColor: "violet",
      headline: "Chỉ mục Index & Ràng buộc toàn vẹn",
      bodyHtml: `
        <p>Khi CSDL đạt 3NF, việc truy vấn cần dùng phép <code>JOIN</code> giữa các bảng. Để duy trì tốc độ dưới 5ms, ta cần thiết lập:</p>
        <ul>
          <li><strong>B-Tree Index</strong> trên mọi cột Khóa ngoại (<code>orders.customer_id</code>).</li>
          <li><strong>Composite Unique Index</strong> trên <code>(order_id, status_code)</code> chống trùng lặp.</li>
          <li>Khóa hàng bi quan <code>SELECT ... FOR UPDATE</code> khi trừ số dư tài khoản COD.</li>
        </ul>
      `,
      keyTakeaway: {
        title: "Tối ưu hóa Index cho 3NF",
        body: "Chuẩn hóa 3NF giúp ghi dữ liệu nhanh và an toàn, nhưng đòi hỏi kiến trúc sư IS phải đánh Index chính xác trên các cột JOIN để duy trì tốc độ đọc cao.",
      },
      telemetry: [
        { id: "join", label: "Tốc độ JOIN (Index)", value: "2.1 ms", level: "good", iconName: "clock" },
        { id: "deadlock", label: "Khả năng Deadlock", value: "< 0.01%", level: "good", iconName: "shield" },
        { id: "tps", label: "Thông lượng Ghi OLTP", value: "4.500 txn/s", level: "blue", iconName: "activity" },
        { id: "acid", label: "Tuân thủ ACID", value: "100%", level: "good", iconName: "database" },
      ],
      checklistItems: [
        { id: "c210", text: "Tạo Index B-Tree trên các trường Foreign Key thường xuyên JOIN." },
        { id: "c211", text: "Phân biệt khi nào giữ 3NF và khi nào phi chuẩn hóa (Denormalize) cho OLAP." },
      ],
      nextButtonLabel: "Tổng Kết 3NF",
    },
    {
      id: "step-2-6",
      number: 6,
      title: "Tổng kết & Đánh đổi Kiến trúc",
      category: "TỐI ƯU",
      categoryColor: "emerald",
      headline: "So sánh OLTP (3NF) vs OLAP (Star Schema)",
      bodyHtml: `
        <p>Trong thực tế của hệ thống Nexus Express:</p>
        <p>1. <strong>Tầng Giao dịch (OLTP):</strong> Áp dụng nghiêm ngặt chuẩn 3NF trong PostgreSQL để đảm bảo không bao giờ trừ tiền sai hay thất lạc đơn hàng.</p>
        <p>2. <strong>Tầng Báo cáo (OLAP):</strong> Dùng Kafka đẩy dữ liệu sang ClickHouse theo mô hình Ngôi sao (Star Schema / Flat Wide Table) để phục vụ Dashboard phân tích 100 triệu đơn hàng tức thì.</p>
      `,
      keyTakeaway: {
        title: "Tư duy Kỹ sư Hệ thống",
        body: "Không có mô hình nào tối ưu cho mọi tác vụ: 3NF cho ghi an toàn, Phi chuẩn hóa cho đọc phân tích tốc độ cao.",
      },
      telemetry: [
        { id: "oltp", label: "Chuẩn OLTP", value: "PostgreSQL 3NF", level: "good", iconName: "database" },
        { id: "olap", label: "Chuẩn OLAP", value: "ClickHouse Flat", level: "blue", iconName: "layers" },
        { id: "sync", label: "Độ trễ Đồng bộ CDC", value: "850 ms", level: "good", iconName: "activity" },
        { id: "sla", label: "SLA Báo cáo", value: "100% Khớp", level: "good", iconName: "shield" },
      ],
      checklistItems: [
        { id: "c212", text: "Hoàn tất chuyên đề Chuẩn hóa CSDL 3NF." },
        { id: "c213", text: "Hiểu rõ ranh giới kiến trúc giữa OLTP và OLAP." },
      ],
      nextButtonLabel: "Hoàn Thành Chuyên Đề",
    },
  ],
};

// ============================================================================
// 3. LESSON 3.1: REST API Contracts & OpenAPI 3.0
// ============================================================================
const lessonRestApiContracts: StudioLesson = {
  id: "3.1",
  slug: "rest-api-contracts",
  title: "Hợp Đồng OpenAPI 3.0 & Idempotency Gate",
  subtitle: "Xây dựng giao diện lập trình ứng dụng chuẩn doanh nghiệp: Từ hợp đồng Swagger, xác thực JWT, RBAC đến bảo vệ Idempotency chống trừ tiền kép.",
  moduleCode: "03",
  moduleTitle: "Backend API & Microservices",
  durationMinutes: 12,
  difficulty: "Cơ bản",
  steps: [
    {
      id: "step-3-1",
      number: 1,
      title: "Hợp đồng API (Contract-First)",
      category: "BỐI CẢNH",
      categoryColor: "blue",
      headline: "Đặc tả OpenAPI 3.0 làm cầu nối Frontend & Backend",
      bodyHtml: `
        <p>Thay vì viết code rồi mới viết tài liệu, chuẩn kỹ sư IS áp dụng phương pháp <span class="studio-term">API Contract-First</span> với chuẩn OpenAPI 3.0 (YAML/JSON).</p>
        <p>Hợp đồng quy định rõ cấu trúc Request Header, Body JSON, Kiểu dữ liệu, và danh sách mã trạng thái HTTP trả về.</p>
        <p>Đội Mobile Shipper và Backend có thể làm việc song song (Parallel Development) nhờ vào Mock Server tự động sinh từ file contract.</p>
      `,
      keyTakeaway: {
        title: "Nguyên lý Single Source of Truth",
        body: "File openapi.yaml là nguồn sự thật duy nhất: tự động sinh TypeScript types cho Frontend, DTO validation cho NestJS backend, và Postman collection cho đội QA.",
      },
      telemetry: [
        { id: "endpoints", label: "Tổng Endpoints", value: "48 APIs", level: "blue", iconName: "server" },
        { id: "schema", label: "Schema Coverage", value: "100%", level: "good", iconName: "shield" },
        { id: "drift", label: "Contract Drift", value: "0%", level: "good", iconName: "check" },
        { id: "mock", label: "Tốc độ Mock", value: "1.2 ms", level: "good", iconName: "clock" },
      ],
      checklistItems: [
        { id: "c301", text: "Viết đặc tả OpenAPI 3.0 chuẩn IETF." },
        { id: "c302", text: "Tự động sinh TypeScript interfaces từ Swagger schema." },
      ],
      nextButtonLabel: "Xác Thực JWT & RBAC",
    },
    {
      id: "step-3-2",
      number: 2,
      title: "Xác thực JWT & Phân quyền RBAC",
      category: "THỰC THI",
      categoryColor: "blue",
      headline: "Kiểm soát truy cập theo vai trò (Role-Based Access Control)",
      bodyHtml: `
        <p>Mỗi request từ Shipper phải kèm Header <code>Authorization: Bearer &lt;token&gt;</code>.</p>
        <p>API Gateway giải mã chữ ký số RS256 trong <strong>&lt; 2ms</strong> mà không cần truy vấn Database, trích xuất <code>sub (user_id)</code>, <code>roles: ['COURIER']</code> và <code>hub_id</code>.</p>
        <p>Bảo vệ ranh giới: Shipper chỉ được quét mã bưu kiện thuộc bưu cục quản lý của mình.</p>
      `,
      keyTakeaway: {
        title: "Stateless Authentication",
        body: "JWT phi trạng thái giúp API Gateway mở rộng ngang hàng chục Pods mà không cần đồng bộ phiên đăng nhập qua Session Database.",
      },
      telemetry: [
        { id: "verify", label: "Thời gian giải mã JWT", value: "1.4 ms", level: "good", iconName: "clock" },
        { id: "blocked", label: "Chặn 401 Unauthorized", value: "12 req/m", level: "warn", iconName: "shield" },
        { id: "crypto", label: "Thuật toán Ký", value: "RSA RS256", level: "blue", iconName: "shield" },
        { id: "ttl", label: "Access Token TTL", value: "15 phút", level: "good", iconName: "clock" },
      ],
      checklistItems: [
        { id: "c303", text: "Kiểm tra chữ ký số công khai RSA public key." },
        { id: "c304", text: "Thiết lập Guard chặn người dùng truy cập trái quyền (403 Forbidden)." },
      ],
      nextButtonLabel: "Cổng Idempotency",
    },
    {
      id: "step-3-3",
      number: 3,
      title: "Cổng Idempotency Key Gate",
      category: "THỰC THI",
      categoryColor: "emerald",
      headline: "Bảo vệ giao dịch kép với Redis Lock",
      bodyHtml: `
        <p>Khi gửi yêu cầu thanh toán COD hoặc cập nhật trạng thái đơn, client bắt buộc gửi Header <code>Idempotency-Key: &lt;UUIDv4&gt;</code>.</p>
        <p>Gateway thực hiện lệnh nguyên tử <code>SET lock:key token NX EX 60</code> trong Redis:</p>
        <ul>
          <li>Nếu thành công: Xử lý tiếp và lưu kết quả phản hồi vào cache.</li>
          <li>Nếu trùng key: Trả ngay kết quả cache cũ kèm mã <code>200 OK</code> hoặc báo lỗi <code>409 Conflict</code>.</li>
        </ul>
      `,
      keyTakeaway: {
        title: "Chuẩn IETF Draft",
        body: "Idempotency Key là tiêu chuẩn vàng được Stripe, Adyen và các hệ thống Logistics hàng đầu thế giới bắt buộc áp dụng cho mọi API có tác động tài chính.",
      },
      telemetry: [
        { id: "locktime", label: "Thời gian chiếm Lock", value: "0.8 ms", level: "good", iconName: "clock" },
        { id: "dup", label: "Tỷ lệ Request Trùng", value: "2.3%", level: "warn", iconName: "shield" },
        { id: "ttl", label: "Lock Expiry", value: "60 giây", level: "blue", iconName: "clock" },
        { id: "saved", label: "Lần tránh sai sót", value: "1.450 / ngày", level: "good", iconName: "check" },
      ],
      checklistItems: [
        { id: "c305", text: "Cấu hình lệnh Redis SETNX nguyên tử." },
        { id: "c306", text: "Lưu trữ Response Payload để trả về ngay cho request bị lặp." },
      ],
      nextButtonLabel: "Chuẩn Hóa Mã Lỗi",
    },
    {
      id: "step-3-4",
      number: 4,
      title: "Chuẩn hóa Lỗi RFC 7807",
      category: "NGHIỆP VỤ BA",
      categoryColor: "violet",
      headline: "Problem Details for HTTP APIs (RFC 7807)",
      bodyHtml: `
        <p>Thay vì trả về lỗi dạng văn bản mơ hồ <code>"Có lỗi xảy ra"</code>, hệ thống trả về cấu trúc chuẩn RFC 7807 JSON:</p>
        <pre><code>{
  "type": "https://api.nexus-ex.site/errors/parcel-locked",
  "title": "Bưu kiện đang bị khóa bởi phiên quét khác",
  "status": 409,
  "detail": "Bưu kiện NX-98213 đang được bưu cục Tân Bình xử lý",
  "invalidParams": [{ "name": "parcelId", "reason": "Locked" }]
}</code></pre>
      `,
      keyTakeaway: {
        title: "Lợi ích cho Đội ngũ BA & Support",
        body: "Mã lỗi chuẩn RFC 7807 giúp đội ngũ CSKH và BA tra cứu nguyên nhân tức thì trong vòng 3 giây mà không cần nhờ Backend truy xuất log máy chủ.",
      },
      telemetry: [
        { id: "rfc", label: "Định dạng Lỗi", value: "RFC 7807", level: "good", iconName: "shield" },
        { id: "mttr", label: "Thời gian xử lý ticket", value: "-65%", level: "good", iconName: "clock" },
        { id: "log", label: "Trace ID đính kèm", value: "100%", level: "blue", iconName: "server" },
        { id: "clarity", label: "Độ minh bạch API", value: "Chuẩn A+", level: "good", iconName: "check" },
      ],
      checklistItems: [
        { id: "c307", text: "Xây dựng Global Exception Filter trong NestJS." },
        { id: "c308", text: "Đính kèm Correlation ID / Trace ID trong mọi Response Header." },
      ],
      nextButtonLabel: "Tổng Kết API",
    },
    {
      id: "step-3-5",
      number: 5,
      title: "Tổng kết & Đánh giá SLA API",
      category: "TỐI ƯU",
      categoryColor: "emerald",
      headline: "Bộ chỉ số vàng của API Gateway Doanh nghiệp",
      bodyHtml: `
        <p>Một hệ thống Backend API mạnh mẽ được đánh giá qua 4 thông số cốt lõi:</p>
        <p>1. <strong>Độ trễ trung gian (Gateway Overhead):</strong> &lt; 5ms.<br/>
        2. <strong>Tỷ lệ Thành công (HTTP 2xx):</strong> &gt; 99.95%.<br/>
        3. <strong>Bảo vệ Idempotency:</strong> Ngăn chặn 100% lỗi trừ tiền và tạo đơn ảo.<br/>
        4. <strong>Tài liệu Hợp đồng:</strong> Swagger UI cập nhật tự động theo CI/CD.</p>
      `,
      keyTakeaway: {
        title: "Tư duy Thiết kế API",
        body: "API là bộ mặt của kiến trúc hệ thống. Hợp đồng chặt chẽ, bảo mật cao và thông báo lỗi rõ ràng là tiêu chuẩn hàng đầu của Kỹ sư Backend chuyên nghiệp.",
      },
      telemetry: [
        { id: "sla", label: "API Uptime", value: "99.98%", level: "good", iconName: "activity" },
        { id: "p99", label: "P99 Gateway", value: "4.8 ms", level: "good", iconName: "clock" },
        { id: "tps", label: "Max Ingestion RPS", value: "5.000 rps", level: "blue", iconName: "server" },
        { id: "sec", label: "Độ tin cậy Bảo mật", value: "ISO 27001", level: "good", iconName: "shield" },
      ],
      checklistItems: [
        { id: "c309", text: "Hoàn tất bài học Backend API & OpenAPI 3.0." },
      ],
      nextButtonLabel: "Hoàn Thành Chuyên Đề",
    },
  ],
};

// ============================================================================
// 4. LESSON 4.2: BPMN 2.0 Process Modeling (Camunda)
// ============================================================================
const lessonBpmnProcessModeling: StudioLesson = {
  id: "4.2",
  slug: "bpmn-process-modeling",
  title: "Mô Hình Hóa Quy Trình Nghiệp Vụ BPMN 2.0 (Camunda)",
  subtitle: "Chuyển hóa bài toán kinh doanh phức tạp thành máy trạng thái chuẩn quốc tế: Phân tích làn bơi (Pools & Lanes), cổng rẽ nhánh XOR và sự kiện ngoại lệ.",
  moduleCode: "04",
  moduleTitle: "Business Analysis & BPMN 2.0",
  durationMinutes: 20,
  difficulty: "Nâng cao",
  steps: [
    {
      id: "step-4-1",
      number: 1,
      title: "Biên nghiệp vụ & Làn bơi",
      category: "BỐI CẢNH",
      categoryColor: "blue",
      headline: "Phân định trách nhiệm: Pools & Swimlanes",
      bodyHtml: `
        <p>Trong phân tích nghiệp vụ (BA), bước đầu tiên là xác định <span class="studio-term">Ranh giới quy trình (Process Boundaries)</span>.</p>
        <p>Sơ đồ BPMN 2.0 của Nexus Express chia thành 3 Làn bơi (Swimlanes):</p>
        <ul>
          <li><strong>Làn 1: Tài xế Giao vận (Courier):</strong> Quét mã, chụp ảnh giao hàng, nhận tiền mặt COD.</li>
          <li><strong>Làn 2: Nhân viên Điều phối (Dispatcher):</strong> Phân tuyến tự động, xử lý khiếu nại trễ giờ.</li>
          <li><strong>Làn 3: Bộ phận Tài chính (Finance):</strong> Đối soát số dư COD, xuất hóa đơn VAT điện tử.</li>
        </ul>
      `,
      keyTakeaway: {
        title: "Tư duy BA Chuẩn BABOK v3",
        body: "Mỗi hành động trong quy trình phải có một chủ sở hữu (Owner) duy nhất. Swimlanes giải quyết triệt để tình trạng 'cha chung không ai khóc' giữa các phòng ban.",
      },
      telemetry: [
        { id: "lanes", label: "Số làn bơi (Lanes)", value: "3 phòng ban", level: "blue", iconName: "layers" },
        { id: "handoff", label: "Điểm chuyển giao", value: "4 Handoffs", level: "good", iconName: "activity" },
        { id: "clarity", label: "Độ minh bạch", value: "100%", level: "good", iconName: "shield" },
        { id: "sop", label: "Chuẩn hóa SOP", value: "ISO 9001", level: "good", iconName: "check" },
      ],
      checklistItems: [
        { id: "c401", text: "Vẽ Pools và Swimlanes chuẩn BPMN 2.0 theo ký hiệu OMG." },
        { id: "c402", text: "Xác định rõ vai trò và đầu ra của từng bộ phận tham gia." },
      ],
      nextButtonLabel: "Cổng Rẽ Nhánh XOR",
    },
    {
      id: "step-4-2",
      number: 2,
      title: "Cổng rẽ nhánh XOR Gateway",
      category: "THỰC THI",
      categoryColor: "amber",
      headline: "Điều kiện rẽ nhánh: Thành công hay Sự cố?",
      bodyHtml: `
        <p>Khi tài xế giao hàng, quy trình gặp một <span class="studio-term">Cổng rẽ nhánh loại trừ (Exclusive Gateway - XOR)</span>:</p>
        <p>1. <strong>Nhánh Thành công (Happy Path):</strong> Người nhận ký nhận, đóng phí COD ➔ Chuyển trạng thái <code>DELIVERED</code>.</p>
        <p>2. <strong>Nhánh Thất bại (Unhappy Path):</strong> Khách không nghe máy hoặc từ chối nhận ➔ Kích hoạt quy trình lưu kho tạm và hẹn giao lại lần 2.</p>
      `,
      keyTakeaway: {
        title: "Ngoại lệ Nghiệp vụ",
        body: "80% thời gian phân tích của một BA cao cấp dành cho các nhánh ngoại lệ. Mô hình hóa rõ nhánh XOR giúp lập trình viên không bao giờ bỏ sót trường hợp biên (Edge Cases).",
      },
      telemetry: [
        { id: "happy", label: "Tỷ lệ Giao lần 1", value: "88.5%", level: "good", iconName: "check" },
        { id: "retry", label: "Tỷ lệ Hẹn lại", value: "9.2%", level: "warn", iconName: "activity" },
        { id: "return", label: "Tỷ lệ Hoàn hàng", value: "2.3%", level: "crit", iconName: "shield" },
        { id: "rules", label: "Quy tắc nghiệp vụ", value: "14 Rules", level: "blue", iconName: "layers" },
      ],
      checklistItems: [
        { id: "c403", text: "Đặt điều kiện phân nhánh rõ ràng (Decision Table DMN)." },
        { id: "c404", text: "Đặc tả luồng xử lý giao lại tối đa 3 lần trước khi hoàn trả." },
      ],
      nextButtonLabel: "Tác Vụ Service Task",
    },
    {
      id: "step-4-3",
      number: 3,
      title: "Tự động hóa Service Task",
      category: "THỰC THI",
      categoryColor: "blue",
      headline: "Kết nối Camunda Engine với Backend Microservices",
      bodyHtml: `
        <p>Trong BPMN 2.0 thực thi (Executable BPMN), các ô tác vụ hình bánh răng đại diện cho <span class="studio-term">Service Task</span>.</p>
        <p>Khi đơn hàng chuyển sang <code>DELIVERED</code>, Camunda tự động kích hoạt 3 Service Tasks song song (Parallel Gateway):</p>
        <ul>
          <li>Gửi SMS/Zalo thông báo cho người gửi.</li>
          <li>Cộng tiền vào ví điện tử của tài xế.</li>
          <li>Kích hoạt đồng bộ hóa đơn với hệ thống SAP/ERP.</li>
        </ul>
      `,
      keyTakeaway: {
        title: "Executable Architecture",
        body: "Sơ đồ BPMN không còn là hình vẽ vô tri trên giấy mà trở thành mã nguồn chạy trực tiếp trên Camunda Engine, tự động gọi REST APIs và lắng nghe Kafka events.",
      },
      telemetry: [
        { id: "auto", label: "Tỷ lệ Tự động hóa", value: "92%", level: "good", iconName: "cpu" },
        { id: "speed", label: "Thời gian xử lý task", value: "120 ms", level: "good", iconName: "clock" },
        { id: "workers", label: "External Task Workers", value: "6 Workers", level: "blue", iconName: "server" },
        { id: "err", label: "Lỗi thực thi", value: "0.02%", level: "good", iconName: "shield" },
      ],
      checklistItems: [
        { id: "c405", text: "Tích hợp Camunda External Task Client bằng TypeScript/Go." },
        { id: "c406", text: "Đảm bảo tính Idempotent cho các Service Task tự động." },
      ],
      nextButtonLabel: "Xử Lý Ngoại Lệ & SLA",
    },
    {
      id: "step-4-4",
      number: 4,
      title: "Xử lý ngoại lệ & Cam kết SLA",
      category: "TỐI ƯU",
      categoryColor: "emerald",
      headline: "Timer Boundary Events & Giám sát SLA thời gian thực",
      bodyHtml: `
        <p>Bưu kiện hỏa tốc có cam kết SLA giao trong vòng 2 giờ. BA thiết lập <span class="studio-term">Timer Boundary Event</span> trên tác vụ giao vận.</p>
        <p>Nếu sau 90 phút tài xế chưa cập nhật trạng thái, đồng hồ đếm ngược kích hoạt sự kiện cảnh báo đỏ trên màn hình điều phối viên để can thiệp kịp thời.</p>
        <p>Dữ liệu này được tổng hợp thành bảng chỉ số KPI hàng tuần cho ban giám đốc.</p>
      `,
      keyTakeaway: {
        title: "Quản trị Theo Cam kết (SLA-driven)",
        body: "BPMN 2.0 giúp doanh nghiệp biến các điều khoản hợp đồng dịch vụ SLA thành các ngưỡng cảnh báo tự động, bảo vệ uy tín thương hiệu.",
      },
      telemetry: [
        { id: "sla", label: "Đạt chuẩn SLA 2h", value: "99.4%", level: "good", iconName: "shield" },
        { id: "alerts", label: "Cảnh báo Timer kích hoạt", value: "8 vụ/ngày", level: "warn", iconName: "clock" },
        { id: "resolved", label: "Tỷ lệ Cứu đơn trễ", value: "94%", level: "good", iconName: "check" },
        { id: "kpi", label: "Điểm hài lòng CSAT", value: "4.9 / 5.0", level: "blue", iconName: "activity" },
      ],
      checklistItems: [
        { id: "c407", text: "Cấu hình Timer Boundary Event ngắt dòng (Interrupting)." },
        { id: "c408", text: "Hoàn tất bài học Mô hình hóa Quy trình BPMN 2.0." },
      ],
      nextButtonLabel: "Hoàn Thành Chuyên Đề",
    },
  ],
};

// ============================================================================
// 5. LESSON 5.1: Compiler & Runtime Execution Pipeline
// ============================================================================
const lessonCompilerRuntime: StudioLesson = {
  id: "5.1",
  slug: "compiler-execution-pipeline",
  title: "Từ Mã Nguồn Đến CPU Thực Thi (Compiler & Runtime)",
  subtitle: "Hành trình vi mô của một dòng code: Từ phân tích từ vựng (Lexer), cây AST, Bytecode máy ảo đến Stack/Heap và thanh ghi CPU x86-64.",
  moduleCode: "05",
  moduleTitle: "Ngôn Ngữ & Kiến Trúc Runtime",
  durationMinutes: 18,
  difficulty: "Nâng cao",
  steps: [
    {
      id: "step-5-1",
      number: 1,
      title: "Từ vựng & Cây AST",
      category: "LÝ THUYẾT",
      categoryColor: "blue",
      headline: "Lexer tạo Tokens và Parser dựng Abstract Syntax Tree",
      bodyHtml: `
        <p>Khi bạn viết <code>const fee = calculateShipping(weight, distance);</code>, trình biên dịch thực hiện 2 bước đầu tiên:</p>
        <p>1. <strong>Lexical Analysis (Lexer):</strong> Quét chuỗi ký tự thành các thẻ từ vựng (Tokens): <code>[KEYWORD: const]</code>, <code>[IDENT: fee]</code>, <code>[OP: =]</code>.</p>
        <p>2. <strong>Syntax Analysis (Parser):</strong> Dựng cây <span class="studio-term">Cú pháp Trừu tượng (AST)</span> phân cấp quan hệ giữa hàm và các tham số.</p>
      `,
      keyTakeaway: {
        title: "Sức mạnh của AST",
        body: "AST là nền tảng của mọi công cụ bạn dùng hàng ngày: TypeScript compiler, ESLint, Prettier và Babel đều hoạt động bằng cách phân tích và biến đổi trên cây AST.",
      },
      telemetry: [
        { id: "tokens", label: "Tokens sinh ra", value: "14 tokens", level: "blue", iconName: "layers" },
        { id: "nodes", label: "AST Nodes", value: "8 nodes", level: "good", iconName: "cpu" },
        { id: "parse", label: "Thời gian Parse", value: "0.4 ms", level: "good", iconName: "clock" },
        { id: "err", label: "Lỗi Cú pháp", value: "0 Syntax Error", level: "good", iconName: "shield" },
      ],
      checklistItems: [
        { id: "c501", text: "Hiểu quy trình Tokenization của Lexer." },
        { id: "c502", text: "Hình dung cấu trúc cây phân nhánh Abstract Syntax Tree." },
      ],
      nextButtonLabel: "Sinh Mã Bytecode",
    },
    {
      id: "step-5-2",
      number: 2,
      title: "Bytecode & Máy ảo V8 / JVM",
      category: "THỰC THI",
      categoryColor: "blue",
      headline: "Biên dịch JIT (Just-In-Time) và Tối ưu hóa mã",
      bodyHtml: `
        <p>Máy ảo (như V8 của Node.js hay JVM của Java) không thực thi thẳng AST mà sinh mã trung gian <span class="studio-term">Bytecode (Ignition)</span>.</p>
        <p>Nếu một hàm được gọi lặp đi lặp lại hàng nghìn lần (Hot Function), trình biên dịch tối ưu <span class="studio-term">JIT TurboFan</span> sẽ trực tiếp biên dịch Bytecode thành mã máy nhị phân x86-64 siêu tốc độ.</p>
      `,
      keyTakeaway: {
        title: "Tối ưu hóa Hidden Classes",
        body: "V8 tối ưu hóa truy cập thuộc tính object bằng Hidden Classes (Shape). Khởi tạo object với thứ tự thuộc tính cố định giúp mã chạy nhanh hơn gấp 5 lần.",
      },
      telemetry: [
        { id: "jit", label: "Trạng thái JIT", value: "Hot / Optimized", level: "good", iconName: "activity" },
        { id: "turbo", label: "TurboFan Native Code", value: "x86-64 asm", level: "blue", iconName: "cpu" },
        { id: "speedup", label: "Gia tốc Tốc độ", value: "8.5x Native", level: "good", iconName: "zap" },
        { id: "deopt", label: "Tỷ lệ De-optimize", value: "0%", level: "good", iconName: "shield" },
      ],
      checklistItems: [
        { id: "c503", text: "Nắm vững cơ chế hoạt động của JIT Compiler (Ignition + TurboFan)." },
        { id: "c504", text: "Tránh thay đổi shape của đối tượng gây de-optimization." },
      ],
      nextButtonLabel: "Stack, Heap & Bộ Nhớ",
    },
    {
      id: "step-5-3",
      number: 3,
      title: "Bộ nhớ Stack vs Heap",
      category: "LÝ THUYẾT",
      categoryColor: "violet",
      headline: "Quản lý Call Stack, Con trỏ và Vùng nhớ Heap",
      bodyHtml: `
        <p>Khi hàm thực thi trên CPU:</p>
        <p>1. <strong>Stack Memory:</strong> Lưu các biến nguyên thủy (numbers, booleans) và khung ngăn xếp (Stack Frames). Giải phóng tức thì khi hàm kết thúc (O(1)).</p>
        <p>2. <strong>Heap Memory:</strong> Lưu các đối tượng kích thước động (Objects, Arrays). Được quản lý và dọn dẹp bởi <span class="studio-term">Garbage Collector (GC)</span>.</p>
      `,
      keyTakeaway: {
        title: "Hiểm họa Memory Leak",
        body: "Quên hủy lắng nghe sự kiện (Event Listeners) hoặc giữ tham chiếu trong Closure vô tình biến đối tượng Heap thành 'bất tử', khiến RAM phình to và sập máy chủ Node.js.",
      },
      telemetry: [
        { id: "stack", label: "Dung lượng Stack", value: "256 KB (An toàn)", level: "good", iconName: "layers" },
        { id: "heap", label: "Dung lượng Heap", value: "142 MB", level: "blue", iconName: "database" },
        { id: "gc", label: "Chu kỳ Thu gom rác", value: "Minor GC 2ms", level: "good", iconName: "clock" },
        { id: "leak", label: "Memory Leak", value: "0 bytes", level: "good", iconName: "shield" },
      ],
      checklistItems: [
        { id: "c505", text: "Phân biệt bản chất truy cập vùng nhớ Stack và Heap." },
        { id: "c506", text: "Áp dụng cấu trúc WeakMap/WeakSet để chống rò rỉ bộ nhớ." },
      ],
      nextButtonLabel: "Tổng Kết Runtime",
    },
    {
      id: "step-5-4",
      number: 4,
      title: "Tổng kết Kỹ sư Hệ thống",
      category: "TỐI ƯU",
      categoryColor: "emerald",
      headline: "Viết code thân thiện với CPU & Trình biên dịch",
      bodyHtml: `
        <p>Hiểu sâu về Compiler và Runtime giúp bạn vượt lên trên tư duy của một coder bình thường:</p>
        <p>1. Biết tại sao vòng lặp duyệt mảng liên tục (Cache-friendly) chạy nhanh gấp 10 lần duyệt danh sách liên kết.</p>
        <p>2. Tự tin debug các lỗi khó như Call Stack Overflow, Out of Memory (OOM) và Event Loop Starvation trong môi trường Production.</p>
      `,
      keyTakeaway: {
        title: "Tư duy Phần cứng",
        body: "Dù viết bằng TypeScript, Go hay Java, mã nguồn cuối cùng đều phải biến thành nhịp xung điện trong thanh ghi CPU. Tôn trọng cách CPU vận hành là bí quyết của phần mềm đỉnh cao.",
      },
      telemetry: [
        { id: "cache", label: "L1/L2 Cache Hit", value: "98.2%", level: "good", iconName: "cpu" },
        { id: "eventloop", label: "Event Loop Lag", value: "0.8 ms", level: "good", iconName: "clock" },
        { id: "throughput", label: "Tốc độ Tính toán", value: "1.2M ops/s", level: "blue", iconName: "activity" },
        { id: "status", label: "Đánh giá Hiệu năng", value: "TỐI ƯU", level: "good", iconName: "shield" },
      ],
      checklistItems: [
        { id: "c507", text: "Hoàn tất bài học Nền tảng về Trình biên dịch & Runtime." },
      ],
      nextButtonLabel: "Hoàn Thành Chuyên Đề",
    },
  ],
};

// ============================================================================
// 6. ALL STUDIO LESSONS REGISTRY MAP
// ============================================================================
export const allStudioLessons: Record<string, StudioLesson> = {
  "latency-throughput-oms": lessonLatencyThroughput,
  "data-modeling-erd": lessonDataModeling3NF,
  "rest-api-contracts": lessonRestApiContracts,
  "bpmn-process-modeling": lessonBpmnProcessModeling,
  "compiler-execution-pipeline": lessonCompilerRuntime,
};

// Default export
export const sampleLessonData: StudioLesson = lessonLatencyThroughput;

// ============================================================================
// 7. STUDIO CONCEPTS DATA (SEARCH ⌘K)
// ============================================================================
export const sampleConceptsData: StudioConcept[] = [
  // Module 01
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
  // Module 02
  {
    id: "con-6",
    term: "1NF (First Normal Form)",
    category: "Cơ Sở Dữ Liệu",
    definition: "Dạng chuẩn 1 yêu cầu mọi thuộc tính trong bảng phải chứa giá trị nguyên tố (Atomic), không có lặp nhóm hay danh sách mảng.",
    lessonSlug: "data-modeling-erd",
    stepIndex: 1,
  },
  {
    id: "con-7",
    term: "2NF (Second Normal Form)",
    category: "Cơ Sở Dữ Liệu",
    definition: "Dạng chuẩn 2 đạt 1NF và loại bỏ mọi phụ thuộc hàm bộ phận vào khóa kết hợp.",
    lessonSlug: "data-modeling-erd",
    stepIndex: 2,
  },
  {
    id: "con-8",
    term: "3NF (Third Normal Form)",
    category: "Cơ Sở Dữ Liệu",
    definition: "Dạng chuẩn 3 đạt 2NF và loại bỏ hoàn toàn các phụ thuộc hàm bắc cầu (Transitive Dependencies).",
    lessonSlug: "data-modeling-erd",
    stepIndex: 3,
  },
  {
    id: "con-9",
    term: "Pessimistic Locking (Khóa bi quan)",
    category: "Cơ Sở Dữ Liệu",
    definition: "Cơ chế khóa dòng dữ liệu SELECT ... FOR UPDATE ngay khi bắt đầu giao dịch để ngăn chặn hoàn toàn tranh chấp ghi dữ liệu đồng thời.",
    lessonSlug: "data-modeling-erd",
    stepIndex: 4,
  },
  // Module 03
  {
    id: "con-10",
    term: "OpenAPI 3.0",
    category: "Backend API",
    definition: "Tiêu chuẩn đặc tả kỹ thuật độc lập ngôn ngữ dùng để mô tả đầy đủ các RESTful API phục vụ tự động hóa tài liệu và sinh mã nguồn.",
    lessonSlug: "rest-api-contracts",
    stepIndex: 0,
  },
  {
    id: "con-11",
    term: "JWT (JSON Web Token)",
    category: "Bảo Mật",
    definition: "Chuẩn mở định dạng mã hóa chữ ký số nhỏ gọn cho phép truyền tải thông tin an toàn giữa các bên dưới dạng JSON phi trạng thái.",
    lessonSlug: "rest-api-contracts",
    stepIndex: 1,
  },
  {
    id: "con-12",
    term: "RFC 7807 Problem Details",
    category: "Backend API",
    definition: "Định dạng JSON chuẩn hóa cấu trúc thông báo lỗi trong HTTP API, giúp tăng tính minh bạch và giảm thời gian tra cứu sự cố.",
    lessonSlug: "rest-api-contracts",
    stepIndex: 3,
  },
  // Module 04
  {
    id: "con-13",
    term: "BPMN 2.0 (Business Process Model and Notation)",
    category: "Phân Tích Nghiệp Vụ",
    definition: "Ký hiệu đồ họa chuẩn quốc tế mô hình hóa các bước trong quy trình kinh doanh từ góc nhìn người dùng và hệ thống phần mềm.",
    lessonSlug: "bpmn-process-modeling",
    stepIndex: 0,
  },
  {
    id: "con-14",
    term: "Exclusive Gateway (XOR)",
    category: "Phân Tích Nghiệp Vụ",
    definition: "Điểm rẽ nhánh điều kiện trong BPMN chỉ cho phép luồng quy trình đi theo đúng một nhánh duy nhất thỏa mãn điều kiện.",
    lessonSlug: "bpmn-process-modeling",
    stepIndex: 1,
  },
  {
    id: "con-15",
    term: "Swimlanes (Làn bơi)",
    category: "Phân Tích Nghiệp Vụ",
    definition: "Cơ chế phân vùng trực quan trong BPMN dùng để phân định rõ ràng trách nhiệm của từng cá nhân, vai trò hoặc phòng ban nghiệp vụ.",
    lessonSlug: "bpmn-process-modeling",
    stepIndex: 0,
  },
  // Module 05
  {
    id: "con-16",
    term: "AST (Abstract Syntax Tree)",
    category: "Kiến Trúc Ngôn Ngữ",
    definition: "Cấu trúc dữ liệu hình cây biểu diễn cú pháp phân cấp của mã nguồn phần mềm sau khi được phân tích cú pháp bởi Parser.",
    lessonSlug: "compiler-execution-pipeline",
    stepIndex: 0,
  },
  {
    id: "con-17",
    term: "JIT Compiler (Just-In-Time)",
    category: "Kiến Trúc Ngôn Ngữ",
    definition: "Kỹ thuật biên dịch mã trung gian Bytecode thành mã máy nhị phân trực tiếp trong lúc chương trình đang chạy để tối ưu tốc độ.",
    lessonSlug: "compiler-execution-pipeline",
    stepIndex: 1,
  },
  {
    id: "con-18",
    term: "Call Stack (Ngăn xếp cuộc gọi)",
    category: "Kiến Trúc Ngôn Ngữ",
    definition: "Cơ chế cấu trúc dữ liệu theo nguyên tắc LIFO của luồng thực thi để ghi nhớ vị trí hàm đang được gọi và các biến cục bộ.",
    lessonSlug: "compiler-execution-pipeline",
    stepIndex: 2,
  },
];
