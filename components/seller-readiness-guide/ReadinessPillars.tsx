import { Lock, Package, ReceiptText, ShoppingCart, Truck } from "lucide-react";
import { GuideSection, ImageTopGrid, srImg, type PhotoCardItem } from "./shared";

const pillars: PhotoCardItem[] = [
  {
    icon: Package,
    title: "Authority",
    body: "Title, decision maker, disposal rights, contract and brand rights.",
    image: srImg("pillar-authority.webp"),
    alt: "Three business people talking in a warehouse full of boxes",
  },
  {
    icon: Package,
    title: "Inventory",
    body: "Category, SKU family, condition mix, quantities, location and packaging.",
    image: srImg("pillar-inventory.webp"),
    alt: "Warehouse aisles with stacked cardboard boxes",
  },
  {
    icon: ShoppingCart,
    title: "Condition",
    body: "Defects, grading methods, labeling, returns and traceability.",
    image: srImg("pillar-condition.webp"),
    alt: "Colleagues pointing at a laptop screen",
  },
  {
    icon: Lock,
    title: "Safety",
    body: "Recalls, hazard notices, product obligations and hold signals.",
    image: srImg("pillar-safety.webp"),
    alt: "Three workers in hard hats and safety vests walking a warehouse aisle",
  },
  {
    icon: ReceiptText,
    title: "Brand and market",
    body: "Audience, territory, channel limits and activated local service.",
    image: srImg("pillar-brand-market.webp"),
    alt: "Colleagues working on a laptop and tablet",
  },
  {
    icon: Truck,
    title: "Evidence and handoff",
    body: "Internal records, approvals, chain of custody and your objective.",
    image: srImg("pillar-evidence.webp"),
    alt: "Hand holding a pen beside a laptop",
  },
];

export default function ReadinessPillars() {
  return (
    <GuideSection
      id="pillars"
      num="02"
      label="Six readiness pillars"
      title="Six areas to prepare."
      lead="Preparation is not approval. There is no instant market access or category clearance."
    >
      <ImageTopGrid
        eyebrow="Pillar"
        items={pillars}
        aspect="aspect-[402/215]"
        cols="sm:grid-cols-2 lg:grid-cols-3"
        sizes="(min-width: 1024px) 402px, (min-width: 640px) 50vw, 100vw"
      />
    </GuideSection>
  );
}
