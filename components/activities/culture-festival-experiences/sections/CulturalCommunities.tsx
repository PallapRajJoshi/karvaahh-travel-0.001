import CultureImage from "../shared/CultureImage";
import Reveal from "../shared/Reveal";
import CtaLink from "../shared/CtaLink";
import SectionHeading from "../shared/SectionHeading";
import { COMMUNITIES, COMMUNITIES_HEADING, COMMUNITIES_LEDE, COMMUNITIES_NOTE } from "../data/communities";
import { IDS } from "../data/page";
import "./CulturalCommunities.css";

export default function CulturalCommunities() {
  return (
    <section id={IDS.communities} className="culture-communities" aria-labelledby="culture-communities-title">
      <div className="cx-container">
        <Reveal>
          <SectionHeading id="culture-communities-title" title={COMMUNITIES_HEADING} lede={COMMUNITIES_LEDE} align="center" />
        </Reveal>

        <div className="culture-communities__grid">
          {COMMUNITIES.map((c, i) => (
            <Reveal as="article" key={c.id} delay={i * 110} className="community-card">
              <div className="community-card__media">
                <CultureImage id={c.media} sizes="(max-width: 900px) 100vw, 33vw" />
                <span className="community-card__region">{c.region}</span>
              </div>
              <div className="community-card__body">
                <h3 className="community-card__name">{c.name}</h3>
                <p className="community-card__intro">{c.intro}</p>

                {c.groups ? (
                  <dl className="community-card__groups">
                    {c.groups.map((g) => (
                      <div key={g.name} className="community-card__group">
                        <dt>
                          {g.name} <span>{g.region}</span>
                        </dt>
                        <dd>{g.line}</dd>
                      </div>
                    ))}
                  </dl>
                ) : null}

                <ul className="community-card__list">
                  {c.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>

                <CtaLink variant="text" href={c.href} prefill={c.prefill} ariaLabel={`Discover cultural experiences: ${c.name}`}>
                  Discover Cultural Experiences
                </CtaLink>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="culture-communities__note">{COMMUNITIES_NOTE}</p>
      </div>
    </section>
  );
}
