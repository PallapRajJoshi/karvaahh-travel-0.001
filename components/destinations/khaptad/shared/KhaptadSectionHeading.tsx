import { useKhaptadReveal } from "./useKhaptadReveal";

interface KhaptadSectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export default function KhaptadSectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: KhaptadSectionHeadingProps) {
  const revealRef = useKhaptadReveal<HTMLDivElement>();

  return (
    <div
      ref={revealRef}
      className={`khaptad-reveal khaptad-section-heading khaptad-section-heading--${align}`}
    >
      {eyebrow && <span className="khaptad-page__eyebrow">{eyebrow}</span>}
      <h2 className="khaptad-section-heading__title">{title}</h2>
      {description && <p className="khaptad-section-heading__description">{description}</p>}
    </div>
  );
}
