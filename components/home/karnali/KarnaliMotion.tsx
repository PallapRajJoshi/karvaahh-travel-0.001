"use client";

import type { ReactNode } from "react";
import { MotionConfig } from "framer-motion";

/** Makes every framer-motion animation on the Karnali page honour prefers-reduced-motion. */
export default function KarnaliMotion({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
