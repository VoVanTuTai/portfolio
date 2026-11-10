import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import type { Language } from "@/types";
import { archSteps } from "@/data/architecture-steps";

interface ArchSimulatorProps {
  lang: Language;
}

export function ArchSimulator({ lang }: ArchSimulatorProps) {
  const [activeArchStep, setActiveArchStep] = useState(0);

  return (
    <div className="architecture-interactive-frame">
      <div className="browser-bar">
        <span />
        <span />
        <span />
        <div className="browser-url-pill">
          <span className="url-protocol">https://</span>
          <span className="url-domain">tracking.nexus-ex.site</span>
          <span className="url-path">/architecture</span>
        </div>
        <div className="dossier-verified-badge">
          <span className="live-status-dot" />
          <span>ONLINE · 99.9%</span>
        </div>
      </div>

      <div className="arch-interactive-body">
        {/* Simulator Header */}
        <div className="arch-hero-banner">
          <div className="arch-banner-left">
            <span className="arch-sub-tag">ENTERPRISE SYSTEM ARCHITECTURE</span>
            <h3>Nexus Express — Logistics OMS &amp; Tracking</h3>
            <p>
              {lang === "vi"
                ? "Mô hình xử lý trạng thái đơn hàng & luồng dữ liệu thời gian thực"
                : "Stateful parcel workflow & real-time telemetry model"}
            </p>
          </div>
          <div className="arch-live-chip">
            <span className="pulse-dot" />
            <span>SLA &lt; 180ms</span>
          </div>
        </div>

        {/* 4 Clickable Interactive Stages */}
        <div className="arch-pipeline-interactive">
          <div className="arch-nodes-row">
            {archSteps.map((step, idx) => (
              <button
                key={step.id}
                type="button"
                className={`arch-node-btn${activeArchStep === idx ? " is-active" : ""}`}
                onClick={() => setActiveArchStep(idx)}
              >
                <span className="node-step-badge">{String(idx + 1).padStart(2, "0")}</span>
                <strong className="node-title">{step.title}</strong>
                <span className="node-sub">{step.tech}</span>
              </button>
            ))}
          </div>

          {/* Inspected Step Active Card */}
          <div className="arch-inspect-card">
            <div className="inspect-head">
              <div className="inspect-title-group">
                <span className="inspect-pill">GIAI ĐOẠN {activeArchStep + 1} / 4</span>
                <h4>{archSteps[activeArchStep].name}</h4>
              </div>
              <span className="inspect-status-badge">{archSteps[activeArchStep].metric}</span>
            </div>
            <p className="inspect-desc">{archSteps[activeArchStep].desc[lang]}</p>
            <div className="inspect-tags">
              {archSteps[activeArchStep].tags.map((tg) => (
                <span key={tg}>{tg}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Action Buttons inside frame */}
        <div className="arch-footer-actions">
          <a
            href="https://tracking.nexus-ex.site/"
            target="_blank"
            rel="noreferrer"
            className="arch-btn-live"
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
            href="https://github.com/VoVanTuTai/logistics-management-system"
            target="_blank"
            rel="noreferrer"
            className="arch-btn-code"
          >
            <Github size={14} />
            <span>Mã nguồn</span>
          </a>
        </div>
      </div>
    </div>
  );
}
