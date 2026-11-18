import Image from "next/image";
import { Ban, Globe, TriangleAlert, Utensils, Zap, type LucideIcon } from "lucide-react";
import { GuideSection, img } from "./shared";

const tracks: { icon: LucideIcon; title: string; body: string }[] = [
  { icon: Utensils, title: "Food", body: "Separate safety, shelf-life and local-law review. Not a standard goods route." },
  { icon: Ban, title: "Recalled goods", body: "Excluded from sale routes by default and escalated for review." },
  { icon: Zap, title: "Electrical and battery", body: "Transport and handling restrictions apply by category." },
  { icon: TriangleAlert, title: "Hazardous materials", body: "Specialist handling and authorized providers only." },
  { icon: Globe, title: "Cross-border", body: "Corridor, import and export rules differ by country." },
];

export default function RestrictedGoods() {
  return (
    <GuideSection
      id="restricted"
      num="08"
      label="Risk and restricted goods"
      title="Some goods follow a separate track."
      lead="Each has its own safety conditions. Default to exclusion and escalation."
    >
      <div className="flex flex-col gap-5">
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {tracks.map(({ icon: Icon, title, body }) => (
            <li
              key={title}
              className="flex flex-col gap-2 rounded-2xl border border-t-[3px] border-[#b9874a] bg-white p-5"
            >
              <span className="flex size-11 items-center justify-center rounded-xl bg-[#fdebd3] text-[#b5651d]">
                <Icon aria-hidden="true" className="size-5" strokeWidth={1.75} />
              </span>
              <h3 className="pt-2 text-lg font-semibold text-[#0f1f3a]">{title}</h3>
              <p className="text-sm leading-6 text-[#556987]">{body}</p>
            </li>
          ))}
        </ul>

        <div className="flex flex-col gap-6 rounded-2xl border border-[#f3e2c8] bg-[#fdf0dd] p-5 sm:flex-row sm:items-center sm:gap-12">
          <div className="relative aspect-[260/154] w-full shrink-0 overflow-hidden rounded-xl bg-[#16263f] sm:w-[260px]">
            <Image
              src={img("restricted-escalate.webp")}
              alt="Shopper reading a label in a grocery aisle"
              fill
              sizes="(min-width: 640px) 260px, 100vw"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="flex items-center gap-2.5 text-xl font-semibold text-[#0f1f3a]">
              <TriangleAlert aria-hidden="true" className="size-5 text-[#b5651d]" strokeWidth={1.75} />
              Escalate before you route
            </h3>
            <p className="text-sm leading-6 text-[#556987]">
              Restricted or recalled goods are never offered on a public page. Raise them with the team before any
              pathway is chosen.
            </p>
          </div>
        </div>
      </div>
    </GuideSection>
  );
}
