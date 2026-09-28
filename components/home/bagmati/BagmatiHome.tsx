import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BagmatiHero from "./hero/BagmatiHero";
import BagmatiExperiences from "./experience/BagmatiExperiences";
import BagmatiDestinations from "./destination/BagmatiDestinations";
import BagmatiAdventure from "./adventure/BagmatiAdventure";
import BagmatiPilgrimage from "./pilgrimage/BagmatiPilgrimage";
import BagmatiCulture from "./culture/BagmatiCulture";
import BagmatiHeritage from "./heritage/BagmatiHeritage";
import BagmatiWildlife from "./wildlife/BagmatiWildlife";
import BagmatiJourney from "./journey/BagmatiJourney";
import BagmatiCTA from "./CTA/BagmatiCTA";

export default function BagmatiHome() {
  return (
    <>
      <Navbar />
      <main>
        <BagmatiHero />
        <BagmatiExperiences />
        <BagmatiDestinations />
        <BagmatiAdventure />
        <BagmatiPilgrimage />
        <BagmatiCulture />
        <BagmatiHeritage />
        <BagmatiWildlife />
        <BagmatiJourney />
        <BagmatiCTA />
      </main>
      <Footer />
    </>
  );
}
