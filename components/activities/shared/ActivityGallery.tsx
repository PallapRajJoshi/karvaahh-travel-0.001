import Image from "next/image";
import SectionHeading from "./SectionHeading";
import "./ActivityGallery.css";

export interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
}

interface ActivityGalleryProps {
  heading: string;
  lead?: string;
  images: GalleryImage[];
  id?: string;
  /** "mosaic" gives the first image a double tile; "even" keeps one size. */
  layout?: "mosaic" | "even";
}

export default function ActivityGallery({
  heading,
  lead,
  images,
  id = "gallery",
  layout = "mosaic",
}: ActivityGalleryProps) {
  return (
    <section className="act-gallery" aria-labelledby={id}>
      <SectionHeading title={heading} lead={lead} id={id} />
      <ul className={`act-gallery__grid act-gallery__grid--${layout}`}>
        {images.map((image) => (
          <li className="act-gallery__item" key={image.src}>
            <figure className="act-gallery__figure">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 40rem) 100vw, (max-width: 64rem) 50vw, 33vw"
                className="act-gallery__image"
              />
              {image.caption ? (
                <figcaption className="act-gallery__caption">
                  {image.caption}
                </figcaption>
              ) : null}
            </figure>
          </li>
        ))}
      </ul>
    </section>
  );
}
