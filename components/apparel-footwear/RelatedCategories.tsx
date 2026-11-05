import CategoryCards, { type CategoryCard } from "@/components/categories/CategoryCards";
import { SectionHeading, Section, img } from "./shared";

// Pages that don't exist yet link to "#".
const categories: CategoryCard[] = [
  {
    title: "Consumer Electronics",
    body: "Condition, data-wipe and recall controls.",
    badge: "Conditional overview",
    badgeTone: "muted",
    image: img("af-cat-electronics.webp"),
    alt: "Headphones, smartwatch and phone on a desk beside a laptop",
    href: "/consumer-electronics",
  },
  {
    title: "Home & Lifestyle",
    body: "Condition, origin and safety notices.",
    badge: "Conditional overview",
    badgeTone: "muted",
    image: img("af-cat-home-lifestyle.webp"),
    alt: "Bright living room with plants and a chest of drawers",
    href: "#",
  },
  {
    title: "All categories",
    body: "Browse every surplus category.",
    badge: "Overview",
    badgeTone: "live",
    image: img("af-cat-all.webp"),
    alt: "Large warehouse filled with boxed inventory on pallets",
    href: "#",
  },
];

export default function RelatedCategories() {
  return (
    <Section id="categories" labelledBy="categories-heading" className="flex flex-col gap-10 md:gap-14">
      <SectionHeading
        id="categories-heading"
        num="11"
        label="Related categories"
        title="Explore other categories."
        lead="Apparel & Footwear is one of several source-defined categories, each governed the same way."
      />
      <CategoryCards cards={categories} sizes="(min-width: 640px) 271px, 100vw" />
    </Section>
  );
}
