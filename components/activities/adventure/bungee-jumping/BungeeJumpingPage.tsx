import "./bungee-jumping.css";
import Reveal from "./Reveal";
import HeroSection from "./sections/HeroSection";
import FeaturedDestination from "./sections/FeaturedDestination";
import BungeeSiteCards from "./sections/BungeeSiteCards";
import SiteComparison from "./sections/SiteComparison";
import AdventureProducts from "./sections/AdventureProducts";
import PokharaOptions from "./sections/PokharaOptions";
import LastResortFeature from "./sections/LastResortFeature";
import CanyonSwing from "./sections/CanyonSwing";
import ComboProducts from "./sections/ComboProducts";
import PriceDriver from "./sections/PriceDriver";
import TransportSection from "./sections/TransportSection";
import WhoIsThisFor from "./sections/WhoIsThisFor";
import QuickFacts from "./sections/QuickFacts";
import ActivityGallery from "./sections/ActivityGallery";
import HowItWorks from "./sections/HowItWorks";
import EnquiryForm from "./sections/EnquiryForm";
import FAQSection from "./sections/FAQSection";
import BrandFooter from "./sections/BrandFooter";
import MobileEnquiryBar from "./sections/MobileEnquiryBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

/*
 * Section 17 (aerial/adventure comparison): if the reusable comparison from
 * /activities/adventure/ultra-light-flight is exported, import it and render it
 * between <HowItWorks /> and <EnquiryForm /> — see README.
 */

export default function BungeeJumpingPage() {
  return (
    <main className="bungee-page">
      <Navbar />
      <HeroSection />
      <FeaturedDestination />
      <BungeeSiteCards />
      <SiteComparison />
      <AdventureProducts />
      <TransportSection />
      <PokharaOptions />
      <LastResortFeature />
      <CanyonSwing />
      <ComboProducts />
      <PriceDriver />
      <WhoIsThisFor />
      <QuickFacts />
      <ActivityGallery />
      <HowItWorks />
      <EnquiryForm />
      <FAQSection />
      <BrandFooter />
      <MobileEnquiryBar />
      <Reveal />
      <Footer />
    </main>
  );
}
