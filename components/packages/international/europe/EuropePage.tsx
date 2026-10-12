import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import MotionProvider from "@/components/activities/experience/MotionProvider";
import { styleCollections } from "@/data/europe/content";
import { countryById, europeCountries } from "@/data/europe/countries";
import { packageCountFor } from "@/data/europe/packages";
import { europeSeasons } from "@/data/europe/seasons";
import SeasonSelector, { type SeasonView } from "../asia/SeasonSelector";
import CountryDirectory from "./CountryDirectory";
import CustomEuropeBuilder from "./CustomEuropeBuilder";
import EuropeCTA from "./EuropeCTA";
import EuropeFaq from "./EuropeFaq";
import EuropeFilters from "./EuropeFilters";
import EuropeHero from "./EuropeHero";
import EuropeHowItWorks from "./EuropeHowItWorks";
import EuropeMap from "./EuropeMap";
import EuropePackages from "./EuropePackages";
import EuropeStickyBar from "./EuropeStickyBar";
import EuropeWhyKarvaahh from "./EuropeWhyKarvaahh";
import ExperienceSection from "./ExperienceSection";
import MultiCountryCircuits from "./MultiCountryCircuits";
import NorthernLightsSection from "./NorthernLightsSection";
import RelatedEurope from "./RelatedEurope";
import StyleCollection from "./StyleCollection";
import SwitzerlandCollection from "./SwitzerlandCollection";
import TravelEssentials from "./TravelEssentials";
import TravelStyleGrid from "./TravelStyleGrid";
import WinterEuropeSection from "./WinterEuropeSection";
import "../../packages.css";
import "../asia/asia.css";
import "./europe.css";

const collection = (id: string) => styleCollections.find((c) => c.id === id);

/**
 * /packages/international/europe. Server-rendered assembly on the shared
 * international-hub design system (packages.css + asia.css) with Europe-only
 * styles in europe.css. Only the filters, directory, map, carousel, circuits,
 * experiences, seasons, builder and sticky bar hydrate.
 * Story arc: Dream → Explore → Choose → Customize → Enquire → Travel.
 */
export default function EuropePage() {
  const packageCounts = Object.fromEntries(europeCountries.map((c) => [c.id, packageCountFor(c.id)]));

  const seasonViews: SeasonView[] = europeSeasons.map((s) => ({
    id: s.id,
    label: s.label,
    months: s.months,
    text: s.extras?.length ? `${s.text} Also in season: ${s.extras.join(", ")}.` : s.text,
    destinations: s.countries
      .map((id) => countryById(id))
      .filter((c): c is NonNullable<typeof c> => c?.operationalStatus === "active")
      .map((c) => ({ id: c.id, country: c.name, iso: c.iso, bestTime: c.bestTime })),
  }));

  const honeymoon = collection("honeymoon");
  const family = collection("family");
  const luxury = collection("luxury");
  const budget = collection("budget");

  return (
    <div className="pkg-page asia-page eu-page">
      <Navbar />
      <MotionProvider>
        <main>
          {/* Dream */}
          <EuropeHero />

          {/* Explore: one filter bar drives the directory, map and packages below it. */}
          <div className="eu-explore">
            <EuropeFilters />
            <section className="pkg-section asia-destinations" id="explore" aria-labelledby="explore-h">
              <div className="pkg-container">
                <div className="pkg-section__head">
                  <p className="asia-eyebrow">Country directory</p>
                  <h2 id="explore-h" className="pkg-h2">Explore European Countries</h2>
                  <p className="pkg-lede">
                    From Western capitals and the Alps to the Mediterranean, Scandinavia and the Balkans. Turkey and the
                    Caucasus are included as transcontinental destinations often combined with European trips.
                  </p>
                </div>
                <CountryDirectory packageCounts={packageCounts} />
              </div>
            </section>
            <EuropeMap />
            <SwitzerlandCollection />
            <EuropePackages />
          </div>

          {/* Choose */}
          <MultiCountryCircuits />
          <ExperienceSection />
          <TravelStyleGrid />
          {honeymoon && <StyleCollection collection={honeymoon} />}
          {family && <StyleCollection collection={family} />}
          {luxury && <StyleCollection collection={luxury} />}
          {budget && <StyleCollection collection={budget} />}
          <NorthernLightsSection />
          <WinterEuropeSection />

          <section className="pkg-section" id="best-time" aria-labelledby="best-time-h">
            <div className="pkg-container">
              <div className="pkg-section__head">
                <p className="asia-eyebrow">Best time to visit Europe</p>
                <h2 id="best-time-h" className="pkg-h2">Every Season Has Its Europe</h2>
                <p className="pkg-lede">
                  Weather varies by country, altitude and year, so treat these as general guidance. Pick a season to see
                  where it usually shines.
                </p>
              </div>
              <SeasonSelector seasons={seasonViews} />
            </div>
          </section>

          {/* Prepare */}
          <TravelEssentials />
          <EuropeHowItWorks />

          {/* Customize */}
          <section className="pkg-section asia-section--deep asia-builder-section" id="plan-trip" aria-labelledby="plan-trip-h">
            <div className="pkg-container">
              <div className="pkg-section__head">
                <p className="asia-eyebrow asia-eyebrow--light">Custom Europe trip builder</p>
                <h2 id="plan-trip-h" className="pkg-h2 pkg-h2--light">Build Your Europe Journey</h2>
                <p className="pkg-lede pkg-lede--light">
                  Choose countries, dates, pace and the experiences you care about. We&apos;ll shape a route around them.
                </p>
              </div>
              <CustomEuropeBuilder />
            </div>
          </section>

          {/* Enquire */}
          <EuropeWhyKarvaahh />
          <EuropeFaq />
          <RelatedEurope />
          <EuropeCTA />
        </main>
        <EuropeStickyBar />
      </MotionProvider>
      <Footer />
    </div>
  );
}
