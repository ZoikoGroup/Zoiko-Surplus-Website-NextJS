import { ArrowLeftRight, CircleCheck, FileText, Search } from "lucide-react";
import { GuideSection, PhotoCardGrid, exImg, type PhotoCardItem } from "./shared";

const steps: PhotoCardItem[] = [
  {
    icon: Search,
    title: "Discover",
    body: "See opportunities you are permitted to see.",
    image: exImg("step-discover.webp"),
    alt: "Worker checking stock on a tablet in a warehouse aisle",
  },
  {
    icon: FileText,
    title: "Assess terms",
    body: "Review the approved commercial terms.",
    image: exImg("step-assess-terms.webp"),
    alt: "Hands typing on a laptop",
  },
  {
    icon: ArrowLeftRight,
    title: "Offer or order",
    body: "Where enabled. Not an instant bid by default.",
    image: exImg("step-offer.webp"),
    alt: "Two professionals reviewing a laptop and folder",
  },
  {
    icon: CircleCheck,
    title: "Confirmation",
    body: "A record of what was agreed.",
    image: exImg("step-confirmation.webp"),
    alt: "Courier checking a delivery against a clipboard",
  },
];

export default function TransactionModel() {
  return (
    <GuideSection
      id="transaction-model"
      num="08"
      label="Match to transaction model"
      title={
        <>
          From permitted opportunity
          <br className="hidden md:block" /> to confirmation.
        </>
      }
      lead="Offers and orders exist only where an authorized marketplace and transaction workflow are active, and you have permission."
    >
      <PhotoCardGrid eyebrow="Step" items={steps} aspect="aspect-[301/249]" />
    </GuideSection>
  );
}
