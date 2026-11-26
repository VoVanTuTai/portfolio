import type { StudioModule } from "../studio.types";

export const studioModulesData: StudioModule[] = [
  {
    "id": "mod-01",
    "code": "01",
    "title": "Nền Tảng Kỹ Sư Hệ Thống (Foundations)",
    "color": "#d97706",
    "lessons": [
      {
        "id": "01.1",
        "slug": "request-lifecycle",
        "title": "Hành trình của một yêu cầu",
        "durationMinutes": 10,
        "completed": true,
        "isActive": false
      },
      {
        "id": "01.2",
        "slug": "latency-throughput",
        "title": "Độ trễ & thông lượng",
        "durationMinutes": 11,
        "completed": false,
        "isActive": true
      },
      {
        "id": "01.3",
        "slug": "napkin-math",
        "title": "Tính nhẩm nhanh",
        "durationMinutes": 10,
        "completed": false,
        "isActive": false
      }
    ]
  },
  {
    "id": "mod-02",
    "code": "02",
    "title": "Mở Rộng Quy Mô & Cân Bằng Tải (Scaling)",
    "color": "#059669",
    "lessons": [
      {
        "id": "02.1",
        "slug": "vertical-horizontal",
        "title": "Mở rộng theo chiều dọc hay chiều ngang",
        "durationMinutes": 11,
        "completed": false,
        "isActive": false
      },
      {
        "id": "02.2",
        "slug": "load-balancing",
        "title": "Cân bằng tải",
        "durationMinutes": 12,
        "completed": false,
        "isActive": false
      },
      {
        "id": "02.3",
        "slug": "stateless",
        "title": "Dịch vụ phi trạng thái",
        "durationMinutes": 10,
        "completed": false,
        "isActive": false
      },
      {
        "id": "02.4",
        "slug": "caching",
        "title": "Caching",
        "durationMinutes": 14,
        "completed": false,
        "isActive": false
      },
      {
        "id": "02.5",
        "slug": "cdn",
        "title": "Phân phối nội dung",
        "durationMinutes": 10,
        "completed": false,
        "isActive": false
      }
    ]
  },
  {
    "id": "mod-03",
    "code": "03",
    "title": "Dữ Liệu & Lưu Trữ Phân Tán (Data & Storage)",
    "color": "#7c3aed",
    "lessons": [
      {
        "id": "03.1",
        "slug": "sql-nosql",
        "title": "SQL hay NoSQL",
        "durationMinutes": 11,
        "completed": false,
        "isActive": false
      },
      {
        "id": "03.2",
        "slug": "indexes",
        "title": "Indexes",
        "durationMinutes": 12,
        "completed": false,
        "isActive": false
      },
      {
        "id": "03.3",
        "slug": "storage-engines",
        "title": "Storage engine",
        "durationMinutes": 14,
        "completed": false,
        "isActive": false
      },
      {
        "id": "03.4",
        "slug": "replication",
        "title": "Replication",
        "durationMinutes": 12,
        "completed": false,
        "isActive": false
      },
      {
        "id": "03.5",
        "slug": "sharding",
        "title": "Sharding",
        "durationMinutes": 11,
        "completed": false,
        "isActive": false
      },
      {
        "id": "03.6",
        "slug": "consistent-hashing",
        "title": "Consistent hashing",
        "durationMinutes": 10,
        "completed": false,
        "isActive": false
      },
      {
        "id": "03.7",
        "slug": "unique-ids",
        "title": "ID duy nhất ở quy mô lớn",
        "durationMinutes": 13,
        "completed": false,
        "isActive": false
      },
      {
        "id": "03.8",
        "slug": "cap",
        "title": "CAP & tính nhất quán",
        "durationMinutes": 12,
        "completed": false,
        "isActive": false
      },
      {
        "id": "03.9",
        "slug": "consensus",
        "title": "Đồng thuận & bầu leader",
        "durationMinutes": 14,
        "completed": false,
        "isActive": false
      },
      {
        "id": "03.10",
        "slug": "transactions",
        "title": "Giao dịch & cô lập",
        "durationMinutes": 14,
        "completed": false,
        "isActive": false
      },
      {
        "id": "03.11",
        "slug": "files",
        "title": "Tệp & đa phương tiện",
        "durationMinutes": 14,
        "completed": false,
        "isActive": false
      }
    ]
  },
  {
    "id": "mod-04",
    "code": "04",
    "title": "Giao Tiếp & Hàng Đợi Bất Đồng Bộ (Communication)",
    "color": "#ea580c",
    "lessons": [
      {
        "id": "04.1",
        "slug": "apis",
        "title": "REST, RPC & GraphQL",
        "durationMinutes": 11,
        "completed": false,
        "isActive": false
      },
      {
        "id": "04.2",
        "slug": "queues",
        "title": "Hàng đợi tin nhắn",
        "durationMinutes": 12,
        "completed": false,
        "isActive": false
      },
      {
        "id": "04.3",
        "slug": "pubsub",
        "title": "Pub/Sub & sự kiện",
        "durationMinutes": 10,
        "completed": false,
        "isActive": false
      },
      {
        "id": "04.4",
        "slug": "realtime",
        "title": "Cập nhật thời gian thực",
        "durationMinutes": 11,
        "completed": false,
        "isActive": false
      }
    ]
  },
  {
    "id": "mod-05",
    "code": "05",
    "title": "Độ Tin Cậy & Chống Chịu Lỗi (Reliability)",
    "color": "#2563eb",
    "lessons": [
      {
        "id": "05.1",
        "slug": "redundancy",
        "title": "Dự phòng & failover",
        "durationMinutes": 12,
        "completed": false,
        "isActive": false
      },
      {
        "id": "05.2",
        "slug": "rate-limiting",
        "title": "Giới hạn tốc độ",
        "durationMinutes": 10,
        "completed": false,
        "isActive": false
      },
      {
        "id": "05.3",
        "slug": "timeouts-retries",
        "title": "Timeout & thử lại",
        "durationMinutes": 11,
        "completed": false,
        "isActive": false
      },
      {
        "id": "05.4",
        "slug": "observability",
        "title": "Observability",
        "durationMinutes": 11,
        "completed": false,
        "isActive": false
      }
    ]
  },
  {
    "id": "mod-06",
    "code": "06",
    "title": "Kiến Trúc Microservices Doanh Nghiệp (Architecture)",
    "color": "#0d9488",
    "lessons": [
      {
        "id": "06.1",
        "slug": "microservices",
        "title": "Monolith hay microservice",
        "durationMinutes": 14,
        "completed": false,
        "isActive": false
      },
      {
        "id": "06.2",
        "slug": "service-discovery",
        "title": "Khám phá dịch vụ & gateway",
        "durationMinutes": 13,
        "completed": false,
        "isActive": false
      },
      {
        "id": "06.3",
        "slug": "sagas",
        "title": "Saga & giao dịch phân tán",
        "durationMinutes": 13,
        "completed": false,
        "isActive": false
      },
      {
        "id": "06.4",
        "slug": "batch-stream",
        "title": "Xử lý theo lô & luồng",
        "durationMinutes": 15,
        "completed": false,
        "isActive": false
      }
    ]
  },
  {
    "id": "mod-07",
    "code": "07",
    "title": "Bảo Mật & Xác Thực Phân Quyền (Security)",
    "color": "#e11d48",
    "lessons": [
      {
        "id": "07.1",
        "slug": "authentication",
        "title": "Authentication",
        "durationMinutes": 13,
        "completed": false,
        "isActive": false
      },
      {
        "id": "07.2",
        "slug": "authorization",
        "title": "Authorization",
        "durationMinutes": 13,
        "completed": false,
        "isActive": false
      },
      {
        "id": "07.3",
        "slug": "encryption",
        "title": "Mã hóa & bí mật",
        "durationMinutes": 13,
        "completed": false,
        "isActive": false
      }
    ]
  },
  {
    "id": "mod-08",
    "code": "08",
    "title": "Vận Hành & Tự Động Hóa CI/CD (Shipping)",
    "color": "#65a30d",
    "lessons": [
      {
        "id": "08.1",
        "slug": "testing",
        "title": "Testing",
        "durationMinutes": 12,
        "completed": false,
        "isActive": false
      },
      {
        "id": "08.2",
        "slug": "cicd",
        "title": "CI/CD & triển khai",
        "durationMinutes": 13,
        "completed": false,
        "isActive": false
      }
    ]
  },
  {
    "id": "mod-09",
    "code": "09",
    "title": "Thiết Kế Hệ Thống Toàn Diện (Whole Systems)",
    "color": "#475569",
    "lessons": [
      {
        "id": "09.1",
        "slug": "hld-lld",
        "title": "HLD & LLD",
        "durationMinutes": 8,
        "completed": false,
        "isActive": false
      },
      {
        "id": "09.2",
        "slug": "design-url-shortener",
        "title": "Thiết kế dịch vụ rút gọn URL",
        "durationMinutes": 14,
        "completed": false,
        "isActive": false
      },
      {
        "id": "09.3",
        "slug": "design-news-feed",
        "title": "Thiết kế news feed",
        "durationMinutes": 14,
        "completed": false,
        "isActive": false
      },
      {
        "id": "09.4",
        "slug": "design-chat",
        "title": "Thiết kế một hệ thống chat",
        "durationMinutes": 14,
        "completed": false,
        "isActive": false
      }
    ]
  }
];
