import { story, timeline } from "@/lib/about/copy";
import { artFor, resolveImage } from "@/lib/about/resolve";
import { Pic } from "../shared/Pic";
import "./about-story.css";

export function AboutStory() {
  return (
    <section className="ab-section ab-story" aria-labelledby="about-story-title">
      <div className="ab-container">
        <div className="ab-story__intro">
          <div className="ab-story__heading" data-reveal="">
            <p className="ab-eyebrow">{story.eyebrow}</p>
            <h2 id="about-story-title" className="ab-story__title">
              {story.title}
            </h2>
          </div>
          <div className="ab-story__body">
            {story.paragraphs.map((text, i) => (
              <p
                key={text}
                className={i === 0 ? "ab-story__p ab-story__p--lead" : "ab-story__p"}
                data-reveal=""
                style={{ ["--d" as string]: i + 1 }}
              >
                {text}
              </p>
            ))}
          </div>
        </div>

        <figure className="ab-story__band ab-frame" data-reveal="">
          <Pic image={resolveImage("story")} art={artFor("story")} sizes="(min-width: 1280px) 1240px, 92vw" />
        </figure>

        <div className="ab-timeline">
          <div className="ab-timeline__line" aria-hidden="true" data-reveal="draw-x" />
          <ol className="ab-timeline__list">
            {timeline.map((step, i) => (
              <li className="ab-timeline__item" key={step.id} data-reveal="" style={{ ["--d" as string]: i + 1 }}>
                <span className="ab-timeline__node" aria-hidden="true" />
                <span className="ab-timeline__num" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="ab-timeline__title">{step.title}</h3>
                <p className="ab-timeline__text">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
