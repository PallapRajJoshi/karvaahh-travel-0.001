import Image from "next/image";
import { gallery } from "./data/zipFlyingData";

export default function ActivityGallery() {
  return (
    <section className="zf-sec zf-gallery" aria-labelledby="zf-gallery-title">
      <div className="zf-wrap">
        <header className="zf-head">
          <h2 id="zf-gallery-title" className="zf-h2">Gallery</h2>
        </header>
        <ul className="zf-gallery__grid">
          {gallery.map((g, i) => (
            <li key={g.src} className={`zf-gallery__item zf-gallery__item--${i + 1}`}>
              <Image
                src={g.src}
                alt={g.alt}
                fill
                loading="lazy"
                sizes={i === 0 ? "(max-width: 700px) 100vw, 66vw" : "(max-width: 700px) 100vw, 33vw"}
                className="zf-cover"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
