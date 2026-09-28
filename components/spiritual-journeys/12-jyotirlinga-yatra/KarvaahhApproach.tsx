import SectionHeading from "./SectionHeading";
import { karvaahh } from "./data/jyotirlingaData";
import "./KarvaahhCTA.css";

export default function KarvaahhApproach() {
  return (
    <section className="jyl-section jyl-approach" aria-labelledby="jyl-approach-title">
      <div className="jyl-container">
        <SectionHeading id="jyl-approach-title" title={karvaahh.heading} />
        <ol className="jyl-approach__steps">
          {karvaahh.steps.map((step, i) => (
            <li key={step.title} className="jyl-approach__step">
              <span className="jyl-approach__num" aria-hidden="true">
                {i + 1}
              </span>
              <h3 className="jyl-approach__title">{step.title}</h3>
              <p className="jyl-approach__text">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
