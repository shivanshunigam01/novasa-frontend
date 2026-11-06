import type { Product } from "@/lib/catalog";

/** Keep in sync with backend `src/lib/promotions.js`. */
export const NOVASA_DROP = {
  active: true,
  percentOff: 30,
  code: "NOVASA30",
  label: "Novasa New Drop",
  shortLabel: "UP TO 30% OFF",
  bannerSrc:
    "https://images.unsplash.com/photo-1441986300917-6468ba532d36?auto=format&fit=crop&w=1600&q=80",
} as const;

/** @deprecated alias for components still importing DIWALI_SALE */
export const DIWALI_SALE = NOVASA_DROP;

export const NOVASA_ANNOUNCEMENT_BAR =
  "✦ NEW DROP — UP TO 30% OFF SELECT STYLES ✦ FREE SHIPPING OVER ₹1999 ✦";

export const DIWALI_ANNOUNCEMENT_BAR = NOVASA_ANNOUNCEMENT_BAR;

export function applyDiwaliPricing(product: Product): Product {
  if (!NOVASA_DROP.active) return product;
  const original = product.price;
  const offer = Math.round(original * (1 - NOVASA_DROP.percentOff / 100));
  if (offer >= original) return product;
  return { ...product, mrp: original, price: offer };
}

export function applyDiwaliPricingList(products: Product[]): Product[] {
  return products.map(applyDiwaliPricing);
}

export function getOriginalListPrice(product: Product): number {
  if (product.mrp && product.mrp > product.price) return product.mrp;
  return product.price;
}

export function getOfferPrice(product: Product): number {
  return product.price;
}

export function hasPromoDiscount(product: Product) {
  return NOVASA_DROP.active && Boolean(product.mrp && product.mrp > product.price);
}

export function promoSavings(product: Product): number {
  if (!hasPromoDiscount(product)) return 0;
  return getOriginalListPrice(product) - getOfferPrice(product);
}
