import "./madhesh-tokens.css";

// NOTE: adjust these two import paths to match where Navbar/Footer
// live in your project (they are not part of this deliverable).
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import MadheshHero from "./hero/MadheshHero";
import MadheshExperiences from "./experience/MadheshExperiences";
import MadheshDestinations from "./destination/MadheshDestinations";
import MadheshPilgrimage from "./pilgrimage/MadheshPilgrimage";
import MadheshCulture from "./culture/MadheshCulture";
import MadheshHeritage from "./heritage/MadheshHeritage";
import MadheshWildlife from "./wildlife/MadheshWildlife";
import MadheshJourney from "./journey/MadheshJourney";
import MadheshCTA from "./CTA/MadheshCTA";

export default function MadheshHome() {
  return (
    <div className="madhesh-page">
      <Navbar />

      <MadheshHero />
      <MadheshExperiences />
      <MadheshDestinations />
      <MadheshPilgrimage />
      <MadheshCulture />
      <MadheshHeritage />
      <MadheshWildlife />
      <MadheshJourney />
      <MadheshCTA />

      <Footer />
    </div>
  );
}
