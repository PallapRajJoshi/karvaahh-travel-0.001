import Link from "next/link";
import { ArrowRight, CalendarDays, Clock, Info, MessageCircle } from "lucide-react";
import type { AsiaDestination } from "@/data/asia-destinations";
import { regionById } from "@/data/asia-regions";
import { styleLabel } from "@/data/travel-styles";
import { DESTINATION_SITE_LINKS, destAnchor, enquireAbout, liveHref } from "@/lib/asia/config";
import DestMedia from "./DestMedia";
import Flag from "./Flag";

export const daysLabel = ([min, max]: [number, number]) => (min === max ? `${min} days` : `${min}–${max} days`);

/**
 * Destination card. CTA priority: live country page → existing Karvaahh page →
 * "Customize This Destination" enquiry. Package counts come from the data and
 * are only shown when there is at least one journey.
 */
export default function DestinationCard({ d, packageCount }: { d: AsiaDestination; packageCount: number }) {
  const href = liveHref(d.href);
  const siteLink = DESTINATION_SITE_LINKS[d.id];
  const cities = d.cities.slice(0, 4);
  const more = d.cities.length - cities.length;

  return (
    <article className="asia-dcard" id={destAnchor(d.id)} aria-labelledby={`${destAnchor(d.id)}-h`}>
      <div className="asia-dcard__media">
        <DestMedia
          image={d.image}
          iso={d.iso}
          label={d.country}
          tone={regionById(d.region).tone}
          sizes="(min-width: 1360px) 300px, (min-width: 1024px) 30vw, (min-width: 640px) 45vw, 92vw"
        />
        {d.featured && <span className="asia-dcard__badge">Featured</span>}
        {packageCount > 0 && (
          <span className="asia-dcard__count">
            {packageCount} {packageCount === 1 ? "journey" : "journeys"}
          </span>
        )}
      </div>

      <div className="asia-dcard__body">
        <h4 id={`${destAnchor(d.id)}-h`} className="asia-dcard__title">
          <Flag iso={d.iso} size={22} />
          {d.country}
        </h4>
        <p className="asia-dcard__desc">{d.description}</p>

        <ul className="asia-dcard__cities" aria-label={`Places in ${d.country}`}>
          {cities.map((c) => (
            <li key={c}>{c}</li>
          ))}
          {more > 0 && <li className="asia-dcard__more">+{more} more</li>}
        </ul>

        <dl className="asia-dcard__meta">
          <div>
            <dt><Clock size={14} aria-hidden="true" /> <span className="pkg-sr">Suggested duration</span></dt>
            <dd>{daysLabel(d.days)}</dd>
          </div>
          {d.bestTime && (
            <div>
              <dt><CalendarDays size={14} aria-hidden="true" /> <span className="pkg-sr">Best time</span></dt>
              <dd>{d.bestTime}</dd>
            </div>
          )}
        </dl>

        <p className="asia-dcard__styles">
          {d.travelStyles.slice(0, 3).map((s) => (
            <span key={s}>{styleLabel(s)}</span>
          ))}
        </p>

        {d.note && (
          <p className="asia-dcard__note">
            <Info size={14} aria-hidden="true" /> {d.note}
          </p>
        )}

        <div className="asia-dcard__foot">
          {href ? (
            <Link href={href} className="pkg-btn asia-btn--navy pkg-btn--block">
              Explore {d.country} <ArrowRight size={16} className="pkg-arrow" aria-hidden="true" />
            </Link>
          ) : siteLink ? (
            <Link href={siteLink.href} className="pkg-btn asia-btn--navy pkg-btn--block">
              {siteLink.label} <ArrowRight size={16} className="pkg-arrow" aria-hidden="true" />
            </Link>
          ) : (
            <a
              href={enquireAbout(d.country)}
              target="_blank"
              rel="noopener noreferrer"
              className="pkg-btn pkg-btn--outline pkg-btn--block"
            >
              <MessageCircle size={16} aria-hidden="true" /> Customize This Destination
              <span className="pkg-sr"> (opens WhatsApp)</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
