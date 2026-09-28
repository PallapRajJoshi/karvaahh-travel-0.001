import SectionHeading from "@/components/activities/shared/SectionHeading";
import { raftingRivers, raftingSeasons } from "@/data/activities/raftingData";

/** Rivers whose listed season string covers a given band. */
const bandMonths: Record<string, string[]> = {
  spring: ["Mar", "Apr", "May"],
  monsoon: ["Jun", "Jul", "Aug"],
  autumn: ["Sep", "Oct", "Nov"],
  winter: ["Dec", "Jan", "Feb"],
};

export default function RaftingSeason() {
  return (
    <section aria-labelledby="rafting-season">
      <SectionHeading
        title="When Is Rafting Season?"
        lead="There is no single rafting season for every river. The appropriate window depends on river conditions, grade and expedition route."
        id="rafting-season"
      />

      <ol className="raft-season">
        {raftingSeasons.map((band) => {
          const count =
            band.key === "monsoon"
              ? 0
              : raftingRivers.filter((river) =>
                  bandMonths[band.key].some((month) =>
                    river.season.includes(month),
                  ),
                ).length;

          return (
            <li
              className={`raft-season__band raft-season__band--${band.key}`}
              key={band.key}
            >
              <div className="raft-season__head">
                <h3 className="raft-season__name">{band.label}</h3>
                <span className="raft-season__months">{band.months}</span>
              </div>
              <div
                className="raft-season__meter"
                aria-hidden="true"
                style={{
                  ["--fill" as string]: `${Math.round(
                    (count / raftingRivers.length) * 100,
                  )}%`,
                }}
              />
              <p className="raft-season__count">
                {band.key === "monsoon"
                  ? "Most multi-day programmes pause"
                  : `${count} of ${raftingRivers.length} listed rivers show a season in this window`}
              </p>
              <p className="raft-season__summary">{band.summary}</p>
            </li>
          );
        })}
      </ol>

      <p className="raft-season__note">
        Season windows come from each river&rsquo;s own listing above. River
        conditions change year to year — confirm current flows before committing
        to dates.
      </p>
    </section>
  );
}
