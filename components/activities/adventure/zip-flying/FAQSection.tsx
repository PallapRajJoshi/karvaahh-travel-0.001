import { faqs } from "./data/zipFlyingData";

/* Native <details> accordion — keyboard accessible, no client JS. */
export default function FAQSection() {
  return (
    <section id="faq" className="zf-sec zf-faq" aria-labelledby="zf-faq-title">
      <div className="zf-wrap zf-faq__wrap">
        <header className="zf-head">
          <h2 id="zf-faq-title" className="zf-h2">Frequently Asked Questions</h2>
        </header>
        <div className="zf-faq__list">
          {faqs.map((f) => (
            <details key={f.q} className="zf-faq__item">
              <summary>
                <h3>{f.q}</h3>
                <span className="zf-faq__icon" aria-hidden="true" />
              </summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
