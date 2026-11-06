import GradeScale, { type Grade } from "@/components/categories/GradeScale";
import { Band, SectionHeading } from "./shared";

const grades: Grade[] = [
  { name: "A — As-new", desc: "Fully functional, complete, minimal wear; matches declared spec.", fill: 92, tag: "Seller-declared" },
  { name: "B — Good / working", desc: "Functional with cosmetic wear; accessories noted.", fill: 72, tag: "Seller-declared" },
  { name: "C — Faulty / for repair", desc: "Known faults; functional status described in evidence.", fill: 45, tag: "Seller-declared" },
  { name: "Untested", desc: "Functional status not yet assessed — marked explicitly, never assumed.", fill: 28, tag: "Seller-declared" },
  { name: "Not for resale", desc: "Data-bearing, recalled or hazardous units routed to specialist handling only.", fill: 12, tag: "Policy" },
];

export default function ConditionModel() {
  return (
    <Band id="condition-model" labelledBy="ce-condition-heading" className="flex flex-col gap-10 md:gap-12">
      <SectionHeading
        id="ce-condition-heading"
        num="04"
        label="Condition model"
        title="A seller-declared condition scale."
        titleClassName="max-w-[760px]"
        lead="A proposed condition taxonomy for electronics. “Untested” is always explicit — it’s never treated as working."
      />
      <GradeScale
        grades={grades}
        note="Grades are seller-declared and reviewer-assessed — not a Zoiko inspection, and configured for electronics specifically."
      />
    </Band>
  );
}
