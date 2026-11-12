import { Clock, Globe, Scale, User, type LucideIcon } from "lucide-react";
import { SandTile, hanken } from "./shared";

const facts: { icon: LucideIcon; label: string; value: string }[] = [
  { icon: User, label: "Owner", value: "Named at approval" },
  { icon: Scale, label: "Reviewers", value: "Legal, safety, logistics ops" },
  { icon: Clock, label: "Claims expiry", value: "Set at approval" },
  { icon: Globe, label: "Market status", value: "Informational" },
];

// Page ownership and review strip at the foot of the guide.
export default function PageGovernance() {
  return (
    <section aria-label="Page governance" className={`${hanken} px-5 pb-16 md:px-6 md:pb-24`}>
      {/* One row at every width; scrolls sideways on narrow screens instead of wrapping. */}
      <div className="mx-auto w-full max-w-[1440px] overflow-x-auto rounded-[20px] border border-[#e6e9ef] bg-white shadow-[0_10px_30px_-18px_rgba(12,33,64,0.25)]">
        <dl className="flex min-w-max items-center justify-between gap-10 px-6 py-8 md:px-24 md:py-10">
          {facts.map(({ icon, label, value }) => (
            <div key={label} className="flex shrink-0 items-center gap-3">
              <SandTile icon={icon} />
              <div className="flex flex-col">
                <dt className="text-[11px] font-medium uppercase tracking-[0.12em] text-[#556987]">{label}</dt>
                <dd className="text-sm text-[#0f1f3a]">{value}</dd>
              </div>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
