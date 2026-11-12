import { Flag, Globe, Lock, TriangleAlert } from "lucide-react";
import { GuideSection, PhotoCardGrid, exImg, type PhotoCardItem } from "./shared";

const gates: PhotoCardItem[] = [
  {
    icon: TriangleAlert,
    title: "Food and grocery",
    body: "Separate food-safety, shelf-life, traceability and local-law review before any access.",
    image: exImg("gate-food.webp"),
    alt: "Shopper reading a food label in a grocery aisle",
  },
  {
    icon: Flag,
    title: "Recalled products",
    body: "Recall status is checked. Recalled goods are excluded or escalated.",
    image: exImg("gate-recalled.webp"),
    alt: "Hands labelling a parcel",
  },
  {
    icon: Lock,
    title: "Electrical and battery goods",
    body: "Battery, safety and data-sanitization rules apply.",
    image: exImg("gate-electrical.webp"),
    alt: "Over-ear headphones",
  },
  {
    icon: Globe,
    title: "Hazardous and export-controlled goods",
    body: "Restrictions limit which routes and markets are possible.",
    image: exImg("gate-hazardous.webp"),
    alt: "Industrial robotic arm",
  },
];

export default function SafetyGates() {
  return (
    <GuideSection
      id="safety-gates"
      num="09"
      label="Safety gates"
      title={
        <>
          Some goods need extra
          <br className="hidden md:block" /> approval first.
        </>
      }
      lead="Unsafe or unapproved goods default to exclusion or escalation."
    >
      <PhotoCardGrid items={gates} aspect="aspect-[301/249]" />
    </GuideSection>
  );
}
