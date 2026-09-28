import JyImage from "./JyImage";
import SectionHeading from "./SectionHeading";
import { anchorFor, gallery } from "./data/jyotirlingaData";
import "./Gallery.css";

export default function Gallery() {
  return (
    <section className="jyl-section jyl-section--night jyl-gallery" aria-labelledby="jyl-gallery-title">
      <div className="jyl-container">
        <SectionHeading id="jyl-gallery-title" title={gallery.heading} />
        <ul className="jyl-gallery__grid">
          {gallery.images.map((img) => (
            <li key={img.slug} className="jyl-gallery__item">
              <figure className="jyl-gallery__figure">
                <JyImage
                  image={img}
                  sizes="(max-width: 640px) 75vw, (max-width: 1024px) 33vw, 25vw"
                  className="jyl-gallery__img"
                  label={img.caption}
                />
                <figcaption className="jyl-gallery__caption">
                  <a href={`#${anchorFor(img.slug)}`}>{img.caption}</a>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
