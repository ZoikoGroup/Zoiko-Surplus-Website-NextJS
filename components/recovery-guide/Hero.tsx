import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Quote } from "lucide-react";
import { hanken, sora, img } from "./shared";

export default function Hero() {
  return (
    <section
      aria-labelledby="rg-hero-heading"
      className={`${hanken} bg-[linear-gradient(160deg,#ffffff_0%,#fbf8f2_55%,#f8f1e6_100%)]`}
    >
      <div className="mx-auto grid w-full max-w-[1440px] items-center gap-12 px-5 py-14 md:px-10 md:py-20 lg:grid-cols-[minmax(0,680px)_minmax(0,476px)] lg:justify-between lg:px-24">
        <div className="flex flex-col gap-7">
          <h1
            id="rg-hero-heading"
            className={`${sora} text-[44px] font-semibold leading-[1.1] tracking-[-0.02em] text-[#0f1f3a] md:text-[72px]`}
          >
            Surplus
            <br />
            Recovery <span className="text-[#1f9a7f]">Guide</span>
          </h1>
          <p className="max-w-[680px] text-base leading-7 text-[#4b5b75] md:text-lg">
            Explore how enterprises can assess surplus goods, compare potential recovery pathways and prepare for
            controlled disposition. Available options depend on stock, approved counterparties, category rules and
            local activation.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="#"
              className="inline-flex min-h-12 items-center gap-2 rounded-full bg-[#926016] px-6 text-sm font-semibold text-white transition-colors hover:bg-[#a66e1b]"
            >
              Request Enterprise Demo
              <ArrowRight aria-hidden="true" className="size-4" strokeWidth={1.75} />
            </Link>
            <Link
              href="/how-it-works"
              className="inline-flex min-h-12 items-center rounded-full border border-[#dfe5ed] bg-white px-6 text-sm font-semibold text-[#0f1f3a] transition-colors hover:border-[#0f1f3a]"
            >
              Explore How It Works
            </Link>
          </div>
        </div>

        <aside
          aria-labelledby="rg-direct-answer"
          className="overflow-hidden rounded-[20px] border border-[#e6e9ef] bg-white shadow-[0_16px_40px_-20px_rgba(12,33,64,0.35)]"
        >
          <div className="relative aspect-[475/230] w-full bg-[#16263f]">
            <Image
              src={img("hero.webp")}
              alt="Workers handing boxes between a truck and a loading bay"
              fill
              priority
              sizes="(min-width: 1024px) 476px, 100vw"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col gap-2 p-6">
            <h2
              id="rg-direct-answer"
              className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.12em] text-[#16a37a]"
            >
              <Quote aria-hidden="true" className="size-4" strokeWidth={1.75} />
              Direct answer
            </h2>
            <p className="text-base leading-7 text-[#0f1f3a]">
              Surplus recovery is the process of assessing excess or otherwise non-core goods and selecting an
              authorized route that balances commercial value, safety, brand obligations, operational costs and
              defensible records.
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}
