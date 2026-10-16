import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import RecoveryPage from "@/components/shared/RecoveryPage";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <>
      <Navbar />
      <RecoveryPage
        eyebrow="404 · Off the trail"
        title="This path doesn't lead anywhere — yet"
        message="The page you're looking for may have moved or is still being prepared. Let's get you back on route to your next journey."
      />
      <Footer />
    </>
  );
}
