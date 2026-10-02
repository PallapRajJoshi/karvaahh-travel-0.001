export type GalleryImage = {
  id: string;
  src: string;
  alt: string;
  caption: string;
};

/**
 * Cinematic photo gallery. Every src is a placeholder path under the image
 * manifest naming convention described in the README — real, verified
 * Panch Pokhari photography must be sourced and dropped in before launch.
 * Per the brief: never substitute imagery from an unrelated lake or
 * falsely label another destination as Panch Pokhari.
 */
export const galleryImages: GalleryImage[] = [
  {
    id: "lakes-01",
    src: "/images/destinations/panch-pokhari/gallery/five-sacred-lakes-01.jpg",
    alt: "The five sacred alpine lakes of Panch Pokhari",
    caption: "The Five Sacred Lakes",
  },
  {
    id: "jugal-himal-01",
    src: "/images/destinations/panch-pokhari/gallery/jugal-himal-panorama.jpg",
    alt: "Panoramic view of the Jugal Himal range",
    caption: "Jugal Himal Panorama",
  },
  {
    id: "trail-01",
    src: "/images/destinations/panch-pokhari/gallery/mountain-trail.jpg",
    alt: "Mountain trail through alpine meadows",
    caption: "Mountain Trails & Alpine Meadows",
  },
  {
    id: "rhododendron-01",
    src: "/images/destinations/panch-pokhari/gallery/rhododendron-forest.jpg",
    alt: "Rhododendron forest along the trekking route",
    caption: "Rhododendron Forests",
  },
  {
    id: "village-01",
    src: "/images/destinations/panch-pokhari/gallery/mountain-village.jpg",
    alt: "Traditional mountain village along the route",
    caption: "Traditional Mountain Villages",
  },
  {
    id: "camping-01",
    src: "/images/destinations/panch-pokhari/gallery/camping-trekking.jpg",
    alt: "Trekkers camping along the route to Panch Pokhari",
    caption: "Trekking & Camping",
  },
  {
    id: "pilgrimage-01",
    src: "/images/destinations/panch-pokhari/gallery/pilgrimage-scene.jpg",
    alt: "Pilgrims at the sacred lakes during Janai Purnima",
    caption: "Spiritual & Cultural Scenes",
  },
];
