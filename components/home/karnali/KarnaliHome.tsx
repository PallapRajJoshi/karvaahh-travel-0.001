import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import KarnaliHero from "./hero/KarnaliHero";
import KarnaliExperiences from "./experience/KarnaliExperiences";
import KarnaliDestinations from "./destination/KarnaliDestinations";
import KarnaliAdventure from "./adventure/KarnaliAdventure";
import KarnaliPilgrimage from "./pilgrimage/KarnaliPilgrimage";
import KarnaliCulture from "./culture/KarnaliCulture";
import KarnaliHeritage from "./heritage/KarnaliHeritage";
import KarnaliWildlife from "./wildlife/KarnaliWildlife";
import KarnaliJourney from "./journey/KarnaliJourney";
import KarnaliCTA from "./CTA/KarnaliCTA";

export default function KarnaliHome() {
  return (
    <>
      <Navbar />
      <main>
        <KarnaliHero />
        <KarnaliExperiences />
        <KarnaliDestinations />
        <KarnaliAdventure />
        <KarnaliPilgrimage />
        <KarnaliCulture />
        <KarnaliHeritage />
        <KarnaliWildlife />
        <KarnaliJourney />
        <KarnaliCTA />
      </main>
      <Footer />
    </>
  );
}
