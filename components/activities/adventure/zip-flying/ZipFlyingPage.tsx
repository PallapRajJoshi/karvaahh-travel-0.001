import "./zip-flying.css";
import HeroSection from "./HeroSection";
import NumbersSection from "./NumbersSection";
import FeaturedZipFlyer from "./FeaturedZipFlyer";
import RideTogether from "./RideTogether";
import DestinationCards from "./DestinationCards";
import ZiplineComparison from "./ZiplineComparison";
import WhySection from "./WhySection";
import PriceSection from "./PriceSection";
import HowItWorks from "./HowItWorks";
import GroupExperience from "./GroupExperience";
import KushmaCrossSell from "./KushmaCrossSell";
import PokharaCrossSell from "./PokharaCrossSell";
import QuickFacts from "./QuickFacts";
import ActivityGallery from "./ActivityGallery";
import EnquirySection from "./EnquirySection";
import FAQSection from "./FAQSection";
import StickyEnquiryCta from "./StickyEnquiryCta";
import { brandFooter, comparisonRows } from "./data/zipFlyingData";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function ZipFlyingPage() {
  return (
    <main className="zf-page">
      <Navbar/>
      <HeroSection />
      <NumbersSection />
      <FeaturedZipFlyer />
      <RideTogether />
      <DestinationCards />
      <ZiplineComparison
        id="compare"
        heading="Compare Zipline Experiences"
        caption="Zipline experiences in Nepal, listed without ranking. Prices are indicative."
        rows={comparisonRows}
        highlightId="zipflyer-nepal"
      />
      <WhySection />
      <PriceSection />
      <HowItWorks />
      <GroupExperience />
      <KushmaCrossSell />
      <PokharaCrossSell />
      <QuickFacts />
      <ActivityGallery />
      <EnquirySection />
      <FAQSection />

      <footer className="zf-brand">
        <p>{brandFooter.line1}</p>
        <p>{brandFooter.line2}</p>
      </footer>
<Footer />
      {/* Mobile-only sticky enquiry link */}
      <StickyEnquiryCta />
    </main>
  );
}
