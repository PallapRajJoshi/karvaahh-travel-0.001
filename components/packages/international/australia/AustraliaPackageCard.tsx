import Link from "next/link";
import { ArrowRight, Check, ChevronDown, Clock, MapPin, MessageCircle, Minus, Plane, SlidersHorizontal } from "lucide-react";
import { australiaDestinationById } from "@/data/australia/destinations";
import { australiaImage } from "@/data/australia/images";
import { QUOTED_SEPARATELY, inclusionLabel, type AustraliaPackage } from "@/data/australia/packages";
import { australiaRegionById } from "@/data/australia/regions";
import { styleLabel } from "@/data/australia/travel-styles";
import { enquireAbout, liveHref } from "@/lib/australia/config";
import RouteLine from "../../RouteLine";
import DestMedia from "../asia/DestMedia";
import { CustomizeButton } from "./AustraliaFilterControls";

const FALLBACK_TONE: [string, string] = ["#0b2530", "#2f6f8f"];

/**
 * Package card: Enquire (WhatsApp), View Details (native <details>, works
 * without JS) and Customize (pre-fills the trip builder). Shows the template's
 * configured inclusions and what is quoted separately. Price shows only when
 * Karvaahh has published one; otherwise "Price on Request".
 */
export default function AustraliaPackageCard({
  p,
  scope = "grid",
  sizes = "(min-width: 1200px) 340px, (min-width: 640px) 48vw, 88vw",
}: {
  p: AustraliaPackage;
  /** Where the card is placed; keeps ids unique when a package appears in several rails. */
  scope?: string;
  sizes?: string;
}) {
  const hid = `au-pkg-${scope}-${p.id}`;
  const primary = australiaDestinationById(p.destinations[0]);
  const tone = primary ? australiaRegionById(primary.region).tone : FALLBACK_TONE;
  const href = liveHref(p.href);
  const flexible = p.duration === "Flexible";
  const places = p.destinations.map((id) => australiaDestinationById(id)?.shortName ?? australiaDestinationById(id)?.name).filter(Boolean).join(" · ");

  return (
    <article className="asia-pcard us-pcard" aria-labelledby={hid}>
      <div className="asia-pcard__media">
        <DestMedia image={australiaImage(p.image)} label={primary?.name ?? "Australia"} tone={tone} sizes={sizes} />
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
        <p className="au-pcard__incl">
          <span className="pkg-sr">Typical quote includes: </span>
          {p.inclusions.map((i) => (
            <span key={i}>{inclusionLabel[i]}</span>
          ))}
        </p>

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
            <p className="us-details__row"><Clock size={14} aria-hidden="true" /> <span><strong>Duration:</strong> {p.duration}{flexible ? "" : ", adjustable"}</span></p>
            <div className="au-incl">
              <p className="au-incl__h">Typical quote includes</p>
              <ul>
                {p.inclusions.map((i) => (
                  <li key={i}><Check size={13} aria-hidden="true" /> {inclusionLabel[i]}</li>
                ))}
              </ul>
              <p className="au-incl__h">Quoted separately</p>
              <ul className="au-incl__no">
                {QUOTED_SEPARATELY.map((x) => (
                  <li key={x}><Minus size={13} aria-hidden="true" /> {x}</li>
                ))}
              </ul>
            </div>
            <p className="us-details__fine">Typical build shown. Your quote confirms exactly what is included for your dates.</p>
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
            <a href={enquireAbout(`${p.title} (Australia)`)} target="_blank" rel="noopener noreferrer" className="pkg-btn asia-btn--navy">
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
