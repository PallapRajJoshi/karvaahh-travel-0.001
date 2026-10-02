import Link from "next/link";
import type { TravelPackage } from "@/data/packages/package-types";
import { CUSTOM_TRIP_ROUTE, HUB_IMAGES } from "@/lib/packages/config";
import { durationLabel, formatPrice, routeText, searchText, suggestionsFor } from "@/lib/packages/query";
import ApplyFilter from "./ApplyFilter";
import HeroSearch, { type SearchEntry } from "./HeroSearch";
import SafeImage from "./SafeImage";

const SUGGESTION_CANDIDATES = ["Nepal", "Mustang", "Kedarnath", "Char Dham", "Kathmandu", "Pokhara", "Kailash", "Goa", "Dubai"];

export default function PackagesHero({ packages }: { packages: TravelPackage[] }) {
  const spotlight = packages.find((p) => p.featured && p.duration) ?? packages.find((p) => p.featured) ?? packages[0];
  const index: SearchEntry[] = packages.map((p) => ({
    id: p.id,
    name: p.name,
    meta: [durationLabel(p), p.country].filter(Boolean).join(" · "),
    text: searchText(p),
    href: p.href,
  }));
  const suggestions = suggestionsFor(packages, SUGGESTION_CANDIDATES);

  const price = spotlight ? formatPrice(spotlight) : null;
  const dur = spotlight ? durationLabel(spotlight) : null;
  const route = spotlight ? routeText(spotlight) : null;

  return (
    <header className="pkg-hero">
      <div className="pkg-media pkg-hero__media" data-country="Nepal">
        <svg className="pkg-media__fallback" viewBox="0 0 1200 600" preserveAspectRatio="xMidYMax slice" aria-hidden="true" focusable="false">
          <path d="M0 600V380l140-120 110 90 170-210 190 230 120-110 150 150 130-90 190 160v220z" fill="currentColor" opacity=".14" />
          <path d="M0 600V450l180-130 140 100 220-180 250 210 150-110 260 200v160z" fill="currentColor" opacity=".22" />
        </svg>
        <SafeImage src={HUB_IMAGES.hero} alt={HUB_IMAGES.heroAlt ?? ""} sizes="100vw" priority className="pkg-media__img pkg-hero__img" />
        <div className="pkg-hero__scrim" />
      </div>

      <div className="pkg-container pkg-hero__inner">
        <nav aria-label="Breadcrumb" className="pkg-crumbs">
          <ol>
            <li><Link href="/">Home</Link></li>
            <li aria-current="page">Packages</li>
          </ol>
        </nav>

        <div className="pkg-hero__grid">
          <div className="pkg-hero__copy">
            <p className="pkg-eyebrow pkg-eyebrow--light">Karvaahh · Live to Travel</p>
            <h1 className="pkg-hero__title">Journeys Curated for You</h1>
            <p className="pkg-hero__lede">
              Discover thoughtfully designed Nepal, India and international travel packages with accommodation,
              transportation, experiences and carefully planned itineraries.
            </p>
            <div className="pkg-hero__cta">
              <ApplyFilter filters={{}} className="pkg-btn pkg-btn--primary pkg-btn--lg">Explore Packages</ApplyFilter>
              <Link href={CUSTOM_TRIP_ROUTE} className="pkg-btn pkg-btn--ghost pkg-btn--lg">Plan a Custom Trip</Link>
            </div>
          </div>

          {spotlight && (
            <div className="pkg-hero__cards" aria-hidden="true">
              <div className="pkg-float pkg-float--a">
                <span className="pkg-float__k">{dur ?? spotlight.country}</span>
                <span className="pkg-float__v">{route ?? spotlight.name}</span>
              </div>
              <div className="pkg-float pkg-float--b">
                <span className="pkg-float__k">{price?.amount ? "Starting from" : "Pricing"}</span>
                <span className="pkg-float__v">{price?.amount ? `${price.amount} ${price.basis}` : "Request price"}</span>
              </div>
            </div>
          )}
        </div>

        <HeroSearch index={index} suggestions={suggestions} />
      </div>
    </header>
  );
}
