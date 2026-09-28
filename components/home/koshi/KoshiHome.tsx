import KoshiHero from "./hero/KoshiHero";
import KoshiExperiences from "./experience/KoshiExperiences";
import KoshiDestinations from "./destination/KoshiDestinations";
import KoshiHimalayanAdventure from "./adventure/KoshiHimalayanAdventure";
import KoshiCulture from "./culture/KoshiCulture";
import KoshiTeaHills from "./hills/KoshiTeaHills";
import KoshiWildlife from "./wildlife/KoshiWildlife";
import KoshiJourney from "./journey/KoshiJourney";
import KoshiCTA from "./CTA/KoshiCTA";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import KoshiSectionDivider from "./KoshiSectionDivider";
import "./koshi-home.css";

export default function KoshiHome() {
  return (
    <main className="koshi-home">

      {/* Navigation */}
      <Navbar />

      {/* Hero */}
      <KoshiHero />

      {/* Experiences */}
      <KoshiExperiences />

      {/* Destinations */}
      <KoshiDestinations />

      {/* Himalayan Adventure */}
      <KoshiHimalayanAdventure />
      <KoshiSectionDivider />
      {/* Culture & Heritage */}
      <KoshiCulture />
      <KoshiSectionDivider label="Tea Hills & Slow Travel" />
      {/* Tea Hills & Slow Travel */}
      <KoshiTeaHills />
 <KoshiSectionDivider label="WILDLIFE & NATURE" />
      {/* Wildlife & Nature */}
      <KoshiWildlife />

      {/* Travel Journey */}
      <KoshiJourney />

      {/* Call To Action */}
      <KoshiCTA />

      {/* Footer */}
      <Footer />

    </main>
  );
}