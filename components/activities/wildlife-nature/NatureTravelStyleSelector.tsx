"use client";

import { useState } from "react";
import { TRAVEL_STYLES } from "@/data/activities/wildlife-nature/travel-styles";
import { getDestination } from "@/data/activities/wildlife-nature/destinations";
import { Reveal } from "./shared/Reveal";
import { SectionHeading } from "./shared/SectionHeading";
import { Icon } from "./shared/Icon";
import { PlanLink } from "./shared/PlanLink";
import "./NatureTravelStyleSelector.css";

export function NatureTravelStyleSelector() {
  const [activeId, setActiveId] = useState(TRAVEL_STYLES[0].id);
  const active = TRAVEL_STYLES.find((s) => s.id === activeId) ?? TRAVEL_STYLES[0];

  return (
    <section id="styles" className="wn-section wn-section--ivory" aria-labelledby="wn-style-title">
      <div className="wn-container">
        <SectionHeading
          id="wn-style-title"
          eyebrow="Find your kind of wild"
          title="Choose Your Nature Travel Style"
          lead="Pick the style that sounds most like you. We'll show where it tends to work best — and carry your choice into the inquiry form."
        />

        <div className="wn-style">
          <fieldset className="wn-style__choices">
            <legend className="wn-visually-hidden">Nature travel style</legend>
            {TRAVEL_STYLES.map((s) => (
              <label key={s.id} className={`wn-style__option ${s.id === activeId ? "is-active" : ""}`}>
                <input
                  type="radio"
                  name="wn-travel-style"
                  value={s.id}
                  checked={s.id === activeId}
                  onChange={() => setActiveId(s.id)}
                  className="wn-style__radio"
                />
                <span className="wn-style__icon">
                  <Icon name={s.icon} size={22} />
                </span>
                <span className="wn-style__label">{s.title}</span>
              </label>
            ))}
          </fieldset>

          <Reveal className="wn-style__panel-wrap">
            <div className="wn-style__panel" aria-live="polite" key={active.id}>
              <h3 className="wn-style__title">{active.title}</h3>
              <p className="wn-style__desc">{active.description}</p>

              <div className="wn-style__cols">
                <div>
                  <h4 className="wn-style__sub">Suggested destinations</h4>
                  <ul className="wn-style__tags">
                    {active.destinations.map((id) => (
                      <li key={id}>{getDestination(id)?.name ?? id}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="wn-style__sub">Relevant activities</h4>
                  <ul className="wn-style__acts">
                    {active.activities.map((a) => (
                      <li key={a}>
                        <Icon name="check" size={15} /> {a}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <PlanLink className="wn-btn wn-btn--gold" prefill={active.prefill}>
                Plan a customized journey <Icon name="arrow-right" size={18} />
              </PlanLink>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
