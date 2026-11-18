import { Building, KeyRound, Target } from "lucide-react";
import { ImageSplit } from "./ImageSplit";
import type { TileCardItem } from "./shared";
import { img } from "./shared";

const items: TileCardItem[] = [
  { icon: Building, tone: "mint", title: "Company identity", body: "The legal entity applying, and where it is registered." },
  { icon: KeyRound, title: "Authority to act", body: "Evidence that the applicant may act for the company." },
  { icon: Target, title: "Trading purpose", body: "What you intend to buy and how you will use or resell it." },
];

export default function Ownership() {
  return (
    <ImageSplit
      id="ownership"
      num="06"
      label="Ownership and authority"
      title={
        <>
          Who you are, who may
          <br className="hidden md:block" /> act, and why you trade.
        </>
      }
      lead="Three things a reviewer may ask you to explain."
      image={img("ownership.webp")}
      alt="Two business owners reviewing paperwork at a desk"
      items={items}
    />
  );
}
