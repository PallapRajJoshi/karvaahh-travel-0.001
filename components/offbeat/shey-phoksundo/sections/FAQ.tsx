"use client";

import { useState } from "react";
import SectionHeading from "../shared/SectionHeading";
import { FAQS } from "../data";
import { useScrollReveal } from "../shared/useScrollReveal";
import "./FAQ.css";

export default function FAQ() {
  const ref = useScrollReveal<HTMLElement>();
  const [openId, setOpenId] = useState<string | null>(FAQS[0]?.id ?? null);

  return (
    <section className="phoksundo-faq" ref={ref}>
      <div className="phoksundo-page__container phoksundo-faq__container">
        <SectionHeading eyebrow="Questions" title="Frequently Asked Questions" />

        <div className="phoksundo-faq__list">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div className="phoksundo-faq__item" key={faq.id} data-reveal>
                <h3 className="phoksundo-faq__question-wrap">
                  <button
                    type="button"
                    className="phoksundo-faq__question"
                    aria-expanded={isOpen}
                    aria-controls={`phoksundo-faq-panel-${faq.id}`}
                    id={`phoksundo-faq-trigger-${faq.id}`}
                    onClick={() => setOpenId(isOpen ? null : faq.id)}
                  >
                    <span>{faq.question}</span>
                    <span className={`phoksundo-faq__icon ${isOpen ? "phoksundo-faq__icon--open" : ""}`} aria-hidden="true">
                      +
                    </span>
                  </button>
                </h3>
                <div
                  id={`phoksundo-faq-panel-${faq.id}`}
                  role="region"
                  aria-labelledby={`phoksundo-faq-trigger-${faq.id}`}
                  className={`phoksundo-faq__answer ${isOpen ? "phoksundo-faq__answer--open" : ""}`}
                >
                  <p>{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
