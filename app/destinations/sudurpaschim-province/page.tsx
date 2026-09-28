import type { Metadata } from "next";
import SudurpaschimHome from "@/components/home/sudurpaschim/SudurpaschimHome";

export const metadata: Metadata = {
  title: "Sudurpaschim Province Tourism | Karvaahh",
  description:
    "Explore Sudurpaschim — Nepal's far west of sacred Himalayan peaks, remote wilderness, wetlands and living far-western culture. Plan your journey with Karvaahh.",
};

export default function SudurpaschimProvincePage() {
  return <SudurpaschimHome />;
}
