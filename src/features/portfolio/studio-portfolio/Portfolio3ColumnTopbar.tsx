import { FileText, Menu, Search } from "lucide-react";
import type { Language } from "@/types";
import type { PortfolioItem } from "@/data/portfolio-tree.data";
import { BrandAvatar } from "@/components/BrandAvatar";
import styles from "@/features/knowledge/studio/StudioLayout.module.css";

interface Portfolio3ColumnTopbarProps {
  lang: Language;
  onLangChange: (lang: Language) => void;
  activeItem: PortfolioItem;
  onOpenSearch: () => void;
  onToggleSidebar: () => void;
  isSidebarOpen: boolean;
  onSelectCv?: () => void;
  onSelectProfile?: () => void;
}

export function Portfolio3ColumnTopbar({
  lang,
  onLangChange,
  activeItem,
  onOpenSearch,
  onToggleSidebar,
  isSidebarOpen,
  onSelectCv,
  onSelectProfile,
}: Portfolio3ColumnTopbarProps) {
  return (
    <header className={styles.studioTopbar} aria-label="Portfolio Studio Topbar">
      <div className={styles.topbarLeft}>
        {/* Toggle Sidebar Explorer Button (Dấu 3 gạch đóng/mở cây thư mục) */}
        <button
          type="button"
          className={styles.hamburgerBtn}
          onClick={onToggleSidebar}
          title={
            lang === "vi"
              ? isSidebarOpen
                ? "Thu gọn cây thư mục (⌘B)"
                : "Mở cây thư mục (⌘B)"
              : isSidebarOpen
                ? "Collapse Explorer (⌘B)"
                : "Expand Explorer (⌘B)"
          }
          aria-label={isSidebarOpen ? "Collapse navigation" : "Expand navigation"}
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: "34px",
            height: "34px",
            borderRadius: "8px",
            border: isSidebarOpen ? "1.5px solid #bfdbfe" : "1.5px solid #d8e6f5",
            background: isSidebarOpen ? "#eff6ff" : "#ffffff",
            color: isSidebarOpen ? "#2563eb" : "#475569",
            cursor: "pointer",
            transition: "all 140ms ease",
          }}
        >
          <Menu size={18} />
        </button>

        {/* Brand Lockup with Avatar (Click để chuyển về Hồ Sơ chính) */}
        <button
          type="button"
          onClick={() => (onSelectProfile ? onSelectProfile() : onSelectCv?.())}
          className={styles.brandLink}
          title={lang === "vi" ? "Xem Hồ Sơ Ứng Viên" : "View Candidate Profile"}
          style={{
            background: "transparent",
            border: "none",
            padding: "2px 6px",
            borderRadius: "8px",
            cursor: "pointer",
            textAlign: "left",
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <BrandAvatar alt="Võ Văn Tú Tài" />
          <div className={styles.brandTitleCol}>
            <span
              className={styles.brandName}
              style={{
                fontFamily: "var(--studio-font-sans)",
                fontSize: "14.5px",
                fontWeight: 850,
                letterSpacing: "-0.02em",
                color: "#0f172a",
              }}
            >
              Võ Văn Tú Tài
            </span>
            <span
              className={styles.brandTag}
              style={{
                fontFamily: "var(--font-mono, monospace)",
                fontSize: "9.5px",
                fontWeight: 800,
                letterSpacing: "0.08em",
                color: "#2563eb",
              }}
            >
              SYSTEMS STUDIO PORTFOLIO
            </span>
          </div>
        </button>
      </div>

      {/* Middle Breadcrumb Indicator */}
      <div className={styles.topbarMiddle} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <span
          style={{
            fontFamily: "var(--font-mono, monospace)",
            fontSize: "11.5px",
            color: "#64748b",
            fontWeight: 700,
          }}
        >
          {activeItem.category[lang]}
        </span>
        <span style={{ color: "#94a3b8" }}>/</span>
        <span
          style={{
            fontFamily: "var(--studio-font-sans)",
            fontSize: "12.5px",
            color: "#0f172a",
            fontWeight: 800,
            letterSpacing: "-0.01em",
          }}
        >
          {activeItem.title[lang]}
        </span>
      </div>

      {/* Right Controls */}
      <div className={styles.topbarRight}>
        {/* Quick Search */}
        <button
          type="button"
          className={styles.quickSearchBtn}
          onClick={onOpenSearch}
          aria-label="Search portfolio"
        >
          <Search size={14} className={styles.searchIcon} />
          <span className={styles.searchPlaceholder}>
            {lang === "vi" ? "Tìm mục..." : "Search..."}
          </span>
          <kbd className={styles.searchKbd}>⌘K</kbd>
        </button>

        {/* Bilingual VIE / ENG Switcher */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            padding: "2px",
            background: "#f1f5f9",
            borderRadius: "8px",
            border: "1px solid #e2e8f0",
          }}
        >
          <button
            type="button"
            onClick={() => onLangChange("vi")}
            style={{
              padding: "4px 8px",
              borderRadius: "6px",
              border: "none",
              background: lang === "vi" ? "#2563eb" : "transparent",
              color: lang === "vi" ? "#ffffff" : "#475569",
              fontSize: "11px",
              fontWeight: 850,
              fontFamily: "var(--font-mono, monospace)",
              cursor: "pointer",
              transition: "all 140ms ease",
            }}
          >
            VIE
          </button>
          <button
            type="button"
            onClick={() => onLangChange("en")}
            style={{
              padding: "4px 8px",
              borderRadius: "6px",
              border: "none",
              background: lang === "en" ? "#2563eb" : "transparent",
              color: lang === "en" ? "#ffffff" : "#475569",
              fontSize: "11px",
              fontWeight: 850,
              fontFamily: "var(--font-mono, monospace)",
              cursor: "pointer",
              transition: "all 140ms ease",
            }}
          >
            ENG
          </button>
        </div>

        {/* Tải CV Direct Action: Official 2-Page ATS CV Download */}
        <a
          href={
            lang === "vi"
              ? "/VoVanTuTai_Business_Analyst_CV_Tieng_Viet.pdf"
              : "/VoVanTuTai_Business_Analyst_CV.pdf"
          }
          download
          target="_blank"
          rel="noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "5px",
            padding: "6px 12px",
            borderRadius: "8px",
            background: "#2563eb",
            color: "#ffffff",
            fontSize: "12px",
            fontWeight: 800,
            textDecoration: "none",
            border: "1px solid #1d4ed8",
            cursor: "pointer",
            boxShadow: "1px 1.5px 0 #0f172a",
          }}
          title={
            lang === "vi"
              ? "Tải CV chính thức 2 trang A4 chuẩn (PDF)"
              : "Download official 2-page ATS resume (PDF)"
          }
        >
          <FileText size={13} />
          <span>{lang === "vi" ? "Tải CV" : "Download CV"}</span>
        </a>
      </div>
    </header>
  );
}
