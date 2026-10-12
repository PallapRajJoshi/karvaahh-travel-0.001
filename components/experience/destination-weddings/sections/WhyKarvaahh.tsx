import { coordinationClusters } from "../data/planning";
import { cssVars } from "../shared/cssVars";
import "./WhyKarvaahh.css";

export default function WhyKarvaahh() {
  const total = coordinationClusters.reduce((n, c) => n + c.items.length, 0);

  return (
    <section className="dw-section dw-why" aria-labelledby="dw-why-title">
      <div className="dw-container dw-why__grid">
        <div className="dw-why__lead" data-reveal="">
          <p className="dw-eyebrow">Why Karvaahh</p>
          <h2 id="dw-why-title" className="dw-h2">
            More than a wedding. <em>A complete destination experience.</em>
          </h2>
          <p className="dw-lede">
            Most destination weddings involve a planner, a hotel, a travel agent, a décor house and a dozen
            vendors who have never met. Karvaahh brings the travel and the celebration under one roof, so
            there is one plan, one timeline and one number to call.
          </p>
          <blockquote className="dw-why__statement">
            <p>One destination.</p>
            <p>One wedding journey.</p>
            <p>
              <em>One coordination partner.</em>
            </p>
          </blockquote>
        </div>

        <div className="dw-why__eco" aria-label={`${total} services Karvaahh coordinates`}>
          {coordinationClusters.map((c, i) => (
            <div key={c.id} className="dw-why__cluster" data-reveal="" style={cssVars({ "--dw-i": i })}>
              <p className="dw-why__cluster-n">0{i + 1}</p>
              <h3 className="dw-why__cluster-title">{c.title}</h3>
              <ul>
                {c.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
          <p className="dw-why__count" aria-hidden="true">
            <span>{total}</span> moving parts, coordinated
          </p>
        </div>
      </div>
    </section>
  );
}
