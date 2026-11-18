import Image from "next/image";
import { ArrowLeftRight, Building, Network, type LucideIcon } from "lucide-react";
import { CornerIcon, GuideSection, SandPill, exImg, sora } from "./shared";

// Enterprise and Network links stay pending until those pages are published.
const capabilities: { icon: LucideIcon; pill: string; title: string; current?: boolean; image: string; alt: string }[] = [
  {
    icon: Building,
    pill: "Surplus Enterprise",
    title: "Qualify and govern surplus stock.",
    image: exImg("platform-enterprise.webp"),
    alt: "Two colleagues reviewing stock on a laptop in a warehouse",
  },
  {
    icon: ArrowLeftRight,
    pill: "Surplus Exchange",
    title: "Governed participation for qualified demand.",
    current: true,
    image: exImg("platform-exchange.webp"),
    alt: "Two professionals reviewing a laptop and folder",
  },
  {
    icon: Network,
    pill: "Surplus Network",
    title: "Coordinate permitted disposition with approved partners.",
    image: exImg("platform-network.webp"),
    alt: "Warehouse workers in safety vests moving boxes",
  },
];

export default function Platform() {
  return (
    <GuideSection
      id="platform"
      num="11"
      label="Works with the rest of the platform"
      title={
        <>
          Exchange is one of three
          <br className="hidden md:block" /> connected capabilities.
        </>
      }
      lead="Enterprise, Exchange and Network share one qualification, policy and evidence backbone. Zoiko does not own warehouses or fleets by default."
    >
      <ul className="grid gap-5 md:grid-cols-3">
        {capabilities.map((c) => (
          <li
            key={c.pill}
            aria-current={c.current ? "page" : undefined}
            className={`flex flex-col overflow-hidden rounded-2xl border bg-white ${
              c.current ? "border-[#5fc7a6] shadow-[0_0_0_1px_#5fc7a6]" : "border-[#e6e9ef]"
            }`}
          >
            <div className="relative aspect-[401/190] w-full bg-[#16263f]">
              <Image src={c.image} alt={c.alt} fill sizes="(min-width: 768px) 401px, 100vw" className="object-cover" />
              <CornerIcon icon={c.icon} />
            </div>
            <div className="flex flex-1 flex-col gap-3 p-6">
              <SandPill>{c.pill}</SandPill>
              <h3 className={`${sora} text-xl font-semibold leading-6 text-[#0f1f3a]`}>{c.title}</h3>
              <p className={`mt-auto pt-6 text-sm ${c.current ? "text-[#556987]" : "font-medium text-[#8a5a14]"}`}>
                {c.current ? "You are here." : "Learn more (pending) →"}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </GuideSection>
  );
}
