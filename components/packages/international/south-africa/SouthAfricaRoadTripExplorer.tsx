"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, Clock, Sun } from "lucide-react";
import { saDestinationName } from "@/data/south-africa/destinations";
import { roadTrips, travelModes, type TravelMode } from "@/data/south-africa/routes";
import { styleById } from "@/data/south-africa/styles";
import { customize } from "@/lib/south-africa/explorer";
import { ZaHead } from "./ZaPrimitives";
import ZaMiniMap from "./ZaMiniMap";

/**
 * Road trips by travel mode. Self-drive is one option among four; routes
 * show only where the chosen mode suits them.
 */
export default function SouthAfricaRoadTripExplorer() {
  const [mode, setMode] = useState<TravelMode>("chauffeur");
  const modeDef = travelModes.find((m) => m.id === mode) ?? travelModes[0];
  const shown = roadTrips.filter((r) => r.modes.includes(mode));

  return (
    <section className="pkg-section za-roads" id="road-trips" aria-labelledby="roads-h">
      <div className="pkg-container">
        <ZaHead
          id="roads-h"
          eyebrow="South Africa road trips"
          title="The Open Road, Your Way"
          lede="Not everyone wants to drive on holiday. Choose how you'd like to travel and we'll show the routes that suit it."
        />
        <div className="za-modes" role="group" aria-label="How would you like to travel?">
          {travelModes.map((m) => (
            <button key={m.id} type="button" className={m.id === mode ? "is-active" : ""} aria-pressed={m.id === mode} onClick={() => setMode(m.id)}>
              {m.label}
            </button>
          ))}
        </div>
        <p className="za-modes__text" aria-live="polite">{modeDef.text}</p>

        <motion.ul className="za-roads__grid" layout>
          <AnimatePresence initial={false}>
            {shown.map((r) => (
              <motion.li key={r.id} layout initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.97 }} transition={{ duration: 0.3 }}>
                <article className="za-road" aria-labelledby={`road-${r.id}`}>
                  <div className="za-road__map"><ZaMiniMap stops={r.stops} label={`Map of the ${r.name} road trip`} /></div>
                  <div className="za-road__body">
                    <h3 id={`road-${r.id}`}>{r.name}</h3>
                    <p className="za-road__route">{r.stops.map(saDestinationName).map((n) => n.replace(" National Park", "")).join(" → ")}</p>
                    <dl className="za-road__facts">
                      <div><dt><Clock size={14} aria-hidden="true" /> Suggested</dt><dd>{r.duration}</dd></div>
                      {r.driveTime && <div><dt>Driving (approx.)</dt><dd>{r.driveTime}</dd></div>}
                      <div><dt><Sun size={14} aria-hidden="true" /> Season</dt><dd>{r.season}</dd></div>
                    </dl>
                    <p className="za-road__h">Scenic stops</p>
                    <ul className="za-tags">{r.scenicStops.map((s) => <li key={s}>{s}</li>)}</ul>
                    <p className="za-road__styles">{r.styles.map((s) => styleById(s)?.label).join(" · ")}</p>
                    <button type="button" className="pkg-btn pkg-btn--text" onClick={() => customize({ title: `${r.name} (${modeDef.label})`, destinations: r.stops, styles: ["road-trip"] })}>
                      Plan this road trip <ArrowRight size={15} className="pkg-arrow" aria-hidden="true" />
                    </button>
                  </div>
                </article>
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>
        <p className="za-fine">Drive times are approximate, exclude stops and depend on traffic, roadworks and weather.</p>
      </div>
    </section>
  );
}
