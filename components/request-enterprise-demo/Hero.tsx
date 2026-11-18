import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ImageTag, WarningStrip, hanken, redImg, sora } from "./shared";

export default function Hero() {
  return (
    <section
      aria-labelledby="red-hero-heading"
      className={`${hanken} bg-[linear-gradient(180deg,#fffaf6_0%,#fafbfd_100%)]`}
    >
      <div className="mx-auto grid w-full max-w-[1440px] items-center gap-12 px-5 py-14 md:px-10 md:py-20 lg:grid-cols-[minmax(0,660px)_minmax(0,540px)] lg:justify-between lg:px-24 lg:py-16 xl:px-28">
        <div className="flex flex-col gap-6">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#8a5a14]">For enterprise sellers</p>
          <h1
            id="red-hero-heading"
            className={`${sora} -mt-2 text-[34px] font-semibold leading-[1.1] tracking-[-0.02em] text-[#0f1f3a] min-[400px]:text-[40px] sm:text-[56px] lg:text-[52px] xl:text-[64px] [&>span]:block [&>span]:whitespace-nowrap`}
          >
            {/* Always two lines, as in the design; the size steps down where the column narrows. */}
            <span>Request an</span>
            <span className="text-[#1f9a7f]">Enterprise Demo</span>
          </h1>
          <div className="flex max-w-[660px] flex-col gap-1">
            <p className="text-base leading-7 text-[#4b5b75] md:text-lg">
              Explore a governed way to qualify surplus inventory, reach eligible business demand, and evaluate
              disposition pathways.
            </p>
            <p className="text-base leading-7 text-[#4b5b75]">
              Tell us about your organization and the business challenge. Our team can review whether a conversation is
              appropriate for your market and category.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 pt-2 [&>a]:whitespace-nowrap">
            <Link
              href="#inquiry"
              className="inline-flex min-h-12 items-center gap-2 rounded-full bg-[#926016] px-6 text-sm font-semibold text-white transition-colors hover:bg-[#a66e1b]"
            >
              Request Enterprise Demo
              <ArrowRight aria-hidden="true" className="size-4" strokeWidth={1.75} />
            </Link>
            <Link
              href="/enterprise-overview"
              className="inline-flex min-h-12 items-center rounded-full border border-[#dfe5ed] bg-white px-6 text-sm font-semibold text-[#0f1f3a] transition-colors hover:border-[#0f1f3a]"
            >
              Explore Surplus Enterprise
            </Link>
          </div>
          <div className="w-fit">
            <WarningStrip>
              Platform participation, market and category availability are subject to review and activation.
            </WarningStrip>
          </div>
        </div>

        <figure className="flex flex-col gap-3">
          <div className="relative aspect-square w-full overflow-hidden rounded-[20px] bg-[#16263f]">
            <Image
              src={redImg("hero-showroom.webp")}
              alt="Presenter beside a touchscreen display showing a clothing catalogue"
              fill
              priority
              sizes="(min-width: 1024px) 540px, 100vw"
              className="object-cover"
            />
            <span className="absolute bottom-3 left-3">
              <ImageTag>A conversation, not a commitment</ImageTag>
            </span>
          </div>
          <figcaption className="text-sm text-[#556987]">
            Illustrative imagery only. No client, pricing or inventory is shown.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
