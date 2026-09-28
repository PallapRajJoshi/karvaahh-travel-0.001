import type { Metadata } from "next";
import LumbiniHome from "@/components/home/lumbini/LumbiniHome";

export const metadata: Metadata = {
  title: "Lumbini Province Tourism | Karvaahh",
  description:
    "Discover Lumbini Province — birthplace of Buddha, ancient archaeology, Tharu culture, hill heritage and western Nepal wildlife.",
};

export default function LumbiniProvincePage() {
  return <LumbiniHome />;
}
