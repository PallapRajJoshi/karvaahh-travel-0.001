"use client";

import { useState } from "react";
import SectionHeading from "./shared/SectionHeading";
import PrefillButton from "./shared/PrefillButton";
import { retreatStyles } from "./data/styles-travelers";
import { SECTION_IDS } from "./data/config";
import "./RetreatStyleSelector.css";

export default function RetreatStyleSelector() {
  const [activeId, setActiveId] = useState(retreatStyles[0].id);
  const active = retreatStyles.find((s) => s.id === activeId) ?? retreatStyles[0];

  return (
    <section
      id={SECTION_IDS.styles}
      className="ykw-section ykw-section--white"
      aria-labelledby="ykw-style-title"
    >
      <div className="ykw-container">
        <SectionHeading
          id="ykw-style-title"
          eyebrow="Find your fit"
          title="Choose Your Wellness Retreat Style"
          intro="Select a style to see suggested destinations and activities. These are starting ideas, not fixed packages."
        />

        <div className="ykw-style__layout">
          <div className="ykw-style__cards" role="group" aria-label="Retreat styles">
            {retreatStyles.map((s) => (
              <button
                key={s.id}
                type="button"
                className={`ykw-style__card ${s.id === activeId ? "is-active" : ""}`}
                aria-pressed={s.id === activeId}
                onClick={() => setActiveId(s.id)}
              >
                {s.title}
              </button>
            ))}
          </div>

          <div className="ykw-style__panel" aria-live="polite" key={active.id}>
            <h3>{active.title}</h3>
            <p className="ykw-style__desc">{active.description}</p>
            <div className="ykw-style__cols">
              <div>
                <p className="ykw-style__label">Suggested destinations</p>
                <ul>
                  {active.destinations.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="ykw-style__label">Relevant activities</p>
                <ul>
                  {active.activities.map((a) => (
                    <li key={a}>{a}</li>
                  ))}
                </ul>
              </div>
            </div>
            <PrefillButton
              variant="primary"
              experience={active.experienceValue}
              purpose={active.purposeValue}
            >
              Plan a Customized Retreat
            </PrefillButton>
            <p className="ykw-style__fine">
              Availability, inclusions, and therapies are confirmed before anything is booked.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
