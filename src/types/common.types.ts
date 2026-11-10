import type React from "react";

export type Language = "vi" | "en";

export interface LocalizedText {
  vi: string;
  en: string;
}

export interface LocalizedList {
  vi: string[];
  en: string[];
}

export type IconComponent = React.ComponentType<{
  size?: number;
  "aria-hidden"?: boolean | "true" | "false";
}>;

export type NavigateHandler = (
  event: React.MouseEvent<HTMLAnchorElement>,
  path: string,
) => void;
