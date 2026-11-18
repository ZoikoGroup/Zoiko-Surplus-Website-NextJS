import { FileCheck, Globe, Scale, Search } from "lucide-react";
import ImageWithTiles from "./ImageWithTiles";
import { GuideSection, ceImg, type TileCardItem } from "./shared";

const proofs: TileCardItem[] = [
  { icon: Scale, tone: "mint", title: "Seller title", body: "Needs proof of ownership." },
  { icon: FileCheck, title: "Disposal mandate", body: "A legally effective right to dispose." },
  { icon: Search, tone: "mint", title: "Condition", body: "Not inspected or graded here." },
  { icon: Globe, title: "Provenance", body: "Origin should be traceable." },
];

export default function ProofFirst() {
  return (
    <GuideSection
      id="proof"
      num="03"
      label="Ownership, condition and provenance"
      title="Proof comes before eligibility."
      lead="Seller title and disposal authority require proof. This page inspects nothing and certifies no grade."
    >
      <ImageWithTiles
        tiles={proofs}
        imageSide="left"
        image={ceImg("proof-ownership.webp")}
        alt="Pen and paper clip resting on a printed certificate form"
      />
    </GuideSection>
  );
}
