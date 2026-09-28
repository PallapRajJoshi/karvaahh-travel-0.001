import { quickFacts } from "./data/jyotirlingaData";
import "./JourneyFacts.css";

export default function JourneyFacts() {
  return (
    <section className="jyl-facts" aria-label="Yatra at a glance">
      <div className="jyl-container">
        <dl className="jyl-facts__list">
          {quickFacts.map((fact) => (
            <div key={fact.label} className="jyl-facts__item">
              <dt className="jyl-facts__label">{fact.label}</dt>
              <dd className="jyl-facts__value">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
