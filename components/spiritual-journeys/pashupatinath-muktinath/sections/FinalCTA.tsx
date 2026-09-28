import Link from "next/link";
import { disclaimers, finalCta, images } from "../data/pashupatinathMuktinathData";
import { JourneyImage } from "../ui/JourneyImage";
import "./closing.css";

export function FinalCTA() {
  return (
    <section className="pmy-final" aria-labelledby="pmy-final-title">
      <div className="pmy-final__media">
        <JourneyImage image={images.aarati} sizes="100vw" />
      </div>
      <div className="pmy-container pmy-final__content" data-reveal>
        <h2 id="pmy-final-title" className="pmy-final__title">{finalCta.heading}</h2>
        <p className="pmy-final__text">{finalCta.text}</p>
        <div className="pmy-final__actions">
          <Link href={finalCta.primary.href} className="pmy-btn pmy-btn--primary">{finalCta.primary.label}</Link>
          <Link href={finalCta.secondary.href} className="pmy-btn pmy-btn--ghost-light">{finalCta.secondary.label}</Link>
        </div>
      </div>

      <aside className="pmy-container pmy-final__disclaimer" aria-label="Important travel information">
        <p>{disclaimers.travel}</p>
        <p>{disclaimers.permits}</p>
        <p>{disclaimers.medical}</p>
      </aside>
    </section>
  );
}
