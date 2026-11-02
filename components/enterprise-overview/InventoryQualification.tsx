import Image from "next/image";

const IMG = "/images/enterprise-overview/inventory-qualification";

type Field = {
  label: string;
  icon: string;
  desktopValue: string;
  mobileValue: string;
  /** Desktop-only cell height / row alignment (the Figma grid is irregular). */
  desktopClass?: string;
};

const fields: Field[] = [
  { label: "Lot reference", icon: "lot-reference", desktopValue: "‹pseudonym›", mobileValue: "‹pseudonym›" },
  { label: "Category", icon: "category", desktopValue: "‹category›", mobileValue: "‹category›" },
  { label: "Count / units", icon: "count-units", desktopValue: "‹where authorized›", mobileValue: "‹where authorized›" },
  { label: "Condition code", icon: "condition-code", desktopValue: "‹grade›", mobileValue: "‹grade›" },
  { label: "Provenance", icon: "provenance", desktopValue: "‹declaration›", mobileValue: "‹declaration›" },
  { label: "Owner authority", icon: "owner-authority", desktopValue: "‹confirmed›", mobileValue: "‹confirmed›" },
  { label: "Safety declaration", icon: "safety-declaration", desktopValue: "‹category rule›", mobileValue: "‹category rule›" },
  {
    label: "Media permissions",
    icon: "media-permissions",
    desktopValue: "<controlled›",
    mobileValue: "‹seller-controlled›",
    desktopClass: "md:h-12",
  },
  {
    label: "Review status",
    icon: "review-status",
    desktopValue: "‹pending /cleared›",
    mobileValue: "‹pending / cleared›",
  },
  {
    label: "Updated",
    icon: "updated",
    desktopValue: "‹timestamp›",
    mobileValue: "‹timestamp›",
    desktopClass: "md:h-12",
  },
];

export default function InventoryQualification() {
  return (
    <section
      aria-labelledby="inventory-qualification-heading"
      className="bg-white font-[family-name:var(--font-hanken)] md:px-10 md:py-24 lg:px-16 xl:px-24"
    >
      <div className="mx-auto flex w-full max-w-[1248px] flex-col gap-12 px-4 md:gap-14 md:px-0">
        <div className="flex flex-col gap-4 pt-1.5">
          {/* Mobile eyebrow */}
          <p className="flex items-center gap-2.5 text-[13px] leading-[20.15px] font-semibold tracking-[1.82px] text-[#14916f] uppercase md:hidden">
            <span className="w-[18.2px] text-[#13294b] opacity-50">04</span>
            <span aria-hidden="true" className="h-px w-7 bg-[#14916f] opacity-50" />
            Inventory qualification
          </p>
          {/* Desktop eyebrow */}
          <p className="hidden items-center py-2 font-[family-name:var(--font-sora)] md:flex">
            <span className="flex h-[21px] w-[75px] items-center">
              <span className="w-[29.13px] text-[13px] leading-[20.8px] font-black tracking-[1.82px] text-[#13294b]">
                04
              </span>
              <span aria-hidden="true" className="h-0.5 w-[46px] bg-[#d3dde8]" />
            </span>
            <span className="ml-[7px] text-xs leading-[19.2px] font-semibold tracking-[1.68px] text-[#926016] uppercase">
              Inventory qualification
            </span>
          </p>

          <div className="flex flex-col gap-4 pt-[30.8px] md:pt-0">
            <h2
              id="inventory-qualification-heading"
              className="text-[30.6px] leading-[33.63px] font-bold tracking-[-0.608px] text-[#13294b] md:max-w-[957px] md:text-[44px] md:leading-[48.4px] md:tracking-[-0.88px]"
            >
              A qualified lot, described <br className="md:hidden" />
              consistently.
            </h2>
            <p className="text-[17.9px] leading-[23.24px] text-[#5a6b7b] md:max-w-[780px] md:text-xl md:leading-[26px]">
              <span className="md:hidden">
                The fields a lot record could carry — <br />
                condition, provenance, ownership authority <br />
                and category constraints. None of these are <br />
                public lot data.
              </span>
              <span className="hidden md:inline">
                The fields a lot record could carry — condition, provenance, ownership authority and category
                constraints. None of these are public lot data.
              </span>
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-7 md:flex-row md:items-start md:gap-14">
          <div className="relative aspect-[358/268.5] w-full overflow-hidden rounded-[20px] bg-[linear-gradient(150deg,#14294a,#0c2140)] md:aspect-[552/414] md:min-w-0 md:flex-1">
            <Image
              src={`${IMG}/warehouse-aisle.webp`}
              alt="Tall warehouse racking aisle stacked with wrapped pallets of inventory"
              fill
              sizes="(min-width: 1440px) 596px, (min-width: 768px) 45vw, 358px"
              className="object-cover"
            />
          </div>

          <div className="flex flex-col gap-3 md:min-w-0 md:flex-1">
            <ul className="grid grid-cols-1 gap-2.5 md:grid-cols-2 md:grid-rows-[45.81px_67.62px_45.81px_67.62px_67.62px] md:content-start">
              {fields.map((f) => (
                <li
                  key={f.label}
                  className={`flex h-[45.81px] items-center justify-between gap-3 rounded-[10px] border border-[#e6e8ec] bg-white px-[15px] md:h-[46px] md:self-start md:gap-5 ${f.desktopClass ?? ""}`}
                >
                  <span className="flex shrink-0 items-center gap-2 text-[14.1px] leading-[21.82px] font-medium whitespace-nowrap text-[#13294b]">
                    <Image src={`${IMG}/${f.icon}.svg`} alt="" width={18} height={18} className="shrink-0" />
                    {f.label}
                  </span>
                  <span className="font-[Consolas,ui-monospace,monospace] text-[12.5px] leading-[19.34px] whitespace-nowrap text-[#7c8894]">
                    <span className="md:hidden">{f.mobileValue}</span>
                    <span className="hidden md:inline">{f.desktopValue}</span>
                  </span>
                </li>
              ))}
            </ul>

            <div className="flex gap-2 border-t border-[#e6e8ec] pt-3 text-[12.8px] leading-[19.2px] text-[#5a6b7b]">
              <Image src={`${IMG}/info.svg`} alt="" width={15} height={15} className="mt-px shrink-0 self-start" />
              <p>
                <span className="md:hidden">
                  Illustrative field layout only — no live lot data, brands, <br />
                  quantities or prices are shown.
                </span>
                <span className="hidden md:inline">
                  Illustrative field layout only — no live lot data, brands, quantities or prices are shown.
                </span>
              </p>
            </div>

            <div className="flex pt-1.5">
              <a
                href="#"
                className="inline-flex h-[39px] items-center gap-1.5 rounded-full border border-[#e6e8ec] bg-[#f5f7fa] pr-[15.4px] pl-3.5 text-[13.6px] leading-[21px] font-semibold text-[#13294b]"
              >
                <Image src={`${IMG}/link-arrow.svg`} alt="" width={14} height={14} className="shrink-0" />
                Explore Inventory Qualification
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
