import { ImageResponse } from "next/og";

export const alt = "Juan Diego Meza — Full Stack Developer";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background:
            "radial-gradient(ellipse at 20% 20%, rgba(56,189,248,0.16), transparent 55%), radial-gradient(ellipse at 80% 85%, rgba(139,92,246,0.2), transparent 55%), #0a0a0a",
          color: "#fafafa",
          fontFamily: "Inter, system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            width: 88,
            height: 88,
            borderRadius: 22,
            alignItems: "center",
            justifyContent: "center",
            background:
              "linear-gradient(135deg, #38bdf8 0%, #6366f1 55%, #8b5cf6 100%)",
            fontSize: 40,
            fontWeight: 700,
            color: "#ffffff",
          }}
        >
          JD
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 68,
            fontWeight: 700,
            letterSpacing: "-0.02em",
            marginTop: 30,
          }}
        >
          Juan Diego Meza
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 34,
            marginTop: 10,
            color: "#a1a1aa",
          }}
        >
          Full Stack Developer · Cali, Colombia
        </div>
      </div>
    ),
    { ...size }
  );
}
