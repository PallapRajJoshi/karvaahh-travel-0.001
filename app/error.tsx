"use client"; // Error boundaries must be Client Components

import { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import RecoveryPage from "@/components/shared/RecoveryPage";

export default function Error({
  error,
  retry,
}: {
  error: Error & { digest?: string };
  retry: () => void;
}) {
  useEffect(() => {
    // Server logs hold the details; only the digest is useful client-side.
    console.error(error);
  }, [error]);

  return (
    <>
      <Navbar />
      <RecoveryPage
        eyebrow="Something went wrong"
        title="We hit some unexpected turbulence"
        message="This page couldn't load properly. Please try again — if it keeps happening, our team is happy to help you directly."
        action={
          <button
            type="button"
            onClick={() => retry()}
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#D39A17] px-7 font-semibold text-[#D39A17] transition-colors duration-300 hover:bg-[#D39A17] hover:text-[#0B2942]"
          >
            Try Again
          </button>
        }
      />
      <Footer />
    </>
  );
}
