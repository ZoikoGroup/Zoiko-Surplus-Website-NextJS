import { Check, ChevronRight, CircleAlert, FileCheck, FileSearch } from "lucide-react";
import { IconTile, SectionHeading, Section, WideImage, hanken, img } from "./shared";

const steps = [
  { icon: CircleAlert, title: "Report", body: "Raise an issue or claim through a defined, safe channel." },
  { icon: FileCheck, title: "Acknowledge", body: "The report is acknowledged and routed to the right role." },
  { icon: FileSearch, title: "Review", body: "A documented review of records and the issue follows." },
  { icon: Check, title: "Resolve", body: "A documented outcome — with holds, reversals or escalation as needed." },
];

export default function Disputes() {
  return (
    <Section labelledBy="disputes-heading">
      <SectionHeading
        id="disputes-heading"
        num="07"
        label="Issues, disputes & resolution"
        title="Report → acknowledge → review → resolve."
        lead="A defined path for problems. No finality is stated before resolution, and safety concerns are escalated."
        titleClassName="max-w-[780px]"
      />
      <div className="flex flex-col gap-5">
        <WideImage src={img("disputes.webp")} alt="Two colleagues talking across a table by an office window" />
        <ol className={`${hanken} grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-[26px]`}>
          {steps.map(({ icon, title, body }, i) => (
            <li key={title} className="relative flex flex-col gap-1 rounded-2xl border border-[#e6e9ef] bg-white p-5 pb-8">
              <IconTile icon={icon} tone="navy" />
              <h3 className="pt-3 text-base font-semibold text-[#0f1f3a]">{title}</h3>
              <p className="max-w-[220px] text-sm leading-5 text-[#556987]">{body}</p>
              {i < steps.length - 1 && (
                <ChevronRight
                  aria-hidden="true"
                  className="absolute top-1/2 -right-[22px] hidden size-4 -translate-y-1/2 text-[#c5ccd8] lg:block"
                  strokeWidth={1.5}
                />
              )}
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
