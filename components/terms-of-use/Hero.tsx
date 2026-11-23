import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Globe } from "lucide-react";
import { hanken, sora, touImg } from "./shared";

// Full-width rounded photo banner; the photo already carries its navy overlay.
export default function Hero() {
  return (
    <section aria-labelledby="tou-hero-heading" className={`${hanken} bg-white px-5 pt-6 md:px-8 md:pt-8`}>
      <div className="relative mx-auto flex min-h-[480px] w-full max-w-[1376px] items-center overflow-hidden rounded-[24px] bg-[#16263f] md:min-h-[578px]">
        <Image
          src={touImg("hero-bg.webp")}
          alt=""
          fill
          priority
          sizes="(min-width: 1440px) 1376px, 100vw"
          className="object-cover"
        />
        <div className="relative z-10 flex flex-col gap-6 px-6 py-14 md:px-12 lg:px-[78px]">
          <h1
            id="tou-hero-heading"
            className={`${sora} text-[40px] font-semibold leading-[1.1] tracking-[-0.02em] text-white sm:text-[56px] lg:text-[64px]`}
          >
            Terms of <span className="text-[#1fae8c]">Use</span>
          </h1>
          <p className="max-w-[580px] text-base leading-7 text-[#e3e8f1] md:text-lg">
            Find and read the terms that apply to using Zoiko Surplus.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              href="#topics"
              className="inline-flex min-h-12 items-center gap-2 rounded-full bg-[#926016] px-6 text-sm font-semibold text-white transition-colors hover:bg-[#a66e1b]"
            >
              See what the terms will cover
              <ArrowRight aria-hidden="true" className="size-4" strokeWidth={1.75} />
            </Link>
            <Link
              href="#faq"
              className="inline-flex min-h-12 items-center rounded-full border border-white/60 px-6 text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
            >
              Questions about terms
            </Link>
          </div>
          <p className="flex items-start gap-2 pl-4 text-sm leading-6 text-[#e3e8f1]">
            <Globe aria-hidden="true" className="mt-1 size-4 shrink-0" strokeWidth={1.75} />
            Information only. It is not individual eligibility or permission to trade.
          </p>
        </div>
      </div>
    </section>
  );
}
