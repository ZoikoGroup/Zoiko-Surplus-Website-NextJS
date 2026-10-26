import Image from "next/image";
import Link from "next/link";
import DropdownPanel from "./DropdownPanel";
import { companyMenu } from "@/lib/site";

const dropdownImg = "/images/header/dropdown";

export default function CompanyMenu({ onNavigate }: { onNavigate: () => void }) {
  const { overviewLink, sectionLabel, links, card } = companyMenu;

  return (
    <DropdownPanel id="company-menu" label="Company" desktopTop="md:top-[107px]" desktopOffset="lg:left-[calc(50%+71px)]"
      padding="px-7 pt-8 pb-[19.23px] md:pb-7">
      <Link
        href={overviewLink.href}
        onClick={onNavigate}
        className="flex w-full items-center gap-1.5 text-[12.8px] leading-[19.84px] font-semibold tracking-[0.256px] text-[#ad422f] md:gap-4 md:border-b md:border-[rgba(52,33,63,0.45)] md:pb-4 md:text-[15px] md:text-[#1e2126]"
      >
        {overviewLink.label}
        <Image src={`${dropdownImg}/arrow-mobile.svg`} alt="" width={14} height={14} className="md:hidden" />
        <Image src={`${dropdownImg}/arrow-desktop.svg`} alt="" width={14} height={14} className="hidden md:block" />
      </Link>

      <div className="flex flex-col gap-[22px] md:grid md:grid-cols-[minmax(0,1.2fr)_minmax(0,1.05fr)]">
        <div className="flex flex-col pt-px">
          <p className="pb-[0.84px] text-[11.5px] leading-[17.86px] font-bold tracking-[1.152px] text-[#6e6876] uppercase md:text-[#4f647a]">
            {sectionLabel}
          </p>
          <ul className="flex flex-col">
            {links.map((link, i) => (
              <li key={link.title}>
                <Link
                  href={link.href}
                  onClick={onNavigate}
                  className={`flex min-h-11 flex-col gap-px rounded-[10px] px-3 pb-2.5 ${i === 0 ? "pt-[18px]" : "pt-2.5"}`}
                >
                  <span className="text-[15.6px] leading-[24.18px] font-semibold text-[#34213f] md:text-[#1e2126]">
                    {link.title}
                  </span>
                  <span className="text-[13.1px] leading-[18.37px] text-[#5a5560] md:text-[#4f647a]">
                    {link.description}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative h-[219.47px] rounded-[14px] border border-[#e8e1da] bg-[#fcfcff] md:h-[285.97px] md:bg-[#0e203d]">
          <span className="absolute top-5 left-5 flex size-10 items-center justify-center rounded-[11px] bg-[#34213f] md:bg-[#f5e7c9]">
            <Image src={`${dropdownImg}/company-icon-mobile.svg`} alt="" width={20} height={20} className="md:hidden" />
            <Image
              src={`${dropdownImg}/company-icon-desktop.svg`}
              alt=""
              width={20}
              height={20}
              className="hidden md:block"
            />
          </span>
          <p className="absolute inset-x-5 top-[72px] text-[16.8px] leading-[19.32px] font-semibold tracking-[-0.17px] whitespace-nowrap text-[#34213f] md:text-white">
            {card.title}
          </p>
          <p className="absolute inset-x-5 top-[102.4px] text-[13.4px] leading-[20.16px] text-[#5a5560] md:text-[#eaf1f8]">
            {card.description}
          </p>
          <Link
            href={card.link.href}
            onClick={onNavigate}
            className="absolute inset-x-5 bottom-5 flex items-center justify-start gap-1.5 text-sm leading-[21.7px] font-semibold text-[#ad422f] md:justify-between md:border-t md:border-[#fcfcff] md:pt-2 md:text-white"
          >
            {card.link.label}
            <Image
              src={`${dropdownImg}/company-arrow-mobile.svg`}
              alt=""
              width={15}
              height={15}
              className="md:hidden"
            />
            <Image
              src={`${dropdownImg}/company-arrow-white-desktop.svg`}
              alt=""
              width={15}
              height={15}
              className="hidden md:block"
            />
          </Link>
        </div>
      </div>
    </DropdownPanel>
  );
}
