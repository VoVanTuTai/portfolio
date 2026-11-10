import {
  Download,
  ExternalLink,
  FileText,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Sparkles,
} from "lucide-react";
import type { Language, PortfolioLocaleData } from "@/types";

interface ContactSectionProps {
  lang: Language;
  t: PortfolioLocaleData;
}

export function ContactSection({ lang, t }: ContactSectionProps) {
  return (
    <>
      <section className="contact-section" id="contact">
        <div>
          <p className="section-label">{t.contactSection.label}</p>
          <h2>{t.contactSection.heading}</h2>
          <p style={{ marginTop: "8px", color: "var(--muted)", fontSize: "14px" }}>
            {t.contactSection.subtitle}
          </p>
        </div>
        <div className="contact-links">
          {/* Quick Contact & Socials Grid */}
          <div className="contact-primary-grid">
            <a href="tel:+84869500573" className="contact-action-item">
              <Phone size={17} aria-hidden="true" />
              <span>+84 869 500 573</span>
            </a>
            <a href="mailto:tutaivovan@gmail.com" className="contact-action-item">
              <Mail size={17} aria-hidden="true" />
              <span>tutaivovan@gmail.com</span>
            </a>
            <a
              href="https://linkedin.com/in/vovantutai"
              target="_blank"
              rel="noreferrer"
              className="contact-action-item"
            >
              <Linkedin size={17} aria-hidden="true" />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/VoVanTuTai"
              target="_blank"
              rel="noreferrer"
              className="contact-action-item"
            >
              <Github size={17} aria-hidden="true" />
              <span>GitHub</span>
            </a>
          </div>

          {/* COMPACT & TIDY CV SECTION AT FOOTER */}
          <div className="footer-cv-box">
            <div className="footer-cv-header">
              <FileText size={15} aria-hidden="true" />
              <strong>{lang === "vi" ? "Hồ sơ & CV đính kèm" : "Resumes & Documents"}</strong>
            </div>

            <div className="footer-cv-grid">
              {/* BA / PO Tiếng Việt */}
              <div className="footer-cv-item">
                <div className="footer-cv-meta">
                  <span className="footer-cv-badge vi">VI</span>
                  <strong>{lang === "vi" ? "CV BA / PO Tiếng Việt" : "Vietnamese BA/PO"}</strong>
                </div>
                <div className="footer-cv-actions">
                  <a
                    href="/VoVanTuTai_Business_Analyst_CV_Tieng_Viet.pdf"
                    download
                    className="footer-btn-dl"
                    title="Tải PDF"
                  >
                    <Download size={13} aria-hidden="true" />
                    <span>PDF</span>
                  </a>
                  <a
                    href="/po-ba-cv-vi.html"
                    target="_blank"
                    rel="noreferrer"
                    className="footer-btn-view"
                    title="Xem Web"
                  >
                    <ExternalLink size={13} aria-hidden="true" />
                    <span>Web</span>
                  </a>
                </div>
              </div>

              {/* BA / PO Tiếng Anh */}
              <div className="footer-cv-item">
                <div className="footer-cv-meta">
                  <span className="footer-cv-badge en">EN</span>
                  <strong>{lang === "vi" ? "CV BA / PO Tiếng Anh" : "English BA/PO"}</strong>
                </div>
                <div className="footer-cv-actions">
                  <a
                    href="/VoVanTuTai_Business_Analyst_CV.pdf"
                    download
                    className="footer-btn-dl"
                    title="Download PDF"
                  >
                    <Download size={13} aria-hidden="true" />
                    <span>PDF</span>
                  </a>
                  <a
                    href="/cv.html"
                    target="_blank"
                    rel="noreferrer"
                    className="footer-btn-view"
                    title="View Web"
                  >
                    <ExternalLink size={13} aria-hidden="true" />
                    <span>Web</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <span className="contact-location-tag">
            <MapPin size={16} aria-hidden="true" />
            {t.contactSection.location}
          </span>
        </div>
      </section>

      <footer>
        <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
          <strong>Vo Van Tu Tai — Bachelor of Engineering in Information Systems</strong>
          <span style={{ fontSize: "12px", color: "var(--muted)" }}>
            {lang === "vi"
              ? "Đại học Công nghiệp TP.HCM (IUH) · GPA 3.26/4.0 (Giỏi) · Sẵn sàng làm việc Full-time"
              : "Industrial University of Ho Chi Minh City · GPA 3.26/4.0 (Distinction) · Available Immediately"}
          </span>
        </div>
        <span>
          <Sparkles size={15} aria-hidden="true" />
          {t.footer.caption}
        </span>
      </footer>
    </>
  );
}

