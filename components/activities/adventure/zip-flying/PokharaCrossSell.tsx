import Link from "next/link";
import { pokhara } from "./data/zipFlyingData";

export default function PokharaCrossSell() {
  return (
    <section className="zf-sec zf-pkr" aria-labelledby="zf-pkr-title">
      <div className="zf-wrap">
        <header className="zf-head">
          <h2 id="zf-pkr-title" className="zf-h2">{pokhara.heading}</h2>
        </header>
        <ul className="zf-pkr__grid">
          {pokhara.items.map((it) => {
            const current = it.href?.startsWith("#");
            const inner = (
              <>
                <h3 className="zf-h3">{it.title}</h3>
                <p>{it.text}</p>
                <span className="zf-pkr__go">{current ? "You're on this page" : "View activity"}</span>
              </>
            );
            return (
              <li key={it.title} className={current ? "is-current" : undefined}>
                {current ? (
                  <a href={it.href} className="zf-pkr__tile">{inner}</a>
                ) : (
                  <Link href={it.href ?? "#"} className="zf-pkr__tile">{inner}</Link>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
