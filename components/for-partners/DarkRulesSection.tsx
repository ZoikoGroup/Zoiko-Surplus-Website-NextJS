import Image from "next/image";
import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { Container, SectionHeading, hanken, sora } from "./shared";

export type Rule = { icon: LucideIcon; title: string; body: string };

// Navy band: unnumbered heading, five mint-icon rule cards, then a wide photo.
// Used by For Partners, Category Eligibility and the Seller Readiness Guide.
export default function DarkRulesSection({
  id,
  label,
  title,
  lead,
  rules,
  image,
  alt,
}: {
  id: string;
  label: string;
  title: ReactNode;
  lead: ReactNode;
  rules: Rule[];
  image: string;
  alt: string;
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={`${hanken} my-8 scroll-mt-28 bg-[#0d2040] py-16 md:my-12 md:py-24`}
    >
      <Container className="flex flex-col gap-10 md:gap-14">
        <SectionHeading id={`${id}-heading`} tone="dark" label={label} title={title} lead={lead} />
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {rules.map(({ icon: Icon, title, body }) => (
            <li key={title} className="flex flex-col gap-2 rounded-2xl bg-[#132a4f] p-5">
              <span className="flex size-10 items-center justify-center rounded-lg bg-[#134a46] text-[#5fd0ad]">
                <Icon aria-hidden="true" className="size-[18px]" strokeWidth={1.75} />
              </span>
              <h3 className={`${sora} pt-2 text-lg font-semibold text-white`}>{title}</h3>
              <p className="text-sm leading-6 text-[#c3cde0]">{body}</p>
            </li>
          ))}
        </ul>
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[20px] bg-[#16263f] md:aspect-[1248/416]">
          <Image src={image} alt={alt} fill sizes="(min-width: 1440px) 1248px, 100vw" className="object-cover" />
        </div>
      </Container>
    </section>
  );
}
