import type { AccordionEntry } from "../types";

/**
 * Preparation accordion. Items marked `verify: true` carry rules that change —
 * they render a "Verify before travel" tag. Review these each season.
 * LAST REVIEWED: 2026-09 (update this line when you re-verify).
 */
export const travelInfoReviewed = "September 2026";

export const safetyNote = {
  title: "Your safety at altitude",
  body: "The Everest Base Camp trek spends several nights above 4,000 m, in cold temperatures and with long days of physical exertion. Altitude sickness can affect anyone, regardless of fitness or age. Ascend gradually, keep to the acclimatisation days, tell your guide about any symptoms immediately, and descend if they worsen. Please consult your doctor before booking — especially if you have heart, lung or blood-pressure conditions or are pregnant.",
};

export const travelInformation: AccordionEntry[] = [
  {
    id: "snp-permit",
    title: "Sagarmatha National Park Entry Permit",
    verify: true,
    body: [
      "Every trekker entering Sagarmatha National Park needs a park entry permit. The park checkpoint is at Monjo, between Phakding and Namche Bazaar.",
      "Fees differ for foreign nationals and SAARC nationals (including Indian citizens) and are revised from time to time. Karvaahh arranges this permit as part of your booking and confirms the current fee in your quote.",
    ],
  },
  {
    id: "local-permits",
    title: "Applicable Local Permits & Regulations",
    verify: true,
    body: [
      "The Khumbu Pasang Lhamu Rural Municipality charges its own entry permit, collected on the trail near Lukla. In the Everest region this local permit has replaced the TIMS card.",
      "Nepal's rules on licensed guides for foreign trekkers have changed in recent years. We confirm the requirement that applies on your travel dates when you book.",
    ],
  },
  {
    id: "documents",
    title: "Travel Documents & Identification",
    verify: true,
    body: [
      "Indian citizens do not need a visa for Nepal, but must carry an accepted photo ID such as a valid passport or Voter ID card. Most other nationalities need a Nepal visa, which is available on arrival for many passports.",
      "Carry several passport-size photographs and photocopies of your ID and insurance documents; keep digital copies as well.",
    ],
  },
  {
    id: "acclimatization",
    title: "High-Altitude Acclimatisation",
    body: [
      "The itinerary follows the principle of 'climb high, sleep low', with rest days at Namche Bazaar and Dingboche. These days are part of the plan — not optional extras.",
      "Walk slowly, drink plenty of water, avoid alcohol at altitude and sleep well. Your guide will monitor the group and may adjust the pace or add a rest day.",
    ],
  },
  {
    id: "fitness",
    title: "Physical Fitness & Trekking Preparation",
    body: [
      "No technical climbing is involved, but you will walk for several hours a day over rough, steep ground for many consecutive days. Good cardiovascular fitness makes the trek far more enjoyable.",
      "Start training at least 8–12 weeks before departure: regular hill walks with a loaded day pack, stair climbing, and cardio such as running, cycling or swimming.",
    ],
  },
  {
    id: "packing",
    title: "Clothing & Packing Essentials",
    body: [
      "Pack in layers: moisture-wicking base layers, a fleece mid-layer, an insulated down jacket, and a waterproof shell. Add a warm hat, sun hat, gloves, and buff.",
      "Bring broken-in waterproof trekking boots, a four-season sleeping bag (or hire one in Kathmandu), trekking poles, a headlamp, sunglasses with UV protection, high-SPF sunscreen, water purification and a basic first-aid kit.",
    ],
  },
  {
    id: "accommodation",
    title: "Accommodation & Meals",
    body: [
      "Nights on the trail are spent in teahouses — family-run lodges with simple twin rooms and a heated communal dining room. Rooms become more basic and colder as you climb.",
      "Menus typically include dal bhat, noodles, soups, potatoes, eggs and tea. Hot showers, charging and Wi-Fi are usually available for an extra charge and become less reliable at altitude.",
    ],
  },
  {
    id: "lukla-flights",
    title: "Lukla Flight & Transportation Information",
    verify: true,
    body: [
      "Flights to Lukla operate only in good visibility and are frequently delayed by weather. In busy seasons, many flights depart from Manthali Airport in Ramechhap, several hours' drive from Kathmandu, rather than from Kathmandu itself.",
      "We recommend building at least one contingency day into your plans before international departure. Helicopter alternatives may be possible during extended delays, at additional cost and subject to availability.",
    ],
  },
  {
    id: "insurance",
    title: "Travel Insurance & Emergency Planning",
    body: [
      "Travel insurance that explicitly covers trekking up to at least 5,600 m and emergency helicopter evacuation is strongly recommended. Check your policy wording for altitude limits.",
      "Share your insurance details and emergency contacts with Karvaahh before departure so the team can act quickly if evacuation is ever required.",
    ],
  },
  {
    id: "ams",
    title: "Altitude Sickness Awareness",
    body: [
      "Early signs of acute mountain sickness (AMS) include headache, nausea, loss of appetite, dizziness, fatigue and difficulty sleeping. Tell your guide about any symptoms straight away.",
      "Symptoms such as confusion, loss of coordination, breathlessness at rest or a persistent wet cough can indicate a serious condition requiring immediate descent and medical help. Speak to a doctor before travel about prevention and any medication.",
    ],
  },
  {
    id: "responsible",
    title: "Responsible Trekking & Environmental Protection",
    body: [
      "Carry out all non-biodegradable waste, use a refillable bottle with purification rather than buying plastic bottles, and stay on established trails.",
      "Respect local customs: walk clockwise around chortens and mani walls, dress modestly at monasteries, and ask before photographing people.",
    ],
  },
];
