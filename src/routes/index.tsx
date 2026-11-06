import { createFileRoute } from "@tanstack/react-router";
import { CinematicHero } from "@/components/home/cinematic-hero";
import { DiwaliOfferSection } from "@/components/home/diwali-offer-section";
import {
  BestsellersSection,
  BrandStorySection,
  CampaignSection,
  CategorySection,
  EditSection,
  NewArrivalsSection,
  NewsletterSection,
  SocialSection,
  WhyNovasaSection,
} from "@/components/home/home-sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Novasa | Gen Z Clothing for Women & Men" },
      {
        name: "description",
        content: "Shop bold Gen Z clothing — hoodies, streetwear, tees and accessories for women and men.",
      },
      { property: "og:title", content: "Novasa Studio" },
      { property: "og:description", content: "Dress loud. Move different." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <main>
      <CinematicHero />
      <DiwaliOfferSection />
      <CategorySection />
      <NewArrivalsSection />
      <CampaignSection />
      <BestsellersSection />
      <EditSection />
      <BrandStorySection />
      <WhyNovasaSection />
      <SocialSection />
      <NewsletterSection />
    </main>
  );
}
