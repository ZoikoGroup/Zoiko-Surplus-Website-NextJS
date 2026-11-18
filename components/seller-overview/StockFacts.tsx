import { FileCheck, Globe, Scale, Search, Shield } from "lucide-react";
import { GuideSection, PhotoCardGrid, soImg, type PhotoCardItem } from "./shared";

const facts: PhotoCardItem[] = [
  {
    icon: Search,
    title: "Condition",
    body: "What state the goods are in.",
    image: soImg("fact-condition.webp"),
    alt: "Hands holding a pen over a laptop keyboard",
  },
  {
    icon: FileCheck,
    title: "Provenance",
    body: "Where they came from.",
    image: soImg("fact-provenance.webp"),
    alt: "Warehouse worker in a safety vest handling a parcel",
  },
  {
    icon: Scale,
    title: "Title and rights",
    body: "Your right to dispose of them.",
    image: soImg("fact-title.webp"),
    alt: "Team checking paperwork among stacked boxes in a warehouse",
  },
  {
    icon: Globe,
    title: "Location",
    body: "Where they are stored.",
    image: soImg("fact-location.webp"),
    alt: "Labelled cartons stacked on warehouse racking",
  },
  {
    icon: Shield,
    title: "Category evidence",
    body: "Safety and brand records that apply.",
    image: soImg("fact-category-evidence.webp"),
    alt: "Hand resting on a stack of official documents",
  },
];

export default function StockFacts() {
  return (
    <GuideSection
      id="stock-preparation"
      num="04"
      label="Stock preparation"
      title="Five facts to prepare first."
      lead="A short teaser. The full checklist lives in Seller Readiness. Nothing is uploaded here."
    >
      <PhotoCardGrid eyebrow="Fact" items={facts} />
    </GuideSection>
  );
}
