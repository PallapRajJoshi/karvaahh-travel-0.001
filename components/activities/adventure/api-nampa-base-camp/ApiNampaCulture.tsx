import Image from "next/image";
import { CULTURE } from "./data/content";
import Reveal from "./shared/Reveal";
import SectionHeading from "./shared/SectionHeading";
import { Home } from "./shared/icons";
import "./ApiNampaLandPeople.css";

export default function ApiNampaCulture() {
  const [primary, secondary] = CULTURE.images;
  return (
    <section className="an-section an-section--stone an-lp an-lp--flip" id="culture" aria-labelledby="an-culture-title">
      <div className="an-container an-lp__grid">
        <Reveal className="an-lp__visual an-lp__collage">
          <div className="an-lp__frame an-lp__frame--main">
            <Image src={primary.src} alt={primary.alt} fill sizes="(max-width: 960px) 100vw, 40vw" className="an-lp__image" />
          </div>
          <div className="an-lp__frame an-lp__frame--inset">
            <Image src={secondary.src} alt={secondary.alt} fill sizes="(max-width: 960px) 50vw, 22vw" className="an-lp__image" />
          </div>
        </Reveal>

        <div className="an-lp__content">
          <SectionHeading
            id="an-culture-title"
            eyebrow="Villages & local culture"
            title={CULTURE.title}
            intro={CULTURE.intro}
          />
          <ul className="an-lp__points">
            {CULTURE.points.map((p, i) => (
              <Reveal as="li" key={p.id} className="an-lp__point" delay={(i % 2) * 80}>
                <Home className="an-lp__icon" />
                <div>
                  <h3>{p.title}</h3>
                  <p>{p.body}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
