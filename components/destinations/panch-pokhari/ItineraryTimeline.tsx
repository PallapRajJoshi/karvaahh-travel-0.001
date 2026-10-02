"use client";

import type { RefObject } from "react";
import Icon from "@/components/shared/Icon";
import Reveal from "@/components/shared/Reveal";
import SectionHeading from "@/components/shared/SectionHeading";
import { useReveal } from "@/components/shared/useReveal";
import { itineraryDays, itineraryDisclaimer, type ItineraryDay } from "@/data/panch-pokhari/itinerary";
import "./itinerary-timeline.css";

function ItineraryItem({ day, index }: { day: ItineraryDay; index: number }) {
  const [ref, revealClassName, style] = useReveal({
    variant: index % 2 === 0 ? "slide-right" : "slide-left",
    delay: index * 60,
  });

  return (
    <li
      ref={ref as RefObject<HTMLLIElement>}
      className={`pp-itinerary__item ${revealClassName}`}
      style={style}
    >
      <div className="pp-itinerary__marker">
        <span className="pp-itinerary__day-number">{day.day}</span>
      </div>
      <div className="pp-itinerary__card">
        <p className="pp-itinerary__day-label">Day {day.day}</p>
        <h3 className="pp-itinerary__title">{day.title}</h3>
        <p className="pp-itinerary__body">{day.body}</p>
      </div>
    </li>
  );
}

export default function ItineraryTimeline() {
  return (
    <section className="pp-itinerary" aria-labelledby="itinerary-heading">
      <div className="pp-container">
        <SectionHeading
          eyebrow="Sample Itinerary"
          title="Your Journey to the Sacred Lakes"
        />

        <ol className="pp-itinerary__timeline">
          {itineraryDays.map((day, index) => (
            <ItineraryItem key={day.day} day={day} index={index} />
          ))}
        </ol>

        <Reveal className="pp-itinerary__disclaimer" variant="fade-in">
          <Icon name="compass" className="pp-itinerary__disclaimer-icon" />
          <p>{itineraryDisclaimer}</p>
        </Reveal>
      </div>
    </section>
  );
}
