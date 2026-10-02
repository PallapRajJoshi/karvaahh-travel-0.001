import type { GalleryItem, Guideline, ValueProp } from "../types";

export const VALUES_HEADING = "Discover Nepal Through Meaningful Cultural Experiences";
export const VALUES: ValueProp[] = [
  { id: "authentic", icon: "temple", title: "Authentic Cultural Discovery", body: "Explore Nepal’s traditions, heritage and community life." },
  { id: "personalized", icon: "sliders", title: "Personalized Journeys", body: "Customize experiences around your interests, travel dates and preferred destinations." },
  { id: "local", icon: "people", title: "Local Cultural Connections", body: "Discover opportunities to connect with local communities respectfully." },
  { id: "heritage-festival", icon: "calendar", title: "Heritage & Festival Exploration", body: "Experience cultural landmarks and festival celebrations when available." },
  { id: "flexible", icon: "route", title: "Flexible Travel Planning", body: "Choose from short heritage escapes to extended cultural journeys." },
  { id: "thoughtful", icon: "leaf", title: "Thoughtful Travel", body: "Encourage respect for local customs, sacred spaces and community traditions." },
];

export const GALLERY_HEADING = "Moments of Culture, Tradition & Celebration";
export const GALLERY_LEDE = "A visual sample of the festivals, places and communities you can explore.";
export const GALLERY: GalleryItem[] = [
  { id: "g-dashain", media: "gallery-dashain", caption: "Dashain celebrations", ratio: "4 / 5" },
  { id: "g-tihar", media: "gallery-tihar", caption: "Tihar decorations and lights", ratio: "1 / 1" },
  { id: "g-holi", media: "gallery-holi", caption: "Holi festivities", ratio: "4 / 3" },
  { id: "g-indra", media: "gallery-indra-jatra", caption: "Indra Jatra processions", ratio: "3 / 4" },
  { id: "g-buddha", media: "gallery-buddha-jayanti", caption: "Buddha Jayanti celebrations", ratio: "4 / 3" },
  { id: "g-arch", media: "gallery-architecture", caption: "Kathmandu Valley heritage architecture", ratio: "4 / 5" },
  { id: "g-newari", media: "gallery-newari", caption: "Newari cultural traditions", ratio: "1 / 1" },
  { id: "g-tharu", media: "gallery-tharu", caption: "Tharu folk performances", ratio: "3 / 4" },
  { id: "g-sherpa", media: "gallery-sherpa-gurung", caption: "Sherpa and Gurung community traditions", ratio: "4 / 3" },
  { id: "g-food", media: "gallery-food-crafts", caption: "Traditional food, crafts and local gatherings", ratio: "4 / 5" },
];

export const RESPECT_HEADING = "Celebrate Culture with Respect";
export const RESPECT_LEDE =
  "Culture here is lived, not staged. A little care makes the experience better for you and for the people who host it.";
export const GUIDELINES: Guideline[] = [
  { id: "customs", title: "Respect local customs and sacred spaces", body: "Respect local customs, religious practices and sacred spaces. Some inner sanctums are open only to worshippers; watch from where visitors are permitted." },
  { id: "photos", title: "Ask before photographing", body: "Ask permission before photographing people, ceremonies or private gatherings." },
  { id: "dress", title: "Follow dress codes", body: "Follow temple and monastery dress codes and visitor instructions." },
  { id: "rituals", title: "Don’t disrupt rituals", body: "Avoid disrupting religious rituals or cultural performances." },
  { id: "local", title: "Support local makers", body: "Support local artisans and community-led businesses where possible." },
  { id: "boundaries", title: "Respect community boundaries", body: "Respect community boundaries and seek permission before entering private spaces." },
  { id: "guidance", title: "Follow local guidance", body: "Follow local guidance regarding festival participation and photography." },
];
