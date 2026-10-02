import Image from "next/image";
import Link from "next/link";
import { heroContent } from "@/data/destinations/rara-lake/content";
import "./RaraLakeHero.css";

export default function RaraLakeHero() {
  return (
    <section className="rara-hero" aria-label="Rara Lake introduction">
      <div className="rara-hero__media">
        <Image
          src={heroContent.image.src}
          alt={heroContent.image.alt}
          fill
          priority
          sizes="100vw"
          className="rara-hero__image"
        />
        <div className="rara-hero__overlay" aria-hidden="true" />
      </div>

      <div className="rara-hero__content">
        <span className="rara-hero__eyebrow">{heroContent.eyebrow}</span>
        <h1 className="rara-hero__heading">{heroContent.heading}</h1>
        <p className="rara-hero__subtitle">{heroContent.subtitle}</p>

        <div className="rara-hero__ctas">
          <Link href={heroContent.primaryCta.href} className="rara-hero__cta rara-hero__cta--primary">
            {heroContent.primaryCta.label}
          </Link>
          <Link href={heroContent.secondaryCta.href} className="rara-hero__cta rara-hero__cta--secondary">
            {heroContent.secondaryCta.label}
          </Link>
        </div>

        <ul className="rara-hero__facts" aria-label="Key destination facts">
          {heroContent.facts.map((fact, index) => (
            <li key={fact} className="rara-hero__fact">
              {fact}
              {index < heroContent.facts.length - 1 && (
                <span className="rara-hero__fact-divider" aria-hidden="true">
                  |
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>

      <div className="rara-hero__scroll-indicator" aria-hidden="true">
        <span className="rara-hero__scroll-line" />
      </div>
    </section>
  );
}
