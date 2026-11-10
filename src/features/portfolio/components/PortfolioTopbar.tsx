import { useEffect, useRef, useState } from "react";
import { ChevronDown, Download, ExternalLink, FileText, Mail, Phone, Sparkles } from "lucide-react";
import type { Language, PortfolioLocaleData } from "@/types";
import { BrandAvatar } from "@/components/BrandAvatar";

interface PortfolioTopbarProps {
  lang: Language;
  t: PortfolioLocaleData;
  onLangChange: (newLang: Language) => void;
}

export function PortfolioTopbar({ lang, t, onLangChange }: PortfolioTopbarProps) {
  const [isCvMenuOpen, setIsCvMenuOpen] = useState(false);
  const cvMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (cvMenuRef.current && !cvMenuRef.current.contains(event.target as Node)) {
        setIsCvMenuOpen(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsCvMenuOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <header className="topbar" aria-label="Primary navigation">
      <a className="brand" href="#top" aria-label="Vo Van Tu Tai home">
        <BrandAvatar ariaHidden dotTitle="Available for hire" />
        <div className="brand-text">
          <span className="brand-name">Vo Van Tu Tai</span>
          <span className="brand-tag">B.Eng in IS · IT BA &amp; Software Engineer</span>
        </div>
      </a>

      <div className="topbar-right">
        <nav>
          <a href="#projects">{t.nav.projects}</a>
          <a href="#project-management" className="nav-highlight-pm">
            <Sparkles size={13} aria-hidden="true" />
            <span>{t.nav.pmFramework}</span>
          </a>
          <a href="#academic-foundation">{lang === "vi" ? "Nền tảng Kỹ sư" : "Foundation"}</a>
          <a href="#academic-theses">{lang === "vi" ? "Chuyên đề" : "Theses"}</a>
          <a href="#skills">{t.nav.skills}</a>
          <a href="#experience">{lang === "vi" ? "Kinh nghiệm" : "Experience"}</a>
          <a href="#contact">{t.nav.contact}</a>
        </nav>

        {/* TOPBAR LIVE OMS DEMO CTA */}
        <a
          href="https://tracking.nexus-ex.site/"
          target="_blank"
          rel="noreferrer"
          className="topbar-live-cta"
          title="Open Live Tracking Demo: Nexus Express"
        >
          <span className="live-status-dot" />
          <span>Live Demo OMS</span>
          <ExternalLink size={12} />
        </a>

        {/* LUXURY RECRUITER CV BUTTON & DROPDOWN */}
        <div className="topbar-cv-menu-container" ref={cvMenuRef}>
          <button
            type="button"
            className={`topbar-cv-btn${isCvMenuOpen ? " is-active" : ""}`}
            onClick={() => setIsCvMenuOpen((prev) => !prev)}
            aria-expanded={isCvMenuOpen}
            aria-haspopup="true"
          >
            <FileText size={16} aria-hidden="true" />
            <span>{lang === "vi" ? "Tải & Xem CV" : "CV & Resume"}</span>
            <ChevronDown
              size={14}
              className={`dropdown-chevron${isCvMenuOpen ? " is-rotated" : ""}`}
              aria-hidden="true"
            />
          </button>

          {isCvMenuOpen && (
            <div className="topbar-cv-dropdown" role="menu">
              <div className="dropdown-header">
                <div className="dropdown-status-dot" />
                <div>
                  <strong>{lang === "vi" ? "Hồ sơ & CV đính kèm" : "Resumes & Documents"}</strong>
                  <p>
                    {lang === "vi"
                      ? "Chọn bản Tiếng Việt hoặc Tiếng Anh"
                      : "Vietnamese & English versions"}
                  </p>
                </div>
              </div>

              <div className="dropdown-tracks-list">
                {/* Track 1: CV BA / PO Tiếng Việt */}
                <div className="dropdown-track-item">
                  <div className="dropdown-track-header">
                    <div className="item-icon-wrap gold">
                      <FileText size={15} />
                    </div>
                    <div className="dropdown-track-meta">
                      <div className="item-title-row">
                        <strong>
                          {lang === "vi" ? "CV BA / PO (Tiếng Việt)" : "BA / PO Resume (Vietnamese)"}
                        </strong>
                        <span className="item-badge">VI</span>
                      </div>
                      <p>
                        {lang === "vi"
                          ? "Kinh nghiệm thực tế, tài liệu PRD/SRS, quy trình BPMN & UAT"
                          : "Detailed project cases, PRD/SRS specs & BPMN workflows"}
                      </p>
                    </div>
                  </div>
                  <div className="dropdown-track-actions">
                    <a
                      className="dropdown-action-btn primary"
                      href="/VoVanTuTai_Business_Analyst_CV_Tieng_Viet.pdf"
                      download
                      onClick={() => setIsCvMenuOpen(false)}
                    >
                      <Download size={13} />
                      <span>{lang === "vi" ? "Tải PDF" : "Download PDF"}</span>
                    </a>
                    <a
                      className="dropdown-action-btn secondary"
                      href="/po-ba-cv-vi.html"
                      target="_blank"
                      rel="noreferrer"
                      onClick={() => setIsCvMenuOpen(false)}
                    >
                      <ExternalLink size={13} />
                      <span>{lang === "vi" ? "Xem Web" : "View Web"}</span>
                    </a>
                  </div>
                </div>

                {/* Track 2: CV BA / PO Tiếng Anh */}
                <div className="dropdown-track-item">
                  <div className="dropdown-track-header">
                    <div className="item-icon-wrap emerald">
                      <FileText size={15} />
                    </div>
                    <div className="dropdown-track-meta">
                      <div className="item-title-row">
                        <strong>
                          {lang === "vi" ? "CV BA / PO (Tiếng Anh)" : "BA / PO Resume (English)"}
                        </strong>
                        <span className="item-badge-subtle">EN</span>
                      </div>
                      <p>
                        {lang === "vi"
                          ? "Phiên bản tiếng Anh chuẩn quốc tế cho team Product & Outsource"
                          : "Standardized English version for Product & Outsource teams"}
                      </p>
                    </div>
                  </div>
                  <div className="dropdown-track-actions">
                    <a
                      className="dropdown-action-btn primary"
                      href="/VoVanTuTai_Business_Analyst_CV.pdf"
                      download
                      onClick={() => setIsCvMenuOpen(false)}
                    >
                      <Download size={13} />
                      <span>{lang === "vi" ? "Tải PDF" : "Download PDF"}</span>
                    </a>
                    <a
                      className="dropdown-action-btn secondary"
                      href="/cv.html"
                      target="_blank"
                      rel="noreferrer"
                      onClick={() => setIsCvMenuOpen(false)}
                    >
                      <ExternalLink size={13} />
                      <span>{lang === "vi" ? "Xem Web" : "View Web"}</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="dropdown-footer">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                  }}
                >
                  <a href="tel:+84869500573" className="dropdown-contact-link">
                    <Phone size={13} />
                    +84 869 500 573
                  </a>
                  <a href="mailto:tutaivovan@gmail.com" className="dropdown-contact-link">
                    <Mail size={13} />
                    tutaivovan@gmail.com
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="lang-switcher" role="group" aria-label="Language selection">
          <button
            type="button"
            className={`lang-btn${lang === "vi" ? " is-active" : ""}`}
            onClick={() => onLangChange("vi")}
            aria-pressed={lang === "vi"}
            title="Tiếng Việt"
          >
            VIE
          </button>
          <span className="lang-divider" aria-hidden="true">
            /
          </span>
          <button
            type="button"
            className={`lang-btn${lang === "en" ? " is-active" : ""}`}
            onClick={() => onLangChange("en")}
            aria-pressed={lang === "en"}
            title="English"
          >
            ENG
          </button>
        </div>
      </div>
    </header>
  );
}
