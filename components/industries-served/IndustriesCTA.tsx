import Image from "next/image";
import Link from "next/link";

const hanken = "font-[family-name:var(--font-hanken)]";

export default function IndustriesCTA() {
  return (
    <section
      id="industries-cta"
      aria-label="Discuss your surplus category and market requirements"
      className={`${hanken} w-full bg-white`}
    >
      {/* ========================================================
          DESKTOP VIEW (strictly preserved for desktop layout)
         ======================================================== */}
      <div className="hidden md:block">
        <div className="mx-auto w-full max-w-[1380px] px-6 pt-4 pb-24 md:px-8 md:pb-28">
          <div className="relative flex min-h-[420px] w-full items-center justify-center overflow-hidden rounded-[28px] shadow-[0_16px_42px_rgba(12,30,56,0.14)]">
            {/* Background photo sis19.png */}
            <Image
              src="/images/Industries-Served/sis19.png"
              alt="Enterprise specialists shaking hands in commercial showroom"
              fill
              sizes="(max-width: 1380px) 100vw, 1380px"
              className="object-cover object-center"
            />

            {/* Dark navy overlay */}
            <div className="absolute inset-0 bg-[#0c1e38]/60 backdrop-blur-[1px]" />

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center px-6 py-16 text-center">
              <h2 className="max-w-[740px] text-[34px] font-extrabold leading-[1.15] tracking-[-0.025em] text-white sm:text-[42px] lg:text-[46px]">
                Discuss your surplus category
                <br />
                and market requirements.
              </h2>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex h-[46px] items-center justify-center gap-2 rounded-full bg-[#926016] px-7 text-[13.5px] font-bold text-white shadow-md transition-colors hover:bg-[#784f12]"
                >
                  <span>Request Enterprise Demo</span>
                  <span aria-hidden="true">&rarr;</span>
                </Link>

                <Link
                  href="/become-a-verified-buyer"
                  className="inline-flex h-[46px] items-center justify-center rounded-full border border-white/30 bg-[#0c1e38]/40 px-7 text-[13.5px] font-bold text-white backdrop-blur-xs transition-colors hover:bg-white/15"
                >
                  Become a Verified Buyer
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================
          MOBILE VIEW (dedicated pixel-perfect mobile phase)
         ======================================================== */}
      <div className="block md:hidden">
        <div className="relative w-full overflow-hidden bg-[#0c1e38]">
          {/* Background photo sis37.jpg */}
          <Image
            src="/images/Industries-Served/sis37.jpg"
            alt="Enterprise surplus advisory discussion"
            fill
            sizes="100vw"
            className="object-cover object-right opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0c1e38] via-[#0c1e38]/90 to-[#0c1e38]/55" />

          {/* Content */}
          <div className="relative z-10 px-5 py-12 text-white">
            <h2 className="text-[24px] font-extrabold leading-[1.18] tracking-[-0.02em] text-white">
              Discuss your surplus category and market requirements.
            </h2>

            <p className="mt-3 text-[13px] leading-relaxed text-slate-300">
              Our team responds to every enquiry directly. We do not promise buyer matches, sale timing or recovery results.
            </p>

            <div className="mt-6 flex flex-col items-start gap-2.5">
              <Link
                href="/contact"
                className="inline-flex h-[44px] items-center justify-center gap-2 rounded-full bg-[#926016] px-6 text-[13px] font-bold text-white shadow-xs"
              >
                <span>Request Enterprise Demo</span>
                <span aria-hidden="true">&rarr;</span>
              </Link>

              <Link
                href="/become-a-verified-buyer"
                className="inline-flex h-[44px] items-center justify-center rounded-full border border-white/25 bg-[#0c1e38]/50 px-6 text-[13px] font-bold text-white"
              >
                Become a Verified Buyer
              </Link>
            </div>

            <p className="mt-6 text-[10.5px] leading-relaxed text-slate-400">
              Enquiry availability is checked before booking. If a route is unavailable, use Help &amp; Contact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
