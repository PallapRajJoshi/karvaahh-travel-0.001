import type { Feature } from "../types";

/**
 * "Why Karvaahh" feature grid. Set `enabled: false` for any claim Karvaahh
 * cannot currently deliver — it will disappear from the page.
 */
export const features: Feature[] = [
  { id: "planning", icon: "compass", title: "Personalized Trek Planning", description: "Routes, pace and rest days planned around your fitness, dates and goals.", enabled: true },
  { id: "custom", icon: "sliders", title: "Customized Trek Packages", description: "Classic, Kala Patthar, private, premium-lodge or helicopter-return options.", enabled: true },
  { id: "stay", icon: "bed", title: "Accommodation Coordination", description: "Kathmandu hotels and teahouse lodges on the trail arranged in advance.", enabled: true },
  { id: "transport", icon: "plane", title: "Transportation Arrangements", description: "Airport transfers, Lukla flights and road transfers coordinated for you.", enabled: true },
  { id: "logistics", icon: "backpack", title: "Trekking Logistics & Support", description: "Permits, guides and porters organised so you can focus on the trail.", enabled: true },
  { id: "culture", icon: "prayer-flags", title: "Local Cultural Experiences", description: "Monastery visits and time in Sherpa villages, approached with respect.", enabled: true },
  { id: "assist", icon: "headset", title: "Dedicated Trip Assistance", description: "One point of contact from first enquiry to your flight home.", enabled: true },
  { id: "altitude", icon: "heart-pulse", title: "High-Altitude Preparation", description: "Practical guidance on training, packing and acclimatisation before you go.", enabled: true },
];
