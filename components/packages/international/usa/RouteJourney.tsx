"use client";

import { useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { BedDouble, Car, Clock, MessageCircle, Plane, Ship, SlidersHorizontal, TrainFront, type LucideIcon } from "lucide-react";
import type { LegMode } from "@/data/usa/circuits";
import { styleLabel } from "@/data/usa/travel-styles";
import { enquireAbout } from "@/lib/usa/config";
import { viewBoxFor } from "@/lib/usa/projection";
import type { JourneyView } from "@/lib/usa/routes";
import { CustomizeButton } from "./USAFilterControls";

const LEG: Record<LegMode, { icon: LucideIcon; label: string }> = {
  flight: { icon: Plane, label: "Flight" },
  rail: { icon: TrainFront, label: "Train" },
  road: { icon: Car, label: "Road" },
  cruise: { icon: Ship, label: "Cruise" },
};

/**
 * Animated journey map + timeline. The map zooms to the route, the line draws
 * itself stop by stop and a marker travels along it. `explorer` adds a
 * vertical list of journeys (Multi-City Circuits); `inline` shows tabs when
 * there is more than one route (regional sections).
 */
export default function RouteJourney({
  journeys,
  layout = "inline",
  tone = "light",
  label,
}: {
  journeys: JourneyView[];
  layout?: "inline" | "explorer";
  tone?: "light" | "dark";
  label: string;
}) {
  const uid = useId();
  const [activeId, setActiveId] = useState(journeys[0]?.id);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const j = journeys.find((x) => x.id === activeId) ?? journeys[0];
  if (!j) return null;

  const vb = viewBoxFor(j.route.points, 16 / 10, 80, 420);
  // Keeps strokes, dots and labels a constant on-screen size at any zoom.
  const k = vb.w / 520;
  const nights = j.stops.reduce((n, s) => n + (s.nights ?? 0), 0);
  const pathId = `jr-${uid.replace(/[^a-zA-Z0-9]/g, "")}`;

  const onKey = (e: React.KeyboardEvent, i: number) => {
    const dir = e.key === "ArrowDown" || e.key === "ArrowRight" ? 1 : e.key === "ArrowUp" || e.key === "ArrowLeft" ? -1 : 0;
    if (!dir) return;
    e.preventDefault();
    const next = (i + dir + journeys.length) % journeys.length;
    setActiveId(journeys[next].id);
    tabs.current[next]?.focus();
  };

  return (
    <div className={`us-journey us-journey--${layout} us-journey--${tone}`}>
      {journeys.length > 1 && (
        <div className="us-journey__tabs" role="tablist" aria-label={label} aria-orientation={layout === "explorer" ? "vertical" : "horizontal"}>
          {journeys.map((x, i) => {
            const selected = x.id === j.id;
            return (
              <button
                key={x.id}
                ref={(el) => {
                  tabs.current[i] = el;
                }}
                type="button"
                role="tab"
                id={`${uid}-tab-${x.id}`}
                aria-selected={selected}
                aria-controls={`${uid}-panel`}
                tabIndex={selected ? 0 : -1}
                className={`us-journey__tab${selected ? " is-active" : ""}`}
                onClick={() => setActiveId(x.id)}
                onKeyDown={(e) => onKey(e, i)}
              >
                <span className="us-journey__tab-name">{x.title}</span>
                <span className="us-journey__tab-dur">{x.duration} · {x.stops.length} stops</span>
              </button>
            );
          })}
        </div>
      )}

      <div
        id={`${uid}-panel`}
        role={journeys.length > 1 ? "tabpanel" : undefined}
        aria-labelledby={journeys.length > 1 ? `${uid}-tab-${j.id}` : undefined}
        className="us-journey__panel"
      >
        <div className="us-journey__map">
          <motion.svg
            viewBox={`${vb.x} ${vb.y} ${vb.w} ${vb.h}`}
            animate={{ viewBox: `${vb.x} ${vb.y} ${vb.w} ${vb.h}` }}
            transition={{ duration: 0.8, ease: [0.2, 0.7, 0.2, 1] }}
            role="img"
            aria-label={`Route map: ${j.stops.map((s) => s.name).join(" to ")}`}
          >
            <use href="#usa-land" className="us-journey__land" />
            <path id={pathId} d={j.route.path} className="us-journey__ghost" style={{ strokeWidth: 2 * k }} />
            <motion.path
              key={j.id}
              d={j.route.path}
              className="us-journey__route"
              style={{ strokeWidth: 3 * k }}
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6 + j.stops.length * 0.45, ease: "easeInOut" }}
            />
            <circle r={5 * k} className="us-journey__traveller" key={`t-${j.id}`}>
              <animateMotion dur={`${4 + j.stops.length * 1.5}s`} repeatCount="indefinite" begin="1.5s">
                <mpath href={`#${pathId}`} />
              </animateMotion>
            </circle>
            {j.route.points.map((p, i) => (
              <motion.g
                key={`${j.id}-${p.name}-${i}`}
                initial={{ opacity: 0, scale: 0.3 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.25 + i * 0.4, duration: 0.3 }}
                style={{ transformOrigin: `${p.x}px ${p.y}px`, transformBox: "view-box" }}
              >
                <circle cx={p.x} cy={p.y} r={9 * k} className="us-journey__halo" />
                <circle cx={p.x} cy={p.y} r={4.5 * k} className="us-journey__stop" />
                {/* Loops back to the start: label the first visit only. */}
                {j.route.points.findIndex((q) => q.name === p.name) === i && (
                  <text x={p.x + 10 * k} y={p.y - 8 * k} className="us-journey__label" style={{ fontSize: 13 * k }}>
                    {p.name}
                  </text>
                )}
              </motion.g>
            ))}
          </motion.svg>
        </div>

        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={j.id}
            className="us-journey__info"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.25 }}
          >
            <p className="us-journey__meta">
              <span><Clock size={14} aria-hidden="true" /> {j.duration}</span>
              {nights > 0 && <span><BedDouble size={14} aria-hidden="true" /> {nights} nights suggested</span>}
            </p>
            <h3 className="us-journey__title">{j.title}</h3>
            <p className="us-journey__desc">{j.description}</p>

            <ol className="us-journey__timeline" aria-label="Journey timeline">
              {j.stops.map((s, i) => {
                const leg = s.by ? LEG[s.by] : null;
                return (
                  <motion.li
                    key={`${s.name}-${i}`}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.08 }}
                  >
                    {leg && (
                      <span className="us-journey__leg">
                        <leg.icon size={13} aria-hidden="true" /> {leg.label}
                      </span>
                    )}
                    <span className="us-journey__stopname">
                      <span className="us-journey__dot" aria-hidden="true" />
                      <strong>{s.name}</strong>
                      {s.nights ? <em>{s.nights} {s.nights === 1 ? "night" : "nights"}</em> : null}
                    </span>
                    {s.note && <span className="us-journey__note">{s.note}</span>}
                  </motion.li>
                );
              })}
            </ol>

            <dl className="us-journey__facts">
              <div><dt>Transport options</dt><dd>{j.transport.join(" · ")}</dd></div>
              <div><dt>Travel style</dt><dd>{j.styles.map(styleLabel).join(" · ")}</dd></div>
            </dl>

            <div className="us-journey__cta">
              <CustomizeButton title={`${j.duration} ${j.title}`} destinations={j.destinations} className="pkg-btn asia-btn--gold">
                <SlidersHorizontal size={16} aria-hidden="true" /> Customize this route
              </CustomizeButton>
              <a href={enquireAbout(`${j.duration} ${j.title}`)} target="_blank" rel="noopener noreferrer" className={`pkg-btn ${tone === "dark" ? "asia-btn--glass" : "pkg-btn--outline"}`}>
                <MessageCircle size={16} aria-hidden="true" /> Enquire
                <span className="pkg-sr"> about {j.title} (opens WhatsApp)</span>
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
