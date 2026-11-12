import { Flag, Lock, Search, TriangleAlert } from "lucide-react";
import { GuideSection, PhotoCardGrid, img, type PhotoCardItem } from "./shared";

const gates: PhotoCardItem[] = [
  {
    icon: Flag,
    title: "Restricted activities",
    body: "Some activities are not permitted, and cannot be unlocked by a request.",
    image: img("card-robotics.webp"),
    alt: "Industrial robotic arm",
  },
  {
    icon: Search,
    title: "Applicable checks",
    body: "Sanctions, identity and local-law checks apply where required.",
    image: img("card-aisle-tablet.webp"),
    alt: "Worker checking stock on a tablet in a warehouse aisle",
  },
  {
    icon: Lock,
    title: "Category conditions",
    body: "Safety, traceability and handling rules differ by category.",
    image: img("card-headphones.webp"),
    alt: "Over-ear headphones",
  },
  {
    icon: TriangleAlert,
    title: "Food and regulated goods",
    body: "Separate gates apply. No live food access is implied.",
    image: img("card-grocery.webp"),
    alt: "Shopper reading a food label in a grocery aisle",
  },
];

export default function ComplianceGates() {
  return (
    <GuideSection
      id="compliance"
      num="07"
      label="Compliance and safety"
      title="Some checks are not optional."
      lead="Requirements depend on category and market. Unsafe or unapproved goods default to exclusion or escalation."
    >
      <PhotoCardGrid eyebrow="Gate" items={gates} />
    </GuideSection>
  );
}
