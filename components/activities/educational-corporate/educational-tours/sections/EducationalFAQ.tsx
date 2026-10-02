"use client";

import { useState } from "react";
import { FAQ_SECTION, FAQS } from "../data/faq";
import { Icon } from "../shared/Icon";
import { Reveal } from "../shared/Reveal";
import { SectionHeading } from "../shared/SectionHeading";
import "./EducationalFAQ.css";

export function EducationalFAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="et-section" aria-labelledby="et-faq-title">
      <div className="et-container et-faq__wrap">
        <SectionHeading eyebrow={FAQ_SECTION.eyebrow} title={FAQ_SECTION.title} id="et-faq-title" />
        <ul className="et-faq__list">
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            return (
              <Reveal as="li" key={item.q} className={`et-faq__item ${isOpen ? "is-open" : ""}`}>
                <h3 className="et-faq__q">
                  <button
                    type="button"
                    id={`et-faq-btn-${i}`}
                    aria-expanded={isOpen}
                    aria-controls={`et-faq-panel-${i}`}
                    onClick={() => setOpen(isOpen ? null : i)}
                  >
                    <span className="et-faq__num" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
                    <span className="et-faq__text">{item.q}</span>
                    <span className="et-faq__chev" aria-hidden="true">
                      <Icon name="chevron" size={20} />
                    </span>
                  </button>
                </h3>
                <div id={`et-faq-panel-${i}`} role="region" aria-labelledby={`et-faq-btn-${i}`} className="et-faq__panel">
                  <div className="et-faq__inner">
                    <p>{item.a}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
