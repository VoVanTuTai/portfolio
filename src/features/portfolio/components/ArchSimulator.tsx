import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import type { Language } from "@/types";
import { archSteps } from "@/data/architecture-steps";
import styles from "./HeroSection.module.css";

interface ArchSimulatorProps {
  lang: Language;
}

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
