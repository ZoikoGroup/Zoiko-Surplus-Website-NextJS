import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { hanken, img } from "./shared";

export default function Hero() {
  return (
    <section aria-labelledby="ts-hero-heading" className={`${hanken} bg-white p-4 md:p-8`}>
      <div className="relative mx-auto flex min-h-[580px] w-full max-w-[1376px] items-center overflow-hidden rounded-[20px] bg-[#0f1f3a]">
        <Image src={img("hero-bg.webp")} alt="" fill priority sizes="(min-width: 1440px) 1376px, 100vw" className="object-cover" />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-[#0f1f3a]/95 via-[#0f1f3a]/75 to-[#0f1f3a]/25" />

        <div className="relative z-10 flex max-w-[620px] flex-col gap-9 px-6 py-14 md:px-12 lg:px-[78px]">
          <div className="flex flex-col gap-3">
            <h1 id="ts-hero-heading" className="text-[44px] font-bold leading-[1.09] tracking-[-0.02em] text-white sm:text-6xl">
              Clear controls.
              <br />
              Informed
              <br />
              <span className="text-[#10b981]">participation</span>.
            </h1>
            <p className="max-w-[538px] text-lg leading-[26px] text-white/90 md:text-xl">
              Zoiko Surplus is designed around qualified business participation, seller-controlled markets,
              category-specific requirements and documented decisions.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 pt-3">
            <Link
              href="#"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#926016] bg-[#926016] px-6 text-base font-semibold text-white transition-colors hover:bg-[#a66e1b]"
            >
              Request Enterprise Demo
              <ArrowRight aria-hidden="true" className="size-4" strokeWidth={1.75} />
            </Link>
            <Link
              href="/how-it-works"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/55 px-6 text-base font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
            >
              Learn How It Works
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
