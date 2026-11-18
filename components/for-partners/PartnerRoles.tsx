import { ClipboardList, Globe, ReceiptText } from "lucide-react";
import { GuideSection, ImageTopGrid, fpImg, type PhotoCardItem } from "./shared";

const roles: PhotoCardItem[] = [
  {
    icon: ReceiptText,
    title: "Collection and logistics",
    body: "Pickup and movement of permitted goods under a mandate.",
    image: fpImg("role-collection.webp"),
    alt: "Warehouse floor with boxes and pallets ready for collection",
  },
  {
    icon: ClipboardList,
    title: "Redistribution and reuse",
    body: "Moving permitted goods to verified recipients.",
    image: fpImg("role-redistribution.webp"),
    alt: "Person holding a clear recycling bin",
  },
  {
    icon: Globe,
    title: "Specialist handling",
    body: "Handling that specific goods may need, where permitted.",
    image: fpImg("role-specialist-handling.webp"),
    alt: "Workers in safety vests sorting goods into bulk bags",
  },
  {
    icon: Globe,
    title: "Recovery",
    body: "Material recovery for goods that cannot be reused.",
    image: fpImg("role-recovery.webp"),
    alt: "Workers in safety vests moving boxes beside stacked materials",
  },
];

export default function PartnerRoles() {
  return (
    <GuideSection
      id="partner-roles"
      num="01"
      label="Illustrative partner roles"
      title="Four kinds of role."
      lead="Examples only. No route or category is guaranteed."
    >
      <ImageTopGrid eyebrow="Role" items={roles} />
    </GuideSection>
  );
}
