import Link from "next/link";
import { finalCta, karvaahh, packageTerms, relatedLinks } from "../data/charDhamData";
import SectionHeading from "../shared/SectionHeading";

export default function KarvaahhCTA() {
  const related = relatedLinks.filter((l) => l.enabled);
  return (
    <>
      <section id="plan-with-karvaahh" className="cd-section cd-karvaahh" aria-labelledby="karvaahh-title">
        <div className="cd-container">
          <SectionHeading id="karvaahh-title" title={karvaahh.heading} intro={<p>{karvaahh.intro}</p>} />
          <ul className="cd-karvaahh__grid">
            {karvaahh.services.map((s) => (
              <li key={s.title} data-reveal>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ul>
          {related.length > 0 ? (
            <nav className="cd-related" aria-label="Related spiritual journeys">
              <h3>Related journeys</h3>
              <ul>
                {related.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href}>{l.label}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          ) : null}
        </div>
      </section>

      <section id="begin-yatra" className="cd-final" aria-labelledby="final-title">
        <svg className="cd-final__ridge" viewBox="0 0 1440 200" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0 200 L0 130 L120 90 L210 118 L330 40 L440 104 L560 70 L690 128 L800 60 L930 110 L1060 30 L1180 96 L1300 64 L1440 112 L1440 200 Z" />
        </svg>
        <div className="cd-container cd-final__inner">
          <h2 id="final-title" className="cd-final__title" data-reveal>
            {finalCta.heading}
          </h2>
          <p className="cd-final__copy" data-reveal>
            {finalCta.copy}
          </p>
          <div className="cd-final__actions" data-reveal>
            {finalCta.buttons.map((b) => (
              <a key={b.label} href={b.href} className={`cd-btn cd-btn--${b.variant === "primary" ? "primary" : b.variant === "secondary" ? "on-dark" : "text-light"}`}>
                {b.label}
              </a>
            ))}
          </div>
          <div className="cd-final__terms">
            <p>{packageTerms}</p>
            <p>{finalCta.travelDisclaimer}</p>
          </div>
        </div>
      </section>
    </>
  );
}
