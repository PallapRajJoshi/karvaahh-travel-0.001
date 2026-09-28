import SectionHeading from "./SectionHeading";
import { enquirySteps } from "./data/skydivingData";
import "./HowItWorks.css";

export default function HowItWorks() {
  return (
    <section className="sky-section sky-section--cream" aria-labelledby="sky-how-title">
      <div className="sky-container">
        <SectionHeading id="sky-how-title" title={enquirySteps.heading} />
        <ol className="sky-how">
          {enquirySteps.steps.map((s, i) => (
            <li key={s.title} className="sky-how__step">
              <span className="sky-how__num" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="sky-how__title">{s.title}</h3>
              <p className="sky-how__text">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
