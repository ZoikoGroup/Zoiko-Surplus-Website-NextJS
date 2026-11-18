import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { hanken, soImg, sora } from "./shared";

export default function Hero() {
  return (
    <section
      aria-labelledby="so-hero-heading"
      className={`${hanken} bg-[linear-gradient(180deg,#ffffff_0%,#fbf7f2_100%)]`}
    >
      <div className="mx-auto grid w-full max-w-[1440px] items-center gap-12 px-5 py-14 md:px-10 md:py-20 lg:grid-cols-[minmax(0,660px)_minmax(0,475px)] lg:justify-between lg:px-24 lg:py-24 xl:px-28">
        <div className="flex flex-col gap-6">
          <h1
            id="so-hero-heading"
            className={`${sora} text-[30px] font-semibold leading-[1.1] tracking-[-0.02em] text-[#0f1f3a] min-[400px]:text-[36px] sm:text-[56px] lg:text-[48px] xl:text-[64px] [&>span]:block [&>span]:whitespace-nowrap`}
          >
            {/* Always two lines, as in the design; the size steps down where the column narrows. */}
            <span>A clearer path for</span>
            <span className="text-[#1f9a7f]">eligible surplus.</span>
          </h1>
          <p className="max-w-[660px] text-base leading-7 text-[#4b5b75] md:text-lg">
            Explore how organizations can prepare eligible excess, returned or imperfect goods, engage qualified demand
            and evaluate permitted disposition options while retaining seller-controlled commercial decisions.
          </p>
          <div className="flex flex-wrap gap-3 pt-2 [&>a]:whitespace-nowrap">
            <Link
              href="/buyer-qualification"
              className="inline-flex min-h-12 items-center gap-2 rounded-full bg-[#926016] px-6 text-sm font-semibold text-white transition-colors hover:bg-[#a66e1b]"
            >
              Explore Buyer Qualification
              <ArrowRight aria-hidden="true" className="size-4" strokeWidth={1.75} />
            </Link>
            <Link
              href="/become-a-verified-buyer"
              className="inline-flex min-h-12 items-center rounded-full border border-[#dfe5ed] bg-white px-6 text-sm font-semibold text-[#0f1f3a] transition-colors hover:border-[#0f1f3a]"
            >
              Apply to Become a Buyer
            </Link>
          </div>
        </div>

        <div className="relative aspect-[475/360] w-full overflow-hidden rounded-[20px] bg-[#16263f] shadow-[0_24px_48px_-24px_rgba(12,33,64,0.45)]">
          <Image
            src={soImg("hero-meeting.webp")}
            alt="Two colleagues reviewing a tablet together at an office desk"
            fill
            priority
            sizes="(min-width: 1024px) 475px, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
