import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import MotionProvider from "@/components/activities/experience/MotionProvider";
import { familyCollection, honeymoonCollection, luxuryCollection } from "@/data/usa/collections";
import { storyline, usaFaqs, whyUSA } from "@/data/usa/content";
import { visibleUSADestinations } from "@/data/usa/destinations";
import { usaImages } from "@/data/usa/images";
import { usaPackageCount } from "@/data/usa/packages";
import { storySections as s } from "@/data/usa/sections";
import { USA_ENQUIRY } from "@/lib/usa/config";
import AsiaCTA from "../asia/AsiaCTA";
import AsiaFaq from "../asia/AsiaFaq";
import WhyKarvaahh from "../asia/WhyKarvaahh";
import NationalParksSection from "./NationalParksSection";
import NewYorkExperience from "./NewYorkExperience";
import RelatedUSA from "./RelatedUSA";
import USACollectionSection from "./USACollectionSection";
import USACustomTripBuilder from "./USACustomTripBuilder";
import USADestinationExplorer from "./USADestinationExplorer";
import USAExperienceExplorer from "./USAExperienceExplorer";
import USAGatewaySection from "./USAGatewaySection";
import USAHero from "./USAHero";
import USAInteractiveMap from "./USAInteractiveMap";
import USALandSprite from "./USALandSprite";
import USAMultiCityCircuits from "./USAMultiCityCircuits";
import USAPackageGrid from "./USAPackageGrid";
import USARegionNav from "./USARegionNav";
import USARoadTripExplorer from "./USARoadTripExplorer";
import USASeasonExplorer from "./USASeasonExplorer";
import USAStickyBar from "./USAStickyBar";
import USAStorySection from "./USAStorySection";
import USATransportSection from "./USATransportSection";
import USATravelEssentials from "./USATravelEssentials";
import USATravelStyleFilter from "./USATravelStyleFilter";
import USAVisaSection from "./USAVisaSection";
import "../../packages.css";
import "../asia/asia.css";
import "./usa.css";

/**
 * /packages/international/usa. Builds on the international page system
 * (packages.css + asia.css + shared FAQ / CTA / Why / Season / sticky bar) with
 * a USA palette and USA-specific sections. Every section is data-driven from
 * data/usa/*. Server-rendered; only the filters, maps, carousels, tabs,
 * builder and sticky bar hydrate.
 * Journey: Destination → Region → Experience → Travel style → Package →
 * Multi-city route → Custom trip.
 */
export default function USAPage() {
  const packageCounts = Object.fromEntries(visibleUSADestinations.map((d) => [d.id, usaPackageCount(d.id)]));

  return (
    <div className="pkg-page asia-page usa-page">
      <USALandSprite />
      <Navbar />
      <MotionProvider>
        <main>
          <USAHero />
          <USARegionNav />
          <USAInteractiveMap />

          <section className="pkg-section" id="explore" aria-labelledby="explore-h">
            <div className="pkg-container">
              <div className="pkg-section__head">
                <p className="asia-eyebrow">Destinations</p>
                <h2 id="explore-h" className="pkg-h2">Explore USA Destinations</h2>
                <p className="pkg-lede">{storyline}</p>
              </div>
              <USADestinationExplorer packageCounts={packageCounts} />
            </div>
          </section>

          <section className="pkg-section pkg-section--sand" id="packages" aria-labelledby="packages-h">
            <div className="pkg-container">
              <div className="pkg-section__head">
                <p className="asia-eyebrow">USA by travel style · Popular USA tour packages</p>
                <h2 id="packages-h" className="pkg-h2">Find Your USA Package</h2>
                <p className="pkg-lede">
                  Choose one or more travel styles. Packages and destinations update instantly, and every template can be shortened,
                  extended, upgraded or combined.
                </p>
              </div>
              <USATravelStyleFilter />
              <USAPackageGrid />
            </div>
          </section>

          <NewYorkExperience />
          <USAStorySection config={s["east-coast"]} />
          <USAStorySection config={s.niagara} />
          <USAStorySection config={s.florida} />
          <USAStorySection config={s.southwest} />
          <USAStorySection config={s.california} />

          <section className="pkg-section us-parks-section" id="national-parks" aria-labelledby="parks-h">
            <div className="pkg-container">
              <div className="pkg-section__head">
                <p className="asia-eyebrow asia-eyebrow--light">National parks & nature</p>
                <h2 id="parks-h" className="pkg-h2 pkg-h2--light">America Beyond the Cities</h2>
                <p className="pkg-lede pkg-lede--light">Canyons, geysers, granite walls and wild coastlines. Filter by the kind of experience you want.</p>
              </div>
              <NationalParksSection />
            </div>
          </section>

          <USAStorySection config={s.hawaii} />
          <USAStorySection config={s.alaska} />
          <USAStorySection config={s.midwest} />
          <USAStorySection config={s.texas} />
          <USAStorySection config={s["mountain-states"]} />

          <section className="pkg-section" id="experiences" aria-labelledby="experiences-h">
            <div className="pkg-container">
              <div className="pkg-section__head">
                <p className="asia-eyebrow">Top USA experiences</p>
                <h2 id="experiences-h" className="pkg-h2">Twenty Ways to Fall for America</h2>
                <p className="pkg-lede">Swipe through the moments travellers ask us for most, then see the packages that include them.</p>
              </div>
              <USAExperienceExplorer />
            </div>
          </section>

          <USACollectionSection c={honeymoonCollection} />
          <USACollectionSection c={familyCollection} />
          <USACollectionSection c={luxuryCollection} />

          <USAMultiCityCircuits />

          <section className="pkg-section pkg-section--sand" id="road-trips" aria-labelledby="road-h">
            <div className="pkg-container">
              <div className="pkg-section__head">
                <p className="asia-eyebrow">USA road trips</p>
                <h2 id="road-h" className="pkg-h2">The Great American Road Trip</h2>
                <p className="pkg-lede">Drive yourself, travel with a private chauffeur, join an escorted group or fly the long legs. You choose.</p>
              </div>
              <USARoadTripExplorer />
            </div>
          </section>

          <USATransportSection />
          <USAVisaSection />

          <section className="pkg-section" id="gateways" aria-labelledby="gateways-h">
            <div className="pkg-container">
              <div className="pkg-section__head">
                <p className="asia-eyebrow">Travel from Nepal & India</p>
                <h2 id="gateways-h" className="pkg-h2">Your Gateway to the USA</h2>
                <p className="pkg-lede">Pick your departure city. We match flights, connections and timing to your dates.</p>
              </div>
              <USAGatewaySection />
            </div>
          </section>

          <section className="pkg-section pkg-section--sand" id="seasons" aria-labelledby="seasons-h">
            <div className="pkg-container">
              <div className="pkg-section__head">
                <p className="asia-eyebrow">Best time to visit the USA</p>
                <h2 id="seasons-h" className="pkg-h2">A Country for Every Season</h2>
                <p className="pkg-lede">There is no single best season for the USA. Pick a season to see where it usually shines.</p>
              </div>
              <USASeasonExplorer />
            </div>
          </section>

          <USATravelEssentials />
          <WhyKarvaahh
            eyebrow="Why book USA tours with Karvaahh"
            title="Your USA Journey. Thoughtfully Planned."
            intro="A Nepal & India-based international travel partner for customized USA journeys, from the first idea to the flight home."
            items={whyUSA}
          />

          <section className="pkg-section asia-section--deep" id="plan-trip" aria-labelledby="plan-trip-h">
            <div className="pkg-container">
              <div className="pkg-section__head">
                <p className="asia-eyebrow asia-eyebrow--light">Custom USA trip builder</p>
                <h2 id="plan-trip-h" className="pkg-h2 pkg-h2--light">Build Your USA Journey</h2>
                <p className="pkg-lede pkg-lede--light">Seven quick questions. We&apos;ll come back with an itinerary and a clear quote.</p>
              </div>
              <USACustomTripBuilder />
            </div>
          </section>

          <AsiaFaq
            items={usaFaqs}
            title="USA Tour Packages: Your Questions"
            intro="Straight answers on planning from Nepal and India, visas, seasons, tickets and getting around."
            enquiryHref={USA_ENQUIRY}
          />
          <RelatedUSA />
          <AsiaCTA
            title="Your USA Story Starts Here."
            lede="Tell Karvaahh where you want to go, how you want to travel and what you want to experience. We'll help shape it into a journey designed around you."
            image={usaImages["golden-gate-sunset"].src}
            primary={{ label: "Customize My USA Trip", href: "#plan-trip" }}
            secondary={{ label: "Enquire Now", href: "#plan-trip" }}
            whatsappHref={USA_ENQUIRY}
          />
        </main>
        <USAStickyBar />
      </MotionProvider>
      <Footer />
    </div>
  );
}
