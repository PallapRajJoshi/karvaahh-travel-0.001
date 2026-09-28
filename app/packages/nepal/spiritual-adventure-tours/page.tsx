import type { Metadata } from "next";
import { NepalSpiritualAdventurePage } from "@/components/packages/nepal/spiritual-adventure-tours/NepalSpiritualAdventurePage";
import { buildMetadata } from "@/components/packages/nepal/spiritual-adventure-tours/lib/seo";

export const metadata: Metadata = buildMetadata();

export default function Page() {
  return <NepalSpiritualAdventurePage />;
}
