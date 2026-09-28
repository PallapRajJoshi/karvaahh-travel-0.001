import { faqs } from "../data/pashupatinathMuktinathData";
import "./closing.css";

/**
 * Native <details>/<summary>: keyboard and screen-reader accessible with zero
 * JavaScript, and every answer stays in the HTML for search engines.
 * FAQPage JSON-LD is generated from the same `faqs` array.
 */
export function JourneyFAQ() {
  return (
    <section id="faq" className="pmy-section pmy-faq" aria-labelledby="pmy-faq-title">
      <div className="pmy-container pmy-faq__grid">
        <div className="pmy-faq__head">
          <h2 id="pmy-faq-title" className="pmy-heading__title pmy-heading__title--h2">Frequently Asked Questions</h2>
          <p>Short answers to the questions pilgrims ask us most often.</p>
        </div>
        <div className="pmy-faq__list">
          {faqs.map((f) => (
            <details key={f.id} id={`faq-${f.id}`} className="pmy-faq__item">
              <summary>
                <h3 className="pmy-faq__q">{f.question}</h3>
                <span className="pmy-faq__icon" aria-hidden="true" />
              </summary>
              <div className="pmy-faq__a">
                <p>{f.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
