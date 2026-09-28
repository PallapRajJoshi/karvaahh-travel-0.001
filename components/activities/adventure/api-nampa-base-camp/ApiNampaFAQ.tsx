import { FAQS, FAQ_TITLE } from "./data/faq";
import { ANCHORS, INQUIRY } from "./data/routes";
import { ArrowRight, Plus } from "./shared/icons";
import "./ApiNampaFAQ.css";

/**
 * Native <details>/<summary>: accessible, keyboard-friendly, zero JS,
 * and every answer is in the server HTML for search engines.
 */
export default function ApiNampaFAQ() {
  return (
    <section className="an-section an-faq" id={ANCHORS.faq} aria-labelledby="an-faq-title">
      <div className="an-container an-faq__grid">
        <header className="an-faq__aside">
          <p className="an-heading__eyebrow">FAQ</p>
          <h2 className="an-heading__title" id="an-faq-title">
            {FAQ_TITLE}
          </h2>
          <div className="an-faq__help">
            <p className="an-faq__help-title">Still have a question?</p>
            <p>Our trek planners know the far west. Ask about current conditions, permits or the right route for you.</p>
            <a className="an-btn an-btn--blue" href={INQUIRY.general}>
              Ask Karvaahh
              <ArrowRight />
            </a>
          </div>
        </header>

        <div className="an-faq__list">
          {FAQS.map((f, i) => (
            <details className="an-faq__item" key={f.id} open={i === 0}>
              <summary className="an-faq__q">
                <span>{f.question}</span>
                <Plus className="an-faq__icon" />
              </summary>
              <div className="an-faq__a">
                <p>{f.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
