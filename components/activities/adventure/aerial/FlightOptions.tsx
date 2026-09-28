import type { OptionsContent } from "./types";
import SectionHeading from "./SectionHeading";
import { enquiryHref } from "./contact.config";
import "./flight-options.css";

const STATUS_TEXT = { established: "ESTABLISHED", seasonal: "SEASONAL" } as const;

export default function FlightOptions({ content, slug }: { content: OptionsContent; slug: string }) {
  return (
    <section id={content.id} className="ae-section ae-section--cream ae-options" aria-labelledby="ae-options-title">
      <div className="ae-container">
        <SectionHeading id="ae-options-title" title={content.heading} lead={content.subheading} />

        <ul className="ae-options__grid">
          {content.options.map((o) => (
            <li key={o.id} className={`ae-option ae-option--${o.status}`}>
              <article className="ae-option__card" aria-labelledby={`ae-opt-${o.id}`}>
                <div className="ae-option__top">
                  <p className="ae-option__duration">
                    <span className="ae-sr-only">Duration: </span>
                    {o.duration}
                  </p>
                  <span className="ae-option__status">
                    <span className="ae-sr-only">Status: </span>
                    {STATUS_TEXT[o.status]}
                  </span>
                </div>

                <h3 id={`ae-opt-${o.id}`} className="ae-option__title">
                  {o.title}
                </h3>

                <div className="ae-option__sees">
                  <p className="ae-option__label">What you see</p>
                  <p className="ae-option__sees-text">{o.sees}</p>
                </div>

                <div className="ae-option__foot">
                  <p className="ae-option__price">
                    <span className="ae-option__label">Indicative price</span>
                    <span className="ae-option__price-value">{o.price}</span>
                  </p>
                  <a
                    href={enquiryHref({ activity: slug, option: o.id })}
                    className="ae-btn ae-btn--outline ae-option__cta"
                    aria-label={`${o.ctaLabel}: ${o.title}`}
                  >
                    {o.ctaLabel}
                  </a>
                </div>
              </article>
            </li>
          ))}
        </ul>

        <p className="ae-options__note">{content.note}</p>
      </div>
    </section>
  );
}
