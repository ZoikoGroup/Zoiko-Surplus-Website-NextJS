import { ShieldAlert } from "lucide-react";
import { SectionHeading, Section, hanken } from "./shared";

export default function MarketStatus() {
  return (
    <Section id="market-status" labelledBy="market-status-heading" className="flex flex-col gap-10 md:gap-14">
      <SectionHeading
        id="market-status-heading"
        num="02"
        label="Market status"
        title="Proposed — not live."
        lead="This category is a proposed seller-private domestic B2B pilot. Its presence here is educational; it does not confirm an active market or available stock."
      />

      <div
        className={`${hanken} flex items-start gap-2.5 rounded-xl border border-dashed border-[#e3d9c6] bg-[#faf6ef] px-4 py-3.5`}
      >
        <ShieldAlert aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-[#926016]" strokeWidth={1.75} />
        <p className="text-sm leading-[22px] text-[#556987]">
          <strong className="font-bold text-[#0f1f3a]">Prepared for explicit approval.</strong> A “proposed pilot”
          status means the concept is defined and under review — not launched. Availability, eligibility and permitted
          routes are activated separately, market by market, and a region selection never activates trading.
        </p>
      </div>
    </Section>
  );
}
