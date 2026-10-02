"use client";

import { useState } from "react";
import SectionHeading from "./shared/SectionHeading";
import { icons } from "./shared/icons";
import { faqs } from "./data/gallery-faq";
import "./WellnessFAQ.css";

export default function WellnessFAQ() {
  const [openId, setOpenId] = useState<string | null>(faqs[0].id);

  return (
    <section className="ykw-section" aria-labelledby="ykw-faq-title">
      <div className="ykw-container ykw-faq__container">
        <SectionHeading
          id="ykw-faq-title"
          eyebrow="Questions"
          title="Frequently Asked Questions"
          intro="Straight answers. For anything specific to your trip, send an inquiry and we will confirm details."
        />
        <div className="ykw-faq__list">
          {faqs.map((f) => {
            const open = f.id === openId;
            return (
              <div key={f.id} className={`ykw-faq__item ${open ? "is-open" : ""}`}>
                <h3>
                  <button
                    type="button"
                    id={`faq-btn-${f.id}`}
                    aria-expanded={open}
                    aria-controls={`faq-panel-${f.id}`}
                    onClick={() => setOpenId(open ? null : f.id)}
                  >
                    <span>{f.question}</span>
                    <span className="ykw-faq__chev">{icons.chevron}</span>
                  </button>
                </h3>
                <div
                  id={`faq-panel-${f.id}`}
                  role="region"
                  aria-labelledby={`faq-btn-${f.id}`}
                  className="ykw-faq__panel"
                >
                  <div className="ykw-faq__panel-inner">
                    <p>{f.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
