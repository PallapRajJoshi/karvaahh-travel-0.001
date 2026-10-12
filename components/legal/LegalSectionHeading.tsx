interface LegalSectionHeadingProps {
  id: string;
  number: string;
  title: string;
}

export function LegalSectionHeading({ id, number, title }: LegalSectionHeadingProps) {
  return (
    <h2 id={`${id}-heading`} className="legal-section__heading">
      <span className="legal-section__number" aria-hidden="true">
        {number}
      </span>
      <span className="legal-section__title">
        <span className="legal-visually-hidden">Section {number}: </span>
        {title}
      </span>
    </h2>
  );
}
