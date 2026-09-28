import Link from "next/link";
import type { TourPackage } from "../../types";
import { SmartImage } from "../../client/SmartImage";
import { enquiryHref } from "../../config/page.config";
import { formatPrice, formatDate, staggerStyle } from "../../lib/format";
import { Icon } from "../Icon";

/**
 * Package card.
 *  - No verified price → "Price on request" + a quote CTA (never an invented number).
 *  - No package page yet → the button opens the enquiry form with this
 *    package pre-selected, so there's never a dead link. Once `href` is set
 *    in data/packages.ts, it becomes "View Package".
 */
export function PackageCard({ item, index }: { item: TourPackage; index: number }) {
  const hasPage = Boolean(item.href);
  const cta = hasPage
    ? { label: "View Package", href: item.href as string }
    : { label: "Request a Quote", href: enquiryHref({ package: item.id, intent: "quote" }) };

  return (
    <article
      className={`nsa-pkg-card${item.featured ? " nsa-pkg-card--featured" : ""}`}
      data-reveal=""
      style={staggerStyle(index)}
    >
      <div className="nsa-pkg-card__media">
        <SmartImage
          image={item.image}
          sizes="(min-width: 1200px) 390px, (min-width: 768px) 46vw, 92vw"
          className="nsa-pkg-card__img"
        />
        <span className="nsa-badge nsa-badge--light">{item.category}</span>
      </div>

      <div className="nsa-pkg-card__body">
        <p className="nsa-pkg-card__duration">
          <Icon name="calendar" size={15} />
          <span>{item.duration}</span>
          {item.duration !== "Your dates" ? <span className="nsa-pkg-card__hint">· indicative</span> : null}
        </p>
        <h3 className="nsa-pkg-card__title">{item.title}</h3>
        <p className="nsa-pkg-card__text">{item.description}</p>

        <ul className="nsa-pkg-card__highlights" aria-label="Route highlights">
          {item.highlights.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>

        <div className="nsa-pkg-card__footer">
          <div className="nsa-pkg-card__price">
            {item.price ? (
              <>
                <span className="nsa-pkg-card__price-label">From</span>
                <span className="nsa-pkg-card__price-value">{formatPrice(item.price.amount, item.price.currency)}</span>
                <span className="nsa-pkg-card__price-note">
                  {item.price.basis} · indicative, verified {formatDate(item.price.verifiedOn)} · subject to confirmation
                </span>
              </>
            ) : (
              <>
                <span className="nsa-pkg-card__price-label">Price</span>
                <span className="nsa-pkg-card__price-value nsa-pkg-card__price-value--quote">On request</span>
              </>
            )}
          </div>
          <Link
            href={cta.href}
            className="nsa-btn nsa-btn--secondary nsa-btn--sm"
            aria-label={`${cta.label}: ${item.title}`}
          >
            <span>{cta.label}</span>
            <Icon name="arrow-right" size={16} className="nsa-btn__arrow" />
          </Link>
        </div>
      </div>
    </article>
  );
}
