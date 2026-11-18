import { CircleCheck, Clock, Lock, type LucideIcon } from "lucide-react";
import MarketPicker from "@/components/buyer-qualification/MarketPicker";
import { GuideSection, sora } from "./shared";

const states: { icon: LucideIcon; tone: "mint" | "sand"; pill: string; pillTone: "mint" | "slate" | "sand"; title: string; body: string }[] = [
  {
    icon: CircleCheck,
    tone: "mint",
    pill: "Open",
    pillTone: "mint",
    title: "Intake available",
    body: "Shown only where intake is real and tested. None is shown here.",
  },
  {
    icon: Lock,
    tone: "sand",
    pill: "Not offered",
    pillTone: "slate",
    title: "No partner intake",
    body: "Read the overview or use the general contact.",
  },
  { icon: Clock, tone: "sand", pill: "Unknown", pillTone: "sand", title: "Status unclear", body: "Safe next steps are shown." },
];

const tile = { mint: "bg-[#e3f4ee] text-[#16a37a]", sand: "bg-[#f5e3c3] text-[#8a5a14]" };
const pill = {
  mint: "bg-[#e3f4ee] text-[#0b7a5c]",
  sand: "bg-[#f5e3c3] text-[#7a4d0f]",
  slate: "bg-[#eef1f6] text-[#3d4a60]",
};

export default function Availability() {
  return (
    <GuideSection
      id="availability"
      num="07"
      label="Availability and status"
      title={
        <>
          Global by architecture.
          <br className="hidden md:block" /> Local by activation.
        </>
      }
      lead="Choosing a language or region never shows live provider status."
    >
      <div className="flex flex-col gap-5">
        <MarketPicker subject="Status" />
        <ul className="grid gap-5 md:grid-cols-3">
          {states.map(({ icon: Icon, tone, pill: label, pillTone, title, body }) => (
            <li key={title} className="flex flex-col gap-2 rounded-2xl border border-[#e6e9ef] bg-white p-6">
              <div className="flex items-start justify-between gap-3">
                <span className={`flex size-11 items-center justify-center rounded-xl ${tile[tone]}`}>
                  <Icon aria-hidden="true" className="size-5" strokeWidth={1.75} />
                </span>
                <span className={`rounded-full px-2.5 py-1 text-xs font-medium ${pill[pillTone]}`}>{label}</span>
              </div>
              <h3 className={`${sora} pt-4 text-xl font-semibold text-[#0f1f3a]`}>{title}</h3>
              <p className="text-sm leading-6 text-[#556987]">{body}</p>
            </li>
          ))}
        </ul>
      </div>
    </GuideSection>
  );
}
