import Link from "next/link";
import { ArrowRight, BedDouble, Check, ChevronDown, Clock, Info, MessageCircle, TrainFront, UtensilsCrossed } from "lucide-react";
import { russiaDestinationById } from "@/data/russia/destinations";
import { experienceLabel } from "@/data/russia/experiences";
import { russiaImage } from "@/data/russia/images";
import type { RussiaPackage } from "@/data/russia/packages";
import { russiaRegionById } from "@/data/russia/regions";
import { LIMITED_NOTE, enquireAbout, liveHref } from "@/lib/russia/config";
import RouteLine from "../../RouteLine";
import DestMedia from "../asia/DestMedia";

/** "limited" if any destination on the route is limited. */
export const packageIsLimited = (p: RussiaPackage) =>
  p.destinations.some((id) => russiaDestinationById(id)?.operationalStatus === "limited");

/**
 * Package card. "Explore" opens the inclusions in place (native <details>,
 * keyboard and no-JS friendly) until the package has its own live page.
 */
export default function RuPackageCard({ p, sizes = "(min-width: 1200px) 320px, (min-width: 640px) 48vw, 88vw" }: { p: RussiaPackage; sizes?: string }) {
  const primary = russiaDestinationById(p.destinations[0]);
  const tone = primary ? russiaRegionById(primary.region).tone : (["#0d1730", "#7a1f33"] as [string, string]);
  const href = liveHref(p.href);
  const limited = packageIsLimited(p);
  const cities = p.destinations.map((id) => russiaDestinationById(id)?.name).filter(Boolean).join(" · ");

  return (
    <article className="asia-pcard ru-pcard" aria-labelledby={`ru-pkg-${p.id}`}>
      <div className="asia-pcard__media">
        <DestMedia image={russiaImage(p.image)} label={primary?.name ?? "Russia"} tone={tone} sizes={sizes} />
        <span className="asia-pcard__country">{p.duration}</span>
        {p.specialist && <span className="ru-badge ru-badge--gold">Specialist journey</span>}
      </div>
      <div className="asia-pcard__body">
        <h3 id={`ru-pkg-${p.id}`} className="asia-pcard__title">{p.title}</h3>
        <p className="asia-pcard__meta">
          <span><Clock size={14} aria-hidden="true" /> {p.duration}</span>
          <span className="asia-pcard__style">{experienceLabel(p.travelStyles[0])}</span>
        </p>
        <p className="ru-pcard__cities">{cities}</p>
        <p className="asia-pcard__desc">{p.description}</p>
        {p.route.length > 1 && <RouteLine stops={p.route} label={`${p.title} route`} />}

        <dl className="ru-pcard__facts">
          {p.transport && (
            <div><dt><TrainFront size={14} aria-hidden="true" /><span className="pkg-sr">Transport</span></dt><dd>{p.transport.filter((t) => t !== "Airport transfers").slice(0, 2).join(", ")}</dd></div>
          )}
          {p.hotelCategory && (
            <div><dt><BedDouble size={14} aria-hidden="true" /><span className="pkg-sr">Hotel category</span></dt><dd>{p.hotelCategory}</dd></div>
          )}
          {p.meals && (
            <div><dt><UtensilsCrossed size={14} aria-hidden="true" /><span className="pkg-sr">Meals</span></dt><dd>{p.meals}</dd></div>
          )}
        </dl>

        {limited && (
          <p className="asia-dcard__note"><Info size={14} aria-hidden="true" /> {LIMITED_NOTE}</p>
        )}

        <details className="ru-details">
          <summary>
            Explore inclusions <ChevronDown size={16} aria-hidden="true" />
          </summary>
          <div className="ru-details__body">
            {p.sightseeing && (
              <ul>
                {p.sightseeing.map((s) => (
                  <li key={s}><Check size={14} aria-hidden="true" /> {s}</li>
                ))}
              </ul>
            )}
            {p.transport && <p><strong>Transport:</strong> {p.transport.join(", ")}</p>}
            {p.visaAssistance && <p><strong>Visa / documents:</strong> assistance available where offered.</p>}
            <p className="ru-details__fine">Typical build shown. Hotels, meals, transport and sightseeing are customizable; your quote confirms exact inclusions.</p>
          </div>
        </details>

        <div className="asia-pcard__foot">
          <div className="pkg-price">
            {p.price ? (
              <>
                <span className="pkg-price__label">Starting from</span>
                <span className="pkg-price__amount pkg-price__amount--sm">{p.price}</span>
              </>
            ) : (
              <>
                <span className="pkg-price__label">Pricing</span>
                <span className="pkg-price__amount pkg-price__amount--text">Price on Request</span>
              </>
            )}
          </div>
          <div className="ru-pcard__actions">
            {href && (
              <Link href={href} className="pkg-btn pkg-btn--outline">
                Explore <ArrowRight size={16} className="pkg-arrow" aria-hidden="true" />
              </Link>
            )}
            <a href={enquireAbout(p.title)} target="_blank" rel="noopener noreferrer" className="pkg-btn asia-btn--navy">
              <MessageCircle size={16} aria-hidden="true" /> {limited ? "Check Availability" : "Customize"}
              <span className="pkg-sr"> {p.title} (opens WhatsApp)</span>
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
