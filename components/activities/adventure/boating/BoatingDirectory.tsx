"use client";

import { useMemo, useState } from "react";
import SectionHeading from "@/components/activities/shared/SectionHeading";
import ActivityFilters from "@/components/activities/shared/ActivityFilters";
import DestinationGrid from "@/components/activities/shared/DestinationGrid";
import DestinationCard from "@/components/activities/shared/DestinationCard";
import {
  boatingDestinations,
  boatingFilters,
  filterBoating,
  type BoatingFilterId,
} from "@/data/activities/boatingData";
import { PRICE_VERIFIED } from "@/data/activities/pricing";

export default function BoatingDirectory() {
  const [filter, setFilter] = useState<BoatingFilterId>("all");

  const results = useMemo(
    () => filterBoating(boatingDestinations, filter),
    [filter],
  );

  return (
    <section aria-labelledby="boating-directory">
      <SectionHeading
        title="Where to Get on the Water"
        lead={`Fifteen places to take a boat in Nepal — lake hires by the hour, wildlife canoes at dawn, reservoir afternoons and a handful of remote crossings. Prices are indicative local bands verified ${PRICE_VERIFIED} and subject to confirmation.`}
        id="boating-directory"
      />

      <ActivityFilters
        label="Filter boating destinations"
        options={boatingFilters}
        value={filter}
        onChange={setFilter}
        resultCount={results.length}
        resultNoun={results.length === 1 ? "destination" : "destinations"}
      />

      {results.length === 0 ? (
        <p className="boat-empty">
          No destinations match that filter yet. Choose another category.
        </p>
      ) : (
        <DestinationGrid ariaLabel="Boating destinations in Nepal">
          {results.map((destination) => (
            <div role="listitem" key={destination.slug}>
              <DestinationCard
                title={destination.name}
                subtitle={`${destination.province} · ${destination.district}`}
                description={destination.experience}
                highlight={destination.distinctive}
                note={destination.note}
                facts={[{ label: "Indicative price", value: destination.price }]}
                status={destination.status}
                cta={
                  destination.ctaLabel
                    ? { label: destination.ctaLabel, href: "/contact" }
                    : undefined
                }
              />
            </div>
          ))}
        </DestinationGrid>
      )}
    </section>
  );
}
