import type { Metadata } from "next";
import SudurpaschimHome from "@/components/home/sudurpaschim/SudurpaschimHome";

const description =
  "Discover Sudurpashchim, Nepal's wild west — Khaptad National Park, Badimalika, Api Himal, Shuklaphanta, Ghodaghodi Lake and sacred far-western temples. Plan your journey with Karvaahh.";

export const metadata: Metadata = {
  title: { absolute: "Sudurpaschim Province Tourism | Karvaahh" },
  description,
  alternates: { canonical: "https://karvaahh.in/destinations/sudurpaschim-province" },
  openGraph: {
    title: "Discover Sudurpashchim | Karvaahh",
    description,
    url: "https://karvaahh.in/destinations/sudurpaschim-province",
    type: "website",
  },
};

export default function SudurpaschimProvincePage() {
  return <SudurpaschimHome />;
}
