import Image from "next/image";
import Link from "next/link";
import { finalCtaContent } from "@/data/destinations/rara-lake/content";
import "./RaraLakeFinalCTA.css";

export default function RaraLakeFinalCTA() {
  return (
    <section className="rara-final-cta" aria-labelledby="rara-final-cta-heading">
      <div className="rara-final-cta__media">
        <Image
          src={finalCtaContent.image.src}
          alt={finalCtaContent.image.alt}
          fill
          sizes="100vw"
          className="rara-final-cta__image"
        />
        <div className="rara-final-cta__overlay" aria-hidden="true" />
      </div>
      <div className="rara-final-cta__content">
        <h2 id="rara-final-cta-heading" className="rara-final-cta__heading">
          {finalCtaContent.heading}
        </h2>
        <p className="rara-final-cta__text">{finalCtaContent.supportingText}</p>
        <div className="rara-final-cta__buttons">
          {finalCtaContent.buttons.map((button, index) => (
            <Link
              key={button.href + button.label}
              href={button.href}
              className={`rara-final-cta__button ${
                index === 0 ? "rara-final-cta__button--primary" : "rara-final-cta__button--secondary"
              }`}
            >
              {button.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
