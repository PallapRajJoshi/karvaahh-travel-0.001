import { ImageResponse } from "next/og";

/**
 * Generated Open Graph / social image — guarantees a working og:image even
 * before photography is supplied. Statically rendered at build time.
 * Replace with a photographic image later by adding opengraph-image.jpg here.
 */
export const alt = "Bada Char Dham Yatra — Badrinath, Dwarka, Jagannath Puri and Rameswaram";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const POINTS = [
  { d: "N", name: "Badrinath", x: 890, y: 92 },
  { d: "W", name: "Dwarka", x: 700, y: 300 },
  { d: "E", name: "Jagannath Puri", x: 1080, y: 300 },
  { d: "S", name: "Rameswaram", x: 890, y: 508 },
];

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          background: "linear-gradient(135deg, #0b1b2b 0%, #132a40 60%, #1d3a55 100%)",
          color: "#f7f3ea",
          fontFamily: "serif",
        }}
      >
        <div style={{ position: "absolute", left: 710, top: 110, width: 360, height: 380, borderRadius: 9999, border: "2px solid rgba(217,191,134,0.35)", display: "flex" }} />
        {POINTS.map((p) => (
          <div
            key={p.d}
            style={{
              position: "absolute",
              left: p.x - 90,
              top: p.y - 20,
              width: 180,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div style={{ width: 18, height: 18, borderRadius: 9999, background: "#d9bf86", display: "flex" }} />
            <div style={{ marginTop: 8, fontSize: 18, letterSpacing: 4, color: "#d9bf86", display: "flex" }}>{p.d}</div>
            <div style={{ fontSize: 26, display: "flex" }}>{p.name}</div>
          </div>
        ))}
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 0 0 80px", width: 620 }}>
          <div style={{ fontSize: 22, letterSpacing: 6, color: "#d9bf86", display: "flex" }}>KARVAAHH · SPIRITUAL JOURNEYS</div>
          <div style={{ fontSize: 82, lineHeight: 1, marginTop: 24, display: "flex" }}>Bada Char Dham Yatra</div>
          <div style={{ fontSize: 30, marginTop: 28, color: "rgba(247,243,234,0.8)", display: "flex" }}>
            A sacred journey across the four directions of India
          </div>
        </div>
      </div>
    ),
    size,
  );
}
