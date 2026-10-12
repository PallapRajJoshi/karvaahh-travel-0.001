import "./shared-cards.css";

/** Season summary: name, months and key points. */
export default function SeasonCard({ data }: { data: { season: string; months: string; points: string[] } }) {
  return (
    <article className="season-card">
      <h3 className="season-card__title">{data.season}</h3>
      <p className="season-card__months">{data.months}</p>
      <ul className="season-card__points">
        {data.points.map((p) => (
          <li key={p}>{p}</li>
        ))}
      </ul>
    </article>
  );
}
