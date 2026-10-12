import { ArrowRight, Check, Gem, Heart, Info, MessageCircle, PiggyBank, Smile, type LucideIcon } from "lucide-react";
import type { CollectionId, StyleCollection as Collection } from "@/data/europe/content";
import { countryById } from "@/data/europe/countries";
import { activePackages } from "@/data/europe/packages";
import { regionById } from "@/data/europe/regions";
import { countryAnchor, enquireAbout } from "@/lib/europe/config";
import Reveal from "../../Reveal";
import DestMedia from "../asia/DestMedia";
import Flag from "../asia/Flag";
import FilterButton from "./FilterButton";

const ICON: Record<CollectionId, LucideIcon> = { honeymoon: Heart, family: Smile, luxury: Gem, budget: PiggyBank };

/**
 * Honeymoon, Family, Luxury and Affordable Europe. One component, four looks:
 * cinematic cards (honeymoon), split photo grid (family), dark gold (luxury)
 * and a light country list (budget). Content comes from data/europe/content.ts;
 * countries and package counts from the shared datasets.
 */
export default function StyleCollection({ collection: col }: { collection: Collection }) {
  const Icon = ICON[col.id];
  const countries = col.countries
    .map((id) => countryById(id))
    .filter((c): c is NonNullable<typeof c> => c?.operationalStatus === "active");
  const packageCount = activePackages.filter((p) => !p.custom && p.travelStyles.includes(col.style)).length;
  const places = (col.places ?? []).filter((p) => countryById(p.country)?.operationalStatus === "active");
  const dark = col.id === "luxury" || col.id === "honeymoon";

  return (
    <section className={`pkg-section eu-col eu-col--${col.id}`} id={col.id} aria-labelledby={`${col.id}-h`}>
      <div className="pkg-container">
        <div className="eu-col__head">
          <Reveal className="eu-col__intro">
            <p className={`asia-eyebrow${dark ? " asia-eyebrow--light" : ""}`}>
              <Icon size={14} aria-hidden="true" /> {col.eyebrow}
            </p>
            <h2 id={`${col.id}-h`} className={`pkg-h2${dark ? " pkg-h2--light" : ""}`}>{col.title}</h2>
            <p className={`pkg-lede${dark ? " pkg-lede--light" : ""}`}>{col.intro}</p>
          </Reveal>
          <ul className="eu-col__highlights" aria-label={`${col.title} highlights`}>
            {col.highlights.map((h) => (
              <li key={h}><Check size={15} aria-hidden="true" /> {h}</li>
            ))}
          </ul>
        </div>

        {places.length > 0 && (
          <ul className={`eu-col__places eu-col__places--${col.id}`}>
            {places.map((p, i) => {
              const c = countryById(p.country)!;
              return (
                <li key={p.name} style={{ "--i": i } as React.CSSProperties}>
                  <a href={`#${countryAnchor(c.id)}`} className="eu-place">
                    <DestMedia
                      image={p.image}
                      iso={c.iso}
                      label={p.name}
                      tone={regionById(c.region).tone}
                      sizes="(min-width: 1024px) 280px, (min-width: 640px) 40vw, 75vw"
                      className="eu-place__media"
                    />
                    <span className="eu-place__cap">
                      <Flag iso={c.iso} size={16} /> {p.name}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        )}

        {places.length === 0 && countries.length > 0 && (
          <ul className={`eu-col__countries eu-col__countries--${col.id}`} aria-label={`${col.title} destinations`}>
            {countries.map((c) => (
              <li key={c.id}>
                <a href={`#${countryAnchor(c.id)}`} className="eu-ctag">
                  <Flag iso={c.iso} size={20} />
                  <span>
                    <strong>{c.name}</strong>
                    <small>{c.cities.slice(0, 2).join(", ")}</small>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        )}

        {col.footnote && (
          <p className="eu-col__foot"><Info size={14} aria-hidden="true" /> {col.footnote}</p>
        )}

        <div className="eu-col__cta">
          <FilterButton filter={{ styles: [col.style] }} target="explore" className={`pkg-btn pkg-btn--lg ${dark ? "asia-btn--gold" : "asia-btn--navy"}`}>
            See {col.title.replace(/ Packages$/, "")}
            {packageCount > 0 && ` (${packageCount})`}
            <ArrowRight size={18} className="pkg-arrow" aria-hidden="true" />
          </FilterButton>
          <a
            href={enquireAbout(col.title)}
            target="_blank"
            rel="noopener noreferrer"
            className={`pkg-btn pkg-btn--lg ${dark ? "asia-btn--glass" : "pkg-btn--outline"}`}
          >
            <MessageCircle size={18} aria-hidden="true" /> Plan With Us
            <span className="pkg-sr"> (opens WhatsApp)</span>
          </a>
        </div>
      </div>
    </section>
  );
}
