import type { AdventureProduct } from "../data/bungeeJumpingData";
import { CtaLink } from "../shared";

export default function AdventureProductCard({ product, tone = "light" }: { product: AdventureProduct; tone?: "light" | "dark" }) {
  return (
    <article className={`bj-product bj-product--${tone}`} data-reveal aria-labelledby={`bj-p-${product.id}`}>
      <div className="bj-product__head">
        <h3 id={`bj-p-${product.id}`} className="bj-product__name">{product.name}</h3>
        {product.status && <span className="bj-status">{product.status}</span>}
      </div>
      {product.meta && (
        <dl className="bj-product__meta">
          {product.meta.map((m) => (
            <div key={m.label}><dt>{m.label}</dt><dd>{m.value}</dd></div>
          ))}
        </dl>
      )}
      <p className="bj-product__desc">{product.description}</p>
      <div className="bj-product__foot">
        <p className="bj-price"><span>{product.price === "Enquire" ? "Price" : "Indicative price"}</span>{product.price}</p>
        {product.cta && <CtaLink cta={product.cta} variant="text" />}
      </div>
    </article>
  );
}
