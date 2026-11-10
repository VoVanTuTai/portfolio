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

interface HeroSectionProps {
  lang: Language;
  t: PortfolioLocaleData;
}

export function HeroSection({ lang, t }: HeroSectionProps) {
  return (
    <section className="hero executive-hero" id="top">
      <div className="hero-copy">
        {/* Academic Status & Availability Pill */}
        <div className="academic-status-pill">
          <span className="badge-pulse-dot" />
          <span className="badge-text">
            {lang === "vi"
              ? "KỸ SƯ HỆ THỐNG THÔNG TIN · IUH (GPA 3.26/4.0 GIỎI) · SẴN SÀNG NHẬN VIỆC"
              : "B.ENG IN INFORMATION SYSTEMS · IUH (GPA 3.26/4.0 DISTINCTION) · AVAILABLE NOW"}
          </span>
        </div>

        <div className="profile-lockup">
          <div className="profile-avatar-wrap">
            <img className="profile-avatar" src="/assets/avatar.png" alt="Vo Van Tu Tai" />
            <span className="avatar-online-dot" title="Available for hire" />
          </div>
          <div className="profile-info-col">
            <div className="profile-name-row">
              <p className="profile-name">Vo Van Tu Tai</p>
              <span className="profile-role-tag highlight">IT Business Analyst</span>
              <span className="profile-role-tag">Information Systems Architect</span>
              <span className="profile-role-tag secondary">Software Engineer</span>
            </div>
            <p className="profile-meta">{t.hero.profileMeta}</p>
          </div>
        </div>

        <p className="eyebrow">{t.hero.eyebrow}</p>
        <h1 className="hero-title">{t.hero.heading}</h1>
        <p className="hero-lede">{t.hero.lede}</p>

        {/* Primary Action Buttons */}
        <div className="hero-action-buttons">
          <a
            href="https://tracking.nexus-ex.site/"
            target="_blank"
            rel="noreferrer"
            className="hero-btn-primary"
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
            className="hero-btn-secondary"
          >
            <Download size={15} />
            <span>{lang === "vi" ? "Tải CV Kỹ sư & BA (PDF)" : "Download ATS CV (PDF)"}</span>
          </a>
          <a href="#academic-foundation" className="hero-btn-outline">
            <Layers size={15} />
            <span>{lang === "vi" ? "Khám phá Nền tảng Kỹ sư ↓" : "Explore Foundation ↓"}</span>
          </a>
        </div>

        {/* Hero Proof Chips */}
        <div className="hero-proof-chips-row">
          <div className="hero-proof-chip highlight">
            <CheckCircle2 size={18} />
            <div>
              <strong>IUH · GPA 3.26 / 4.0</strong>
              <span>{lang === "vi" ? "Bằng Giỏi / Distinction" : "Distinction Degree"}</span>
            </div>
          </div>
          <div className="hero-proof-chip">
            <BriefcaseBusiness size={18} />
            <div>
              <strong>HomeNest Software</strong>
              <span>{lang === "vi" ? "6+ tháng Business Analyst" : "6+ mos IT BA Experience"}</span>
            </div>
          </div>
          <div className="hero-proof-chip">
            <Boxes size={18} />
            <div>
              <strong>J&amp;T Express</strong>
              <span>{lang === "vi" ? "Điều phối Hiện trường" : "Frontline Logistics Ops"}</span>
            </div>
          </div>
          <div className="hero-proof-chip highlight-green">
            <Sparkles size={18} />
            <div>
              <strong>{lang === "vi" ? "Sẵn sàng nhận việc" : "Available Full-Time"}</strong>
              <span>{lang === "vi" ? "Full-time tại TP.HCM" : "Immediate in HCM City"}</span>
            </div>
          </div>
        </div>
      </div>

      <aside className="hero-visual" aria-label="System architecture & competency preview">
        <ArchSimulator lang={lang} />

        <div className="hero-proof-grid">
          {t.proofSignals.map((item) => (
            <div className="proof-tile" key={item.label}>
              <span>{item.label}</span>
              <p>{item.value}</p>
            </div>
          ))}
        </div>

        <div className="panel-links">
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
