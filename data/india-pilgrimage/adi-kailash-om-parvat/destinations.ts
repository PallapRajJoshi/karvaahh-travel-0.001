import { images } from "./images";
import type { SacredDestination } from "./types";

/**
 * Sacred sites along the Adi Kailash & Om Parvat yatra.
 *
 * `href` defaults to the most relevant section on this page. When a dedicated
 * destination page exists, point `href` at it — no component changes needed.
 *
 * Location labels are deliberately geographic (valley / river / range) rather
 * than political. See README → "Sensitive geography" before changing them.
 */

export const destinations: SacredDestination[] = [
  {
    id: "adi-kailash",
    name: "Adi Kailash",
    tagline: "Revered as Chhota Kailash",
    location: "Jolingkong, Vyas Valley",
    category: "Sacred Peak",
    description:
      "A snow-crowned peak honoured as an abode of Lord Shiva and Goddess Parvati, and the spiritual heart of the yatra.",
    image: images.siteAdiKailash,
    href: "#adi-kailash",
  },
  {
    id: "om-parvat",
    name: "Om Parvat",
    tagline: "Sacred mountain renowned for its natural ॐ formation",
    location: "Near Nabidhang, upper Kali valley",
    category: "Sacred Peak",
    description:
      "Snow gathers on its face in a pattern resembling the sacred syllable ॐ — visible when snow and weather allow.",
    image: images.siteOmParvat,
    href: "#om-parvat",
  },
  {
    id: "parvati-sarovar",
    name: "Parvati Sarovar",
    tagline: "Sacred lake near Adi Kailash",
    location: "Jolingkong, Vyas Valley",
    category: "Sacred Lake",
    description:
      "A still, high-altitude lake at the foot of Adi Kailash, where pilgrims offer prayers and the peak is often reflected.",
    image: images.siteParvatiSarovar,
    href: "#adi-kailash",
  },
  {
    id: "gauri-kund",
    name: "Gauri Kund",
    tagline: "Sacred Himalayan waterbody",
    location: "Below Adi Kailash, Vyas Valley",
    category: "Sacred Waters",
    description:
      "Glacial waters associated with Goddess Parvati, set beneath the snow slopes near Adi Kailash.",
    image: images.siteGauriKund,
    href: "#adi-kailash",
  },
  {
    id: "jolingkong",
    name: "Jolingkong",
    tagline: "Scenic Himalayan area near Adi Kailash",
    location: "Upper Kuti valley",
    category: "High Valley",
    description:
      "A broad high-altitude valley that serves as the base for darshan of Adi Kailash and visits to the sacred lakes.",
    image: images.siteJolingkong,
    href: "#route",
  },
  {
    id: "nabidhang",
    name: "Nabidhang",
    tagline: "Viewpoint associated with Om Parvat",
    location: "Upper Kali valley",
    category: "Viewpoint",
    description:
      "The open high ground from which pilgrims traditionally view Om Parvat across the valley.",
    image: images.siteNabidhang,
    href: "#om-parvat",
  },
  {
    id: "gunji",
    name: "Gunji",
    tagline: "Traditional Himalayan village and route junction",
    location: "Vyas Valley",
    category: "Himalayan Village",
    description:
      "A village of stone houses where the routes toward Adi Kailash and Om Parvat divide — a natural pause on the journey.",
    image: images.siteGunji,
    href: "#route",
  },
  {
    id: "kalapani-kali-temple",
    name: "Kali Temple, Kalapani",
    tagline: "Sacred site along the Kali River region",
    location: "Kalapani, upper Kali valley",
    category: "Temple",
    description:
      "A revered temple near the source waters associated with the Kali River, visited on the way toward Om Parvat.",
    image: images.siteKalapani,
    href: "#route",
  },
];
