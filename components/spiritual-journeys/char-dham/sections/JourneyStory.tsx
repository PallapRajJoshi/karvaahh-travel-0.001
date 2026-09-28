import { dhams, story } from "../data/charDhamData";

export default function JourneyStory() {
  return (
    <section id="journey-story" className="cd-story" aria-labelledby="story-title">
      <div className="cd-container">
        <header className="cd-story__head" data-reveal>
          <h2 id="story-title" className="cd-story__title">
            {story.heading}
          </h2>
          <p className="cd-story__intro">{story.intro}</p>
        </header>
        <div className="cd-story__river" data-reveal aria-hidden="true">
          <svg viewBox="0 0 1200 60" preserveAspectRatio="none">
            <path d="M0 30 C 150 5, 250 55, 400 30 S 650 5, 800 30 S 1050 55, 1200 30" pathLength={1} />
          </svg>
        </div>
        <ol className="cd-story__movements">
          {story.movements.map((m, i) => (
            <li key={m.title} className="cd-story__movement" data-dham={dhams[i].slug} data-reveal style={{ ["--i" as string]: i }}>
              <span className="cd-story__place">
                {dhams[i].numeral} {dhams[i].name}
              </span>
              <h3>{m.title}</h3>
              <p>{m.text}</p>
            </li>
          ))}
        </ol>
        <p className="cd-story__closing" data-reveal>
          {story.closing}
        </p>
      </div>
    </section>
  );
}
