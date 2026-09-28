import Link from "next/link";
import type { TrekPackage } from "../types";
import { packageModeLabel } from "../data/packages";
import { ebcSite } from "../config/site";
import SmartImage from "./SmartImage";
import Icon from "./Icon";

const modeIcon: Record<TrekPackage["mode"], string> = {
  standard: "boot",
  helicopter: "helicopter",
  luxury: "star",
  private: "user",
  custom: "compass",
};

function formatPrice(p: NonNullable<TrekPackage["price"]>) {
  if (p.amount === undefined) return null;
  return new Intl.NumberFormat(p.currency === "INR" ? "en-IN" : "en-US", {
    style: "currency",
    currency: p.currency,
    maximumFractionDigits: 0,
  }).format(p.amount);
}

function formatDate(iso: string) {
  return new Intl.DateTimeFormat("en-IN", { month: "short", year: "numeric" }).format(new Date(iso));
}

/**
 * Package card. Honest by construction:
 *  - no price → "Request a Quote"
 *  - no href  → no "View Package" link (prevents dead CTAs)
 *  - helicopter / luxury modes surface their operating note
 */
export default function PackageCard({ pkg, index }: { pkg: TrekPackage; index: number }) {
  const price = pkg.price ? formatPrice(pkg.price) : null;
  const enquiry = `${ebcSite.links.contact}?enquiry=${pkg.slug}`;

  return (
    <li className={`ebc-pcard ebc-pcard--${pkg.mode}${pkg.featured ? " is-featured" : ""}`} data-reveal="" style={{ ["--i" as string]: index % 3 }}>
      <div className="ebc-img ebc-pcard__media">
        <SmartImage image={pkg.image} sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw" />
        <span className="ebc-pcard__mode">
          <Icon name={modeIcon[pkg.mode]} />
          {packageModeLabel[pkg.mode]}
        </span>
        {pkg.featured && <span className="ebc-pcard__featured">Most popular route</span>}
      </div>

      <div className="ebc-pcard__body">
        <p className="ebc-pcard__category">{pkg.category}</p>
        <h3 className="ebc-pcard__title">{pkg.title}</h3>
        <p className="ebc-pcard__desc">{pkg.description}</p>

        <ol className="ebc-pcard__route" aria-label={`Route for ${pkg.title}`}>
          {pkg.route.map((r) => (
            <li key={r}>{r}</li>
          ))}
        </ol>

        <dl className="ebc-pcard__facts">
          <div>
            <dt>
              <Icon name="calendar" />
              Duration
            </dt>
            <dd>{pkg.duration}</dd>
          </div>
          <div>
            <dt>
              <Icon name="gauge" />
              Difficulty
            </dt>
            <dd>{pkg.difficulty}</dd>
          </div>
          <div>
            <dt>
              <Icon name="altitude" />
              Max altitude
            </dt>
            <dd>{pkg.maxAltitude}</dd>
          </div>
        </dl>

        {pkg.modeNote && (
          <p className="ebc-pcard__note">
            <Icon name="info" />
            {pkg.modeNote}
          </p>
        )}

        <div className="ebc-pcard__footer">
          <div className="ebc-pcard__price">
            {price ? (
              <>
                <span className="ebc-pcard__price-label">From</span>
                <span className="ebc-pcard__price-value">{price}</span>
                <span className="ebc-pcard__price-basis">
                  {pkg.price!.basis}
                  {pkg.price!.verifiedOn && ` · verified ${formatDate(pkg.price!.verifiedOn)}`} · subject to confirmation
                </span>
              </>
            ) : (
              <>
                <span className="ebc-pcard__price-label">Price</span>
                <Link href={enquiry} className="ebc-pcard__quote">
                  Request a Quote<span className="ebc-sr-only"> for {pkg.title}</span>
                </Link>
              </>
            )}
          </div>
          <div className="ebc-pcard__actions">
            {pkg.href && (
              <Link href={pkg.href} className="ebc-btn ebc-btn--dark ebc-pcard__btn">
                View Package<span className="ebc-sr-only">: {pkg.title}</span>
              </Link>
            )}
            <Link href={enquiry} className={`ebc-btn ${pkg.href ? "ebc-btn--outline" : "ebc-btn--dark"} ebc-pcard__btn`}>
              Customize Your Trek<span className="ebc-sr-only">: {pkg.title}</span>
            </Link>
          </div>
        </div>
      </div>
    </li>
  );
}
