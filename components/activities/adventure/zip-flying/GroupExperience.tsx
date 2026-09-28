import { groups } from "./data/zipFlyingData";

export default function GroupExperience() {
  return (
    <section className="zf-sec zf-groups" aria-labelledby="zf-groups-title">
      <div className="zf-wrap">
        <header className="zf-head">
          <h2 id="zf-groups-title" className="zf-h2">{groups.heading}</h2>
          <p className="zf-lead">{groups.text}</p>
        </header>
        <ul className="zf-groups__grid">
          {groups.items.map((g) => (
            <li key={g.title}>
              <h3 className="zf-h3">{g.title}</h3>
              <p>{g.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
