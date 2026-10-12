"use client";

import { motion } from "motion/react";
import { Info } from "lucide-react";
import { FLIGHTS_NOTE, journeyChain, transportOptions } from "@/data/south-africa/gateways";
import { ZaHead, ZaIcon } from "./ZaPrimitives";

/** Flights + domestic transportation: the journey chain and every way to get around. */
export default function SouthAfricaTransportSection() {
  return (
    <section className="pkg-section za-transport" id="transport" aria-labelledby="transport-h">
      <div className="pkg-container">
        <ZaHead
          id="transport-h"
          light
          eyebrow="Flights + domestic transportation"
          title="Every Leg, Coordinated"
          lede="Most South Africa journeys combine an international flight, a domestic flight and road transfers. We plan the connections and the buffer time between them."
        />
        <div className="za-chain-wrap">
          <ol className="za-chain" aria-label="Typical journey">
            {journeyChain.map((c, i) => (
              <motion.li key={c} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.4, delay: i * 0.18 }}>
                <span className="za-chain__n">{String(i + 1).padStart(2, "0")}</span>
                <strong>{c}</strong>
              </motion.li>
            ))}
          </ol>
          <motion.span className="za-chain__line" aria-hidden="true" initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 1.4, ease: "easeInOut" }} />
        </div>
        <ul className="za-logistics">
          {transportOptions.map((t) => (
            <li key={t.id}>
              <ZaIcon name={t.icon} size={18} />
              <div><strong>{t.title}</strong><span>{t.text}</span></div>
            </li>
          ))}
        </ul>
        <p className="za-note za-note--light"><Info size={16} aria-hidden="true" /> {FLIGHTS_NOTE} Domestic transport is configurable per itinerary.</p>
      </div>
    </section>
  );
}
