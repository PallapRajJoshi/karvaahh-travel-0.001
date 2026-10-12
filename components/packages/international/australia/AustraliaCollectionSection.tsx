import { Heart, Info } from "lucide-react";
import type { AustraliaCollection } from "@/data/australia/collections";
import { australiaDestinationById } from "@/data/australia/destinations";
import { australiaImage } from "@/data/australia/images";
import { pickPackages } from "@/data/australia/packages";
import { AU_HONEYMOON_ENQUIRY, enquireAbout } from "@/lib/australia/config";
import Reveal from "../../Reveal";
import SafeImage from "../../SafeImage";
import { FilterButton } from "./AustraliaFilterControls";
import HotelCategories from "./HotelCategories";
import PackageRail from "./PackageRail";

const CTA: Record<AustraliaCollection["id"], { label: string; audience: string }> = {
  honeymoon: { label: "Plan My Honeymoon", audience: "couples" },
  family: { label: "Plan a Family Holiday", audience: "families" },
  luxury: { label: "Design a Luxury Journey", audience: "luxury travellers" },
};

/**
 * Honeymoon, Family and Luxury share one editorial layout with different tones
 * (rose, sand, noir). Luxury adds the hotel-category selector.
 */
export default function AustraliaCollectionSection({ c }: { c: AustraliaCollection }) {
  const dark = c.tone === "noir";
  const img = australiaImage(c.image);
  const img2 = australiaImage(c.secondaryImage);
  const h = `${c.id}-h`;
  const enquiry = c.id === "honeymoon" ? AU_HONEYMOON_ENQUIRY : enquireAbout(`an Australia ${c.id} holiday`);

  return (
    <section className={`pkg-section us-coll us-coll--${c.tone}`} id={c.id} aria-labelledby={h}>
      <div className="pkg-container">
        <div className="us-coll__grid">
          <Reveal className="us-coll__media">
            <div className="us-coll__img us-coll__img--1">
              <SafeImage src={img?.src} alt={img?.alt ?? ""} sizes="(min-width: 1024px) 40vw, 92vw" className="asia-media__img" />
            </div>
            {img2 && (
              <div className="us-coll__img us-coll__img--2">
                <SafeImage src={img2.src} alt={img2.alt} sizes="(min-width: 1024px) 20vw, 45vw" className="asia-media__img" />
              </div>
            )}
          </Reveal>
          <div className="us-coll__copy">
            <p className={`asia-eyebrow${dark ? " asia-eyebrow--light" : ""}`}>{c.eyebrow}</p>
            <h2 id={h} className={`pkg-h2 us-coll__title${dark ? " pkg-h2--light" : ""}`}>{c.title}</h2>
            <p className={`pkg-lede${dark ? " pkg-lede--light" : ""}`}>{c.intro}</p>
            <ul className="us-coll__features">
              {c.features.map((f, i) => (
                <li key={f.title} style={{ "--i": i } as React.CSSProperties}>
                  <strong>{f.title}</strong>
                  <span>{f.text}</span>
                </li>
              ))}
            </ul>
            <p className="us-coll__dests-h">Popular with {CTA[c.id].audience}</p>
            <ul className="us-coll__dests">
              {c.destinations.map((id) => {
                const d = australiaDestinationById(id);
                if (!d) return null;
                return (
                  <li key={id}>
                    <FilterButton filter={{ destination: id }} className="us-coll__dest">
                      {d.shortName ?? d.name}
                    </FilterButton>
                  </li>
                );
              })}
            </ul>
            <a href={enquiry} target="_blank" rel="noopener noreferrer" className={`pkg-btn pkg-btn--lg ${dark ? "asia-btn--gold" : "asia-btn--navy"}`}>
              <Heart size={18} aria-hidden="true" /> {CTA[c.id].label}
              <span className="pkg-sr"> (opens WhatsApp)</span>
            </a>
            {c.note && <p className="us-note"><Info size={14} aria-hidden="true" /> {c.note}</p>}
          </div>
        </div>

        {c.hotelCategories && <HotelCategories categories={c.hotelCategories} />}

        <PackageRail id={`${c.id}-pkgs`} title={c.packagesTitle} packages={pickPackages(c.packageIds)} dark={dark} />
      </div>
    </section>
  );
}
