import type { Metadata } from "next";
import KarnaliHome from "@/components/home/karnali/KarnaliHome";

export const metadata: Metadata = {
  title: "Karnali Province Tourism — Nepal's Wild West | Karvaahh",
  description:
    "Discover Karnali Province: Rara Lake, Phoksundo Lake, Dolpo, Humla and the Sinja Valley. Remote Himalayan wilderness, ancient Khas heritage and expedition travel with Karvaahh.",
  alternates: {
    canonical: "https://karvaahh.in/destinations/karnali-province",
  },
};

export default function KarnaliProvincePage() {
  return <KarnaliHome />;
}
