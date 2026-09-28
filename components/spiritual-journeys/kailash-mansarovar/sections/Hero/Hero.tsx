import "./Hero.css";

export default function Hero() {
  return (
    <div
      style={{
        width: "100%",
        height: "600px",
        background: "black",
      }}
    >
      <video
        controls
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
          display: "block",
        }}
      >
        <source
          src="/videos/spiritual-journeys/kailash-mansarovar/kailash-mansarovar-hero.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
}