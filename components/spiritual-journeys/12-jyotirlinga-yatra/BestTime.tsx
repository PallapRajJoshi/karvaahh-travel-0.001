import SectionHeading from "./SectionHeading";
import { bestTime } from "./data/jyotirlingaData";
import "./InfoSections.css";

export default function BestTime() {
  return (
    <section className="jyl-section jyl-section--white jyl-info jyl-best" aria-labelledby="jyl-best-title">
      <div className="jyl-container">
        <SectionHeading id="jyl-best-title" title={bestTime.heading} />
        <p className="jyl-best__lead">{bestTime.lead}</p>
        <dl className="jyl-info__tiles">
          {bestTime.factors.map((f) => (
            <div key={f.title} className="jyl-info__tile">
              <dt>{f.title}</dt>
              <dd>{f.text}</dd>
            </div>
          ))}
        </dl>
        <p className="jyl-note jyl-info__note">{bestTime.tip}</p>
      </div>
    </section>
  );
}
