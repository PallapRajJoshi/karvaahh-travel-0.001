"use client";

import { useState } from "react";
import { accessRoutes, startingPoints, accessAdvisory } from "@/data/dhorpatan";
import SectionHeading from "@/components/shared/SectionHeading";
import "./HowToReach.css";

export default function HowToReach() {
  const [selectedStart, setSelectedStart] = useState(startingPoints[0]);

  return (
    <section className="how-to-reach" id="how-to-reach">
      <div className="dhorpatan-page__container">
        <SectionHeading eyebrow="Getting There" heading="How to Reach Dhorpatan" />

        <div className="how-to-reach__grid">
          <div className="how-to-reach__road">
            <h3 className="how-to-reach__subheading">By Road</h3>
            <p className="how-to-reach__text">
              Dhorpatan is reached through rugged overland routes in western Nepal, with approaches
              involving changing terrain, mountain roads, and potential road-condition challenges.
              Common approach points include:
            </p>
            <ul className="how-to-reach__route-list">
              {accessRoutes.map((route) => (
                <li key={route}>{route}</li>
              ))}
            </ul>
          </div>

          <div className="how-to-reach__planner">
            <h3 className="how-to-reach__subheading">Suggested Starting Points</h3>
            <div className="how-to-reach__chips" role="group" aria-label="Select a starting point">
              {startingPoints.map((point) => (
                <button
                  key={point}
                  type="button"
                  className={`how-to-reach__chip ${selectedStart === point ? "is-active" : ""}`}
                  aria-pressed={selectedStart === point}
                  onClick={() => setSelectedStart(point)}
                >
                  {point}
                </button>
              ))}
            </div>
            <p className="how-to-reach__planner-note">
              Route details from <strong>{selectedStart}</strong> to Dhorpatan — including road
              distances, journey durations, and vehicle options — are confirmed with verified data
              at the time of planning your trip, and are not estimated here.
            </p>
          </div>
        </div>

        <div className="how-to-reach__advisory">
          <p>{accessAdvisory}</p>
        </div>
      </div>
    </section>
  );
}
