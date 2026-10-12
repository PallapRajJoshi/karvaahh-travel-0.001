import React from "react";
import BagmatiSectionHeading from "../heading/BagmatiSectionHeading";
import { bagmatiFaqs } from "@/data/bagmati/faqs";
import "./bagmati-faq.css";

export default function BagmatiFaq() {
  return (
    <section className="bagmati-faq" id="faq" aria-label="Bagmati Province travel FAQs">
      <BagmatiSectionHeading
        eyebrow="FAQs"
        heading={
          <>
            Bagmati travel, <em>answered</em>
          </>
        }
        description="Quick answers for planning heritage tours, treks, pilgrimages and safaris across the province."
      />

      <div className="bagmati-faq__list">
        {bagmatiFaqs.map((faq) => (
          <details className="bagmati-faq__item" key={faq.question}>
            <summary className="bagmati-faq__question">
              <h3>{faq.question}</h3>
              <span className="bagmati-faq__icon" aria-hidden="true" />
            </summary>
            <p className="bagmati-faq__answer">{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
