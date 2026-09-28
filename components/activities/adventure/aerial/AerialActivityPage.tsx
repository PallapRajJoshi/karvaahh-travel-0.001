import type { AerialActivityData } from "./types";
import AerialJsonLd from "./AerialJsonLd";
import AerialHero from "./AerialHero";
import AerialIntro from "./AerialIntro";
import FlightOptions from "./FlightOptions";
import PriceDriver from "./PriceDriver";
import SeasonTimeline from "./SeasonTimeline";
import SightsGrid from "./SightsGrid";
import AudienceFit from "./AudienceFit";
import AerialComparison from "./AerialComparison";
import QuickFacts from "./QuickFacts";
import AerialGallery from "./AerialGallery";
import EnquiryCta from "./EnquiryCta";
import AerialFaq from "./AerialFaq";
import "./aerial-page.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

interface Props {
  data: AerialActivityData;
  /** Use "div" if the root layout already wraps pages in <main>. */
  as?: "main" | "div";
}

/**
 * Template for all four aerial activity pages. A new page = one data file
 * + a 10-line route file. Section order follows the brief.
 */
export default function AerialActivityPage({ data, as: Wrapper = "main" }: Props) {
  return (
    <Wrapper className="aerial-page" id={Wrapper === "main" ? "main-content" : undefined}>
      <Navbar />
      <AerialJsonLd data={data} />
      <AerialHero hero={data.hero} breadcrumbs={data.breadcrumbs} />
      <AerialIntro intro={data.intro} />
      <FlightOptions content={data.options} slug={data.slug} />
      <PriceDriver content={data.priceDriver} options={data.options.options} />
      <SeasonTimeline season={data.season} />
      <SightsGrid content={data.sights} />
      <AudienceFit content={data.audience} />
      <AerialComparison current={data.comparisonKey} />
      <QuickFacts heading={data.facts.heading} items={data.facts.items} />
      <AerialGallery heading={data.gallery.heading} images={data.gallery.images} />
      <EnquiryCta content={data.enquiry} slug={data.slug} />
      <AerialFaq heading={data.faq.heading} items={data.faq.items} />
      <Footer />
    </Wrapper>
  );
}
