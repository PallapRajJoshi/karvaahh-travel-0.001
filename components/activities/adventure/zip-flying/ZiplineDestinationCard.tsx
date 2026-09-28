import Image from "next/image";
import Link from "next/link";
import StatusBadge from "./StatusBadge";
import type { AdventureSite } from "./data/zipFlyingData";
import "./ZiplineDestinationCard.css";

/**
 * Reusable site card for adventure pages (zipline, bungee, paragliding…).
 * Renders a topographic placeholder when no image is supplied.
 */
export default function ZiplineDestinationCard({ site }: { site: AdventureSite }) {
  const isAnchor = site.cta.href.startsWith("#");
  return (
    <article className="adv-card">
      <div className={`adv-card__media${site.image ? "" : " adv-card__media--blank"}`}>
        {site.image ? (
          <Image src={site.image.src} alt={site.image.alt} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="adv-card__img" />
        ) : (
          <span className="adv-card__region-mark" aria-hidden="true">{site.region.split("/")[0].trim()}</span>
        )}
        <StatusBadge status={site.status} tone="dark" />
      </div>
      <div className="adv-card__body">
        <p className="adv-card__region">{site.region}</p>
        <h3 className="adv-card__title">{site.name}</h3>
        <p className="adv-card__spec">{site.specification}</p>
        <p className="adv-card__desc">{site.description}</p>
        <div className="adv-card__foot">
          <p className="adv-card__price">
            <span className="adv-card__price-label">Indicative</span> {site.price}
          </p>
          {isAnchor ? (
            <a className="adv-card__cta" href={site.cta.href}>{site.cta.label}</a>
          ) : (
            <Link className="adv-card__cta" href={site.cta.href}>{site.cta.label}</Link>
          )}
        </div>
      </div>
    </article>
  );
}
