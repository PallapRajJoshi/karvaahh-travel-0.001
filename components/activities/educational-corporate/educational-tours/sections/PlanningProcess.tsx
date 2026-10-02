import { PROCESS } from "../data/content";
import { Reveal } from "../shared/Reveal";
import { SectionHeading } from "../shared/SectionHeading";
import "./PlanningProcess.css";

export function PlanningProcess() {
  return (
    <section id="process" className="et-section" aria-labelledby="et-process-title">
      <div className="et-container">
        <SectionHeading eyebrow={PROCESS.eyebrow} title={PROCESS.title} id="et-process-title" />
        <ol className="et-proc__list">
          {PROCESS.steps.map((step, i) => (
            <Reveal as="li" key={step.title} index={i % 3} className="et-proc__step">
              <span className="et-proc__num" aria-hidden="true">{i + 1}</span>
              <h3 className="et-proc__title">
                <span className="et-sr-only">Step {i + 1}: </span>
                {step.title}
              </h3>
              <p className="et-proc__text">{step.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
