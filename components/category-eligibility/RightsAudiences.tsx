import { CircleCheck, Flag, Lock, Users } from "lucide-react";
import ImageWithTiles from "./ImageWithTiles";
import { GuideSection, ceImg, type TileCardItem } from "./shared";

const rights: TileCardItem[] = [
  { icon: Flag, tone: "mint", title: "Brand rights", body: "What the brand owner permits." },
  { icon: Users, title: "Seller audience", body: "Who you choose to include." },
  { icon: CircleCheck, tone: "mint", title: "KYB", body: "The buyer business is verified." },
  { icon: Lock, title: "Action rights", body: "Current permission to transact." },
];

export default function RightsAudiences() {
  return (
    <GuideSection
      id="rights"
      num="04"
      label="Brand, channel and buyer permission"
      title="Rights and audiences are separate."
      lead="A brand right is not an audience. A verified buyer is not an invited one."
    >
      <ImageWithTiles
        tiles={rights}
        imageSide="right"
        image={ceImg("rights-audiences.webp")}
        alt="Folded trousers stacked on a table in a clothing store"
      />
    </GuideSection>
  );
}
