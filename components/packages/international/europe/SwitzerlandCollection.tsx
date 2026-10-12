import Image from "next/image";
import { ArrowRight, MessageCircle, TrainFront } from "lucide-react";
import { switzerlandCollection } from "@/data/europe/content";
import { countryById } from "@/data/europe/countries";
import { packageCountFor } from "@/data/europe/packages";
import { regionById } from "@/data/europe/regions";
import { enquireAbout } from "@/lib/europe/config";
import Reveal from "../../Reveal";
import DestMedia from "../asia/DestMedia";
import FilterButton from "./FilterButton";

/** Flagship destination: the classic Swiss rail route and signature Alpine experiences. */
export default function SwitzerlandCollection() {
  const ch = countryById("switzerland");
  if (!ch || ch.operationalStatus === "inactive") return null;
  const tone = regionById(ch.region).tone;
  const count = packageCountFor(ch.id);

  return (
    <section className="pkg-section eu-swiss" id="switzerland" aria-labelledby="swiss-h">
      <div className="pkg-container">
        <div className="eu-swiss__grid">
          <Reveal className="eu-swiss__intro">
            <p className="asia-eyebrow">Flagship destination</p>
            <h2 id="swiss-h" className="pkg-h2">Switzerland, by Lake, Rail and Glacier</h2>
            <p className="pkg-lede">
              Our most requested European destination. Follow the classic route from Zurich to the glaciers of Jungfraujoch,
              then add Titlis, Grindelwald or Zermatt to suit your season.
            </p>

            <ol className="eu-swiss__route" aria-label="Classic Switzerland route">
              {switzerlandCollection.route.map((stop, i) => (
                <li key={stop.name} style={{ "--i": i } as React.CSSProperties}>
                  <span className="eu-swiss__dot" aria-hidden="true">{i + 1}</span>
                  <span>
                    <strong>{stop.name}</strong>
                    <small>{stop.text}</small>
                  </span>
                </li>
              ))}
            </ol>

            <div className="eu-swiss__cta">
              {count > 0 && (
                <FilterButton filter={{ country: ch.id }} target="packages" className="pkg-btn pkg-btn--lg asia-btn--navy">
                  View Switzerland Packages <ArrowRight size={18} className="pkg-arrow" aria-hidden="true" />
                </FilterButton>
              )}
              <a href={enquireAbout("Switzerland")} target="_blank" rel="noopener noreferrer" className="pkg-btn pkg-btn--lg pkg-btn--outline">
                <MessageCircle size={18} aria-hidden="true" /> Customize Switzerland
                <span className="pkg-sr"> (opens WhatsApp)</span>
              </a>
            </div>
          </Reveal>

          <div className="eu-swiss__visual">
            {ch.image && (
              <div className="eu-swiss__hero">
                <Image src={ch.image.src} alt={ch.image.alt} fill sizes="(min-width: 1024px) 50vw, 100vw" className="eu-swiss__img" />
                <span className="eu-swiss__badge"><TrainFront size={16} aria-hidden="true" /> Zurich → Lucerne → Interlaken → Jungfraujoch</span>
              </div>
            )}
            <ul className="eu-swiss__exp">
              {switzerlandCollection.experiences.map((e) => (
                <li key={e.name}>
                  <div className="eu-swiss__thumb">
                    <DestMedia image={e.image} iso={ch.iso} label={e.name} tone={tone} sizes="(min-width: 1024px) 180px, 45vw" />
                  </div>
                  <strong>{e.name}</strong>
                  <small>{e.text}</small>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
