import { badaCharDhamData as d } from "./data/badaCharDhamData";
import SectionHeading from "./shared/SectionHeading";
import DhamImage from "./shared/DhamImage";
import "./Gallery.css";

/**
 * Multi-region gallery. Desktop: editorial mosaic. Mobile: swipeable
 * scroll-snap row (native touch scrolling, no JS). Images lazy-load.
 */
export default function Gallery() {
  const g = d.gallery;
  return (
    <section className="bcd-section bcd-section--ivory" aria-labelledby="bcd-gallery-title">
      <div className="bcd-container">
        <SectionHeading id="bcd-gallery-title" title={g.heading} intro={g.intro} />
      </div>
      <div className="bcd-container bcd-gallery-wrap">
        <ul className="bcd-gallery" aria-label="Photographs from the four Dhams">
          {g.images.map((img) => (
            <li key={img.id} className={`bcd-gallery__item bcd-gallery__item--${img.span ?? "normal"}`}>
              <figure>
                <DhamImage
                  image={img}
                  direction={img.direction}
                  uid={img.id}
                  sizes="(max-width: 760px) 80vw, (max-width: 1100px) 45vw, 400px"
                  className="bcd-gallery__media"
                />
                <figcaption className="bcd-gallery__caption">
                  <span>{img.caption}</span>
                  {img.credit && <small>{img.credit}</small>}
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
