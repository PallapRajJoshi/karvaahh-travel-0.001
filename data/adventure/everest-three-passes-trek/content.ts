import type {
  CultureItem,
  EtpImage,
  EtpLink,
  Experience,
  Highlight,
  InfoCard,
  MountainPass,
  Peak,
  Season,
  Stat,
} from "./types";
import { elev } from "./format";

/* ------------------------------------------------------------------ */
/* Hero                                                                */
/* ------------------------------------------------------------------ */

export const hero = {
  eyebrow: ["Nepal", "Everest Region", "High-Altitude Adventure"],
  title: "Everest Three Passes Trek",
  subtitle: "Cross Three Legendary Passes in the Heart of the Himalayas",
  text:
    "Experience an extraordinary Himalayan adventure across Kongma La, Cho La, and Renjo La, with unforgettable views of Everest, the turquoise Gokyo Lakes, and the legendary Khumbu region.",
  primaryCta: "Explore Trek Packages",
  secondaryCta: "Discover the Route",
  image: {
    file: "everest-three-passes-hero.webp",
    folder: "hero",
    alt: "Snow-covered Himalayan peaks rising above the rugged high valleys of the Khumbu region, Nepal",
  } as EtpImage,
};

/** Hero badges. Values are configurable — keep them consistent with the itinerary. */
export const heroStats: Stat[] = [
  { label: "Duration", value: "17 days", note: "sample itinerary" },
  { label: "Difficulty", value: "Challenging", note: "experienced trekkers" },
  { label: "Max elevation", value: elev(5545), note: "Kala Patthar" },
  { label: "High passes", value: "3", note: "all above 5,300 m" },
];

/* ------------------------------------------------------------------ */
/* Overview (paragraph supplied verbatim in the brief — do not edit)   */
/* ------------------------------------------------------------------ */

export const overview = {
  label: "An Extraordinary Journey Across the Khumbu Himalayas",
  heading: "Discover the Ultimate Everest Region Adventure",
  paragraph:
    "Everest Three Passes Trek is an exhilarating high-altitude Himalayan adventure through the spectacular Khumbu region of Nepal, offering an extraordinary combination of challenging trekking, breathtaking mountain scenery, and rich Sherpa culture. Journey through iconic Himalayan villages such as Lukla, Namche Bazaar, Tengboche, Dingboche, and Gokyo, surrounded by dramatic mountain landscapes, glacial valleys, and magnificent snow-capped peaks. Experience the thrill of crossing the three legendary high mountain passes—Kongma La (5,535 m), Cho La (5,420 m), and Renjo La (5,360 m)—while exploring the iconic Everest Base Camp, Kala Patthar, and the turquoise Gokyo Lakes. Witness spectacular panoramic views of Mount Everest, Lhotse, Makalu, Cho Oyu, and Ama Dablam, visit ancient monasteries, and discover the traditional lifestyle of the Sherpa communities. Combining challenging high-altitude adventure, cultural exploration, pristine alpine landscapes, and unforgettable Himalayan vistas, the Everest Three Passes Trek is a remarkable journey for experienced trekkers seeking an immersive adventure in the heart of the world's highest mountains.",
  image: {
    file: "khumbu-valley-panorama.webp",
    folder: "hero",
    alt: "Panoramic view of the Khumbu valley with Ama Dablam and surrounding peaks",
  } as EtpImage,
  /** Quick facts beside the paragraph — who this trek is for, at a glance. */
  facts: [
    { label: "Best for", value: "Trekkers with prior multi-day high-altitude experience" },
    { label: "Start / finish", value: "Lukla (flight from Kathmandu or Ramechhap)" },
    { label: "Also includes", value: "Everest Base Camp, Kala Patthar, Gokyo Lakes" },
    { label: "Stay", value: "Mountain tea houses and lodges" },
  ],
};

/* ------------------------------------------------------------------ */
/* The three passes                                                    */
/* ------------------------------------------------------------------ */

export const passes: MountainPass[] = [
  {
    id: "kongma-la",
    name: "Kongma La",
    elevationM: 5535,
    tagline: "The highest and hardest of the three",
    connects: ["Chhukung", "Lobuche"],
    description:
      "A long, rugged crossing from the Chhukung valley to the Khumbu Glacier. Small glacial lakes sit near the top, and the steep, rocky descent onto the glacier moraine tests tired legs at the end of the day.",
    image: {
      file: "kongma-la-pass-nepal.webp",
      folder: "passes",
      alt: "Prayer flags at Kongma La pass above a frozen glacial lake, Everest region",
    },
  },
  {
    id: "cho-la",
    name: "Cho La",
    elevationM: 5420,
    tagline: "The bridge between Everest and Gokyo",
    connects: ["Dzongla", "Thagnak"],
    description:
      "The dramatic link between the Everest Base Camp side of the Khumbu and the Gokyo valley. Near the top the route can cross snow and ice, so conditions on the day decide whether traction devices are needed.",
    image: {
      file: "cho-la-pass-himalayas.webp",
      folder: "passes",
      alt: "Trekkers crossing the snow-covered approach to Cho La pass among glaciers",
    },
  },
  {
    id: "renjo-la",
    name: "Renjo La",
    elevationM: 5360,
    tagline: "The last pass, and perhaps the finest view",
    connects: ["Gokyo", "Lungden"],
    description:
      "A stone-stepped climb from Gokyo that opens onto a sweeping panorama: the turquoise Gokyo lake and Ngozumpa Glacier below, with Everest and its neighbours on the horizon on a clear day.",
    image: {
      file: "renjo-la-pass-gokyo.webp",
      folder: "passes",
      alt: "View from Renjo La over the turquoise Gokyo lake toward Everest",
    },
  },
];

/* ------------------------------------------------------------------ */
/* Highlights                                                          */
/* ------------------------------------------------------------------ */

export const highlights: Highlight[] = [
  {
    id: "kongma-la",
    title: "Kongma La Pass",
    description: "Experience a demanding high-altitude crossing surrounded by dramatic Himalayan terrain.",
    image: { file: "kongma-la-pass-nepal.webp", folder: "passes", alt: "Kongma La pass in the Everest region" },
  },
  {
    id: "cho-la",
    title: "Cho La Pass",
    description: "Explore a spectacular mountain passage connecting the Everest and Gokyo trekking areas.",
    image: { file: "cho-la-pass-himalayas.webp", folder: "passes", alt: "Cho La pass and surrounding glaciers" },
  },
  {
    id: "renjo-la",
    title: "Renjo La Pass",
    description: "Discover panoramic views across the Gokyo region and its surrounding peaks.",
    image: { file: "renjo-la-pass-gokyo.webp", folder: "passes", alt: "Renjo La pass overlooking Gokyo" },
  },
  {
    id: "ebc",
    title: "Everest Base Camp",
    description: "Visit the legendary base camp at the foot of Mount Everest.",
    image: { file: "everest-base-camp-khumbu.webp", folder: "highlights", alt: "Everest Base Camp beside the Khumbu Glacier" },
  },
  {
    id: "kala-patthar",
    title: "Kala Patthar",
    description: "Experience one of the region's renowned viewpoints for Mount Everest and surrounding peaks.",
    image: { file: "kala-patthar-everest-view.webp", folder: "highlights", alt: "Mount Everest seen from Kala Patthar at sunrise" },
  },
  {
    id: "gokyo",
    title: "Gokyo Lakes",
    description: "Discover the turquoise alpine lakes nestled among dramatic Himalayan landscapes.",
    image: { file: "gokyo-lakes-nepal.webp", folder: "highlights", alt: "Turquoise Gokyo lake with Gokyo village on its shore" },
  },
  {
    id: "namche",
    title: "Namche Bazaar",
    description: "Explore the vibrant Sherpa town and an important trekking hub in the Khumbu region.",
    image: { file: "namche-bazaar-khumbu.webp", folder: "highlights", alt: "Amphitheatre-shaped Namche Bazaar on a Khumbu hillside" },
  },
  {
    id: "tengboche",
    title: "Tengboche Monastery",
    description: "Discover a renowned Buddhist monastery surrounded by Himalayan scenery.",
    image: { file: "tengboche-monastery-nepal.webp", folder: "highlights", alt: "Tengboche Monastery with Ama Dablam behind" },
  },
  {
    id: "dingboche",
    title: "Dingboche",
    description: "Experience a traditional high-altitude settlement in the Everest region.",
    image: { file: "dingboche-village-everest.webp", folder: "highlights", alt: "Stone-walled fields of Dingboche village beneath high peaks" },
  },
  {
    id: "sherpa-culture",
    title: "Sherpa Culture",
    description: "Learn about local traditions, mountain hospitality, and Himalayan Buddhist heritage.",
    image: { file: "sherpa-culture-khumbu.webp", folder: "culture", alt: "Prayer wheels and prayer flags in a Khumbu village" },
  },
];

/* ------------------------------------------------------------------ */
/* Experiences                                                         */
/* ------------------------------------------------------------------ */

export const experiences: Experience[] = [
  {
    id: "passes",
    kicker: "The challenge",
    title: "Three High Mountain Pass Crossings",
    body:
      "Each pass is its own long day: an early start in the dark, steady climbing over rock and snow, and the reward of prayer flags snapping at the top. Crossing all three links the Khumbu's valleys into one continuous loop.",
    points: ["Pre-dawn starts for firmer snow and settled weather", "Pass days typically long and physically demanding", "Order and timing adjusted to conditions on the ground"],
    image: { file: "three-passes-crossing.webp", folder: "passes", alt: "Trekkers climbing toward a high pass in the Khumbu" },
  },
  {
    id: "ebc",
    kicker: "The icon",
    title: "Everest Base Camp Adventure",
    body:
      "Walk the moraine beside the Khumbu Glacier to the foot of the Khumbu Icefall, where expedition teams gather in the climbing season. The glacier's ice towers and rubble make this a landscape unlike anywhere else on the route.",
    points: ["Reached from Gorak Shep", "Expedition tents present mainly in spring", "Everest's summit itself is largely hidden from Base Camp"],
    image: { file: "everest-base-camp-khumbu.webp", folder: "highlights", alt: "Khumbu Icefall above Everest Base Camp" },
  },
  {
    id: "kala-patthar",
    kicker: "The view",
    title: "Kala Patthar Himalayan Panorama",
    body:
      "A steep climb from Gorak Shep leads to the dark ridge of Kala Patthar, one of the best-known viewpoints for Everest's south-west face, with Nuptse, Changtse and the Khumbu Glacier spread out below.",
    points: ["Often climbed for sunrise or late-afternoon light", "Usually the highest point of the trek", "Cold and windy — dress for the summit, not the trail"],
    image: { file: "kala-patthar-everest-view.webp", folder: "highlights", alt: "Everest and Nuptse from Kala Patthar" },
  },
  {
    id: "gokyo",
    kicker: "The colour",
    title: "Gokyo Lakes Exploration",
    body:
      "West of Cho La lies a chain of glacial lakes beside the Ngozumpa Glacier, one of the longest glaciers in the Himalaya. The water's turquoise colour and the quiet of the valley make Gokyo a welcome change of pace.",
    points: ["Gokyo village sits on the third lake", "Optional hike to Gokyo Ri, time and conditions permitting", "Lake colour changes with light and season"],
    image: { file: "gokyo-lakes-nepal.webp", folder: "highlights", alt: "Gokyo lakes beside the Ngozumpa Glacier" },
  },
  {
    id: "culture",
    kicker: "The people",
    title: "Sherpa Cultural Immersion",
    body:
      "Between the passes, the trail runs through villages where mani walls, prayer wheels and gompas are part of daily life. Tea-house evenings around the stove are often where the region's stories are best heard.",
    points: ["Monastery visits at Tengboche and beyond", "Walk clockwise around mani walls and stupas", "Ask before photographing people or ceremonies"],
    image: { file: "sherpa-culture-khumbu.webp", folder: "culture", alt: "Mani wall and prayer flags on the trail in the Khumbu" },
  },
  {
    id: "photography",
    kicker: "The light",
    title: "Himalayan Photography",
    body:
      "Glaciers, alpine lakes, stone villages and some of the world's highest peaks — often in the clear, low-angled light of early morning. The trek rewards patience and an early alarm.",
    points: ["Cold drains batteries fast — keep spares warm", "Charging is usually paid and limited higher up", "Drone use is regulated — confirm rules before flying"],
    image: { file: "himalayan-photography-sunrise.webp", folder: "gallery", alt: "Sunrise light on Himalayan peaks above a glacier" },
  },
];

/* ------------------------------------------------------------------ */
/* Peaks — elevations are widely published figures                     */
/* ------------------------------------------------------------------ */

export const peaks: Peak[] = [
  {
    id: "everest",
    name: "Mount Everest",
    elevationM: 8849,
    rank: "1st highest",
    description:
      "Sagarmatha in Nepali and Chomolungma in Tibetan. Seen at its best from Kala Patthar, Renjo La and Gokyo Ri rather than from Base Camp itself.",
    image: { file: "peak-everest.webp", folder: "gallery", alt: "Summit pyramid of Mount Everest" },
  },
  {
    id: "lhotse",
    name: "Lhotse",
    elevationM: 8516,
    rank: "4th highest",
    description:
      "Joined to Everest by the South Col, its vast south face towers over the Chhukung valley below Kongma La.",
    image: { file: "peak-lhotse.webp", folder: "gallery", alt: "The south face of Lhotse" },
  },
  {
    id: "makalu",
    name: "Makalu",
    elevationM: 8485,
    rank: "5th highest",
    description:
      "A distinctive four-sided pyramid to the east, visible from high points on the eastern side of the route on clear days.",
    image: { file: "peak-makalu.webp", folder: "gallery", alt: "Pyramid-shaped Makalu on the horizon" },
  },
  {
    id: "cho-oyu",
    name: "Cho Oyu",
    elevationM: 8188,
    rank: "6th highest",
    description:
      "The broad giant that rises above the head of the Gokyo valley, straddling the Nepal–Tibet border.",
    image: { file: "peak-cho-oyu.webp", folder: "gallery", alt: "Cho Oyu above the Gokyo valley" },
  },
  {
    id: "ama-dablam",
    name: "Ama Dablam",
    elevationM: 6812,
    description:
      "Not among the tallest, but widely considered one of the most beautiful. Its outline dominates the trail around Tengboche and Pangboche.",
    image: { file: "peak-ama-dablam.webp", folder: "gallery", alt: "Ama Dablam's sharp ridges seen from the trail" },
  },
];

/* ------------------------------------------------------------------ */
/* Culture                                                             */
/* ------------------------------------------------------------------ */

export const culture: CultureItem[] = [
  {
    id: "communities",
    title: "Traditional Sherpa Communities",
    body:
      "Many Khumbu families combine farming, yak herding and trekking work. Traditions differ from village to village and household to household, so the best way to learn is simply to ask, listen and take an interest.",
    image: { file: "sherpa-village-khumbu.webp", folder: "culture", alt: "Stone houses of a Sherpa village with potato fields" },
  },
  {
    id: "monasteries",
    title: "Buddhist Monasteries",
    body:
      "Tengboche, set on a ridge facing Ama Dablam, is the best known. Smaller gompas such as those at Pangboche and Thame add depth to the journey. Visitors are welcome at many, with modest dress and quiet respect.",
    image: { file: "tengboche-monastery-nepal.webp", folder: "highlights", alt: "Tengboche Monastery courtyard" },
  },
  {
    id: "spiritual",
    title: "Himalayan Spiritual Traditions",
    body:
      "Prayer flags, carved mani stones, chortens and prayer wheels line the trail. Passing them on the left — walking clockwise — is a simple, widely appreciated courtesy.",
    image: { file: "mani-wall-prayer-flags.webp", folder: "culture", alt: "Carved mani stones and prayer flags beside the trail" },
  },
  {
    id: "food",
    title: "Local Food and Hospitality",
    body:
      "Dal bhat is the trail's mainstay, and Sherpa stew (shyakpa), potatoes and butter tea are worth trying. Lodge menus shorten and prices rise with altitude because supplies arrive by porter or yak.",
    image: { file: "tea-house-dining.webp", folder: "culture", alt: "Tea-house dining room with a central stove" },
  },
  {
    id: "community-life",
    title: "Mountain Community Life",
    body:
      "Trekking has reshaped the Khumbu's economy, and communities manage its pressures on water, waste and forests. Carrying rubbish out and using refilled water rather than bottles helps.",
  },
];

/* ------------------------------------------------------------------ */
/* Gokyo                                                               */
/* ------------------------------------------------------------------ */

export const gokyo = {
  heading: "Discover the Turquoise Beauty of Gokyo",
  intro:
    "After the stark moraine of the Everest side, the Gokyo valley feels like another world: a string of glacial lakes held between the grey rubble of the Ngozumpa Glacier and steep valley walls, with Cho Oyu rising at its head.",
  feature: {
    file: "gokyo-lakes-nepal.webp",
    folder: "highlights",
    alt: "Turquoise Gokyo lake with the village and surrounding peaks",
  } as EtpImage,
  cards: [
    {
      title: "The lakes",
      body: "Several glacial lakes lie along the valley. Their turquoise colour comes from fine glacial sediment and changes with the light.",
      image: { file: "gokyo-third-lake.webp", folder: "gallery", alt: "Gokyo's third lake beneath snow peaks" } as EtpImage,
    },
    {
      title: "Ngozumpa Glacier",
      body: "A vast debris-covered glacier runs beside the lakes — its hummocky grey surface is a striking contrast to the water.",
      image: { file: "ngozumpa-glacier.webp", folder: "gallery", alt: "Debris-covered surface of the Ngozumpa Glacier" } as EtpImage,
    },
    {
      title: "Reflections",
      body: "On still mornings the peaks can mirror in the water. Wind, cloud and ice decide whether you'll see it — nothing is guaranteed.",
      image: { file: "gokyo-reflection.webp", folder: "gallery", alt: "Snow peaks reflected in a calm Gokyo lake" } as EtpImage,
    },
    {
      title: "Gokyo village",
      body: "A small cluster of lodges on the lakeshore that becomes a welcome base between Cho La and Renjo La.",
      image: { file: "gokyo-village.webp", folder: "gallery", alt: "Lodges of Gokyo village on the lakeshore" } as EtpImage,
    },
  ],
};

/* ------------------------------------------------------------------ */
/* Seasons                                                             */
/* ------------------------------------------------------------------ */

export const seasons: Season[] = [
  {
    id: "autumn",
    name: "Autumn",
    months: "Late Sep – Nov",
    verdict: "Popular",
    body:
      "Often the most settled period after the monsoon, with crisp air and good visibility on many days. It is also the busiest time on the trail, and nights at altitude are cold.",
    watchFor: ["Busy lodges and Lukla flights", "Cold nights above 4,500 m", "Early snowfall in some years"],
  },
  {
    id: "spring",
    name: "Spring",
    months: "Mar – May",
    verdict: "Popular",
    body:
      "Warmer days and rhododendrons in flower on the lower trail, with Everest expeditions at Base Camp. Haze and afternoon cloud tend to build later in the season, and snow can linger on the passes early on.",
    watchFor: ["Snow on passes early in the season", "Afternoon cloud and haze", "Expedition traffic around Base Camp"],
  },
  {
    id: "winter",
    name: "Winter",
    months: "Dec – Feb",
    verdict: "Challenging",
    body:
      "Very cold, quieter trails with fewer lodges open at higher settlements. Snowfall can make the passes hazardous or impassable, so plans need generous buffer days.",
    watchFor: ["Severe cold, especially at night", "Passes may close after snowfall", "Some high lodges closed"],
  },
  {
    id: "monsoon",
    name: "Monsoon",
    months: "Jun – mid Sep",
    verdict: "Not recommended",
    body:
      "Rain on the lower trail, cloud hiding the peaks and a higher chance of Lukla flight delays and trail disruption. Higher up, conditions can be drier but views are often limited.",
    watchFor: ["Flight delays and cancellations", "Slippery trails and landslide risk", "Limited mountain views"],
  },
];

export const seasonsNote =
  "The three high passes may become difficult or inaccessible at any time of year depending on weather and snow. No season guarantees clear skies or a safe crossing — a flexible plan and local judgement matter more than the calendar.";

/* ------------------------------------------------------------------ */
/* Preparation and safety                                              */
/* ------------------------------------------------------------------ */

export const preparation: InfoCard[] = [
  { id: "fitness", icon: "boot", title: "Endurance & experience", body: "Prior multi-day treks, ideally with nights above 4,000 m, and training for long days of ascent and descent carrying a daypack." },
  { id: "acclimatise", icon: "lungs", title: "Acclimatisation", body: "Planned rest days at Namche and Dingboche (or Chhukung), and the flexibility to add more if anyone in the group needs them." },
  { id: "ascent", icon: "gauge", title: "Gradual ascent & rest", body: "Keep daily gains in sleeping altitude modest above 3,000 m, climb high and sleep low where possible, and never ascend with symptoms." },
  { id: "gear", icon: "mountain", title: "Poles & footwear", body: "Broken-in waterproof boots with ankle support and trekking poles. Traction devices may be needed on passes — ask your guide before departure." },
  { id: "layers", icon: "layers", title: "Layered clothing", body: "Base layers, fleece, a warm down jacket, a waterproof shell, warm gloves, a hat and sun protection. Temperatures swing widely in a single day." },
  { id: "hydration", icon: "water", title: "Hydration & nutrition", body: "Drink steadily and eat well even without appetite. Treat or purify water; refill stations reduce plastic waste." },
  { id: "conditions", icon: "snow", title: "Snow, ice & changing trails", body: "Rockfall, ice and fresh snow can alter a route overnight. Pass decisions are made on the day, not in advance." },
  { id: "emergency", icon: "radio", title: "Emergency planning", body: "Know the descent routes, carry a charged phone and consider a satellite messenger. Evacuation is usually by helicopter and is weather-dependent." },
  { id: "insurance", icon: "shield", title: "Travel insurance", body: "A policy that explicitly covers trekking to the maximum altitude on your itinerary, including helicopter rescue and medical evacuation." },
  { id: "support", icon: "guide", title: "Qualified local support", body: "Experienced, licensed guides who know the passes, read the weather and make turn-around calls, with fairly treated and equipped porters." },
];

export const safetyNotice = {
  title: "High-Altitude Safety",
  body:
    "The Everest Three Passes Trek involves strenuous high-altitude trekking and remote mountain terrain. Altitude-related illness, severe weather, and difficult trail conditions can create serious risks. Itineraries should include appropriate acclimatization and flexibility, and trekkers should follow qualified local guidance.",
  footnote:
    "No itinerary removes altitude risk. Descending promptly when symptoms worsen is the most important treatment — consult a doctor about altitude before you travel.",
};

/* ------------------------------------------------------------------ */
/* Essential information — keep regulatory detail generic & dated      */
/* ------------------------------------------------------------------ */

export const travelInfo: InfoCard[] = [
  {
    id: "permits",
    icon: "permit",
    title: "Trekking permits",
    body: "The Khumbu has its own local entry permit (issued by the Khumbu Pasang Lhamu Rural Municipality) alongside the national park permit. Requirements and fees change — confirm current rules before departure.",
    verifyBeforeTravel: true,
  },
  {
    id: "park",
    icon: "park",
    title: "Sagarmatha National Park",
    body: "The route lies within Sagarmatha National Park, a UNESCO World Heritage Site, which requires an entry permit checked at Monjo. Carry your passport and permits on the trail.",
    verifyBeforeTravel: true,
  },
  {
    id: "guides",
    icon: "guide",
    title: "Guide requirements",
    body: "Nepal has introduced guide requirements for foreign trekkers in many regions, and how they apply in the Khumbu has varied. Regardless of rules, a guide is strongly advised for the high passes.",
    verifyBeforeTravel: true,
  },
  {
    id: "flights",
    icon: "plane",
    title: "Kathmandu–Lukla flights",
    body: "Short, weather-dependent mountain flights. In busy seasons flights have often operated from Ramechhap (Manthali), several hours' drive from Kathmandu. Schedules are set by airlines and change.",
    verifyBeforeTravel: true,
  },
  {
    id: "contingency",
    icon: "road",
    title: "Contingency options",
    body: "Build at least one or two buffer days for flight delays. Helicopter transfers or a longer overland approach may be possible alternatives, at additional cost and subject to availability.",
  },
  {
    id: "teahouses",
    icon: "house",
    title: "Tea houses",
    body: "Simple lodges throughout, with communal stove-heated dining rooms. Comfort drops with altitude and in peak season rooms fill quickly.",
  },
  {
    id: "connectivity",
    icon: "signal",
    title: "Connectivity",
    body: "Mobile coverage is patchy and paid Wi-Fi is available in many villages, but slows or disappears on the passes. Tell family you may be out of contact for days.",
  },
  {
    id: "insurance",
    icon: "shield",
    title: "Insurance & emergencies",
    body: "Carry policy details and emergency numbers on paper as well as on your phone. Share your itinerary with someone at home.",
  },
  {
    id: "cash",
    icon: "cash",
    title: "Cash & payments",
    body: "Carry enough Nepali rupees for the whole trek. ATMs are few and unreliable (Namche and Lukla), and card payments are rarely accepted higher up.",
  },
];

/* ------------------------------------------------------------------ */
/* Accommodation                                                       */
/* ------------------------------------------------------------------ */

export const accommodation = {
  heading: "Stay Along the Legendary Everest Trail",
  intro:
    "Nights on the Three Passes are spent in family-run tea houses and lodges — warm, social and simple. Expect a comfortable bed and a hot meal rather than a hotel.",
  image: {
    file: "everest-tea-house.webp",
    folder: "culture",
    alt: "Stone-built tea house lodge on the Everest trail with mountains behind",
  } as EtpImage,
  items: [
    { title: "Mountain tea houses", body: "Family-run lodges that are the backbone of Khumbu trekking." },
    { title: "Lodges & guesthouses", body: "Lower villages such as Namche and Lukla offer more choice, some with en-suite rooms." },
    { title: "Communal dining", body: "A shared dining room around a yak-dung or wood stove is the evening's warm heart." },
    { title: "Simple rooms", body: "Twin rooms with thin walls; shared toilets and paid hot showers are common at altitude." },
    { title: "Himalayan hospitality", body: "Hosts who have welcomed trekkers for generations — a real part of the journey." },
  ],
  note:
    "Facilities, room standards, heating, food options and availability vary by location, altitude, season and lodge. Higher settlements are the most basic.",
};

/* ------------------------------------------------------------------ */
/* Gallery                                                             */
/* ------------------------------------------------------------------ */

export const gallery: (EtpImage & { caption: string; wide?: boolean; tall?: boolean })[] = [
  { file: "kongma-la-pass-nepal.webp", folder: "passes", caption: "Kongma La Pass", alt: "Kongma La Pass with prayer flags", wide: true },
  { file: "cho-la-pass-himalayas.webp", folder: "passes", caption: "Cho La Pass", alt: "Cho La Pass approach over snow", tall: true },
  { file: "renjo-la-pass-gokyo.webp", folder: "passes", caption: "Renjo La Pass", alt: "Renjo La Pass above the Gokyo lakes" },
  { file: "everest-base-camp-khumbu.webp", folder: "highlights", caption: "Everest Base Camp", alt: "Everest Base Camp and the Khumbu Icefall" },
  { file: "kala-patthar-everest-view.webp", folder: "highlights", caption: "Kala Patthar", alt: "Everest at sunrise from Kala Patthar", tall: true },
  { file: "gokyo-lakes-nepal.webp", folder: "highlights", caption: "Gokyo Lakes", alt: "Turquoise Gokyo lakes", wide: true },
  { file: "namche-bazaar-khumbu.webp", folder: "highlights", caption: "Namche Bazaar", alt: "Namche Bazaar at dusk" },
  { file: "tengboche-monastery-nepal.webp", folder: "highlights", caption: "Tengboche Monastery", alt: "Tengboche Monastery beneath Ama Dablam" },
  { file: "dingboche-village-everest.webp", folder: "highlights", caption: "Dingboche", alt: "Dingboche village and stone-walled fields", tall: true },
  { file: "khumbu-glacier-peaks.webp", folder: "gallery", caption: "Himalayan peaks & glaciers", alt: "Himalayan peaks above the Khumbu Glacier", wide: true },
  { file: "sherpa-village-khumbu.webp", folder: "culture", caption: "Sherpa villages", alt: "Sherpa village life in the Khumbu", wide: true },
];

/* ------------------------------------------------------------------ */
/* CTA + related                                                       */
/* ------------------------------------------------------------------ */

export const cta = {
  heading: "Ready to Cross the Three Legendary Passes?",
  text:
    "Take on an extraordinary Himalayan adventure through the legendary Khumbu region, crossing dramatic mountain passes, exploring Gokyo Lakes, and discovering the unforgettable landscapes of Everest.",
  image: {
    file: "everest-three-passes-cta.webp",
    folder: "hero",
    alt: "Himalayan peaks glowing at dusk above the Khumbu",
  } as EtpImage,
};

/**
 * Related internal links. Only include pages that exist today.
 * Add Everest Base Camp / Gokyo / Annapurna trek pages here when they launch.
 */
export const related: (EtpLink & { note: string })[] = [
  { label: "Adventure activities", href: "/activities/adventure", note: "All adventure experiences" },
  { label: "Camping in Nepal", href: "/activities/adventure/camping", note: "Wild camps under Himalayan skies" },
  { label: "Paragliding in Nepal", href: "/activities/adventure/paragliding", note: "Fly above Pokhara's lakes" },
  { label: "Koshi Province", href: "/destinations/koshi-province", note: "The province that holds the Khumbu" },
];
