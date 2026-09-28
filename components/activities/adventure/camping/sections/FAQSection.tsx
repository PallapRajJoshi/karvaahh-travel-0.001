import SectionHeading from "../shared/SectionHeading";
import { IconPlus } from "../shared/Icons";
import { campingFaqs, seoParagraph } from "@/data/campingContent";
import "./FAQSection.css";

/** Native <details> accordion: accessible and works without JavaScript. */
export default function FAQSection() {
  return (
    <section id="faq" className="cmp-section cmp-section--snow cmp-faq" aria-labelledby="cmp-faq-title">
      <div className="cmp-container cmp-faq__grid">
        <SectionHeading
          id="cmp-faq-title"
          kicker="Questions"
          title="Camping in Nepal: Common Questions"
          lead="Quick answers to help you plan. For route-specific advice, get in touch."
        />
        <div className="cmp-faq__list">
          {campingFaqs.map((f, i) => (
            <details key={f.q} className="cmp-faq__item" open={i === 0}>
              <summary className="cmp-faq__q">
                <h3>{f.q}</h3>
                <span className="cmp-faq__icon" aria-hidden="true"><IconPlus size={18} /></span>
              </summary>
              <div className="cmp-faq__a"><p>{f.a}</p></div>
            </details>
          ))}
        </div>
      </div>
      <div className="cmp-container">
        <p className="cmp-faq__seo">{seoParagraph}</p>
      </div>
    </section>
  );
}
