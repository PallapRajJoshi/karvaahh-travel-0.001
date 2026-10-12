"use client";

import { useState } from "react";
import { ANCHORS } from "../data/config";
import { planningStages } from "../data/planning";
import Arrow from "../shared/Arrow";
import ChapterMark from "../shared/ChapterMark";
import { cssVars } from "../shared/cssVars";
import "./WeddingJourney.css";

export default function WeddingJourney() {
  const [active, setActive] = useState(0);
  const stage = planningStages[active];
  const progress = (active + 1) / planningStages.length;

  return (
    <section id={ANCHORS.journey} className="dw-section dw-journey dw-dark" aria-labelledby="dw-journey-title">
      <div className="dw-container">
        <ChapterMark index={2} tone="dark" />
        <header className="dw-journey__head" data-reveal="">
          <p className="dw-eyebrow">The complete wedding journey</p>
          <h2 id="dw-journey-title" className="dw-h2">
            From destination to <em>“I do”</em>
          </h2>
          <p className="dw-lede">
            Nine stages, one coordination partner. Select a stage to see what happens — and what you walk away with.
          </p>
        </header>

        <div className="dw-journey__layout">
          <ol className="dw-journey__steps">
            {planningStages.map((s, i) => {
              const isActive = i === active;
              return (
                <li key={s.id} className={`dw-journey__step${isActive ? " is-active" : ""}${i < active ? " is-done" : ""}`}>
                  <button
                    type="button"
                    className="dw-journey__trigger"
                    aria-expanded={isActive}
                    aria-controls={`dw-stage-${s.id}`}
                    onClick={() => setActive(i)}
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                  >
                    <span className="dw-journey__n">{s.number}</span>
                    <span className="dw-journey__title">{s.title}</span>
                    <span className="dw-journey__summary">{s.summary}</span>
                  </button>
                  {/* Inline detail for small screens */}
                  <div id={`dw-stage-${s.id}`} className="dw-journey__inline" hidden={!isActive}>
                    <p>{s.detail}</p>
                    <p className="dw-journey__outcome">
                      <span>Outcome</span> {s.outcome}
                    </p>
                  </div>
                </li>
              );
            })}
          </ol>

          <aside className="dw-journey__panel" aria-hidden="true">
            <div className="dw-journey__progress" style={cssVars({ "--dw-p": progress })}>
              <span />
            </div>
            <p className="dw-journey__panel-meta">
              Stage {stage.number} of {String(planningStages.length).padStart(2, "0")}
            </p>
            <div key={stage.id} className="dw-journey__panel-body">
              <p className="dw-journey__panel-n">{stage.number}</p>
              <p className="dw-journey__panel-title">{stage.title}</p>
              <p className="dw-journey__panel-detail">{stage.detail}</p>
              <p className="dw-journey__outcome">
                <span>Outcome</span> {stage.outcome}
              </p>
            </div>
          </aside>
        </div>

        <div className="dw-journey__cta">
          <a href={`#${ANCHORS.plan}`} className="dw-btn dw-btn--light">
            Build My Wedding Journey <Arrow />
          </a>
        </div>
      </div>
    </section>
  );
}
