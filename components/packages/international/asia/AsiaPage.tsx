import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import MotionProvider from "@/components/activities/experience/MotionProvider";
import { seasons } from "@/data/asia-content";
import { activeDestinations, destinationById } from "@/data/asia-destinations";
import { packageCountFor } from "@/data/asia-packages";
import AsiaCTA from "./AsiaCTA";
import AsiaFaq from "./AsiaFaq";
import AsiaHero from "./AsiaHero";
import AsiaMap from "./AsiaMap";
import CustomTripBuilder from "./CustomTripBuilder";
import DestinationExplorer from "./DestinationExplorer";
import FeaturedPackageCarousel from "./FeaturedPackageCarousel";
import HowItWorks from "./HowItWorks";
import RelatedDestinations from "./RelatedDestinations";
import SeasonSelector, { type SeasonView } from "./SeasonSelector";
import SpecialCollections from "./SpecialCollections";
import StickyBookingBar from "./StickyBookingBar";
import TravelStyleSection from "./TravelStyleSection";
import TripPlanner from "./TripPlanner";
import { TravelServices, VisaAssistance } from "./VisaAndServices";
import WhyKarvaahh from "./WhyKarvaahh";
import "../../packages.css";
import "./asia.css";

/**
 * /packages/international/asia. Server-rendered assembly: only the planner,
 * filters, map, carousel controls, seasons, builder and sticky bar hydrate.
 * Story arc: Discover → Choose → Customize → Enquire → Travel.
 */
export default function AsiaPage() {
  const packageCounts = Object.fromEntries(activeDestinations.map((d) => [d.id, packageCountFor(d.id)]));

  // Places for the planner suggestions: countries first, then their cities.
  const places = Array.from(new Set([...activeDestinations.map((d) => d.country), ...activeDestinations.flatMap((d) => d.cities)]));

  const seasonViews: SeasonView[] = seasons.map((s) => ({
    ...s,
    destinations: s.destinations
      .map((id) => destinationById(id))
      .filter((d) => d?.active)
      .map((d) => ({ id: d!.id, country: d!.country, iso: d!.iso, bestTime: d!.bestTime })),
  }));

  return (
    <div className="pkg-page asia-page">
      <Navbar />
      <MotionProvider>
        <main>
          <AsiaHero />
          <TripPlanner places={places} />

          <section className="pkg-section asia-destinations" id="destinations" aria-labelledby="destinations-h">
            <div className="pkg-container">
              <div className="pkg-section__head">
                <p className="asia-eyebrow">Featured destinations</p>
                <h2 id="destinations-h" className="pkg-h2">Asia Is Waiting to Be Explored</h2>
                <p className="pkg-lede">
                  From tropical islands and futuristic cities to ancient temples, mountain landscapes and cultural
                  wonders, discover Asia through journeys designed around you.
                </p>
              </div>
              <DestinationExplorer destinations={activeDestinations} packageCounts={packageCounts} />
            </div>
          </section>

          <AsiaMap />
          <FeaturedPackageCarousel />
          <TravelStyleSection />
          <WhyKarvaahh />
          <HowItWorks />
          <SpecialCollections />

          <section className="pkg-section" id="best-time" aria-labelledby="best-time-h">
            <div className="pkg-container">
              <div className="pkg-section__head">
                <p className="asia-eyebrow">Best time to visit Asia</p>
                <h2 id="best-time-h" className="pkg-h2">There Is No Single Season for Asia</h2>
                <p className="pkg-lede">
                  Asia spans monsoon coasts, deserts and high mountains, so the right month depends on where you go.
                  Pick a season to see where it usually shines.
                </p>
              </div>
              <SeasonSelector seasons={seasonViews} />
            </div>
          </section>

          <section className="pkg-section asia-section--deep asia-builder-section" id="plan-trip" aria-labelledby="plan-trip-h">
            <div className="pkg-container">
              <div className="pkg-section__head">
                <p className="asia-eyebrow asia-eyebrow--light">Custom tour builder</p>
                <h2 id="plan-trip-h" className="pkg-h2 pkg-h2--light">Can&apos;t Find the Perfect Package?</h2>
                <p className="pkg-lede pkg-lede--light">
                  Tell us what you want and we&apos;ll help create a journey around your dates, interests, budget and travel
                  style.
                </p>
              </div>
              <CustomTripBuilder countries={activeDestinations.map((d) => ({ name: d.country, places: d.cities }))} />
            </div>
          </section>

          <VisaAssistance />
          <TravelServices />
          <AsiaFaq />
          <RelatedDestinations />
          <AsiaCTA />
        </main>
        <StickyBookingBar />
      </MotionProvider>
      <Footer />
    </div>
  );
}
