"use client";

import { useState } from "react";
import LumbiniSectionHeading from "../heading/LumbiniSectionHeading";
import { lumbiniFaqs as faqs } from "@/data/lumbini/faqs";
import "./lumbini-faq.css";

export default function LumbiniFaq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="lumbini-faq" id="faq" aria-label="Frequently asked questions about Lumbini Province">
      <div className="lumbini-faq__inner">
        <LumbiniSectionHeading
          index="14"
          eyebrow="Questions"
          heading="Frequently asked"
          emphasis="questions."
          description="Clear answers for heritage travellers, pilgrims, families and wildlife enthusiasts planning their Lumbini journey."
        />

        <div className="lumbini-faq__list" aria-live="polite">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={faq.question} className={`lumbini-faq__item ${isOpen ? "lumbini-faq__item--open" : ""}`}>
                <button
                  type="button"
                  className="lumbini-faq__trigger"
                  aria-expanded={isOpen}
                  aria-controls={`lumbini-faq-panel-${index}`}
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                >
                  <span className="lumbini-faq__question">{faq.question}</span>
                  <span className="lumbini-faq__icon" aria-hidden="true">
                    +
                  </span>
                </button>
                <div
                  id={`lumbini-faq-panel-${index}`}
                  className={`lumbini-faq__panel ${isOpen ? "lumbini-faq__panel--open" : ""}`}
                  hidden={!isOpen}
                >
                  <p className="lumbini-faq__answer">{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
