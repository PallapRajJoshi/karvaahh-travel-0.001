import ExplorerFilter from "./ExplorerFilter";
import JyotirlingaGrid from "./JyotirlingaGrid";
import SectionHeading from "./SectionHeading";
import { jyotirlingas, regionOrder, regionalNote } from "./data/jyotirlingaData";
import type { Region } from "./data/types";
import "./JyotirlingaExplorer.css";

const counts = regionOrder.reduce(
  (acc, region) => ({ ...acc, [region]: jyotirlingas.filter((j) => j.region === region).length }),
  { All: jyotirlingas.length } as Record<"All" | Region, number>,
);

export default function JyotirlingaExplorer() {
  return (
    <section id="explore-jyotirlingas" className="jyl-section jyl-explorer" aria-labelledby="jyl-explorer-title">
      <div className="jyl-container">
        <SectionHeading
          id="jyl-explorer-title"
          title="Explore the 12 Jyotirlingas of India"
          lead="Filter by region, then open any temple for its significance, setting and travel notes. Numbers follow the list used on this page and are not a ranking."
        />
        <ExplorerFilter regions={regionOrder} counts={counts}>
          <JyotirlingaGrid />
        </ExplorerFilter>
        <p className="jyl-note jyl-explorer__note">{regionalNote}</p>
      </div>
    </section>
  );
}
