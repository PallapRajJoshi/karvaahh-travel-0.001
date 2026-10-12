"use client";

import { useState } from "react";
import { ANCHORS } from "../data/config";
import { sampleJourneys } from "../data/planning";
import Arrow from "../shared/Arrow";
import "./SampleJourneys.css";

export default function SampleJourneys() {
  const [active, setActive] = useState(sampleJourneys[0].id);
  const [openDay, setOpenDay] = useState(0);

  return (
    <section className="dw-section dw-samples dw-paper" aria-labelledby="dw-samples-title">
      <div className="dw-container">
        <div className="dw-samples__head" data-reveal="">
          <p className="dw-eyebrow">Sample wedding journeys</p>
          <h2 id="dw-samples-title" className="dw-h2">
            What a few days <em>could look like</em>
          </h2>
          <p className="dw-lede">
            Two starting points to react to — a lakeside resort celebration and a sacred Himalayan journey.
            Every day, function and timing can be changed.
          </p>
        </div>

        <div className="dw-samples__switch" role="tablist" aria-label="Sample journeys">
          {sampleJourneys.map((j) => (
            <button
              key={j.id}
              type="button"
              role="tab"
              id={`dw-sample-tab-${j.id}`}
              aria-selected={active === j.id}
              aria-controls={`dw-sample-${j.id}`}
              className={`dw-samples__tab${active === j.id ? " is-active" : ""}`}
              onClick={() => {
                setActive(j.id);
                setOpenDay(0);
              }}
            >
              <span className="dw-samples__tab-name">{j.name}</span>
              <span className="dw-samples__tab-dur">{j.duration}</span>
            </button>
          ))}
        </div>

        {sampleJourneys.map((j) => (
          <div
            key={j.id}
            id={`dw-sample-${j.id}`}
            role="tabpanel"
            aria-labelledby={`dw-sample-tab-${j.id}`}
            hidden={active !== j.id}
            className="dw-samples__panel"
          >
            <div className="dw-samples__meta">
              <p className="dw-samples__label">{j.label}</p>
              <p className="dw-samples__summary">{j.summary}</p>
            </div>

            <ol className="dw-samples__days">
              {j.days.map((d, i) => {
                const open = openDay === i;
                return (
                  <li key={d.day} className={`dw-samples__day${open ? " is-open" : ""}`}>
                    <h3 className="dw-samples__day-h">
                      <button
                        type="button"
                        aria-expanded={open}
                        aria-controls={`dw-${j.id}-day-${i}`}
                        onClick={() => setOpenDay(open ? -1 : i)}
                      >
                        <span className="dw-samples__day-n">{d.day}</span>
                        <span className="dw-samples__day-title">{d.title}</span>
                        <span className="dw-samples__day-icon" aria-hidden="true" />
                      </button>
                    </h3>
                    <div id={`dw-${j.id}-day-${i}`} className="dw-samples__day-body" hidden={!open}>
                      <ol className="dw-samples__moments">
                        {d.moments.map((m) => (
                          <li key={m}>{m}</li>
                        ))}
                      </ol>
                    </div>
                  </li>
                );
              })}
            </ol>

            {j.extension && <p className="dw-samples__ext">{j.extension}</p>}
          </div>
        ))}

        <a href={`#${ANCHORS.plan}`} className="dw-link dw-samples__cta">
          Customise this journey <Arrow />
        </a>
      </div>
    </section>
  );
}
