import CampingMotion from "./shared/CampingMotion";
import CampingHero from "./sections/CampingHero";
import CampingIntro from "./sections/CampingIntro";
import CampingCategoryExplorer from "./sections/CampingCategoryExplorer";
import FeaturedCampingGrid from "./sections/FeaturedCampingGrid";
import RegionExplorer from "./sections/RegionExplorer";
import WeekendEscapesSection from "./sections/WeekendEscapesSection";
import LakeCampingSection from "./sections/LakeCampingSection";
import HimalayanCampingSection from "./sections/HimalayanCampingSection";
import VillageCampingSection from "./sections/VillageCampingSection";
import JungleCampingSection from "./sections/JungleCampingSection";
import TrekkingCampingSection from "./sections/TrekkingCampingSection";
import FarWestSection from "./sections/FarWestSection";
import EasternNepalSection from "./sections/EasternNepalSection";
import TravelStyleSection from "./sections/TravelStyleSection";
import DifficultySection from "./sections/DifficultySection";
import SeasonalCampingGuide from "./sections/SeasonalCampingGuide";
import CampingExperienceSection from "./sections/CampingExperienceSection";
import WhyKarvaahh from "./sections/WhyKarvaahh";
import CampingCTA from "./sections/CampingCTA";
import FAQSection from "./sections/FAQSection";
import "./camping.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
const ROOT_ID = "camping-in-nepal";

/**
 * Story order: hero → intro → experiences → featured → regions →
 * Kathmandu → lakes → Himalaya → villages → wildlife → Annapurna …
 * Kanchenjunga → far west → east → styles → difficulty → seasons →
 * a night at camp → why Karvaahh → CTA → FAQ.
 */
export default function CampingPage() {
  return (
   
    <main id={ROOT_ID} className="camping-page">
       <Navbar />
      <CampingMotion rootId={ROOT_ID} />
      <CampingHero />
      <CampingIntro />
      <CampingCategoryExplorer />
      <FeaturedCampingGrid />
      <RegionExplorer />
      <WeekendEscapesSection />
      <LakeCampingSection />
      <HimalayanCampingSection />
      <VillageCampingSection />
      <JungleCampingSection />
      <TrekkingCampingSection ids={["annapurna", "everest", "langtang", "manaslu", "mustang", "makalu", "kanchenjunga"]} />
      <FarWestSection />
      <EasternNepalSection />
      <TravelStyleSection />
      <DifficultySection />
      <SeasonalCampingGuide />
      <CampingExperienceSection />
      <WhyKarvaahh />
      <CampingCTA />
      <FAQSection />

      <Footer />
    </main>
  );
}
