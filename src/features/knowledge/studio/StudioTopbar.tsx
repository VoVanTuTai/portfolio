import { useEffect, useState } from "react";
import { BookOpen, Briefcase, FileText, Layers, Menu, Moon, Search, Sun, X } from "lucide-react";
import type { NavigateHandler } from "@/types";
import styles from "./StudioLayout.module.css";

interface StudioTopbarProps {
  navigate: NavigateHandler;
  activeTab?: "studio" | "projects" | "pm" | "cv";
  onOpenSearch: () => void;
  isDrawerOpen: boolean;
  onToggleDrawer: () => void;
}

export function StudioTopbar({
  navigate,
  activeTab = "studio",
  onOpenSearch,
  isDrawerOpen,
  onToggleDrawer,
}: StudioTopbarProps) {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const saved = localStorage.getItem("tutai:theme");
    if (saved === "dark") {
      setTheme("dark");
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
  }, []);

  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    localStorage.setItem("tutai:theme", next);
    if (next === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
  };

  return (
    <header className={styles.studioTopbar}>
      <div className={styles.topbarLeft}>
        <button
          className={styles.mobileMenuToggle}
          onClick={onToggleDrawer}
          aria-label={isDrawerOpen ? "Đóng danh mục" : "Mở danh mục bài học"}
        >
          {isDrawerOpen ? <X size={18} /> : <Menu size={18} />}
        </button>

        <a
          href="/"
          onClick={(e) => navigate(e, "/")}
          className={styles.brandLink}
          title="Trang chủ Portfolio Võ Văn Tú Tài"
        >
          <img
            src="/assets/avatar.png"
            alt="Võ Văn Tú Tài"
            className={styles.brandAvatar}
            width={34}
            height={34}
          />
          <div className={styles.brandTitleCol}>
            <span className={styles.brandName}>Võ Văn Tú Tài</span>
            <span className={styles.brandTag}>Systems Studio</span>
          </div>
        </a>

        <nav className={styles.navTabs} aria-label="Điều hướng chính">
          <button
            type="button"
            className={`${styles.navTabBtn} ${activeTab === "studio" ? styles.isActive : ""}`}
            onClick={(e) => navigate(e, "/studio")}
          >
            <BookOpen size={13} />
            <span>Studio Bài Học</span>
          </button>
          <button
            type="button"
            className={`${styles.navTabBtn} ${activeTab === "projects" ? styles.isActive : ""}`}
            onClick={(e) => navigate(e, "/#projects")}
          >
            <Briefcase size={13} />
            <span>Dự Án</span>
          </button>
          <button
            type="button"
            className={`${styles.navTabBtn} ${activeTab === "pm" ? styles.isActive : ""}`}
            onClick={(e) => navigate(e, "/#project-management")}
          >
            <Layers size={13} />
            <span>Vận Hành PM</span>
          </button>
          <button
            type="button"
            className={`${styles.navTabBtn} ${activeTab === "cv" ? styles.isActive : ""}`}
            onClick={(e) => navigate(e, "/cv.html")}
          >
            <FileText size={13} />
            <span>Hồ Sơ CV</span>
          </button>
        </nav>
      </div>

      <div className={styles.topbarRight}>
        <button
          type="button"
          className={styles.searchTriggerBtn}
          onClick={onOpenSearch}
          title="Tìm bài học và khái niệm (Phím tắt: ⌘K hoặc Ctrl+K)"
        >
          <Search size={13} />
          <span>Tìm khái niệm...</span>
          <span className={styles.kbdPill}>⌘K</span>
        </button>

        <button
          type="button"
          className={styles.themeToggleBtn}
          onClick={toggleTheme}
          title={theme === "light" ? "Chuyển sang Dark Slate" : "Chuyển sang Light Paper"}
          aria-label="Đổi giao diện sáng/tối"
        >
          {theme === "light" ? <Moon size={15} /> : <Sun size={15} />}
        </button>

        <a
          href="https://designed-to-scale.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.attributionTag}
          title="Giao diện studio tương tác lấy cảm hứng từ Designed to Scale by Dilum Sanjaya"
        >
          Inspired by Designed to Scale ↗
        </a>
      </div>
    </header>
  );
}
