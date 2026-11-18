import Image from "next/image";
import { Building, Check, KeyRound, type LucideIcon } from "lucide-react";
import { CornerIcon, GuideSection, SandPill, cardShadow, exImg, sora } from "./shared";

const sides: {
  icon: LucideIcon;
  pill: string;
  title: string;
  body: string;
  points: string[];
  limit: string;
  image: string;
  alt: string;
}[] = [
  {
    icon: Building,
    pill: "For sellers",
    title: "Decide who may see your opportunities.",
    body: "Decide which qualified audiences may see eligible opportunities and under what approved commercial rules.",
    points: [
      "Choose the audience for each private market",
      "Withdraw an entitlement when needed",
      "Keep identity, pricing and lots non-public",
    ],
    limit: "no guaranteed demand, price or recovery.",
    image: exImg("value-sellers.webp"),
    alt: "Two colleagues reviewing stock on a laptop in a warehouse",
  },
  {
    icon: KeyRound,
    pill: "For verified business buyers",
    title: "Receive access only where authorized.",
    body: "Complete organization checks and receive access only to opportunities for which you are authorized.",
    points: [
      "Apply, then verify your organization",
      "See only seller-approved opportunities",
      "Visibility can differ between buyers",
    ],
    limit: "verification is not permission to trade.",
    image: exImg("value-buyers.webp"),
    alt: "Business colleagues looking at stock on warehouse shelving",
  },
];

export default function TwoSidedValue() {
  return (
    <GuideSection
      id="value"
      num="01"
      label="Two-sided value"
      title={
        <>
          Control for sellers. Qualified access
          <br className="hidden md:block" /> for buyers.
        </>
      }
      lead="Each side gets what the model is designed to offer, with the limits stated beside it."
    >
      <ul className="grid gap-5 md:grid-cols-2">
        {sides.map((s) => (
          <li
            key={s.pill}
            className={`flex flex-col overflow-hidden rounded-2xl border border-[#e6e9ef] bg-white ${cardShadow}`}
          >
            <div className="relative aspect-[612/225] w-full bg-[#16263f]">
              <Image src={s.image} alt={s.alt} fill sizes="(min-width: 768px) 612px, 100vw" className="object-cover" />
              <CornerIcon icon={s.icon} />
            </div>
            <div className="flex flex-1 flex-col gap-3 p-6 md:p-7">
              <SandPill>{s.pill}</SandPill>
              <h3 className={`${sora} text-xl font-semibold text-[#0f1f3a] md:text-[22px]`}>{s.title}</h3>
              <p className="text-base leading-6 text-[#556987]">{s.body}</p>
              <ul className="flex flex-col gap-2 pt-3">
                {s.points.map((p) => (
                  <li key={p} className="flex items-start gap-2.5 text-sm leading-5 text-[#3d4a60]">
                    <Check aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-[#16a37a]" strokeWidth={2} />
                    {p}
                  </li>
                ))}
              </ul>
              <p className="mt-auto pt-5 text-sm text-[#3d4a60]">
                <strong className="font-semibold text-[#0f1f3a]">Limit:</strong> {s.limit}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </GuideSection>
  );
}
