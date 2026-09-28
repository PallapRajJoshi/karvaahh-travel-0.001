import Link from "next/link";
import { enquiryLink } from "@/data/india-pilgrimage/adi-kailash-om-parvat/site";
import { packageCopy } from "@/data/india-pilgrimage/adi-kailash-om-parvat/page";
import type { PackagePrice, YatraPackage } from "@/data/india-pilgrimage/adi-kailash-om-parvat/types";
import { KImage } from "./KImage";

const inr = new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 });
const verifiedDate = new Intl.DateTimeFormat("en-IN", { day: "numeric", month: "short", year: "numeric" });

function PriceBlock({ price }: { price: PackagePrice }) {
  if (price.kind === "quote") {
    return <p className="akop-pkg-card__price akop-pkg-card__price--quote">{packageCopy.quoteLabel}</p>;
  }
  const range = price.toINR ? `${inr.format(price.fromINR)} – ${inr.format(price.toINR)}` : `From ${inr.format(price.fromINR)}`;
  return (
    <div className="akop-pkg-card__price">
      <p className="akop-pkg-card__amount">{range}</p>
      <p className="akop-pkg-card__price-note">
        {price.basis ? `${price.basis} · ` : ""}
        {packageCopy.priceNote} · verified {verifiedDate.format(new Date(price.verifiedOn))}
      </p>
    </div>
  );
}

export function PackageCard({ pkg }: { pkg: YatraPackage }) {
  const titleId = `pkg-${pkg.id}`;
  // Split "Adi Kailash & Om Parvat Yatra – Standard Package" into a short
  // display name while keeping the full title for screen readers and SEO.
  const [, variant] = pkg.title.split(" – ");

  return (
    <article className={`akop-pkg-card${pkg.featured ? " akop-pkg-card--featured" : ""}`} aria-labelledby={titleId}>
      <div className="akop-pkg-card__media">
        <KImage
          image={pkg.image}
          sizes="(min-width: 1240px) 400px, (min-width: 768px) 50vw, 100vw"
          className="akop-pkg-card__img"
        />
        <span className="akop-badge akop-badge--on-image">{pkg.category}</span>
      </div>

      <div className="akop-pkg-card__body">
        <p className="akop-pkg-card__duration">{pkg.duration ?? packageCopy.durationFallback}</p>
        <h3 id={titleId} className="akop-pkg-card__title">
          {variant ? (
            <>
              <span className="akop-sr-only">Adi Kailash &amp; Om Parvat Yatra – </span>
              {variant}
            </>
          ) : (
            pkg.title
          )}
        </h3>
        <p className="akop-pkg-card__text">{pkg.description}</p>

        <div className="akop-pkg-card__route">
          <p className="akop-pkg-card__route-label">Route overview</p>
          <ol className="akop-pkg-card__route-list">
            {pkg.routeOverview.map((stop) => (
              <li key={stop}>{stop}</li>
            ))}
          </ol>
        </div>

        <div className="akop-pkg-card__footer">
          <PriceBlock price={pkg.price} />
          <div className="akop-pkg-card__actions">
            {pkg.detailHref ? (
              <Link href={pkg.detailHref} className="akop-btn akop-btn--primary akop-btn--small">
                {packageCopy.viewLabel}
                <span className="akop-sr-only">: {pkg.title}</span>
              </Link>
            ) : (
              <Link href={enquiryLink(pkg.id)} className="akop-btn akop-btn--primary akop-btn--small">
                {packageCopy.requestItineraryLabel}
                <span className="akop-sr-only">: {pkg.title}</span>
              </Link>
            )}
            <Link href={enquiryLink(pkg.id)} className="akop-btn akop-btn--ghost akop-btn--small">
              {packageCopy.customizeLabel}
              <span className="akop-sr-only">: {pkg.title}</span>
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
