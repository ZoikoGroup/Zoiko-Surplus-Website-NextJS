import { Ban, Check, Clock, Mail, RotateCcw, SlidersVertical, type LucideIcon } from "lucide-react";
import { GuideSection } from "./shared";

const terms: { icon: LucideIcon; term: string; meaning: string; mint?: boolean }[] = [
  { icon: Mail, term: "Application received", meaning: "We have your application. It has not been reviewed." },
  { icon: Clock, term: "Under review", meaning: "People are checking the information supplied." },
  {
    icon: Check,
    term: "Verified organization",
    meaning: "Business checks are complete. Market and seller access are separate.",
    mint: true,
  },
  {
    icon: SlidersVertical,
    term: "Limited eligibility",
    meaning: "Some markets or categories are open to the organization and others are not.",
  },
  { icon: Ban, term: "Access not granted", meaning: "The organization cannot proceed at this time." },
  { icon: RotateCcw, term: "Invitation ended", meaning: "A seller's invitation expired or was withdrawn." },
];

export default function Glossary() {
  return (
    <GuideSection
      id="glossary"
      num="07"
      label="Access-state glossary"
      title="Six words you may see."
      lead={
        <>
          Public definitions only. This page never shows an account&apos;s real
          <br className="hidden md:block" /> status.
        </>
      }
    >
      <dl className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {terms.map(({ icon: Icon, term, meaning, mint }) => (
          <div key={term} className="flex items-start gap-3 rounded-2xl border border-[#e6e9ef] bg-white p-5 pb-7">
            <span
              className={`flex size-11 shrink-0 items-center justify-center rounded-xl ${
                mint ? "bg-[#e3f4ee] text-[#16a37a]" : "bg-[#f5e3c3] text-[#8a5a14]"
              }`}
            >
              <Icon aria-hidden="true" className="size-5" strokeWidth={1.75} />
            </span>
            <div className="flex flex-col gap-1">
              <dt className="text-lg font-semibold text-[#0f1f3a]">{term}</dt>
              <dd className="text-sm leading-6 text-[#556987]">{meaning}</dd>
            </div>
          </div>
        ))}
      </dl>
    </GuideSection>
  );
}
