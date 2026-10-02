import type { GalleryItem, ResponsibleItem } from "./types";

/**
 * Twelve gallery slots, one per subject in the brief. Each photo must show the
 * place or activity it is captioned as. Do not substitute lookalike images.
 */
export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "highway",
    caption: "Winding Himalayan highways",
    shape: "wide",
    image: {
      file: "gallery-highway.jpg",
      alt: "A winding highway climbing through a Himalayan valley",
      label: "Winding mountain highway in Nepal.",
    },
  },
  {
    id: "offroad",
    caption: "4x4 off-road adventures",
    shape: "tall",
    image: {
      file: "gallery-offroad.jpg",
      alt: "A four-wheel-drive vehicle on a rugged Himalayan road",
      label: "4x4 on a real mountain road.",
    },
  },
  {
    id: "upper-mustang",
    caption: "Upper Mustang landscapes",
    shape: "square",
    image: {
      file: "gallery-upper-mustang.jpg",
      alt: "Arid landscapes and cliffs of Upper Mustang",
      label: "Upper Mustang terrain.",
    },
  },
  {
    id: "jomsom-muktinath",
    caption: "Jomsom and Muktinath",
    shape: "tall",
    image: {
      file: "gallery-jomsom-muktinath.jpg",
      alt: "Mountain scenery near Jomsom and Muktinath",
      label: "Jomsom or Muktinath.",
    },
  },
  {
    id: "manang",
    caption: "Manang mountain roads",
    shape: "wide",
    image: {
      file: "gallery-manang.jpg",
      alt: "A mountain road in the Manang valley beneath snow peaks",
      label: "Manang road.",
    },
  },
  {
    id: "pokhara",
    caption: "Pokhara scenic routes",
    shape: "square",
    image: {
      file: "gallery-pokhara.jpg",
      alt: "A scenic road around the Pokhara valley with mountains behind",
      label: "Pokhara valley road.",
    },
  },
  {
    id: "ghandruk",
    caption: "Ghandruk village trails",
    shape: "tall",
    image: {
      file: "gallery-ghandruk.jpg",
      alt: "A stone-paved village trail in Ghandruk",
      label: "Ghandruk village path.",
    },
  },
  {
    id: "annapurna",
    caption: "Annapurna trekking landscapes",
    shape: "wide",
    image: {
      file: "gallery-annapurna.jpg",
      alt: "Trekking landscape in the Annapurna region",
      label: "Annapurna trekking scenery.",
    },
  },
  {
    id: "langtang",
    caption: "Langtang Valley",
    shape: "square",
    image: {
      file: "gallery-langtang.jpg",
      alt: "Langtang Valley with peaks and forested slopes",
      label: "Langtang Valley.",
    },
  },
  {
    id: "everest",
    caption: "Everest trekking routes",
    shape: "tall",
    image: {
      file: "gallery-everest.jpg",
      alt: "A trekking route in the Everest region",
      label: "Everest region trail.",
    },
  },
  {
    id: "motorcycle",
    caption: "Motorcycle journeys",
    shape: "wide",
    image: {
      file: "gallery-motorcycle.jpg",
      alt: "A motorcycle journey along a mountain road in Nepal",
      label: "Motorcycle on a real Nepal road.",
    },
  },
  {
    id: "mountain-biking",
    caption: "Mountain biking and countryside exploration",
    shape: "square",
    image: {
      file: "gallery-mountain-biking.jpg",
      alt: "Cyclists exploring countryside trails in Nepal",
      label: "MTB or countryside cycling in Nepal.",
    },
  },
];

export const RESPONSIBLE_ITEMS: ResponsibleItem[] = [
  { text: "Respect local communities, traditions, and cultural sites.", icon: "culture" },
  { text: "Follow designated routes and local travel guidance.", icon: "route" },
  { text: "Avoid littering and minimize environmental impact.", icon: "trash" },
  { text: "Respect wildlife and natural habitats.", icon: "paw" },
  { text: "Use appropriate vehicles and follow road safety practices.", icon: "jeep" },
  { text: "Follow trekking guidelines and altitude precautions.", icon: "altitude" },
  {
    text: "Support local businesses and community-led experiences where possible.",
    icon: "store",
  },
  { text: "Follow applicable permit and entry requirements.", icon: "doc" },
];
