import Image from "next/image";
import { ShieldAlert } from "lucide-react";
import { SectionHeading, Section, hanken, img } from "./shared";

export default function RegulatedGoods() {
  return (
    <Section labelledBy="regulated-heading">
      <SectionHeading
        id="regulated-heading"
        num="05"
        label="Food & regulated goods"
        title="Some categories are gated separately."
        lead="Food and other regulated goods carry obligations beyond standard qualification."
        titleClassName="max-w-[780px]"
      />
      {/* The callout overlaps the photo on large screens and drops below it on smaller ones. */}
      <div className="relative flex flex-col gap-4 lg:block">
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[20px] shadow-[0_10px_30px_-14px_rgba(12,33,64,0.22)] sm:aspect-[1248/426]">
          <Image
            src={img("regulated-goods.webp")}
            alt="Supermarket shelves stocked with fresh peppers, lettuce and herbs"
            fill
            sizes="(min-width: 1440px) 1248px, 100vw"
            className="object-cover"
          />
        </div>
        <div
          className={`${hanken} flex items-start gap-3.5 rounded-xl border border-[#e8dcc6] bg-white p-6 lg:absolute lg:right-7 lg:bottom-6 lg:max-w-[620px]`}
        >
          <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-[#f5e7d6]">
            <ShieldAlert aria-hidden="true" className="size-5 text-[#7a4d0f]" strokeWidth={1.75} />
          </span>
          <div className="flex flex-col gap-1.5">
            <h3 className="text-base font-semibold text-[#0f1f3a]">Independent review before activity</h3>
            <p className="text-sm leading-6 text-[#556987]">
              Food &amp; Grocery and other regulated categories require separate safety, traceability, shelf-life and
              local-law approval before any activity — gated independently of every other category. Recalled, hazardous
              or restricted goods are blocked or routed to specialist, licensed handling.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
