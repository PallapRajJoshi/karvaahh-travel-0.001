import SectionHeading from "./SectionHeading";
import { darshan } from "./data/jyotirlingaData";
import "./DarshanExperience.css";

export default function DarshanExperience() {
  return (
    <section className="jyl-section jyl-section--stone jyl-darshan" aria-labelledby="jyl-darshan-title">
      <div className="jyl-container jyl-darshan__grid">
        <div>
          <SectionHeading id="jyl-darshan-title" title={darshan.heading} />
          <ul className="jyl-darshan__points">
            {darshan.points.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
          <p className="jyl-darshan__warning">{darshan.notGuaranteed}</p>
        </div>

        <div className="jyl-darshan__etiquette">
          <h3 className="jyl-darshan__subtitle">{darshan.etiquetteHeading}</h3>
          <ul className="jyl-darshan__rules">
            {darshan.etiquette.map((rule) => (
              <li key={rule}>{rule}</li>
            ))}
          </ul>
          <p className="jyl-darshan__small">{darshan.etiquetteNote}</p>
          <p className="jyl-darshan__small">{darshan.changingInfo}</p>
        </div>
      </div>
    </section>
  );
}
