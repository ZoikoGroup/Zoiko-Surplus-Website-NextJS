import Image from "next/image";
import Link from "next/link";

const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

const gates = [
  {
    title: "Verify (KYB)",
    description:
      "Identity, role and eligibility are checked for the categories and markets you asked about. A verified organization is not an authorized transaction.",
  },
  {
    title: "Trade permission",
    description:
      "Offers and transactions depend on market, category and corridor approval.",
  },
  {
    title: "Seller invitation",
    description:
      "Where a seller approves your profile, you receive invitations to specific private markets you are permitted to see.",
  },
  {
    title: "Apply",
    description:
      "Tell us about your organization and the categories and markets you buy in. This begins a review. It is not an account.",
  },
];

export default function ParticipationQualification() {
  return (
    <section
      id="participation-qualification"
      aria-labelledby="participation-qualification-heading"
      className={`${hanken} w-full bg-[#fbfaf7]`}
    >
      {/* ========================================================
          DESKTOP VIEW (strictly preserved for desktop layout)
         ======================================================== */}
      <div className="hidden md:block">
        <div className="mx-auto w-full max-w-[1380px] px-6 py-20 md:px-8 md:py-24">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className={`${sora} text-[13px] font-extrabold tracking-[0.14em] text-[#0f172a]`}>07</span>
            <span aria-hidden="true" className="h-[1.5px] w-9 bg-[#926016]" />
            <span className={`${sora} text-[11.5px] font-bold tracking-[0.16em] text-[#926016] uppercase`}>
              PARTICIPATION QUALIFICATION
            </span>
          </div>

          {/* Heading */}
          <h2
            id="participation-qualification-heading"
            className="mt-3.5 text-[36px] font-extrabold leading-[1.12] tracking-[-0.025em] text-[#0c1e38] sm:text-[42px] lg:text-[46px]"
          >
            Verified is not the same as
            <br />
            authorized.
          </h2>

          {/* Subtitle */}
          <p className="mt-3.5 max-w-[600px] text-[15px] leading-relaxed text-[#556987] sm:text-[16px]">
            Business checks, market eligibility and seller authorization are separate gates. Passing one does not open the next.
          </p>

          {/* Feature Visual (soa17.png) */}
          <div className="relative mt-10 aspect-[16/8] w-full overflow-hidden rounded-[22px] bg-slate-200 shadow-[0_12px_34px_rgba(12,30,56,0.08)] sm:aspect-[16/7.5]">
            <Image
              src="/images/Zoiko-Surplus-Our-Approach/soa17.png"
              alt="Quality and compliance inspectors verifying warehouse inventory documentation"
              fill
              sizes="(max-width: 1380px) 100vw, 1380px"
              className="object-cover"
            />
            <div className="absolute bottom-4 left-4">
              <span className="inline-flex items-center rounded-full bg-white/95 px-3.5 py-1.5 text-[11px] font-semibold text-[#0c1e38] shadow-sm backdrop-blur-xs">
                Illustrative imagery
              </span>
            </div>
          </div>

          {/* Four Separate Gates Panel */}
          <div className="mt-6 rounded-[22px] border border-slate-200/80 bg-white p-7 shadow-2xs sm:p-9">
            <h3 className="text-[22px] font-extrabold text-[#0c1e38]">
              Four separate gates
            </h3>

            {/* 4 Cream Sub-cards */}
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {gates.map((gate) => (
                <div key={gate.title} className="rounded-[12px] bg-[#fbf4e6] p-5">
                  <h4 className="text-[13.5px] font-extrabold text-[#0c1e38]">
                    {gate.title}
                  </h4>
                  <p className="mt-2 text-[12px] leading-relaxed text-[#6b583f]">
                    {gate.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Inline Disclosure Notice */}
            <div className="mt-5 inline-flex max-w-[660px] rounded-[10px] border border-[#f3e4c6] bg-[#fdf9ef] px-4 py-3 text-[11.5px] leading-relaxed text-[#7c5c2b]">
              Applying does not guarantee approval or immediate access. Choosing a language or region changes what you read, not what you may trade.
            </div>

            {/* Primary CTA Button */}
            <div className="mt-5">
              <Link
                href="/become-a-verified-buyer"
                className="inline-flex h-[44px] items-center justify-center gap-2 rounded-full bg-[#926016] px-6 text-[13px] font-bold text-white shadow-xs transition-colors hover:bg-[#784f12]"
              >
                <span>Become a Verified Buyer</span>
                <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================
          MOBILE VIEW (dedicated pixel-perfect mobile phase)
         ======================================================== */}
      <div className="block md:hidden border-t border-slate-100 bg-[#fbfaf7]">
        <div className="w-full px-5 py-9">
          <p className={`${sora} text-[10px] font-extrabold tracking-[0.16em] text-[#926016] uppercase`}>
            PARTICIPATION QUALIFICATION
          </p>

          <h2 className="mt-2.5 text-[24px] font-extrabold leading-[1.16] tracking-[-0.025em] text-[#0c1e38]">
            Verified is not the same as authorized.
          </h2>

          <p className="mt-2.5 text-[13px] leading-relaxed text-[#556987]">
            Business checks, market eligibility and seller authorization are separate gates. Passing one does not open the next.
          </p>

          {/* Visual Banner (soa39.jpg) */}
          <div className="relative mt-6 aspect-[16/10] w-full overflow-hidden rounded-[18px] bg-slate-200 shadow-xs">
            <Image
              src="/images/Zoiko-Surplus-Our-Approach/soa39.jpg"
              alt="Inspectors checking warehouse shelf cartons and compliance documents"
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute bottom-3 left-3">
              <span className="inline-flex items-center rounded-full bg-white/95 px-3 py-1 text-[10px] font-semibold text-[#0c1e38] shadow-xs backdrop-blur-xs">
                Illustrative imagery
              </span>
            </div>
          </div>

          {/* Four Separate Gates White Card */}
          <div className="mt-5 rounded-[20px] border border-slate-200/80 bg-white p-5 shadow-2xs">
            <h3 className="text-[18px] font-extrabold text-[#0c1e38]">
              Four separate gates
            </h3>

            <div className="mt-5 flex flex-col gap-4">
              {[
                {
                  title: "Apply",
                  description:
                    "Tell us about your organization and the categories and markets you buy in. This begins a review. It is not an account.",
                },
                {
                  title: "Verify (KYB)",
                  description:
                    "Identity, role and eligibility are checked for the categories and markets you asked about. A verified organization is not an authorized transaction.",
                },
                {
                  title: "Seller invitation",
                  description:
                    "Where a seller approves your profile, you receive invitations to specific private markets you are permitted to see.",
                },
                {
                  title: "Trade permission",
                  description:
                    "Offers and transactions depend on market, category and corridor approval.",
                },
              ].map((gate, i) => (
                <div key={gate.title} className="flex items-start gap-3">
                  <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full border border-[#009b72]/35 bg-[#fbf4e6] text-[11px] font-bold text-[#926016]">
                    {i + 1}
                  </span>
                  <div className="min-w-0 flex-1">
                    <h4 className="text-[13.5px] font-extrabold text-[#0c1e38]">
                      {gate.title}
                    </h4>
                    <p className="mt-1 text-[12px] leading-relaxed text-[#556987]">
                      {gate.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Inline Disclosure Notice */}
            <div className="mt-5 rounded-[10px] border border-[#f3e4c6] bg-[#fdf9ef] p-3.5 text-[11.5px] leading-relaxed text-[#7c5c2b]">
              Applying does not guarantee approval or immediate access. Choosing a language or region changes what you read, not what you may trade.
            </div>

            {/* CTA Button */}
            <div className="mt-4">
              <Link
                href="/become-a-verified-buyer"
                className="inline-flex h-[44px] w-full items-center justify-center gap-2 rounded-full bg-[#926016] px-6 text-[13px] font-bold text-white shadow-xs"
              >
                <span>Become a Verified Buyer</span>
                <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
