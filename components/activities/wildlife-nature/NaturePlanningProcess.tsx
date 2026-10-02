import { PROCESS_STEPS } from "@/data/activities/wildlife-nature/blocks";
import { Reveal } from "./shared/Reveal";
import { SectionHeading } from "./shared/SectionHeading";
import "./NaturePlanningProcess.css";

export function NaturePlanningProcess() {
  return (
    <section className="wn-section wn-section--white" aria-labelledby="wn-proc-title">
      <div className="wn-container">
        <SectionHeading
          id="wn-proc-title"
          eyebrow="How it works"
          title="Your Nature Journey, Step by Step"
          lead="From first idea to confirmed arrangements — nothing is booked until you have reviewed the details."
          align="center"
        />

        <ol className="wn-proc">
          {PROCESS_STEPS.map((s, i) => (
            <li key={s.step} className="wn-proc__item">
              <Reveal delay={i * 120} className="wn-proc__reveal">
                <span className="wn-proc__num" aria-hidden="true">
                  {s.step}
                </span>
                <h3 className="wn-proc__title">
                  <span className="wn-visually-hidden">Step {s.step}: </span>
                  {s.title}
                </h3>
                <p className="wn-proc__body">{s.body}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
