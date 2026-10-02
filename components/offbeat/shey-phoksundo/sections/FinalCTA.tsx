"use client";

import Image from "next/image";
import Link from "next/link";
import { FINAL_CTA } from "../data";
import { useScrollReveal } from "../shared/useScrollReveal";
import "./FinalCTA.css";

export default function FinalCTA() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section className="phoksundo-final-cta" ref={ref}>
      <div className="phoksundo-final-cta__media">
        <Image
          src={FINAL_CTA.image}
          alt={FINAL_CTA.imageAlt}
          fill
          sizes="100vw"
          className="phoksundo-final-cta__image"
        />
        <div className="phoksundo-final-cta__overlay" aria-hidden="true" />
      </div>

      <div className="phoksundo-final-cta__content" data-reveal>
        <h2 className="phoksundo-final-cta__heading">{FINAL_CTA.heading}</h2>
        <p className="phoksundo-final-cta__text">{FINAL_CTA.supportingText}</p>

        <div className="phoksundo-final-cta__buttons">
          {FINAL_CTA.buttons.map((button, index) => (
            <Link
              key={button.label}
              href={button.href}
              className={`phoksundo-final-cta__button ${
                index === 0
                  ? "phoksundo-final-cta__button--primary"
                  : "phoksundo-final-cta__button--secondary"
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
