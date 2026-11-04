import Image from "next/image";

const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

type ParticipantCard = {
  id: string;
  title: string;
  description: string;
  desktopImage: string;
  mobileImage: string;
  alt: string;
  icon: React.ReactNode;
};

const participants: ParticipantCard[] = [
  {
    id: "seller",
    title: "Seller",
    description: "Sets commercial rules, reviews offers and decides what to accept.",
    desktopImage: "/images/solution-offers-and-transactions/oat2.png",
    mobileImage: "/images/solution-offers-and-transactions/oat10.jpg",
    alt: "Seller managing inventory and commercial surplus terms",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0f172a" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
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
    id: "buyer",
    title: "Verified buyer",
    description: "Makes offers only within audiences and opportunities they're entitled to.",
    desktopImage: "/images/solution-offers-and-transactions/oat3.jpg",
    mobileImage: "/images/solution-offers-and-transactions/oat11.jpg",
    alt: "Verified buyer reviewing marketplace opportunities",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0f172a" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
  },
  {
    id: "provider",
    title: "Authorized providers",
    description: "Payment, logistics and other roles performed by separately contracted parties, where enabled.",
    desktopImage: "/images/solution-offers-and-transactions/oat4.png",
    mobileImage: "/images/solution-offers-and-transactions/oat12.jpg",
    alt: "Authorized logistics and inspection provider signing digital manifest",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0f172a" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
  },
];

export default function WhoMayParticipate() {
  return (
    <section aria-labelledby="who-may-participate-heading" className={`${hanken} w-full bg-white`}>
      {/* ========================================================
          DESKTOP VIEW (hidden on mobile, unchanged desktop layout)
         ======================================================== */}
      <div className="hidden md:block">
        <div className="mx-auto w-full max-w-[1380px] px-8 pt-16 pb-28">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className={`${sora} text-[13px] font-extrabold tracking-[0.14em] text-[#0f172a]`}>02</span>
            <span aria-hidden="true" className="h-[1.5px] w-9 bg-[#926016]" />
            <span className={`${sora} text-[11.5px] font-bold tracking-[0.16em] text-[#926016] uppercase`}>
              WHO MAY PARTICIPATE
            </span>
          </div>

          {/* Heading */}
          <h2
            id="who-may-participate-heading"
            className="mt-3.5 text-[32px] font-extrabold tracking-[-0.02em] text-[#0f172a] sm:text-[38px] lg:text-[42px]"
          >
            Sellers, verified buyers and
            <br />
            authorized providers.
          </h2>

          {/* Subtitle */}
          <p className="mt-3 max-w-[660px] text-[15px] leading-relaxed text-[#556987] sm:text-[16px]">
            Each role is distinct. Buyers never see or do more than their entitlement allows, and operational roles sit with separately contracted parties.
          </p>

          {/* 3-Column Image Cards */}
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {participants.map((item) => (
              <div
                key={item.id}
                className="flex flex-col overflow-hidden rounded-[20px] border border-[#eef2f6] bg-white shadow-[0_2px_12px_rgba(15,23,42,0.03)] transition-all hover:border-[#e2e8f0] hover:shadow-[0_8px_24px_rgba(15,23,42,0.06)]"
              >
                {/* Card Image with Floating Icon */}
                <div className="relative h-[220px] w-full overflow-hidden bg-slate-100">
                  <Image
                    src={item.desktopImage}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />

                  {/* Floating badge */}
                  <div className="absolute bottom-3 left-3 z-10 flex size-8 items-center justify-center rounded-[10px] border border-white/80 bg-white/95 shadow-md backdrop-blur-xs">
                    {item.icon}
                  </div>
                </div>

                {/* Card Text */}
                <div className="p-6">
                  <h3 className="text-[16px] font-bold text-[#0f172a]">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-[13px] leading-[1.6] text-[#556987]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ========================================================
          MOBILE VIEW (visible only on mobile)
         ======================================================== */}
      <div className="block md:hidden px-4 pt-8 pb-10">
        {/* Eyebrow */}
        <div className="flex items-center gap-2">
          <span className={`${sora} text-[11px] font-extrabold tracking-[0.14em] text-[#0f172a]`}>02</span>
          <span aria-hidden="true" className="h-[1.5px] w-6 bg-[#009b72]" />
          <span className={`${sora} text-[9.5px] font-bold tracking-[0.16em] text-[#009b72] uppercase`}>
            WHO MAY PARTICIPATE
          </span>
        </div>

        {/* Heading */}
        <h2 className="mt-2.5 text-[24px] font-extrabold leading-[1.2] tracking-[-0.02em] text-[#0f172a]">
          Sellers, verified buyers and authorized providers.
        </h2>

        {/* Subtitle */}
        <p className="mt-2 text-[12.5px] leading-[1.55] text-[#556987]">
          Each role is distinct. Buyers never see or do more than their entitlement allows, and operational roles sit with separately contracted parties.
        </p>

        {/* 3 Single-Column Cards */}
        <div className="mt-6 flex flex-col gap-4">
          {participants.map((item) => (
            <div
              key={item.id}
              className="overflow-hidden rounded-[18px] border border-[#e8edf2] bg-white shadow-sm"
            >
              <div className="relative h-[180px] w-full bg-slate-100">
                <Image
                  src={item.mobileImage}
                  alt={item.alt}
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-3 left-3 z-10 flex size-7 items-center justify-center rounded-[8px] border border-white/80 bg-white/95 shadow-sm">
                  {item.icon}
                </div>
              </div>

              <div className="p-4">
                <h3 className="text-[14.5px] font-bold text-[#0f172a]">
                  {item.title}
                </h3>
                <p className="mt-1 text-[11.5px] leading-[1.5] text-[#556987]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
