/**
 * Sacred destinations — one card each.
 *
 * `href` points to an in-page anchor until dedicated destination pages
 * exist. When you publish e.g. /destinations/tibet/mount-kailash, swap the
 * href here; the card component needs no change.
 */
import type { SacredDestination } from "../types";
import { IMG } from "./content";

const D = `${IMG}/sacred-sites`;

export const sacredDestinations: SacredDestination[] = [
  {
    id: "mount-kailash",
    name: "Mount Kailash",
    tagline: "Sacred Mountain of the Tibetan Himalayas",
    location: "Ngari, western Tibet",
    category: "Sacred Mountain",
    description:
      "A solitary, snow-capped peak revered across four traditions. It has never been climbed — pilgrims honour it by walking around it rather than ascending it.",
    image: { src: `${D}/mount-kailash.jpg`, alt: "Mount Kailash's snow-covered summit above brown Tibetan hills" },
    href: "#significance",
    linkLabel: "Why it is sacred",
  },
  {
    id: "lake-mansarovar",
    name: "Lake Mansarovar",
    tagline: "Sacred High-Altitude Lake",
    location: "South of Mount Kailash",
    category: "Sacred Lake",
    description:
      "A vast freshwater lake at the foot of Gurla Mandhata, a place for prayer, puja and quiet reflection, with Kailash visible across the water on clear days.",
    image: { src: `${D}/lake-mansarovar.jpg`, alt: "Deep blue Lake Mansarovar with snow peaks on the horizon" },
    href: "#mansarovar",
    linkLabel: "The lake experience",
  },
  {
    id: "darchen",
    name: "Darchen",
    tagline: "Traditional Starting Point of the Parikrama",
    location: "Southern foot of Mount Kailash",
    category: "Pilgrim Base",
    description:
      "The small pilgrim town where the Kora begins and ends — the place to rest, acclimatise and organise porters or ponies before the walk.",
    image: { src: `${D}/darchen.jpg`, alt: "Low buildings of Darchen town beneath the slopes of Kailash" },
    href: "#parikrama",
    linkLabel: "See the Parikrama",
  },
  {
    id: "yam-dwar",
    name: "Yam Dwar",
    tagline: "Gateway to the Sacred Kora",
    location: "West of Darchen, Lha Chu valley entrance",
    category: "Kora Landmark",
    description:
      "Known as the 'Gate of Yama', this is where most pilgrims begin walking. Nearby Tarboche, with its great prayer-flag pole, marks the entrance to the valley.",
    image: { src: `${D}/yam-dwar.jpg`, alt: "Prayer flags streaming from the Tarboche pole near Yam Dwar" },
    href: "#stage-day-1",
    linkLabel: "Day 1 of the Kora",
  },
  {
    id: "dirapuk",
    name: "Dirapuk Monastery",
    tagline: "A Sacred Stop on the Northern Kora",
    location: "Upper Lha Chu valley",
    category: "Monastery",
    description:
      "A small monastery facing the sheer north face of Kailash — for many pilgrims the most striking view of the mountain on the entire journey.",
    image: { src: `${D}/dirapuk-monastery.jpg`, alt: "Dirapuk Monastery on a hillside facing the north face of Kailash" },
    href: "#stage-day-1",
    linkLabel: "Day 1 of the Kora",
  },
  {
    id: "zuthulpuk",
    name: "Zuthulpuk Monastery",
    tagline: "A Spiritual Landmark on the Parikrama",
    location: "Eastern valley of the Kora",
    category: "Monastery",
    description:
      "Built around a cave associated with the yogi-poet Milarepa, this quiet monastery is the overnight stop after the long descent from Dolma La.",
    image: { src: `${D}/zuthulpuk-monastery.jpg`, alt: "Zuthulpuk Monastery in a stony valley on the eastern Kora" },
    href: "#stage-day-2",
    linkLabel: "Day 2 of the Kora",
  },
  {
    id: "rakshas-tal",
    name: "Rakshas Tal",
    tagline: "A Dramatic High-Altitude Lake",
    location: "West of Lake Mansarovar",
    category: "Sacred Lake",
    description:
      "Mansarovar's saline twin, linked in Hindu tradition with Ravana. Its dark, wind-swept waters are a striking contrast to the calm of Mansarovar.",
    image: { src: `${D}/rakshas-tal.jpg`, alt: "Rakshas Tal's dark water edged by barren hills" },
    href: "#mansarovar",
    linkLabel: "Explore the lakes",
  },
  {
    id: "dolma-la",
    name: "Dolma La Pass",
    tagline: "The Highest Point of the Kora",
    location: "North-east of Mount Kailash",
    category: "High Pass",
    description:
      "Named after the goddess Tara (Dolma), the pass is draped in prayer flags. Just below lies Gauri Kund, a small emerald lake held sacred by pilgrims.",
    image: { src: `${D}/dolma-la-pass.jpg`, alt: "Prayer flags covering the rocky crest of Dolma La pass" },
    href: "#stage-day-2",
    linkLabel: "Day 2 of the Kora",
  },
];
