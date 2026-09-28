import SectionHeading from "./SectionHeading";
import Icon from "./Icon";
import { faqs } from "@/data/adventure/everest-three-passes-trek/faq";
import { LINKS } from "@/data/adventure/everest-three-passes-trek/config";
import "./Faq.css";

/** Native <details> accordion — keyboard-accessible and indexable without JS. */
export default function Faq() {
  return (
    <section className="etp-section etp-faq" id="faq" aria-labelledby="etp-faq-title">
      <div className="etp-wrap etp-faq__grid">
        <div className="etp-faq__intro">
          <SectionHeading
            id="etp-faq-title"
            eyebrow="Questions"
            title="Frequently Asked Questions About Everest Three Passes Trek"
          />
          <p className="etp-faq__help" data-reveal>
            Can&rsquo;t find your answer? Our team can talk through your experience, dates and route.
          </p>
          <a className="etp-btn etp-btn--outline" href={LINKS.contact} data-reveal>
            Ask Karvaahh <Icon name="arrow" />
          </a>
        </div>

        <div className="etp-faq__list">
          {faqs.map((f, i) => (
            <details key={f.q} className="etp-faq__item" data-reveal="fade">
              <summary className="etp-faq__q">
                <span className="etp-faq__num" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="etp-faq__qtext">{f.q}</span>
                <span className="etp-faq__plus" aria-hidden="true" />
              </summary>
              <div className="etp-faq__a">
                <p>{f.a}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
