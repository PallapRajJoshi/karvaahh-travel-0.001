import Link from "next/link";
import type { CSSProperties } from "react";
import { FAQ_INTRO, FAQ_TITLE, FAQS } from "@/lib/contact/content";
import { ContactIcon } from "./ContactIcon";

/**
 * Native <details>/<summary>: keyboard- and screen-reader-accessible out of
 * the box, content stays in the HTML for search engines, and zero JavaScript.
 * The smooth open/close is a progressive enhancement (::details-content +
 * interpolate-size); browsers without it simply toggle instantly.
 * Several answers may be open at once (no `name` attribute on purpose).
 */
export function ContactFaq() {
  return (
    <section className="ct-section ct-faq" id="faq" aria-labelledby="ct-faq-title">
      <div className="ct-container ct-faq__grid">
        <header className="ct-faq__intro" data-reveal>
          <p className="ct-eyebrow ct-eyebrow--dark">FAQ</p>
          <h2 id="ct-faq-title" className="ct-h2">
            {FAQ_TITLE}
          </h2>
          <p className="ct-lead">{FAQ_INTRO}</p>
          <a className="ct-btn ct-btn--outline" href="#enquiry">
            Ask Us Directly
            <ContactIcon name="arrow-right" size={18} />
          </a>
        </header>

        <div className="ct-faq__list">
          {FAQS.map((item, i) => (
            <div key={item.q} data-reveal style={{ "--i": Math.min(i, 5) } as CSSProperties}>
              <details className="ct-faq__item">
                <summary className="ct-faq__q">
                  <span>{item.q}</span>
                  <span className="ct-faq__icon" aria-hidden="true" />
                </summary>
                <div className="ct-faq__a">
                  <p>
                    {item.a.includes("Cancellation Policy") ? (
                      <>
                        {item.a.split("Cancellation Policy")[0]}
                        <Link href="/cancellation-policy">Cancellation Policy</Link>
                        {item.a.split("Cancellation Policy")[1]}
                      </>
                    ) : (
                      item.a
                    )}
                  </p>
                </div>
              </details>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
