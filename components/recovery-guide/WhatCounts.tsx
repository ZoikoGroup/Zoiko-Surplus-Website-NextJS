import Image from "next/image";
import { ArrowLeftRight, Package, Recycle, Search, type LucideIcon } from "lucide-react";
import { GuideSection, img } from "./shared";

const starts: { icon: LucideIcon; title: string; body: string; image: string; alt: string }[] = [
  {
    icon: Package,
    title: "Excess stock",
    body: "More inventory than planned demand will use.",
    image: img("surplus-excess.webp"),
    alt: "Warehouse shelving holding surplus stock",
  },
  {
    icon: ArrowLeftRight,
    title: "Returned goods",
    body: "Items sent back that cannot return to full-price sale.",
    image: img("surplus-returned.webp"),
    alt: "Person packing a returned parcel",
  },
  {
    icon: Search,
    title: "Imperfect goods",
    body: "Cosmetic or packaging issues that need clear grading.",
    image: img("surplus-imperfect.webp"),
    alt: "Gloved hand inspecting an item for defects",
  },
  {
    icon: Recycle,
    title: "Second-chance goods",
    body: "End-of-line or non-core items with remaining use.",
    image: img("surplus-second-chance.webp"),
    alt: "Retail staff arranging clothing racks",
  },
];

export default function WhatCounts() {
  return (
    <GuideSection
      id="what-counts"
      num="02"
      label="What counts as surplus"
      title="Four common starting points."
      lead="Examples are category-neutral. Which categories can move depends on approval in your market."
    >
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {starts.map(({ icon: Icon, ...s }) => (
          <li key={s.title} className="relative aspect-[299/261] overflow-hidden rounded-[20px] bg-[#16263f]">
            <Image src={s.image} alt={s.alt} fill sizes="(min-width: 1024px) 299px, (min-width: 640px) 50vw, 100vw" className="object-cover" />
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#0f1f3a]/90 via-[#0f1f3a]/30 to-transparent" />
            <span className="absolute top-4 right-4 flex size-8 items-center justify-center rounded-full bg-white text-[#0f1f3a]">
              <Icon aria-hidden="true" className="size-4" strokeWidth={1.75} />
            </span>
            <div className="absolute inset-x-0 bottom-0 flex flex-col gap-1 p-5">
              <h3 className="text-xl font-semibold text-white">{s.title}</h3>
              <p className="text-sm leading-5 text-white/85">{s.body}</p>
            </div>
          </li>
        ))}
      </ul>
    </GuideSection>
  );
}
