import SectionHeading from "./SectionHeading";
import { faqs } from "./data/skydivingData";
import "./FAQSection.css";

/** Native <details> accordion: accessible and crawlable without JS. */
export default function FAQSection() {
  return (
    <section id="faq" className="sky-section" aria-labelledby="sky-faq-title">
      <div className="sky-container sky-faq-wrap">
        <SectionHeading id="sky-faq-title" title="Skydiving in Nepal: FAQs" />
        <div className="sky-faq">
          {faqs.map((f, i) => (
            <details key={f.q} className="sky-faq__item" name="sky-faq" open={i === 0}>
              <summary className="sky-faq__q">
                <h3 className="sky-faq__q-text">{f.q}</h3>
                <span className="sky-faq__icon" aria-hidden="true" />
              </summary>
              <p className="sky-faq__a">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
