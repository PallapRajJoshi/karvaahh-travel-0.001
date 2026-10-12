import KoshiHero from "./hero/KoshiHero";
import KoshiIntro from "./guide/KoshiIntro";
import KoshiExperiences from "./experience/KoshiExperiences";
import KoshiDestinations from "./destination/KoshiDestinations";
import KoshiHimalayanAdventure from "./adventure/KoshiHimalayanAdventure";
import KoshiCulture from "./culture/KoshiCulture";
import KoshiFlavours from "./guide/KoshiFlavours";
import KoshiTeaHills from "./hills/KoshiTeaHills";
import KoshiLandscapes from "./guide/KoshiLandscapes";
import KoshiWildlife from "./wildlife/KoshiWildlife";
import KoshiJourney from "./journey/KoshiJourney";
import KoshiCircuits from "./guide/KoshiCircuits";
import KoshiPlan from "./guide/KoshiPlan";
import KoshiPackages from "./guide/KoshiPackages";
import KoshiFaq from "./guide/KoshiFaq";
import KoshiCTA from "./CTA/KoshiCTA";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import KoshiSectionDivider from "./KoshiSectionDivider";
import "./koshi-home.css";

export default function KoshiHome() {
  return (
    <>
      {/* Navigation */}
      <Navbar />

      <main className="koshi-home">

        {/* Hero */}
        <KoshiHero />

        {/* Province overview & why visit */}
        <KoshiIntro />

        {/* Experiences */}
        <KoshiExperiences />

        {/* Destinations (filterable) */}
        <KoshiDestinations />

        {/* Himalayan Adventure */}
        <KoshiHimalayanAdventure />
        <KoshiSectionDivider />
        {/* Culture & Heritage */}
        <KoshiCulture />

        {/* Communities, festivals, cuisine & products */}
        <KoshiFlavours />
        <KoshiSectionDivider label="Tea Hills & Slow Travel" />
        {/* Tea Hills & Slow Travel */}
        <KoshiTeaHills />

        {/* Lakes, waterfalls & viewpoints */}
        <KoshiLandscapes />
        <KoshiSectionDivider label="WILDLIFE & NATURE" />
        {/* Wildlife & Nature */}
        <KoshiWildlife />

        {/* Travel Journey */}
        <KoshiJourney />

        {/* Suggested circuits */}
        <KoshiCircuits />

        {/* Best time, how to reach, altitude & responsible travel */}
        <KoshiPlan />

        {/* Existing tour packages */}
        <KoshiPackages />

        {/* FAQ */}
        <KoshiFaq />

        {/* Call To Action */}
        <KoshiCTA />

      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
