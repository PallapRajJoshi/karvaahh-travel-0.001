import ChapterMark from "../shared/ChapterMark";
import WeddingImage from "../shared/WeddingImage";
import { cssVars } from "../shared/cssVars";
import "./WeddingIntro.css";

const line = ["Destination", "Celebration", "Experience", "Memory"];

export default function WeddingIntro() {
  return (
    <section className="dw-section dw-intro" aria-labelledby="dw-intro-title">
      <div className="dw-container">
        <ChapterMark index={0} />
        <div className="dw-intro__grid">
          <div className="dw-intro__text">
            <p className="dw-eyebrow" data-reveal="">Your wedding, reimagined</p>
            <h2 id="dw-intro-title" className="dw-h2" data-reveal="">
              Your wedding. Your destination. <em>Your story.</em>
            </h2>
            <p className="dw-intro__pull" data-reveal="">
              A destination wedding is more than a ceremony in a beautiful place. It is an experience shared
              with the people you love.
            </p>
            <div className="dw-intro__body" data-reveal="">
              <p>
                Karvaahh brings together destination planning, travel coordination, accommodation, guest
                hospitality, local experiences and wedding-event coordination to create a seamless celebration
                around your special day.
              </p>
              <p>
                Whether you imagine exchanging vows beside the mountains of Nepal, celebrating beside a
                Himalayan lake, experiencing a sacred wedding journey in Uttarakhand, hosting a royal
                celebration in Rajasthan, or escaping to a tropical destination, we help transform the
                destination into part of your wedding story.
              </p>
            </div>
          </div>

          <figure className="dw-intro__figure">
            <div className="dw-intro__img dw-intro__img--main" data-reveal="image">
              <WeddingImage
                image={{
                  file: "intro-couple.jpg",
                  alt: "Couple walking hand in hand along a lakeside path with mountains in the distance",
                }}
                sizes="(min-width: 960px) 42vw, 100vw"
              />
            </div>
            <div className="dw-intro__img dw-intro__img--inset" data-reveal="image">
              <WeddingImage
                image={{ file: "intro-detail.jpg", alt: "Close-up of marigold garlands and a brass diya" }}
                sizes="(min-width: 960px) 18vw, 40vw"
                compact
              />
            </div>
            <figcaption className="dw-intro__caption">The destination becomes part of the story</figcaption>
          </figure>
        </div>

        <ol className="dw-intro__line" aria-label="The Karvaahh wedding journey">
          {line.map((step, i) => (
            <li key={step} data-reveal="fade" style={cssVars({ "--dw-i": i })}>
              <span className="dw-intro__line-n">0{i + 1}</span>
              <span className="dw-intro__line-word">{step}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
