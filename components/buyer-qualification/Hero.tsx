import Image from "next/image";
import Link from "next/link";
import { ArrowRight, FileCheck, KeyRound } from "lucide-react";
import { CornerIcon, ImageTag, hanken, sora, img } from "./shared";

export default function Hero() {
  return (
    <section
      aria-labelledby="bq-hero-heading"
      className={`${hanken} bg-[linear-gradient(180deg,#fffaf6_0%,#fafbfd_100%)]`}
    >
      <div className="mx-auto grid w-full max-w-[1440px] items-center gap-12 px-5 py-14 md:px-10 md:py-20 lg:grid-cols-[minmax(0,640px)_minmax(0,540px)] lg:justify-between lg:px-24 lg:py-28">
        <div className="flex flex-col gap-6">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8a5a14]">
            Resources / Buyer guidance
          </p>
          <h1
            id="bq-hero-heading"
            className={`${sora} text-[44px] font-semibold leading-[1.1] tracking-[-0.02em] text-[#0f1f3a] md:text-[64px]`}
          >
            Buyer Qualification
            <br />
            <span className="text-[#1f9a7f]">Guide</span>
          </h1>
          <p className="max-w-[640px] text-base leading-7 text-[#4b5b75] md:text-lg">
            Learn how organizational buyer qualification may work on Zoiko Surplus, what information may be needed, and
            why access to a private market requires separate authorization.
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
              href="/how-it-works"
              className="inline-flex min-h-12 items-center rounded-full border border-[#dfe5ed] bg-white px-6 text-sm font-semibold text-[#0f1f3a] transition-colors hover:border-[#0f1f3a]"
            >
              How It Works
            </Link>
          </div>
        </div>

        {/* Tall photo on the left, two stacked photos on the right. */}
        <div className="grid h-[420px] grid-cols-[1.5fr_1fr] gap-3 md:h-[540px]">
          <div className="relative overflow-hidden rounded-[20px] bg-[#16263f]">
            <Image
              src={img("hero-main.webp")}
              alt="Two colleagues working together with parcels at a desk"
              fill
              priority
              sizes="(min-width: 1024px) 317px, 60vw"
              className="object-cover"
            />
            <span className="absolute bottom-3 left-3">
              <ImageTag>Business buyers</ImageTag>
            </span>
          </div>
          <div className="grid grid-rows-2 gap-3">
            <div className="relative overflow-hidden rounded-[20px] bg-[#16263f]">
              <Image
                src={img("hero-review.webp")}
                alt="Worker checking goods against a clipboard"
                fill
                priority
                sizes="(min-width: 1024px) 212px, 40vw"
                className="object-cover"
              />
              <CornerIcon icon={FileCheck} />
            </div>
            <div className="relative overflow-hidden rounded-[20px] bg-[#16263f]">
              <Image
                src={img("hero-access.webp")}
                alt="Hands typing on a laptop"
                fill
                sizes="(min-width: 1024px) 212px, 40vw"
                className="object-cover"
              />
              <CornerIcon icon={KeyRound} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
