import { numbers } from "./data/zipFlyingData";

/* Each figure gets a diagram that reads in its own dimension:
   length runs horizontally, the drop runs vertically, speed is a dial. */
function Glyph({ kind }: { kind: number }) {
  if (kind === 0)
    return (
      <svg viewBox="0 0 160 40" className="zf-nums__glyph" aria-hidden="true">
        <line x1="4" y1="20" x2="156" y2="20" />
        <line x1="4" y1="10" x2="4" y2="30" />
        <line x1="156" y1="10" x2="156" y2="30" />
      </svg>
    );
  if (kind === 1)
    return (
      <svg viewBox="0 0 160 40" className="zf-nums__glyph" aria-hidden="true">
        <polyline points="4,4 156,36" />
        <line x1="156" y1="4" x2="156" y2="36" strokeDasharray="3 4" />
      </svg>
    );
  return (
    <svg viewBox="0 0 160 40" className="zf-nums__glyph" aria-hidden="true">
      <path d="M44 38 A36 36 0 0 1 116 38" />
      <line x1="80" y1="38" x2="108" y2="14" className="zf-nums__needle" />
    </svg>
  );
}

export default function NumbersSection() {
  return (
    <section className="zf-sec zf-nums" aria-labelledby="zf-nums-title">
      <div className="zf-wrap">
        <header className="zf-head">
          <h2 id="zf-nums-title" className="zf-h2">{numbers.heading}</h2>
          <p className="zf-lead">{numbers.text}</p>
        </header>
        <ul className="zf-nums__grid">
          {numbers.items.map((n, i) => (
            <li key={n.unit} className="zf-nums__card">
              <Glyph kind={i} />
              <p className="zf-nums__value">
                {n.value}
                <span> {n.unit}</span>
              </p>
              <p className="zf-nums__text">{n.text}</p>
            </li>
          ))}
        </ul>
        <p className="zf-note">{numbers.note}</p>
      </div>
    </section>
  );
}
