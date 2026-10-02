import Image from "next/image";
import { finalCta } from "@/data/dhorpatan";
import CTAButton from "@/components/shared/CTAButton";
import "./FinalCTA.css";

export default function FinalCTA() {
  return (
    <section className="final-cta" id="contact-plan" aria-label="Plan your Dhorpatan journey">
      <div className="final-cta__media">
        <Image
          src={finalCta.image.src}
          alt={finalCta.image.alt}
          fill
          sizes="100vw"
          className="final-cta__image"
        />
        <div className="final-cta__overlay" aria-hidden="true" />
      </div>

      <div className="dhorpatan-page__container final-cta__content">
        <h2 className="final-cta__heading">{finalCta.heading}</h2>
        <p className="final-cta__text">{finalCta.supportingText}</p>
        <div className="final-cta__buttons">
          {finalCta.buttons.map((button, i) => (
            <CTAButton key={button.label} href={button.href} variant={i === 0 ? "primary" : "secondary"}>
              {button.label}
            </CTAButton>
          ))}
        </div>
      </div>
    </section>
  );
}
