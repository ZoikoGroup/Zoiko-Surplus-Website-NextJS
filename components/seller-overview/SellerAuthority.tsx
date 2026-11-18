import { EyeOff, FileText, Truck, Users } from "lucide-react";
import ImageWithTiles from "@/components/category-eligibility/ImageWithTiles";
import { GuideSection, soImg, type TileCardItem } from "./shared";

const decisions: TileCardItem[] = [
  { icon: EyeOff, tone: "mint", title: "Disclosure", body: "You decide what is shared and with whom." },
  { icon: Users, tone: "sand", title: "Audience", body: "You approve the permitted buyers." },
  { icon: Truck, tone: "mint", title: "Route", body: "You choose among permitted routes." },
  { icon: FileText, tone: "sand", title: "Terms", body: "You approve specific terms and counterparties." },
];

export default function SellerAuthority() {
  return (
    <GuideSection
      id="seller-authority"
      num="03"
      label="Seller authority"
      title={
        <>
          You approve what
          <br className="hidden md:block" /> happens to your goods.
        </>
      }
      lead="The seller keeps the decisions. The platform does not take them over."
    >
      <ImageWithTiles
        imageSide="left"
        tiles={decisions}
        image={soImg("seller-authority.webp")}
        alt="Two colleagues reviewing stock on tall warehouse racking"
      />
    </GuideSection>
  );
}
