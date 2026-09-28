import SectionHeading from "./SectionHeading";
import { festivals } from "./data/jyotirlingaData";
import "./InfoSections.css";

export default function FestivalSection() {
  return (
    <section className="jyl-section jyl-info jyl-festivals" aria-labelledby="jyl-festivals-title">
      <div className="jyl-container">
        <SectionHeading id="jyl-festivals-title" title={festivals.heading} lead={festivals.intro} />
        <dl className="jyl-info__rows">
          {festivals.items.map((f) => (
            <div key={f.title} className="jyl-info__row">
              <dt>{f.title}</dt>
              <dd>{f.text}</dd>
            </div>
          ))}
        </dl>
        <p className="jyl-note jyl-info__note">{festivals.note}</p>
      </div>
    </section>
  );
}
