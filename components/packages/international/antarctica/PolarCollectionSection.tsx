import { ArrowRight, Info, MessageCircle } from "lucide-react";
import { familyCollection, honeymoonCollection, luxuryCollection, type PolarCollection } from "@/data/antarctica/collections";
import { extensionById } from "@/data/antarctica/extensions";
import { ANTARCTICA_HONEYMOON_ENQUIRY, enquireExpedition } from "@/lib/antarctica/config";
import Reveal from "../../Reveal";
import { ExpeditionRail } from "./AntarcticaPackageGrid";
import PolarIcon from "./PolarIcon";
import PolarMedia from "./PolarMedia";

/**
 * Premium collection band shared by honeymoon, family/educational and
 * luxury: full-bleed photo, experience grid, optional tiers and extensions,
 * and the matching expedition templates.
 */
export default function PolarCollectionSection({ c }: { c: PolarCollection }) {
  const dark = c.id !== "family";
  const extensions = (c.extensionIds ?? []).map(extensionById).filter(Boolean) as NonNullable<ReturnType<typeof extensionById>>[];
  const whatsapp = c.id === "honeymoon" ? ANTARCTICA_HONEYMOON_ENQUIRY : enquireExpedition(`Antarctica ${c.eyebrow}`);

  return (
    <section className={`an-collection an-collection--${c.id}${dark ? " is-dark" : ""}`} id={c.id} aria-labelledby={`${c.id}-h`}>
      <div className="an-collection__hero">
        <PolarMedia id={c.image} decorative sizes="100vw" />
        <div className="an-collection__scrim" aria-hidden="true" />
        <div className="pkg-container an-collection__intro">
          <p className="asia-eyebrow asia-eyebrow--light">{c.eyebrow}</p>
          <h2 id={`${c.id}-h`} className="an-collection__title">{c.title}</h2>
          <p className="an-collection__lede">{c.lede}</p>
          <div className="an-collection__cta">
            <a href="#plan-trip" className="pkg-btn pkg-btn--lg an-btn--ice">
              {c.cta} <ArrowRight size={18} className="pkg-arrow" aria-hidden="true" />
            </a>
            <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="pkg-btn pkg-btn--lg pkg-btn--ghost">
              <MessageCircle size={18} aria-hidden="true" /> WhatsApp<span className="pkg-sr"> (opens WhatsApp)</span>
            </a>
          </div>
        </div>
      </div>

      <div className="pkg-container an-collection__body">
        <ul className="an-collection__grid">
          {c.experiences.map((x, i) => (
            <li key={x.id} style={{ "--i": i } as React.CSSProperties}>
              <Reveal className="an-collection__item">
                <span className="an-collection__icon"><PolarIcon name={x.icon} /></span>
                <h3>{x.title}</h3>
                <p>{x.text}</p>
              </Reveal>
            </li>
          ))}
        </ul>

        {c.tiers && (
          <div className="an-tiers">
            <h3 className="an-h3">Hotel & service categories</h3>
            <ol className="an-tiers__list">
              {c.tiers.map((t, i) => (
                <li key={t.name}>
                  <span className="an-tiers__n" aria-hidden="true">{"◆".repeat(i + 1)}</span>
                  <strong>{t.name}</strong>
                  <p>{t.text}</p>
                </li>
              ))}
            </ol>
          </div>
        )}

        {extensions.length > 0 && (
          <div className="an-collection__ext">
            <h3 className="an-h4">Add a pre- or post-expedition stay</h3>
            <ul className="an-tags">{extensions.map((e) => <li key={e.id}><a href="#extensions">{e.title}</a></li>)}</ul>
          </div>
        )}

        {c.note && <p className="an-note"><Info size={16} aria-hidden="true" /> {c.note}</p>}

        <ExpeditionRail ids={c.expeditionIds} dark={dark} label={`${c.eyebrow} templates`} />
      </div>
    </section>
  );
}

export const AntarcticaHoneymoonSection = () => <PolarCollectionSection c={honeymoonCollection} />;
/** Family and educational expeditions share one learning-led section. */
export const AntarcticaFamilySection = () => <PolarCollectionSection c={familyCollection} />;
export const AntarcticaLuxurySection = () => <PolarCollectionSection c={luxuryCollection} />;
