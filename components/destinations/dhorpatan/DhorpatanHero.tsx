import Image from "next/image";
import { heroContent } from "@/data/dhorpatan";
import CTAButton from "@/components/shared/CTAButton";
import "./DhorpatanHero.css";

/**
 * Server component: the entrance animation is pure CSS (keyframe fade/rise on
 * load), so content is visible immediately even if JS is slow or fails —
 * consistent with the "explicit first-visible-state + CSS fallback" lesson
 * from prior province-page builds.
 */
export default function DhorpatanHero() {
  return (
    <section className="dhorpatan-hero" aria-label="Dhorpatan Hunting Reserve introduction">
      <div className="dhorpatan-hero__media">
        <Image
          src={heroContent.image.src}
          alt={heroContent.image.alt}
          fill
          priority
          sizes="100vw"
          className="dhorpatan-hero__image"
        />
        <div className="dhorpatan-hero__overlay" aria-hidden="true" />
      </div>

      <div className="dhorpatan-hero__content dhorpatan-page__container">
        <span className="dhorpatan-hero__eyebrow">{heroContent.eyebrow}</span>
        <h1 className="dhorpatan-hero__heading">{heroContent.heading}</h1>
        <p className="dhorpatan-hero__subtitle">{heroContent.subtitle}</p>

        <div className="dhorpatan-hero__ctas">
          <CTAButton href={heroContent.primaryCta.href} variant="primary">
            {heroContent.primaryCta.label}
          </CTAButton>
          <CTAButton href={heroContent.secondaryCta.href} variant="secondary">
            {heroContent.secondaryCta.label}
          </CTAButton>
        </div>

        <p className="dhorpatan-hero__facts">{heroContent.factStrip}</p>
      </div>

      <div className="dhorpatan-hero__scroll-indicator" aria-hidden="true">
        <span />
      </div>
    </section>
  );
}
