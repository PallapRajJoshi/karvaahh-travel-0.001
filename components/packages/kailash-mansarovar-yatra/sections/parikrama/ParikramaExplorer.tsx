"use client";

/**
 * Interactive Kora timeline: stages on the right, sticky schematic map on
 * the left. The stage in view drives the map highlight; the map's day
 * buttons scroll to the matching stage.
 */
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { ParikramaContent } from "../../types";
import Icon from "../../shared/Icon";
import KoraMap from "./KoraMap";

const TBC = "To be confirmed";

export default function ParikramaExplorer({ data }: { data: ParikramaContent }) {
  const [activeId, setActiveId] = useState(data.stages[0]?.id ?? "");
  const listRef = useRef<HTMLOListElement>(null);

  useEffect(() => {
    const list = listRef.current;
    if (!list) return;
    const items = Array.from(list.querySelectorAll<HTMLElement>("[data-stage]"));
    const io = new IntersectionObserver(
      (entries) => {
        const hit = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (hit) setActiveId((hit.target as HTMLElement).dataset.stage!);
      },
      { rootMargin: "-35% 0px -45% 0px" },
    );
    items.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const select = (id: string) => {
    setActiveId(id);
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document.getElementById(id)?.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
  };

  return (
    <div className="km-kora">
      <div className="km-kora__aside">
        <div className="km-kora__sticky">
          <KoraMap map={data.map} stages={data.stages} activeId={activeId} onSelect={select} />
        </div>
      </div>

      <ol ref={listRef} className="km-kora__stages">
        {data.stages.map((s) => {
          const active = s.id === activeId;
          const stats = [
            { icon: "route" as const, label: "Distance", value: s.distance },
            { icon: "trend-up" as const, label: "Highest point", value: s.maxElevation },
            { icon: "moon" as const, label: "Overnight", value: s.overnightElevation ?? "Darchen / onward" },
            { icon: "clock" as const, label: "Walking time", value: s.walkingTime },
          ];
          return (
            <li key={s.id} id={s.id} data-stage={s.id} className={`km-stage${active ? " is-active" : ""}`}>
              <div className="km-stage__rail" aria-hidden="true">
                <span className="km-stage__dot">{s.day}</span>
              </div>
              <article className="km-stage__card" aria-labelledby={`${s.id}-title`}>
                <div className="km-frame km-stage__media">
                  <Image src={s.image.src} alt={s.image.alt} fill sizes="(min-width: 1024px) 620px, 92vw" />
                  <span
                    className={`km-badge km-stage__difficulty km-stage__difficulty--${s.difficulty
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                  >
                    {s.difficulty}
                  </span>
                </div>
                <div className="km-stage__body">
                  <p className="km-stage__day">Day {s.day}</p>
                  <h3 id={`${s.id}-title`} className="km-stage__title">
                    {s.title}
                  </h3>
                  <p className="km-stage__summary">{s.summary}</p>

                  <dl className="km-stage__stats">
                    {stats.map((st) => (
                      <div key={st.label} className="km-stage__stat">
                        <Icon name={st.icon} size={18} />
                        <dt>{st.label}</dt>
                        <dd>{st.value ?? TBC}</dd>
                      </div>
                    ))}
                  </dl>

                  <ul className="km-stage__highlights">
                    {s.highlights.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>

                  {s.caution ? (
                    <p className="km-stage__caution">
                      <Icon name="alert" size={18} />
                      <span>{s.caution}</span>
                    </p>
                  ) : null}
                </div>
              </article>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
