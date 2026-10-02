import { attractions } from "@/data/dhorpatan";
import SectionHeading from "@/components/shared/SectionHeading";
import AttractionCard from "@/components/shared/AttractionCard";
import Reveal from "@/components/shared/Reveal";
import "./TopAttractions.css";

export default function TopAttractions() {
  return (
    <section className="top-attractions" id="attractions">
      <div className="dhorpatan-page__container">
        <SectionHeading
          eyebrow="Explore"
          heading="Top Attractions Around Dhorpatan"
          subheading="From the reserve's high meadows to the traditional villages nearby — each place calls for its own journey."
        />

        <div className="top-attractions__grid">
          {attractions.map((attraction, i) => (
            <Reveal key={attraction.slug} delay={(i % 3) * 90}>
              <AttractionCard attraction={attraction} />
            </Reveal>
          ))}
        </div>

        <p className="top-attractions__note">
          Attractions within the reserve and nearby villages are marked separately above, as some
          require a distinct onward journey.
        </p>
      </div>
    </section>
  );
}
