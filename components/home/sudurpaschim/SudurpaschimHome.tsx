import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import "./sudurpaschim-tokens.css";

import SudurpaschimHero from "./hero/SudurpaschimHero";
import SudurpaschimExperiences from "./experience/SudurpaschimExperiences";
import SudurpaschimDestinations from "./destination/SudurpaschimDestinations";
import SudurpaschimAdventure from "./adventure/SudurpaschimAdventure";
import SudurpaschimPilgrimage from "./pilgrimage/SudurpaschimPilgrimage";
import SudurpaschimCulture from "./culture/SudurpaschimCulture";
import SudurpaschimHeritage from "./heritage/SudurpaschimHeritage";
import SudurpaschimWildlife from "./wildlife/SudurpaschimWildlife";
import SudurpaschimJourney from "./journey/SudurpaschimJourney";
import SudurpaschimCTA from "./CTA/SudurpaschimCTA";

export default function SudurpaschimHome() {
  return (
    <main className="sudurpaschim-page">
      <Navbar />
      <SudurpaschimHero />
      <SudurpaschimExperiences />
      <SudurpaschimDestinations />
      <SudurpaschimAdventure />
      <SudurpaschimPilgrimage />
      <SudurpaschimCulture />
      <SudurpaschimHeritage />
      <SudurpaschimWildlife />
      <SudurpaschimJourney />
      <SudurpaschimCTA />
      <Footer />
    </main>
  );
}
