import type { StudioConcept, StudioLesson } from "./studio.types";
import {
  allStudioLessons as importedAllLessons,
  allStudioLessonsList,
  sampleLessonData as importedSampleLesson,
} from "./data/index";

export { studioModulesData } from "./data/index";

// Export full list of 40 lessons + backwards compatibility aliases
export const allStudioLessons: Record<string, StudioLesson> = {
  ...importedAllLessons,
  // Backward compatibility aliases for portfolio deep-links
  "latency-throughput-oms": importedAllLessons["latency-throughput"] || allStudioLessonsList[1],
  "database-fundamentals": importedAllLessons["sql-nosql"] || allStudioLessonsList[8],
  "rest-api-contracts": importedAllLessons["apis"] || allStudioLessonsList[19],
  "bpmn-process-modeling": importedAllLessons["sagas"] || allStudioLessonsList[29],
  "compiler-execution-pipeline": importedAllLessons["testing"] || allStudioLessonsList[34],
};

export const sampleLessonData: StudioLesson =
  allStudioLessons["request-lifecycle"] || importedSampleLesson;

// Comprehensive architectural concepts glossary for studio search and guide rails
export const sampleConceptsData: StudioConcept[] = [
  // Module 01: Foundations
  {
    id: "con-01",
    term: "RTT (Round Trip Time)",
    category: "Mạng & Giao Vận",
    definition: "Khoảng thời gian cần thiết để một gói tin đi từ máy gửi tới máy nhận và nhận lại phản hồi xác nhận qua mạng Internet.",
    lessonSlug: "request-lifecycle",
    stepIndex: 1,
  },
  {
    id: "con-02",
    term: "Độ Trễ P99 (P99 Latency)",
    category: "Chỉ Số SLA",
    definition: "Mức thời gian phản hồi mà 99% các yêu cầu đều nhanh hơn nó, đo lường chính xác trải nghiệm người dùng trong trường hợp bất lợi nhất.",
    lessonSlug: "latency-throughput",
    stepIndex: 2,
  },
  {
    id: "con-03",
    term: "Quy Tắc Ước Tính Nhanh (Napkin Math)",
    category: "Năng Lực Kỹ Sư",
    definition: "Kỹ năng tính nhẩm băng thông, dung lượng lưu trữ và số lượng máy chủ trên góc khăn ăn trong vài phút trước khi viết dòng code đầu tiên.",
    lessonSlug: "napkin-math",
    stepIndex: 0,
  },

  // Module 02: Scaling
  {
    id: "con-04",
    term: "Horizontal Scaling (Mở rộng ngang)",
    category: "Kiến Trúc Mở Rộng",
    definition: "Tăng năng lực xử lý bằng cách bổ sung nhiều máy chủ nhỏ làm việc song song, thay vì nâng cấp phần cứng của một máy tính đơn lẻ.",
    lessonSlug: "vertical-horizontal",
    stepIndex: 1,
  },
  {
    id: "con-05",
    term: "Cân Bằng Tải (Load Balancer)",
    category: "Hạ Tầng Phân Tán",
    definition: "Thành phần mạng điều phối lưu lượng truy cập đồng đều đến các máy chủ ứng dụng theo các thuật toán Round Robin, Least Connections.",
    lessonSlug: "load-balancing",
    stepIndex: 0,
  },
  {
    id: "con-06",
    term: "Kiến Trúc Không Trạng Thái (Stateless)",
    category: "Thiết Kế Ứng Dụng",
    definition: "Nguyên tắc thiết kế máy chủ không lưu giữ session người dùng trong RAM nội bộ, cho phép mọi yêu cầu được chuyển tới bất kỳ máy chủ nào.",
    lessonSlug: "stateless",
    stepIndex: 0,
  },
  {
    id: "con-07",
    term: "Bộ Nhớ Đệm Phân Tán (Redis Cache)",
    category: "Tối Ưu Hiệu Năng",
    definition: "Lớp lưu trữ dữ liệu truy cập thường xuyên trên RAM, giúp giảm tải trực tiếp cho cơ sở dữ liệu quan hệ xuống dưới 5ms.",
    lessonSlug: "caching",
    stepIndex: 1,
  },
  {
    id: "con-08",
    term: "Mạng Phân Phối Nội Dung (CDN)",
    category: "Mạng Ngoại Vi",
    definition: "Mạng lưới máy chủ biên phân bố toàn cầu để lưu trữ tệp tĩnh (hình ảnh, video, CSS) gần người dùng nhất có thể.",
    lessonSlug: "cdn",
    stepIndex: 0,
  },

  // Module 03: Data & Storage
  {
    id: "con-09",
    term: "Chuẩn Hóa 3NF (Third Normal Form)",
    category: "Cơ Sở Dữ Liệu",
    definition: "Quy chuẩn thiết kế quan hệ triệt tiêu mọi phụ thuộc bắc cầu, đảm bảo tính toàn vẹn và ngăn chặn dị thường chèn, sửa, xóa.",
    lessonSlug: "sql-nosql",
    stepIndex: 1,
  },
  {
    id: "con-10",
    term: "Chỉ Mục B-Tree (B-Tree Index)",
    category: "Tối Ưu Truy Vấn",
    definition: "Cấu trúc dữ liệu cây tự cân bằng cho phép tra cứu, tìm kiếm theo khoảng và sắp xếp dữ liệu với độ phức tạp thời gian O(log N).",
    lessonSlug: "indexes",
    stepIndex: 0,
  },
  {
    id: "con-11",
    term: "LSM-Tree & WAL (Write-Ahead Log)",
    category: "Storage Engine",
    definition: "Cơ chế tối ưu hóa ghi tuần tự vào đĩa cứng (append-only) trước khi gộp dữ liệu, phổ biến trong Cassandra, RocksDB.",
    lessonSlug: "storage-engines",
    stepIndex: 1,
  },
  {
    id: "con-12",
    term: "Nhân Bản Dữ Liệu (Read Replicas)",
    category: "Khả Năng Phục Vụ",
    definition: "Tạo nhiều bản sao cơ sở dữ liệu chỉ đọc từ Master node qua cơ chế đồng bộ Binlog để chia sẻ tải truy vấn đọc khổng lồ.",
    lessonSlug: "replication",
    stepIndex: 0,
  },
  {
    id: "con-13",
    term: "Phân Mảnh Dữ Liệu (Sharding)",
    category: "Quy Mô Dữ Liệu",
    definition: "Chia nhỏ cơ sở dữ liệu lớn thành nhiều phần độc lập (shards) đặt trên nhiều máy chủ theo Shard Key như User ID hay Region.",
    lessonSlug: "sharding",
    stepIndex: 0,
  },
  {
    id: "con-14",
    term: "Băm Nhất Quán (Consistent Hashing)",
    category: "Thuật Toán Phân Tán",
    definition: "Kỹ thuật phân bổ dữ liệu trên vòng tròn băm 360 độ giúp giảm thiểu việc di chuyển dữ liệu khi thêm hoặc bớt một máy chủ lưu trữ.",
    lessonSlug: "consistent-hashing",
    stepIndex: 0,
  },
  {
    id: "con-15",
    term: "Định Danh Toàn Cầu (Snowflake ID)",
    category: "Thiết Kế Khóa",
    definition: "Thuật toán sinh khóa chính 64-bit phân tán duy nhất theo thời gian (Timestamp + Worker ID + Sequence), không phụ thuộc Auto-increment.",
    lessonSlug: "unique-ids",
    stepIndex: 0,
  },
  {
    id: "con-16",
    term: "Định Lý CAP (Consistency, Availability, Partition Tolerance)",
    category: "Lý Thuyết Phân Tán",
    definition: "Nguyên lý khẳng định một hệ thống phân tán chỉ có thể đảm bảo tối đa hai trong ba tính chất: Nhất quán, Sẵn sàng và Chịu lỗi chia cắt.",
    lessonSlug: "cap",
    stepIndex: 0,
  },
  {
    id: "con-17",
    term: "Đồng Thuận Phân Tán (Raft Consensus)",
    category: "Giao Thức Đồng Thuận",
    definition: "Giao thức bầu chọn Leader và sao chép Log phân tán an toàn, dễ hiểu, được áp dụng trong Kubernetes etcd và Consul.",
    lessonSlug: "consensus",
    stepIndex: 1,
  },
  {
    id: "con-18",
    term: "Giao Dịch ACID (Atomicity, Consistency, Isolation, Durability)",
    category: "Toàn Vẹn Dữ Liệu",
    definition: "Bốn thuộc tính cốt lõi bảo đảm giao dịch cơ sở dữ liệu được xử lý tin cậy và không bao giờ để lại trạng thái dở dang.",
    lessonSlug: "transactions",
    stepIndex: 0,
  },

  // Module 04: Communication
  {
    id: "con-19",
    term: "Idempotency Key (Khóa Bất Biến)",
    category: "Giao Tiếp API",
    definition: "Giá trị định danh duy nhất gửi kèm HTTP header ngăn chặn việc xử lý đơn hàng hay thanh toán bị lặp lại khi mạng chập chờn.",
    lessonSlug: "apis",
    stepIndex: 2,
  },
  {
    id: "con-20",
    term: "Hàng Đợi Thông Điệp (Message Queue)",
    category: "Bất Đồng Bộ",
    definition: "Hạ tầng trung chuyển hấp thụ lưu lượng đỉnh cao điểm, phân tách trực tiếp giữa bên gửi (Producer) và bên xử lý (Consumer).",
    lessonSlug: "queues",
    stepIndex: 0,
  },
  {
    id: "con-21",
    term: "Mô Hình Xuất Bản - Đăng Ký (Pub/Sub)",
    category: "Sự Kiện Phân Tán",
    definition: "Mô hình kiến trúc thông điệp một-nhiều, nơi người phát hành không cần biết người nhận là ai, nâng cao tính độc lập của dịch vụ.",
    lessonSlug: "pubsub",
    stepIndex: 0,
  },
  {
    id: "con-22",
    term: "Kết Nối Hai Chiều (WebSocket)",
    category: "Thời Gian Thực",
    definition: "Giao thức truyền thông toàn song công (full-duplex) qua một kết nối TCP duy nhất, lý tưởng cho chat và theo dõi tọa độ logistics.",
    lessonSlug: "realtime",
    stepIndex: 0,
  },

  // Module 05: Reliability
  {
    id: "con-23",
    term: "Chống Nghẽn Hạn Chế Tải (Rate Limiting)",
    category: "Độ Tin Cậy",
    definition: "Cơ chế bảo vệ hệ thống khỏi tấn công DoS và quá tải đột ngột bằng các thuật toán Token Bucket hoặc Leaky Bucket.",
    lessonSlug: "rate-limiting",
    stepIndex: 0,
  },
  {
    id: "con-24",
    term: "Ngắt Mạch Tự Động (Circuit Breaker)",
    category: "Khả Năng Phục Hồi",
    definition: "Mẫu thiết kế phát hiện lỗi tầng dưới và ngắt mạch tức thì, chuyển hướng sang dữ liệu tạm để tránh hiệu ứng sụp đổ dây chuyền.",
    lessonSlug: "timeouts-retries",
    stepIndex: 1,
  },
  {
    id: "con-25",
    term: "Quan Sát Toàn Diện (Observability)",
    category: "Vận Hành Hạ Tầng",
    definition: "Bộ ba giám sát phân tán: Metrics (Prometheus), Logs (ELK) và Traces (OpenTelemetry/Jaeger) giúp định vị nguyên nhân gốc rễ sự cố.",
    lessonSlug: "observability",
    stepIndex: 0,
  },

  // Module 06: Architecture
  {
    id: "con-26",
    term: "Kiến Trúc Microservices",
    category: "Mô Hình Dịch Vụ",
    definition: "Cách tiếp cận kiến trúc chia nhỏ ứng dụng thành các dịch vụ độc lập, mỗi dịch vụ sở hữu cơ sở dữ liệu riêng và giao tiếp qua API/Event.",
    lessonSlug: "microservices",
    stepIndex: 0,
  },
  {
    id: "con-27",
    term: "Mô Hình Saga (Saga Pattern)",
    category: "Giao Dịch Phân Tán",
    definition: "Chuỗi các giao dịch cục bộ độc lập phối hợp qua sự kiện, tự động kích hoạt các giao dịch bù trừ (Compensating) khi có bước thất bại.",
    lessonSlug: "sagas",
    stepIndex: 0,
  },

  // Module 07: Security
  {
    id: "con-28",
    term: "JSON Web Token (JWT)",
    category: "Bảo Mật Xác Thực",
    definition: "Chuỗi mã hóa mang thông tin xác thực không trạng thái (Stateless Authentication) được ký số bằng thuật toán RSA-256 hoặc HMAC.",
    lessonSlug: "authentication",
    stepIndex: 0,
  },
  {
    id: "con-29",
    term: "Kiểm Soát Quyền Theo Vai Trò (RBAC)",
    category: "Phân Quyền Truy Cập",
    definition: "Phương pháp giới hạn quyền truy cập tài nguyên hệ thống dựa trên vai trò của từng người dùng trong tổ chức doanh nghiệp.",
    lessonSlug: "authorization",
    stepIndex: 0,
  },

  // Module 08: Shipping
  {
    id: "con-30",
    term: "Kim Tự Tháp Kiểm Thử (Testing Pyramid)",
    category: "Đảm Bảo Chất Lượng",
    definition: "Mô hình chiến lược kiểm thử phần mềm gồm nhiều Unit Tests ở đáy, số lượng vừa phải Integration Tests ở giữa và ít E2E Tests trên đỉnh.",
    lessonSlug: "testing",
    stepIndex: 0,
  },
  {
    id: "con-31",
    term: "Đường Ống CI/CD (Continuous Integration/Deployment)",
    category: "DevOps & Tự Động Hóa",
    definition: "Quy trình tự động hóa toàn bộ việc kiểm tra mã nguồn, chạy bộ test, đóng gói container và triển khai lên hạ tầng sản xuất.",
    lessonSlug: "cicd",
    stepIndex: 0,
  },

  // Module 09: Whole Systems
  {
    id: "con-32",
    term: "Thiết Kế Hệ Thống Rút Gọn Link (URL Shortener)",
    category: "Bài Toán Thiết Kế",
    definition: "Kiến trúc xử lý đọc siêu cao với Base62 Encoding, Redis Caching, và cơ chế chuyển hướng HTTP 301 Permanent vs 302 Found.",
    lessonSlug: "design-url-shortener",
    stepIndex: 0,
  },
  {
    id: "con-33",
    term: "Thiết Kế Bản Tin (News Feed Fanout-on-Write)",
    category: "Bài Toán Thiết Kế",
    definition: "Kỹ thuật nhân bản bài đăng vào hàng đợi nhận tin của toàn bộ người theo dõi ngay khi tác giả ấn đăng bài, tối ưu tốc độ đọc.",
    lessonSlug: "design-news-feed",
    stepIndex: 0,
  },
  {
    id: "con-34",
    term: "Thiết Kế Hệ Thống Chat Thời Gian Thực",
    category: "Bài Toán Thiết Kế",
    definition: "Kiến trúc kết hợp WebSocket Server Session Cluster, Apache Kafka Event Bus và Cassandra NoSQL cho lịch sử tin nhắn hàng tỷ dòng.",
    lessonSlug: "design-chat",
    stepIndex: 0,
  },
];
