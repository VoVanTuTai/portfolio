import {
  ArrowLeft,
  ArrowUpRight,
  BookOpen,
  CheckCircle2,
  KeyRound,
  Sparkles,
} from "lucide-react";
import type { NavigateHandler } from "@/types";
import { BrandAvatar } from "@/components/BrandAvatar";
import { LearningPathNav } from "./components/LearningPathNav";

export function DataModelingPage({ navigate }: { navigate: NavigateHandler }) {
  return (
    <main className="site-shell knowledge-shell modeling-lesson">
      <header className="topbar knowledge-topbar" aria-label="Data modeling lesson navigation">
        <a
          className="brand"
          href="/knowledge"
          onClick={(event) => navigate(event, "/knowledge")}
          aria-label="Learning hub"
        >
          <BrandAvatar alt="Knowledge Hub" />
          <div className="brand-text">
            <span className="brand-name">Knowledge Hub</span>
            <span className="brand-tag">Data Modeling &amp; ERD</span>
          </div>
        </a>
        <nav>
          <a href="#requirements">Yêu cầu</a>
          <a href="#erd">ERD</a>
          <a href="#normalization">Chuẩn hóa</a>
          <a href="#practice">Bài tập</a>
        </nav>
      </header>
      <LearningPathNav currentPath="/knowledge/database/data-modeling" navigate={navigate} />

      <section className="knowledge-hero modeling-hero">
        <div>
          <a
            className="back-link"
            href="/knowledge/database"
            onClick={(event) => navigate(event, "/knowledge/database")}
          >
            <ArrowLeft size={17} aria-hidden="true" />
            Trở về Database Fundamentals
          </a>
          <p className="eyebrow">Database Fundamentals · Bài 03</p>
          <h1>Data Modeling: từ yêu cầu nghiệp vụ đến ERD</h1>
          <p className="knowledge-lede">
            Học như trong một buổi phân tích hệ thống: đọc yêu cầu đặt phòng, đặt câu hỏi làm rõ, tìm entity,
            xác định cardinality, vẽ ERD, chuyển sang relational schema và kiểm tra chuẩn hóa.
          </p>
          <div className="lesson-meta" aria-label="Lesson information">
            <span><BookOpen size={16} aria-hidden="true" /> Thực hành có hướng dẫn</span>
            <span>35 phút học</span>
            <span>1 case study xuyên suốt</span>
          </div>
        </div>

        <aside className="learning-outcomes">
          <p className="panel-label">Sau bài này, bạn có thể</p>
          <ul>
            <li><CheckCircle2 size={18} aria-hidden="true" /> Tách entity và attribute từ requirement.</li>
            <li><CheckCircle2 size={18} aria-hidden="true" /> Xác định quan hệ 1-1, 1-N và N-N.</li>
            <li><CheckCircle2 size={18} aria-hidden="true" /> Đọc và giải thích một ERD bằng nghiệp vụ.</li>
            <li><CheckCircle2 size={18} aria-hidden="true" /> Kiểm tra schema theo 1NF, 2NF và 3NF.</li>
          </ul>
        </aside>
      </section>

      <div className="lesson-layout">
        <aside className="lesson-toc" aria-label="Mục lục bài Data Modeling">
          <p>Chương trong bài</p>
          <a href="#requirements">1. Đọc yêu cầu</a>
          <a href="#entities">2. Entity và key</a>
          <a href="#cardinality">3. Relationship và ERD</a>
          <a href="#schema">4. Schema và chuẩn hóa</a>
          <a href="#practice">5. Thực hành và ôn tập</a>
        </aside>

        <article className="lesson-content">
          <section className="lesson-section" id="requirements">
            <p className="section-label">01 · Bắt đầu từ nghiệp vụ</p>
            <h2>Đừng vẽ bảng ngay khi vừa đọc đề</h2>
            <p>
              Giảng viên đưa cho bạn yêu cầu: “Khách hàng có thể tìm phòng và tạo booking. Một booking có thể
              gồm nhiều phòng, có thanh toán và sau khi hoàn tất khách hàng có thể đánh giá nơi lưu trú.”
            </p>

            <div className="case-brief">
              <span>Case study · Tourist accommodation</span>
              <h3>Những gì đề bài chưa nói</h3>
              <div className="clarifying-grid">
                <div><strong>Booking nhiều phòng?</strong><p>Có. Vì vậy Booking và Room có thể là quan hệ N-N.</p></div>
                <div><strong>Một booking nhiều payment?</strong><p>Có thể có thanh toán lại hoặc hoàn tiền, nên không vội gắn payment thành vài cột.</p></div>
                <div><strong>Review cho room hay accommodation?</strong><p>Trong bài này review thuộc accommodation và phát sinh từ booking đã hoàn tất.</p></div>
                <div><strong>Giá phòng có thay đổi?</strong><p>Có. Booking phải giữ giá tại thời điểm đặt, không chỉ đọc giá hiện tại của room.</p></div>
              </div>
            </div>

            <div className="teacher-note">
              <strong>Thầy nhắc:</strong>
              <p>
                Data model không chỉ phản ánh danh từ trong câu. Nó phản ánh business rule, lịch sử cần lưu và
                những câu hỏi hệ thống phải trả lời sau này.
              </p>
            </div>
          </section>

          <section className="lesson-section" id="entities">
            <p className="section-label">02 · Entity discovery</p>
            <h2>Tìm đối tượng có danh tính và vòng đời riêng</h2>
            <p>
              Entity thường là đối tượng nghiệp vụ cần được tạo, thay đổi, tra cứu hoặc tham chiếu độc lập.
              Danh từ chỉ là gợi ý; tiêu chí quan trọng là hệ thống có cần quản lý vòng đời của nó hay không.
            </p>

            <div className="entity-discovery-grid">
              <article><span>Actor</span><h3>User</h3><p>Có tài khoản, danh tính và tạo booking.</p></article>
              <article><span>Business object</span><h3>Accommodation</h3><p>Nơi lưu trú chứa nhiều room và nhận review.</p></article>
              <article><span>Inventory</span><h3>Room</h3><p>Đơn vị có loại phòng, sức chứa, giá và trạng thái.</p></article>
              <article><span>Transaction</span><h3>Booking</h3><p>Ghi nhận ý định đặt phòng, thời gian và trạng thái.</p></article>
              <article><span>Financial record</span><h3>Payment</h3><p>Có phương thức, số tiền, trạng thái và thời điểm riêng.</p></article>
              <article><span>Feedback</span><h3>Review</h3><p>Điểm số và nhận xét gắn với trải nghiệm đã hoàn tất.</p></article>
            </div>

            <details className="teacher-question">
              <summary>Kiểm tra tư duy: “room price” có phải entity không?</summary>
              <p>
                Chưa chắc. Nếu chỉ cần giá hiện tại, <code>price</code> là attribute của Room. Nếu cần lịch sử giá,
                giá theo ngày hoặc chính sách giá, ta có thể tách thành RatePlan hoặc RoomRate có vòng đời riêng.
              </p>
            </details>
          </section>

          <section className="lesson-section" id="attributes">
            <p className="section-label">03 · Attribute và key</p>
            <h2>Mỗi attribute phải mô tả đúng một sự thật</h2>
            <p>
              Attribute mô tả entity. Chọn data type, tính bắt buộc, uniqueness và default value là một phần của
              mô hình, không phải việc để “lúc code tính sau”.
            </p>

            <div className="attribute-board">
              <div className="attribute-entity">
                <strong>booking</strong>
                <span><KeyRound size={14} aria-hidden="true" /> id · PK</span>
                <span>user_id · FK · NOT NULL</span>
                <span>check_in · DATE</span>
                <span>check_out · DATE</span>
                <span>status · VARCHAR</span>
                <span>total_amount · DECIMAL</span>
                <span>created_at · TIMESTAMP</span>
              </div>
              <div className="attribute-rules">
                <h3>Constraint kể lại business rule</h3>
                <ul>
                  <li><code>check_out &gt; check_in</code></li>
                  <li><code>total_amount &gt;= 0</code></li>
                  <li><code>user_id</code> phải tham chiếu user tồn tại</li>
                  <li><code>status</code> chỉ nhận tập giá trị hợp lệ</li>
                </ul>
              </div>
            </div>

            <div className="key-comparison">
              <div><strong>Natural key</strong><p>Có ý nghĩa nghiệp vụ như email hoặc mã vận đơn, nhưng có thể thay đổi.</p></div>
              <div><strong>Surrogate key</strong><p>ID kỹ thuật như UUID hoặc auto-increment, ổn định cho relationship.</p></div>
              <div><strong>Composite key</strong><p>Nhiều cột cùng định danh row, thường gặp ở bảng trung gian.</p></div>
            </div>
          </section>

          <section className="lesson-section" id="cardinality">
            <p className="section-label">04 · Relationship và cardinality</p>
            <h2>Đọc quan hệ bằng hai câu hỏi</h2>
            <p>
              Với mỗi cặp entity, hỏi theo cả hai chiều: “Một A có tối đa bao nhiêu B?” và “Một B thuộc tối đa
              bao nhiêu A?”. Sau đó hỏi thêm quan hệ có bắt buộc hay không.
            </p>

            <div className="cardinality-grid">
              <article>
                <span>1 → N</span>
                <h3>User tạo Booking</h3>
                <p>Một user có nhiều booking; mỗi booking thuộc đúng một user.</p>
                <code>bookings.user_id → users.id</code>
              </article>
              <article>
                <span>1 → N</span>
                <h3>Accommodation chứa Room</h3>
                <p>Một accommodation có nhiều room; mỗi room thuộc một accommodation.</p>
                <code>rooms.accommodation_id</code>
              </article>
              <article>
                <span>N ↔ N</span>
                <h3>Booking gồm Room</h3>
                <p>Một booking có nhiều room; một room xuất hiện trong nhiều booking theo thời gian.</p>
                <code>booking_rooms</code>
              </article>
              <article>
                <span>1 → 0..N</span>
                <h3>Booking có Payment</h3>
                <p>Booking mới tạo có thể chưa thanh toán và có thể phát sinh nhiều payment attempt.</p>
                <code>payments.booking_id</code>
              </article>
            </div>

            <div className="junction-explainer">
              <div>
                <p className="panel-label">Vì sao cần bảng trung gian?</p>
                <h3>Quan hệ N-N thường chứa dữ liệu của chính quan hệ đó</h3>
              </div>
              <div className="junction-fields">
                <span>booking_id · FK</span>
                <span>room_id · FK</span>
                <span>unit_price</span>
                <span>guest_count</span>
              </div>
              <p>
                <code>unit_price</code> không thuộc riêng Room hay Booking. Nó là giá của room trong booking cụ thể,
                nên nằm ở <code>booking_rooms</code>.
              </p>
            </div>
          </section>

          <section className="lesson-section" id="erd">
            <p className="section-label">05 · ERD</p>
            <h2>Đọc ERD như một câu chuyện nghiệp vụ</h2>
            <p>
              ERD dưới đây không chỉ là sơ đồ kỹ thuật. Hãy đọc: user tạo booking; booking chọn room qua
              booking_rooms; room thuộc accommodation; booking phát sinh payment; booking hoàn tất có thể tạo review.
            </p>

            <div className="booking-erd" aria-label="Booking system entity relationship diagram">
              <div className="erd-node erd-user"><strong>users</strong><span>id · PK</span><span>email · UQ</span><span>full_name</span></div>
              <div className="erd-node erd-booking"><strong>bookings</strong><span>id · PK</span><span>user_id · FK</span><span>check_in / check_out</span><span>status</span></div>
              <div className="erd-node erd-booking-room"><strong>booking_rooms</strong><span>booking_id · PK/FK</span><span>room_id · PK/FK</span><span>unit_price</span></div>
              <div className="erd-node erd-room"><strong>rooms</strong><span>id · PK</span><span>accommodation_id · FK</span><span>name / capacity</span></div>
              <div className="erd-node erd-accommodation"><strong>accommodations</strong><span>id · PK</span><span>name / address</span><span>provider_id · FK</span></div>
              <div className="erd-node erd-payment"><strong>payments</strong><span>id · PK</span><span>booking_id · FK</span><span>amount / status</span></div>
              <div className="erd-node erd-review"><strong>reviews</strong><span>id · PK</span><span>booking_id · FK/UQ</span><span>rating / comment</span></div>
              <span className="erd-edge edge-user-booking">1 — N</span>
              <span className="erd-edge edge-booking-junction">1 — N</span>
              <span className="erd-edge edge-room-junction">N — 1</span>
              <span className="erd-edge edge-room-accommodation">N — 1</span>
              <span className="erd-edge edge-booking-payment">1 — N</span>
              <span className="erd-edge edge-booking-review">1 — 0..1</span>
            </div>

            <details className="teacher-question">
              <summary>Thử giải thích ERD này trong 60 giây như khi phỏng vấn</summary>
              <p>
                “User có thể tạo nhiều booking. Booking và room là N-N nên tôi dùng booking_rooms, đồng thời lưu
                unit_price để giữ giá tại thời điểm đặt. Mỗi room thuộc một accommodation. Booking có nhiều payment
                attempt và tối đa một review sau khi hoàn tất. Foreign key giữ toàn vẹn, còn unique trên
                reviews.booking_id ngăn review trùng.”
              </p>
            </details>
          </section>

          <section className="lesson-section" id="schema">
            <p className="section-label">06 · Từ ERD sang relational schema</p>
            <h2>Mỗi entity thành bảng, mỗi relationship thành constraint</h2>
            <div className="schema-code">
              <div className="table-caption">
                <strong>Ví dụ DDL rút gọn</strong>
                <span>PostgreSQL-style SQL</span>
              </div>
              <pre><code>{`CREATE TABLE booking_rooms (
  booking_id BIGINT NOT NULL REFERENCES bookings(id),
  room_id BIGINT NOT NULL REFERENCES rooms(id),
  unit_price DECIMAL(12, 2) NOT NULL CHECK (unit_price >= 0),
  guest_count INT NOT NULL CHECK (guest_count > 0),
  PRIMARY KEY (booking_id, room_id)
);

CREATE TABLE reviews (
  id BIGINT PRIMARY KEY,
  booking_id BIGINT NOT NULL UNIQUE REFERENCES bookings(id),
  rating INT NOT NULL CHECK (rating BETWEEN 1 AND 5),
  comment TEXT
);`}</code></pre>
            </div>

            <div className="schema-checklist">
              <h3>Trước khi chấp nhận schema</h3>
              <ul>
                <li>PK có ổn định và duy nhất không?</li>
                <li>FK có đúng ownership và optionality không?</li>
                <li>Constraint nào nên được database bảo vệ?</li>
                <li>Kiểu dữ liệu có phù hợp tiền, thời gian và Unicode không?</li>
                <li>Query quan trọng sẽ đi qua cột nào và cần index gì?</li>
              </ul>
            </div>
          </section>

          <section className="lesson-section" id="normalization">
            <p className="section-label">07 · Normalization</p>
            <h2>Chuẩn hóa là loại bỏ sự phụ thuộc sai chỗ</h2>
            <p>
              Mục tiêu không phải chia càng nhiều bảng càng tốt. Mục tiêu là mỗi sự thật có một nơi chịu trách nhiệm,
              để update không tạo ra nhiều phiên bản mâu thuẫn.
            </p>

            <div className="normalization-steps">
              <article>
                <span>1NF</span>
                <div><h3>Giá trị phải atomic</h3><p>Không lưu <code>room_ids = "12,18,21"</code> trong một cột. Mỗi quan hệ booking-room là một row.</p></div>
              </article>
              <article>
                <span>2NF</span>
                <div><h3>Không phụ thuộc một phần composite key</h3><p>Trong booking_rooms, <code>room_name</code> chỉ phụ thuộc room_id nên phải nằm ở rooms.</p></div>
              </article>
              <article>
                <span>3NF</span>
                <div><h3>Không phụ thuộc bắc cầu</h3><p>Không lưu accommodation_address trong rooms nếu address phụ thuộc accommodation_id.</p></div>
              </article>
            </div>

            <div className="before-after-model">
              <div className="bad-model">
                <span>Thiết kế yếu</span>
                <code>booking(id, user_name, room_ids, room_names, hotel_address, payment_status)</code>
                <p>Dữ liệu lặp, khó constraint, khó query và update dễ sai lệch.</p>
              </div>
              <div className="good-model">
                <span>Thiết kế đã phân trách nhiệm</span>
                <code>users → bookings → booking_rooms ← rooms → accommodations</code>
                <p>Mỗi bảng quản lý một sự thật; relationship được thể hiện bằng key.</p>
              </div>
            </div>
          </section>

          <section className="lesson-section" id="mistakes">
            <p className="section-label">08 · Lỗi thường gặp</p>
            <h2>Năm dấu hiệu data model cần xem lại</h2>
            <div className="modeling-mistakes">
              <div><span>01</span><p><strong>Một cột chứa danh sách.</strong> Thường đang giấu quan hệ N-N.</p></div>
              <div><span>02</span><p><strong>Lưu dữ liệu có thể suy ra ở khắp nơi.</strong> Dễ tạo nhiều nguồn sự thật.</p></div>
              <div><span>03</span><p><strong>Không lưu snapshot lịch sử.</strong> Giá hiện tại thay đổi làm sai booking cũ.</p></div>
              <div><span>04</span><p><strong>Dùng text cho mọi status.</strong> Thiếu tập giá trị và transition hợp lệ.</p></div>
              <div><span>05</span><p><strong>ERD không trả lời nghiệp vụ.</strong> Có bảng nhưng không biết ai tạo, khi nào và vì sao.</p></div>
            </div>
          </section>

          <section className="lesson-section" id="practice">
            <p className="section-label">09 · Bài tập trên lớp</p>
            <h2>Đến lượt bạn thiết kế</h2>
            <div className="practice-assignment">
              <div>
                <span>Đề bài 15 phút</span>
                <h3>Thêm dịch vụ bổ sung vào booking</h3>
                <p>
                  Khách có thể chọn bữa sáng, đưa đón sân bay hoặc thuê xe. Mỗi dịch vụ có giá riêng tại thời điểm
                  đặt và một booking có thể chọn nhiều dịch vụ với số lượng khác nhau.
                </p>
              </div>
              <ol>
                <li>Xác định entity mới.</li>
                <li>Chọn cardinality với Booking.</li>
                <li>Quyết định nơi lưu quantity và unit_price.</li>
                <li>Viết PK, FK và constraint cần thiết.</li>
              </ol>
            </div>

            <details className="solution-card">
              <summary>Mở đáp án gợi ý sau khi đã tự làm</summary>
              <div>
                <p>Tạo <code>services</code> và bảng trung gian <code>booking_services</code>.</p>
                <pre><code>{`services(id PK, accommodation_id FK, name, current_price)

booking_services(
  booking_id PK/FK,
  service_id PK/FK,
  quantity CHECK (quantity > 0),
  unit_price CHECK (unit_price >= 0)
)`}</code></pre>
                <p>
                  <code>unit_price</code> nằm ở bảng trung gian để giữ snapshot giá tại thời điểm booking.
                  Composite PK ngăn cùng service bị thêm lặp cho một booking.
                </p>
              </div>
            </details>
          </section>

          <section className="lesson-section review-section" id="modeling-review">
            <p className="section-label">10 · Ôn tập và phỏng vấn</p>
            <h2>Trả lời thành tiếng trước khi mở đáp án</h2>
            <div className="review-list">
              <details><summary>1. Làm sao phân biệt entity và attribute?</summary><p>Entity có danh tính, vòng đời và thường được tham chiếu độc lập. Attribute chỉ mô tả một entity. Nếu “giá” cần lịch sử và quy tắc riêng, nó có thể phát triển từ attribute thành entity.</p></details>
              <details><summary>2. Vì sao quan hệ N-N cần bảng trung gian?</summary><p>Relational database không biểu diễn trực tiếp N-N bằng một FK. Bảng trung gian tách quan hệ thành hai quan hệ 1-N và có thể chứa dữ liệu của quan hệ như quantity hoặc unit_price.</p></details>
              <details><summary>3. Cardinality và optionality khác nhau thế nào?</summary><p>Cardinality mô tả số lượng tối đa như một hay nhiều; optionality mô tả tối thiểu là 0 hay 1. Booking có 0..N payment nghĩa là payment chưa bắt buộc khi booking mới tạo.</p></details>
              <details><summary>4. Khi nào dùng composite key?</summary><p>Khi tổ hợp nhiều cột tự nhiên định danh duy nhất row, thường ở bảng junction. Có thể dùng surrogate ID nhưng vẫn nên đặt unique constraint trên cặp business key.</p></details>
              <details><summary>5. 3NF giải quyết vấn đề gì?</summary><p>3NF loại bỏ phụ thuộc bắc cầu: non-key attribute không nên phụ thuộc vào non-key attribute khác. Điều này giảm lặp và update anomaly.</p></details>
              <details><summary>6. Vì sao booking_rooms lưu unit_price?</summary><p>Vì cần snapshot giá tại thời điểm đặt. Nếu chỉ tham chiếu rooms.current_price, lịch sử booking sẽ thay đổi khi giá phòng được cập nhật.</p></details>
              <details><summary>7. ERD có đủ để triển khai database chưa?</summary><p>Chưa. Cần thêm data type, nullability, default, check/unique constraint, index, cascade policy và các rule không thể hiện đầy đủ trên ERD.</p></details>
            </div>
          </section>

          <div className="next-lesson">
            <span>Bước tiếp theo</span>
            <strong>Đưa data model ra ngoài bằng REST API</strong>
            <p>Học request lifecycle, resource design, validation, authentication và authorization.</p>
            <a
              className="next-lesson-link"
              href="/knowledge/backend-api"
              onClick={(event) => navigate(event, "/knowledge/backend-api")}
            >
              Sang Backend &amp; API
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          </div>
        </article>
      </div>

      <footer>
        <span>Data Modeling &amp; ERD · Bài 03</span>
        <span><Sparkles size={15} aria-hidden="true" /> Learn by modeling</span>
      </footer>
    </main>
  );
}

export default DataModelingPage;
