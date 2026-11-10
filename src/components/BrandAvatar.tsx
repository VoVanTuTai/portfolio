import styles from "./Topbar.module.css";

interface BrandAvatarProps {
  alt?: string;
  ariaHidden?: boolean;
  dotTitle?: string;
}

export function BrandAvatar({ alt = "Võ Văn Tú Tài", ariaHidden, dotTitle }: BrandAvatarProps) {
  return (
    <div className={styles.brandAvatarWrap}>
      <img
        className={styles.brandAvatar}
        src="/assets/avatar.png"
        alt={ariaHidden ? "" : alt}
        aria-hidden={ariaHidden || undefined}
      />
      <span
        className={styles.brandDotPulse}
        title={dotTitle}
        aria-hidden={dotTitle ? undefined : "true"}
      />
    </div>
  );
}
