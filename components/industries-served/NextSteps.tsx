import Image from "next/image";
import Link from "next/link";

const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

const nextStepCards = [
  {
    tag: "ENTERPRISE SELLER",
    title: "Discuss your category.",
    description:
      "A person from our team responds. There is no quote, automatic enrollment or instant acceptance.",
    image: "/images/Industries-Served/sis16.jpg",
    alt: "Enterprise seller representative inspecting surplus stock",
    ctaLabel: "Request Enterprise Demo",
    href: "/contact",
    primary: true,
    routeHint: "Route: /contact/enterprise",
  },
  {
    tag: "BUSINESS BUYER",
    title: "Apply for verification.",
    description:
      "An application starts a review. It does not grant permission to any market.",
    image: "/images/Industries-Served/sis17.jpg",
    alt: "Verified buyer operations review in distribution warehouse",
    ctaLabel: "Become a Verified Buyer",
    href: "/become-a-verified-buyer",
    primary: false,
    routeHint: "Route: /buyers/apply",
  },
  {
    tag: "LOGISTICS / DISPOSITION PARTNER",
    title: "See handling expectations.",
    description:
      "Explore which pathways may involve qualified third parties. No partner directory or payouts are implied.",
    image: "/images/Industries-Served/sis18.jpg",
    alt: "Logistics network partner reviewing movement documentation",
    ctaLabel: "Explore Surplus Network",
    href: "/solution-surplus-network",
    primary: false,
    routeHint: "Route: /solutions/network",
  },
];

export default function NextSteps() {
  return (
    <section
      id="next-steps"
      aria-labelledby="is-next-steps-heading"
      className={`${hanken} w-full bg-white`}
    >
      {/* ========================================================
          DESKTOP VIEW (strictly preserved for desktop layout)
         ======================================================== */}
      <div className="hidden md:block">
        <div className="mx-auto w-full max-w-[1380px] px-6 py-20 md:px-8 md:py-24">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className={`${sora} text-[13px] font-extrabold tracking-[0.14em] text-[#0f172a]`}>06</span>
            <span aria-hidden="true" className="h-[1.5px] w-9 bg-[#926016]" />
            <span className={`${sora} text-[11.5px] font-bold tracking-[0.16em] text-[#926016] uppercase`}>
              NEXT STEPS
            </span>
          </div>

          {/* Heading */}
          <h2
            id="is-next-steps-heading"
            className="mt-3.5 text-[36px] font-extrabold leading-[1.12] tracking-[-0.025em] text-[#0c1e38] sm:text-[42px] lg:text-[46px]"
          >
            Three separate paths.
            <br />
            None implies access.
          </h2>

          {/* Subtitle */}
          <p className="mt-3.5 max-w-[580px] text-[15px] leading-relaxed text-[#556987] sm:text-[16px]">
            Business buyer verification is a separate process. Access to a seller-controlled market requires additional permission.
          </p>

          {/* 3 Cards Grid */}
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {nextStepCards.map((card) => (
              <div
                key={card.tag}
                className="flex flex-col overflow-hidden rounded-[20px] border border-slate-200/90 bg-white shadow-[0_2px_12px_rgba(0,0,0,0.03)]"
              >
                {/* Photo */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                  <Image
                    src={card.image}
                    alt={card.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>

                {/* Body */}
                <div className="flex flex-1 flex-col justify-between p-6">
                  <div>
                    <span className="inline-flex rounded-[5px] bg-[#fbf4e6] px-2.5 py-1 text-[9.5px] font-bold tracking-[0.08em] text-[#926016] uppercase">
                      {card.tag}
                    </span>

                    <h3 className="mt-3.5 text-[18px] font-extrabold leading-[1.25] text-[#0c1e38]">
                      {card.title}
                    </h3>

                    <p className="mt-2.5 text-[13px] leading-relaxed text-[#556987]">
                      {card.description}
                    </p>
                  </div>

                  <div className="mt-6">
                    <Link
                      href={card.href}
                      className={`inline-flex h-[40px] items-center justify-center rounded-full px-5 text-[12.5px] font-bold transition-colors ${
                        card.primary
                          ? "bg-[#926016] text-white shadow-xs hover:bg-[#784f12]"
                          : "border border-slate-200 bg-white text-[#0c1e38] shadow-2xs hover:bg-slate-50"
                      }`}
                    >
                      {card.ctaLabel}
                    </Link>
                    <p className="mt-3 text-[11px] text-[#94a3b8]">{card.routeHint}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Compliance & Press Bar */}
          <div className="mt-8 flex items-start gap-3 rounded-[14px] border border-slate-200/90 bg-white px-5 py-4 shadow-2xs">
            <div className="flex size-7 shrink-0 items-center justify-center rounded-[7px] bg-[#fbf4e6] text-[#926016]">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
            </div>
            <p className="text-[12px] leading-relaxed text-[#556987]">
              <strong className="font-bold text-[#0c1e38]">Compliance and procurement:</strong> confirm safety, permissions and market-specific controls via your agreements or team.{" "}
              <strong className="font-bold text-[#0c1e38]">Press and researchers:</strong> the sectors here are a proposed taxonomy, not a list of unblocked subregions.
            </p>
          </div>
        </div>
      </div>

      {/* ========================================================
          MOBILE VIEW (dedicated pixel-perfect mobile phase)
         ======================================================== */}
      <div className="block md:hidden border-t border-slate-100 bg-[#fbfaf7]">
        <div className="w-full px-5 py-9">
          <p className={`${sora} text-[10px] font-extrabold tracking-[0.16em] text-[#64748b] uppercase`}>
            NEXT STEPS
          </p>

          <h2 className="mt-2 text-[24px] font-extrabold leading-[1.16] tracking-[-0.025em] text-[#0c1e38]">
            Three separate paths. None implies access.
          </h2>

          <p className="mt-2.5 text-[13px] leading-relaxed text-[#556987]">
            Business buyer verification is a separate process. Access to a seller-controlled market requires additional permission.
          </p>

          {/* 3 Stacked Role Cards (sis34.jpg, sis35.jpg, sis36.jpg) */}
          <div className="mt-6 flex flex-col gap-4">
            {nextStepCards.map((card, idx) => (
              <div
                key={card.tag}
                className="flex flex-col overflow-hidden rounded-[18px] border border-slate-200/90 bg-white shadow-2xs"
              >
                <div className="relative aspect-[16/10] w-full bg-slate-100">
                  <Image
                    src={`/images/Industries-Served/sis${34 + idx}.jpg`}
                    alt={card.alt}
                    fill
                    sizes="100vw"
                    className="object-cover"
                  />
                </div>

                <div className="p-5">
                  <span className="inline-flex rounded-[5px] bg-[#fbf4e6] px-2.5 py-1 text-[9.5px] font-bold tracking-[0.08em] text-[#926016] uppercase">
                    {card.tag}
                  </span>

                  <h3 className="mt-3 text-[17px] font-extrabold leading-[1.25] text-[#0c1e38]">
                    {card.title}
                  </h3>

                  <p className="mt-2 text-[12.5px] leading-relaxed text-[#556987]">
                    {card.description}
                  </p>

                  <div className="mt-5">
                    <Link
                      href={card.href}
                      className={`inline-flex h-[40px] items-center justify-center rounded-full px-5 text-[12px] font-bold ${
                        card.primary
                          ? "bg-[#926016] text-white shadow-xs"
                          : "border border-slate-200 bg-white text-[#0c1e38] shadow-2xs"
                      }`}
                    >
                      {card.ctaLabel}
                    </Link>
                    <p className="mt-2.5 text-[10.5px] text-[#94a3b8]">{card.routeHint}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Compliance and Procurement Notice Card */}
          <div className="mt-5 flex items-start gap-3 rounded-[14px] border border-slate-200/90 bg-white p-4 shadow-2xs">
            <div className="flex size-7 shrink-0 items-center justify-center rounded-[7px] bg-[#fbf4e6] text-[#926016]">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
            </div>
            <p className="text-[11.5px] leading-relaxed text-[#556987]">
              <strong className="font-bold text-[#0c1e38]">Compliance and procurement:</strong> confirm the safety, permissions and market-specific controls with your team.{" "}
              <strong className="font-bold text-[#0c1e38]">Press and researchers:</strong> the sectors here are a proposed taxonomy, not a list of activated subregions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
