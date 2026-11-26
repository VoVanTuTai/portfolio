import { useState } from "react";
import {
  Activity,
  Binary,
  Boxes,
  Building2,
  CalendarRange,
  Car,
  CheckCircle2,
  ChevronRight,
  ClipboardCheck,
  Code2,
  Database,
  DollarSign,
  FileDown,
  FileText,
  Folder,
  FolderOpen,
  GitBranch,
  GitFork,
  GitPullRequest,
  Layers,
  Server,
  ShieldCheck,
  Smartphone,
  Target,
  TrendingUp,
  UserCheck,
  Webhook,
  Workflow,
  X,
} from "lucide-react";
import type { Language } from "@/types";
import type { PortfolioFolder, PortfolioItem } from "@/data/portfolio-tree.data";
import styles from "@/features/knowledge/studio/StudioLayout.module.css";

interface Portfolio3ColumnSidebarProps {
  folders: PortfolioFolder[];
  activeItemSlug: string;
  onSelectItem: (slug: string) => void;
  lang: Language;
  isDrawerOpen: boolean;
  onCloseDrawer?: () => void;
}

const modernIconMap: Record<
  string,
  React.ComponentType<{ size?: number; className?: string; color?: string }>
> = {
  "user-check": UserCheck,
  "file-down": FileDown,
  boxes: Boxes,
  car: Car,
  "building-2": Building2,
  "git-fork": GitFork,
  "calendar-range": CalendarRange,
  "trending-up": TrendingUp,
  "clipboard-check": ClipboardCheck,
  "code-2": Code2,
  activity: Activity,
  database: Database,
  webhook: Webhook,
  workflow: Workflow,
  binary: Binary,
  target: Target,
  layers: Layers,
  "check-circle-2": CheckCircle2,
  "git-branch": GitBranch,
  "git-pull-request": GitPullRequest,
  "file-text": FileText,
  smartphone: Smartphone,
  server: Server,
  "shield-check": ShieldCheck,
  "dollar-sign": DollarSign,
};

export function Portfolio3ColumnSidebar({
  folders,
  activeItemSlug,
  onSelectItem,
  lang,
  isDrawerOpen,
  onCloseDrawer,
}: Portfolio3ColumnSidebarProps) {
  const [openFolders, setOpenFolders] = useState<Record<string, boolean>>(() => {
    const init: Record<string, boolean> = {};
    for (const folder of folders) {
      const hasActive = folder.items.some(
        (item) => item.slug === activeItemSlug || item.children?.some((c) => c.slug === activeItemSlug)
      );
      init[folder.id] = hasActive || folder.code === "01" || folder.code === "02";
    }
    return init;
  });

  const [openSubFolders, setOpenSubFolders] = useState<Record<string, boolean>>(() => {
    const init: Record<string, boolean> = {
      "item-nexus": true,
      "item-cab": true,
      "item-tourist": true,
      "item-ba-diagrams": true,
      "item-dev-modern": true,
    };
    for (const folder of folders) {
      for (const item of folder.items) {
        if (item.children?.some((c) => c.slug === activeItemSlug)) {
          init[item.id] = true;
        }
      }
    }
    return init;
  });

  const toggleFolder = (folderId: string) => {
    setOpenFolders((prev) => ({ ...prev, [folderId]: !prev[folderId] }));
  };

  const toggleSubFolder = (itemId: string) => {
    setOpenSubFolders((prev) => ({ ...prev, [itemId]: !prev[itemId] }));
  };

  const totalItems = folders.reduce((sum, f) => sum + f.items.length, 0);

  const renderIcon = (name: string, folderColor: string, isCurrent: boolean) => {
    const IconComp = modernIconMap[name] || Boxes;
    return <IconComp size={15} color={isCurrent ? "#ffffff" : folderColor} />;
  };

  return (
    <>
      {/* Mobile Drawer Backdrop */}
      {isDrawerOpen && (
        <div
          className={styles.drawerBackdrop}
          onClick={onCloseDrawer}
          aria-hidden="true"
        />
      )}

      <aside
        className={`${styles.studioSidebar} ${isDrawerOpen ? styles.isDrawerOpen : ""}`}
        style={{
          display: "flex",
          flexDirection: "column",
          borderRight: "1.5px solid #d8e6f5",
          background: "#ffffff",
        }}
        aria-label="Portfolio File Explorer"
      >
        {/* 1. Candidate Avatar Profile Hero Card (Tích hợp Folder Hồ Sơ tại chỗ Avatar) */}
        <div className={styles.sidebarProfileCard}>
          <div className={styles.sidebarProfileHead}>
            <div className={styles.sidebarAvatarWrap}>
              <img
                src="/assets/avatar.png"
                alt="Võ Văn Tú Tài"
                className={styles.sidebarAvatarImg}
              />
              <span className={styles.sidebarAvatarDot} title="Online" />
            </div>
            <div className={styles.sidebarProfileInfo}>
              <div className={styles.sidebarProfileNameRow}>
                <span className={styles.sidebarProfileName}>Võ Văn Tú Tài</span>
                <span className={styles.sidebarRoleBadge}>PM</span>
              </div>
              <span className={styles.sidebarProfileSub}>Project Manager @ Digityze Asia</span>
            </div>

            {/* Mobile Drawer Close Button */}
            <button
              type="button"
              className={styles.drawerCloseBtn}
              onClick={onCloseDrawer}
              aria-label="Đóng menu"
              title="Đóng ngăn kéo"
            >
              <X size={18} />
            </button>
          </div>
        </div>

      {/* 2. Folders Explorer Header Bar */}
      <div
        className={styles.sidebarHead}
        style={{
          padding: "12px 16px",
          borderBottom: "1.5px solid #e2e8f0",
          background: "#f8fafc",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <span
          className={styles.sidebarTitle}
          style={{
            fontFamily: "var(--studio-font-sans)",
            fontSize: "12px",
            fontWeight: 800,
            color: "#475569",
            display: "flex",
            alignItems: "center",
            gap: "7px",
            textTransform: "uppercase",
            letterSpacing: "0.04em",
          }}
        >
          <Folder size={14} color="#2563eb" />
          <span>{lang === "vi" ? "Cây Thư Mục Dự Án" : "Project Explorer"}</span>
        </span>
        <span
          style={{
            fontFamily: "var(--font-mono, monospace)",
            fontSize: "10.5px",
            fontWeight: 750,
            color: "#1d4ed8",
            background: "#eff6ff",
            padding: "2px 7px",
            borderRadius: "6px",
            border: "1px solid #bfdbfe",
          }}
        >
          {totalItems} {lang === "vi" ? "mục" : "items"}
        </span>
      </div>

      {/* 2. Folders & Modules Tree List */}
      <div
        className={styles.modulesList}
        style={{
          flex: "1 1 auto",
          overflowY: "auto",
          padding: "12px 10px 24px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        {folders.map((folder) => {
          const isOpen = Boolean(openFolders[folder.id]);
          const containsActive = folder.items.some((i) => i.slug === activeItemSlug);

          return (
            <section
              key={folder.id}
              className={`${styles.moduleSection} ${isOpen ? styles.isOpen : ""}`}
              style={{
                flexShrink: 0,
                borderRadius: "10px",
                border: containsActive ? `1.5px solid ${folder.color}` : "1.5px solid #e2e8f0",
                background: "#ffffff",
                boxShadow: containsActive ? "0 2px 8px rgba(15, 23, 42, 0.05)" : "none",
                overflow: "hidden",
                transition: "all 140ms ease",
              }}
            >
              {/* Folder Header Collapsible Button */}
              <button
                type="button"
                className={styles.moduleHeaderBtn}
                onClick={() => toggleFolder(folder.id)}
                aria-expanded={isOpen}
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "9px 11px",
                  border: "none",
                  background: isOpen ? folder.bgLight : "#ffffff",
                  cursor: "pointer",
                  transition: "background 140ms ease",
                }}
              >
                <div
                  className={styles.moduleHeaderLeft}
                  style={{ display: "flex", alignItems: "center", gap: "8px", minWidth: 0, overflow: "hidden" }}
                >
                  {/* Distinct Color Code Badge Pill */}
                  <span
                    style={{
                      fontFamily: "var(--font-mono, monospace)",
                      fontSize: "10px",
                      fontWeight: 850,
                      padding: "2px 6px",
                      borderRadius: "5px",
                      background: folder.bgLight,
                      color: folder.color,
                      border: `1px solid ${folder.borderLight}`,
                      flexShrink: 0,
                    }}
                  >
                    {folder.code}
                  </span>

                  {isOpen ? (
                    <FolderOpen size={16} color={folder.color} style={{ flexShrink: 0 }} />
                  ) : (
                    <Folder size={16} color={folder.color} style={{ flexShrink: 0 }} />
                  )}

                  <span
                    className={styles.moduleTitleText}
                    style={{
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      fontFamily: "var(--studio-font-sans)",
                      fontSize: "12px",
                      fontWeight: 800,
                      color: isOpen ? folder.color : "#1e293b",
                    }}
                  >
                    {folder.title[lang]}
                  </span>
                </div>

                <div
                  className={styles.moduleMeta}
                  style={{ display: "flex", alignItems: "center", gap: "6px", flexShrink: 0 }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-mono, monospace)",
                      fontSize: "10px",
                      fontWeight: 700,
                      color: "#64748b",
                      background: "#ffffff",
                      padding: "1px 5px",
                      borderRadius: "4px",
                      border: "1px solid #cbd5e1",
                    }}
                  >
                    {folder.items.length}
                  </span>
                  <ChevronRight
                    size={13}
                    color="#64748b"
                    className={`${styles.chevronIcon} ${isOpen ? styles.isRotated : ""}`}
                  />
                </div>
              </button>

              {/* Sub-Items List */}
              {isOpen && (
                <div
                  className={styles.lessonList}
                  style={{
                    padding: "6px 8px 8px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "5px",
                    borderTop: `1px solid ${folder.borderLight}`,
                    background: "#ffffff",
                  }}
                >
                  {folder.items.map((item: PortfolioItem) => {
                    const hasChildren = item.children && item.children.length > 0;
                    const isSubOpen = Boolean(openSubFolders[item.id]);
                    const isChildActive = Boolean(item.children?.some((c) => c.slug === activeItemSlug));
                    const isCurrent = item.slug === activeItemSlug;

                    if (hasChildren && item.children) {
                      return (
                        <div key={item.id} style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                          {/* Sub-Folder Toggle Header */}
                          <button
                            type="button"
                            className={`${styles.lessonItemBtn} ${isCurrent || isChildActive ? styles.isActive : ""}`}
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-between",
                              width: "100%",
                              minWidth: 0,
                              minHeight: "34px",
                              padding: "6px 8px",
                              borderRadius: "7px",
                              border: isCurrent
                                ? `1.5px solid ${folder.color}`
                                : "1px solid transparent",
                              borderLeft: isCurrent || isChildActive
                                ? `3.5px solid ${folder.color}`
                                : "1px solid transparent",
                              background: isCurrent || isChildActive ? `${folder.color}0d` : "transparent",
                              cursor: "pointer",
                              transition: "all 120ms ease",
                              gap: "6px",
                              textAlign: "left",
                            }}
                            onClick={() => toggleSubFolder(item.id)}
                            aria-expanded={isSubOpen}
                          >
                            <div style={{ display: "flex", alignItems: "center", gap: "6px", minWidth: 0, flex: 1, overflow: "hidden" }}>
                              <ChevronRight
                                size={12}
                                color={isChildActive ? folder.color : "#64748b"}
                                style={{
                                  transform: isSubOpen ? "rotate(90deg)" : "rotate(0deg)",
                                  transition: "transform 140ms ease",
                                  flexShrink: 0,
                                }}
                              />
                              {isSubOpen ? (
                                <FolderOpen size={14} color={folder.color} style={{ flexShrink: 0 }} />
                              ) : (
                                <Folder size={14} color={folder.color} style={{ flexShrink: 0 }} />
                              )}
                              <span
                                style={{
                                  overflow: "hidden",
                                  textOverflow: "ellipsis",
                                  whiteSpace: "nowrap",
                                  fontFamily: "var(--studio-font-sans)",
                                  fontWeight: 800,
                                  color: isCurrent || isChildActive ? folder.color : "#1e293b",
                                  fontSize: "11.5px",
                                  letterSpacing: "-0.01em",
                                }}
                              >
                                {item.title[lang]}
                              </span>
                            </div>

                            <span
                              style={{
                                fontFamily: "var(--font-mono, monospace)",
                                fontSize: "9.5px",
                                fontWeight: 700,
                                color: "#64748b",
                                background: "#f1f5f9",
                                padding: "1px 5px",
                                borderRadius: "4px",
                                border: "1px solid #e2e8f0",
                                flexShrink: 0,
                              }}
                            >
                              {item.children.length}
                            </span>
                          </button>

                          {/* Indented Children Items */}
                          {isSubOpen && (
                            <div
                              style={{
                                paddingLeft: "12px",
                                marginLeft: "14px",
                                borderLeft: `1.5px solid ${folder.borderLight}`,
                                display: "flex",
                                flexDirection: "column",
                                gap: "2px",
                                marginTop: "1px",
                                marginBottom: "4px",
                              }}
                            >
                              {item.children.map((child: PortfolioItem) => {
                                const isCurrentChild = child.slug === activeItemSlug;
                                return (
                                  <button
                                    key={child.id}
                                    type="button"
                                    className={`${styles.lessonItemBtn} ${isCurrentChild ? styles.isActive : ""}`}
                                    style={{
                                      display: "flex",
                                      alignItems: "center",
                                      justifyContent: "space-between",
                                      width: "100%",
                                      minWidth: 0,
                                      minHeight: "30px",
                                      padding: "5px 8px",
                                      borderRadius: "6px",
                                      border: isCurrentChild
                                        ? `1.5px solid ${folder.color}`
                                        : "1px solid transparent",
                                      borderLeft: isCurrentChild
                                        ? `3px solid ${folder.color}`
                                        : "1px solid transparent",
                                      background: isCurrentChild ? folder.bgLight : "transparent",
                                      boxShadow: isCurrentChild ? "0 1px 3px rgba(15, 23, 42, 0.05)" : "none",
                                      cursor: "pointer",
                                      transition: "all 120ms ease",
                                      gap: "6px",
                                      textAlign: "left",
                                    }}
                                    onClick={() => {
                                      onSelectItem(child.slug);
                                      if (onCloseDrawer) onCloseDrawer();
                                    }}
                                  >
                                    <div style={{ display: "flex", alignItems: "center", gap: "6px", minWidth: 0, flex: 1, overflow: "hidden" }}>
                                      <span
                                        style={{
                                          flexShrink: 0,
                                          width: "20px",
                                          height: "20px",
                                          borderRadius: "4px",
                                          display: "grid",
                                          placeItems: "center",
                                          background: isCurrentChild ? folder.color : folder.bgLight,
                                          border: `1px solid ${isCurrentChild ? folder.color : folder.borderLight}`,
                                        }}
                                      >
                                        {renderIcon(child.iconName, folder.color, isCurrentChild)}
                                      </span>
                                      <span
                                        style={{
                                          overflow: "hidden",
                                          textOverflow: "ellipsis",
                                          whiteSpace: "nowrap",
                                          fontFamily: "var(--studio-font-sans)",
                                          fontWeight: isCurrentChild ? 800 : 550,
                                          color: isCurrentChild ? folder.color : "#475569",
                                          fontSize: "11px",
                                        }}
                                      >
                                        {child.title[lang]}
                                      </span>
                                    </div>

                                    <span
                                      style={{
                                        fontFamily: "var(--font-mono, monospace)",
                                        fontSize: "9px",
                                        fontWeight: isCurrentChild ? 800 : 600,
                                        color: isCurrentChild ? folder.color : "#94a3b8",
                                        flexShrink: 0,
                                        marginLeft: "auto",
                                      }}
                                    >
                                      {child.time}
                                    </span>
                                  </button>
                                );
                              })}
                            </div>
                          )}
                        </div>
                      );
                    }

                    // Direct Standalone Item
                    return (
                      <button
                        key={item.id}
                        type="button"
                        className={`${styles.lessonItemBtn} ${isCurrent ? styles.isActive : ""}`}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          width: "100%",
                          minWidth: 0,
                          minHeight: "36px",
                          padding: "7px 10px",
                          borderRadius: "7px",
                          border: isCurrent
                            ? `1.5px solid ${folder.color}`
                            : "1px solid transparent",
                          borderLeft: isCurrent
                            ? `3.5px solid ${folder.color}`
                            : "1px solid transparent",
                          background: isCurrent ? folder.bgLight : "transparent",
                          boxShadow: isCurrent ? "0 1.5px 4px rgba(15, 23, 42, 0.05)" : "none",
                          cursor: "pointer",
                          transition: "all 120ms ease",
                          gap: "8px",
                          textAlign: "left",
                          flexShrink: 0,
                        }}
                        onClick={() => {
                          onSelectItem(item.slug);
                          if (onCloseDrawer) onCloseDrawer();
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "8px",
                            minWidth: 0,
                            flex: 1,
                            overflow: "hidden",
                          }}
                        >
                          {/* Modern Rounded Icon Badge Container */}
                          <span
                            style={{
                              flexShrink: 0,
                              width: "25px",
                              height: "25px",
                              borderRadius: "6px",
                              display: "grid",
                              placeItems: "center",
                              background: isCurrent ? folder.color : folder.bgLight,
                              border: isCurrent
                                ? `1px solid ${folder.color}`
                                : `1px solid ${folder.borderLight}`,
                              transition: "all 120ms ease",
                            }}
                          >
                            {renderIcon(item.iconName, folder.color, isCurrent)}
                          </span>

                          {/* Item Title in Modern Geometric Font */}
                          <span
                            style={{
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              whiteSpace: "nowrap",
                              fontFamily: "var(--studio-font-sans)",
                              fontWeight: isCurrent ? 850 : 600,
                              color: isCurrent ? folder.color : "#334155",
                              fontSize: "12px",
                              letterSpacing: "-0.01em",
                            }}
                          >
                            {item.title[lang]}
                          </span>
                        </div>

                        {/* Duration Badge Pill */}
                        <span
                          className={styles.lessonDuration}
                          style={{
                            whiteSpace: "nowrap",
                            flexShrink: 0,
                            marginLeft: "auto",
                            padding: "2px 6px",
                            borderRadius: "5px",
                            fontFamily: "var(--font-mono, monospace)",
                            fontSize: "10px",
                            fontWeight: isCurrent ? 800 : 600,
                            color: isCurrent ? folder.color : "#64748b",
                            background: isCurrent ? "#ffffff" : "#f1f5f9",
                            border: isCurrent
                              ? `1px solid ${folder.borderLight}`
                              : "1px solid #e2e8f0",
                          }}
                        >
                          {item.time}
                        </span>
                      </button>
                    );
                  })}
                </div>
              )}
            </section>
          );
        })}
      </div>
    </aside>
  </>
  );
}
