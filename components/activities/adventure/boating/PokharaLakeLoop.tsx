import Link from "next/link";
import SectionHeading from "@/components/activities/shared/SectionHeading";
import {
  pokharaLakeLoop,
  pokharaSmallLakes,
} from "@/data/activities/boatingData";

export default function PokharaLakeLoop() {
  return (
    <section aria-labelledby="pokhara-lakes">
      <SectionHeading
        title="Three Lakes Around Pokhara"
        lead="Phewa is the one everybody knows. Two more sit within half an hour of it, and they get quieter as you go east."
        id="pokhara-lakes"
      />

      <ol className="lake-loop">
        {pokharaLakeLoop.map((lake, index) => (
          <li className="lake-loop__item" key={lake.slug}>
            <span className="lake-loop__index" aria-hidden="true">
              {index + 1}
            </span>
            <h3 className="lake-loop__name">{lake.name}</h3>
            <p className="lake-loop__line">{lake.line}</p>
          </li>
        ))}
      </ol>

      <div className="lake-loop__foot">
        <p className="lake-loop__extra">
          Smaller lakes on the valley rim: <strong>{pokharaSmallLakes}</strong>
        </p>
        <Link className="act-btn act-btn--primary" href="/contact">
          Explore Pokhara Boating
        </Link>
      </div>
    </section>
  );
}
