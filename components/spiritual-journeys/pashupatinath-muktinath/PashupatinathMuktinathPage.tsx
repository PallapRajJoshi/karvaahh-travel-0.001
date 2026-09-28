import "./pmy-base.css";
import { chapters, hero, packing, route } from "./data/pashupatinathMuktinathData";
import { AltitudeSection } from "./sections/AltitudeSection";
import { ChapterNav } from "./sections/ChapterNav";
import { FinalCTA } from "./sections/FinalCTA";
import { Introduction } from "./sections/Introduction";
import { JourneyFacts } from "./sections/JourneyFacts";
import { JourneyFAQ } from "./sections/JourneyFAQ";
import { JourneyFlow } from "./sections/JourneyFlow";
import { JourneyGallery } from "./sections/JourneyGallery";
import { JourneyRoute } from "./sections/JourneyRoute";
import { JwalaMaiSection } from "./sections/JwalaMaiSection";
import { KaliGandakiSection } from "./sections/KaliGandakiSection";
import { KarvaahhCTA } from "./sections/KarvaahhCTA";
import { MuktinathSection } from "./sections/MuktinathSection";
import { PackingChecklist } from "./sections/PackingChecklist";
import { PashupatinathMuktinathHero } from "./sections/PashupatinathMuktinathHero";
import { PashupatinathSection } from "./sections/PashupatinathSection";
import { SacredDestinations } from "./sections/SacredDestinations";
import { SafetySection } from "./sections/SafetySection";
import { SpiritualConnection } from "./sections/SpiritualConnection";
import { SpiritualExtensions } from "./sections/SpiritualExtensions";
import { StaySection } from "./sections/StaySection";
import { TempleEtiquette } from "./sections/TempleEtiquette";
import { TraditionsSection } from "./sections/TraditionsSection";
import { TransportOptions } from "./sections/TransportOptions";
import { TravellerTypes } from "./sections/TravellerTypes";
import { WeatherSection } from "./sections/WeatherSection";
import { WaterSpoutsSection } from "./sections/WaterSpoutsSection";
import { RevealObserver } from "./ui/RevealObserver";
import "./sections/chapter-nav.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const ROOT_ID = "pmy-root";

/**
 * Server component. Only ChapterNav, JourneyRoute, PackingChecklist and
 * RevealObserver ship JavaScript; everything else is static HTML + CSS.
 * Navbar/Footer come from the root layout.
 */
export function PashupatinathMuktinathPage() {
  return (
    <div id={ROOT_ID} className="pmy">
      <Navbar/>
      <RevealObserver rootId={ROOT_ID} />

      <PashupatinathMuktinathHero />
      <ChapterNav chapters={chapters} cta={hero.primaryCta} />

      {/* Chapter 1 — Kathmandu: warm stone and ivory */}
      <div className="pmy-chapter--kathmandu">
        <JourneyFacts />
        <Introduction />
        <SacredDestinations />
        <SpiritualConnection />
        <PashupatinathSection />
      </div>

      <div className="pmy-chapter-seam" aria-hidden="true" />

      {/* Chapter 2 — Mustang: snow, glacier blue, turquoise */}
      <div className="pmy-chapter--mustang">
        <MuktinathSection />
        <WaterSpoutsSection />
        <JwalaMaiSection />
        <TraditionsSection />
      </div>

      {/* Chapter 3 — The journey between them */}
      <JourneyRoute
        heading={route.heading}
        intro={route.intro}
        caption={route.caption}
        stops={route.stops}
        segments={route.segments}
      />
      <KaliGandakiSection />
      <TransportOptions />
      <JourneyFlow />

      {/* Chapter 4 — Practical preparation */}
      <div className="pmy-chapter--practical">
        <AltitudeSection />
        <WeatherSection />
        <TravellerTypes />
        <PackingChecklist heading={packing.heading} intro={packing.intro} groups={packing.groups} />
        <TempleEtiquette />
        <SafetySection />
      </div>

      <StaySection />
      <SpiritualExtensions />
      <KarvaahhCTA />
      <JourneyGallery />
      <JourneyFAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}
