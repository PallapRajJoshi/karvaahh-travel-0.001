import { gallery } from "../data/pashupatinathMuktinathData";
import { JourneyImage } from "../ui/JourneyImage";
import "./closing.css";

export function JourneyGallery() {
  return (
    <section className="pmy-section pmy-gallery" aria-labelledby="pmy-gallery-title">
      <div className="pmy-container">
        <h2 id="pmy-gallery-title" className="pmy-heading__title pmy-heading__title--h2 pmy-gallery__title">
          {gallery.heading}
        </h2>
      </div>
      <div className="pmy-gallery__scroller" role="region" tabIndex={0} aria-label="Photo gallery">
        <ul className="pmy-gallery__grid">
          {gallery.items.map((item) => (
            <li key={item.src} className="pmy-gallery__item">
              <figure>
                <div className="pmy-gallery__frame">
                  <JourneyImage image={item} sizes="(max-width: 760px) 80vw, (max-width: 1200px) 33vw, 400px" />
                </div>
                <figcaption>{item.caption}</figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
