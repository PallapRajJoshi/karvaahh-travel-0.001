import Link from "next/link";
import { locationLine, tagLabels } from "@/lib/destinations/present";
import type { Destination, ResolveContext } from "@/lib/destinations/types";
import { DestinationArt } from "../DestinationArt";
import { ArrowIcon } from "../Icons";
import { resolveCard } from "./resolve";
import "./cards.css";

interface Props {
  destination: Destination;
  ctx: ResolveContext;
  variant?: "default" | "cinema";
  /** 1-based position shown on cinematic cards. */
  index?: number;
}

/** Tall image-led card for editorial rows. `cinema` is the deliberately different Offbeat treatment. */
export function DestinationLargeCard({ destination: d, ctx, variant = "default", index }: Props) {
  const r = resolveCard(d, ctx);
  return (
    <article className={`dlarge${variant === "cinema" ? " dlarge--cinema" : ""}`}>
      <DestinationArt
        theme={r.theme}
        seed={d.slug}
        src={r.src}
        alt={r.alt}
        sizes={variant === "cinema" ? "(min-width: 768px) 340px, 78vw" : "(min-width: 1200px) 290px, (min-width: 768px) 33vw, 80vw"}
      />
      {variant === "cinema" && index ? (
        <span className="dlarge__index" aria-hidden="true">
          {String(index).padStart(2, "0")}
        </span>
      ) : null}
      <div className="dlarge__body">
        <ul className="dlarge__tags" aria-label="Experiences">
          {tagLabels(d).map((t) => (
            <li key={t} className="dh-tag">
              {t}
            </li>
          ))}
        </ul>
        <h3 className="dlarge__name">{d.name}</h3>
        <p className="dlarge__place">{locationLine(d)}</p>
        {d.copy ? <p className="dlarge__copy">{d.copy.short}</p> : null}
        <Link href={r.href} className="dlarge__cta">
          <span>{r.label}</span>
          <ArrowIcon />
        </Link>
      </div>
    </article>
  );
}
