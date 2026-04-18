import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "ANVIL — Academic Paper Quality Scorer";
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
              background: "linear-gradient(135deg, #f59e0b, #b45309)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "32px",
              fontWeight: 900,
              color: "white",
            }}
          >
            A
          </div>
          <span
            style={{
              fontSize: "48px",
              fontWeight: 900,
              color: "white",
              letterSpacing: "-1px",
            }}
          >
            ANVIL
          </span>
        </div>

        <h1
          style={{
            fontSize: "52px",
            fontWeight: 900,
            color: "white",
            textAlign: "center",
            lineHeight: 1.1,
            margin: "0 0 16px 0",
            maxWidth: "900px",
          }}
        >
          Academic Paper{" "}
          <span style={{ color: "#f59e0b" }}>Quality Scorer</span>
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
          Citation integrity. Theoretical depth. SMILE alignment.
          Catch what reviewers flag — before submission.
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
          <span>anvil.winniio.io</span>
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
