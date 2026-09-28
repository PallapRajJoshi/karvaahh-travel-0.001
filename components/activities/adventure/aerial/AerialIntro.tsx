import Image from "next/image";
import type { IntroContent } from "./types";
import "./aerial-intro.css";

export default function AerialIntro({ intro }: { intro: IntroContent }) {
  return (
    <section className="ae-section ae-intro" aria-labelledby="ae-intro-title">
      <div className="ae-container ae-intro__grid">
        <div className="ae-intro__text">
          <h2 id="ae-intro-title" className="ae-intro__title">
            {intro.heading}
          </h2>
          <p className="ae-intro__body">{intro.body}</p>

          <p className="ae-intro__where">
            <span className="ae-intro__where-label">{intro.scarcityLabel}:</span>{" "}
            <strong className="ae-intro__where-value">{intro.scarcityValue}</strong>
          </p>

          <aside className="ae-intro__card" aria-label={intro.card.title}>
            <p className="ae-intro__card-title">{intro.card.title}</p>
            <p className="ae-intro__card-body">{intro.card.body}</p>
          </aside>
        </div>

        <figure className="ae-intro__figure">
          <Image
            src={intro.image.src}
            alt={intro.image.alt}
            fill
            sizes="(max-width: 900px) 100vw, 45vw"
            className="ae-intro__img"
          />
        </figure>
      </div>
    </section>
  );
}
