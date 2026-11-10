import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { hanken, img } from "./shared";

export default function Hero() {
  return (
    <section aria-labelledby="ce-hero-heading" className={`${hanken} bg-white p-3 md:p-8`}>
      <div className="relative mx-auto w-full max-w-[1376px] overflow-hidden rounded-[20px] bg-[#13254a]">
        {/* Background already carries its navy gradient. */}
        <Image src={img("ce-hero-bg.webp")} alt="" fill priority sizes="100vw" className="object-cover" />

        <div className="relative z-10 grid items-center gap-10 px-6 py-12 md:px-10 md:py-16 lg:min-h-[612px] lg:grid-cols-[1fr_580px] lg:px-[68px]">
          <div className="flex flex-col gap-9">
            <div className="flex flex-col gap-3">
              <h1
                id="ce-hero-heading"
                className="text-[40px] font-bold leading-[1.09] tracking-[-0.02em] text-white sm:text-5xl md:text-6xl"
              >
                Consumer
                <br />
                <span className="text-[#10b981]">Electronics</span> surplus.
              </h1>
              <p className="max-w-[538px] text-lg leading-6 text-white/90 md:text-xl">
                Explore how eligible surplus electronics may be qualified for seller-controlled business disposition —
                with attention to product condition, safety, provenance and information security.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="#"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#a16207] px-6 text-base font-semibold text-white transition-colors hover:bg-[#b4700c]"
              >
                Request Enterprise Demo
                <ArrowRight aria-hidden="true" className="size-4" strokeWidth={1.75} />
              </Link>
              <Link
                href="/become-a-verified-buyer"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/55 px-6 text-base font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
              >
                Become a Verified Buyer
              </Link>
            </div>
          </div>

          {/* The image file already includes its border, rounded corners and drop shadow. */}
          <div className="relative aspect-[653/452] w-full">
            <Image
              src={img("ce-hero-card.webp")}
              alt="Shopper comparing laptops on a retail display counter"
              fill
              priority
              sizes="(min-width: 1024px) 580px, 100vw"
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
