"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import { ITINERARY_PLANS } from "../data/itinerary";
import { OfficialNotice } from "../OfficialNotice";
import { SectionHeading } from "../SectionHeading";
import "./SuggestedItinerary.css";

const SHRINE_LABEL = { amarnath: "Amarnath", vaishno: "Vaishno Devi", kashmir: "Kashmir" } as const;

/** WAI-ARIA tabs: one plan per Amarnath route, because the route changes the whole shape of the trip. */
export function SuggestedItinerary() {
  const [activeIdx, setActiveIdx] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const onKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
    const last = ITINERARY_PLANS.length - 1;
    let next = activeIdx;
    if (e.key === "ArrowRight") next = activeIdx === last ? 0 : activeIdx + 1;
    else if (e.key === "ArrowLeft") next = activeIdx === 0 ? last : activeIdx - 1;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = last;
    else return;
    e.preventDefault();
    setActiveIdx(next);
    tabRefs.current[next]?.focus();
  };

  return (
    <section id="itinerary" className="avd-section avd-section--paper avd-itin" aria-labelledby="avd-itin-title">
      <div className="avd-wrap">
        <SectionHeading
          id="avd-itin-title"
          title="Suggested Amarnath & Vaishno Devi Yatra itinerary"
          lede="The Amarnath route you're permitted decides how many days you need, so we plan two shapes of the same journey."
        />

        <p className="avd-itin__disclaimer">
          <strong>Illustrative itinerary</strong> — final routing depends on pilgrimage registration, route opening,
          transport, weather and current official regulations.
        </p>

        <div className="avd-itin__tabs" role="tablist" aria-label="Itinerary by Amarnath route">
          {ITINERARY_PLANS.map((plan, i) => (
            <button
              key={plan.id}
              ref={(el) => {
                tabRefs.current[i] = el;
              }}
              type="button"
              role="tab"
              id={`avd-itin-tab-${plan.id}`}
              aria-selected={activeIdx === i}
              aria-controls={`avd-itin-panel-${plan.id}`}
              tabIndex={activeIdx === i ? 0 : -1}
              className="avd-itin__tab"
              onClick={() => setActiveIdx(i)}
              onKeyDown={onKeyDown}
            >
              <span className="avd-itin__tablabel">{plan.label}</span>
              <span className="avd-itin__tabdays">{plan.days.length} days</span>
            </button>
          ))}
        </div>

        {ITINERARY_PLANS.map((plan, i) => (
          <div
            key={plan.id}
            role="tabpanel"
            id={`avd-itin-panel-${plan.id}`}
            aria-labelledby={`avd-itin-tab-${plan.id}`}
            hidden={activeIdx !== i}
            tabIndex={0}
            className="avd-itin__panel"
          >
            <p className="avd-itin__desc">{plan.description}</p>
            <ol className="avd-itin__days">
              {plan.days.map((d) => (
                <li key={d.day} className={`avd-itin__day avd-itin__day--${d.shrine}`}>
                  <div className="avd-itin__dayhead">
                    <span className="avd-itin__daynum">Day {d.day}</span>
                    <span className={`avd-tag avd-tag--${d.shrine}`}>{SHRINE_LABEL[d.shrine]}</span>
                  </div>
                  <h3 className="avd-itin__daytitle">{d.title}</h3>
                  <ul className="avd-itin__acts">
                    {d.activities.map((a) => (
                      <li key={a}>{a}</li>
                    ))}
                  </ul>
                  {d.note ? <p className="avd-itin__note">{d.note}</p> : null}
                </li>
              ))}
            </ol>
          </div>
        ))}

        <OfficialNotice>
          The actual itinerary may need additional days depending on registration dates, route selection, pilgrimage
          regulations, weather, transport availability and your own requirements.
        </OfficialNotice>
      </div>
    </section>
  );
}
