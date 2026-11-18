import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Truck } from "lucide-react";
import { CornerIcon, ImageTag, fpImg, hanken, sora } from "./shared";

export default function Hero() {
  return (
    <section
      aria-labelledby="fp-hero-heading"
      className={`${hanken} bg-[linear-gradient(180deg,#fffaf6_0%,#fafbfd_100%)]`}
    >
      <div className="mx-auto grid w-full max-w-[1440px] items-center gap-12 px-5 py-14 md:px-10 md:py-20 lg:grid-cols-[minmax(0,580px)_minmax(0,524px)] lg:justify-between lg:px-24 lg:py-28 xl:px-28">
        <div className="flex flex-col gap-6">
          <h1
            id="fp-hero-heading"
            className={`${sora} text-[32px] font-semibold leading-[1.1] tracking-[-0.02em] text-[#0f1f3a] sm:text-[48px] md:text-[56px] lg:text-[40px] xl:text-[48px] min-[1400px]:text-[56px] [&>span]:block [&>span]:whitespace-nowrap`}
          >
            {/* Always four lines, as in the design; the size steps down where the column narrows. */}
            <span>Understand how</span>
            <span>partners may</span>
            <span>
              support <span className="text-[#1f9a7f]">governed</span>
            </span>
            <span className="text-[#1f9a7f]">surplus pathways.</span>
          </h1>
          <p className="max-w-[580px] text-base leading-7 text-[#4b5b75] md:text-lg">
            Zoiko Surplus is designed to help enterprises coordinate permitted surplus pathways with appropriately
            qualified third-party service organizations. Roles depend on local availability, relevant goods, approved
            agreements and a seller-authorized mandate.
          </p>
          <div className="flex flex-wrap gap-3 pt-2 [&>a]:whitespace-nowrap">
            <Link
              href="/solution-surplus-network"
              className="inline-flex min-h-12 items-center gap-2 rounded-full bg-[#926016] px-6 text-sm font-semibold text-white transition-colors hover:bg-[#a66e1b]"
            >
              Explore Surplus Network
              <ArrowRight aria-hidden="true" className="size-4" strokeWidth={1.75} />
            </Link>
            <Link
              href="/join-partner-network"
              className="inline-flex min-h-12 items-center rounded-full border border-[#dfe5ed] bg-white px-6 text-sm font-semibold text-[#0f1f3a] transition-colors hover:border-[#0f1f3a]"
            >
              Join Partner Network
            </Link>
          </div>
        </div>

        <div className="grid gap-3">
          <div className="relative aspect-[524/252] w-full overflow-hidden rounded-[20px] bg-[#16263f]">
            <Image
              src={fpImg("hero-handshake.webp")}
              alt="Warehouse worker in a hard hat shaking hands with a business partner"
              fill
              priority
              sizes="(min-width: 1024px) 524px, 100vw"
              className="object-cover"
            />
            <CornerIcon icon={Truck} />
          </div>
          <div className="relative aspect-[524/256] w-full overflow-hidden rounded-[20px] bg-[#16263f]">
            <Image
              src={fpImg("hero-team.webp")}
              alt="Two colleagues high-fiving in an office"
              fill
              priority
              sizes="(min-width: 1024px) 524px, 100vw"
              className="object-cover"
            />
            <span className="absolute bottom-3 left-3">
              <ImageTag>Third-party execution</ImageTag>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
