import CultureImage from "../shared/CultureImage";
import Reveal from "../shared/Reveal";
import CtaLink from "../shared/CtaLink";
import { GoldDivider } from "../shared/SectionHeading";
import { PERFORMANCES } from "../data/performances";
import { IDS } from "../data/page";
import "./CulturalPerformances.css";

export default function CulturalPerformances() {
  const p = PERFORMANCES;
  return (
    <section id={IDS.performances} className="culture-perf" aria-labelledby="culture-perf-title">
      <div className="cx-container culture-perf__grid">
        <Reveal className="culture-perf__copy">
          <p className="culture-perf__eyebrow">{p.eyebrow}</p>
          <h2 id="culture-perf-title" className="culture-perf__title">
            {p.heading}
          </h2>
          <GoldDivider className="culture-perf__divider" />
          <p className="culture-perf__intro">{p.intro}</p>
          <ul className="culture-perf__list">
            {p.highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
          <p className="culture-perf__note">{p.note}</p>
          <CtaLink variant="gold" prefill={p.prefill}>
            {p.cta}
          </CtaLink>
        </Reveal>

        <Reveal className="culture-perf__media" delay={140}>
          <div className="culture-perf__frame">
            <CultureImage id={p.media} sizes="(max-width: 900px) 100vw, 58vw" />
          </div>
          <span className="culture-perf__accent" aria-hidden="true" />
        </Reveal>
      </div>
    </section>
  );
}
