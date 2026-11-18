import { EyeOff, Globe, KeyRound, Lock } from "lucide-react";
import { ImageSplit, exImg, type TileCardItem } from "./shared";

const items: TileCardItem[] = [
  { icon: Lock, tone: "mint", title: "Protected access", body: "Opportunity details sit behind sign-in, never in public links." },
  { icon: EyeOff, title: "Different views", body: "Visibility depends on seller authorization, buyer attributes, market and category." },
  { icon: KeyRound, tone: "mint", title: "Entitlements", body: "A seller can withdraw an entitlement at any time." },
  { icon: Globe, title: "Market rules", body: "Access exists only in active markets." },
];

export default function QualifiedBuyers() {
  return (
    <ImageSplit
      id="qualified-buyers"
      num="06"
      label="Qualified buyers"
      title={
        <>
          Protected sign-in, and why
          <br className="hidden md:block" /> you may see different things.
        </>
      }
      lead="Qualified buyers sign in to a protected area. Public pages never show private market information."
      image={exImg("qualified-buyers.webp")}
      alt="Hands typing on a laptop beside a notebook"
      items={items}
      tag={false}
    />
  );
}
