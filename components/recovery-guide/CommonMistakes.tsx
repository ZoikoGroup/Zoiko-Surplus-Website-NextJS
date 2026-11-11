import { Check, EyeOff, FileCheck, Trash2, type LucideIcon } from "lucide-react";
import { GuideSection } from "./shared";

const mistakes: { icon: LucideIcon; title: string; body: string; fix: string }[] = [
  {
    icon: FileCheck,
    title: "Incomplete evidence",
    body: "Missing condition records or entitlement slow routes down and weaken disputes.",
    fix: "Gather records before choosing a route",
  },
  {
    icon: EyeOff,
    title: "Opening access too broadly",
    body: "Showing stock to every buyer risks brand and pricing exposure.",
    fix: "Set permitted audiences first",
  },
  {
    icon: Trash2,
    title: "Disposing too soon",
    body: "Writing off stock before checking routes can close off lawful options.",
    fix: "Compare pathways before disposal",
  },
];

export default function CommonMistakes() {
  return (
    <GuideSection id="mistakes" num="12" label="Common mistakes" title="Three to avoid early.">
      <ul className="grid gap-4 md:grid-cols-3">
        {mistakes.map(({ icon: Icon, title, body, fix }) => (
          <li key={title} className="flex flex-col gap-2 rounded-2xl border border-[#e6e9ef] bg-white p-6">
            <span className="flex size-11 items-center justify-center rounded-xl bg-[#fdebd3] text-[#b5651d]">
              <Icon aria-hidden="true" className="size-5" strokeWidth={1.75} />
            </span>
            <h3 className="pt-2 text-lg font-semibold text-[#0f1f3a]">{title}</h3>
            <p className="text-sm leading-6 text-[#556987]">{body}</p>
            <p className="mt-auto flex items-center gap-2 border-t border-dashed border-[#e6e9ef] pt-3 text-sm font-semibold text-[#16a37a]">
              <Check aria-hidden="true" className="size-4 shrink-0" strokeWidth={2} />
              {fix}
            </p>
          </li>
        ))}
      </ul>
    </GuideSection>
  );
}
