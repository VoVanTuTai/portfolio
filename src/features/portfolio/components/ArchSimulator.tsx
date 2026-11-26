import { useState } from "react";
import { ExternalLink, Github, Sparkles } from "lucide-react";
import type { Language } from "@/types";
import { archSteps } from "@/data/architecture-steps";
import styles from "./HeroSection.module.css";

interface ArchSimulatorProps {
  lang: Language;
}

const isometricNodes = [
  { id: 0, label: "API Gateway", sub: "NestJS Ingest", cx: 75, cy: 72 },
  { id: 1, label: "BPMN Engine", sub: "Camunda 2.0", cx: 200, cy: 42 },
  { id: 2, label: "Relational 3NF", sub: "Postgres ACID", cx: 330, cy: 110 },
  { id: 3, label: "Leaflet Map", sub: "Live Client", cx: 460, cy: 62 },
];

export function ArchSimulator({ lang }: ArchSimulatorProps) {
  const [activeArchStep, setActiveArchStep] = useState(0);

  return (
    <div className={styles.architectureInteractiveFrame}>
      <div className={styles.browserBar}>
        <span />
        <span />
        <span />
        <div className={styles.browserUrlPill}>
          <span className={styles.urlProtocol}>https://</span>
          <span className={styles.urlDomain}>tracking.nexus-ex.site</span>
          <span className={styles.urlPath}>/architecture</span>
        </div>
        <div className={styles.dossierVerifiedBadge}>
          <span className="live-status-dot" />
          <span>ONLINE · 99.9%</span>
        </div>
      </div>

      <div className={styles.archInteractiveBody}>
        {/* Simulator Header */}
        <div className={styles.archHeroBanner}>
          <div className={styles.archBannerLeft}>
            <span className={styles.archSubTag}>ENTERPRISE SYSTEM ARCHITECTURE</span>
            <h3>Nexus Express — Logistics OMS &amp; Tracking</h3>
            <p>
              {lang === "vi"
                ? "Mô hình xử lý trạng thái đơn hàng & luồng dữ liệu thời gian thực"
                : "Stateful parcel workflow & real-time telemetry model"}
            </p>
          </div>
          <div className={styles.archLiveChip}>
            <span className="pulse-dot" />
            <span>SLA &lt; 180ms</span>
          </div>
        </div>

        {/* 2.5D Isometric Architecture Canvas */}
        <div
          style={{
            margin: "0 0 14px",
            padding: "8px 4px",
            background: "linear-gradient(180deg, #f8fbff 0%, #f0f7ff 100%)",
            borderRadius: "10px",
            border: "1.5px solid #dbeafe",
            boxShadow: "inset 0 1px 3px rgba(37, 99, 235, 0.05)",
          }}
        >
          <svg
            viewBox="0 0 530 155"
            style={{ width: "100%", height: "auto", display: "block" }}
            aria-label="2.5D Isometric Enterprise Architecture Diagram"
          >
            {/* Background Isometric Grid lines */}
            <g opacity="0.4" stroke="#bfdbfe" strokeWidth="0.8" strokeDasharray="3 3">
              <line x1="10" y1="75" x2="520" y2="75" />
              <line x1="72" y1="15" x2="72" y2="140" />
              <line x1="198" y1="15" x2="198" y2="140" />
              <line x1="330" y1="15" x2="330" y2="140" />
              <line x1="458" y1="15" x2="458" y2="140" />
            </g>

            {/* Connecting Isometric Pipeline Links */}
            <path
              d="M 72 75 L 198 45 L 330 105 L 458 65"
              fill="none"
              stroke="#93c5fd"
              strokeWidth="2"
              strokeDasharray="4 3"
            />
            <path
              d="M 72 75 L 330 105"
              fill="none"
              stroke="#bfdbfe"
              strokeWidth="1.2"
              strokeDasharray="2 4"
            />

            {/* Animated Traffic Packet traveling through the pipeline */}
            <circle r="4.5" fill="#2563eb">
              <animateMotion
                path="M 72 75 L 198 45 L 330 105 L 458 65"
                dur="3.2s"
                repeatCount="indefinite"
              />
            </circle>

            {/* Render 4 Isometric 2.5D Extruded Blocks */}
            {isometricNodes.map((node) => {
              const isCurrent = activeArchStep === node.id;
              const { cx, cy, label, sub } = node;
              const rx = 50;
              const ry = 22;
              const h = 15;

              const topPoints = `${cx},${cy - ry} ${cx + rx},${cy} ${cx},${cy + ry} ${cx - rx},${cy}`;
              const leftPoints = `${cx - rx},${cy} ${cx},${cy + ry} ${cx},${cy + ry + h} ${cx - rx},${cy + h}`;
              const rightPoints = `${cx},${cy + ry} ${cx + rx},${cy} ${cx + rx},${cy + h} ${cx},${cy + ry + h}`;

              const topFill = isCurrent ? "#eff6ff" : "#ffffff";
              const leftFill = isCurrent ? "#bfdbfe" : "#f1f5f9";
              const rightFill = isCurrent ? "#93c5fd" : "#e2e8f0";
              const strokeColor = isCurrent ? "#2563eb" : "#cbd5e1";
              const strokeWidth = isCurrent ? 2 : 1.2;

              return (
                <g
                  key={node.id}
                  onClick={() => setActiveArchStep(node.id)}
                  style={{ cursor: "pointer" }}
                >
                  <ellipse
                    cx={cx}
                    cy={cy + ry + h + 3}
                    rx={rx * 0.85}
                    ry={ry * 0.45}
                    fill={isCurrent ? "rgba(37, 99, 235, 0.22)" : "rgba(15, 23, 42, 0.06)"}
                  />
                  <polygon
                    points={leftPoints}
                    fill={leftFill}
                    stroke={strokeColor}
                    strokeWidth={strokeWidth}
                  />
                  <polygon
                    points={rightPoints}
                    fill={rightFill}
                    stroke={strokeColor}
                    strokeWidth={strokeWidth}
                  />
                  <polygon
                    points={topPoints}
                    fill={topFill}
                    stroke={strokeColor}
                    strokeWidth={strokeWidth}
                  />
                  {isCurrent && (
                    <circle cx={cx} cy={cy - ry + 4} r="3.5" fill="#2563eb">
                      <animate attributeName="r" values="2.5;5;2.5" dur="1.8s" repeatCount="indefinite" />
                      <animate
                        attributeName="opacity"
                        values="1;0.4;1"
                        dur="1.8s"
                        repeatCount="indefinite"
                      />
                    </circle>
                  )}
                  <text
                    x={cx}
                    y={cy - 2}
                    textAnchor="middle"
                    fontSize="10"
                    fontWeight="850"
                    fontFamily="var(--font-mono, monospace)"
                    fill={isCurrent ? "#1e3a8a" : "#0f172a"}
                  >
                    {label}
                  </text>
                  <text
                    x={cx}
                    y={cy + 10}
                    textAnchor="middle"
                    fontSize="8.5"
                    fontWeight="750"
                    fontFamily="var(--font-mono, monospace)"
                    fill={isCurrent ? "#2563eb" : "#475569"}
                  >
                    {sub}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        {/* 4 Clickable Interactive Stages */}
        <div>
          <div className={styles.archNodesRow}>
            {archSteps.map((step, idx) => (
              <button
                key={step.id}
                type="button"
                className={`${styles.archNodeBtn}${activeArchStep === idx ? ` ${styles.isActive}` : ""}`}
                onClick={() => setActiveArchStep(idx)}
              >
                <span className={styles.nodeStepBadge}>{String(idx + 1).padStart(2, "0")}</span>
                <strong className={styles.nodeTitle}>{step.title}</strong>
                <span className={styles.nodeSub}>{step.tech}</span>
              </button>
            ))}
          </div>

          {/* Inspected Step Active Card */}
          <div className={styles.archInspectCard}>
            <div className={styles.inspectHead}>
              <div>
                <span className={styles.inspectPill}>GIAI ĐOẠN {activeArchStep + 1} / 4</span>
                <h4>{archSteps[activeArchStep].name}</h4>
              </div>
              <span className={styles.inspectStatusBadge}>{archSteps[activeArchStep].metric}</span>
            </div>
            <p className={styles.inspectDesc}>{archSteps[activeArchStep].desc[lang]}</p>
            <div className={styles.inspectTags}>
              {archSteps[activeArchStep].tags.map((tg) => (
                <span key={tg}>{tg}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Action Buttons inside frame */}
        <div className={styles.archFooterActions}>
          <a
            href="https://tracking.nexus-ex.site/"
            target="_blank"
            rel="noreferrer"
            className={styles.archBtnLive}
            title="Open Nexus Express Live Tracking"
          >
            <ExternalLink size={14} />
            <span>
              {lang === "vi"
                ? "Xem Live Tracking Demo (tracking.nexus-ex.site) ↗"
                : "Open Live Tracking Demo ↗"}
            </span>
          </a>
          <a
            href="/studio"
            className={styles.archBtnCode}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "5px",
              color: "#2563eb",
              borderColor: "#93c5fd",
              background: "#eff6ff",
            }}
            title="Mở trong Studio 3 Cột"
          >
            <Sparkles size={13} />
            <span>Studio 3 Cột ↗</span>
          </a>
          <a
            href="https://github.com/VoVanTuTai/logistics-management-system"
            target="_blank"
            rel="noreferrer"
            className={styles.archBtnCode}
          >
            <Github size={14} />
            <span>Mã nguồn</span>
          </a>
        </div>
      </div>
    </div>
  );
}
