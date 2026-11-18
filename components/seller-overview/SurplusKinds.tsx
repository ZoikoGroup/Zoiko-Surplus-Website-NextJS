import { ClipboardList, Globe, ReceiptText } from "lucide-react";
import { GuideSection, ImageTopGrid, soImg, type PhotoCardItem } from "./shared";

const kinds: PhotoCardItem[] = [
  {
    icon: ReceiptText,
    title: "Overstock",
    body: "More goods than demand at the planned price.",
    image: soImg("surplus-overstock.webp"),
    alt: "Warehouse floor with boxes and pallets of surplus stock",
  },
  {
    icon: ClipboardList,
    title: "Returned goods",
    body: "Items that came back and need a next step.",
    image: soImg("surplus-returned.webp"),
    alt: "Person holding a clear recycling bin",
  },
  {
    icon: Globe,
    title: "Imperfect stock",
    body: "Goods with cosmetic or packaging issues.",
    image: soImg("surplus-imperfect.webp"),
    alt: "Workers in safety vests sorting goods into bulk bags",
  },
  {
    icon: Globe,
    title: "Second-chance goods",
    body: "Goods that could have a second route, where permitted.",
    image: soImg("surplus-second-chance.webp"),
    alt: "Workers in safety vests moving boxes beside stacked materials",
  },
];

export default function SurplusKinds() {
  return (
    <GuideSection
      id="surplus-kinds"
      num="01"
      label="Seller problem framing"
      title="Four kinds of surplus."
      lead="No speculative numbers. Eligibility depends on the goods, the market and the category."
    >
      <ImageTopGrid eyebrow="Case" items={kinds} />
    </GuideSection>
  );
}
