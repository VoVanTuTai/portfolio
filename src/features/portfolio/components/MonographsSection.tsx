import { ArrowUpRight, BookOpen } from "lucide-react";
import type { Language, NavigateHandler } from "@/types";
import { thesesMonographs } from "@/data/academic";

interface MonographsSectionProps {
  lang: Language;
  navigate: NavigateHandler;
}

export function MonographsSection({ lang, navigate }: MonographsSectionProps) {
  return (
    <section className="academic-theses-section" id="academic-theses">
      <div className="section-heading-centered">
        <span className="academic-badge-pill">
          <BookOpen size={13} />
          {lang === "vi" ? "CHUYÊN ĐỀ HỌC THUẬT & SỔ TAY KỸ SƯ" : "ACADEMIC THESES & TECHNICAL MONOGRAPHS"}
        </span>
        <h2>
          {lang === "vi"
            ? "Chuyên Đề Nghiên Cứu & Kiến Thức Chuyên Sâu"
            : "Specialized Engineering Monographs"}
        </h2>
        <p>
          {lang === "vi"
            ? "Tổng hợp các chuyên đề kiến thức cốt lõi được xây dựng bài bản, kết hợp lý thuyết học thuật kỹ sư Hệ thống Thông tin với kinh nghiệm giải quyết vấn đề kỹ thuật trong thực tế."
            : "A curated collection of deep-dive monographs synthesizing core computer science & information systems theory with hands-on production engineering practice."}
        </p>
      </div>

      <div className="theses-showcase-grid">
        {thesesMonographs.map((thesis) => (
          <a
            className="thesis-showcase-card"
            key={thesis.path}
            href={thesis.path}
            onClick={(event) => navigate(event, thesis.path)}
          >
            <div className="thesis-badge-row">
              <span className="thesis-num">{thesis.num[lang]}</span>
              <span className="thesis-time">{thesis.time[lang]}</span>
            </div>
            <h3>{thesis.title[lang]}</h3>
            <p>{thesis.desc[lang]}</p>
            <div className="thesis-card-footer">
              <span>{lang === "vi" ? "Khám phá chuyên đề" : "Read Monograph"}</span>
              <ArrowUpRight size={15} />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
