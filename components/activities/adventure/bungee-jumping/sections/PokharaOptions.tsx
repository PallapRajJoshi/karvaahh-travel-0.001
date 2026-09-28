import { pokharaProducts } from "../data/bungeeJumpingData";
import { SectionHeading } from "../shared";
import AdventureProductCard from "./AdventureProductCard";

export default function PokharaOptions() {
  return (
    <section id="pokhara" className="bj-section bj-pokhara" aria-labelledby="bj-pokhara-title">
      <div className="bj-wrap">
        <SectionHeading
          id="bj-pokhara-title"
          eyebrow="Alternative · Pokhara"
          title="Adventure Options in Pokhara"
          intro="Jump without leaving Pokhara — useful when a separate travel day to Kushma doesn't fit your plans."
        />
        <div className="bj-grid bj-grid--2">
          {pokharaProducts.map((p) => <AdventureProductCard key={p.id} product={p} />)}
        </div>
      </div>
    </section>
  );
}
