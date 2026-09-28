import CampImage from "../shared/CampImage";
import EmberParticles from "../shared/EmberParticles";
import { IconArrow } from "../shared/Icons";
import { campingImages } from "@/data/campingImages";
import { PLAN_HREF, TALK_HREF } from "@/data/campingContent";
import "./CampingCTA.css";

export default function CampingCTA() {
  return (
    <section id="plan" className="cmp-cta" aria-labelledby="cmp-cta-title">
      <div className="cmp-cta__media" aria-hidden="true">
        <div className="cmp-cta__photo" data-parallax="0.12">
          <CampImage src={campingImages.cta} alt="" tone="dusk" loading="lazy" sizes="100vw" />
        </div>
      </div>
      <div className="cmp-cta__shade" aria-hidden="true" />
      <EmberParticles count={34} />
      <div className="cmp-container cmp-cta__inner" data-reveal>
        <h2 id="cmp-cta-title" className="cmp-cta__title">Your Next Night Could Be Under the Himalayan Sky.</h2>
        <p className="cmp-cta__text">Tell us where you want to camp in Nepal, and we&apos;ll help you plan the journey.</p>
        <div className="cmp-cta__actions">
          <a href={PLAN_HREF} className="cmp-btn cmp-btn--primary">Plan My Camping Trip <IconArrow size={18} /></a>
          <a href={TALK_HREF} className="cmp-btn cmp-btn--ghost">Talk to Karvaahh</a>
        </div>
      </div>
    </section>
  );
}
