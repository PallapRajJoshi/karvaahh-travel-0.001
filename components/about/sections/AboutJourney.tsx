import { journey, journeySteps } from "@/lib/about/features";
import { SectionHeading } from "../shared/SectionHeading";
import "./about-journey.css";

export function AboutJourney() {
  return (
    <section className="ab-section ab-journey" aria-labelledby="about-journey-title">
      <div className="ab-container">
        <SectionHeading id="about-journey-title" eyebrow={journey.eyebrow} title={journey.title} align="center" />

        <div className="ab-journey__track">
          <div className="ab-journey__line" aria-hidden="true" data-reveal="draw-y" />
          <ol className="ab-journey__list">
            {journeySteps.map((step, i) => (
              <li
                key={step.id}
                className={`ab-journey__step ${i % 2 === 0 ? "ab-journey__step--left" : "ab-journey__step--right"}`}
                data-reveal=""
              >
                <span className="ab-journey__marker" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="ab-journey__card">
                  <h3 className="ab-journey__title">{step.title}</h3>
                  <p className="ab-journey__text">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
