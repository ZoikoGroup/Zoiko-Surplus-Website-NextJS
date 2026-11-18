import { CircleCheck, Lock, Shield, X } from "lucide-react";
import ImageWithTiles from "@/components/category-eligibility/ImageWithTiles";
import { GuideSection, redImg, type TileCardItem } from "./shared";

const rules: TileCardItem[] = [
  { icon: CircleCheck, tone: "mint", title: "Share", body: "Organization, role, market and the business challenge." },
  { icon: X, tone: "sand", title: "Do not share", body: "Prices, SKUs, quantities, contracts, IDs or payment details." },
  { icon: Lock, tone: "mint", title: "No attachments", body: "This form accepts no files." },
  {
    icon: Shield,
    tone: "sand",
    title: "Secure channel later",
    body: "Sensitive evidence uses an approved channel after qualification.",
  },
];

export default function BeforeYouInquire() {
  return (
    <GuideSection
      id="before-you-inquire"
      num="04"
      label="Before you inquire"
      title="Share only broad business information."
      lead="Do not submit pricing, customer lists, personal identifiers, sensitive product details or confidential contracts through this form."
    >
      <ImageWithTiles
        imageSide="right"
        tiles={rules}
        image={redImg("before-you-inquire.webp")}
        alt="Two colleagues checking stock on shelving against a clipboard"
      />
    </GuideSection>
  );
}
