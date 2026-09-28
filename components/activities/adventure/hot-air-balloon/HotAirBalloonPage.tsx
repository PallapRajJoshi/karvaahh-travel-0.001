// Base tokens/utilities first so section CSS can override them.
import "./HotAirBalloonPage.css";
import AerialComparison from "../shared/AerialComparison";
import ActivityGallery from "./ActivityGallery";
import AvailabilityNotice from "./AvailabilityNotice";
import AvailabilitySection from "./AvailabilitySection";
import BestFor from "./BestFor";
import BookingCTA from "./BookingCTA";
import DestinationCards from "./DestinationCards";
import EnquirySection from "./EnquirySection";
import ExperienceHighlights from "./ExperienceHighlights";
import FAQSection from "./FAQSection";
import HeroSection from "./HeroSection";
import HowItWorks from "./HowItWorks";
import JsonLd from "./JsonLd";
import PriceDriver from "./PriceDriver";
import QuickFacts from "./QuickFacts";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function HotAirBalloonPage() {
  return (
    <main className="hab-page">
      <Navbar />
      <JsonLd />
      <HeroSection />
      <AvailabilityNotice />
      <DestinationCards />
      <PriceDriver />
      <ExperienceHighlights />
      <BestFor />
      <AvailabilitySection />
      <HowItWorks />
      <EnquirySection />
      <AerialComparison current="hot-air-balloon" />
      <QuickFacts />
      <ActivityGallery />
      <FAQSection />
      
      <BookingCTA />
      <Footer />
    </main>
  );
}
