/**
 * Tsum Valley Trek — centralized, configurable page content.
 *
 * EDITORIAL RULES
 * - Figures marked `approximate: true` or carried in `elevationM` are commonly
 *   published values, NOT operator-verified. Confirm before publication and then
 *   set `CONTENT_STATUS.figuresVerified = true` to drop the "approx." markers.
 * - Permit names, fees, guide rules and group-size rules change. Nothing here
 *   hardcodes a fee. Update `TRAVEL_INFO` and `CONTENT_STATUS.regulationsReviewedOn`
 *   whenever you re-check with the Nepal Tourism Board / Department of Immigration.
 * - `PACKAGES` is intentionally empty until real package data exists. With an
 *   empty array the page shows the "Request a Customized Trek Package" panel.
 */

import type {
  TsumExperience,
  TsumFaq,
  TsumHighlight,
  TsumImage,
  TsumInfoCard,
  TsumItineraryDay,
  TsumLink,
  TsumNatureFeature,
  TsumPackage,
  TsumPrepItem,
  TsumRelatedLink,
  TsumSeason,
  TsumTripFact,
  TsumVillage,
} from "./types";

const IMG = "/images/destinations/tsum-valley";

/* -------------------------------------------------------------------------- */
/* Page-level configuration                                                   */
/* -------------------------------------------------------------------------- */

export const CONTENT_STATUS = {
  /** Flip to true once elevations / durations are confirmed with the ground operator. */
  figuresVerified: false,
  /** Date the permit & guide rules below were last reviewed (ISO). */
  regulationsReviewedOn: "2026-09-27",
};

export const PAGE = {
  slug: "tsum-valley-trek",
  path: "/adventure/tsum-valley-trek",
  siteUrl: "https://karvaahh.in",
  seoTitle: "Tsum Valley Trek, Nepal | Himalayan Cultural Adventure with Karvaahh",
  metaDescription:
    "Explore the Tsum Valley Trek in Nepal with Karvaahh. Discover sacred Buddhist monasteries, traditional Himalayan villages, remote mountain landscapes, and authentic cultural experiences in the Manaslu region.",
  ogImage: `${IMG}/hero/tsum-valley-hero.webp`,
};

/** Every CTA target lives here so dead links can be fixed in one place. */
export const ROUTES = {
  home: "/",
  adventure: "/activities/adventure", // VERIFY: brief says "Adventure"; live activity hub is assumed at /activities/adventure
  contact: "/contact", // VERIFY: confirm the live contact route
  customize: "/contact?enquiry=tsum-valley-trek", // VERIFY: pre-fills the enquiry if your form reads ?enquiry=
  packagesAnchor: "#packages",
  discoverAnchor: "#overview",
};

export const BREADCRUMBS: TsumLink[] = [
  { label: "Home", href: ROUTES.home },
  { label: "Adventure", href: ROUTES.adventure },
  { label: "Tsum Valley Trek", href: PAGE.path },
];

/* -------------------------------------------------------------------------- */
/* Hero                                                                       */
/* -------------------------------------------------------------------------- */

export const HERO = {
  eyebrow: ["Nepal", "Manaslu Region", "Cultural Himalayan Trek"],
  title: "Tsum Valley Trek",
  subtitle: "Journey into the Sacred Hidden Valley of the Himalayas",
  text: "Discover remote Himalayan villages, ancient Buddhist monasteries, sacred landscapes, and authentic Tibetan-influenced culture in Nepal's peaceful Tsum Valley.",
  image: {
    src: `${IMG}/hero/tsum-valley-hero.webp`,
    alt: "Stone-walled village terraces in Tsum Valley beneath snow-covered Himalayan peaks",
    placeholder: true,
  } satisfies TsumImage,
  primaryCta: { label: "Explore Trek Packages", href: ROUTES.packagesAnchor },
  secondaryCta: { label: "Discover the Valley", href: ROUTES.discoverAnchor },
};

export const TRIP_FACTS: TsumTripFact[] = [
  { label: "Duration", value: "13 days", approximate: true },
  { label: "Difficulty", value: "Moderate" },
  { label: "Max elevation", value: "3,700 m · Mu Gompa", approximate: true },
  { label: "Region", value: "Gorkha, Manaslu" },
];

/* -------------------------------------------------------------------------- */
/* Overview                                                                   */
/* -------------------------------------------------------------------------- */

export const OVERVIEW = {
  label: "An Authentic Journey into Nepal’s Hidden Himalayan Valley",
  heading: "Discover the Sacred Beauty of Tsum Valley",
  /** Supplied copy — keep verbatim. */
  paragraph:
    "Tsum Valley Trek is a remarkable Himalayan adventure in the remote northern part of Nepal’s Gorkha district, offering a unique blend of pristine natural beauty, ancient Buddhist heritage, and authentic Himalayan culture. Nestled in the majestic Manaslu region, this secluded valley is renowned for its peaceful atmosphere, traditional Tibetan-influenced villages, sacred monasteries, and breathtaking mountain landscapes. Journey through picturesque settlements such as Lokpa, Chumling, Chhokang Paro, and Nile, surrounded by lush forests, cascading waterfalls, dramatic cliffs, and spectacular views of Ganesh Himal, Sringi Himal, and Himalchuli. Explore the sacred Mu Gompa and Rachen Gompa, discover ancient prayer walls and Buddhist shrines, and experience the warm hospitality and traditional lifestyle of local communities. The trek also offers opportunities to explore the spiritual significance of Milarepa’s Cave and the serene beauty of the upper Tsum Valley. Combining cultural discovery, spiritual exploration, remote wilderness, and unforgettable Himalayan scenery, Tsum Valley Trek is an extraordinary journey for travelers seeking a peaceful and authentic Himalayan experience.",
  image: {
    src: `${IMG}/highlights/tsum-valley-overview.webp`,
    alt: "Prayer flags above a trail winding into the upper Tsum Valley",
    placeholder: true,
  } satisfies TsumImage,
  secondaryImage: {
    src: `${IMG}/highlights/tsum-valley-buddhist-mani-wall.webp`,
    alt: "Carved mani stones along a village path in Tsum Valley",
    placeholder: true,
  } satisfies TsumImage,
  pillars: [
    { title: "Sacred", text: "Monasteries, nunneries and mani walls that shape daily life." },
    { title: "Remote", text: "A restricted area with few trekkers and no through-traffic." },
    { title: "Living culture", text: "Tsumba villages where traditions are practised, not performed." },
  ],
};

/* -------------------------------------------------------------------------- */
/* Highlights                                                                 */
/* -------------------------------------------------------------------------- */

export const HIGHLIGHTS: TsumHighlight[] = [
  {
    id: "mu-gompa",
    tag: "Monastery",
    title: "Mu Gompa",
    description:
      "Discover a significant Buddhist monastery in the upper Tsum Valley, surrounded by dramatic mountain landscapes.",
    image: { src: `${IMG}/monasteries/mu-gompa-monastery-tsum-valley.webp`, alt: "Mu Gompa monastery on a high ridge in upper Tsum Valley", placeholder: true },
    href: "#exp-mu-gompa",
  },
  {
    id: "rachen-gompa",
    tag: "Nunnery",
    title: "Rachen Gompa",
    description: "Explore a renowned Buddhist nunnery and spiritual center in the valley.",
    image: { src: `${IMG}/monasteries/rachen-gompa-nepal.webp`, alt: "Whitewashed buildings of Rachen Gompa nunnery", placeholder: true },
    href: "#exp-rachen-gompa",
  },
  {
    id: "milarepa-cave",
    tag: "Sacred site",
    title: "Milarepa’s Cave",
    description:
      "Discover a sacred cave associated with the Buddhist yogi Milarepa and local spiritual traditions.",
    image: { src: `${IMG}/monasteries/milarepa-cave-tsum-valley.webp`, alt: "Entrance to Milarepa’s Cave with prayer flags", placeholder: true },
    href: "#exp-milarepa-cave",
  },
  {
    id: "chumling",
    tag: "Village",
    title: "Chumling Village",
    description:
      "Experience a traditional Himalayan settlement with distinctive architecture and cultural heritage.",
    image: { src: `${IMG}/villages/chumling-village-tsum-valley.webp`, alt: "Stone houses and fields in Chumling village", placeholder: true },
    href: "#village-chumling",
  },
  {
    id: "chhokang-paro",
    tag: "Village",
    title: "Chhokang Paro",
    description: "Explore a picturesque village surrounded by dramatic mountain scenery.",
    image: { src: `${IMG}/villages/chhokang-paro-village.webp`, alt: "Chhokang Paro village on a broad valley shelf", placeholder: true },
    href: "#village-chhokang-paro",
  },
  {
    id: "nile",
    tag: "Village",
    title: "Nile Village",
    description:
      "Discover a remote settlement in the upper valley with access to the region’s spiritual landmarks.",
    image: { src: `${IMG}/villages/nile-village-tsum-valley.webp`, alt: "Nile village in the upper Tsum Valley", placeholder: true },
    href: "#village-nile",
  },
  {
    id: "lokpa",
    tag: "Village",
    title: "Lokpa Village",
    description: "Experience the gateway settlement to the Tsum Valley trekking route.",
    image: { src: `${IMG}/villages/lokpa-village-nepal.webp`, alt: "Lokpa village at the entrance to Tsum Valley", placeholder: true },
    href: "#village-lokpa",
  },
  {
    id: "mani-walls",
    tag: "Heritage",
    title: "Ancient Mani Walls and Buddhist Shrines",
    description:
      "Discover sacred stone inscriptions, prayer structures, and Buddhist cultural landmarks.",
    image: { src: `${IMG}/highlights/tsum-valley-buddhist-mani-wall.webp`, alt: "Long mani wall of carved prayer stones", placeholder: true },
    href: "#exp-heritage",
  },
  {
    id: "ganesh-himal",
    tag: "Mountain",
    title: "Ganesh Himal",
    description:
      "Enjoy spectacular views of one of the prominent mountain ranges surrounding the region.",
    image: { src: `${IMG}/nature/ganesh-himal-tsum-valley.webp`, alt: "Ganesh Himal range seen from the Tsum Valley trail", placeholder: true },
    href: "#nature",
  },
  {
    id: "tsumba-culture",
    tag: "Culture",
    title: "Traditional Tsumba Culture",
    description:
      "Discover the customs, hospitality, architecture, and spiritual traditions of local communities.",
    image: { src: `${IMG}/highlights/tsumba-culture.webp`, alt: "Tsumba villagers in traditional dress outside a stone home", placeholder: true },
    href: "#exp-tsumba-culture",
  },
];

/* -------------------------------------------------------------------------- */
/* Cultural & spiritual experiences                                           */
/* -------------------------------------------------------------------------- */

export const EXPERIENCES: TsumExperience[] = [
  {
    id: "heritage",
    kicker: "Ancient Buddhist Heritage",
    title: "A valley shaped by devotion",
    body: [
      "Tsum was long a place of pilgrimage and retreat. Along the trail you pass chortens, prayer wheels and long mani walls built from stones carved with mantras — walk to their left, clockwise, as locals do.",
      "Many villages keep their own small gompa, and the calendar of festivals and prayers still structures village life.",
    ],
    image: { src: `${IMG}/highlights/tsum-valley-chorten.webp`, alt: "Whitewashed chorten with prayer flags on the trail", placeholder: true },
  },
  {
    id: "mu-gompa",
    kicker: "Mu Gompa Monastery",
    title: "The high monastery near the head of the valley",
    body: [
      "Set at roughly 3,700 m above Nile, Mu Gompa is usually the highest point of the trek and the spiritual high point too. The climb is short but steep; the reward is a quiet courtyard, resident monks, and wide views toward the Tibetan border ranges.",
      "Visits depend on the monastery’s schedule. Ask before photographing interiors and offer a small donation if you are welcomed in.",
    ],
    image: { src: `${IMG}/monasteries/mu-gompa-monastery-tsum-valley.webp`, alt: "Mu Gompa monastery with mountains behind", placeholder: true },
  },
  {
    id: "rachen-gompa",
    kicker: "Rachen Gompa",
    title: "A nunnery at the heart of valley life",
    body: [
      "Rachen Gompa, in the upper valley between Chhokang Paro and Nile, is home to a community of Buddhist nuns and is one of Tsum’s most important religious centres.",
      "Its role reaches beyond prayer — it has long supported learning and community life in the valley. Visitors are welcome at suitable times; quiet, modest behaviour matters here.",
    ],
    image: { src: `${IMG}/monasteries/rachen-gompa-nepal.webp`, alt: "Courtyard of Rachen Gompa", placeholder: true },
  },
  {
    id: "milarepa-cave",
    kicker: "Milarepa’s Cave",
    title: "Where the poet-yogi is said to have meditated",
    body: [
      "Local tradition holds that Milarepa, the 11th-century Tibetan yogi and poet, meditated in a cave in the upper valley — known locally as Piren Phu. A small shrine now marks the site.",
      "Stories of footprints in the rock and of Milarepa’s ascetic years are part of how Tsumba families tell the history of their valley.",
    ],
    image: { src: `${IMG}/monasteries/milarepa-cave-tsum-valley.webp`, alt: "Shrine at Milarepa’s Cave in Tsum Valley", placeholder: true },
  },
  {
    id: "tsumba-culture",
    kicker: "Traditional Tsumba Culture",
    title: "Tibetan-influenced traditions, lived daily",
    body: [
      "The Tsumba people speak their own dialect and share much with Tibetan culture — in dress, in architecture of flat-roofed stone houses, and in food: tsampa, butter tea, buckwheat and potato dishes.",
      "The valley has long held community agreements that discourage the killing of animals, which is part of why wildlife and people coexist so closely here.",
    ],
    image: { src: `${IMG}/highlights/tsumba-culture.webp`, alt: "Butter tea being prepared in a Tsumba home", placeholder: true },
  },
  {
    id: "villages",
    kicker: "Peaceful Himalayan Villages",
    title: "Slow days at the pace of the valley",
    body: [
      "Evenings in Tsum are quiet: smoke from kitchen fires, yaks brought down from pasture, children finishing chores. Without road traffic or crowds, the villages feel unhurried.",
      "Spending an extra night in one village is often the most memorable part of the trip.",
    ],
    image: { src: `${IMG}/villages/tsum-valley-village-evening.webp`, alt: "Evening light over stone houses in Tsum Valley", placeholder: true },
  },
];

/* -------------------------------------------------------------------------- */
/* Itinerary (sample, configurable)                                           */
/* -------------------------------------------------------------------------- */

export const ITINERARY_NOTE =
  "This is a sample 13-day route, not a fixed schedule. Walking times, overnight stops and the day plan may change with trail conditions, weather, acclimatization, your fitness and operator arrangements. We usually recommend adding at least one rest or acclimatization day in the upper valley.";

export const ITINERARY: TsumItineraryDay[] = [
  {
    day: 1, mode: "arrival", from: "Arrival", to: "Kathmandu", elevationM: 1400,
    summary: "Arrive in Kathmandu, meet your team and finalise permits and gear.",
    details: ["Airport pick-up and hotel check-in (as arranged).", "Trek briefing and permit paperwork with your registered agency.", "Last chance to buy or rent gear in Thamel."],
  },
  {
    day: 2, mode: "drive", from: "Kathmandu", to: "Machha Khola", elevationM: 930,
    summary: "A long drive west and north via Arughat and Soti Khola to the riverside village of Machha Khola.",
    details: ["Road conditions beyond Arughat vary by season; jeep sections may be rough.", "Some itineraries overnight at Soti Khola instead."],
    thumbnail: { src: `${IMG}/nature/budhi-gandaki-river.webp`, alt: "Budhi Gandaki river gorge", placeholder: true },
  },
  {
    day: 3, mode: "trek", from: "Machha Khola", to: "Jagat", elevationM: 1340,
    summary: "Follow the Budhi Gandaki upstream past hot springs at Tatopani to the stone-paved village of Jagat.",
    details: ["Jagat has a Manaslu Conservation Area checkpoint — keep permits handy."],
  },
  {
    day: 4, mode: "trek", from: "Jagat", to: "Lokpa", elevationM: 2240,
    summary: "Climb through Philim and leave the Manaslu trail at the Tsum turn-off to reach Lokpa, the gateway village.",
    details: ["Views of Sringi Himal open up after Philim.", "The Tsum Valley restricted area begins beyond the turn-off."],
    thumbnail: { src: `${IMG}/villages/lokpa-village-nepal.webp`, alt: "Lokpa village", placeholder: true },
  },
  {
    day: 5, mode: "trek", from: "Lokpa", to: "Chumling", elevationM: 2386,
    summary: "A forested trail with steep sections along the Siyar Khola gorge leads to Chumling in lower Tsum.",
    details: ["Look for Ganesh Himal from the suspension bridges and clearings.", "Chumling’s old gompa is worth a short visit."],
  },
  {
    day: 6, mode: "trek", from: "Chumling", to: "Chhokang Paro", elevationM: 3031,
    summary: "Climb into upper Tsum, where the valley widens and Himalchuli appears, to the broad village of Chhokang Paro.",
    details: ["Milarepa’s Cave (Piren Phu) lies in this part of the valley and can be visited depending on the day plan.", "A good place for an acclimatization / rest day."],
    thumbnail: { src: `${IMG}/villages/chhokang-paro-village.webp`, alt: "Chhokang Paro", placeholder: true },
  },
  {
    day: 7, mode: "trek", from: "Chhokang Paro", to: "Nile", elevationM: 3361,
    summary: "A gentler day past chortens and mani walls toward Nile, with a possible stop at Rachen Gompa.",
    details: ["Rachen Gompa nunnery sits along this stretch of the upper valley.", "Walk slowly — you are now above 3,000 m."],
  },
  {
    day: 8, mode: "explore", from: "Nile", to: "Mu Gompa & back", elevationM: 3700,
    summary: "Hike up to Mu Gompa, the trek’s highest point, and explore nearby spiritual landmarks before returning.",
    details: ["The elevation shown is the high point of the day; most itineraries sleep at Nile or at Mu Gompa’s guesthouse.", "Turn back if symptoms of altitude sickness appear."],
    thumbnail: { src: `${IMG}/monasteries/mu-gompa-monastery-tsum-valley.webp`, alt: "Mu Gompa", placeholder: true },
  },
  {
    day: 9, mode: "trek", from: "Nile", to: "Chumling", elevationM: 2386,
    summary: "Descend the upper valley back toward Chumling, with time for any gompa you missed on the way up.",
    details: ["Some operators split this into two days with a night at Chhokang Paro or Rachen Gompa."],
  },
  {
    day: 10, mode: "trek", from: "Chumling", to: "Lokpa", elevationM: 2240,
    summary: "Retrace the gorge trail down to Lokpa.",
    details: [],
  },
  {
    day: 11, mode: "trek", from: "Lokpa", to: "Jagat or Philim",
    summary: "Rejoin the Budhi Gandaki trail and continue down the lower valley to a suitable overnight stop.",
    details: ["The exact stop depends on pace and lodge availability."],
  },
  {
    day: 12, mode: "trek", from: "Jagat", to: "Machha Khola", elevationM: 930,
    summary: "A final day beside the river back to Machha Khola.",
    details: [],
  },
  {
    day: 13, mode: "departure", from: "Machha Khola", to: "Kathmandu", elevationM: 1400,
    summary: "Drive back to Kathmandu.",
    details: ["Allow a buffer day before international flights in case of road delays."],
  },
];

/* -------------------------------------------------------------------------- */
/* Nature                                                                     */
/* -------------------------------------------------------------------------- */

export const NATURE: TsumNatureFeature[] = [
  { id: "ganesh", size: "wide", title: "Ganesh Himal", description: "The Ganesh range rises to the east of the valley and appears between forest clearings on the way in.", image: { src: `${IMG}/nature/ganesh-himal-tsum-valley.webp`, alt: "Ganesh Himal peaks above forested ridges", placeholder: true } },
  { id: "sringi", size: "tall", title: "Sringi Himal & Himalchuli", description: "Sharp summits frame the lower valley; Himalchuli dominates the views from upper Tsum.", image: { src: `${IMG}/nature/sringi-himal-himalchuli.webp`, alt: "Sringi Himal at dawn", placeholder: true } },
  { id: "forest", size: "standard", title: "Forest trails", description: "Pine, rhododendron and bamboo forests line the gorge between Lokpa and Chumling.", image: { src: `${IMG}/nature/tsum-valley-forest-trail.webp`, alt: "Forest trail with moss-covered trees", placeholder: true } },
  { id: "waterfalls", size: "standard", title: "Waterfalls & streams", description: "Side streams pour off the cliffs into the Siyar Khola, loudest after the monsoon.", image: { src: `${IMG}/nature/tsum-valley-waterfall.webp`, alt: "Waterfall dropping into a mountain stream", placeholder: true } },
  { id: "cliffs", size: "standard", title: "Cliffs & gorges", description: "The narrow entrance gorge is part of what kept Tsum hidden for so long.", image: { src: `${IMG}/nature/tsum-valley-gorge.webp`, alt: "Deep gorge with a suspension bridge", placeholder: true } },
  { id: "upper", size: "wide", title: "Upper Tsum Valley", description: "Above Chhokang Paro the valley opens into wide, dry pastures and barley fields beneath the border ranges.", image: { src: `${IMG}/nature/upper-tsum-valley.webp`, alt: "Wide upper Tsum Valley with barley fields", placeholder: true } },
];

/* -------------------------------------------------------------------------- */
/* Villages                                                                   */
/* -------------------------------------------------------------------------- */

export const VILLAGES: TsumVillage[] = [
  { id: "lokpa", name: "Lokpa", stage: "Gateway · Day 4", elevationM: 2240, description: "The first village inside Tsum, reached after leaving the Manaslu trail. A small, welcoming stop where the change in culture begins to show.", image: { src: `${IMG}/villages/lokpa-village-nepal.webp`, alt: "Lokpa village", placeholder: true } },
  { id: "chumling", name: "Chumling", stage: "Lower Tsum · Day 5", elevationM: 2386, description: "Stone houses, an old gompa and terraced fields, with Ganesh Himal visible across the valley. The cultural heart of lower Tsum.", image: { src: `${IMG}/villages/chumling-village-tsum-valley.webp`, alt: "Chumling village", placeholder: true } },
  { id: "chhokang-paro", name: "Chhokang Paro", stage: "Upper Tsum · Day 6", elevationM: 3031, description: "Twin settlements on a broad shelf of land, surrounded by fields and big views. A natural place to rest and acclimatize.", image: { src: `${IMG}/villages/chhokang-paro-village.webp`, alt: "Chhokang Paro", placeholder: true } },
  { id: "nile", name: "Nile", stage: "Upper Tsum · Days 7–8", elevationM: 3361, description: "One of the highest villages in the valley, close to Mu Gompa and the Tibetan border — the base for the upper-valley monasteries.", image: { src: `${IMG}/villages/nile-village-tsum-valley.webp`, alt: "Nile village", placeholder: true } },
];

/* -------------------------------------------------------------------------- */
/* Seasons                                                                    */
/* -------------------------------------------------------------------------- */

export const SEASONS: TsumSeason[] = [
  { id: "spring", name: "Spring", months: "March – May", rating: "recommended", verdict: "Rhododendron and mild days", points: ["Forests bloom in the lower valley.", "Generally stable weather; haze can build later in the season.", "Nights stay cold in upper Tsum."] },
  { id: "autumn", name: "Autumn", months: "September – November", rating: "recommended", verdict: "The most popular window", points: ["Often clearer air after the monsoon, though visibility still varies.", "Harvest time in the villages.", "Busiest period for permits and lodges — book early."] },
  { id: "winter", name: "Winter", months: "December – February", rating: "challenging", verdict: "Cold, quiet and possibly snowy", points: ["Freezing nights above 3,000 m and possible snowfall.", "Some lodges in the upper valley may close.", "Suited to experienced trekkers with flexible plans."] },
  { id: "monsoon", name: "Monsoon", months: "June – August", rating: "challenging", verdict: "Green, wet and unpredictable", points: ["Heavy rain, leeches and slippery trails in the lower gorge.", "Landslides can block roads and trails.", "Transport disruptions are common; build in buffer days."] },
];

export const SEASON_NOTE =
  "Mountain weather is unpredictable in every season. Trail conditions, road access and lodge availability can change at short notice, so we confirm the plan close to departure.";

/* -------------------------------------------------------------------------- */
/* Preparation                                                                */
/* -------------------------------------------------------------------------- */

export const DIFFICULTY = {
  rating: "Moderate",
  summary: "No technical climbing, but long days on steep, rough trails in a remote area. Good general fitness and some multi-day hiking experience make the trek far more enjoyable.",
};

export const PREPARATION: TsumPrepItem[] = [
  { icon: "fitness", title: "Fitness & endurance", body: "Train for 5–7 hours of walking with climbs; stairs, hill walks and cardio in the weeks before." },
  { icon: "days", title: "Multi-day rhythm", body: "Expect to walk day after day. A weekend hike carrying a daypack is good preparation." },
  { icon: "altitude", title: "Acclimatization", body: "Ascend gradually, rest in the upper valley, and descend if symptoms worsen." },
  { icon: "boots", title: "Footwear & layers", body: "Broken-in trekking boots, a warm down layer, fleece, base layers and a sun hat." },
  { icon: "rain", title: "Rain & cold", body: "Waterproof jacket, pack cover and warm gloves in every season." },
  { icon: "water", title: "Water & food", body: "Drink steadily, treat or filter water, and eat well even when appetite drops." },
  { icon: "firstaid", title: "First aid & medicines", body: "Carry a personal kit and any prescription medicine; discuss altitude medication with a doctor." },
  { icon: "insurance", title: "Insurance & emergencies", body: "Travel insurance that covers trekking to 4,000 m and helicopter evacuation." },
  { icon: "signal", title: "Limited connectivity", body: "Mobile signal and Wi-Fi are patchy or absent in much of the valley. Tell family your plan." },
  { icon: "respect", title: "Sacred spaces", body: "Walk clockwise around chortens and mani walls, dress modestly and ask before photographing people or shrine interiors." },
];

export const SAFETY_NOTE = {
  title: "Trekking safety in a remote valley",
  body: "Remote Himalayan trekking involves real risks: altitude-related illness, steep and uneven terrain, landslides, sudden weather changes, and long distances to medical facilities. Evacuation can take time. Travel with a licensed guide, tell them early if you feel unwell, and never ascend with worsening symptoms.",
};

/* -------------------------------------------------------------------------- */
/* Essential travel information                                               */
/* -------------------------------------------------------------------------- */

export const TRAVEL_INFO: TsumInfoCard[] = [
  {
    id: "permits", icon: "permit", title: "Permits",
    body: "Tsum Valley is a restricted area. Permits are arranged through a registered trekking agency and checked at several points on the trail.",
    items: [
      "Restricted Area Permit covering Tsum Valley (and the Manaslu restricted section on the approach, where applicable)",
      "Manaslu Conservation Area Permit (MCAP)",
      "Annapurna Conservation Area Permit (ACAP) only if you exit via the Annapurna side",
    ],
  },
  {
    id: "guides", icon: "guide", title: "Guides & group rules",
    body: "Trekkers must be accompanied by a licensed guide from a government-registered agency; independent trekking is not permitted. Group-size rules for restricted areas also apply — we confirm the current requirement when you enquire.",
  },
  {
    id: "transport", icon: "road", title: "Getting to the trailhead",
    body: "Private jeep or local bus from Kathmandu via Dhading and Arughat to Soti Khola or Machha Khola. Expect a full day on the road and rough sections after rain.",
  },
  {
    id: "stay", icon: "bed", title: "Tea houses & lodges",
    body: "Simple family-run lodges and guesthouses in each village. Rooms are basic; hot showers and charging may cost extra.",
  },
  {
    id: "connectivity", icon: "signal", title: "Communication",
    body: "Signal is intermittent and Wi-Fi rare. Your guide carries the team’s contact plan; a local SIM helps on the lower trail.",
  },
  {
    id: "emergency", icon: "sos", title: "Emergencies & evacuation",
    body: "Serious medical issues usually require helicopter evacuation, which depends on weather. Share your insurer’s emergency number with your guide before you start.",
  },
  {
    id: "money", icon: "wallet", title: "Insurance & cash",
    body: "There are no ATMs in the valley. Carry enough Nepali rupees for meals, extras, donations and tips, plus proof of trekking insurance.",
  },
];

export const TRAVEL_INFO_NOTE =
  "Permit types, fees and trekking regulations are set by Nepal’s government and change periodically. Please confirm the latest requirements with us or the Nepal Tourism Board before you travel.";

/* -------------------------------------------------------------------------- */
/* Accommodation                                                              */
/* -------------------------------------------------------------------------- */

export const ACCOMMODATION = {
  intro: "There are no hotels in Tsum — you stay with the valley’s families. That simplicity is part of what makes the trek special.",
  image: { src: `${IMG}/gallery/tsum-valley-teahouse-kitchen.webp`, alt: "Warm tea-house kitchen with a wood stove", placeholder: true } satisfies TsumImage,
  types: [
    { title: "Mountain tea houses", text: "Twin rooms with foam mattresses and blankets; bring a warm sleeping bag." },
    { title: "Lodges & guesthouses", text: "Family-run and simple, with shared toilets in most villages." },
    { title: "Village homestays", text: "In some settlements you may stay in a traditional stone home." },
    { title: "Communal dining", text: "Everyone gathers around the kitchen stove — dal bhat, noodles, tsampa and tea." },
  ],
  note: "Facilities, menus and availability vary by village and season; some upper-valley lodges close in deep winter.",
};

/* -------------------------------------------------------------------------- */
/* Packages                                                                   */
/* -------------------------------------------------------------------------- */

/**
 * Add real packages here once itinerary, inclusions and pricing are confirmed.
 * Leave `price` undefined unless it is verified — the card then shows
 * "Price on request". Example shape:
 *
 * {
 *   id: "tsum-classic-13",
 *   title: "Classic Tsum Valley Trek",
 *   duration: "13 days",
 *   difficulty: "Moderate",
 *   route: "Kathmandu – Machha Khola – Lokpa – Chumling – Chhokang Paro – Nile – Mu Gompa",
 *   accommodation: "Tea houses on trek, 3★ in Kathmandu",
 *   inclusions: ["Licensed guide", "Restricted area permit & MCAP", "Ground transport"],
 *   exclusions: ["International flights", "Travel insurance", "Tips"],
 *   price: { amount: 0, currency: "INR", basis: "per person, twin share", verifiedOn: "YYYY-MM-DD" },
 *   detailsHref: "/packages/tsum-valley-trek",
 * }
 */
export const PACKAGES: TsumPackage[] = [];

export const CUSTOM_TRIP = {
  title: "Request a Customized Trek Package",
  text: "Tell us your dates, group size and pace. Our team plans a Tsum Valley itinerary around you and confirms permits, guides and lodges before quoting.",
  options: [
    { title: "Classic Tsum", text: "Around 13 days · lower and upper valley with Mu Gompa" },
    { title: "Slow & cultural", text: "Extra village nights and monastery time" },
    { title: "Tsum + Manaslu Circuit", text: "A longer combination over Larkya La" },
  ],
  note: "Private trips subject to permit and guide availability.",
};

/* -------------------------------------------------------------------------- */
/* Gallery                                                                    */
/* -------------------------------------------------------------------------- */

/** Shapes are balanced to fill a 4-column grid exactly (2 tall + 4 wide + 4 square = 16 cells). Keep that sum a multiple of 4 when editing. */
export const GALLERY: (TsumImage & { caption: string; shape: "tall" | "wide" | "square" })[] = [
  { shape: "tall", caption: "Mu Gompa", src: `${IMG}/gallery/gallery-mu-gompa.webp`, alt: "Mu Gompa monastery against a blue sky", placeholder: true },
  { shape: "square", caption: "Rachen Gompa", src: `${IMG}/gallery/gallery-rachen-gompa.webp`, alt: "Prayer wheels at Rachen Gompa", placeholder: true },
  { shape: "wide", caption: "Ganesh Himal", src: `${IMG}/gallery/gallery-ganesh-himal.webp`, alt: "Ganesh Himal at sunrise", placeholder: true },
  { shape: "square", caption: "Milarepa’s Cave", src: `${IMG}/gallery/gallery-milarepa-cave.webp`, alt: "Butter lamps inside Milarepa’s Cave shrine", placeholder: true },
  { shape: "tall", caption: "Chumling", src: `${IMG}/gallery/gallery-chumling.webp`, alt: "Stone lanes of Chumling village", placeholder: true },
  { shape: "square", caption: "Mani wall", src: `${IMG}/gallery/gallery-mani-wall.webp`, alt: "Close-up of carved mani stones", placeholder: true },
  { shape: "wide", caption: "Chhokang Paro", src: `${IMG}/gallery/gallery-chhokang-paro.webp`, alt: "Barley fields at Chhokang Paro", placeholder: true },
  { shape: "square", caption: "Lokpa", src: `${IMG}/gallery/gallery-lokpa.webp`, alt: "Trail leading into Lokpa", placeholder: true },
  { shape: "wide", caption: "Forest waterfall", src: `${IMG}/gallery/gallery-waterfall.webp`, alt: "Waterfall in the Siyar Khola gorge", placeholder: true },
  { shape: "wide", caption: "Nile", src: `${IMG}/gallery/gallery-nile.webp`, alt: "Houses of Nile village", placeholder: true },
];

/* -------------------------------------------------------------------------- */
/* FAQ                                                                        */
/* -------------------------------------------------------------------------- */

export const FAQS: TsumFaq[] = [
  { question: "Where is Tsum Valley located?", answer: "Tsum Valley is in the far north of Gorkha district in central Nepal, within the Manaslu Conservation Area and close to the Tibetan border. It branches off the Manaslu Circuit trail near Philim." },
  { question: "How many days are required for the Tsum Valley Trek?", answer: "Most itineraries take about 12–16 days from Kathmandu. Our sample route is 13 days; adding a rest day or combining with the Manaslu Circuit makes it longer." },
  { question: "What is the best season for trekking in Tsum Valley?", answer: "Spring (March–May) and autumn (September–November) are the usual choices. Weather still varies, and winter and monsoon treks are possible but more challenging." },
  { question: "How difficult is the Tsum Valley Trek?", answer: "It is generally rated moderate: non-technical but with long, steep and rough days in a remote area. Good fitness and some hiking experience are recommended." },
  { question: "Do I need permits for Tsum Valley?", answer: "Yes. Tsum Valley is a restricted area, so you need a restricted area permit and the Manaslu Conservation Area Permit, arranged through a registered agency. Requirements change, so we confirm them when you book." },
  { question: "Is a trekking guide required?", answer: "Yes. Trekkers must be accompanied by a licensed guide from a government-registered agency; independent trekking is not allowed in this restricted area." },
  { question: "What is the highest point of the trek?", answer: "On the standard route the highest point is usually Mu Gompa, at approximately 3,700 m. Side trips can go higher." },
  { question: "Can beginners trek in Tsum Valley?", answer: "Fit beginners with some hiking experience can do it with good preparation, a gradual itinerary and an experienced guide. It is not ideal as a very first multi-day trek." },
  { question: "What type of accommodation is available?", answer: "Basic family-run tea houses, lodges and occasional homestays. Expect simple twin rooms, shared toilets and communal dining." },
  { question: "What cultural experiences can I expect?", answer: "Visits to monasteries and nunneries such as Mu Gompa and Rachen Gompa, Milarepa’s Cave, mani walls and chortens, and time in Tsumba villages with Tibetan-influenced food, dress and customs." },
  { question: "Is altitude sickness a concern?", answer: "Yes, the upper valley is above 3,000 m. A gradual ascent, rest days, hydration and listening to your guide reduce the risk; descend if symptoms worsen." },
  { question: "What should I pack for the trek?", answer: "Broken-in boots, layered clothing including a down jacket, waterproofs, a warm sleeping bag, sun protection, a water filter or purification, a personal first-aid kit and cash in Nepali rupees." },
  { question: "Can I visit Mu Gompa and Rachen Gompa?", answer: "Yes, both are on the standard route and generally welcome respectful visitors. Access can depend on ceremonies and the monastery’s schedule." },
  { question: "Is Tsum Valley suitable for a peaceful cultural trekking experience?", answer: "Very much so. It sees far fewer trekkers than the Annapurna or Everest regions, and its villages and monasteries give it a quiet, reflective character." },
  { question: "Can I customize my Tsum Valley Trek itinerary?", answer: "Yes. We can adjust the pace, add rest or village days, or combine Tsum with the Manaslu Circuit. Share your plans and we’ll design a private itinerary." },
];

/* -------------------------------------------------------------------------- */
/* Related & CTA                                                              */
/* -------------------------------------------------------------------------- */

/** VERIFY each href against live routes before publishing. */
export const RELATED: TsumRelatedLink[] = [
  { kicker: "Province", label: "Gandaki Province", href: "/destinations/gandaki-province", description: "Tsum Valley’s home province — lakes, Annapurna views and Manaslu country." },
  { kicker: "Adventure", label: "Camping in Nepal", href: "/activities/adventure/camping", description: "Wild camps, lakeside nights and Himalayan campsites." },
  { kicker: "Adventure", label: "Paragliding in Nepal", href: "/activities/adventure/paragliding", description: "Soar over Pokhara’s lakes with the Annapurnas ahead." },
  { kicker: "Explore", label: "All adventure activities", href: "/activities/adventure", description: "Treks, flights and outdoor journeys across Nepal." },
];

export const CTA = {
  heading: "Discover the Sacred Hidden Valley of Nepal",
  text: "Journey through remote Himalayan villages, ancient monasteries, peaceful mountain landscapes, and authentic local culture on an unforgettable adventure into Tsum Valley.",
  image: { src: `${IMG}/hero/tsum-valley-cta.webp`, alt: "Prayer flags against snowy peaks in upper Tsum Valley", placeholder: true } satisfies TsumImage,
  buttons: [
    { label: "Explore Trek Packages", href: ROUTES.packagesAnchor, variant: "primary" as const },
    { label: "Customize Your Trek", href: ROUTES.customize, variant: "secondary" as const },
    { label: "Contact Karvaahh", href: ROUTES.contact, variant: "ghost" as const },
  ],
};

/** In-page navigation — ids must match the section ids used by the components. */
export const JUMP_LINKS: TsumLink[] = [
  { label: "Overview", href: "#overview" },
  { label: "Highlights", href: "#highlights" },
  { label: "Culture", href: "#experiences" },
  { label: "Itinerary", href: "#itinerary" },
  { label: "Villages", href: "#villages" },
  { label: "When to go", href: "#best-time" },
  { label: "Prepare", href: "#preparation" },
  { label: "Permits", href: "#travel-info" },
  { label: "Packages", href: "#packages" },
  { label: "FAQ", href: "#faq" },
];
