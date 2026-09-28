import Image from "next/image";
import { finalCta } from "../data/config";
import CtaButton from "../shared/CtaButton";
import "./final-cta.css";

export default function FinalCta() {
  return (
    <section className="mc-final mc-on-dark" aria-labelledby="mc-final-title">
      <div className="mc-final__media mc-frame">
        <Image
          src={finalCta.image.src}
          alt={finalCta.image.alt}
          fill
          sizes="100vw"
          style={{ objectPosition: finalCta.image.focal }}
        />
      </div>
      <div className="mc-final__shade" aria-hidden="true" />

      <div className="mc-container mc-final__content" data-reveal>
        <h2 id="mc-final-title" className="mc-final__title">
          {finalCta.title}
        </h2>
        <p className="mc-final__subtitle">{finalCta.subtitle}</p>
        <div className="mc-final__ctas">
          {finalCta.ctas.map((c) => (
            <CtaButton key={c.label} {...c} />
          ))}
        </div>
        <p className="mc-final__brand">{finalCta.brand}</p>
      </div>
    </section>
  );
}
