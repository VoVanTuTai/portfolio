import { useState } from "react";
import { Bot, Pause, Play, RotateCcw, Sparkles } from "lucide-react";
import type { Language } from "@/types";
import {
  ACADEMIC_THEORY_CONCEPTS,
  type TheoryConcept,
} from "@/data/theory-concepts.data";

interface NexusAiRag25dSimulatorProps {
  lang: Language;
  onSelectConcept?: (concept: TheoryConcept) => void;
}

type QueryType = "tracking" | "policy" | "cod";

interface QueryCase {
  id: QueryType;
  questionVi: string;
  questionEn: string;
  intent: "REALTIME_SQL_TOOL" | "VECTOR_RAG_SEARCH" | "HYBRID_RECON_SEARCH";
  toolOrCollection: string;
  contextRetrieved: string;
  generatedAnswerVi: string;
  generatedAnswerEn: string;
  trackingLink?: string;
  latencyMs: number;
}

const QUERY_CASES: Record<QueryType, QueryCase> = {
  tracking: {
    id: "tracking",
    questionVi: "Đơn hàng NX-88992 của tôi hiện tại đang ở đâu rồi bưu cục?",
    questionEn: "Where is my parcel NX-88992 currently located?",
    intent: "REALTIME_SQL_TOOL",
    toolOrCollection: "ToolCall: get_parcel_tracking(order_code: 'NX-88992')",
    contextRetrieved: "Status: 'LINEHAUL_TRANSIT' · Hub Nguồn: Hà Nội (Gia Lâm) · Hub Đích: TP.HCM (Sóng Thần) · Xe Tải Biển Số: 29C-882.11 (GPS: 16.054, 108.202 - Qua trạm Đà Nẵng lúc 14:20). Dự kiến phát: 09:30 ngày mai.",
    generatedAnswerVi: "Dạ bưu kiện NX-88992 của bạn đang trên xe tải trục Linehaul di chuyển từ Hub Hà Nội vào Hub TP.HCM, vừa qua trạm trung chuyển Đà Nẵng lúc 14:20. Dự kiến kiện hàng sẽ đến bưu cục phát lúc 09:30 sáng mai. Bạn có thể theo dõi vị trí GPS trực tiếp tại tracking.nexus-ex.site.",
    generatedAnswerEn: "Your parcel NX-88992 is currently in linehaul transit from Hanoi Mega Hub to HCMC, having passed Da Nang station at 14:20. Estimated delivery is 09:30 AM tomorrow. Track live telemetry at tracking.nexus-ex.site.",
    trackingLink: "https://tracking.nexus-ex.site",
    latencyMs: 142,
  },
  policy: {
    id: "policy",
    questionVi: "Hàng cồng kềnh kích thước 80x50x40cm nặng 12kg thì tính cước thế nào?",
    questionEn: "How is freight calculated for an oversized parcel measuring 80x50x40cm weighing 12kg?",
    intent: "VECTOR_RAG_SEARCH",
    toolOrCollection: "VectorSearch: collection('logistics_policies_v2') [Cosine > 0.88]",
    contextRetrieved: "Điều 14 Quy Chế Vận Chuyển: Trọng lượng quy đổi = (Dài x Rộng x Cao) / 5000 = (80 x 50 x 40) / 5000 = 32 kg. So sánh: Trọng lượng thực tế 12 kg < Trọng lượng thể tích 32 kg. Hệ thống tính cước theo mức 32 kg.",
    generatedAnswerVi: "Theo quy chuẩn hàng cồng kềnh, hệ thống áp dụng công thức thể tích tiêu chuẩn: (80 × 50 × 40) ÷ 5.000 = 32 kg quy đổi. Do trọng lượng quy đổi (32kg) lớn hơn trọng lượng thực tế (12kg), cước vận chuyển sẽ được tính dựa trên mức 32 kg để đảm bảo dung tích thùng xe tải.",
    generatedAnswerEn: "Under oversized shipping rules, dimensional weight formula applies: (80 × 50 × 40) ÷ 5,000 = 32 kg. Since dimensional weight (32kg) exceeds actual weight (12kg), billing is calculated at 32 kg.",
    latencyMs: 185,
  },
  cod: {
    id: "cod",
    questionVi: "Shop tôi giao thành công hôm nay thì bao giờ tiền COD về tài khoản?",
    questionEn: "When will COD funds collected today be disbursed to my merchant balance?",
    intent: "HYBRID_RECON_SEARCH",
    toolOrCollection: "Hybrid: SQL Tool `get_merchant_settlement_cycle()` + Vector Rules",
    contextRetrieved: "Hợp Đồng Shop ID 402: Chu kỳ đối soát T+1 tự động. Các đơn giao thành công trước 18:00 hôm nay sẽ được tổng hợp tự động lúc 23:59 và chuyển khoản ngân hàng Vietcombank trước 10:00 sáng ngày làm việc tiếp theo.",
    generatedAnswerVi: "Shop của bạn đang áp dụng chu kỳ đối soát tự động T+1. Tất cả các đơn hàng shipper giao thành công và thu tiền trước 18:00 hôm nay sẽ được hệ thống chốt sổ lúc 23:59 và tiền COD sẽ tự động chuyển khoản ngân hàng về tài khoản Vietcombank của Shop trước 10:00 sáng mai.",
    generatedAnswerEn: "Your shop is enrolled in automated T+1 settlement. All orders successfully delivered before 18:00 today will be closed at 23:59 and disbursed to your registered bank account before 10:00 AM next business day.",
    latencyMs: 168,
  },
};

export function NexusAiRag25dSimulator({ lang, onSelectConcept }: NexusAiRag25dSimulatorProps) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeQuery, setActiveQuery] = useState<QueryType>("tracking");

  const currentCase = QUERY_CASES[activeQuery];

  return (
    <div
      style={{
        borderRadius: "12px",
        background: "radial-gradient(ellipse at 50% 15%, #0d1527 0%, #060913 100%)",
        border: "1.5px solid #1e293b",
        color: "#f8fafc",
        padding: "20px",
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.4)",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
      }}
    >
      {/* 1. Header Toolbar */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "12px",
          borderBottom: "1px solid rgba(148, 163, 184, 0.15)",
          paddingBottom: "14px",
        }}
      >
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span
              style={{
                fontFamily: "var(--studio-font-mono)",
                fontSize: "11px",
                fontWeight: 800,
                color: "#a855f7",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
              }}
            >
              LOGISTICS AI ASSISTANT · HYBRID RAG & TOOL CALLING PIPELINE
            </span>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "4px",
                fontSize: "10px",
                fontWeight: 700,
                color: "#c084fc",
                background: "rgba(168, 85, 247, 0.15)",
                border: "1px solid rgba(168, 85, 247, 0.3)",
                padding: "2px 6px",
                borderRadius: "4px",
              }}
            >
              <Sparkles size={10} /> ZERO HALLUCINATION
            </span>
          </div>
          <h3 style={{ margin: "4px 0 0 0", fontSize: "16px", color: "#ffffff", fontWeight: 750 }}>
            {lang === "vi"
              ? "Kiến Trúc AI Chatbot RAG: Tra Cứu Trạng Thái Bưu Kiện Realtime & Tư Vấn Chính Sách"
              : "Logistics RAG Architecture: Realtime State Retrieval & Policy Grounding"}
          </h3>
        </div>

        {/* Controls */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          {/* Query Selector Pills */}
          <div style={{ display: "flex", gap: "4px", background: "rgba(15, 23, 42, 0.6)", padding: "3px", borderRadius: "6px", border: "1px solid #334155" }}>
            {[
              { id: "tracking", label: "1. Tra Cứu Đơn Realtime" },
              { id: "policy", label: "2. Hỏi Cước Hàng Quá Khổ" },
              { id: "cod", label: "3. Chu Kỳ Đối Soát COD" },
            ].map((q) => (
              <button
                key={q.id}
                type="button"
                onClick={() => {
                  setActiveQuery(q.id as QueryType);
                  onSelectConcept?.(ACADEMIC_THEORY_CONCEPTS["concept-rag-semantic-router"]);
                }}
                style={{
                  border: "none",
                  background: activeQuery === q.id ? "#8b5cf6" : "transparent",
                  color: activeQuery === q.id ? "#ffffff" : "#94a3b8",
                  padding: "4px 8px",
                  borderRadius: "4px",
                  fontSize: "10.5px",
                  fontWeight: 750,
                  cursor: "pointer",
                  transition: "all 0.15s ease",
                }}
              >
                {q.label}
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setIsPlaying(!isPlaying)}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "4px",
              background: isPlaying ? "rgba(239, 68, 68, 0.15)" : "rgba(34, 197, 94, 0.15)",
              color: isPlaying ? "#f87171" : "#4ade80",
              border: `1px solid ${isPlaying ? "rgba(239, 68, 68, 0.3)" : "rgba(34, 197, 94, 0.3)"}`,
              padding: "6px 10px",
              borderRadius: "6px",
              fontSize: "11px",
              cursor: "pointer",
            }}
          >
            {isPlaying ? <Pause size={12} /> : <Play size={12} />}
          </button>

          <button
            type="button"
            onClick={() => setActiveQuery("tracking")}
            style={{
              display: "inline-flex",
              alignItems: "center",
              background: "rgba(148, 163, 184, 0.1)",
              color: "#cbd5e1",
              border: "1px solid #334155",
              padding: "6px 10px",
              borderRadius: "6px",
              fontSize: "11px",
              cursor: "pointer",
            }}
            title="Reset"
          >
            <RotateCcw size={12} />
          </button>
        </div>
      </div>

      {/* 2. Main 2.5D RAG Architecture SVG */}
      <div
        style={{
          width: "100%",
          position: "relative",
          background: "#080d1a",
          borderRadius: "8px",
          overflow: "hidden",
          border: "1px solid rgba(168, 85, 247, 0.2)",
        }}
      >
        <svg
          viewBox="0 0 830 350"
          style={{ width: "100%", height: "auto", display: "block" }}
        >
          <defs>
            <linearGradient id="aiPipeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="50%" stopColor="#a855f7" />
              <stop offset="100%" stopColor="#4ade80" />
            </linearGradient>

            <filter id="ragGlow" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Grid lines */}
          <g stroke="rgba(51, 65, 85, 0.2)" strokeWidth="0.8">
            {Array.from({ length: 15 }).map((_, i) => (
              <line key={`rag-x-${i}`} x1={i * 60} y1="0" x2={i * 60} y2="350" />
            ))}
            {Array.from({ length: 7 }).map((_, i) => (
              <line key={`rag-y-${i}`} x1="0" y1={i * 50} x2="830" y2={i * 50} />
            ))}
          </g>

          {/* LAYER 1: USER PROMPT INPUT (X: 90, Y: 175) */}
          <g transform="translate(90, 175)">
            <ellipse cx="0" cy="8" rx="42" ry="20" fill="rgba(0, 0, 0, 0.5)" />
            <polygon points="0,0 -35,-16 -35,-32 0,-16" fill="#0284c7" stroke="#38bdf8" strokeWidth="1" />
            <polygon points="0,0 35,-16 35,-32 0,-16" fill="#0369a1" stroke="#38bdf8" strokeWidth="1" />
            <polygon points="0,-32 35,-48 0,-64 -35,-48" fill="#38bdf8" stroke="#ffffff" strokeWidth="1.5" />
            <text x="0" y="-38" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="9.5" fontWeight="900" fill="#0f172a">
              USER INGRESS
            </text>
            <text x="0" y="32" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="10.5" fontWeight="800" fill="#38bdf8">
              Câu Hỏi Người Dùng
            </text>
          </g>

          {/* LAYER 2: INTENT ROUTER (X: 250, Y: 175) */}
          <g transform="translate(250, 175)">
            <ellipse cx="0" cy="8" rx="38" ry="18" fill="rgba(0, 0, 0, 0.5)" />
            <polygon points="0,0 -32,-15 -32,-30 0,-15" fill="#6d28d9" stroke="#a855f7" strokeWidth="1" />
            <polygon points="0,0 32,-15 32,-30 0,-15" fill="#581c87" stroke="#a855f7" strokeWidth="1" />
            <polygon points="0,-30 32,-45 0,-60 -32,-45" fill="#a855f7" stroke="#ffffff" strokeWidth="1.5" filter="url(#ragGlow)" />
            <text x="0" y="-36" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="9" fontWeight="900" fill="#ffffff">
              INTENT ROUTER
            </text>
            <text x="0" y="30" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="10" fontWeight="800" fill="#c084fc">
              Phân Loại Ngữ Nghĩa
            </text>
          </g>

          {/* Connecting line User -> Router */}
          <line x1="130" y1="175" x2="210" y2="175" stroke="#38bdf8" strokeWidth="2.5" />

          {/* LAYER 3A: SQL REALTIME TOOL CALLING (X: 430, Y: 95) */}
          <g transform="translate(430, 95)">
            <ellipse cx="0" cy="8" rx="42" ry="20" fill="rgba(0, 0, 0, 0.5)" />
            <polygon points="0,0 -36,-16 -36,-32 0,-16" fill="#0f766e" stroke="#14b8a6" strokeWidth="1" />
            <polygon points="0,0 36,-16 36,-32 0,-16" fill="#115e59" stroke="#14b8a6" strokeWidth="1" />
            <polygon points="0,-32 36,-48 0,-64 -36,-48" fill="#14b8a6" stroke="#ffffff" strokeWidth="1.5" />
            <text x="0" y="-38" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="9" fontWeight="900" fill="#042f2e">
              SQL TOOL CALL
            </text>
            <text x="0" y="30" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="9.5" fontWeight="800" fill="#2dd4bf">
              PostgreSQL Replica
            </text>
          </g>

          {/* LAYER 3B: VECTOR RAG POLICIES (X: 430, Y: 255) */}
          <g transform="translate(430, 255)">
            <ellipse cx="0" cy="8" rx="42" ry="20" fill="rgba(0, 0, 0, 0.5)" />
            <polygon points="0,0 -36,-16 -36,-32 0,-16" fill="#c2410c" stroke="#f97316" strokeWidth="1" />
            <polygon points="0,0 36,-16 36,-32 0,-16" fill="#9a3412" stroke="#f97316" strokeWidth="1" />
            <polygon points="0,-32 36,-48 0,-64 -36,-48" fill="#f97316" stroke="#ffffff" strokeWidth="1.5" />
            <text x="0" y="-38" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="9" fontWeight="900" fill="#431407">
              VECTOR RAG
            </text>
            <text x="0" y="30" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="9.5" fontWeight="800" fill="#fb923c">
              PgVector / Qdrant
            </text>
          </g>

          {/* Branch Lines from Router to SQL Tool & Vector */}
          <line x1="285" y1="160" x2="390" y2="95" stroke="#14b8a6" strokeWidth={currentCase.intent === "REALTIME_SQL_TOOL" || currentCase.intent === "HYBRID_RECON_SEARCH" ? "3" : "1.2"} strokeDasharray={currentCase.intent === "VECTOR_RAG_SEARCH" ? "4 4" : "none"} />
          <line x1="285" y1="190" x2="390" y2="255" stroke="#f97316" strokeWidth={currentCase.intent === "VECTOR_RAG_SEARCH" || currentCase.intent === "HYBRID_RECON_SEARCH" ? "3" : "1.2"} strokeDasharray={currentCase.intent === "REALTIME_SQL_TOOL" ? "4 4" : "none"} />

          {/* LAYER 4: CONTEXT INJECTOR & GUARDRAILS (X: 610, Y: 175) */}
          <g transform="translate(610, 175)">
            <ellipse cx="0" cy="8" rx="40" ry="19" fill="rgba(0, 0, 0, 0.5)" />
            <polygon points="0,0 -34,-16 -34,-32 0,-16" fill="#15803d" stroke="#22c55e" strokeWidth="1" />
            <polygon points="0,0 34,-16 34,-32 0,-16" fill="#166534" stroke="#22c55e" strokeWidth="1" />
            <polygon points="0,-32 34,-48 0,-64 -34,-48" fill="#22c55e" stroke="#ffffff" strokeWidth="1.5" />
            <text x="0" y="-38" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="9" fontWeight="900" fill="#052e16">
              GUARDRAILS
            </text>
            <text x="0" y="30" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="10" fontWeight="800" fill="#4ade80">
              Gộp Context Thật
            </text>
          </g>

          {/* Connecting lines from Retrieval to Guardrails */}
          <line x1="470" y1="95" x2="575" y2="160" stroke="#14b8a6" strokeWidth="2.5" />
          <line x1="470" y1="255" x2="575" y2="190" stroke="#f97316" strokeWidth="2.5" />

          {/* LAYER 5: LLM SYNTHESIS & OUTPUT (X: 740, Y: 175) */}
          <g transform="translate(740, 175)">
            <ellipse cx="0" cy="8" rx="44" ry="21" fill="rgba(0, 0, 0, 0.5)" />
            <polygon points="0,0 -38,-17 -38,-34 0,-17" fill="#4338ca" stroke="#6366f1" strokeWidth="1" />
            <polygon points="0,0 38,-17 38,-34 0,-17" fill="#3730a3" stroke="#6366f1" strokeWidth="1" />
            <polygon points="0,-34 38,-51 0,-68 -38,-51" fill="#6366f1" stroke="#ffffff" strokeWidth="1.8" filter="url(#ragGlow)" />
            <text x="0" y="-40" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="9.5" fontWeight="900" fill="#ffffff">
              LLM SYNTHESIS
            </text>
            <text x="0" y="32" textAnchor="middle" fontFamily="var(--studio-font-mono)" fontSize="10" fontWeight="800" fill="#818cf8">
              Trả Lời Kèm Link
            </text>
          </g>

          <line x1="650" y1="175" x2="700" y2="175" stroke="#22c55e" strokeWidth="3" />

          {/* Animated Moving Query Token */}
          {isPlaying && (
            <g>
              <circle r="6" fill="#a855f7" filter="url(#ragGlow)">
                <animateMotion
                  path={
                    currentCase.intent === "REALTIME_SQL_TOOL"
                      ? "M 90 175 L 250 175 L 430 95 L 610 175 L 740 175"
                      : currentCase.intent === "VECTOR_RAG_SEARCH"
                      ? "M 90 175 L 250 175 L 430 255 L 610 175 L 740 175"
                      : "M 90 175 L 250 175 L 430 95 L 610 175 L 740 175"
                  }
                  dur="3s"
                  repeatCount="indefinite"
                />
              </circle>
            </g>
          )}
        </svg>
      </div>

      {/* 3. Deep Query Inspection & Answer Card */}
      <div
        style={{
          padding: "16px 18px",
          borderRadius: "8px",
          background: "rgba(15, 23, 42, 0.9)",
          border: "1.5px solid #8b5cf6",
          display: "flex",
          flexDirection: "column",
          gap: "12px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "8px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span
              style={{
                fontFamily: "var(--studio-font-mono)",
                fontSize: "11px",
                fontWeight: 850,
                color: "#c084fc",
                background: "rgba(168, 85, 247, 0.2)",
                padding: "3px 8px",
                borderRadius: "5px",
                border: "1px solid #8b5cf6",
              }}
            >
              QUERY INTENT: {currentCase.intent}
            </span>
            <span style={{ fontSize: "11px", fontFamily: "var(--studio-font-mono)", color: "#4ade80" }}>
              Độ trễ xử lý E2E: <strong>{currentCase.latencyMs}ms</strong>
            </span>
          </div>

          <code style={{ fontSize: "11px", color: "#38bdf8", fontFamily: "var(--studio-font-mono)" }}>
            {currentCase.toolOrCollection}
          </code>
        </div>

        {/* User Question Block */}
        <div style={{ background: "rgba(30, 41, 59, 0.6)", padding: "10px 14px", borderRadius: "6px", borderLeft: "4px solid #38bdf8" }}>
          <span style={{ fontSize: "10.5px", color: "#94a3b8", display: "block" }}>CÂU HỎI TỪ NGƯỜI DÙNG:</span>
          <strong style={{ fontSize: "13.5px", color: "#ffffff" }}>
            "{lang === "vi" ? currentCase.questionVi : currentCase.questionEn}"
          </strong>
        </div>

        {/* Retrieved Context Block */}
        <div style={{ background: "rgba(30, 41, 59, 0.6)", padding: "10px 14px", borderRadius: "6px", borderLeft: "4px solid #f59e0b" }}>
          <span style={{ fontSize: "10.5px", color: "#facc15", display: "block", fontWeight: 750 }}>NGỮ CẢNH TRUY XUẤT THỰC TẾ (GROUNDED CONTEXT):</span>
          <p style={{ margin: "4px 0 0 0", fontSize: "12px", color: "#e2e8f0", fontFamily: "var(--studio-font-mono)", lineHeight: 1.55 }}>
            {currentCase.contextRetrieved}
          </p>
        </div>

        {/* Generated Answer Block with Link */}
        <div style={{ background: "rgba(16, 185, 129, 0.1)", padding: "12px 14px", borderRadius: "6px", border: "1.5px solid #10b981" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "6px" }}>
            <Bot size={15} color="#4ade80" />
            <strong style={{ fontSize: "12px", color: "#4ade80" }}>
              AI ASSISTANT RESPONSE (ZERO HALLUCINATION):
            </strong>
          </div>
          <p style={{ margin: "0 0 8px 0", fontSize: "13px", color: "#f0fdf4", lineHeight: 1.6 }}>
            {lang === "vi" ? currentCase.generatedAnswerVi : currentCase.generatedAnswerEn}
          </p>
          {currentCase.trackingLink && (
            <div style={{ display: "flex", alignItems: "center", gap: "6px", borderTop: "1px dashed rgba(74, 222, 128, 0.3)", paddingTop: "8px" }}>
              <span style={{ fontSize: "11px", color: "#86efac" }}>Link xác thực thời gian thực:</span>
              <a
                href={currentCase.trackingLink}
                target="_blank"
                rel="noreferrer"
                style={{
                  fontSize: "11.5px",
                  fontWeight: 800,
                  color: "#38bdf8",
                  textDecoration: "underline",
                  fontFamily: "var(--studio-font-mono)",
                }}
              >
                tracking.nexus-ex.site ↗
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
