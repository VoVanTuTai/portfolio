import { ArrowUpRight, BookOpen, Sparkles } from "lucide-react";
import type { Language, NavigateHandler } from "@/types";
import { thesesMonographs } from "@/data/academic";
import styles from "./Cards.module.css";

interface MonographsSectionProps {
  lang: Language;
  navigate: NavigateHandler;
}

const studioSlugMap: Record<string, string> = {
  "/knowledge/business-analysis": "bpmn-process-modeling",
  "/knowledge/programming-languages": "compiler-execution-pipeline",
  "/knowledge/database": "data-modeling-erd",
  "/knowledge/database/data-modeling": "data-modeling-erd",
  "/knowledge/backend-api": "rest-api-contracts",
};

export function MonographsSection({ lang, navigate }: MonographsSectionProps) {
  return (
    <section className={styles.academicThesesSection} id="academic-theses">
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

        <div style={{ marginTop: "16px" }}>
          <a
            href="/studio"
            onClick={(e) => navigate(e, "/studio")}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "7px",
              padding: "7px 16px",
              borderRadius: "999px",
              background: "linear-gradient(135deg, rgba(37, 99, 235, 0.1), rgba(2, 132, 199, 0.15))",
              border: "1px solid rgba(37, 99, 235, 0.35)",
              color: "#2563eb",
              fontSize: "13px",
              fontWeight: 800,
              textDecoration: "none",
            }}
          >
            <Sparkles size={14} />
            <span>
              {lang === "vi"
                ? "Khám phá Phòng Thí Nghiệm Studio 3 Cột (Mô phỏng 2.5D) ↗"
                : "Explore Systems Studio (2.5D Interactive Simulation) ↗"}
            </span>
          </a>
        </div>
      </div>

      <div className={styles.thesesShowcaseGrid}>
        {thesesMonographs.map((thesis) => {
          const studioSlug = studioSlugMap[thesis.path];
          return (
            <div className={styles.thesisShowcaseCard} key={thesis.path}>
              <div className={styles.thesisBadgeRow}>
                <span className={styles.thesisNum}>{thesis.num[lang]}</span>
                <span className={styles.thesisTime}>{thesis.time[lang]}</span>
              </div>
              <h3>{thesis.title[lang]}</h3>
              <p>{thesis.desc[lang]}</p>
              <div
                className={styles.thesisCardFooter}
                style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}
              >
                <a
                  href={thesis.path}
                  onClick={(event) => navigate(event, thesis.path)}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "4px",
                    color: "#0f172a",
                    fontWeight: 750,
                    fontSize: "12.5px",
                    textDecoration: "none",
                  }}
                >
                  <span>{lang === "vi" ? "Đọc lý thuyết" : "Read Theory"}</span>
                  <ArrowUpRight size={13} />
                </a>

                {studioSlug && (
                  <a
                    href={`/studio#${studioSlug}`}
                    onClick={(e) => navigate(e, `/studio#${studioSlug}`)}
                    style={{
                      marginLeft: "auto",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "4px",
                      padding: "4px 8px",
                      borderRadius: "6px",
                      background: "#eff6ff",
                      border: "1px solid #bfdbfe",
                      color: "#2563eb",
                      fontSize: "11px",
                      fontWeight: 800,
                      textDecoration: "none",
                    }}
                  >
                    <span>Mô phỏng 2.5D ↗</span>
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
