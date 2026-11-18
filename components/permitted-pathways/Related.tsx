import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { GuideSection, cardShadow, ppImg, sora } from "./shared";

const related = [
  {
    title: "Surplus Network",
    body: "How seller-approved surplus is coordinated.",
    href: "/solution-surplus-network",
    image: ppImg("related-surplus-network.webp"),
    alt: "Workers in hi-vis vests checking stock against a clipboard",
  },
  {
    title: "Partner Participation",
    body: "Apply to provide an authorized service.",
    href: "/partner-participation",
    image: ppImg("related-partner-participation.webp"),
    alt: "Warehouse worker shaking hands with a business partner",
  },
  {
    title: "How It Works",
    body: "The governed seven-stage model.",
    href: "/how-it-works",
    image: ppImg("related-how-it-works.webp"),
    alt: "Documents being handed over at a desk beside a parcel",
  },
];

export default function Related() {
  return (
    <GuideSection
      id="related"
      num="10"
      label="Related"
      title="Where pathways connect."
      lead="Permitted pathways are part of the governed Surplus Network."
    >
      <ul className="grid gap-5 md:grid-cols-3">
        {related.map((r) => (
          <li key={r.title}>
            <Link
              href={r.href}
              className={`group flex h-full flex-col overflow-hidden rounded-2xl border border-[#e6e9ef] bg-white transition-colors hover:border-[#c9d2de] ${cardShadow}`}
            >
              <div className="relative aspect-[401/250] w-full bg-[#16263f]">
                <Image src={r.image} alt={r.alt} fill sizes="(min-width: 768px) 401px, 100vw" className="object-cover" />
                <span className="absolute top-3 right-3 flex size-8 items-center justify-center rounded-full bg-white text-[#0f1f3a] shadow-sm">
                  <ArrowUpRight aria-hidden="true" className="size-4" strokeWidth={1.75} />
                </span>
              </div>
              <div className="flex flex-1 flex-col gap-1.5 p-5">
                <h3 className={`${sora} text-lg font-semibold text-[#0f1f3a]`}>{r.title}</h3>
                <p className="text-sm leading-6 text-[#556987]">{r.body}</p>
                <span className="mt-auto inline-flex items-center gap-2 pt-3 text-sm font-semibold text-[#7a4d0f] group-hover:underline">
                  Explore
                  <ArrowRight aria-hidden="true" className="size-4" strokeWidth={1.75} />
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </GuideSection>
  );
}
