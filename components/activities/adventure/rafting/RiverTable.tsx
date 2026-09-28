"use client";

import { useMemo, useState } from "react";
import SectionHeading from "@/components/activities/shared/SectionHeading";
import ActivityFilters from "@/components/activities/shared/ActivityFilters";
import ComparisonTable, {
  type TableColumn,
} from "@/components/activities/shared/ComparisonTable";
import {
  filterRivers,
  raftingFilters,
  raftingRivers,
  type RaftingFilterId,
} from "@/data/activities/raftingData";
import { PRICE_NOTE } from "@/data/activities/pricing";

const columns: TableColumn[] = [
  { key: "river", label: "River" },
  { key: "grade", label: "Grade", width: "narrow" },
  { key: "days", label: "Days", width: "narrow" },
  { key: "route", label: "Put-in → Take-out" },
  { key: "distinctive", label: "Distinctive", width: "wide" },
  { key: "season", label: "Season", width: "narrow" },
  { key: "price", label: "Price", width: "narrow" },
];

export default function RiverTable() {
  const [filter, setFilter] = useState<RaftingFilterId>("all");

  const rows = useMemo(
    () =>
      filterRivers(raftingRivers, filter).map((river) => ({
        id: river.slug,
        cells: {
          river: river.name,
          grade: river.grade,
          days: river.duration,
          route: river.route,
          distinctive: river.distinctive,
          season: river.season,
          price: river.price,
        },
      })),
    [filter],
  );

  return (
    <section aria-labelledby="river-guide">
      <SectionHeading
        title="Nepal Rafting River Guide"
        lead="Filter by experience level or trip length, then compare grade, route, season and indicative price side by side."
        id="river-guide"
      />
      <ActivityFilters
        label="Filter rivers by level or trip length"
        options={raftingFilters}
        value={filter}
        onChange={setFilter}
        resultCount={rows.length}
        resultNoun={rows.length === 1 ? "river" : "rivers"}
      />
      <ComparisonTable
        caption="Nepal rafting rivers compared by grade, days, route, season and indicative price"
        columns={columns}
        rows={rows}
      />
      <p className="raft-table__note">
        Scroll the table sideways on smaller screens. {PRICE_NOTE}
      </p>
    </section>
  );
}
