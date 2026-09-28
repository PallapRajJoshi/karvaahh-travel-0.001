import Image from "next/image";
import { gallery } from "../data/bungeeJumpingData";
import { SectionHeading } from "../shared";

export default function ActivityGallery() {
  return (
    <section className="bj-section bj-gallery" aria-labelledby="bj-gallery-title">
      <div className="bj-wrap">
        <SectionHeading id="bj-gallery-title" title="Gallery" intro="Kushma, the Kaligandaki gorge, Pokhara and The Last Resort." />
        <ul className="bj-gallery__grid">
          {gallery.map((g, i) => (
            <li key={g.src} className={`bj-gallery__item bj-gallery__item--${i}`}>
              <figure>
                <Image src={g.src} alt={g.alt} fill sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw" />
                <figcaption>{g.caption}</figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
