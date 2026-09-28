import { introTrail } from "@/data/campingContent";
import { IconTent } from "../shared/Icons";
import "./CampingIntro.css";

// Gentle wave through ten evenly spaced stops (viewBox 1000 × 80).
const pts = introTrail.map((_, i) => [50 + i * 100, i % 2 ? 54 : 26] as const);
const trailPath = pts.reduce((d, [x, y], i) => {
  if (i === 0) return `M${x},${y}`;
  const [px, py] = pts[i - 1];
  const cx = (px + x) / 2;
  return `${d} C${cx},${py} ${cx},${y} ${x},${y}`;
}, "");

export default function CampingIntro() {
  return (
    <section id="intro" className="cmp-section cmp-section--snow cmp-intro" aria-labelledby="cmp-intro-title">
      <div className="cmp-container">
        <div className="cmp-intro__grid">
          <h2 id="cmp-intro-title" className="cmp-intro__title" data-reveal>
            One Country. Endless Places to Camp.
          </h2>
          <div className="cmp-intro__copy" data-reveal style={{ ["--d" as string]: "120ms" }}>
            <p>
              Nepal is more than trekking and mountain expeditions. From peaceful weekend
              escapes around Kathmandu and Pokhara to high-altitude Himalayan camps, Nepal
              offers camping experiences for every kind of traveler.
            </p>
            <p className="cmp-intro__aside">
              <IconTent size={18} /> This guide moves roughly west to east and low to high —
              start close to the city, finish in the far corners of the country.
            </p>
          </div>
        </div>
      </div>

      <div className="cmp-intro__trail-scroll">
        <div className="cmp-intro__trail" data-draw>
          <svg className="cmp-intro__svg" viewBox="0 0 1000 80" preserveAspectRatio="none" aria-hidden="true">
            <path d={trailPath} className="cmp-intro__base cmp-draw" style={{ ["--len" as string]: 1300 }} pathLength={1300} />
            <path d={trailPath} className="cmp-intro__flow" pathLength={1300} />
          </svg>
          <ol className="cmp-intro__stops" aria-label="A route across Nepal's camping regions">
            {introTrail.map((stop, i) => (
              <li key={stop} className={`cmp-intro__stop ${i % 2 ? "is-low" : "is-high"}`} style={{ ["--i" as string]: i }}>
                <span className="cmp-intro__dot" aria-hidden="true" />
                <span className="cmp-intro__name">{stop}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
