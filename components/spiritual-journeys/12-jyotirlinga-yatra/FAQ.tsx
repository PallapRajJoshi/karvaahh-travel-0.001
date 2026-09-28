import SectionHeading from "./SectionHeading";
import { PlusIcon } from "./icons";
import { faqs } from "./data/jyotirlingaData";
import "./FAQ.css";

/**
 * Native <details>/<summary> accordion: keyboard and screen-reader accessible
 * with no JavaScript. The JSON-LD in page.tsx is generated from the same array.
 */
export default function FAQ() {
  return (
    <section id="faq" className="jyl-section jyl-section--white jyl-faq" aria-labelledby="jyl-faq-title">
      <div className="jyl-container jyl-faq__grid">
        <div className="jyl-faq__head">
          <SectionHeading
            id="jyl-faq-title"
            title="12 Jyotirlinga Yatra FAQ"
            lead="Answers to the questions pilgrims ask most often while planning."
          />
        </div>
        <div className="jyl-faq__list">
          {faqs.map((faq) => (
            <details key={faq.question} className="jyl-faq__item">
              <summary className="jyl-faq__q">
                <span>{faq.question}</span>
                <span className="jyl-faq__icon">
                  <PlusIcon />
                </span>
              </summary>
              <p className="jyl-faq__a">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
