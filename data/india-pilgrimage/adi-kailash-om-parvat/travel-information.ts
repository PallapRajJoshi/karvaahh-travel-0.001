import type { TravelInfoItem } from "./types";

/**
 * "Prepare for Your Adi Kailash Yatra" accordion.
 *
 * `needsConfirmation: true` shows a "Confirm before travel" badge. Rules on
 * permits, eligibility and documents are set by the local administration and
 * change — re-check them every season (last reviewed: Sep 2026).
 */
export const travelInformation: TravelInfoItem[] = [
  {
    id: "documents",
    title: "Travel Documents & Identification",
    icon: "document",
    summary: "Carry original government photo ID and several copies — they are checked repeatedly along the route.",
    points: [
      "Original government-issued photo ID, plus photocopies",
      "Recent passport-size photographs",
      "Printed and digital copies of your booking and permit documents",
      "Emergency contact details kept on your person",
    ],
    needsConfirmation: true,
    confirmWith: "Karvaahh confirms the exact document list when you book.",
  },
  {
    id: "permits",
    title: "Inner Line Permits & Local Permissions",
    icon: "shield",
    summary:
      "The route beyond Dharchula passes through a restricted border area. An Inner Line Permit (ILP), issued through the SDM office in Dharchula, is required.",
    points: [
      "The permit is widely reported to be available to Indian citizens only; other nationals should not plan this yatra without written confirmation of eligibility",
      "Applications typically involve ID, photographs, a medical fitness certificate and verification — requirements can change",
      "Some pre-registration can be done online, but in-person formalities at Dharchula may still be needed",
      "Carry the permit at all times; it is inspected at several check posts",
    ],
    needsConfirmation: true,
    confirmWith: "Current rules are confirmed with the issuing authority for every booking.",
  },
  {
    id: "acclimatisation",
    title: "High-Altitude Acclimatization",
    icon: "mountain",
    summary:
      "Parts of the yatra lie above 4,000 m. Gaining height gradually, with rest stops, is the most important safety measure.",
    points: [
      "Follow an itinerary with planned acclimatisation stops — don't rush the ascent",
      "Drink plenty of water and avoid alcohol and smoking",
      "Report headache, nausea, dizziness or breathlessness immediately",
      "Descending is the most effective response to worsening symptoms",
    ],
    needsConfirmation: false,
  },
  {
    id: "fitness",
    title: "Physical Fitness & Trekking Preparation",
    icon: "backpack",
    summary:
      "Much of the route is covered by road, but long mountain drives and short walks at altitude are tiring.",
    points: [
      "Begin regular walking or light cardio several weeks before travel",
      "Practise walking on slopes and stairs",
      "Be comfortable with long days in a vehicle on mountain roads",
    ],
    needsConfirmation: false,
  },
  {
    id: "packing",
    title: "Clothing & Packing Essentials",
    icon: "snow",
    summary: "Pack for cold, wind and strong sun — even in the warmer months.",
    points: [
      "Thermal base layers, fleece and a warm insulated jacket",
      "Waterproof outer layer, warm cap, gloves and woollen socks",
      "Sturdy walking shoes with good grip",
      "Sunglasses, sunscreen and lip balm for high-altitude sun",
      "Personal medicines, a torch, power bank and reusable water bottle",
    ],
    needsConfirmation: false,
  },
  {
    id: "stays",
    title: "Accommodation & Meals",
    icon: "bed",
    summary:
      "Stays range from hotels in the towns to simple guesthouses, homestays or camps in the high valleys.",
    points: [
      "Expect basic facilities at higher stops — shared bathrooms and limited hot water are common",
      "Meals are usually simple vegetarian fare",
      "Electricity and mobile connectivity can be limited or unavailable",
    ],
    needsConfirmation: true,
    confirmWith: "Your specific stays are listed in your confirmed itinerary.",
  },
  {
    id: "transport",
    title: "Transportation & Road Conditions",
    icon: "vehicle",
    summary:
      "Mountain roads are narrow and exposed, and conditions change with weather. Landslides can cause delays or closures.",
    points: [
      "Road access and vehicle rules beyond Dharchula are set by local authorities",
      "Travel days can be long; build in buffer days where possible",
      "Motion-sickness remedies are worth carrying",
    ],
    needsConfirmation: true,
    confirmWith: "Road status and vehicle arrangements are confirmed close to departure.",
  },
  {
    id: "insurance",
    title: "Travel Insurance & Emergency Planning",
    icon: "shield",
    summary:
      "Take travel insurance that covers high-altitude travel, emergency evacuation and trip interruption.",
    points: [
      "Check that your policy covers the altitudes on your itinerary",
      "Share your itinerary with family before you leave",
      "Medical facilities in the high valleys are very limited",
    ],
    needsConfirmation: false,
  },
  {
    id: "medical",
    title: "Medical Preparation & Altitude Awareness",
    icon: "alert",
    summary:
      "See a qualified doctor before booking, and again before travel, to discuss altitude, cold and exertion.",
    points: [
      "A medical fitness certificate may be required for the permit",
      "Ask your doctor about altitude-sickness prevention suitable for you",
      "Carry a personal first-aid kit and enough of any regular medication",
    ],
    needsConfirmation: true,
    confirmWith: "Medical certificate requirements are confirmed with the permit process.",
  },
  {
    id: "etiquette",
    title: "Environmental Responsibility & Pilgrimage Etiquette",
    icon: "leaf",
    summary: "These are sacred and fragile places. Leave them as you found them.",
    points: [
      "Carry all waste back with you; avoid single-use plastic",
      "Dress modestly and follow local customs at temples and shrines",
      "Ask before photographing people, rituals or homes",
      "Respect instructions from security personnel at check posts",
    ],
    needsConfirmation: false,
  },
];
