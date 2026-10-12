import type { CSSProperties } from "react";
import { CATEGORIES, CATEGORIES_SUBTITLE, CATEGORIES_TITLE } from "@/lib/contact/content";
import { ContactIcon } from "./ContactIcon";

/**
 * Clickable starting points. Each is a plain anchor to #enquiry carrying
 * data-prefill-* attributes; ContactInteractions turns the click into a
 * form pre-fill. Works as a normal in-page link even without JavaScript.
 */
export function CategoryGrid() {
  return (
    <section className="ct-section ct-categories" aria-labelledby="ct-categories-title">
      <div className="ct-container">
        <header className="ct-heading ct-heading--center" data-reveal>
          <p className="ct-eyebrow ct-eyebrow--dark">Start here</p>
          <h2 id="ct-categories-title" className="ct-h2">
            {CATEGORIES_TITLE}
          </h2>
          <p className="ct-lead">{CATEGORIES_SUBTITLE}</p>
        </header>
      </div>

      <div className="ct-container ct-categories__bleed">
        <ul className="ct-categories__rail">
          {CATEGORIES.map((c, i) => (
            <li key={c.id} className="ct-categories__item" data-reveal style={{ "--i": i % 6 } as CSSProperties}>
              <a
                className="ct-category"
                href="#enquiry"
                data-prefill="true"
                data-prefill-type={c.travelType}
                {...(c.budget ? { "data-prefill-budget": c.budget } : {})}
              >
                <span className="ct-category__icon">
                  <ContactIcon name={c.icon} size={30} />
                </span>
                <span className="ct-category__label">{c.label}</span>
                <span className="ct-category__arrow" aria-hidden="true">
                  <ContactIcon name="arrow-right" size={18} />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
