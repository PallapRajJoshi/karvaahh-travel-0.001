import { gallery } from "../data/charDhamData";
import SectionHeading from "../shared/SectionHeading";
import SmartImage from "../shared/SmartImage";

const toneFor = (src: string) => ["yamunotri", "gangotri", "kedarnath", "badrinath"].find((d) => src.includes(d));

export default function CharDhamGallery() {
  return (
    <section id="gallery" className="cd-section cd-gallery" aria-labelledby="gallery-title">
      <div className="cd-container">
        <SectionHeading id="gallery-title" title="Char Dham Yatra Gallery" intro={<p>Temples, rivers and the mountain roads between them.</p>} />
      </div>
      <ul className="cd-gallery__track" aria-label="Char Dham photographs — scroll horizontally on small screens">
        {gallery.map((g) => (
          <li key={g.src} className={`cd-gallery__item${g.wide ? " cd-gallery__item--wide" : ""}`}>
            <figure>
              <div className="cd-gallery__media">
                <SmartImage image={g} sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 80vw" tone={toneFor(g.src)} />
              </div>
              {g.caption ? <figcaption>{g.caption}</figcaption> : null}
            </figure>
          </li>
        ))}
      </ul>
    </section>
  );
}
