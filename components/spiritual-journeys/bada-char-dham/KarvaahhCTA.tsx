import Link from "next/link";
import { badaCharDhamData as d } from "./data/badaCharDhamData";
import "./Closing.css";

/** Closing call to action + the page's final disclaimers. */
export default function KarvaahhCTA() {
  const c = d.finalCta;
  return (
    <section className="bcd-cta" aria-labelledby="bcd-cta-title">
      <div className="bcd-cta__horizon" aria-hidden="true">
        <svg viewBox="0 0 1200 160" preserveAspectRatio="none" focusable="false">
          <path d="M0 160V120l90-40 70 30 110-70 90 55 80-35 100 60h80" />
          <path d="M620 120c60-8 120 8 180 0s120-8 180 0 120 8 220 0" />
        </svg>
      </div>
      <div className="bcd-container bcd-cta__inner">
        <h2 id="bcd-cta-title" className="bcd-cta__title">
          {c.heading}
        </h2>
        <p className="bcd-cta__text">{c.text}</p>
        <div className="bcd-cta__actions">
          <Link href={c.primary.href} className="bcd-btn bcd-btn--gold">
            {c.primary.label}
          </Link>
          <Link href={c.secondary.href} className="bcd-btn bcd-btn--ghost-light">
            {c.secondary.label}
          </Link>
        </div>
        <p className="bcd-cta__talk">
          Prefer a conversation first?{" "}
          <Link href={c.tertiary.href} className="bcd-cta__talk-link">
            {c.tertiary.label}
          </Link>
        </p>
      </div>

      <div className="bcd-container bcd-cta__legal">
        {c.disclaimers.map((t) => (
          <p key={t.slice(0, 24)}>{t}</p>
        ))}
      </div>
    </section>
  );
}
