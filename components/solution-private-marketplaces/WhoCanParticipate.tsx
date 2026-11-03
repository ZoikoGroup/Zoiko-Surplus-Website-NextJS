import Image from "next/image";

const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

type ParticipantRole = {
  id: string;
  title: string;
  description: string;
  desktopImage: string;
  mobileImage: string;
  alt: string;
  icon: React.ReactNode;
};

const roles: ParticipantRole[] = [
  {
    id: "seller",
    title: "Seller",
    description: "Defines the private market, approves audiences and sets the commercial rules.",
    desktopImage: "/images/solution-private-marketplaces/spm2.png",
    mobileImage: "/images/solution-private-marketplaces/spm13.jpg",
    alt: "Seller reviewing merchandise and setting commercial marketplace rules",
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
    id: "applicant",
    title: "Applicant",
    description: "An organization that has applied and is under review — not yet verified or entitled.",
    desktopImage: "/images/solution-private-marketplaces/spm3.png",
    mobileImage: "/images/solution-private-marketplaces/spm14.jpg",
    alt: "Applicant organization under verification review",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0f172a" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
  },
  {
    id: "verified-buyer",
    title: "Verified buyer",
    description: "An organization that passed checks — eligible to be invited, but not automatically shown anything.",
    desktopImage: "/images/solution-private-marketplaces/spm4.jpg",
    mobileImage: "/images/solution-private-marketplaces/spm15.jpg",
    alt: "Verified business buyer partnership and authorization",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0f172a" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
  },
  {
    id: "reviewer",
    title: "Reviewer",
    description: "Applies policy and governance decisions before access is granted.",
    desktopImage: "/images/solution-private-marketplaces/spm5.png",
    mobileImage: "/images/solution-private-marketplaces/spm16.jpg",
    alt: "Reviewer assessing policy and governance decisions",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0f172a" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
];

export default function WhoCanParticipate() {
  return (
    <section id="who-can-participate" aria-labelledby="who-can-participate-heading" className={`${hanken} w-full`}>
      {/* ========================================================
          DESKTOP VIEW (hidden on mobile, unchanged desktop layout)
         ======================================================== */}
      <div className="hidden md:block bg-white">
        <div className="mx-auto w-full max-w-[1380px] px-6 pt-10 pb-20 md:px-8 md:pt-16 md:pb-28">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className={`${sora} text-[13px] font-extrabold tracking-[0.14em] text-[#0f172a]`}>02</span>
            <span aria-hidden="true" className="h-[1.5px] w-9 bg-[#926016]" />
            <span className={`${sora} text-[11.5px] font-bold tracking-[0.16em] text-[#926016] uppercase`}>
              WHO CAN PARTICIPATE
            </span>
          </div>

          {/* Heading */}
          <h2
            id="who-can-participate-heading"
            className="mt-3.5 text-[32px] font-extrabold tracking-[-0.02em] text-[#0f172a] sm:text-[38px] lg:text-[42px]"
          >
            Four distinct roles kept separate.
          </h2>

          {/* Subtitle */}
          <p className="mt-3 max-w-[680px] text-[15px] leading-relaxed text-[#556987] sm:text-[16px]">
            Seller, applicant, verified buyer and reviewer are different states with different permissions. One never collapses into another.
          </p>

          {/* 4-Column Role Cards */}
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {roles.map((item) => (
              <div
                key={item.id}
                className="flex flex-col overflow-hidden rounded-[20px] border border-[#eef2f6] bg-white shadow-[0_2px_12px_rgba(15,23,42,0.03)] transition-all hover:border-[#e2e8f0] hover:shadow-[0_8px_24px_rgba(15,23,42,0.06)]"
              >
                {/* Card Photo with Floating Badge */}
                <div className="relative h-[200px] w-full overflow-hidden bg-slate-100">
                  <Image
                    src={item.desktopImage}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover"
                  />

                  <div className="absolute bottom-3 left-3 z-10 flex size-8 items-center justify-center rounded-[10px] border border-white/80 bg-white/95 shadow-md backdrop-blur-xs">
                    {item.icon}
                  </div>
                </div>

                {/* Card Text */}
                <div className="p-5">
                  <h3 className="text-[15.5px] font-bold text-[#0f172a]">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-[12.5px] leading-[1.6] text-[#556987]">
                    {item.description}
                  </p>
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
          <span className={`${sora} text-[12px] font-extrabold tracking-[0.14em] text-[#0f172a]`}>02</span>
          <span aria-hidden="true" className="h-[1.5px] w-7 bg-[#009b72]" />
          <span className={`${sora} text-[10.5px] font-bold tracking-[0.16em] text-[#009b72] uppercase`}>
            WHO CAN PARTICIPATE
          </span>
        </div>

        {/* Heading */}
        <h2 className="mt-3.5 text-[28px] font-extrabold leading-[1.18] tracking-[-0.02em] text-[#0f172a]">
          Four distinct roles —
          <br />
          kept separate.
        </h2>

        {/* Subtitle */}
        <p className="mt-3 text-[14px] leading-relaxed text-[#556987]">
          Seller, applicant, verified buyer and reviewer are different states with different permissions. One never collapses into another.
        </p>

        {/* 4 Mobile Cards Stack */}
        <div className="mt-7 flex flex-col gap-5">
          {roles.map((item) => (
            <div
              key={item.id}
              className="flex flex-col overflow-hidden rounded-[20px] border border-[#eef2f6] bg-white shadow-[0_2px_12px_rgba(15,23,42,0.04)]"
            >
              {/* Photo */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                <Image
                  src={item.mobileImage}
                  alt={item.alt}
                  fill
                  sizes="100vw"
                  className="object-cover"
                />

                <div className="absolute bottom-3 left-3 z-10 flex size-8 items-center justify-center rounded-[10px] border border-white/80 bg-white/95 shadow-md">
                  {item.icon}
                </div>
              </div>

              {/* Text */}
              <div className="p-5">
                <h3 className="text-[15.5px] font-bold text-[#0f172a]">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-[12.5px] leading-relaxed text-[#556987]">
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
