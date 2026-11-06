import CategoryCards, { type CategoryCard } from "@/components/categories/CategoryCards";
import { Band, SectionHeading, img } from "./shared";

// Pages that don't exist yet link to "#".
const categories: CategoryCard[] = [
  {
    title: "Apparel & Footwear",
    body: "Overstock, returns, end-of-line and imperfect goods.",
    badge: "Proposed pilot",
    badgeTone: "live",
    image: img("ce-cat-apparel.webp"),
    alt: "Rail of t-shirts in assorted colours",
    href: "/categories-apparel-footwear",
  },
  {
    title: "Food & Grocery",
    body: "Independently gated; safety, shelf-life and traceability.",
    badge: "Safety-gated",
    badgeTone: "gated",
    image: img("ce-cat-food.webp"),
    alt: "Supermarket shelves stocked with fresh vegetables",
    href: "#",
  },
  {
    title: "All categories",
    body: "Browse every surplus category.",
    badge: "Overview",
    badgeTone: "live",
    image: img("ce-cat-all.webp"),
    alt: "Large warehouse filled with boxed inventory on pallets",
    href: "#",
  },
];

export default function RelatedCategories() {
  return (
    <Band id="categories" labelledBy="ce-categories-heading" className="flex flex-col gap-10 md:gap-12">
      <SectionHeading
        id="ce-categories-heading"
        num="10"
        label="Related categories"
        title="Explore other categories."
        titleClassName="max-w-[700px]"
        lead="Consumer Electronics is one of several source-defined categories, each governed to its own rules."
      />
      <CategoryCards cards={categories} sizes="(min-width: 640px) 401px, 100vw" />
    </Band>
  );
}
