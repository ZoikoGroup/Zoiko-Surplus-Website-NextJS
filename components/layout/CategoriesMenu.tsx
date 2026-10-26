import Image from "next/image";
import Link from "next/link";
import DropdownPanel from "./DropdownPanel";
import { categoryMenu, type CategoryBadge } from "@/lib/site";

const dropdownImg = "/images/header/dropdown";

// The overview badge is orange on desktop and violet on mobile; the other two are shared.
const badgeStyles: Record<CategoryBadge, string> = {
  pilot: "bg-[rgba(173,66,47,0.1)] text-[#ad422f] [--dot:#ad422f]",
  safety: "bg-[#fbe9d9] text-[#8a3f17] [--dot:#f0684f]",
  overview:
    "bg-[rgba(52,33,63,0.05)] text-[#34213f] [--dot:#34213f] md:bg-[rgba(255,149,0,0.18)] md:text-[#ff9500] md:[--dot:#ff9500]",
};

// Renders "\n" in a title as a line break on mobile only.
function Title({ text }: { text: string }) {
  const [first, ...rest] = text.split("\n");
  return (
    <>
      {first}
      {rest.map((part) => (
        <span key={part}>
          <br className="md:hidden" />
          <span className="hidden md:inline"> </span>
          {part}
        </span>
      ))}
    </>
  );
}

export default function CategoriesMenu({ onNavigate }: { onNavigate: () => void }) {
  const { overviewLink, items, all, note } = categoryMenu;

  return (
    <DropdownPanel id="categories-menu" label="Categories" desktopTop="md:top-[105px]" desktopOffset="lg:left-[calc(50%+70px)]">
      <Link
        href={overviewLink.href}
        onClick={onNavigate}
        className="flex w-full items-center gap-1.5 text-[12.8px] leading-[19.84px] font-semibold tracking-[0.256px] text-[#ad422f] md:gap-4 md:border-b md:border-[rgba(52,33,63,0.45)] md:pb-4 md:text-[15px] md:text-[#1e2126]"
      >
        {overviewLink.label}
        <Image src={`${dropdownImg}/arrow-mobile.svg`} alt="" width={14} height={14} className="md:hidden" />
        <Image src={`${dropdownImg}/arrow-desktop.svg`} alt="" width={14} height={14} className="hidden md:block" />
      </Link>

      <ul className="flex flex-col gap-3.5 md:grid md:grid-cols-3">
        {items.map((item) => (
          <li key={item.title}>
            <Link
              href="#"
              onClick={onNavigate}
              className="flex h-full min-h-11 flex-col gap-2 rounded-xl border border-[#e8e1da] bg-white p-4"
            >
              <span className="flex items-center justify-between gap-2.5">
                <span className="text-[15.7px] leading-[18px] font-semibold tracking-[-0.157px] whitespace-nowrap text-[#34213f] md:text-[#1e2126]">
                  <Title text={item.title} />
                </span>
                <span
                  className={`${badgeStyles[item.badge]} flex items-center gap-1.5 rounded-full px-[9px] py-1 text-[10.9px] leading-[16.86px] font-bold tracking-[0.435px] whitespace-nowrap uppercase`}
                >
                  <span className="size-[7px] rounded-[3.5px] bg-(--dot)" />
                  {item.badgeLabel}
                </span>
              </span>
              <span className="text-[13.1px] leading-[19px] text-[#5a5560]">{item.description}</span>
            </Link>
          </li>
        ))}
        <li>
          <Link
            href={all.href}
            onClick={onNavigate}
            className="flex h-full min-h-11 items-center justify-between gap-2.5 rounded-xl border border-[#34213f] bg-[#34213f] p-4 md:gap-9 md:border-[#1e2126] md:bg-[#0c2140]"
          >
            <span className="flex flex-col">
              <span className="text-[15.7px] leading-[18px] font-semibold tracking-[-0.157px] whitespace-nowrap text-white">
                {all.title}
              </span>
              <span className="text-[13.1px] leading-[19px] whitespace-nowrap text-[rgba(250,247,241,0.82)]">
                Full public taxonomy with
                <br className="md:hidden" /> approved filters.
              </span>
            </span>
            <Image src={`${dropdownImg}/arrow-white-mobile.svg`} alt="" width={16.75} height={20} className="h-5 w-[16.75px] md:hidden" />
            <Image
              src={`${dropdownImg}/arrow-white-desktop.svg`}
              alt=""
              width={20}
              height={20}
              className="hidden md:block"
            />
          </Link>
        </li>
        <li className="pt-1 md:col-span-3">
          <p className="flex items-start gap-2.5 rounded-xl border border-dashed border-[#d8cfc6] bg-[#fcfcff] px-3.5 py-3 text-[12.8px] leading-[19.84px] text-[#5a5560] md:items-center">
            <Image
              src={`${dropdownImg}/info-mobile.svg`}
              alt=""
              width={16}
              height={16}
              className="mt-0.5 shrink-0 md:hidden"
            />
            <Image
              src={`${dropdownImg}/info-desktop.svg`}
              alt=""
              width={16}
              height={16}
              className="hidden shrink-0 md:block"
            />
            {note}
          </p>
        </li>
      </ul>
    </DropdownPanel>
  );
}
