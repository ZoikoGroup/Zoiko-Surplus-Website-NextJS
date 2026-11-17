import { CircleCheck, Clock, Lock, type LucideIcon } from "lucide-react";
import MarketPicker from "@/components/buyer-qualification/MarketPicker";
import { GuideSection, sora } from "./shared";

const gates: { icon: LucideIcon; tone: "mint" | "sand" | "slate"; pill: string; title: string; body: string }[] = [
  {
    icon: CircleCheck,
    tone: "mint",
    pill: "Proposed pilot",
    title: "UK domestic apparel and footwear",
    body: "Proposed initial configuration, not active trading.",
  },
  { icon: Clock, tone: "sand", pill: "Configured later", title: "Other markets", body: "Opened market by market." },
  {
    icon: Lock,
    tone: "slate",
    pill: "Separately gated",
    title: "Food and restricted goods",
    body: "Need extra safety and market approval.",
  },
];

const tile = { mint: "bg-[#e3f4ee] text-[#16a37a]", sand: "bg-[#f5e3c3] text-[#8a5a14]", slate: "bg-[#f5e3c3] text-[#8a5a14]" };
const pill = {
  mint: "bg-[#e3f4ee] text-[#0b7a5c]",
  sand: "bg-[#f5e3c3] text-[#7a4d0f]",
  slate: "bg-[#eef1f6] text-[#3d4a60]",
};

export default function MarketGate() {
  return (
    <GuideSection
      id="market-gate"
      num="04"
      label="Policy and market gate"
      title={
        <>
          Global by architecture.
          <br className="hidden md:block" /> Local by activation.
        </>
      }
      lead="Country, category, corridor and timing each decide eligibility. Your page language never does."
    >
      <div className="flex flex-col gap-5">
        <MarketPicker />
        <ul className="grid gap-5 md:grid-cols-3">
          {gates.map(({ icon: Icon, tone, pill: label, title, body }) => (
            <li key={title} className="flex flex-col gap-2 rounded-2xl border border-[#e6e9ef] bg-white p-6">
              <span className={`flex size-11 items-center justify-center rounded-xl ${tile[tone]}`}>
                <Icon aria-hidden="true" className="size-5" strokeWidth={1.75} />
              </span>
              <span className={`mt-3 w-fit rounded-full px-2.5 py-1 text-xs font-medium ${pill[tone]}`}>{label}</span>
              <h3 className={`${sora} pt-1 text-xl font-semibold text-[#0f1f3a]`}>{title}</h3>
              <p className="text-sm leading-6 text-[#556987]">{body}</p>
            </li>
          ))}
        </ul>
      </div>
    </GuideSection>
  );
}
