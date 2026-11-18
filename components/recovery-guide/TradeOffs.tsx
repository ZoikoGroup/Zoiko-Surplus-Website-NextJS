import Image from "next/image";
import type { ReactNode } from "react";
import { Clock, Coins, Package, Scale, Truck, type LucideIcon } from "lucide-react";
import { GuideSection, cardShadow, img } from "./shared";

const costs: { icon: LucideIcon; label: string }[] = [
  { icon: Coins, label: "Platform fees" },
  { icon: Truck, label: "Logistics" },
  { icon: Package, label: "Handling" },
  { icon: Clock, label: "Storage and time" },
  { icon: Scale, label: "Compliance" },
];

function TradeCard({
  image,
  alt,
  eyebrow,
  title,
  body,
  children,
}: {
  image: string;
  alt: string;
  eyebrow: string;
  title: string;
  body: string;
  children?: ReactNode;
}) {
  return (
    <article className={`flex flex-col overflow-hidden rounded-2xl border border-[#e6e9ef] bg-white ${cardShadow}`}>
      <div className="relative aspect-[610/200] w-full bg-[#16263f]">
        <Image src={image} alt={alt} fill sizes="(min-width: 768px) 610px, 100vw" className="object-cover" />
      </div>
      <div className="flex flex-col gap-3 p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#8a5a14]">{eyebrow}</p>
        <h3 className="text-2xl font-semibold text-[#0f1f3a]">{title}</h3>
        <p className="text-base leading-6 text-[#556987]">{body}</p>
        {children}
      </div>
    </article>
  );
}

export default function TradeOffs() {
  return (
    <GuideSection
      id="trade-offs"
      num="07"
      label="Commercial trade-offs"
      title="Gross is a starting point. Net is the outcome."
      lead="This guide shows no formulas or figures. Costs and market conditions change."
    >
      <div className="grid gap-6 md:grid-cols-2">
        <TradeCard
          image={img("tradeoff-gross.webp")}
          alt="Hands typing on a laptop beside a notebook"
          eyebrow="Gross estimate"
          title="What the goods might fetch."
          body="An early view of potential value. It is an estimate, it can move, and it is never a promise."
        />
        <TradeCard
          image={img("tradeoff-net.webp")}
          alt="Logistics worker with a tablet at a delivery van"
          eyebrow="Net result"
          title="What remains after costs."
          body="Value left once fees, handling and time are counted. Uncertainty stays visible."
        >
          <ul aria-label="Costs counted" className="flex flex-wrap gap-2 pt-1">
            {costs.map(({ icon: Icon, label }) => (
              <li key={label} className="inline-flex items-center gap-1.5 rounded-full bg-[#fbf0e0] px-3 py-1.5 text-sm text-[#0f1f3a]">
                <Icon aria-hidden="true" className="size-4 text-[#8a5a14]" strokeWidth={1.75} />
                {label}
              </li>
            ))}
          </ul>
        </TradeCard>
      </div>
    </GuideSection>
  );
}
