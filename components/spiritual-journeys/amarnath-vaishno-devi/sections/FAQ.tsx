import { FAQS } from "../data/faqs";
import { SectionHeading } from "../SectionHeading";
import "./FAQ.css";

/**
 * Native <details>/<summary>: keyboard and screen-reader accessible with zero client JS,
 * and every answer stays in the HTML for search engines.
 */
export function FAQ() {
  return (
    <section id="faq" className="avd-section avd-section--paper avd-faq" aria-labelledby="avd-faq-title">
      <div className="avd-wrap avd-faq__grid">
        <SectionHeading
          id="avd-faq-title"
          title="Frequently asked questions"
          lede="Still unsure about something? Ask us in the enquiry form below."
        />
        <div className="avd-faq__list">
          {FAQS.map((f) => (
            <details key={f.id} className="avd-faq__item" id={`faq-${f.id}`}>
              <summary className="avd-faq__q">
                <span className="avd-faq__qtext">{f.question}</span>
                <span className="avd-faq__chev" aria-hidden="true" />
              </summary>
              <div className="avd-faq__a">
                <p>{f.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
