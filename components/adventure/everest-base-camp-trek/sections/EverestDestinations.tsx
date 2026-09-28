import { destinations } from "../data/destinations";
import SectionHeading from "../ui/SectionHeading";
import DestinationCard from "../ui/DestinationCard";
import "../styles/destinations.css";

export default function EverestDestinations() {
  return (
    <section id="destinations" className="ebc-section ebc-section--alt ebc-destinations" aria-labelledby="ebc-destinations-title">
      <div className="ebc-container">
        <SectionHeading
          id="ebc-destinations-title"
          eyebrow="Along the Trail"
          title="Discover the Wonders of the Everest Region"
          subtitle="Explore legendary Himalayan villages, sacred monasteries, breathtaking viewpoints, and extraordinary mountain landscapes."
          align="center"
        />
        <ol className="ebc-destinations__grid">
          {destinations.map((d, i) => (
            <DestinationCard key={d.slug} destination={d} index={i} />
          ))}
        </ol>
      </div>
    </section>
  );
}
