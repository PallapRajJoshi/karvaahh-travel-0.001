import SectionHeading from "../../shared/SectionHeading";
import ImageSlot from "../../shared/ImageSlot";
import { GALLERY } from "../../data/gallery";
import "./Gallery.css";

export default function Gallery() {
  return (
    <section id="gallery" className="km-section km-gallery" aria-labelledby="gallery-title">
      <div className="km-container">
        <SectionHeading id="gallery-title" marker="Western Tibet" title="Kailash Mansarovar in Pictures" />
        <ul className="km-gallery__grid">
          {GALLERY.map((item) => (
            <li key={item.caption} className={`km-gallery__item km-gallery__item--${item.size}`}>
              <figure className="km-gallery__figure">
                <ImageSlot
                  image={item.image}
                  sizes={
                    item.size === "wide"
                      ? "(min-width: 1024px) 66vw, 100vw"
                      : "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  }
                />
                <figcaption className="km-gallery__caption">{item.caption}</figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
