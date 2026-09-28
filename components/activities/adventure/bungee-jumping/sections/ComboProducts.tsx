import { combos } from "../data/bungeeJumpingData";
import { CtaLink, SectionHeading } from "../shared";

export default function ComboProducts() {
  return (
    <section id="combos" className="bj-section bj-combos" aria-labelledby="bj-combo-title">
      <div className="bj-wrap">
        <SectionHeading
          id="bj-combo-title"
          title="Build an Adventure Day"
          intro="Each combination is arranged as its own product. Combo rates change with operator pricing, so we quote them on request."
        />
        <div className="bj-grid bj-grid--2">
          {combos.map((c) => (
            <article key={c.sku} id={`combo-${c.sku.toLowerCase()}`} data-sku={c.sku} className="bj-combo" data-reveal aria-labelledby={`bj-c-${c.sku}`}>
              <h3 id={`bj-c-${c.sku}`} className="bj-combo__name">{c.name}</h3>
              <ol className="bj-combo__parts" aria-label="Included activities">
                {c.parts.map((p) => <li key={p}>{p}</li>)}
              </ol>
              <p className="bj-combo__desc">{c.description}</p>
              <div className="bj-combo__foot">
                <p className="bj-combo__price">{c.price}</p>
                <CtaLink cta={c.cta} variant="ghost" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
