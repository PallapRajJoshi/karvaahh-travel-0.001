"use client";

import { useState } from "react";
import Icon from "./Icon";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { FAQS } from "./data/faqs";
import { HEADINGS } from "./data/copy";
import { ANCHORS } from "./data/site";
import "./AdventureFAQ.css";

/**
 * Accessible accordion: real buttons with aria-expanded / aria-controls and
 * region panels. Answers stay in the DOM (good for SEO and find-in-page); the
 * closed panel is hidden from assistive tech with visibility, not removed.
 */
export default function AdventureFAQ() {
  const h = HEADINGS.faq;
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id={ANCHORS.faq}
      className="rt-section rt-section--alt"
      aria-labelledby="rt-faq-title"
    >
      <div className="rt-container rt-faq__layout">
        <SectionHeading
          id="rt-faq-title"
          eyebrow={h.eyebrow}
          title={h.title}
          intro={h.intro}
        />

        <Reveal className="rt-faq__list">
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            const buttonId = `rt-faq-q-${i}`;
            const panelId = `rt-faq-a-${i}`;
            return (
              <div key={item.question} className={`rt-faq__item${isOpen ? " is-open" : ""}`}>
                <h3 className="rt-faq__heading">
                  <button
                    type="button"
                    id={buttonId}
                    className="rt-faq__button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpen(isOpen ? null : i)}
                  >
                    <span>{item.question}</span>
                    <Icon name="chevron" className="rt-faq__chevron" />
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className="rt-faq__panel"
                >
                  <div className="rt-faq__panel-inner">
                    <p>{item.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
