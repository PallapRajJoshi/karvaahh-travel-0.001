"use client";

import { useState } from "react";
import Icon from "@/components/shared/Icon";
import Reveal from "@/components/shared/Reveal";
import SectionHeading from "@/components/shared/SectionHeading";
import { faqs } from "@/data/panch-pokhari/faqs";
import "./faq.css";

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(faqs[0]?.id ?? null);

  return (
    <section className="pp-faq" aria-labelledby="faq-heading">
      <div className="pp-container">
        <SectionHeading
          eyebrow="Travel Guide"
          title="Panch Pokhari Travel Guide — FAQs"
        />

        <div className="pp-faq__list">
          {faqs.map((item, index) => {
            const isOpen = openId === item.id;
            const panelId = `pp-faq-panel-${item.id}`;
            const buttonId = `pp-faq-button-${item.id}`;

            return (
              <Reveal
                key={item.id}
                variant="fade-up"
                delay={Math.min(index, 6) * 40}
                className="pp-faq__item"
              >
                <h3 className="pp-faq__question-wrap">
                  <button
                    id={buttonId}
                    type="button"
                    className="pp-faq__question"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenId(isOpen ? null : item.id)}
                  >
                    <span>{item.question}</span>
                    <Icon
                      name="chevron-down"
                      className={`pp-faq__chevron ${isOpen ? "pp-faq__chevron--open" : ""}`}
                    />
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={`pp-faq__answer ${isOpen ? "pp-faq__answer--open" : ""}`}
                >
                  <p className="pp-faq__answer-text">{item.answer}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
