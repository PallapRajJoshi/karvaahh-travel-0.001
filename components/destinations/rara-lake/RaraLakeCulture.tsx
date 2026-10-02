import Image from "next/image";
import { cultureContent } from "@/data/destinations/rara-lake/content";
import "./RaraLakeCulture.css";

export default function RaraLakeCulture() {
  return (
    <section className="rara-culture" aria-labelledby="rara-culture-heading">
      <div className="rara-culture__grid">
        <div className="rara-culture__text">
          <span className="rara-culture__eyebrow">People & Place</span>
          <h2 id="rara-culture-heading" className="rara-culture__heading">
            {cultureContent.heading}
          </h2>
          <ul className="rara-culture__points">
            {cultureContent.points.map((point) => (
              <li key={point} className="rara-culture__point">
                {point}
              </li>
            ))}
          </ul>
          <p className="rara-culture__note">{cultureContent.note}</p>
        </div>
        <div className="rara-culture__media">
          <Image
            src={cultureContent.image.src}
            alt={cultureContent.image.alt}
            fill
            sizes="(max-width: 900px) 100vw, 45vw"
            className="rara-culture__image"
          />
        </div>
      </div>
    </section>
  );
}
