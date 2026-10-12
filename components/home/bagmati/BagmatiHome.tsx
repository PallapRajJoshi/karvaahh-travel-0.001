import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BagmatiHero from "./hero/BagmatiHero";
import BagmatiIntro from "./intro/BagmatiIntro";
import BagmatiDiscover from "./discover/BagmatiDiscover";
import BagmatiExperiences from "./experience/BagmatiExperiences";
import BagmatiHeritage from "./heritage/BagmatiHeritage";
import BagmatiPilgrimage from "./pilgrimage/BagmatiPilgrimage";
import BagmatiAdventure from "./adventure/BagmatiAdventure";
import BagmatiWildlife from "./wildlife/BagmatiWildlife";
import BagmatiCulture from "./culture/BagmatiCulture";
import BagmatiPlan, { BagmatiTraditions } from "./plan/BagmatiPlan";
import BagmatiDestinations from "./destination/BagmatiDestinations";
import BagmatiRoutes from "./routes/BagmatiRoutes";
import BagmatiPackages from "./packages/BagmatiPackages";
import BagmatiFaq from "./faq/BagmatiFaq";
import BagmatiCTA from "./CTA/BagmatiCTA";

export default function BagmatiHome() {
  return (
    <>
      <Navbar />
      <main>
        <BagmatiHero />
        <BagmatiIntro />
        <BagmatiDiscover />
        <BagmatiExperiences />
        <BagmatiHeritage />
        <BagmatiPilgrimage />
        <BagmatiAdventure />
        <BagmatiWildlife />
        <BagmatiCulture />
        <BagmatiTraditions />
        <BagmatiDestinations />
        <BagmatiRoutes />
        <BagmatiPlan />
        <BagmatiPackages />
        <BagmatiFaq />
        <BagmatiCTA />
      </main>
      <Footer />
    </>
  );
}
