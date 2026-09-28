/**
 * Travel preparation accordion.
 *
 * `requiresConfirmation: true` shows a "Confirm before booking" tag.
 * Rules on permits, visas, age and medical criteria are set by the
 * authorities and change between seasons — review this file every year.
 * Last reviewed: September 2026.
 */
import type { AccordionEntry } from "../types";

export const preparationHeading = {
  eyebrow: "Before You Go",
  heading: "Prepare for Your Kailash Mansarovar Yatra",
  intro: "Everything you need to know before departure, in one place. Open a topic to read more.",
};

export const safetyNote =
  "The yatra involves high altitude (above 5,000 m on the Kora), severe cold and sustained physical exertion in remote areas far from hospitals. Consult your doctor well before booking, especially if you have heart, lung or blood-pressure concerns, and follow your tour leader's advice on the trail.";

export const preparation: AccordionEntry[] = [
  {
    id: "documents",
    title: "Travel Documents & Permits",
    icon: "document",
    requiresConfirmation: true,
    body: [
      "Kailash lies in the Tibet Autonomous Region of China. Independent travel is not allowed: every pilgrim travels on a group visa and permits arranged through an authorised operator.",
    ],
    list: [
      "Passport valid for at least 6 months beyond travel, with blank pages",
      "Chinese group visa and Tibet Travel Permit, plus area permits for the Kailash region",
      "Recent passport photographs and a medical certificate, if required by current rules",
      "Scanned passport copy submitted several weeks before departure — we'll confirm the deadline",
    ],
  },
  {
    id: "visa",
    title: "Visa & Entry Requirements",
    icon: "shield",
    requiresConfirmation: true,
    body: [
      "Indian citizens don't need a visa for Nepal, but a passport is mandatory for this yatra because of the Chinese group visa — other ID is not accepted.",
      "NRIs and foreign passport holders (including OCI) usually have their group visa processed in Kathmandu and need to arrive a few working days earlier. Age limits and medical criteria are set by the authorities and can change; we'll confirm what applies to you.",
    ],
  },
  {
    id: "acclimatization",
    title: "High-Altitude Acclimatization",
    icon: "trend-up",
    body: [
      "Your body needs time to adjust. Good itineraries gain altitude gradually and include rest days before the Kora.",
    ],
    list: [
      "Walk slowly, rest often and drink plenty of water",
      "Avoid alcohol and smoking during the trip",
      "Report headache, nausea, breathlessness or confusion to your leader immediately",
      "The safest treatment for worsening altitude sickness is to descend",
    ],
  },
  {
    id: "fitness",
    title: "Physical Fitness & Trekking Preparation",
    icon: "mountain",
    body: [
      "Start preparing at least two to three months ahead. Aim to walk comfortably for several hours a day, including uphill.",
    ],
    list: [
      "Daily brisk walking, stair climbing and light cardio",
      "Breathing exercises and pranayama",
      "Practice walks in the boots you'll wear",
      "Ponies and porters can often be hired in Darchen, subject to local availability",
    ],
  },
  {
    id: "packing",
    title: "Clothing & Packing Essentials",
    icon: "snow",
    body: ["Temperatures can drop well below freezing at night, even in summer. Dress in layers."],
    list: [
      "Thermal base layers, fleece and a warm down jacket",
      "Waterproof, windproof outer shell",
      "Broken-in trekking boots, woollen socks, gloves, warm hat",
      "UV-protection sunglasses, sunscreen and lip balm",
      "Personal medicines, water bottle, headlamp, small daypack",
    ],
  },
  {
    id: "stay-meals",
    title: "Accommodation & Meals",
    icon: "bed",
    body: [
      "Hotels in Kathmandu and larger towns are comfortable. Near the lake and on the Kora, stays are basic guesthouses with shared rooms and limited facilities.",
      "Simple vegetarian meals are generally available throughout; tell us about any dietary needs in advance.",
    ],
  },
  {
    id: "transport",
    title: "Transportation & Route Conditions",
    icon: "route",
    requiresConfirmation: true,
    body: [
      "Roads in Tibet are generally good but long. On the Nepal side, landslides, weather and border timings can cause delays. Helicopter and small-aircraft legs depend on visibility and are frequently rescheduled.",
      "Build buffer days into your plans and avoid tight onward connections.",
    ],
  },
  {
    id: "insurance",
    title: "Travel Insurance & Emergency Planning",
    icon: "shield",
    body: ["Buy insurance that explicitly covers trekking above 5,000 m, medical treatment and emergency evacuation."],
    list: [
      "Check altitude limits in the policy wording",
      "Carry policy details and emergency numbers on paper",
      "Share your itinerary with family at home",
    ],
  },
  {
    id: "medical",
    title: "Medical Preparation & Altitude Awareness",
    icon: "alert",
    body: [
      "Get a full medical check-up before booking and discuss altitude with your doctor, including any medicines they may recommend.",
      "Carry enough of your regular medication for the whole trip plus spare, in your hand luggage.",
    ],
  },
  {
    id: "etiquette",
    title: "Environmental Responsibility & Pilgrimage Etiquette",
    icon: "leaf",
    body: ["The Kailash region is fragile and sacred. Leave no trace."],
    list: [
      "Carry out all plastic and rubbish",
      "Use refillable bottles",
      "Walk clockwise on the Kora and pass shrines on your right",
      "Ask before photographing people, monasteries or rituals",
    ],
  },
];
