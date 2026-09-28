import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import LumbiniHero from "./hero/LumbiniHero";
import LumbiniExperiences from "./experience/LumbiniExperiences";
import LumbiniDestinations from "./destination/LumbiniDestinations";
import LumbiniPilgrimage from "./pilgrimage/LumbiniPilgrimage";
import LumbiniHeritage from "./heritage/LumbiniHeritage";
import LumbiniCulture from "./culture/LumbiniCulture";
import LumbiniAdventure from "./adventure/LumbiniAdventure";
import LumbiniWildlife from "./wildlife/LumbiniWildlife";
import LumbiniJourney from "./journey/LumbiniJourney";
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
        <LumbiniExperiences />
        <LumbiniDestinations />
        <LumbiniPilgrimage />
        <LumbiniHeritage />
        <LumbiniCulture />
        <LumbiniAdventure />
        <LumbiniWildlife />
        <LumbiniJourney />
        <LumbiniCTA />
      </main>
      <Footer />
    </>
  );
}
