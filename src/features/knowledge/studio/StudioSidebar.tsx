import { useState } from "react";
import { ChevronRight, Folder, FolderOpen } from "lucide-react";
import type { StudioModule } from "./studio.types";
import styles from "./StudioLayout.module.css";

interface StudioSidebarProps {
  modules: StudioModule[];
  currentLessonSlug: string;
  onSelectLesson: (slug: string) => void;
  isDrawerOpen: boolean;
  totalLessonsCount: number;
  completedLessonsCount: number;
}

export function StudioSidebar({
  modules,
  currentLessonSlug,
  onSelectLesson,
  isDrawerOpen,
  totalLessonsCount,
  completedLessonsCount,
}: StudioSidebarProps) {
  const [openModules, setOpenModules] = useState<Record<string, boolean>>(() => {
    const initial: Record<string, boolean> = {};
    for (const mod of modules) {
      const hasActive = mod.lessons.some((l) => l.slug === currentLessonSlug);
      initial[mod.id] = hasActive || mod.code === "01";
    }
    return initial;
  });

  const toggleModule = (modId: string) => {
    setOpenModules((prev) => ({ ...prev, [modId]: !prev[modId] }));
  };

  const progressPercent = totalLessonsCount > 0
    ? Math.round((completedLessonsCount / totalLessonsCount) * 100)
    : 0;

  return (
    <aside
      className={`${styles.studioSidebar} ${isDrawerOpen ? styles.isDrawerOpen : ""}`}
      aria-label="Danh mục khóa học Studio"
    >
      <div className={styles.sidebarHead}>
        <span className={styles.sidebarTitle}>
          <Folder size={14} color="#0284c7" />
          <span>Khóa Học Kỹ Sư IS</span>
        </span>
        <span className={styles.sidebarLessonCount}>
          {totalLessonsCount} bài học
        </span>
      </div>

      <div className={styles.modulesList}>
        {modules.map((mod) => {
          const isOpen = Boolean(openModules[mod.id]);
          const completedCount = mod.lessons.filter((l) => l.completed).length;

          return (
            <section
              key={mod.id}
              className={`${styles.moduleSection} ${isOpen ? styles.isOpen : ""}`}
            >
              <button
                type="button"
                className={styles.moduleHeaderBtn}
                onClick={() => toggleModule(mod.id)}
                aria-expanded={isOpen}
              >
                <div className={styles.moduleHeaderLeft}>
                  {isOpen ? (
                    <FolderOpen
                      size={15}
                      color={mod.color}
                      className={styles.folderIcon}
                    />
                  ) : (
                    <Folder
                      size={15}
                      color={mod.color}
                      className={styles.folderIcon}
                    />
                  )}
                  <span className={styles.moduleTitleText}>
                    {mod.code}. {mod.title}
                  </span>
                </div>

                <div className={styles.moduleMeta}>
                  <span>
                    {completedCount}/{mod.lessons.length}
                  </span>
                  <ChevronRight
                    size={13}
                    className={`${styles.chevronIcon} ${isOpen ? styles.isRotated : ""}`}
                  />
                </div>
              </button>

              {isOpen && (
                <div className={styles.lessonList}>
                  {mod.lessons.map((lesson) => {
                    const isActive = lesson.slug === currentLessonSlug;
                    return (
                      <button
                        key={lesson.id}
                        type="button"
                        className={`${styles.lessonItemBtn} ${isActive ? styles.isActive : ""}`}
                        onClick={() => onSelectLesson(lesson.slug)}
                      >
                        <span>{lesson.title}</span>
                        <span className={styles.lessonDuration}>
                          {lesson.durationMinutes}p
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

      <div className={styles.sidebarProgressFooter}>
        <div className={styles.progressLabelRow}>
          <span>TIẾN ĐỘ HOÀN THÀNH</span>
          <span>
            {completedLessonsCount} / {totalLessonsCount} ({progressPercent}%)
          </span>
        </div>
        <div className={styles.progressBarTrack}>
          <div
            className={styles.progressBarFill}
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>
    </aside>
  );
}
