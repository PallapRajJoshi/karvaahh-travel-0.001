import Link from "next/link";
import { ArrowRight, Clock, MessageCircle } from "lucide-react";
import { destinationById } from "@/data/asia-destinations";
import { activePackages, type AsiaPackage } from "@/data/asia-packages";
import { regionById } from "@/data/asia-regions";
import { styleLabel } from "@/data/travel-styles";
import { enquireAbout, liveHref } from "@/lib/asia/config";
import Carousel from "../../Carousel";
import RouteLine from "../../RouteLine";
import DestMedia from "./DestMedia";
import Flag from "./Flag";

const inr = new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 });

function PackageCard({ p }: { p: AsiaPackage }) {
  const primary = destinationById(p.destinations[0])!;
  const href = liveHref(p.href);
  const [min, max] = p.durationDays;

  return (
    <article className="asia-pcard" aria-labelledby={`pkg-${p.id}-h`}>
      <div className="asia-pcard__media">
        <DestMedia
          image={p.image}
          iso={primary.iso}
          label={p.countryLabel}
          tone={regionById(primary.region).tone}
          sizes="(min-width: 1024px) 380px, (min-width: 640px) 48vw, 88vw"
        />
        <span className="asia-pcard__country">
          {p.destinations.map((id) => {
            const d = destinationById(id);
            return d ? <Flag key={id} iso={d.iso} size={18} /> : null;
          })}
          {p.countryLabel}
        </span>
      </div>
      <div className="asia-pcard__body">
        <h3 id={`pkg-${p.id}-h`} className="asia-pcard__title">{p.name}</h3>
        <p className="asia-pcard__meta">
          <span><Clock size={14} aria-hidden="true" /> Suggested {min === max ? min : `${min}–${max}`} days</span>
          <span className="asia-pcard__style">{styleLabel(p.travelStyles[0])}</span>
        </p>
        <p className="asia-pcard__desc">{p.description}</p>
        <RouteLine stops={p.route} label={`${p.name} route`} />
        <div className="asia-pcard__foot">
          <div className="pkg-price">
            {p.price ? (
              <>
                <span className="pkg-price__label">Starting from</span>
                <span className="pkg-price__amount">{inr.format(p.price)}</span>
                <span className="pkg-price__basis">per person</span>
              </>
            ) : (
              <>
                <span className="pkg-price__label">Pricing</span>
                <span className="pkg-price__amount pkg-price__amount--text">Price on Request</span>
              </>
            )}
          </div>
          {href ? (
            <Link href={href} className="pkg-btn asia-btn--navy">
              Explore Package <ArrowRight size={16} className="pkg-arrow" aria-hidden="true" />
            </Link>
          ) : (
            <a href={enquireAbout(p.name)} target="_blank" rel="noopener noreferrer" className="pkg-btn asia-btn--navy">
              <MessageCircle size={16} aria-hidden="true" /> Customize Your Trip
              <span className="pkg-sr"> (opens WhatsApp)</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default function FeaturedPackageCarousel() {
  const featured = activePackages.filter((p) => p.featured);
  if (!featured.length) return null;

  return (
    <section className="pkg-section pkg-section--sand" id="journeys" aria-labelledby="journeys-h">
      <div className="pkg-container">
        <div className="pkg-section__head pkg-section__head--split">
          <div>
            <p className="asia-eyebrow">Journey ideas</p>
            <h2 id="journeys-h" className="pkg-h2">Popular Asia Journeys</h2>
            <p className="pkg-lede">
              Proven routes to start from. Every one can be shortened, extended, upgraded or combined with another country.
            </p>
          </div>
        </div>
        <Carousel label="Popular Asia journeys">
          {featured.map((p) => (
            <PackageCard key={p.id} p={p} />
          ))}
        </Carousel>
      </div>
    </section>
  );
}
