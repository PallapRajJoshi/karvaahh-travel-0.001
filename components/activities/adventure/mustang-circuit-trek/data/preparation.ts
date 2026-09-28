import type { PrepItem } from "./types";

/**
 * Travel preparation.
 * Permit and entry rules change — review against official sources
 * (Department of Immigration, ACAP / NTNC, Nepal Tourism Board) and update
 * `rulesVerifiedOn` in config.ts whenever you do. No fees are hardcoded on purpose.
 */
export const preparation: PrepItem[] = [
  {
    id: "rap",
    title: "Upper Mustang Restricted Area Permit",
    appliesTo: "upper",
    body: [
      "North of Kagbeni, Upper Mustang is a restricted area. Non-Nepali visitors need a Restricted Area Permit (RAP), issued through a registered trekking agency.",
      "The permit carries a fee set for a minimum number of days, with extra charges for longer stays. Current rules also require travelling with a licensed guide and may set a minimum group size. We confirm the current fee and conditions in writing before you book.",
    ],
    lowerNote: "Not required for Jomsom, Marpha, Kagbeni village or Muktinath.",
    upperNote: "Required for everywhere beyond Kagbeni, including Lo Manthang and Chhosar.",
  },
  {
    id: "acap",
    title: "ACAP Permit & Other Applicable Permissions",
    appliesTo: "both",
    body: [
      "All of Mustang falls within the Annapurna Conservation Area, so visitors need an ACAP entry permit. Fees differ by nationality group.",
      "Depending on current regulations, a trekker registration card or its replacement may also apply. We check what is required for your route and nationality at the time of booking.",
    ],
    lowerNote: "ACAP permit required.",
    upperNote: "ACAP permit plus the Restricted Area Permit.",
  },
  {
    id: "documents",
    title: "Travel Documents & Identification",
    appliesTo: "both",
    body: [
      "Carry your passport (valid for at least six months), visa where applicable, passport photos and printed copies of permits. There are several checkpoints along the route.",
      "Indian citizens can enter Nepal without a visa, but should confirm which identity document is accepted for trekking permits — a valid passport is the safest choice.",
    ],
  },
  {
    id: "acclimatization",
    title: "High-Altitude Acclimatization",
    appliesTo: "both",
    body: [
      "Much of the route is at high altitude. Ascend gradually, drink plenty of water, avoid alcohol early on and build rest days into the plan.",
      "Learn the signs of acute mountain sickness — headache, nausea, dizziness, unusual tiredness. If symptoms worsen, stop ascending and descend. Talk to your doctor before travel, especially about any existing condition or medication.",
    ],
    lowerNote: "Muktinath is significantly higher than Jomsom — take the climb slowly.",
    upperNote: "Longer periods at altitude and higher passes; allow for extra acclimatization.",
  },
  {
    id: "fitness",
    title: "Physical Fitness & Trekking Preparation",
    appliesTo: "both",
    body: [
      "You don’t need technical climbing skills, but you should be comfortable walking for several hours a day on uneven, dusty trails, often in wind.",
      "Start training a couple of months ahead: regular walks with a loaded daypack, stair climbing and some cardio. Road-based tours are gentler but still involve altitude and some walking.",
    ],
  },
  {
    id: "packing",
    title: "Clothing & Packing Essentials",
    appliesTo: "both",
    body: [
      "Layers are key: base layers, a warm fleece, an insulated jacket and a windproof shell. Mornings and nights are cold even when days are warm.",
      "Pack broken-in trekking boots, sun hat, warm hat and gloves, UV sunglasses, high-SPF sunscreen, lip balm, a buff or scarf against dust, a sleeping bag suited to cold nights, a water bottle with purification, a headlamp and a basic first-aid kit.",
    ],
  },
  {
    id: "stays-meals",
    title: "Accommodation & Meals",
    appliesTo: "both",
    body: [
      "Nights are spent in family-run tea houses and lodges. Rooms are simple; heating, hot water and charging may be limited or charged extra, especially in Upper Mustang.",
      "Dal bhat, Thakali set meals, noodles, soups and Tibetan bread are widely available. Let us know about dietary needs early so we can plan ahead.",
    ],
  },
  {
    id: "transport",
    title: "Transportation & Road Conditions",
    appliesTo: "both",
    body: [
      "Jomsom is reached by short mountain flights or by road. Flights are weather-dependent and often operate only in the morning; roads can be rough and affected by landslides, particularly in the monsoon.",
      "Parts of Mustang are now reachable by jeep, which is how road-based tours operate. Keep spare days in your plan for delays.",
    ],
  },
  {
    id: "insurance",
    title: "Travel Insurance & Emergency Planning",
    appliesTo: "both",
    body: [
      "Take travel insurance that explicitly covers trekking at high altitude and helicopter evacuation. Check the altitude limit in the policy wording.",
      "Mobile coverage is patchy in Upper Mustang. Share your itinerary with family and keep emergency contacts and your insurer’s number with you.",
    ],
  },
  {
    id: "etiquette",
    title: "Environmental Responsibility & Cultural Etiquette",
    appliesTo: "both",
    body: [
      "Carry out your rubbish, refill water instead of buying plastic bottles and stay on established trails.",
      "Dress modestly, walk clockwise around chortens and mani walls, remove shoes and hats where asked in monasteries, and always ask before photographing people or temple interiors.",
    ],
  },
];
