import type { TourPackage } from "../types";
import { images } from "./images";

/**
 * Featured Nepal packages.
 *
 * ⚠ Business rules:
 *  - `price` stays `null` until a verified figure exists. The card then shows
 *    "Request a Quote". When you add a price, fill in `verifiedOn` (YYYY-MM-DD).
 *    It's shown to visitors as "Indicative · verified <date> · subject to confirmation".
 *  - `duration` is indicative. The card labels it that way.
 *  - `highlights` describe the route, not confirmed inclusions (no "meals
 *    included", "flights included" etc. until contracts confirm them).
 *  - `href` is set only when a real package page exists. Without it, the
 *    card's button opens the enquiry form pre-filled with this package, so
 *    no card ever links to a 404.
 */
export const tourPackages: TourPackage[] = [
  {
    id: "kathmandu-pokhara-spiritual-escape",
    title: "Kathmandu & Pokhara Spiritual Escape",
    category: "Spiritual & Scenic",
    description:
      "Kathmandu’s great temples and stupas, then lakeside calm and Himalayan sunrises in Pokhara.",
    duration: "5–7 days",
    price: null,
    highlights: ["Pashupatinath aarti", "Boudhanath & Swayambhunath", "Sarangkot sunrise"],
    image: images.packages.kathmanduPokhara,
  },
  {
    id: "muktinath-mustang-pilgrimage",
    title: "Muktinath & Mustang Pilgrimage",
    category: "Hindu Pilgrimage",
    description:
      "Journey up the Kali Gandaki valley for darshan at Muktinath, with time in Jomsom and Kagbeni.",
    duration: "6–9 days",
    price: null,
    highlights: ["Muktinath darshan", "Kali Gandaki gorge", "Kagbeni village"],
    image: images.packages.muktinathMustang,
    featured: true,
  },
  {
    id: "nepal-buddhist-heritage-tour",
    title: "Nepal Buddhist Heritage Tour",
    category: "Buddhist Heritage",
    description:
      "Follow the Buddha’s story from the stupas of Kathmandu to his birthplace at Lumbini.",
    duration: "6–8 days",
    price: null,
    highlights: ["Lumbini & Maya Devi Temple", "Kathmandu monasteries", "Namo Buddha"],
    image: images.packages.buddhistHeritage,
  },
  {
    id: "nepal-spiritual-himalayan-adventure",
    title: "Nepal Spiritual & Himalayan Adventure",
    category: "Spiritual + Trek",
    description:
      "Sacred sites in the valley paired with a short Himalayan trek. The best of both worlds.",
    duration: "10–14 days",
    price: null,
    highlights: ["Kathmandu heritage", "Mardi Himal or Poon Hill trek", "Pokhara"],
    image: images.packages.spiritualHimalayan,
  },
  {
    id: "kathmandu-pokhara-lumbini-tour",
    title: "Kathmandu, Pokhara & Lumbini Tour",
    category: "Classic Nepal",
    description:
      "Nepal’s essential triangle: heritage cities, the lakes and mountains, and the Buddha’s birthplace.",
    duration: "7–9 days",
    price: null,
    highlights: ["UNESCO heritage sites", "Phewa Lake", "Lumbini monastic zone"],
    image: images.packages.kathmanduPokharaLumbini,
  },
  {
    id: "customized-nepal-tour",
    title: "Customized Nepal Tour",
    category: "Tailor-made",
    description:
      "Tell us what calls you: temples, treks, wildlife or slow travel. We’ll design the journey around it.",
    duration: "Your dates",
    price: null,
    highlights: ["Your pace & interests", "Private guide & vehicle", "Any season"],
    image: images.packages.customized,
  },
];
