import { ArrowLeftRight, Lock, type LucideIcon } from "lucide-react";
import { GuideSection, SandPill, sora } from "./shared";

// Not linked yet: both destinations are pending publication.
const destinations: { icon: LucideIcon; tone: "mint" | "sand"; pill: string; title: string; body: string; status: string }[] = [
  {
    icon: Lock,
    tone: "mint",
    pill: "Private marketplaces",
    title: "Seller-governed audiences.",
    body: "How private markets are set up, who can be invited and how visibility is tiered.",
    status: "separate destination, link goes live when published.",
  },
  {
    icon: ArrowLeftRight,
    tone: "sand",
    pill: "Offers & transactions",
    title: "Governed negotiation and outcomes.",
    body: "How offers, orders and confirmations work where a transaction workflow is enabled.",
    status: "candidate service. Availability depends on the market.",
  },
];

export default function NextInSolutions() {
  return (
    <GuideSection
      id="next"
      num="15"
      label="Next in solutions"
      title={
        <>
          Two further destinations,
          <br className="hidden md:block" /> previewed only.
        </>
      }
      lead="These have their own pages. No live screenshots or confidential data appear here."
    >
      <ul className="grid gap-5 md:grid-cols-2">
        {destinations.map(({ icon: Icon, tone, pill, title, body, status }) => (
          <li key={pill} className="flex flex-col gap-3 rounded-2xl border border-dashed border-[#d6dce5] bg-white p-6 md:p-7">
            <div className="flex items-center gap-3">
              <span
                className={`flex size-11 items-center justify-center rounded-xl ${
                  tone === "mint" ? "bg-[#e3f4ee] text-[#16a37a]" : "bg-[#f5e3c3] text-[#8a5a14]"
                }`}
              >
                <Icon aria-hidden="true" className="size-5" strokeWidth={1.75} />
              </span>
              <SandPill>{pill}</SandPill>
            </div>
            <h3 className={`${sora} text-xl font-semibold text-[#0f1f3a]`}>{title}</h3>
            <p className="text-sm leading-6 text-[#556987]">{body}</p>
            <p className="pt-3 text-sm text-[#3d4a60]">
              <strong className="font-semibold text-[#0f1f3a]">Status:</strong> {status}
            </p>
            <p className="pt-5 text-sm font-medium text-[#8a5a14]">Learn more (pending) →</p>
          </li>
        ))}
      </ul>
    </GuideSection>
  );
}
