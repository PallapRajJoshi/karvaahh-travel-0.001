"use client";

import Link from "next/link";
import { useState } from "react";
import { DESTINATIONS, MAP_H, MAP_W, OUTLINE_PATH, ROUTES, connector, project } from "../data/destinations";
import { Icon } from "../shared/Icon";
import "./DestinationMap.css";

const POINTS = Object.fromEntries(DESTINATIONS.map((d) => [d.id, project(d.lon, d.lat)]));

export function DestinationMap({ note }: { note: string }) {
  const [activeId, setActiveId] = useState(DESTINATIONS[0].id);
  const [routeId, setRouteId] = useState("extended");

  const active = DESTINATIONS.find((d) => d.id === activeId) ?? DESTINATIONS[0];
  const route = ROUTES.find((r) => r.id === routeId) ?? ROUTES[0];

  const segments = route.stops.slice(1).map((id, i) => connector(POINTS[route.stops[i]], POINTS[id]));

  return (
    <div className="et-map">
      <div className="et-map__stage">
        <div className="et-map__canvas" style={{ aspectRatio: `${MAP_W} / ${MAP_H}` }}>
          <svg viewBox={`0 0 ${MAP_W} ${MAP_H}`} className="et-map__svg" role="img" aria-label="Schematic map of Nepal showing educational destinations">
            <defs>
              <linearGradient id="et-map-fill" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#2a7f82" stopOpacity="0.35" />
                <stop offset="1" stopColor="#123b5d" stopOpacity="0.55" />
              </linearGradient>
            </defs>
            <path d={OUTLINE_PATH} className="et-map__land" fill="url(#et-map-fill)" />
            {segments.map((d, i) => (
              <path
                key={`${route.id}-${i}`}
                d={d}
                pathLength={1}
                className="et-map__route"
                style={{ animationDelay: `${i * 0.9}s` }}
              />
            ))}
          </svg>

          {DESTINATIONS.map((d) => {
            const p = POINTS[d.id];
            const isActive = d.id === activeId;
            return (
              <button
                key={d.id}
                type="button"
                className={`et-map__marker ${isActive ? "is-active" : ""}`}
                style={{ left: `${(p.x / MAP_W) * 100}%`, top: `${(p.y / MAP_H) * 100}%` }}
                onMouseEnter={() => setActiveId(d.id)}
                onFocus={() => setActiveId(d.id)}
                onClick={() => setActiveId(d.id)}
                aria-pressed={isActive}
                aria-label={`${d.name}: ${d.learningFocus}`}
              >
                <span className="et-map__pulse" aria-hidden="true" />
                <span className="et-map__dot" aria-hidden="true" />
                <span className="et-map__name">{d.name}</span>
              </button>
            );
          })}
        </div>

        <div className="et-map__controls" role="group" aria-label="Sample route concept">
          <span className="et-map__controls-label">Sample route concept</span>
          {ROUTES.map((r) => (
            <button
              key={r.id}
              type="button"
              className={`et-map__toggle ${r.id === routeId ? "is-on" : ""}`}
              aria-pressed={r.id === routeId}
              onClick={() => setRouteId(r.id)}
            >
              {r.label}
            </button>
          ))}
        </div>
        <p className="et-note">{note}</p>
      </div>

      <aside className="et-map__panel" aria-live="polite">
        <p className="et-map__panel-eyebrow">Learning destination</p>
        <h3 className="et-map__panel-title">{active.name}</h3>
        {active.includes ? (
          <p className="et-map__includes">Includes {active.includes.join(" · ")}</p>
        ) : null}
        <p className="et-map__focus">{active.learningFocus}</p>

        <p className="et-map__label">Learning themes</p>
        <p className="et-map__chips">
          {active.themes.map((t) => (
            <span key={t} className="et-chip">{t}</span>
          ))}
        </p>

        <p className="et-map__label">Suggested age group</p>
        <p className="et-map__value">{active.ageGroup}</p>

        <p className="et-map__label">Example activities</p>
        <ul className="et-map__list">
          {active.activities.map((a) => (
            <li key={a}>{a}</li>
          ))}
        </ul>

        {active.link ? (
          <Link href={active.link} className="et-map__more">
            Explore the region <Icon name="arrow" size={16} />
          </Link>
        ) : null}
      </aside>
    </div>
  );
}
