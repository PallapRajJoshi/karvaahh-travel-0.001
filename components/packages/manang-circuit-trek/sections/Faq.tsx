import { faqs } from "../data/content";
import { IconChevron } from "../icons";
import SectionHeading from "../SectionHeading";
import "./faq.css";

/** Visible FAQ. The same data feeds FAQPage JSON-LD in page.tsx, so the two can't drift. */
export default function Faq() {
  return (
    <section id="faq" className="mc-section mc-faq" aria-labelledby="mc-faq-title">
      <div className="mc-container mc-faq__inner">
        <SectionHeading id="mc-faq-title" eyebrow="Questions" title="Manang Circuit FAQs" />
        <div className="mc-faq__list">
          {faqs.map((f) => (
            <details key={f.question} className="mc-faq__item">
              <summary>
                <h3>{f.question}</h3>
                <IconChevron className="mc-faq__chev" />
              </summary>
              <p>{f.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
