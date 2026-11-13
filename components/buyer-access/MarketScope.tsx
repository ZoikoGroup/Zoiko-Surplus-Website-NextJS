import { Ban, CircleHelp, Info, type LucideIcon } from "lucide-react";
import MarketContext from "./MarketContext";
import { GuideSection } from "./shared";

const states: { icon: LucideIcon; title: string; body: string; tile: string }[] = [
  {
    icon: Info,
    title: "Informational",
    body: "Explains how a market works. It does not mean the market is open.",
    tile: "bg-[#e3f4ee] text-[#16a37a]",
  },
  {
    icon: Ban,
    title: "Unavailable",
    body: "The market or category is not enabled. No application creates an entitlement.",
    tile: "bg-[#fdecd6] text-[#a35d14]",
  },
  {
    icon: CircleHelp,
    title: "Unknown",
    body: "No approved statement exists yet. Ask support rather than assume.",
    tile: "bg-[#f5e3c3] text-[#8a5a14]",
  },
];

export default function MarketScope() {
  return (
    <GuideSection
      id="market-scope"
      num="02"
      label="Market and category scope"
      title="Availability is stated by market."
      lead="Public guidance only. No seller-private options are shown."
    >
      <div className="flex flex-col gap-5">
        <MarketContext />
        <ul className="grid gap-5 md:grid-cols-3">
          {states.map(({ icon: Icon, title, body, tile }) => (
            <li key={title} className="flex items-start gap-4 rounded-2xl border border-[#e6e9ef] bg-white p-5 md:p-6">
              <span className={`flex size-11 shrink-0 items-center justify-center rounded-xl ${tile}`}>
                <Icon aria-hidden="true" className="size-5" strokeWidth={1.75} />
              </span>
              <div className="flex flex-col gap-1">
                <h3 className="text-lg font-semibold text-[#0f1f3a]">{title}</h3>
                <p className="text-sm leading-6 text-[#556987]">{body}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </GuideSection>
  );
}
