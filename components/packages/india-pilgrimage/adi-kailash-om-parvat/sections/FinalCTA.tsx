import { finalCta } from "@/data/india-pilgrimage/adi-kailash-om-parvat/page";
import { CtaLink } from "../ui/CtaLink";
import { KImage } from "../ui/KImage";
import { Reveal } from "../ui/Reveal";
import "./final-cta.css";

/** Section 14 — Closing call to action. (Section 15, the footer, is global.) */
export function FinalCTA() {
  return (
    <section id="final-cta" className="akop-final" aria-labelledby="final-title">
      <div className="akop-final__media">
        <KImage image={finalCta.image} sizes="100vw" className="akop-final__img" />
        <div className="akop-final__overlay" aria-hidden="true" />
      </div>
      <div className="akop-container akop-final__inner">
        <Reveal className="akop-final__content">
          <span className="akop-final__glyph" aria-hidden="true">
            ॐ
          </span>
          <h2 id="final-title" className="akop-final__title">
            {finalCta.heading}
          </h2>
          <p className="akop-final__subtitle">{finalCta.subtitle}</p>
          <div className="akop-final__ctas">
            {finalCta.ctas.map((cta) => (
              <CtaLink key={cta.label} cta={cta} />
            ))}
          </div>
          <p className="akop-final__brand">{finalCta.brand}</p>
        </Reveal>
      </div>
    </section>
  );
}
