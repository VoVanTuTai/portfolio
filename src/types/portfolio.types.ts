import type React from "react";
import type { IconComponent, LocalizedText } from "./common.types";

export interface ProjectItem {
  name: string;
  role: string;
  href: string;
  liveUrl?: string;
  liveLabel?: string;
  image: string;
  stack: string[];
  summary: string;
  highlights: string[];
}

export interface ProjectGroup {
  title: string;
  description: string;
  projects: ProjectItem[];
}

export interface SkillGroup {
  icon: IconComponent;
  title: string;
  items: string[];
  href?: string;
  linkLabel?: string;
}

export interface PortfolioLocaleData {
  nav: {
    projects: string;
    pmFramework: string;
    skills: string;
    baKnowledge: string;
    knowledge: string;
    contact: string;
  };
  hero: {
    profileMeta: string;
    eyebrow: string;
    heading: string;
    lede: React.ReactNode;
    actions: {
      explore: string;
      pdfBaVi: string;
      pdfBaViHref: string;
      pdfBaEn: string;
      pdfBaEnHref: string;
      webBaVi: string;
      webBaViHref: string;
      webBaEn: string;
      webBaEnHref: string;
    };
  };
  preview: {
    browserLabel: string;
    panelLabel: string;
    panelTitle: string;
    cards: { top: string; strong: string; bottom: string }[];
    targetLabel: string;
    targetValue: string;
    tags: string[];
  };
  proofSignals: { label: string; value: string }[];
  stats: { label: string; value: string }[];
  about: {
    label: string;
    heading: string;
    p1: React.ReactNode;
    p2: React.ReactNode;
  };
  projectsSection: {
    label: string;
    heading: string;
    subtitle: string;
  };
  projectGroups: ProjectGroup[];
  skillsSection: {
    label: string;
    heading: string;
    groups: SkillGroup[];
  };
  experienceSection: {
    homeNest: {
      label: string;
      title: string;
      meta: string;
      text: React.ReactNode;
    };
    jnt: {
      label: string;
      title: string;
      meta: string;
      text: React.ReactNode;
    };
  };
  contactSection: {
    label: string;
    heading: string;
    subtitle: string;
    pdfBaVi: { label: string; href: string };
    pdfBaEn: { label: string; href: string };
    webBaVi: { label: string; href: string };
    webBaEn: { label: string; href: string };
    location: string;
  };
  footer: {
    caption: string;
  };
}

export interface AcademicPillar {
  code: string;
  icon: IconComponent;
  color: "blue" | "indigo" | "purple" | "emerald";
  title: LocalizedText;
  desc: LocalizedText;
  tags: string[];
}

export interface ThesisMonograph {
  num: LocalizedText;
  time: LocalizedText;
  path: string;
  title: LocalizedText;
  desc: LocalizedText;
}

export interface ArchStep {
  id: string;
  title: string;
  tech: string;
  name: string;
  metric: string;
  desc: LocalizedText;
  tags: string[];
}
