"use client";

import { motion } from "motion/react";
import { logistics, transportSteps } from "@/data/antarctica/gateways";
import PolarIcon from "./PolarIcon";
import SectionHead from "./SectionHead";

/** Flights + polar transportation: an animated journey chain and the logistics Karvaahh coordinates. */
export default function PolarTransportSection() {
  return (
    <section className="pkg-section asia-section--deep an-transport" id="transport" aria-labelledby="transport-h">
      <div className="pkg-container">
        <SectionHead
          id="transport-h"
          light
          eyebrow="Flights + polar transportation"
          title="Every Connection, Carefully Coordinated"
          lede="Antarctica needs careful timing between long-haul flights, South American connections and a ship that will not wait. We build the chain with buffers at every step."
        />

        <div className="an-chain-wrap">
        <ol className="an-chain">
          {transportSteps.map((s, i) => (
            <motion.li
              key={s.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <span className="an-chain__icon"><PolarIcon name={s.icon} size={22} /></span>
              <span className="an-chain__n">{String(i + 1).padStart(2, "0")}</span>
              <strong>{s.title}</strong>
              <span className="an-chain__text">{s.text}</span>
            </motion.li>
          ))}
        </ol>
        <motion.span
          className="an-chain__line"
          aria-hidden="true"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1.6, ease: "easeInOut" }}
        />
        </div>

        <ul className="an-logistics">
          {logistics.map((l) => (
            <li key={l.id}>
              <PolarIcon name={l.icon} size={18} />
              <div><strong>{l.title}</strong><span>{l.text}</span></div>
            </li>
          ))}
        </ul>
        <p className="an-fine an-fine--light">We do not publish flight schedules or fares; options are quoted live for your dates and confirmed only at booking.</p>
      </div>
    </section>
  );
}
