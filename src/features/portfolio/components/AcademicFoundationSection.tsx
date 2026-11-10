import { Sparkles } from "lucide-react";
import type { Language } from "@/types";
import { academicPillars } from "@/data/academic";
import styles from "./Cards.module.css";

interface AcademicFoundationSectionProps {
  lang: Language;
}

export function AcademicFoundationSection({ lang }: AcademicFoundationSectionProps) {
  return (
    <section className={styles.academicFoundationSection} id="academic-foundation">
      <div className="section-heading-centered">
        <span className="academic-badge-pill">
          <Sparkles size={13} />
          {lang === "vi" ? "HỌC THUẬT & NỀN TẢNG KỸ SƯ" : "ACADEMIC & ENGINEERING FOUNDATION"}
        </span>
        <h2>
          {lang === "vi"
            ? "4 Trụ Cột Nền Tảng Kỹ Sư Hệ Thống Thông Tin"
            : "4 Pillars of Information Systems Engineering"}
        </h2>
        <p>
          {lang === "vi"
            ? "Được đào tạo chính quy tại Đại học Công nghiệp TP.HCM (IUH - GPA 3.26/4.0 Giỏi), kết hợp phương pháp mô hình hóa nghiệp vụ chuẩn quốc tế, kiến trúc dữ liệu quan hệ và kỹ nghệ phần mềm thực nghiệm."
            : "Formally trained in Information Systems Engineering at IUH (GPA 3.26/4.0 Distinction), mastering international domain modeling, relational data architecture, and software engineering discipline."}
        </p>
      </div>

      <div className={styles.academicPillarsGrid}>
        {academicPillars.map((pillar) => {
          const Icon = pillar.icon;
          return (
            <article className={styles.academicPillarCard} key={pillar.code}>
              <div className={styles.pillarHeader}>
                <div className={`${styles.pillarIconWrap} ${styles[pillar.color]}`}>
                  <Icon size={22} />
                </div>
                <span className={styles.pillarCode}>{pillar.code}</span>
              </div>
              <h3>{pillar.title[lang]}</h3>
              <p>{pillar.desc[lang]}</p>
              <div className={styles.pillarTags}>
                {pillar.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
