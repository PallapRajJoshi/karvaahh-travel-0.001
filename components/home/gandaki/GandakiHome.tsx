import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GandakiHero from "./hero/GandakiHero";
import GandakiExperiences from "./experience/GandakiExperiences";
import GandakiDestinations from "./destination/GandakiDestinations";
import GandakiAdventure from "./adventure/GandakiAdventure";
import GandakiPilgrimage from "./pilgrimage/GandakiPilgrimage";
import GandakiCulture from "./culture/GandakiCulture";
import GandakiHeritage from "./heritage/GandakiHeritage";
import GandakiWildlife from "./wildlife/GandakiWildlife";
import GandakiJourney from "./journey/GandakiJourney";
import GandakiCTA from "./CTA/GandakiCTA";

export default function GandakiHome() {
  return (
    <>
      <Navbar />
      <main>
        <GandakiHero />
        <GandakiExperiences />
        <GandakiDestinations />
        <GandakiAdventure />
        <GandakiPilgrimage />
        <GandakiCulture />
        <GandakiHeritage />
        <GandakiWildlife />
        <GandakiJourney />
        <GandakiCTA />
      </main>
      <Footer />
    </>
  );
}
