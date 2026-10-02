"use client";

import { useState } from "react";
import SectionHeading from "../shared/SectionHeading";
import { ACCESS_ROUTES, STARTING_POINTS, ACCESS_NOTE } from "../data";
import { useScrollReveal } from "../shared/useScrollReveal";
import "./HowToReach.css";

export default function HowToReach() {
  const ref = useScrollReveal<HTMLElement>();
  const [activePoint, setActivePoint] = useState(STARTING_POINTS[0].id);
  const selected = STARTING_POINTS.find((point) => point.id === activePoint) ?? STARTING_POINTS[0];

  return (
    <section className="phoksundo-access" ref={ref}>
      <div className="phoksundo-page__container">
        <SectionHeading eyebrow="Getting There" title="How to Reach Shey Phoksundo" />

        <div className="phoksundo-access__routes">
          {ACCESS_ROUTES.map((route) => (
            <article className="phoksundo-access__route" key={route.id} data-reveal>
              <h3 className="phoksundo-access__route-title">{route.title}</h3>
              <p className="phoksundo-access__route-description">{route.description}</p>
              {route.highlights ? (
                <ul className="phoksundo-access__route-highlights">
                  {route.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              ) : null}
            </article>
          ))}
        </div>

        <div className="phoksundo-access__planner" data-reveal>
          <h3 className="phoksundo-access__planner-title">Suggested Starting Points</h3>
          <div className="phoksundo-access__planner-buttons" role="tablist" aria-label="Select a starting point">
            {STARTING_POINTS.map((point) => (
              <button
                key={point.id}
                type="button"
                role="tab"
                aria-selected={activePoint === point.id}
                className={`phoksundo-access__planner-button ${
                  activePoint === point.id ? "phoksundo-access__planner-button--active" : ""
                }`}
                onClick={() => setActivePoint(point.id)}
              >
                {point.name}
              </button>
            ))}
          </div>
          <p className="phoksundo-access__planner-description">{selected.description}</p>
        </div>

        <p className="phoksundo-access__note">{ACCESS_NOTE}</p>
      </div>
    </section>
  );
}
