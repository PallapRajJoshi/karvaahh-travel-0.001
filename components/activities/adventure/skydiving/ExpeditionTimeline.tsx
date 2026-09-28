import SectionHeading from "./SectionHeading";
import { timeline } from "./data/skydivingData";
import "./ExpeditionTimeline.css";

export default function ExpeditionTimeline() {
  return (
    <section id="expedition" className="sky-section sky-section--dark" aria-labelledby="sky-timeline-title">
      <div className="sky-container">
        <SectionHeading id="sky-timeline-title" title={timeline.heading} tone="dark" />
        <ol className="sky-timeline">
          {timeline.steps.map((step, i) => (
            <li key={step.title} className="sky-timeline__step">
              <span className="sky-timeline__num" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="sky-timeline__title">{step.title}</h3>
              <p className="sky-timeline__text">{step.text}</p>
            </li>
          ))}
        </ol>
        <p className="sky-note sky-note--dark">{timeline.note}</p>
      </div>
    </section>
  );
}
