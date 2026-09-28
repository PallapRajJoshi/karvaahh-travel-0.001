import Image from "next/image";
import Link from "next/link";
import { kushma } from "./data/zipFlyingData";

export default function KushmaCrossSell() {
  return (
    <section className="zf-sec zf-kushma" aria-labelledby="zf-kushma-title">
      <div className="zf-wrap zf-kushma__grid">
        <div className="zf-kushma__media">
          <Image src={kushma.image.src} alt={kushma.image.alt} fill sizes="(max-width: 900px) 100vw, 45vw" className="zf-cover" />
        </div>
        <div>
          <h2 id="zf-kushma-title" className="zf-h2 zf-h2--light">{kushma.heading}</h2>
          <p className="zf-lead zf-lead--light">{kushma.text}</p>
          <dl className="zf-kushma__list">
            {kushma.items.map((it) => (
              <div key={it.title}>
                <dt>{it.title}</dt>
                <dd>{it.text}</dd>
              </div>
            ))}
          </dl>
          <Link className="zf-btn zf-btn--gold" href={kushma.cta.href}>{kushma.cta.label}</Link>
        </div>
      </div>
    </section>
  );
}
