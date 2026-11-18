import { ArrowLeftRight, FileCheck, ListChecks, TriangleAlert, Truck, UserCheck, type LucideIcon } from "lucide-react";
import { GuideSection, SandTile } from "./shared";

const kinds: { icon: LucideIcon; title: string; body: string }[] = [
  { icon: UserCheck, title: "Approval", body: "Who allowed the route, and when." },
  { icon: FileCheck, title: "Provenance", body: "Where the goods came from and on what basis." },
  { icon: Truck, title: "Custody", body: "Who held the goods at each point." },
  { icon: ArrowLeftRight, title: "Transaction", body: "The order, terms and parties." },
  { icon: TriangleAlert, title: "Exception", body: "Holds, disputes and how they were handled." },
  { icon: ListChecks, title: "Reporting", body: "Measured, sourced outcomes only." },
];

export default function EvidenceRecords() {
  return (
    <GuideSection
      id="evidence"
      num="10"
      label="Evidence and outcome records"
      title="Six kinds of evidence."
      lead="Evidence records what happened. It does not inflate impact or prove the claims underneath it."
    >
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {kinds.map((k) => (
          <li key={k.title} className="flex items-start gap-4 rounded-2xl border border-[#e6e9ef] bg-white p-5 md:min-h-28">
            <SandTile icon={k.icon} />
            <div className="flex flex-col gap-1">
              <h3 className="text-lg font-semibold text-[#0f1f3a]">{k.title}</h3>
              <p className="text-sm leading-6 text-[#556987]">{k.body}</p>
            </div>
          </li>
        ))}
      </ul>
    </GuideSection>
  );
}
