import { KeyRound, Scale, Search, TriangleAlert } from "lucide-react";
import { GuideSection, TileCard, WarningStrip, type TileCardItem } from "./shared";

const items: TileCardItem[] = [
  { icon: KeyRound, title: "Rights and title", body: "Entitlement to sell sits with the seller and its documents." },
  { icon: Search, title: "Provenance and condition", body: "Depends on documented processes and the responsible parties." },
  { icon: TriangleAlert, title: "Complaints", body: "Routed through the applicable terms and process." },
  { icon: Scale, title: "Disputes", body: "Conditional pathways with defined authority. No guaranteed remedy." },
];

export default function TrustBoundary() {
  return (
    <GuideSection
      id="trust-boundary"
      num="16"
      label="Trust and dispute boundary"
      title="Verification is not a guarantee."
      lead="Verification helps establish participation eligibility. It is not a guarantee of product safety, title, quality or transaction outcome."
    >
      <div className="flex flex-col gap-5">
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <TileCard key={item.title} item={item} large />
          ))}
        </ul>
        <WarningStrip>
          Goods are not inspected or guaranteed by Zoiko Surplus by default. Who handles payments and disputes is
          confirmed for each market and transaction.
        </WarningStrip>
      </div>
    </GuideSection>
  );
}
