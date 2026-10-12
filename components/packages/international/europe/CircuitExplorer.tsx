"use client";

import { useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { MessageCircle } from "lucide-react";
import { enquireAbout } from "@/lib/europe/config";
import { MAP_H, MAP_W } from "@/lib/europe/projection";
import Flag from "../asia/Flag";

export type CircuitView = {
  id: string;
  title: string;
  duration: string;
  description: string;
  flags: string[];
  stops: { name: string; x: number; y: number }[];
  path: string;
};

/** Pads the view box around the route so short circuits are not lost in a continent-wide map. */
function viewBoxFor(stops: { x: number; y: number }[]) {
  const xs = stops.map((s) => s.x);
  const ys = stops.map((s) => s.y);
  const pad = 45;
  let x0 = Math.min(...xs) - pad;
  const x1 = Math.max(...xs) + pad;
  let y0 = Math.min(...ys) - pad;
  const y1 = Math.max(...ys) + pad;
  // Keep a pleasant 4:3 frame and a minimum zoom.
  const w = Math.max(x1 - x0, 200, ((y1 - y0) * 4) / 3);
  const h = (w * 3) / 4;
  const cx = (x0 + x1) / 2;
  const cy = (y0 + y1) / 2;
  x0 = Math.min(Math.max(cx - w / 2, 0), MAP_W - w);
  y0 = Math.min(Math.max(cy - h / 2, 0), MAP_H - h);
  return { x: x0, y: y0, w, h };
}

export default function CircuitExplorer({ land, circuits }: { land: string; circuits: CircuitView[] }) {
  const uid = useId();
  const [activeId, setActiveId] = useState(circuits[0].id);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const active = circuits.find((c) => c.id === activeId) ?? circuits[0];
  const vb = viewBoxFor(active.stops);
  // Keeps strokes, dots and labels a constant on-screen size at any zoom.
  const scale = vb.w / 460;

  const onKey = (e: React.KeyboardEvent, i: number) => {
    const dir = e.key === "ArrowDown" || e.key === "ArrowRight" ? 1 : e.key === "ArrowUp" || e.key === "ArrowLeft" ? -1 : 0;
    if (!dir) return;
    e.preventDefault();
    const next = (i + dir + circuits.length) % circuits.length;
    setActiveId(circuits[next].id);
    tabs.current[next]?.focus();
  };

  return (
    <div className="eu-circuit">
      <div className="eu-circuit__list" role="tablist" aria-label="Multi-country circuits" aria-orientation="vertical">
        {circuits.map((c, i) => {
          const selected = c.id === active.id;
          return (
            <button
              key={c.id}
              ref={(el) => {
                tabs.current[i] = el;
              }}
              type="button"
              role="tab"
              id={`${uid}-tab-${c.id}`}
              aria-selected={selected}
              aria-controls={`${uid}-panel`}
              tabIndex={selected ? 0 : -1}
              className={`eu-circuit__tab${selected ? " is-active" : ""}`}
              onClick={() => setActiveId(c.id)}
              onKeyDown={(e) => onKey(e, i)}
            >
              <span className="eu-circuit__flags" aria-hidden="true">
                {c.flags.slice(0, 5).map((iso) => (
                  <Flag key={iso} iso={iso} size={16} />
                ))}
              </span>
              <span className="eu-circuit__name">{c.title}</span>
              <span className="eu-circuit__dur">{c.duration}</span>
            </button>
          );
        })}
      </div>

      <div id={`${uid}-panel`} role="tabpanel" aria-labelledby={`${uid}-tab-${active.id}`} className="eu-circuit__panel">
        <div className="eu-circuit__map">
          <motion.svg
            viewBox={`${vb.x} ${vb.y} ${vb.w} ${vb.h}`}
            animate={{ viewBox: `${vb.x} ${vb.y} ${vb.w} ${vb.h}` }}
            transition={{ duration: 0.8, ease: [0.2, 0.7, 0.2, 1] }}
            role="img"
            aria-label={`Route: ${active.stops.map((s) => s.name).join(" to ")}`}
          >
            <path d={land} className="eu-circuit__land" style={{ strokeWidth: 4.4 }} />
            <motion.path
              key={active.id}
              d={active.path}
              className="eu-circuit__route"
              style={{ strokeWidth: 2.6 * scale }}
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.4 + active.stops.length * 0.3, ease: "easeInOut" }}
            />
            {active.stops.map((s, i) => (
              <motion.g
                key={`${active.id}-${s.name}`}
                initial={{ opacity: 0, scale: 0.4 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 + i * 0.3, duration: 0.3 }}
                style={{ transformOrigin: `${s.x}px ${s.y}px`, transformBox: "view-box" }}
              >
                <circle cx={s.x} cy={s.y} r={7 * scale} className="eu-circuit__halo" />
                <circle cx={s.x} cy={s.y} r={3.6 * scale} className="eu-circuit__stop" />
                <text x={s.x + 9 * scale} y={s.y - 7 * scale} className="eu-circuit__label" style={{ fontSize: 12.5 * scale }}>
                  {s.name}
                </text>
              </motion.g>
            ))}
          </motion.svg>
        </div>

        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={active.id}
            className="eu-circuit__info"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.25 }}
          >
            <p className="eu-circuit__meta">{active.duration} · {active.stops.length} stops</p>
            <h3 className="eu-circuit__title">{active.title}</h3>
            <p className="eu-circuit__desc">{active.description}</p>
            <a href={enquireAbout(`${active.duration} ${active.title}`)} target="_blank" rel="noopener noreferrer" className="pkg-btn asia-btn--gold">
              <MessageCircle size={16} aria-hidden="true" /> Customize This Circuit
              <span className="pkg-sr"> (opens WhatsApp)</span>
            </a>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
