import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { hanken, pnImg, sora } from "./shared";

export default function Hero() {
  return (
    <section
      aria-labelledby="pn-hero-heading"
      className={`${hanken} bg-[linear-gradient(180deg,#fffaf6_0%,#fafbfd_100%)]`}
    >
      <div className="mx-auto grid w-full max-w-[1440px] items-center gap-12 px-5 py-14 md:px-10 md:py-20 lg:grid-cols-[minmax(0,580px)_minmax(0,524px)] lg:justify-between lg:px-24 lg:py-14 xl:px-28">
        <div className="flex flex-col gap-6">
          <h1
            id="pn-hero-heading"
            className={`${sora} text-[clamp(36px,11vw,48px)] font-semibold leading-[1.1] tracking-[-0.02em] text-[#0f1f3a] sm:text-[56px] lg:text-[48px] min-[1400px]:text-[64px]`}
          >
            Privacy <span className="text-[#1f9a7f]">Notice</span>
          </h1>
          <p className="max-w-[580px] text-base leading-7 text-[#4b5b75] md:text-lg">
            Understand how Zoiko Surplus handles personal information.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              href="#topics"
              className="inline-flex min-h-12 items-center gap-2 rounded-full bg-[#926016] px-6 text-sm font-semibold text-white transition-colors hover:bg-[#a66e1b]"
            >
              See what the notice will cover
              <ArrowRight aria-hidden="true" className="size-4" strokeWidth={1.75} />
            </Link>
            <Link
              href="#faq"
              className="inline-flex min-h-12 items-center rounded-full border border-[#dfe5ed] bg-white px-6 text-sm font-semibold text-[#0f1f3a] transition-colors hover:border-[#0f1f3a]"
            >
              Privacy questions
            </Link>
          </div>
        </div>

        <div className="relative aspect-square w-full overflow-hidden rounded-[20px] bg-[#16263f]">
          <Image
            src={pnImg("hero-envelope.webp")}
            alt="Colleagues opening a document envelope at an office desk"
            fill
            priority
            sizes="(min-width: 1024px) 524px, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
