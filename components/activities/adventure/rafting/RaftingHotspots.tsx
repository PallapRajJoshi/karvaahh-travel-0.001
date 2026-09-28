import SectionHeading from "@/components/activities/shared/SectionHeading";
import { raftingHotspots } from "@/data/activities/raftingData";

export default function RaftingHotspots() {
  return (
    <section aria-labelledby="river-groupings">
      <SectionHeading
        title="How the Rivers Group Together"
        lead="Descriptive categories, not rankings — the right river depends on your dates, your experience and how many days you have."
        id="river-groupings"
      />
      <ul className="raft-hotspots">
        {raftingHotspots.map((hotspot) => (
          <li className="raft-hotspots__item" key={hotspot.label}>
            <p className="raft-hotspots__label">{hotspot.label}</p>
            <h3 className="raft-hotspots__rivers">{hotspot.rivers}</h3>
            <p className="raft-hotspots__note">{hotspot.note}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
