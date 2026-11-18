import { CircleCheck, FileCheck, FolderCheck, Truck } from "lucide-react";
import { CardGrid, GuideSection, type CardItem } from "./shared";

const evidence: CardItem[] = [
  { icon: CircleCheck, title: "Authorization", body: "The seller approval that permitted the route." },
  { icon: Truck, title: "Transfer", body: "Movement and change of custody." },
  { icon: FileCheck, title: "Acknowledgment", body: "Confirmation of receipt by the next party." },
  { icon: FolderCheck, title: "Closure", body: "The documented completion of the route." },
];

export default function EvidenceLedger() {
  return (
    <GuideSection
      id="evidence"
      num="07"
      label="Evidence ledger"
      title={
        <>
          Every pathway leaves a
          <br className="hidden md:block" /> record.
        </>
      }
      lead="The categories of evidence a coordinated route can produce — definitions, not live data."
    >
      <CardGrid items={evidence} cols={4} tone="navy" />
    </GuideSection>
  );
}
