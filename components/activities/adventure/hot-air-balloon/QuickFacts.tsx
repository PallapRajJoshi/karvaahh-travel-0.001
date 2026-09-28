import SectionHeading from "./SectionHeading";
import { QUICK_FACTS } from "./data/hotAirBalloonData";
import "./QuickFacts.css";

export default function QuickFacts() {
  return (
    <section className="hab-section hab-section--cream hab-facts" aria-labelledby="hab-facts-title">
      <div className="hab-container">
        <SectionHeading id="hab-facts-title" title="Quick Facts" />
        <dl className="hab-facts__grid">
          {QUICK_FACTS.map((f) => (
            <div key={f.label} className="hab-facts__item">
              <dt className="hab-facts__label">{f.label}</dt>
              <dd className="hab-facts__value">
                {f.value}
                {f.note && <span className="hab-facts__note">{f.note}</span>}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
