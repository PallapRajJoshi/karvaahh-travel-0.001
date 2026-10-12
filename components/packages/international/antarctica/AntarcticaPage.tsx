import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import MotionProvider from "@/components/activities/experience/MotionProvider";
import { antarcticaFaqs, positioning, whyAntarctica } from "@/data/antarctica/content";
import { ANTARCTICA_ENQUIRY } from "@/lib/antarctica/config";
import AsiaFaq from "../asia/AsiaFaq";
import WhyKarvaahh from "../asia/WhyKarvaahh";
import AntarcticaByTravelStyle from "./AntarcticaByTravelStyle";
import AntarcticaDestinationExplorer from "./AntarcticaDestinationExplorer";
import AntarcticaExtensions from "./AntarcticaExtensions";
import AntarcticaFinalCTA from "./AntarcticaFinalCTA";
import AntarcticaHero from "./AntarcticaHero";
import AntarcticaInteractiveMap from "./AntarcticaInteractiveMap";
import AntarcticaPackageGrid from "./AntarcticaPackageGrid";
import AntarcticaSeasonExplorer from "./AntarcticaSeasonExplorer";
import AntarcticaStickyBar from "./AntarcticaStickyBar";
import AntarcticaTravelEssentials from "./AntarcticaTravelEssentials";
import AntarcticaTripBuilder from "./AntarcticaTripBuilder";
import AntarcticaVisaSection from "./AntarcticaVisaSection";
import AntarcticCircleSection from "./AntarcticCircleSection";
import AntarcticPeninsulaSection from "./AntarcticPeninsulaSection";
import DrakePassageSection from "./DrakePassageSection";
import ExpeditionCruiseSection from "./ExpeditionCruiseSection";
import ExpeditionStyleFilter from "./ExpeditionStyleFilter";
import ExpeditionTimeline from "./ExpeditionTimeline";
import IcebergGlacierSection from "./IcebergGlacierSection";
import PenguinExperience from "./PenguinExperience";
import PolarCommandBar from "./PolarCommandBar";
import { AntarcticaFamilySection, AntarcticaHoneymoonSection, AntarcticaLuxurySection } from "./PolarCollectionSection";
import PolarTransportSection from "./PolarTransportSection";
import PolarWildlifeSection from "./PolarWildlifeSection";
import { FalklandSection, SouthGeorgiaSection, SouthShetlandSection } from "./RegionFeatureSection";
import RelatedAntarctica from "./RelatedAntarctica";
import ResponsibleTravelSection from "./ResponsibleTravelSection";
import SectionHead from "./SectionHead";
import TravelFromNepalIndia from "./TravelFromNepalIndia";
import UshuaiaGatewaySection from "./UshuaiaGatewaySection";
import WhaleWatchingSection from "./WhaleWatchingSection";
import "../../packages.css";
import "../asia/asia.css";
import "./antarctica.css";

/**
 * /packages/international/antarctica. Builds on the international page
 * system (packages.css + asia.css + shared FAQ / Why / sticky bar) with a
 * polar palette. Every section is data-driven from data/antarctica/*.
 *
 * The story follows the voyage: Dream → Discover (map, destinations) →
 * Choose (expeditions) → Route (Drake, Shetlands, Peninsula, ice, wildlife,
 * Circle, South Georgia, Falklands) → Ship + cabins → Collections →
 * Gateway + logistics → Season + documents → Timeline → Builder → Enquire.
 */
export default function AntarcticaPage() {
  return (
    <div className="pkg-page asia-page antarctica-page">
      <Navbar />
      <MotionProvider>
        <main>
          <AntarcticaHero />
          <PolarCommandBar />

          <section className="pkg-section an-intro" aria-labelledby="intro-h">
            <div className="pkg-container an-intro__inner">
              <p className="asia-eyebrow">{positioning.eyebrow}</p>
              <h2 id="intro-h" className="an-intro__title">{positioning.title}</h2>
              <p className="an-intro__text">{positioning.text}</p>
            </div>
          </section>

          <section className="pkg-section asia-section--deep an-map-section" id="an-map" aria-labelledby="map-h">
            <div className="pkg-container">
              <SectionHead
                id="map-h"
                light
                eyebrow="Interactive polar map"
                title="Explore Antarctica"
                lede="From the gateway of Ushuaia across the Drake Passage to the islands and ice of the Peninsula. Choose a route, then select any region."
              />
              <AntarcticaInteractiveMap />
            </div>
          </section>

          <section className="pkg-section" id="explore" aria-labelledby="explore-h">
            <div className="pkg-container">
              <SectionHead
                id="explore-h"
                eyebrow="Antarctica destination explorer"
                title="Where an Expedition Can Take You"
                lede="Every region of a Southern Ocean voyage, from the gateway port to sub-Antarctic islands. Open any destination for details and the expeditions that include it."
              />
              <AntarcticaDestinationExplorer />
            </div>
          </section>

          <section className="pkg-section pkg-section--sand" id="expeditions" aria-labelledby="expeditions-h">
            <div className="pkg-container">
              <SectionHead
                id="expeditions-h"
                eyebrow="Popular Antarctica expedition packages"
                title="Choose Your Expedition"
                lede="Configurable expedition templates, not fixed itineraries. Choose one or more styles and routes; we then match the template to real operator departures, vessels and cabins for your dates."
              />
              <ExpeditionStyleFilter />
              <AntarcticaPackageGrid />
            </div>
          </section>

          <section className="pkg-section an-bystyle" id="travel-styles" aria-labelledby="styles-h">
            <div className="pkg-container">
              <SectionHead
                id="styles-h"
                eyebrow="Antarctica by travel style"
                title="Your Antarctica, Your Way"
                lede="Pick the way you want to travel. The expedition list updates to match."
              />
              <AntarcticaByTravelStyle />
            </div>
          </section>

          <DrakePassageSection />
          <SouthShetlandSection />
          <AntarcticPeninsulaSection />
          <IcebergGlacierSection />
          <PolarWildlifeSection />
          <PenguinExperience />
          <WhaleWatchingSection />
          <AntarcticCircleSection />
          <SouthGeorgiaSection />
          <FalklandSection />

          <ExpeditionCruiseSection />

          <AntarcticaHoneymoonSection />
          <AntarcticaLuxurySection />
          <AntarcticaFamilySection />

          <AntarcticaExtensions />
          <UshuaiaGatewaySection />
          <PolarTransportSection />
          <TravelFromNepalIndia />
          <AntarcticaSeasonExplorer />
          <AntarcticaVisaSection />
          <AntarcticaTravelEssentials />
          <ResponsibleTravelSection />
          <ExpeditionTimeline />

          <WhyKarvaahh
            eyebrow="Why plan Antarctica with Karvaahh"
            title="Your Polar Journey. Thoughtfully Planned."
            intro="A Nepal- and India-based travel partner that coordinates the whole chain, from your home airport to the expedition pier and back."
            items={whyAntarctica}
          />

          <section className="pkg-section asia-section--deep an-builder-section" id="plan-trip" aria-labelledby="plan-trip-h">
            <div className="pkg-container">
              <SectionHead
                id="plan-trip-h"
                light
                eyebrow="Antarctica trip builder"
                title="Design Your Antarctica Expedition"
                lede="Eight quick questions. We'll come back with suitable voyages, cabins, flights and a clear quote."
              />
              <AntarcticaTripBuilder />
            </div>
          </section>

          <AsiaFaq
            items={antarcticaFaqs}
            title="Antarctica Expeditions: Your Questions"
            intro="Straight, careful answers on reaching Antarctica from Nepal and India, voyages, wildlife, seasons and documents."
            enquiryHref={ANTARCTICA_ENQUIRY}
          />
          <RelatedAntarctica />
          <AntarcticaFinalCTA />
        </main>
        <AntarcticaStickyBar />
      </MotionProvider>
      <Footer />
    </div>
  );
}
