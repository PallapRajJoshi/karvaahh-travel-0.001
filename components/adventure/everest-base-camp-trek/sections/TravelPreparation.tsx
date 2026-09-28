import { safetyNote, travelInformation, travelInfoReviewed } from "../data/travel-information";
import { ebcSite } from "../config/site";
import SectionHeading from "../ui/SectionHeading";
import Accordion from "../ui/Accordion";
import CtaButton from "../ui/CtaButton";
import Icon from "../ui/Icon";
import "../styles/preparation.css";

export default function TravelPreparation() {
  return (
    <section id="preparation" className="ebc-section ebc-prep" aria-labelledby="ebc-prep-title">
      <div className="ebc-container ebc-prep__grid">
        <div className="ebc-prep__aside">
          <SectionHeading
            id="ebc-prep-title"
            eyebrow="Travel Preparation"
            title="Prepare for Your Everest Base Camp Trek"
            subtitle="Everything you need to know before you go — from permits and flights to packing and acclimatisation."
          />
          <aside className="ebc-prep__safety" role="note" aria-labelledby="ebc-safety-title" data-reveal="">
            <div className="ebc-prep__safety-head">
              <Icon name="alert" />
              <h3 id="ebc-safety-title">{safetyNote.title}</h3>
            </div>
            <p>{safetyNote.body}</p>
          </aside>
          <p className="ebc-prep__reviewed" data-reveal="">
            Permit and travel rules last reviewed: {travelInfoReviewed}. Rules change — we confirm current requirements when you book.
          </p>
          <div data-reveal="">
            <CtaButton href={ebcSite.links.contact} label="Ask Our Trek Team" variant="dark" />
          </div>
        </div>
        <div className="ebc-prep__main">
          <Accordion items={travelInformation} defaultOpen={[travelInformation[0].id]} numbered />
        </div>
      </div>
    </section>
  );
}
