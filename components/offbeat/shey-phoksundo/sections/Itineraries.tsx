"use client";

import SectionHeading from "../shared/SectionHeading";
import { ITINERARIES } from "../data";
import { useScrollReveal } from "../shared/useScrollReveal";
import "./Itineraries.css";

export default function Itineraries() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section className="phoksundo-itineraries" ref={ref}>
      <div className="phoksundo-page__container">
        <SectionHeading
          eyebrow="Plan Your Trip"
          title="Suggested Shey Phoksundo Itineraries"
          description="Customizable concepts — transport, trail conditions, and permits must be verified before travel."
        />

        <div className="phoksundo-itineraries__grid">
          {ITINERARIES.map((option) => (
            <article className="phoksundo-itineraries__card" key={option.id} data-reveal>
              <div className="phoksundo-itineraries__header">
                <span className="phoksundo-itineraries__option-label">{option.optionLabel}</span>
                <span className="phoksundo-itineraries__duration">{option.duration}</span>
              </div>
              <h3 className="phoksundo-itineraries__title">{option.title}</h3>

              <ol className="phoksundo-itineraries__days">
                {option.days.map((day) => (
                  <li key={day.day}>
                    <span className="phoksundo-itineraries__day-label">{day.day}</span>
                    <span>{day.summary}</span>
                  </li>
                ))}
              </ol>

              <p className="phoksundo-itineraries__disclaimer">{option.disclaimer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
