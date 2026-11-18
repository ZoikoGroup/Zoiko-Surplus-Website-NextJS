import { CircleCheck, ListChecks, Lock, Users } from "lucide-react";
import ImageWithTiles from "@/components/category-eligibility/ImageWithTiles";
import { GuideSection, soImg, type TileCardItem } from "./shared";

const gates: TileCardItem[] = [
  { icon: CircleCheck, tone: "mint", title: "KYB review", body: "The business is verified." },
  { icon: Users, tone: "sand", title: "Invitation", body: "You chose to include them." },
  { icon: ListChecks, tone: "mint", title: "Category rights", body: "The category is open to them." },
  { icon: Lock, tone: "sand", title: "Transaction authorization", body: "Current terms and permission exist." },
];

export default function BuyerGates() {
  return (
    <GuideSection
      id="buyer-eligibility"
      num="07"
      label="Buyer eligibility"
      title="Four separate buyer gates."
      lead="Verification is not an invitation, category rights or transaction authorization."
    >
      <ImageWithTiles
        imageSide="right"
        tiles={gates}
        image={soImg("buyer-gates.webp")}
        alt="Rail of patterned shirts on hangers"
      />
    </GuideSection>
  );
}
