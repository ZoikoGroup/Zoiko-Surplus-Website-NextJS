import { CategoryTiles, GuideSection, WarningStrip, exImg, type CategoryTile } from "./shared";

const categories: CategoryTile[] = [
  { label: "Apparel & Footwear", badge: "Conditional", image: exImg("category-apparel.webp"), alt: "Clothes and a hat on a rail" },
  { label: "Consumer Electronics", badge: "Conditional", image: exImg("category-electronics.webp"), alt: "Over-ear headphones" },
  { label: "Home & Lifestyle", badge: "Conditional", image: exImg("category-home.webp"), alt: "Grey sofa in a bright room" },
  { label: "Industrial & Business Goods", badge: "Conditional", image: exImg("category-industrial.webp"), alt: "Industrial robotic arm" },
  { label: "Food & Grocery", badge: "Separate safety gate", image: exImg("category-food.webp"), alt: "Pineapple, oranges and other fresh fruit" },
];

export default function Categories() {
  return (
    <GuideSection
      id="categories"
      num="02"
      label="Categories"
      title="Which sectors may take part."
      lead="Five source-aligned sector groupings. Each has its own conditions, and none is assumed to be open."
    >
      <div className="flex flex-col gap-4">
        <CategoryTiles categories={categories} />
        <WarningStrip>
          Listing a category here does not make it live. Each category and market needs its own activation, and food
          needs separate safety and local-law review.
        </WarningStrip>
      </div>
    </GuideSection>
  );
}
