export interface SafetyGroup {
  id: string;
  title: string;
  icon: "compass" | "mountain" | "shield" | "checklist" | "leaf";
  items: string[];
}

// Source: brief §16 "Safety, Permits, and Responsible Travel" — five groups,
// items kept close to the brief's wording.
export const safetyGroups: SafetyGroup[] = [
  {
    id: "physical-preparation",
    title: "Physical Preparation",
    icon: "compass",
    items: [
      "Suitable physical conditioning for multi-day, challenging trekking",
      "Preparation for uneven terrain and sustained uphill walking",
      "Appropriate equipment and clothing for remote mountain conditions",
    ],
  },
  {
    id: "altitude-awareness",
    title: "Altitude Awareness",
    icon: "mountain",
    items: [
      "Plan gradual ascent and appropriate acclimatization",
      "Recognize symptoms of altitude sickness",
      "Descend and seek medical assistance if symptoms become serious",
      "Avoid assuming that physical fitness alone eliminates altitude risk",
    ],
  },
  {
    id: "essential-equipment",
    title: "Essential Equipment",
    icon: "shield",
    items: [
      "Insulated clothing and waterproof layers",
      "Suitable trekking boots",
      "Sleeping bag and camping equipment appropriate to expected conditions",
      "Navigation tools, headlamp, first-aid supplies, and personal medication",
      "Sun protection, water treatment, and emergency communication equipment",
    ],
  },
  {
    id: "permits-guidance",
    title: "Permits and Local Guidance",
    icon: "checklist",
    items: [
      "Verify current trekking permits, protected-area regulations, local registration requirements, and any applicable fees",
      "Confirm whether a licensed guide or other arrangements are required for the selected route",
      "Seek experienced local guidance for remote terrain and changing access conditions",
    ],
  },
  {
    id: "responsible-travel",
    title: "Responsible Travel",
    icon: "leaf",
    items: [
      "Follow leave-no-trace principles",
      "Respect local communities and cultural practices",
      "Avoid disturbing wildlife",
      "Carry out non-biodegradable waste",
      "Follow conservation and safety instructions",
    ],
  },
];

export const safetyWarning =
  "This is a remote expedition with limited facilities. Current route and emergency arrangements must be confirmed with an experienced local operator before departure.";
