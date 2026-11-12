import { CircleCheck, Clock, Lock } from "lucide-react";
import { GuideSection, MarketPicker, TileCard, type TileCardItem } from "./shared";

const statuses: TileCardItem[] = [
  { icon: CircleCheck, tone: "mint", title: "Active market", body: "Shown only when verified. None is shown on this page." },
  { icon: Clock, title: "Under consideration", body: "Planned markets carry no availability promise." },
  { icon: Lock, title: "Not active", body: "“Service not currently available for the selected market.”" },
];

export default function Availability() {
  return (
    <GuideSection
      id="availability"
      num="14"
      label="Availability and markets"
      title={
        <>
          Global by architecture. Market
          <br className="hidden md:block" /> by market in practice.
        </>
      }
      lead="The country selector is informational only. Statuses come from verified data and are shown as published, planned or unavailable."
    >
      <div className="flex flex-col gap-4">
        <MarketPicker source="verified" />
        <ul className="grid gap-4 md:grid-cols-3">
          {statuses.map((s) => (
            <TileCard key={s.title} item={s} large />
          ))}
        </ul>
      </div>
    </GuideSection>
  );
}
