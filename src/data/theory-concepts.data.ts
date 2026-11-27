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
  // =========================================================================
  // 1. LOGISTICS NETWORKING & HUB-AND-SPOKE TOPOLOGY
  // =========================================================================
  "concept-hub-and-spoke": {
    id: "concept-hub-and-spoke",
    badge: { vi: "LÝ THUYẾT MẠNG LƯỚI", en: "NETWORK TOPOLOGY" },
    category: { vi: "Logistics Optimization", en: "Logistics Optimization" },
    academicStandard: "Operations Research (OR) · Campbell & O'Kelly (1998) Hub Location Theory",
    title: {
      vi: "Mô Hình Mạng Lưới Hub-and-Spoke & Tính Kinh Tế Theo Quy Mô",
      en: "Hub-and-Spoke Network Topology & Economies of Scale",
    },
    lead: {
      vi: "Tối ưu hóa số lượng kết nối vận tải từ O(N²) thành O(N) thông qua các điểm gom hàng tập trung (Consolidation Points).",
      en: "Optimizing transport link complexity from O(N²) down to O(N) via centralized consolidation points.",
    },
    body: {
      vi: "Trong mạng lưới điểm - nối - điểm (Point-to-Point), N trạm bưu cục đòi hỏi N*(N-1)/2 tuyến xe tải trực tiếp, dẫn đến tỷ lệ lấp đầy thùng xe (Truck Load Factor) rất thấp (< 35%) và chi phí nhiên liệu bùng nổ. \n\nMô hình Hub-and-Spoke giải quyết bài toán này bằng cách biến các bưu cục vệ tinh thành các 'Spokes' chỉ giao tiếp với Hub Tổng trung tâm. Tại Hub, hàng trăm dòng bưu kiện nhỏ lẻ được phân loại tự động và gom thành các lô hàng lớn (Bulk Freight) để chất đầy các xe tải tải trọng lớn (15 - 30 tấn) chạy tuyến trục (Linehaul). Điều này tối đa hóa hệ số sử dụng phương tiện lên > 88% và giảm chi phí vận hành trên mỗi ki-lô-mét hàng hóa.",
      en: "In a point-to-point network, N nodes require N*(N-1)/2 direct transit connections, causing poor truck load factors (< 35%) and soaring transport expenditure. \n\nThe Hub-and-Spoke paradigm directs local spokes to route all consignments into centralized mega sorting hubs. High-speed cross-belt sorters aggregate small parcel streams into full truckloads (FTL) for heavy linehaul haulage, boosting volumetric vehicle utilization above 88% and cutting ton-kilometer logistics expense.",
    },
    formulaOrCode: `// Tiết kiệm đường truyền (Network Link Complexity)
Point-to-Point: E_p2p = N * (N - 1) / 2  // Với 22 trạm: 231 tuyến xe riêng lẻ!
Hub-and-Spoke:  E_hns = N + K            // Với 22 trạm, 3 Hub: Chỉ cần ~25 tuyến trục.

// Tỷ lệ lấp đầy thùng xe (Volumetric Load Factor):
Load_Factor = (Volume_Goods_m3) / (Vehicle_Capacity_m3) >= 0.88`,
    keyTakeaways: {
      vi: [
        "Giảm độ phức tạp điều vận từ bậc 2 (Quadratic) xuống bậc tuyến tính (Linear).",
        "Tập trung vốn đầu tư vào máy quét băng chuyền tự động tốc độ cao tại 3 Hub thay vì phân tán dàn trải.",
        "Thiết lập lịch trình xe chạy theo khung giờ cố định (Fixed Schedule Linehaul) bất kể thời tiết.",
      ],
      en: [
        "Reduces route coordination complexity from quadratic O(N²) to linear O(N).",
        "Concentrates capital expenditure into automated sorters at strategic consolidation hubs.",
        "Enables rigid, clockwork dispatch schedules for trunk haulage fleets.",
      ],
    },
  },

  "concept-cut-off-time": {
    id: "concept-cut-off-time",
    badge: { vi: "CHU KỲ VẬN HÀNH", en: "OPERATION CYCLE" },
    category: { vi: "Supply Chain Scheduling", en: "Supply Chain Scheduling" },
    academicStandard: "APICS Supply Chain Operations Reference (SCOR v14.0) · Order Fulfillment",
    title: {
      vi: "Quy Chuẩn Giờ Cắt Ca (Cut-Off Time) & Đóng Bao Niêm Phong",
      en: "Cut-Off Time Dispatch Rigor & Tamper-Proof Seal Protocol",
    },
    lead: {
      vi: "Đảm bảo tính đồng bộ của dòng chuyển mạch logistics thông qua các mốc khóa thời gian bất biến (Immutable Milestones).",
      en: "Synchronizing supply chain cross-docking velocity through strict, immutable dispatch time gates.",
    },
    body: {
      vi: "Giờ cắt ca (Cut-off Time) là mốc thời gian chốt sổ tiếp nhận bưu kiện để chuyển sang công đoạn đóng bao kẹp chì (Bagging & Tamper-Proof Sealing) và xếp hàng lên xe tải. Nếu một bưu kiện đến Hub sau mốc Cut-off dù chỉ 60 giây, kiện hàng bắt buộc phải chuyển sang chu kỳ xuất phát của ca kế tiếp nhằm bảo toàn SLA cam kết cho hàng chục nghìn bưu kiện đã hoàn tất trên xe. \n\nMỗi bao tải sau khi đóng gói được gán một mã vạch định danh cấp 2 (Master Bag Barcode) chứa danh mục manifest chi tiết của toàn bộ bưu kiện bên trong, khóa bằng seal chì nhựa đánh số serial duy nhất để chống trộm cắp và thất thoát.",
      en: "Cut-off time represents the non-negotiable deadline after which incoming parcels cannot join the outbound dispatch batch. Missing the cut-off by even 60 seconds defers the parcel to the next operating shift to safeguard the delivery SLA of all on-schedule shipments. \n\nConsolidated bags are sealed with serialized tamper-evident cable ties and mapped to a Level-2 Master Manifest Barcode that cryptographically binds all contained parcel IDs.",
    },
    formulaOrCode: `// Biểu thức kiểm tra Cut-off Time
if (parcel.arrived_at > hub.linehaul_cutoff_time) {
  parcel.dispatch_wave = NEXT_OPERATIONAL_SHIFT;
  audit_log("CUTOFF_MISSED", { parcel_id, delay_hours: 12 });
} else {
  parcel.dispatch_wave = CURRENT_DEPARTURE_TRUCK;
  master_bag.bind(parcel.tracking_code);
}`,
    keyTakeaways: {
      vi: [
        "Bảo vệ SLA giao hàng của 99% bưu kiện đúng hạn thay vì trì hoãn xe tải vì 1% bưu kiện trễ.",
        "Manifest đa tầng (Multi-tier Manifest): quét mã bao 1 lần tương đương kiểm đếm 50 bưu kiện bên trong.",
        "Niêm phong seal kẹp chì điện tử chống giả mạo và bảo vệ tính toàn vẹn vật lý của kiện hàng.",
      ],
      en: [
        "Protects on-time SLA for 99% of scheduled parcels against marginal delay from laggards.",
        "Multi-tier manifest hierarchy enables single-scan verification of entire container loads.",
        "Serialized tamper-evident seals maintain unbroken chain-of-custody across hubs.",
      ],
    },
  },

  // =========================================================================
  // 2. FINITE STATE AUTOMATA & CAMUNDA WORKFLOW
  // =========================================================================
  "concept-fsm-automata": {
    id: "concept-fsm-automata",
    badge: { vi: "LÝ THUYẾT MÁY TRẠNG THÁI", en: "AUTOMATA THEORY" },
    category: { vi: "Formal Software Engineering", en: "Formal Software Engineering" },
    academicStandard: "Deterministic Finite Automaton (DFA) · Hopcroft, Motwani & Ullman (2006)",
    title: {
      vi: "Máy Trạng Thái Hữu Hạn Tuyệt Đối (DFA) & Triệt Tiêu Nhảy Cóc Trạng Thái",
      en: "Deterministic Finite Automata (DFA) & State Leap Prohibition",
    },
    lead: {
      vi: "Định nghĩa hàm chuyển dịch trạng thái δ(S, E) -> S' bảo đảm quy trình bưu kiện luôn hợp lệ về mặt toán học.",
      en: "Defining rigorous state transition function δ(S, E) -> S' ensuring mathematically valid parcel journeys.",
    },
    body: {
      vi: "Trong các hệ thống kém chất lượng, trạng thái đơn hàng thường được thay đổi tự do qua các câu lệnh UPDATE SQL tùy tiện, dẫn đến hiện tượng 'đơn hàng chưa lấy từ kho người gửi mà đã báo giao thành công'. \n\nNexus Express ứng dụng mô hình Máy Trạng Thái Hữu Hạn Tuyệt Đối (DFA). Một bưu kiện được định nghĩa như một tập hợp trạng thái S = {ORDER_CREATED, PICKED_UP, HUB_INBOUND, LINEHAUL_TRANSIT, HUB_OUTBOUND, OUT_FOR_DELIVERY, DELIVERED}. Bất kỳ sự kiện E nào muốn kích hoạt sự chuyển dịch đều phải thỏa mãn hàm chuyển dịch δ. Nếu trạng thái hiện tại là ORDER_CREATED mà nhận sự kiện SHIPPED_TO_CUSTOMER, hệ thống lập tức ném ngoại lệ IllegalStateTransitionException và ghi nhật ký cảnh báo gian lận.",
      en: "Flawed logistics systems often update parcel status with arbitrary SQL mutations, creating anomalies like parcels marked 'Delivered' before being collected from merchants. \n\nNexus Express implements a strict Deterministic Finite Automaton (DFA). A parcel resides in a formal state space S. State changes are governed by transition function δ(CurrentState, Event) -> NextState. Any illegal transition attempt triggers an immediate IllegalStateTransitionException and alerts fraud monitoring.",
    },
    formulaOrCode: `// Định nghĩa hình thức DFA bưu kiện:
M = (Q, Σ, δ, q0, F)
Q = {CREATED, PICKED, INBOUND, LINEHAUL, OUTBOUND, OUT_FOR_DELIVERY, DELIVERED, RETURNED}
Σ = {Ev_Pickup, Ev_InboundScan, Ev_LinehaulDispatch, Ev_OutboundScan, Ev_DeliverySuccess, Ev_Fail}

Hàm chuyển dịch δ (Transition Function Matrix):
δ(CREATED, Ev_Pickup)          = PICKED
δ(PICKED, Ev_InboundScan)      = INBOUND
δ(INBOUND, Ev_DeliverySuccess) = ❌ REJECTED (Throws IllegalStateTransitionException)`,
    keyTakeaways: {
      vi: [
        "Loại bỏ 100% tình trạng nhảy cóc trạng thái hoặc can thiệp sai lệch vào chu trình bưu kiện.",
        "Mỗi bước chuyển dịch đều đính kèm chữ ký mã hóa của tác nhân (Actor UUID) và timestamp chuẩn ISO 8601.",
        "Tạo lập cơ sở dữ liệu kiểm toán bất biến (Immutable Audit Trail) phục vụ đối soát pháp lý.",
      ],
      en: [
        "100% elimination of out-of-order state mutations and manual database overrides.",
        "Every state transition captures actor identity cryptographic signature and ISO 8601 timestamp.",
        "Establishes an immutable, tamper-proof audit trail for regulatory compliance.",
      ],
    },
  },

  "concept-camunda-bpmn": {
    id: "concept-camunda-bpmn",
    badge: { vi: "CHUẨN BPMN 2.0", en: "BPMN 2.0 STANDARD" },
    category: { vi: "Business Process Management", en: "Business Process Management" },
    academicStandard: "OMG BPMN 2.0 Specification (ISO/IEC 19510:2013) · Section 10 Process Execution",
    title: {
      vi: "Điều Phối Quy Trình Bằng Camunda Engine & Intermediate Catch Events",
      en: "Camunda BPMN 2.0 Orchestration & Intermediate Catch Events",
    },
    lead: {
      vi: "Tách biệt hoàn toàn luồng điều phối nghiệp vụ (Orchestration Logic) khỏi mã nguồn ứng dụng (Business Logic).",
      en: "Decoupling workflow orchestration governance from core microservice business implementations.",
    },
    body: {
      vi: "Thay vì lập trình các câu lệnh `if-else` lồng nhau phức tạp trong controller hoặc service backend, Nexus Express sử dụng chuẩn quốc tế BPMN 2.0 được thực thi trên nền Camunda Zeebe Workflow Engine. \n\nMỗi chặng trung chuyển xe tải đường dài được mô hình hóa bằng một `IntermediateCatchEvent` gắn với bộ đếm thời gian (Timer Event SLA). Khi xe tải Linehaul rời Hub Hà Nội, tiến trình rơi vào trạng thái tạm dừng (Asynchronous Continuation). Khi xe đến trạm trung chuyển Đà Nẵng, tín hiệu quét mã tại cổng bến (Gate-In Signal) gửi qua webhook sẽ đánh thức tiến trình để tiếp tục các tác vụ phân luồng tiếp theo mà không làm nghẽn luồng xử lý CPU.",
      en: "Instead of tangled procedural if-else control flows in application services, Nexus Express adopts ISO/IEC 19510 BPMN 2.0 workflows executed on Camunda Zeebe. \n\nTrunk transport haulage legs are modeled as IntermediateCatchEvents wired with Boundary Timer SLAs. When linehaul trucks leave Hanoi, process instances persist their tokens asynchronously. Destination gate-in barcode scans publish webhooks that awaken waiting tokens without exhausting threads.",
    },
    formulaOrCode: `<!-- BPMN 2.0 XML Fragment (Catch Event + Timer Boundary) -->
<bpmn:intermediateCatchEvent id="Event_WaitForArrival" name="Chờ Xe Về Bến">
  <bpmn:messageEventDefinition messageRef="Message_TruckGateIn" />
</bpmn:intermediateCatchEvent>
<bpmn:boundaryEvent id="Event_SlaBreach" attachedToRef="Activity_Transit" cancelActivity="false">
  <bpmn:timerEventDefinition>
    <bpmn:timeDuration>PT48H</bpmn:timeDuration> <!-- Cảnh báo trễ SLA sau 48h -->
  </bpmn:timerEventDefinition>
</bpmn:boundaryEvent>`,
    keyTakeaways: {
      vi: [
        "Biểu đồ trực quan hóa trạng thái quy trình cho phép BA và Vận hành theo dõi điểm nghẽn (Bottlenecks) thời gian thực.",
        "Hỗ trợ giao dịch bù trừ (Saga Compensation Pattern) tự động khi có bước thực hiện thất bại.",
        "Tiết kiệm tài nguyên máy chủ nhờ cơ chế chờ đợi bất đồng bộ không tiêu tốn chu kỳ CPU.",
      ],
      en: [
        "Visual workflow diagrams empower BAs and Operations to diagnose real-time bottlenecks.",
        "Built-in Saga Compensation transactions unwind multi-service mutations cleanly on error.",
        "Zero CPU polling waste thanks to event-driven asynchronous event wait states.",
      ],
    },
  },

  // =========================================================================
  // 3. EXCEPTIONS, HAVERSINE & RTO REVERSE LOGISTICS
  // =========================================================================
  "concept-haversine-geofencing": {
    id: "concept-haversine-geofencing",
    badge: { vi: "TOÁN HỌC KHÔNG GIAN", en: "SPATIAL MATHEMATICS" },
    category: { vi: "Geospatial Computing", en: "Geospatial Computing" },
    academicStandard: "Sinnott, R. W. (1984) · Great-Circle Distance on a Sphere · ISO 19107 Spatial Schema",
    title: {
      vi: "Công Thức Khoảng Cách Cung Lớn Haversine & Geofencing Chống Gian Lận Bưu Tá",
      en: "Haversine Great-Circle Formula & Anti-Fraud Courier Geofencing",
    },
    lead: {
      vi: "Tính toán khoảng cách mặt cầu chính xác giữa tọa độ GPS của bưu tá và địa chỉ khách hàng để ngăn chặn báo phát khống.",
      en: "Calculating geodesic spherical distance between courier GPS telemetry and delivery address to eliminate ghost attempts.",
    },
    body: {
      vi: "Trong hoạt động giao hàng chặng cuối (Last-Mile Delivery), một vấn nạn phổ biến là shipper lười giao, ngồi tại quán nước và bấm trên app 'Khách hàng không nghe máy' hoặc 'Khách hẹn giao lại' để trốn việc. \n\nNexus Express triệt tiêu gian lận này bằng thuật toán Haversine. Mỗi khi bưu tá bấm bất kỳ nút báo giao thất bại nào trên app, ứng dụng di động sẽ gửi kèm tọa độ định vị GPS độ chính xác cao (Accuracy < 15m). Hệ thống tính toán khoảng cách đại lộ cầu giữa vị trí thực của shipper (lat1, lon1) và tọa độ địa chỉ người nhận (lat2, lon2). Nếu khoảng cách vượt quá bán kính Geofence an toàn (r > 300 mét), hệ thống lập tức từ chối thao tác và cảnh báo 'Shipper chưa tiếp cận địa chỉ người nhận'.",
      en: "A critical moral hazard in last-mile logistics is couriers falsely flagging 'Recipient unreachable' while lounging away from destination. \n\nNexus Express eradicates ghost delivery attempts via the Haversine Great-Circle Distance algorithm. When a driver triggers any failure button, mobile GPS telemetry is computed against customer geocodes. If calculated distance exceeds the 300m geofence threshold, the failure claim is strictly rejected with a disciplinary violation flag.",
    },
    formulaOrCode: `// Công thức khoảng cách đại lộ cầu Haversine (Haversine Distance Formula):
a = sin²(Δφ/2) + cos(φ1) * cos(φ2) * sin²(Δλ/2)
c = 2 * atan2(√a, √(1−a))
Distance = R * c  // Trong đó R = 6,371,000 mét (Bán kính Trái Đất)

// Kiểm tra Geofence:
if (Distance > 300 /* mét */) {
  throw new GeoFenceBreachException("Bưu tá cách người nhận " + Distance + "m. Không thể báo giao thất bại!");
}`,
    keyTakeaways: {
      vi: [
        "Loại bỏ 100% tình trạng shipper báo phát khống để trốn việc giờ cao điểm.",
        "Cung cấp bằng chứng minh bạch khi khách hàng khiếu nại chưa hề nhận được cuộc gọi giao hàng.",
        "Tích hợp PostGIS không gian trực tiếp trong cơ sở dữ liệu PostgreSQL cho phép truy vấn không gian < 5ms.",
      ],
      en: [
        "100% elimination of fraudulent failed-delivery claims submitted from remote locations.",
        "Produces indisputable geospatial audit evidence during customer complaint mediation.",
        "PostGIS native spatial indexing executes geofence validation queries in under 5ms.",
      ],
    },
  },

  "concept-rto-buffer": {
    id: "concept-rto-buffer",
    badge: { vi: "LOGISTICS THU HỒI", en: "REVERSE LOGISTICS" },
    category: { vi: "Operations Research", en: "Operations Research" },
    academicStandard: "Rogers & Tibben-Lembke (1999) · Reverse Logistics Executive Council (RLEC)",
    title: {
      vi: "Bộ Đệm Lưu Kho 48H (RTO Buffer) & Quy Trình Cứu Đơn Trước Khi Chuyển Hoàn",
      en: "48-Hour RTO Retention Buffer & Proactive Merchant Rescue Protocol",
    },
    lead: {
      vi: "Giảm thiểu tỷ lệ chuyển hoàn tốn kém bằng cơ chế lưu kho cục bộ và gửi thông báo tự động cho người gửi can thiệp.",
      en: "Minimizing catastrophic reverse shipping losses via localized parcel retention and automated merchant rescue alerts.",
    },
    body: {
      vi: "Chi phí chuyển hoàn (Return to Origin - RTO) là khoản lỗ kép lớn nhất của nhà bán hàng thương mại điện tử: mất phí vận chuyển 2 chiều, giam vốn hàng tồn và tỷ lệ bưu phẩm hư hỏng cao khi hoàn về kho. \n\nThay vì chuyển hoàn ngay khi giao thất bại lần 1, Nexus Express triển khai quy trình 3 lần giao thử kết hợp Kho Đệm 48 Giờ (48h Retention Buffer). Khi phát thất bại lần 3, bưu kiện được chuyển về bưu cục phát và giữ nguyên trạng trong 48 giờ. Trong thời gian này, hệ thống tự động bắn webhook cho chủ shop qua Web/App/Zalo ZNS để người gửi trực tiếp gọi điện cứu đơn (hỗ trợ đổi địa chỉ giao, đổi số điện thoại người nhận). Nhờ cơ chế đệm này, hơn 28% đơn hàng giao hỏng được cứu thành công mà không phải chuyển hoàn.",
      en: "Return to Origin (RTO) represents a severe double-hit penalty for ecommerce merchants: paying two-way freight fees, frozen inventory capital, and damaged return rates. \n\nInstead of hasty immediate returns, Nexus Express institutes a 3-attempt SLA alongside a 48-Hour Station Retention Buffer. Parcels failing 3 delivery attempts are impounded at destination depots for 48 hours. Real-time webhooks alert merchants to intervene directly (updating address or phone). This buffer rescues over 28% of at-risk orders.",
    },
    formulaOrCode: `// Logic kích hoạt kho đệm 48h RTO
if (parcel.delivery_attempts >= 3) {
  parcel.status = 'HELD_AT_STATION_RTO_BUFFER';
  parcel.rto_release_at = NOW() + INTERVAL '48 HOURS';
  notification_service.dispatchWebhook({
    merchant_id: parcel.merchant_id,
    event: 'ACTION_REQUIRED_RESCUE_ORDER',
    deadline: parcel.rto_release_at
  });
}`,
    keyTakeaways: {
      vi: [
        "Tiết kiệm chi phí vận chuyển 2 chiều cho chủ shop và nâng cao tỷ lệ giao hàng thành công toàn hệ thống.",
        "Quy định thời hạn lưu kho rõ ràng tránh tình trạng hàng tồn đọng 'ngủ quên' vô thời hạn tại bưu cục.",
        "Tự động tính phí lưu kho nếu vượt quá 48h quy định mà chủ shop chưa đưa ra phương án xử lý.",
      ],
      en: [
        "Saves two-way round-trip freight costs for merchants and elevates overall delivery completion rates.",
        "Explicit retention time limits prevent uncollected ghost parcel accumulation in local depots.",
        "Automated demurrage billing triggers if parcels exceed the 48-hour rescue window without merchant action.",
      ],
    },
  },

  // =========================================================================
  // 4. DISTRIBUTED ARCHITECTURE, IDEMPOTENCY & CAP THEOREM
  // =========================================================================
  "concept-idempotency-key": {
    id: "concept-idempotency-key",
    badge: { vi: "CHUẨN RFC INTERNET", en: "INTERNET RFC SPEC" },
    category: { vi: "Distributed Systems Architecture", en: "Distributed Systems Architecture" },
    academicStandard: "IETF RFC 7231 §4.2 (HTTP Idempotency) & IETF Draft: The Idempotency-Key HTTP Header",
    title: {
      vi: "Tính Bất Khả Biến (Idempotency Key) & Khóa Phân Tán Redis SETNX 24H",
      en: "Idempotency-Key Specification & Redis SETNX 24-Hour Distributed Locking",
    },
    lead: {
      vi: "Đảm bảo một thao tác API khi thực thi N lần lặp lại vẫn chỉ tạo ra duy nhất một kết quả chính xác, triệt tiêu race conditions.",
      en: "Guaranteeing that duplicate API mutations produce identical side-effects without multiple resource creations.",
    },
    body: {
      vi: "Tại các bưu cục giờ cao điểm, mạng chập chờn khiến bưu tá bấm quét barcode nhiều lần liên tiếp (double clicks) hoặc mobile app tự động retry HTTP request. Nếu không có Idempotency, mỗi lần retry sẽ tạo ra một bản ghi bưu kiện mới hoặc trừ tiền thu hộ 2 lần. \n\nNexus Express tuân thủ nghiêm ngặt tiêu chuẩn HTTP Idempotency-Key. Khi client gửi request kèm header `X-Idempotency-Key: <UUID>`, API Gateway sử dụng lệnh nguyên tử `SETNX` của Redis với thời gian sống (TTL) 86,400 giây (24 giờ). Nếu khóa đã tồn tại trong Redis, Gateway chặn đứng luồng xử lý xuống database, lập tức trả về phản hồi cached của lần thành công trước đó trong < 4ms mà không sinh thêm bất kỳ bản ghi thừa nào.",
      en: "During depot peak hours, flaky mobile networks induce rapid double-tapping or automatic client retries. Without idempotency safeguards, retries spawn duplicate parcel records and double-charged COD ledgers. \n\nNexus Express enforces the IETF Idempotency-Key standard. When an ingress request carries `X-Idempotency-Key: <UUID>`, the API Gateway executes an atomic Redis `SETNX` command with a 24-hour TTL (86,400s). If the key exists, the request short-circuits in < 4ms, serving the cached idempotent response without touching Postgres.",
    },
    formulaOrCode: `// Thuật toán kiểm tra Idempotency tại Gateway (Fastify PreHandler)
const lockKey = \`idemp:\${request.headers['x-idempotency-key']}\`;
const acquired = await redis.set(lockKey, 'IN_PROGRESS', 'EX', 86400, 'NX');

if (!acquired) {
  const cachedResult = await redis.get(\`\${lockKey}:response\`);
  if (cachedResult) return reply.code(200).send(JSON.parse(cachedResult));
  return reply.code(409).send({ error: 'Conflict: Concurrent Request in Flight' });
}

// Xử lý logic và lưu cache kết quả:
const response = await handleParcelCreation(request.body);
await redis.set(\`\${lockKey}:response\`, JSON.stringify(response), 'EX', 86400);`,
    keyTakeaways: {
      vi: [
        "Triệt tiêu 100% lỗi trùng đơn hàng và lỗi ghi đè dữ liệu (Zero Duplication).",
        "Bảo vệ cơ sở dữ liệu cốt lõi khỏi các đợt bùng nổ lưu lượng truy cập khi thiết bị client tự động retry dồn dập.",
        "Thời gian phản hồi đối với các request trùng lặp chỉ mất < 4ms nhờ trả lời trực tiếp từ RAM của Redis.",
      ],
      en: [
        "100% eradication of duplicate orders and phantom ledger anomalies.",
        "Shields core database clusters from cascading retry storms during network flakiness.",
        "Sub-4ms response time for duplicated requests served directly from Redis memory.",
      ],
    },
  },

  "concept-cap-theorem": {
    id: "concept-cap-theorem",
    badge: { vi: "ĐỊNH LÝ HỆ THỐNG", en: "SYSTEM THEOREM" },
    category: { vi: "Distributed Computing Theory", en: "Distributed Computing Theory" },
    academicStandard: "Eric Brewer (2000) CAP Theorem · Gilbert & Lynch (2002) Formal Proof (ACM SIGACT)",
    title: {
      vi: "Đánh Đổi Giữa Nhất Quán & Sẵn Sàng (CAP Theorem: CP vs AP trong Logistics)",
      en: "Consistency vs Availability Trade-offs (CAP Theorem: CP vs AP in Logistics)",
    },
    lead: {
      vi: "Phân vùng kiến trúc hệ thống để áp dụng đúng đắn mô hình Nhất quán Mạnh (CP) cho Tiền mặt COD và Sẵn sàng Cao (AP) cho Tra cứu Tracking.",
      en: "Partitioning architectural boundaries: Strong Consistency (CP) for COD cashflow vs High Availability (AP) for public tracking.",
    },
    body: {
      vi: "Định lý CAP chỉ ra rằng một hệ thống phân tán khi gặp sự cố phân vùng mạng (Network Partition - P) chỉ có thể chọn một trong hai: Nhất quán dữ liệu (Consistency - C) hoặc Tính sẵn sàng (Availability - A). \n\nNexus Express không áp dụng rập khuôn một mô hình cho toàn bộ hệ thống mà phân chia theo miền nghiệp vụ (Domain-Driven Split): \n1. **Phân hệ Kế toán & Thu Hộ COD (CP System):** Bắt buộc ưu tiên Nhất quán tuyệt đối. Nếu mất kết nối với cơ sở dữ liệu chính, giao dịch thu tiền mặt lập tức bị dừng để tránh thất thoát, tuân thủ ACID. \n2. **Phân hệ Tra cứu Vận đơn Khách hàng (AP System):** Ưu tiên Tính sẵn sàng 99.99%. Dữ liệu bưu kiện được nhân bản sang các Read-Replicas. Khách hàng tra cứu có thể thấy trạng thái xe tải chậm hơn 1-2 giây (Eventual Consistency) nhưng hệ thống không bao giờ bị sập hay báo lỗi 500 khi hàng triệu người dùng cùng vào tra cứu đơn.",
      en: "Brewer's CAP Theorem proves that under a network partition (P), a distributed system must sacrifice either Consistency (C) or Availability (A). \n\nNexus Express avoids dogmatic uniformity by partitioning its architectural domains: \n1. **COD Financial Settlement (CP Architecture):** Enforces strict serializability and ACID compliance. If replication lags, cash mutations pause to prevent double-spending. \n2. **Public Parcel Tracking (AP Architecture):** Prioritizes 99.99% availability via read-replicas. Users tolerate a 1-2 second replication delay (Eventual Consistency) in exchange for zero downtime during flash sales.",
    },
    formulaOrCode: `// Phân định miền kiến trúc theo Định lý CAP
Domain 1: Financial COD Ledger -> CP (ACID Postgres, Strict Serializability)
Domain 2: Public Parcel Tracking -> AP (Eventual Consistency, Redis Cache + Read Replicas)

PACELC Theorem:
If Partition (P) -> Trade-off (Availability vs Consistency)
Else (E)        -> Trade-off (Latency vs Consistency)`,
    keyTakeaways: {
      vi: [
        "Không đánh đổi sự chính xác của tiền mặt và hóa đơn tài chính lấy tốc độ rẻ tiền.",
        "Tối ưu chi phí hạ tầng máy chủ bằng cách đẩy 90% tải đọc của người dùng vào cụm Read Replicas giá rẻ.",
        "Mô hình Nhất quán Cuối cùng (Eventual Consistency) hoàn toàn đáp ứng được kỳ vọng của người mua hàng tra cứu đơn.",
      ],
      en: [
        "Never compromises financial ledger precision for cheap, brittle throughput.",
        "Offloads 90% of user read traffic to horizontal read replicas, driving down infrastructure spend.",
        "Eventual consistency satisfies real-world consumer tracking expectations seamlessly.",
      ],
    },
  },

  // =========================================================================
  // 5. AI RAG & HYBRID RETRIEVAL (TOOL CALLING VS VECTOR)
  // =========================================================================
  "concept-rag-semantic-router": {
    id: "concept-rag-semantic-router",
    badge: { vi: "KIẾN TRÚC AI HIỆN ĐẠI", en: "MODERN AI ARCHITECTURE" },
    category: { vi: "AI Information Retrieval", en: "AI Information Retrieval" },
    academicStandard: "Lewis et al. (2020) Retrieval-Augmented Generation · Gorilla LLM Tool Calling (2023)",
    title: {
      vi: "Phân Luồng Ý Định Bằng Semantic Router & Cơ Chế SQL Tool Calling An Toàn",
      en: "Semantic Intent Routing & Sandboxed Read-Only SQL Tool Calling",
    },
    lead: {
      vi: "Khắc phục triệt để hiện tượng 'ảo giác' (Hallucination) của mô hình ngôn ngữ lớn khi tra cứu dữ liệu bưu kiện thay đổi theo thời gian thực.",
      en: "Completely eliminating LLM hallucinations when querying volatile, real-time logistics telemetry.",
    },
    body: {
      vi: "Điểm yếu chí mạng của các mô hình RAG thuần túy (Vector Search) là không thể trả lời chính xác các câu hỏi có dữ liệu thay đổi theo mili-giây như: 'Bưu kiện NX-982134 đang ở đâu?'. Nếu đưa dữ liệu này vào Vector Database, chi phí tái tạo index (Re-indexing) sẽ làm sập hệ thống và LLM rất dễ sinh ảo giác tự bịa ra vị trí xe tải. \n\nNexus Express giải quyết bài toán bằng bộ định tuyến ngữ nghĩa **Semantic Router**: \n- Nhóm câu hỏi tra cứu theo mã vận đơn được chuyển hướng sang **SQL Tool Calling**: LLM sinh câu truy vấn SQL có cấu trúc, chạy trong môi trường Sandbox Read-Only trên PostgreSQL Read-Replica để lấy chính xác trạng thái thực tế mới nhất. \n- Nhóm câu hỏi hỏi đáp chính sách bồi thường, quy định hàng cấm được chuyển hướng sang **PgVector Embedding**: sử dụng thuật toán HNSW tìm kiếm ngữ nghĩa theo độ tương đồng Cosine Similarity.",
      en: "A fatal flaw in standard vector RAG is its inability to answer volatile, millisecond-changing inquiries like 'Where is parcel NX-982134 right now?'. Re-indexing live vector stores continuously triggers massive I/O bottlenecks and invites hallucinated tracking coordinates. \n\nNexus Express implements a **Semantic Router**: \n- Tracking queries route to **Sandboxed SQL Tool Calling**: The LLM synthesizes parameterized SQL executing against isolated Read-Only database replicas. \n- Policy and regulatory queries route to **PgVector HNSW**: Utilizing cosine similarity search across dense compliance document embeddings.",
    },
    formulaOrCode: `// Phân loại ý định Semantic Router (Cosine Similarity với Vector Ý Định Mẫu)
Score_Tracking = Cosine_Similarity(Vector(User_Query), Vector("Tra cứu trạng thái mã vận đơn"));
Score_Policy   = Cosine_Similarity(Vector(User_Query), Vector("Quy định hàng cấm gửi và bồi thường"));

if (Score_Tracking > 0.82) {
  return executeSandboxedSqlTool("SELECT current_hub, status, updated_at FROM parcels WHERE code = $1", [code]);
} else {
  return queryPgVectorKnowledgeBase(User_Query, { top_k: 3 });
}`,
    keyTakeaways: {
      vi: [
        "Độ chính xác dữ liệu bưu kiện đạt 100% nhờ truy vấn trực tiếp cơ sở dữ liệu quan hệ.",
        "Ngăn chặn hoàn toàn lỗi SQL Injection bằng cơ chế Parameterized Queries và phân quyền Role Read-Only.",
        "Giảm 80% chi phí gọi token LLM nhờ lọc bớt các câu hỏi tra cứu thông thường sang API cấu trúc.",
      ],
      en: [
        "100% parcel data accuracy attained through direct relational database reads.",
        "Zero SQL injection vulnerability via mandatory parameterized queries and strict Read-Only DB roles.",
        "80% LLM token cost reduction by deflecting structured status checks away from generation prompts.",
      ],
    },
  },

  // =========================================================================
  // 6. BUSINESS ANALYSIS & DATA MODELING (BABOK, UML 2.5, BPMN 2.0, 3NF)
  // =========================================================================
  "concept-3nf-normalization": {
    id: "concept-3nf-normalization",
    badge: { vi: "CHUẨN HÓA DỮ LIỆU", en: "DATA NORMALIZATION" },
    category: { vi: "Database Relational Theory", en: "Database Relational Theory" },
    academicStandard: "Edgar F. Codd (1970) · Third Normal Form (3NF) · Relational Completeness",
    title: {
      vi: "Chuẩn Hóa Cơ Sở Dữ Liệu 3NF & Triệt Tiêu Dị Thường Thao Tác (Anomalies)",
      en: "Third Normal Form (3NF) Normalization & Mutation Anomaly Elimination",
    },
    lead: {
      vi: "Mỗi thuộc tính không khóa phải phụ thuộc trực tiếp vào khóa chính, không phụ thuộc bắc cầu (Transitive Dependency).",
      en: "Every non-key attribute must depend directly on the primary key, eliminating transitive dependencies.",
    },
    body: {
      vi: "Trong thiết kế cơ sở dữ liệu cho logistics, sai lầm phổ biến là nhồi nhét tên Hub, địa chỉ Hub và số điện thoại quản lý Hub vào trực tiếp bảng `parcels` (Bưu kiện). Khi Hub chuyển trụ sở hoặc đổi tên, nhân viên buộc phải chạy lệnh update hàng triệu dòng bưu kiện cũ, gây ra dị thường cập nhật (Update Anomaly) và sai lệch dữ liệu lịch sử. \n\nNexus Express tuân thủ nghiêm ngặt Chuẩn Hóa Codd 3NF: \n1. **1NF:** Tất cả giá trị trong cột đều là nguyên tử (Atomic Values), không chứa danh sách mảng lồng nhau trong trường văn bản. \n2. **2NF:** Mọi thuộc tính không khóa đều phụ thuộc toàn phần vào khóa chính, tách biệt bảng `linehaul_trips` và `linehaul_manifest_items`. \n3. **3NF:** Triệt tiêu phụ thuộc bắc cầu. Bảng `parcels` chỉ lưu trữ `origin_hub_id` (Khóa ngoại FK trỏ tới bảng `hubs`). Toàn bộ metadata của Hub chỉ tồn tại duy nhất tại một bản ghi trong bảng `hubs`.",
      en: "A classic pitfall in logistics schema design is embedding Hub addresses and contact phones directly into the `parcels` table. Relocating a depot forces mutating millions of legacy parcel rows, spawning Update Anomalies and audit corruption. \n\nNexus Express enforces Edgar F. Codd's 3NF normalization: \n1. **1NF:** Atomic column values with zero unnested array strings. \n2. **2NF:** Non-prime attributes are fully functionally dependent on Candidate Keys. \n3. **3NF:** Elimination of transitive dependencies. The `parcels` entity retains solely `origin_hub_id` foreign keys.",
    },
    formulaOrCode: `// Định nghĩa hình thức 3NF (Functional Dependencies):
R là lược đồ quan hệ ở dạng 2NF.
R đạt 3NF nếu với mọi phụ thuộc hàm X -> A, một trong hai điều kiện sau thỏa mãn:
1. X là một siêu khóa (Superkey).
2. A là một thuộc tính nguyên tố (thuộc một khóa ứng viên bất kỳ).

Schema Phân rã 3NF không tổn thất (Lossless Decomposition):
parcels(id, tracking_code, origin_hub_id [FK], cod_amount, status)
hubs(id, code, name, address, province_id, max_throughput_hourly)`,
    keyTakeaways: {
      vi: [
        "Loại bỏ 100% rủi ro dư thừa dữ liệu (Data Redundancy) và dị thường xóa/sửa (Deletion/Update Anomalies).",
        "Tiết kiệm dung lượng lưu trữ đĩa SSD trên hệ thống hàng chục triệu đơn hàng.",
        "Thiết lập các ràng buộc toàn vẹn khóa ngoại (Foreign Key Constraints) đảm bảo dữ liệu luôn nhất quán ở tầng hạt nhân.",
      ],
      en: [
        "Zero data redundancy and complete eradication of update/deletion anomalies.",
        "Substantial disk storage savings across tables housing tens of millions of shipments.",
        "Enforces strict relational foreign key constraints directly at the database engine level.",
      ],
    },
  },

  "concept-babok-requirements": {
    id: "concept-babok-requirements",
    badge: { vi: "CHUẨN QUỐC TẾ BABOK V3", en: "BABOK V3 STANDARD" },
    category: { vi: "Business Analysis Body of Knowledge", en: "Business Analysis Body of Knowledge" },
    academicStandard: "IIBA BABOK Guide v3 · Chapter 6: Strategy Analysis & Chapter 7: Requirements Analysis",
    title: {
      vi: "Quy Trình Phân Tích Yêu Cầu Theo BABOK v3 & Ma Trận Ràng Buộc RTM",
      en: "BABOK v3 Requirements Engineering & Traceability Matrix (RTM)",
    },
    lead: {
      vi: "Chuyển hóa nỗi đau vận hành mơ hồ của doanh nghiệp thành đặc tả kỹ thuật đo lường được (Measurable Acceptance Criteria).",
      en: "Transforming ambiguous operational pain points into measurable, testable software specifications.",
    },
    body: {
      vi: "Theo tiêu chuẩn IIBA BABOK v3, một Business Analyst chuyên nghiệp không bắt đầu bằng việc vẽ màn hình hay viết code, mà bắt đầu từ Phân Tích Chiến Lược (Strategy Analysis) để tìm ra khoảng trống giữa trạng thái hiện tại (Current State - As-Is) và trạng thái mong muốn (Future State - To-Be). \n\nMọi yêu cầu nghiệp vụ (Business Requirements) đều phải được phân rã thành Yêu cầu các bên liên quan (Stakeholder Requirements), Yêu cầu giải pháp (Solution Requirements - bao gồm Chức năng và Phi chức năng NFR), và kết thúc bằng Ma trận truy xuất nguồn gốc (Requirements Traceability Matrix - RTM). Mỗi ca kiểm thử (Test Case) đều phải ánh xạ ngược về một mã yêu cầu gốc (REQ-ID), đảm bảo không bỏ sót bất kỳ quy định nghiệp vụ cốt lõi nào.",
      en: "According to the IIBA BABOK Guide v3, professional Business Analysis starts with Strategy Analysis, measuring gaps between Current State (As-Is) and Desired Future State (To-Be). \n\nBusiness requirements are systematically decomposed into Stakeholder Requirements, Solution Functional/Non-Functional Requirements (NFR), and mapped into a Requirements Traceability Matrix (RTM). Every QA test case maps back to a specific requirement ID (REQ-ID), verifying full specification coverage.",
    },
    formulaOrCode: `// Ma Trận Truy Xuất Nguồn Gốc Yêu Cầu (Requirements Traceability Matrix - RTM)
+----------+--------------------------+--------------------+----------------------+
| REQ-ID   | Mô Tả Nghiệp Vụ (BABOK)  | Kiến Trúc Kỹ Thuật | Test Case / SLA      |
+----------+--------------------------+--------------------+----------------------+
| BR-01    | Chống thu trùng tiền COD | Redis SETNX 24H    | TC-IDEMP-01 (0.00%)  |
| BR-02    | Xác thực shipper giao thật| Haversine Geofence | TC-GEO-04 (r < 300m) |
| BR-03    | Tối ưu xe chạy Bắc - Nam | Hub-and-Spoke 3Hub | TC-LINEHAUL-SLA (48h)|
+----------+--------------------------+--------------------+----------------------+`,
    keyTakeaways: {
      vi: [
        "Đảm bảo 100% chức năng lập trình ra đều phục vụ trực tiếp mục tiêu tài chính của doanh nghiệp.",
        "Thiết lập ngôn ngữ chung (Ubiquitous Language) giữa Ban Giám Đốc, Đội Vận Hành và Kỹ Sư Công Nghệ.",
        "Kiểm soát phạm vi dự án (Scope Creep), ngăn chặn phát sinh chi phí và thời gian triển khai ngoài kế hoạch.",
      ],
      en: [
        "Ensures 100% of engineering tickets deliver verifiable business and financial value.",
        "Fosters an unambiguous Ubiquitous Language between Executives, Operations, and Developers.",
        "Prevents scope creep, safeguarding budgets and release schedules against unpredictable drift.",
      ],
    },
  },
};

export function getTheoryConceptById(id: string): TheoryConcept | undefined {
  return ACADEMIC_THEORY_CONCEPTS[id];
}

export function getDefaultConceptForSlug(slug: string): TheoryConcept {
  if (slug === "nexus-map-hubs") return ACADEMIC_THEORY_CONCEPTS["concept-hub-and-spoke"];
  if (slug === "nexus-order-lifecycle") return ACADEMIC_THEORY_CONCEPTS["concept-fsm-automata"];
  if (slug === "nexus-exceptions-rto") return ACADEMIC_THEORY_CONCEPTS["concept-haversine-geofencing"];
  if (slug === "nexus-architecture") return ACADEMIC_THEORY_CONCEPTS["concept-idempotency-key"];
  if (slug === "nexus-ai-rag") return ACADEMIC_THEORY_CONCEPTS["concept-rag-semantic-router"];
  if (slug === "nexus-results") return ACADEMIC_THEORY_CONCEPTS["concept-cap-theorem"];
  if (slug.includes("ba-diag-erd")) return ACADEMIC_THEORY_CONCEPTS["concept-3nf-normalization"];
  if (slug.includes("ba-diag") || slug.includes("business-analyst")) return ACADEMIC_THEORY_CONCEPTS["concept-babok-requirements"];
  return ACADEMIC_THEORY_CONCEPTS["concept-hub-and-spoke"];
}
