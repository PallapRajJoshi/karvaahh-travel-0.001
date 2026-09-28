import Image from "next/image";
import StatusBadge from "./StatusBadge";
import { featured, ENQUIRY_ANCHOR } from "./data/zipFlyingData";

export default function FeaturedZipFlyer() {
  return (
    <section id="featured" className="zf-sec zf-feat" aria-labelledby="zf-feat-title">
      <div className="zf-wrap zf-feat__grid">
        <div className="zf-feat__media">
          <Image
            src={featured.image.src}
            alt={featured.image.alt}
            fill
            sizes="(max-width: 900px) 100vw, 55vw"
            className="zf-cover"
          />
        </div>
        <div className="zf-feat__body">
          <div className="zf-feat__meta">
            <span className="zf-feat__loc">{featured.location}</span>
            <StatusBadge status={featured.status} tone="dark" />
          </div>
          <h2 id="zf-feat-title" className="zf-h2 zf-h2--light">{featured.heading}</h2>
          <p className="zf-feat__desc">{featured.description}</p>
          <dl className="zf-feat__specs">
            {featured.specs.map((s) => (
              <div key={s.label}>
                <dt>{s.label}</dt>
                <dd>{s.value}</dd>
              </div>
            ))}
          </dl>
          <a className="zf-btn zf-btn--signal" href={ENQUIRY_ANCHOR}>{featured.cta}</a>
        </div>
      </div>
    </section>
  );
}
