import { kushmaProducts, PRICE_NOTE } from "../data/bungeeJumpingData";
import { SectionHeading } from "../shared";
import AdventureProductCard from "./AdventureProductCard";

/** Kushma adventure ecosystem */
export default function AdventureProducts() {
  return (
    <section className="bj-section bj-ecosystem" aria-labelledby="bj-eco-title">
      <div className="bj-wrap">
        <SectionHeading
          id="bj-eco-title"
          eyebrow="Kushma"
          title="More Than a Bungee Jump"
          intro="Kushma is useful for travelers who want to combine multiple aerial and gorge activities in one day."
        />
        <div className="bj-grid bj-grid--4">
          {kushmaProducts.map((p) => <AdventureProductCard key={p.id} product={p} />)}
        </div>
        <p className="bj-note">{PRICE_NOTE}</p>
      </div>
    </section>
  );
}
