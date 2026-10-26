import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import DropdownPanel from "./DropdownPanel";
import { resourcesMenu } from "@/lib/site";

const dropdownImg = "/images/header/dropdown";

function Lines({ lines }: { lines: readonly string[] }) {
  return (
    <>
      {lines.map((line, i) => (
        <Fragment key={line}>
          {i > 0 && <br />}
          {line}
        </Fragment>
      ))}
    </>
  );
}

export default function ResourcesMenu({ onNavigate }: { onNavigate: () => void }) {
  const { overviewLink, groups, card } = resourcesMenu;

  return (
    <DropdownPanel
      id="resources-menu"
      label="Resources"
      desktopTop="md:top-[109px]"
      desktopOffset="lg:left-[calc(50%+72px)]"
      padding="px-7 pt-8 pb-[19.23px] md:pb-7"
    >
      <Link
        href={overviewLink.href}
        onClick={onNavigate}
        className="flex w-full items-center gap-1.5 text-[12.8px] leading-[19.84px] font-semibold tracking-[0.256px] text-[#ad422f] md:gap-4 md:border-b md:border-[rgba(52,33,63,0.45)] md:pb-4 md:text-[15px] md:text-[#1e2126]"
      >
        {overviewLink.label}
        <Image src={`${dropdownImg}/arrow-mobile.svg`} alt="" width={14} height={14} className="md:hidden" />
        <Image src={`${dropdownImg}/arrow-desktop.svg`} alt="" width={14} height={14} className="hidden md:block" />
      </Link>

      <div className="flex flex-col gap-[22px] md:grid md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(0,1.05fr)] md:items-start">
        {groups.map((group) => (
          <div key={group.label} className="flex flex-col pt-px">
            <p className="pb-[0.84px] text-[11.5px] leading-[17.86px] font-bold tracking-[1.152px] text-[#6e6876] uppercase">
              {group.label}
            </p>
            <ul className="flex flex-col">
              {group.links.map((link, i) => (
                <li key={link.title}>
                  <Link
                    href={link.href}
                    onClick={onNavigate}
                    className={`flex min-h-11 flex-col gap-px rounded-[10px] px-3 pb-2.5 ${i === 0 ? "pt-[18px]" : "pt-2.5"}`}
                  >
                    <span className="text-[15.6px] leading-[24.18px] font-semibold text-[#34213f] md:text-[#1e2126]">
                      {link.title}
                    </span>
                    <span className="text-[13.1px] leading-[18.37px] text-[#5a5560]">{link.description}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Help card, mobile */}
        <div className="relative h-[259.83px] rounded-[14px] border border-[#e8e1da] bg-[#fcfcff] md:hidden">
          <span className="absolute top-5 left-5 flex items-center rounded-full bg-[rgba(173,66,47,0.1)] px-2.5 pt-1 pb-[5.36px] text-[11.2px] leading-[17.36px] font-bold tracking-[0.896px] text-[#ad422f] uppercase">
            {card.badge}
          </span>
          <p className="absolute inset-x-5 top-[59.36px] text-[16.8px] leading-[19.32px] font-semibold tracking-[-0.17px] whitespace-nowrap text-[#34213f]">
            <Lines lines={card.titleMobile} />
          </p>
          <p className="absolute inset-x-5 top-[109.14px] text-[13.4px] leading-[20.16px] whitespace-nowrap text-[#5a5560]">
            <Lines lines={card.descriptionMobile} />
          </p>
          {card.links.map((link, i) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={onNavigate}
              className={`absolute left-5 flex items-center gap-1.5 text-sm leading-[21.7px] font-semibold text-[#ad422f] ${
                i === 0 ? "bottom-[53.69px]" : "bottom-5"
              }`}
            >
              {link.label}
              <Image src={`${dropdownImg}/company-arrow-mobile.svg`} alt="" width={15} height={15} />
            </Link>
          ))}
        </div>

        {/* Help card, desktop */}
        <div className="hidden min-h-[220.36px] flex-col justify-between self-stretch rounded-[14px] border border-[#e8e1da] bg-[#0e203d] p-[21px] md:flex">
          <div className="flex flex-col items-start gap-4">
            <span className="flex items-center rounded-full bg-white px-2.5 pt-1 pb-[5.36px] text-[11.2px] leading-[17.36px] font-bold tracking-[0.896px] text-[#ad422f] uppercase">
              {card.badge}
            </span>
            <div className="flex flex-col gap-1">
              <p className="text-[16.8px] leading-[19.32px] font-semibold tracking-[-0.17px] whitespace-nowrap text-white">
                <Lines lines={card.titleDesktop} />
              </p>
              <p className="text-[13.4px] leading-[20.16px] whitespace-nowrap text-[#eaf1f8]">
                <Lines lines={card.descriptionDesktop} />
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-1 border-t border-[#fcfcff] pt-2">
            {card.links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={onNavigate}
                className="flex items-center gap-2 text-xs leading-[21.7px] font-semibold text-white"
              >
                {link.label}
                <Image src={`${dropdownImg}/company-arrow-white-desktop.svg`} alt="" width={15} height={15} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </DropdownPanel>
  );
}
