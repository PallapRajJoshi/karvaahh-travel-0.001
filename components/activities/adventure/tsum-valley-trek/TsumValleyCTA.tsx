import Image from "next/image";
import { CTA } from "@/data/destinations/tsum-valley/content";
import Reveal from "./shared/Reveal";
import { ArrowRight } from "./shared/Icons";
import "./TsumValleyCTA.css";

const VARIANT_CLASS = {
  primary: "tsum-btn--primary",
  secondary: "tsum-btn--ghost tsum-btn--light-ghost",
  ghost: "tsum-cta__text-link",
} as const;

export default function TsumValleyCTA() {
  return (
    <section className="tsum-cta" aria-labelledby="tsum-cta-title">
      <div className="tsum-cta__media">
        <Image src={CTA.image.src} alt="" fill sizes="100vw" className="tsum-cta__img" />
        <div className="tsum-cta__scrim" aria-hidden="true" />
      </div>

      <Reveal className="tsum-container tsum-cta__inner">
        <span className="tsum-flagline tsum-cta__flag" aria-hidden="true">
          <span /><span /><span /><span /><span />
        </span>
        <h2 className="tsum-cta__title" id="tsum-cta-title">{CTA.heading}</h2>
        <p className="tsum-cta__text">{CTA.text}</p>
        <div className="tsum-cta__buttons">
          {CTA.buttons.map((b) => (
            <a
              key={b.label}
              href={b.href}
              className={b.variant === "ghost" ? VARIANT_CLASS.ghost : `tsum-btn ${VARIANT_CLASS[b.variant]}`}
            >
              {b.label}
              {b.variant === "primary" && <ArrowRight />}
            </a>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
