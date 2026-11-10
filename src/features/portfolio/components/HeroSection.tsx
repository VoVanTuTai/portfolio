import {
  Boxes,
  BriefcaseBusiness,
  CheckCircle2,
  Download,
  ExternalLink,
  Github,
  Layers,
  Linkedin,
  Mail,
  Sparkles,
} from "lucide-react";
import type { Language, PortfolioLocaleData } from "@/types";
import { ArchSimulator } from "./ArchSimulator";
import styles from "./HeroSection.module.css";

interface HeroSectionProps {
  lang: Language;
  t: PortfolioLocaleData;
}

export function HeroSection({ lang, t }: HeroSectionProps) {
  return (
    <section className={styles.hero} id="top">
      <div className={styles.heroCopy}>
        {/* Academic Status & Availability Pill */}
        <div className={styles.academicStatusPill}>
          <span className={styles.badgePulseDot} />
          <span className={styles.badgeText}>
            {lang === "vi"
              ? "KỸ SƯ HỆ THỐNG THÔNG TIN · IUH (GPA 3.26/4.0 GIỎI) · SẴN SÀNG NHẬN VIỆC"
              : "B.ENG IN INFORMATION SYSTEMS · IUH (GPA 3.26/4.0 DISTINCTION) · AVAILABLE NOW"}
          </span>
        </div>

        <div className={styles.profileLockup}>
          <div className={styles.profileAvatarWrap}>
            <img className={styles.profileAvatar} src="/assets/avatar.png" alt="Vo Van Tu Tai" />
            <span className={styles.avatarOnlineDot} title="Available for hire" />
          </div>
          <div className={styles.profileInfoCol}>
            <div className={styles.profileNameRow}>
              <p className={styles.profileName}>Vo Van Tu Tai</p>
              <span className={`${styles.profileRoleTag} ${styles.highlight}`}>
                IT Business Analyst
              </span>
              <span className={styles.profileRoleTag}>Information Systems Architect</span>
              <span className={`${styles.profileRoleTag} ${styles.secondary}`}>
                Software Engineer
              </span>
            </div>
            <p className={styles.profileMeta}>{t.hero.profileMeta}</p>
          </div>
        </div>

        <p className="eyebrow">{t.hero.eyebrow}</p>
        <h1 className={styles.heroTitle}>{t.hero.heading}</h1>
        <p className={styles.heroLede}>{t.hero.lede}</p>

        {/* Primary Action Buttons */}
        <div className={styles.heroActionButtons}>
          <a
            href="https://tracking.nexus-ex.site/"
            target="_blank"
            rel="noreferrer"
            className={styles.heroBtnPrimary}
            title="Open Live Tracking Demo: Nexus Express"
          >
            <ExternalLink size={15} />
            <span>
              {lang === "vi"
                ? "Xem Live Demo: Nexus Express OMS ↗"
                : "Live Demo: Nexus Express OMS ↗"}
            </span>
          </a>
          <a
            href={
              lang === "vi"
                ? "/VoVanTuTai_Business_Analyst_CV_Tieng_Viet.pdf"
                : "/VoVanTuTai_Business_Analyst_CV.pdf"
            }
            download
            className={styles.heroBtnSecondary}
          >
            <Download size={15} />
            <span>{lang === "vi" ? "Tải CV Kỹ sư & BA (PDF)" : "Download ATS CV (PDF)"}</span>
          </a>
          <a href="#academic-foundation" className={styles.heroBtnOutline}>
            <Layers size={15} />
            <span>{lang === "vi" ? "Khám phá Nền tảng Kỹ sư ↓" : "Explore Foundation ↓"}</span>
          </a>
        </div>

        {/* Hero Proof Chips */}
        <div className={styles.heroProofChipsRow}>
          <div className={`${styles.heroProofChip} ${styles.highlight}`}>
            <CheckCircle2 size={18} />
            <div>
              <strong>IUH · GPA 3.26 / 4.0</strong>
              <span>{lang === "vi" ? "Bằng Giỏi / Distinction" : "Distinction Degree"}</span>
            </div>
          </div>
          <div className={styles.heroProofChip}>
            <BriefcaseBusiness size={18} />
            <div>
              <strong>HomeNest Software</strong>
              <span>{lang === "vi" ? "6+ tháng Business Analyst" : "6+ mos IT BA Experience"}</span>
            </div>
          </div>
          <div className={styles.heroProofChip}>
            <Boxes size={18} />
            <div>
              <strong>J&amp;T Express</strong>
              <span>{lang === "vi" ? "Điều phối Hiện trường" : "Frontline Logistics Ops"}</span>
            </div>
          </div>
          <div className={`${styles.heroProofChip} ${styles.highlightGreen}`}>
            <Sparkles size={18} />
            <div>
              <strong>{lang === "vi" ? "Sẵn sàng nhận việc" : "Available Full-Time"}</strong>
              <span>{lang === "vi" ? "Full-time tại TP.HCM" : "Immediate in HCM City"}</span>
            </div>
          </div>
        </div>
      </div>

      <aside className={styles.heroVisual} aria-label="System architecture & competency preview">
        <ArchSimulator lang={lang} />

        <div className={styles.heroProofGrid}>
          {t.proofSignals.map((item) => (
            <div className={styles.proofTile} key={item.label}>
              <span>{item.label}</span>
              <p>{item.value}</p>
            </div>
          ))}
        </div>

        <div className={styles.panelLinks}>
          <a href="https://github.com/VoVanTuTai" target="_blank" rel="noreferrer">
            <Github size={18} aria-hidden="true" />
            GitHub
          </a>
          <a href="https://linkedin.com/in/vovantutai" target="_blank" rel="noreferrer">
            <Linkedin size={18} aria-hidden="true" />
            LinkedIn
          </a>
          <a href="mailto:tutaivovan@gmail.com">
            <Mail size={18} aria-hidden="true" />
            Email
          </a>
        </div>
      </aside>
    </section>
  );
}
