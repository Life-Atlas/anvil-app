import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "CRUCIBLE — Horizon Europe Proposal Analyzer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "linear-gradient(135deg, #0a0f1e 0%, #111827 50%, #0a0f1e 100%)",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "32px",
          }}
        >
          <div
            style={{
              width: "64px",
              height: "64px",
              borderRadius: "16px",
              background: "linear-gradient(135deg, #3b82f6, #1d4ed8)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "32px",
              fontWeight: 900,
              color: "white",
            }}
          >
            C
          </div>
          <span
            style={{
              fontSize: "48px",
              fontWeight: 900,
              color: "white",
              letterSpacing: "-1px",
            }}
          >
            CRUCIBLE
          </span>
        </div>

        <h1
          style={{
            fontSize: "56px",
            fontWeight: 900,
            color: "white",
            textAlign: "center",
            lineHeight: 1.1,
            margin: "0 0 16px 0",
            maxWidth: "900px",
          }}
        >
          Horizon Europe{" "}
          <span style={{ color: "#60a5fa" }}>Proposal Analyzer</span>
        </h1>

        <p
          style={{
            fontSize: "24px",
            color: "#94a3b8",
            textAlign: "center",
            margin: "0 0 40px 0",
            maxWidth: "700px",
          }}
        >
          48+ anti-pattern detectors. 7-layer analysis. SMILE methodology radar.
          Score your proposal before evaluators do.
        </p>

        <div
          style={{
            display: "flex",
            gap: "32px",
            fontSize: "18px",
            color: "#64748b",
          }}
        >
          <span>Free tier available</span>
          <span style={{ color: "#334155" }}>|</span>
          <span>Results in 60 seconds</span>
          <span style={{ color: "#334155" }}>|</span>
          <span>crucible.winniio.io</span>
        </div>

        <div
          style={{
            position: "absolute",
            bottom: "24px",
            right: "32px",
            fontSize: "14px",
            color: "#475569",
          }}
        >
          by WINNIIO AB · Gothenburg, Sweden
        </div>
      </div>
    ),
    { ...size }
  );
}
