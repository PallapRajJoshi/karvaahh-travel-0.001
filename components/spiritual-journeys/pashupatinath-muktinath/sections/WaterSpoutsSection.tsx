import type { CSSProperties } from "react";
import { waterSpouts } from "../data/pashupatinathMuktinathData";
import { Icon } from "../ui/Icon";
import { JourneyImage } from "../ui/JourneyImage";
import "./muktinath.css";

/** 108 points on a semicircle, echoing how the spouts curve around the temple. */
const SPOUTS = Array.from({ length: 108 }, (_, i) => {
  const t = Math.PI + (i / 107) * Math.PI; // left → over the top → right
  return {
    x: +(200 + 170 * Math.cos(t)).toFixed(2),
    y: +(200 + 170 * Math.sin(t)).toFixed(2),
  };
});

export function WaterSpoutsSection() {
  return (
    <section className="pmy-section pmy-spouts" aria-labelledby="pmy-spouts-title">
      <div className="pmy-container pmy-spouts__grid">
        <div className="pmy-spouts__visual" data-reveal>
          <svg className="pmy-spouts__arc" viewBox="0 0 400 230" aria-hidden="true">
            {SPOUTS.map((p, i) => (
              <circle
                key={i}
                cx={p.x}
                cy={p.y}
                r={3.2}
                style={{ "--i": i } as CSSProperties}
              />
            ))}
          </svg>
          <span className="pmy-spouts__temple" aria-hidden="true">
            <Icon name="shrine" size={40} />
          </span>
          <p className="pmy-spouts__count">
            <span>108</span> spouts in a semicircle around the shrine
          </p>
        </div>

        <div>
          <h2 id="pmy-spouts-title" className="pmy-heading__title pmy-heading__title--h2" data-reveal>
            {waterSpouts.heading}
          </h2>
          <div className="pmy-prose pmy-spouts__prose" data-reveal>
            {waterSpouts.paragraphs.map((p) => <p key={p.slice(0, 32)}>{p}</p>)}
          </div>
          <div className="pmy-spouts__care" data-reveal>
            <h3 className="pmy-spouts__care-title">Before you step under the spouts</h3>
            <ul className="pmy-ticklist">
              {waterSpouts.care.map((c) => <li key={c}>{c}</li>)}
            </ul>
          </div>
        </div>
      </div>

      <div className="pmy-container">
        <div className="pmy-spouts__photo" data-reveal>
          <JourneyImage image={waterSpouts.image} sizes="(max-width: 1200px) 100vw, 1200px" />
        </div>
      </div>
    </section>
  );
}
