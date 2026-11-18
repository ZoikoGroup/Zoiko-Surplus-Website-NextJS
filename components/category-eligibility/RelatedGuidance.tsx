import { ClipboardList, ListChecks, ReceiptText, SlidersHorizontal } from "lucide-react";
import { GuideSection, ImageTopGrid, ceImg, type PhotoCardItem } from "./shared";

// Not linked yet: per the design, each link goes live only once its destination is approved.
const related: PhotoCardItem[] = [
  {
    icon: ListChecks,
    title: "Category Overviews",
    body: "Educational category articles.",
    image: ceImg("related-category-overviews.webp"),
    alt: "Clothes and a hat hanging on a rail against a white wall",
  },
  {
    icon: ClipboardList,
    title: "Seller Readiness",
    body: "What to prepare first.",
    image: ceImg("related-seller-readiness.webp"),
    alt: "Shopper and shop worker beside shelves of homeware",
  },
  {
    icon: SlidersHorizontal,
    title: "How the Platform Works",
    body: "The seven governed stages.",
    image: ceImg("related-how-it-works.webp"),
    alt: "Three colleagues reviewing stock on warehouse shelving",
  },
  {
    icon: ReceiptText,
    title: "Request Enterprise Demo",
    body: "A human-led discussion.",
    image: ceImg("related-enterprise-demo.webp"),
    alt: "Two colleagues reviewing a laptop beside warehouse racking",
  },
];

export default function RelatedGuidance() {
  return (
    <GuideSection
      id="related"
      num="08"
      label="Related guidance"
      title="Where to go next."
      lead="Links go live only when each destination is approved."
    >
      <ImageTopGrid items={related} pending aspect="aspect-[295/130]" />
    </GuideSection>
  );
}
