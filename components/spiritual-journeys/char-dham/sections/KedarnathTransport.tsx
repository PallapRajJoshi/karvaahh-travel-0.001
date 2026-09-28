import { kedarnathOptions as k } from "../data/charDhamData";
import SectionHeading from "../shared/SectionHeading";
import { IconAlert } from "../shared/icons";

export default function KedarnathTransport() {
  return (
    <section id="kedarnath-transport" className="cd-section cd-section--tint cd-kedar" data-dham="kedarnath" aria-labelledby="kedar-title">
      <div className="cd-container">
        <SectionHeading id="kedar-title" title={k.heading} intro={<p>{k.intro}</p>} />
        <ul className="cd-kedar__grid">
          {k.options.map((o, i) => (
            <li key={o.title} className="cd-kedar__card" data-reveal style={{ ["--i" as string]: i }}>
              <h3>{o.title}</h3>
              <p>{o.text}</p>
              {o.conditions ? (
                <>
                  <p className="cd-kedar__depends">Depends on</p>
                  <ul className="cd-chips">
                    {o.conditions.map((c) => (
                      <li key={c}>{c}</li>
                    ))}
                  </ul>
                </>
              ) : null}
            </li>
          ))}
        </ul>
        <p className="cd-note" data-reveal>
          <IconAlert className="cd-note__icon" />
          <span>{k.note}</span>
        </p>
      </div>
    </section>
  );
}
