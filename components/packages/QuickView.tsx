"use client";

import Link from "next/link";
import type { TravelPackage } from "@/data/packages/package-types";
import { buildEnquiryHref } from "@/lib/packages/config";
import { BADGE_LABEL, CATEGORY_META, durationLabel, formatPrice, includesLine } from "@/lib/packages/query";
import RouteLine from "./RouteLine";
import SafeImage from "./SafeImage";
import Sheet from "./Sheet";

export default function QuickView({ pkg, onClose }: { pkg: TravelPackage | null; onClose: () => void }) {
  return (
    <Sheet open={pkg !== null} onClose={onClose} label={pkg ? `Quick view: ${pkg.name}` : "Quick view"}>
      {pkg && <Body pkg={pkg} />}
    </Sheet>
  );
}

function Body({ pkg }: { pkg: TravelPackage }) {
  const dur = durationLabel(pkg);
  const price = formatPrice(pkg);
  const inc = [...includesLine(pkg), ...(pkg.inclusions ?? [])];
  const stops = pkg.route ?? (pkg.destinations.length > 1 ? pkg.destinations : []);

  return (
    <div className="pkg-qv">
      <div className="pkg-media pkg-qv__media" data-country={pkg.country}>
        <SafeImage src={pkg.image} alt={pkg.imageAlt ?? `${pkg.name}, ${pkg.country}`} sizes="(min-width:768px) 420px, 100vw" className="pkg-media__img" />
        {pkg.badge && <span className="pkg-badge pkg-card__badge">{BADGE_LABEL[pkg.badge]}</span>}
      </div>
      <div className="pkg-qv__body">
        <p className="pkg-card__meta">
          {[dur, pkg.country, pkg.categories.map((c) => CATEGORY_META[c].label).join(" · ")].filter(Boolean).join(" · ")}
        </p>
        <h2 className="pkg-qv__title">{pkg.name}</h2>
        <p className="pkg-card__desc">{pkg.shortDescription}</p>

        {stops.length > 1 && <RouteLine stops={stops} label={`Route for ${pkg.name}`} />}

        <div className="pkg-price pkg-qv__price">
          <span className="pkg-price__label">{price.label}</span>
          <span className={`pkg-price__amount${price.amount ? "" : " pkg-price__amount--text"}`}>{price.amount ?? "Request price"}</span>
          <span className="pkg-price__basis">{price.basis ?? "tailored to your dates and group"}</span>
        </div>

        {pkg.highlights && pkg.highlights.length > 0 && (
          <section>
            <h3 className="pkg-qv__h">Highlights</h3>
            <ul className="pkg-qv__list">{pkg.highlights.map((h) => <li key={h}>{h}</li>)}</ul>
          </section>
        )}
        {inc.length > 0 && (
          <section>
            <h3 className="pkg-qv__h">Included</h3>
            <ul className="pkg-qv__list">{inc.map((h) => <li key={h}>{h}</li>)}</ul>
          </section>
        )}
        {pkg.arrivalPoints && pkg.arrivalPoints.length > 0 && (
          <p className="pkg-card__arrival"><span>Arrival point</span> {pkg.arrivalPoints.map((a) => `Via ${a}`).join(" · ")}</p>
        )}

        <div className="pkg-card__actions pkg-qv__actions">
          <a className="pkg-btn pkg-btn--primary" href={buildEnquiryHref(pkg)} aria-label={`Enquire about ${pkg.name}`}>Enquire Now</a>
          {pkg.href ? (
            <Link className="pkg-btn pkg-btn--outline" href={pkg.href} aria-label={`View full itinerary for ${pkg.name}`}>View Full Itinerary</Link>
          ) : (
            <p className="pkg-qv__note">A full itinerary page is coming soon. Enquire and we will send the details.</p>
          )}
        </div>
      </div>
    </div>
  );
}
