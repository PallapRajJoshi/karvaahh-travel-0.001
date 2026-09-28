// Base tokens first so component stylesheets (imported below) can override them.
import "./bada-char-dham.css";
import { badaCharDhamData as d } from "./data/badaCharDhamData";
import BadaCharDhamHero from "./BadaCharDhamHero";
import FourDirections from "./FourDirections";
import CharDhamIntroduction from "./CharDhamIntroduction";
import DhamSection from "./DhamSection";
import DhamComparison from "./DhamComparison";
import SpiritualConnection from "./SpiritualConnection";
import PanIndiaJourney from "./PanIndiaJourney";
import JourneyExperience from "./JourneyExperience";
import JourneyRoute from "./JourneyRoute";
import TransportOptions from "./TransportOptions";
import JourneyTimeline from "./JourneyTimeline";
import TempleExperience from "./TempleExperience";
import TempleEtiquette from "./TempleEtiquette";
import BestTimeSection from "./BestTimeSection";
import FestivalSection from "./FestivalSection";
import PackageSection from "./PackageSection";
import AccommodationSection from "./AccommodationSection";
import TravelWellbeing from "./TravelWellbeing";
import PackingChecklist from "./PackingChecklist";
import ResponsibleTravel from "./ResponsibleTravel";
import Gallery from "./Gallery";
import FAQ from "./FAQ";
import WhyKarvaahh from "./WhyKarvaahh";
import KarvaahhCTA from "./KarvaahhCTA";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

/**
 * /spiritual-journeys/bada-char-dham-yatra — page assembly.
 * Server component; only PanIndiaJourney, PackingChecklist and the small
 * RevealOnView wrapper hydrate on the client.
 * Header/Footer come from the root layout and are not rendered here.
 */
export default function BadaCharDhamPage() {
  return (
    <div className="bcd-page">
      <Navbar/>
      {/* 1 · Orientation */}
      <BadaCharDhamHero />
      <FourDirections />
      <CharDhamIntroduction />

      {/* 2 · The four Dhams */}
      <div id="four-dhams">
        {d.dhams.map((dham, i) => (
          <DhamSection key={dham.id} dham={dham} index={i} />
        ))}
      </div>
      <DhamComparison />
      <SpiritualConnection />

      {/* 3 · The journey */}
      <PanIndiaJourney
        heading={d.journey.panIndia.heading}
        intro={d.journey.panIndia.intro}
        routeLabel={d.journey.panIndia.routeLabel}
        points={d.directions}
      />
      <JourneyExperience />
      <JourneyRoute />
      <TransportOptions />
      <JourneyTimeline />

      {/* 4 · At the temples */}
      <TempleExperience />
      <TempleEtiquette />
      <BestTimeSection />
      <FestivalSection />

      {/* 5 · Package */}
      <PackageSection />

      {/* 6 · Practical planning */}
      <AccommodationSection />
      <TravelWellbeing />
      <PackingChecklist heading={d.packing.heading} intro={d.packing.intro} groups={d.packing.groups} />
      <ResponsibleTravel />

      {/* 7 · Close */}
      <Gallery />
      <FAQ faqs={d.faqs} heading="Bada Char Dham Yatra FAQs" />
      <WhyKarvaahh />
      <KarvaahhCTA />
      <Footer/>
    </div>
  );
}
