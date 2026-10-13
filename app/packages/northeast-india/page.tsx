import type { Metadata } from "next";
import { NortheastIndiaPage } from "@/components/packages/northeast-india/NortheastIndiaPage";
import { buildMetadata } from "@/components/packages/northeast-india/lib/seo";

export const metadata: Metadata = buildMetadata();

export default function Page() {
  return <NortheastIndiaPage />;
}
