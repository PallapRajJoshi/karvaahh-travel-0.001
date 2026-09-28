import Link from "next/link";
import { badaCharDhamPackage as pkg } from "./data/badaCharDhamPackage";
import SectionHeading from "./shared/SectionHeading";
import "./Package.css";

const inr = new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 });

/**
 * Commercial summary. Every commercial field is optional and rendered only
 * when present in badaCharDhamPackage.ts — nothing is invented.
 */
export default function PackageOverview() {
  const hasCommercials = Boolean(pkg.price || pkg.durationLabel || pkg.departures.length || pkg.hotelCategories.length);

  return (
    <div className="bcd-pkg__overview">
      <div className="bcd-pkg__summary">
        <SectionHeading id="bcd-package-title" title={pkg.heading} intro={pkg.intro} />

        {hasCommercials ? (
          <dl className="bcd-pkg__facts">
            {pkg.price && (
              <div>
                <dt>Indicative price</dt>
                <dd>
                  {inr.format(pkg.price.amount)} <span>{pkg.price.basis}</span>
                  <small>
                    Verified {pkg.price.verifiedOn}. Subject to confirmation.
                  </small>
                </dd>
              </div>
            )}
            {pkg.durationLabel && (
              <div>
                <dt>Duration</dt>
                <dd>{pkg.durationLabel}</dd>
              </div>
            )}
            {pkg.hotelCategories.length > 0 && (
              <div>
                <dt>Accommodation categories</dt>
                <dd>{pkg.hotelCategories.join(", ")}</dd>
              </div>
            )}
            {pkg.departures.length > 0 && (
              <div>
                <dt>Departures</dt>
                <dd>
                  <ul>
                    {pkg.departures.map((dep) => (
                      <li key={dep.label}>
                        {dep.label}
                        {dep.note && <small> {dep.note}</small>}
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
            )}
          </dl>
        ) : null}

        <p className="bcd-pkg__custom">{pkg.customMessage}</p>
      </div>

      <aside className="bcd-pkg__quote" aria-labelledby="bcd-quote-title">
        <h3 id="bcd-quote-title" className="bcd-pkg__quote-title">
          To prepare your quote, tell us
        </h3>
        <ul className="bcd-pkg__quote-list">
          {pkg.quoteNeeds.map((q) => (
            <li key={q}>{q}</li>
          ))}
        </ul>
        <div className="bcd-pkg__quote-actions">
          <Link href={pkg.enquiry.primary.href} className="bcd-btn bcd-btn--gold">
            {pkg.enquiry.primary.label}
          </Link>
          <Link href={pkg.enquiry.secondary.href} className="bcd-btn bcd-btn--ghost-light">
            {pkg.enquiry.secondary.label}
          </Link>
        </div>
      </aside>
    </div>
  );
}
