import { Check, Globe, Lock } from "lucide-react";
import { SectionHeading, Section, hanken } from "./shared";

const columns = [
  {
    icon: Globe,
    title: "Public pages",
    head: "bg-[#e3f4ee] text-[#0b7a5c]",
    body: "bg-white text-[#556987]",
    divider: "border-[#e6e9ef]",
    rows: [
      "How controls, roles and stages work.",
      "Category requirements and boundaries, described.",
      "No inventory, prices, identities or offers.",
    ],
  },
  {
    icon: Lock,
    title: "Protected (authenticated)",
    head: "bg-[#0f1f3a] text-white",
    body: "bg-[#112548] text-[#cbd5e4]",
    divider: "border-white/10",
    rows: [
      "Actual lots, terms and counterparties.",
      "Decisions, evidence and the audit trail.",
      "Role-scoped access; never indexed.",
    ],
  },
];

export default function Privacy() {
  return (
    <Section labelledBy="privacy-heading">
      <SectionHeading
        id="privacy-heading"
        num="06"
        label="Privacy & confidentiality"
        title="Public explanation, Protected records."
        lead="This site explains the model. Confidential stock, prices, identities and records live behind authorized access — never in public pages, search or analytics."
        titleClassName="max-w-[780px]"
      />
      <div className={`${hanken} grid overflow-hidden rounded-2xl border border-[#e6e9ef] md:grid-cols-2`}>
        {columns.map(({ icon: Icon, title, head, body, divider, rows }) => (
          <div key={title} className={`flex flex-col ${body}`}>
            <h3 className={`flex h-[60px] items-center gap-2.5 px-5 text-base font-bold ${head}`}>
              <Icon aria-hidden="true" className="size-[18px]" strokeWidth={1.75} />
              {title}
            </h3>
            <ul>
              {rows.map((r) => (
                <li key={r} className={`flex items-start gap-2.5 border-t px-5 py-3 text-sm leading-5 ${divider}`}>
                  <Check aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-[#16a37a]" strokeWidth={2} />
                  {r}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
