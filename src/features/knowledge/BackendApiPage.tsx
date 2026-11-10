import {
  ArrowLeft,
  ArrowUpRight,
  BookOpen,
  CheckCircle2,
  Database,
  KeyRound,
  Network,
  ServerCog,
  Sparkles,
} from "lucide-react";
import type { NavigateHandler } from "@/types";
import { httpStatusCodes } from "@/data/lessons/backend-api.data";
import { BrandAvatar } from "@/components/BrandAvatar";
import { LearningPathNav } from "./components/LearningPathNav";

export function BackendApiPage({ navigate }: { navigate: NavigateHandler }) {
  return (
    <main className="site-shell knowledge-shell backend-lesson">
      <header className="topbar knowledge-topbar" aria-label="Knowledge navigation">
        <a
          className="brand"
          href="/knowledge"
          onClick={(event) => navigate(event, "/knowledge")}
          aria-label="Learning hub"
        >
          <BrandAvatar alt="Knowledge Hub" />
          <div className="brand-text">
            <span className="brand-name">Knowledge Hub</span>
            <span className="brand-tag">Backend &amp; Auth</span>
          </div>
        </a>
        <nav>
          <a href="#self-study-guide">Bắt đầu</a>
          <a href="#rest-design">REST API</a>
          <a href="#auth-foundations">Authentication</a>
          <a href="#practice-project">Thực hành</a>
        </nav>
      </header>
      <LearningPathNav currentPath="/knowledge/backend-api" navigate={navigate} />

      <section className="knowledge-hero backend-hero">
        <div>
          <a
            className="back-link"
            href="/knowledge/database/data-modeling"
            onClick={(event) => navigate(event, "/knowledge/database/data-modeling")}
          >
            <ArrowLeft size={17} aria-hidden="true" />
            Trở về Data Modeling &amp; ERD
          </a>
          <p className="eyebrow">Backend Engineering · Bài 04</p>
          <h1>Từ database đến một REST API có thể sử dụng thật</h1>
          <p className="knowledge-lede">
            Tự học backend theo từng module ngắn: hiểu request lifecycle, thiết kế REST API, sau đó đi sâu vào
            authentication, session/token, authorization và cách kiểm thử một hệ thống đăng nhập an toàn.
          </p>
          <div className="lesson-meta" aria-label="Lesson information">
            <span><BookOpen size={16} aria-hidden="true" /> Buổi học có hướng dẫn</span>
            <span>3 tiết học</span>
            <span>9 checkpoint thực hành</span>
          </div>
        </div>

        <aside className="learning-outcomes">
          <p className="panel-label">Sau bài này, bạn có thể</p>
          <ul>
            <li><CheckCircle2 size={18} aria-hidden="true" /> Giải thích request lifecycle từ client đến database.</li>
            <li><CheckCircle2 size={18} aria-hidden="true" /> Thiết kế endpoint, status code và response nhất quán.</li>
            <li><CheckCircle2 size={18} aria-hidden="true" /> Thiết kế login, session/token và refresh flow.</li>
            <li><CheckCircle2 size={18} aria-hidden="true" /> Kiểm thử authentication, authorization và ownership.</li>
          </ul>
        </aside>
      </section>

      <div className="lesson-layout">
        <aside className="lesson-toc" aria-label="Mục lục bài học">
          <p>Chương trong bài</p>
          <a href="#self-study-guide">1. Bắt đầu buổi học</a>
          <a href="#request-lifecycle">2. Request và REST</a>
          <a href="#auth-foundations">3. Authentication</a>
          <a href="#authorization">4. Authorization và security</a>
          <a href="#practice-project">5. Thực hành và ôn tập</a>
        </aside>

        <article className="lesson-content">
          <section className="lesson-section" id="self-study-guide">
            <p className="section-label">01 · Giáo án hôm nay</p>
            <h2>Ta sẽ theo dấu một request từ đầu đến cuối</h2>
            <p>
              Thầy dùng một tình huống xuyên suốt: user gửi <code>POST /api/tasks</code>. Mỗi phần sẽ trả lời một
              câu hỏi: request đi đâu, dữ liệu được kiểm tra thế nào, danh tính được xác minh ra sao và vì sao
              backend được phép hoặc không được phép ghi vào database.
            </p>
            <div className="study-cycle">
              <div><span>01</span><strong>Quan sát</strong><p>Đọc request, response và luồng xử lý mẫu.</p></div>
              <div><span>02</span><strong>Giải thích</strong><p>Nói lại trách nhiệm của từng lớp bằng lời của bạn.</p></div>
              <div><span>03</span><strong>Thiết kế</strong><p>Chọn endpoint, rule, auth và error contract.</p></div>
              <div><span>04</span><strong>Chứng minh</strong><p>Viết test cho đường thành công và đường bị từ chối.</p></div>
            </div>
            <div className="lecture-agenda">
              <article>
                <span>Tiết 1</span>
                <h3>Request và REST contract</h3>
                <p>Request lifecycle, resource, method, status code và validation boundary.</p>
              </article>
              <article>
                <span>Tiết 2</span>
                <h3>Danh tính và quyền truy cập</h3>
                <p>Authentication, session/token, authorization, role và ownership.</p>
              </article>
              <article>
                <span>Tiết 3</span>
                <h3>Bảo mật và kiểm thử</h3>
                <p>Threat model, đường từ chối, integration test và project tổng hợp.</p>
              </article>
            </div>
            <div className="study-rule">
              <strong>Quy tắc của lớp</strong>
              <p>Mỗi khi gặp sơ đồ hoặc code, hãy dự đoán bước tiếp theo trước khi đọc lời giải. Không học JWT trước khi giải thích được session.</p>
            </div>
            <details className="teacher-question">
              <summary>Câu hỏi khởi động: backend cần làm gì trước khi INSERT task?</summary>
              <p>
                Tối thiểu phải parse request, xác thực danh tính, kiểm tra input, áp dụng business rule và
                ownership, sau đó mới gọi lớp truy cập dữ liệu. Database vẫn bảo vệ constraint cuối cùng.
              </p>
            </details>
          </section>

          <section className="lesson-section" id="mental-model">
            <p className="section-label">02 · Mental model</p>
            <h2>Backend là lớp bảo vệ nghiệp vụ và dữ liệu</h2>
            <p>
              Client gửi ý định, chẳng hạn “tạo công việc mới”. Backend xác thực người gửi, kiểm tra dữ liệu, áp
              dụng business rule, đọc hoặc ghi database rồi trả về một kết quả có cấu trúc.
            </p>
            <div className="backend-responsibility-grid">
              <article><Network size={21} aria-hidden="true" /><h3>Giao tiếp</h3><p>Nhận HTTP request và trả response theo contract.</p></article>
              <article><CheckCircle2 size={21} aria-hidden="true" /><h3>Nghiệp vụ</h3><p>Quyết định thao tác nào hợp lệ trong trạng thái hiện tại.</p></article>
              <article><KeyRound size={21} aria-hidden="true" /><h3>Bảo mật</h3><p>Xác minh danh tính và quyền truy cập resource.</p></article>
              <article><Database size={21} aria-hidden="true" /><h3>Dữ liệu</h3><p>Duy trì transaction, constraint và tính nhất quán.</p></article>
            </div>
            <p className="lesson-note">
              <strong>Tư duy quan trọng:</strong> frontend có thể hỗ trợ validation để UX tốt hơn, nhưng backend vẫn
              phải kiểm tra lại vì request có thể được gửi trực tiếp bằng Postman hoặc script.
            </p>
          </section>

          <section className="lesson-section" id="request-lifecycle">
            <p className="section-label">03 · Request lifecycle</p>
            <h2>Một request nên đi qua các trách nhiệm rõ ràng</h2>
            <div className="request-flow" aria-label="HTTP request lifecycle">
              <div><span>1</span><strong>Client</strong><small>POST /api/tasks</small></div>
              <b>→</b>
              <div><span>2</span><strong>Route</strong><small>Chọn handler</small></div>
              <b>→</b>
              <div><span>3</span><strong>Controller</strong><small>HTTP input/output</small></div>
              <b>→</b>
              <div><span>4</span><strong>Service</strong><small>Business rules</small></div>
              <b>→</b>
              <div><span>5</span><strong>Repository</strong><small>Database query</small></div>
            </div>
            <div className="definition-card">
              <strong>Nguyên tắc phân lớp</strong>
              <p>
                Controller không nên chứa toàn bộ nghiệp vụ. Service không nên phụ thuộc vào chi tiết HTTP.
                Repository tập trung vào truy cập dữ liệu. Phân lớp tốt giúp test dễ hơn và tránh một file xử lý
                mọi thứ.
              </p>
            </div>
            <details className="teacher-question">
              <summary>Checkpoint: validation, authentication và authorization nằm ở đâu?</summary>
              <p>
                Validation hình dạng request thường nằm ở boundary/middleware; authentication thiết lập identity
                trước controller hoặc service; authorization và ownership cần được kiểm tra gần business action,
                thường trong policy/service. Database constraint bảo vệ tính toàn vẹn khi mọi lớp khác thất bại.
              </p>
            </details>
          </section>

          <section className="lesson-section" id="rest-design">
            <p className="section-label">04 · API contract</p>
            <h2>Thiết kế endpoint xoay quanh resource</h2>
            <p>
              REST dùng HTTP method để thể hiện hành động và URL để định danh resource. Dùng danh từ số nhiều,
              giữ naming nhất quán và chỉ đưa động từ vào URL khi đó thực sự là một business action.
            </p>
            <div className="endpoint-table-wrap">
              <table className="endpoint-table">
                <thead><tr><th>Method</th><th>Endpoint</th><th>Ý nghĩa</th></tr></thead>
                <tbody>
                  <tr><td><code>GET</code></td><td>/api/tasks</td><td>Lấy danh sách, có filter và pagination</td></tr>
                  <tr><td><code>GET</code></td><td>/api/tasks/:id</td><td>Lấy một công việc</td></tr>
                  <tr><td><code>POST</code></td><td>/api/tasks</td><td>Tạo công việc mới</td></tr>
                  <tr><td><code>PATCH</code></td><td>/api/tasks/:id</td><td>Cập nhật một phần</td></tr>
                  <tr><td><code>DELETE</code></td><td>/api/tasks/:id</td><td>Xóa công việc</td></tr>
                  <tr><td><code>POST</code></td><td>/api/tasks/:id/complete</td><td>Business action: hoàn thành công việc</td></tr>
                </tbody>
              </table>
            </div>
            <div className="code-comparison api-example">
              <div>
                <span className="code-label">Request</span>
                <pre><code>{`POST /api/tasks
Content-Type: application/json

{
  "title": "Review REST API",
  "dueDate": "2026-06-15"
}`}</code></pre>
              </div>
              <div>
                <span className="code-label">Response · 201 Created</span>
                <pre><code>{`{
  "data": {
    "id": 42,
    "title": "Review REST API",
    "status": "TODO",
    "dueDate": "2026-06-15"
  }
}`}</code></pre>
              </div>
            </div>
          </section>

          <section className="lesson-section" id="status-codes">
            <p className="section-label">05 · HTTP semantics</p>
            <h2>Status code là một phần của contract</h2>
            <div className="status-code-grid">
              {httpStatusCodes.map(([code, title, description]) => (
                <article key={code}>
                  <strong>{code}</strong>
                  <div><span>{title}</span><p>{description}</p></div>
                </article>
              ))}
            </div>
          </section>

          <section className="lesson-section" id="validation">
            <p className="section-label">06 · Dữ liệu đầu vào</p>
            <h2>Validation tốt trả lời rõ: sai ở đâu và sửa thế nào?</h2>
            <p>
              Kiểm tra kiểu dữ liệu, field bắt buộc và định dạng ở boundary. Business rule như “không hoàn thành
              task đã bị hủy” thuộc service. Constraint duy nhất vẫn cần được bảo vệ ở database.
            </p>
            <div className="code-comparison api-example">
              <div>
                <span className="code-label">Không nên</span>
                <pre><code>{`{
  "error": "Something went wrong"
}`}</code></pre>
                <p>Client không biết field nào sai hoặc nên xử lý ra sao.</p>
              </div>
              <div>
                <span className="code-label">Response lỗi có cấu trúc</span>
                <pre><code>{`{
  "code": "VALIDATION_ERROR",
  "message": "Request data is invalid",
  "errors": [
    {
      "field": "title",
      "message": "Title is required"
    }
  ]
}`}</code></pre>
              </div>
            </div>
          </section>

          <section className="lesson-section auth-section" id="auth-foundations">
            <p className="section-label">07 · Authentication foundations</p>
            <h2>Authentication là quá trình thiết lập và duy trì danh tính</h2>
            <p>
              Một hệ thống auth không kết thúc ở endpoint login. Nó bắt đầu từ đăng ký và lưu password, tiếp tục
              qua việc tạo session, xác thực từng request, gia hạn hoặc thu hồi quyền truy cập, rồi kết thúc bằng
              logout và xử lý tài khoản bị xâm nhập.
            </p>
            <div className="comparison-grid">
              <div>
                <KeyRound size={22} aria-hidden="true" />
                <h3>Authentication</h3>
                <p>Chứng minh request đang đại diện cho danh tính nào.</p>
                <span>Login, session, token, MFA, logout</span>
              </div>
              <div>
                <ServerCog size={22} aria-hidden="true" />
                <h3>Authorization</h3>
                <p>Quyết định danh tính đó được thực hiện hành động nào.</p>
                <span>Role, permission, policy, ownership</span>
              </div>
            </div>
            <div className="auth-flow" aria-label="Authentication lifecycle">
              <div><span>1</span><strong>Register</strong><small>Validate và hash password</small></div>
              <div><span>2</span><strong>Login</strong><small>Verify credential</small></div>
              <div><span>3</span><strong>Issue</strong><small>Tạo session hoặc token</small></div>
              <div><span>4</span><strong>Authenticate</strong><small>Xác thực mỗi request</small></div>
              <div><span>5</span><strong>Expire / revoke</strong><small>Hết hạn, logout, khóa tài khoản</small></div>
            </div>
            <h3 className="scenario-heading">Password phải được xử lý như dữ liệu nhạy cảm đặc biệt</h3>
            <ol className="security-checklist">
              <li><span>01</span><p>Dùng password hashing chuyên dụng với salt và cost phù hợp; không mã hóa hai chiều và không tự phát minh thuật toán.</p></li>
              <li><span>02</span><p>Không ghi password, token hoặc secret vào log; response đăng ký và login không được trả password hash.</p></li>
              <li><span>03</span><p>Rate limit và theo dõi login thất bại để giảm brute force, nhưng tránh thông báo làm lộ email nào đã tồn tại.</p></li>
              <li><span>04</span><p>Password reset dùng token ngẫu nhiên, một lần, có thời hạn; đổi password nên thu hồi các session nhạy cảm.</p></li>
            </ol>
            <div className="self-check">
              <span>Bài tập 07</span>
              <p>Vẽ sequence diagram cho register và login. Đánh dấu chính xác nơi password chuyển thành hash và nơi session/token được tạo.</p>
            </div>
          </section>

          <section className="lesson-section auth-section" id="session-vs-token">
            <p className="section-label">08 · Session hay token?</p>
            <h2>Chọn cơ chế theo kiến trúc, không theo độ phổ biến</h2>
            <div className="auth-choice-grid">
              <article>
                <span>Server-side state</span>
                <h3>Session cookie</h3>
                <p>Browser giữ một session ID; trạng thái đăng nhập nằm phía server hoặc session store.</p>
                <ul>
                  <li>Thu hồi và logout đơn giản.</li>
                  <li>Phù hợp web app cùng hệ thống backend.</li>
                  <li>Cần bảo vệ cookie và xử lý CSRF.</li>
                </ul>
              </article>
              <article>
                <span>Signed credential</span>
                <h3>Access token</h3>
                <p>Client gửi credential có thời hạn; API xác thực token trước khi xử lý request.</p>
                <ul>
                  <li>Phù hợp API, mobile và hệ thống phân tán khi có lý do rõ.</li>
                  <li>Khó thu hồi token đã phát hành hơn session.</li>
                  <li>JWT chỉ được ký, payload không mặc định được mã hóa.</li>
                </ul>
              </article>
            </div>
            <div className="decision-table-wrap">
              <table className="decision-table">
                <thead><tr><th>Câu hỏi</th><th>Session</th><th>Token</th></tr></thead>
                <tbody>
                  <tr><td>Trạng thái nằm đâu?</td><td>Session store phía server</td><td>Credential được client mang theo</td></tr>
                  <tr><td>Thu hồi ngay?</td><td>Xóa session tương đối trực tiếp</td><td>Cần thời hạn ngắn, denylist hoặc cơ chế revocation</td></tr>
                  <tr><td>Browser lưu ở đâu?</td><td>Cookie HttpOnly, Secure, SameSite phù hợp</td><td>Ưu tiên cookie bảo vệ hoặc BFF; tránh localStorage cho credential nhạy cảm</td></tr>
                  <tr><td>Rủi ro chính</td><td>CSRF và session fixation/hijacking</td><td>Token theft, replay và cấu hình validation sai</td></tr>
                </tbody>
              </table>
            </div>
            <p className="lesson-note">
              <strong>Không đồng nhất khái niệm:</strong> cookie là cơ chế vận chuyển/lưu trữ của browser; session là
              trạng thái đăng nhập; JWT là một định dạng token. JWT vẫn có thể được gửi bằng cookie.
            </p>
            <div className="self-check">
              <span>Bài tập 08</span>
              <p>Chọn session hoặc token cho portfolio, web admin và mobile app. Viết hai lý do và một rủi ro cho từng lựa chọn.</p>
            </div>
          </section>

          <section className="lesson-section auth-section" id="token-lifecycle">
            <p className="section-label">09 · Token lifecycle</p>
            <h2>Access token ngắn hạn, refresh token được quản lý như một session</h2>
            <p>
              Access token dùng để gọi API và nên có thời hạn ngắn. Refresh token chỉ dùng tại endpoint refresh
              để nhận cặp token mới. Với public client, refresh token rotation giúp phát hiện việc token cũ bị tái
              sử dụng; khi phát hiện reuse, cần thu hồi cả token family và yêu cầu đăng nhập lại.
            </p>
            <div className="token-flow" aria-label="Access and refresh token lifecycle">
              <div><span>1</span><strong>Login</strong><small>Credential hợp lệ</small></div>
              <b>→</b>
              <div><span>2</span><strong>Access + refresh</strong><small>Hai mục đích khác nhau</small></div>
              <b>→</b>
              <div><span>3</span><strong>API calls</strong><small>Dùng access token</small></div>
              <b>→</b>
              <div><span>4</span><strong>Refresh</strong><small>Rotate token cũ</small></div>
              <b>→</b>
              <div><span>5</span><strong>Revoke</strong><small>Logout hoặc reuse detected</small></div>
            </div>
            <div className="token-validation-card">
              <span>Khi xác thực JWT access token</span>
              <div>
                <p><strong>Signature</strong> đúng thuật toán và key mong đợi.</p>
                <p><strong>Issuer / audience</strong> đúng hệ thống phát hành và API nhận.</p>
                <p><strong>Expiration</strong> và thời điểm hiệu lực còn hợp lệ.</p>
                <p><strong>Token type / purpose</strong> không nhầm refresh token thành access token.</p>
              </div>
            </div>
            <div className="self-check">
              <span>Bài tập 09</span>
              <p>Thiết kế bảng auth_sessions gồm user, token family, token hash, expiresAt, revokedAt và thông tin thiết bị. Mô tả transaction khi refresh.</p>
            </div>
          </section>

          <section className="lesson-section auth-section" id="authorization">
            <p className="section-label">10 · Authorization</p>
            <h2>Đã đăng nhập không có nghĩa là được truy cập mọi resource</h2>
            <div className="authorization-layers">
              <article><span>RBAC</span><h3>Role</h3><p>ADMIN có thể quản trị user; USER không thể gọi chức năng admin.</p></article>
              <article><span>Permission</span><h3>Action</h3><p>Quyền cụ thể như task:read, task:update hoặc user:disable.</p></article>
              <article><span>Ownership</span><h3>Resource</h3><p>User chỉ đọc và sửa task thuộc chính mình.</p></article>
              <article><span>Context</span><h3>Policy</h3><p>Chỉ cho phép thao tác khi resource đang ở trạng thái phù hợp.</p></article>
            </div>
            <div className="code-comparison api-example">
              <div>
                <span className="code-label">Không an toàn</span>
                <pre><code>{`PATCH /api/tasks/42
{
  "userId": 101,
  "title": "Changed"
}

// Tin userId từ client`}</code></pre>
              </div>
              <div>
                <span className="code-label">Kiểm tra ownership phía server</span>
                <pre><code>{`const task = await tasks.findOne({
  id: taskId,
  ownerId: auth.userId
});

if (!task) throw notFound();`}</code></pre>
              </div>
            </div>
            <div className="self-check">
              <span>Bài tập 10</span>
              <p>Lập ma trận role × endpoint cho Task API, sau đó thêm ba test chứng minh user A không thể đọc, sửa hoặc xóa task của user B.</p>
            </div>
          </section>

          <section className="lesson-section auth-section" id="auth-security">
            <p className="section-label">11 · Threat model</p>
            <h2>Học auth bằng cách hiểu credential có thể bị đánh cắp hoặc lạm dụng thế nào</h2>
            <div className="threat-grid">
              <article><strong>XSS</strong><p>JavaScript độc hại đọc dữ liệu có thể truy cập; credential trong localStorage đặc biệt dễ bị lấy.</p><span>Giảm thiểu: output encoding, CSP, HttpOnly cookie</span></article>
              <article><strong>CSRF</strong><p>Browser tự gửi cookie trong request giả mạo từ site khác.</p><span>Giảm thiểu: SameSite, CSRF token, kiểm tra Origin</span></article>
              <article><strong>Replay</strong><p>Token bị đánh cắp được gửi lại như một request hợp lệ.</p><span>Giảm thiểu: TLS, expiry ngắn, rotation và reuse detection</span></article>
              <article><strong>Brute force</strong><p>Kẻ tấn công thử nhiều mật khẩu hoặc credential đã rò rỉ.</p><span>Giảm thiểu: rate limit, MFA, monitoring</span></article>
              <article><strong>Session fixation</strong><p>Attacker khiến nạn nhân đăng nhập trên session ID đã biết.</p><span>Giảm thiểu: rotate session ID sau login</span></article>
              <article><strong>IDOR / BOLA</strong><p>User đổi resource ID để truy cập dữ liệu người khác.</p><span>Giảm thiểu: authorization theo resource trên server</span></article>
            </div>
            <div className="security-baseline">
              <strong>Security baseline</strong>
              <p>Chỉ truyền credential qua HTTPS. Cookie auth cần cấu hình HttpOnly, Secure và SameSite phù hợp. Không đưa secret vào source code, URL hoặc log.</p>
            </div>
            <div className="self-check">
              <span>Bài tập 11</span>
              <p>Chọn ba threat ở trên, mô tả attack path và viết một integration test hoặc checklist xác minh biện pháp giảm thiểu.</p>
            </div>
          </section>

          <section className="lesson-section" id="testing">
            <p className="section-label">12 · Auth testing</p>
            <h2>Auth chỉ đáng tin khi các đường từ chối được kiểm thử</h2>
            <div className="test-pyramid">
              <div><strong>Unit</strong><p>Business rule trong service, chạy nhanh và cô lập.</p></div>
              <div><strong>Integration</strong><p>API, middleware và database phối hợp đúng.</p></div>
              <div><strong>Manual</strong><p>Postman kiểm tra contract và luồng sử dụng thực tế.</p></div>
            </div>
            <div className="decision-checklist test-cases">
              <p className="panel-label">Bộ test tối thiểu cho auth và protected resource</p>
              <ol>
                <li><span>1</span><p><strong>Login:</strong> đúng credential thành công; sai password trả lỗi chung và không tạo session.</p></li>
                <li><span>2</span><p><strong>Token:</strong> thiếu, hết hạn, sai chữ ký, sai issuer hoặc sai purpose đều bị từ chối.</p></li>
                <li><span>3</span><p><strong>Refresh:</strong> rotation thành công; token cũ bị reuse làm token family bị thu hồi.</p></li>
                <li><span>4</span><p><strong>Authorization:</strong> user thường bị chặn khỏi admin endpoint; user A bị chặn khỏi task của user B.</p></li>
                <li><span>5</span><p><strong>Logout:</strong> session/refresh token bị thu hồi và không thể tiếp tục gia hạn.</p></li>
              </ol>
            </div>
          </section>

          <section className="lesson-section" id="practice-project">
            <p className="section-label">13 · Bài thực hành tổng hợp</p>
            <h2>Task Management API với Auth hoàn chỉnh</h2>
            <p>
              Đây là project vừa đủ nhỏ để hoàn thành, nhưng đủ chiều sâu để bạn chứng minh database, backend,
              bảo mật và testing trong một câu chuyện thống nhất.
            </p>
            <div className="project-brief">
              <div>
                <span>Phạm vi MVP</span>
                <h3>User, Task và Category</h3>
                <p>Đăng ký, đăng nhập, refresh, logout, CRUD task, role và ownership.</p>
              </div>
              <div>
                <span>Stack gợi ý</span>
                <h3>Express hoặc Spring Boot</h3>
                <p>PostgreSQL/MySQL, ORM hiện có, session hoặc access/refresh token, Postman và automated tests.</p>
              </div>
            </div>
            <ol className="milestone-list">
              <li><span>Ngày 1</span><div><strong>Contract và schema</strong><p>Vẽ ERD, ghi endpoint và sample response trước khi code.</p></div></li>
              <li><span>Ngày 2</span><div><strong>Vertical slice đầu tiên</strong><p>Hoàn thành POST và GET task xuyên từ route đến database.</p></div></li>
              <li><span>Ngày 3</span><div><strong>CRUD và error handling</strong><p>Thêm update, delete, validation và response lỗi nhất quán.</p></div></li>
              <li><span>Ngày 4</span><div><strong>Register và login</strong><p>Hash password, tạo session/token và chuẩn hóa lỗi đăng nhập.</p></div></li>
              <li><span>Ngày 5</span><div><strong>Session lifecycle</strong><p>Refresh/rotation hoặc gia hạn session, logout và revoke.</p></div></li>
              <li><span>Ngày 6</span><div><strong>Authorization</strong><p>Role, permission và ownership cho toàn bộ Task API.</p></div></li>
              <li><span>Ngày 7</span><div><strong>Security tests</strong><p>Expired token, reuse, IDOR, logout và brute-force controls.</p></div></li>
              <li><span>Ngày 8</span><div><strong>Portfolio proof</strong><p>README, auth sequence diagram, API collection, ERD và test report.</p></div></li>
            </ol>
            <div className="completion-gate">
              <strong>Checklist hoàn thành</strong>
              <p>
                Tự giải thích được session và token, demo login-refresh-logout, chứng minh ownership bằng test,
                và chỉ ra hệ thống phản ứng thế nào khi credential bị hết hạn hoặc tái sử dụng.
              </p>
            </div>
          </section>

          <section className="lesson-section interview-section" id="interview-backend">
            <p className="section-label">14 · Tự kiểm tra</p>
            <h2>Trả lời thành tiếng trước khi mở đáp án</h2>
            <div className="review-list">
              <details><summary>1. REST API là gì?</summary><p>REST là phong cách thiết kế API xoay quanh resource, dùng HTTP method và semantics nhất quán để client thao tác trên resource đó.</p></details>
              <details><summary>2. PUT và PATCH khác nhau thế nào?</summary><p>PUT thường biểu diễn việc thay thế toàn bộ resource; PATCH cập nhật một phần. Contract cụ thể phải được tài liệu hóa rõ.</p></details>
              <details><summary>3. 401 và 403 khác nhau thế nào?</summary><p>401 nghĩa là request chưa có danh tính hợp lệ. 403 nghĩa là danh tính đã được xác minh nhưng không có quyền thực hiện hành động.</p></details>
              <details><summary>4. Vì sao vẫn cần database constraint khi backend đã validation?</summary><p>Nhiều request có thể chạy đồng thời hoặc dữ liệu có thể được ghi từ đường khác. Database constraint là lớp bảo vệ cuối cùng cho tính toàn vẹn.</p></details>
              <details><summary>5. Controller và service nên chia trách nhiệm ra sao?</summary><p>Controller xử lý chi tiết HTTP và chuyển input sang service. Service thực thi business rule độc lập với transport để dễ tái sử dụng và kiểm thử.</p></details>
              <details><summary>6. Làm sao ngăn user sửa resource của người khác?</summary><p>Lấy userId từ identity đã xác thực, truy vấn resource theo cả resourceId và ownerId hoặc kiểm tra ownership trong service; không tin userId do body gửi lên.</p></details>
              <details><summary>7. Session và JWT khác nhau ở điểm cốt lõi nào?</summary><p>Session thường giữ trạng thái đăng nhập phía server và client mang session ID. JWT là định dạng token chứa claims có chữ ký; việc dùng JWT không tự giải quyết lưu trữ, thu hồi hoặc authorization.</p></details>
              <details><summary>8. Vì sao cần refresh token rotation?</summary><p>Mỗi lần refresh sẽ phát token mới và làm token cũ mất hiệu lực. Nếu token cũ xuất hiện lại, hệ thống có tín hiệu credential có thể đã bị đánh cắp và có thể thu hồi cả token family.</p></details>
              <details><summary>9. HttpOnly cookie giải quyết XSS hoàn toàn không?</summary><p>Không. HttpOnly ngăn JavaScript đọc cookie nhưng XSS vẫn có thể thực hiện request dưới danh nghĩa người dùng. Vẫn cần chống XSS, CSP và kiểm soát input/output.</p></details>
            </div>
          </section>

          <section className="lesson-section" id="auth-resources">
            <p className="section-label">15 · Nguồn đọc thêm</p>
            <h2>Đào sâu từ tài liệu tiêu chuẩn và hướng dẫn bảo mật</h2>
            <div className="resource-list">
              <a href="https://datatracker.ietf.org/doc/html/rfc9110" target="_blank" rel="noreferrer">
                <span>IETF · RFC 9110</span>
                <div><strong>HTTP Semantics</strong><p>Method semantics, status code classes, request và response behavior.</p></div>
                <ArrowUpRight size={18} aria-hidden="true" />
              </a>
              <a href="https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html" target="_blank" rel="noreferrer">
                <span>OWASP</span>
                <div><strong>Authentication Cheat Sheet</strong><p>Password policy, login response, re-authentication và MFA.</p></div>
                <ArrowUpRight size={18} aria-hidden="true" />
              </a>
              <a href="https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html" target="_blank" rel="noreferrer">
                <span>OWASP</span>
                <div><strong>Session Management Cheat Sheet</strong><p>Session ID, cookie attributes, timeout, renewal và logout.</p></div>
                <ArrowUpRight size={18} aria-hidden="true" />
              </a>
              <a href="https://cheatsheetseries.owasp.org/cheatsheets/REST_Security_Cheat_Sheet.html" target="_blank" rel="noreferrer">
                <span>OWASP</span>
                <div><strong>REST Security Cheat Sheet</strong><p>HTTPS, access control, JWT validation và API security.</p></div>
                <ArrowUpRight size={18} aria-hidden="true" />
              </a>
              <a href="https://datatracker.ietf.org/doc/rfc9700/" target="_blank" rel="noreferrer">
                <span>IETF · RFC 9700</span>
                <div><strong>OAuth 2.0 Security Best Current Practice</strong><p>Refresh token protection, rotation và các flow không còn được khuyến nghị.</p></div>
                <ArrowUpRight size={18} aria-hidden="true" />
              </a>
            </div>
          </section>

          <div className="next-lesson">
            <span>Bước thực hành tiếp theo</span>
            <strong>Xây register và login trước</strong>
            <p>Bắt đầu bằng user schema, password hashing và session/token issuance; viết test sai password trước khi thêm refresh flow.</p>
          </div>
        </article>
      </div>

      <footer>
        <span>Backend &amp; Authentication · Bài 04</span>
        <span><Sparkles size={15} aria-hidden="true" /> Guided learning by building</span>
      </footer>
    </main>
  );
}

export default BackendApiPage;
