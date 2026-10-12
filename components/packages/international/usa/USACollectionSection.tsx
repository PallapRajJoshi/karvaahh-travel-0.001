import { Heart, Info } from "lucide-react";
import type { USACollection } from "@/data/usa/collections";
import { usaDestinationById } from "@/data/usa/destinations";
import { usaImage } from "@/data/usa/images";
import { pickPackages } from "@/data/usa/packages";
import { USA_HONEYMOON_ENQUIRY, enquireAbout } from "@/lib/usa/config";
import Reveal from "../../Reveal";
import SafeImage from "../../SafeImage";
import LuxuryTiers from "./LuxuryTiers";
import PackageRail from "./PackageRail";
import { FilterButton } from "./USAFilterControls";

/**
 * Honeymoon, Family and Luxury collections share one editorial layout with
 * different tones (rose, sand, noir). Luxury adds configurable service tiers.
 */
export default function USACollectionSection({ c }: { c: USACollection }) {
  const dark = c.tone === "noir";
  const img = usaImage(c.image);
  const img2 = usaImage(c.secondaryImage);
  const h = `${c.id}-h`;
  const enquiry = c.id === "honeymoon" ? USA_HONEYMOON_ENQUIRY : enquireAbout(`a USA ${c.id} holiday`);

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
            <p className="us-coll__dests-h">Popular for {c.id === "honeymoon" ? "couples" : c.id === "family" ? "families" : "luxury travellers"}</p>
            <ul className="us-coll__dests">
              {c.destinations.map((id) => {
                const d = usaDestinationById(id);
                if (!d) return null;
                return (
                  <li key={id}>
                    <FilterButton filter={{ destination: id }} className="us-coll__dest">
                      {d.name}
                    </FilterButton>
                  </li>
                );
              })}
            </ul>
            <a href={enquiry} target="_blank" rel="noopener noreferrer" className={`pkg-btn pkg-btn--lg ${dark ? "asia-btn--gold" : "asia-btn--navy"}`}>
              <Heart size={18} aria-hidden="true" /> {c.id === "honeymoon" ? "Plan My Honeymoon" : c.id === "family" ? "Plan a Family Holiday" : "Design a Luxury Journey"}
              <span className="pkg-sr"> (opens WhatsApp)</span>
            </a>
            {c.note && <p className="us-note"><Info size={14} aria-hidden="true" /> {c.note}</p>}
          </div>
        </div>

        {c.tiers && <LuxuryTiers tiers={c.tiers} />}

        <PackageRail id={`${c.id}-pkgs`} title={c.packagesTitle} packages={pickPackages(c.packageIds)} dark={dark} />
      </div>
    </section>
  );
}
