import { Info } from "lucide-react";
import { CreamNote, GuideSection, StripedTable } from "./shared";

type Status = "pilot" | "conditional" | "separate";

const statusStyles: Record<Status, { label: string; pill: string; dot: string }> = {
  pilot: { label: "Proposed pilot", pill: "bg-[#e3f4ee] text-[#0b7a5c]", dot: "bg-[#16a37a]" },
  conditional: { label: "Conditional", pill: "bg-[#eef1f6] text-[#3d4a60]", dot: "bg-[#3d4a60]" },
  separate: { label: "Separate approval", pill: "bg-[#fbe9cc] text-[#8a5a14]", dot: "bg-[#8a5a14]" },
};

const rows: { category: string; pathways: string; controls: string; status: Status }[] = [
  { category: "Apparel & Footwear", pathways: "Resale, donation, recycling", controls: "Brand & authenticity", status: "pilot" },
  { category: "Consumer Electronics", pathways: "Resale, recovery, recycling", controls: "Data & battery safety", status: "conditional" },
  { category: "Home & Lifestyle", pathways: "Resale, donation, recycling", controls: "Safety & hygiene", status: "conditional" },
  { category: "Industrial & Business", pathways: "Resale, recovery, disposal", controls: "Hazard & licensing", status: "conditional" },
  { category: "Food & Grocery", pathways: "Donation, recovery only", controls: "Independent safety gate", status: "separate" },
];

function StatusPill({ status }: { status: Status }) {
  const s = statusStyles[status];
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium ${s.pill}`}>
      <span aria-hidden="true" className={`size-1.5 rounded-full ${s.dot}`} />
      {s.label}
    </span>
  );
}

export default function CategoryMatrix() {
  return (
    <GuideSection
      id="category-matrix"
      num="04"
      label="Category policy matrix"
      title={
        <>
          Pathways differ by
          <br className="hidden md:block" /> category.
        </>
      }
      lead="An illustrative view of which pathways a category may consider, and the controls that gate them. Food is gated independently."
    >
      <div className="flex flex-col gap-4">
        <StripedTable
          caption="Illustrative pathways, key controls and status by category"
          headings={["Category", "Illustrative pathways", "Key controls", "Status"]}
          rows={rows.map((r) => ({
            key: r.category,
            cells: [r.category, r.pathways, r.controls, <StatusPill key="s" status={r.status} />],
          }))}
        />
        <CreamNote icon={<Info aria-hidden="true" className="size-4" strokeWidth={1.75} />}>
          Illustrative only — not a confirmation of availability, and never a substitute for category safety or legal
          review.
        </CreamNote>
      </div>
    </GuideSection>
  );
}
