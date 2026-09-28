import { steps } from "../data/bungeeJumpingData";
import { SectionHeading } from "../shared";

export default function HowItWorks() {
  return (
    <section className="bj-section bj-steps" aria-labelledby="bj-steps-title">
      <div className="bj-wrap">
        <SectionHeading
          id="bj-steps-title"
          title="How to Arrange Your Adventure"
          intro="Prices and availability are confirmed with the operator before anything is booked."
        />
        <ol className="bj-steps__list">
          {steps.map((s, i) => (
            <li key={s.title} data-reveal>
              <span className="bj-steps__num" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
