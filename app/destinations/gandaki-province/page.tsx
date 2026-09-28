import type { Metadata } from "next";
import GandakiHome from "@/components/home/gandaki/GandakiHome";

export const metadata: Metadata = {
  title: "Gandaki Province Tourism | Mountains, Lakes & Adventure | Karvaahh",
  description:
    "Discover Gandaki Province — Pokhara's lakes, the Annapurna and Manaslu ranges, Mustang's high desert, and Nepal's premier trekking, pilgrimage and adventure routes.",
};

export default function GandakiProvincePage() {
  return <GandakiHome />;
}
