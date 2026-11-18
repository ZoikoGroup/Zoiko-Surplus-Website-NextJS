import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Building2, Truck, UserCheck, type LucideIcon } from "lucide-react";
import { GuideSection, SandTile, cardShadow, lcImg, sora } from "./shared";

const paths: {
  icon: LucideIcon;
  title: string;
  body: string;
  cta: string;
  href: string;
  primary?: boolean;
  image: string;
  alt: string;
}[] = [
  {
    icon: Building2,
    title: "Enterprise seller",
    body: "Discuss mandate, release authority and evidence. A discussion is not service activation.",
    cta: "Request Enterprise Demo",
    href: "#",
    primary: true,
    image: lcImg("path-enterprise-seller.webp"),
    alt: "Two colleagues reviewing stock on a laptop in a warehouse",
  },
  {
    icon: Truck,
    title: "Potential logistics partner",
    body: "See where your capabilities may fit. Not instant enrollment.",
    cta: "Explore Partner Pathways",
    href: "/partner-participation",
    image: lcImg("path-logistics-partner.webp"),
    alt: "Logistics worker with a tablet at the back of a van",
  },
  {
    icon: UserCheck,
    title: "Eligible business buyer",
    body: "Delivery terms and returns depend on the approved transaction, not on a public promise.",
    cta: "Read buyer expectations",
    href: "/buyer-qualification",
    image: lcImg("path-business-buyer.webp"),
    alt: "Professional with a tablet in a warehouse aisle",
  },
];

export default function NextStep() {
  return (
    <GuideSection id="next-step" num="11" label="Next step" title="Choose your path.">
      <ul className="grid gap-6 md:grid-cols-3">
        {paths.map((p) => (
          <li key={p.title} className={`flex flex-col overflow-hidden rounded-2xl border border-[#e6e9ef] bg-white ${cardShadow}`}>
            <div className="relative aspect-[401/150] w-full bg-[#16263f]">
              <Image src={p.image} alt={p.alt} fill sizes="(min-width: 768px) 401px, 100vw" className="object-cover" />
            </div>
            <div className="flex flex-1 flex-col gap-2 p-6">
              <SandTile icon={p.icon} />
              <h3 className={`${sora} pt-2 text-xl font-semibold text-[#0f1f3a]`}>{p.title}</h3>
              <p className="text-sm leading-6 text-[#556987]">{p.body}</p>
              <Link
                href={p.href}
                className={`mt-auto inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold transition-colors ${
                  p.primary
                    ? "bg-[#926016] text-white hover:bg-[#a66e1b]"
                    : "border border-[#dfe5ed] bg-white text-[#0f1f3a] hover:border-[#0f1f3a]"
                }`}
              >
                {p.cta}
                <ArrowRight aria-hidden="true" className="size-4" strokeWidth={1.75} />
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </GuideSection>
  );
}
