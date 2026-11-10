interface BrandAvatarProps {
  alt?: string;
  ariaHidden?: boolean;
  dotTitle?: string;
}

export function BrandAvatar({ alt = "Võ Văn Tú Tài", ariaHidden, dotTitle }: BrandAvatarProps) {
  return (
    <div className="brand-avatar-wrap">
      <img
        className="brand-avatar"
        src="/assets/avatar.png"
        alt={ariaHidden ? "" : alt}
        aria-hidden={ariaHidden || undefined}
      />
      <span
        className="brand-dot-pulse"
        title={dotTitle}
        aria-hidden={dotTitle ? undefined : "true"}
      />
    </div>
  );
}
