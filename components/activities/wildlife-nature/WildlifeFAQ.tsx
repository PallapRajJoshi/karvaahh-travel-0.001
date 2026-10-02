"use client";

import { useState } from "react";
import { FAQS } from "@/data/activities/wildlife-nature/faqs";
import { Reveal } from "./shared/Reveal";
import { SectionHeading } from "./shared/SectionHeading";
import { Icon } from "./shared/Icon";
import "./WildlifeFAQ.css";

export function WildlifeFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="wn-section wn-section--white" aria-labelledby="wn-faq-title">
      <div className="wn-container wn-faq__wrap">
        <SectionHeading
          id="wn-faq-title"
          eyebrow="Frequently asked questions"
          title="Good to Know Before You Go"
          lead="Seasons, activity availability, sightings, park regulations and logistics all depend on the destination, the time of year, local rules and your confirmed arrangements."
        />

        <Reveal>
          <ul className="wn-faq">
            {FAQS.map((f, i) => {
              const open = openIndex === i;
              return (
                <li key={f.q} className={`wn-faq__item ${open ? "is-open" : ""}`}>
                  <h3 className="wn-faq__q">
                    <button
                      type="button"
                      className="wn-faq__btn"
                      aria-expanded={open}
                      aria-controls={`wn-faq-panel-${i}`}
                      id={`wn-faq-btn-${i}`}
                      onClick={() => setOpenIndex(open ? null : i)}
                    >
                      <span>{f.q}</span>
                      <Icon name="chevron-down" size={20} className="wn-faq__chev" />
                    </button>
                  </h3>
                  <div
                    id={`wn-faq-panel-${i}`}
                    role="region"
                    aria-labelledby={`wn-faq-btn-${i}`}
                    className="wn-faq__panel"
                  >
                    <div className="wn-faq__inner">
                      <p className="wn-faq__a">{f.a}</p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
