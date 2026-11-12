import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { hanken, sora, lcImg, steps } from "./shared";

export default function Hero() {
  return (
    <section
      aria-labelledby="lc-hero-heading"
      className={`${hanken} bg-[linear-gradient(180deg,#fffaf6_0%,#fafbfd_100%)]`}
    >
      <div className="mx-auto grid w-full max-w-[1440px] items-center gap-12 px-5 py-14 md:px-10 md:py-20 lg:grid-cols-[minmax(0,600px)_minmax(0,596px)] lg:justify-between lg:px-24 lg:py-28">
        <div className="flex flex-col gap-6">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8a5a14]">Resources / Buyer guidance</p>
          <h1
            id="lc-hero-heading"
            className={`${sora} text-[44px] font-semibold leading-[1.1] tracking-[-0.02em] text-[#0f1f3a] md:text-[72px]`}
          >
            Logistics
            <br />
            <span className="text-[#1f9a7f]">Coordination</span>
          </h1>
          <p className="text-base leading-7 text-[#4b5b75] md:text-lg">
            Where a logistics pathway is enabled, participating parties follow agreed conditions for preparation,
            custody handoffs, exceptions and proof of delivery. Zoiko does not represent that it owns a carrier fleet
            or warehouses or takes custody by default.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              href="/become-a-verified-buyer"
              className="inline-flex min-h-12 items-center gap-2 rounded-full bg-[#926016] px-6 text-sm font-semibold text-white transition-colors hover:bg-[#a66e1b]"
            >
              Apply to Become a Buyer
              <ArrowRight aria-hidden="true" className="size-4" strokeWidth={1.75} />
            </Link>
            <Link
              href="#"
              className="inline-flex min-h-12 items-center rounded-full border border-[#dfe5ed] bg-white px-6 text-sm font-semibold text-[#0f1f3a] transition-colors hover:border-[#0f1f3a]"
            >
              Request Enterprise Demo
            </Link>
          </div>
        </div>

        {/* Illustrative card — not live tracking. */}
        <aside
          aria-label="The six illustrative handoff steps"
          className="overflow-hidden rounded-[20px] border border-[#e6e9ef] bg-white shadow-[0_16px_40px_-20px_rgba(12,33,64,0.35)]"
        >
          <div className="relative aspect-[595/170] w-full bg-[#16263f]">
            <Image
              src={lcImg("hero-card.webp")}
              alt="Person labelling a parcel at a packing table"
              fill
              priority
              sizes="(min-width: 1024px) 596px, 100vw"
              className="object-cover"
            />
          </div>
          <ol className="grid grid-cols-1 gap-2.5 p-4 sm:grid-cols-2">
            {steps.map(({ icon: Icon, name }, i) => (
              <li key={name} className="flex items-center gap-3 rounded-xl border border-[#e6e9ef] bg-[#fafbfd] p-3">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-[#f5e3c3] text-[#8a5a14]">
                  <Icon aria-hidden="true" className="size-5" strokeWidth={1.75} />
                </span>
                <span className="flex flex-col">
                  <span className="text-base font-semibold text-[#0f1f3a]">{name}</span>
                  <span className="text-xs text-[#556987]">Step {i + 1}</span>
                </span>
              </li>
            ))}
          </ol>
          <p className="px-4 pb-5 text-xs leading-5 text-[#556987]">
            Illustration only. It does not show live tracking, routes, prices or partners.
          </p>
        </aside>
      </div>
    </section>
  );
}
