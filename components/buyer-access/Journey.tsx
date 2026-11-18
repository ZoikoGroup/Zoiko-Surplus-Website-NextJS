import { BookOpen, FileText, Globe, Lock, Search, UserCheck } from "lucide-react";
import { GuideSection } from "./shared";

const steps = [
  { icon: BookOpen, label: "Learn" },
  { icon: FileText, label: "Apply" },
  { icon: Search, label: "Review" },
  { icon: Globe, label: "Market check" },
  { icon: Lock, label: "Seller decision" },
  { icon: UserCheck, label: "Access evaluation" },
];

export default function Journey() {
  return (
    <GuideSection
      id="journey"
      num="06"
      label="Journey"
      title={
        <>
          Six steps from learning
          <br className="hidden md:block" /> to access.
        </>
      }
      lead="Each step can end in a hold. None promises the next."
    >
      <ol className="grid grid-cols-2 gap-y-8 sm:grid-cols-3 lg:grid-cols-6 lg:px-10">
        {steps.map(({ icon: Icon, label }, i) => (
          <li key={label} className="relative flex flex-col items-center gap-1 text-center">
            {/* Connector to the next step, desktop only. */}
            {i < steps.length - 1 && (
              <span aria-hidden="true" className="absolute top-6 left-1/2 hidden h-0.5 w-full bg-[#e6e9ef] lg:block" />
            )}
            <span className="relative flex size-12 items-center justify-center rounded-full bg-[#f5e3c3] text-[#8a5a14] ring-4 ring-[#fafbfd]">
              <Icon aria-hidden="true" className="size-5" strokeWidth={1.75} />
            </span>
            <span className="pt-2 text-base font-semibold text-[#0f1f3a]">{label}</span>
            <span className="text-xs text-[#556987]">Step {i + 1}</span>
          </li>
        ))}
      </ol>
    </GuideSection>
  );
}
