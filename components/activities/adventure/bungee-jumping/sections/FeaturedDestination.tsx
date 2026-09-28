import Image from "next/image";
import { kushmaFeature } from "../data/bungeeJumpingData";

export default function FeaturedDestination() {
  return (
    <section id="kushma" className="bj-section bj-feature" aria-labelledby="bj-feature-title">
      <div className="bj-wrap bj-feature__grid">
        <div className="bj-feature__media" data-reveal>
          <Image src={kushmaFeature.image.src} alt={kushmaFeature.image.alt} fill sizes="(max-width: 900px) 100vw, 50vw" />
        </div>
        <div className="bj-feature__body" data-reveal>
          <p className="bj-kicker">Primary destination · Kushma</p>
          <h2 id="bj-feature-title" className="bj-feature__title">{kushmaFeature.heading}</h2>
          {kushmaFeature.paragraphs.map((p) => <p key={p} className="bj-feature__text">{p}</p>)}
          <dl className="bj-feature__points">
            {kushmaFeature.points.map((pt) => (
              <div key={pt.title} className="bj-feature__point">
                <dt>{pt.title}</dt>
                <dd>{pt.text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
