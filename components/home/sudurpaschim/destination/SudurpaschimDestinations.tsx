import {
  destinationCategories,
  sudurpaschimDestinations,
} from "@/data/sudurpaschim/destinations";
import SudurpaschimSectionHeading from "../heading/SudurpaschimSectionHeading";
import SudurpaschimDestinationGrid from "./SudurpaschimDestinationGrid";
import "./sudurpaschim-destinations.css";

export default function SudurpaschimDestinations() {
  return (
    <section
      id="sp-destinations"
      className="sp-destinations"
      aria-labelledby="sp-destinations-heading"
    >
      <div className="sp-container sp-destinations__inner">
        <SudurpaschimSectionHeading
          id="sp-destinations-heading"
          index="04"
          eyebrow="Places to Go"
          heading="Explore Sudurpashchim destinations."
          description="Sacred peaks, Ramsar wetlands, grassland parks and temple towns — from the Tharu plains of Kailali to the Himalayan valleys of Darchula."
        />

        <SudurpaschimDestinationGrid
          destinations={sudurpaschimDestinations}
          categories={destinationCategories}
        />
      </div>
    </section>
  );
}
