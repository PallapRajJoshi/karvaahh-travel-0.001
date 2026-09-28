import SectionHeading from "./SectionHeading";
import { PROCESS } from "./data/hotAirBalloonData";
import "./HowItWorks.css";

export default function HowItWorks() {
  return (
    <section className="hab-section hab-how" aria-labelledby="hab-how-title">
      <div className="hab-container">
        <SectionHeading id="hab-how-title" title={PROCESS.heading} />
        <ol className="hab-how__steps">
          {PROCESS.steps.map((s, i) => (
            <li key={s.title} className="hab-how__step">
              <span className="hab-how__num" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="hab-how__title">{s.title}</h3>
              <p className="hab-how__text">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
