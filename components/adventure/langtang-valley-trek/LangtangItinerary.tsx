"use client";

import { useCallback, useState } from "react";
import { itinerary, itinerarySettings } from "@/data/adventure/langtang-valley-trek";
import LangtangImage from "./LangtangImage";
import LangtangIcon from "./LangtangIcon";
import "./LangtangItinerary.css";

const fmt = (m: number) => `${m.toLocaleString("en-IN")} m`;
const MODE_LABEL = { arrival: "Arrival", drive: "Drive", trek: "Trek", explore: "Explore" } as const;

/* Elevation profile geometry */
const W = 900, H = 200, PAD_X = 30, PAD_TOP = 22, PAD_BOTTOM = 26;
const MIN_E = 1000, MAX_E = 5200;
const x = (i: number) => PAD_X + (i * (W - PAD_X * 2)) / (itinerary.length - 1);
const y = (m: number) => PAD_TOP + (1 - (m - MIN_E) / (MAX_E - MIN_E)) * (H - PAD_TOP - PAD_BOTTOM);

function Profile({ active, onPick }: { active: number | null; onPick: (day: number) => void }) {
  const pts = itinerary.map((d, i) => [x(i), y(d.sleepElevationM ?? MIN_E)] as const);
  const line = pts.map(([px, py], i) => `${i ? "L" : "M"}${px.toFixed(1)},${py.toFixed(1)}`).join(" ");
  const area = `${line} L${x(itinerary.length - 1)},${H - PAD_BOTTOM} L${x(0)},${H - PAD_BOTTOM} Z`;
  const peakIdx = itinerary.findIndex((d) => d.highPointM);
  const peak = peakIdx >= 0 ? itinerary[peakIdx] : null;

  return (
    <figure className="lt-profile" aria-labelledby="lt-profile-cap">
      <svg viewBox={`0 0 ${W} ${H}`} className="lt-profile__svg" role="img" aria-label="Approximate overnight elevation for each day of the sample itinerary">
        <defs>
          <linearGradient id="lt-prof-fill" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0" stopColor="#2A7F82" stopOpacity="0.35" />
            <stop offset="1" stopColor="#2A7F82" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[2000, 3000, 4000, 5000].map((m) => (
          <g key={m}>
            <line x1={PAD_X} x2={W - PAD_X} y1={y(m)} y2={y(m)} className="lt-profile__grid" />
            <text x={W - PAD_X} y={y(m) - 5} className="lt-profile__axis" textAnchor="end">{fmt(m)}</text>
          </g>
        ))}
        <path d={area} fill="url(#lt-prof-fill)" />
        <path d={line} className="lt-profile__line" />
        {peak ? (
          <g>
            <line x1={x(peakIdx)} x2={x(peakIdx)} y1={y(peak.sleepElevationM ?? MIN_E)} y2={y(peak.highPointM!)} className="lt-profile__spike" />
            <text x={x(peakIdx) + 8} y={y(peak.highPointM!) + 4} className="lt-profile__peak">Tserko Ri ≈ {fmt(peak.highPointM!)}</text>
          </g>
        ) : null}
        {pts.map(([px, py], i) => (
          <circle key={i} cx={px} cy={py} r={active === itinerary[i].day ? 7 : 4.5} className={`lt-profile__dot ${active === itinerary[i].day ? "is-active" : ""}`} />
        ))}
      </svg>
      <ol className="lt-profile__days">
        {itinerary.map((d, i) => (
          <li key={d.day} style={{ left: `${(x(i) / W) * 100}%` }}>
            <button type="button" className={`lt-profile__chip ${active === d.day ? "is-active" : ""}`} onClick={() => onPick(d.day)}
              aria-label={`Day ${d.day}: ${d.title}${d.sleepElevationM ? `, about ${fmt(d.sleepElevationM)}` : ""}`}>
              <span>D{d.day}</span>
            </button>
          </li>
        ))}
      </ol>
      <figcaption id="lt-profile-cap" className="lt-profile__cap">Approximate overnight elevation by day · select a day to open it</figcaption>
    </figure>
  );
}

export default function LangtangItinerary() {
  const [open, setOpen] = useState<Set<number>>(() => new Set([1]));
  const [active, setActive] = useState<number | null>(1);
  const allOpen = open.size === itinerary.length;
  const show = itinerarySettings.showEstimates;

  const toggle = useCallback((day: number) => {
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(day)) next.delete(day);
      else next.add(day);
      return next;
    });
    setActive(day);
  }, []);

  const pick = useCallback((day: number) => {
    setOpen((prev) => new Set(prev).add(day));
    setActive(day);
    requestAnimationFrame(() => {
      const el = document.getElementById(`lt-day-${day}`);
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      el?.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "center" });
      (el?.querySelector("button") as HTMLButtonElement | null)?.focus({ preventScroll: true });
    });
  }, []);

  return (
    <section className="lt-section lt-section--deep lt-itin" id="itinerary" aria-labelledby="lt-itin-title">
      <div className="lt-container">
        <header className="lt-heading lt-heading--dark lt-itin__head" data-reveal>
          <p className="lt-heading__eyebrow">Sample Route · {itinerary.length} Days</p>
          <h2 className="lt-heading__title" id="lt-itin-title">Your Journey Through Langtang Valley</h2>
          <p className="lt-heading__intro">From Kathmandu’s streets to glacier viewpoints near 5,000 m — and back again.</p>
        </header>

        {show ? <div data-reveal><Profile active={active} onPick={pick} /></div> : null}

        <div className="lt-itin__bar">
          <p className="lt-itin__note"><LangtangIcon name="info" size={18} />{itinerarySettings.note}</p>
          <button type="button" className="lt-itin__all" onClick={() => setOpen(allOpen ? new Set() : new Set(itinerary.map((d) => d.day)))}>
            {allOpen ? "Collapse all days" : "Expand all days"}
          </button>
        </div>

        <ol className="lt-timeline">
          {itinerary.map((d) => {
            const isOpen = open.has(d.day);
            return (
              <li key={d.day} id={`lt-day-${d.day}`} className={`lt-day ${isOpen ? "is-open" : ""} ${active === d.day ? "is-active" : ""}`}>
                <span className="lt-day__node" aria-hidden="true" />
                <h3 className="lt-day__h">
                  <button type="button" className="lt-day__toggle" aria-expanded={isOpen} aria-controls={`lt-day-panel-${d.day}`} onClick={() => toggle(d.day)}>
                    <span className="lt-day__num">Day {String(d.day).padStart(2, "0")}</span>
                    <span className="lt-day__title">{d.title}</span>
                    <span className="lt-day__mode">{MODE_LABEL[d.mode]}</span>
                    <span className="lt-day__icon" aria-hidden="true"><LangtangIcon name="plus" size={18} /></span>
                  </button>
                </h3>
                <div className="lt-day__panel" id={`lt-day-panel-${d.day}`} role="region" aria-label={`Day ${d.day} details`} hidden={!isOpen}>
                  <div className="lt-day__content">
                    <div>
                      <p className="lt-day__route">{d.from === d.to ? d.from : <>{d.from} <LangtangIcon name="arrow" size={14} /> {d.to}</>}</p>
                      <p className="lt-day__text">{d.text}</p>
                      {show && (d.sleepElevationM || d.walking) ? (
                        <ul className="lt-day__stats">
                          {d.sleepElevationM ? <li><LangtangIcon name="altitude" size={16} />Overnight ≈ {fmt(d.sleepElevationM)}</li> : null}
                          {d.walking ? <li><LangtangIcon name="clock" size={16} />{d.walking} <em>approx.</em></li> : null}
                        </ul>
                      ) : null}
                    </div>
                    {d.image ? (
                      <div className="lt-day__thumb">
                        <LangtangImage id={d.image} sizes="(max-width: 640px) 100vw, 240px" />
                      </div>
                    ) : null}
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
