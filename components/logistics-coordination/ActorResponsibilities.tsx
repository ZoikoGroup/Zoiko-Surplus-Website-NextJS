import Image from "next/image";
import { Building2, Check, ShieldCheck, Truck, type LucideIcon } from "lucide-react";
import { GuideSection, cardShadow, lcImg, sora } from "./shared";

const actors: { icon: LucideIcon; title: string; body: string; points: string[]; image: string; alt: string }[] = [
  {
    icon: Building2,
    title: "Seller mandate",
    body: "Sets what may be moved, to whom and when. Gives or withholds release authority.",
    points: ["Instructions and destination", "Release approval", "Preparation and records"],
    image: lcImg("role-seller.webp"),
    alt: "Two colleagues reviewing stock on a laptop in a warehouse",
  },
  {
    icon: Truck,
    title: "Provider service",
    body: "Carries out contracted physical work and keeps evidence of it.",
    points: ["Collection, transport, delivery", "Proof of each handoff", "Reports exceptions promptly"],
    image: lcImg("role-provider.webp"),
    alt: "Logistics worker with a tablet at the back of a van",
  },
  {
    icon: ShieldCheck,
    title: "Platform control",
    body: "Applies the rules, checks approvals and keeps the record. It does not move goods.",
    points: ["Policy and category checks", "Authorization gates", "Evidence and escalation"],
    image: lcImg("role-platform.webp"),
    alt: "Colleagues checking goods together on a workshop floor",
  },
];

export default function ActorResponsibilities() {
  return (
    <GuideSection
      id="actors"
      num="02"
      label="Actor responsibilities"
      title="Three roles, kept distinct."
      lead="Responsibilities follow the agreements between the parties."
    >
      <ul className="grid gap-6 md:grid-cols-3">
        {actors.map(({ icon: Icon, title, body, points, image, alt }) => (
          <li key={title} className={`flex flex-col overflow-hidden rounded-2xl border border-[#e6e9ef] bg-white ${cardShadow}`}>
            <div className="relative aspect-[400/150] w-full bg-[#16263f]">
              <Image src={image} alt={alt} fill sizes="(min-width: 768px) 400px, 100vw" className="object-cover" />
            </div>
            <div className="relative flex flex-1 flex-col gap-2 px-6 pt-11 pb-7">
              <span className="absolute -top-6 left-5 flex size-12 items-center justify-center rounded-xl border-4 border-white bg-[#f5e3c3] text-[#8a5a14]">
                <Icon aria-hidden="true" className="size-5" strokeWidth={1.75} />
              </span>
              <h3 className={`${sora} text-xl font-semibold text-[#0f1f3a]`}>{title}</h3>
              <p className="text-sm leading-6 text-[#556987]">{body}</p>
              <ul className="flex flex-col gap-2 pt-2">
                {points.map((p) => (
                  <li key={p} className="flex items-start gap-2.5 text-sm leading-5 text-[#3d4a60]">
                    <Check aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-[#16a37a]" strokeWidth={2} />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </GuideSection>
  );
}
