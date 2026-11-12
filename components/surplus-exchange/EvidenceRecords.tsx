import { FileCheck, FileText, Scale, Truck } from "lucide-react";
import { ImageSplit, exImg, type TileCardItem } from "./shared";

const items: TileCardItem[] = [
  { icon: FileCheck, tone: "mint", title: "Decisions", body: "Who approved what, and when." },
  { icon: Truck, title: "Movement", body: "Handover events where configured." },
  { icon: FileText, tone: "mint", title: "Terms", body: "The approved commercial terms for an offer." },
  { icon: Scale, title: "Exceptions", body: "Disputes and withdrawals follow defined processes." },
];

export default function EvidenceRecords() {
  return (
    <ImageSplit
      id="evidence"
      num="13"
      label="Evidence and records"
      title={
        <>
          Records explain decisions.
          <br className="hidden md:block" /> They do not prove claims alone.
        </>
      }
      lead="Transaction evidence is built into the process, kept under the applicable retention policy."
      image={exImg("evidence.webp")}
      alt="Hands labelling a parcel at a desk"
      items={items}
      tag={false}
    />
  );
}
