import Image from "next/image";
import type { ImageAsset } from "./types";
import SectionHeading from "./SectionHeading";
import "./aerial-gallery.css";

/** Mosaic tuned for 6 images; extra images flow into the same grid. */
export default function AerialGallery({ heading, images }: { heading: string; images: ImageAsset[] }) {
  return (
    <section className="ae-section ae-gallery" aria-labelledby="ae-gallery-title">
      <div className="ae-container">
        <SectionHeading id="ae-gallery-title" title={heading} />
        <ul className="ae-gallery__grid">
          {images.map((img, i) => (
            <li key={`${img.src}-${i}`} className={`ae-gallery__item ae-gallery__item--${i + 1}`}>
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes={i === 0 ? "(max-width: 700px) 100vw, 66vw" : "(max-width: 700px) 50vw, 33vw"}
                className="ae-gallery__img"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
