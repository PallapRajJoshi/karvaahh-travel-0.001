import { CONTENT_STATUS, ITINERARY, ITINERARY_NOTE } from "@/data/destinations/tsum-valley/content";
import SectionHeading from "./shared/SectionHeading";
import Reveal from "./shared/Reveal";
import { Info } from "./shared/Icons";
import ItineraryAccordion from "./TsumValleyItineraryAccordion";
import "./TsumValleyItinerary.css";

/* ---- Elevation profile (server-rendered SVG, zero JS) -------------------- */

const W = 1000;
const H = 220;
const PAD = { top: 36, right: 24, bottom: 34, left: 24 };
const MIN_E = 500;
const MAX_E = 4000;

function ElevationProfile() {
  const pts = ITINERARY.filter((d) => typeof d.elevationM === "number").map((d) => {
    const x = PAD.left + ((d.day - 1) / (ITINERARY.length - 1)) * (W - PAD.left - PAD.right);
    const y = PAD.top + (1 - ((d.elevationM as number) - MIN_E) / (MAX_E - MIN_E)) * (H - PAD.top - PAD.bottom);
    return { ...d, x, y };
  });
  if (pts.length < 2) return null;

  const line = pts.map((p, i) => `${i ? "L" : "M"}${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(" ");
  const area = `${line} L${pts[pts.length - 1].x.toFixed(1)},${H - PAD.bottom} L${pts[0].x.toFixed(1)},${H - PAD.bottom} Z`;
  const peak = pts.reduce((a, b) => ((b.elevationM ?? 0) > (a.elevationM ?? 0) ? b : a));
  const labelled = new Set([2, 4, 6, peak.day]);

  const summary = `Elevation profile: starts around ${pts[0].elevationM} m, climbs to about ${peak.elevationM} m at ${peak.to} on day ${peak.day}, then returns to Kathmandu.`;

  return (
    <figure className="tsum-itin__profile">
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={summary} preserveAspectRatio="none" className="tsum-itin__profile-svg">
        <defs>
          <linearGradient id="tsum-elev-fill" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#2A7F82" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#2A7F82" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[1000, 2000, 3000].map((e) => {
          const y = PAD.top + (1 - (e - MIN_E) / (MAX_E - MIN_E)) * (H - PAD.top - PAD.bottom);
          return <line key={e} x1={PAD.left} x2={W - PAD.right} y1={y} y2={y} className="tsum-itin__grid" />;
        })}
        <path d={area} fill="url(#tsum-elev-fill)" />
        <path d={line} className="tsum-itin__line" vectorEffect="non-scaling-stroke" />
      </svg>
      {/* HTML overlay keeps text crisp while the SVG stretches responsively */}
      <div className="tsum-itin__profile-overlay" aria-hidden="true">
        {[1000, 2000, 3000].map((e) => (
          <span key={e} className="tsum-itin__axis" style={{ top: `${((PAD.top + (1 - (e - MIN_E) / (MAX_E - MIN_E)) * (H - PAD.top - PAD.bottom)) / H) * 100}%` }}>
            {e.toLocaleString("en-IN")} m
          </span>
        ))}
        {pts.map((p) => (
          <span
            key={p.day}
            className={`tsum-itin__dot${p.day === peak.day ? " is-peak" : ""}`}
            style={{ left: `${(p.x / W) * 100}%`, top: `${(p.y / H) * 100}%` }}
          >
            {labelled.has(p.day) && (
              <span className="tsum-itin__dot-label">
                {p.to.replace(" & back", "")} · {p.elevationM?.toLocaleString("en-IN")} m
              </span>
            )}
          </span>
        ))}
        {ITINERARY.map((d) => (
          <span key={d.day} className="tsum-itin__day-tick" style={{ left: `${((PAD.left + ((d.day - 1) / (ITINERARY.length - 1)) * (W - PAD.left - PAD.right)) / W) * 100}%` }}>
            {d.day}
          </span>
        ))}
      </div>
      <figcaption className="tsum-itin__profile-cap">
        Overnight / high-point elevation by day{!CONTENT_STATUS.figuresVerified && " — approximate, confirmed at booking"}
      </figcaption>
    </figure>
  );
}

export default function TsumValleyItinerary() {
  return (
    <section className="tsum-section tsum-section--tint tsum-itin" id="itinerary" aria-labelledby="tsum-itin-title">
      <div className="tsum-container">
        <SectionHeading
          id="tsum-itin-title"
          eyebrow="Sample route"
          title="Your Journey Through the Hidden Valley"
          intro="From the Budhi Gandaki gorge into lower Tsum, up to the monasteries near the Tibetan border, and back."
        />
        <Reveal>
          <ElevationProfile />
        </Reveal>
        <p className="tsum-itin__note" role="note">
          <Info aria-hidden="true" />
          <span>{ITINERARY_NOTE}</span>
        </p>
        <ItineraryAccordion days={ITINERARY} showApprox={!CONTENT_STATUS.figuresVerified} />
      </div>
    </section>
  );
}
