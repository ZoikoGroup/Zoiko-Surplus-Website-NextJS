import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { hanken, racImg, sora } from "./shared";

export default function Hero() {
  return (
    <section
      aria-labelledby="rac-hero-heading"
      className={`${hanken} bg-[linear-gradient(180deg,#fffaf6_0%,#fafbfd_100%)]`}
    >
      <div className="mx-auto grid w-full max-w-[1440px] items-center gap-12 px-5 py-14 md:px-10 md:py-20 lg:grid-cols-[minmax(0,580px)_minmax(0,524px)] lg:justify-between lg:px-24 lg:py-24 xl:px-28">
        <div className="flex flex-col gap-6">
          <h1
            id="rac-hero-heading"
            className={`${sora} whitespace-nowrap text-[clamp(30px,9vw,40px)] font-semibold leading-[1.1] tracking-[-0.02em] text-[#0f1f3a] sm:text-[56px] lg:text-[40px] xl:text-[48px] min-[1400px]:text-[56px]`}
          >
            Report a <span className="text-[#1f9a7f]">Concern</span>
          </h1>
          <p className="max-w-[580px] text-base leading-7 text-[#4b5b75] md:text-lg">
            Find the appropriate way to raise a concern.
          </p>
          <div className="flex flex-wrap gap-3 pt-2 [&>a]:whitespace-nowrap">
            <Link
              href="#concern-type"
              className="inline-flex min-h-12 items-center gap-2 rounded-full bg-[#926016] px-6 text-sm font-semibold text-white transition-colors hover:bg-[#a66e1b]"
            >
              Choose a concern type
              <ArrowRight aria-hidden="true" className="size-4" strokeWidth={1.75} />
            </Link>
            <Link
              href="#form-preview"
              className="inline-flex min-h-12 items-center rounded-full border border-[#dfe5ed] bg-white px-6 text-sm font-semibold text-[#0f1f3a] transition-colors hover:border-[#0f1f3a]"
            >
              See the form preview
            </Link>
          </div>
        </div>

        <div className="relative aspect-square w-full overflow-hidden rounded-[20px] bg-[#16263f]">
          <Image
            src={racImg("hero-meeting.webp")}
            alt="Colleagues in a meeting around a conference table with laptops"
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
