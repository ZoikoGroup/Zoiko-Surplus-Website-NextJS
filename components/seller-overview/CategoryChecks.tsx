import { CircleCheck, CircleDollarSign, FileText, Scale, Search } from "lucide-react";
import { GuideSection, PhotoCardGrid, soImg, type PhotoCardItem } from "./shared";

const checks: PhotoCardItem[] = [
  {
    icon: Search,
    title: "Product safety",
    body: "Safety rules differ by category.",
    image: soImg("check-product-safety.webp"),
    alt: "Warehouse workers in hard hats stacking boxes on a pallet",
  },
  {
    icon: FileText,
    title: "Brand restrictions",
    body: "Brand owners may limit resale.",
    image: soImg("check-brand.webp"),
    alt: "Smiling warehouse worker in a hard hat carrying a box",
  },
  {
    icon: CircleCheck,
    title: "Market and corridor",
    body: "Not every route is open.",
    image: soImg("check-market.webp"),
    alt: "Shoppers browsing clothing rails in a store",
  },
  {
    icon: Scale,
    title: "Recalls",
    body: "Recalled goods are excluded.",
    image: soImg("check-recalls.webp"),
    alt: "Staff inspecting returned goods in a stockroom",
  },
  {
    icon: CircleDollarSign,
    title: "Food",
    body: "Separately gated. Not open here.",
    image: soImg("check-food.webp"),
    alt: "Jars, tins and dried pulses laid out together",
  },
];

export default function CategoryChecks() {
  return (
    <GuideSection
      id="category-eligibility"
      num="05"
      label="Category eligibility"
      title="Eligibility depends on the category."
      lead="These are considerations, not a list of accepted goods."
    >
      <PhotoCardGrid eyebrow="Check" items={checks} />
    </GuideSection>
  );
}
