import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import MotionProvider from "@/components/activities/experience/MotionProvider";
import { featureSections, russiaFaqs, whyRussia } from "@/data/russia/content";
import { visibleDestinations, russiaDestinationById } from "@/data/russia/destinations";
import { russiaImages } from "@/data/russia/images";
import { russiaPackageCount } from "@/data/russia/packages";
import { SEASON_NOTE, russiaSeasons } from "@/data/russia/seasons";
import { RUSSIA_ENQUIRY } from "@/lib/russia/config";
import AsiaCTA from "../asia/AsiaCTA";
import AsiaFaq from "../asia/AsiaFaq";
import SeasonSelector, { type SeasonView } from "../asia/SeasonSelector";
import WhyKarvaahh from "../asia/WhyKarvaahh";
import CustomRussiaBuilder from "./CustomRussiaBuilder";
import DeparturesSection from "./DeparturesSection";
import DestinationGrid from "./DestinationGrid";
import ExperienceSection from "./ExperienceSection";
import FeatureSection from "./FeatureSection";
import OtherRussiaDestinations from "./OtherRussiaDestinations";
import PopularPackages from "./PopularPackages";
import RelatedRussia from "./RelatedRussia";
import { seasonsText } from "./RuDestinationCard";
import RussiaFilters from "./RussiaFilters";
import RussiaHero from "./RussiaHero";
import RussiaMap from "./RussiaMap";
import RussiaStickyBar from "./RussiaStickyBar";
import TransportSection from "./TransportSection";
import TravelEssentials from "./TravelEssentials";
import WinterSection from "./WinterSection";
import "../../packages.css";
import "../asia/asia.css";
import "./russia.css";

/**
 * /packages/international/russia. Builds on the international page system
 * (packages.css + asia.css + shared components) with a Russia palette and
 * Russia-specific sections. Server-rendered; only filters, map, carousels,
 * tabs, builder and sticky bar hydrate.
 * Journey: Dream → Explore → Choose experience → Discover package → Customize → Enquire.
 */
export default function RussiaPage() {
  const packageCounts = Object.fromEntries(visibleDestinations.map((d) => [d.id, russiaPackageCount(d.id, d.partOf)]));
  const f = featureSections;

  const seasonViews: SeasonView[] = russiaSeasons.map((s) => ({
    ...s,
    destinations: s.destinations
      .map((id) => russiaDestinationById(id))
      .filter((d) => d && d.operationalStatus !== "inactive")
      .map((d) => ({ id: d!.id, country: d!.name, bestTime: seasonsText(d!.idealSeason) })),
  }));

  return (
    <div className="pkg-page asia-page russia-page">
      <Navbar />
      <MotionProvider>
        <main>
          <RussiaHero />
          <RussiaFilters />

          <section className="pkg-section" id="explore" aria-labelledby="explore-h">
            <div className="pkg-container">
              <div className="pkg-section__head">
                <p className="asia-eyebrow">Destinations</p>
                <h2 id="explore-h" className="pkg-h2">Explore Russia</h2>
                <p className="pkg-lede">
                  Discover iconic cities, historic towns, Arctic landscapes, Siberian wilderness and unforgettable Russian experiences.
                </p>
              </div>
              <DestinationGrid packageCounts={packageCounts} />
            </div>
          </section>

          <section className="pkg-section pkg-section--sand" id="packages" aria-labelledby="packages-h">
            <div className="pkg-container">
              <div className="pkg-section__head">
                <p className="asia-eyebrow">Russia tour packages</p>
                <h2 id="packages-h" className="pkg-h2">Popular Russia Tour Packages</h2>
                <p className="pkg-lede">
                  Starting points from Nepal and India. Every package can be shortened, extended, upgraded or combined.
                </p>
              </div>
              <PopularPackages />
            </div>
          </section>

          <RussiaMap />
          <FeatureSection config={f.moscow} />
          <FeatureSection config={f["saint-petersburg"]} />
          <FeatureSection config={f.classic} />
          <FeatureSection config={f["golden-ring"]} />
          <FeatureSection config={f.kazan} />
          <FeatureSection config={f.sochi} />
          <FeatureSection config={f.murmansk} />
          <FeatureSection config={f.baikal} />
          <OtherRussiaDestinations />

          <section className="pkg-section" id="experiences" aria-labelledby="experiences-h">
            <div className="pkg-container">
              <div className="pkg-section__head">
                <p className="asia-eyebrow">Travel style</p>
                <h2 id="experiences-h" className="pkg-h2">Russia by Experience</h2>
                <p className="pkg-lede">Pick the kind of trip you want. Destinations and packages above update to match.</p>
              </div>
              <ExperienceSection />
            </div>
          </section>

          <FeatureSection config={f.honeymoon} />
          <FeatureSection config={f.family} />
          <WinterSection />

          <section className="pkg-section" id="seasons" aria-labelledby="seasons-h">
            <div className="pkg-container">
              <div className="pkg-section__head">
                <p className="asia-eyebrow">When to go</p>
                <h2 id="seasons-h" className="pkg-h2">Russia by Season</h2>
                <p className="pkg-lede">Each season shows a different Russia. Pick one to see where it usually shines.</p>
              </div>
              <SeasonSelector seasons={seasonViews} note={SEASON_NOTE} />
            </div>
          </section>

          <TransportSection />
          <DeparturesSection />
          <TravelEssentials />
          <WhyKarvaahh
            eyebrow="Why Karvaahh"
            title="Your Russia Journey. Thoughtfully Planned."
            intro="A Nepal & India-based international travel partner for customized Russia journeys, from first idea to the flight home."
            items={whyRussia}
          />

          <section className="pkg-section asia-section--deep" id="plan-trip" aria-labelledby="plan-trip-h">
            <div className="pkg-container">
              <div className="pkg-section__head">
                <p className="asia-eyebrow asia-eyebrow--light">Custom Russia trip builder</p>
                <h2 id="plan-trip-h" className="pkg-h2 pkg-h2--light">Build Your Russia Journey</h2>
                <p className="pkg-lede pkg-lede--light">
                  Tell us your dates, cities and style. We&apos;ll come back with an itinerary and a clear quote.
                </p>
              </div>
              <CustomRussiaBuilder />
            </div>
          </section>

          <AsiaFaq
            items={russiaFaqs}
            title="Russia Tour Packages: Your Questions"
            intro="Straight answers on planning, visas, seasons, the Northern Lights and getting around."
            enquiryHref={RUSSIA_ENQUIRY}
          />
          <RelatedRussia />
          <AsiaCTA
            title="Your Russia Story Starts Here"
            lede="From Moscow's iconic landmarks and Saint Petersburg's imperial heritage to Siberian wilderness, Lake Baikal, Arctic Northern Lights and unforgettable winter landscapes, discover Russia through a journey designed around you."
            image={russiaImages["moscow-winter"].src}
            primary={{ label: "Explore Russia Packages", href: "#packages" }}
            secondary={{ label: "Customize My Russia Trip", href: "#plan-trip" }}
            whatsappHref={RUSSIA_ENQUIRY}
          />
        </main>
        <RussiaStickyBar />
      </MotionProvider>
      <Footer />
    </div>
  );
}
