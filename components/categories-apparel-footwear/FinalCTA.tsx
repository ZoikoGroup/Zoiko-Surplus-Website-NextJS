import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { hanken, img } from "./shared";

export default function FinalCTA() {
  return (
    <section aria-labelledby="af-cta-heading" className={`${hanken} bg-[#fafbfd] px-5 pb-16 md:px-6 md:pb-24`}>
      <div className="relative mx-auto flex min-h-[420px] w-full max-w-[1392px] items-center justify-center overflow-hidden rounded-[28px] bg-[#1c2a40] md:min-h-[605px] md:rounded-[40px]">
        {/* The image already carries its dark overlay. */}
        <Image
          src={img("af-cta-bg.webp")}
          alt=""
          fill
          sizes="(min-width: 1440px) 1392px, 100vw"
          className="object-cover"
        />
        <div className="relative z-10 flex flex-col items-center px-6 py-16 text-center">
          <h2
            id="af-cta-heading"
            className="max-w-[880px] text-[34px] font-bold leading-[1.1] tracking-[-0.02em] text-white sm:text-5xl md:text-[64px]"
          >
            Qualify apparel surplus the governed way.
          </h2>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="#"
              className="inline-flex min-h-12 items-center gap-2 rounded-full bg-[#926016] px-7 text-sm font-semibold text-white transition-colors hover:bg-[#a66e1b]"
            >
              Request Enterprise Demo
              <ArrowRight aria-hidden="true" className="size-4" strokeWidth={1.75} />
            </Link>
            <Link
              href="#"
              className="inline-flex min-h-12 items-center rounded-full border border-white/60 px-7 text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
            >
              Back to Categories
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
