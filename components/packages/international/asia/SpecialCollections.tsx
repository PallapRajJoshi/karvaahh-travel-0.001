import { ArrowRight, MessageCircle } from "lucide-react";
import { specialCollections } from "@/data/asia-content";
import { destinationById } from "@/data/asia-destinations";
import { destAnchor, enquireAbout } from "@/lib/asia/config";
import Reveal from "../../Reveal";
import SafeImage from "../../SafeImage";
import Flag from "./Flag";
import StyleButton from "./StyleButton";

/** Honeymoon / Family / Group / Luxury panels, each linking into the destination cards. */
export default function SpecialCollections() {
  return (
    <section className="pkg-section asia-section--ink" id="collections" aria-labelledby="collections-h">
      <div className="pkg-container">
        <div className="pkg-section__head">
          <p className="asia-eyebrow asia-eyebrow--light">Specialised collections</p>
          <h2 id="collections-h" className="pkg-h2 pkg-h2--light">Holidays Built Around Who You Travel With</h2>
        </div>

        <ul className="asia-collections">
          {specialCollections.map((c) => {
            const places = c.destinations.map((id) => destinationById(id)).filter((d) => d?.active) as NonNullable<
              ReturnType<typeof destinationById>
            >[];
            const cover = places.find((d) => d.image);
            return (
              <li key={c.id} className="asia-collection">
                <Reveal className="asia-collection__inner">
                  <div className="asia-collection__media">
                    {cover?.image && <SafeImage src={cover.image.src} alt={cover.image.alt} sizes="(min-width: 900px) 50vw, 100vw" className="asia-media__img" />}
                  </div>
                  <div className="asia-collection__body">
                    <h3 className="asia-collection__title">{c.title}</h3>
                    <p className="asia-collection__text">{c.text}</p>
                    <ul className="asia-collection__places" aria-label={`${c.title} destinations`}>
                      {places.map((d) => (
                        <li key={d.id}>
                          <a href={`#${destAnchor(d.id)}`}>
                            <Flag iso={d.iso} size={16} /> {d.country}
                          </a>
                        </li>
                      ))}
                    </ul>
                    {c.footnote && <p className="asia-collection__note">{c.footnote}</p>}
                    <div className="asia-collection__cta">
                      <StyleButton style={c.style} className="pkg-btn pkg-btn--light">
                        See destinations <ArrowRight size={16} className="pkg-arrow" aria-hidden="true" />
                      </StyleButton>
                      <a href={enquireAbout(c.title)} target="_blank" rel="noopener noreferrer" className="pkg-btn pkg-btn--ghost">
                        <MessageCircle size={16} aria-hidden="true" /> Enquire
                        <span className="pkg-sr"> about {c.title} (opens WhatsApp)</span>
                      </a>
                    </div>
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
