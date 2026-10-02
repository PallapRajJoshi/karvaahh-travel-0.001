"use client";

import { useState, type KeyboardEvent } from "react";
import { ITINERARIES, ITINERARY_DISCLAIMER } from "@/data/activities/wildlife-nature/itineraries";
import { Reveal } from "./shared/Reveal";
import { SectionHeading } from "./shared/SectionHeading";
import { Icon } from "./shared/Icon";
import { PlanLink } from "./shared/PlanLink";
import "./SampleNatureItineraries.css";

export function SampleNatureItineraries() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = ITINERARIES[activeIndex];

  const focusTab = (i: number) => {
    setActiveIndex(i);
    document.getElementById(`wn-tab-${ITINERARIES[i].id}`)?.focus();
  };

  const onKeyDown = (e: KeyboardEvent<HTMLButtonElement>, i: number) => {
    const last = ITINERARIES.length - 1;
    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      e.preventDefault();
      focusTab(i === last ? 0 : i + 1);
    } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      e.preventDefault();
      focusTab(i === 0 ? last : i - 1);
    } else if (e.key === "Home") {
      e.preventDefault();
      focusTab(0);
    } else if (e.key === "End") {
      e.preventDefault();
      focusTab(last);
    }
  };

  return (
    <section id="itineraries" className="wn-section wn-section--ivory" aria-labelledby="wn-it-title">
      <div className="wn-container">
        <SectionHeading
          id="wn-it-title"
          eyebrow="Sample journeys"
          title="Sample Wildlife & Nature Itineraries"
          lead="Starting points for a conversation — not fixed packages."
        />

        <Reveal>
          <p className="wn-note wn-it__disclaimer">
            <Icon name="info" size={18} />
            <span>
              <strong>Illustrative concepts.</strong> {ITINERARY_DISCLAIMER}
            </span>
          </p>
        </Reveal>

        <div className="wn-it">
          <div role="tablist" aria-label="Sample journeys" className="wn-it__tabs">
            {ITINERARIES.map((it, i) => (
              <button
                key={it.id}
                id={`wn-tab-${it.id}`}
                role="tab"
                type="button"
                aria-selected={i === activeIndex}
                aria-controls={`wn-panel-${it.id}`}
                tabIndex={i === activeIndex ? 0 : -1}
                className={`wn-it__tab ${i === activeIndex ? "is-active" : ""}`}
                onClick={() => setActiveIndex(i)}
                onKeyDown={(e) => onKeyDown(e, i)}
              >
                <span className="wn-it__tab-title">{it.title}</span>
                <span className="wn-it__tab-dur">{it.duration.split(" — ")[0]}</span>
              </button>
            ))}
          </div>

          <div
            role="tabpanel"
            id={`wn-panel-${active.id}`}
            aria-labelledby={`wn-tab-${active.id}`}
            className="wn-it__panel"
            key={active.id}
          >
            <header className="wn-it__head">
              <h3 className="wn-it__title">{active.title}</h3>
              <p className="wn-it__dur">{active.duration}</p>
              <p className="wn-it__sum">{active.summary}</p>
            </header>

            <ol className="wn-it__timeline">
              {active.days.map((d) => (
                <li key={d.day} className="wn-it__day">
                  <span className="wn-it__dot" aria-hidden="true" />
                  <p className="wn-it__daylabel">{d.day}</p>
                  <h4 className="wn-it__daytitle">{d.title}</h4>
                  <ul className="wn-it__items">
                    {d.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>

            <PlanLink className="wn-link" prefill={{ destination: active.destination }}>
              Customize this concept <Icon name="arrow-right" size={16} />
            </PlanLink>
          </div>
        </div>

        <Reveal className="wn-it__cta">
          <PlanLink className="wn-btn wn-btn--gold" prefill={{ destination: active.destination }}>
            Customize Your Wildlife &amp; Nature Journey <Icon name="arrow-right" size={18} />
          </PlanLink>
        </Reveal>
      </div>
    </section>
  );
}
