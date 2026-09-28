"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";

export interface RouteStop {
  slug: string;
  step: number;
  name: string;
  state: string;
  region: string;
  summary: string;
  anchor: string;
  x: number;
  y: number;
  label: "left" | "right" | "below";
}

interface Props {
  stops: RouteStop[];
  graphicNote: string;
}

const pad = (n: number) => String(n).padStart(2, "0");

export default function IndiaRouteGraphic({ stops, graphicNote }: Props) {
  const [active, setActive] = useState(0);
  const [phase, setPhase] = useState<"static" | "armed" | "drawn">("static");
  const figureRef = useRef<HTMLDivElement>(null);

  // The route is fully visible without JS ("static"). With JS we arm it, then draw once when seen.
  useEffect(() => {
    const el = figureRef.current;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!el || reduce || !("IntersectionObserver" in window)) return;

    setPhase("armed");
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setPhase("drawn");
          io.disconnect();
        }
      },
      { threshold: 0.35 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const path = stops.map((s, i) => `${i === 0 ? "M" : "L"}${s.x} ${s.y}`).join(" ");
  const current = stops[active];

  return (
    <div className="jyl-route__layout">
      <div ref={figureRef} className={`jyl-route__figure jyl-route__figure--${phase}`}>
        <svg
          viewBox="-24 0 444 480"
          className="jyl-route__svg"
          role="img"
          aria-labelledby="jyl-route-svg-title jyl-route-svg-desc"
        >
          <title id="jyl-route-svg-title">Illustrative route connecting the twelve Jyotirlingas</title>
          <desc id="jyl-route-svg-desc">
            {`Twelve points placed by approximate latitude and longitude, joined in this order: ${stops
              .map((s) => s.name)
              .join(", ")}.`}
          </desc>

          {/* faint latitude guides — orientation only, not a map */}
          <g className="jyl-route__guides" aria-hidden="true">
            {[80, 180, 280, 380].map((y) => (
              <line key={y} x1="-24" x2="420" y1={y} y2={y} />
            ))}
          </g>

          <path d={path} className="jyl-route__path-base" pathLength={1} aria-hidden="true" />
          <path d={path} className="jyl-route__path" pathLength={1} aria-hidden="true" />

          <g aria-hidden="true">
            {stops.map((s, i) => (
              <g
                key={s.slug}
                className={`jyl-route__stop${i === active ? " is-active" : ""}`}
                transform={`translate(${s.x} ${s.y})`}
                onClick={() => setActive(i)}
                style={{ "--i": i } as CSSProperties}
              >
                <circle r="16" className="jyl-route__hit" />
                <circle r="9" className="jyl-route__halo" />
                <circle r="4" className="jyl-route__dot" />
                <text
                  x={s.label === "left" ? -10 : s.label === "below" ? 0 : 10}
                  y={s.label === "below" ? 22 : 4}
                  textAnchor={s.label === "left" ? "end" : s.label === "below" ? "middle" : "start"}
                  className="jyl-route__label"
                >
                  {s.name}
                </text>
              </g>
            ))}
          </g>
        </svg>
        <p className="jyl-route__graphic-note">{graphicNote}</p>
      </div>

      <div className="jyl-route__panel">
        <ol className="jyl-route__stops" aria-label="Stops on the illustrative route">
          {stops.map((s, i) => (
            <li key={s.slug}>
              <button
                type="button"
                className="jyl-route__stop-btn"
                aria-pressed={i === active}
                onClick={() => setActive(i)}
              >
                <span className="jyl-route__stop-num">{pad(s.step)}</span>
                <span className="jyl-route__stop-name">{s.name}</span>
                <span className="jyl-route__stop-state">{s.state}</span>
              </button>
            </li>
          ))}
        </ol>

        <div className="jyl-route__detail" aria-live="polite">
          <p className="jyl-route__detail-meta">
            Stop {current.step} of {stops.length}, {current.region}
          </p>
          <p className="jyl-route__detail-name">{current.name}</p>
          <p className="jyl-route__detail-text">{current.summary}</p>
          <a href={current.anchor} className="jyl-route__detail-link">
            Read about {current.name}
          </a>
        </div>
      </div>
    </div>
  );
}
