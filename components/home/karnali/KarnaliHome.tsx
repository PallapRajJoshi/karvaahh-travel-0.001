import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import KarnaliMotion from "./KarnaliMotion";
import KarnaliHero from "./hero/KarnaliHero";
import KarnaliOverview from "./overview/KarnaliOverview";
import KarnaliDestinations from "./destination/KarnaliDestinations";
import KarnaliExperiences from "./experience/KarnaliExperiences";
import KarnaliPilgrimage from "./pilgrimage/KarnaliPilgrimage";
import KarnaliAdventure from "./adventure/KarnaliAdventure";
import KarnaliHeritage from "./heritage/KarnaliHeritage";
import KarnaliCulture from "./culture/KarnaliCulture";
import KarnaliWildlife from "./wildlife/KarnaliWildlife";
import KarnaliPlanning from "./planning/KarnaliPlanning";
import KarnaliJourney from "./journey/KarnaliJourney";
import KarnaliTravelTips from "./tips/KarnaliTravelTips";
import KarnaliFAQ from "./faq/KarnaliFAQ";
import KarnaliPackages from "./packages/KarnaliPackages";
import KarnaliCTA from "./CTA/KarnaliCTA";
import "@/components/shared/reveal.css";
import "@/components/shared/safe-image.css";

export default function KarnaliHome() {
  return (
    <>
      <Navbar />
      <KarnaliMotion>
        <main>
          <KarnaliHero />
          <KarnaliOverview />
          <KarnaliDestinations />
          <KarnaliExperiences />
          {/* Lakes (05) + Pilgrimage (06) */}
          <KarnaliPilgrimage />
          <KarnaliAdventure />
          <KarnaliHeritage />
          <KarnaliCulture />
          <KarnaliWildlife />
          <KarnaliPlanning />
          <KarnaliJourney />
          <KarnaliTravelTips />
          <KarnaliFAQ />
          <KarnaliPackages />
          <KarnaliCTA />
        </main>
      </KarnaliMotion>
      <Footer />
    </>
  );
}
