import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Heart, Info, Package, Recycle, Repeat, Route, Truck, type LucideIcon } from "lucide-react";
import { hanken, sora, ppImg } from "./shared";

const routes: { icon: LucideIcon; label: string }[] = [
  { icon: Truck, label: "Collection" },
  { icon: Repeat, label: "Redistribution" },
  { icon: Heart, label: "Donation" },
  { icon: Recycle, label: "Recovery" },
];

export default function Hero() {
  return (
    <section aria-labelledby="pp-hero-heading" className={`${hanken} bg-[#fafbfd] px-5 pt-6 md:px-8 md:pt-8`}>
      <div className="relative mx-auto w-full max-w-[1376px] overflow-hidden rounded-[28px] bg-[#16263f] md:rounded-[32px]">
        {/* The image already carries its navy overlay. */}
        <Image src={ppImg("hero-bg.webp")} alt="" fill priority sizes="(min-width: 1440px) 1376px, 100vw" className="object-cover" />
        <div className="relative z-10 grid items-center gap-10 px-6 py-14 md:px-12 md:py-20 lg:grid-cols-[minmax(0,540px)_minmax(0,446px)] lg:justify-between lg:px-20 lg:py-28">
          <div className="flex flex-col gap-6">
            <h1
              id="pp-hero-heading"
              className={`${sora} text-[44px] font-semibold leading-[1.05] tracking-[-0.02em] text-white md:text-[64px]`}
            >
              Permitted
              <br />
              <span className="text-[#2bb38c]">Pathways</span>.
            </h1>
            <p className="text-base leading-7 text-[#e3e8f1] md:text-lg">
              Permitted pathways coordinate eligible third-party routes under seller authorization and applicable
              category, market and policy controls. Participation is reviewed, not guaranteed.
            </p>
            <div className="flex flex-wrap gap-3 pt-3">
              <Link
                href="#"
                className="inline-flex min-h-12 items-center gap-2 rounded-full bg-[#926016] px-6 text-sm font-semibold text-white transition-colors hover:bg-[#a66e1b]"
              >
                Request Enterprise Demo
                <ArrowRight aria-hidden="true" className="size-4" strokeWidth={1.75} />
              </Link>
              <Link
                href="/partner-participation"
                className="inline-flex min-h-12 items-center rounded-full border border-white/60 px-6 text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
              >
                Explore Partner Participation
              </Link>
            </div>
          </div>

          {/* Illustrative route card — not live data. */}
          <aside aria-label="Example of a seller-authorized route" className="flex flex-col gap-4 rounded-[20px] bg-white p-6 shadow-[0_20px_50px_-24px_rgba(0,0,0,0.5)] md:p-7">
            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#16a37a]">
              <Route aria-hidden="true" className="size-4" strokeWidth={1.75} />
              A seller-authorized route
            </p>
            <div className="flex items-center gap-3 px-1 py-2">
              <span className="flex size-10 items-center justify-center rounded-lg bg-[#16a37a] text-white">
                <Package aria-hidden="true" className="size-5" strokeWidth={1.75} />
              </span>
              <div>
                <p className="text-base font-semibold text-[#0f1f3a]">Qualified, approved lot</p>
                <p className="text-sm text-[#556987]">Permitted · governed · evidenced</p>
              </div>
            </div>
            <ul className="grid grid-cols-2 gap-2.5">
              {routes.map(({ icon: Icon, label }) => (
                <li
                  key={label}
                  className="flex items-center gap-2.5 rounded-xl border border-[#cdd5e0] px-3 py-3 text-sm font-medium text-[#0f1f3a]"
                >
                  <Icon aria-hidden="true" className="size-4 shrink-0 text-[#16a37a]" strokeWidth={1.75} />
                  {label}
                </li>
              ))}
            </ul>
            <p className="flex items-start gap-2 text-xs leading-5 text-[#556987]">
              <Info aria-hidden="true" className="mt-0.5 size-3.5 shrink-0 text-[#8a5a14]" strokeWidth={1.75} />
              Illustrative — partners are authorized and separately contracted, not operated by Zoiko.
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}
