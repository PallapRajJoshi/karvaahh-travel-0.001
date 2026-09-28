import Image from "next/image";
import type { BungeeSite } from "../data/bungeeJumpingData";
import { CtaLink } from "../shared";

export default function BungeeSiteCard({ site }: { site: BungeeSite }) {
  return (
    <article className={`bj-site${site.primary ? " bj-site--primary" : ""}`} data-reveal aria-labelledby={`bj-site-${site.id}`}>
      <div className="bj-site__media">
        <Image src={site.image.src} alt={site.image.alt} fill sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw" />
        <span className="bj-status">{site.status}</span>
        {site.primary && <span className="bj-site__flag">Primary destination</span>}
      </div>
      <div className="bj-site__body">
        <h3 id={`bj-site-${site.id}`} className="bj-site__name">
          {site.name}
          {site.subtitle && <span className="bj-site__sub">{site.subtitle}</span>}
        </h3>
        <dl className="bj-site__meta">
          <div><dt>Province / District</dt><dd>{site.region}</dd></div>
          <div><dt>Height</dt><dd>{site.height}</dd></div>
          <div><dt>River / Gorge</dt><dd>{site.setting}</dd></div>
        </dl>
        <p className="bj-site__desc">{site.description}</p>
        <p className="bj-site__distinct"><strong>Distinctive:</strong> {site.distinctive}</p>
        <div className="bj-site__foot">
          <p className="bj-price"><span>Indicative price</span>{site.price}</p>
          <CtaLink cta={site.cta} variant={site.primary ? "primary" : "ghost"} />
        </div>
      </div>
    </article>
  );
}
