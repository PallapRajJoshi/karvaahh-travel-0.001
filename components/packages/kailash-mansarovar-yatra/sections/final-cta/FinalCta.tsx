import Image from "next/image";
import { ctas, site } from "../../config";
import { IMG } from "../../data/content";
import CtaButton from "../../shared/CtaButton";
import Reveal from "../../shared/Reveal";
import "./FinalCta.css";

export default function FinalCta() {
  return (
    <section className="km-final" aria-labelledby="km-final-title">
      <div className="km-final__media">
        <Image
          src={`${IMG}/hero/kailash-mansarovar-dusk.jpg`}
          alt="Mount Kailash glowing at dusk above the still waters of Lake Mansarovar"
          fill
          sizes="100vw"
        />
      </div>
      <div className="km-final__scrim" aria-hidden="true" />
      <Reveal className="km-container km-final__inner">
        <p className="km-final__brand">
          {site.name} <span aria-hidden="true">—</span> {site.tagline}
        </p>
        <h2 id="km-final-title" className="km-final__title">
          Begin Your Sacred Journey to Kailash
        </h2>
        <p className="km-final__subtitle">
          Experience the spiritual beauty of Mount Kailash, the serenity of Lake Mansarovar, and the unforgettable journey
          through the Tibetan Himalayas.
        </p>
        <div className="km-final__actions">
          <CtaButton cta={ctas.explorePackages} onDark />
          <CtaButton cta={ctas.customize} onDark />
          <CtaButton cta={ctas.contact} onDark />
        </div>
      </Reveal>
    </section>
  );
}
