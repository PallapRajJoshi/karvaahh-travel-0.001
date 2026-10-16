import { ImageResponse } from "next/og";

/**
 * Default branded social-share image, generated at build time.
 * Used as og:image / twitter:image for every page that does not provide its own.
 * Pages override it with their own opengraph-image file or `openGraph.images`.
 */

export const alt = "Karvaahh Tours & Travels — Nepal & India tour packages";
export const size = { width: 1200, height: 630 };
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
          justifyContent: "space-between",
          padding: "64px 72px",
          color: "#ffffff",
          background: "linear-gradient(160deg, #0B1B2B 0%, #123B5D 55%, #2E6FA3 100%)",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 26, letterSpacing: 6, textTransform: "uppercase", color: "#C9A45C" }}>
            Karvaahh – Live to Travel
          </div>
          <div style={{ display: "flex", marginTop: 28, fontSize: 82, lineHeight: 1.05, fontWeight: 700, maxWidth: 940 }}>
            Nepal &amp; India Tour Packages
          </div>
          <div style={{ display: "flex", marginTop: 26, fontSize: 34, color: "#CFE3F1", maxWidth: 900 }}>
            Himalayan adventures, pilgrimage tours, trekking, cultural journeys and customized holidays.
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <div style={{ display: "flex", fontSize: 38, fontWeight: 600 }}>Karvaahh Tours &amp; Travels</div>
          <div style={{ display: "flex", fontSize: 30, color: "#C9A45C" }}>karvaahh.in</div>
        </div>
        <svg
          width="1200"
          height="260"
          viewBox="0 0 1200 260"
          style={{ position: "absolute", left: 0, bottom: 0, opacity: 0.22 }}
        >
          <path d="M0 260V150l120-70 90 50 130-100 110 80 120-60 100 70 130-110 120 90 110-40 170 70V260Z" fill="#ffffff" />
        </svg>
      </div>
    ),
    size,
  );
}
