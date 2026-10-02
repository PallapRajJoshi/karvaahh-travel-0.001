import Image from "next/image";
import { natureContent } from "@/data/destinations/rara-lake/content";
import "./RaraLakeNature.css";

export default function RaraLakeNature() {
  return (
    <section className="rara-nature" aria-labelledby="rara-nature-heading">
      <div className="rara-nature__grid">
        <div className="rara-nature__media">
          <Image
            src={natureContent.image.src}
            alt={natureContent.image.alt}
            fill
            sizes="(max-width: 900px) 100vw, 45vw"
            className="rara-nature__image"
          />
        </div>
        <div className="rara-nature__text">
          <span className="rara-nature__eyebrow">Natural Environment</span>
          <h2 id="rara-nature-heading" className="rara-nature__heading">
            {natureContent.heading}
          </h2>
          <p className="rara-nature__intro">{natureContent.intro}</p>
          <ul className="rara-nature__points">
            {natureContent.points.map((point) => (
              <li key={point} className="rara-nature__point">
                {point}
              </li>
            ))}
          </ul>
          <p className="rara-nature__note">{natureContent.note}</p>
        </div>
      </div>
    </section>
  );
}
