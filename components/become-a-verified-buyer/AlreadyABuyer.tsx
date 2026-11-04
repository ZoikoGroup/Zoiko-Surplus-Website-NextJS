import Link from "next/link";
import Image from "next/image";

const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

export default function AlreadyABuyer() {
  return (
    <section id="already-a-buyer" aria-labelledby="already-a-buyer-heading" className={`${hanken} w-full bg-white order-12 md:order-none`}>
      {/* ========================================================
          DESKTOP VIEW (hidden on mobile, unchanged desktop layout)
         ======================================================== */}
      <div className="hidden md:block">
        <div className="mx-auto w-full max-w-[1380px] px-6 pt-10 pb-16 md:px-8 md:pt-12 md:pb-20">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className={`${sora} text-[13px] font-extrabold tracking-[0.14em] text-[#0f172a]`}>11</span>
            <span aria-hidden="true" className="h-[1.5px] w-9 bg-[#926016]" />
            <span className={`${sora} text-[11.5px] font-bold tracking-[0.16em] text-[#926016] uppercase`}>
              ALREADY A BUYER?
            </span>
          </div>

          {/* Heading */}
          <h2
            id="already-a-buyer-heading"
            className="mt-3.5 text-[34px] font-extrabold tracking-[-0.02em] text-[#0f172a] sm:text-[40px] lg:text-[44px]"
          >
            Existing buyers: use your
            <br />
            support channel.
          </h2>

          {/* Subtitle */}
          <p className="mt-3 max-w-[680px] text-[15px] leading-relaxed text-[#556987] sm:text-[16px]">
            This page is for new applicants. If your organization is already verified, manage access and get help through your approved buyer support channel rather than re-applying here.
          </p>

          {/* 2 Bullet Points */}
          <div className="mt-8 flex flex-col gap-4">
            <div className="flex items-start gap-3">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#009b72"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mt-0.5 shrink-0"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <div>
                <h3 className="text-[14px] font-bold text-[#0f172a]">
                  Manage entitlements
                </h3>
                <p className="text-[12.5px] text-[#556987]">
                  Through your authenticated account, where enabled.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#009b72"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mt-0.5 shrink-0"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <div>
                <h3 className="text-[14px] font-bold text-[#0f172a]">
                  Get help
                </h3>
                <p className="text-[12.5px] text-[#556987]">
                  Contact support for access or eligibility questions.
                </p>
              </div>
            </div>
          </div>

          {/* Help Center Button */}
          <div className="mt-7">
            <Link
              href="/contact"
              className="inline-flex h-[42px] items-center justify-center gap-2 rounded-full border border-[#cbd5e1] bg-white px-5 text-[13px] font-bold text-[#0f172a] shadow-xs transition-colors hover:bg-slate-50"
            >
              <span>Help Center</span>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* ========================================================
          MOBILE VIEW (strictly visible only on md:hidden)
         ======================================================== */}
      <div className="block md:hidden bg-white px-5 pt-8 pb-12">
        {/* Top Image: vb17.jpg */}
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[20px] shadow-[0_4px_16px_rgba(15,23,42,0.06)]">
          <Image
            src="/images/become-a-verified-buyer/vb17.jpg"
            alt="Customer support for existing buyers"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>

        {/* Eyebrow */}
        <div className="mt-8 flex items-center gap-2.5">
          <span className={`${sora} text-[12px] font-extrabold tracking-[0.14em] text-[#0f172a]`}>10</span>
          <span aria-hidden="true" className="h-[1.5px] w-7 bg-[#009b72]" />
          <span className={`${sora} text-[10.5px] font-bold tracking-[0.16em] text-[#009b72] uppercase`}>
            ALREADY A BUYER?
          </span>
        </div>

        {/* Heading */}
        <h2 className="mt-3.5 text-[28px] font-extrabold leading-[1.18] tracking-[-0.02em] text-[#0f172a]">
          Existing buyers: use your support channel.
        </h2>

        {/* Subtitle */}
        <p className="mt-3 text-[14px] leading-relaxed text-[#556987]">
          This page is for new applicants. If your organization is already verified, manage access and get help through your approved buyer support channel rather than re-applying here.
        </p>

        {/* 2 Bullet Points */}
        <div className="mt-6 flex flex-col gap-4">
          <div className="flex items-start gap-3">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#009b72"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mt-0.5 shrink-0"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <div>
              <h3 className="text-[14px] font-bold text-[#0f172a]">
                Manage entitlements
              </h3>
              <p className="text-[12px] leading-relaxed text-[#556987]">
                Through your authenticated account, where enabled.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#009b72"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mt-0.5 shrink-0"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <div>
              <h3 className="text-[14px] font-bold text-[#0f172a]">
                Get help
              </h3>
              <p className="text-[12px] leading-relaxed text-[#556987]">
                Contact support for access or eligibility questions.
              </p>
            </div>
          </div>
        </div>

        {/* Help Center Button */}
        <div className="mt-6">
          <Link
            href="/contact"
            className="inline-flex h-[42px] items-center justify-center gap-2 rounded-full border border-[#cbd5e1] bg-white px-5 text-[13px] font-bold text-[#0f172a] shadow-xs transition-colors hover:bg-slate-50"
          >
            <span>Help Center</span>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
