import Image from "next/image";
import Link from "next/link";

const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

const roles = [
  {
    tag: "ENTERPRISE SELLER",
    title: "Recover value without exposing stock.",
    description:
      "See how seller-private markets and approval boundaries work for your inventory.",
    image: "/images/Zoiko-Surplus-Our-Approach/soa19.jpg",
    alt: "Warehouse operations lead scanning surplus lot for enterprise recovery",
    ctaLabel: "Request Enterprise Demo →",
    href: "/contact",
    primary: true,
    routeHint: "Route: /contact/enterprise",
  },
  {
    tag: "BUSINESS BUYER",
    title: "Apply for qualified access.",
    description:
      "Start a review. Applying does not guarantee approval or immediate access.",
    image: "/images/Zoiko-Surplus-Our-Approach/soa20.jpg",
    alt: "Business buyer team reviewing approved qualification requirements",
    ctaLabel: "Become a Verified Buyer",
    href: "/become-a-verified-buyer",
    primary: false,
    routeHint: "Route: /buyers/apply",
  },
  {
    tag: "DISPOSITION / NETWORK PARTNER",
    title: "Understand the mandate.",
    description:
      "Learn what partners may be asked to do, and the provenance and evidence limits that apply.",
    image: "/images/Zoiko-Surplus-Our-Approach/soa21.jpg",
    alt: "Logistics network partner verifying inventory transfer documentation",
    ctaLabel: "Explore Surplus Network",
    href: "/solution-surplus-network",
    primary: false,
    routeHint: "Route: /solutions/network",
  },
];

export default function RoleJourneys() {
  return (
    <section
      id="role-journeys"
      aria-labelledby="role-journeys-heading"
      className={`${hanken} w-full bg-white`}
    >
      {/* ========================================================
          DESKTOP VIEW (strictly preserved for desktop layout)
         ======================================================== */}
      <div className="hidden md:block">
        <div className="mx-auto w-full max-w-[1380px] px-6 py-20 md:px-8 md:py-24">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className={`${sora} text-[13px] font-extrabold tracking-[0.14em] text-[#0f172a]`}>10</span>
            <span aria-hidden="true" className="h-[1.5px] w-9 bg-[#926016]" />
            <span className={`${sora} text-[11.5px] font-bold tracking-[0.16em] text-[#926016] uppercase`}>
              SELLER, BUYER AND PARTNER JOURNEYS
            </span>
          </div>

          {/* Heading */}
          <h2
            id="role-journeys-heading"
            className="mt-3.5 text-[36px] font-extrabold leading-[1.12] tracking-[-0.025em] text-[#0c1e38] sm:text-[42px] lg:text-[46px]"
          >
            Choose the path that matches your
            <br />
            role.
          </h2>

          {/* Subtitle */}
          <p className="mt-3.5 max-w-[580px] text-[15px] leading-relaxed text-[#556987] sm:text-[16px]">
            Each pathway has its own destination and meaning. Availability is checked before a route is offered.
          </p>

          {/* 3 Role Cards Grid */}
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {roles.map((role) => (
              <div
                key={role.tag}
                className="flex flex-col overflow-hidden rounded-[20px] border border-slate-200/90 bg-white shadow-[0_2px_12px_rgba(0,0,0,0.03)]"
              >
                {/* Photo */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                  <Image
                    src={role.image}
                    alt={role.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>

                {/* Body */}
                <div className="flex flex-1 flex-col justify-between p-6">
                  <div>
                    <span className="inline-flex rounded-[5px] bg-[#fbf4e6] px-2.5 py-1 text-[9.5px] font-bold tracking-[0.08em] text-[#926016] uppercase">
                      {role.tag}
                    </span>

                    <h3 className="mt-3.5 text-[18px] font-extrabold leading-[1.25] text-[#0c1e38]">
                      {role.title}
                    </h3>

                    <p className="mt-2.5 text-[13px] leading-relaxed text-[#556987]">
                      {role.description}
                    </p>
                  </div>

                  <div className="mt-6">
                    <Link
                      href={role.href}
                      className={`inline-flex h-[40px] items-center justify-center rounded-full px-5 text-[12.5px] font-bold transition-colors ${
                        role.primary
                          ? "bg-[#926016] text-white shadow-xs hover:bg-[#784f12]"
                          : "border border-slate-200 bg-white text-[#0c1e38] shadow-2xs hover:bg-slate-50"
                      }`}
                    >
                      {role.ctaLabel}
                    </Link>
                    <p className="mt-3 text-[11px] text-[#94a3b8]">{role.routeHint}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Legal / Press Bar */}
          <div className="mt-8 flex items-start gap-3 rounded-[14px] border border-slate-200/90 bg-white px-5 py-4 shadow-2xs">
            <div className="flex size-7 shrink-0 items-center justify-center rounded-[7px] bg-[#fbf4e6] text-[#926016]">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <p className="text-[12px] leading-relaxed text-[#556987]">
              <strong className="font-bold text-[#0c1e38]">Legal and procurement:</strong> review approved policy pages separately to distinguish proposed controls from contracted service obligations.{" "}
              <strong className="font-bold text-[#0c1e38]">Press:</strong> see Company &rarr; Corporate Information for the current operating posture.
            </p>
          </div>
        </div>
      </div>

      {/* ========================================================
          MOBILE VIEW (dedicated pixel-perfect mobile phase)
         ======================================================== */}
      <div className="block md:hidden border-t border-slate-100 bg-[#fbfaf7]">
        <div className="w-full px-5 py-9">
          <p className={`${sora} text-[10px] font-extrabold tracking-[0.16em] text-[#926016] uppercase`}>
            SELLER, BUYER AND PARTNER JOURNEYS
          </p>

          <h2 className="mt-2.5 text-[24px] font-extrabold leading-[1.16] tracking-[-0.025em] text-[#0c1e38]">
            Choose the path that matches your role.
          </h2>

          <p className="mt-2.5 text-[13px] leading-relaxed text-[#556987]">
            Each pathway has its own destination and meaning. Availability is checked before a route is offered.
          </p>

          {/* 3 Stacked Role Cards (soa41.jpg, soa42.jpg, soa43.jpg) */}
          <div className="mt-6 flex flex-col gap-4">
            {roles.map((role, idx) => (
              <div
                key={role.tag}
                className="flex flex-col overflow-hidden rounded-[18px] border border-slate-200/90 bg-white shadow-2xs"
              >
                <div className="relative aspect-[16/10] w-full bg-slate-100">
                  <Image
                    src={`/images/Zoiko-Surplus-Our-Approach/soa${41 + idx}.jpg`}
                    alt={role.alt}
                    fill
                    sizes="100vw"
                    className="object-cover"
                  />
                </div>

                <div className="p-5">
                  <span className="inline-flex rounded-[5px] bg-[#fbf4e6] px-2.5 py-1 text-[9.5px] font-bold tracking-[0.08em] text-[#926016] uppercase">
                    {role.tag}
                  </span>

                  <h3 className="mt-3 text-[17px] font-extrabold leading-[1.25] text-[#0c1e38]">
                    {role.title}
                  </h3>

                  <p className="mt-2 text-[12.5px] leading-relaxed text-[#556987]">
                    {role.description}
                  </p>

                  <div className="mt-5">
                    <Link
                      href={role.href}
                      className={`inline-flex h-[40px] items-center justify-center rounded-full px-5 text-[12px] font-bold ${
                        role.primary
                          ? "bg-[#926016] text-white shadow-xs"
                          : "border border-slate-200 bg-white text-[#0c1e38] shadow-2xs"
                      }`}
                    >
                      {role.primary ? "Request Enterprise Demo" : role.ctaLabel}
                    </Link>
                    <p className="mt-2.5 text-[10.5px] text-[#94a3b8]">{role.routeHint}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Legal / Press Bar */}
          <div className="mt-5 flex items-start gap-3 rounded-[14px] border border-slate-200/90 bg-white p-4 shadow-2xs">
            <div className="flex size-7 shrink-0 items-center justify-center rounded-[7px] bg-[#fbf4e6] text-[#926016]">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <p className="text-[11.5px] leading-relaxed text-[#556987]">
              <strong className="font-bold text-[#0c1e38]">Legal and procurement:</strong> review approved policy pages separately to distinguish proposed controls from contracted service obligations.{" "}
              <strong className="font-bold text-[#0c1e38]">Press:</strong> see Company &rarr; Corporate Information for the current operating posture.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
