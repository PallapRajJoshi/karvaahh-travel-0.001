"use client";

import { useState } from "react";
import Reveal from "../shared/Reveal";
import SectionHeading from "../shared/SectionHeading";
import PrefillLink from "../shared/PrefillLink";
import { ArrowRight } from "../shared/Icons";
import { CRUISE_STYLES } from "../data/planning";
import "./CruiseStyleSelector.css";

export default function CruiseStyleSelector() {
  const [selectedId, setSelectedId] = useState(CRUISE_STYLES[0].id);
  const selected =
    CRUISE_STYLES.find((s) => s.id === selectedId) ?? CRUISE_STYLES[0];

  return (
    <section
      id="cruise-style"
      className="cr-section cr-style"
      aria-labelledby="cr-style-title"
    >
      <div className="cr-container">
        <SectionHeading
          id="cr-style-title"
          eyebrow="Find your fit"
          title="Choose Your Cruise Style"
          lead="Select the style that sounds most like you and we'll suggest where to look."
        />
        <Reveal>
          <fieldset className="cr-style__fieldset">
            <legend className="cr-sr-only">Cruise style</legend>
            <div className="cr-style__grid">
              {CRUISE_STYLES.map((s) => (
                <label key={s.id} className="cr-style__opt">
                  <input
                    type="radio"
                    name="cruise-style"
                    value={s.id}
                    checked={s.id === selectedId}
                    onChange={() => setSelectedId(s.id)}
                  />
                  <span className="cr-style__card">{s.title}</span>
                </label>
              ))}
            </div>
          </fieldset>

          <div className="cr-style__panel" aria-live="polite">
            <h3>{selected.title}</h3>
            <p>{selected.description}</p>
            <p className="cr-style__sugg">
              <strong>Destinations to consider:</strong>{" "}
              {selected.suggestions.join(" · ")}
            </p>
            <p className="cr-style__fine">
              Options, prices and availability are confirmed only after you
              enquire.
            </p>
            <PrefillLink
              prefill={{
                cruiseType: selected.cruiseType,
                purpose: selected.purpose,
              }}
              className="cr-btn cr-btn--gold"
            >
              Find My Cruise Experience <ArrowRight />
            </PrefillLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
