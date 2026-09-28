import { quickFacts } from "../data/bungeeJumpingData";
import { SectionHeading } from "../shared";

export default function QuickFacts() {
  return (
    <section className="bj-section bj-facts" aria-labelledby="bj-facts-title">
      <div className="bj-wrap">
        <SectionHeading id="bj-facts-title" title="Quick Facts" />
        <dl className="bj-facts__grid" data-reveal>
          {quickFacts.map((f) => (
            <div key={f.label} className="bj-facts__item">
              <dt>{f.label}</dt>
              <dd>{f.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
