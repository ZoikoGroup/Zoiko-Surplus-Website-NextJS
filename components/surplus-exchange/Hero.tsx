import Image from "next/image";
import Link from "next/link";
import { ArrowRight, KeyRound, Lock } from "lucide-react";
import { CornerIcon, ImageTag, hanken, sora, exImg } from "./shared";

export default function Hero() {
  return (
    <section
      aria-labelledby="ex-hero-heading"
      className={`${hanken} bg-[linear-gradient(180deg,#fffaf6_0%,#fafbfd_100%)]`}
    >
      <div className="mx-auto grid w-full max-w-[1440px] items-center gap-12 px-5 py-14 md:px-10 md:py-20 lg:grid-cols-[minmax(0,640px)_minmax(0,540px)] lg:justify-between lg:px-24">
        <div className="flex flex-col gap-6">
          <h1
            id="ex-hero-heading"
            className={`${sora} text-[44px] font-semibold leading-[1.1] tracking-[-0.02em] text-[#0f1f3a] md:text-[64px]`}
          >
            Reach qualified demand. <span className="text-[#1f9a7f]">Keep control of access.</span>
          </h1>
          <p className="max-w-[640px] text-base leading-7 text-[#4b5b75] md:text-lg">
            Surplus Exchange is the governed participation layer of Zoiko Surplus. It is designed to connect eligible
            business buyers with seller-authorized surplus opportunities in activated markets.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              href="#"
              className="inline-flex min-h-12 items-center gap-2 rounded-full bg-[#926016] px-6 text-sm font-semibold text-white transition-colors hover:bg-[#a66e1b]"
            >
              Request Enterprise Demo
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

        {/* Tall photo on the left, two stacked photos on the right. */}
        <div className="grid h-[420px] grid-cols-[1.5fr_1fr] gap-3 md:h-[540px]">
          <div className="relative overflow-hidden rounded-[20px] bg-[#16263f]">
            <Image
              src={exImg("hero-main.webp")}
              alt="Business people meeting among palletised stock in a warehouse"
              fill
              priority
              sizes="(min-width: 1024px) 317px, 60vw"
              className="object-cover"
            />
            <span className="absolute bottom-3 left-3">
              <ImageTag>Qualified demand</ImageTag>
            </span>
          </div>
          <div className="grid grid-rows-2 gap-3">
            <div className="relative overflow-hidden rounded-[20px] bg-[#16263f]">
              <Image
                src={exImg("hero-sellers.webp")}
                alt="Two colleagues reviewing stock on a laptop in a warehouse"
                fill
                priority
                sizes="(min-width: 1024px) 212px, 40vw"
                className="object-cover"
              />
              <CornerIcon icon={Lock} />
            </div>
            <div className="relative overflow-hidden rounded-[20px] bg-[#16263f]">
              <Image
                src={exImg("hero-port.webp")}
                alt="Aerial view of shipping containers at a port"
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
