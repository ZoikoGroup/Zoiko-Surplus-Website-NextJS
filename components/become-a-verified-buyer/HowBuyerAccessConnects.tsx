import Image from "next/image";
import Link from "next/link";

const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

const relatedSolutions = [
  {
    id: "surplus-exchange",
    title: "Surplus Exchange",
    description: "The governed participation layer connecting verified buyers with seller-approved opportunities.",
    linkText: "Explore Surplus Exchange",
    href: "/solution-surplus-network",
    image: "/images/become-a-verified-buyer/vb8.png",
    alt: "Surplus Exchange mobile transaction and payment terminal",
  },
  {
    id: "private-marketplaces",
    title: "Private Marketplaces",
    description: "How seller-controlled, eligibility-gated private audiences work.",
    linkText: "Explore Private Marketplaces",
    href: "/solution-private-marketplaces",
    image: "/images/become-a-verified-buyer/vb9.png",
    alt: "Private Marketplaces digital buyer audience portal",
  },
  {
    id: "offers-transactions",
    title: "Offers & Transactions",
    description: "How governed offers and documented outcomes work where enabled.",
    linkText: "Explore Offers & Transactions",
    href: "/solution-offers-and-transactions",
    image: "/images/become-a-verified-buyer/vb10.png",
    alt: "Offers and transactions checkout and digital settlement",
  },
];

export default function HowBuyerAccessConnects() {
  return (
    <section id="how-buyer-access-connects" aria-labelledby="connects-heading" className={`${hanken} w-full bg-white order-15 md:order-none`}>
      {/* ========================================================
          DESKTOP VIEW (hidden on mobile, unchanged desktop layout)
         ======================================================== */}
      <div className="hidden md:block">
        <div className="mx-auto w-full max-w-[1380px] px-6 pt-12 pb-20 md:px-8 md:pt-16 md:pb-28">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className={`${sora} text-[13px] font-extrabold tracking-[0.14em] text-[#0f172a]`}>13</span>
            <span aria-hidden="true" className="h-[1.5px] w-9 bg-[#926016]" />
            <span className={`${sora} text-[11.5px] font-bold tracking-[0.16em] text-[#926016] uppercase`}>
              RELATED
            </span>
          </div>

          {/* Heading */}
          <h2
            id="connects-heading"
            className="mt-3.5 text-[34px] font-extrabold tracking-[-0.02em] text-[#0f172a] sm:text-[40px] lg:text-[44px]"
          >
            How buyer access connects.
          </h2>

          {/* Subtitle */}
          <p className="mt-3 max-w-[680px] text-[15px] leading-relaxed text-[#556987] sm:text-[16px]">
            Verification is the way into the governed exchange — explore how it works.
          </p>

          {/* 3 Solution Cards */}
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {relatedSolutions.map((item) => (
              <div
                key={item.id}
                className="group flex flex-col overflow-hidden rounded-[20px] border border-[#eef2f6] bg-white shadow-[0_2px_12px_rgba(15,23,42,0.03)] transition-all hover:border-[#e2e8f0] hover:shadow-[0_8px_24px_rgba(15,23,42,0.06)]"
              >
                {/* Visual */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Corner Arrow Badge */}
                  <div className="absolute top-3.5 right-3.5 z-10 flex size-7 items-center justify-center rounded-full bg-white/90 text-[#0f172a] shadow-sm backdrop-blur-xs transition-colors group-hover:bg-white">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="7" y1="17" x2="17" y2="7" />
                      <polyline points="7 7 17 7 17 17" />
                    </svg>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col justify-between p-6">
                  <div>
                    <h3 className="text-[16px] font-bold text-[#0f172a]">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-[12.5px] leading-[1.65] text-[#556987]">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-3">
                    <Link
                      href={item.href}
                      className="inline-flex items-center gap-1.5 text-[13px] font-bold text-[#926016] transition-colors hover:text-[#a66e1b]"
                    >
                      <span>{item.linkText}</span>
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ========================================================
          MOBILE VIEW (strictly visible only on md:hidden)
         ======================================================== */}
      <div className="block md:hidden bg-white px-5 py-12">
        {/* Eyebrow */}
        <div className="flex items-center gap-2.5">
          <span className={`${sora} text-[12px] font-extrabold tracking-[0.14em] text-[#0f172a]`}>11</span>
          <span aria-hidden="true" className="h-[1.5px] w-7 bg-[#009b72]" />
          <span className={`${sora} text-[10.5px] font-bold tracking-[0.16em] text-[#009b72] uppercase`}>
            RELATED
          </span>
        </div>

        {/* Heading */}
        <h2 className="mt-3.5 text-[28px] font-extrabold leading-[1.18] tracking-[-0.02em] text-[#0f172a]">
          How buyer access connects.
        </h2>

        {/* Subtitle */}
        <p className="mt-3 text-[14px] leading-relaxed text-[#556987]">
          Verification is the way into the governed exchange — explore how it works.
        </p>

        {/* 3 Stacked Cards */}
        <div className="mt-7 flex flex-col gap-5">
          {/* Card 1 */}
          <div className="overflow-hidden rounded-[20px] border border-[#eef2f6] bg-white shadow-[0_2px_12px_rgba(15,23,42,0.03)]">
            <div className="relative aspect-[16/10] w-full">
              <Image
                src="/images/become-a-verified-buyer/vb18.jpg"
                alt="Surplus Exchange"
                fill
                sizes="100vw"
                className="object-cover"
              />
              <div className="absolute top-3.5 right-3.5 flex size-7 items-center justify-center rounded-full bg-white/90 text-[#0f172a] shadow-xs">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </div>
            </div>
            <div className="p-5">
              <h3 className="text-[16px] font-bold text-[#0f172a]">Surplus Exchange</h3>
              <p className="mt-1 text-[12.5px] leading-relaxed text-[#556987]">
                The governed participation layer connecting verified buyers with seller-approved opportunities.
              </p>
              <div className="mt-4 pt-2">
                <Link
                  href="/solution-surplus-network"
                  className="inline-flex items-center gap-1.5 text-[12.5px] font-bold text-[#926016]"
                >
                  <span>Explore Surplus Exchange</span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="overflow-hidden rounded-[20px] border border-[#eef2f6] bg-white shadow-[0_2px_12px_rgba(15,23,42,0.03)]">
            <div className="relative aspect-[16/10] w-full">
              <Image
                src="/images/become-a-verified-buyer/vb19.jpg"
                alt="Private Marketplaces"
                fill
                sizes="100vw"
                className="object-cover"
              />
              <div className="absolute top-3.5 right-3.5 flex size-7 items-center justify-center rounded-full bg-white/90 text-[#0f172a] shadow-xs">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </div>
            </div>
            <div className="p-5">
              <h3 className="text-[16px] font-bold text-[#0f172a]">Private Marketplaces</h3>
              <p className="mt-1 text-[12.5px] leading-relaxed text-[#556987]">
                How seller-controlled, eligibility-gated private audiences work.
              </p>
              <div className="mt-4 pt-2">
                <Link
                  href="/solution-private-marketplaces"
                  className="inline-flex items-center gap-1.5 text-[12.5px] font-bold text-[#926016]"
                >
                  <span>Explore Private Marketplaces</span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="overflow-hidden rounded-[20px] border border-[#eef2f6] bg-white shadow-[0_2px_12px_rgba(15,23,42,0.03)]">
            <div className="relative aspect-[16/10] w-full">
              <Image
                src="/images/become-a-verified-buyer/vb20.jpg"
                alt="Offers & Transactions"
                fill
                sizes="100vw"
                className="object-cover"
              />
              <div className="absolute top-3.5 right-3.5 flex size-7 items-center justify-center rounded-full bg-white/90 text-[#0f172a] shadow-xs">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </div>
            </div>
            <div className="p-5">
              <h3 className="text-[16px] font-bold text-[#0f172a]">Offers &amp; Transactions</h3>
              <p className="mt-1 text-[12.5px] leading-relaxed text-[#556987]">
                How governed offers and documented outcomes work where enabled.
              </p>
              <div className="mt-4 pt-2">
                <Link
                  href="/solution-offers-and-transactions"
                  className="inline-flex items-center gap-1.5 text-[12.5px] font-bold text-[#926016]"
                >
                  <span>Explore Offers &amp; Transactions</span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
