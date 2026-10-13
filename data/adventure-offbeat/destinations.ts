/* ============================================================
   NEPAL ADVENTURE & OFFBEAT TOURS — DESTINATIONS
   ------------------------------------------------------------
   Facts (altitude, difficulty, access) are taken from each
   destination's own page on this site. Destinations without a
   dedicated page link to their province guide, and the CTA label
   says so. Nar Phu, Narchyang and similar places are left out
   until the site has content for them.
   ============================================================ */

import * as I from "./images";
import type { OffbeatDestination } from "./types";

type Input = Omit<OffbeatDestination, "active"> & Partial<Pick<OffbeatDestination, "active">>;
const d = (input: Input): OffbeatDestination => ({ active: true, ...input });

const GANDAKI = "/destinations/gandaki-province";
const LUMBINI = "/destinations/lumbini-province";
const KOSHI = "/destinations/koshi-province";

export const DESTINATIONS: OffbeatDestination[] = [
  /* ---------- Remote lakes & wilderness ---------- */
  d({
    id: "rara-lake",
    name: "Rara Lake",
    location: "Mugu · Karnali Province",
    description:
      "Nepal's largest freshwater lake sits inside Rara National Park, ringed by pine and juniper forest. Walk the lakeshore trails, climb Murma Top for a view over the water, and spend quiet evenings far from the main tourist routes.",
    experiences: ["offbeat", "nature-lakes", "camping", "road-trips"],
    image: I.rara,
    altitude: "≈ 2,990 m",
    access: "Flight to Talcha Airport, or overland via the Karnali Highway",
    href: "/offbeat-unexplored/rara-lake",
    linkLabel: "Explore Rara Lake",
    featured: true,
  }),
  d({
    id: "shey-phoksundo",
    name: "Shey Phoksundo Lake",
    location: "Dolpo · Karnali Province",
    description:
      "A deep turquoise lake below rugged cliffs in Shey Phoksundo National Park, with the Bon village of Ringmo on its shore. Beyond lie the high valleys of Dolpo, its monasteries, and the habitat of blue sheep and snow leopard.",
    experiences: ["offbeat", "nature-lakes", "remote-treks", "camping", "culture"],
    image: I.upperDolpo,
    access: "Flight via Nepalgunj to Juphal, then on foot",
    href: "/offbeat-unexplored/shey-phoksundo",
    linkLabel: "Explore Shey Phoksundo",
    featured: true,
  }),
  d({
    id: "tsho-rolpa",
    name: "Tsho Rolpa Lake",
    location: "Rolwaling · Dolakha",
    description:
      "One of Nepal's largest glacial lakes, set high in the Rolwaling Valley below Gaurishankar's neighbouring peaks. The approach passes Sherpa settlements such as Beding and Na through a valley that sees far fewer trekkers than Everest next door.",
    experiences: ["offbeat", "nature-lakes", "remote-treks", "adventure"],
    image: I.tshoRolpa,
    altitude: "≈ 4,580 m",
    access: "Road to Dolakha, then a multi-day trek",
    href: "/offbeat-unexplored/tsho-rolpa-lake",
    linkLabel: "Explore Tsho Rolpa",
  }),
  d({
    id: "panch-pokhari",
    name: "Panch Pokhari",
    location: "Sindhupalchok · Bagmati Province",
    description:
      "Five sacred high-altitude lakes reached through rhododendron forest and Tamang and Sherpa villages, surprisingly close to Kathmandu. It suits trekkers who want a quiet route with both mountain scenery and spiritual significance.",
    experiences: ["offbeat", "nature-lakes", "remote-treks", "camping"],
    image: I.panchPokhari,
    altitude: "≈ 4,100 m",
    access: "Road from Kathmandu to Sindhupalchok, then trek",
    href: "/offbeat-unexplored/panch-pokhari",
    linkLabel: "Explore Panch Pokhari",
  }),
  d({
    id: "khaptad",
    name: "Khaptad National Park",
    location: "Bajhang · Bajura · Doti · Achham",
    description:
      "Rolling high meadows called patans, oak and rhododendron forest, and the ashram of Khaptad Baba give this far-western park a calm, contemplative feel. It is a slow, nature-focused journey rather than a summit-driven one.",
    experiences: ["offbeat", "nature-lakes", "culture"],
    image: I.khaptad,
    altitude: "≈ 1,400–3,300 m",
    access: "Via Dhangadhi, Dipayal or Silgadhi, then road and trek",
    href: "/offbeat-unexplored/khaptad-national-park",
    linkLabel: "Explore Khaptad",
  }),
  d({
    id: "dhorpatan",
    name: "Dhorpatan Hunting Reserve",
    location: "Baglung · Myagdi · Rukum East",
    description:
      "Nepal's only hunting reserve protects wide alpine meadows and forest in the Dhaulagiri region, with Magar and Tibetan-influenced villages at its edges. It rewards travellers looking for genuine wilderness and open highland walking.",
    experiences: ["offbeat", "nature-lakes", "remote-treks", "camping", "culture"],
    image: I.dhorpatan,
    access: "Road via Baglung, then trek",
    href: "/offbeat-unexplored/dhorpatan-hunting-reserve",
    linkLabel: "Explore Dhorpatan",
  }),

  /* ---------- Mountain adventures ---------- */
  d({
    id: "mustang",
    name: "Upper & Lower Mustang",
    location: "Mustang · Gandaki Province",
    description:
      "A high-altitude desert of red cliffs, sky caves and ancient monasteries, from the apple orchards of Marpha to the walled city of Lo Manthang. Explore it on foot, by road or a mix of both.",
    experiences: ["offbeat", "adventure", "remote-treks", "road-trips", "culture", "camping"],
    image: I.loManthang,
    difficulty: "Moderate",
    access: "Pokhara to Jomsom by flight or road, then trek or drive",
    href: "/adventure/mustang-circuit-trek",
    linkLabel: "Explore Mustang Circuit",
    featured: true,
  }),
  d({
    id: "tsum-valley",
    name: "Tsum Valley",
    location: "Manaslu region · Gorkha",
    description:
      "A sacred Himalayan valley of mani walls, chortens and monasteries such as Mu Gompa, tucked into the Manaslu region. Long days on rough trails lead into a culture that has changed slowly.",
    experiences: ["offbeat", "remote-treks", "culture"],
    image: I.manaslu,
    difficulty: "Moderate",
    access: "Road to the trailhead, then a multi-day trek",
    href: "/adventure/tsum-valley-trek",
    linkLabel: "Explore Tsum Valley",
  }),
  d({
    id: "api-nampa",
    name: "Api Nampa Base Camp",
    location: "Darchula · Sudurpashchim",
    description:
      "A wild trek in the Api Nampa Conservation Area to a base camp below Mount Api (7,132 m), in Nepal's far north-west corner. Villages are few and supplies limited, so it suits experienced trekkers. Check current access before planning.",
    experiences: ["offbeat", "adventure", "remote-treks"],
    image: I.apiNampa,
    altitude: "≈ 3,900–4,100 m",
    difficulty: "Challenging",
    access: "Road to Darchula, then trek; conditions vary",
    href: "/adventure/api-nampa-base-camp-trek",
    linkLabel: "Explore Api Nampa",
  }),
  d({
    id: "saipal",
    name: "Saipal Base Camp",
    location: "Bajhang · Sudurpashchim",
    description:
      "A remote expedition-style trek beneath Mount Saipal (7,031 m) through the little-visited valleys of Bajhang. It is suited to experienced trekkers looking for a true wilderness approach.",
    experiences: ["offbeat", "adventure", "remote-treks", "camping"],
    image: I.saipal,
    access: "Overland to Bajhang, then a multi-day trek",
    href: "/offbeat-unexplored/saipal-base-camp",
    linkLabel: "Explore Saipal",
  }),
  d({
    id: "manang",
    name: "Manang & Tilicho Lake",
    location: "Manang · Gandaki Province",
    description:
      "Cross the Thorong La after a detour to Tilicho Lake, one of the highest lakes in the world. Old stone villages and a dramatic mountain wall make Manang one of the great high-altitude journeys.",
    experiences: ["adventure", "nature-lakes", "camping", "road-trips"],
    image: I.manang,
    altitude: "Up to 5,416 m (Thorong La)",
    difficulty: "Challenging",
    access: "Road from Kathmandu to the trailhead",
    href: "/packages/manang-circuit-trek",
    linkLabel: "View Manang Circuit",
  }),
  d({
    id: "kanchenjunga",
    name: "Kanchenjunga Region",
    location: "Taplejung · Koshi Province",
    description:
      "Remote trails lead to the north and south base camps of Kanchenjunga, the world's third-highest mountain, through Limbu and Sherpa villages. Restricted-area permits and a registered guide are required.",
    experiences: ["offbeat", "adventure", "remote-treks"],
    image: I.kanchenjunga,
    access: "Flight or road to eastern Nepal, then a long trek",
    href: KOSHI,
    linkLabel: "Explore Koshi Province",
  }),
  d({
    id: "makalu",
    name: "Makalu–Barun",
    location: "Sankhuwasabha · Koshi Province",
    description:
      "A protected wilderness rising from subtropical forest to the foot of Makalu, the world's fifth-highest peak. Its isolated valleys hold exceptional biodiversity and a demanding base camp trek.",
    experiences: ["offbeat", "adventure", "remote-treks", "nature-lakes"],
    image: I.makaluBarun,
    access: "Road or flight to eastern Nepal, then a long trek",
    href: KOSHI,
    linkLabel: "Explore Koshi Province",
  }),

  /* ---------- Offbeat villages & scenic landscapes ---------- */
  d({
    id: "kagbeni-marpha",
    name: "Kagbeni & Marpha",
    location: "Lower Mustang · Gandaki Province",
    description:
      "Kagbeni's mud-brick lanes guard the gateway to Upper Mustang, while Marpha is known for whitewashed houses and apple orchards. Both sit along the Kali Gandaki, an easy stop on any Mustang road trip.",
    experiences: ["culture", "road-trips"],
    image: I.kagbeni,
    access: "Road or flight to Jomsom, then a short drive",
    href: "/adventure/mustang-circuit-trek",
    linkLabel: "Explore Mustang Circuit",
  }),
  d({
    id: "ghandruk",
    name: "Ghandruk",
    location: "Kaski · Gandaki Province",
    description:
      "A Gurung village of stone houses and terraced fields facing Annapurna South and Machhapuchhre. It works as a gentle hike or road trip from Pokhara, with homestays and village walks.",
    experiences: ["culture", "camping", "road-trips"],
    image: I.ghandruk,
    access: "Road from Pokhara, then a short walk",
    href: GANDAKI,
    linkLabel: "Explore Gandaki Province",
  }),
  d({
    id: "ghale-gaun",
    name: "Ghale Gaun",
    location: "Lamjung · Gandaki Province",
    description:
      "A hilltop Gurung community known for its homestay culture, stone houses and views of Lamjung Himal. It is a relaxed introduction to hill-village life and a quiet place to camp.",
    experiences: ["offbeat", "culture", "camping"],
    image: I.ghaleGaun,
    access: "Road via Besisahar",
    href: GANDAKI,
    linkLabel: "Explore Gandaki Province",
  }),
  d({
    id: "sirubari",
    name: "Sirubari",
    location: "Syangja · Gandaki Province",
    description:
      "A Gurung village on terraced hills in Syangja, known for community homestays. Guests stay with local families and share everyday village life, away from the trekking trails.",
    experiences: ["offbeat", "culture"],
    image: I.sirubari,
    access: "Road from Pokhara",
    href: GANDAKI,
    linkLabel: "Explore Gandaki Province",
  }),
  d({
    id: "bandipur",
    name: "Bandipur",
    location: "Tanahun · Gandaki Province",
    description:
      "A preserved Newar trading town on a ridge between Kathmandu and Pokhara, with a car-free bazaar and wide Himalayan views. It is a natural overnight stop on a mid-hills road trip.",
    experiences: ["culture", "road-trips"],
    image: I.bandipur,
    access: "Road, just off the Kathmandu–Pokhara highway",
    href: GANDAKI,
    linkLabel: "Explore Gandaki Province",
  }),
  d({
    id: "tansen",
    name: "Tansen & Rani Mahal",
    location: "Palpa · Lumbini Province",
    description:
      "Tansen is a hill town of red-tiled roofs and Newar heritage, and Rani Mahal is the riverside palace often called Nepal's 'Taj Mahal' on the Kali Gandaki. Together they make a rewarding detour between Pokhara and Lumbini.",
    experiences: ["culture", "road-trips"],
    image: I.tansen,
    access: "Road via the Siddhartha Highway",
    href: LUMBINI,
    linkLabel: "Explore Lumbini Province",
  }),
  d({
    id: "rolpa",
    name: "Jaljala & Thawang",
    location: "Rolpa · Lumbini Province",
    description:
      "Jaljala is a high alpine pasture with wide Himalayan panoramas, and nearby Thawang is a remote Magar village known for its highland traditions. Both lie well off the usual circuits.",
    experiences: ["offbeat", "culture", "nature-lakes"],
    image: I.jaljala,
    access: "Long road journey into Rolpa district",
    href: LUMBINI,
    linkLabel: "Explore Lumbini Province",
  }),
];

export const activeDestinations = () => DESTINATIONS.filter((x) => x.active);
