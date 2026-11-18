import { CircleCheck, Clock, Lock } from "lucide-react";
import MarketPicker from "./MarketPicker";
import { CategoryTiles, GuideSection, TileCard, img, type CategoryTile, type TileCardItem } from "./shared";

const categories: CategoryTile[] = [
  { label: "Apparel & Footwear", badge: "Conditional", image: img("category-apparel.webp"), alt: "Clothes and a hat on a rail" },
  { label: "Consumer Electronics", badge: "Conditional", image: img("category-electronics.webp"), alt: "Over-ear headphones" },
  { label: "Home & Lifestyle", badge: "Conditional", image: img("category-home.webp"), alt: "Grey sofa in a bright room" },
  { label: "Industrial & Business Goods", badge: "Conditional", image: img("category-industrial.webp"), alt: "Industrial robotic arm" },
  { label: "Food & Grocery", badge: "Separate safety gate", image: img("category-food.webp"), alt: "Pineapple, oranges and other fresh fruit" },
];

const statuses: TileCardItem[] = [
  { icon: CircleCheck, tone: "mint", title: "Eligible market and category", body: "Shown only where approved. None is shown on this page." },
  { icon: Clock, title: "Under assessment", body: "No offer to transact while a status is pending." },
  { icon: Lock, title: "Not active", body: "A neutral message, and no bypass." },
];

export default function MarketScope() {
  return (
    <GuideSection
      id="scope"
      num="03"
      label="Market and category scope"
      title={
        <>
          What you can qualify for
          <br className="hidden md:block" /> depends on where and what.
        </>
      }
      lead="Listing a category does not make it live. Statuses are neutral and come only from approved data."
    >
      <div className="flex flex-col gap-8">
        <CategoryTiles categories={categories} />

        <MarketPicker />

        <ul className="grid gap-4 md:grid-cols-3">
          {statuses.map((s) => (
            <TileCard key={s.title} item={s} large />
          ))}
        </ul>
      </div>
    </GuideSection>
  );
}
