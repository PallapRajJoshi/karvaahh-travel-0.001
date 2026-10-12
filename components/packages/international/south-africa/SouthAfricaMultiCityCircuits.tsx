"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, Car, Clock, MessageCircle, Plane } from "lucide-react";
import { saDestinationName } from "@/data/south-africa/destinations";
import { saCircuits } from "@/data/south-africa/routes";
import { styleById } from "@/data/south-africa/styles";
import { enquireSA } from "@/lib/south-africa/config";
import { customize } from "@/lib/south-africa/explorer";
import { ZaHead } from "./ZaPrimitives";
import ZaMiniMap from "./ZaMiniMap";

/** Route explorer: pick a circuit, watch it draw across the map, then customize it. */
export default function SouthAfricaMultiCityCircuits() {
  const [id, setId] = useState(saCircuits[0].id);
  const c = saCircuits.find((x) => x.id === id) ?? saCircuits[0];

  return (
    <section className="pkg-section pkg-section--sand za-circuits" id="circuits" aria-labelledby="circuits-h">
      <div className="pkg-container">
        <ZaHead
          id="circuits-h"
          eyebrow="Multi-city South Africa circuits"
          title="Build a Multi-City Journey"
          lede="Ten proven ways to connect cities, coast and bush. Each is a starting point we tailor to your dates and pace."
        />
        <div className="za-circuits__layout">
          <ul className="za-circuits__list" aria-label="Circuits">
            {saCircuits.map((x) => (
              <li key={x.id}>
                <button type="button" className={`za-circuits__item${x.id === c.id ? " is-active" : ""}`} aria-pressed={x.id === c.id} onClick={() => setId(x.id)}>
                  <strong>{x.name}</strong>
                  <span>{x.duration}</span>
                </button>
              </li>
            ))}
          </ul>
          <div className="za-circuits__stage">
            <ZaMiniMap stops={c.stops} flightLegs={c.flightLegs} label={`Map of the ${c.name} circuit`} />
            <AnimatePresence mode="wait" initial={false}>
              <motion.article key={c.id} className="za-circuits__detail" aria-live="polite" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.25 }}>
                <h3>{c.name}</h3>
                <ol className="za-circuits__stops">
                  {c.stops.map((s, i) => (
                    <li key={s}>
                      <span>{i + 1}</span> {saDestinationName(s)}
                      {i < c.stops.length - 1 &&
                        (c.flightLegs?.includes(i) ? (
                          <><Plane size={13} aria-hidden="true" /><span className="pkg-sr">, then fly to</span></>
                        ) : (
                          <><Car size={13} aria-hidden="true" /><span className="pkg-sr">, then drive to</span></>
                        ))}
                    </li>
                  ))}
                </ol>
                <dl className="za-circuits__facts">
                  <div><dt><Clock size={14} aria-hidden="true" /> Approx. duration</dt><dd>{c.duration}</dd></div>
                  <div><dt><Car size={14} aria-hidden="true" /> Transport</dt><dd>{c.transport}</dd></div>
                  <div><dt>Travel style</dt><dd>{c.styles.map((s) => styleById(s)?.label).join(" · ")}</dd></div>
                </dl>
                <p className="za-circuits__h">Major highlights</p>
                <ul className="za-tags">{c.highlights.map((h) => <li key={h}>{h}</li>)}</ul>
                <div className="za-circuits__actions">
                  <button type="button" className="pkg-btn za-btn--earth" onClick={() => customize({ title: c.name, destinations: c.stops, styles: c.styles.slice(0, 2) })}>
                    Customize this circuit <ArrowRight size={16} className="pkg-arrow" aria-hidden="true" />
                  </button>
                  <a href={enquireSA(c.name)} target="_blank" rel="noopener noreferrer" className="pkg-btn pkg-btn--text">
                    <MessageCircle size={15} aria-hidden="true" /> Enquire<span className="pkg-sr"> about {c.name} (opens WhatsApp)</span>
                  </a>
                </div>
              </motion.article>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
