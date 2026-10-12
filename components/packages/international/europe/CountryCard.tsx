import Link from "next/link";
import { AlertTriangle, ArrowRight, CalendarDays, Globe2, Info, MessageCircle } from "lucide-react";
import type { EuropeCountry } from "@/data/europe/countries";
import { regionById } from "@/data/europe/regions";
import { styleLabel } from "@/data/europe/travel-styles";
import { countryAnchor, enquireAbout, liveHref } from "@/lib/europe/config";
import DestMedia from "../asia/DestMedia";
import Flag from "../asia/Flag";
import FilterButton from "./FilterButton";

/**
 * Country card. CTA priority: live country page → "View N packages" (filters the
 * carousel) → "Customize" enquiry. Inactive countries keep their advisory and
 * get no booking CTA.
 */
export default function CountryCard({ c, packageCount }: { c: EuropeCountry; packageCount: number }) {
  const href = liveHref(c.href);
  const inactive = c.operationalStatus === "inactive";
  const cities = c.cities.slice(0, 4);
  const more = c.cities.length - cities.length;

  return (
    <article
      className={`asia-dcard eu-ccard${inactive ? " is-inactive" : ""}`}
      id={countryAnchor(c.id)}
      aria-labelledby={`${countryAnchor(c.id)}-h`}
    >
      <div className="asia-dcard__media">
        <DestMedia
          image={c.image}
          iso={c.iso}
          label={c.name}
          tone={regionById(c.region).tone}
          sizes="(min-width: 1360px) 300px, (min-width: 1024px) 30vw, (min-width: 640px) 45vw, 92vw"
        />
        <span className="eu-ccard__badges">
          {c.featured && <span className="asia-dcard__badge eu-badge">Featured</span>}
          {c.transcontinental && (
            <span className="eu-badge eu-badge--trans" title="Spans Europe and Asia, or is commonly combined with European trips">
              <Globe2 size={12} aria-hidden="true" /> Transcontinental
            </span>
          )}
        </span>
        {packageCount > 0 && (
          <span className="asia-dcard__count">
            {packageCount} {packageCount === 1 ? "package" : "packages"}
          </span>
        )}
      </div>

      <div className="asia-dcard__body">
        <h4 id={`${countryAnchor(c.id)}-h`} className="asia-dcard__title">
          <Flag iso={c.iso} size={22} />
          {c.name}
        </h4>
        <p className="asia-dcard__desc">{c.description}</p>

        <ul className="asia-dcard__cities" aria-label={`Places in ${c.name}`}>
          {cities.map((city) => (
            <li key={city}>{city}</li>
          ))}
          {more > 0 && <li className="asia-dcard__more">+{more} more</li>}
        </ul>

        {c.bestTime && (
          <dl className="asia-dcard__meta">
            <div>
              <dt><CalendarDays size={14} aria-hidden="true" /> <span className="pkg-sr">Best time</span></dt>
              <dd>{c.bestTime}</dd>
            </div>
          </dl>
        )}

        {c.travelStyles.length > 0 && (
          <p className="asia-dcard__styles">
            {c.travelStyles.slice(0, 3).map((s) => (
              <span key={s}>{styleLabel(s)}</span>
            ))}
          </p>
        )}

        <p className="eu-ccard__entry">
          <span className={c.schengen ? "is-yes" : ""}>{c.schengen ? "Schengen" : "Non-Schengen"}</span>
          <span>{c.currency.code}</span>
        </p>

        {c.advisory && (
          <p className={`asia-dcard__note${inactive ? " eu-note--warn" : ""}`}>
            {inactive ? <AlertTriangle size={14} aria-hidden="true" /> : <Info size={14} aria-hidden="true" />} {c.advisory}
          </p>
        )}

        {!inactive && (
          <div className="asia-dcard__foot eu-ccard__foot">
            {href ? (
              <Link href={href} className="pkg-btn asia-btn--navy pkg-btn--block">
                Explore {c.name} <ArrowRight size={16} className="pkg-arrow" aria-hidden="true" />
              </Link>
            ) : packageCount > 0 && c.operationalStatus === "active" ? (
              <FilterButton filter={{ country: c.id }} target="packages" className="pkg-btn asia-btn--navy pkg-btn--block">
                View {packageCount} {packageCount === 1 ? "Package" : "Packages"}
                <ArrowRight size={16} className="pkg-arrow" aria-hidden="true" />
              </FilterButton>
            ) : null}
            <a href={enquireAbout(c.name)} target="_blank" rel="noopener noreferrer" className="pkg-btn pkg-btn--outline pkg-btn--block">
              <MessageCircle size={16} aria-hidden="true" /> {c.operationalStatus === "limited" ? "Enquire" : "Customize"} {c.name}
              <span className="pkg-sr"> (opens WhatsApp)</span>
            </a>
          </div>
        )}
      </div>
    </article>
  );
}
