import Link from "next/link";
import { LINKS } from "@/data/activities/wildlife-nature/links";
import { WildImage } from "./shared/WildImage";
import { Reveal } from "./shared/Reveal";
import { Icon } from "./shared/Icon";
import { PlanLink } from "./shared/PlanLink";
import "./WildlifeFinalCTA.css";

export function WildlifeFinalCTA() {
  return (
    <section className="wn-final" aria-labelledby="wn-final-title">
      <div className="wn-final__bg wn-media" aria-hidden="true">
        <WildImage name="final-cta" sizes="100vw" />
      </div>
      <div className="wn-final__veil" aria-hidden="true" />
      <span className="wn-final__glow" aria-hidden="true" />

      <Reveal className="wn-container wn-final__inner">
        <span className="wn-eyebrow">Discover the wild</span>
        <h2 id="wn-final-title" className="wn-final__title">
          Step Into Nature. Discover Something Extraordinary.
        </h2>
        <p className="wn-final__text">
          From the jungles of the Terai to the peaceful lakes and mountains of the Himalayas, explore Nepal&apos;s
          remarkable natural beauty through unforgettable wildlife and nature experiences.
        </p>
        <div className="wn-final__actions">
          <PlanLink className="wn-btn wn-btn--gold">
            Plan Your Nature Journey <Icon name="arrow-right" size={18} />
          </PlanLink>
          <Link href={LINKS.contact} className="wn-btn wn-btn--ghost">
            Contact Karvaahh
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
