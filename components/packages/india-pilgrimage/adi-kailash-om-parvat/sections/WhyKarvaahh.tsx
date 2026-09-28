import { whyKarvaahh } from "@/data/india-pilgrimage/adi-kailash-om-parvat/experiences";
import { headings } from "@/data/india-pilgrimage/adi-kailash-om-parvat/page";
import { Icon } from "../ui/Icon";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";
import "./why-karvaahh.css";

/** Section 10 — Why travel with Karvaahh. */
export function WhyKarvaahh() {
  const items = whyKarvaahh.filter((f) => f.enabled !== false);
  return (
    <section id="why-karvaahh" className="akop-section akop-why" aria-labelledby="why-title">
      <div className="akop-container">
        <SectionHeading id="why-title" {...headings.whyKarvaahh} tone="dark" />
        <ul className="akop-why__grid" role="list">
          {items.map((f, i) => (
            <Reveal as="li" key={f.id} index={i % 4} className="akop-why__item">
              <span className="akop-why__icon">
                <Icon name={f.icon} size={26} />
              </span>
              <h3 className="akop-why__title">{f.title}</h3>
              <p className="akop-why__text">{f.description}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
