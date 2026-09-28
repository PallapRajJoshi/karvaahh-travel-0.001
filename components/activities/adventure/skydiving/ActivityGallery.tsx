import Image from "next/image";
import SectionHeading from "./SectionHeading";
import { gallery } from "./data/skydivingData";
import "./ActivityGallery.css";

export default function ActivityGallery() {
  return (
    <section className="sky-section sky-section--night" aria-labelledby="sky-gallery-title">
      <div className="sky-container">
        <SectionHeading id="sky-gallery-title" title={gallery.heading} tone="dark" />
        <ul className="sky-gallery">
          {gallery.images.map((img, i) => (
            <li key={img.src} className="sky-gallery__item">
              <figure className="sky-gallery__fig">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  loading="lazy"
                  sizes={i === 0 ? "(max-width: 700px) 100vw, 60vw" : "(max-width: 700px) 100vw, 30vw"}
                  className="sky-gallery__img"
                />
                <figcaption className="sky-gallery__cap">{img.caption}</figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
