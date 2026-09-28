import Link from "next/link";
import { ctaHref, finalCta } from "./data/jyotirlingaData";
import "./KarvaahhCTA.css";

export default function KarvaahhCTA() {
  return (
    <section className="jyl-cta" aria-labelledby="jyl-cta-title">
      <div className="jyl-container jyl-cta__inner">
        <svg className="jyl-cta__mark" viewBox="0 0 120 120" aria-hidden="true" focusable="false">
          {Array.from({ length: 12 }, (_, i) => {
            const a = (i / 12) * Math.PI * 2 - Math.PI / 2;
            return <circle key={i} cx={60 + Math.cos(a) * 46} cy={60 + Math.sin(a) * 46} r="3" />;
          })}
          <circle cx="60" cy="60" r="46" fill="none" className="jyl-cta__ring" />
        </svg>
        <h2 id="jyl-cta-title" className="jyl-cta__title">
          {finalCta.heading}
        </h2>
        <p className="jyl-cta__copy">{finalCta.copy}</p>
        <div className="jyl-cta__actions">
          {finalCta.ctas.map((cta) => {
            const href = ctaHref(cta);
            return href ? (
              <Link key={cta.label} href={href} className={`jyl-btn jyl-btn--${cta.variant}`}>
                {cta.label}
              </Link>
            ) : null;
          })}
        </div>
      </div>
    </section>
  );
}
