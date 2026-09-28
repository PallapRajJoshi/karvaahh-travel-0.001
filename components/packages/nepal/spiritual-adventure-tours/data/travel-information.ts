import type { AccordionEntry } from "../types";

/**
 * "Plan Your Nepal Journey" accordion.
 *
 * Rules that change (visas, permits, fees, guide requirements) are described
 * in general terms here, never as fixed figures. Visitors are pointed to
 * official sources and told we confirm current requirements at booking.
 * Update `lastReviewed` whenever you review this file.
 */
export const travelInfoMeta = {
  lastReviewed: "2026-09-26",
  disclaimer:
    "Entry rules, permits and fees are set by the relevant authorities and can change at short notice. Always confirm current requirements before you travel.",
};

export const travelInformation: AccordionEntry[] = [
  {
    id: "best-time",
    title: "Best Time to Visit",
    icon: "calendar",
    body: [
      "Autumn (September–November) and spring (March–May) offer the clearest skies and most comfortable trekking. Winter suits heritage tours and lower treks, while the monsoon (June–August) is lush, quieter and the best time for rain-shadow Upper Mustang.",
    ],
  },
  {
    id: "documents",
    title: "Travel Documents & Entry Requirements",
    icon: "document",
    body: [
      "Indian citizens do not need a visa for Nepal but must carry a valid passport or another accepted photo ID. Most other nationalities can get a tourist visa on arrival or apply online in advance, while a few must apply before travel.",
      "Trekking regions need park or conservation-area permits, and some areas such as Upper Mustang and Manaslu require restricted-area permits arranged through a registered agency. We handle permits for every trip we operate.",
    ],
    list: [
      "Check the Nepal Department of Immigration website for current visa rules.",
      "Carry a few passport photos and copies of your ID for permits.",
      "Travel insurance covering your activities (including high-altitude trekking and helicopter evacuation, if trekking) is strongly recommended.",
    ],
  },
  {
    id: "transport",
    title: "Transportation & Connectivity",
    icon: "bus",
    body: [
      "Tribhuvan International Airport in Kathmandu is the main gateway, and overland crossings from India are common for pilgrims. Within Nepal, we use private vehicles for comfort and domestic flights to save time on long routes such as Pokhara–Jomsom or Kathmandu–Lukla.",
      "Mountain flights and roads depend on weather, so itineraries include buffer time where it matters. Mobile data works in cities and along most main trekking routes, and many lodges offer Wi-Fi, though it is slower and less reliable at altitude.",
    ],
  },
  {
    id: "accommodation",
    title: "Accommodation Options",
    icon: "bed",
    body: [
      "Choose from heritage boutique hotels and international-standard properties in Kathmandu and Pokhara, comfortable guesthouses near pilgrimage sites, and teahouse lodges on trekking routes.",
      "Teahouses are simple but warm and welcoming. Rooms are usually twin-share with shared facilities at higher altitude. We’ll match stays to your comfort level and budget.",
    ],
  },
  {
    id: "packing",
    title: "Packing Essentials",
    icon: "backpack",
    body: ["Pack in layers. Temperatures vary sharply between the valleys and the mountains, and between day and night."],
    list: [
      "Modest clothing for temples (shoulders and knees covered) and easy-to-remove shoes",
      "Warm layers, a down jacket and a waterproof shell for higher areas",
      "Broken-in walking shoes or trekking boots",
      "Sun protection: hat, sunglasses, high-SPF sunscreen and lip balm",
      "Reusable water bottle and purification tablets or filter",
      "Personal medicines, a basic first-aid kit and a headlamp",
    ],
  },
  {
    id: "altitude",
    title: "Altitude & Safety Guidelines",
    icon: "altitude",
    body: [
      "Muktinath, Gosainkunda and most trekking routes are at high altitude, where altitude sickness can affect anyone regardless of fitness. Our itineraries build in gradual ascent and acclimatisation days.",
      "Consult your doctor before travelling, especially if you have heart or respiratory conditions, and tell us about any health concerns when planning. Foreign trekkers in most national parks and conservation areas are currently required to trek with a licensed guide.",
    ],
    list: [
      "Ascend gradually and follow the “climb high, sleep low” principle",
      "Stay hydrated and avoid alcohol at altitude",
      "Descend promptly if symptoms such as severe headache, breathlessness at rest or confusion appear",
    ],
  },
  {
    id: "custom",
    title: "Customized Tour Planning",
    icon: "route",
    body: [
      "Every Karvaahh journey can be tailored: travel dates, pace, hotel category, private or group travel, and the balance between pilgrimage, sightseeing and trekking.",
      "Share your ideas and we’ll send a day-by-day itinerary with an itemised quote, and we'll keep refining it until it feels right.",
    ],
  },
];
