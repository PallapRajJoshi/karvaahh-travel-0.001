export interface NavItem {
  id: string;
  label: string;
}

/** "On this page" navigation. IDs must match the section ids on the page. */
export const SECTION_NAV: NavItem[] = [
  { id: "overview", label: "Overview" },
  { id: "significance", label: "Significance" },
  { id: "mount-kailash", label: "Kailash & Mansarovar" },
  { id: "kora", label: "The Kora" },
  { id: "routes", label: "Routes" },
  { id: "journey", label: "Journey" },
  { id: "preparation", label: "Altitude & safety" },
  { id: "weather", label: "Weather" },
  { id: "practical-info", label: "Practical info" },
  { id: "packing", label: "Packing" },
  { id: "faq", label: "FAQ" },
];
