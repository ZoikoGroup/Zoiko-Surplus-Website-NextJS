import Image from "next/image";
import Link from "next/link";
import FooterSection from "./FooterSection";
import { footerLegalLinks, footerOffices, footerSections, footerSocials } from "@/lib/footer";

// The design is dark on mobile and light on desktop; the two palettes are swapped through
// these CSS variables so the markup below only has to be written once.
const palette =
  "[--f-head:#fff] [--f-text:#cbc2cb] [--f-note:#a99eaa] [--f-line:rgba(255,255,255,0.12)] [--f-panel:rgba(255,255,255,0.05)] [--f-accent:#f0684f] [--f-dot:rgba(255,255,255,0.22)] " +
  "md:[--f-head:#1e2126] md:[--f-text:#4f647a] md:[--f-note:#1e2126] md:[--f-line:rgba(138,134,144,0.36)] md:[--f-panel:rgba(245,231,201,0.12)] md:[--f-accent:#926016] md:[--f-dot:#845212]";

// Icons carry their colour in the SVG, so each theme has its own file.
function Icon({ name, size }: { name: string; size: number }) {
  return (
    <>
      <Image src={`/images/footer/mobile/${name}.svg`} alt="" width={size} height={size} className="md:hidden" />
      <Image src={`/images/footer/desktop/${name}.svg`} alt="" width={size} height={size} className="hidden md:block" />
    </>
  );
}

export default function Footer() {
  return (
    <footer className="mt-auto bg-linear-to-b from-[#edecee] to-[#f4f3f5] px-4 pt-[39px] pb-10 font-[family-name:var(--font-sora)] md:bg-none md:p-0">
      <div
        className={`${palette} mx-auto overflow-hidden rounded-[28px] bg-[#122340] shadow-[0_30px_80px_-40px_rgba(32,22,40,0.55),0_2px_8px_rgba(32,22,40,0.08)] md:max-w-[1440px] md:rounded-t-[48px] md:rounded-b-none md:bg-[#fcfcff] md:shadow-none`}
      >
        <div className="px-4 pt-10 pb-7 md:px-10 md:py-16 lg:p-24">
          {/* Brand + social */}
          <div className="flex flex-col gap-2.5 border-b border-(--f-line) pb-10 md:flex-row md:justify-between md:gap-10 md:pb-[51px]">
            <div className="flex flex-col gap-2.5 md:max-w-[846px]">
              <Link href="/" aria-label="Zoiko Surplus home" className="w-fit">
                <span className="flex items-center gap-3 md:hidden">
                  <span className="flex size-10 items-center justify-center rounded-[11px] border border-white/[0.22] bg-[#0c2140]">
                    <Image src="/images/footer/mobile/brand-mark.svg" alt="" width={22} height={22} />
                  </span>
                  <span className="text-xl leading-[31px] font-bold tracking-[0.4px] text-white">ZOIKO SURPLUS</span>
                </span>
                <Image
                  src="/images/footer/desktop/logo.png"
                  alt="Zoiko Surplus"
                  width={132}
                  height={47}
                  className="hidden md:block"
                />
              </Link>
              <p className="max-w-[677px] pt-[5px] text-[15.2px] leading-[24.32px] text-(--f-text)">
                A global surplus commerce and disposition platform connecting enterprise supply with verified
                business demand and approved recovery pathways.
              </p>
              <p className="text-[13.6px] leading-[21px] text-(--f-note)">
                Within Zoiko Supply Group Inc., a Zoiko Group company.
              </p>
            </div>

            <div className="flex flex-col gap-2.5 pt-[9px] md:w-[385px] md:shrink-0">
              <p className="pb-[0.84px] text-[11.5px] leading-[17.86px] font-bold tracking-[1.382px] text-(--f-note) uppercase">
                Official channels
              </p>
              <ul className="flex flex-wrap gap-2.5">
                {footerSocials.map((s) => (
                  <li
                    key={s.name}
                    title={s.name}
                    className="flex size-11 items-center justify-center rounded-[11px] border border-(--f-line) bg-(--f-panel)"
                  >
                    <Icon name={s.icon} size={s.size} />
                    <span className="sr-only">{s.name}</span>
                  </li>
                ))}
              </ul>
              <p className="max-w-[410px] text-xs leading-[18px] text-(--f-note)">
                Illustrative. Channels appear as live links only once the official account, URL and brand
                ownership are verified.
              </p>
            </div>
          </div>

          {/* Link columns: accordion on mobile, 6-column grid on desktop */}
          <nav
            aria-label="Footer"
            className="pt-3 pb-7 md:grid md:grid-cols-3 md:gap-x-6 md:gap-y-[34px] md:py-10 lg:grid-cols-6"
          >
            {footerSections.map((section, i) => (
              <FooterSection key={section.title} section={section} id={`footer-section-${i}`} />
            ))}
          </nav>

          {/* Offices */}
          <div className="flex flex-col gap-4 border-t border-(--f-line) py-9">
            <div className="flex flex-col gap-4 md:grid md:grid-cols-2">
              {footerOffices.map((office) => (
                <div
                  key={office.label}
                  className="flex flex-col gap-[11.3px] rounded-[14px] border border-(--f-line) bg-(--f-panel) px-[22px] pt-[20.58px] pb-[21.3px]"
                >
                  <div className="flex items-center gap-[9px]">
                    <Icon name="office" size={15} />
                    <p className="text-[11.5px] leading-[17.86px] font-bold tracking-[1.152px] text-(--f-accent) uppercase">
                      {office.label}
                    </p>
                  </div>
                  <address className="pb-[0.6px] text-[15.2px] leading-[24.32px] text-(--f-head) not-italic">
                    {office.lines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </address>
                  <Link href="#" className="flex w-fit items-center gap-1.5 text-[13.6px] leading-[21px] font-semibold text-(--f-text)">
                    Corporate information
                    <Icon name="arrow-right" size={14} />
                  </Link>
                </div>
              ))}
            </div>
            <div className="flex gap-[9px] pt-1.5 md:max-w-[720px]">
              <span className="mt-px shrink-0">
                <Icon name="info" size={15} />
              </span>
              <p className="text-[12.5px] leading-[18.72px] text-(--f-note)">
                Proposed display addresses — entity association and “Headquarters” labels are pending Corporate
                Legal verification. “European Headquarters” is a corporate label and does not by itself indicate
                an EU establishment, UK registration or regulatory license.
              </p>
            </div>
          </div>

          {/* Legal rail */}
          <div className="flex flex-col gap-[18px] border-t border-(--f-line) pt-7 pb-1">
            <p className="max-w-[1046px] text-[12.8px] leading-[20.48px] text-(--f-note)">
              Market availability, product eligibility and trading rights vary by jurisdiction, category, parties
              and approved transaction corridor. Terms and participating legal entities are identified in the
              applicable agreement. Zoiko Surplus provides orchestration, governance and exchange infrastructure —
              it is not the owner of listed goods, the default contracting seller, a warehouse operator, a
              logistics carrier, a regulated payment intermediary or a charity.
            </p>
            <nav aria-label="Legal and policies">
              <ul className="flex flex-wrap items-center">
                {footerLegalLinks.map((link, i) => (
                  <li key={link.label} className="flex items-center">
                    {link.button ? (
                      <button
                        type="button"
                        className="min-h-9 rounded-md px-2 py-[9.5px] text-[13.1px] text-(--f-text) transition-colors hover:text-(--f-head)"
                      >
                        {link.label}
                      </button>
                    ) : (
                      <Link
                        href={link.href}
                        className="flex min-h-9 items-center rounded-md px-2 py-[7px] text-[13.1px] leading-[20.34px] text-(--f-text) transition-colors hover:text-(--f-head)"
                      >
                        {link.label}
                      </Link>
                    )}
                    {i < footerLegalLinks.length - 1 && (
                      <span aria-hidden="true" className="px-px text-base leading-[24.8px] text-(--f-dot)">
                        ·
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
            <div className="flex flex-col gap-2 border-t border-(--f-line) pt-6">
              <p className="text-[13.1px] leading-[20.99px] text-(--f-text)">
                © {new Date().getFullYear()} <span className="font-semibold text-(--f-head)">Zoiko Supply Group Inc.</span>{" "}
                All rights reserved. Zoiko Surplus is a platform within Zoiko Supply Group Inc., a Zoiko Group
                company.
              </p>
              <p className="max-w-[632px] text-[12.2px] leading-[19.46px] text-(--f-note)">
                Global HQ: 1401 21st Street, Suite R, Sacramento, CA 95811, USA · European HQ: 167–169 Great
                Portland Street, 5th Floor, London W1W 5PF, United Kingdom.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
