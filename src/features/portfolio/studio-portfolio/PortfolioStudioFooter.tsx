import { memo, useState } from "react";
import {
  Phone,
  Mail,
  Linkedin,
  Github,
  Check,
  FileText,
  ArrowUp,
  Search,
  Truck,
} from "lucide-react";
import type { Language } from "@/types";
import { BrandAvatar } from "@/components/BrandAvatar";
import styles from "@/features/knowledge/studio/StudioLayout.module.css";

interface PortfolioStudioFooterProps {
  lang: Language;
  onShowToast?: (title: string, content: string) => void;
  onOpenSearch?: () => void;
  onSelectProfile?: () => void;
}

export const PortfolioStudioFooter = memo(function PortfolioStudioFooter({
  lang,
  onShowToast,
  onOpenSearch,
  onSelectProfile,
}: PortfolioStudioFooterProps) {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const handleCopy = (text: string, key: string, label: string) => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedKey(key);
      setTimeout(() => setCopiedKey(null), 2000);
      onShowToast?.(
        lang === "vi" ? "Đã sao chép vào bộ nhớ tạm" : "Copied to clipboard",
        `${label}: ${text}`
      );
    }
  };

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      {/* 1. Subtle In-Flow Page Termination Text */}
      <div className={styles.inFlowFooterText}>
        <span>© 2026 Võ Văn Tú Tài</span>
        <span className={styles.inFlowDivider}>·</span>
        <span>
          {lang === "vi"
            ? "Kỹ sư Hệ thống Thông tin (IUH)"
            : "B.Eng in Information Systems (IUH)"}
        </span>
        <span className={styles.inFlowDivider}>·</span>
        <span>Project Manager @ Digityze Asia</span>
      </div>

      {/* 2. macOS Floating Dock Toolbar (Fixed at Bottom Center) */}
      <nav
        className={styles.macDockContainer}
        aria-label="macOS Floating Quick Action Dock"
      >
        {/* App 1: Profile / Avatar */}
        <div className={styles.dockItemWrap}>
          <div className={styles.dockTooltip}>
            {lang === "vi" ? "Hồ Sơ · Võ Văn Tú Tài" : "Profile · Vo Van Tu Tai"}
          </div>
          <button
            type="button"
            className={`${styles.dockItemBtn} ${styles.dockAvatarBtn}`}
            onClick={onSelectProfile}
            aria-label="View Candidate Profile"
          >
            <BrandAvatar alt="Võ Văn Tú Tài" />
          </button>
          <span className={styles.dockActiveDot} />
        </div>

        {/* App 2: Phone Hotline */}
        <div className={styles.dockItemWrap}>
          <div className={styles.dockTooltip}>
            {copiedKey === "phone"
              ? lang === "vi"
                ? "Đã sao chép số!"
                : "Copied phone!"
              : "(+84) 869 500 573 · " +
                (lang === "vi" ? "Chép số" : "Click to copy")}
          </div>
          <button
            type="button"
            className={`${styles.dockItemBtn} ${styles.dockPhoneBtn}`}
            onClick={() => handleCopy("0869500573", "phone", "SĐT")}
            aria-label="Copy Phone Number"
          >
            {copiedKey === "phone" ? (
              <Check size={16} color="#16a34a" />
            ) : (
              <Phone size={16} />
            )}
          </button>
          <span className={styles.dockActiveDot} />
        </div>

        {/* App 3: Work Mail */}
        <div className={styles.dockItemWrap}>
          <div className={styles.dockTooltip}>
            {copiedKey === "email"
              ? lang === "vi"
                ? "Đã sao chép email!"
                : "Copied email!"
              : "tutaivovan@gmail.com · " +
                (lang === "vi" ? "Chép email" : "Click to copy")}
          </div>
          <button
            type="button"
            className={`${styles.dockItemBtn} ${styles.dockMailBtn}`}
            onClick={() =>
              handleCopy("tutaivovan@gmail.com", "email", "Email")
            }
            aria-label="Copy Work Email"
          >
            {copiedKey === "email" ? (
              <Check size={16} color="#16a34a" />
            ) : (
              <Mail size={16} />
            )}
          </button>
          <span className={styles.dockActiveDot} />
        </div>

        {/* App 4: LinkedIn Profile */}
        <div className={styles.dockItemWrap}>
          <div className={styles.dockTooltip}>LinkedIn · Vo Van Tu Tai ↗</div>
          <a
            href="https://linkedin.com/in/vovantutai"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.dockItemBtn} ${styles.dockLinkedinBtn}`}
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={16} />
          </a>
          <span className={styles.dockActiveDot} />
        </div>

        {/* App 5: GitHub Code */}
        <div className={styles.dockItemWrap}>
          <div className={styles.dockTooltip}>GitHub · @VoVanTuTai ↗</div>
          <a
            href="https://github.com/VoVanTuTai"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.dockItemBtn} ${styles.dockGithubBtn}`}
            aria-label="GitHub Repositories"
          >
            <Github size={16} />
          </a>
          <span className={styles.dockActiveDot} />
        </div>

        {/* Vertical Dock Divider */}
        <div className={styles.dockDivider} />

        {/* App 6: CV Tiếng Việt (PDF) */}
        <div className={styles.dockItemWrap}>
          <div className={styles.dockTooltip}>
            {lang === "vi"
              ? "Tải Bản CV Tiếng Việt (PDF)"
              : "Download Vietnamese CV (PDF)"}
          </div>
          <a
            href="/VoVanTuTai_Business_Analyst_CV_Tieng_Viet.pdf"
            download
            className={`${styles.dockItemBtn} ${styles.dockCvBtn}`}
            aria-label="Download Vietnamese CV PDF"
          >
            <FileText size={13} />
            <span style={{ fontSize: "10px", fontWeight: 850 }}>VN</span>
          </a>
          <span className={styles.dockActiveDot} />
        </div>

        {/* App 7: English CV (PDF) */}
        <div className={styles.dockItemWrap}>
          <div className={styles.dockTooltip}>
            {lang === "vi"
              ? "Tải Bản CV Tiếng Anh (PDF)"
              : "Download English CV (PDF)"}
          </div>
          <a
            href="/VoVanTuTai_Business_Analyst_CV.pdf"
            download
            className={`${styles.dockItemBtn} ${styles.dockCvEnBtn}`}
            aria-label="Download English CV PDF"
          >
            <FileText size={13} />
            <span style={{ fontSize: "10px", fontWeight: 850 }}>EN</span>
          </a>
          <span className={styles.dockActiveDot} />
        </div>

        {/* App 8: Nexus Live OMS Demo */}
        <div className={styles.dockItemWrap}>
          <div className={styles.dockTooltip}>Nexus Express Live OMS ↗</div>
          <a
            href="https://tracking.nexus-ex.site/"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.dockItemBtn} ${styles.dockOmsBtn}`}
            aria-label="Live Demo Nexus Express OMS"
          >
            <Truck size={16} />
          </a>
          <span className={styles.dockActiveDot} />
        </div>

        {/* Vertical Dock Divider */}
        <div className={styles.dockDivider} />

        {/* App 9: Quick Search Modal (⌘K) */}
        <div className={styles.dockItemWrap}>
          <div className={styles.dockTooltip}>
            {lang === "vi" ? "Tìm kiếm nhanh (⌘K)" : "Quick Search (⌘K)"}
          </div>
          <button
            type="button"
            className={`${styles.dockItemBtn} ${styles.dockSearchBtn}`}
            onClick={onOpenSearch}
            aria-label="Quick Search"
          >
            <Search size={16} />
          </button>
          <span className={styles.dockActiveDot} />
        </div>

        {/* App 10: Scroll To Top */}
        <div className={styles.dockItemWrap}>
          <div className={styles.dockTooltip}>
            {lang === "vi" ? "Cuộn lên đầu trang" : "Scroll to Top"}
          </div>
          <button
            type="button"
            className={`${styles.dockItemBtn} ${styles.dockTopBtn}`}
            onClick={scrollToTop}
            aria-label="Scroll to Top"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </nav>
    </>
  );
});
