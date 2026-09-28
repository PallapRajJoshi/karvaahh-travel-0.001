import { overview } from "@/data/adventure/langtang-valley-trek";
import LangtangImage from "./LangtangImage";
import "./LangtangOverview.css";

export default function LangtangOverview() {
  return (
    <section className="lt-section lt-overview" id="overview" aria-labelledby="lt-overview-title">
      <div className="lt-container lt-overview__grid">
        <div className="lt-overview__copy" data-reveal>
          <p className="lt-heading__eyebrow">{overview.label}</p>
          <h2 className="lt-heading__title" id="lt-overview-title">{overview.heading}</h2>
          <p className="lt-overview__text">{overview.text}</p>
          <dl className="lt-overview__facts">
            {overview.facts.map((f) => (
              <div key={f.label}>
                <dt>{f.label}</dt>
                <dd>{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>
        <figure className="lt-overview__figure" data-reveal style={{ ["--i" as string]: 1 }}>
          <div className="lt-overview__frame">
            <LangtangImage id={overview.image} sizes="(max-width: 900px) 100vw, 45vw" />
          </div>
          <svg className="lt-overview__contour" viewBox="0 0 200 200" aria-hidden="true">
            {[20, 36, 52, 68, 84].map((r) => (
              <path key={r} d={`M${100 - r} 100 C ${100 - r} ${100 - r * 0.9}, ${100 + r * 0.8} ${100 - r}, ${100 + r} 100 S ${100 - r * 0.6} ${100 + r * 1.05}, ${100 - r} 100`} />
            ))}
          </svg>
        </figure>
      </div>
    </section>
  );
}
