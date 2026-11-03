const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

type FeatureCard = {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
};

const features: FeatureCard[] = [
  {
    id: "confidential",
    title: "Confidential audiences",
    description:
      "Opportunities are shown to seller-approved audiences only — never listed publicly or indexed by search.",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#009b72"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
        <line x1="1" y1="1" x2="23" y2="23" />
      </svg>
    ),
  },
  {
    id: "seller-rules",
    title: "Seller-defined rules",
    description:
      "Each private market runs under the rules the seller sets: who's invited, what they see and on what terms.",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#009b72"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="4" y1="21" x2="4" y2="14" />
        <line x1="4" y1="10" x2="4" y2="3" />
        <line x1="12" y1="21" x2="12" y2="12" />
        <line x1="12" y1="8" x2="12" y2="3" />
        <line x1="20" y1="21" x2="20" y2="16" />
        <line x1="20" y1="12" x2="20" y2="3" />
        <line x1="1" y1="14" x2="7" y2="14" />
        <line x1="9" y1="8" x2="15" y2="8" />
        <line x1="17" y1="16" x2="23" y2="16" />
      </svg>
    ),
  },
  {
    id: "authorized",
    title: "Authorized access",
    description:
      "Private opportunities are visible only through an authorized sign-in experience, where enabled.",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#009b72"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
];

export default function WhatPrivateMeans() {
  return (
    <section id="what-private-means" aria-labelledby="what-private-means-heading" className={`${hanken} w-full`}>
      {/* ========================================================
          DESKTOP VIEW (hidden on mobile, unchanged desktop layout)
         ======================================================== */}
      <div className="hidden md:block bg-white">
        <div className="mx-auto w-full max-w-[1380px] px-6 pt-10 pb-20 md:px-8 md:pt-16 md:pb-28">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className={`${sora} text-[13px] font-extrabold tracking-[0.14em] text-[#0f172a]`}>01</span>
            <span aria-hidden="true" className="h-[1.5px] w-9 bg-[#926016]" />
            <span className={`${sora} text-[11.5px] font-bold tracking-[0.16em] text-[#926016] uppercase`}>
              WHAT PRIVATE MEANS
            </span>
          </div>

          {/* Heading */}
          <h2
            id="what-private-means-heading"
            className="mt-3.5 text-[32px] font-extrabold tracking-[-0.02em] text-[#0f172a] sm:text-[38px] lg:text-[42px]"
          >
            &ldquo;Private&rdquo; means controlled,
            <br className="hidden sm:inline" /> confidential audiences.
          </h2>

          {/* Subtitle */}
          <p className="mt-3 max-w-[680px] text-[15px] leading-relaxed text-[#556987] sm:text-[16px]">
            A private marketplace is not a hidden public page — it&apos;s a seller-governed audience that only authorized participants can reach.
          </p>

          {/* 3-Column Principle Cards */}
          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
            {features.map((item) => (
              <div
                key={item.id}
                className="flex flex-col rounded-[20px] border border-[#eef2f6] bg-white p-6 shadow-[0_2px_12px_rgba(15,23,42,0.03)] transition-all hover:border-[#e2e8f0] hover:shadow-[0_8px_24px_rgba(15,23,42,0.06)]"
              >
                <div className="flex size-10 shrink-0 items-center justify-center rounded-[12px] bg-[#d5f5eb]">
                  {item.icon}
                </div>

                <h3 className="mt-5 text-[15.5px] font-bold text-[#0f172a]">
                  {item.title}
                </h3>

                <p className="mt-2 text-[13px] leading-[1.6] text-[#556987]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ========================================================
          MOBILE VIEW (strictly visible only on md:hidden)
         ======================================================== */}
      <div className="block md:hidden bg-[#fcf8f2] px-5 py-12">
        {/* Eyebrow */}
        <div className="flex items-center gap-2.5">
          <span className={`${sora} text-[12px] font-extrabold tracking-[0.14em] text-[#0f172a]`}>01</span>
          <span aria-hidden="true" className="h-[1.5px] w-7 bg-[#009b72]" />
          <span className={`${sora} text-[10.5px] font-bold tracking-[0.16em] text-[#009b72] uppercase`}>
            WHAT PRIVATE MEANS
          </span>
        </div>

        {/* Heading */}
        <h2 className="mt-3.5 text-[28px] font-extrabold leading-[1.18] tracking-[-0.02em] text-[#0f172a]">
          &ldquo;Private&rdquo; means
          <br />
          controlled, confidential
          <br />
          audiences.
        </h2>

        {/* Subtitle */}
        <p className="mt-3 text-[14px] leading-relaxed text-[#556987]">
          A private marketplace is not a hidden public page — it&apos;s a seller-governed audience that only authorized participants can reach.
        </p>

        {/* 3 Vertically Stacked Cards */}
        <div className="mt-7 flex flex-col gap-4">
          {features.map((item) => (
            <div
              key={item.id}
              className="flex flex-col rounded-[18px] border border-[#eef2f6] bg-white p-5 shadow-[0_2px_10px_rgba(15,23,42,0.03)]"
            >
              <div className="flex size-9 shrink-0 items-center justify-center rounded-[10px] bg-[#d5f5eb]">
                {item.icon}
              </div>

              <h3 className="mt-3.5 text-[15px] font-bold text-[#0f172a]">
                {item.title}
              </h3>

              <p className="mt-1.5 text-[12.5px] leading-relaxed text-[#556987]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
