export type ImageRef = {
  /** File name inside /public/images/activities/cruise-experiences/ */
  file: string;
  alt: string;
  /** Label shown on the placeholder until the licensed photo is supplied. */
  placeholderLabel: string;
};

export type Category = {
  id: string;
  title: string;
  description: string;
  cruiseType: string; // matches a CRUISE_TYPE_OPTIONS value, for form prefill
  image: ImageRef;
};

export type Destination = {
  id: string;
  name: string;
  region: string;
  heading: string;
  description: string;
  signature: string;
  bestFor: string;
  highlights: string[];
  formValue: string; // matches a DESTINATION_OPTIONS value
  vesselNote?: string;
  image: ImageRef;
};

export type Experience = {
  id: string;
  title: string;
  description: string;
  icon: "dining" | "culture" | "wellness" | "water" | "excursion" | "horizon";
};

export type CruiseStyle = {
  id: string;
  title: string;
  description: string;
  suggestions: string[];
  cruiseType: string;
  purpose: string;
};

export type Traveler = {
  id: string;
  title: string;
  description: string;
  cta: string;
  purpose: string;
  image: ImageRef;
};

export type Itinerary = {
  id: string;
  title: string;
  duration: string;
  steps: string[];
  formValue: string;
};

export type ComparisonRow = {
  type: string;
  setting: string;
  experience: string;
  ideal: string;
  activities: string;
  style: string;
};

export type Faq = { q: string; a: string };
