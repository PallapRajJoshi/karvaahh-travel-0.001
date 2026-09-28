/**
 * Hero + overview copy.
 */
import { ctas } from "../config";
import type { HeroContent, OverviewContent } from "../types";

export const IMG = "/images/destinations/kailash-mansarovar";

export const hero: HeroContent = {
  eyebrow: "Sacred Himalayan Pilgrimage",
  title: "Kailash Mansarovar Yatra",
  subtitle: "A Sacred Journey to the Divine Abode of Lord Shiva",
  supporting:
    "Discover the spiritual power of Mount Kailash, the serenity of Lake Mansarovar, and the timeless beauty of the Tibetan Himalayas.",
  image: {
    src: `${IMG}/hero/mount-kailash-south-face.jpg`,
    alt: "Snow-covered Mount Kailash rising above the high Tibetan plateau under a clear sky",
    position: "50% 35%",
  },
  primaryCta: ctas.explorePackages,
  secondaryCta: ctas.customize,
  // Widely published approximations — re-check each season.
  facts: [
    { label: "Mount Kailash", value: "≈ 6,638 m" },
    { label: "Lake Mansarovar", value: "≈ 4,590 m" },
    { label: "Parikrama", value: "3 days · ≈ 52 km" },
    { label: "Season", value: "Typically May – Sep" },
  ],
};

export const overview: OverviewContent = {
  eyebrow: "The Yatra",
  heading: "A Sacred Journey Beyond the Ordinary",
  body:
    "Kailash Mansarovar Yatra is a spiritually profound pilgrimage to the sacred Mount Kailash and the pristine Lake Mansarovar in the remote Tibetan Himalayas, revered by Hindus, Buddhists, Jains, and followers of the Bon tradition. Embark on a transformative journey to the divine abode of Lord Shiva, surrounded by majestic snow-covered peaks, breathtaking high-altitude landscapes, and deep spiritual significance. Experience the sacred darshan of Mount Kailash, holy rituals and prayers at Lake Mansarovar, and the spiritually enriching Kailash Parikrama (Kora) for a truly unforgettable pilgrimage. With customized travel options, including overland routes and helicopter-assisted journeys, the yatra combines devotion, Himalayan adventure, cultural discovery, and serene moments of reflection, creating a once-in-a-lifetime spiritual experience.",
  highlights: [
    "Darshan of Mount Kailash",
    "Prayers at Lake Mansarovar",
    "Three-day Kailash Parikrama",
    "Overland or helicopter-assisted",
  ],
  primaryImage: {
    src: `${IMG}/hero/mount-kailash-north-face.jpg`,
    alt: "The north face of Mount Kailash seen from the Dirapuk valley",
  },
  secondaryImage: {
    src: `${IMG}/mansarovar/lake-mansarovar-shore.jpg`,
    alt: "Still blue water of Lake Mansarovar with prayer flags on the shore",
  },
  cta: ctas.explorePackages,
};
