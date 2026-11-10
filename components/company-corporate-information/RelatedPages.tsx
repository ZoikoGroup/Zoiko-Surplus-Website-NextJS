import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { SectionHeading, Section, hanken, img } from "./shared";

const pages = [
  {
    title: "About Zoiko Surplus",
    body: "The vision, mission and principles behind the platform.",
    link: "About",
    href: "/about",
    image: img("related-about.webp"),
    alt: "Rail of jackets in assorted colours",
  },
  {
    title: "How It Works",
    body: "The governed seven-stage model, end to end.",
    link: "How It Works",
    href: "/how-it-works",
    image: img("related-how-it-works.webp"),
    alt: "Workers in hi-vis vests walking down a warehouse aisle",
  },
  {
    title: "Trust & Safety",
    body: "The controls, limits and responsibilities.",
    link: "Trust & Safety",
    href: "/trust-and-safety",
    image: img("related-trust-safety.webp"),
    alt: "Manager with folded arms standing in front of stacked cartons",
  },
];

export default function RelatedPages() {
  return (
    <Section labelledBy="related-heading">
      <SectionHeading
        id="related-heading"
        num="18"
        label="Related company pages"
        title="More about the company."
        lead="Explore the company and how the platform works."
        titleClassName="max-w-[780px]"
      />
      <ul className={`${hanken} grid gap-4 md:grid-cols-3`}>
        {pages.map((p) => (
          <li key={p.title}>
            <Link
              href={p.href}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#e6e9ef] bg-white transition-shadow hover:shadow-[0_10px_30px_-18px_rgba(15,23,42,0.35)]"
            >
              <div className="relative aspect-[403/227] w-full">
                <Image src={p.image} alt={p.alt} fill sizes="(min-width: 768px) 403px, 100vw" className="object-cover" />
                <span className="absolute top-3 right-3 flex size-8 items-center justify-center rounded-full bg-white text-[#0f1f3a] shadow-sm">
                  <ArrowUpRight aria-hidden="true" className="size-4" strokeWidth={1.75} />
                </span>
              </div>
              <div className="flex flex-1 flex-col gap-1.5 p-5">
                <h3 className="text-base font-semibold text-[#0f1f3a]">{p.title}</h3>
                <p className="text-sm leading-5 text-[#556987]">{p.body}</p>
                <span className="mt-auto inline-flex items-center gap-2 pt-3 text-sm font-semibold text-[#7a4d0f] group-hover:underline">
                  {p.link}
                  <ArrowRight aria-hidden="true" className="size-4" strokeWidth={1.75} />
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </Section>
  );
}
