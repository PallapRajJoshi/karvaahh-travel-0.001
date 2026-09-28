import Image from "next/image";
import type { SightsContent } from "./types";
import SectionHeading from "./SectionHeading";
import "./sights-grid.css";

export default function SightsGrid({ content }: { content: SightsContent }) {
  return (
    <section className="ae-section ae-section--cream ae-sights" aria-labelledby="ae-sights-title">
      <div className="ae-container">
        <SectionHeading id="ae-sights-title" title={content.heading} lead={content.caveat} />
        <ul className="ae-sights__grid">
          {content.sights.map((s) => (
            <li key={s.name} className="ae-sight">
              <div className="ae-sight__media">
                <Image
                  src={s.image.src}
                  alt={s.image.alt}
                  fill
                  sizes="(max-width: 560px) 100vw, (max-width: 1000px) 50vw, 33vw"
                  className="ae-sight__img"
                />
              </div>
              <div className="ae-sight__text">
                <h3 className="ae-sight__name">{s.name}</h3>
                <p className="ae-sight__body">{s.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
