import Image from "next/image";
import { AlertCircle, ArrowRight, MapPin, MessageCircle, Moon } from "lucide-react";
import { northernLights } from "@/data/europe/content";
import { countryById } from "@/data/europe/countries";
import { img } from "@/data/europe/images";
import { countryAnchor, enquireAbout } from "@/lib/europe/config";
import Flag from "../asia/Flag";
import FilterButton from "./FilterButton";

export default function NorthernLightsSection() {
  const countries = northernLights.countries
    .map((id) => countryById(id))
    .filter((c): c is NonNullable<typeof c> => c?.operationalStatus === "active");

  return (
    <section className="eu-aurora" id="northern-lights" aria-labelledby="aurora-h">
      <div className="eu-aurora__media" aria-hidden="true">
        <Image src={img.auroraMountains.src} alt="" fill sizes="100vw" className="eu-aurora__img" />
      </div>
      <div className="eu-aurora__ribbons" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <div className="pkg-container eu-aurora__inner">
        <div className="eu-aurora__copy">
          <p className="asia-eyebrow asia-eyebrow--light"><Moon size={14} aria-hidden="true" /> Arctic winter</p>
          <h2 id="aurora-h" className="eu-aurora__title">Chase the Northern Lights</h2>
          <p className="eu-aurora__lede">
            Guided aurora hunts away from city lights, husky and reindeer rides by day, and glass-roofed cabins, Arctic
            harbours and frozen waterfalls in between. {northernLights.season}
          </p>

          <ul className="eu-aurora__countries">
            {countries.map((c) => (
              <li key={c.id}>
                <a href={`#${countryAnchor(c.id)}`}><Flag iso={c.iso} size={18} /> {c.name}</a>
              </li>
            ))}
          </ul>
          <ul className="eu-aurora__places" aria-label="Where to go">
            {northernLights.places.map((p) => (
              <li key={p}><MapPin size={13} aria-hidden="true" /> {p}</li>
            ))}
          </ul>

          <p className="eu-aurora__note" role="note">
            <AlertCircle size={16} aria-hidden="true" /> {northernLights.disclaimer}
          </p>

          <div className="eu-aurora__cta">
            <FilterButton filter={{ styles: ["northern-lights"] }} target="explore" className="pkg-btn pkg-btn--lg asia-btn--gold">
              Northern Lights Trips <ArrowRight size={18} className="pkg-arrow" aria-hidden="true" />
            </FilterButton>
            <a href={enquireAbout("a Northern Lights trip")} target="_blank" rel="noopener noreferrer" className="pkg-btn pkg-btn--lg asia-btn--glass">
              <MessageCircle size={18} aria-hidden="true" /> Ask About Dates
              <span className="pkg-sr"> (opens WhatsApp)</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
