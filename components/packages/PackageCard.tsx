import Link from "next/link";
import type { TravelPackage } from "@/data/packages/package-types";
import { buildEnquiryHref } from "@/lib/packages/config";
import {
  BADGE_LABEL,
  CATEGORY_META,
  durationLabel,
  formatPrice,
  includesLine,
  routeText,
} from "@/lib/packages/query";
import SafeImage from "./SafeImage";

export type CardVariant = "default" | "cinematic" | "row";

interface Props {
  pkg: TravelPackage;
  variant?: CardVariant;
  /** Only passed from client components (explorer). Server usage renders a plain, JS-free card. */
  onQuickView?: (pkg: TravelPackage) => void;
  /** Set true for the first above-the-fold card image only. */
  priority?: boolean;
  headingLevel?: 2 | 3 | 4;
}

const CARD_SIZES: Record<CardVariant, string> = {
  default: "(min-width:1280px) 25vw, (min-width:768px) 45vw, 88vw",
  cinematic: "(min-width:1024px) 45vw, 92vw",
  row: "112px",
};

function Arrow() {
  return (
    <svg className="pkg-arrow" viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" focusable="false">
      <path d="M5 12h14M13 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Fallback() {
  return (
    <svg className="pkg-media__fallback" viewBox="0 0 400 300" preserveAspectRatio="xMidYMax slice" aria-hidden="true" focusable="false">
      <path d="M0 300V210l70-70 50 45 80-110 90 120 45-40 65 70v75z" fill="currentColor" opacity=".16" />
      <path d="M0 300v-60l90-55 60 40 90-80 160 110v45z" fill="currentColor" opacity=".24" />
    </svg>
  );
}

export default function PackageCard({ pkg, variant = "default", onQuickView, priority = false, headingLevel = 3 }: Props) {
  const Heading = `h${headingLevel}` as "h2" | "h3" | "h4";
  const dur = durationLabel(pkg);
  const route = routeText(pkg);
  const price = formatPrice(pkg);
  const inc = includesLine(pkg).slice(0, 4);
  const cats = pkg.categories.slice(0, 2).map((c) => CATEGORY_META[c].label).join(" · ");
  const enquire = buildEnquiryHref({
    id: pkg.id,
    name: pkg.name,
    href: pkg.href ?? "",
  });
  const alt = pkg.imageAlt ?? `${pkg.name}, ${pkg.country}`;
  const titleEl = pkg.href ? (
    <Link href={pkg.href} className="pkg-card__link">{pkg.name}</Link>
  ) : (
    pkg.name
  );

  const priceEl = (
    <div className="pkg-price">
      <span className="pkg-price__label">{price.label}</span>
      {price.amount ? (
        <>
          <span className="pkg-price__amount">{price.amount}</span>
          <span className="pkg-price__basis">{price.basis}</span>
        </>
      ) : (
        <>
          <span className="pkg-price__amount pkg-price__amount--text">Request price</span>
          <span className="pkg-price__basis">tailored to your dates and group</span>
        </>
      )}
    </div>
  );

  /* ───── compact row (Journeys of Faith) ───── */
  if (variant === "row") {
    return (
      <article className="pkg-card pkg-card--row">
        <div className="pkg-media pkg-card__thumb" data-country={pkg.country}>
          <Fallback />
          <SafeImage src={pkg.image} alt="" sizes={CARD_SIZES.row} className="pkg-media__img" />
        </div>
        <div className="pkg-card__body">
          <p className="pkg-card__meta">{[dur, pkg.country].filter(Boolean).join(" · ")}</p>
          <Heading className="pkg-card__title">{titleEl}</Heading>
          <p className="pkg-card__desc">{pkg.shortDescription}</p>
          <div className="pkg-card__rowfoot">
            <span className="pkg-price__amount pkg-price__amount--sm">{price.amount ?? "Request price"}</span>
            <a className="pkg-btn pkg-btn--text" href={enquire} aria-label={`Enquire about ${pkg.name}`}>Enquire</a>
            {pkg.href && (
              <Link className="pkg-btn pkg-btn--text" href={pkg.href} aria-label={`View details of ${pkg.name}`}>
                Details <Arrow />
              </Link>
            )}
          </div>
        </div>
      </article>
    );
  }

  /* ───── cinematic (Adventure, International) ───── */
  if (variant === "cinematic") {
    return (
      <article className="pkg-card pkg-card--cinematic">
        <div className="pkg-media pkg-card__cine-media" data-country={pkg.country}>
          <Fallback />
          <SafeImage src={pkg.image} alt={alt} sizes={CARD_SIZES.cinematic} priority={priority} className="pkg-media__img" />
        </div>
        <div className="pkg-card__cine-body">
          {pkg.badge && <span className="pkg-badge">{BADGE_LABEL[pkg.badge]}</span>}
          <p className="pkg-card__meta pkg-card__meta--light">{[dur, pkg.country, cats].filter(Boolean).join(" · ")}</p>
          <Heading className="pkg-card__title pkg-card__title--light">{titleEl}</Heading>
          <p className="pkg-card__desc pkg-card__desc--light">{pkg.shortDescription}</p>
          <div className="pkg-card__cine-foot">
            <span className="pkg-price__amount pkg-price__amount--sm">
              {price.amount ? `From ${price.amount}` : "Request price"}
            </span>
            <span className="pkg-card__cine-actions">
              <a className="pkg-btn pkg-btn--ghost" href={enquire} aria-label={`Enquire about ${pkg.name}`}>Enquire</a>
              {pkg.href && (
                <Link className="pkg-btn pkg-btn--light" href={pkg.href} aria-label={`View details of ${pkg.name}`}>
                  View details <Arrow />
                </Link>
              )}
            </span>
          </div>
        </div>
      </article>
    );
  }

  /* ───── default (image-led editorial card) ───── */
  return (
    <article className="pkg-card">
      <div className="pkg-media pkg-card__media" data-country={pkg.country}>
        <Fallback />
        <SafeImage src={pkg.image} alt={alt} sizes={CARD_SIZES.default} priority={priority} className="pkg-media__img" />
        {pkg.badge && <span className="pkg-badge pkg-card__badge">{BADGE_LABEL[pkg.badge]}</span>}
        {(dur || route) && (
          <div className="pkg-card__overlay" aria-hidden="true">
            {dur && <strong>{dur}</strong>}
            {route && <span>{route}</span>}
          </div>
        )}
        {onQuickView && (
          <button type="button" className="pkg-card__quick" onClick={() => onQuickView(pkg)} aria-label={`Quick view: ${pkg.name}`}>
            Quick view
          </button>
        )}
      </div>

      <div className="pkg-card__body">
        <p className="pkg-card__meta">{[pkg.country, cats].filter(Boolean).join(" · ")}</p>
        <Heading className="pkg-card__title">{titleEl}</Heading>
        <p className="pkg-card__desc">{pkg.shortDescription}</p>

        {(dur || route || inc.length > 0) && (
          <div className="pkg-snapshot">
            <p className="pkg-snapshot__label">Journey snapshot</p>
            {dur && <p className="pkg-snapshot__dur">{dur}</p>}
            {route && <p className="pkg-snapshot__route">{route}</p>}
            {inc.length > 0 && (
              <ul className="pkg-snapshot__chips">
                {inc.map((i) => <li key={i}>{i}</li>)}
              </ul>
            )}
          </div>
        )}

        {pkg.arrivalPoints && pkg.arrivalPoints.length > 0 && (
          <p className="pkg-card__arrival">
            <span>Arrival point</span> {pkg.arrivalPoints.map((a) => `Via ${a}`).join(" · ")}
          </p>
        )}

        <div className="pkg-card__foot">
          {priceEl}
          <div className="pkg-card__actions">
            <a className="pkg-btn pkg-btn--primary" href={enquire} aria-label={`Enquire about ${pkg.name}`}>Enquire Now</a>
            {pkg.href && (
              <Link className="pkg-btn pkg-btn--outline" href={pkg.href} aria-label={`View details of ${pkg.name}`}>
                View Details <Arrow />
              </Link>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
