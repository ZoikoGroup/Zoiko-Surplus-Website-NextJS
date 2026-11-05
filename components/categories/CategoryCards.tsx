import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { hanken } from "./shared";

export type CategoryCard = {
  title: string;
  body: string;
  badge: string;
  // "live" = green (overview / proposed pilot), "gated" = amber (safety-gated), "muted" = grey (conditional).
  badgeTone: "live" | "gated" | "muted";
  image: string;
  alt: string;
  href: string;
};

const badgeStyles = {
  live: { pill: "bg-[#ddf3ec] text-[#0b7a5c]", dot: "bg-[#16a37a]" },
  gated: { pill: "bg-[#f5e7d6] text-[#7a4d0f]", dot: "bg-[#a0661c]" },
  muted: { pill: "bg-[#eef1f5]/95 text-[#3a475c]", dot: "bg-[#3a475c]" },
};

// "Explore other categories" card grid.
export default function CategoryCards({ cards, sizes }: { cards: CategoryCard[]; sizes: string }) {
  return (
    <ul className={`${hanken} grid gap-4 sm:grid-cols-3`}>
      {cards.map((c) => {
        const badge = badgeStyles[c.badgeTone];
        return (
          <li key={c.title}>
            <Link
              href={c.href}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#e6e9ef] bg-white transition-shadow hover:shadow-[0_10px_30px_-18px_rgba(15,23,42,0.35)]"
            >
              <div className="relative aspect-[8/5] w-full">
                <Image src={c.image} alt={c.alt} fill sizes={sizes} className="object-cover" />
                <span
                  className={`absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium ${badge.pill}`}
                >
                  <span aria-hidden="true" className={`size-1.5 rounded-full ${badge.dot}`} />
                  {c.badge}
                </span>
                <span className="absolute top-3 right-3 flex size-8 items-center justify-center rounded-full bg-white text-[#0f1f3a] shadow-sm">
                  <ArrowUpRight aria-hidden="true" className="size-4" strokeWidth={1.75} />
                </span>
              </div>
              <div className="flex flex-1 flex-col gap-1.5 p-4">
                <h3 className="text-base font-semibold text-[#0f1f3a]">{c.title}</h3>
                <p className="text-sm leading-5 text-[#556987]">{c.body}</p>
                <span className="mt-auto inline-flex items-center gap-2 pt-3 text-sm font-semibold text-[#7a4d0f] group-hover:underline">
                  Explore
                  <ArrowRight aria-hidden="true" className="size-4" strokeWidth={1.75} />
                </span>
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
