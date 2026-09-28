import type { Faq } from "./data/types";
import "./FAQ.css";

/**
 * Accessible FAQ using native <details>/<summary>: keyboard and screen-reader
 * support for free, answers present in the HTML (indexable, find-in-page),
 * and a CSS-only open animation where the browser supports it.
 * The FAQPage JSON-LD is generated from the same `faqs` array.
 */
export default function FAQ({ faqs, heading }: { faqs: Faq[]; heading: string }) {
  return (
    <section id="faq" className="bcd-section bcd-section--paper" aria-labelledby="bcd-faq-title">
      <div className="bcd-container bcd-faq">
        <header className="bcd-heading bcd-faq__head">
          <h2 id="bcd-faq-title" className="bcd-heading__title">
            {heading}
          </h2>
          <p className="bcd-heading__intro">Short, factual answers to the questions pilgrims ask most often.</p>
        </header>
        <div className="bcd-faq__list">
          {faqs.map((f, i) => (
            <details key={f.question} className="bcd-faq__item" name="bcd-faq" open={i === 0}>
              <summary className="bcd-faq__q">
                <h3 className="bcd-faq__q-text">{f.question}</h3>
                <span className="bcd-faq__icon" aria-hidden="true" />
              </summary>
              <div className="bcd-faq__a">
                <p>{f.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
