import { COOKIE_REGISTRY } from "@/lib/cookie/config";
import {
  callout,
  contactBlock,
  cookiePreferencesBlock,
  cookieTable,
  defineSections,
  list,
  section,
} from "./builders";
import type { LegalDocument } from "./types";

/**
 * COOKIE POLICY
 *
 * Draft for commercial use — to be reviewed by qualified Nepal legal counsel
 * before publication.
 *
 * The tables on this page are generated from `COOKIE_REGISTRY` in
 * `lib/cookie/config.ts`, so the policy only ever documents tools the site
 * actually uses. Add or remove a tool there and the page updates itself.
 */

const hasAnalytics = COOKIE_REGISTRY.some((e) => e.category === "analytics");
const hasMarketing = COOKIE_REGISTRY.some((e) => e.category === "marketing");
const hasPreferences = COOKIE_REGISTRY.some((e) => e.category === "preferences");

export const cookieSections = defineSections([
  section("what-are-cookies", "What Are Cookies?", [
    "Cookies are small text files that a website places on your device when you visit. They let the site remember information about your visit, such as your settings. Similar technologies — including local storage in your browser — work in comparable ways, and we refer to all of them as “cookies” in this policy.",
  ]),

  section("why-we-use-cookies", "Why Karvaahh Uses Cookies", [
    "We use cookies and similar technologies to keep our website working properly, to remember your choices, and — only where you allow it — to understand how the site is used and to improve it. We aim to use as few as we reasonably need.",
  ]),

  section("essential-cookies", "Essential Cookies", [
    "Essential cookies are needed for the website to function and to remember your cookie choices. They cannot be switched off in our settings, but you can block or delete them in your browser (some parts of the site may then not work as intended).",
  ], [cookieTable({ category: "essential" })]),

  section("preference-cookies", "Preference Cookies", [
    "Preference cookies remember optional settings you choose so the website can behave the way you like, for example display options. They are only used if you allow them.",
    ...(hasPreferences ? [] : ["At present, the site does not set any preference cookies."]),
  ], [cookieTable({ category: "preferences" })]),

  section("analytics-cookies", "Analytics Cookies", [
    "Analytics cookies help us understand how visitors use the website — for example which pages are visited and how people move between them — so that we can improve it. They are only loaded after you consent through our cookie controls.",
    ...(hasAnalytics
      ? []
      : ["At present, Karvaahh does not use analytics cookies on this website. If that changes, they will be listed here and will only load after you consent."]),
  ], [cookieTable({ category: "analytics" })]),

  section("marketing-cookies", "Marketing Cookies", [
    "Marketing cookies are used to measure advertising and campaigns and to show relevant travel offers. They are only loaded after you consent through our cookie controls.",
    ...(hasMarketing
      ? []
      : ["At present, Karvaahh does not use marketing or advertising cookies on this website. If that changes, they will be listed here and will only load after you consent."]),
  ], [cookieTable({ category: "marketing" })]),

  section("third-party-cookies", "Third-Party Cookies", [
    "Some features may load content or services from other organisations — for example maps. Those organisations may receive technical information such as your IP address and browser details, and may set their own cookies. We do not control these, and their own privacy and cookie policies apply.",
  ], [cookieTable({ party: "third" })]),

  section("session-cookies", "Session Cookies", [
    "Session cookies exist only while your browser is open and are deleted when you close it. They are typically used to keep a site working as you move between pages.",
  ]),

  section("persistent-cookies", "Persistent Cookies", [
    "Persistent cookies and similar storage stay on your device for a set period or until you delete them. We use them to remember your choices between visits — for example your cookie preferences — so that we do not have to ask you each time.",
  ]),

  section("cookie-management", "Cookie Management", [
    "You can accept all optional cookies, reject all non-essential cookies, or choose by category, and you can change your mind at any time using the controls below or the “Cookie settings” link in the site footer.",
  ], [cookiePreferencesBlock()]),

  section("browser-controls", "Browser Controls", [
    "Most browsers let you view, block or delete cookies and stored data through their settings. Instructions differ by browser; look for “cookies” or “site data” in the privacy or security settings. Blocking essential cookies may stop parts of the website working properly, and clearing site data will also clear your saved cookie choices, so you may be asked again.",
  ]),

  section("consent", "Consent", [
    "Where the law requires it, we will only place or read optional cookies after you have agreed through our cookie banner or settings. Your choice is stored on your device. You can withdraw or change consent at any time, and a change applies from that point; some scripts that have already loaded may need the page to be refreshed to stop.",
  ], [
    list([
      "Accept All — allows all optional categories.",
      "Reject Non-Essential — allows only essential cookies.",
      "Manage Preferences — lets you choose each optional category.",
    ]),
    callout(
      "info",
      "We ask again when things change",
      "If we make a material change to the categories of cookies we use, we will ask for your choice again.",
    ),
  ]),

  section("policy-changes", "Changes to This Cookie Policy", [
    "We may update this policy when we change the cookies and similar technologies we use or when the law changes. The “last updated” date shows when it was last revised. For more on how we handle personal information, see our [Privacy Policy](/privacy-policy).",
  ]),

  section("contact-information", "Contact", [
    "If you have questions about this Cookie Policy or how we use cookies, please contact the Karvaahh team.",
  ], [contactBlock()]),
]);

export const cookies: LegalDocument = {
  slug: "cookies",
  path: "/cookies",
  shortTitle: "Cookie Policy",
  title: "Cookie Policy",
  headline: "Cookies, explained simply.",
  subtitle:
    "How Karvaahh uses cookies and similar technologies to improve your experience.",
  metaTitle: "Cookie Policy | Karvaahh – Live to Travel",
  metaDescription:
    "Learn how Karvaahh uses cookies and similar technologies across its travel website.",
  sections: cookieSections,
  highlights: [
    {
      icon: "cookie",
      title: "You are in control",
      items: [
        "Essential cookies keep the site working and remember your choices.",
        "Optional categories are only used if you allow them.",
        "You can change your choice at any time.",
      ],
    },
  ],
};
