import { BadgeCheck, Boxes, FolderCheck, Globe, ShieldCheck, SlidersHorizontal } from "lucide-react";
import { SectionHeading, Section, hanken } from "./shared";

const facts = [
  { icon: Boxes, label: "Model", value: "Asset-light platform" },
  { icon: ShieldCheck, label: "Approach", value: "Governed & policy-led" },
  { icon: Globe, label: "Reach", value: "Global architecture" },
  { icon: BadgeCheck, label: "Participation", value: "Verified businesses" },
  { icon: FolderCheck, label: "Decisions", value: "Evidence-led" },
  { icon: SlidersHorizontal, label: "Markets", value: "Seller-controlled" },
];

export default function AtAGlance() {
  return (
    <Section labelledBy="glance-heading" innerClassName="flex flex-col gap-12">
      <SectionHeading
        id="glance-heading"
        num="01"
        label="At a glance"
        title="The platform, in brief."
        lead="A qualitative snapshot of how Zoiko Surplus operates — descriptors, not performance figures."
        titleClassName="max-w-[780px]"
      />
      <dl className={`${hanken} grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6`}>
        {facts.map(({ icon: Icon, label, value }) => (
          <div key={label} className="flex flex-col gap-2.5 rounded-xl border border-[#e6e9ef] bg-white p-4 pb-6 text-center">
            <span className="flex h-10 items-center justify-center rounded-xl bg-[#e3f4ee]">
              <Icon aria-hidden="true" className="size-5 text-[#0b7a5c]" strokeWidth={1.67} />
            </span>
            <dt className="text-xs font-bold uppercase tracking-wide text-[#7d8aa0]">{label}</dt>
            <dd className="text-sm font-bold leading-6 text-[#0f1f3a]">{value}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
