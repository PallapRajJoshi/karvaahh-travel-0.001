/**
 * Paragliding in Pokhara — experience content.
 * Presentation lives in the components; all copy lives here.
 */

export type IconName =
  | "mountain"
  | "wing"
  | "lake"
  | "camera"
  | "shield"
  | "wind"
  | "briefing"
  | "gear"
  | "pilot"
  | "clock"
  | "pin"
  | "sun"
  | "leaf"
  | "snow"
  | "rain"
  | "heart"
  | "users"
  | "compass"
  | "van"
  | "info";

export interface Highlight {
  title: string;
  description: string;
  icon: IconName;
}

export interface FlightStep {
  step: number;
  title: string;
  description: string;
  /** Rough altitude label used by the flight-path spine. Illustrative, not a guarantee. */
  altitude: string;
}

export interface SafetyPoint {
  title: string;
  description: string;
  icon: IconName;
}

export interface TravellerType {
  title: string;
  description: string;
  icon: IconName;
}

export const overviewHighlights: Highlight[] = [
  {
    title: "Annapurna on the horizon",
    description:
      "Fly with the Annapurna range and Machhapuchhre filling the skyline north of the valley.",
    icon: "mountain",
  },
  {
    title: "Phewa Lake below",
    description:
      "Watch the lake, the boats and the rooftops of Lakeside shrink away beneath your feet.",
    icon: "lake",
  },
  {
    title: "Launch from Sarangkot",
    description:
      "Take off from the ridge above Pokhara — the hilltop viewpoint the valley is known for.",
    icon: "wing",
  },
  {
    title: "Photos and video",
    description:
      "Onboard photographs and flight video are available with selected packages.",
    icon: "camera",
  },
];

export const flightSteps: FlightStep[] = [
  {
    step: 1,
    title: "Hotel pickup or meeting point",
    description:
      "We collect you from your hotel in Pokhara, or meet you at an agreed point in Lakeside, and confirm the day's flying conditions before you set off.",
    altitude: "Lakeside · 820 m",
  },
  {
    step: 2,
    title: "Drive up to Sarangkot",
    description:
      "A short road journey climbs the ridge above the valley to the launch site, with the Annapurna skyline opening up as you gain height.",
    altitude: "Sarangkot ridge · 1,590 m",
  },
  {
    step: 3,
    title: "Safety briefing and preparation",
    description:
      "Your tandem pilot fits the harness and helmet, checks the wing, and walks you through the launch, the flight and the landing.",
    altitude: "Launch site",
  },
  {
    step: 4,
    title: "Tandem takeoff",
    description:
      "A few steps forward with your pilot and the wing lifts. Within moments the ridge falls away and you are flying.",
    altitude: "Wing up",
  },
  {
    step: 5,
    title: "Scenic flight over the valley",
    description:
      "Ride the thermals above the hills with Phewa Lake below and the Himalaya ahead. Flight length depends on your package and the conditions.",
    altitude: "Above the valley",
  },
  {
    step: 6,
    title: "Landing and return",
    description:
      "You land on the lakeside field near Phewa Lake, where our team meets you and returns you to your hotel.",
    altitude: "Lakeside · 820 m",
  },
];

export const safetyPoints: SafetyPoint[] = [
  {
    title: "Pre-flight safety briefing",
    description:
      "Every passenger is briefed before takeoff on the launch run, seating, in-flight posture and the landing approach.",
    icon: "briefing",
  },
  {
    title: "Qualified tandem pilots",
    description:
      "Flights are operated by experienced tandem pilots who fly the Pokhara valley year-round.",
    icon: "pilot",
  },
  {
    title: "Maintained equipment",
    description:
      "Wings, harnesses, helmets and reserve systems are supplied and checked by the operator before each flight.",
    icon: "gear",
  },
  {
    title: "Weather monitoring",
    description:
      "Conditions are assessed on the morning of your flight. Nothing launches in unsuitable weather.",
    icon: "wind",
  },
  {
    title: "Preparation on the ground",
    description:
      "Harness fitting, equipment checks and a practice launch run all happen before your wing leaves the ridge.",
    icon: "shield",
  },
  {
    title: "Tell us what we should know",
    description:
      "Share any health, mobility or weight considerations when you book so the operator can advise you properly.",
    icon: "heart",
  },
];

export const travellerTypes: TravellerType[] = [
  {
    title: "Adventure seekers",
    description: "The single best hour of adrenaline in the Pokhara valley.",
    icon: "wing",
  },
  {
    title: "Couples",
    description: "Fly one after the other and watch each other come down over the lake.",
    icon: "heart",
  },
  {
    title: "Families and groups",
    description: "Multiple pilots can fly together so nobody waits alone on the ridge.",
    icon: "users",
  },
  {
    title: "First-time visitors",
    description: "The fastest way to understand how Pokhara sits between lake and mountain.",
    icon: "compass",
  },
  {
    title: "Sightseeing travellers",
    description: "Pairs neatly with a morning at Sarangkot or an afternoon on Phewa Lake.",
    icon: "sun",
  },
  {
    title: "Photographers",
    description: "Open aerial views of the Annapurna range with nothing in the frame but sky.",
    icon: "camera",
  },
];
