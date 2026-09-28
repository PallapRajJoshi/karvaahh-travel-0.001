import { ebcSite } from "../config/site";
import SmartImage from "../ui/SmartImage";
import CtaButton from "../ui/CtaButton";
import "../styles/final-cta.css";

export default function FinalCTA() {
  const { finalCta, tagline } = ebcSite;
  return (
    <section id="enquire" className="ebc-final" aria-labelledby="ebc-final-title">
      <div className="ebc-final__media">
        <SmartImage image={finalCta.image} sizes="100vw" />
      </div>
      <div className="ebc-final__overlay" aria-hidden="true" />
      <div className="ebc-container ebc-final__inner">
        <h2 id="ebc-final-title" className="ebc-final__title" data-reveal="">
          {finalCta.title}
        </h2>
        <p className="ebc-final__subtitle" data-reveal="" style={{ ["--i" as string]: 1 }}>
          {finalCta.subtitle}
        </p>
        <div className="ebc-final__ctas" data-reveal="" style={{ ["--i" as string]: 2 }}>
          {finalCta.ctas.map((c) => (
            <CtaButton key={c.label} href={c.href} label={c.label} variant={c.variant} arrow={c.variant === "primary"} />
          ))}
        </div>
        <p className="ebc-final__brand" data-reveal="fade" style={{ ["--i" as string]: 3 }}>
          {tagline}
        </p>
      </div>
    </section>
  );
}
