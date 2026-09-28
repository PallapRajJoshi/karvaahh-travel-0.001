import { FAQS, ROUTES } from "@/data/destinations/tsum-valley/content";
import SectionHeading from "./shared/SectionHeading";
import { ArrowRight, ChevronDown } from "./shared/Icons";
import "./TsumValleyFAQ.css";

/**
 * Native <details>/<summary> accordion: keyboard and screen-reader support
 * with zero client JavaScript, and answers stay in the HTML for search engines
 * (which is also what makes the FAQPage JSON-LD valid).
 */
export default function TsumValleyFAQ() {
  return (
    <section className="tsum-section tsum-section--tint tsum-faq" id="faq" aria-labelledby="tsum-faq-title">
      <div className="tsum-container tsum-faq__layout">
        <div className="tsum-faq__aside">
          <SectionHeading
            id="tsum-faq-title"
            eyebrow="Good to know"
            title="Frequently Asked Questions About Tsum Valley Trek"
          />
          <div className="tsum-faq__help">
            <p className="tsum-faq__help-title">Still have a question?</p>
            <p>Our Nepal team answers every enquiry personally — permits, pace, fitness, anything.</p>
            <a className="tsum-btn tsum-btn--secondary" href={ROUTES.contact}>
              Ask Karvaahh <ArrowRight />
            </a>
          </div>
        </div>

        <div className="tsum-faq__list">
          {FAQS.map((faq, i) => (
            <details key={faq.question} className="tsum-faq__item" open={i === 0}>
              <summary className="tsum-faq__q">
                <span className="tsum-faq__num" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="tsum-faq__q-text">{faq.question}</h3>
                <ChevronDown className="tsum-faq__chev" />
              </summary>
              <div className="tsum-faq__a">
                <p>{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
