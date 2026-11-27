export interface TheoryConcept {
  id: string;
  badge: { vi: string; en: string };
  category: { vi: string; en: string };
  academicStandard: string;
  title: { vi: string; en: string };
  lead: { vi: string; en: string };
  body: { vi: string; en: string };
  formulaOrCode?: string;
  keyTakeaways: { vi: string[]; en: string[] };
}

export const ACADEMIC_THEORY_CONCEPTS: Record<string, TheoryConcept> = {
  // 1. HUB-AND-SPOKE TOPOLOGY
  "concept-hub-and-spoke": {
    id: "concept-hub-and-spoke",
    badge: { vi: "MẠNG LƯỚI LOGISTICS", en: "NETWORK TOPOLOGY" },
    category: { vi: "Tối Ưu Vận Tải", en: "Logistics Optimization" },
    academicStandard: "Operations Research · Campbell & O'Kelly (1998)",
    title: {
      vi: "Mô Hình Hub-and-Spoke & Gom Tải Quy Mô",
      en: "Hub-and-Spoke Topology & Consolidation",
    },
    lead: {
      vi: "Giảm độ phức tạp kết nối từ O(N²) xuống O(N) qua các trung tâm gom hàng tập trung.",
      en: "Optimizes routing complexity from O(N²) down to O(N) via centralized hubs.",
    },
    body: {
      vi: "• Bài toán: N trạm bưu cục đòi hỏi N*(N-1)/2 tuyến xe trực tiếp, tỷ lệ lấp đầy thùng xe < 35%.\n• Cơ chế: Các bưu cục vệ tinh (Spokes) dồn bưu kiện về 3 Hub Tổng (HN, ĐN, HCM) để phân loại tự động.\n• Hiệu quả: Tỷ lệ lấp đầy xe tải trục > 88%, giảm 40% chi phí nhiên liệu toàn mạng lưới.",
      en: "• Problem: N branches require N*(N-1)/2 direct transit links; vehicle load factor < 35%.\n• Mechanism: Spokes route parcels to 3 Mega Hubs for automated sorting into bulk linehaul.\n• Result: Truck load factor > 88%, cutting linehaul fuel expenditure by 40%.",
    },
    formulaOrCode: `// So sánh độ phức tạp kết nối:
Point-to-Point: E_p2p = N * (N - 1) / 2  // 22 trạm: 231 tuyến xe!
Hub-and-Spoke:  E_hns = N + K            // 22 trạm, 3 Hub: chỉ 25 tuyến trục.

// Tỷ lệ lấp đầy tải: Load_Factor = Vol_Goods / Vol_Truck >= 0.88`,
    keyTakeaways: {
      vi: [
        "Chuyển độ phức tạp điều vận từ bậc 2 (Quadratic) về tuyến tính (Linear).",
        "Tập trung vốn đầu tư máy phân loại tốc độ cao tại 3 Hub thay vì dàn trải.",
        "Thiết lập lịch xe cố định (Fixed Schedule Linehaul) đúng khung giờ.",
      ],
      en: [
        "Shifts fleet coordination complexity from quadratic O(N²) to linear O(N).",
        "Concentrates automated sorting CapEx at strategic consolidation hubs.",
        "Enforces fixed-schedule linehaul truck departures.",
      ],
    },
  },

  // 2. CUT-OFF TIME & SEALING
  "concept-cut-off-time": {
    id: "concept-cut-off-time",
    badge: { vi: "CHU KỲ VẬN HÀNH", en: "OPERATION CYCLE" },
    category: { vi: "Điều Phối Chuỗi Cung Ứng", en: "Supply Chain Scheduling" },
    academicStandard: "APICS SCOR v14.0 · Order Fulfillment",
    title: {
      vi: "Giờ Cắt Ca (Cut-Off Time) & Niêm Phong Seal",
      en: "Cut-Off Time Rigor & Tamper-Proof Sealing",
    },
    lead: {
      vi: "Khóa mốc thời gian xuất bến bất biến nhằm bảo toàn SLA giao hàng toàn mạng lưới.",
      en: "Immutable dispatch time gates guaranteeing network-wide SLA compliance.",
    },
    body: {
      vi: "• Nguyên tắc: Bưu kiện đến sau giờ Cut-off dù 1 giây bắt buộc chuyển sang ca kế tiếp để xe xuất bến đúng giờ.\n• Đóng bao cấp 2: Gom 30-50 bưu kiện vào một bao tổng (Master Bag), gán mã vạch định danh duy nhất.\n• Niêm phong kẹp chì: Khóa seal nhựa có số serial chống gian lận và thất thoát dọc đường.",
      en: "• Policy: Parcels arriving past cut-off defer to next wave to protect outbound linehaul schedules.\n• Level-2 Bagging: Aggregates 30-50 parcels into a sealed master bag with manifest barcode.\n• Security: Tamper-evident serialized seals prevent in-transit pilferage.",
    },
    formulaOrCode: `if (parcel.arrived_at > hub.cutoff_time) {
  parcel.dispatch_wave = NEXT_SHIFT;       // Chuyển ca sau
  audit_log("CUTOFF_DEFERRED", { parcel_id });
} else {
  master_bag.bind(parcel.tracking_code);   // Đóng bao xuất bến
}`,
    keyTakeaways: {
      vi: [
        "Bảo vệ SLA của 99% bưu kiện đúng giờ thay vì chờ đợi 1% bưu kiện trễ.",
        "Quét mã bao tổng 1 lần tương đương kiểm đếm 50 bưu kiện bên trong.",
        "Chuỗi bàn giao trách nhiệm (Chain of Custody) khép kín qua số serial seal.",
      ],
      en: [
        "Guarantees on-time SLA for 99% of scheduled volume.",
        "Single master-bag scan verifies 50 contained parcels simultaneously.",
        "Unbroken chain of custody verified via serialized security seals.",
      ],
    },
  },

  // 3. FSM AUTOMATA
  "concept-fsm-automata": {
    id: "concept-fsm-automata",
    badge: { vi: "MÁY TRẠNG THÁI", en: "AUTOMATA THEORY" },
    category: { vi: "Kỹ Nghệ Phần Mềm", en: "Formal Software Engineering" },
    academicStandard: "Deterministic Finite Automaton (DFA) · Hopcroft et al.",
    title: {
      vi: "Máy Trạng Thái Hữu Hạn Tuyệt Đối (DFA)",
      en: "Deterministic Finite Automata (DFA)",
    },
    lead: {
      vi: "Hàm chuyển dịch δ(S, E) $\to$ S' triệt tiêu 100% tình trạng nhảy cóc trạng thái.",
      en: "State transition function δ(S, E) $\to$ S' eliminating out-of-order state mutations.",
    },
    body: {
      vi: "• Rủi ro hệ thống cũ: Cập nhật UPDATE SQL tùy tiện làm đơn chưa lấy kho đã báo 'Giao thành công'.\n• Kiến trúc DFA: 7 trạng thái cố định. Chỉ cho phép chuyển dịch khi có sự kiện (Event) hợp lệ.\n• Kiểm soát lỗi: Chuyển dịch sai quy chuẩn bị từ chối ngay lập tức (IllegalStateTransitionException).",
      en: "• Risk: Uncontrolled database updates causing parcels to jump from pickup to delivered.\n• DFA Model: 7 discrete states strictly governed by transition matrix δ.\n• Safeguard: Rejects illegal jumps with immediate IllegalStateTransitionException.",
    },
    formulaOrCode: `// DFA Transition Matrix δ:
δ(ORDER_CREATED, Ev_Pickup)       = PICKED_UP
δ(PICKED_UP, Ev_InboundScan)      = AT_ORIGIN_HUB
δ(AT_ORIGIN_HUB, Ev_Delivered)    = ❌ REJECTED (Chặn nhảy cóc!)`,
    keyTakeaways: {
      vi: [
        "Triệt tiêu hoàn toàn lỗi can thiệp sai lệch trạng thái đơn hàng.",
        "Mỗi bước chuyển dịch ghi nhận chữ ký định danh và timestamp chuẩn ISO 8601.",
        "Cơ sở dữ liệu nhật ký kiểm toán bất biến (Immutable Audit Trail).",
      ],
      en: [
        "100% elimination of corrupted out-of-order status mutations.",
        "Every transition logs actor signature and ISO 8601 timestamp.",
        "Produces an immutable audit log for compliance and reconciliation.",
      ],
    },
  },

  // 4. CAMUNDA BPMN 2.0
  "concept-camunda-bpmn": {
    id: "concept-camunda-bpmn",
    badge: { vi: "CHUẨN BPMN 2.0", en: "BPMN 2.0 STANDARD" },
    category: { vi: "Quản Trị Quy Trình", en: "Process Orchestration" },
    academicStandard: "OMG BPMN 2.0 Specification · ISO/IEC 19510",
    title: {
      vi: "Điều Phối Quy Trình Bằng Camunda Engine",
      en: "Camunda BPMN 2.0 Workflow Engine",
    },
    lead: {
      vi: "Tách biệt luồng điều phối nghiệp vụ khỏi mã nguồn ứng dụng (Decoupled Orchestration).",
      en: "Decouples business workflow orchestration from backend application logic.",
    },
    body: {
      vi: "• Thay thế `if-else`: Sử dụng sơ đồ XML BPMN trực quan, kiểm soát tiến trình chạy ngầm qua Zeebe.\n• Chờ không nghẽn: IntermediateCatchEvent đưa tiến trình vào trạng thái ngủ khi xe tải đang trên đường.\n• Kích hoạt tự động: Quét mã tại trạm đích đánh thức tiến trình qua Webhook mà không tốn CPU/RAM.",
      en: "• Replaces if-else spaghetti: Visual BPMN XML executed via Zeebe workflow engine.\n• Non-blocking wait: IntermediateCatchEvents suspend thread execution during transit.\n• Event awakening: Destination barcode scan triggers webhook to resume workflow instantly.",
    },
    formulaOrCode: `<!-- BPMN 2.0 Intermediate Catch Event -->
<bpmn:intermediateCatchEvent id="WaitForGateIn" name="Chờ Xe Về Bến">
  <bpmn:messageEventDefinition messageRef="Msg_TruckArrived" />
</bpmn:intermediateCatchEvent>`,
    keyTakeaways: {
      vi: [
        "Thay đổi quy trình kinh doanh trên sơ đồ mà không cần sửa code backend.",
        "Tự động cảnh báo quá hạn SLA bằng Timer Boundary Events (48h).",
        "Tiết kiệm tài nguyên máy chủ nhờ cơ chế chờ bất đồng bộ không tiêu tốn thread.",
      ],
      en: [
        "Update business flows visually without modifying application code.",
        "Automatic SLA breach escalations via Timer Boundary Events.",
        "Zero-thread idle overhead using asynchronous continuation.",
      ],
    },
  },

  // 5. HAVERSINE & GEOFENCING
  "concept-haversine-rto": {
    id: "concept-haversine-rto",
    badge: { vi: "ĐỊA LÝ KHÔNG GIAN", en: "SPATIAL COMPUTATION" },
    category: { vi: "Tính Toán Không Gian", en: "Spatial Algorithms" },
    academicStandard: "Sinnott (1984) · Great-Circle Haversine Distance",
    title: {
      vi: "Khoảng Cách Haversine & Geofencing Chống Gian Lận",
      en: "Haversine Distance & Anti-Fraud Geofencing",
    },
    lead: {
      vi: "Tính toán khoảng cách mặt cầu chính xác và khoanh vùng địa lý giao hàng bán kính 200m.",
      en: "Great-circle spherical distance computation verifying physical delivery within 200m.",
    },
    body: {
      vi: "• Ngăn gian lận: Bưu tá không thể ngồi ở quán cafe bấm 'Khách không nghe máy' để né chỉ tiêu.\n• Thuật toán Haversine: Tính khoảng cách giữa tọa độ GPS bưu tá và địa chỉ khách hàng trên mặt cầu Trái Đất.\n• Hàng rào 200m: Hệ thống chỉ mở quyền cập nhật trạng thái khi cự ly thực tế d <= 200m.",
      en: "• Anti-fraud: Prevents couriers from falsely reporting failed deliveries while away from location.\n• Haversine formula: Computes great-circle distance between courier GPS and delivery coordinates.\n• 200m Geofence: Mutation endpoints only unlock when verified distance d <= 200m.",
    },
    formulaOrCode: `a = sin²(Δφ/2) + cos(φ1) * cos(φ2) * sin²(Δλ/2)
d = 2 * R * atan2(√a, √(1-a))  // R = 6,371 km

if (d > 200) throw new GeofenceViolationException();`,
    keyTakeaways: {
      vi: [
        "Giảm 94% khiếu nại bưu tá khai báo gian lận lý do không giao hàng.",
        "Thời gian tính toán cực nhanh (< 0.1ms trên mỗi request tọa độ GPS).",
        "Lưu trữ tọa độ kiểm toán minh bạch bảo vệ quyền lợi cả khách hàng và bưu tá.",
      ],
      en: [
        "94% reduction in fraudulent failed delivery claims.",
        "Sub-millisecond spherical calculation (< 0.1ms per request).",
        "Transparent GPS audit trail protecting both customers and couriers.",
      ],
    },
  },

  // 6. SAGA COMPENSATING TRANSACTIONS
  "concept-saga-pattern": {
    id: "concept-saga-pattern",
    badge: { vi: "GIAO DỊCH PHÂN TÁN", en: "DISTRIBUTED TRANSACTIONS" },
    category: { vi: "Kiến Trúc Microservices", en: "Microservices Architecture" },
    academicStandard: "Garcia-Molina & Salem (1987) · Sagas Distributed Consistency",
    title: {
      vi: "Mô Hình Saga & Giao Dịch Bù Trừ Khi Hoàn Hàng (RTO)",
      en: "Saga Pattern & Compensating Transactions for RTO",
    },
    lead: {
      vi: "Đảm bảo tính nhất quán cuối cùng mà không cần dùng khóa phân tán 2-Phase Commit (2PC).",
      en: "Guarantees eventual consistency without blocking 2-Phase Commit (2PC) locks.",
    },
    body: {
      vi: "• Khắc phục 2PC: Trong hệ thống phân tán, khóa 2PC gây tắc nghẽn nghiêm trọng khi có hàng nghìn giao dịch.\n• Chuỗi Saga: Khi đơn hàng giao thất bại và chuyển sang Hoàn hàng (RTO), kích hoạt chuỗi giao dịch bù trừ.\n• Các bước bù trừ: C_1 (Hủy COD) $\to$ C_2 (Cộng phí hoàn hàng cho shop) $\to$ C_3 (Nhập lại tồn kho kho gốc).",
      en: "• Avoids 2PC locks: Eliminates database lock contention across distributed microservices.\n• Saga Chain: When delivery fails and triggers RTO, a sequence of compensating actions executes.\n• Rollback steps: C_1 (Void COD) $\to$ C_2 (Debit return freight) $\to$ C_3 (Restock inventory).",
    },
    formulaOrCode: `// Forward Flow: T1 (Book) -> T2 (Deduct COD) -> T3 (Deliver)
// Compensating Flow on RTO:
Compensate_T2: Refund_COD_Balance();
Compensate_T1: Restock_Hub_Inventory();`,
    keyTakeaways: {
      vi: [
        "Duy trì tính sẵn sàng cao (High Availability) theo định lý CAP.",
        "Khớp tuyệt đối số dư tiền và hàng khi phát sinh hoàn hàng ngoài ý muốn.",
        "Khả năng tự phục hồi (Self-Healing) khi một node dịch vụ gặp sự cố mạng.",
      ],
      en: [
        "Preserves high system availability conforming to CAP theorem.",
        "Guarantees financial balance reconciliation during reverse logistics.",
        "Self-healing architecture resilient against network node outages.",
      ],
    },
  },

  // 7. CAP THEOREM & IDEMPOTENCY
  "concept-cap-theorem": {
    id: "concept-cap-theorem",
    badge: { vi: "ĐỊNH LÝ HỆ THỐNG", en: "DISTRIBUTED THEORY" },
    category: { vi: "Hệ Thống Phân Tán", en: "Distributed Systems" },
    academicStandard: "Eric Brewer CAP Theorem · PACELC Extension",
    title: {
      vi: "Định Lý CAP: Đánh Đổi Giữa Nhất Quán (CP) & Sẵn Sàng (AP)",
      en: "CAP Theorem: Balancing Consistency (CP) vs Availability (AP)",
    },
    lead: {
      vi: "Mô hình kiến trúc phân vùng: CP cho thanh toán COD, AP cho tra cứu hành trình bưu kiện.",
      en: "Partitioned strategy: CP for COD ledger mutations, AP for tracking queries.",
    },
    body: {
      vi: "• Định lý CAP: Khi xảy ra phân mảnh mạng (Network Partition - P), chỉ được chọn C hoặc A.\n• Module Tiền Tệ (CP): Giao dịch ví COD chọn Nhất quán tuyệt đối, sẵn sàng từ chối giao dịch nếu mạng chập chờn.\n• Module Tra Cứu (AP): Khách xem hành trình đơn hàng chấp nhận dữ liệu trễ 1 vài giây để web luôn mở 100%.",
      en: "• CAP Principle: Under network partitions (P), systems must choose Consistency (C) or Availability (A).\n• Financial Ledger (CP): Strict consistency; rejects writes if consensus cannot be achieved.\n• Public Tracking (AP): High availability; serves cached tracking data with eventual consistency.",
    },
    formulaOrCode: `CAP Tradeoff Matrix:
Financial Ledger:  CP (PostgreSQL Strict Read Committed / Serializable)
Public Tracking:   AP (Redis Read-Replica Cache with 5s TTL)`,
    keyTakeaways: {
      vi: [
        "Không áp dụng đồng nhất một kiến trúc cho toàn bộ hệ thống doanh nghiệp.",
        "Bảo vệ 100% tính chính xác của tiền mặt và công nợ đối tác.",
        "Tối đa hóa trải nghiệm người dùng cuối tra cứu bưu kiện với SLA 99.99%.",
      ],
      en: [
        "Avoids monolithic architecture dogma across diverse business bounded contexts.",
        "Protects 100% financial accuracy for partner receivables.",
        "Maximizes end-user tracking experience with 99.99% query uptime.",
      ],
    },
  },

  // 8. RFC 7231 IDEMPOTENCY KEY
  "concept-idempotency-key": {
    id: "concept-idempotency-key",
    badge: { vi: "CHUẨN IETF RFC", en: "IETF STANDARD" },
    category: { vi: "Thiết Kế RESTful API", en: "API Architecture" },
    academicStandard: "IETF RFC 7231 §4.2 · Idempotent HTTP Methods",
    title: {
      vi: "Khóa Idempotency Key 24h & Khóa Phân Tán Redis",
      en: "24h Idempotency Key & Redis Distributed Lock",
    },
    lead: {
      vi: "f(f(x)) = f(x): Gửi trùng request nhiều lần vẫn chỉ sinh ra đúng 1 giao dịch duy nhất.",
      en: "f(f(x)) = f(x): Duplicate client requests produce exactly one immutable state mutation.",
    },
    body: {
      vi: "• Tình huống lỗi: Shipper bấm nút quét mã 3 lần khi 4G yếu, gửi 3 request POST liên tiếp.\n• Xử lý Gateway: Kiểm tra `Idempotency-Key` trong Redis. Request đầu tiên chiếm khóa `SETNX` với TTL 24h.\n• Request trùng lặp: Nhận ngay kết quả cache của lần gọi đầu (HTTP 200) mà không ghi thêm dòng vào DB.",
      en: "• Problem: Couriers double-tap barcode scans on erratic 4G, firing redundant POST payloads.\n• Gateway Check: Checks Idempotency-Key in Redis. First caller acquires SETNX lock (24h TTL).\n• Duplicate calls: Return cached original response (HTTP 200) without inserting duplicate records.",
    },
    formulaOrCode: `// Redis Distributed Idempotency Check:
const acquired = await redis.set(key, "PROCESSING", "NX", "EX", 86400);
if (!acquired) {
  return await redis.get(result_key); // Trả về kết quả trước đó
}`,
    keyTakeaways: {
      vi: [
        "Xóa sổ hoàn toàn lỗi tạo đơn trùng lặp và trừ tiền 2 lần (0% Duplicate).",
        "Thời gian kiểm tra khóa phân tán cực nhanh (< 2ms qua Redis in-memory).",
        "Tuân thủ nghiêm ngặt chuẩn quốc tế IETF RFC 7231.",
      ],
      en: [
        "100% elimination of duplicate orders and double debits.",
        "Ultra-fast lock evaluation (< 2ms via Redis in-memory lookup).",
        "Strict adherence to IETF RFC 7231 standards.",
      ],
    },
  },

  // 9. RELATIONAL 3NF NORMALIZATION
  "concept-3nf-relational": {
    id: "concept-3nf-relational",
    badge: { vi: "CHUẨN HÓA DỮ LIỆU", en: "DATA NORMALIZATION" },
    category: { vi: "Cơ Sở Dữ Liệu Quan Hệ", en: "Relational Database Theory" },
    academicStandard: "E.F. Codd (1970, 1972) · Relational Database Normalization",
    title: {
      vi: "Chuẩn Hóa Cơ Sở Dữ Liệu 3NF (Codd Normal Form)",
      en: "Relational Database 3NF Normalization (Codd)",
    },
    lead: {
      vi: "Khử triệt để phụ thuộc hàm từng phần (2NF) và phụ thuộc bắc cầu (3NF).",
      en: "Eliminates partial dependencies (2NF) and transitive dependencies (3NF).",
    },
    body: {
      vi: "• 1NF: Mọi thuộc tính đều mang giá trị nguyên tố (Atomic), không chứa mảng gộp trong cột.\n• 2NF: Mọi cột không khóa phải phụ thuộc hoàn toàn vào toàn bộ khóa chính (khử phụ thuộc từng phần).\n• 3NF: Tách thông tin trung gian (vd: Hub Name, Hub Province) ra bảng riêng để khử phụ thuộc bắc cầu.",
      en: "• 1NF: All attributes hold atomic values with no composite multi-valued columns.\n• 2NF: Non-key columns depend entirely on the candidate key with no partial dependencies.\n• 3NF: Isolates transitive columns (e.g., Hub details) into discrete relational tables.",
    },
    formulaOrCode: `// 3NF Dependency Rule:
If X -> Y, then:
- X is a superkey, OR
- Y is a prime attribute (part of a candidate key).`,
    keyTakeaways: {
      vi: [
        "Xóa bỏ dị thường khi thêm, sửa, xóa dữ liệu (Insertion, Update, Deletion Anomalies).",
        "Tiết kiệm 45% dung lượng lưu trữ trên đĩa cứng cho bảng 10 triệu đơn hàng.",
        "Khóa ngoại liên kết bảo toàn tính toàn vẹn tham chiếu (Referential Integrity).",
      ],
      en: [
        "Zero insertion, update, or deletion anomalies across operational tables.",
        "Cuts disk footprint by 45% on multi-million row parcel tables.",
        "Foreign key constraints enforce rigorous referential integrity.",
      ],
    },
  },

  // 10. AI RAG & SEMANTIC ROUTER
  "concept-semantic-router": {
    id: "concept-semantic-router",
    badge: { vi: "KIẾN TRÚC AI RAG", en: "AI RAG ARCHITECTURE" },
    category: { vi: "Trí Tuệ Nhân Tạo & LLM", en: "Applied AI & Vector DB" },
    academicStandard: "Lewis et al. (2020) · Retrieval-Augmented Generation (RAG)",
    title: {
      vi: "Bộ Định Tuyến Ngữ Nghĩa (Semantic Router) & SQL Calling",
      en: "Semantic Router & Read-Only SQL Tool Calling",
    },
    lead: {
      vi: "Phân loại câu hỏi người dùng bằng vector tương đồng, triệt tiêu 100% ảo giác (Hallucination).",
      en: "Vector cosine routing dispatching queries to deterministic read-only SQL functions.",
    },
    body: {
      vi: "• Vấn đề AI ảo giác: LLM truyền thống hay bịa đặt ngày giao hàng khi khách hỏi tình trạng bưu kiện.\n• Định tuyến 2 luồng: Tra cứu vận đơn $\to$ sinh truy vấn SQL chuẩn xác; Hỏi chính sách hoàn tiền $\to$ tìm vector RAG.\n• Phân quyền an toàn: Tài khoản DB của chatbot chỉ có quyền SELECT trên View bị cô lập, chống tấn công Prompt Injection.",
      en: "• Hallucination risk: Generic LLMs fabricate delivery dates when answering tracking questions.\n• Dual-route split: Tracking questions trigger deterministic SQL tools; policy questions query vector RAG.\n• Safety: Sandboxed read-only database user protects data from prompt injection attacks.",
    },
    formulaOrCode: `similarity = cos(θ) = (A · B) / (||A|| * ||B||)

if (similarity >= 0.85) routeToTool("lookup_parcel_sql");
else routeToVectorIndex("faq_knowledge_base");`,
    keyTakeaways: {
      vi: [
        "Độ chính xác dữ liệu bưu kiện đạt 100% nhờ lấy trực tiếp từ database thật.",
        "Thời gian phản hồi chatbot dưới 1.2 giây (P95 Latency).",
        "An toàn dữ liệu tuyệt đối nhờ cơ chế phân quyền Read-Only nghiêm ngặt.",
      ],
      en: [
        "100% data accuracy powered by real-time relational database queries.",
        "Sub-1.2s P95 chatbot response latency.",
        "Zero data mutation risk via strictly isolated read-only permissions.",
      ],
    },
  },

  // 11. PGVECTOR & HNSW
  "concept-pgvector-rag": {
    id: "concept-pgvector-rag",
    badge: { vi: "CSDL VECTOR", en: "VECTOR SEARCH" },
    category: { vi: "Tìm Kiếm Ngữ Nghĩa", en: "Semantic Vector Search" },
    academicStandard: "Malkov & Yashunin (2018) · HNSW Graph Indexing Algorithm",
    title: {
      vi: "Chỉ Mục Đồ Thị HNSW & pgvector Trong PostgreSQL",
      en: "Hierarchical Navigable Small World (HNSW) & pgvector",
    },
    lead: {
      vi: "Tìm kiếm vector láng giềng gần nhất (ANN) với độ phức tạp $O(\\log N)$ thay vì quét toàn bảng $O(N)$.",
      en: "Approximate nearest neighbor (ANN) search with logarithmic $O(\\log N)$ complexity.",
    },
    body: {
      vi: "• Bài toán tìm kiếm: Quét tuyến tính qua 100,000 vector mất hơn 2 giây, không thể đáp ứng thời gian thực.\n• Cấu trúc HNSW: Xây dựng đồ thị đa tầng liên kết các điểm vector; tầng trên nhảy xa, tầng dưới tinh chỉnh.\n• Tích hợp pgvector: Lưu trực tiếp embedding 1536 chiều vào PostgreSQL, không cần duy trì thêm server vector rời.",
      en: "• Flat search bottleneck: Linear vector scans across 100k rows exceed 2,000ms latency.\n• HNSW graph: Multi-layer graph topology where upper layers take large leaps and lower layers refine.\n• pgvector advantage: Persists 1536-dim embeddings directly in PostgreSQL with no extra vector database.",
    },
    formulaOrCode: `CREATE INDEX idx_policy_embedding ON policy_docs 
USING hnsw (embedding vector_cosine_ops) 
WITH (m = 16, ef_construction = 64);`,
    keyTakeaways: {
      vi: [
        "Giảm độ trễ tìm kiếm tương đồng từ 2,200ms xuống dưới 8ms.",
        "Đơn giản hóa hạ tầng, tiết kiệm chi phí bảo trì server vector độc lập.",
        "Khả năng mở rộng vượt trội lên đến hàng triệu đoạn tài liệu chính sách.",
      ],
      en: [
        "Cuts similarity search latency from 2,200ms to < 8ms.",
        "Simplifies infrastructure without deploying standalone vector clusters.",
        "Scales effortlessly to millions of policy document chunks.",
      ],
    },
  },

  // 12. CAB SPATIAL RING MATCHING
  "concept-spatial-ring": {
    id: "concept-spatial-ring",
    badge: { vi: "ĐIỀU VẬN TAXI", en: "DISPATCH LOGIC" },
    category: { vi: "Ghép Xe Thông Minh", en: "Ride-Hailing Dispatch" },
    academicStandard: "Spatial Geohashing & Incremental Radius Search",
    title: {
      vi: "Ghép Tài Xế Bằng Vòng Quét Bán Kính Động (Radius Rings)",
      en: "Dynamic Radius Ring Driver Matching",
    },
    lead: {
      vi: "Mở rộng bán kính tìm kiếm theo từng bước (1km $\to$ 2km $\to$ 3.5km) tối ưu thời gian đón khách.",
      en: "Incremental spatial ring expansion (1km $\to$ 2km $\to$ 3.5km) minimizing pickup ETA.",
    },
    body: {
      vi: "• Tối ưu thời gian đón: Thay vì quét toàn thành phố, hệ thống tìm tài xế gần nhất trong bán kính 1km trước.\n• Mở rộng tự động: Sau 3 giây nếu chưa có tài xế nhận, bán kính mở rộng ra 2km và tối đa 3.5km.\n• Khóa Redis Redlock: Đảm bảo khi nhiều tài xế cùng bấm nhận 1 cuốc xe, chỉ có đúng 1 người nhận thành công.",
      en: "• Pickup ETA optimization: Queries drivers within 1km radius ring first to minimize passenger wait.\n• Dynamic expansion: Expands to 2km and 3.5km after 3s timeouts if unassigned.\n• Redis Redlock guard: Guarantees that when multiple drivers tap accept, only one gets assigned.",
    },
    formulaOrCode: `// Bán kính động theo thời gian:
R_search(t) = min(R_max, R_initial + α * Δt)
// Redis Redlock Key: lock:ride:uuid (TTL = 4000ms)`,
    keyTakeaways: {
      vi: [
        "Thời gian ghép cuốc trung bình dưới 2.5 giây trong bán kính tối ưu.",
        "Tỷ lệ tài xế nhận cuốc thành công đạt 98.5%.",
        "Triệt tiêu hoàn toàn tình trạng tranh chấp cuốc xe giữa các tài xế.",
      ],
      en: [
        "Average match latency < 2.5s within optimal pickup perimeter.",
        "98.5% driver acceptance fulfillment rate.",
        "Zero race conditions during concurrent driver acceptance.",
      ],
    },
  },

  // 13. REDIS REDLOCK
  "concept-redis-redlock": {
    id: "concept-redis-redlock",
    badge: { vi: "KHÓA PHÂN TÁN", en: "DISTRIBUTED LOCK" },
    category: { vi: "Kiểm Soát Đồng Thời", en: "Concurrency Control" },
    academicStandard: "Salvatore Sanfilippo (Antirez) · Redlock Algorithm",
    title: {
      vi: "Khóa Phân Tán Redis Redlock & Chống Đua Tranh",
      en: "Redis Redlock Distributed Locking",
    },
    lead: {
      vi: "Đảm bảo tính loại trừ tương hỗ (Mutual Exclusion) giữa các node xử lý độc lập.",
      en: "Enforces mutual exclusion across distributed stateless server instances.",
    },
    body: {
      vi: "• Nguy cơ tranh chấp: 10 tài xế cùng nhìn thấy 1 cuốc xe giá cao và bấm nhận cùng một phần nghìn giây.\n• Cơ chế Redlock: Node đầu tiên thực thi `SET key uuid NX PX 3000` chiếm khóa thành công.\n• Bảo vệ TTL: Khóa tự giải phóng sau 3 giây nếu server bị crash, tránh tình trạng treo hệ thống vĩnh viễn.",
      en: "• Race hazard: Multiple drivers tap accept on a lucrative ride simultaneously.\n• Redlock mechanism: First request executes `SET key uuid NX PX 3000` to win the lease.\n• TTL fail-safe: Automatic lock release after 3,000ms prevents deadlocks during node crashes.",
    },
    formulaOrCode: `// Atomic lock acquisition:
SET lock:ride:1001 unique_token NX PX 3000

// Safe unlock via Lua script:
if redis.call("get", KEYS[1]) == ARGV[1] then
  return redis.call("del", KEYS[1])
else return 0 end`,
    keyTakeaways: {
      vi: [
        "Tuyệt đối không xảy ra tình trạng 2 tài xế cùng đón 1 hành khách.",
        "Thời gian xử lý tranh chấp khóa cực nhanh (< 1.5ms).",
        "Tự giải phóng khóa an toàn chống treo chết tiến trình (Deadlock-Free).",
      ],
      en: [
        "Zero multi-driver assignment collision anomalies.",
        "Sub-1.5ms lock arbitration turnaround.",
        "Guaranteed deadlock immunity via TTL lease expiration.",
      ],
    },
  },

  // 14. POSTGRESQL SELECT FOR UPDATE NOWAIT
  "concept-select-for-update": {
    id: "concept-select-for-update",
    badge: { vi: "KHÓA BẢN GHI DB", en: "DATABASE ROW LOCK" },
    category: { vi: "Chống Đặt Trùng Phòng", en: "Anti-Overbooking" },
    academicStandard: "ACID Concurrency Control · Pessimistic Locking",
    title: {
      vi: "Khóa Hàng Bi Quan SELECT FOR UPDATE NOWAIT",
      en: "Pessimistic Row Locking: SELECT FOR UPDATE NOWAIT",
    },
    lead: {
      vi: "Chặn đứng 100% tình trạng đặt trùng phòng (Overbooking) trong mùa cao điểm du lịch.",
      en: "Blocks 100% room overbooking anomalies across concurrent OTA channels.",
    },
    body: {
      vi: "• Thách thức OTA: Agoda, Booking.com và khách tại quầy cùng đặt phòng VIP duy nhất trong 1 giây.\n• Khóa tức thì: `SELECT ... FOR UPDATE NOWAIT` khóa ngay bản ghi phòng; giao dịch sau bị từ chối lập tức mà không phải chờ.\n• Giữ chỗ 15 phút: Tạo phiếu tạm (Hold Token) với đếm ngược 15 phút để khách hoàn tất thanh toán hóa đơn.",
      en: "• Overbooking threat: Concurrent bookings from Agoda, Booking.com, and walk-in guests for the last room.\n• Instant lock: `SELECT ... FOR UPDATE NOWAIT` locks the row immediately; concurrent attempts fail fast with zero queue lag.\n• 15-minute hold: Issues temporary hold tokens expiring in 15 minutes for payment completion.",
    },
    formulaOrCode: `SELECT room_id, status 
FROM hotel_rooms 
WHERE room_id = 101 AND status = 'AVAILABLE' 
FOR UPDATE NOWAIT; -- Khóa tức thì, không xếp hàng chờ!`,
    keyTakeaways: {
      vi: [
        "Xóa bỏ 100% rủi ro đền bù và hủy phòng do đặt trùng (0% Overbooking).",
        "Phản hồi người dùng tức thì mà không gây nghẽn kết nối cơ sở dữ liệu.",
        "Tự động mở khóa phòng khi khách hàng không hoàn tất thanh toán sau 15 phút.",
      ],
      en: [
        "100% elimination of double-booked rooms and penalty compensation.",
        "Fast-fail response without exhausting database connection pools.",
        "Automatic release of expired room holds after 15 minutes.",
      ],
    },
  },
};

export const getTheoryConceptById = (conceptId: string): TheoryConcept | null => {
  return ACADEMIC_THEORY_CONCEPTS[conceptId] || null;
};

export const getDefaultConceptForSlug = (slug: string): TheoryConcept => {
  if (slug.includes("map") || slug.includes("hub")) {
    return ACADEMIC_THEORY_CONCEPTS["concept-hub-and-spoke"];
  }
  if (slug.includes("order") || slug.includes("lifecycle")) {
    return ACADEMIC_THEORY_CONCEPTS["concept-fsm-automata"];
  }
  if (slug.includes("exception") || slug.includes("rto")) {
    return ACADEMIC_THEORY_CONCEPTS["concept-haversine-rto"];
  }
  if (slug.includes("arch") || slug.includes("scale")) {
    return ACADEMIC_THEORY_CONCEPTS["concept-cap-theorem"];
  }
  if (slug.includes("ai") || slug.includes("rag")) {
    return ACADEMIC_THEORY_CONCEPTS["concept-semantic-router"];
  }
  if (slug.includes("cab")) {
    return ACADEMIC_THEORY_CONCEPTS["concept-spatial-ring"];
  }
  if (slug.includes("tourist")) {
    return ACADEMIC_THEORY_CONCEPTS["concept-select-for-update"];
  }
  return ACADEMIC_THEORY_CONCEPTS["concept-hub-and-spoke"];
};
