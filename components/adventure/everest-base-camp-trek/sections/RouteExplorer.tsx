"use client";

/**
 * Interactive itinerary: an altitude profile + an accessible tabs widget.
 *  - Keyboard: ←/→ (and ↑/↓) move between days, Home/End jump to the ends.
 *  - Every panel is server-rendered (inactive ones use `hidden`), so the full
 *    itinerary text is crawlable while images for hidden days never load.
 *  - The profile is decorative (aria-hidden); the tabs carry the semantics.
 */
import { useId, useMemo, useRef, useState, type KeyboardEvent } from "react";
import type { ItineraryStage } from "../types";
import { stageKindLabel } from "../data/itinerary";
import SmartImage from "../ui/SmartImage";
import Icon from "../ui/Icon";

/** "≈ 5,545 m (high point)" → 5545 */
function parseElevation(value: string): number | null {
  const m = value.replace(/,/g, "").match(/(\d{3,5})/);
  return m ? Number(m[1]) : null;
}

const W = 1000;
const H = 180;
const PAD_X = 28;
const PAD_Y = 26;

export default function RouteExplorer({ stages }: { stages: ItineraryStage[] }) {
  const [active, setActive] = useState(0);
  const uid = useId();
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const profile = useMemo(() => {
    const elev = stages.map((s) => parseElevation(s.endElevation) ?? 0);
    const max = Math.max(...elev, 1);
    const min = Math.min(...elev.filter(Boolean), max);
    const range = Math.max(max - min, 1);
    const pts = elev.map((e, i) => ({
      x: PAD_X + (i * (W - PAD_X * 2)) / Math.max(stages.length - 1, 1),
      y: PAD_Y + (1 - (e - min) / range) * (H - PAD_Y * 2),
      e,
    }));
    // Smooth path via Catmull-Rom → cubic Bézier conversion.
    let d = `M ${pts[0].x} ${pts[0].y}`;
    for (let i = 0; i < pts.length - 1; i++) {
      const p0 = pts[i - 1] ?? pts[i];
      const p1 = pts[i];
      const p2 = pts[i + 1];
      const p3 = pts[i + 2] ?? p2;
      const c1x = p1.x + (p2.x - p0.x) / 6;
      const c1y = p1.y + (p2.y - p0.y) / 6;
      const c2x = p2.x - (p3.x - p1.x) / 6;
      const c2y = p2.y - (p3.y - p1.y) / 6;
      d += ` C ${c1x} ${c1y}, ${c2x} ${c2y}, ${p2.x} ${p2.y}`;
    }
    const area = `${d} L ${pts[pts.length - 1].x} ${H} L ${pts[0].x} ${H} Z`;
    return { pts, d, area };
  }, [stages]);

  const go = (i: number, focus = false) => {
    const next = (i + stages.length) % stages.length;
    setActive(next);
    if (focus) tabRefs.current[next]?.focus();
  };

  const onKeyDown = (e: KeyboardEvent<HTMLButtonElement>, i: number) => {
    const map: Record<string, number> = { ArrowRight: i + 1, ArrowDown: i + 1, ArrowLeft: i - 1, ArrowUp: i - 1, Home: 0, End: stages.length - 1 };
    if (e.key in map) {
      e.preventDefault();
      go(map[e.key], true);
    }
  };

  const activePt = profile.pts[active];

  return (
    <div className="ebc-route">
      {/* Altitude profile */}
      <div className="ebc-route__profile" aria-hidden="true" data-reveal="fade">
        <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none" className="ebc-route__svg">
          <defs>
            <linearGradient id={`${uid}-fill`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--ebc-teal)" stopOpacity="0.35" />
              <stop offset="100%" stopColor="var(--ebc-teal)" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d={profile.area} fill={`url(#${uid}-fill)`} />
          <path d={profile.d} fill="none" stroke="var(--ebc-teal)" strokeWidth="2" vectorEffect="non-scaling-stroke" />
          <line x1={activePt.x} x2={activePt.x} y1={activePt.y} y2={H} stroke="var(--ebc-gold)" strokeWidth="1.5" strokeDasharray="3 4" vectorEffect="non-scaling-stroke" />
        </svg>
        {/* Dots are HTML so they stay round regardless of SVG stretching. */}
        {profile.pts.map((p, i) => (
          <span
            key={stages[i].id}
            className={`ebc-route__dot${i === active ? " is-active" : ""}`}
            style={{ left: `${(p.x / W) * 100}%`, top: `${(p.y / H) * 100}%` }}
            onClick={() => go(i)}
          />
        ))}
        <span
          className={`ebc-route__peak${activePt.x / W < 0.12 ? " is-start" : activePt.x / W > 0.88 ? " is-end" : ""}`}
          style={{ left: `${(activePt.x / W) * 100}%`, top: `${(activePt.y / H) * 100}%` }}
        >
          {activePt.e ? `≈ ${activePt.e.toLocaleString("en-IN")} m` : ""}
        </span>
        <span className="ebc-route__axis ebc-route__axis--start">Kathmandu</span>
        <span className="ebc-route__axis ebc-route__axis--end">Kathmandu</span>
      </div>

      <div className="ebc-route__body">
        <div role="tablist" aria-label="Itinerary days" aria-orientation="vertical" className="ebc-route__tabs">
          {stages.map((s, i) => (
            <button
              key={s.id}
              ref={(el) => {
                tabRefs.current[i] = el;
              }}
              type="button"
              role="tab"
              id={`${uid}-tab-${s.id}`}
              aria-selected={i === active}
              aria-controls={`${uid}-panel-${s.id}`}
              tabIndex={i === active ? 0 : -1}
              className={`ebc-route__tab ebc-route__tab--${s.kind}${i === active ? " is-active" : ""}`}
              onClick={() => go(i)}
              onKeyDown={(e) => onKeyDown(e, i)}
            >
              <span className="ebc-route__tab-day">{s.day}</span>
              <span className="ebc-route__tab-title">{s.title}</span>
            </button>
          ))}
        </div>

        <div className="ebc-route__panels">
          {stages.map((s, i) => (
            <article
              key={s.id}
              role="tabpanel"
              id={`${uid}-panel-${s.id}`}
              aria-labelledby={`${uid}-tab-${s.id}`}
              hidden={i !== active}
              className="ebc-route__panel"
            >
              <div className="ebc-img ebc-route__media">
                <SmartImage image={s.image} sizes="(max-width: 1023px) 100vw, 60vw" />
                <span className={`ebc-route__kind ebc-route__kind--${s.kind}`}>{stageKindLabel[s.kind]}</span>
              </div>
              <div className="ebc-route__content">
                <p className="ebc-route__day">{s.day}</p>
                <h3 className="ebc-route__title">{s.title}</h3>
                <p className="ebc-route__desc">{s.description}</p>
                <dl className="ebc-route__facts">
                  <div>
                    <dt><Icon name="route" />Distance</dt>
                    <dd>{s.distance}</dd>
                  </div>
                  <div>
                    <dt><Icon name="clock" />Trekking time</dt>
                    <dd>{s.duration}</dd>
                  </div>
                  <div>
                    <dt><Icon name="altitude" />Elevation</dt>
                    <dd>
                      {s.startElevation === s.endElevation ? s.startElevation : `${s.startElevation} → ${s.endElevation}`}
                    </dd>
                  </div>
                  <div>
                    <dt><Icon name="bed" />Overnight</dt>
                    <dd>{s.accommodation}</dd>
                  </div>
                </dl>
                {s.note && (
                  <p className={`ebc-route__note${s.kind === "acclimatization" || s.kind === "summit" ? " ebc-route__note--safety" : ""}`}>
                    <Icon name={s.kind === "acclimatization" || s.kind === "summit" ? "alert" : "info"} />
                    {s.note}
                  </p>
                )}
                <div className="ebc-route__nav">
                  <button type="button" className="ebc-route__arrow" onClick={() => go(active - 1)} disabled={active === 0}>
                    <Icon name="chevron-left" />
                    <span>Previous day</span>
                  </button>
                  <span className="ebc-route__count" aria-live="polite">
                    Stage {active + 1} of {stages.length}
                  </span>
                  <button type="button" className="ebc-route__arrow" onClick={() => go(active + 1)} disabled={active === stages.length - 1}>
                    <span>Next day</span>
                    <Icon name="chevron-right" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
