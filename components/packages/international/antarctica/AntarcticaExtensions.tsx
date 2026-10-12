import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { activeExtensions } from "@/data/antarctica/extensions";
import { enquireExpedition, liveHref } from "@/lib/antarctica/config";
import PolarMedia from "./PolarMedia";
import SectionHead from "./SectionHead";

const ROUTE = ["South America", "Ushuaia", "Drake Passage", "Antarctica"];

/** Optional South America extensions, each a configurable product. */
export default function AntarcticaExtensions() {
  if (!activeExtensions.length) return null;
  return (
    <section className="pkg-section pkg-section--sand an-ext" id="extensions" aria-labelledby="ext-h">
      <div className="pkg-container">
        <SectionHead
          id="ext-h"
          eyebrow="Antarctica + South America"
          title="Extend the Journey"
          lede="You travel a long way to reach the ice. Add Patagonia's glaciers, Buenos Aires or Chile before or after your voyage. Every extension is optional and built around your dates."
        />
        <ol className="an-ext__route" aria-label="Typical journey">
          {ROUTE.map((r, i) => (
            <li key={r} style={{ "--i": i } as React.CSSProperties}>{r}</li>
          ))}
        </ol>
        <ul className="an-ext__grid">
          {activeExtensions.map((e) => {
            const live = liveHref(e.href);
            return (
              <li key={e.id}>
                <article className="an-ext__card" aria-labelledby={`ext-${e.id}`}>
                  <div className="an-ext__media"><PolarMedia id={e.image} sizes="(min-width: 1100px) 20vw, (min-width: 640px) 50vw, 85vw" /></div>
                  <div className="an-ext__body">
                    <p className="an-ext__country">{e.country} · {e.typicalNights}</p>
                    <h3 id={`ext-${e.id}`}>{e.title}</h3>
                    <p>{e.text}</p>
                    <ul className="an-list an-list--sm">{e.ideas.map((x) => <li key={x}>{x}</li>)}</ul>
                    <div className="an-ext__actions">
                      {live ? (
                        <Link href={live} className="pkg-btn pkg-btn--text">
                          Explore {e.title.replace("Antarctica + ", "")} <ArrowRight size={16} className="pkg-arrow" aria-hidden="true" />
                        </Link>
                      ) : null}
                      <a href={enquireExpedition(e.title)} target="_blank" rel="noopener noreferrer" className="pkg-btn pkg-btn--text">
                        <MessageCircle size={16} aria-hidden="true" /> Enquire<span className="pkg-sr"> about {e.title} (opens WhatsApp)</span>
                      </a>
                    </div>
                  </div>
                </article>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
