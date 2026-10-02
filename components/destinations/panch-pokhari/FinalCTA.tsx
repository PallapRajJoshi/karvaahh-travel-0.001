import SafeImage from "@/components/shared/SafeImage";
import Reveal from "@/components/shared/Reveal";
import { finalCta } from "@/data/panch-pokhari/content";
import "./final-cta.css";

export default function FinalCTA() {
  return (
    <section className="pp-final-cta" aria-labelledby="final-cta-heading">
      <div className="pp-final-cta__media">
        <SafeImage
          src="/images/destinations/panch-pokhari/final-cta/lakes-panorama.jpg"
          alt="Panoramic view of the sacred lakes and Himalayan landscape at Panch Pokhari"
          fallbackLabel="Panch Pokhari — Begin Your Journey"
          fill
          sizes="100vw"
          className="pp-final-cta__image"
        />
        <div className="pp-final-cta__overlay" aria-hidden="true" />
      </div>

      <div className="pp-container pp-final-cta__content">
        <Reveal variant="fade-up">
          <p className="pp-final-cta__tagline">{finalCta.tagline}</p>
          <h2 id="final-cta-heading" className="pp-final-cta__heading">
            {finalCta.heading}
          </h2>
          <p className="pp-final-cta__body">{finalCta.body}</p>

          <div className="pp-final-cta__buttons">
            {finalCta.ctas.map((cta, index) => (
              <a
                key={cta.label}
                href={cta.href}
                className={`pp-btn ${index === 0 ? "pp-btn--primary" : "pp-btn--ghost"}`}
              >
                {cta.label}
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
