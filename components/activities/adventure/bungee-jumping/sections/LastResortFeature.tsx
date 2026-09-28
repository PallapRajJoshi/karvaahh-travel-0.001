import Image from "next/image";
import { lastResortFeature } from "../data/bungeeJumpingData";
import AdventureProductCard from "./AdventureProductCard";

export default function LastResortFeature() {
  const f = lastResortFeature;
  return (
    <section id="last-resort" className="bj-lastresort" aria-labelledby="bj-lr-title">
      <Image src={f.image.src} alt={f.image.alt} fill sizes="100vw" className="bj-lastresort__img" />
      <div className="bj-lastresort__shade" aria-hidden="true" />
      <div className="bj-wrap bj-lastresort__inner">
        <header className="bj-heading bj-heading--left bj-heading--dark" data-reveal>
          <p className="bj-heading__eyebrow">Alternative · Bagmati / Sindhupalchok</p>
          <h2 id="bj-lr-title" className="bj-heading__title">{f.heading}</h2>
          <p className="bj-heading__intro">{f.text}</p>
        </header>
        <div className="bj-grid bj-grid--3">
          {f.products.map((p) => <AdventureProductCard key={p.id} product={p} tone="dark" />)}
        </div>
      </div>
    </section>
  );
}
