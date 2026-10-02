import SectionHeading from "../../shared/SectionHeading";
import Reveal from "../../shared/Reveal";
import ImageSlot from "../../shared/ImageSlot";
import { natureHighlights } from "@/data/natureHighlights";
import "./NatureLandscapes.css";

export default function NatureLandscapes() {
  return (
    <section className="saipal-page__section saipal-nature">
      <div className="saipal-page__inner">
        <SectionHeading eyebrow="Landscapes" title="A World of Untamed Himalayan Beauty" align="center" />
        <div className="saipal-nature__gallery">
          {natureHighlights.map((item, index) => (
            <Reveal key={item.id} delay={(index % 3) * 90} className="saipal-nature__tile">
              <ImageSlot alt={item.label} label={item.imageLabel} />
              <span className="saipal-nature__caption">{item.label}</span>
            </Reveal>
          ))}
        </div>
        <p className="saipal-nature__note">
          Only wildlife species verified for this specific region are referenced on this page; sightings are
          never guaranteed.
        </p>
      </div>
    </section>
  );
}
