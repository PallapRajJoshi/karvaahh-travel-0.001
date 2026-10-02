"use client";

import { useState } from "react";
import { faqs } from "@/data/tsho-rolpa/faqs";
import SectionHeading from "../shared/SectionHeading";
import { useRevealOnScroll } from "../hooks/useRevealOnScroll";
import "./FAQ.css";

export default function FAQ() {
  const containerRef = useRevealOnScroll<HTMLDivElement>();
  const [openId, setOpenId] = useState<string | null>(faqs[0]?.id ?? null);

  return (
    <section className="tsho-faq tsho-section tsho-section--alt" ref={containerRef}>
      <div className="tsho-container">
        <SectionHeading eyebrow="Good to Know" title="Frequently Asked Questions" />

        <div className="tsho-faq__list">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div key={faq.id} className="tsho-faq__item tsho-reveal">
                <h3 className="tsho-faq__question-wrap">
                  <button
                    type="button"
                    className="tsho-faq__question"
                    aria-expanded={isOpen}
                    aria-controls={`tsho-faq-panel-${faq.id}`}
                    id={`tsho-faq-trigger-${faq.id}`}
                    onClick={() => setOpenId(isOpen ? null : faq.id)}
                  >
                    <span>{faq.question}</span>
                    <span className="tsho-faq__icon" aria-hidden="true">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                </h3>
                <div
                  id={`tsho-faq-panel-${faq.id}`}
                  role="region"
                  aria-labelledby={`tsho-faq-trigger-${faq.id}`}
                  className={`tsho-faq__answer ${isOpen ? "tsho-faq__answer--open" : ""}`}
                  hidden={!isOpen}
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
