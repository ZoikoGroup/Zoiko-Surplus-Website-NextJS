import { Ban, Route, Truck, UserCheck } from "lucide-react";
import { GuideSection, InlineCard, type InlineItem } from "./shared";

const roles: InlineItem[] = [
  { icon: Route, tone: "mint", title: "Zoiko coordinates", body: "Rules, approvals and records between the parties, where approved." },
  { icon: Truck, title: "Partners execute", body: "Contracted external providers do the physical collection, transport and delivery." },
  { icon: UserCheck, title: "Sellers instruct", body: "The seller's mandate decides destination, release and what may move." },
];

const limits = [
  "No Zoiko-owned fleet",
  "No Zoiko-run warehouses",
  "No custody by default",
  "No universal shipping",
  "No guaranteed delivery",
];

export default function OperatingModel() {
  return (
    <GuideSection
      id="operating-model"
      num="01"
      label="Operating model"
      title={
        <>
          Zoiko coordinates.
          <br className="hidden md:block" /> Partners move the goods.
        </>
      }
      lead="Coordination means orchestrating authorized roles where a pathway is approved."
    >
      <div className="flex flex-col gap-5">
        <ul className="grid gap-4 md:grid-cols-3">
          {roles.map((r) => (
            <InlineCard key={r.title} item={r} />
          ))}
        </ul>
        <ul aria-label="What Zoiko does not do" className="flex flex-wrap gap-2.5">
          {limits.map((l) => (
            <li key={l} className="flex items-center gap-2 rounded-full bg-[#fdebd3] px-4 py-2 text-sm text-[#3d2a0c]">
              <Ban aria-hidden="true" className="size-4 text-[#b5651d]" strokeWidth={1.75} />
              {l}
            </li>
          ))}
        </ul>
      </div>
    </GuideSection>
  );
}
