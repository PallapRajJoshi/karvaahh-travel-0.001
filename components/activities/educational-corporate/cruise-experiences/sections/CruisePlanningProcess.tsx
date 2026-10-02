import Reveal from "../shared/Reveal";
import SectionHeading from "../shared/SectionHeading";
import { PROCESS_STEPS } from "../data/planning";
import "./CruisePlanningProcess.css";

export default function CruisePlanningProcess() {
  return (
    <section
      id="cruise-process"
      className="cr-section cr-section--dark cr-proc"
      aria-labelledby="cr-proc-title"
    >
      <div className="cr-container">
        <SectionHeading
          id="cr-proc-title"
          tone="dark"
          eyebrow="How it works"
          title="Cruise Planning Process"
        />
        <ol className="cr-proc__list">
          {PROCESS_STEPS.map((s, i) => (
            <Reveal as="li" key={s.title} delay={i * 120} className="cr-proc__step">
              <span className="cr-proc__num" aria-hidden="true">
                {i + 1}
              </span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
