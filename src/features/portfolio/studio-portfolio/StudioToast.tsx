import { memo } from "react";
import { CheckCircle2, X } from "lucide-react";
import styles from "@/features/knowledge/studio/StudioLayout.module.css";

interface StudioToastProps {
  toast: { title: string; content: string } | null;
  onClose: () => void;
}

export const StudioToast = memo(function StudioToast({ toast, onClose }: StudioToastProps) {
  if (!toast) return null;

  return (
    <div className={styles.floatingToast} role="status" aria-live="polite">
      <div className={styles.toastIconWrap}>
        <CheckCircle2 size={17} color="#16a34a" />
      </div>
      <div className={styles.toastBody}>
        <div className={styles.toastTitle}>{toast.title}</div>
        <div className={styles.toastContent}>{toast.content}</div>
      </div>
      <button
        type="button"
        className={styles.toastCloseBtn}
        onClick={onClose}
        aria-label="Close notification"
      >
        <X size={14} />
      </button>
      <div className={styles.toastProgressBar} aria-hidden="true" />
    </div>
  );
});
