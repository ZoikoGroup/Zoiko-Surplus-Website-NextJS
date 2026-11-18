import { ClipboardList, ReceiptText, Shield, SlidersHorizontal } from "lucide-react";
import { GuideSection, ImageTopGrid, soImg, type PhotoCardItem } from "./shared";

// Not linked yet: per the design, each link goes live only once its destination is approved.
const next: PhotoCardItem[] = [
  {
    icon: ClipboardList,
    title: "Seller Readiness",
    body: "What to prepare before a conversation.",
    image: soImg("next-readiness.webp"),
    alt: "Colleagues discussing goods laid out on a table",
  },
  {
    icon: Shield,
    title: "Category Eligibility",
    body: "Category, safety and market qualification.",
    image: soImg("next-category.webp"),
    alt: "Two workers scanning parcels in a stockroom",
  },
  {
    icon: SlidersHorizontal,
    title: "How It Works for sellers",
    body: "The seven-stage sequence.",
    image: soImg("next-how-it-works.webp"),
    alt: "Two colleagues high-fiving in a stockroom",
  },
  {
    icon: ReceiptText,
    title: "Request Enterprise Demo",
    body: "A human-led discussion.",
    image: soImg("next-demo.webp"),
    alt: "Business people examining a product in a store",
  },
];

export default function NextSteps() {
  return (
    <GuideSection
      id="next-steps"
      num="12"
      label="Where to go next"
      title="Choose your next step."
      lead="Links go live only when each destination is approved."
    >
      <ImageTopGrid items={next} pending aspect="aspect-[295/130]" />
    </GuideSection>
  );
}
