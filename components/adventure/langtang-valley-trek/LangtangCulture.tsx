import { culture } from "@/data/adventure/langtang-valley-trek";
import LangtangImage from "./LangtangImage";
import "./LangtangCulture.css";

export default function LangtangCulture() {
  const [a, b] = culture.images;
  return (
    <section className="lt-section lt-culture" id="culture" aria-labelledby="lt-culture-title">
      <div className="lt-container lt-culture__grid">
        <div className="lt-culture__collage" data-reveal>
          <div className="lt-culture__img lt-culture__img--main"><LangtangImage id={a} sizes="(max-width: 900px) 100vw, 40vw" /></div>
          <div className="lt-culture__img lt-culture__img--inset"><LangtangImage id={b} sizes="(max-width: 900px) 50vw, 22vw" /></div>
          <p className="lt-culture__quote">“Walk clockwise, ask before you photograph, and accept the second cup of tea.”</p>
        </div>
        <div className="lt-culture__copy">
          <header className="lt-heading" data-reveal>
            <p className="lt-heading__eyebrow">People &amp; Heritage</p>
            <h2 className="lt-heading__title" id="lt-culture-title">{culture.heading}</h2>
            <p className="lt-heading__intro">{culture.intro}</p>
          </header>
          <ol className="lt-culture__list">
            {culture.items.map((item, i) => (
              <li key={item.title} data-reveal style={{ ["--i" as string]: i }}>
                <span className="lt-culture__n" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
