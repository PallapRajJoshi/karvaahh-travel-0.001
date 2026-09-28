import Link from "next/link";
import type { EverestDestination } from "../types";
import SmartImage from "./SmartImage";
import Icon from "./Icon";

const nf = new Intl.NumberFormat("en-IN");

/**
 * Trail-stop card. Rendered inside an <ol> because the stops are in route order.
 * "Explore Destination" appears only when `href` is set — no dead links.
 */
export default function DestinationCard({ destination: d, index }: { destination: EverestDestination; index: number }) {
  return (
    <li className="ebc-dcard" data-reveal="" style={{ ["--i" as string]: index % 4 }}>
      <div className="ebc-img ebc-dcard__media">
        <SmartImage image={d.image} sizes="(max-width: 640px) 100vw, (max-width: 1023px) 50vw, 25vw" className="ebc-dcard__img" />
        <span className="ebc-badge ebc-dcard__badge">{d.category}</span>
        <span className="ebc-dcard__stop" aria-hidden="true">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
      <div className="ebc-dcard__body">
        <p className="ebc-dcard__meta">
          <Icon name="pin" />
          <span>{d.location}</span>
        </p>
        <h3 className="ebc-dcard__title">{d.name}</h3>
        <p className="ebc-dcard__tagline">{d.tagline}</p>
        <p className="ebc-dcard__desc">{d.description}</p>
        <div className="ebc-dcard__footer">
          {d.elevationM ? (
            <span className="ebc-dcard__alt">
              <Icon name="altitude" />≈ {nf.format(d.elevationM)} m
            </span>
          ) : (
            <span className="ebc-dcard__alt">
              <Icon name="altitude" />
              High Khumbu
            </span>
          )}
          {d.href && (
            <Link href={d.href} className="ebc-link">
              Explore Destination<span className="ebc-sr-only">: {d.name}</span>
              <Icon name="arrow-right" />
            </Link>
          )}
        </div>
      </div>
    </li>
  );
}
