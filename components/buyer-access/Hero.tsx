import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SandTile, baImg, gates, hanken, sora } from "./shared";

export default function Hero() {
  return (
    <section
      aria-labelledby="ba-hero-heading"
      className={`${hanken} bg-[linear-gradient(180deg,#fffaf6_0%,#fafbfd_100%)]`}
    >
      <div className="mx-auto grid w-full max-w-[1440px] items-center gap-12 px-5 py-14 md:px-10 md:py-20 lg:px-24 lg:py-14 xl:grid-cols-[minmax(560px,600px)_minmax(0,596px)] xl:justify-between">
        <div className="flex flex-col gap-6">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8a5a14]">Resources / Buyer guidance</p>
          <h1
            id="ba-hero-heading"
            className={`${sora} text-[44px] font-semibold leading-[1.1] tracking-[-0.02em] text-[#0f1f3a] md:text-[64px]`}
          >
            Buyer <span className="text-[#1f9a7f]">Access</span>
          </h1>
          <p className="max-w-[600px] text-base leading-7 text-[#4b5b75] md:text-lg">
            Explore how access decisions work and what a prospective buyer can do next. Marketplace availability varies by
            market, category and seller policy.
          </p>
          {/* One line from sm up, as in the design; stacks only on phones where both cannot fit. */}
          <div className="flex flex-wrap gap-3 pt-2 sm:flex-nowrap [&>a]:whitespace-nowrap">
            <Link
              href="/become-a-verified-buyer"
              className="inline-flex min-h-12 items-center gap-2 rounded-full bg-[#926016] px-6 text-sm font-semibold text-white transition-colors hover:bg-[#a66e1b]"
            >
              Apply to Become a Buyer
              <ArrowRight aria-hidden="true" className="size-4" strokeWidth={1.75} />
            </Link>
            <Link
              href="/buyer-qualification"
              className="inline-flex min-h-12 items-center rounded-full border border-[#dfe5ed] bg-white px-6 text-sm font-semibold text-[#0f1f3a] transition-colors hover:border-[#0f1f3a]"
            >
              Read the Buyer Qualification Guide
            </Link>
          </div>
        </div>

        {/* Illustrative summary of the four checks. Never reflects a real account. */}
        <figure className="overflow-hidden rounded-[20px] border border-[#e6e9ef] bg-white shadow-[0_20px_40px_-24px_rgba(12,33,64,0.35)]">
          <div className="relative aspect-[595/190] w-full bg-[#16263f]">
            <Image
              src={baImg("hero-laptop.webp")}
              alt="Hands typing on a laptop at a desk"
              fill
              priority
              sizes="(min-width: 1280px) 596px, 100vw"
              className="object-cover"
            />
          </div>
          <ul className="flex flex-col gap-3 p-4">
            {gates.map((g) => (
              <li
                key={g.code}
                className="flex items-center gap-4 rounded-xl border border-[#e6e9ef] bg-[#fcfcfe] px-4 py-3"
              >
                <SandTile icon={g.icon} />
                <div className="flex min-w-0 flex-1 flex-col">
                  <span className="text-base font-semibold text-[#0f1f3a]">{g.title}</span>
                  <span className="text-sm text-[#556987]">{g.short}</span>
                </div>
                <span className="rounded-md bg-[#f5e3c3] px-2 py-1 text-xs font-semibold text-[#8a5a14]">{g.code}</span>
              </li>
            ))}
          </ul>
          <figcaption className="px-4 pb-4 text-xs text-[#4b5b75]">
            Illustration only. It shows no live status, inventory or participant.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
