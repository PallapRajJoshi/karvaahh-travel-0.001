import SectionHeading from "./SectionHeading";
import { healthSafety } from "./data/jyotirlingaData";
import "./InfoSections.css";

export default function HealthSafety() {
  const { longDistance, seniors } = healthSafety;
  return (
    <section className="jyl-section jyl-section--white jyl-info jyl-health" aria-labelledby="jyl-health-title">
      <div className="jyl-container">
        <SectionHeading id="jyl-health-title" title={healthSafety.heading} />
        <div className="jyl-health__grid">
          <div className="jyl-health__panel">
            <h3 className="jyl-health__title">{longDistance.title}</h3>
            <p>{longDistance.text}</p>
            <ul className="jyl-health__tips">
              {longDistance.tips.map((tip) => (
                <li key={tip}>{tip}</li>
              ))}
            </ul>
          </div>
          <div className="jyl-health__panel">
            <h3 className="jyl-health__title">{seniors.title}</h3>
            <p>{seniors.text}</p>
            <p className="jyl-note">{seniors.disclaimer}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
