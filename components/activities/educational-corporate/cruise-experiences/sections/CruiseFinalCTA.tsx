import Media from "../shared/Media";
import Reveal from "../shared/Reveal";
import { INQUIRY_ANCHOR, LINKS } from "../config";
import { FINAL_IMAGE } from "../data/content";
import "./CruiseFinalCTA.css";

export default function CruiseFinalCTA() {
  return (
    <section className="cr-final" aria-labelledby="cr-final-title">
      <div className="cr-final__bg">
        <Media image={FINAL_IMAGE} sizes="100vw" />
      </div>
      <div className="cr-final__overlay" aria-hidden="true" />
      <Reveal className="cr-container cr-final__inner">
        <p className="cr-final__eyebrow">Your next adventure awaits</p>
        <h2 id="cr-final-title">Let the Water Take You Somewhere Extraordinary</h2>
        <p>
          From peaceful Himalayan lakes to iconic international coastlines,
          discover a cruise experience that matches your travel dreams.
        </p>
        <div className="cr-final__cta">
          <a href={`#${INQUIRY_ANCHOR}`} className="cr-btn cr-btn--gold">
            Plan Your Cruise Journey
          </a>
          <a href={LINKS.contact} className="cr-btn cr-btn--ghost">
            Contact Karvaahh
          </a>
        </div>
      </Reveal>
    </section>
  );
}
