import type { Metadata } from "next";
import HotspotAtlas from "@/components/activities/adventure/hotspots/HotspotAtlas";

export const metadata: Metadata = {
  title: "Adventure Hotspot Atlas | Activities by Province in Nepal | Karvaahh",
  description:
    "Find where rafting, boating, paragliding, camping, bungee and other adventure activities run across Nepal's seven provinces.",
  alternates: { canonical: "/activities/adventure/hotspots" },
};

export default function Page() {
  return <HotspotAtlas />;
}
