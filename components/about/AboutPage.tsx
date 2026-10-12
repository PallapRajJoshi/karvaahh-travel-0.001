import { AboutCommitment } from "./sections/AboutCommitment";
import { AboutDestinations } from "./sections/AboutDestinations";
import { AboutExperiences } from "./sections/AboutExperiences";
import { AboutFinalCta } from "./sections/AboutFinalCta";
import { AboutHero } from "./sections/AboutHero";
import { AboutIntro } from "./sections/AboutIntro";
import { AboutJourney } from "./sections/AboutJourney";
import { AboutPhilosophy } from "./sections/AboutPhilosophy";
import { AboutStory } from "./sections/AboutStory";
import { AboutTeam } from "./sections/AboutTeam";
import { AboutTestimonials } from "./sections/AboutTestimonials";
import { AboutTrust } from "./sections/AboutTrust";
import { AboutValues } from "./sections/AboutValues";
import { AboutWhy } from "./sections/AboutWhy";
import { AboutJsonLd } from "./AboutJsonLd";
import { RevealController } from "./shared/RevealController";
import "./about-base.css";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";

/**
 * Assembly component for /about. Server component; the only client islands are
 * RevealController, DestinationTabs and (when real testimonials exist) TestimonialSlider.
 *
 * The global Navbar/Footer come from the root layout, they are not rendered here.
 * Use a <div> wrapper because the layout normally provides <main>.
 */
export function AboutPage() {
  return (
    <div className="ab-page">
      <Navbar />
      <AboutHero />
      <AboutIntro />
      <AboutStory />
      <AboutPhilosophy />
      <AboutExperiences />
      <AboutWhy />
      <AboutDestinations />
      <AboutJourney />
      <AboutTrust />
      <AboutCommitment />
      <AboutTeam />
      <AboutValues />
      <AboutTestimonials />
      <AboutFinalCta />
      <AboutJsonLd />
      <RevealController />
      <Footer />
    </div>
  );
}
