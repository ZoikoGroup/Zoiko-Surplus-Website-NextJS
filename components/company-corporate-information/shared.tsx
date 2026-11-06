import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, type LucideIcon } from "lucide-react";
import { SectionHeading, hanken } from "@/components/categories/shared";

// Eyebrow / heading / note blocks are shared with the category pages.
export { hanken, sora, Eyebrow, SectionHeading, Note } from "@/components/categories/shared";

export const img = (name: string) => `/images/company-corporate-information/${name}`;

// Page-width wrapper: 1440px max with the design's 96px desktop gutter.
export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1440px] px-5 md:px-10 lg:px-24 ${className}`}>{children}</div>;
}

// Standard light section with vertical rhythm.
export function Section({
  labelledBy,
  children,
  className = "",
  innerClassName = "flex flex-col gap-10 md:gap-14",
}: {
  labelledBy: string;
  children: ReactNode;
  className?: string;
  innerClassName?: string;
}) {
  return (
    <section aria-labelledby={labelledBy} className={`py-8 md:py-12 ${className}`}>
      <Container className={innerClassName}>{children}</Container>
    </section>
  );
}

// Small rounded square holding an icon. "mint" on light cards, "navy" for link/resource cards.
export function IconTile({ icon: Icon, tone = "mint" }: { icon: LucideIcon; tone?: "mint" | "navy" }) {
  const styles = tone === "navy" ? "bg-[#0f1f3a] text-white" : "bg-[#e3f4ee] text-[#0b7a5c]";
  return (
    <span className={`flex size-11 shrink-0 items-center justify-center rounded-xl ${styles}`}>
      <Icon aria-hidden="true" className="size-5" strokeWidth={1.75} />
    </span>
  );
}

export type CardItem = { icon: LucideIcon; title: string; body: string; link?: { label: string; href: string } };

// Bordered white card: icon, title, body and an optional "Label →" link.
export function InfoCard({ item, tone = "mint" }: { item: CardItem; tone?: "mint" | "navy" }) {
  const { icon, title, body, link } = item;
  return (
    <li className={`${hanken} flex flex-col gap-2 rounded-2xl border border-[#e6e9ef] bg-white p-6`}>
      <IconTile icon={icon} tone={tone} />
      <h3 className="pt-1.5 text-lg font-semibold leading-6 text-[#0f1f3a]">{title}</h3>
      <p className="max-w-[300px] text-base leading-6 text-[#556987]">{body}</p>
      {link && (
        <Link
          href={link.href}
          className="mt-auto inline-flex w-fit items-center gap-2 pt-2 text-base font-semibold text-[#7a4d0f] hover:underline"
        >
          {link.label}
          <ArrowRight aria-hidden="true" className="size-4" strokeWidth={1.75} />
        </Link>
      )}
    </li>
  );
}

export function CardGrid({ items, cols, tone }: { items: CardItem[]; cols: 3 | 4; tone?: "mint" | "navy" }) {
  const grid = cols === 4 ? "sm:grid-cols-2 lg:grid-cols-4" : "md:grid-cols-3";
  return (
    <ul className={`grid gap-4 ${grid}`}>
      {items.map((item) => (
        <InfoCard key={item.title} item={item} tone={tone} />
      ))}
    </ul>
  );
}

export type Point = { title: string; body: string };

// Image on the left, numbered heading + tick list on the right (sections 02, 08, 10, 15).
export function SplitFeature({
  id,
  num,
  label,
  title,
  lead,
  image,
  alt,
  points,
  children,
}: {
  id: string;
  num: string;
  label: string;
  title: ReactNode;
  lead: ReactNode;
  image: string;
  alt: string;
  points: Point[];
  children?: ReactNode;
}) {
  return (
    <Section labelledBy={id} innerClassName="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
      <div className="relative aspect-[596/447] w-full overflow-hidden rounded-[20px] bg-[#16263f]">
        <Image src={image} alt={alt} fill sizes="(min-width: 1024px) 596px, 100vw" className="object-cover" />
      </div>
      <div className="flex flex-col gap-9">
        <SectionHeading id={id} num={num} label={label} title={title} lead={lead} titleClassName="max-w-[606px]" />
        <ul className={`${hanken} flex flex-col gap-6`}>
          {points.map((p) => (
            <li key={p.title} className="flex items-start gap-3">
              <Check aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-[#16a37a]" strokeWidth={2} />
              <div className="flex flex-col gap-0.5">
                <h3 className="text-base font-semibold leading-6 text-[#0f1f3a]">{p.title}</h3>
                <p className="text-base leading-6 text-[#556987]">{p.body}</p>
              </div>
            </li>
          ))}
        </ul>
        {children}
      </div>
    </Section>
  );
}
