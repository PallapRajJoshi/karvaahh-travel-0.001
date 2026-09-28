import { faqs, links } from "@/data/adventure/langtang-valley-trek";
import LangtangIcon from "./LangtangIcon";
import "./LangtangFAQ.css";

/** Native <details> accordion — works without JS, fully keyboard accessible. */
export default function LangtangFAQ() {
  return (
    <section className="lt-section lt-faq" id="faq" aria-labelledby="lt-faq-title">
      <div className="lt-container lt-faq__grid">
        <header className="lt-heading lt-faq__head" data-reveal>
          <p className="lt-heading__eyebrow">Questions</p>
          <h2 className="lt-heading__title" id="lt-faq-title">Frequently Asked Questions About Langtang Valley Trek</h2>
          <p className="lt-heading__intro">Can’t find what you need? Our Nepal team answers every enquiry personally.</p>
          <a className="lt-btn lt-btn--outline" href={links.enquire}>Ask a question <LangtangIcon name="arrow" size={16} /></a>
        </header>
        <div className="lt-faq__list">
          {faqs.map((f, i) => (
            <details key={f.q} className="lt-faq__item" name="lt-faq" open={i === 0}>
              <summary>
                <span>{f.q}</span>
                <span className="lt-faq__icon" aria-hidden="true"><LangtangIcon name="plus" size={18} /></span>
              </summary>
              <div className="lt-faq__a"><p>{f.a}</p></div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
