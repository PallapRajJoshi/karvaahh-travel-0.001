import { sacredDestinations } from "../../data/destinations";
import Reveal from "../../shared/Reveal";
import SectionHeading from "../../shared/SectionHeading";
import DestinationCard from "./DestinationCard";
import "./SacredSites.css";

export default function SacredSites() {
  return (
    <section id="sacred-sites" className="km-section km-section--white" aria-labelledby="km-sites-title">
      <div className="km-container">
        <SectionHeading
          id="km-sites-title"
          eyebrow="Sacred Sites"
          heading="Discover the Sacred Wonders of Kailash"
          intro="Explore the spiritual heart of the Tibetan Himalayas through sacred mountains, pristine lakes, and ancient pilgrimage sites."
        />
        <ul className="km-sites__grid">
          {sacredDestinations.map((d, i) => (
            <Reveal as="li" key={d.id} index={i % 4}>
              <DestinationCard d={d} />
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
