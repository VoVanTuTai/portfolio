import {
  ArrowLeft,
  ArrowUpRight,
  BookOpen,
  CheckCircle2,
  Code2,
  Database,
  KeyRound,
  Network,
  ServerCog,
  Sparkles,
  Table2,
} from "lucide-react";
import type { NavigateHandler } from "@/types";
import { BrandAvatar } from "@/components/BrandAvatar";
import topbarStyles from "@/components/Topbar.module.css";
import { LearningPathNav } from "./components/LearningPathNav";

export function DatabasePage({ navigate }: { navigate: NavigateHandler }) {
  return (
    <main className="site-shell knowledge-shell">
      <header
        className={`${topbarStyles.topbar} ${topbarStyles.knowledgeTopbar}`}
        aria-label="Knowledge navigation"
      >
        <a
          className={topbarStyles.brand}
          href="/knowledge"
          onClick={(event) => navigate(event, "/knowledge")}
          aria-label="Learning hub"
        >
          <BrandAvatar alt="Knowledge Hub" />
          <div className={topbarStyles.brandText}>
            <span className={topbarStyles.brandName}>Knowledge Hub</span>
            <span className={topbarStyles.brandTag}>Database Fundamentals</span>
          </div>
        </a>
        <nav className={topbarStyles.nav}>
          <a href="#overview">Khái niệm</a>
          <a href="#sql-vs-nosql">SQL và NoSQL</a>
          <a href="#database-selection">Cách lựa chọn</a>
          <a href="#interview-questions">Phỏng vấn</a>
        </nav>
      </header>
      <LearningPathNav currentPath="/knowledge/database" navigate={navigate} />

      <section className="knowledge-hero">
        <div>
          <a
            className="back-link"
            href="/knowledge/programming-languages"
            onClick={(event) => navigate(event, "/knowledge/programming-languages")}
          >
            <ArrowLeft size={17} aria-hidden="true" />
            Trở về Programming Languages
          </a>
          <p className="eyebrow">Database Fundamentals · Bài 02</p>
          <h1>Database là gì và dữ liệu được tổ chức như thế nào?</h1>
          <p className="knowledge-lede">
            Hiểu cách hệ thống tổ chức dữ liệu, SQL và NoSQL giải quyết những bài toán khác nhau ra sao, và cách
            lựa chọn database dựa trên yêu cầu thật của một dự án.
          </p>
          <div className="lesson-meta" aria-label="Lesson information">
            <span><BookOpen size={16} aria-hidden="true" /> Nền tảng</span>
            <span>25 phút đọc</span>
            <span>25 câu ôn tập</span>
          </div>
        </div>

        <aside className="learning-outcomes">
          <p className="panel-label">Sau bài này, bạn có thể</p>
          <ul>
            <li><CheckCircle2 size={18} aria-hidden="true" /> Phân biệt database và DBMS.</li>
            <li><CheckCircle2 size={18} aria-hidden="true" /> Mô tả table, row, column và relationship.</li>
            <li><CheckCircle2 size={18} aria-hidden="true" /> So sánh SQL với các mô hình NoSQL.</li>
            <li><CheckCircle2 size={18} aria-hidden="true" /> Chọn database dựa trên access pattern và nghiệp vụ.</li>
          </ul>
        </aside>
      </section>

      <div className="lesson-layout">
        <aside className="lesson-toc" aria-label="Mục lục bài học">
          <p>Chương trong bài</p>
          <a href="#overview">1. Database là gì?</a>
          <a href="#organization">2. Dữ liệu quan hệ</a>
          <a href="#sql-vs-nosql">3. SQL và NoSQL</a>
          <a href="#database-selection">4. Chọn database</a>
          <a href="#interview-questions">5. Ôn tập phỏng vấn</a>
        </aside>

        <article className="lesson-content">
          <section className="lesson-section" id="overview">
            <p className="section-label">01 · Khái niệm</p>
            <h2>Database là một tập hợp dữ liệu có tổ chức</h2>
            <p>
              Database, hay cơ sở dữ liệu, là nơi dữ liệu được lưu theo một cấu trúc xác định để con người và phần
              mềm có thể tìm kiếm, thêm mới, cập nhật và quản lý dữ liệu một cách nhất quán.
            </p>
            <div className="definition-card">
              <strong>Ví dụ thực tế</strong>
              <p>
                Một cửa hàng trực tuyến cần lưu khách hàng, sản phẩm và đơn hàng. Nếu dữ liệu chỉ nằm trong nhiều
                file rời rạc, việc tìm “mọi đơn hàng của một khách hàng” sẽ khó và dễ sai. Database tạo ra cấu trúc
                chung để các dữ liệu này có thể liên kết với nhau.
              </p>
            </div>
          </section>

          <section className="lesson-section" id="dbms">
            <p className="section-label">02 · Công cụ quản lý</p>
            <h2>Database không phải là DBMS</h2>
            <div className="comparison-grid">
              <div>
                <Database size={22} aria-hidden="true" />
                <h3>Database</h3>
                <p>Phần dữ liệu và cấu trúc dùng để tổ chức dữ liệu.</p>
                <span>Ví dụ: database của hệ thống bán hàng</span>
              </div>
              <div>
                <ServerCog size={22} aria-hidden="true" />
                <h3>DBMS</h3>
                <p>Phần mềm giúp tạo, truy vấn, bảo vệ và vận hành database.</p>
                <span>Ví dụ: MySQL, PostgreSQL, MongoDB</span>
              </div>
            </div>
          </section>

          <section className="lesson-section" id="organization">
            <p className="section-label">03 · Cấu trúc</p>
            <h2>Dữ liệu quan hệ được tổ chức thành bảng</h2>
            <p>
              Trong relational database, dữ liệu được chia thành các bảng theo từng nhóm đối tượng. Mỗi thành phần
              của bảng đảm nhận một vai trò rõ ràng.
            </p>
            <div className="concept-grid">
              <div><Table2 size={20} aria-hidden="true" /><strong>Table</strong><span>Một nhóm đối tượng, ví dụ Customer.</span></div>
              <div><Network size={20} aria-hidden="true" /><strong>Row</strong><span>Một bản ghi khách hàng cụ thể.</span></div>
              <div><Code2 size={20} aria-hidden="true" /><strong>Column</strong><span>Một thuộc tính như name hoặc email.</span></div>
              <div><KeyRound size={20} aria-hidden="true" /><strong>Key</strong><span>Định danh và liên kết các bản ghi.</span></div>
            </div>

            <div className="data-table-wrap" aria-label="Customer table example">
              <div className="table-caption">
                <strong>customers</strong>
                <span>Mỗi hàng là một khách hàng</span>
              </div>
              <table>
                <thead>
                  <tr><th>customer_id</th><th>full_name</th><th>email</th></tr>
                </thead>
                <tbody>
                  <tr><td>101</td><td>Nguyen An</td><td>an@example.com</td></tr>
                  <tr><td>102</td><td>Tran Binh</td><td>binh@example.com</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="lesson-section" id="relational-model">
            <p className="section-label">04 · Mối quan hệ</p>
            <h2>Các bảng liên kết bằng khóa</h2>
            <p>
              Thay vì lặp lại toàn bộ thông tin khách hàng trong từng đơn hàng, bảng <code>orders</code> chỉ lưu
              <code>customer_id</code>. Giá trị này tham chiếu đến khách hàng đã tồn tại trong bảng
              <code>customers</code>.
            </p>
            <div className="relation-diagram">
              <div className="entity-card">
                <strong>customers</strong>
                <span><KeyRound size={14} aria-hidden="true" /> customer_id · PK</span>
                <span>full_name</span>
                <span>email</span>
              </div>
              <div className="relation-line"><span>1</span><b>có nhiều</b><span>N</span></div>
              <div className="entity-card">
                <strong>orders</strong>
                <span><KeyRound size={14} aria-hidden="true" /> order_id · PK</span>
                <span>customer_id · FK</span>
                <span>total_amount</span>
              </div>
            </div>
            <p className="lesson-note">
              <strong>PK</strong> (Primary Key) định danh duy nhất một bản ghi. <strong>FK</strong> (Foreign Key)
              tạo liên kết đến khóa chính của bảng khác.
            </p>
          </section>

          <section className="lesson-section" id="sql-vs-nosql">
            <p className="section-label">05 · Hai hướng tổ chức dữ liệu</p>
            <h2>SQL và NoSQL không phải hai đối thủ tuyệt đối</h2>
            <p>
              <strong>SQL</strong> là ngôn ngữ truy vấn dữ liệu quan hệ. MySQL, PostgreSQL và SQL Server là các
              DBMS sử dụng SQL. <strong>NoSQL</strong> là tên gọi chung cho các database không bắt buộc tổ chức
              dữ liệu theo bảng quan hệ truyền thống, chẳng hạn document, key-value, wide-column và graph.
            </p>

            <div className="database-type-grid">
              <article className="database-type-card sql-card">
                <span className="database-type-label">Relational database</span>
                <h3>SQL</h3>
                <p>Dữ liệu nằm trong bảng có schema rõ ràng và liên kết qua khóa.</p>
                <ul>
                  <li>Mạnh về quan hệ, JOIN và truy vấn báo cáo.</li>
                  <li>Transaction và ràng buộc dữ liệu chặt chẽ.</li>
                  <li>Phù hợp dữ liệu nghiệp vụ cần tính đúng đắn cao.</li>
                </ul>
                <strong>Ví dụ: MySQL, PostgreSQL, SQL Server</strong>
              </article>

              <article className="database-type-card nosql-card">
                <span className="database-type-label">Non-relational databases</span>
                <h3>NoSQL</h3>
                <p>Dữ liệu có thể được tổ chức theo document, cặp key-value, graph hoặc mô hình khác.</p>
                <ul>
                  <li>Schema linh hoạt hơn cho dữ liệu thường xuyên thay đổi.</li>
                  <li>Thường tối ưu theo một access pattern cụ thể.</li>
                  <li>Có nhiều mô hình với ưu điểm hoàn toàn khác nhau.</li>
                </ul>
                <strong>Ví dụ: MongoDB, Redis, Cassandra, Neo4j</strong>
              </article>
            </div>

            <div className="data-shape-example">
              <div className="example-heading">
                <div>
                  <span>Cùng một đơn hàng</span>
                  <h3>Hai cách biểu diễn dữ liệu</h3>
                </div>
                <p>Cấu trúc lưu trữ nên phục vụ cách ứng dụng đọc và cập nhật dữ liệu.</p>
              </div>

              <div className="code-comparison">
                <div>
                  <span className="code-label">SQL · Dữ liệu tách thành các bảng</span>
                  <pre><code>{`SELECT o.id, c.full_name, o.total_amount
FROM orders AS o
JOIN customers AS c
  ON c.id = o.customer_id
WHERE o.id = 501;`}</code></pre>
                  <p>Khách hàng được lưu một lần; order tham chiếu bằng foreign key.</p>
                </div>
                <div>
                  <span className="code-label">Document · Dữ liệu liên quan có thể đặt cùng nhau</span>
                  <pre><code>{`{
  "_id": 501,
  "customer": {
    "id": 101,
    "name": "Nguyen An"
  },
  "totalAmount": 850000
}`}</code></pre>
                  <p>Ứng dụng có thể đọc toàn bộ order bằng một document, đổi lại có thể lặp dữ liệu khách hàng.</p>
                </div>
              </div>
            </div>

            <p className="lesson-note">
              <strong>Điểm cần nhớ:</strong> NoSQL không có nghĩa là “không dùng SQL trong mọi trường hợp”, cũng
              không đồng nghĩa với “nhanh hơn SQL”. Hiệu năng phụ thuộc vào mô hình dữ liệu, index, truy vấn và
              cách hệ thống được vận hành.
            </p>
          </section>

          <section className="lesson-section" id="nosql-models">
            <p className="section-label">06 · Các mô hình NoSQL</p>
            <h2>NoSQL là một nhóm nhiều loại database</h2>
            <p>
              Khi nói “chọn NoSQL”, ta vẫn phải trả lời loại NoSQL nào phù hợp với dữ liệu và truy vấn của hệ
              thống. Mỗi mô hình được thiết kế cho một nhóm bài toán khác nhau.
            </p>

            <div className="nosql-model-grid">
              <article>
                <span>Document</span>
                <h3>MongoDB</h3>
                <p>Lưu object gần với JSON; phù hợp catalog có thuộc tính linh hoạt, content và hồ sơ tổng hợp.</p>
                <small>Truy cập chính: lấy document theo ID hoặc field đã index.</small>
              </article>
              <article>
                <span>Key-value</span>
                <h3>Redis</h3>
                <p>Truy cập giá trị qua key rất nhanh; phù hợp cache, session, rate limit và dữ liệu tạm thời.</p>
                <small>Truy cập chính: biết key và lấy value trực tiếp.</small>
              </article>
              <article>
                <span>Wide-column</span>
                <h3>Cassandra</h3>
                <p>Phân tán lượng ghi lớn trên nhiều node; thường dùng cho event, telemetry và time-series quy mô lớn.</p>
                <small>Truy cập chính: query được xác định trước theo partition key.</small>
              </article>
              <article>
                <span>Graph</span>
                <h3>Neo4j</h3>
                <p>Tối ưu việc đi qua nhiều tầng quan hệ; phù hợp social graph, recommendation và fraud detection.</p>
                <small>Truy cập chính: tìm đường đi và quan hệ giữa các node.</small>
              </article>
            </div>
          </section>

          <section className="lesson-section" id="database-selection">
            <p className="section-label">07 · Ra quyết định</p>
            <h2>Chọn database từ yêu cầu, không chọn từ xu hướng</h2>
            <p>
              Bắt đầu bằng các câu hỏi về dữ liệu và cách ứng dụng sử dụng dữ liệu. Tên công nghệ chỉ nên xuất
              hiện sau khi ta hiểu consistency, relationship, access pattern, quy mô và năng lực vận hành.
            </p>

            <div className="decision-table-wrap">
              <table className="decision-table">
                <thead>
                  <tr>
                    <th>Yêu cầu dự án</th>
                    <th>Thiên về SQL</th>
                    <th>Thiên về NoSQL</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Quan hệ dữ liệu</td>
                    <td>Nhiều quan hệ và JOIN linh hoạt</td>
                    <td>Dữ liệu thường được đọc nguyên khối hoặc theo key</td>
                  </tr>
                  <tr>
                    <td>Tính nhất quán</td>
                    <td>Đơn hàng, thanh toán, tồn kho cần transaction chặt</td>
                    <td>Một số dữ liệu chấp nhận nhất quán sau cùng</td>
                  </tr>
                  <tr>
                    <td>Schema</td>
                    <td>Cấu trúc ổn định, constraint rõ ràng</td>
                    <td>Thuộc tính thay đổi nhiều giữa các record</td>
                  </tr>
                  <tr>
                    <td>Truy vấn</td>
                    <td>Báo cáo và truy vấn ad hoc đa dạng</td>
                    <td>Access pattern rõ và được thiết kế trước</td>
                  </tr>
                  <tr>
                    <td>Quy mô</td>
                    <td>Đáp ứng tốt phần lớn ứng dụng; có thể scale dọc và ngang</td>
                    <td>Một số loại được thiết kế để phân tán ghi/đọc rất lớn</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="selection-rule">
              <span>Quy tắc khởi đầu thực dụng</span>
              <p>
                Với business application mới có user, order, booking, payment hoặc inventory, hãy bắt đầu bằng
                PostgreSQL/MySQL nếu chưa có yêu cầu đặc biệt. Thêm Redis cho cache/session hoặc MongoDB cho một
                bounded context có document linh hoạt khi đã xác định được lý do cụ thể.
              </p>
            </div>

            <h3 className="scenario-heading">Ví dụ lựa chọn theo dự án</h3>
            <div className="scenario-grid">
              <article>
                <span>E-commerce</span>
                <h3>PostgreSQL/MySQL làm nguồn dữ liệu chính</h3>
                <p>Order, payment và inventory cần constraint và transaction. Redis có thể hỗ trợ cart hoặc cache.</p>
                <strong>Không nên đưa order vào Redis như nguồn dữ liệu duy nhất.</strong>
              </article>
              <article>
                <span>Content / Product catalog</span>
                <h3>SQL hoặc document database</h3>
                <p>Nếu thuộc tính sản phẩm rất khác nhau theo ngành hàng, MongoDB có thể giảm schema phức tạp.</p>
                <strong>Nếu cần báo cáo và quan hệ chặt, PostgreSQL với JSONB cũng là lựa chọn mạnh.</strong>
              </article>
              <article>
                <span>Logistics tracking</span>
                <h3>Polyglot persistence có chủ đích</h3>
                <p>SQL giữ shipment và trạng thái nghiệp vụ; event store hoặc hệ time-series giữ lượng scan lớn.</p>
                <strong>Mỗi database có ownership rõ, không chia sẻ dữ liệu tùy tiện.</strong>
              </article>
              <article>
                <span>MVP / Student project</span>
                <h3>Một relational database thường là đủ</h3>
                <p>Giảm chi phí học, deploy, backup và đồng bộ dữ liệu trước khi hệ thống thực sự cần nhiều database.</p>
                <strong>Đơn giản trong vận hành cũng là một yêu cầu kỹ thuật.</strong>
              </article>
            </div>

            <div className="decision-checklist">
              <p className="panel-label">Checklist trước khi quyết định</p>
              <ol>
                <li><span>1</span><p><strong>Dữ liệu cốt lõi là gì?</strong> Xác định entity, vòng đời và mức độ quan trọng.</p></li>
                <li><span>2</span><p><strong>Ứng dụng đọc và ghi thế nào?</strong> Liệt kê access pattern phổ biến trước khi thiết kế schema.</p></li>
                <li><span>3</span><p><strong>Sai lệch dữ liệu có được chấp nhận?</strong> Thanh toán khác hoàn toàn lượt xem bài viết.</p></li>
                <li><span>4</span><p><strong>Đội ngũ vận hành được gì?</strong> Backup, monitoring và recovery quan trọng như tính năng database.</p></li>
                <li><span>5</span><p><strong>Có bằng chứng cần nhiều database chưa?</strong> Đừng tăng độ phức tạp chỉ vì kiến trúc trông hiện đại.</p></li>
              </ol>
            </div>
          </section>

          <section className="lesson-section" id="design-principles">
            <p className="section-label">08 · Tư duy thiết kế</p>
            <h2>Ba câu hỏi trước khi tạo bảng</h2>
            <ol className="principle-list">
              <li><span>01</span><div><strong>Đối tượng nào cần được lưu?</strong><p>Ví dụ: Customer, Product, Order.</p></div></li>
              <li><span>02</span><div><strong>Mỗi đối tượng có thuộc tính gì?</strong><p>Ví dụ: Product có name, price và stock.</p></div></li>
              <li><span>03</span><div><strong>Các đối tượng liên hệ với nhau thế nào?</strong><p>Ví dụ: một Customer có thể tạo nhiều Order.</p></div></li>
            </ol>
          </section>

          <section className="lesson-section" id="project-connection">
            <p className="section-label">09 · Áp dụng</p>
            <h2>Kiến thức này xuất hiện ở đâu trong portfolio?</h2>
            <div className="project-connection-grid">
              <div>
                <span>PHP / MySQL</span>
                <h3>Song Tai Shop</h3>
                <p>Sản phẩm, tài khoản, giỏ hàng và đơn hàng là các nhóm dữ liệu có quan hệ.</p>
              </div>
              <div>
                <span>Express / Sequelize / MySQL</span>
                <h3>Tourist Accommodation</h3>
                <p>Người dùng, phòng, booking, thanh toán và review được tổ chức thành các mô hình nghiệp vụ.</p>
              </div>
              <div>
                <span>PostgreSQL / MongoDB / Redis</span>
                <h3>Cab Booking Architecture</h3>
                <p>Mỗi loại dữ liệu được xem xét theo ownership, access pattern và vai trò trong kiến trúc.</p>
              </div>
            </div>
          </section>

          <section className="lesson-section interview-section" id="interview-questions">
            <p className="section-label">10 · Chuẩn bị phỏng vấn</p>
            <h2>Câu hỏi Database thường gặp</h2>
            <p>
              Hãy tự trả lời thành tiếng trước khi mở đáp án. Một câu trả lời tốt thường đi theo bốn bước:
              định nghĩa ngắn, giải thích mục đích, đưa ví dụ và kết thúc bằng trade-off hoặc lưu ý thực tế.
            </p>

            <div className="answer-framework">
              <span>Khung trả lời gợi ý</span>
              <ol>
                <li><strong>What:</strong> Khái niệm này là gì?</li>
                <li><strong>Why:</strong> Nó giải quyết vấn đề nào?</li>
                <li><strong>Example:</strong> Ví dụ trong project hoặc nghiệp vụ.</li>
                <li><strong>Trade-off:</strong> Khi nào không nên dùng hoặc cần lưu ý gì?</li>
              </ol>
            </div>

            <div className="interview-group">
              <div className="interview-group-heading">
                <span>Nền tảng</span>
                <strong>Relational database và thiết kế dữ liệu</strong>
              </div>
              <div className="interview-list">
                <details>
                  <summary><span>01</span>Primary Key và Foreign Key khác nhau thế nào?</summary>
                  <div className="interview-answer">
                    <p><strong>Primary Key</strong> định danh duy nhất một row và không được trùng. <strong>Foreign Key</strong> tham chiếu tới khóa của bảng khác để duy trì quan hệ và tính toàn vẹn dữ liệu.</p>
                    <p><em>Ví dụ:</em> <code>orders.id</code> là PK; <code>orders.customer_id</code> là FK tham chiếu <code>customers.id</code>.</p>
                  </div>
                </details>
                <details>
                  <summary><span>02</span>Normalization là gì? Vì sao cần chuẩn hóa?</summary>
                  <div className="interview-answer">
                    <p>Normalization tổ chức dữ liệu thành các bảng hợp lý để giảm lặp dữ liệu và tránh anomaly khi insert, update hoặc delete.</p>
                    <p>Trong business app, thường hướng tới 3NF trước; chỉ denormalize khi có bằng chứng về truy vấn hoặc hiệu năng.</p>
                  </div>
                </details>
                <details>
                  <summary><span>03</span>Quan hệ 1-1, 1-N và N-N được triển khai thế nào?</summary>
                  <div className="interview-answer">
                    <p>1-1 dùng FK có ràng buộc unique; 1-N đặt FK ở phía N; N-N cần bảng trung gian chứa FK của hai bảng.</p>
                    <p><em>Ví dụ:</em> <code>orders</code> và <code>products</code> liên kết N-N qua <code>order_items</code>.</p>
                  </div>
                </details>
                <details>
                  <summary><span>04</span>NULL khác chuỗi rỗng và số 0 như thế nào?</summary>
                  <div className="interview-answer">
                    <p>NULL biểu thị giá trị chưa biết hoặc không tồn tại; chuỗi rỗng và 0 vẫn là các giá trị xác định. So sánh NULL phải dùng <code>IS NULL</code>, không dùng <code>= NULL</code>.</p>
                  </div>
                </details>
              </div>
            </div>

            <div className="interview-group">
              <div className="interview-group-heading">
                <span>SQL thực hành</span>
                <strong>Query, JOIN và tối ưu truy vấn</strong>
              </div>
              <div className="interview-list">
                <details>
                  <summary><span>05</span>INNER JOIN và LEFT JOIN khác nhau thế nào?</summary>
                  <div className="interview-answer">
                    <p>INNER JOIN chỉ trả về row khớp ở cả hai bảng. LEFT JOIN giữ toàn bộ row bên trái và trả NULL cho dữ liệu không khớp bên phải.</p>
                    <p><em>Ví dụ:</em> dùng LEFT JOIN để tìm khách hàng chưa từng tạo order.</p>
                  </div>
                </details>
                <details>
                  <summary><span>06</span>WHERE và HAVING khác nhau thế nào?</summary>
                  <div className="interview-answer">
                    <p>WHERE lọc row trước khi GROUP BY; HAVING lọc kết quả sau khi đã group và aggregate.</p>
                    <p><em>Ví dụ:</em> <code>HAVING COUNT(*) &gt; 5</code> tìm khách hàng có hơn 5 đơn hàng.</p>
                  </div>
                </details>
                <details>
                  <summary><span>07</span>Subquery và JOIN nên chọn cách nào?</summary>
                  <div className="interview-answer">
                    <p>Không có lựa chọn luôn tốt hơn. Chọn cách diễn đạt rõ ý định và kiểm tra execution plan. JOIN phù hợp khi kết hợp tập dữ liệu; EXISTS thường rõ và hiệu quả khi chỉ cần kiểm tra sự tồn tại.</p>
                  </div>
                </details>
                <details>
                  <summary><span>08</span>Index là gì và vì sao index có thể làm hệ thống chậm hơn?</summary>
                  <div className="interview-answer">
                    <p>Index là cấu trúc hỗ trợ tìm và sắp xếp dữ liệu nhanh hơn, nhưng chiếm bộ nhớ và phải cập nhật khi INSERT, UPDATE, DELETE.</p>
                    <p>Nên index theo query thực tế, đặc biệt các cột thường dùng trong WHERE, JOIN và ORDER BY; không index mọi cột.</p>
                  </div>
                </details>
                <details>
                  <summary><span>09</span>Bạn sẽ điều tra một query chậm như thế nào?</summary>
                  <div className="interview-answer">
                    <p>Đo thời gian và tần suất, dùng <code>EXPLAIN</code>/<code>EXPLAIN ANALYZE</code>, kiểm tra full scan, index, số row, JOIN, sort và dữ liệu trả về; sau đó tối ưu và đo lại.</p>
                    <p>Không nên thêm index theo phỏng đoán mà không kiểm tra execution plan.</p>
                  </div>
                </details>
              </div>
            </div>

            <div className="interview-group">
              <div className="interview-group-heading">
                <span>Tính đúng đắn</span>
                <strong>Transaction, ACID và concurrency</strong>
              </div>
              <div className="interview-list">
                <details>
                  <summary><span>10</span>Transaction là gì? Khi nào cần dùng?</summary>
                  <div className="interview-answer">
                    <p>Transaction nhóm nhiều thao tác thành một đơn vị: hoặc tất cả thành công, hoặc rollback. Cần dùng khi các thay đổi phải nhất quán với nhau.</p>
                    <p><em>Ví dụ:</em> tạo order, order items và cập nhật tồn kho không nên hoàn thành một phần.</p>
                  </div>
                </details>
                <details>
                  <summary><span>11</span>ACID có ý nghĩa gì?</summary>
                  <div className="interview-answer">
                    <p><strong>Atomicity</strong>: toàn bộ hoặc không gì cả. <strong>Consistency</strong>: dữ liệu giữ đúng constraint. <strong>Isolation</strong>: transaction đồng thời không gây kết quả sai. <strong>Durability</strong>: dữ liệu commit vẫn tồn tại sau sự cố.</p>
                  </div>
                </details>
                <details>
                  <summary><span>12</span>Race condition khi cập nhật tồn kho xảy ra thế nào?</summary>
                  <div className="interview-answer">
                    <p>Hai request cùng đọc stock còn 1 rồi đều trừ, gây overselling. Có thể xử lý bằng atomic update có điều kiện, locking phù hợp hoặc optimistic concurrency.</p>
                    <p>Cách chọn phụ thuộc mức cạnh tranh, DBMS và yêu cầu throughput.</p>
                  </div>
                </details>
              </div>
            </div>

            <div className="interview-group">
              <div className="interview-group-heading">
                <span>SQL và NoSQL</span>
                <strong>Lựa chọn công nghệ có lý do</strong>
              </div>
              <div className="interview-list">
                <details>
                  <summary><span>13</span>Khi nào bạn chọn SQL thay vì MongoDB?</summary>
                  <div className="interview-answer">
                    <p>Chọn SQL khi dữ liệu có quan hệ rõ, cần JOIN, constraint, transaction và báo cáo linh hoạt, như order, booking, payment và inventory.</p>
                    <p>MongoDB phù hợp hơn khi dữ liệu thường được đọc theo document và schema thay đổi đáng kể giữa các record.</p>
                  </div>
                </details>
                <details>
                  <summary><span>14</span>Redis có nên dùng làm database chính cho đơn hàng không?</summary>
                  <div className="interview-answer">
                    <p>Thông thường không. Redis mạnh cho cache, session, rate limit và dữ liệu truy cập theo key, nhưng order cần durability, quan hệ, transaction và khả năng truy vấn đáng tin cậy.</p>
                  </div>
                </details>
                <details>
                  <summary><span>15</span>Denormalization trong NoSQL có lợi và hại gì?</summary>
                  <div className="interview-answer">
                    <p>Lợi ích là giảm JOIN và tối ưu read theo access pattern. Đổi lại dữ liệu bị lặp, update phức tạp hơn và có nguy cơ không nhất quán.</p>
                    <p>Cần xác định nguồn dữ liệu chính và chiến lược đồng bộ trước khi denormalize.</p>
                  </div>
                </details>
              </div>
            </div>

            <div className="interview-group scenario-interview-group">
              <div className="interview-group-heading">
                <span>Tình huống project</span>
                <strong>Trả lời như một kỹ sư giải quyết nghiệp vụ</strong>
              </div>
              <div className="interview-list">
                <details>
                  <summary><span>16</span>Thiết kế database tối thiểu cho một hệ thống đặt phòng?</summary>
                  <div className="interview-answer">
                    <p>Bắt đầu với User, Accommodation, Room, Booking, Payment và Review. Booking tham chiếu user và room, có check-in/check-out, trạng thái và tổng tiền.</p>
                    <p>Phải làm rõ quy tắc tránh trùng lịch, hủy phòng, hoàn tiền, quyền provider/admin và báo cáo doanh thu trước khi chốt schema.</p>
                  </div>
                </details>
                <details>
                  <summary><span>17</span>Làm sao lưu lịch sử trạng thái shipment?</summary>
                  <div className="interview-answer">
                    <p>Giữ trạng thái hiện tại trên shipment để đọc nhanh và lưu mỗi lần chuyển trạng thái vào bảng shipment_events gồm shipment_id, status, location, actor và timestamp.</p>
                    <p>Cách này hỗ trợ tracking timeline, audit và điều tra sự cố mà không ghi đè lịch sử.</p>
                  </div>
                </details>
                <details>
                  <summary><span>18</span>Nếu interviewer hỏi “database nào tốt nhất?”, bạn trả lời thế nào?</summary>
                  <div className="interview-answer">
                    <p>Không có database tốt nhất cho mọi hệ thống. Tôi sẽ hỏi về entity, relationship, transaction, access pattern, quy mô, consistency, reporting và năng lực vận hành.</p>
                    <p>Với business app mới, tôi thường bắt đầu bằng PostgreSQL/MySQL và chỉ thêm database khác khi một yêu cầu cụ thể chứng minh lợi ích.</p>
                  </div>
                </details>
              </div>
            </div>
          </section>

          <section className="lesson-section review-section" id="review">
            <p className="section-label">11 · Tự kiểm tra</p>
            <h2>Bạn đã nắm được bài học chưa?</h2>
            <div className="review-list">
              <details><summary>1. Database và DBMS khác nhau như thế nào?</summary><p>Database là dữ liệu có tổ chức; DBMS là phần mềm dùng để tạo, truy vấn và quản lý dữ liệu đó.</p></details>
              <details><summary>2. Row và column đại diện cho điều gì?</summary><p>Row là một bản ghi cụ thể; column là một thuộc tính chung của các bản ghi trong bảng.</p></details>
              <details><summary>3. Vì sao không lưu lại toàn bộ thông tin khách hàng trong mỗi order?</summary><p>Việc lặp dữ liệu gây dư thừa và dễ mất nhất quán. Ta lưu khóa ngoại để tham chiếu đến khách hàng.</p></details>
              <details><summary>4. Primary Key có nhiệm vụ gì?</summary><p>Primary Key định danh duy nhất mỗi bản ghi trong một bảng.</p></details>
              <details><summary>5. SQL có phải là tên một database không?</summary><p>Không. SQL là ngôn ngữ truy vấn; MySQL, PostgreSQL và SQL Server mới là các hệ quản trị cơ sở dữ liệu sử dụng SQL.</p></details>
              <details><summary>6. Khi nào document database có thể phù hợp?</summary><p>Khi dữ liệu thường được đọc theo một object hoàn chỉnh, thuộc tính linh hoạt và hệ thống không phụ thuộc nhiều vào JOIN hoặc transaction xuyên nhiều entity.</p></details>
              <details><summary>7. Vì sao không nên chọn nhiều database ngay từ đầu?</summary><p>Mỗi database làm tăng chi phí triển khai, monitoring, backup, bảo mật và đồng bộ dữ liệu. Chỉ thêm khi một yêu cầu cụ thể chứng minh lợi ích lớn hơn độ phức tạp.</p></details>
            </div>
          </section>

          <div className="next-lesson">
            <span>Bài tiếp theo</span>
            <strong>Data Modeling và cách đọc ERD</strong>
            <p>Chuyển yêu cầu nghiệp vụ thành entity, relationship, schema và một mô hình dữ liệu có thể triển khai.</p>
            <a
              className="next-lesson-link"
              href="/knowledge/database/data-modeling"
              onClick={(event) => navigate(event, "/knowledge/database/data-modeling")}
            >
              Bắt đầu bài 03
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          </div>
        </article>
      </div>

      <footer>
        <span>Database Fundamentals · Bài 02</span>
        <span><Sparkles size={15} aria-hidden="true" /> Learn from projects</span>
      </footer>
    </main>
  );
}

export default DatabasePage;
