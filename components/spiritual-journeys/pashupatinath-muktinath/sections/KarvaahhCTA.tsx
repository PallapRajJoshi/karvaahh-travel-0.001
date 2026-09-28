import Link from "next/link";
import { karvaahhSupport } from "../data/pashupatinathMuktinathData";
import { Icon } from "../ui/Icon";
import "./closing.css";

export function KarvaahhCTA() {
  return (
    <section className="pmy-section pmy-support" aria-labelledby="pmy-support-title">
      <div className="pmy-container pmy-support__grid">
        <div data-reveal>
          <h2 id="pmy-support-title" className="pmy-heading__title pmy-heading__title--h2">{karvaahhSupport.heading}</h2>
          <p className="pmy-support__intro">{karvaahhSupport.intro}</p>
          <Link href={karvaahhSupport.cta.href} className="pmy-btn pmy-btn--primary">
            {karvaahhSupport.cta.label}
          </Link>
        </div>
        <div data-reveal>
          <ul className="pmy-support__list">
            {karvaahhSupport.services.map((s) => (
              <li key={s}>
                <Icon name="check" size={18} />
                {s}
              </li>
            ))}
          </ul>
          <p className="pmy-note pmy-note--dark pmy-support__honesty">{karvaahhSupport.honesty}</p>
        </div>
      </div>
    </section>
  );
}
