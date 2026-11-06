/** Editable storefront copy — wire to admin CMS when backend is live. */

export const BRAND = {
  name: "Novasa",
  subBrand: "Gen Z fits for her & him",
  tagline: "Dress loud. Move different.",
  category: "Gen Z Clothing",
} as const;

import { NOVASA_ANNOUNCEMENT_BAR } from "@/lib/promotions";

export const ANNOUNCEMENT_BAR = NOVASA_ANNOUNCEMENT_BAR;

export const SOCIAL = {
  instagramHandle: "@novasa.studio",
  instagramUrl: "https://www.instagram.com/",
} as const;

export const RETURN_REFUND_POLICY =
  "Easy returns within 7 days on unworn items with tags. Refunds processed after quality check.";

export const STORY_COPY = {
  headline: "Street to scroll — fits that hit",
  body: `Novasa is built for Gen Z women and men who want loud silhouettes, clean fits, and drops that feel like your feed IRL. Every piece is styled for rotation — hoodies, cargos, mesh layers, and accessories that actually ship.`,
  highlight: "Main character energy, daily.",
} as const;

export const FOUNDER_STORY = {
  title: "Built for the scroll generation",
  subtitle: "Why Novasa exists",
  paragraphs: [
    "We got tired of basics that look good online and feel mid in person.",
    "Novasa started as a mood board — Y2K layers, baggy denim, chrome accessories, and unisex fits that don't gatekeep.",
    "Today we're a full clothing label for women and men: drops you can swap in admin, hero videos you control, and pricing that respects your cart.",
    "This isn't quiet luxury. It's loud, wearable, and made to be restyled.",
    "Thanks for pulling up — tag us when you style your fit.",
  ],
  signOff: {
    closing: "Stay loud,",
    name: "Team Novasa",
    role: "Novasa Studio",
  },
  tagline: "Dress loud. Move different.",
} as const;

const heroScrollLegacy =
  (import.meta.env.VITE_HERO_SCROLL_VIDEO as string | undefined)?.trim() || undefined;

export const HERO_VIDEO_MOBILE_SRC =
  (import.meta.env.VITE_HERO_VIDEO_MOBILE as string | undefined)?.trim() ||
  heroScrollLegacy ||
  "/hero-fashion-film.mp4";

export const HERO_VIDEO_DESKTOP_SRC =
  (import.meta.env.VITE_HERO_VIDEO_DESKTOP as string | undefined)?.trim() ||
  "/hero-fashion-film-desktop.mp4";

export const HERO_SCROLL_VIDEO_SRC = HERO_VIDEO_MOBILE_SRC;

export const ADMIN_LOGIN_VIDEO_SRC =
  (import.meta.env.VITE_ADMIN_LOGIN_VIDEO as string | undefined)?.trim() || HERO_VIDEO_DESKTOP_SRC;

export const CATALOG_DEMO_NOTICE =
  "Product photos and videos are placeholders — replace them anytime from admin (products, offers, hero).";
