import type { Metadata } from "next";
import BagmatiHome from "@/components/home/bagmati/BagmatiHome";

export const metadata: Metadata = {
  title: "Bagmati Province Tourism | Karvaahh",
  description:
    "Explore Bagmati Province, Nepal — Kathmandu Valley heritage, Himalayan treks, sacred pilgrimage sites, Chitwan wildlife and hill escapes.",
};

export default function Page() {
  return <BagmatiHome />;
}
