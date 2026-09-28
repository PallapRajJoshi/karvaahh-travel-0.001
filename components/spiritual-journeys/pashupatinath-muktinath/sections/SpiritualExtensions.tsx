import Link from "next/link";
import { extensions } from "../data/pashupatinathMuktinathData";
import { ROUTES } from "../data/site";
import { SectionHeading } from "../ui/SectionHeading";
import "./closing.css";

export function SpiritualExtensions() {
  return (
    <section className="pmy-section pmy-extend" aria-labelledby="pmy-extend-title">
      <div className="pmy-container">
        <SectionHeading id="pmy-extend-title" title={extensions.heading} intro={<p>{extensions.intro}</p>} />
        <ul className="pmy-extend__list">
          {extensions.items.map((x) => (
            <li
              key={x.title}
              className={`pmy-extend__item${x.current ? " is-current" : ""}`}
              aria-current={x.current ? "page" : undefined}
              data-reveal
            >
              <h3>{x.title}</h3>
              <p>{x.text}</p>
              {x.current ? (
                <span className="pmy-extend__badge">You are here</span>
              ) : x.href ? (
                <Link className="pmy-extend__link" href={x.href}>
                  View journey<span className="pmy-sr-only">: {x.title}</span>
                </Link>
              ) : (
                <Link className="pmy-extend__link" href={ROUTES.enquiry}>
                  Ask about this combination<span className="pmy-sr-only">: {x.title}</span>
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
