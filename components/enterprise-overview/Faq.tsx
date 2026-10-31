import FaqItem from "./FaqItem";

// Answers are neutral placeholders (the Figma design only shows collapsed rows).
// "|" = line break in the mobile layout.
const faqs = {
  owner: { question: "Is Zoiko the inventory owner?", answer: "No. Zoiko provides orchestration, governance and exchange infrastructure; sellers retain ownership of their goods." },
  food: { question: "Is food enabled?", answer: "Food and grocery surplus is handled through category-specific eligibility and compliance checks, where permitted." },
  markets: { question: "Are all markets active?", answer: "No. Availability varies by jurisdiction, category and approved transaction corridor." },
  delivery: { question: "Who handles delivery?", answer: "Logistics and fulfilment are carried out through approved partners rather than by Zoiko directly." },
  verification: { question: "What does verification mean?", answer: "Participants are qualified against defined criteria before they can see inventory or transact." },
  recovery: { question: "Can recovery be guaranteed?", answer: "No. Recovery outcomes depend on the goods, markets and parties involved." },
  routes: { question: "Who chooses the disposition|routes?", answer: "Sellers choose from the approved disposition routes available for their goods and markets." },
  buyers: { question: "Do buyers see all inventory?", answer: "No. Visibility is limited to verified buyers within their approved markets and categories." },
};

// Each viewport renders its own order from the Figma frames.
const desktopCols = [
  [faqs.owner, faqs.markets, faqs.verification, faqs.routes],
  [faqs.food, faqs.delivery, faqs.recovery, faqs.buyers],
];

const mobileList = [
  faqs.owner,
  faqs.routes,
  faqs.buyers,
  faqs.verification,
  faqs.markets,
  faqs.food,
  faqs.delivery,
  faqs.recovery,
];

export default function Faq() {
  return (
    <section className="bg-[#fcfcff] px-4 font-[family-name:var(--font-hanken)] max-md:bg-transparent md:p-24 md:font-[family-name:var(--font-sora)]">
      <div className="mx-auto max-w-[1248px]">
        <div className="flex flex-col items-center gap-[46.8px] pt-[6px] md:max-w-[852.96px] md:items-start md:gap-4 md:pt-[5.5px]">
          <div className="flex items-center">
            <span className="w-[18.2px] text-center text-[13px] leading-[20.15px] font-semibold tracking-[1.82px] text-[#0c2140]/50 uppercase md:hidden">
              14
            </span>
            <span aria-hidden="true" className="ml-[10px] h-px w-[28px] bg-[#0f7a60]/50 md:hidden" />
            <span className="ml-[10px] text-[13px] leading-[20.15px] font-semibold tracking-[1.82px] text-[#0f7a60] uppercase md:hidden">
              Questions
            </span>
            <span className="hidden w-[22.3px] text-[13px] leading-[20.8px] font-black tracking-[1.82px] text-[#0c2140] md:block">
              16
            </span>
            <span aria-hidden="true" className="ml-[10px] hidden h-[2px] w-[46px] bg-[#d3dde8] md:block" />
            <span className="ml-[10px] hidden text-xs leading-[19.2px] font-semibold tracking-[1.68px] text-[#926016] uppercase md:block">
              FAQ
            </span>
          </div>
          <h2 className="text-center text-[30.6px] leading-[33.63px] font-bold tracking-[-0.608px] text-[#0c2140] md:text-left md:text-[44px] md:leading-[49.28px] md:font-semibold md:tracking-[-0.66px]">
            Questions, answered
            <br className="md:hidden" /> plainly.
          </h2>
        </div>

        {/* Mobile */}
        <div className="mt-12 flex max-w-[860px] flex-col gap-[10px] md:hidden">
          {mobileList.map((faq) => (
            <FaqItem key={faq.question} {...faq} />
          ))}
        </div>

        {/* Desktop */}
        <div className="mt-14 hidden grid-cols-2 gap-6 md:grid">
          {desktopCols.map((col, c) => (
            <div key={c} className="flex flex-col gap-6">
              {col.map((faq) => (
                <FaqItem key={faq.question} {...faq} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
