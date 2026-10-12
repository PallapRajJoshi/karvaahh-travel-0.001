import Image from "next/image";
import KoshiSectionHeading from "../heading/KoshiSectionHeading";
import { koshiLandscapes } from "@/data/koshi/guide";
import "./koshi-guide.css";

export default function KoshiLandscapes() {
  return (
    <section
      id="lakes-viewpoints"
      className="koshi-guide"
      aria-labelledby="koshi-landscapes-title"
    >
      <div className="koshi-shell">
        <KoshiSectionHeading
          eyebrow="LAKES, WATERFALLS & VIEWPOINTS"
          titleId="koshi-landscapes-title"
          title={
            <>
              Glacial lakes and <em>sunrise ridges.</em>
            </>
          }
          description="Koshi's scenery is not only found at base camp. These lakes, viewpoints and river valleys range from day trips to multi-day treks."
        />

        <figure className="koshi-guide__banner koshi-reveal">
          <Image
            src="/koshi/makalu-barun.jpg"
            alt="Panorama of glaciated peaks and turquoise glacial lakes in the Makalu–Barun region"
            fill
            sizes="(max-width: 1500px) 100vw, 1400px"
            className="koshi-guide__banner-image"
          />
          <figcaption>Glacial lakes beneath the peaks of Makalu–Barun</figcaption>
        </figure>

        <ul className="koshi-guide__grid koshi-guide__grid--4">
          {koshiLandscapes.map((place) => (
            <li key={place.name} className="koshi-guide__card koshi-reveal">
              <span className="koshi-guide__badge">{place.type}</span>
              <h3>{place.name}</h3>
              <p>{place.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
