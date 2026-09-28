export interface PackingCategory {
  id: string;
  title: string;
  items: string[];
}

export const PACKING: PackingCategory[] = [
  {
    id: "clothing",
    title: "Clothing",
    items: [
      "Thermal base layers",
      "Fleece or warm mid-layers",
      "Down jacket",
      "Waterproof, windproof outer layer",
      "Warm trousers",
      "Woollen socks",
      "Gloves",
      "Warm cap",
      "Sun hat",
    ],
  },
  {
    id: "footwear",
    title: "Footwear",
    items: ["Comfortable, broken-in trekking shoes", "Extra socks", "Lightweight footwear for evenings"],
  },
  {
    id: "essentials",
    title: "Personal essentials",
    items: [
      "Passport",
      "Required permits and documents",
      "Prescription medicines",
      "Personal medication",
      "Sunglasses",
      "Sunscreen",
      "Lip balm",
      "Reusable water bottle",
      "Headlamp",
      "Power bank",
      "Toiletries",
    ],
  },
  {
    id: "emergency",
    title: "Travel & emergency",
    items: ["Travel insurance details", "Emergency contacts", "Copies of important documents", "Small first-aid kit"],
  },
];
