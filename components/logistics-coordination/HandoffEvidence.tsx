import { ArrowLeftRight, Check, Package, Search, TriangleAlert } from "lucide-react";
import { GuideSection, InlineCard, type InlineItem } from "./shared";

const proofs: InlineItem[] = [
  { icon: Package, title: "Collection", body: "Goods were picked up by the authorized provider." },
  { icon: Search, title: "Condition", body: "State of the goods at each handoff." },
  { icon: ArrowLeftRight, title: "Transfer", body: "Custody passed from one party to another." },
  { icon: Check, title: "Delivery", body: "Goods reached the approved destination." },
  { icon: TriangleAlert, title: "Discrepancy", body: "Differences noted and referred for review." },
];

export default function HandoffEvidence() {
  return (
    <GuideSection
      id="evidence"
      num="08"
      label="Handoff evidence model"
      title="Five kinds of proof."
      lead="Evidence sits in protected, role-scoped systems and is not shown publicly."
    >
      <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {proofs.map((p) => (
          <InlineCard key={p.title} item={p} />
        ))}
      </ul>
    </GuideSection>
  );
}
