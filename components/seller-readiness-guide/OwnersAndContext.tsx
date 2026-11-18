import { CircleDollarSign, Clock, FileText, Flag, Scale, Shield, Truck } from "lucide-react";
import { GuideSection, TileCard, sora, type TileCardItem } from "./shared";

const owners: TileCardItem[] = [
  { icon: Scale, tone: "mint", title: "Legal", body: "Title, contract and regulated goods." },
  { icon: Flag, title: "Brand", body: "Brand permission and channel limits." },
  { icon: Shield, tone: "mint", title: "Safety", body: "Recalls, hazards and product rules." },
  { icon: CircleDollarSign, title: "Finance", body: "Cost, recovery and accounting." },
  { icon: Truck, tone: "mint", title: "Operations", body: "Location, packing and movement." },
];

const context: TileCardItem[] = [
  { icon: CircleDollarSign, tone: "mint", title: "Net recovery", body: "What you could keep. No figure shown." },
  { icon: Truck, title: "Transport", body: "Who moves goods and how." },
  { icon: FileText, tone: "mint", title: "Fees", body: "What is charged, by contract." },
  { icon: Clock, title: "Timing", body: "How long a route could take." },
  { icon: Flag, tone: "mint", title: "Failure risk", body: "What happens if a route fails." },
];

export default function OwnersAndContext() {
  return (
    <GuideSection
      id="owners"
      num="05"
      label="Review owners and commercial context"
      title={
        <>
          Find the right owner. Prepare
          <br className="hidden md:block" /> questions, not outcomes.
        </>
      }
      lead="Route blockers to the accountable person. No expected recovery or margin is stated."
    >
      <div className="flex flex-col gap-10">
        {[
          { heading: "Internal owner finder", items: owners },
          { heading: "Commercial decision context", items: context },
        ].map(({ heading, items }) => (
          <div key={heading} className="flex flex-col gap-4">
            <h3 className={`${sora} text-xl font-semibold text-[#0f1f3a]`}>{heading}</h3>
            <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
              {items.map((item) => (
                <TileCard key={item.title} item={item} />
              ))}
            </ul>
          </div>
        ))}
      </div>
    </GuideSection>
  );
}
