import Image from "next/image";

const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

const parties = [
  {
    tag: "PARTY 1",
    title: "Seller",
    image: "/images/For-Enterprise-Sellers/fes20.png",
    alt: "Enterprise seller reviewing retail goods in store",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0c1e38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
        <line x1="3" y1="6" x2="21" y2="6" />
      </svg>
    ),
  },
  {
    tag: "PARTY 2",
    title: "Buyer",
    image: "/images/For-Enterprise-Sellers/fes21.png",
    alt: "Verified business buyer assessing lot merchandise",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0c1e38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="21" r="1" />
        <circle cx="20" cy="21" r="1" />
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
      </svg>
    ),
  },
  {
    tag: "PARTY 3",
    title: "Third-party partner",
    image: "/images/For-Enterprise-Sellers/fes22.png",
    alt: "Permitted logistics partners shaking hands in warehouse",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0c1e38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" />
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
  },
  {
    tag: "PARTY 4",
    title: "Payment provider",
    image: "/images/For-Enterprise-Sellers/fes24.png",
    alt: "Secure escrow and financial settlement processing",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0c1e38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
        <line x1="1" y1="10" x2="23" y2="10" />
      </svg>
    ),
  },
];

const partyDescriptions: Record<string, string> = {
  Seller: "Owns, holds and describes stock. Approves destination markets and pricing.",
  Buyer: "Verified business buyer purchasing for permitted commercial resale or redistribution.",
  "Third-party partner": "Performs approved collection, inspection, staging, transport or secure destruction.",
  "Payment provider": "Settles funds under applicable statutory and banking covenants, escrow or direct terms.",
};

export default function RolesAndResponsibility() {
  return (
    <section aria-label="Roles and Responsibility - Different parties. Different duties." className={`${hanken} w-full bg-white`}>
      {/* ========================================================
          DESKTOP VIEW (strictly preserved for desktop layout)
         ======================================================== */}
      <div className="hidden md:block">
        <div className="mx-auto w-full max-w-[1380px] px-6 py-16 md:px-8 md:py-20">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className="text-[13px] font-bold text-[#0c1e38]">08</span>
            <span className="h-[1px] w-8 bg-[#926016]/50"></span>
            <span className="text-[11.5px] font-bold tracking-[0.14em] text-[#926016] uppercase">
              ROLES AND RESPONSIBILITY
            </span>
          </div>

          {/* Heading & Subtitle */}
          <h2 className={`${sora} mt-4 text-[34px] lg:text-[40px] font-bold tracking-[-0.025em] text-[#0c1e38]`}>
            Different parties. Different duties.
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-[#556987]">
            Zoiko Surplus coordinates governance. It does not own your stock, run a fleet or hold funds by default.
          </p>

          {/* 4 Cards Grid with Photo Backgrounds & Overlays */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {parties.map((item) => (
              <div
                key={item.tag}
                className="group relative aspect-[4/5] min-h-[300px] w-full overflow-hidden rounded-2xl bg-slate-900 shadow-sm transition-all duration-300 hover:shadow-md"
              >
                {/* Background Photo */}
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#081321]/95 via-[#081321]/50 to-transparent" />

                {/* Floating Top-Right Circular Badge */}
                <div className="absolute top-3.5 right-3.5 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 shadow-sm backdrop-blur-[2px]">
                  {item.icon}
                </div>

                {/* Bottom Overlay Content */}
                <div className="absolute inset-x-0 bottom-0 z-10 p-5 flex flex-col justify-end">
                  <span className="text-[10px] font-bold tracking-[0.12em] text-[#10b981] uppercase">
                    {item.tag}
                  </span>
                  <h3 className={`${sora} mt-1 text-[20px] font-bold tracking-tight text-white`}>
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Warning Alert Banner */}
          <div className="mt-6 flex items-center gap-2.5 rounded-xl border border-[#fdecd0] bg-[#fffbf0] px-4 py-3 text-[#926016]">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            <span className="text-[12.5px] font-medium">
              A final legal-party matrix must be approved before any transaction-specific promise appears here.
            </span>
          </div>
        </div>
      </div>

      {/* ========================================================
          MOBILE VIEW
         ======================================================== */}
      <div className="block md:hidden">
        <div className="px-5 py-12">
          {/* Eyebrow */}
          <div className="text-[10.5px] font-bold tracking-[0.18em] text-[#926016] uppercase">
            ROLES AND RESPONSIBILITY
          </div>

          {/* Heading */}
          <h2 className={`${sora} mt-2 text-[26px] font-bold leading-tight tracking-[-0.02em] text-[#0c1e38]`}>
            Different parties. Different duties.
          </h2>
          <p className="mt-2 text-[13px] leading-relaxed text-[#556987]">
            Zoiko Surplus coordinates governance. It does not own your stock, run a fleet or hold funds by default.
          </p>

          {/* 4 Cards Stacked */}
          <div className="mt-6 space-y-3.5">
            {parties.map((item) => (
              <div
                key={item.tag}
                className="relative min-h-[175px] w-full overflow-hidden rounded-2xl bg-slate-900 shadow-xs"
              >
                {/* Background Photo */}
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 400px"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#081321]/95 via-[#081321]/65 to-[#081321]/30" />

                {/* Top-Right Badge */}
                <div className="absolute top-3.5 right-3.5 z-10 flex h-7 w-7 items-center justify-center rounded-full bg-white/90 shadow-xs backdrop-blur-[2px]">
                  {item.icon}
                </div>

                {/* Bottom Overlay Content */}
                <div className="absolute inset-x-0 bottom-0 z-10 p-4">
                  <span className="text-[10px] font-bold tracking-[0.12em] text-[#10b981] uppercase">
                    {item.tag}
                  </span>
                  <h3 className={`${sora} mt-0.5 text-[17px] font-bold text-white`}>
                    {item.title}
                  </h3>
                  <p className="mt-1 text-[11.5px] leading-relaxed text-[#cbd5e1]">
                    {partyDescriptions[item.title]}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Warning Alert Banner */}
          <div className="mt-4 flex items-start gap-2.5 rounded-xl border border-[#fdecd0] bg-[#fffbf0] px-3.5 py-3 text-[#926016]">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            <span className="text-[12px] font-medium leading-relaxed">
              A final legal-party matrix must be approved before any transaction-specific promise appears here.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
