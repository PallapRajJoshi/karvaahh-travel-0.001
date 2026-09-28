import SectionHeading from "./SectionHeading";
import { anchorFor, bySlug, regionalGroups, regionalNote } from "./data/jyotirlingaData";
import "./RegionalJourney.css";

export default function RegionalJourney() {
  return (
    <section className="jyl-section jyl-section--white jyl-regions" aria-labelledby="jyl-regions-title">
      <div className="jyl-container">
        <SectionHeading
          id="jyl-regions-title"
          title="12 Jyotirlingas Across India"
          lead="From the Himalaya to the southern sea, the temples fall naturally into five broad travel regions."
        />
        <ol className="jyl-regions__list">
          {regionalGroups.map((group) => (
            <li key={group.region} className="jyl-regions__col">
              <h3 className="jyl-regions__name">{group.region}</h3>
              <p className="jyl-regions__desc">{group.description}</p>
              <ul className="jyl-regions__temples">
                {group.slugs.map((slug) => {
                  const t = bySlug[slug];
                  return (
                    <li key={slug}>
                      <a href={`#${anchorFor(slug)}`}>{t.name}</a>
                      <span>{t.state}</span>
                    </li>
                  );
                })}
              </ul>
            </li>
          ))}
        </ol>
        <p className="jyl-note jyl-regions__note">{regionalNote}</p>
      </div>
    </section>
  );
}
