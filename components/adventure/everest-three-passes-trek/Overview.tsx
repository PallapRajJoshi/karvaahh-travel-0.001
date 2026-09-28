import Media from "./Media";
import { overview } from "@/data/adventure/everest-three-passes-trek/content";
import "./Overview.css";

export default function Overview() {
  return (
    <section className="etp-section etp-overview" id="overview" aria-labelledby="etp-overview-title">
      <div className="etp-wrap etp-overview__grid">
        <div className="etp-overview__text" data-reveal>
          <p className="etp-heading__eyebrow">{overview.label}</p>
          <h2 className="etp-heading__title" id="etp-overview-title">
            {overview.heading}
          </h2>
          <p className="etp-overview__para">{overview.paragraph}</p>
        </div>

        <div className="etp-overview__aside" data-reveal style={{ "--i": 1 } as React.CSSProperties}>
          <Media image={overview.image} sizes="(max-width: 900px) 100vw, 45vw" className="etp-overview__img" />
          <dl className="etp-overview__facts">
            {overview.facts.map((f) => (
              <div key={f.label}>
                <dt>{f.label}</dt>
                <dd>{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
