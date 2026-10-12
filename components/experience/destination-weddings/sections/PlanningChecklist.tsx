"use client";

import { useState } from "react";
import { checklist } from "../data/planning";
import { cssVars } from "../shared/cssVars";
import "./PlanningChecklist.css";

export default function PlanningChecklist() {
  const [active, setActive] = useState(0);
  const progress = active / (checklist.length - 1);

  return (
    <section className="dw-section dw-section--tight dw-checklist" aria-labelledby="dw-checklist-title">
      <div className="dw-container">
        <div className="dw-checklist__head" data-reveal="">
          <p className="dw-eyebrow">Wedding planning checklist</p>
          <h2 id="dw-checklist-title" className="dw-h2">
            Twelve months to <em>the mandap</em>
          </h2>
          <p className="dw-lede">A realistic countdown for a destination wedding. Select a milestone to see what gets decided.</p>
        </div>

        <div className="dw-checklist__timeline" style={cssVars({ "--dw-p": progress })}>
          <div className="dw-checklist__bar" aria-hidden="true">
            <span />
          </div>
          <ol className="dw-checklist__marks">
            {checklist.map((m, i) => (
              <li key={m.id}>
                <button
                  type="button"
                  className={`dw-checklist__mark${i === active ? " is-active" : ""}${i < active ? " is-past" : ""}`}
                  aria-pressed={i === active}
                  aria-controls="dw-checklist-panel"
                  onClick={() => setActive(i)}
                >
                  <span className="dw-checklist__dot" aria-hidden="true" />
                  <span className="dw-checklist__when">{m.title}</span>
                </button>
              </li>
            ))}
          </ol>
        </div>

        <div id="dw-checklist-panel" className="dw-checklist__panel" aria-live="polite">
          <p className="dw-checklist__panel-when">{checklist[active].title} before</p>
          <ul key={checklist[active].id} className="dw-checklist__items">
            {checklist[active].items.map((item, i) => (
              <li key={item} style={cssVars({ "--dw-i": i })}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
