import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Building2, Info } from "lucide-react";
import { hanken, img } from "./shared";

// `mono` values are unverified/legal strings and render in a monospace face, as in the design.
const identity = [
  { label: "Platform", value: "Zoiko Surplus" },
  { label: "Legal entity", value: "Zoiko Supply Group Inc.", mono: true },
  { label: "Group", value: "Zoiko Group", mono: true },
  { label: "Model", value: "Asset-light B2B surplus platform" },
  { label: "Registration", value: "‹to be verified›", mono: true },
];

export default function Hero() {
  return (
    <section aria-labelledby="corp-hero-heading" className={`${hanken} bg-white p-4 md:p-8`}>
      <div className="relative mx-auto flex min-h-[580px] w-full max-w-[1376px] items-center overflow-hidden rounded-[20px] bg-[#0f1f3a]">
        <Image src={img("hero-bg.webp")} alt="" fill priority sizes="(min-width: 1440px) 1376px, 100vw" className="object-cover" />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-[#0f1f3a]/95 via-[#0f1f3a]/75 to-[#0f1f3a]/25" />

        <div className="relative z-10 flex w-full flex-col gap-10 px-6 py-14 md:px-12 lg:flex-row lg:items-center lg:justify-between lg:px-[68px]">
          <div className="flex max-w-[653px] flex-col gap-9">
            <div className="flex flex-col gap-4">
              <h1
                id="corp-hero-heading"
                className="pt-2.5 text-[44px] font-bold leading-[1.09] tracking-[-0.02em] text-white sm:text-6xl"
              >
                Corporate
                <br />
                <span className="text-[#10b981]">Information</span>.
              </h1>
              <p className="max-w-[582px] text-lg leading-[26px] text-white/90 md:text-xl">
                Learn how Zoiko Surplus fits within Zoiko Supply Group Inc. and the Zoiko Group, how the platform is
                structured, and where to find authoritative corporate and policy information.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex flex-wrap gap-3 pt-4">
                <Link
                  href="#"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#926016] bg-[#926016] px-6 text-base font-semibold text-white transition-colors hover:bg-[#a66e1b]"
                >
                  Request Enterprise Demo
                  <ArrowRight aria-hidden="true" className="size-4" strokeWidth={1.75} />
                </Link>
                <Link
                  href="/about"
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#d3dbe6] bg-white px-6 text-base font-semibold text-[#0f1f3a] transition-colors hover:bg-[#f1f4f8]"
                >
                  About Zoiko Surplus
                </Link>
              </div>
              <p className="flex max-w-[530px] items-start gap-3 text-xs leading-5 text-white/90">
                <Info aria-hidden="true" className="mt-[3px] size-3.5 shrink-0" strokeWidth={1.75} />
                Platform architecture is global; category, market and participant access depend on local activation and
                eligibility. Corporate details shown are placeholders pending verified publication.
              </p>
            </div>
          </div>

          {/* Corporate identity card */}
          <div className="w-full max-w-[446px] overflow-hidden rounded-[20px] border border-[#e6e9ef] bg-white pb-4 shadow-[0_24px_60px_-24px_rgba(12,33,64,0.35)] lg:shrink-0">
            <div className="flex h-16 items-center justify-between bg-[#0f1f3a] px-5">
              <div className="flex items-center gap-3 text-white">
                <Building2 aria-hidden="true" className="size-[18px]" strokeWidth={1.5} />
                <h2 className="text-base font-bold">Corporate identity</h2>
              </div>
              <span className="flex flex-col items-center text-[#2dd4bf]">
                <Info aria-hidden="true" className="size-3" strokeWidth={1.75} />
                <span className="text-xs font-bold uppercase tracking-wide">Placeholder</span>
              </span>
            </div>
            <dl className="mt-4">
              {identity.map((row) => (
                <div key={row.label} className="flex gap-3 border-t border-[#e6e9ef] px-5 pt-2.5 pb-3 text-sm leading-5">
                  <dt className="w-36 shrink-0 font-semibold text-[#0f1f3a]">{row.label}</dt>
                  <dd className={`flex-1 text-[#7d8aa0] ${row.mono ? "font-mono" : ""}`}>{row.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
