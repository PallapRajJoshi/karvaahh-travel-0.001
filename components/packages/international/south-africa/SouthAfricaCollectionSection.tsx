import { ArrowRight, Info, MapPin, MessageCircle } from "lucide-react";
import { adventureCollection, familyCollection, honeymoonCollection, luxuryCollection, type SACollection } from "@/data/south-africa/collections";
import { SA_HONEYMOON_ENQUIRY, enquireSA } from "@/lib/south-africa/config";
import Reveal from "../../Reveal";
import { PackageRail } from "./SouthAfricaPackageGrid";
import { ZaIcon, ZaMedia } from "./ZaPrimitives";

/** Collection band (honeymoon, family, luxury, adventure): full-bleed photo, experiences, tiers, packages. */
export default function SouthAfricaCollectionSection({ c }: { c: SACollection }) {
  const dark = c.tone === "dark";
  const whatsapp = c.id === "honeymoon" ? SA_HONEYMOON_ENQUIRY : enquireSA(c.eyebrow);
  return (
    <section className={`za-coll za-coll--${c.id}${dark ? " is-dark" : ""}`} id={c.id} aria-labelledby={`${c.id}-h`}>
      <div className="za-coll__hero">
        <ZaMedia id={c.image} decorative sizes="100vw" />
        <div className="za-coll__scrim" aria-hidden="true" />
        <div className="pkg-container za-coll__intro">
          <p className="asia-eyebrow asia-eyebrow--light">{c.eyebrow}</p>
          <h2 id={`${c.id}-h`} className="za-coll__title">{c.title}</h2>
          <p className="za-coll__lede">{c.lede}</p>
          <ul className="za-coll__dests" aria-label="Destinations">
            {c.destinations.map((d) => <li key={d}><MapPin size={13} aria-hidden="true" /> {d}</li>)}
          </ul>
          <div className="za-coll__cta">
            <a href="#plan-trip" className="pkg-btn pkg-btn--lg za-btn--gold">{c.cta} <ArrowRight size={18} className="pkg-arrow" aria-hidden="true" /></a>
            <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="pkg-btn pkg-btn--lg pkg-btn--ghost">
              <MessageCircle size={18} aria-hidden="true" /> WhatsApp<span className="pkg-sr"> (opens WhatsApp)</span>
            </a>
          </div>
        </div>
      </div>
      <div className="pkg-container za-coll__body">
        <ul className="za-coll__grid">
          {c.experiences.map((x) => (
            <li key={x.id}>
              <Reveal className="za-coll__item">
                <span className="za-coll__icon"><ZaIcon name={x.icon} /></span>
                <h3>{x.title}</h3>
                <p>{x.text}</p>
              </Reveal>
            </li>
          ))}
        </ul>
        {c.tiers && (
          <div className="za-tiers">
            <h3 className="za-h3">Hotel & lodge categories</h3>
            <ol className="za-tiers__list">
              {c.tiers.map((t, i) => (
                <li key={t.name}>
                  <span className="za-tiers__n" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
                  <strong>{t.name}</strong>
                  <p>{t.text}</p>
                </li>
              ))}
            </ol>
          </div>
        )}
        {c.note && <p className="za-note"><Info size={16} aria-hidden="true" /> {c.note}</p>}
        <PackageRail ids={c.packageIds} dark={dark} label={`${c.eyebrow} packages`} />
      </div>
    </section>
  );
}

export const SouthAfricaHoneymoonSection = () => <SouthAfricaCollectionSection c={honeymoonCollection} />;
export const SouthAfricaFamilySection = () => <SouthAfricaCollectionSection c={familyCollection} />;
export const SouthAfricaLuxurySection = () => <SouthAfricaCollectionSection c={luxuryCollection} />;
export const SouthAfricaAdventureSection = () => <SouthAfricaCollectionSection c={adventureCollection} />;
