import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import MotionProvider from "@/components/activities/experience/MotionProvider";
import { saFaqs, whySA } from "@/data/south-africa/content";
import { SA_ENQUIRY } from "@/lib/south-africa/config";
import AsiaFaq from "../asia/AsiaFaq";
import WhyKarvaahh from "../asia/WhyKarvaahh";
import {
  AddoSection,
  CapeTownSection,
  CapeWinelandsSection,
  DrakensbergSection,
  DurbanSection,
  GardenRouteSection,
  HermanusSection,
  JohannesburgSection,
  KrugerSafariSection,
  NorthernCapeSection,
  PanoramaRouteSection,
  SabiSandSection,
  SunCitySection,
} from "./RegionStorySection";
import RelatedSouthAfrica from "./RelatedSouthAfrica";
import SafariExperienceExplorer from "./SafariExperienceExplorer";
import SafariPreparationSection from "./SafariPreparationSection";
import { SouthAfricaAdventureSection, SouthAfricaFamilySection, SouthAfricaHoneymoonSection, SouthAfricaLuxurySection } from "./SouthAfricaCollectionSection";
import SouthAfricaDestinationExplorer from "./SouthAfricaDestinationExplorer";
import SouthAfricaExperienceBar from "./SouthAfricaExperienceBar";
import SouthAfricaExperienceExplorer from "./SouthAfricaExperienceExplorer";
import SouthAfricaFinalCTA from "./SouthAfricaFinalCTA";
import SouthAfricaGatewaySection from "./SouthAfricaGatewaySection";
import SouthAfricaHero from "./SouthAfricaHero";
import SouthAfricaInteractiveMap from "./SouthAfricaInteractiveMap";
import SouthAfricaMultiCityCircuits from "./SouthAfricaMultiCityCircuits";
import SouthAfricaPackageGrid from "./SouthAfricaPackageGrid";
import SouthAfricaPackageModal from "./SouthAfricaPackageModal";
import SouthAfricaRoadTripExplorer from "./SouthAfricaRoadTripExplorer";
import SouthAfricaSeasonExplorer from "./SouthAfricaSeasonExplorer";
import SouthAfricaStickyBar from "./SouthAfricaStickyBar";
import SouthAfricaTransportSection from "./SouthAfricaTransportSection";
import SouthAfricaTravelEssentials from "./SouthAfricaTravelEssentials";
import SouthAfricaTravelStyleFilter from "./SouthAfricaTravelStyleFilter";
import SouthAfricaTripBuilder from "./SouthAfricaTripBuilder";
import SouthAfricaVisaSection from "./SouthAfricaVisaSection";
import WhyKarvaahhCTA from "./WhyKarvaahhCTA";
import WildlifeExplorer from "./WildlifeExplorer";
import { ZaHead } from "./ZaPrimitives";
import "../../packages.css";
import "../asia/asia.css";
import "./south-africa.css";

/**
 * /packages/international/south-africa. Built on the international page
 * system (packages.css + asia.css + shared FAQ / Why / sticky bar) with a
 * warm earth-and-ocean palette. Every section renders from data/south-africa/*.
 *
 * Journey: Discover → Explore (map, destinations, experiences) → Choose
 * style → Cape Town / Winelands / coast → Safari (Kruger, Sabi Sand) →
 * Panorama, Gauteng, Sun City → Garden Route, Addo → KZN → Northern Cape →
 * Collections → Packages → Circuits → Road trips → Logistics → Builder.
 */
export default function SouthAfricaPage() {
  return (
    <div className="pkg-page asia-page south-africa-page">
      <Navbar />
      <MotionProvider>
        <main>
          <SouthAfricaHero />
          <SouthAfricaExperienceBar />

          <section className="pkg-section za-map-section" id="za-map" aria-labelledby="map-h">
            <div className="pkg-container">
              <ZaHead
                id="map-h"
                light
                eyebrow="Interactive South Africa map"
                title="Explore South Africa"
                lede="Twenty-five destinations across nine provinces. Highlight a province, trace a classic route, or select any destination to see what it offers."
              />
              <SouthAfricaInteractiveMap />
            </div>
          </section>

          <section className="pkg-section" id="explore" aria-labelledby="explore-h">
            <div className="pkg-container">
              <ZaHead
                id="explore-h"
                eyebrow="Destination explorer"
                title="Where Will South Africa Take You?"
                lede="Cities, wine valleys, coastlines, mountains and the bush. Cards follow the travel styles you choose above."
              />
              <SouthAfricaDestinationExplorer />
            </div>
          </section>

          <section className="pkg-section pkg-section--sand za-xp-section" id="experiences" aria-labelledby="xp-h">
            <div className="pkg-container">
              <ZaHead id="xp-h" eyebrow="Top South Africa experiences" title="Twenty Reasons to Go" lede="From Table Mountain to the Big Five. Swipe through, then jump to the region." />
              <SouthAfricaExperienceExplorer />
            </div>
          </section>

          <CapeTownSection />
          <CapeWinelandsSection />
          <HermanusSection />
          <SafariExperienceExplorer />
          <KrugerSafariSection />
          <SabiSandSection />
          <WildlifeExplorer />
          <PanoramaRouteSection />
          <JohannesburgSection />
          <SunCitySection />
          <GardenRouteSection />
          <AddoSection />
          <DurbanSection />
          <DrakensbergSection />
          <NorthernCapeSection />

          <SouthAfricaHoneymoonSection />
          <SouthAfricaFamilySection />
          <SouthAfricaLuxurySection />
          <SouthAfricaAdventureSection />

          <section className="pkg-section pkg-section--sand" id="packages" aria-labelledby="packages-h">
            <div className="pkg-container">
              <ZaHead
                id="packages-h"
                eyebrow="South Africa by travel style · Popular packages"
                title="Find Your South Africa Package"
                lede="Every package is a customizable template. Combine styles to narrow the list; we quote real hotels, lodges and flights for your dates."
              />
              <SouthAfricaTravelStyleFilter />
              <SouthAfricaPackageGrid />
            </div>
          </section>

          <SouthAfricaMultiCityCircuits />
          <SouthAfricaRoadTripExplorer />
          <SouthAfricaTransportSection />
          <SouthAfricaGatewaySection />
          <SouthAfricaSeasonExplorer />
          <SouthAfricaVisaSection />
          <SafariPreparationSection />
          <SouthAfricaTravelEssentials />

          <WhyKarvaahh
            eyebrow="Why book South Africa with Karvaahh"
            title="Your South Africa, Thoughtfully Planned."
            intro="A Nepal- and India-based international travel partner for customized South Africa journeys, from the first idea to the flight home."
            items={whySA}
          />
          <WhyKarvaahhCTA />

          <section className="pkg-section za-builder-section" id="plan-trip" aria-labelledby="plan-trip-h">
            <div className="pkg-container">
              <ZaHead id="plan-trip-h" light eyebrow="Custom South Africa trip builder" title="Build Your South Africa Journey" lede="Eight quick questions. We'll come back with an itinerary and a clear, itemised quote." />
              <SouthAfricaTripBuilder />
            </div>
          </section>

          <AsiaFaq
            items={saFaqs}
            title="South Africa Tours: Your Questions"
            intro="Straight answers on planning from Nepal and India, safaris, seasons, inclusions and visas."
            enquiryHref={SA_ENQUIRY}
          />
          <RelatedSouthAfrica />
          <SouthAfricaFinalCTA />
        </main>
        <SouthAfricaPackageModal />
        <SouthAfricaStickyBar />
      </MotionProvider>
      <Footer />
    </div>
  );
}
