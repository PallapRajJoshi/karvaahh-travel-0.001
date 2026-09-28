"use client";

import { useState } from "react";
import SectionHeading from "./SectionHeading";
import { FAQS } from "./data/hotAirBalloonData";
import "./FAQSection.css";

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="hab-section hab-faq" aria-labelledby="hab-faq-title">
      <div className="hab-container hab-faq__inner">
        <SectionHeading id="hab-faq-title" title="Hot Air Balloon in Nepal — FAQs" />
        <div className="hab-faq__list">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            const btnId = `hab-faq-q${i}`;
            const panelId = `hab-faq-a${i}`;
            return (
              <div key={f.q} className={`hab-faq__item${isOpen ? " is-open" : ""}`}>
                <h3 className="hab-faq__q">
                  <button
                    id={btnId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpen(isOpen ? null : i)}
                  >
                    <span>{f.q}</span>
                    <svg className="hab-faq__chev" viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M5 12h14" /></svg>
                  </button>
                </h3>
                {/* Answers stay in the DOM (hidden) so they're crawlable */}
                <div id={panelId} role="region" aria-labelledby={btnId} className="hab-faq__a" hidden={!isOpen}>
                  <p>{f.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
