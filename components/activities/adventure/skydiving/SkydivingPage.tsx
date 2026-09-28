import AerialComparison from "@/components/activities/shared/AerialComparison/AerialComparison";
import ActivityGallery from "./ActivityGallery";
import AltitudeSection from "./AltitudeSection";
import AvailabilityNotice from "./AvailabilityNotice";
import DateNotificationForm from "./DateNotificationForm";
import ExpeditionFeatures from "./ExpeditionFeatures";
import ExpeditionTimeline from "./ExpeditionTimeline";
import FAQSection from "./FAQSection";
import FeaturedExpedition from "./FeaturedExpedition";
import FlexibilitySection from "./FlexibilitySection";
import HeroSection from "./HeroSection";
import HowItWorks from "./HowItWorks";
import MobileNotifyBar from "./MobileNotifyBar";
import PriceDriver from "./PriceDriver";
import PriceTable from "./PriceTable";
import QuickFacts from "./QuickFacts";
import SkydivingComparison from "./SkydivingComparison";
import SkydivingSiteCards from "./SkydivingSiteCards";
import UpcomingDates from "./UpcomingDates";
import WhoIsItFor from "./WhoIsItFor";
import { aerialComparison, brandFooter } from "./data/skydivingData";
import "./skydiving.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function SkydivingPage() {
  return (
    <div className="sky-page">
      <Navbar />
      <HeroSection />
      <AvailabilityNotice />
      <FeaturedExpedition />
      <ExpeditionFeatures />
      <SkydivingSiteCards />
      <SkydivingComparison />
      <ExpeditionTimeline />
      <FlexibilitySection />
      <AltitudeSection />
      <PriceDriver />
      <PriceTable />
      <WhoIsItFor />
      <UpcomingDates />
      <DateNotificationForm />
      <HowItWorks />
      <ActivityGallery />
      <AerialComparison {...aerialComparison} />
      <QuickFacts />
      <FAQSection />

      <Footer/>

      <MobileNotifyBar />
    </div>
  );
}
