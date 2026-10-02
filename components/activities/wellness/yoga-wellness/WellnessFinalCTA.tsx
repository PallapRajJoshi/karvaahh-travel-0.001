import Reveal from "./shared/Reveal";
import WellnessImage from "./shared/WellnessImage";
import { ButtonLink } from "./shared/ButtonLink";
import PrefillButton from "./shared/PrefillButton";
import { LINKS } from "./data/config";
import "./WellnessFinalCTA.css";

export default function WellnessFinalCTA() {
  return (
    <section className="ykw-final" aria-labelledby="ykw-final-title">
      <div className="ykw-final__media">
        <WellnessImage
          sizes="100vw"
          image={{
            src: "/images/activities/wellness/yoga-wellness/final-cta-sunrise.webp",
            alt: "Sunrise over a peaceful Himalayan wellness setting",
            label: "Final CTA: Himalayan wellness setting at sunrise",
          }}
        />
        <div className="ykw-final__overlay" />
      </div>
      <Reveal className="ykw-container ykw-final__inner">
        <p className="ykw-final__eyebrow">Find your moment of calm</p>
        <h2 id="ykw-final-title">Take a Breath. Find Your Balance. Begin Your Journey.</h2>
        <p className="ykw-final__text">
          From peaceful lakeside retreats to tranquil Himalayan landscapes, discover wellness
          experiences that help you slow down, reconnect with nature, and make space for yourself.
        </p>
        <div className="ykw-final__cta">
          <PrefillButton variant="primary">Plan Your Wellness Retreat</PrefillButton>
          <ButtonLink href={LINKS.contact} variant="ghost">
            Contact Karvaahh
          </ButtonLink>
        </div>
      </Reveal>
    </section>
  );
}
