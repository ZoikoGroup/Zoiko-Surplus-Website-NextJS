import { ShieldAlert } from "lucide-react";
import { SectionHeading, Section, hanken } from "./shared";

export default function SafetyNotices() {
  return (
    <Section id="safety" labelledBy="safety-heading" className="flex flex-col gap-10 md:gap-14">
      <SectionHeading
        id="safety-heading"
        num="10"
        label="Safety notices"
        title="Safety and recall come first."
        lead="Recall, counterfeit or restricted-goods signals stop a lot before any market exposure."
      />

      <div
        className={`${hanken} flex items-start gap-4 rounded-2xl border border-l-4 border-[#b98a4a] border-l-[#a0661c] bg-white px-6 py-6`}
      >
        <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-[#f5e7d6]">
          <ShieldAlert aria-hidden="true" className="size-5 text-[#7a4d0f]" strokeWidth={1.75} />
        </span>
        <div className="flex flex-col gap-1.5">
          <h3 className="text-base font-bold text-[#0f1f3a]">Hold, reject or escalate</h3>
          <p className="text-sm leading-6 text-[#556987]">
            If a recall, authenticity or restricted-goods concern is present, the lot is held, rejected or escalated
            to a named accountable role before anything proceeds. Children’s-wear and PPE-type items carry additional
            category obligations, which remain the seller’s responsibility.
          </p>
        </div>
      </div>
    </Section>
  );
}
