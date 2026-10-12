/**
 * Single place for the About page's site-level constants.
 * If the project already has a site-config (lib/site-config.ts from the legal
 * system), point ABOUT_SITE_URL at siteConfig.url and delete the literal.
 */
export const ABOUT_SITE_URL = "https://karvaahh.in";
export const ABOUT_PATH = "/about";
export const ABOUT_CANONICAL = `${ABOUT_SITE_URL}${ABOUT_PATH}`;

export const BRAND_NAME = "Karvaahh";
export const BRAND_FULL_NAME = "Karvaahh – Live to Travel";
export const BRAND_SLOGAN = "Live to Travel";

export const ABOUT_TITLE = "About Karvaahh – Live to Travel | Nepal Travel & Tour Company";
export const ABOUT_DESCRIPTION =
  "Discover Karvaahh – Live to Travel, a travel company creating personalized Nepal, India and international journeys including Himalayan adventures, spiritual tours, family holidays and customized travel experiences.";

/**
 * Social profile URLs for Organization structured data (`sameAs`).
 * Left empty on purpose: nothing is invented. Fill in real profile URLs.
 */
export const SOCIAL_PROFILES: string[] = [];

/** Base folder (inside /public) for every photo on this page. */
export const IMAGE_BASE_PATH = "/images/about";
