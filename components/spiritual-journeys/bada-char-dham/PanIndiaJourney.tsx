"use client";

import { useEffect, useRef, useState } from "react";
import type { DirectionCard } from "./data/types";
import { ArrowDownIcon, InfoIcon } from "./shared/icons";
import "./PanIndiaJourney.css";

interface PanIndiaJourneyProps {
  heading: string;
  intro: string;
  routeLabel: string;
  points: DirectionCard[];
}

/**
 * Signature section: a compass (not a map — no accurate India geometry is
 * bundled, and an inaccurate map would mislead). The four Dhams light up in
 * the traditional order once the compass scrolls into view; each point is a
 * button that reveals a short detail panel.
 */
export default function PanIndiaJourney({ heading, intro, routeLabel, points }: PanIndiaJourneyProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [selected, setSelected] = useState(0);

  // Flag the compass as in-view directly on the DOM (no re-render needed);
  // CSS runs the N → W → E → S sequence from there.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      el.dataset.inview = "true";
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          el.dataset.inview = "true";
          io.disconnect();
        }
      },
      { threshold: 0.35 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const current = points[selected];

  return (
    <section className="bcd-section bcd-section--navy bcd-pan" aria-labelledby="bcd-pan-title">
      <div className="bcd-container bcd-pan__grid">
        <div className="bcd-pan__text">
          <header className="bcd-heading bcd-heading--dark">
            <h2 id="bcd-pan-title" className="bcd-heading__title">
              {heading}
            </h2>
            <p className="bcd-heading__intro">{intro}</p>
          </header>

          <ol className="bcd-pan__route" aria-label="Traditional order of the four Dhams">
            {points.map((p, i) => (
              <li key={p.dhamId} className={`bcd-pan__stop bcd-pan__stop--${p.direction}`}>
                <span className="bcd-pan__stop-dir">{p.direction}</span>
                <span className="bcd-pan__stop-name">{p.name}</span>
                <span className="bcd-pan__stop-state">{p.state}</span>
                {i < points.length - 1 && <ArrowDownIcon className="bcd-pan__stop-arrow" size={16} />}
              </li>
            ))}
          </ol>

          <p className="bcd-note">
            <InfoIcon size={18} />
            <span>{routeLabel}</span>
          </p>
        </div>

        <div className="bcd-pan__visual">
          <div ref={ref} className="bcd-compass">
            <svg className="bcd-compass__svg" viewBox="0 0 400 400" aria-hidden="true" focusable="false">
              <circle className="bcd-compass__ring" cx="200" cy="200" r="178" />
              <circle className="bcd-compass__ring bcd-compass__ring--dash" cx="200" cy="200" r="120" />
              {Array.from({ length: 72 }, (_, i) => {
                const a = (i * 5 * Math.PI) / 180;
                const long = i % 18 === 0;
                const r1 = long ? 162 : 170;
                return (
                  <line
                    key={i}
                    className="bcd-compass__tick"
                    x1={(200 + Math.sin(a) * r1).toFixed(2)}
                    y1={(200 - Math.cos(a) * r1).toFixed(2)}
                    x2={(200 + Math.sin(a) * 178).toFixed(2)}
                    y2={(200 - Math.cos(a) * 178).toFixed(2)}
                  />
                );
              })}
              <path
                className="bcd-compass__route"
                d="M200 52 Q108 108 52 200 Q200 248 348 200 Q292 292 200 348"
                pathLength={1}
              />
              <path className="bcd-compass__star" d="M200 150 212 188 250 200 212 212 200 250 188 212 150 200 188 188Z" />
              <text className="bcd-compass__letter" x="200" y="16">N</text>
              <text className="bcd-compass__letter" x="200" y="396">S</text>
              <text className="bcd-compass__letter" x="8" y="205">W</text>
              <text className="bcd-compass__letter" x="392" y="205">E</text>
            </svg>

            {points.map((p, i) => (
              <button
                key={p.dhamId}
                type="button"
                className={`bcd-compass__point bcd-compass__point--${p.direction}`}
                style={{ ["--i" as string]: i }}
                aria-pressed={selected === i}
                aria-controls="bcd-compass-detail"
                onClick={() => setSelected(i)}
              >
                <span className="bcd-compass__dot" aria-hidden="true" />
                <span className="bcd-compass__label">{p.name}</span>
              </button>
            ))}
          </div>

          <div id="bcd-compass-detail" className={`bcd-compass__detail bcd-dir--${current.direction}`} aria-live="polite">
            <p className="bcd-compass__detail-dir">
              {current.direction} · {current.environment}
            </p>
            <p className="bcd-compass__detail-name">{current.name}</p>
            <p className="bcd-compass__detail-state">{current.state}</p>
            <a className="bcd-compass__detail-link" href={`#${current.dhamId}`}>
              Read about {current.name}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
