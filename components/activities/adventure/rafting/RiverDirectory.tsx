import SectionHeading from "@/components/activities/shared/SectionHeading";
import DestinationGrid from "@/components/activities/shared/DestinationGrid";
import DestinationCard from "@/components/activities/shared/DestinationCard";
import { raftingRivers } from "@/data/activities/raftingData";
import { PRICE_VERIFIED } from "@/data/activities/pricing";

export default function RiverDirectory() {
  return (
    <section aria-labelledby="river-directory">
      <SectionHeading
        title="Every Major Commercial Rafting River"
        lead={`Fourteen rivers, from a day off the Kathmandu–Pokhara highway to eleven days of trek-in wilderness. Prices are indicative bands verified ${PRICE_VERIFIED} and subject to confirmation.`}
        id="river-directory"
      />
      <DestinationGrid ariaLabel="Nepal rafting rivers">
        {raftingRivers.map((river) => (
          <div role="listitem" key={river.slug}>
            <DestinationCard
              title={river.name}
              subtitle={river.provinces.join(" · ")}
              badges={[
                { label: `Grade ${river.grade}`, tone: "grade" },
                { label: river.duration, tone: "duration" },
                ...(river.distance
                  ? [{ label: river.distance, tone: "neutral" as const }]
                  : []),
              ]}
              route={river.route}
              description={river.distinctive}
              facts={[
                { label: "Season", value: river.season },
                { label: "Indicative price", value: river.price },
              ]}
              status={river.status}
              cta={{ label: river.ctaLabel, href: "/contact" }}
            />
          </div>
        ))}
      </DestinationGrid>
    </section>
  );
}
