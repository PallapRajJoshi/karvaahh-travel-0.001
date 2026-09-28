"use client";

/**
 * Split layout: a sticky, cross-fading image stage on the left and a list of
 * experiences on the right. Hover or tap a row to change the (decorative) image.
 * On mobile the stage is hidden and each row shows its own thumbnail.
 */
import { useState } from "react";
import type { ExperienceItem } from "../types";
import SmartImage from "../ui/SmartImage";

export default function ExperienceShowcase({ items }: { items: ExperienceItem[] }) {
  const [active, setActive] = useState(0);

  return (
    <div className="ebc-exp">
      <div className="ebc-exp__stage" aria-hidden="true">
        {items.map((item, i) => (
          <div key={item.id} className={`ebc-img ebc-exp__frame${i === active ? " is-active" : ""}`}>
            <SmartImage image={item.image} sizes="(max-width: 1023px) 0px, 45vw" />
          </div>
        ))}
        <div className="ebc-exp__counter">
          <span>{String(active + 1).padStart(2, "0")}</span> / {String(items.length).padStart(2, "0")}
        </div>
      </div>

      <ol className="ebc-exp__list">
        {items.map((item, i) => (
          <li
            key={item.id}
            className={`ebc-exp__item${i === active ? " is-active" : ""}`}
            data-reveal=""
            style={{ ["--i" as string]: i % 4 }}
            onMouseEnter={() => setActive(i)}
            onClick={() => setActive(i)}
          >
            <span className="ebc-exp__num" aria-hidden="true">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="ebc-exp__text">
              <h3 className="ebc-exp__title">{item.title}</h3>
              <p className="ebc-exp__desc">{item.description}</p>
            </div>
            <div className="ebc-img ebc-exp__thumb">
              <SmartImage image={item.image} sizes="(max-width: 1023px) 96px, 0px" />
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
