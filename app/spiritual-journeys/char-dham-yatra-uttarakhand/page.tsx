import type { Metadata } from "next";
import CharDhamPage from "@/components/spiritual-journeys/char-dham/CharDhamPage";
import { charDhamMetadata } from "@/components/spiritual-journeys/char-dham/seo";

export const metadata: Metadata = charDhamMetadata;

export default function Page() {
  return <CharDhamPage />;
}
