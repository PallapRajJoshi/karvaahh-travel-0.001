import { WildImage } from "./shared/WildImage";
import { Reveal } from "./shared/Reveal";
import { SectionHeading } from "./shared/SectionHeading";
import "./WildlifeIntroduction.css";

const THEMES = [
  "Rich biodiversity",
  "Nepal's incredible wildlife",
  "Himalayan wilderness",
  "Nature-based exploration",
  "Conservation awareness",
];

export function WildlifeIntroduction() {
  return (
    <section id="intro" className="wn-section wn-section--ivory wn-intro" aria-labelledby="wn-intro-title">
      <div className="wn-container wn-intro__grid">
        <Reveal className="wn-intro__visual">
          <div className="wn-media wn-intro__frame">
            <WildImage name="intro" sizes="(max-width: 900px) 100vw, 45vw" />
          </div>
          <span className="wn-intro__badge" aria-hidden="true">
            Nepal · Terai to Himalaya
          </span>
        </Reveal>

        <div className="wn-intro__body">
          <SectionHeading id="wn-intro-title" eyebrow="Discover nature's wonders" title="Where Nature Comes Alive" />

          <Reveal className="wn-intro__prose" delay={100}>
            <p>
              Wildlife &amp; Nature experiences offer an immersive journey into the natural beauty,{" "}
              <mark className="wn-mark">rich biodiversity</mark>, and ecological wonders of Nepal and beyond. From
              lush tropical jungles, dense forests, and serene wetlands to alpine meadows, pristine lakes, and
              breathtaking <mark className="wn-mark">Himalayan landscapes</mark>, these experiences bring travelers
              closer to nature and wildlife.
            </p>
            <p>
              Discover the incredible biodiversity of Chitwan National Park, Bardia National Park, Koshi Tappu
              Wildlife Reserve, Shuklaphanta National Park, Sagarmatha National Park, Langtang National Park, and
              Rara National Park. Enjoy jungle safaris, birdwatching, wildlife photography, nature walks, forest
              trails, canoeing, and peaceful lakeside escapes while encountering diverse wildlife, including the
              Bengal tiger, one-horned rhinoceros, wild elephants, red pandas, and exotic bird species.
            </p>
            <p>
              Ideal for families, nature lovers, photographers, adventure seekers, and eco-conscious travelers,
              these experiences combine <mark className="wn-mark">conservation awareness</mark>, outdoor
              exploration, and unforgettable encounters with the natural world.
            </p>
          </Reveal>

          <Reveal delay={180}>
            <ul className="wn-intro__themes" aria-label="What this page explores">
              {THEMES.map((t) => (
                <li key={t} className="wn-intro__chip">
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
