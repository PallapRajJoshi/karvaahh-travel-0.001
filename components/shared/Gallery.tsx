import SafeImage from "./SafeImage";
import "./shared-cards.css";

/** Responsive photo grid (2 columns on mobile); missing photos show a labelled placeholder. */
export default function Gallery({ images }: { images: { src: string; alt: string }[] }) {
  return (
    <ul className="photo-grid">
      {images.map((img, i) => (
        <li key={img.src} className={`photo-grid__item ${i % 5 === 0 ? "photo-grid__item--wide" : ""}`.trim()}>
          <SafeImage src={img.src} alt={img.alt} fill sizes="(min-width: 1024px) 33vw, 50vw" className="photo-grid__img" />
        </li>
      ))}
    </ul>
  );
}
