import Link from "next/link";
import "./ActivityCTA.css";

interface ActivityCTAProps {
  heading: string;
  text: string;
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
  id?: string;
}

export default function ActivityCTA({
  heading,
  text,
  primary,
  secondary,
  id = "plan",
}: ActivityCTAProps) {
  return (
    <section className="act-cta" aria-labelledby={`${id}-heading`} id={id}>
      <div className="act-cta__inner">
        <h2 className="act-cta__heading" id={`${id}-heading`}>
          {heading}
        </h2>
        <p className="act-cta__text">{text}</p>
        <div className="act-cta__actions">
          <Link className="act-btn act-btn--primary" href={primary.href}>
            {primary.label}
          </Link>
          {secondary ? (
            <Link className="act-btn act-btn--ghost" href={secondary.href}>
              {secondary.label}
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );
}
