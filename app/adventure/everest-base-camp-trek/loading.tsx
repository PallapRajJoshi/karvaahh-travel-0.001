/** Lightweight skeleton shown during client-side navigation to this route. */
export default function Loading() {
  return (
    <div
      role="status"
      aria-live="polite"
      style={{
        minHeight: "100svh",
        display: "grid",
        placeItems: "center",
        background: "linear-gradient(160deg, #123B5D 0%, #2A7F82 100%)",
        color: "#F8F6F0",
        fontFamily: "var(--font-inter, system-ui), sans-serif",
        letterSpacing: "0.2em",
        textTransform: "uppercase",
        fontSize: "0.8rem",
      }}
    >
      Loading Everest Base Camp Trek…
    </div>
  );
}
