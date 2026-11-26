import { memo, useEffect, useState } from "react";
import { Terminal } from "lucide-react";
import type { Language } from "@/types";
import styles from "@/features/knowledge/studio/StudioLayout.module.css";

interface StudioTypewriterSubtitleProps {
  lang: Language;
}

const titlesVi = [
  "Project Manager tại Digityze Asia · Systems Architect",
  "Kỹ sư Hệ thống Thông tin (IUH Bằng Giỏi 3.26/4.0)",
  "Chuyên gia Phân tích Nghiệp vụ IT BA & Tiến Độ CPM",
  "Kiến trúc sư Giải pháp Logistics OMS & Nền tảng ERP",
];

const titlesEn = [
  "Project Manager at Digityze Asia · Systems Architect",
  "B.Eng in Information Systems (IUH Distinction 3.26/4.0)",
  "IT Business Analyst & Critical Path Method Specialist",
  "Logistics OMS & Enterprise ERP Platform Architect",
];

export const StudioTypewriterSubtitle = memo(function StudioTypewriterSubtitle({
  lang,
}: StudioTypewriterSubtitleProps) {
  const titles = lang === "vi" ? titlesVi : titlesEn;
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    // Reset when language changes
    setDisplayText("");
    setIsDeleting(false);
    setTitleIndex(0);
  }, [lang]);

  useEffect(() => {
    const currentTitle = titles[titleIndex % titles.length];
    let timer: NodeJS.Timeout;

    if (!isDeleting) {
      if (displayText.length < currentTitle.length) {
        timer = setTimeout(() => {
          setDisplayText(currentTitle.slice(0, displayText.length + 1));
        }, 45);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 3000);
      }
    } else {
      if (displayText.length > 0) {
        timer = setTimeout(() => {
          setDisplayText(currentTitle.slice(0, displayText.length - 1));
        }, 22);
      } else {
        setIsDeleting(false);
        setTitleIndex((prev) => (prev + 1) % titles.length);
      }
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, titleIndex, titles]);

  return (
    <div className={styles.typewriterSubtitleWrap} aria-label="Professional status ticker">
      <div className={styles.typewriterPrompt}>
        <Terminal size={12} className={styles.typewriterIcon} />
        <span className={styles.typewriterPrefix}>role:~$</span>
      </div>
      <span className={styles.typewriterText}>{displayText}</span>
      <span className={styles.typewriterCursor} aria-hidden="true" />
    </div>
  );
});
