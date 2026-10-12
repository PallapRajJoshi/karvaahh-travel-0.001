import "./contact.css";
import { getChannels } from "@/lib/contact/channels";
import { CategoryGrid } from "./CategoryGrid";
import { ContactFaq } from "./ContactFaq";
import { ContactHero } from "./ContactHero";
import { ContactInteractions } from "./ContactInteractions";
import { ContactJsonLd } from "./ContactJsonLd";
import { EnquirySection } from "./EnquirySection";
import { FinalCta } from "./FinalCta";
import { FindUs } from "./FindUs";
import { QuickActions } from "./QuickActions";
import { WhyKarvaahh } from "./WhyKarvaahh";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";

const ROOT_ID = "contact-page";

/**
 * /contact assembly. Header and Footer come from the root layout —
 * deliberately not rendered here. Every section is a server component; the
 * only client code is the form, the click-to-load map and ContactInteractions.
 *
 * To move "What are you planning?" above the form (so visitors can choose a
 * category first), swap <CategoryGrid /> and <EnquirySection /> below.
 */
export function ContactPage() {
  const channels = getChannels();

  return (
    <div id={ROOT_ID} className="contact-page">
      <Navbar/>
      <ContactJsonLd channels={channels} />
      <ContactHero channels={channels} />
      <QuickActions channels={channels} />
      <EnquirySection channels={channels} />
      <WhyKarvaahh />
      <CategoryGrid />
      <FindUs channels={channels} />
      <ContactFaq />
      <FinalCta channels={channels} />
      <ContactInteractions rootId={ROOT_ID} />
      <Footer/>
    </div>
  );
}
