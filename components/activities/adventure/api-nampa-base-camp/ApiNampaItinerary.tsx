"use client";

import Image from "next/image";
import { useState } from "react";
import { ITINERARY, ITINERARY_META, PHASES } from "./data/itinerary";
import { ANCHORS, INQUIRY } from "./data/routes";
import type { ItineraryDay, ItineraryPhase } from "./data/types";
import { ArrowRight, ChevronDown, Info } from "./shared/icons";
import "./ApiNampaItinerary.css";

const PHASE_ORDER: ItineraryPhase[] = ["approach", "trek-in", "base-camp", "return"];

function DayStats({ day }: { day: ItineraryDay }) {
  // Never render estimates: numeric stats only appear once a day is verified.
  if (!day.verified) return null;
  const stats = [
    { label: "Walking", value: day.walkingHours },
    { label: "Distance", value: day.distance },
    { label: "Elevation", value: day.elevation },
  ].filter((s): s is { label: string; value: string } => Boolean(s.value));
  if (!stats.length) return null;
  return (
    <dl className="an-itin__stats">
      {stats.map((s) => (
        <div key={s.label}>
          <dt>{s.label}</dt>
          <dd>{s.value}</dd>
        </div>
      ))}
    </dl>
  );
}

export default function ApiNampaItinerary() {
  const [open, setOpen] = useState<Set<number>>(() => new Set([1]));
  const allOpen = open.size === ITINERARY.length;

  const toggle = (day: number) =>
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(day)) next.delete(day);
      else next.add(day);
      return next;
    });

  const toggleAll = () => setOpen(allOpen ? new Set() : new Set(ITINERARY.map((d) => d.day)));

  return (
    <section className="an-section an-section--stone an-itin" id={ANCHORS.itinerary} aria-labelledby="an-itin-title">
      <div className="an-container an-itin__grid">
        <header className="an-itin__aside">
          <p className="an-heading__eyebrow">Sample itinerary</p>
          <h2 className="an-heading__title" id="an-itin-title">
            {ITINERARY_META.title}
          </h2>
          <p className="an-itin__intro">{ITINERARY_META.intro}</p>

          <ol className="an-itin__phases" aria-label="Journey phases">
            {PHASE_ORDER.map((p) => {
              const days = ITINERARY.filter((d) => d.phase === p).map((d) => d.day);
              const range = days.length > 1 ? `Days ${days[0]}–${days[days.length - 1]}` : `Day ${days[0]}`;
              return (
                <li key={p} className={`an-itin__phase an-itin__phase--${p}`}>
                  <span className="an-itin__phase-dot" aria-hidden="true" />
                  <span className="an-itin__phase-label">{PHASES[p].label}</span>
                  <span className="an-itin__phase-range">{range}</span>
                </li>
              );
            })}
          </ol>

          <div className="an-itin__note" role="note">
            <Info />
            <p>{ITINERARY_META.disclaimer}</p>
          </div>

          <a className="an-btn an-btn--blue an-itin__cta" href={INQUIRY.custom}>
            Plan my itinerary
            <ArrowRight />
          </a>
        </header>

        <div className="an-itin__main">
          <div className="an-itin__toolbar">
            <span className="an-tag">Sample framework · to be confirmed</span>
            <button type="button" className="an-itin__toggle-all" onClick={toggleAll}>
              {allOpen ? "Collapse all" : "Expand all"}
            </button>
          </div>

          <ol className="an-itin__list">
            {ITINERARY.map((day) => {
              const isOpen = open.has(day.day);
              const panelId = `an-day-${day.day}-panel`;
              const btnId = `an-day-${day.day}-btn`;
              return (
                <li key={day.day} className={`an-itin__day an-itin__day--${day.phase}${isOpen ? " is-open" : ""}`}>
                  <span className="an-itin__node" aria-hidden="true" />
                  <h3 className="an-itin__day-heading">
                    <button
                      type="button"
                      id={btnId}
                      className="an-itin__trigger"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => toggle(day.day)}
                    >
                      <span className="an-itin__daynum">
                        <small>Day</small> {String(day.day).padStart(2, "0")}
                      </span>
                      <span className="an-itin__route">
                        <span className="an-itin__fromto">
                          {day.from === day.to ? day.to : `${day.from} → ${day.to}`}
                        </span>
                        <span className="an-itin__summary">{day.summary}</span>
                      </span>
                      <ChevronDown className="an-itin__chev" />
                    </button>
                  </h3>
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={btnId}
                    className="an-itin__panel"
                    hidden={!isOpen}
                  >
                    <div className="an-itin__panel-inner">
                      <div>
                        <ul className="an-itin__details">
                          {day.details.map((d) => (
                            <li key={d}>{d}</li>
                          ))}
                        </ul>
                        <DayStats day={day} />
                        {!day.verified ? (
                          <p className="an-itin__unverified">
                            Walking time and elevation confirmed during trip planning.
                          </p>
                        ) : null}
                      </div>
                      {day.image ? (
                        <div className="an-itin__thumb">
                          <Image src={day.image.src} alt={day.image.alt} fill sizes="200px" />
                        </div>
                      ) : null}
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
