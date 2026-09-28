import SectionHeading from "../../shared/SectionHeading";
import Icon from "../../shared/Icon";
import { FAQS } from "../../data/faqs";
import "./Faq.css";

/** Native <details>/<summary>: accessible, works without JS, and all answers stay in the HTML for search engines. */
export default function Faq() {
  return (
    <section id="faq" className="km-section km-section--snow" aria-labelledby="faq-title">
      <div className="km-container km-faq">
        <div className="km-faq__aside">
          <SectionHeading
            id="faq-title"
            marker="Common questions"
            title="Kailash Mansarovar Yatra FAQs"
            intro="Clear answers to the questions pilgrims ask most often before they enquire."
          />
          <a href="#plan-your-yatra" className="km-text-link">
            Ask us something else
            <Icon name="arrowRight" className="km-faq__link-icon" />
          </a>
        </div>

        <div className="km-faq__list">
          {FAQS.map((faq) => (
            <details key={faq.question} className="km-faq__item">
              <summary className="km-faq__q">
                <h3 className="km-faq__q-text">{faq.question}</h3>
                <span className="km-faq__toggle" aria-hidden="true" />
              </summary>
              <div className="km-faq__a">
                <p>{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
