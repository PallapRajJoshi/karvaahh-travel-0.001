import { faqs } from "../data/charDhamData";
import SectionHeading from "../shared/SectionHeading";
import { IconPlus } from "../shared/icons";

/**
 * Native <details>/<summary>: keyboard and screen-reader accessible with zero
 * JS. Answers render verbatim from the same array used for FAQPage JSON-LD.
 */
export default function CharDhamFAQ() {
  return (
    <section id="faq" className="cd-section cd-section--tint cd-faq" aria-labelledby="faq-title">
      <div className="cd-container cd-faq__grid">
        <div className="cd-faq__aside">
          <SectionHeading id="faq-title" title="Char Dham Yatra FAQs" intro={<p>Straight answers to the questions pilgrims ask most. Anything else, ask us directly.</p>} />
        </div>
        <div className="cd-faq__list">
          {faqs.map((f) => (
            <details key={f.q} className="cd-faq__item">
              <summary>
                <h3>{f.q}</h3>
                <IconPlus className="cd-faq__icon" />
              </summary>
              <div className="cd-faq__answer">
                <p>{f.a}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
