import Image from "next/image";

const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

const parties = [
  {
    tag: "PARTY 1",
    title: "Seller",
    image: "/images/How-the-Platform-Works/htpw13.png",
    alt: "Enterprise sellers reviewing inventory baskets",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0c1e38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <path d="M16 10a4 4 0 0 1-8 0" />
      </svg>
    ),
  },
  {
    tag: "PARTY 2",
    title: "Buyer",
    image: "/images/How-the-Platform-Works/htpw14.png",
    alt: "Verified business buyers selecting wholesale inventory",
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
    title: "Service provider",
    image: "/images/How-the-Platform-Works/htpw15.png",
    alt: "Permitted service providers coordinating logistics",
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
    title: "Platform",
    image: "/images/How-the-Platform-Works/htpw16.png",
    alt: "Platform operations team managing governance and workflows",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0c1e38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </svg>
    ),
  },
];

export default function RolesAndCustody() {
  return (
    <section aria-label="Roles and Custody - Four parties, four sets of obligations" className={`${hanken} w-full bg-white`}>
      {/* ========================================================
          DESKTOP VIEW (strictly preserved for desktop layout)
         ======================================================== */}
      <div className="hidden md:block">
        <div className="mx-auto w-full max-w-[1380px] px-6 py-16 md:px-8 md:py-20">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className="text-[13px] font-bold text-[#0c1e38]">06</span>
            <span className="h-[1px] w-8 bg-[#926016]/50"></span>
            <span className="text-[11.5px] font-bold tracking-[0.14em] text-[#926016] uppercase">
              ROLES AND CUSTODY
            </span>
          </div>

          {/* Heading & Subtitle */}
          <h2 className={`${sora} mt-4 text-[34px] lg:text-[40px] font-bold tracking-[-0.025em] text-[#0c1e38]`}>
            Four parties. Four sets of obligations.
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-[#556987]">
            Legal and payment roles come from signed contracts, not from this page.
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
        </div>
      </div>

      {/* ========================================================
          MOBILE VIEW (strictly isolated for mobile layout)
         ======================================================== */}
      <div className="block md:hidden">
        <div className="w-full px-5 py-8">
          {/* Eyebrow */}
          <div className="text-[11px] font-bold tracking-[0.14em] text-[#8a9bb2] uppercase">
            ROLES AND CUSTODY
          </div>

          {/* Heading & Subtitle */}
          <h2 className={`${sora} mt-2 text-[26px] font-bold tracking-[-0.025em] text-[#0c1e38]`}>
            Four parties. Four sets of obligations.
          </h2>
          <p className="mt-2 text-[13.5px] leading-relaxed text-[#556987]">
            Legal and payment roles come from signed contracts, not from this page.
          </p>

          {/* 4 Mobile Cards in a vertical stack */}
          <div className="mt-6 flex flex-col gap-4">
            {/* Party 1: Seller */}
            <div className="group relative aspect-[16/10] min-h-[175px] w-full overflow-hidden rounded-2xl bg-slate-900 shadow-2xs">
              <Image
                src="/images/How-the-Platform-Works/htpw44.jpg"
                alt="Seller party - checking inventory condition"
                fill
                className="object-cover"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#081321]/95 via-[#081321]/50 to-transparent" />
              <div className="absolute top-3 right-3 z-10 flex h-7 w-7 items-center justify-center rounded-full bg-white/90 shadow-xs backdrop-blur-[2px]">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0c1e38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                </svg>
              </div>
              <div className="absolute inset-x-0 bottom-0 z-10 p-5">
                <span className="text-[10px] font-bold tracking-[0.12em] text-[#10b981] uppercase">
                  PARTY 1
                </span>
                <h3 className={`${sora} mt-1 text-[19px] font-bold text-white`}>
                  Seller
                </h3>
                <p className="mt-1 text-[12.5px] leading-relaxed text-[#cbd5e1]">
                  Confirm lot condition, ownership and controls; declare what is offered.
                </p>
              </div>
            </div>

            {/* Party 2: Buyer */}
            <div className="group relative aspect-[16/10] min-h-[175px] w-full overflow-hidden rounded-2xl bg-slate-900 shadow-2xs">
              <Image
                src="/images/How-the-Platform-Works/htpw45.jpg"
                alt="Buyer party - business buyers verifying lots"
                fill
                className="object-cover"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#081321]/95 via-[#081321]/50 to-transparent" />
              <div className="absolute top-3 right-3 z-10 flex h-7 w-7 items-center justify-center rounded-full bg-white/90 shadow-xs backdrop-blur-[2px]">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0c1e38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="9" cy="21" r="1" />
                  <circle cx="20" cy="21" r="1" />
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                </svg>
              </div>
              <div className="absolute inset-x-0 bottom-0 z-10 p-5">
                <span className="text-[10px] font-bold tracking-[0.12em] text-[#10b981] uppercase">
                  PARTY 2
                </span>
                <h3 className={`${sora} mt-1 text-[19px] font-bold text-white`}>
                  Buyer
                </h3>
                <p className="mt-1 text-[12.5px] leading-relaxed text-[#cbd5e1]">
                  Verification, profile and access confirmation: prior to private view or participation.
                </p>
              </div>
            </div>

            {/* Party 3: Service provider */}
            <div className="group relative aspect-[16/10] min-h-[175px] w-full overflow-hidden rounded-2xl bg-slate-900 shadow-2xs">
              <Image
                src="/images/How-the-Platform-Works/htpw46.jpg"
                alt="Service provider party - logistics fleet"
                fill
                className="object-cover"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#081321]/95 via-[#081321]/50 to-transparent" />
              <div className="absolute top-3 right-3 z-10 flex h-7 w-7 items-center justify-center rounded-full bg-white/90 shadow-xs backdrop-blur-[2px]">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0c1e38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="1" y="3" width="15" height="13" />
                  <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
                  <circle cx="5.5" cy="18.5" r="2.5" />
                  <circle cx="18.5" cy="18.5" r="2.5" />
                </svg>
              </div>
              <div className="absolute inset-x-0 bottom-0 z-10 p-5">
                <span className="text-[10px] font-bold tracking-[0.12em] text-[#10b981] uppercase">
                  PARTY 3
                </span>
                <h3 className={`${sora} mt-1 text-[19px] font-bold text-white`}>
                  Service provider
                </h3>
                <p className="mt-1 text-[12.5px] leading-relaxed text-[#cbd5e1]">
                  Facility qualification, equipment and authority prerequisites.
                </p>
              </div>
            </div>

            {/* Party 4: Platform */}
            <div className="group relative aspect-[16/10] min-h-[175px] w-full overflow-hidden rounded-2xl bg-slate-900 shadow-2xs">
              <Image
                src="/images/How-the-Platform-Works/htpw47.jpg"
                alt="Platform party - governance operations team"
                fill
                className="object-cover"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#081321]/95 via-[#081321]/50 to-transparent" />
              <div className="absolute top-3 right-3 z-10 flex h-7 w-7 items-center justify-center rounded-full bg-white/90 shadow-xs backdrop-blur-[2px]">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0c1e38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 2 7 12 12 22 7 12 2" />
                  <polyline points="2 17 12 22 22 17" />
                  <polyline points="2 12 12 17 22 12" />
                </svg>
              </div>
              <div className="absolute inset-x-0 bottom-0 z-10 p-5">
                <span className="text-[10px] font-bold tracking-[0.12em] text-[#10b981] uppercase">
                  PARTY 4
                </span>
                <h3 className={`${sora} mt-1 text-[19px] font-bold text-white`}>
                  Platform
                </h3>
                <p className="mt-1 text-[12.5px] leading-relaxed text-[#cbd5e1]">
                  Audit trail logging, gate checks and dispute resolution execution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
