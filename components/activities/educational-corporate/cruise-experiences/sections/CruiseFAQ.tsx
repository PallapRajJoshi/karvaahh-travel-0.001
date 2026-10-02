import Reveal from "../shared/Reveal";
import SectionHeading from "../shared/SectionHeading";
import { ChevronDown } from "../shared/Icons";
import { FAQS } from "../data/planning";
import "./CruiseFAQ.css";

/** Native <details>: keyboard/AT accessible, zero JS, content stays in the HTML for SEO. */
export default function CruiseFAQ() {
  return (
    <section id="cruise-faq" className="cr-section cr-faq" aria-labelledby="cr-faq-title">
      <div className="cr-container cr-faq__wrap">
        <SectionHeading
          id="cr-faq-title"
          eyebrow="FAQ"
          title="Frequently Asked Questions"
          lead="Availability, inclusions, documents and cancellation terms depend on the destination, operator and booking conditions."
        />
        <Reveal className="cr-faq__list">
          {FAQS.map((f) => (
            <details key={f.q} className="cr-faq__item">
              <summary>
                <span>{f.q}</span>
                <ChevronDown />
              </summary>
              <p>{f.a}</p>
            </details>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
