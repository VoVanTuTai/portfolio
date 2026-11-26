import { memo } from "react";

export const StudioTechBackground = memo(function StudioTechBackground() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 0,
        overflow: "hidden",
      }}
    >
      {/* 1. Precision Blueprint Dot-Grid & Fine Circuit Lines */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            radial-gradient(rgba(37, 99, 235, 0.09) 1.2px, transparent 1.2px),
            linear-gradient(to right, rgba(37, 99, 235, 0.025) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(37, 99, 235, 0.025) 1px, transparent 1px)
          `,
          backgroundSize: "28px 28px, 112px 112px, 112px 112px",
          backgroundPosition: "0 0, 0 0, 0 0",
          opacity: 0.85,
        }}
      />

      {/* 2. Floating Cyber Ambient Gradient Orbs (Smooth Breathing Animation) */}
      <div
        className="tech-ambient-orb-1"
        style={{
          position: "absolute",
          top: "5%",
          left: "12%",
          width: "550px",
          height: "550px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(37, 99, 235, 0.075) 0%, rgba(37, 99, 235, 0.015) 50%, transparent 70%)",
          filter: "blur(40px)",
          willChange: "transform, opacity",
          animation: "techOrbFloat1 18s ease-in-out infinite alternate",
        }}
      />

      <div
        className="tech-ambient-orb-2"
        style={{
          position: "absolute",
          bottom: "10%",
          right: "8%",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(2, 132, 199, 0.07) 0%, rgba(6, 182, 212, 0.02) 50%, transparent 70%)",
          filter: "blur(45px)",
          willChange: "transform, opacity",
          animation: "techOrbFloat2 22s ease-in-out infinite alternate",
        }}
      />

      {/* 3. Subtle Animated Digital Scanning Light Beam */}
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          height: "140px",
          background: "linear-gradient(180deg, transparent 0%, rgba(37, 99, 235, 0.035) 50%, rgba(2, 132, 199, 0.01) 90%, transparent 100%)",
          willChange: "transform",
          animation: "techScannerSweep 14s ease-in-out infinite",
          pointerEvents: "none",
        }}
      />

      {/* 4. Tech Corner Circuit Coordinate Watermarks */}
      <div
        style={{
          position: "absolute",
          top: "72px",
          right: "24px",
          display: "flex",
          alignItems: "center",
          gap: "8px",
          opacity: 0.45,
          fontFamily: "var(--font-mono, monospace)",
          fontSize: "9px",
          fontWeight: 700,
          color: "#2563eb",
          letterSpacing: "0.08em",
        }}
      >
        <span
          style={{
            width: "5px",
            height: "5px",
            borderRadius: "50%",
            background: "#2563eb",
            display: "inline-block",
            animation: "techBeaconPulse 2.4s ease-in-out infinite",
          }}
        />
        <span>SYS.TELEMETRY · ONLINE 99.9%</span>
      </div>

      {/* Inline Embedded Keyframes for 60fps Smooth Animation */}
      <style>{`
        @keyframes techOrbFloat1 {
          0% {
            transform: translate3d(0, 0, 0) scale(1);
            opacity: 0.7;
          }
          50% {
            transform: translate3d(60px, 40px, 0) scale(1.1);
            opacity: 0.95;
          }
          100% {
            transform: translate3d(-30px, 80px, 0) scale(0.95);
            opacity: 0.7;
          }
        }

        @keyframes techOrbFloat2 {
          0% {
            transform: translate3d(0, 0, 0) scale(1);
            opacity: 0.65;
          }
          50% {
            transform: translate3d(-50px, -50px, 0) scale(1.08);
            opacity: 0.9;
          }
          100% {
            transform: translate3d(40px, -30px, 0) scale(0.92);
            opacity: 0.65;
          }
        }

        @keyframes techScannerSweep {
          0% {
            top: -150px;
            opacity: 0;
          }
          15% {
            opacity: 0.8;
          }
          85% {
            opacity: 0.8;
          }
          100% {
            top: 100vh;
            opacity: 0;
          }
        }

        @keyframes techBeaconPulse {
          0%, 100% {
            transform: scale(1);
            opacity: 0.6;
            box-shadow: 0 0 0 0 rgba(37, 99, 235, 0.4);
          }
          50% {
            transform: scale(1.3);
            opacity: 1;
            box-shadow: 0 0 8px 3px rgba(37, 99, 235, 0.35);
          }
        }
      `}</style>
    </div>
  );
});
