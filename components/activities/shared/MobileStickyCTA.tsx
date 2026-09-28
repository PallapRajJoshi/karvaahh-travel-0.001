import Link from "next/link";
import "./MobileStickyCTA.css";

interface MobileStickyCTAProps {
  label: string;
  href: string;
}

/** Thumb-reach planning link on small screens only. Pure CSS, no JS. */
export default function MobileStickyCTA({ label, href }: MobileStickyCTAProps) {
  return (
    <div className="act-sticky">
      <Link className="act-btn act-btn--primary act-sticky__btn" href={href}>
        {label}
      </Link>
    </div>
  );
}
