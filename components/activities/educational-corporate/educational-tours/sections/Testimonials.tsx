import { LINKS, TESTIMONIALS, TESTIMONIALS_SECTION } from "../data/content";
import { CtaLink } from "../shared/CtaLink";
import { Reveal } from "../shared/Reveal";
import { SectionHeading } from "../shared/SectionHeading";
import "./Testimonials.css";

/**
 * Shows verified testimonials only. While TESTIMONIALS is empty it renders an invitation —
 * nothing is fabricated.
 */
export function Testimonials() {
  const hasAny = TESTIMONIALS.length > 0;

  return (
    <section id="experiences" className="et-section et-section--white" aria-labelledby="et-test-title">
      <div className="et-container">
        <SectionHeading eyebrow={TESTIMONIALS_SECTION.eyebrow} title={TESTIMONIALS_SECTION.title} id="et-test-title" align="center" />

        {hasAny ? (
          <ul className="et-test__grid">
            {TESTIMONIALS.map((t, i) => (
              <Reveal as="li" key={t.quote.slice(0, 24)} index={i % 3} className="et-test__card">
                <blockquote>
                  <p>“{t.quote}”</p>
                </blockquote>
                <p className="et-test__meta">
                  {t.institution ? <strong>{t.institution}</strong> : null}
                  <span>
                    {t.tourType} · {t.destination}
                  </span>
                </p>
              </Reveal>
            ))}
          </ul>
        ) : (
          <Reveal className="et-test__invite">
            <p>{TESTIMONIALS_SECTION.fallback}</p>
            <CtaLink href={LINKS.inquiry} variant="primary">
              {TESTIMONIALS_SECTION.cta}
            </CtaLink>
          </Reveal>
        )}
      </div>
    </section>
  );
}
