import { RESPONSIBLE_BLOCKS } from "@/data/activities/wildlife-nature/blocks";
import { WildImage } from "./shared/WildImage";
import { Reveal } from "./shared/Reveal";
import { SectionHeading } from "./shared/SectionHeading";
import { Icon } from "./shared/Icon";
import "./ResponsibleTourismSection.css";

export function ResponsibleTourismSection() {
  return (
    <section className="wn-section wn-section--dark wn-resp" aria-labelledby="wn-resp-title">
      <div className="wn-resp__bg wn-media" aria-hidden="true">
        <WildImage name="responsible-bg" sizes="100vw" />
      </div>
      <div className="wn-resp__veil" aria-hidden="true" />

      <div className="wn-container wn-resp__inner">
        <SectionHeading
          id="wn-resp-title"
          eyebrow="Responsible wildlife tourism"
          title="Travel Responsibly. Protect What Makes Nature Extraordinary."
          lead="Wild places stay wild when visitors treat them with care. These are the principles we encourage on every journey."
        />

        <ul className="wn-resp__grid">
          {RESPONSIBLE_BLOCKS.map((b, i) => (
            <li key={b.title}>
              <Reveal delay={(i % 3) * 80} className="wn-resp__reveal">
                <article className="wn-resp__card">
                  <span className="wn-resp__icon">
                    <Icon name={b.icon} size={24} />
                  </span>
                  <h3 className="wn-resp__title">{b.title}</h3>
                  <p className="wn-resp__body">{b.body}</p>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
