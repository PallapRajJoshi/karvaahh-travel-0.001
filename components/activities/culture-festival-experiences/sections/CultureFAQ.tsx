"use client";

import { useId, useState } from "react";
import Reveal from "../shared/Reveal";
import SectionHeading from "../shared/SectionHeading";
import { ChevronIcon } from "../shared/Icons";
import { FAQS, FAQ_HEADING, FAQ_LEDE } from "../data/faq";
import { IDS } from "../data/page";
import "./CultureFAQ.css";

export default function CultureFAQ() {
  const [openIds, setOpenIds] = useState<string[]>([]);
  const uid = useId();

  const toggle = (id: string) =>
    setOpenIds((cur) => (cur.includes(id) ? cur.filter((x) => x !== id) : [...cur, id]));

  return (
    <section id={IDS.faq} className="culture-faq" aria-labelledby="culture-faq-title">
      <div className="cx-container culture-faq__wrap">
        <Reveal>
          <SectionHeading id="culture-faq-title" title={FAQ_HEADING} lede={FAQ_LEDE} align="center" />
        </Reveal>

        <div className="culture-faq__list">
          {FAQS.map((f) => {
            const open = openIds.includes(f.id);
            const buttonId = `${uid}-${f.id}-btn`;
            const panelId = `${uid}-${f.id}-panel`;
            return (
              <Reveal key={f.id} className="faq-item">
                <h3 className="faq-item__heading">
                  <button
                    type="button"
                    id={buttonId}
                    className="faq-item__button"
                    aria-expanded={open}
                    aria-controls={panelId}
                    onClick={() => toggle(f.id)}
                  >
                    <span>{f.question}</span>
                    <ChevronIcon className="faq-item__chevron" />
                  </button>
                </h3>
                <div id={panelId} role="region" aria-labelledby={buttonId} className="faq-item__panel" data-open={open}>
                  <div className="faq-item__panel-inner">
                    <p>{f.answer}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
