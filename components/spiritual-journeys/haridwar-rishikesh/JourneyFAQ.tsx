import Icon from "./Icon";
import SectionHeading from "./SectionHeading";
import { SECTION } from "./data/config";
import { FAQS } from "./data/faqs";
import "./journey-faq.css";

/**
 * Native <details>/<summary> accordion: keyboard and screen-reader accessible
 * without JavaScript, and every answer stays in the HTML for search engines.
 */
export default function JourneyFAQ() {
  return (
    <section id={SECTION.faq} className="hry-section hry-faq" aria-labelledby="hry-faq-title">
      <div className="hry-container hry-faq__layout">
        <SectionHeading
          id="hry-faq-title"
          title="Frequently asked questions about Haridwar & Rishikesh Yatra"
          intro={
            <>
              Can&rsquo;t find your answer?{" "}
              <a href={`#${SECTION.enquire}`} className="hry-faq__ask">
                Ask us directly
              </a>
              .
            </>
          }
        />
        <div className="hry-faq__list">
          {FAQS.map((faq) => (
            <details key={faq.id} id={`faq-${faq.id}`} className="hry-faq__item">
              <summary className="hry-faq__q">
                <h3 className="hry-faq__q-text">{faq.question}</h3>
                <span className="hry-faq__toggle" aria-hidden="true">
                  <Icon name="chevron" size={20} />
                </span>
              </summary>
              <div className="hry-faq__a">
                <p>{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
