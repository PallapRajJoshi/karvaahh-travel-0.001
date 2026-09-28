import JyotirlingaSection from "./JyotirlingaSection";
import SectionHeading from "./SectionHeading";
import { jyotirlingas } from "./data/jyotirlingaData";
import "./JyotirlingaSection.css";

export default function JyotirlingaSections() {
  return (
    <section className="jyl-section jyl-section--white jyl-temples" aria-labelledby="jyl-temples-title">
      <div className="jyl-container">
        <SectionHeading
          id="jyl-temples-title"
          title="The Twelve Jyotirlingas in Detail"
          lead="Significance, setting and practical notes for each temple, from the Himalaya to the southern sea."
        />
        <div className="jyl-temples__list">
          {jyotirlingas.map((temple) => (
            <JyotirlingaSection key={temple.slug} temple={temple} />
          ))}
        </div>
      </div>
    </section>
  );
}
