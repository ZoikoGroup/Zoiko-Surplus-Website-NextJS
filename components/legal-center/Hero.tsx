import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Truck } from "lucide-react";
import { CornerIcon, ImageTag, hanken, lcImg, sora } from "./shared";

export default function Hero() {
  return (
    <section
      aria-labelledby="lc-hero-heading"
      className={`${hanken} bg-[linear-gradient(180deg,#fffaf6_0%,#fafbfd_100%)]`}
    >
      <div className="mx-auto grid w-full max-w-[1440px] items-center gap-12 px-5 py-14 md:px-10 md:py-20 lg:grid-cols-[minmax(0,580px)_minmax(0,524px)] lg:justify-between lg:px-24 lg:py-12 xl:px-28">
        <div className="flex flex-col gap-6">
          <h1
            id="lc-hero-heading"
            className={`${sora} text-[clamp(36px,11vw,48px)] font-semibold leading-[1.1] tracking-[-0.02em] text-[#0f1f3a] sm:text-[56px] lg:text-[48px] min-[1400px]:text-[64px]`}
          >
            Legal <span className="text-[#1f9a7f]">Center</span>
          </h1>
          <p className="max-w-[580px] text-base leading-7 text-[#4b5b75] md:text-lg">
            Find legal documents and policy information for Zoiko Surplus.
          </p>
          <div className="flex flex-wrap gap-3 pt-2 [&>a]:whitespace-nowrap">
            <Link
              href="#documents"
              className="inline-flex min-h-12 items-center gap-2 rounded-full bg-[#926016] px-6 text-sm font-semibold text-white transition-colors hover:bg-[#a66e1b]"
            >
              Browse documents
              <ArrowRight aria-hidden="true" className="size-4" strokeWidth={1.75} />
            </Link>
            <Link
              href="#which-document"
              className="inline-flex min-h-12 items-center rounded-full border border-[#dfe5ed] bg-white px-6 text-sm font-semibold text-[#0f1f3a] transition-colors hover:border-[#0f1f3a]"
            >
              Which document applies?
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <div className="relative aspect-[524/252] w-full overflow-hidden rounded-[20px] bg-[#16263f]">
            <Image
              src={lcImg("hero-documents.webp")}
              alt="Woman opening a document envelope at a desk beside a gavel"
              fill
              priority
              sizes="(min-width: 1024px) 524px, 100vw"
              className="object-cover"
            />
            <CornerIcon icon={Truck} />
          </div>
          <div className="relative aspect-[524/256] w-full overflow-hidden rounded-[20px] bg-[#16263f]">
            <Image
              src={lcImg("hero-compliance-files.webp")}
              alt="File folder tabs labelled Violations, Procedures, Regulations and Compliance"
              fill
              sizes="(min-width: 1024px) 524px, 100vw"
              className="object-cover"
            />
            <div className="absolute bottom-3 left-3">
              <ImageTag>Independent permissions</ImageTag>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
