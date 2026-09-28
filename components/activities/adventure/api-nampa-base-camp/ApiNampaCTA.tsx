import Image from "next/image";
import Link from "next/link";
import { CTA, RELATED } from "./data/content";
import { ANCHORS, INQUIRY, ROUTES } from "./data/routes";
import Reveal from "./shared/Reveal";
import { ArrowRight } from "./shared/icons";
import "./ApiNampaCTA.css";

export default function ApiNampaCTA() {
  return (
    <>
      <section className="an-related" aria-labelledby="an-related-title">
        <div className="an-container">
          <h2 className="an-related__title" id="an-related-title">
            Keep exploring the Himalaya
          </h2>
          <ul className="an-related__list">
            {RELATED.map((r) => (
              <li key={r.href}>
                <Link href={r.href} className="an-related__link">
                  <span className="an-related__label">{r.label}</span>
                  <span className="an-related__desc">{r.description}</span>
                  <ArrowRight className="an-related__arrow" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="an-cta" aria-labelledby="an-cta-title">
        <div className="an-cta__media" aria-hidden="true">
          <Image src={CTA.image.src} alt="" fill sizes="100vw" className="an-cta__image" />
        </div>
        <Reveal className="an-container an-cta__inner">
          <p className="an-cta__eyebrow">Karvaahh – Live to Travel</p>
          <h2 className="an-cta__title" id="an-cta-title">
            {CTA.title}
          </h2>
          <p className="an-cta__text">{CTA.text}</p>
          <div className="an-cta__actions">
            <a className="an-btn an-btn--gold" href={`#${ANCHORS.packages}`}>
              Explore Trek Packages
            </a>
            <a className="an-btn an-btn--ghost" href={INQUIRY.custom}>
              Customize Your Trek
            </a>
            <Link className="an-btn an-btn--ghost" href={ROUTES.contact}>
              Contact Karvaahh
              <ArrowRight />
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
