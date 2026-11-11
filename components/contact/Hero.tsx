import Image from "next/image";
import Link from "next/link";

const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

export default function Hero() {
  return (
    <section
      aria-label="Contact Zoiko Surplus"
      className={`${hanken} w-full bg-gradient-to-b from-[#fdfcf9] via-[#fbf9f5]/80 to-white`}
    >
      {/* ========================================================
          DESKTOP VIEW (strictly preserved for desktop layout)
         ======================================================== */}
      <div className="hidden md:block">
        <div className="mx-auto w-full max-w-[1380px] px-6 py-16 md:px-8 md:py-22">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14">
            {/* Left Column */}
            <div className="flex flex-col lg:col-span-6">
              <h1 className="text-[48px] font-extrabold leading-[1.06] tracking-[-0.03em] text-[#0c1e38] lg:text-[58px]">
                Contact
                <br />
                <span className="text-[#009b72]">Zoiko Surplus</span>
              </h1>

              <p className="mt-6 max-w-[500px] text-[15.5px] leading-relaxed text-[#556987] sm:text-[16px]">
                Connect with the right team about enterprise surplus, buyer participation, partner inquiries or general questions. Access and availability depend on eligibility and the market.
              </p>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-3.5">
                <Link
                  href="#general-inquiry"
                  className="inline-flex h-[48px] items-center justify-center gap-2 rounded-full bg-[#926016] px-6 text-[13.5px] font-bold text-white shadow-xs transition-colors hover:bg-[#784f12]"
                >
                  <span>Request Enterprise Demo</span>
                  <span aria-hidden="true">&rarr;</span>
                </Link>

                <Link
                  href="/become-a-verified-buyer"
                  className="inline-flex h-[48px] items-center justify-center rounded-full border border-slate-200 bg-white px-6 text-[13.5px] font-bold text-[#0c1e38] shadow-xs transition-colors hover:bg-slate-50"
                >
                  Become a Verified Buyer
                </Link>
              </div>

              {/* Privacy Notice */}
              <div className="mt-6 flex max-w-[500px] items-start gap-2.5 text-[11.5px] leading-relaxed text-[#64748b]">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#009b72"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mt-0.5 shrink-0"
                >
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
                <span>
                  Please do not send confidential inventory records, passwords, identity documents or payment details through any public form.
                </span>
              </div>
            </div>

            {/* Right Column Visual (sc1.jpg) */}
            <div className="lg:col-span-6">
              <div className="relative ml-auto aspect-[4/3] w-full max-w-[540px] overflow-hidden rounded-[24px] bg-slate-100 shadow-[0_14px_38px_rgba(12,30,56,0.1)]">
                <Image
                  src="/images/Surplus-Contact/sc1.jpg"
                  alt="Zoiko Surplus client inquiry specialists collaborating"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
                />

                {/* Top-Left Pill */}
                <div className="absolute top-3.5 left-3.5">
                  <span className="inline-flex items-center rounded-full bg-white/95 px-3 py-1 text-[10.5px] font-semibold text-[#0c1e38] shadow-xs backdrop-blur-xs">
                    Illustrative imagery
                  </span>
                </div>

                {/* Bottom Overlay White Card */}
                <div className="absolute inset-x-4 bottom-4 rounded-[16px] border border-slate-100 bg-white/95 p-4 shadow-md backdrop-blur-xs">
                  <h2 className="text-[13px] font-extrabold text-[#0c1e38]">
                    Pick one path
                  </h2>
                  <p className="mt-1 text-[11.5px] leading-relaxed text-[#556987]">
                    Sellers, buyers, partners, existing participants and general enquiries each have their own route.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================
          MOBILE VIEW (dedicated pixel-perfect mobile phase)
         ======================================================== */}
      <div className="block md:hidden bg-gradient-to-b from-[#fbf7f0] to-[#fdfbf8]">
        <div className="w-full px-5 pt-4 pb-8">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-[11px] text-[#718096]">
            <Link href="/" className="hover:text-[#0c1e38]">Home</Link>
            <span>/</span>
            <Link href="/about" className="hover:text-[#0c1e38]">Company</Link>
            <span>/</span>
            <span className="font-semibold text-[#0c1e38]">Contact</span>
          </nav>

          <p className={`${sora} mt-5 text-[10px] font-extrabold tracking-[0.16em] text-[#926016] uppercase`}>
            COMPANY / CONTACT
          </p>

          <h1 className="mt-2 text-[32px] font-extrabold leading-[1.08] tracking-[-0.03em] text-[#0c1e38]">
            Contact
            <br />
            <span className="text-[#009b72]">Zoiko Surplus</span>
          </h1>

          <p className="mt-3.5 text-[13.5px] leading-relaxed text-[#556987]">
            Connect with the right team about enterprise surplus, buyer participation, partner inquiries or general questions. Access and availability depend on eligibility and the market.
          </p>

          {/* Action Buttons */}
          <div className="mt-6 flex flex-col items-start gap-2.5">
            <Link
              href="#general-inquiry"
              className="inline-flex h-[44px] items-center justify-center gap-2 rounded-full bg-[#926016] px-6 text-[13px] font-bold text-white shadow-xs"
            >
              <span>Request Enterprise Demo</span>
              <span aria-hidden="true">&rarr;</span>
            </Link>

            <Link
              href="/become-a-verified-buyer"
              className="inline-flex h-[44px] items-center justify-center rounded-full border border-slate-200 bg-white px-6 text-[13px] font-bold text-[#0c1e38] shadow-2xs"
            >
              Become a Verified Buyer
            </Link>
          </div>

          {/* Privacy Warning */}
          <div className="mt-5 flex items-start gap-2 text-[11px] leading-relaxed text-[#64748b]">
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#009b72"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mt-0.5 shrink-0"
            >
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
            <span>
              Please do not send confidential inventory records, passwords, identity documents or payment details through any public form.
            </span>
          </div>

          {/* Visual Card (sc9.jpg) + Overlapping Pick One Path Card */}
          <div className="mt-7">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[20px] bg-slate-100 shadow-xs">
              <Image
                src="/images/Surplus-Contact/sc9.jpg"
                alt="Zoiko Surplus client inquiry specialists collaborating"
                fill
                priority
                sizes="100vw"
                className="object-cover"
              />
            </div>

            <div className="relative z-10 -mt-14 ml-3 w-[82%] max-w-[270px] rounded-[16px] border border-slate-100 bg-white p-4 shadow-[0_12px_30px_rgba(12,30,56,0.12)]">
              <h2 className="text-[13px] font-extrabold text-[#0c1e38]">
                Pick one path
              </h2>
              <p className="mt-1 text-[11.5px] leading-relaxed text-[#556987]">
                Sellers, buyers, partners, existing participants and general enquiries each have their own route.
              </p>
            </div>
          </div>

          {/* Quick Route Selector (Mobile Only) */}
          <div className="mt-8">
            <p className={`${sora} text-[10px] font-extrabold tracking-[0.16em] text-[#926016] uppercase`}>
              QUICK ROUTE SELECTOR
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {[
                { label: "Seller", href: "#contact-paths" },
                { label: "Buyer", href: "#contact-paths" },
                { label: "Partner", href: "#contact-paths" },
                { label: "Support", href: "#contact-paths" },
                { label: "General inquiry", href: "#general-inquiry" },
              ].map((pill) => (
                <a
                  key={pill.label}
                  href={pill.href}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-[12px] font-bold text-[#0c1e38] shadow-2xs"
                >
                  <span className="size-1.5 rounded-full bg-[#926016]" />
                  <span>{pill.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
