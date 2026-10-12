import { ANCHORS } from "../data/config";
import { disclaimer, faqs } from "../data/proposal";
import Arrow from "../shared/Arrow";
import WeddingImage from "../shared/WeddingImage";
import "./ClosingSections.css";

export function WeddingFaq() {
  return (
    <section className="dw-section dw-section--tight dw-faq" aria-labelledby="dw-faq-title">
      <div className="dw-container dw-faq__grid">
        <div data-reveal="">
          <p className="dw-eyebrow">Questions couples ask</p>
          <h2 id="dw-faq-title" className="dw-h2">
            Before you <em>begin</em>
          </h2>
        </div>
        <div className="dw-faq__list">
          {faqs.map((f) => (
            <details key={f.question} className="dw-faq__item">
              <summary>
                <h3>{f.question}</h3>
                <span className="dw-faq__icon" aria-hidden="true" />
              </summary>
              <p>{f.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FinalCta() {
  return (
    <section className="dw-final dw-dark" aria-labelledby="dw-final-title">
      <div className="dw-final__media" aria-hidden="true">
        <WeddingImage
          image={{
            file: "final-farewell.jpg",
            alt: "Lanterns rising over a lakeside wedding reception at night with mountains in silhouette",
          }}
          sizes="100vw"
          compact
        />
      </div>
      <div className="dw-final__veil" aria-hidden="true" />
      <div className="dw-container dw-final__inner">
        <p className="dw-eyebrow">The beginning</p>
        <h2 id="dw-final-title" className="dw-display dw-final__title" data-reveal="">
          Your forever <em>starts here</em>
        </h2>
        <div className="dw-final__verse" data-reveal="">
          <p>Your wedding deserves more than a venue.</p>
          <p>It deserves a destination.</p>
          <p>A journey.</p>
          <p>A celebration.</p>
          <p>
            And memories that begin before the ceremony and continue long after the farewell.
          </p>
        </div>
        <div className="dw-final__ctas" data-reveal="">
          <a href={`#${ANCHORS.plan}`} className="dw-btn dw-btn--light">
            Plan My Destination Wedding <Arrow />
          </a>
          <a href={`#${ANCHORS.plan}`} className="dw-btn dw-btn--outline-light">
            Request Wedding Proposal
          </a>
          <a href={`#${ANCHORS.destinations}`} className="dw-link">
            Choose My Destination <Arrow />
          </a>
          <a href={`#${ANCHORS.honeymoon}`} className="dw-link">
            Plan My Wedding + Honeymoon <Arrow />
          </a>
        </div>
        <p className="dw-final__brand">
          <span>Karvaahh Tours &amp; Travels</span>
          <em>Live to Travel</em>
        </p>
      </div>
    </section>
  );
}

export function WeddingDisclaimer() {
  return (
    <section className="dw-disclaimer" aria-labelledby="dw-disclaimer-title">
      <div className="dw-container dw-disclaimer__inner">
        <h2 id="dw-disclaimer-title" className="dw-disclaimer__title">
          Planning notes &amp; conditions
        </h2>
        <div className="dw-disclaimer__body">
          {disclaimer.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
