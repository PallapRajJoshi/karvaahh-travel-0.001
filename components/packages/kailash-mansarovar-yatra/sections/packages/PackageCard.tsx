import Image from "next/image";
import { ctas } from "../../config";
import type { YatraPackage } from "../../types";
import CtaButton from "../../shared/CtaButton";
import Icon from "../../shared/Icon";
import { formatDate, formatInr } from "../../shared/format";

const modeIcon = {
  Overland: "route",
  "Helicopter-assisted": "helicopter",
  "Private / flexible": "compass",
  "Group departure": "people",
} as const;

export default function PackageCard({ pkg }: { pkg: YatraPackage }) {
  const titleId = `package-${pkg.id}-title`;
  return (
    <article id={`package-${pkg.id}`} className={`km-pkg${pkg.featured ? " km-pkg--featured" : ""}`} aria-labelledby={titleId}>
      <div className="km-frame km-pkg__media">
        <Image src={pkg.image.src} alt={pkg.image.alt} fill sizes="(min-width: 1024px) 600px, 92vw" />
        <span className="km-badge km-badge--glass km-pkg__mode">
          <Icon name={modeIcon[pkg.mode]} size={14} />
          {pkg.mode}
        </span>
      </div>

      <div className="km-pkg__body">
        <p className="km-pkg__duration">
          <Icon name="clock" size={16} />
          {pkg.duration ?? "Duration planned around you"}
        </p>
        <h3 id={titleId} className="km-pkg__title">
          {pkg.title}
        </h3>
        <p className="km-pkg__desc">{pkg.description}</p>

        <div className="km-pkg__route">
          <p className="km-pkg__label">Route overview</p>
          <ol className="km-pkg__stops">
            {pkg.routeOverview.map((stop) => (
              <li key={stop}>{stop}</li>
            ))}
          </ol>
        </div>

        <p className="km-pkg__best">
          <strong>Best for:</strong> {pkg.bestFor}
        </p>

        {pkg.note ? (
          <p className="km-pkg__note">
            <Icon name="alert" size={15} />
            {pkg.note}
          </p>
        ) : null}

        <div className="km-pkg__footer">
          <div className="km-pkg__price">
            {pkg.price ? (
              <>
                <span className="km-pkg__price-label">From</span>
                <span className="km-pkg__price-value">{formatInr(pkg.price.fromInr)}</span>
                <span className="km-pkg__price-meta">
                  {pkg.price.basis} · verified {formatDate(pkg.price.verifiedOn)} · subject to confirmation
                </span>
              </>
            ) : (
              <>
                <span className="km-pkg__price-label">Pricing</span>
                <span className="km-pkg__price-value km-pkg__price-value--quote">Request a Quote</span>
                <span className="km-pkg__price-meta">Tailored to route, dates and group size</span>
              </>
            )}
          </div>

          <div className="km-pkg__actions">
            {pkg.detailHref ? (
              <CtaButton cta={{ label: "View Package", href: pkg.detailHref, variant: "primary" }} srContext={pkg.title} />
            ) : (
              <CtaButton cta={{ label: "Request a Quote", href: pkg.enquiryHref, variant: "primary" }} srContext={pkg.title} />
            )}
            <CtaButton
              cta={{ ...ctas.customize, href: `${pkg.enquiryHref}&type=custom`, variant: "secondary" }}
              srContext={pkg.title}
            />
          </div>
        </div>
      </div>
    </article>
  );
}
