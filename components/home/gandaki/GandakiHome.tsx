import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GandakiHero from "./hero/GandakiHero";
import GandakiIntro from "./intro/GandakiIntro";
import GandakiExplore from "./explore/GandakiExplore";
import GandakiExperiences from "./experience/GandakiExperiences";
import GandakiDestinations from "./destination/GandakiDestinations";
import GandakiAdventure from "./adventure/GandakiAdventure";
import GandakiPilgrimage from "./pilgrimage/GandakiPilgrimage";
import GandakiCulture from "./culture/GandakiCulture";
import GandakiHeritage from "./heritage/GandakiHeritage";
import GandakiWildlife from "./wildlife/GandakiWildlife";
import GandakiJourney from "./journey/GandakiJourney";
import GandakiPlan from "./plan/GandakiPlan";
import GandakiPackages from "./packages/GandakiPackages";
import GandakiFaq from "./faq/GandakiFaq";
import GandakiCTA from "./CTA/GandakiCTA";

/**
 * Gandaki Province landing page. Each section is a self-contained TSX + CSS
 * module; only GandakiExplore (destination filters) is a client component.
 */
export default function GandakiHome() {
  return (
    <>
      <Navbar />
      <main>
        <GandakiHero />
        <GandakiIntro />
        <GandakiExplore />
        <GandakiExperiences />
        <GandakiAdventure />
        <GandakiPilgrimage />
        <GandakiCulture />
        <GandakiHeritage />
        <GandakiWildlife />
        <GandakiDestinations />
        <GandakiJourney />
        <GandakiPlan />
        <GandakiPackages />
        <GandakiFaq />
        <GandakiCTA />
      </main>
      <Footer />
    </>
  );
}
