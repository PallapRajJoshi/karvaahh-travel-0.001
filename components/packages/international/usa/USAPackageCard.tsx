import Link from "next/link";
import { ArrowRight, Check, ChevronDown, Clock, MapPin, MessageCircle, Plane, SlidersHorizontal } from "lucide-react";
import { usaDestinationById } from "@/data/usa/destinations";
import { usaImage } from "@/data/usa/images";
import type { USATourPackage } from "@/data/usa/packages";
import { usaRegionById } from "@/data/usa/regions";
import { styleLabel } from "@/data/usa/travel-styles";
import { enquireAbout, liveHref } from "@/lib/usa/config";
import RouteLine from "../../RouteLine";
import DestMedia from "../asia/DestMedia";
import { CustomizeButton } from "./USAFilterControls";

const FALLBACK_TONE: [string, string] = ["#0e1a33", "#8c2a35"];

/**
 * Package card: Enquire (WhatsApp), View Details (native <details>, works
 * without JS) and Customize (pre-fills the trip builder). Price shows only
 * when Karvaahh has published one; otherwise "Price on Request".
 */
export default function USAPackageCard({
  p,
  scope = "grid",
  sizes = "(min-width: 1200px) 340px, (min-width: 640px) 48vw, 88vw",
}: {
  p: USATourPackage;
  /** Where the card is placed; keeps ids unique when a package appears in several rails. */
  scope?: string;
  sizes?: string;
}) {
  const hid = `us-pkg-${scope}-${p.id}`;
  const primary = usaDestinationById(p.destinations[0]);
  const tone = primary ? usaRegionById(primary.region).tone : FALLBACK_TONE;
  const href = liveHref(p.href);
  const places = p.destinations.map((id) => usaDestinationById(id)?.name).filter(Boolean).join(" · ");
  const flexible = p.duration === "Flexible";

  return (
    <article className="asia-pcard us-pcard" aria-labelledby={hid}>
      <div className="asia-pcard__media">
        <DestMedia image={usaImage(p.image)} label={primary?.name ?? "USA"} tone={tone} sizes={sizes} />
        <span className="us-pcard__duration">{p.duration}</span>
      </div>
      <div className="asia-pcard__body">
        <h3 id={hid} className="asia-pcard__title">{p.title}</h3>
        <p className="us-pcard__places"><MapPin size={14} aria-hidden="true" /> {flexible ? "Your choice of destinations" : places}</p>
        <p className="us-pcard__styles">
          {p.styles.slice(0, 3).map((s) => (
            <span key={s}>{styleLabel(s)}</span>
          ))}
        </p>
        <ul className="us-pcard__highlights" aria-label="Highlights">
          {p.highlights.slice(0, 3).map((h) => (
            <li key={h}><Check size={14} aria-hidden="true" /> {h}</li>
          ))}
        </ul>

        <details className="us-details">
          <summary>
            View details <ChevronDown size={16} aria-hidden="true" />
          </summary>
          <div className="us-details__body">
            <p>{p.description}</p>
            {p.route.length > 1 && <RouteLine stops={p.route} label={`${p.title} route`} />}
            {p.highlights.length > 3 && (
              <ul>
                {p.highlights.slice(3).map((h) => (
                  <li key={h}><Check size={14} aria-hidden="true" /> {h}</li>
                ))}
              </ul>
            )}
            {p.transport && (
              <p className="us-details__row"><Plane size={14} aria-hidden="true" /> <span><strong>Usual transport:</strong> {p.transport.join(", ")}</span></p>
            )}
            <p className="us-details__row"><Clock size={14} aria-hidden="true" /> <span><strong>Duration:</strong> {p.duration}, adjustable</span></p>
            <p className="us-details__fine">
              Typical build shown. Hotels, flights, transfers and sightseeing are customizable; theme-park, park and attraction
              tickets are included only when your quote lists them.
            </p>
            {href && (
              <Link href={href} className="us-details__link">
                Full itinerary <ArrowRight size={14} aria-hidden="true" />
              </Link>
            )}
          </div>
        </details>

        <div className="asia-pcard__foot us-pcard__foot">
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
          <div className="us-pcard__actions">
            <a href={enquireAbout(p.title)} target="_blank" rel="noopener noreferrer" className="pkg-btn asia-btn--navy">
              <MessageCircle size={16} aria-hidden="true" /> Enquire
              <span className="pkg-sr"> about {p.title} (opens WhatsApp)</span>
            </a>
            <CustomizeButton title={p.title} destinations={p.destinations} className="pkg-btn pkg-btn--outline">
              <SlidersHorizontal size={16} aria-hidden="true" /> Customize
              <span className="pkg-sr"> {p.title}</span>
            </CustomizeButton>
          </div>
        </div>
      </div>
    </article>
  );
}
