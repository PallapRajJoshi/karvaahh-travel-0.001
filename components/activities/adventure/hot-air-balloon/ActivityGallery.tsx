import Image from "next/image";
import SectionHeading from "./SectionHeading";
import { GALLERY } from "./data/hotAirBalloonData";
import "./ActivityGallery.css";

export default function ActivityGallery() {
  return (
    <section className="hab-section hab-gallery" aria-labelledby="hab-gallery-title">
      <div className="hab-container">
        <SectionHeading id="hab-gallery-title" title="Gallery" lede="Illustrative images. Conditions and views vary by flight." />
        <ul className="hab-gallery__grid">
          {GALLERY.map((img, i) => (
            <li key={img.src} className={`hab-gallery__item hab-gallery__item--${i + 1}`}>
              <Image
                src={img.src}
                alt={img.alt}
                fill
                loading="lazy"
                sizes={i === 0 ? "(max-width: 700px) 100vw, 66vw" : "(max-width: 700px) 50vw, 33vw"}
                className="hab-gallery__img"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
