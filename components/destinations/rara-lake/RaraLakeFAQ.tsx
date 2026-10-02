"use client";

import { useState } from "react";
import SectionHeading from "@/components/shared/SectionHeading";
import { faqItems } from "@/data/destinations/rara-lake/faq";
import "./RaraLakeFAQ.css";

export default function RaraLakeFAQ() {
  const [openId, setOpenId] = useState<string | null>(faqItems[0]?.id ?? null);

  return (
    <section className="rara-faq" aria-labelledby="rara-faq-heading">
      <SectionHeading eyebrow="Good to Know" title="Frequently Asked Questions" />
      <div className="rara-faq__list">
        {faqItems.map((item) => {
          const isOpen = openId === item.id;
          return (
            <div key={item.id} className="rara-faq__item">
              <h3 className="rara-faq__question-wrapper">
                <button
                  type="button"
                  className="rara-faq__question"
                  aria-expanded={isOpen}
                  aria-controls={`rara-faq-panel-${item.id}`}
                  onClick={() => setOpenId(isOpen ? null : item.id)}
                >
                  <span>{item.question}</span>
                  <span className={`rara-faq__icon ${isOpen ? "rara-faq__icon--open" : ""}`} aria-hidden="true">
                    +
                  </span>
                </button>
              </h3>
              <div
                id={`rara-faq-panel-${item.id}`}
                role="region"
                className={`rara-faq__answer ${isOpen ? "rara-faq__answer--open" : ""}`}
              >
                <p>{item.answer}</p>
                {item.requiresVerification && (
                  <span className="rara-faq__verify-badge">Confirm current details before booking</span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
