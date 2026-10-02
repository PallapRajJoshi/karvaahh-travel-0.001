import Link from "next/link";
import Reveal from "./shared/Reveal";
import WellnessImage from "./shared/WellnessImage";
import SectionHeading from "./shared/SectionHeading";
import { LINKS } from "./data/config";
import "./WellnessIntroduction.css";

export default function WellnessIntroduction() {
  return (
    <section className="ykw-section ykw-intro" aria-labelledby="ykw-intro-title">
      <div className="ykw-container ykw-intro__grid">
        <Reveal className="ykw-intro__media">
          <div className="ykw-intro__frame">
            <WellnessImage
              sizes="(max-width: 900px) 100vw, 46vw"
              image={{
                src: "/images/activities/wellness/yoga-wellness/intro-retreat.webp",
                alt: "A calm retreat courtyard with a yoga mat in soft morning light",
                label: "Peaceful retreat, yoga or meditation setting",
              }}
            />
          </div>
          <span className="ykw-intro__badge" aria-hidden="true">
            Nepal • India
          </span>
        </Reveal>

        <div className="ykw-intro__copy">
          <SectionHeading
            id="ykw-intro-title"
            align="left"
            eyebrow="A journey toward inner balance"
            title="Travel Inward. Feel Renewed."
          />
          <Reveal delay={80}>
            <p className="ykw-intro__p">
              Yoga &amp; Wellness experiences offer a rejuvenating journey that combines physical
              well-being, mental relaxation, <mark>mindfulness and inner balance</mark>, and{" "}
              <mark>holistic well-being</mark> through travel. From peaceful{" "}
              <mark>Himalayan wellness retreats</mark>, meditation centers, and Ayurvedic wellness
              resorts to <mark>nature-inspired wellness</mark> escapes and spiritual sanctuaries,
              these experiences help travelers <mark>reconnect with themselves</mark> and embrace a
              healthier lifestyle.
            </p>
            <p className="ykw-intro__p">
              Discover the serene beauty of Rishikesh, Haridwar, Kathmandu, Pokhara, Lumbini,
              Nagarkot, and the tranquil Himalayan foothills of Nepal. Enjoy yoga sessions, guided
              meditation, breathing exercises, Ayurveda therapies, sound healing, nature walks, and
              wellness workshops surrounded by breathtaking landscapes and peaceful environments.
            </p>
            <p className="ykw-intro__p">
              Ideal for individuals, families, corporate groups, and wellness enthusiasts, these
              retreats offer opportunities for stress relief, mindfulness, healthy living, and inner
              balance through thoughtfully curated wellness experiences.
            </p>
            <p className="ykw-intro__note">
              Wellness travel is not medical treatment. Sessions, therapies, and facilities depend on
              the retreat you choose and are confirmed before booking.{" "}
              <Link href={LINKS.packages}>Browse Karvaahh packages</Link>
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
