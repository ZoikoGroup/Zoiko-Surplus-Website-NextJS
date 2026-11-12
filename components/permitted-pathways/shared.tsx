import Image from "next/image";
import type { ReactNode } from "react";
import { hanken, sora, Container, ImageTag } from "@/components/buyer-qualification/shared";

// Section, card and pill blocks are shared with the Buyer Qualification Guide.
export * from "@/components/buyer-qualification/shared";
export { CardGrid, type CardItem } from "@/components/company-corporate-information/shared";

export const ppImg = (name: string) => `/images/permitted-pathways/${name}`;

// Navy text panel beside a photo (sections 05 and 08).
export function DarkSplit({
  id,
  num,
  label,
  title,
  image,
  alt,
  tag,
  children,
}: {
  id: string;
  num: string;
  label: string;
  title: ReactNode;
  image: string;
  alt: string;
  tag: string;
  children: ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-heading`} className={`${hanken} scroll-mt-28 py-8 md:py-12`}>
      <Container>
        <div className="grid overflow-hidden rounded-[20px] lg:mx-auto lg:max-w-[1212px] lg:grid-cols-2">
          <div className="flex flex-col gap-5 bg-[#0c1f3f] px-6 py-12 md:px-10 md:py-14">
            <div className={`${sora} flex items-center gap-2.5 text-xs`}>
              <span className="font-semibold tracking-[0.18em] text-[#a9b6cc]">{num}</span>
              <span aria-hidden="true" className="h-0.5 w-8 bg-[#5fd0ad]/60" />
              <span className="font-semibold uppercase tracking-[0.18em] text-[#5fd0ad]">{label}</span>
            </div>
            <h2
              id={`${id}-heading`}
              className={`${sora} text-[32px] font-semibold leading-[1.15] tracking-[-0.02em] text-white md:text-[40px]`}
            >
              {title}
            </h2>
            {children}
          </div>
          <div className="relative aspect-[4/3] w-full bg-[#16263f] lg:aspect-auto lg:min-h-[540px]">
            <Image src={image} alt={alt} fill sizes="(min-width: 1024px) 620px, 100vw" className="object-cover" />
            <span className="absolute right-4 bottom-4">
              <ImageTag>{tag}</ImageTag>
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}

// Navy-headed table with sentence-case headings and cream striping on alternate rows.
export function StripedTable({
  caption,
  headings,
  rows,
  align = [],
}: {
  caption: string;
  headings: string[];
  rows: { key: string; cells: ReactNode[] }[];
  /** Optional per-column alignment classes, e.g. "text-center". */
  align?: string[];
}) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-[#e6e9ef] bg-white">
      <table className="w-full min-w-[720px] border-collapse text-left">
        <caption className="sr-only">{caption}</caption>
        <thead className="bg-[#0c1f3f]">
          <tr>
            {headings.map((h, i) => (
              <th key={h} scope="col" className={`px-4 py-4 text-xs font-semibold text-white ${align[i] ?? ""}`}>
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map(({ key, cells: [first, ...rest] }, r) => (
            <tr key={key} className={`border-t border-[#eceff3] first:border-t-0 ${r % 2 ? "bg-[#fbf6ee]" : ""}`}>
              <th scope="row" className={`px-4 py-3.5 text-sm font-semibold text-[#0f1f3a] ${align[0] ?? ""}`}>
                {first}
              </th>
              {rest.map((cell, i) => (
                <td key={i} className={`px-4 py-3.5 text-sm text-[#556987] ${align[i + 1] ?? ""}`}>
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

// Dashed cream callout with a leading icon (sections 01 and 04).
export function CreamNote({ icon, children }: { icon: ReactNode; children: ReactNode }) {
  return (
    <div className="flex items-start gap-3 rounded-xl border border-dashed border-[#e7d9bf] bg-[#fbf6ee] px-5 py-4 text-sm leading-6 text-[#556987]">
      <span className="mt-1 shrink-0 text-[#8a5a14]">{icon}</span>
      <p>{children}</p>
    </div>
  );
}
