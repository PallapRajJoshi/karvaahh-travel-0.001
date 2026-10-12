import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import LumbiniHero from "./hero/LumbiniHero";
import LumbiniIntro from "./intro/LumbiniIntro";
import LumbiniHighlights from "./highlights/LumbiniHighlights";
import LumbiniExperiences from "./experience/LumbiniExperiences";
import LumbiniDestinations from "./destination/LumbiniDestinations";
import LumbiniPilgrimage from "./pilgrimage/LumbiniPilgrimage";
import LumbiniHeritage from "./heritage/LumbiniHeritage";
import LumbiniCulture from "./culture/LumbiniCulture";
import LumbiniTraditions from "./traditions/LumbiniTraditions";
import LumbiniAdventure from "./adventure/LumbiniAdventure";
import LumbiniWildlife from "./wildlife/LumbiniWildlife";
import LumbiniJourney from "./journey/LumbiniJourney";
import LumbiniPlan from "./plan/LumbiniPlan";
import LumbiniPackages from "./packages/LumbiniPackages";
import LumbiniFaq from "./faq/LumbiniFaq";
import LumbiniCTA from "./CTA/LumbiniCTA";

/**
 * Lumbini Province landing page.
 * Mirrors the composition pattern used by Koshi / Madhesh / Bagmati / Gandaki
 * province home components — each section is a self-contained, independently
 * styled TSX + CSS module.
 */
export default function LumbiniHome() {
  return (
    <>
      <Navbar />
      <main>
        <LumbiniHero />
        <LumbiniIntro />
        <LumbiniHighlights />
        <LumbiniExperiences />
        <LumbiniPilgrimage />
        <LumbiniHeritage />
        <LumbiniCulture />
        <LumbiniTraditions />
        <LumbiniWildlife />
        <LumbiniAdventure />
        <LumbiniDestinations />
        <LumbiniJourney />
        <LumbiniPlan />
        <LumbiniPackages />
        <LumbiniFaq />
        <LumbiniCTA />
      </main>
      <Footer />
    </>
  );
}
