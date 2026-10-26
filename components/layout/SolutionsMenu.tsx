import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import DropdownPanel from "./DropdownPanel";
import { solutionsMenu } from "@/lib/site";

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

export default function SolutionsMenu({ onNavigate }: { onNavigate: () => void }) {
  const { groups, featured, bottomLinks } = solutionsMenu;

  return (
    <DropdownPanel
      id="solutions-menu"
      label="Solutions"
      desktopTop="md:top-[109px]"
      desktopOffset="lg:left-[calc(50%+71px)]"
      padding="p-7"
      gap="gap-5"
    >
      <div className="flex flex-col gap-[22px] md:grid md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1.05fr)]">
        {groups.map((group) => (
          <div key={group.title} className="flex flex-col pt-1 md:gap-4 md:self-start md:pt-0">
            <div className="flex flex-col">
              <Link
                href={group.href}
                onClick={onNavigate}
                className="flex h-[19.83px] w-fit items-center gap-1.5 text-[12.8px] leading-[19.84px] font-semibold tracking-[0.256px] text-[#ad422f] md:text-[#926016]"
              >
                {group.title}
                <Image src={`${dropdownImg}/arrow-mobile.svg`} alt="" width={14} height={14} className="md:hidden" />
                <Image
                  src={`${dropdownImg}/solutions-group-arrow-desktop.svg`}
                  alt=""
                  width={14}
                  height={14}
                  className="hidden md:block"
                />
              </Link>
              <p className="pt-[0.915px] pb-[0.745px] text-[12.8px] leading-[19.84px] font-medium text-[#5a5560]">
                {group.description}
              </p>
            </div>
            <ul className="flex flex-col">
              {group.links.map((link, i) => (
                <li key={link.title}>
                  <Link
                    href={link.href}
                    onClick={onNavigate}
                    className={`flex min-h-11 flex-col gap-px rounded-[10px] px-3 pb-2.5 md:pr-3 md:pl-0 md:pt-2.5 ${i === 0 ? "pt-[18px]" : "pt-2.5"}`}
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

        <div className="relative h-[239.63px] rounded-[14px] border border-[#e8e1da] bg-[#fcfcff] md:h-[322.2px]">
          <span className="absolute top-5 left-5 flex size-10 items-center justify-center rounded-[11px] bg-[#34213f] md:bg-[#1e2126]">
            <Image src={`${dropdownImg}/solutions-feature-icon.svg`} alt="" width={20} height={20} />
          </span>
          <p className="absolute inset-x-5 top-[72px] text-[16.8px] leading-[19.32px] font-semibold tracking-[-0.17px] whitespace-nowrap text-[#34213f] md:text-[#1e2126]">
            {featured.title}
          </p>
          <p className="absolute inset-x-5 top-[102.54px] text-[13.4px] leading-[20.16px] whitespace-nowrap text-[#5a5560]">
            <span className="md:hidden">
              <Lines lines={featured.descriptionMobile} />
            </span>
            <span className="hidden md:inline">
              <Lines lines={featured.descriptionDesktop} />
            </span>
          </p>
          <Link
            href={featured.link.href}
            onClick={onNavigate}
            className="absolute bottom-5 left-5 flex items-center gap-1.5 text-sm leading-[21.7px] font-semibold text-[#ad422f] md:text-[#926016]"
          >
            {featured.link.label}
            <Image src={`${dropdownImg}/company-arrow-mobile.svg`} alt="" width={15} height={15} className="md:hidden" />
            <Image
              src={`${dropdownImg}/solutions-feature-arrow-desktop.svg`}
              alt=""
              width={15}
              height={15}
              className="hidden md:block"
            />
          </Link>
        </div>
      </div>

      <div className="flex flex-col gap-3 border-t border-[#e8e1da] pt-[18px] md:flex-row">
        {bottomLinks.map((item) => (
          <Link
            key={item.key}
            href={item.href}
            onClick={onNavigate}
            className="flex min-h-11 flex-1 items-start gap-3 rounded-xl border border-[#e8e1da] bg-white px-3.5 py-3"
          >
            <span className="flex size-[34px] shrink-0 items-center justify-center rounded-[9px] bg-[rgba(52,33,63,0.05)]">
              <Image
                src={`${dropdownImg}/solutions-${item.key}-icon-mobile.svg`}
                alt=""
                width={18}
                height={18}
                className="md:hidden"
              />
              <Image
                src={`${dropdownImg}/solutions-${item.key}-icon-desktop.svg`}
                alt=""
                width={18}
                height={18}
                className="hidden md:block"
              />
            </span>
            <span className="flex flex-col gap-[0.915px]">
              <span className="text-[14.8px] leading-[22.94px] font-semibold whitespace-nowrap text-[#34213f] md:text-[#1e2126]">
                {item.title}
              </span>
              <span className="pb-[0.745px] text-[12.8px] leading-[19.84px] whitespace-nowrap text-[#5a5560]">
                <span className="md:hidden">
                  <Lines lines={item.descriptionMobile} />
                </span>
                <span className="hidden md:inline">
                  <Lines lines={item.descriptionDesktop} />
                </span>
              </span>
            </span>
          </Link>
        ))}
      </div>
    </DropdownPanel>
  );
}
