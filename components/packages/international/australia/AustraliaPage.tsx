import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import MotionProvider from "@/components/activities/experience/MotionProvider";
import { familyCollection, honeymoonCollection, luxuryCollection } from "@/data/australia/collections";
import { australiaFaqs, storyline, whyAustralia } from "@/data/australia/content";
import { visibleAustraliaDestinations } from "@/data/australia/destinations";
import { australiaImages } from "@/data/australia/images";
import { australiaPackageCount } from "@/data/australia/packages";
import { storySections as s } from "@/data/australia/sections";
import { AU_ENQUIRY } from "@/lib/australia/config";
import AsiaCTA from "../asia/AsiaCTA";
import AsiaFaq from "../asia/AsiaFaq";
import WhyKarvaahh from "../asia/WhyKarvaahh";
import AustraliaCollectionSection from "./AustraliaCollectionSection";
import AustraliaDestinationExplorer from "./AustraliaDestinationExplorer";
import AustraliaExperienceExplorer from "./AustraliaExperienceExplorer";
import AustraliaGatewaySection from "./AustraliaGatewaySection";
import AustraliaHero from "./AustraliaHero";
import AustraliaInteractiveMap from "./AustraliaInteractiveMap";
import AustraliaLandSprite from "./AustraliaLandSprite";
import AustraliaMultiCityCircuits from "./AustraliaMultiCityCircuits";
import AustraliaPackageGrid from "./AustraliaPackageGrid";
import AustraliaRegionNav from "./AustraliaRegionNav";
import AustraliaRoadTrips from "./AustraliaRoadTrips";
import AustraliaSeasonExplorer from "./AustraliaSeasonExplorer";
import AustraliaStickyBar from "./AustraliaStickyBar";
import AustraliaStorySection from "./AustraliaStorySection";
import AustraliaTransportSection from "./AustraliaTransportSection";
import AustraliaTravelEssentials from "./AustraliaTravelEssentials";
import AustraliaTravelStyleFilter from "./AustraliaTravelStyleFilter";
import AustraliaTripBuilder from "./AustraliaTripBuilder";
import AustraliaVisaSection from "./AustraliaVisaSection";
import GreatBarrierReefSection from "./GreatBarrierReefSection";
import QueenslandCollection from "./QueenslandCollection";
import RelatedAustralia from "./RelatedAustralia";
import SydneyCollection from "./SydneyCollection";
import UluruMoments from "./UluruMoments";
import WhyKarvaahhCta from "./WhyKarvaahhCta";
import WildlifeSection from "./WildlifeSection";
import "../../packages.css";
import "../asia/asia.css";
import "../usa/usa.css";
import "./australia.css";

/**
 * /packages/international/australia. Builds on the international page system
 * (packages.css + asia.css + the us-* layouts in usa.css) with an ocean / sand /
 * red-earth palette and Australia-specific sections. Every section is
 * data-driven from data/australia/*. Server-rendered; only the filters, maps,
 * carousels, tabs, builder and sticky bar hydrate.
 * Journey: Discover → Region → Destination → Experience → Travel style →
 * Package → Multi-city journey → Customize → Enquire.
 */
export default function AustraliaPage() {
  const packageCounts = Object.fromEntries(visibleAustraliaDestinations.map((d) => [d.id, australiaPackageCount(d.id)]));

  return (
    <div className="pkg-page asia-page au-page">
      <AustraliaLandSprite />
      <Navbar />
      <MotionProvider>
        <main>
          <AustraliaHero />
          <AustraliaRegionNav />
          <AustraliaInteractiveMap />

          <section className="pkg-section" id="explore" aria-labelledby="explore-h">
            <div className="pkg-container">
              <div className="pkg-section__head">
                <p className="asia-eyebrow">Destinations</p>
                <h2 id="explore-h" className="pkg-h2">Explore Australia, Place by Place</h2>
                <p className="pkg-lede">{storyline}</p>
              </div>
              <AustraliaDestinationExplorer packageCounts={packageCounts} />
            </div>
          </section>

          <section className="pkg-section pkg-section--sand" id="experiences" aria-labelledby="experiences-h">
            <div className="pkg-container">
              <div className="pkg-section__head">
                <p className="asia-eyebrow">Top Australia experiences</p>
                <h2 id="experiences-h" className="pkg-h2">Moments Made for Australia</h2>
                <p className="pkg-lede">Swipe through the experiences travellers ask us for most, then see the packages that include them.</p>
              </div>
              <AustraliaExperienceExplorer />
            </div>
          </section>

          <section className="pkg-section" id="packages" aria-labelledby="packages-h">
            <div className="pkg-container">
              <div className="pkg-section__head">
                <p className="asia-eyebrow">Australia by travel style · Popular Australia tour packages</p>
                <h2 id="packages-h" className="pkg-h2">Find Your Australia Package</h2>
                <p className="pkg-lede">
                  Choose one or more travel styles. Packages, destinations and experiences update instantly, and every template can be
                  shortened, extended, upgraded or combined.
                </p>
              </div>
              <AustraliaTravelStyleFilter />
              <AustraliaPackageGrid />
            </div>
          </section>

          <SydneyCollection />
          <AustraliaStorySection config={s.melbourne} />
          <QueenslandCollection />
          <GreatBarrierReefSection />
          <AustraliaStorySection config={s.goldCoast} />
          <AustraliaStorySection config={s.westernAustralia} />
          <AustraliaStorySection config={s.southAustralia} />
          <AustraliaStorySection config={s.tasmania} />
          <AustraliaStorySection config={s.outback}>
            <UluruMoments />
          </AustraliaStorySection>
          <WildlifeSection />

          <AustraliaCollectionSection c={honeymoonCollection} />
          <AustraliaCollectionSection c={familyCollection} />
          <AustraliaCollectionSection c={luxuryCollection} />

          <section className="pkg-section pkg-section--sand" id="road-trips" aria-labelledby="road-h">
            <div className="pkg-container">
              <div className="pkg-section__head">
                <p className="asia-eyebrow">Great Ocean Road + road trips</p>
                <h2 id="road-h" className="pkg-h2">Australia&apos;s Great Road Trips</h2>
                <p className="pkg-lede">Drive yourself, travel with a private chauffeur, take a guided tour or join an escorted group. You choose.</p>
              </div>
              <AustraliaRoadTrips />
            </div>
          </section>

          <AustraliaMultiCityCircuits />
          <AustraliaTransportSection />

          <section className="pkg-section pkg-section--sand" id="seasons" aria-labelledby="seasons-h">
            <div className="pkg-container">
              <div className="pkg-section__head">
                <p className="asia-eyebrow">Best time to visit Australia</p>
                <h2 id="seasons-h" className="pkg-h2">Seasons Turned Upside Down</h2>
                <p className="pkg-lede">
                  Australia&apos;s seasons are the reverse of home, and the tropical north runs on wet and dry seasons. Pick a season to see
                  where it usually shines.
                </p>
              </div>
              <AustraliaSeasonExplorer />
            </div>
          </section>

          <AustraliaVisaSection />

          <section className="pkg-section" id="gateways" aria-labelledby="gateways-h">
            <div className="pkg-container">
              <div className="pkg-section__head">
                <p className="asia-eyebrow">Travel from Nepal & India</p>
                <h2 id="gateways-h" className="pkg-h2">Your Gateway to Australia</h2>
                <p className="pkg-lede">Pick your departure city. We match flights, connections and timing to your dates.</p>
              </div>
              <AustraliaGatewaySection />
            </div>
          </section>

          <AustraliaTravelEssentials />
          <WhyKarvaahh
            eyebrow="Why book Australia with Karvaahh"
            title="Your Australia Journey. Thoughtfully Planned."
            intro="A Nepal & India-based international travel partner for customized Australia journeys, from the first idea to the flight home."
            items={whyAustralia}
          />
          <WhyKarvaahhCta />

          <section className="pkg-section asia-section--deep" id="plan-trip" aria-labelledby="plan-trip-h">
            <div className="pkg-container">
              <div className="pkg-section__head">
                <p className="asia-eyebrow asia-eyebrow--light">Custom Australia trip builder</p>
                <h2 id="plan-trip-h" className="pkg-h2 pkg-h2--light">Build Your Australia Journey</h2>
                <p className="pkg-lede pkg-lede--light">Seven quick questions. We&apos;ll come back with an itinerary and a clear quote.</p>
              </div>
              <AustraliaTripBuilder />
            </div>
          </section>

          <AsiaFaq
            items={australiaFaqs}
            title="Australia Tour Packages: Your Questions"
            intro="Straight answers on planning from Nepal and India, visas, seasons, tickets and getting around."
            enquiryHref={AU_ENQUIRY}
          />
          <RelatedAustralia />
          <AsiaCTA
            title="Your Australian Adventure Starts Here."
            lede="From reef adventures and coastal road trips to city escapes, wildlife encounters and unforgettable wilderness journeys, let Karvaahh design Australia around the way you want to travel."
            image={australiaImages["uluru-dusk"].src}
            primary={{ label: "Customize My Australia Trip", href: "#plan-trip" }}
            secondary={{ label: "Enquire Now", href: "#gateways" }}
            whatsappHref={AU_ENQUIRY}
          />
        </main>
        <AustraliaStickyBar />
      </MotionProvider>
      <Footer />
    </div>
  );
}
