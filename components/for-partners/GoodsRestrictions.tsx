import { Globe, Scale, Shield, TriangleAlert } from "lucide-react";
import { GuideSection, PhotoCardGrid, fpImg, type PhotoCardItem } from "./shared";

const gates: PhotoCardItem[] = [
  {
    icon: TriangleAlert,
    title: "Food",
    body: "Needs its own food-safety and market approval.",
    image: fpImg("gate-food.webp"),
    alt: "Pineapple, bananas, oranges and other fresh fruit",
  },
  {
    icon: Shield,
    title: "Batteries",
    body: "Distinct category and local-law approval first.",
    image: fpImg("gate-batteries.webp"),
    alt: "Over-ear headphones",
  },
  {
    icon: Scale,
    title: "Chemicals",
    body: "Hazardous goods need specific clearance.",
    image: fpImg("gate-chemicals.webp"),
    alt: "Industrial robotic arm",
  },
  {
    icon: Globe,
    title: "Corridors",
    body: "Local permissions and corridor conditions apply.",
    image: fpImg("gate-corridors.webp"),
    alt: "Large warehouse hall with racking",
  },
];

export default function GoodsRestrictions() {
  return (
    <GuideSection
      id="restrictions"
      num="06"
      label="Goods and market restrictions"
      title={
        <>
          Some goods need approval
          <br className="hidden md:block" /> before any handling.
        </>
      }
      lead="Food, batteries, chemicals and other restricted products require distinct category and local-law approval."
    >
      <PhotoCardGrid eyebrow="Gate" items={gates} aspect="aspect-[310/301]" />
    </GuideSection>
  );
}
