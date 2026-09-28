import type { SacredDestination } from "../types";
import { images } from "./images";

/**
 * Sacred destinations. Order here = order on the page.
 *
 * Links point to the existing province pages. When a dedicated page exists
 * (e.g. a Muktinath yatra), point `link.href` at it instead.
 * ⚠ Province slugs are assumed. Verify them against the live routes (see README).
 */
const province = {
  bagmati: "/destinations/bagmati-province",
  gandaki: "/destinations/gandaki-province",
  madhesh: "/destinations/madhesh-province",
  lumbini: "/destinations/lumbini-province",
} as const;

const explore = (name: string, href: string) => ({
  label: "Explore Destination",
  href,
  ariaLabel: `Explore ${name}`,
});

export const sacredDestinations: SacredDestination[] = [
  {
    id: "pashupatinath",
    name: "Pashupatinath Temple",
    location: "Kathmandu",
    category: "Hindu Pilgrimage",
    description:
      "Nepal’s most revered Shiva temple, on the banks of the Bagmati. Evening aarti at the ghats is unforgettable. The inner temple courtyard is open to Hindu devotees only.",
    image: images.spiritual.pashupatinath,
    link: explore("Pashupatinath Temple", province.bagmati),
  },
  {
    id: "muktinath",
    name: "Muktinath Temple",
    location: "Mustang",
    category: "Hindu & Buddhist",
    description:
      "A high-altitude shrine at around 3,700 m, sacred to Hindus and Buddhists alike, known for its 108 water spouts and natural eternal flame.",
    image: images.spiritual.muktinath,
    link: explore("Muktinath Temple", province.gandaki),
  },
  {
    id: "janaki-mandir",
    name: "Janaki Mandir",
    location: "Janakpur",
    category: "Hindu Pilgrimage",
    description:
      "A graceful early-20th-century palace temple honouring Goddess Sita in her birthplace, and the heart of the Vivah Panchami celebrations.",
    image: images.spiritual.janakiMandir,
    link: explore("Janaki Mandir", province.madhesh),
  },
  {
    id: "lumbini",
    name: "Lumbini",
    location: "Birthplace of Gautama Buddha",
    category: "Buddhist Heritage",
    description:
      "A UNESCO World Heritage Site with the Maya Devi Temple, the Ashoka Pillar and a monastic zone of temples built by Buddhist nations from around the world.",
    image: images.spiritual.lumbini,
    link: explore("Lumbini", province.lumbini),
  },
  {
    id: "gosainkunda",
    name: "Gosainkunda Lake",
    location: "Langtang Region",
    category: "Sacred Lake",
    description:
      "An alpine lake at about 4,380 m, sacred to Lord Shiva. Thousands of pilgrims trek here for the Janai Purnima festival.",
    image: images.spiritual.gosainkunda,
    link: explore("Gosainkunda Lake", province.bagmati),
  },
  {
    id: "swayambhunath",
    name: "Swayambhunath Stupa",
    location: "Kathmandu",
    category: "Buddhist Heritage",
    description:
      "An ancient hilltop stupa with the Buddha’s painted eyes gazing over the valley, shared by Buddhist and Hindu shrines alike.",
    image: images.spiritual.swayambhunath,
    link: explore("Swayambhunath Stupa", province.bagmati),
  },
  {
    id: "boudhanath",
    name: "Boudhanath Stupa",
    location: "Kathmandu",
    category: "Buddhist Heritage",
    description:
      "One of the largest stupas in the world and a centre of Tibetan Buddhist life, ringed by monasteries, butter lamps and pilgrims walking the kora.",
    image: images.spiritual.boudhanath,
    link: explore("Boudhanath Stupa", province.bagmati),
  },
  {
    id: "manakamana",
    name: "Manakamana Temple",
    location: "Gorkha",
    category: "Hindu Pilgrimage",
    description:
      "A hilltop shrine to Goddess Bhagwati, believed to fulfil heartfelt wishes, reached by a scenic cable car ride above the Trishuli valley.",
    image: images.spiritual.manakamana,
    link: explore("Manakamana Temple", province.gandaki),
  },
];
