import { finalCta } from "@/lib/about/copy";
import { artFor, resolveImage } from "@/lib/about/resolve";
import { ROUTES, planHref } from "@/lib/about/routes";
import { CtaLink } from "../shared/CtaLink";
import { Pic } from "../shared/Pic";
import "./about-final-cta.css";

export function AboutFinalCta() {
  return (
    <section className="ab-cta ab-on-dark" aria-labelledby="about-cta-title">
      <div className="ab-cta__bg" aria-hidden="true">
        <div className="ab-cta__bg-inner ab-frame">
          <Pic image={resolveImage("cta")} art={artFor("cta")} sizes="100vw" decorative />
        </div>
      </div>
      <div className="ab-cta__veil" aria-hidden="true" />

      <div className="ab-container ab-cta__content">
        <h2 id="about-cta-title" className="ab-cta__title" data-reveal="">
          {finalCta.title}
        </h2>
        <p className="ab-cta__text" data-reveal="" style={{ ["--d" as string]: 1 }}>
          {finalCta.text}
        </p>
        <div className="ab-btn-row ab-cta__buttons" data-reveal="" style={{ ["--d" as string]: 2 }}>
          <CtaLink href={ROUTES.destinations}>{finalCta.primaryCta}</CtaLink>
          <CtaLink href={planHref("plan-my-journey")} variant="ghost-light" arrow={false}>
            {finalCta.secondaryCta}
          </CtaLink>
        </div>
      </div>

      {/* mountain silhouette */}
      <svg className="ab-cta__ridge" viewBox="0 0 1440 220" preserveAspectRatio="none" aria-hidden="true" focusable="false">
        <path
          d="M0 220V150l120-52 90 42 140-96 110 88 100-60 150 118 120-84 130 70 140-128 120 96 90-38 130 94V220z"
          fill="#0b1b2b"
          fillOpacity="0.92"
        />
        <path
          d="M0 220v-48l160-36 140 40 170-70 130 60 190-62 150 52 160-68 140 58 200-40V220z"
          fill="#0b1b2b"
        />
      </svg>
    </section>
  );
}
