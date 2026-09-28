import Link from "next/link";
import { badaCharDhamData as d } from "./data/badaCharDhamData";
import SectionHeading from "./shared/SectionHeading";
import "./Closing.css";

/** Why plan with Karvaahh + verified internal links only. */
export default function WhyKarvaahh() {
  const w = d.whyKarvaahh;
  const r = d.relatedLinks;
  const links = r.links.filter((l) => l.verified);

  return (
    <section className="bcd-section bcd-section--ivory" aria-labelledby="bcd-why-title">
      <div className="bcd-container">
        <SectionHeading id="bcd-why-title" title={w.heading} intro={w.intro} />
        <ul className="bcd-why">
          {w.points.map((p) => (
            <li key={p.title}>
              <h3 className="bcd-why__title">{p.title}</h3>
              <p className="bcd-why__text">{p.text}</p>
            </li>
          ))}
        </ul>

        {links.length > 0 && (
          <nav className="bcd-related" aria-labelledby="bcd-related-title">
            <h3 id="bcd-related-title" className="bcd-related__title">
              {r.heading}
            </h3>
            <ul className="bcd-related__list">
              {links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="bcd-related__link">
                    <span className="bcd-related__label">{l.label}</span>
                    <span className="bcd-related__desc">{l.description}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </section>
  );
}
