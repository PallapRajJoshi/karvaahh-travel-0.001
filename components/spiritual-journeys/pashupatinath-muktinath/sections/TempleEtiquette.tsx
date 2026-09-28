import { etiquette } from "../data/pashupatinathMuktinathData";
import { Icon } from "../ui/Icon";
import { SectionHeading } from "../ui/SectionHeading";
import "./respect.css";

export function TempleEtiquette() {
  const columns = [
    { key: "pashupatinath", icon: "temple" as const, ...etiquette.pashupatinath },
    { key: "muktinath", icon: "shrine" as const, ...etiquette.muktinath },
    { key: "photography", icon: "camera" as const, ...etiquette.photography },
  ];
  return (
    <section id="respect" className="pmy-section pmy-etiquette" aria-labelledby="pmy-etiquette-title">
      <div className="pmy-container">
        <SectionHeading
          id="pmy-etiquette-title"
          kicker="Travel respectfully"
          title={etiquette.heading}
          intro={<p>{etiquette.intro}</p>}
        />
        <div className="pmy-etiquette__grid">
          {columns.map((col) => (
            <div key={col.key} className={`pmy-etiquette__col pmy-etiquette__col--${col.key}`} data-reveal>
              <h3 className="pmy-etiquette__title">
                <Icon name={col.icon} size={22} />
                {col.title}
              </h3>
              <ul className="pmy-ticklist">
                {col.points.map((p) => <li key={p}>{p}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
