import { ArrowLeftRight, Building, FileText, Globe, KeyRound } from "lucide-react";
import { GuideSection, PhotoCardGrid, img, type PhotoCardItem } from "./shared";

const decisions: PhotoCardItem[] = [
  {
    icon: FileText,
    title: "Inquiry or application",
    body: "You submit permitted business details to an approved intake.",
    image: img("card-shelving.webp"),
    alt: "Colleagues organizing boxes on stockroom shelves",
  },
  {
    icon: Building,
    title: "Organization verification",
    body: "An approved reviewer applies configured KYB controls.",
    image: img("card-aisle-tablet.webp"),
    alt: "Worker checking stock on a tablet in a warehouse aisle",
  },
  {
    icon: Globe,
    title: "Market & category eligibility",
    body: "Market and category policy, plus seller audience limits, set status.",
    image: img("card-warehouse-team.webp"),
    alt: "Three colleagues reviewing stock on warehouse shelving",
  },
  {
    icon: KeyRound,
    title: "Seller-specific entitlement",
    body: "Seller-approved rules, invitation, role and corridor can scope access.",
    image: img("card-business-pair.webp"),
    alt: "Two professionals reviewing a laptop and folder",
  },
  {
    icon: ArrowLeftRight,
    title: "Transaction-level control",
    body: "Policies, stock eligibility and your authorized account set permitted actions.",
    image: img("card-delivery.webp"),
    alt: "Courier checking a delivery against a clipboard",
  },
];

export default function ThreeDecisions() {
  return (
    <GuideSection
      id="decisions"
      num="01"
      label="Three decisions, not one"
      title={
        <>
          Application, verification,
          <br className="hidden md:block" /> permission. Each is separate.
        </>
      }
      lead="Five decision boundaries sit between applying and trading. Passing one never implies the next."
    >
      <PhotoCardGrid eyebrow="Decision" items={decisions} />
    </GuideSection>
  );
}
