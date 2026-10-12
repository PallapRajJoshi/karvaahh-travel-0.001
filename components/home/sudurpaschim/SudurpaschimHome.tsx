import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { RevealController } from "@/components/about/shared/RevealController";

import "./sudurpaschim-tokens.css";

import SudurpaschimHero from "./hero/SudurpaschimHero";
import SudurpaschimOverview from "./overview/SudurpaschimOverview";
import SudurpaschimExperiences from "./experience/SudurpaschimExperiences";
import SudurpaschimDestinations from "./destination/SudurpaschimDestinations";
import SudurpaschimAdventure from "./adventure/SudurpaschimAdventure";
import SudurpaschimPilgrimage from "./pilgrimage/SudurpaschimPilgrimage";
import SudurpaschimCulture from "./culture/SudurpaschimCulture";
import SudurpaschimHeritage from "./heritage/SudurpaschimHeritage";
import SudurpaschimWildlife from "./wildlife/SudurpaschimWildlife";
import SudurpaschimJourney from "./journey/SudurpaschimJourney";
import SudurpaschimPlan from "./plan/SudurpaschimPlan";
import SudurpaschimPackages from "./packages/SudurpaschimPackages";
import SudurpaschimFaq from "./faq/SudurpaschimFaq";
import SudurpaschimCTA from "./CTA/SudurpaschimCTA";

export default function SudurpaschimHome() {
  return (
    <main className="sudurpaschim-page">
      <Navbar />
      <SudurpaschimHero />
      <SudurpaschimOverview />
      <SudurpaschimExperiences />
      <SudurpaschimDestinations />
      <SudurpaschimAdventure />
      <SudurpaschimPilgrimage />
      <SudurpaschimCulture />
      <SudurpaschimHeritage />
      <SudurpaschimWildlife />
      <SudurpaschimJourney />
      <SudurpaschimPlan />
      <SudurpaschimPackages />
      <SudurpaschimFaq />
      <SudurpaschimCTA />
      <Footer />
      <RevealController />
    </main>
  );
}
