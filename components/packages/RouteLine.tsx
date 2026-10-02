/** Compact visual route summary (not the full itinerary). Horizontal + scrollable, dots joined by a line. */
export default function RouteLine({ stops, label = "Route" }: { stops: string[]; label?: string }) {
  if (stops.length < 2) return null;
  return (
    <ol className="pkg-route" aria-label={label}>
      {stops.map((s, i) => (
        <li key={`${s}-${i}`} className="pkg-route__stop">
          <span className="pkg-route__dot" aria-hidden="true" />
          <span className="pkg-route__name">{s}</span>
        </li>
      ))}
    </ol>
  );
}
