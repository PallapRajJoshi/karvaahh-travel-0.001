import "./DestinationWeddingsPage.css";
import { CHAPTERS } from "./data/config";
import ChapterRail from "./shared/ChapterRail";
import MobileCta from "./shared/MobileCta";
import MotionController from "./shared/MotionController";

import WeddingHero from "./sections/WeddingHero";
import WeddingIntro from "./sections/WeddingIntro";
import DestinationExplorer from "./sections/DestinationExplorer";
import StyleFinder from "./sections/StyleFinder";
import WeddingJourney from "./sections/WeddingJourney";
import WhyKarvaahh from "./sections/WhyKarvaahh";
import CommandCentre from "./sections/CommandCentre";
import WeddingFunctions from "./sections/WeddingFunctions";
import MandapExperience from "./sections/MandapExperience";
import RitualExperience from "./sections/RitualExperience";
import CelebrationAtelier from "./sections/CelebrationAtelier";
import PhotographyGallery from "./sections/PhotographyGallery";
import CoupleExperience from "./sections/CoupleExperience";
import GuestExperience from "./sections/GuestExperience";
import WeddingConcierge from "./sections/WeddingConcierge";
import ArrivalExperience from "./sections/ArrivalExperience";
import WeddingHoliday from "./sections/WeddingHoliday";
import SampleJourneys from "./sections/SampleJourneys";
import WeddingCollections from "./sections/WeddingCollections";
import InclusionsSafety from "./sections/InclusionsSafety";
import PlanningChecklist from "./sections/PlanningChecklist";
import ProposalForm from "./sections/ProposalForm";
import { FinalCta, WeddingDisclaimer, WeddingFaq } from "./sections/ClosingSections";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";


const ROOT_ID = "dw-root";
const [love, destination, planning, celebration, guests, beyond, proposal] = CHAPTERS.map((c) => c.id);

/**
 * Destination Weddings — told as seven chapters:
 * Love → Destination → Planning → Celebration → Guests → Beyond the Day → Your Proposal.
 * Interactive pieces are small client islands; everything else renders on the server.
 */
export default function DestinationWeddingsPage() {
  return (

    <div id={ROOT_ID} className="dw-page">
    <Navbar />
      <MotionController rootId={ROOT_ID} />
      <ChapterRail />

      <div id={love}>
        <WeddingHero />
        <WeddingIntro />
      </div>

      <div id={destination}>
        <DestinationExplorer />
        <StyleFinder />
      </div>

      <div id={planning}>
        <WeddingJourney />
        <WhyKarvaahh />
        <CommandCentre />
      </div>

      <div id={celebration}>
        <WeddingFunctions />
        <MandapExperience />
        <RitualExperience />
        <CelebrationAtelier />
        <PhotographyGallery />
        <CoupleExperience />
      </div>

      <div id={guests}>
        <GuestExperience />
        <WeddingConcierge />
        <ArrivalExperience />
      </div>

      <div id={beyond}>
        <WeddingHoliday />
        <SampleJourneys />
      </div>

      <div id={proposal}>
        <WeddingCollections />
        <InclusionsSafety />
        <PlanningChecklist />
        <WeddingFaq />
        <FinalCta />
        <ProposalForm />
        <WeddingDisclaimer />
      </div>

      <MobileCta />
      <Footer />
    </div>
  );
}
