import type { LearningPathItem } from "@/types";

export const learningPath: LearningPathItem[] = [
  {
    number: "01",
    path: "/knowledge/programming-languages",
    title: "Programming Languages",
    description: "Cách source code được thực thi, hệ kiểu, runtime, paradigm và cách chọn ngôn ngữ.",
    meta: "Nền móng · 40 phút",
  },
  {
    number: "02",
    path: "/knowledge/database",
    title: "Database Fundamentals",
    description: "Database, SQL/NoSQL, cách tổ chức dữ liệu và lựa chọn công nghệ.",
    meta: "Nền tảng · 25 phút",
  },
  {
    number: "03",
    path: "/knowledge/database/data-modeling",
    title: "Data Modeling & ERD",
    description: "Requirement, entity, relationship, relational schema và normalization.",
    meta: "Thực hành · 35 phút",
  },
  {
    number: "04",
    path: "/knowledge/backend-api",
    title: "Backend & REST API",
    description: "Request lifecycle, REST contract, authentication, authorization và testing.",
    meta: "Có hướng dẫn · 3 tiết",
  },
  {
    number: "05",
    path: "/knowledge/business-analysis",
    title: "Business Analysis",
    description: "Nền tảng BA, competency mapping, project evidence và phân tích tình huống nghiệp vụ.",
    meta: "Chuyên đề ứng dụng · 60 phút",
  },
];

export const pageTitles: Record<string, string> = {
  "/knowledge": "Knowledge Portfolio - Vo Van Tu Tai",
  "/knowledge/programming-languages": "Programming Languages & Runtime Architecture - Võ Văn Tú Tài",
  "/knowledge/database": "Database Fundamentals - Vo Van Tu Tai",
  "/knowledge/database/data-modeling": "Data Modeling & ERD - Vo Van Tu Tai",
  "/knowledge/backend-api": "Backend & Authentication Fundamentals - Vo Van Tu Tai",
  "/knowledge/business-analysis": "IT Business Analysis & Enterprise Architecture - Võ Văn Tú Tài",
};
