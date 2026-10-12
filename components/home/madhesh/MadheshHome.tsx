import "./madhesh-tokens.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import MadheshHero from "./hero/MadheshHero";
import MadheshIntro from "./intro/MadheshIntro";
import MadheshHighlights from "./highlights/MadheshHighlights";
import MadheshExperiences from "./experience/MadheshExperiences";
import MadheshPilgrimage from "./pilgrimage/MadheshPilgrimage";
import MadheshCulture from "./culture/MadheshCulture";
import MadheshTraditions from "./traditions/MadheshTraditions";
import MadheshHeritage from "./heritage/MadheshHeritage";
import MadheshWildlife from "./wildlife/MadheshWildlife";
import MadheshAdventure from "./adventure/MadheshAdventure";
import MadheshDestinations from "./destination/MadheshDestinations";
import MadheshJourney from "./journey/MadheshJourney";
import MadheshPlan from "./plan/MadheshPlan";
import MadheshPackages from "./packages/MadheshPackages";
import MadheshFaq from "./faq/MadheshFaq";
import MadheshCTA from "./CTA/MadheshCTA";

export default function MadheshHome() {
  return (
    <div className="madhesh-page">
      <Navbar />

      <main>
        <MadheshHero />
        <MadheshIntro />
        <MadheshHighlights />
        <MadheshExperiences />
        <MadheshPilgrimage />
        <MadheshCulture />
        <MadheshTraditions />
        <MadheshHeritage />
        <MadheshWildlife />
        <MadheshAdventure />
        <MadheshDestinations />
        <MadheshJourney />
        <MadheshPlan />
        <MadheshPackages />
        <MadheshFaq />
        <MadheshCTA />
      </main>

      <Footer />
    </div>
  );
}
