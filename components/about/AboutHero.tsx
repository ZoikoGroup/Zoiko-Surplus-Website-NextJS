import Image from "next/image";
import Link from "next/link";
import { hankenGrotesk } from "./hankenGrotesk";

const hanken = hankenGrotesk;

const A = "/images/about/hero";

const stripItems = [
  { icon: "strip-icon-reduce-waste.svg", w: 32, h: 32, title: "Reduce Waste", text: "More value from goods that already exists" },
  { icon: "strip-icon-qualified-demand.svg", w: 32, h: 32, title: "Qualified demand", text: "Verified business buyers, not open crowd." },
  { icon: "strip-icon-governed-trust.svg", w: 29, h: 34, title: "Governed trust", text: "Policy, compliance and auditability." },
  { icon: "strip-icon-global.svg", w: 32, h: 32, title: "Global by design", text: "Activated responsibly, market by market" },
];

const mobileFeatures = [
  { icon: "icon-recover-mobile.svg", title: "Recover value", text: "More value from goods that already exist." },
  { icon: "icon-qualified-mobile.svg", title: "Qualified demand", text: "Verified business buyers, not open crowds." },
  { icon: "icon-governed-mobile.svg", title: "Governed trust", text: "Policy, compliance and auditability." },
  { icon: "icon-global-mobile.svg", title: "Global by design", text: "Activated responsibly, market by market." },
];

function Headline({ className, id }: { className: string; id?: string }) {
  return (
    <h1 id={id} className={className}>
      Turning <span className="text-[#18a884]">surplus</span>
      <br />
      into value. Building
      <br />
      trust into every
      <br />
      transaction.
    </h1>
  );
}

export default function AboutHero() {
  return (
    <section className={`w-full ${hanken.className}`}>
      {/* ---------------- Mobile ---------------- */}
      <div className="flex flex-col items-start bg-[radial-gradient(1100px_460.13px_at_calc(100%-46.8px)_-132.32px,rgba(24,168,132,0.1)_0,rgba(24,168,132,0)_60%),linear-gradient(180deg,#fff_0%,#fbf6ef_100%)] py-14 md:hidden">
        <div className="flex w-full flex-col items-start gap-[18px] px-4">
          <nav aria-label="Breadcrumb" className="flex w-full items-center gap-[7px] text-[13.1px] leading-[20.34px]">
            <Link href="/" className="text-[#5a6b7b]">
              Home
            </Link>
            <span aria-hidden className="text-[#d4d8de]">
              /
            </span>
            <Link href="#" className="text-[#5a6b7b]">
              Company
            </Link>
            <span aria-hidden className="text-[#d4d8de]">
              /
            </span>
            <span aria-current="page" className="font-semibold text-[#0c2140]">
              About
            </span>
          </nav>

          <div className="flex w-full flex-col items-center gap-7">
            <div className="flex w-full flex-col items-start gap-4 pt-1.5">
              <div className="relative h-[20.14px] w-[238.72px] text-[13px] leading-[20.15px] font-semibold tracking-[1.82px] text-[#0c2140] uppercase">
                <span className="absolute top-1/2 left-0 -translate-y-1/2 opacity-50">—</span>
                <span className="absolute top-1/2 left-[25.58px] h-px w-7 -translate-y-1/2 bg-[#0f7a60] opacity-50" />
                <span className="absolute top-[calc(50%-0.57px)] left-[63.58px] -translate-y-1/2 whitespace-nowrap text-[#0f7a60]">
                  About Zoiko Surplus
                </span>
              </div>

              <Headline className="w-[312.23px] pt-[8.635px] pb-[0.805px] text-[37.2px] leading-[37.92px] font-bold tracking-[-0.744px] whitespace-nowrap text-[#0c2140]" />

              <p className="w-full text-[17.9px] leading-[23.24px] text-[#5a6b7b]">
                We are building the infrastructure for a more
                <br />
                efficient surplus economy — helping
                <br />
                businesses recover value from excess,
                <br />
                returned, imperfect and second-chance
                <br />
                goods through qualified demand, governed
                <br />
                commerce and responsible disposition
                <br />
                pathways.
              </p>

              <div className="flex w-full flex-col items-start justify-center gap-3 pt-3">
                <Link
                  href="#"
                  className="flex h-12 items-center justify-center gap-[9px] rounded-full border border-[#955f22] bg-[#955f22] px-6 text-[15px] leading-[15px] font-semibold whitespace-nowrap text-white"
                >
                  Explore Our Solutions
                  <Image src={`${A}/icon-arrow-right.svg`} alt="" width={18} height={18} />
                </Link>
                <Link
                  href="#"
                  className="flex h-12 items-center justify-center rounded-full border border-[#d4d8de] bg-white px-6 pt-[15px] pb-4 text-[15px] leading-[15px] font-semibold whitespace-nowrap text-[#0c2140]"
                >
                  Talk to Our Team
                </Link>
              </div>
            </div>

            <div className="relative aspect-[358/268.5] w-full overflow-hidden rounded-[20px] bg-[linear-gradient(150deg,#14294a_0%,#0c2140_100%)]">
              <Image
                src={`${A}/warehouse-photo.webp`}
                alt="Warehouse aisles stacked with yellow bins and boxes of surplus goods"
                fill
                sizes="358px"
                className="object-cover"
                priority
              />
            </div>
          </div>

          <ul className="flex w-full flex-col items-start gap-[22px] border-t border-[#e6e8ec] pt-[62px]">
            {mobileFeatures.map((f) => (
              <li key={f.title} className="flex w-full items-start gap-3">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-[11px] bg-[#dcf3ed]">
                  <Image src={`${A}/${f.icon}`} alt="" width={20} height={20} />
                </span>
                <div className="relative h-[52.69px] flex-1">
                  <p className="absolute top-[-1px] left-0 text-base leading-[24.8px] font-bold whitespace-nowrap text-[#0c2140]">{f.title}</p>
                  <p className="absolute top-[29px] left-0 text-[14.4px] leading-[21.6px] text-[#5a6b7b]">{f.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ---------------- Desktop ---------------- */}
      <div className="hidden md:block">
        <div className="bg-[radial-gradient(1100px_341.55px_at_calc(100%-172.8px)_-70.9px,rgba(24,168,132,0.1)_0,rgba(24,168,132,0)_60%),linear-gradient(180deg,#fff_0%,#fbf6ef_100%)] px-8 py-24 lg:px-24">
          <div className="grid h-[517px] max-w-[1240px] grid-cols-[1.1fr_0.9fr] gap-x-8 lg:gap-x-[52px]">
            <div className="flex flex-col items-start gap-4 self-start pt-[21.3px]">
              <Headline
                id="about-hero-heading"
                className="pt-[9.15px] text-[48px] leading-[49px] font-bold tracking-[-0.96px] whitespace-nowrap text-[#0c2140] lg:text-[64px] lg:leading-[65.28px] lg:tracking-[-1.28px]"
              />
              <p className="max-w-[582.4px] text-[20px] leading-[26px] text-[#5a6b7b]">
                We are building the infrastructure for a more efficient surplus
                <br className="hidden lg:block" /> economy helping businesses recover value from excess,
                <br className="hidden lg:block" /> returned, imperfect and second-chance goods through qualified
                <br className="hidden lg:block" /> demand, governed commerce and responsible disposition
                <br className="hidden lg:block" /> pathways.
              </p>
              <div className="flex h-[60px] flex-wrap items-start gap-3 pt-3">
                <Link
                  href="#"
                  className="flex min-h-12 items-center justify-center gap-[9px] rounded-full border border-[#955f22] bg-[#955f22] px-6 text-[15px] leading-[15px] font-semibold whitespace-nowrap text-white"
                >
                  Explore Our Solutions
                  <Image src={`${A}/icon-arrow-right.svg`} alt="" width={18} height={18} />
                </Link>
                <Link
                  href="#"
                  className="flex min-h-12 items-center justify-center rounded-full border border-[#d4d8de] bg-white px-6 pt-[15px] pb-4 text-[15px] leading-[15px] font-semibold whitespace-nowrap text-[#0c2140]"
                >
                  Talk to Our Team
                </Link>
              </div>
            </div>
            <div className="relative mt-[67px] aspect-[534.6/401] w-full self-start overflow-hidden rounded-[20px] bg-[linear-gradient(150deg,#14294a_0%,#0c2140_100%)]">
              <Image
                src={`${A}/warehouse-photo.webp`}
                alt="Warehouse aisles stacked with yellow bins and boxes of surplus goods"
                fill
                sizes="535px"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>

        {/* Value strip */}
        <ul className="mx-auto grid max-w-[1440px] grid-cols-4 bg-white font-[family-name:var(--font-sora)]">
          {stripItems.map((s) => (
            <li key={s.title} className="flex items-center justify-center px-4 py-6">
              <div className="flex items-start gap-3">
                <span className="relative flex h-8 w-8 shrink-0 items-center justify-center">
                  <Image src={`${A}/${s.icon}`} alt="" width={s.w} height={s.h} className="max-w-none" />
                </span>
                <div className="w-[min(255px,100%)] lg:w-[255px]">
                  <p className="flex h-[23px] items-center text-[14px] leading-[18px] font-semibold text-[#1e2126]">{s.title}</p>
                  <p className="flex h-[23px] items-center text-[12px] leading-[18px] text-[#4f647a]">{s.text}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
