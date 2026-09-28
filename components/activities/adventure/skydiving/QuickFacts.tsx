import SectionHeading from "./SectionHeading";
import { quickFacts } from "./data/skydivingData";
import "./QuickFacts.css";

export default function QuickFacts() {
  return (
    <section className="sky-section sky-section--cream" aria-labelledby="sky-facts-title">
      <div className="sky-container">
        <SectionHeading id="sky-facts-title" title={quickFacts.heading} />
        <dl className="sky-facts">
          {quickFacts.items.map((f) => (
            <div key={f.label} className="sky-facts__item">
              <dt>{f.label}</dt>
              <dd>{f.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
