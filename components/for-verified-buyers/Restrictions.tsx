import { Scale, Search, Shield, TriangleAlert } from "lucide-react";
import { GuideSection, PhotoCardGrid, fvbImg, type PhotoCardItem } from "./shared";

const risks: PhotoCardItem[] = [
  {
    icon: TriangleAlert,
    title: "Food",
    body: "A separate food-safety gate. No public availability.",
    image: fvbImg("risk-food.webp"),
    alt: "Pineapple, bananas, oranges and other fresh fruit",
  },
  {
    icon: Shield,
    title: "Electronics and devices",
    body: "Data, battery and safety checks apply.",
    image: fvbImg("risk-electronics.webp"),
    alt: "Over-ear headphones",
  },
  {
    icon: Search,
    title: "Counterfeit and provenance",
    body: "Goods must have traceable origin and brand rights.",
    image: fvbImg("risk-counterfeit.webp"),
    alt: "Three colleagues reviewing stock on warehouse shelving",
  },
  {
    icon: Scale,
    title: "Restricted goods",
    body: "Need specific legal clearance. None is implied.",
    image: fvbImg("risk-restricted.webp"),
    alt: "Industrial robotic arm",
  },
];

export default function Restrictions() {
  return (
    <GuideSection
      id="restrictions"
      num="08"
      label="Restrictions and risk"
      title="Some goods need extra checks."
      lead="Category, safety, provenance and legal rules can limit what any buyer may do."
    >
      <PhotoCardGrid eyebrow="Risk" items={risks} aspect="aspect-[310/301]" />
    </GuideSection>
  );
}
