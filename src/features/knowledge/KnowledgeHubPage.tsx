import { ArrowUpRight, Sparkles } from "lucide-react";
import type { NavigateHandler } from "@/types";
import { learningPath } from "@/data/lessons/learning-path";
import { BrandAvatar } from "@/components/BrandAvatar";
import topbarStyles from "@/components/Topbar.module.css";
import "@/styles/features/knowledge-base.css";

export function KnowledgeHubPage({ navigate }: { navigate: NavigateHandler }) {
  return (
    <main className="site-shell knowledge-shell knowledge-hub">
      <header
        className={`${topbarStyles.topbar} ${topbarStyles.knowledgeTopbar}`}
        aria-label="Knowledge hub navigation"
      >
        <a
          className={topbarStyles.brand}
          href="/"
          onClick={(event) => navigate(event, "/")}
          aria-label="Back to portfolio"
        >
          <BrandAvatar alt="Võ Văn Tú Tài" />
          <div className={topbarStyles.brandText}>
            <span className={topbarStyles.brandName}>Võ Văn Tú Tài</span>
            <span className={topbarStyles.brandTag}>Knowledge Hub</span>
          </div>
        </a>
        <nav className={topbarStyles.nav}>
          <a href="#learning-path">Lộ trình</a>
          <a href="#study-method">Cách học</a>
          <a href="/" onClick={(event) => navigate(event, "/")}>
            Portfolio
          </a>
        </nav>
      </header>

      <section className="hub-hero">
        <div>
          <p className="eyebrow">Knowledge Portfolio</p>
          <h1>Học lại kiến thức qua những gì tôi đã xây dựng</h1>
          <p>
            Một lộ trình có thứ tự, nối từ cách chương trình vận hành đến dữ liệu và backend. Mỗi bài
            gồm mental model, ví dụ từ project, bài tập có đáp án ẩn và câu hỏi phỏng vấn.
          </p>
        </div>
        <aside>
          <span>Tiến trình hiện tại</span>
          <strong>5 bài học</strong>
          <p>Languages → Database → Data Modeling → Backend/API → Business Analysis</p>
        </aside>
      </section>

      <section className="hub-section" id="learning-path">
        <div className="hub-section-heading">
          <p className="section-label">Lộ trình cốt lõi</p>
          <h2>Học theo dependency, không học theo danh sách công nghệ</h2>
        </div>
        <div className="learning-path-grid">
          {learningPath.map((lesson, index) => (
            <a
              href={lesson.path}
              key={lesson.path}
              onClick={(event) => navigate(event, lesson.path)}
            >
              <span className="lesson-number">{lesson.number}</span>
              <div>
                <small>{lesson.meta}</small>
                <h3>{lesson.title}</h3>
                <p>{lesson.description}</p>
              </div>
              <ArrowUpRight size={20} aria-hidden="true" />
              {index < learningPath.length - 1 ? <b aria-hidden="true">→</b> : null}
            </a>
          ))}
        </div>
      </section>

      <section className="hub-section study-method-section" id="study-method">
        <div className="hub-section-heading">
          <p className="section-label">Phương pháp</p>
          <h2>Mỗi bài được học theo bốn bước</h2>
        </div>
        <div className="hub-method-grid">
          <div>
            <span>01</span>
            <strong>Hiểu</strong>
            <p>Nắm vấn đề và mental model trước thuật ngữ.</p>
          </div>
          <div>
            <span>02</span>
            <strong>Quan sát</strong>
            <p>Đọc sơ đồ, code và ví dụ nghiệp vụ.</p>
          </div>
          <div>
            <span>03</span>
            <strong>Thực hành</strong>
            <p>Tự giải bài trước khi mở đáp án.</p>
          </div>
          <div>
            <span>04</span>
            <strong>Trình bày</strong>
            <p>Trả lời thành tiếng như trong phỏng vấn.</p>
          </div>
        </div>
      </section>

      <footer>
        <span>Knowledge Portfolio</span>
        <span>
          <Sparkles size={15} aria-hidden="true" /> Learn from projects
        </span>
      </footer>
    </main>
  );
}

export default KnowledgeHubPage;
