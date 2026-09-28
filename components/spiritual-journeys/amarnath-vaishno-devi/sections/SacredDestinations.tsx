import { DESTINATIONS, OPTIONAL_EXTENSIONS } from "../data/destinations";
import { SectionHeading } from "../SectionHeading";
import { DestinationCard } from "./DestinationCard";
import "./SacredDestinations.css";

/** "Explore" CTAs point to real in-page sections — no dead links to detail pages that don't exist yet. */
const CTAS: Record<string, { href: string; label: string }> = {
  "amarnath-cave": { href: "#amarnath-routes", label: "Explore the Amarnath routes" },
  "vaishno-devi": { href: "#vaishno-devi-journey", label: "Explore the Vaishno Devi journey" },
  pahalgam: { href: "#amarnath-routes", label: "Compare the Pahalgam route" },
  baltal: { href: "#amarnath-routes", label: "Compare the Baltal route" },
  katra: { href: "#vaishno-registration", label: "Registration at Katra" },
  srinagar: { href: "#itinerary", label: "See it in the itinerary" },
};

const byId = (id: string) => DESTINATIONS.find((d) => d.id === id)!;

export function SacredDestinations() {
  const shrines = [byId("amarnath-cave"), byId("vaishno-devi")];
  const bases = [byId("pahalgam"), byId("baltal"), byId("katra")];
  const srinagar = byId("srinagar");

  return (
    <section
      id="explore-sacred-destinations"
      className="avd-section avd-section--paper avd-dests"
      aria-labelledby="avd-dests-title"
    >
      <div className="avd-wrap">
        <SectionHeading
          id="avd-dests-title"
          title="Explore the sacred destinations"
          lede="Two shrines, the base towns that serve them, and the Kashmir valleys many pilgrims add afterwards."
        />

        <h3 className="avd-dests__group">The two shrines</h3>
        <div className="avd-dests__shrines">
          {shrines.map((d) => (
            <DestinationCard
              key={d.id}
              destination={d}
              variant="feature"
              cta={CTAS[d.id]}
              sizes="(min-width: 960px) 36rem, 100vw"
            />
          ))}
        </div>

        <h3 className="avd-dests__group">Pilgrimage bases</h3>
        <div className="avd-dests__bases">
          {bases.map((d) => (
            <DestinationCard
              key={d.id}
              destination={d}
              variant="base"
              cta={CTAS[d.id]}
              sizes="(min-width: 960px) 23rem, (min-width: 640px) 50vw, 100vw"
            />
          ))}
        </div>

        <h3 className="avd-dests__group">Optional Kashmir extensions</h3>
        <p className="avd-dests__groupnote">Not included in every package — added on request, depending on your days.</p>
        <div className="avd-dests__extensions">
          <DestinationCard
            destination={srinagar}
            variant="base"
            cta={CTAS.srinagar}
            sizes="(min-width: 960px) 36rem, 100vw"
          />
          <div className="avd-dests__compact">
            {OPTIONAL_EXTENSIONS.map((d) => (
              <DestinationCard key={d.id} destination={d} variant="compact" sizes="(min-width: 640px) 12rem, 40vw" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
