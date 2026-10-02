import Reveal from "./shared/Reveal";
import SectionHeading from "./shared/SectionHeading";
import { process } from "./data/journeys";
import "./WellnessPlanningProcess.css";

export default function WellnessPlanningProcess() {
  return (
    <section className="ykw-section" aria-labelledby="ykw-proc-title">
      <div className="ykw-container">
        <SectionHeading
          id="ykw-proc-title"
          eyebrow="How it works"
          title="Wellness Planning Process"
          intro="Four calm steps from first idea to confirmed arrangements."
        />
        <ol className="ykw-proc__list">
          {process.map((s, i) => (
            <Reveal as="li" key={s.id} delay={i * 110} className="ykw-proc__step">
              <span className="ykw-proc__num" aria-hidden="true">
                {i + 1}
              </span>
              <h3>{s.title}</h3>
              <p>{s.description}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
