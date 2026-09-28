import HeroSection from '@/components/home/HeroSection';
import FeaturedJourneys from "@/components/featured-journeys/FeaturedJourneys";
import WhyTravelWithKarvaah from '@/components/home/WhyTravelWithKarvaah';
import ExploreNepalIndia from '@/components/home/ExploreNepalIndia';
import TravelExperiences from '@/components/home/TravelExperiences';
import HowWePlanJourney from '@/components/home/HowWePlanJourney';
import GuestTestimonials from '@/components/home/GuestTestimonials';
import RealJourneys from '@/components/home/RealJourneys';
import TravelTipsInspiration from '@/components/home/TravelTipsInspiration';
import PlanYourJourney from '@/components/home/PlanYourJourney';
import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
export default function HomePage() {
  return (
    <>



    <Navbar />
      <HeroSection />
      {/* rest of your homepage sections go here */}



      <FeaturedJourneys />
      <WhyTravelWithKarvaah />
      
      <ExploreNepalIndia />
      <TravelExperiences />
      <HowWePlanJourney />
      <GuestTestimonials />
      <RealJourneys />
      <TravelTipsInspiration />
      <PlanYourJourney />
    <Footer />
    </>
  );
}