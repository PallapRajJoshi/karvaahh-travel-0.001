"use client";

import Link from "next/link";
import { useId, useRef, useState, type KeyboardEvent } from "react";
import type { RouteSegment, RouteStop } from "../data/types";
import { PROFILE, columnX, elevationToY, smoothPath } from "../lib/profile";
import { Icon } from "../ui/Icon";
import { JourneyImage } from "../ui/JourneyImage";
import "./route.css";

interface JourneyRouteProps {
  heading: string;
  intro: string;
  caption: string;
  stops: RouteStop[];
  segments: RouteSegment[];
}

const GRID = [1000, 2000, 3000];

export function JourneyRoute({ heading, intro, caption, stops, segments }: JourneyRouteProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const uid = useId();

  const n = stops.length;
  const points = stops.map((s, i) => ({ x: columnX(i, n), y: elevationToY(s.elevationM) }));
  const first = points[0];
  const last = points[n - 1];
  if (!first || !last) return null;

  // Extend the line to both edges so it reads as a continuous journey.
  const linePts = [{ x: 0, y: first.y }, ...points, { x: PROFILE.width, y: last.y - 6 }];
  const line = smoothPath(linePts);
  const area = `${line} L${PROFILE.width} ${PROFILE.height} L0 ${PROFILE.height} Z`;

  const emphasis = segments.find((s) => s.emphasis);
  const emFrom = emphasis ? stops.findIndex((s) => s.id === emphasis.from) : -1;
  const emTo = emphasis ? stops.findIndex((s) => s.id === emphasis.to) : -1;
  const emFromPt = points[emFrom];
  const emToPt = points[emTo];

  const focusTab = (i: number) => {
    const next = (i + n) % n;
    setActiveIndex(next);
    tabRefs.current[next]?.focus();
  };

  const onKeyDown = (e: KeyboardEvent<HTMLButtonElement>, i: number) => {
    switch (e.key) {
      case "ArrowRight":
      case "ArrowDown":
        e.preventDefault();
        focusTab(i + 1);
        break;
      case "ArrowLeft":
      case "ArrowUp":
        e.preventDefault();
        focusTab(i - 1);
        break;
      case "Home":
        e.preventDefault();
        focusTab(0);
        break;
      case "End":
        e.preventDefault();
        focusTab(n - 1);
        break;
    }
  };

  return (
    <section id="route" className="pmy-section pmy-route" aria-labelledby={`${uid}-title`}>
      <div className="pmy-container">
        <header className="pmy-heading pmy-heading--dark" data-reveal>
          <p className="pmy-heading__kicker">The route</p>
          <h2 id={`${uid}-title`} className="pmy-heading__title pmy-heading__title--h2">{heading}</h2>
          <div className="pmy-heading__intro"><p>{intro}</p></div>
        </header>

        <figure className="pmy-route__figure">
          <div className="pmy-route__profile" data-reveal>
            <svg
              className="pmy-route__svg"
              viewBox={`0 0 ${PROFILE.width} ${PROFILE.height}`}
              aria-hidden="true"
              focusable="false"
            >
              <defs>
                <linearGradient id={`${uid}-area`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#d8bf8a" stopOpacity="0.28" />
                  <stop offset="100%" stopColor="#d8bf8a" stopOpacity="0" />
                </linearGradient>
                <linearGradient id={`${uid}-line`} x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#e2b37a" />
                  <stop offset="100%" stopColor="#f2f5f7" />
                </linearGradient>
                {emFromPt && emToPt ? (
                  <clipPath id={`${uid}-em`}>
                    <rect x={emFromPt.x} y="0" width={emToPt.x - emFromPt.x} height={PROFILE.height} />
                  </clipPath>
                ) : null}
              </defs>

              {GRID.map((m) => (
                <g key={m} className="pmy-route__grid">
                  <line x1="0" x2={PROFILE.width} y1={elevationToY(m)} y2={elevationToY(m)} />
                  <text x="6" y={elevationToY(m) - 6}>{m.toLocaleString("en-IN")} m</text>
                </g>
              ))}

              <path d={area} fill={`url(#${uid}-area)`} className="pmy-route__area" />
              <path d={line} className="pmy-route__line" stroke={`url(#${uid}-line)`} pathLength={1} />
              {emFromPt && emToPt ? (
                <>
                  <path d={line} className="pmy-route__line pmy-route__line--em" clipPath={`url(#${uid}-em)`} pathLength={1} />
                  <text
                    className="pmy-route__seg-label"
                    x={(emFromPt.x + emToPt.x) / 2 + 14}
                    y={(emFromPt.y + emToPt.y) / 2 + 34}
                    textAnchor="middle"
                  >
                    {emphasis?.label}
                  </text>
                </>
              ) : null}

              {points.map((p, i) => (
                <g
                  key={stops[i]!.id}
                  className={`pmy-route__marker${i === activeIndex ? " is-active" : ""}`}
                  style={{ transitionDelay: `${0.4 + i * 0.18}s` }}
                >
                  <line x1={p.x} x2={p.x} y1={p.y + 10} y2={PROFILE.bottom} className="pmy-route__stem" />
                  <circle cx={p.x} cy={p.y} r={14} className="pmy-route__halo" />
                  <circle cx={p.x} cy={p.y} r={6} className="pmy-route__dot" />
                </g>
              ))}
            </svg>
          </div>

          <div className="pmy-route__tabs" role="tablist" aria-label="Stops on the journey">
            {stops.map((stop, i) => {
              const selected = i === activeIndex;
              return (
                <button
                  key={stop.id}
                  ref={(el) => { tabRefs.current[i] = el; }}
                  id={`${uid}-tab-${stop.id}`}
                  role="tab"
                  type="button"
                  aria-selected={selected}
                  aria-controls={`${uid}-panel-${stop.id}`}
                  tabIndex={selected ? 0 : -1}
                  className={`pmy-route__tab${selected ? " is-active" : ""}`}
                  onClick={() => setActiveIndex(i)}
                  onKeyDown={(e) => onKeyDown(e, i)}
                >
                  <span className="pmy-route__tab-dot" aria-hidden="true" />
                  <span className="pmy-route__tab-name">{stop.name}</span>
                  <span className="pmy-route__tab-elev">{stop.elevationLabel}</span>
                </button>
              );
            })}
          </div>
          <figcaption className="pmy-route__caption">{caption}</figcaption>
        </figure>

        {stops.map((stop, i) => {
          const arriving = segments.find((s) => s.to === stop.id);
          return (
            <div
              key={stop.id}
              id={`${uid}-panel-${stop.id}`}
              role="tabpanel"
              aria-labelledby={`${uid}-tab-${stop.id}`}
              hidden={i !== activeIndex}
              className="pmy-route__panel"
              tabIndex={0}
            >
              {stop.image ? (
                <div className="pmy-route__panel-media">
                  <JourneyImage image={stop.image} sizes="(max-width: 900px) 100vw, 40vw" />
                </div>
              ) : null}
              <div className="pmy-route__panel-body">
                <p className="pmy-route__role">
                  <Icon name={stop.icon} size={18} /> {stop.role}
                </p>
                <h3 className="pmy-route__name">{stop.name}</h3>
                <p className="pmy-route__summary">{stop.summary}</p>
                <ul className="pmy-ticklist pmy-route__highlights">
                  {stop.highlights.map((h) => <li key={h}>{h}</li>)}
                </ul>
                {arriving ? (
                  <p className="pmy-route__arrive">
                    Getting here: {arriving.label.charAt(0).toLowerCase() + arriving.label.slice(1)}
                  </p>
                ) : null}
                {stop.note ? <p className="pmy-note pmy-note--dark">{stop.note}</p> : null}
                {stop.related ? (
                  <Link className="pmy-route__related" href={stop.related.href}>{stop.related.label}</Link>
                ) : null}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
