import { finalCta } from "../config/page.config";
import { SmartImage } from "../client/SmartImage";
import { CtaLink } from "../ui/CtaLink";
import "./info.css";

export function FinalCTA({ anchor }: { anchor: string }) {
  const [primary, secondary, tertiary] = finalCta.buttons;
  return (
    <section id={anchor} className="nsa-final" aria-labelledby="nsa-final-title">
      <div className="nsa-final__media">
        <SmartImage image={finalCta.image} sizes="100vw" className="nsa-final__img" />
      </div>
      <div className="nsa-final__overlay" aria-hidden="true" />

      <div className="nsa-container nsa-final__inner" data-reveal="">
        <p className="nsa-final__brand">{finalCta.brand}</p>
        <h2 id="nsa-final-title" className="nsa-final__title">
          {finalCta.title}
        </h2>
        <p className="nsa-final__subtitle">{finalCta.subtitle}</p>
        <div className="nsa-final__actions">
          {primary ? (
            <CtaLink href={primary.href} variant="primary" arrow>
              {primary.label}
            </CtaLink>
          ) : null}
          {secondary ? (
            <CtaLink href={secondary.href} variant="ghost-inverse">
              {secondary.label}
            </CtaLink>
          ) : null}
          {tertiary ? (
            <CtaLink href={tertiary.href} variant="ghost-inverse">
              {tertiary.label}
            </CtaLink>
          ) : null}
        </div>
      </div>
    </section>
  );
}
