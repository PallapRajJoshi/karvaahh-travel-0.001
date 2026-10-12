"use client";

import { motion } from "motion/react";
import { CircleAlert } from "lucide-react";
import { circleFactors, circleFacts } from "@/data/antarctica/experiences";
import { ExpeditionRail } from "./AntarcticaPackageGrid";
import PolarMedia from "./PolarMedia";
import SectionHead from "./SectionHead";

/**
 * Milestone section: a polar disc with the 66°33′S line drawing itself in,
 * the route reaching across it, and the honest conditions caveat.
 */
export default function AntarcticCircleSection() {
  return (
    <section className="pkg-section an-circle" id="antarctic-circle" aria-labelledby="circle-h">
      <div className="an-circle__bg" aria-hidden="true">
        <PolarMedia id="tabular-berg" decorative sizes="100vw" />
      </div>
      <div className="pkg-container an-circle__layout">
        <div>
          <SectionHead
            id="circle-h"
            light
            eyebrow="A polar milestone"
            title="Cross the Antarctic Circle"
            lede="South of the Peninsula's busiest waters lies 66°33′S, the latitude beyond which the sun can stay above the horizon at midsummer. Longer voyages may attempt to sail across it for a deeper, wilder polar experience."
          />
          <dl className="an-circle__facts">
            {circleFacts.map((f) => (
              <div key={f.label}><dt>{f.label}</dt><dd>{f.value}</dd></div>
            ))}
          </dl>
          <div className="an-circle__caveat">
            <CircleAlert size={18} aria-hidden="true" />
            <div>
              <p><strong>Never guaranteed.</strong> Whether a ship can cross depends on:</p>
              <ul>{circleFactors.map((x) => <li key={x}>{x}</li>)}</ul>
            </div>
          </div>
        </div>

        <figure className="an-circle__viz" aria-label="Diagram: an expedition route crossing the Antarctic Circle at 66°33′S">
          <svg viewBox="0 0 400 400" aria-hidden="true" focusable="false">
            <circle cx="200" cy="200" r="190" className="an-circle__ring" />
            <circle cx="200" cy="200" r="130" className="an-circle__ring an-circle__ring--inner" />
            <motion.circle
              cx="200"
              cy="200"
              r="96"
              className="an-circle__lat"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 2.2, ease: "easeInOut" }}
            />
            <circle cx="200" cy="200" r="54" className="an-circle__pole" />
            <motion.path
              d="M330 26 C 300 90, 260 110, 236 150 S 220 210, 236 254"
              className="an-circle__route"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 2.4, delay: 0.8, ease: "easeInOut" }}
            />
            <circle cx="330" cy="26" r="6" className="an-circle__pt" />
            <circle cx="236" cy="254" r="7" className="an-circle__pt an-circle__pt--end" />
            <text x="200" y="96" textAnchor="middle" className="an-circle__txt">66°33′S</text>
            <text x="200" y="205" textAnchor="middle" className="an-circle__txt an-circle__txt--pole">South Pole</text>
          </svg>
          <figcaption>Illustrative: Peninsula voyages that attempt the Circle sail south along the western coast.</figcaption>
        </figure>
      </div>
      <div className="pkg-container">
        <ExpeditionRail ids={["circle", "peninsula-12n"]} dark label="Antarctic Circle expedition templates" />
      </div>
    </section>
  );
}
