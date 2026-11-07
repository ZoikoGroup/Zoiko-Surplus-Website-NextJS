import GradeScale, { type Grade } from "@/components/categories/GradeScale";
import { SectionHeading, Section } from "./shared";

const grades: Grade[] = [
  { name: "A — New / packaged", desc: "As-new, in original packaging; matches the declared specification.", fill: 95, tag: "Seller-declared" },
  { name: "B — New, unpackaged", desc: "Unused but without original packaging; minor handling only.", fill: 80, tag: "Seller-declared" },
  { name: "C — Returns / open", desc: "Customer-returned or opened; condition and packaging recorded.", fill: 60, tag: "Seller-declared" },
  { name: "D — Imperfect", desc: "Noted faults or seconds; defects described in evidence.", fill: 40, tag: "Seller-declared" },
  { name: "Not for resale", desc: "Excluded from sale routes; recovery or recycling only.", fill: 15, tag: "Policy" },
];

export default function ConditionGrades() {
  return (
    <Section id="condition-grades" labelledBy="grades-heading" className="flex flex-col gap-10 md:gap-14">
      <SectionHeading
        id="grades-heading"
        num="06"
        label="Condition grades"
        title="A shared grade vocabulary."
        lead="A proposed, seller-declared grade taxonomy for apparel & footwear. Grades are configured for this category — they don’t mean the same thing in every category."
      />
      <GradeScale
        grades={grades}
        note="Grades are seller-declared and reviewer-assessed — not an independent Zoiko inspection, and not a universal cross-category grade."
      />
    </Section>
  );
}
