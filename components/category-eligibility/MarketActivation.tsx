import type { ReactNode } from "react";
import { CircleCheck, Clock, Lock, type LucideIcon } from "lucide-react";
import MarketPicker from "@/components/buyer-qualification/MarketPicker";
import { GuideSection, sora } from "./shared";

export type MarketGate = { icon: LucideIcon; tone: "mint" | "sand" | "slate"; pill?: string; title: string; body: string };

const defaultGates: MarketGate[] = [
  {
    icon: CircleCheck,
    tone: "mint",
    pill: "Concept only",
    title: "Great Britain apparel and footwear",
    body: "A controlled concept, not a verified launch.",
  },
  { icon: Clock, tone: "sand", pill: "Configured later", title: "Other markets", body: "Opened market and category at a time." },
  { icon: Lock, tone: "slate", pill: "Separately gated", title: "Sealed ambient food", body: "Needs its own approval." },
];

const tile = { mint: "bg-[#e3f4ee] text-[#16a37a]", sand: "bg-[#f5e3c3] text-[#8a5a14]", slate: "bg-[#f5e3c3] text-[#8a5a14]" };
const pill = {
  mint: "bg-[#e3f4ee] text-[#0b7a5c]",
  sand: "bg-[#f5e3c3] text-[#7a4d0f]",
  slate: "bg-[#eef1f6] text-[#3d4a60]",
};

// The Seller Readiness Guide reuses this with its own heading and gates.
export default function MarketActivation({
  id = "market-activation",
  num = "05",
  label = "Local market, category and corridor",
  title = "Global by architecture. Local by activation.",
  lead = "Market and category activation are separate. Neither is implied by the page language.",
  gates = defaultGates,
  picker = true,
}: {
  id?: string;
  num?: string;
  label?: string;
  title?: ReactNode;
  lead?: ReactNode;
  gates?: MarketGate[];
  /** Request Enterprise Demo shows the gates without the market dropdown. */
  picker?: boolean;
}) {
  return (
    <GuideSection id={id} num={num} label={label} title={title} lead={lead}>
      <div className="flex flex-col gap-5">
        {picker && <MarketPicker subject="Status" />}
        <ul className="grid gap-5 md:grid-cols-3">
          {gates.map(({ icon: Icon, tone, pill: label, title, body }) => (
            <li key={title} className="flex flex-col gap-2 rounded-2xl border border-[#e6e9ef] bg-white p-6">
              <span className={`flex size-11 items-center justify-center rounded-xl ${tile[tone]}`}>
                <Icon aria-hidden="true" className="size-5" strokeWidth={1.75} />
              </span>
              {label ? (
                <span className={`mt-3 w-fit rounded-full px-2.5 py-1 text-xs font-medium ${pill[tone]}`}>{label}</span>
              ) : (
                <span aria-hidden="true" className="h-6" />
              )}
              <h3 className={`${sora} pt-1 text-xl font-semibold text-[#0f1f3a]`}>{title}</h3>
              <p className="text-sm leading-6 text-[#556987]">{body}</p>
            </li>
          ))}
        </ul>
      </div>
    </GuideSection>
  );
}
