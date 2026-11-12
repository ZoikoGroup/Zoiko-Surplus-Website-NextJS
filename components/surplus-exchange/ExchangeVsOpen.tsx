import Image from "next/image";
import { Check, X } from "lucide-react";
import { GuideSection, SandPill, exImg, sora } from "./shared";

const models = [
  {
    pill: "Open marketplace",
    tone: "slate" as const,
    title: "Anyone can browse.",
    points: ["Stock is visible to the public", "Buyers are lightly checked", "Seller cannot choose the audience"],
    positive: false,
    image: exImg("compare-open-marketplace.webp"),
    alt: "Shoppers browsing clothing on a busy retail floor",
  },
  {
    pill: "Surplus Exchange",
    tone: "sand" as const,
    title: "Seller-governed participation.",
    points: ["Seller authorizes the audience", "Organizations are verified first", "Policy and evidence are built in"],
    positive: true,
    image: exImg("compare-surplus-exchange.webp"),
    alt: "Long warehouse aisle with high racking",
  },
];

export default function ExchangeVsOpen() {
  return (
    <GuideSection
      id="compare"
      num="05"
      label="Exchange vs open marketplace"
      title={
        <>
          A controlled exchange, not an open
          <br className="hidden md:block" /> storefront.
        </>
      }
      lead="The difference is who decides who sees what."
    >
      <ul className="grid gap-5 md:grid-cols-2">
        {models.map((m) => {
          const Mark = m.positive ? Check : X;
          return (
            <li
              key={m.pill}
              className={`flex flex-col overflow-hidden rounded-2xl border bg-white ${
                m.positive ? "border-[#5fc7a6] shadow-[0_0_0_1px_#5fc7a6]" : "border-[#e6e9ef]"
              }`}
            >
              <div className="relative aspect-[612/190] w-full bg-[#16263f]">
                <Image src={m.image} alt={m.alt} fill sizes="(min-width: 768px) 612px, 100vw" className="object-cover" />
              </div>
              <div className="flex flex-col gap-3 p-6">
                <SandPill tone={m.tone}>{m.pill}</SandPill>
                <h3 className={`${sora} text-xl font-semibold text-[#0f1f3a]`}>{m.title}</h3>
                <ul className="flex flex-col gap-2.5">
                  {m.points.map((p) => (
                    <li key={p} className="flex items-start gap-2.5 text-base leading-6 text-[#3d4a60]">
                      <Mark
                        aria-hidden="true"
                        className={`mt-1 size-4 shrink-0 ${m.positive ? "text-[#16a37a]" : "text-[#d0453b]"}`}
                        strokeWidth={2}
                      />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          );
        })}
      </ul>
    </GuideSection>
  );
}
