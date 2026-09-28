import { culturalExperiences } from "@/data/india-pilgrimage/adi-kailash-om-parvat/experiences";
import { headings } from "@/data/india-pilgrimage/adi-kailash-om-parvat/page";
import { KImage } from "../ui/KImage";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";
import "./cultural-experiences.css";

/** Section 9 — Cultural & Himalayan experiences (editorial mosaic). */
export function CulturalExperiences() {
  const items = culturalExperiences.filter((e) => e.enabled !== false);
  return (
    <section id="culture" className="akop-section akop-section--alt akop-culture" aria-labelledby="culture-title">
      <div className="akop-container">
        <SectionHeading id="culture-title" {...headings.culture} />
        <ul className="akop-culture__grid" role="list">
          {items.map((item, i) => (
            <Reveal as="li" key={item.id} index={i % 4} className="akop-culture__item">
              <article className="akop-culture__card">
                <div className="akop-culture__media">
                  <KImage
                    image={item.image}
                    sizes={i === 0 ? "(min-width: 1024px) 620px, 100vw" : "(min-width: 1024px) 310px, (min-width: 640px) 50vw, 100vw"}
                    className="akop-culture__img"
                  />
                </div>
                <div className="akop-culture__body">
                  <h3 className="akop-culture__title">{item.title}</h3>
                  <p className="akop-culture__text">{item.description}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
