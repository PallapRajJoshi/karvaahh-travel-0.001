/**
 * Lightweight CSS snowfall: a few dozen absolutely positioned dots animated
 * with transform only (GPU-friendly, no JS). Hidden under reduced motion and
 * thinned on small screens in russia.css.
 */
const FLAKES = Array.from({ length: 36 }, (_, i) => {
  // Deterministic pseudo-random spread so server and client markup match.
  const r = (n: number) => ((Math.sin(i * 12.9898 + n * 78.233) * 43758.5453) % 1 + 1) % 1;
  return {
    left: `${(r(1) * 100).toFixed(2)}%`,
    size: 2 + Math.round(r(2) * 3),
    duration: `${(9 + r(3) * 10).toFixed(1)}s`,
    delay: `${(-r(4) * 18).toFixed(1)}s`,
    drift: `${Math.round((r(5) - 0.5) * 60)}px`,
    opacity: (0.35 + r(6) * 0.5).toFixed(2),
  };
});

export default function Snowfall({ className = "" }: { className?: string }) {
  return (
    <div className={`ru-snow ${className}`.trim()} aria-hidden="true">
      {FLAKES.map((f, i) => (
        <span
          key={i}
          style={
            {
              left: f.left,
              width: f.size,
              height: f.size,
              opacity: f.opacity,
              animationDuration: f.duration,
              animationDelay: f.delay,
              "--drift": f.drift,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}
