import Image from "next/image";
import { anchors, headings } from "../data/config";
import { culture } from "../data/experiences";
import SectionHeading from "../shared/SectionHeading";
import { staggerStyle } from "../shared/stagger";
import "./culture.css";

export default function Culture() {
  const h = headings.culture;
  return (
    <section id={anchors.culture.id} className="mc-section mc-culture" aria-labelledby="mc-culture-title">
      <div className="mc-container">
        <SectionHeading id="mc-culture-title" eyebrow={h.eyebrow} title={h.title} subtitle={h.subtitle} />

        <ul className="mc-culture__grid">
          {culture.map((c, i) => (
            <li key={c.id} className="mc-culture__card" data-reveal style={staggerStyle(i)}>
              <div className="mc-culture__media mc-frame">
                <Image
                  src={c.image.src}
                  alt={c.image.alt}
                  fill
                  sizes={i === 0 ? "(min-width: 1024px) 50vw, 92vw" : "(min-width: 1024px) 25vw, (min-width: 640px) 45vw, 92vw"}
                  style={c.image.focal ? { objectPosition: c.image.focal } : undefined}
                />
              </div>
              <div className="mc-culture__copy">
                <h3 className="mc-culture__title">{c.title}</h3>
                <p className="mc-culture__text">{c.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
