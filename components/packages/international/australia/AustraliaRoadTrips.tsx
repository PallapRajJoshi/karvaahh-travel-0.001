"use client";

import { useId, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { CalendarDays, Car, Clock, Compass, Info, MessageCircle, Route, Sparkles, UserRound, Users, type LucideIcon } from "lucide-react";
import { australiaImage } from "@/data/australia/images";
import { australiaRoadTrips, travelModes, type TravelMode } from "@/data/australia/roadTrips";
import { enquireAbout } from "@/lib/australia/config";
import { viewBoxFor } from "@/lib/australia/projection";
import { routeView } from "@/lib/australia/routes";
import SafeImage from "../../SafeImage";

const MODE_ICON: Record<TravelMode, LucideIcon> = { "self-drive": Car, chauffeur: UserRound, guided: Compass, escorted: Users };

/**
 * Road-trip explorer: a route map that draws itself stop by stop, approximate
 * distance and drive time, season, highlights and the ways to do it.
 * Self-drive is one option among four; nobody is assumed to want to drive.
 */
export default function AustraliaRoadTrips() {
  const uid = useId();
  const [activeId, setActiveId] = useState(australiaRoadTrips[0].id);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const t = australiaRoadTrips.find((r) => r.id === activeId) ?? australiaRoadTrips[0];
  const view = useMemo(() => routeView(t.stops), [t]);
  const vb = viewBoxFor(view.points, 4 / 3, 40, 120);
  const k = vb.w / 420;
  const img = australiaImage(t.image);
  const uniqueStops = t.stops.filter((s, i) => t.stops.findIndex((x) => x.name === s.name) === i);

  const onKey = (e: React.KeyboardEvent, i: number) => {
    const dir = e.key === "ArrowRight" || e.key === "ArrowDown" ? 1 : e.key === "ArrowLeft" || e.key === "ArrowUp" ? -1 : 0;
    if (!dir) return;
    e.preventDefault();
    const next = (i + dir + australiaRoadTrips.length) % australiaRoadTrips.length;
    setActiveId(australiaRoadTrips[next].id);
    tabs.current[next]?.focus();
  };

  return (
    <div className="us-road">
      <div className="us-road__tabs" role="tablist" aria-label="Australia road trips">
        {australiaRoadTrips.map((r, i) => {
          const on = r.id === t.id;
          return (
            <button
              key={r.id}
              ref={(el) => {
                tabs.current[i] = el;
              }}
              type="button"
              role="tab"
              id={`${uid}-${r.id}`}
              aria-selected={on}
              aria-controls={`${uid}-panel`}
              tabIndex={on ? 0 : -1}
              className={`us-road__tab${on ? " is-active" : ""}`}
              onClick={() => setActiveId(r.id)}
              onKeyDown={(e) => onKey(e, i)}
            >
              <Route size={15} aria-hidden="true" /> {r.title}
            </button>
          );
        })}
      </div>

      <div id={`${uid}-panel`} role="tabpanel" aria-labelledby={`${uid}-${t.id}`} className="us-road__panel">
        <div className="us-road__visual">
          <div className="us-road__photo" aria-hidden="true">
            <AnimatePresence initial={false}>
              <motion.div key={t.id} className="us-road__photo-in" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.6 }}>
                <SafeImage src={img?.src} alt="" sizes="(min-width: 1024px) 50vw, 100vw" className="asia-media__img" />
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="us-road__map">
            <motion.svg
              viewBox={`${vb.x} ${vb.y} ${vb.w} ${vb.h}`}
              animate={{ viewBox: `${vb.x} ${vb.y} ${vb.w} ${vb.h}` }}
              transition={{ duration: 0.8, ease: [0.2, 0.7, 0.2, 1] }}
              role="img"
              aria-label={`Route map: ${uniqueStops.map((s) => s.name).join(" to ")}`}
            >
              <use href="#au-land" className="us-journey__land" />
              <motion.path
                key={t.id}
                d={view.path}
                className="us-road__route"
                style={{ strokeWidth: 3.4 * k }}
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.5 + t.stops.length * 0.35, ease: "easeInOut" }}
              />
              {view.points.map((p, i) =>
                view.points.findIndex((q) => q.name === p.name) === i ? (
                  <g key={`${t.id}-${p.name}`}>
                    <circle cx={p.x} cy={p.y} r={7 * k} className="us-road__stop" />
                    <text x={p.x} y={p.y + 2.6 * k} className="us-road__num" style={{ fontSize: 8 * k }} textAnchor="middle">
                      {uniqueStops.findIndex((s) => s.name === p.name) + 1}
                    </text>
                  </g>
                ) : null,
              )}
            </motion.svg>
          </div>
        </div>

        <AnimatePresence mode="wait" initial={false}>
          <motion.div key={t.id} className="us-road__info" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.25 }}>
            <h3 className="us-road__title">{t.title}</h3>
            <p className="us-road__desc">{t.description}</p>
            <dl className="us-road__facts">
              <div><dt><Route size={14} aria-hidden="true" /> Distance</dt><dd>{t.distance}</dd></div>
              <div><dt><Clock size={14} aria-hidden="true" /> Drive time</dt><dd>{t.driveTime}</dd></div>
              <div><dt><CalendarDays size={14} aria-hidden="true" /> Suggested</dt><dd>{t.duration}</dd></div>
              <div><dt><CalendarDays size={14} aria-hidden="true" /> Season</dt><dd>{t.season}</dd></div>
            </dl>
            <ol className="us-road__stops" aria-label="Stops">
              {uniqueStops.map((s, i) => (
                <li key={s.name}><span aria-hidden="true">{i + 1}</span> {s.name}</li>
              ))}
            </ol>
            <p className="us-road__modes-h">Highlights</p>
            <ul className="au-road__highlights">
              {t.highlights.map((h) => (
                <li key={h}><Sparkles size={13} aria-hidden="true" /> {h}</li>
              ))}
            </ul>
            <p className="us-road__modes-h">Ways to do it</p>
            <ul className="us-road__modes">
              {travelModes.map((m) => {
                const Icon = MODE_ICON[m.id];
                const ok = t.modes.includes(m.id);
                return (
                  <li key={m.id} className={ok ? "" : "is-off"} title={m.text}>
                    <Icon size={15} aria-hidden="true" /> {m.label}
                    {!ok && <span className="pkg-sr"> (not usual for this route)</span>}
                  </li>
                );
              })}
            </ul>
            {t.notes?.map((n) => (
              <p key={n} className="us-note"><Info size={14} aria-hidden="true" /> {n}</p>
            ))}
            <a href={enquireAbout(`${t.title} road trip (Australia)`)} target="_blank" rel="noopener noreferrer" className="pkg-btn asia-btn--navy">
              <MessageCircle size={16} aria-hidden="true" /> Plan this road trip<span className="pkg-sr"> (opens WhatsApp)</span>
            </a>
          </motion.div>
        </AnimatePresence>
      </div>

      <ul className="us-road__legend">
        {travelModes.map((m) => {
          const Icon = MODE_ICON[m.id];
          return (
            <li key={m.id}>
              <span className="us-road__legend-icon"><Icon size={18} aria-hidden="true" /></span>
              <strong>{m.label}</strong>
              <span>{m.text}</span>
            </li>
          );
        })}
      </ul>
      <p className="us-note">
        <Info size={14} aria-hidden="true" /> Distances and drive times are approximate totals before detours and stops. Road conditions,
        closures and seasonal access change and are checked before travel. Don&apos;t want to drive? Every route works with a private chauffeur or a guided tour.
      </p>
    </div>
  );
}
