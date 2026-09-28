import { canyonSwing } from "../data/bungeeJumpingData";
import { CtaLink, SectionHeading } from "../shared";

export default function CanyonSwing() {
  return (
    <section className="bj-section bj-swing" aria-labelledby="bj-swing-title">
      <div className="bj-wrap bj-swing__grid">
        <div>
          <SectionHeading id="bj-swing-title" title={canyonSwing.heading} intro={canyonSwing.text} />
          {/* Arc motif: a swing traces a curve where a bungee drops straight */}
          <svg className="bj-swing__arc" viewBox="0 0 320 170" aria-hidden="true">
            <line x1="160" y1="8" x2="160" y2="160" className="bj-swing__drop" />
            <path d="M160 8 Q 40 60 60 150" className="bj-swing__path" />
            <circle cx="160" cy="8" r="4" />
            <circle cx="60" cy="150" r="6" className="bj-swing__rider" />
            <text x="170" y="150">bungee</text>
            <text x="18" y="112">swing</text>
          </svg>
        </div>
        <div className="bj-swing__sites">
          {canyonSwing.sites.map((s) => (
            <article key={s.id} className="bj-swing__site" data-reveal aria-labelledby={s.id}>
              <h3 id={s.id}>{s.name}</h3>
              <dl>
                <div><dt>Height</dt><dd>{s.height}</dd></div>
                <div><dt>River</dt><dd>{s.river}</dd></div>
                <div><dt>Indicative price</dt><dd>{s.price}</dd></div>
              </dl>
              <CtaLink cta={s.cta} variant="text" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
