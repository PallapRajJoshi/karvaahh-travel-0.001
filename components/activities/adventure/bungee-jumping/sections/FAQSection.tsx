import { faqs } from "../data/bungeeJumpingData";
import { SectionHeading } from "../shared";

/** Native <details> accordion: keyboard accessible, no JS, answers stay in the HTML for search engines. */
export default function FAQSection() {
  return (
    <section className="bj-section bj-faq" aria-labelledby="bj-faq-title">
      <div className="bj-wrap bj-wrap--narrow">
        <SectionHeading id="bj-faq-title" title="Bungee Jumping in Nepal: FAQ" />
        <div className="bj-faq__list">
          {faqs.map((f, i) => (
            <details key={f.q} className="bj-faq__item" open={i === 0}>
              <summary><h3>{f.q}</h3></summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
