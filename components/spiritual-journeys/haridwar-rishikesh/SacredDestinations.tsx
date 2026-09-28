import DestinationCard from "./DestinationCard";
import SectionHeading from "./SectionHeading";
import { SECTION } from "./data/config";
import { DESTINATIONS, ROUTE_GROUPS } from "./data/destinations";
import "./sacred-destinations.css";

/**
 * Desktop uses a 6-column grid so rows never end with an orphan card:
 * 3 per row by default, 2 wide cards when a row would hold two, 4 → 2×2.
 */
function cardSpan(index: number, count: number): "third" | "half" | "full" {
  if (count === 1) return "full";
  if (count === 2 || count === 4) return "half";
  const remainder = count % 3;
  if (remainder === 2 && index >= count - 2) return "half";
  if (remainder === 1 && index === count - 1) return "full";
  return "third";
}

export default function SacredDestinations() {
  return (
    <section
      id={SECTION.destinations}
      className="hry-section hry-section--paper hry-dests"
      aria-labelledby="hry-dests-title"
    >
      <div className="hry-container">
        <SectionHeading
          id="hry-dests-title"
          title="Explore the sacred destinations of Haridwar & Rishikesh"
          intro="Discover the sacred ghats, revered temples, spiritual ashrams and peaceful riverfronts that make Haridwar and Rishikesh important places of pilgrimage. Visit times are approximate and depend on crowds and operating conditions."
        />

        {ROUTE_GROUPS.map((group) => {
          const items = DESTINATIONS.filter((d) => d.group === group.id);
          if (!items.length) return null;
          return (
            <div
              key={group.id}
              id={`route-${group.id}`}
              className={`hry-dests__group${group.optional ? " hry-dests__group--optional" : ""}`}
            >
              <header className="hry-dests__group-head">
                <span className="hry-dests__marker" aria-hidden="true" />
                <div>
                  <h3 className="hry-dests__group-title">{group.title}</h3>
                  <p className="hry-dests__group-intro">{group.intro}</p>
                </div>
              </header>
              <div className="hry-dests__grid">
                {items.map((d, i) => (
                  <DestinationCard
                    key={d.id}
                    destination={d}
                    optional={group.optional}
                    span={cardSpan(i, items.length)}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
