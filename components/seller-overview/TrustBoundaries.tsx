import { EyeOff, Scale, Shield, TriangleAlert } from "lucide-react";
import { GuideSection, ImageTopGrid, soImg, type PhotoCardItem } from "./shared";

const boundaries: PhotoCardItem[] = [
  {
    icon: Shield,
    title: "No default custody",
    body: "The platform does not hold your goods or funds by default.",
    image: soImg("boundary-custody.webp"),
    alt: "Documents being handed across a desk beside a gavel",
  },
  {
    icon: Scale,
    title: "Named counterparties",
    body: "Named parties carry named duties.",
    image: soImg("boundary-counterparties.webp"),
    alt: "Man handing a parcel to a woman",
  },
  {
    icon: TriangleAlert,
    title: "Category safety",
    body: "Product safety rules stay with the right party.",
    image: soImg("boundary-safety.webp"),
    alt: "Workers in high-visibility vests in a warehouse",
  },
  {
    icon: EyeOff,
    title: "Privacy",
    body: "No stock or customer data is collected on this page.",
    image: soImg("boundary-privacy.webp"),
    alt: "Shopkeeper packing an order for a customer",
  },
];

export default function TrustBoundaries() {
  return (
    <GuideSection
      id="trust-boundaries"
      num="09"
      label="Trust and legal boundaries"
      title={
        <>
          Asset-light. Accountable
          <br className="hidden md:block" /> counterparties.
        </>
      }
      lead="Responsibilities follow signed contracts, not this page."
    >
      <ImageTopGrid eyebrow="Boundary" items={boundaries} aspect="aspect-[295/130]" />
    </GuideSection>
  );
}
