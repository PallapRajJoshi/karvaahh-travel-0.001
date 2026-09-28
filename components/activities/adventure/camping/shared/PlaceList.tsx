type Props = { places: string[]; tone?: "dark" | "light"; label?: string };

/** Semantic list of place names rendered as inline chips. */
export default function PlaceList({ places, tone = "dark", label }: Props) {
  return (
    <ul className={`cmp-places cmp-places--${tone}`} aria-label={label}>
      {places.map((p, i) => (
        <li key={p} className="cmp-places__item" data-reveal style={{ ["--d" as string]: `${Math.min(i, 14) * 30}ms` }}>
          {p}
        </li>
      ))}
    </ul>
  );
}
