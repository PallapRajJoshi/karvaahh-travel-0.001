"use client";

import { useState } from "react";
import SectionHeading from "../../shared/SectionHeading";
import Reveal from "../../shared/Reveal";
import { ChevronIcon } from "../../shared/Icon";
import { faqItems } from "@/data/faq";
import "./FAQ.css";

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(faqItems[0]?.id ?? null);

  return (
    <section className="saipal-page__section saipal-faq">
      <div className="saipal-page__inner">
        <SectionHeading eyebrow="Travel Guide" title="Saipal Base Camp — Travel Guide & FAQs" align="center" />

        <div className="saipal-faq__list">
          {faqItems.map((item, index) => {
            const isOpen = openId === item.id;
            const panelId = `saipal-faq-panel-${item.id}`;
            const buttonId = `saipal-faq-button-${item.id}`;
            return (
              <Reveal key={item.id} delay={(index % 6) * 45} className="saipal-faq__item">
                <h3 className="saipal-faq__heading">
                  <button
                    type="button"
                    id={buttonId}
                    className="saipal-faq__trigger"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenId(isOpen ? null : item.id)}
                  >
                    <span>{item.question}</span>
                    <ChevronIcon className={`saipal-faq__chevron ${isOpen ? "saipal-faq__chevron--open" : ""}`} />
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={`saipal-faq__panel ${isOpen ? "saipal-faq__panel--open" : ""}`}
                >
                  <p>{item.answer}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
