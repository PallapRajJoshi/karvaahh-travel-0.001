import type { FaqItem } from "./types";
import SectionHeading from "./SectionHeading";
import { ChevronIcon } from "./icons";
import "./aerial-faq.css";

/**
 * Native <details>/<summary>: keyboard + screen-reader support for free,
 * zero JS, and answers stay in the HTML for crawlers.
 */
export default function AerialFaq({ heading, items }: { heading: string; items: FaqItem[] }) {
  return (
    <section id="faq" className="ae-section ae-faq" aria-labelledby="ae-faq-title">
      <div className="ae-container ae-faq__inner">
        <SectionHeading id="ae-faq-title" title={heading} />
        <div className="ae-faq__list">
          {items.map((f, i) => (
            <details key={f.question} className="ae-faq__item" open={i === 0}>
              <summary className="ae-faq__q">
                <span className="ae-faq__q-text">{f.question}</span>
                <ChevronIcon className="ae-faq__chev" />
              </summary>
              <div className="ae-faq__a">
                <p>{f.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
