import Image from "next/image";
import Link from "next/link";

const steps = [
  {
    n: 1,
    title: "Apply",
    mobile: ["Tell us about your organization and", "the categories and markets you buy", "in. This begins a review — it is not", "an account."],
    desktop: ["Tell us about your organization and the categories and markets you buy in.", "This begins a review — it is not an account."],
  },
  {
    n: 2,
    title: "Verify",
    mobile: ["We check identity, role and", "eligibility relevant to the", "categories and markets you have", "asked about."],
    desktop: ["We check identity, role and eligibility relevant to the categories and markets you have asked about."],
  },
  {
    n: 3,
    title: "Receive approved invitations",
    mobile: ["Where a seller approves your", "profile, you receive invitations to", "specific private markets you are", "permitted to see."],
    desktop: ["Where a seller approves your profile, you receive invitations to specific private markets you are permitted to see."],
  },
];

function Lines({ lines, className }: { lines: string[]; className: string }) {
  return (
    <p className={className}>
      {lines.map((l, i) => (
        <span key={l}>
          {i > 0 && <br />}
          {l}
        </span>
      ))}
    </p>
  );
}

export default function BuyerPathway() {
  return (
    <section className="w-full bg-white pt-[144px] pb-[72px] font-[family-name:var(--font-sora)] md:bg-[#fcfcff] md:px-20 md:py-[122.4px]">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-7 px-[22px] md:gap-14 md:px-20">
        <div className="flex max-w-[853px] flex-col gap-3 pt-[3.5px] md:max-w-none md:gap-4 md:pt-[5.5px]">
          <p className="text-xs leading-[19.2px] font-semibold tracking-[1.68px] text-[#926016] uppercase md:hidden">
            For verified buyers
          </p>
          <div className="hidden h-[21px] items-center gap-[7px] md:my-2 md:flex">
            <span className="w-[22px] text-[13px] leading-[20.8px] font-black tracking-[1.82px] text-[#1e2126]">06</span>
            <span className="h-0.5 w-[46px] bg-[#d3dde8]" />
            <span className="ml-[0.5px] text-xs leading-[19.2px] font-semibold tracking-[1.68px] text-[#926016] uppercase">
              <span className="text-[#4f647a] capitalize">For </span>verified buyers
            </span>
          </div>
          <h2 className="pt-[0.965px] text-[28.2px] leading-[31.55px] font-semibold tracking-[-0.423px] text-[#0c2140] md:w-[908px] md:max-w-full md:pt-[2px] md:text-[44px] md:leading-[49.28px] md:tracking-[-0.66px] md:text-[#1e2126] md:whitespace-nowrap">
            Relevant inventory.
            <br className="md:hidden" /> Permissioned access.
          </h2>
          <p className="text-[17.6px] leading-[28.1px] text-[#4f647a] md:hidden">
            Access is built for qualified
            <br /> professional organizations and is
            <br /> granted in stages — never by simply
            <br /> visiting a public page.
          </p>
          <p className="hidden w-[901px] max-w-full text-xl leading-[33.6px] text-[#4f647a] md:block">
            Access is built for qualified professional organizations and is granted in stages never by
            <br /> simply visiting a public page.
          </p>
        </div>

        <ol className="flex flex-col gap-[22px] pt-5 md:gap-8 md:pt-0">
          {steps.map((s) => (
            <li
              key={s.n}
              className="flex flex-col items-start gap-2 rounded-xl border border-[#d3dde8] bg-white px-7 py-[30px] md:flex-row md:justify-between md:gap-6"
            >
              <div className="flex w-full flex-col items-start gap-2 md:w-[336px] md:shrink-0 md:flex-row md:items-center md:gap-3">
                <span className="flex w-[42px] items-center justify-center rounded-xl bg-[#f5e7c9] pt-[6.42px] pb-[6.58px] text-[17.6px] leading-[28.16px] font-bold text-[#845212]">
                  {s.n}
                </span>
                <h3 className="w-full pt-[5px] text-[19px] leading-[23.18px] font-semibold tracking-[-0.19px] text-[#0c2140] md:pt-0 md:text-[#1e2126]">
                  {s.title}
                </h3>
              </div>
              <Lines lines={s.mobile} className="text-[16.1px] leading-[25.7px] text-[#4f647a] md:hidden" />
              <Lines
                lines={s.desktop}
                className="hidden max-w-[674px] flex-1 text-lg leading-[28.72px] text-[#4f647a] md:block"
              />
            </li>
          ))}
        </ol>

        <div className="flex flex-col items-start justify-center gap-3.5">
          <Link
            href="#"
            className="inline-flex min-h-12 items-center justify-center gap-[7.5px] rounded-full border border-transparent bg-[#0c2140] px-[26px] pt-[13.5px] pb-3.5 text-[15px] leading-[18px] font-semibold whitespace-nowrap text-white md:bg-[#926016]"
          >
            Apply as a Verified Buyer
            <Image src="/images/home/buyer-pathway/icon-arrow-right.svg" alt="" width={18} height={18} />
          </Link>
          <p className="text-[13px] leading-[20.8px] text-[#4f647a]">
            Participation is for qualified professional
            <br className="md:hidden" /> organizations. Applying does not guarantee
            <br className="md:hidden" /> approval or immediate access.
          </p>
        </div>
      </div>
    </section>
  );
}
