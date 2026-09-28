import Link from "next/link";
import Media from "./Media";
import Icon from "./Icon";
import { cta, related } from "@/data/adventure/everest-three-passes-trek/content";
import { LINKS } from "@/data/adventure/everest-three-passes-trek/config";
import "./FinalCta.css";

export default function FinalCta() {
  return (
    <>
      <section className="etp-cta" aria-labelledby="etp-cta-title">
        <Media image={cta.image} sizes="100vw" className="etp-cta__bg" />
        <div className="etp-cta__shade" aria-hidden="true" />
        <div className="etp-wrap etp-cta__inner" data-reveal>
          <p className="etp-heading__eyebrow">Begin your expedition</p>
          <h2 className="etp-cta__title" id="etp-cta-title">
            {cta.heading}
          </h2>
          <p className="etp-cta__text">{cta.text}</p>
          <div className="etp-cta__btns">
            <a className="etp-btn etp-btn--gold" href={LINKS.packagesAnchor}>
              Explore Trek Packages
            </a>
            <Link className="etp-btn etp-btn--ghost" href={LINKS.customize}>
              Customize Your Trek
            </Link>
            <Link className="etp-btn etp-btn--ghost" href={LINKS.contact}>
              <Icon name="phone" /> Contact Karvaahh
            </Link>
          </div>
        </div>
      </section>

      <nav className="etp-related" aria-labelledby="etp-related-title">
        <div className="etp-wrap">
          <h2 className="etp-related__title" id="etp-related-title">
            Keep exploring
          </h2>
          <ul className="etp-related__list">
            {related.map((r) => (
              <li key={r.href}>
                <Link href={r.href} className="etp-related__link">
                  <span>
                    <strong>{r.label}</strong>
                    <small>{r.note}</small>
                  </span>
                  <Icon name="arrow" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}
