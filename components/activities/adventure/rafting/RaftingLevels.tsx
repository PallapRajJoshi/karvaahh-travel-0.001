import SectionHeading from "@/components/activities/shared/SectionHeading";
import { raftingLevels } from "@/data/activities/raftingData";

export default function RaftingLevels() {
  return (
    <section aria-labelledby="choose-your-river">
      <SectionHeading
        title="Choose Your River"
        lead="Grade is the first question. It decides which rivers are worth reading about and which are not — and no river in Nepal is suitable for every traveller."
        id="choose-your-river"
      />
      <ol className="raft-levels">
        {raftingLevels.map((level) => (
          <li className="raft-levels__item" key={level.key}>
            <p className="raft-levels__grade">{level.grade}</p>
            <h3 className="raft-levels__title">{level.title}</h3>
            <p className="raft-levels__text">{level.description}</p>
            <p className="raft-levels__examples">{level.examples}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
