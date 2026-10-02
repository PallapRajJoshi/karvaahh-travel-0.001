import Media from "../shared/Media";
import Reveal from "../shared/Reveal";
import SectionHeading from "../shared/SectionHeading";
import { INTRO_IMAGE } from "../data/content";
import "./CruiseIntroduction.css";

export default function CruiseIntroduction() {
  return (
    <section id="cruise-intro" className="cr-section cr-intro" aria-labelledby="cr-intro-title">
      <div className="cr-container cr-intro__grid">
        <Reveal className="cr-intro__media">
          <Media image={INTRO_IMAGE} sizes="(max-width: 900px) 100vw, 560px" />
        </Reveal>
        <div>
          <SectionHeading
            id="cr-intro-title"
            align="left"
            eyebrow="A journey beyond the shore"
            title="More Than a Journey, It's an Experience"
          />
          <Reveal delay={120}>
            <p className="cr-intro__text">
              Cruise Experiences offer a unique way to explore the world through{" "}
              <mark>unforgettable journeys</mark> across oceans, rivers, lakes, and{" "}
              <mark>scenic coastlines</mark>, combining{" "}
              <mark>luxury and relaxation</mark>, adventure, and{" "}
              <mark>cultural discovery</mark>. From luxury ocean cruises and
              romantic sunset sailing to peaceful river cruises, island-hopping
              adventures, and scenic lake voyages, these experiences provide
              travelers with breathtaking views, world-class hospitality, and
              memorable onboard entertainment.
            </p>
            <p className="cr-intro__text">
              Discover the charm of Halong Bay in Vietnam, the backwaters of
              Kerala, the Ganges River, the Mediterranean coastline, Dubai&rsquo;s
              iconic waters, and the tranquil lakes of Pokhara. Enjoy onboard
              dining, cultural performances, wellness experiences, water
              activities, sightseeing excursions, and spectacular sunrises and
              sunsets.
            </p>
            <p className="cr-intro__text">
              Ideal for families, couples, honeymooners, corporate groups, and
              leisure travelers, cruise experiences combine comfortable
              accommodation, scenic exploration, and immersive destinations into
              one remarkable journey.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
