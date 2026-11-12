import Image from "next/image";
import { Clock, Link2, Quote, Scale, User, type LucideIcon } from "lucide-react";
import { Section, SectionHeading, SandTile, PillLinks, hanken, img } from "./shared";

const review: { icon: LucideIcon; label: string; value: string }[] = [
  { icon: User, label: "Content owner", value: "Named at approval" },
  { icon: Scale, label: "Legal and privacy review", value: "Required before publish" },
  { icon: Clock, label: "Reviewed · Review by", value: "Dates set at approval" },
  { icon: Link2, label: "Source references", value: "Linked in the article" },
];

export default function ArticlePattern() {
  return (
    <Section labelledBy="kc-article-heading">
      <SectionHeading
        id="kc-article-heading"
        num="09"
        label="Article pattern"
        title="Every guide follows the same shape."
        lead="A short answer first, then detail, sources and review details."
        titleClassName="max-w-none"
      />
      <div className={`${hanken} grid gap-8 md:grid-cols-2 lg:gap-14`}>
        {/* Illustrative template — not a real article. */}
        <figure
          aria-label="Example article template"
          className="flex flex-col gap-6 overflow-hidden rounded-2xl border border-[#e6e9ef] bg-white p-6 shadow-[0_10px_30px_-20px_rgba(12,33,64,0.3)] md:p-7"
        >
          <span className="flex items-center gap-2 rounded-full border border-[#e6e9ef] px-3 py-2 text-xs font-medium text-[#0f1f3a]">
            <span aria-hidden="true" className="size-1.5 rounded-full bg-[#3b5998]" />
            Template · Guide
          </span>
          <p className="text-2xl font-semibold text-[#0f1f3a]">Surplus Recovery Guide</p>
          <div className="flex flex-col gap-1.5 rounded-2xl bg-[#e3f4ee] px-5 py-5">
            <span className="flex items-center gap-2.5 text-sm font-semibold uppercase tracking-[0.1em] text-[#16a37a]">
              <Quote aria-hidden="true" className="size-5" strokeWidth={1.75} />
              Short answer
            </span>
            <p className="text-base leading-7 text-[#0f1f3a]">
              One or two factual sentences that answer the question before anything else.
            </p>
          </div>
          <div aria-hidden="true" className="flex flex-col gap-3">
            <span className="h-2.5 w-full rounded-full bg-[#e6ebf2]" />
            <span className="h-2.5 w-[88%] rounded-full bg-[#e6ebf2]" />
            <span className="h-2.5 w-[96%] rounded-full bg-[#e6ebf2]" />
            <span className="h-2.5 w-[66%] rounded-full bg-[#e6ebf2]" />
          </div>
          <PillLinks
            label="Related:"
            links={[
              { label: "Seller Readiness Checklist", href: "#" },
              { label: "How It Works", href: "/how-it-works" },
              { label: "Trust & Safety", href: "/trust-and-safety" },
            ]}
          />
        </figure>

        <div className="flex flex-col overflow-hidden rounded-2xl border border-[#e6e9ef] bg-white shadow-[0_10px_30px_-20px_rgba(12,33,64,0.3)]">
          <div className="relative aspect-[564/233] w-full bg-[#16263f]">
            <Image
              src={img("article-pattern.webp")}
              alt="Retail staff and a customer among clothing racks"
              fill
              sizes="(min-width: 768px) 564px, 100vw"
              className="object-cover"
            />
          </div>
          <dl className="flex flex-col gap-6 p-6">
            {review.map((r) => (
              <div key={r.label} className="flex items-center gap-4">
                <SandTile icon={r.icon} size="sm" />
                <div className="flex flex-col gap-0.5">
                  <dt className="text-xs font-medium uppercase tracking-[0.14em] text-[#556987]">{r.label}</dt>
                  <dd className="text-base text-[#0f1f3a]">{r.value}</dd>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </Section>
  );
}
