import Link from "next/link";
import { ArrowRight, CalendarDays, Clock, Info, MessageCircle } from "lucide-react";
import type { RussiaDestination, SeasonId } from "@/data/russia/destinations";
import { experienceLabel } from "@/data/russia/experiences";
import { russiaImage } from "@/data/russia/images";
import { russiaRegionById } from "@/data/russia/regions";
import { LIMITED_NOTE, destAnchor, enquireAbout, liveHref } from "@/lib/russia/config";
import DestMedia from "../asia/DestMedia";
import FilterButton from "./FilterButton";

const SEASON_LABEL: Record<SeasonId, string> = { spring: "Spring", summer: "Summer", autumn: "Autumn", winter: "Winter" };
export const seasonsText = (s?: SeasonId[]) =>
  !s?.length ? undefined : s.length === 4 ? "Year-round" : s.map((x) => SEASON_LABEL[x]).join(", ");

/**
 * Destination card. Explore → live page, else this page's section about it.
 * View Packages → filters the package grid. Limited destinations are offered as
 * an availability check, never as a normal booking.
 */
/** `anchor` gives the card the page-wide `dest-*` id; only one card per destination should have it. */
export default function RuDestinationCard({ d, packageCount, anchor = true }: { d: RussiaDestination; packageCount: number; anchor?: boolean }) {
  const cardId = anchor ? destAnchor(d.id) : `other-${d.id}`;
  const href = liveHref(d.href);
  const limited = d.operationalStatus === "limited";
  const region = russiaRegionById(d.region);

  return (
    <article className="asia-dcard ru-dcard" id={cardId} aria-labelledby={`${cardId}-h`}>
      <div className="asia-dcard__media">
        <DestMedia
          image={russiaImage(d.image)}
          label={d.name}
          tone={region.tone}
          sizes="(min-width: 1360px) 300px, (min-width: 1024px) 30vw, (min-width: 640px) 45vw, 92vw"
        />
        {d.featured && !limited && <span className="asia-dcard__badge">Featured</span>}
        {limited && <span className="ru-badge ru-badge--limited">Limited availability</span>}
        {packageCount > 0 && (
          <span className="asia-dcard__count">
            {packageCount} {packageCount === 1 ? "package" : "packages"}
          </span>
        )}
      </div>

      <div className="asia-dcard__body">
        <p className="ru-dcard__region">{region.name}</p>
        <h3 id={`${cardId}-h`} className="asia-dcard__title">{d.name}</h3>
        <p className="asia-dcard__desc">{d.description}</p>

        <ul className="asia-dcard__cities" aria-label={`Major attractions in ${d.name}`}>
          {d.attractions.slice(0, 4).map((a) => (
            <li key={a}>{a}</li>
          ))}
          {d.attractions.length > 4 && <li className="asia-dcard__more">+{d.attractions.length - 4} more</li>}
        </ul>

        <dl className="asia-dcard__meta">
          {seasonsText(d.idealSeason) && (
            <div><dt><CalendarDays size={14} aria-hidden="true" /> <span className="pkg-sr">Ideal season</span></dt><dd>{seasonsText(d.idealSeason)}</dd></div>
          )}
          {d.recommendedDuration && (
            <div><dt><Clock size={14} aria-hidden="true" /> <span className="pkg-sr">Recommended duration</span></dt><dd>{d.recommendedDuration}</dd></div>
          )}
        </dl>

        <p className="asia-dcard__styles">
          {d.travelStyles.slice(0, 3).map((s) => (
            <span key={s}>{experienceLabel(s)}</span>
          ))}
        </p>

        {limited && <p className="asia-dcard__note"><Info size={14} aria-hidden="true" /> {LIMITED_NOTE}.</p>}

        <div className="asia-dcard__foot ru-dcard__foot">
          {href ? (
            <Link href={href} className="pkg-btn pkg-btn--outline">
              Explore <ArrowRight size={16} className="pkg-arrow" aria-hidden="true" />
            </Link>
          ) : d.sectionId ? (
            <a href={`#${d.sectionId}`} className="pkg-btn pkg-btn--outline">
              Explore <ArrowRight size={16} className="pkg-arrow" aria-hidden="true" />
            </a>
          ) : null}
          {packageCount > 0 && !limited ? (
            <FilterButton filter={{ destination: d.partOf ?? d.id }} className="pkg-btn asia-btn--navy">
              View Packages
            </FilterButton>
          ) : (
            <a href={enquireAbout(d.name)} target="_blank" rel="noopener noreferrer" className="pkg-btn asia-btn--navy">
              <MessageCircle size={16} aria-hidden="true" /> {limited ? "Check Availability" : "Customize"}
              <span className="pkg-sr"> for {d.name} (opens WhatsApp)</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
