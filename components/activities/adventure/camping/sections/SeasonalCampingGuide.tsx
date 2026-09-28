import SectionHeading from "../shared/SectionHeading";
import { IconInfo } from "../shared/Icons";
import { seasons } from "@/data/campingContent";
import "./SeasonalCampingGuide.css";

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const seasonOf = (m: number) => seasons.find((s) => s.monthIdx.includes(m))!.id;

export default function SeasonalCampingGuide() {
  return (
    <section id="seasons" className="cmp-section cmp-section--beige cmp-seasons" aria-labelledby="cmp-seasons-title">
      <div className="cmp-container">
        <SectionHeading
          id="cmp-seasons-title"
          kicker="Best time to camp"
          title="Best Time to Camp in Nepal"
          lead="Nepal's weather changes sharply with altitude and region. Use this as a starting point, not a guarantee."
        />

        <ol className="cmp-seasons__bar" aria-label="Months of the year by season">
          {MONTHS.map((m, i) => (
            <li key={m} className={`cmp-seasons__month cmp-seasons__month--${seasonOf(i)}`} data-reveal style={{ ["--d" as string]: `${i * 40}ms` }}>
              {m}
            </li>
          ))}
        </ol>

        <div className="cmp-seasons__grid">
          {seasons.map((s, i) => (
            <article key={s.id} className={`cmp-season cmp-season--${s.id}`} data-reveal style={{ ["--d" as string]: `${i * 100}ms` }}>
              <h3 className="cmp-season__name">{s.name}</h3>
              <p className="cmp-season__months">{s.months}</p>
              <p className="cmp-season__text">{s.text}</p>
            </article>
          ))}
        </div>

        <p className="cmp-note">
          <IconInfo size={16} />
          Always check local weather, trail conditions, permits and camping regulations before departure.
        </p>
      </div>
    </section>
  );
}
