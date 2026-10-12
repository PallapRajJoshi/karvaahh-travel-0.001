"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Check, CircleAlert, Plane, Ship } from "lucide-react";
import { crossingOptions } from "@/data/antarctica/experiences";
import PolarMedia from "./PolarMedia";
import SectionHead from "./SectionHead";

/**
 * The Drake Passage: dark ocean section with an animated crossing line and an
 * interactive Drake vs air-cruise comparison. Desktop shows both side by side
 * with the chosen one emphasised; phones show the chosen one.
 */
export default function DrakePassageSection() {
  const [active, setActive] = useState<"drake" | "air-cruise">("drake");

  return (
    <section className="pkg-section an-drake" id="drake-passage" aria-labelledby="drake-h">
      <div className="an-drake__bg" aria-hidden="true">
        <PolarMedia id="berg-open-ocean" decorative sizes="100vw" />
      </div>
      <div className="pkg-container">
        <SectionHead
          id="drake-h"
          light
          eyebrow="The maritime gateway"
          title="Cross the Drake Passage"
          lede="Between Cape Horn and the South Shetland Islands lies the open ocean every ship-based voyage must cross. Typically around two days each way, it is where albatrosses follow the ship, lectures prepare you for landings and the first icebergs appear."
        />

        <figure className="an-crossing" aria-label="Animated illustration of a ship crossing from South America to Antarctica">
          <svg viewBox="0 0 1000 140" preserveAspectRatio="none" aria-hidden="true" focusable="false">
            <path className="an-crossing__wave" d="M0 100 Q 62 84 125 100 T 250 100 T 375 100 T 500 100 T 625 100 T 750 100 T 875 100 T 1000 100" />
            <path className="an-crossing__wave an-crossing__wave--b" d="M0 118 Q 62 104 125 118 T 250 118 T 375 118 T 500 118 T 625 118 T 750 118 T 875 118 T 1000 118" />
            <motion.path
              id="an-drake-line"
              className="an-crossing__line"
              d="M40 70 C 260 30, 420 100, 560 60 S 820 30, 960 70"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 2.6, ease: "easeInOut" }}
            />
            <g className="an-crossing__ship">
              <path d="M-14 -4 L14 -4 L9 6 L-9 6 Z M-6 -4 L-6 -12 L6 -12 L6 -4" />
              <animateMotion dur="14s" repeatCount="indefinite">
                <mpath href="#an-drake-line" />
              </animateMotion>
            </g>
          </svg>
          <figcaption className="an-crossing__ends">
            <span>Ushuaia · South America</span>
            <span>≈ 2 days at sea</span>
            <span>South Shetlands · Antarctica</span>
          </figcaption>
        </figure>

        <div className="an-compare">
          <div className="an-compare__toggle" role="group" aria-label="Compare ways to reach Antarctica">
            {crossingOptions.map((o) => (
              <button key={o.id} type="button" className={active === o.id ? "is-active" : ""} aria-pressed={active === o.id} onClick={() => setActive(o.id)}>
                {o.id === "drake" ? <Ship size={16} aria-hidden="true" /> : <Plane size={16} aria-hidden="true" />} {o.title}
              </button>
            ))}
          </div>
          <div className="an-compare__cols">
            {crossingOptions.map((o) => (
              <article key={o.id} className={`an-compare__card${active === o.id ? " is-active" : ""}`} aria-labelledby={`cmp-${o.id}`}>
                <div className="an-compare__media"><PolarMedia id={o.image} sizes="(min-width: 900px) 40vw, 100vw" /></div>
                <div className="an-compare__body">
                  <h3 id={`cmp-${o.id}`} className="an-compare__title">{o.title}</h3>
                  <p className="an-compare__lede">{o.lede}</p>
                  <dl className="an-compare__points">
                    {o.points.map((p) => (
                      <div key={p.label}><dt>{p.label}</dt><dd>{p.value}</dd></div>
                    ))}
                  </dl>
                  <p className="an-compare__h">Good for</p>
                  <ul className="an-checks">{o.goodFor.map((g) => <li key={g}><Check size={15} aria-hidden="true" /> {g}</li>)}</ul>
                  <p className="an-compare__h">Consider</p>
                  <ul className="an-checks an-checks--warn">{o.consider.map((g) => <li key={g}><CircleAlert size={15} aria-hidden="true" /> {g}</li>)}</ul>
                </div>
              </article>
            ))}
          </div>
          <p className="an-fine an-fine--light">Comparison shows typical patterns. Operators, vessels and availability vary by season; we confirm everything for your dates.</p>
        </div>
      </div>
    </section>
  );
}
