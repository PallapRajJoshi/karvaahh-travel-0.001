import type { FactItem } from "./types";
import "./quick-facts.css";

export default function QuickFacts({ heading, items }: { heading: string; items: FactItem[] }) {
  return (
    <section className="ae-facts" aria-labelledby="ae-facts-title">
      <div className="ae-container ae-facts__inner">
        <h2 id="ae-facts-title" className="ae-facts__title">
          {heading}
        </h2>
        <dl className="ae-facts__list">
          {items.map((f) => (
            <div key={f.label} className="ae-facts__item">
              <dt className="ae-facts__label">{f.label}</dt>
              <dd className="ae-facts__value">{f.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
