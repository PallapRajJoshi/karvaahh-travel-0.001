"use client";

import { useState } from "react";
import SectionHeading from "@/components/shared/SectionHeading";
import { howToReachContent, routeOptions } from "@/data/destinations/rara-lake/content";
import "./RaraLakeHowToReach.css";

export default function RaraLakeHowToReach() {
  const [activeRoute, setActiveRoute] = useState(routeOptions[0].id);
  const selected = routeOptions.find((route) => route.id === activeRoute) ?? routeOptions[0];

  return (
    <section className="rara-reach" aria-labelledby="rara-reach-heading">
      <SectionHeading
        eyebrow="Getting There"
        title={howToReachContent.heading}
        description={howToReachContent.intro}
      />

      <div className="rara-reach__methods">
        <div className="rara-reach__method">
          <h3 className="rara-reach__method-title">{howToReachContent.byAir.heading}</h3>
          <ul className="rara-reach__method-list">
            {howToReachContent.byAir.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
        <div className="rara-reach__method">
          <h3 className="rara-reach__method-title">{howToReachContent.byRoad.heading}</h3>
          <ul className="rara-reach__method-list">
            {howToReachContent.byRoad.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="rara-reach__planner">
        <h3 className="rara-reach__planner-title">Plan From Your Starting Point</h3>
        <div className="rara-reach__tabs" role="tablist" aria-label="Select a starting point">
          {routeOptions.map((route) => (
            <button
              key={route.id}
              type="button"
              role="tab"
              aria-selected={activeRoute === route.id}
              className={`rara-reach__tab ${activeRoute === route.id ? "rara-reach__tab--active" : ""}`}
              onClick={() => setActiveRoute(route.id)}
            >
              {route.label}
            </button>
          ))}
        </div>
        <div className="rara-reach__panel" role="tabpanel">
          <div className="rara-reach__panel-modes">
            {selected.mode.map((mode) => (
              <span key={mode} className="rara-reach__mode-badge">
                {mode === "air" ? "By Air" : "By Road"}
              </span>
            ))}
          </div>
          <p className="rara-reach__panel-note">{selected.note}</p>
        </div>
      </div>

      <p className="rara-reach__verification">{howToReachContent.verificationNote}</p>
    </section>
  );
}
