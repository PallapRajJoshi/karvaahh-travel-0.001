import Counter from "../shared/Counter";
import { heroStats } from "@/data/campingContent";
import "./CampingStats.css";

export default function CampingStats() {
  return (
    <aside className="cmp-hero__stats cmp-stats" aria-label="Camping in Nepal at a glance">
      <dl className="cmp-stats__list">
        {heroStats.map((s) => (
          <div className="cmp-stats__item" key={s.label}>
            <dt className="cmp-stats__label">{s.label}</dt>
            <dd className="cmp-stats__value">
              <Counter to={s.value} suffix={s.suffix} />
            </dd>
          </div>
        ))}
      </dl>
    </aside>
  );
}
