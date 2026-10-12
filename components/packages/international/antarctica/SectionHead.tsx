import type { ReactNode } from "react";

/** Editorial section heading: eyebrow, headline, lede. `light` for dark sections. */
export default function SectionHead({
  id,
  eyebrow,
  title,
  lede,
  light = false,
  center = false,
  children,
}: {
  id: string;
  eyebrow: string;
  title: ReactNode;
  lede?: ReactNode;
  light?: boolean;
  center?: boolean;
  children?: ReactNode;
}) {
  return (
    <div className={`pkg-section__head an-head${center ? " asia-head--center" : ""}`}>
      <p className={`asia-eyebrow${light ? " asia-eyebrow--light" : ""}`}>{eyebrow}</p>
      <h2 id={id} className={`pkg-h2 an-h2${light ? " pkg-h2--light" : ""}`}>{title}</h2>
      {lede && <p className={`pkg-lede${light ? " pkg-lede--light" : ""}`}>{lede}</p>}
      {children}
    </div>
  );
}
