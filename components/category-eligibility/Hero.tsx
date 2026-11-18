import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ImageTag, ceImg, hanken, sora } from "./shared";

// Two designs: below lg the copy sits on a dark photo banner; from lg it sits beside a three-photo collage.
export default function Hero() {
  return (
    <section
      aria-labelledby="ce-hero-heading"
      className={`${hanken} bg-white px-4 pt-4 lg:bg-[linear-gradient(180deg,#fffaf6_0%,#fafbfd_100%)] lg:p-0`}
    >
      <div className="relative mx-auto grid w-full max-w-[1440px] items-center gap-12 overflow-hidden rounded-[28px] bg-[#1c2a40] px-6 py-14 md:px-12 md:py-20 lg:grid-cols-[minmax(0,610px)_minmax(0,540px)] lg:justify-between lg:overflow-visible lg:rounded-none lg:bg-transparent lg:px-24 lg:py-24 xl:px-28">
        {/* Banner photo for the small-screen design; it already carries its dark overlay. */}
        <Image
          src={ceImg("hero-banner.webp")}
          alt=""
          fill
          priority
          sizes="(min-width: 1024px) 1px, 100vw"
          className="object-cover lg:hidden"
        />

        <div className="relative flex flex-col gap-6">
          <h1
            id="ce-hero-heading"
            className={`${sora} text-[34px] font-semibold leading-[1.1] tracking-[-0.02em] text-white sm:text-[48px] md:text-[56px] lg:text-[44px] lg:text-[#0f1f3a] xl:text-[56px] min-[1400px]:text-[64px] lg:[&>span]:block lg:[&>span]:whitespace-nowrap`}
          >
            {/* Four fixed lines from lg, as in the design; free wrapping on the small-screen banner. */}
            <span>Understand which </span>
            <span>goods may be </span>
            <span>considered, and </span>
            <span className="text-[#1f9a7f]">what needs review.</span>
          </h1>
          <p className="max-w-[610px] text-base leading-7 text-[#e3e8f1] md:text-lg lg:text-[#4b5b75]">
            Browse five educational surplus categories and the separate ownership, condition, safety, brand, market
            and permission checks involved in a potential enterprise disposition route.
          </p>
          <div className="flex flex-wrap gap-3 pt-2 [&>a]:whitespace-nowrap">
            <Link
              href="#families"
              className="inline-flex min-h-12 items-center gap-2 rounded-full bg-[#926016] px-6 text-sm font-semibold text-white transition-colors hover:bg-[#a66e1b]"
            >
              Explore Category Overviews
              <ArrowRight aria-hidden="true" className="size-4" strokeWidth={1.75} />
            </Link>
            <Link
              href="/request-enterprise-demo"
              className="inline-flex min-h-12 items-center rounded-full border border-white/60 px-6 text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white/10 lg:border-[#dfe5ed] lg:bg-white lg:text-[#0f1f3a] lg:hover:border-[#0f1f3a] lg:hover:bg-white"
            >
              Request Enterprise Demo
            </Link>
          </div>
        </div>

        <div className="hidden grid-cols-[317fr_212fr] grid-rows-2 gap-3 lg:grid">
          <div className="relative row-span-2 aspect-[317/540] w-full overflow-hidden rounded-[20px] bg-[#16263f]">
            <Image
              src={ceImg("hero-store.webp")}
              alt="Clothing rails in a bright retail store"
              fill
              priority
              sizes="317px"
              className="object-cover"
            />
            <span className="absolute bottom-3 left-3">
              <ImageTag>Five educational categories</ImageTag>
            </span>
          </div>
          <div className="relative w-full overflow-hidden rounded-[20px] bg-[#16263f]">
            <Image
              src={ceImg("hero-folded.webp")}
              alt="Folded trousers stacked on a store table"
              fill
              priority
              sizes="212px"
              className="object-cover"
            />
          </div>
          <div className="relative w-full overflow-hidden rounded-[20px] bg-[#16263f]">
            <Image
              src={ceImg("hero-rail.webp")}
              alt="Jumpers hanging on a clothing rail"
              fill
              priority
              sizes="212px"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
