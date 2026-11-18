import Image from "next/image";
import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { TriangleAlert } from "lucide-react";
import { cardShadow, sora } from "@/components/recovery-guide/shared";

// Layout, heading and tile blocks are shared with the Recovery Guide / Knowledge Center pages.
// The blocks defined below are also used by the Surplus Exchange page.
export {
  hanken,
  sora,
  Container,
  SectionHeading,
  SandTile,
  MintTile,
  GuideSection,
  Note,
  cardShadow,
} from "@/components/recovery-guide/shared";

export const img = (name: string) => `/images/buyer-qualification/${name}`;

// Same list the Become a Verified Buyer preflight uses.
export const markets = ["United Kingdom", "European Union (Pilot)", "North America", "Middle East & APAC"];

// Plain white pill laid over photos ("Illustrative imagery", "Business buyers").
export function ImageTag({ children }: { children: string }) {
  return (
    <span className="inline-flex rounded-full bg-white px-3 py-1.5 text-xs font-medium text-[#0f1f3a] shadow-sm">
      {children}
    </span>
  );
}

// White rounded square holding a sand-coloured icon, laid over the top-right corner of a photo.
export function CornerIcon({ icon: Icon }: { icon: LucideIcon }) {
  return (
    <span className="absolute top-3 right-3 flex size-9 items-center justify-center rounded-lg bg-white/95 text-[#8a5a14] shadow-sm">
      <Icon aria-hidden="true" className="size-[18px]" strokeWidth={1.75} />
    </span>
  );
}

// Sand label pill ("For sellers", "Surplus Exchange").
export function SandPill({ children, tone = "sand" }: { children: string; tone?: "sand" | "slate" }) {
  const styles = tone === "slate" ? "bg-[#eef1f6] text-[#3d4a60]" : "bg-[#fbe9cc] text-[#8a5a14]";
  return (
    <span className={`inline-flex w-fit rounded-md px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] ${styles}`}>
      {children}
    </span>
  );
}

// Full-width amber warning strip under a section.
export function WarningStrip({ children }: { children: ReactNode }) {
  return (
    <p className="flex items-start gap-2 rounded-xl bg-[#fdf3dc] px-4 py-3 text-sm leading-5 text-[#3d2a0c]">
      <TriangleAlert aria-hidden="true" className="mt-0.5 size-4 shrink-0" strokeWidth={1.75} />
      <span>{children}</span>
    </p>
  );
}

export type PhotoCardItem = {
  icon: LucideIcon;
  title: string;
  body: string;
  image: string;
  alt: string;
};

// Photo card with a navy fade and the text set over its lower half.
// `eyebrow` is the optional mint label prefix ("Decision", "Status", ...); the card number is appended.
export function PhotoCardGrid({
  eyebrow,
  items,
  aspect = "aspect-[302/300]",
}: {
  eyebrow?: string;
  items: PhotoCardItem[];
  aspect?: string;
}) {
  return (
    <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((item, i) => (
        <li key={item.title} className={`relative ${aspect} w-full overflow-hidden rounded-2xl bg-[#16263f]`}>
          <Image
            src={item.image}
            alt={item.alt}
            fill
            sizes="(min-width: 1024px) 302px, (min-width: 640px) 50vw, 100vw"
            className="object-cover"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,31,58,0.05)_0%,rgba(15,31,58,0.55)_48%,rgba(15,31,58,0.96)_78%,#0f1f3a_100%)]"
          />
          <CornerIcon icon={item.icon} />
          <div className="absolute inset-x-0 bottom-0 flex flex-col gap-1 p-4">
            {eyebrow && (
              <span className="text-[11px] font-medium uppercase tracking-[0.14em] text-[#5fd0ad]">
                {eyebrow} {i + 1}
              </span>
            )}
            <h3 className={`${sora} text-xl font-semibold leading-6 text-white`}>{item.title}</h3>
            <p className="text-sm leading-6 text-[#d5dceb]">{item.body}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

export type TileCardItem = { icon: LucideIcon; title: string; body: string; tone?: "mint" | "sand" };

// Bordered white card with a tinted icon tile on top.
export function TileCard({ item, large = false }: { item: TileCardItem; large?: boolean }) {
  const { icon: Icon, title, body, tone = "sand" } = item;
  const tile = tone === "mint" ? "bg-[#e3f4ee] text-[#16a37a]" : "bg-[#f5e3c3] text-[#8a5a14]";
  return (
    <li className={`flex flex-col gap-2 rounded-2xl border border-[#e6e9ef] bg-white ${large ? "p-6 md:p-7" : "p-5"}`}>
      <span className={`flex size-11 shrink-0 items-center justify-center rounded-xl ${tile}`}>
        <Icon aria-hidden="true" className="size-5" strokeWidth={1.75} />
      </span>
      <h3 className={`${sora} pt-1.5 font-semibold text-[#0f1f3a] ${large ? "text-xl md:text-2xl" : "text-lg"}`}>
        {title}
      </h3>
      <p className="text-sm leading-6 text-[#556987]">{body}</p>
    </li>
  );
}

export type CategoryTile = { label: string; badge: string; image: string; alt: string };

// Tall category photos with a status pill top-left and the name bottom-left.
export function CategoryTiles({ categories }: { categories: CategoryTile[] }) {
  return (
    <ul className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
      {categories.map((c) => (
        <li key={c.label} className="relative aspect-[239/318] w-full overflow-hidden rounded-2xl bg-[#16263f]">
          <Image
            src={c.image}
            alt={c.alt}
            fill
            sizes="(min-width: 1024px) 239px, (min-width: 768px) 33vw, 50vw"
            className="object-cover"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,31,58,0)_45%,rgba(15,31,58,0.85)_100%)]"
          />
          <span className="absolute top-3 left-3 rounded-full bg-white px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-[#3d2a0c]">
            {c.badge}
          </span>
          <h3 className="absolute inset-x-3 bottom-4 text-sm font-semibold text-white md:text-base">{c.label}</h3>
        </li>
      ))}
    </ul>
  );
}

export type AudienceItem = { icon: LucideIcon; title: string; body: string; image: string; alt: string };

// Five photo cards, each with a white icon tile overlapping the bottom of the photo.
export function AudienceGrid({ items }: { items: AudienceItem[] }) {
  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
      {items.map(({ icon: Icon, title, body, image, alt }) => (
        <li key={title} className={`flex flex-col overflow-hidden rounded-2xl border border-[#e6e9ef] bg-white ${cardShadow}`}>
          <div className="relative aspect-[237/130] w-full bg-[#16263f]">
            <Image
              src={image}
              alt={alt}
              fill
              sizes="(min-width: 1024px) 237px, (min-width: 640px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="relative flex flex-1 flex-col gap-1.5 px-4 pt-9 pb-6">
            <span className="absolute -top-6 left-3 flex size-11 items-center justify-center rounded-xl bg-white text-[#16a37a] shadow-[0_4px_12px_-4px_rgba(12,33,64,0.25)]">
              <Icon aria-hidden="true" className="size-5" strokeWidth={1.75} />
            </span>
            <h3 className={`${sora} text-base font-semibold text-[#0f1f3a]`}>{title}</h3>
            <p className="text-sm leading-6 text-[#556987]">{body}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

// Navy-headed table; the first cell of each row is the row header.
export function LedgerTable({
  headings,
  rows,
  colWidths = [],
}: {
  headings: string[];
  rows: string[][];
  colWidths?: string[];
}) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-[#e6e9ef] bg-white">
      <table className="w-full min-w-[760px] border-collapse text-left">
        <thead className="bg-[#0b2647]">
          <tr>
            {headings.map((h) => (
              <th key={h} scope="col" className="px-4 py-4 text-xs font-semibold uppercase tracking-[0.14em] text-white">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map(([first, ...rest]) => (
            <tr key={first} className="border-t border-[#e6e9ef] align-top first:border-t-0">
              <th scope="row" className={`${colWidths[0] ?? ""} px-4 py-4 text-sm font-semibold text-[#0f1f3a]`}>
                {first}
              </th>
              {rest.map((cell, i) => (
                <td key={i} className={`${colWidths[i + 1] ?? ""} px-4 py-4 text-sm leading-6 text-[#556987]`}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export type Term = { icon: LucideIcon; term: string; meaning: string };

// Glossary cards: sand icon tile beside the term and its definition.
export function TermGrid({ terms }: { terms: Term[] }) {
  return (
    <dl className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {terms.map(({ icon, term, meaning }) => (
        <div key={term} className="flex items-start gap-3 rounded-2xl border border-[#e6e9ef] bg-white p-5 pb-8">
          <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-[#f5e3c3] text-[#8a5a14]">
            <TermIcon icon={icon} />
          </span>
          <div className="flex flex-col gap-1">
            <dt className="text-base font-semibold text-[#0f1f3a]">{term}</dt>
            <dd className="text-sm leading-6 text-[#556987]">{meaning}</dd>
          </div>
        </div>
      ))}
    </dl>
  );
}

function TermIcon({ icon: Icon }: { icon: LucideIcon }) {
  return <Icon aria-hidden="true" className="size-5" strokeWidth={1.75} />;
}
